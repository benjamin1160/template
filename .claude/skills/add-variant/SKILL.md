---
name: add-variant
description: Scaffold a new section layout variant into the component registry — component file, section-map wiring, registry entry, manifest rebuild, catalog verification. Use when asked to add a new design/layout/variant for a section (hero, valueStack, faq, ...).
---

# Add a section variant

Read `registry/SOURCING.md` first — it holds the design rules (semantic
tokens only, server components only, props = config slice, license
hygiene). Then:

1. **Name it.** Variant ids are `<sectionType>/<variant>` — e.g.
   `hero/split`. Section types live in `site.config.types.ts`
   (`SectionType`); the catalog is `registry/sections.ts`.

2. **Build the component** at
   `components/sections/<type>/<PascalName>.tsx`, taking exactly
   `{ <configKey>: SiteConfig["<configKey>"] }` as props. Copy idioms
   from an existing variant of the same section. Only semantic token
   utilities (`bg-bg`, `text-fg`, `bg-accent`, `border-border`,
   `display`, `rounded-[var(--radius-card)]`, ...) — never hex colors,
   named fonts, or fixed radii. No `"use client"`.

3. **Wire it**: static import + `"<type>/<variant>": <Component>` entry
   in `lib/section-map.ts`.

4. **Register it**: add a `v({...})` entry to that section in
   `registry/sections.ts` with honest `useWhen`/`avoidWhen` (the factory
   AI selects variants from this metadata), accurate `requiredFields`,
   correct `supportedVibes`, and `since` set to the new registry
   version. Bump `REGISTRY_VERSION` (minor).

5. **Rebuild + check**: `npm run registry:build && npm run registry:check`.

6. **Verify visually**: `NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev`, open
   `/catalog/<vibe>` for every vibe in `supportedVibes` and confirm the
   variant looks intentional in each (contrast, radii, font behavior).
   A variant that only looks good in one vibe should declare exactly
   that vibe.

7. `npm run build` must pass before committing.
