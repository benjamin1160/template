// Regenerates registry/manifest.json from the TS registry sources.
// Run after any change to registry/*.ts: node scripts/build-registry.mjs
import fs from "node:fs";
import { cleanup, compileRegistry, MANIFEST_PATH, manifestJson } from "./registry-lib.mjs";

try {
  const { manifest } = compileRegistry();
  fs.writeFileSync(MANIFEST_PATH, manifestJson(manifest));
  console.log(
    `registry/manifest.json written — v${manifest.registryVersion}, ` +
      `${manifest.sections.length} sections, ` +
      `${manifest.sections.reduce((n, s) => n + s.variants.length, 0)} variants, ` +
      `${manifest.archetypes.length} archetypes`,
  );
} finally {
  cleanup();
}
