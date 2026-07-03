# Hormozi-register landing template

Config-driven single-page landing site.  
Every string on the page — copy, prices, testimonials, FAQ, contact — lives in `site.config.ts`.  
Change nothing else.

## Contents

- `site.config.ts` — the actual values shown on the site (business name, offer, testimonials, FAQ, footer)
- `site.config.types.ts` — the `SiteConfig` shape
- `app/` — root layout, home page, global styles
- `components/` — all sections and chrome (Hero, BigNumbers, Pain, ValueStack, GuaranteeBadge, SocialProofWall, FAQ, Header, Footer, UrgencyBar, StickyMobileCTA, CTAButton, SectionHeading, JsonLd)
- `lib/theme.ts` — currency + value-stack helpers

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

## Regenerating a client site from this template

This repo is a GitHub template repository. New client sites are provisioned by calling `POST /repos/benjamin1160/template/generate` — the caller then overwrites `site.config.ts` with the values for that specific client. Everything else stays as-is.

At runtime the site needs no environment variables. All copy, prices, contact info, and testimonials are baked into the deployed bundle at generate-time.
