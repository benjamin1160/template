---
name: typography-designer
description: The template's type system — responsive font scale, modular spacing, WCAG-AA line heights, tracking, and measure rules, all driven by the vibe font tokens. Use when setting or reviewing font sizes, type scales, line heights, letter spacing, headings, or adding a font.
---

# Typography

Fonts, display weight, tracking, and leading are **vibe tokens**
(`--font-display-stack`, `--font-body-stack`, `--display-weight`,
`--display-tracking`, `--display-leading` in `app/globals.css`).
Components choose *size and rhythm*; the vibe chooses *voice*. Never
name a font, set `font-weight`/`letter-spacing`/`line-height` on a
`display` element, or override the stacks in a component.

## The house scale (responsive steps, from live variants)

| Role | Classes |
|---|---|
| Hero h1 (full-bleed) | `display text-5xl sm:text-7xl md:text-8xl` (up to `lg:text-[7.5rem]`) |
| Hero h1 (split/editorial) | `display text-4xl sm:text-6xl lg:text-7xl` |
| Section h2 | `display text-4xl sm:text-5xl md:text-6xl` |
| Big stat / price | `display text-6xl md:text-7xl lg:text-8xl tabular-nums` |
| Pull-quote | `display text-2xl sm:text-3xl md:text-4xl leading-snug` |
| Card title / h3 | `text-xl sm:text-2xl font-bold` (body font) |
| Body | `text-base sm:text-lg leading-relaxed text-muted` |
| Overline / eyebrow | `text-xs font-bold uppercase tracking-widest` |

Rules of the scale:

1. **Every heading gets ≥2 breakpoint steps.** A single fixed size is
   either too small on desktop or overflows on mobile. Mobile heading
   ceiling is `text-5xl` — a 9-word headline at `text-6xl` wraps into a
   wall on a 375px screen.
2. **Adjacent levels must differ by ≥2 Tailwind steps** at every
   breakpoint. h2 at `text-6xl` over cards at `text-2xl` reads as
   hierarchy; `text-3xl` over `text-2xl` reads as a mistake.
3. **`tabular-nums` on every numeric stat** so digits align.
4. Custom sizes only as a top-end display step (`lg:text-[7.5rem]`),
   never below `text-4xl` — the standard scale covers it.

## Readability floors (WCAG-AA)

- **Body line height ≥ 1.5** — `leading-relaxed` (or `leading-normal`
  minimum on short strings). Tight leading is for `display` only, and
  there it comes from the vibe token.
- **Measure 45–75ch**: cap body copy with `max-w-prose` / `max-w-2xl`;
  headlines with `max-w-4xl`. Full-width paragraphs are the #1
  legibility bug in wide sections.
- **Tracking**: `tracking-widest` (or `tracking-wider`) **only** on
  uppercase micro-labels ≤ `text-xs`/`text-sm`. Never letterspace
  lowercase body text; never track display headings — the vibe's
  `--display-tracking` already does (e.g. −0.055em on midnight).
- Body text ≥ `text-base` (16px). `text-xs` is legal only for labels
  and fine print; keep it ≥ 4.5:1 contrast (`text-muted`, not
  `text-muted-2`, on long runs).

## Spacing rhythm (modular, 4px grid)

Vertical rhythm is proportional to type scale: section padding
`py-20 sm:py-28`; heading → body gap `mt-4`/`mt-6`; body → CTA
`mt-8`/`mt-10`; between cards `gap-6`/`gap-8`. Related items sit
closer than unrelated ones — if every gap is equal, grouping is doing
nothing. Stay on the Tailwind 4px grid; no arbitrary margins.

## Adding a font

Only via a vibe (see `add-archetype` skill): load with
`next/font/google` in `app/layout.tsx`, add its `variable` to the
`<html>` className, reference `var(--font-<name>)` inside that vibe's
token block, and tune `--display-weight/tracking/leading` to the face
(serifs want looser leading and near-zero tracking; heavy grotesks
tolerate −0.05em). Subset `latin`, `display: "swap"`, and load only
the weights the vibe uses.
