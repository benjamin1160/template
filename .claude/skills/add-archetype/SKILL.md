---
name: add-archetype
description: Add a new whole-site design archetype (curated vibe + fonts + section plan + copy register recipe) to the design catalog, optionally with a new vibe token block. Use when asked to add a new site design direction, archetype, or vibe.
---

# Add an archetype

An archetype is a curated recipe the factory AI can pick for a business:
vibe + fonts + ordered section plan + copy register + banned lists.
Existing examples: `registry/archetypes/*.ts`.

1. **Decide the vibe.** Reuse an existing vibe when the token set fits.
   If the archetype needs its own art direction, add a vibe first:
   - New `[data-vibe="<name>"]` token block in `app/globals.css`
     (copy an existing block; set every variable).
   - If it needs a new font: load it in `app/layout.tsx` via
     `next/font/google`, add its `variable` to the `<html>` className,
     and reference `var(--font-<name>)` in the vibe block.
   - Add the vibe to `DesignVibe` in `site.config.types.ts`, `VIBES` in
     `registry/sections.ts`, and `VIBE_META` in `app/layout.tsx`
     (themeColor must equal the vibe's `--bg`).

2. **Write the archetype file** `registry/archetypes/<kebab-id>.ts`
   exporting an `ArchetypeDef` (shape in `registry/types.ts`). Fonts
   must be fonts the vibe actually loads. `sectionPlan` may only
   reference registered variants (`registry/sections.ts`). Be specific
   in `paletteLogic`, `photographyRules`, `bannedDesign`,
   `bannedCopyPatterns` — the factory enforces these downstream.

3. **Register it** in `registry/archetypes/index.ts` and bump
   `REGISTRY_VERSION` in `registry/sections.ts` (minor).

4. **Rebuild + check**: `npm run registry:build && npm run registry:check`.

5. **Verify**: `NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev` → `/catalog`
   lists the archetype; open `/catalog/<vibe>` and eyeball every variant
   in its section plan under that vibe. `npm run build` must pass.
