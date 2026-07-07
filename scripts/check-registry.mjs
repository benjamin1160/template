// Registry integrity check, run in CI and before pushing registry changes.
// Verifies that the committed manifest, the TS registry sources, the
// section-map wiring, and the component files on disk all agree.
import fs from "node:fs";
import path from "node:path";
import { cleanup, compileRegistry, MANIFEST_PATH, manifestJson, ROOT } from "./registry-lib.mjs";

const errors = [];
const fail = (msg) => errors.push(msg);

try {
  const { manifest, fixtures } = compileRegistry();

  // 1. Committed manifest.json matches a fresh build.
  const committed = fs.existsSync(MANIFEST_PATH)
    ? fs.readFileSync(MANIFEST_PATH, "utf8")
    : null;
  if (committed === null) {
    fail("registry/manifest.json missing — run: node scripts/build-registry.mjs");
  } else if (committed !== manifestJson(manifest)) {
    fail("registry/manifest.json is stale — run: node scripts/build-registry.mjs");
  }

  // 2. Variant ids are well-formed and unique.
  const variantIds = new Set();
  for (const section of manifest.sections) {
    const variantNames = new Set();
    for (const variant of section.variants) {
      if (variant.id !== `${variant.section}/${variant.variant}`)
        fail(`variant id "${variant.id}" ≠ "${variant.section}/${variant.variant}"`);
      if (variant.section !== section.type)
        fail(`variant "${variant.id}" registered under section "${section.type}"`);
      if (variantIds.has(variant.id)) fail(`duplicate variant id "${variant.id}"`);
      variantIds.add(variant.id);
      variantNames.add(variant.variant);
      for (const vibe of Array.isArray(variant.supportedVibes) ? variant.supportedVibes : [])
        if (!manifest.vibes.includes(vibe))
          fail(`variant "${variant.id}" supports unknown vibe "${vibe}"`);
    }
    if (!variantNames.has(section.defaultVariant))
      fail(`section "${section.type}" defaultVariant "${section.defaultVariant}" is not a registered variant`);
  }

  // 3. lib/section-map.ts keys ↔ manifest variant ids, and every imported
  //    component file exists on disk.
  const mapSrc = fs.readFileSync(path.join(ROOT, "lib", "section-map.ts"), "utf8");
  const mapKeys = new Set(
    [...mapSrc.matchAll(/^\s*"([^"]+)":/gm)].map((m) => m[1]),
  );
  for (const id of variantIds)
    if (!mapKeys.has(id))
      fail(`variant "${id}" has no entry in lib/section-map.ts SECTION_COMPONENTS`);
  for (const key of mapKeys)
    if (!variantIds.has(key))
      fail(`lib/section-map.ts key "${key}" is not registered in registry/sections.ts`);
  for (const [, importPath] of mapSrc.matchAll(/from "@\/(components\/sections\/[^"]+)"/g)) {
    const file = path.join(ROOT, `${importPath}.tsx`);
    if (!fs.existsSync(file)) fail(`section-map imports missing file ${importPath}.tsx`);
  }

  // 4. Default section plan and archetype section plans reference real
  //    sections/variants; archetype vibes exist.
  const sectionTypes = new Set(manifest.sections.map((s) => s.type));
  for (const entry of manifest.defaultSectionPlan)
    if (!sectionTypes.has(entry.type))
      fail(`defaultSectionPlan references unknown section "${entry.type}"`);
  for (const archetype of manifest.archetypes) {
    if (!manifest.vibes.includes(archetype.vibe))
      fail(`archetype "${archetype.id}" uses unknown vibe "${archetype.vibe}"`);
    for (const entry of archetype.sectionPlan) {
      const id = `${entry.type}/${entry.variant}`;
      if (!variantIds.has(id))
        fail(`archetype "${archetype.id}" sectionPlan references unknown variant "${id}"`);
    }
  }

  // 5. Fixtures cover every section type (catalog preview + CI render need them).
  for (const type of sectionTypes)
    if (!(type in fixtures)) fail(`registry/fixtures.ts missing fixture for section "${type}"`);
} finally {
  cleanup();
}

if (errors.length) {
  console.error(`check-registry: ${errors.length} problem(s)\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log("check-registry: OK");
