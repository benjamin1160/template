# Growing the catalog: adapting patterns from component libraries

New variants should usually start from a proven open-source pattern
(shadcn/ui blocks, Tailwind UI-style layouts, any MIT-licensed registry)
rather than a blank file. The adaptation, not the invention, is the work.
Follow this playbook — the `add-variant` skill automates the mechanical
steps.

## Rules

1. **No new UI-kit dependencies.** Adapt the pattern's structure; rewrite
   its styling onto our semantic tokens so it works across every vibe
   automatically: `bg-bg`, `bg-surface`, `bg-surface-2`, `text-fg`,
   `text-muted`, `text-muted-2`, `border-border`, `border-border-strong`,
   `bg-accent`, `text-accent`, `text-accent-ink`, and the `display`
   class + `--radius-btn` / `--radius-card` vars. Never hardcode a hex
   color, font, or radius in a variant.
2. **Server components only.** No `"use client"`, no state, no effects.
   Interactivity comes from native elements (`<details>`, anchors) like
   the existing sections.
3. **Props = the config slice.** A variant of section `foo` takes exactly
   `{ foo: SiteConfig["foo"] }` — same data as every other variant of
   that section. If the pattern needs data the slice lacks, extend the
   slice type (optional fields only) rather than inventing new props.
4. **License hygiene.** Only adapt MIT/ISC/Apache-licensed sources, and
   rewrite — don't paste. Structure and layout ideas are fine; verbatim
   code with its class soup is not.

## Checklist per variant

- [ ] Component at `components/sections/<type>/<Name><Variant>.tsx`
- [ ] Static import + entry in `lib/section-map.ts` (`"<type>/<variant>"`)
- [ ] `VariantDef` in `registry/sections.ts` with honest `useWhen` /
      `avoidWhen` (this metadata is how the factory AI chooses — vague
      metadata produces bad picks) and accurate `requiredFields`
- [ ] Respect archetype `bannedDesign` lists — e.g. don't build a
      strike-price variant and mark it supported for `editorial`
- [ ] `npm run registry:build` (refreshes manifest.json)
- [ ] `npm run registry:check` passes
- [ ] `NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev` → eyeball
      `/catalog/<vibe>` for **every** vibe in `supportedVibes`
- [ ] Bump `REGISTRY_VERSION` (minor for new variants)
