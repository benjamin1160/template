<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

(A SessionStart hook runs `npm install` when `node_modules` is missing, so those docs are always available.)

# What this repo is

The site skeleton for a website factory. The mission: an operator types a business name and ships that business a great website in ~90 seconds. The factory app (`benjamin1160/everyrhing-site`) stamps client repos from this template via GitHub's generate API, then overwrites `site.config.ts` — so everything committed here ships to every future client site.

Design is data, chosen from a **component registry + design catalog**:

- `registry/sections.ts` — every section type and its layout **variants**, with use-when metadata and required-field contracts
- `registry/archetypes/` — six whole-site design recipes (vibe + fonts + ordered section plan + copy register + banned lists)
- `registry/manifest.json` — the machine-readable artifact the factory consumes; **regenerate with `npm run registry:build` after any registry change**
- `app/globals.css` — the vibes: CSS-token art directions selected via `data-vibe`
- `lib/section-map.ts` — variant id → component (static imports only)
- `components/SectionRenderer.tsx` — renders the config's `sections` plan; configs without one render the classic hormozi order

# Hard rules

1. **Semantic tokens only** in components: `bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `bg-accent`, `border-border`, `.display`, `rounded-[var(--radius-card)]`… Never hardcode a hex color, font name, or radius — every variant must work in every vibe.
2. **Server components only**; interactivity via native elements (`<details>`, anchors). Variant props = exactly its config slice: `{ hero: SiteConfig["hero"] }`.
3. **Back-compat is sacred**: a `site.config.ts` without a `sections` array must keep rendering identically. Never break the config contract; extend it with optional fields only.
4. After registry edits: `npm run registry:build && npm run registry:check`. CI fails on a stale manifest.
5. Verify designs visually: `NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev` → `/catalog` renders every variant × vibe from fixtures.
6. `site.config.ts` is zod-validated during `next build` (`lib/validate-config.ts`) — keep the schema and `site.config.types.ts` mirrored.

New variants/archetypes: follow `registry/SOURCING.md`; the `add-variant` and `add-archetype` skills (`.claude/skills/`) walk through the mechanics. If you change `site.config.types.ts`, `registry/types.ts`, or the manifest, everyrhing-site must re-vendor its contract (`scripts/sync-template-contract.mts` there).
