import type { ArchetypeDef } from "../types";

/** Modeled on the "FlowFix" Framer template: bright conversion-first cleaning. */
export const brightService: ArchetypeDef = {
  id: "bright_service",
  version: "1.0.0",
  vibe: "sparkle",
  fonts: { heading: "Instrument Sans", body: "Inter" },
  paletteLogic:
    "Bright off-white base, white cards, one vivid blue accent carrying CTAs and links. Everything must feel freshly wiped: high brightness, no murky tones. Brand override may substitute the business's primary color if it stays saturated and clean.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero with a bright lifestyle photo of cleaners at work — color-popping props, smiling staff. Headline names the city; phone-call CTA beside the booking CTA.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "pain", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Friendly and direct with heavy trust math: real review counts, star ratings, homes served, satisfaction percentages. Local-SEO city naming in headline and description. Phone-first conversion.",
  referenceBrands: [
    "FlowFix (Framer template)",
    "Molly Maid modernized",
    "Handy's clarity",
  ],
  photographyRules: {
    requiredTone:
      "bright, high-key lifestyle shots of cleaners working — colorful gloves and props welcome",
    reject: ["dim moody lighting", "empty sterile rooms with no people", "grime close-ups"],
    minHeroResolution: [1600, 1000],
  },
  bannedDesign: [
    "dark backgrounds",
    "serif display type",
    "glassmorphism",
    "muted desaturated palettes",
  ],
  bannedCopyPatterns: [
    "fake review counts or ratings",
    "scarcity claims without a real number",
    "germ fear-mongering",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "service + city + trust number — same promise as H1",
  },
};
