---
name: top-design
description: Score a design against a 10-dimension rubric built on Awwwards / CSS Design Awards judging standards — hierarchy, typography, composition, motion choreography, distinctiveness. Use when asked to review, critique, score, or raise the design quality of a variant, vibe, archetype, or catalog page.
---

# Top-design rubric

Ten dimensions, 0–10 each, /100 total. **Ship bar: 85** — the same
pass score the factory's post-deploy visual QA enforces, so a variant
that scores below it here will get flagged in production anyway.
Score against real references: the archetype's `referenceBrands`
(Porsche, Aesop-tier) are the bar, not other AI-generated sites.

Review setup: `NEXT_PUBLIC_ENABLE_CATALOG=1 npm run dev` →
`/catalog/<vibe>` for every vibe the subject supports, at mobile
(~375px) and desktop widths. Score each vibe; the subject's score is
its **worst** vibe — that's the one a client will get.

| # | Dimension | 10 looks like | Instant deductions |
|---|---|---|---|
| 1 | Visual hierarchy | Eye lands on the one message, then the CTA; obvious at thumbnail size | Competing focal points; CTA lost; everything same weight |
| 2 | Typography | House scale steps (see `typography-designer`); ≥2-step contrast between levels; clean rag | Single-size headings; full-width paragraphs; tracked lowercase |
| 3 | Composition | One signature move (scale, asymmetry, bleed); intentional negative space | Centered-everything; uniform card grids; template symmetry |
| 4 | Color & contrast | Tokens only; accent used sparingly so it pops; AA floors met (body ≥4.5:1, UI ≥3:1 — archetypes pin these in `accessibilityFloor`) | Hardcoded colors; accent wallpaper; muted-on-muted text |
| 5 | Spacing rhythm | Proportional 4px-grid rhythm; grouping visible from gaps alone | Equal gaps everywhere; cramped section seams; orphan margins |
| 6 | Motion choreography | Staggered `.reveal` order tells the reading order (headline → support → CTA); nothing moves after load settles | Everything animating at once; bespoke keyframes in components; motion without reduced-motion fallback (shared utilities handle it — bespoke ones usually don't) |
| 7 | Imagery | Meets the archetype's `photographyRules` tone; sharp at rendered size; subjects face into the layout | Watermarks; stretched crops; tone violations (bright flat shots on `premium_dark`) |
| 8 | Distinctiveness | Memorable in one screenshot; personality survives every declared vibe | Looks like every AI site; generic icon+title+blurb rows; no signature move |
| 9 | Mobile | 375px: no overflow, ≥44px tap targets, headings ≤`text-5xl`, measure holds | Horizontal scroll; wrapped-to-wall headlines; micro tap targets |
| 10 | Coherence | Reads as one designed thing; honors the archetype's `bannedDesign`; nothing looks accidental | Mixed radii idioms; banned-list violations; empty/broken-looking states |

## Process

1. Score all ten with a one-line justification each — cite what you
   see, not what the code intends.
2. Report total /100 per vibe. **< 85: fix the two lowest dimensions
   first** (biggest lift per change), re-render, re-score. Don't polish
   a 9 to a 10 while a 5 exists.
3. Fixes must go through the system: tokens/utilities in
   `app/globals.css`, scale from `typography-designer`, direction from
   `frontend-design` — never one-off hardcoded styles (hard rule 1).
4. If a variant only clears the bar in some vibes, narrow
   `supportedVibes` to exactly those and note it honestly in
   `avoidWhen` — that metadata is how the factory avoids bad picks.
