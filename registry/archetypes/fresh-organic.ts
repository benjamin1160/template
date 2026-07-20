import type { ArchetypeDef } from "../types";

/** Modeled on the "Greenly" Framer template: fresh organic landscaping. */
export const freshOrganic: ArchetypeDef = {
  id: "fresh_organic",
  version: "1.0.0",
  vibe: "meadow",
  fonts: { heading: "Inter", body: "Inter" },
  paletteLogic:
    "Warm cream base with alternating cream tones between sections, white cards, one deep forest-green accent. Brand override may swap the accent for a lime/chartreuse punch (dark ink) when the business's branding is brighter. Greens must read natural, never neon.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero led by a real job-site photo — a crew actively working (trimming, planting, mowing), lush saturated greens. Copy left, free-quote CTA prominent.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Warm and benefit-led with an eco-conscious thread: outdoor transformation, seasonal care, free quotes. Concrete services and plant/lawn specifics over vague beauty talk.",
  referenceBrands: [
    "Greenly (Framer template)",
    "TruGreen done boutique",
    "local garden-center warmth",
  ],
  photographyRules: {
    requiredTone:
      "bright natural daylight, uniformed crews actively working outdoors, lush greens",
    reject: [
      "sterile studio stock",
      "obviously staged handshake shots",
      "wilted or dormant landscaping",
    ],
    minHeroResolution: [2000, 1200],
  },
  bannedDesign: [
    "dark backgrounds",
    "neon accents",
    "glassmorphism",
    "sharp 0-radius corners",
    "more than 2 fonts",
  ],
  bannedCopyPatterns: [
    "urgency countdown timers",
    "ALL-CAPS shouty CTAs",
    "eco claims without a specific practice behind them",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "outdoor-transformation promise + service area — same promise as H1",
  },
};
