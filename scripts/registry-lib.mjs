// Shared helper for build-registry.mjs / check-registry.mjs.
// Compiles the registry TS sources to a temp dir with tsc (registry files
// only use type-level imports outside registry/, so the compiled graph is
// dependency-free) and returns the manifest object.
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TMP = path.join(ROOT, ".registry-tmp");

export function compileRegistry() {
  fs.rmSync(TMP, { recursive: true, force: true });
  execFileSync(
    process.platform === "win32" ? "npx.cmd" : "npx",
    [
      "tsc",
      "registry/manifest-source.ts",
      "registry/fixtures.ts",
      "--outDir",
      ".registry-tmp",
      "--module",
      "commonjs",
      "--target",
      "es2022",
      "--moduleResolution",
      "node",
      "--esModuleInterop",
      "--skipLibCheck",
    ],
    { cwd: ROOT, stdio: ["ignore", "pipe", "inherit"] },
  );
  const require = createRequire(import.meta.url);
  const manifestSource = require(path.join(TMP, "registry", "manifest-source.js"));
  const fixtures = require(path.join(TMP, "registry", "fixtures.js"));
  return { manifest: manifestSource.buildManifest(), fixtures: fixtures.FIXTURES };
}

export function cleanup() {
  fs.rmSync(TMP, { recursive: true, force: true });
}

export function manifestJson(manifest) {
  return JSON.stringify(manifest, null, 2) + "\n";
}

export const MANIFEST_PATH = path.join(ROOT, "registry", "manifest.json");
