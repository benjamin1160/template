import type { SectionInstance } from "../site.config.types";
import type { DesignVibe, SectionDef, VariantDef } from "./types";

export const REGISTRY_VERSION = "1.1.0";

/**
 * The classic hormozi order — exactly the section sequence app/page.tsx
 * hardcoded before the registry existed. Configs without a `sections`
 * array keep rendering identically.
 */
export const DEFAULT_SECTIONS: SectionInstance[] = [
  { type: "hero" },
  { type: "bigNumbers" },
  { type: "pain" },
  { type: "plan" },
  { type: "valueStack" },
  { type: "guarantee" },
  { type: "socialProof" },
  { type: "faq" },
];

/** Runtime list of every vibe defined in app/globals.css. */
export const VIBES: DesignVibe[] = [
  "midnight",
  "editorial",
  "crisp",
  "warm",
  "voltage",
  "playful",
];

const v = (def: Omit<VariantDef, "id">): VariantDef => ({
  ...def,
  id: `${def.section}/${def.variant}`,
});

export const SECTIONS: SectionDef[] = [
  {
    type: "hero",
    configKey: "hero",
    required: true,
    defaultVariant: "classic",
    variants: [
      v({
        section: "hero",
        variant: "classic",
        name: "Classic centered hero",
        description:
          "Centered eyebrow + display headline + subheadline with primary/secondary CTAs and trust bullets. Big-claim first, no photography required.",
        useWhen: [
          "offer-led landing pages",
          "no strong photography available",
          "direct-response registers",
        ],
        requiredFields: ["headline", "subheadline", "ctaText", "ctaLink"],
        optionalFields: [
          "eyebrow",
          "secondaryCtaText",
          "secondaryCtaLink",
          "trustBullets",
          "backgroundImage",
        ],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
      v({
        section: "hero",
        variant: "split",
        name: "Split hero",
        description:
          "Two-column hero: copy and CTAs left, large photo right. The image carries the first impression; falls back to a surface panel without one.",
        useWhen: [
          "a strong photo of real work, place, or people exists",
          "local/trust registers where seeing the business sells it",
        ],
        avoidWhen: ["only generic stock imagery is available"],
        requiredFields: ["headline", "subheadline", "ctaText", "ctaLink"],
        optionalFields: [
          "eyebrow",
          "secondaryCtaText",
          "secondaryCtaLink",
          "trustBullets",
          "backgroundImage",
        ],
        supportedVibes: "all",
        status: "stable",
        since: "1.1.0",
      }),
      v({
        section: "hero",
        variant: "editorial",
        name: "Editorial hero",
        description:
          "Left-aligned, typography-led hero with a rule line, one primary CTA and a quiet text secondary. No badges, no glow — restraint reads as premium.",
        useWhen: [
          "premium or boutique positioning",
          "editorial/minimal registers where big-badge energy would cheapen the brand",
        ],
        avoidWhen: ["urgency-driven offers that need maximum CTA pressure"],
        requiredFields: ["headline", "subheadline", "ctaText", "ctaLink"],
        optionalFields: [
          "eyebrow",
          "secondaryCtaText",
          "secondaryCtaLink",
          "trustBullets",
        ],
        supportedVibes: ["editorial", "crisp", "midnight", "warm"],
        status: "stable",
        since: "1.1.0",
      }),
    ],
  },
  {
    type: "bigNumbers",
    configKey: "bigNumbers",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "bigNumbers",
        variant: "classic",
        name: "Stat strip",
        description:
          "Horizontal row of oversized proof numbers with labels, directly under the hero.",
        useWhen: ["3-4 concrete numeric proof points exist"],
        avoidWhen: ["stats are vague or unverifiable"],
        requiredFields: ["stats"],
        optionalFields: ["headline"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
    ],
  },
  {
    type: "pain",
    configKey: "pain",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "pain",
        variant: "classic",
        name: "Pain points list",
        description:
          "Problem-agitation section: headline plus a punchy list of the customer's pains.",
        useWhen: ["the customer's problem is felt and nameable"],
        requiredFields: ["headline", "points"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
    ],
  },
  {
    type: "plan",
    configKey: "plan",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "plan",
        variant: "classic",
        name: "3-step plan",
        description:
          "StoryBrand process plan — exactly three verb-first steps with outcomes, making it look easy to start.",
        useWhen: ["service businesses where 'how it works' reduces friction"],
        requiredFields: ["headline", "steps"],
        optionalFields: ["subheadline", "ctaText", "ctaLink"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
    ],
  },
  {
    type: "valueStack",
    configKey: "valueStack",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "valueStack",
        variant: "classic",
        name: "Hormozi value stack",
        description:
          "Itemized offer with struck-through values, total anchor, price reveal and CTA.",
        useWhen: [
          "a concrete offer with priceable components",
          "direct-response landing pages",
        ],
        avoidWhen: ["premium brands where price anchoring feels cheap"],
        requiredFields: ["headline", "items", "priceLabel", "ctaText", "ctaLink"],
        optionalFields: ["subheadline", "totalLabel", "priceAmount"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
    ],
  },
  {
    type: "guarantee",
    configKey: "guarantee",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "guarantee",
        variant: "classic",
        name: "Guarantee badge",
        description:
          "Risk-reversal badge with headline and body copy stating the guarantee plainly.",
        useWhen: ["a real, specific guarantee exists"],
        avoidWhen: ["no genuine risk reversal to offer"],
        requiredFields: ["badge", "headline", "body"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
    ],
  },
  {
    type: "socialProof",
    configKey: "socialProof",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "socialProof",
        variant: "classic",
        name: "Testimonial wall",
        description:
          "Masonry-style wall of testimonial cards with ratings, names and results.",
        useWhen: ["3+ real testimonials with specifics"],
        avoidWhen: ["fewer than 3 testimonials — sparse walls read as weak proof"],
        requiredFields: ["testimonials"],
        optionalFields: ["headline"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
      v({
        section: "socialProof",
        variant: "spotlight",
        name: "Spotlight testimonial",
        description:
          "One testimonial as an oversized centered pull quote, up to three more in a quiet row beneath. Proof with editorial restraint.",
        useWhen: [
          "one exceptional, specific testimonial deserves the stage",
          "premium/editorial registers where a card wall feels busy",
        ],
        avoidWhen: ["volume of reviews is itself the proof point"],
        requiredFields: ["testimonials"],
        optionalFields: ["headline"],
        supportedVibes: "all",
        status: "stable",
        since: "1.1.0",
      }),
    ],
  },
  {
    type: "faq",
    configKey: "faq",
    required: false,
    defaultVariant: "classic",
    variants: [
      v({
        section: "faq",
        variant: "classic",
        name: "FAQ accordion",
        description:
          "Objection-handling FAQ list with expandable answers.",
        useWhen: ["known objections that block conversion"],
        requiredFields: ["items"],
        optionalFields: ["headline"],
        supportedVibes: "all",
        status: "stable",
        since: "1.0.0",
      }),
    ],
  },
];

export const SECTION_BY_TYPE = Object.fromEntries(
  SECTIONS.map((s) => [s.type, s]),
) as Record<SectionDef["type"], SectionDef>;
