# Hormozi-register landing template

Config-driven single-page landing site.  
Every string on the page — copy, prices, testimonials, FAQ, contact — lives in `site.config.ts`.  
Change nothing else.

## Contents

- `site.config.ts` — the actual values shown on the site (business name, offer, testimonials, FAQ, footer)
- `site.config.types.ts` — the `SiteConfig` shape (including the optional `sections` plan and `design` art direction)
- `app/` — root layout, home page, global styles, `/catalog` design preview (dev-only)
- `components/sections/` — registry-addressable section variants (`hero/HeroClassic`, `hero/HeroSplit`, …)
- `components/` — chrome and primitives (Header, Footer, UrgencyBar, StickyMobileCTA, CTAButton, SectionHeading, JsonLd, SectionRenderer)
- `registry/` — the component registry and design catalog (see below)
- `lib/theme.ts` — currency + value-stack helpers
- `lib/section-map.ts` — variant id → component map
- `lib/validate-config.ts` — zod validation of `site.config.ts`, runs during `next build`

## Component registry & design catalog

The registry makes design a data choice:

- `registry/sections.ts` — every section type and its layout **variants**, each with use-when metadata and required-field contracts
- `registry/archetypes/` — six curated whole-site **archetypes** (vibe + fonts + section plan + copy register + banned lists)
- `registry/icons.ts` — the allowed icon names (mapped in `lib/icon-map.ts`)
- `registry/fixtures.ts` — sample content used by the `/catalog` preview and CI
- `registry/manifest.json` — the machine-readable artifact the website factory consumes; regenerate with `npm run registry:build`, verify with `npm run registry:check`

A `site.config.ts` may set `design: { vibe, accent?, archetype? }` and an ordered `sections: [{ type, variant? }, …]` plan. Configs without `sections` render the classic hormozi order unchanged.

Preview every variant × vibe:

```bash
NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev   # then open /catalog
```

Generated client sites never ship the catalog (the flag is unset).

To add variants or archetypes, see `registry/SOURCING.md` and the `add-variant` / `add-archetype` skills in `.claude/skills/`.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

An invalid `site.config.ts` fails the build with the offending field paths named.

## Regenerating a client site from this template

This repo is a GitHub template repository. New client sites are provisioned by calling `POST /repos/benjamin1160/template/generate` — the caller then overwrites `site.config.ts` with the values for that specific client. Everything else stays as-is.

At runtime the site needs no environment variables. All copy, prices, contact info, and testimonials are baked into the deployed bundle at generate-time.
