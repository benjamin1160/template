import type { ArchetypeDef } from "../types";

/** Modeled on the "HomeMaster" Framer template: multipurpose home-services trust. */
export const trustedHome: ArchetypeDef = {
  id: "trusted_home",
  version: "1.0.0",
  vibe: "homestead",
  fonts: { heading: "Outfit", body: "Inter" },
  paletteLogic:
    "White base with soft gray and teal-tinted surfaces, one sturdy accent (orange default). The accent is deliberately swappable per trade — plumbing blue, lawn green, roofing red — via brand override; the neutral system stays constant.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero: 'trusted partner' headline with dual CTAs (request service + secondary), photo of uniformed workers adjacent. People-first imagery over job-site texture.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "plan", variant: "classic" },
    { type: "bigNumbers", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Formal-friendly corporate trust: transparency, professionalism, values-led rather than offer-led. Years in business, service-area count, satisfaction ratings carry the proof.",
  referenceBrands: [
    "HomeMaster (Framer template)",
    "Mr. Handyman",
    "Neighborly-brand polish",
  ],
  photographyRules: {
    requiredTone:
      "clean portraits of smiling uniformed tradespeople; bright, people-first",
    reject: ["messy job sites", "dark dramatic lighting", "generic office stock"],
    minHeroResolution: [1600, 1000],
  },
  bannedDesign: [
    "dark page backgrounds",
    "neon accents",
    "serif display type",
    "sharp 0-radius buttons",
  ],
  bannedCopyPatterns: [
    "urgency countdown timers",
    "discount-led headlines",
    "vague 'best in town' superlatives without proof",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "trusted-partner promise + trade + service area — same promise as H1",
  },
};
