import type { ArchetypeDef } from "../types";

/** Modeled on the "Motix" Framer template: friendly neighborhood repair shop. */
export const neighborhoodGarage: ArchetypeDef = {
  id: "neighborhood_garage",
  version: "1.0.0",
  vibe: "garage",
  fonts: { heading: "Hanken Grotesk", body: "Hanken Grotesk" },
  paletteLogic:
    "Warm cream base, white cards, one signal-red accent for CTAs and highlights. Classic automotive red on a soft neighborly background — never industrial black or aggressive chrome.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero: 'your local workshop' headline with the phone number as the primary CTA and a star-rating/customer-count badge, real workshop photo right.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Friendly-neighborly and honest-local: 'your local', 'honest advice', 'stress-free'. Phone-first conversion repeated top and bottom. Testimonials describe specific repairs, not vague praise.",
  referenceBrands: [
    "Motix (Framer template)",
    "the trusted corner garage",
    "Christian Brothers Automotive warmth",
  ],
  photographyRules: {
    requiredTone:
      "real workshop photography — mechanics at work, service bays, honest before/after repairs",
    reject: ["showroom gloss", "stock models in clean coveralls", "abstract gear imagery"],
    minHeroResolution: [1600, 1000],
  },
  bannedDesign: [
    "dark industrial backgrounds",
    "neon accents",
    "serif display type",
    "sharp 0-radius corners",
  ],
  bannedCopyPatterns: [
    "urgency countdown timers",
    "scare-tactic repair warnings",
    "jargon-heavy diagnostics talk without plain-language translation",
  ],
  seo: {
    schemaOrg: "AutoRepair",
    titleMaxChars: 60,
    descriptionShape: "local repair promise + neighborhood/city — same promise as H1",
  },
};
