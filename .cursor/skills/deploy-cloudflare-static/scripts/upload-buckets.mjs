#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const args = parseArgs(process.argv.slice(2));
const accountId = required(args, "account-id");
const jwtFile = resolve(required(args, "jwt-file"));
const payloadsFile = resolve(required(args, "payloads"));
const bucketsFile = resolve(required(args, "buckets-file"));
const completionOut = args["completion-out"]
  ? resolve(args["completion-out"])
  : null;

const payloads = JSON.parse(readFileSync(payloadsFile, "utf8"));
const buckets = JSON.parse(readFileSync(bucketsFile, "utf8"));
if (!Array.isArray(buckets)) throw new Error("buckets.json must be an array");

let auth = readFileSync(jwtFile, "utf8").trim();
if (!auth) throw new Error("empty jwt file");
let completionJwt = auth;

if (buckets.length === 0) {
  if (completionOut) writeFileSync(completionOut, completionJwt);
  console.log(JSON.stringify({ skipped: true, reason: "empty buckets" }));
  process.exit(0);
}

let gotCompletionJwt = false;

for (let i = 0; i < buckets.length; i++) {
  const bucket = buckets[i];
  if (!Array.isArray(bucket) || bucket.length === 0) {
    throw new Error(`bucket ${i} is empty`);
  }
  const form = new FormData();
  for (const hash of bucket) {
    const file = payloads[hash];
    if (!file) throw new Error("missing payload " + hash);
    form.append(hash, new Blob([file.base64], { type: file.contentType }), hash);
  }
  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/workers/assets/upload?base64=true`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${auth}` },
      body: form,
    },
  );
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text.slice(0, 500) };
  }
  if (!res.ok) {
    console.error(JSON.stringify({ bucket: i + 1, status: res.status, body }, null, 2));
    process.exit(1);
  }
  const nextJwt = body.result?.jwt || body.jwt;
  if (nextJwt) {
    auth = nextJwt;
    completionJwt = nextJwt;
    gotCompletionJwt = true;
  }
  console.log(
    JSON.stringify({
      bucket: i + 1,
      status: res.status,
      hashes: bucket,
      hasJwt: Boolean(nextJwt),
      errors: body.errors || null,
    }),
  );
}

if (!gotCompletionJwt) {
  throw new Error(
    "uploaded buckets but no completion JWT in responses; do not PUT the Worker",
  );
}

if (completionOut) writeFileSync(completionOut, completionJwt);
console.log("completion_saved");

function required(map, key) {
  const v = map[key];
  if (!v || v === true) throw new Error("missing --" + key);
  return v;
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
