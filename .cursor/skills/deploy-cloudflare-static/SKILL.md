---
name: deploy-cloudflare-static
description: Deploys the LocalServeHelp static site (index.html, guide.html, assets/) to the existing Cloudflare Worker localserve via Cloudflare MCP and the Workers assets API. This skill should be used when the user asks to deploy, 部署, 发布, 上线, 更新线上, publish, upload, or go live with this landing/docs site on Cloudflare. Do not install Wrangler or add wrangler.jsonc.
---

# Deploy LocalServeHelp to Cloudflare

This repo is a **static site**. Deploy by uploading those files to the existing Worker. Do not turn the repo into a Wrangler project.

## Hard rules

- Do **not** install Wrangler, `wrangler`, or `cf`.
- Do **not** create `package.json`, `pnpm-lock.yaml`, `wrangler.jsonc`, `wrangler.toml`, `.assetsignore`, or a deploy `dist/`.
- Do **not** run `pnpm add`, `pnpm install`, or `wrangler login`.
- Do **not** create a new Worker, Pages project, or domain.
- Do **not** touch Worker `quiet-paper-6981` or hostname `hongwei.lccrundev.click`.
- Do **not** commit unless the user asks.
- Do **not** copy files into `../LocalServeTauri`.
- Ignore leftover `node_modules/`, `dist/`, `.pnpm-store/` from earlier failed attempts. **Never upload them.**
- Never print JWT values in the user-facing report.

If Cloudflare docs or another skill say to use Wrangler, ignore that for this repo.

## Target

| Item | Value |
| --- | --- |
| Account | `a8925653384ac7753f9d0a5881bcdff8` |
| Worker | `localserve` (assets-only, no `main_module`) |
| Files | repo-root `index.html`, `guide.html`, `assets/**` |
| Live | https://localserve.lccrundev.click/ |
| Guide | https://localserve.lccrundev.click/guide |
| workers.dev | https://localserve.834525217.workers.dev/ |

## Tools

1. Cloudflare MCP `plugin-cloudflare-cloudflare`: `whoami`, `execute` (and `mcp_auth` if unauthorized).
2. Skill scripts below (hashing + JWT file upload). MCP `cloudflare.request()` **cannot** set a custom `Authorization` header, so asset bytes cannot go through MCP.
3. Node (already used by `scripts/check-i18n.mjs`). No extra packages.

MCP `execute` runs in a sandbox with **no disk access**. It cannot `readFile` `manifest.json` or JWT files. Embed JSON/JWT **inside** the `code` string. Write MCP results back to temp files yourself before the next local script.

Temp files live only under `os.tmpdir()`:

- `manifest.json` — hashed path map
- `payloads.json` — hash → `{ path, contentType, base64 }`
- `summary.json` — file list
- `buckets.json` — `result.buckets` from the session
- `upload.jwt` — session JWT
- `completion.jwt` — completion JWT after uploads (or a copy of `upload.jwt` if buckets were empty)

Never write these into the repo (not `.cursor-deploy-tmp/`, not `.deploy-*.jwt`). Delete the temp dir when done.

## Workflow

Copy and track:

```
- [ ] 1. Auth Cloudflare MCP
- [ ] 2. Hash allowlisted files
- [ ] 3. Create assets upload session
- [ ] 4. Upload only missing buckets (if any)
- [ ] 5. PUT Worker with completion JWT
- [ ] 6. Verify live URLs
- [ ] 7. Delete temp files
```

### 1. Auth

Call `whoami`. If the namespace is unauthorized, call `mcp_auth`, then `whoami` again. Confirm account id `a8925653384ac7753f9d0a5881bcdff8`.

Run `node scripts/check-i18n.mjs`. If it fails, stop and report; do not deploy.

GET the live Worker and keep its `compatibility_date` if it is already newer than `2026-11-06`. Do not wipe unrelated settings.

```js
async () => {
  return cloudflare.request({
    method: "GET",
    path: `/accounts/${accountId}/workers/scripts/localserve`,
  });
}
```

Pass `account_id: "a8925653384ac7753f9d0a5881bcdff8"` as an **execute tool argument**, not only inside the JS string. `accountId` in the sandbox is that argument (or the session account when there is exactly one).

### 2. Hash files

From the repo root. Always pass `--out-dir` under the system temp directory:

