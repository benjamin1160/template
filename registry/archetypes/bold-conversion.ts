import type { ArchetypeDef } from "../types";

export const boldConversion: ArchetypeDef = {
  id: "bold_conversion",
  version: "1.0.0",
  vibe: "voltage",
  fonts: { heading: "Space Grotesk", body: "Inter" },
  paletteLogic:
    "Near-black background, exactly one neon accent reserved for CTAs and key numbers. High contrast everywhere; the accent must never be diluted across decorative elements.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Centered big-claim hero: number or guarantee in the first seven words, CTA above the fold, trust bullets under it. No photography required.",
  sectionPlan: [
    { type: "hero", variant: "classic" },
    { type: "bigNumbers", variant: "classic" },
    { type: "pain", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "valueStack", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Hormozi direct-response: specific numbers, timeframes, risk reversal, verb-first CTAs. Every claim gets a proof point in the same section.",
  referenceBrands: ["Gong", "Ramp", "ClickFunnels-era energy done tastefully"],
  photographyRules: {
    requiredTone: "high-contrast, punchy results imagery when used at all",
    reject: ["soft lifestyle stock", "washed-out filters"],
    minHeroResolution: [1600, 1000],
  },
  bannedDesign: [
    "glassmorphism",
    "purple/blue gradients",
    "more than one accent color",
    "serif display type",
  ],
  bannedCopyPatterns: [
    "fake countdown timers",
    "scarcity without a real number",
    "vague superlatives without proof",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "offer + guarantee + city — same promise as H1",
  },
};
