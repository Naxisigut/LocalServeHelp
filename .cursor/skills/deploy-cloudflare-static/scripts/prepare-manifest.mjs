#!/usr/bin/env node
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, realpathSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { extname, join, relative, resolve } from "node:path";

const types = {
  html: "text/html; charset=utf-8",
  js: "text/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml",
  ico: "image/x-icon",
  json: "application/json",
  txt: "text/plain; charset=utf-8",
  woff: "font/woff",
  woff2: "font/woff2",
};

const args = parseArgs(process.argv.slice(2));
const root = resolve(args.root || ".");
const outDir = resolveOutDir(root, args["out-dir"] || args.outDir);

const allow = collectAllowlisted(root);
if (allow.length === 0) {
  throw new Error("no site files found (index.html, guide.html, assets/)");
}

const manifest = {};
const payloads = {};
for (const { rel, full } of allow) {
  const buf = readFileSync(full);
  const ext = extname(rel).slice(1).toLowerCase();
  const hash = createHash("sha256")
    .update(buf.toString("base64") + ext)
    .digest("hex")
    .slice(0, 32);
  const path = "/" + rel.replaceAll("\\", "/");
  manifest[path] = { hash, size: buf.length };
  payloads[hash] = {
    path,
    contentType: types[ext] || "application/octet-stream",
    base64: buf.toString("base64"),
  };
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 2));
writeFileSync(join(outDir, "payloads.json"), JSON.stringify(payloads));
const summary = {
  outDir,
  count: allow.length,
  files: Object.keys(manifest),
  bytes: allow.reduce((n, f) => n + statSync(f.full).size, 0),
};
writeFileSync(join(outDir, "summary.json"), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));

function collectAllowlisted(dir) {
  const files = [];
  for (const name of ["index.html", "guide.html"]) {
    const full = join(dir, name);
    try {
      if (statSync(full).isFile()) files.push({ rel: name, full });
    } catch {
      throw new Error(`missing ${name}`);
    }
  }
  const assets = join(dir, "assets");
  files.push(...walk(assets, "assets"));
  return files;
}

function walk(dir, base) {
  const out = [];
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    throw new Error("missing assets/");
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const rel = join(base, entry.name).replaceAll("\\", "/");
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full, rel));
    else if (entry.isFile()) out.push({ rel, full });
  }
  return out;
}

function resolveOutDir(repoRoot, requested) {
  if (!requested) {
    return mkdtempSync(join(tmpdir(), "localserve-deploy-"));
  }
  const resolved = resolve(requested);
  mkdirSync(resolved, { recursive: true });
  const repo = realpathSync(repoRoot);
  let out;
  try {
    out = realpathSync(resolved);
  } catch {
    out = resolved;
  }
  const rel = relative(repo, out);
  if (rel === "" || (!rel.startsWith("..") && !rel.startsWith("/"))) {
    throw new Error(
      `refusing to write deploy payloads inside the repo (${rel || "."}); pass --out-dir under os.tmpdir()`,
    );
  }
  return resolved;
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) out[key] = true;
    else {
      out[key] = next;
      i++;
    }
  }
  return out;
}