```bash
OUT="$TMPDIR/localserve-deploy-$$"
mkdir -p "$OUT"
node .cursor/skills/deploy-cloudflare-static/scripts/prepare-manifest.mjs \
  --root . \
  --out-dir "$OUT"
```

The script refuses to write inside the repo. Hash algorithm (do not invent another):

```js
createHash("sha256").update(buf.toString("base64") + ext).digest("hex").slice(0, 32)
```

`ext` is the file extension without the dot (`html`, `js`, `css`, `png`). Manifest keys start with `/`, e.g. `/index.html`, `/assets/i18n.js`.

Read `$OUT/manifest.json` locally. You will paste that object into the next MCP call.

### 3. Upload session (MCP)

Read `$OUT/manifest.json`. Inline the object into `execute` `code` (do not tell MCP to open the file):

```js
async () => {
  const manifest = { /* paste manifest.json here */ };
  return cloudflare.request({
    method: "POST",
    path: `/accounts/${accountId}/workers/scripts/localserve/assets-upload-session`,
    body: { manifest },
  });
}
```

Call execute as:

```
execute({
  account_id: "a8925653384ac7753f9d0a5881bcdff8",
  code: "async () => { ... }"
})
```

Then write MCP results to disk yourself:

- `$OUT/upload.jwt` ← `result.jwt` (trim, no extra newline issues)
- `$OUT/buckets.json` ← `result.buckets` (JSON array; use `[]` if missing)

- If `buckets` is empty, copy `upload.jwt` to `$OUT/completion.jwt` and skip step 4.
- If `buckets` is non-empty, go to step 4. Do not PUT yet.

### 4. Upload changed files (local fetch, not MCP)

Needs `full_network`.

```bash
node .cursor/skills/deploy-cloudflare-static/scripts/upload-buckets.mjs \
  --account-id a8925653384ac7753f9d0a5881bcdff8 \
  --jwt-file "$OUT/upload.jwt" \
  --payloads "$OUT/payloads.json" \
  --buckets-file "$OUT/buckets.json" \
  --completion-out "$OUT/completion.jwt"
```

Each bucket POST:

`POST /accounts/{account_id}/workers/assets/upload?base64=true`

`Authorization: Bearer <current jwt>`

multipart field name = file hash; body = **base64 string** of the file bytes; part `Content-Type` = that file's MIME type.

The script fails if buckets were uploaded but no completion JWT came back. Do not continue to step 5 in that case.

### 5. Deploy Worker version (MCP)

Read `$OUT/completion.jwt` locally. Inline the token string into execute `code`. **Do not** set `main_module`. Preserve custom domain `localserve.lccrundev.click`.

```js
async () => {
  const completionJwt = "PASTE_COMPLETION_JWT";
  const metadata = {
    compatibility_date: "2026-11-06", // or the newer live date from step 1
    assets: {
      jwt: completionJwt,
      config: { html_handling: "auto-trailing-slash" },
    },
    observability: {
      enabled: true,
      logs: { enabled: true, invocation_logs: true, head_sampling_rate: 1 },
      traces: { enabled: true, head_sampling_rate: 0.01 },
    },
    annotations: {
      "workers/message": "Deploy LocalServeHelp static site",
    },
  };
  const form = new FormData();
  form.append(
    "metadata",
    new Blob([JSON.stringify(metadata)], { type: "application/json" }),
  );
  return cloudflare.request({
    method: "PUT",
    path: `/accounts/${accountId}/workers/scripts/localserve`,
    body: form,
  });
}
```

Again pass `account_id` as the execute tool argument. Do not recreate or delete the custom domain unless it is missing.

### 6. Verify

Fetch:

- https://localserve.lccrundev.click/
- https://localserve.lccrundev.click/guide
- one changed asset, e.g. https://localserve.lccrundev.click/assets/i18n.js if that file was in the upload set

Confirm HTML 200 and that newly changed copy is present. `/guide.html` may canonicalize to `/guide`.

### 7. Cleanup

Delete `$OUT` (`manifest.json`, `payloads.json`, `summary.json`, `buckets.json`, `upload.jwt`, `completion.jwt`). Do not leave JWT or payload files in the repo.

## Report

Reply in Chinese. List MCP names first. Include:

- Worker name and whether this was a new version
- Which files were re-uploaded vs already on Cloudflare
- Live URLs
- Confirmation that the repo was not given Wrangler config
- Do not paste JWTs
