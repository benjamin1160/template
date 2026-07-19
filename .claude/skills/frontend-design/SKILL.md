---
name: frontend-design
description: Lock the full design direction — archetype, vibe tokens, personality moves, motion — BEFORE writing any component code, so new UI ships bold and distinctive instead of generic. Use when building or restyling any section variant, page, or visual component in the template.
---

# Design system first, code second

Every variant here ships to every future client site. The fastest way to
a forgettable site is opening the `.tsx` file first. Decide the design,
then type.

## 1. Commit to a direction before writing code

- **Which archetypes will select this?** Read their files in
  `registry/archetypes/` — `heroStyle`, `referenceBrands`,
  `bannedDesign` are the brief. A variant that violates an archetype's
  banned list must not declare that archetype's vibe in
  `supportedVibes`.
- **Which vibes must it survive?** Open the token blocks in
  `app/globals.css`. `midnight` and `voltage` are dark with electric
  accents; `editorial`/`warm` are paper-toned serifs; `crisp` is tight
  and geometric; `playful` is rounded and sunny. Your layout must look
  intentional in each vibe you declare — radii, display weight, and
  tracking all swing per vibe.
- **Name the one signature move.** Every strong section has exactly one:
  an oversized stat, an asymmetric split, a full-bleed image, a giant
  serif pull-quote. No signature move → it's filler; pick again.

## 2. The system carries the personality — use it, don't fight it

All expression flows through tokens and shared utilities, never
hardcoded values (hard rule 1):

- `.display` — the vibe's display font + weight + tracking + leading in
  one class. Headlines are always `display`.
- `.reveal` / `.reveal-d1`…`.reveal-d5` — entrance choreography.
  Stagger meaningfully: headline first, support copy next, CTA last.
  Reduced-motion is already handled; never add bespoke keyframes to a
  component.
- `.hero-glow`, `.brick-shadow`, `.strike-price` — existing art-direction
  accents. Check `app/globals.css` before inventing a new one.
- Radii come only from `rounded-[var(--radius-btn)]` /
  `rounded-[var(--radius-card)]` — `warm`/`playful` are pill-shaped,
  `editorial` is nearly square. Hardcoding a radius breaks four vibes
  at once.

A new art direction idea (texture, glow, border treatment) belongs as a
utility or per-vibe token in `app/globals.css`, not inline in one
component — that's how it stays consistent and reusable.

## 3. Banned: the generic-AI look

Never ship: every block centered; uniform 3-card grids for everything;
timid same-size headings; gradients as decoration with no vibe token
behind them; icon + title + two lines × N; hex colors, named fonts, or
`"use client"` anywhere. Also honor each archetype's `bannedDesign`
list — e.g. `premium_dark` bans pills and strike-prices outright.

Reach instead for: scale contrast (one thing huge, the rest small),
asymmetry (split layouts, offset media), density contrast (a packed
wall next to generous whitespace), and typographic hierarchy doing the
work color would otherwise fake.

## 4. Prove it

`NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev` → `/catalog/<vibe>` for
**every** declared vibe. Squint test: is the hierarchy obvious at
thumbnail size? Then the mechanics: `add-variant` skill, registry
entry, `npm run registry:build && npm run registry:check`,
`npm run build`. For type scale specifics use the
`typography-designer` skill; to score the result, `top-design`.
