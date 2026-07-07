import type { ArchetypeDef } from "../types";

export const playfulEnergetic: ArchetypeDef = {
  id: "playful_energetic",
  version: "1.0.0",
  vibe: "playful",
  fonts: { heading: "Nunito", body: "Nunito" },
  paletteLogic:
    "Sunny cream background, one punchy pink/coral accent, fully rounded corners. Bright but never chaotic — one accent, generous whitespace, big friendly type.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Centered, friendly hero: warm claim up top, rounded CTA, playful photo of kids/pets/events if available. Energy from color and rounding, not clutter.",
  sectionPlan: [
    { type: "hero", variant: "classic" },
    { type: "bigNumbers", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Upbeat, second-person, plain words a parent skims on a phone. Fun tone, concrete facts: prices, times, ages, safety credentials.",
  referenceBrands: ["Chuck E. Cheese done modern", "BarkBox", "Headspace", "Duolingo"],
  photographyRules: {
    requiredTone: "bright, candid, joyful — real kids, pets, events",
    reject: ["posed studio stock", "moody lighting", "corporate settings"],
    minHeroResolution: [1600, 1000],
  },
  bannedDesign: [
    "dark backgrounds",
    "sharp corners",
    "thin gray typography",
    "strike-through price anchoring",
  ],
  bannedCopyPatterns: [
    "fear-based selling",
    "urgency countdown timers",
    "jargon of any kind",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "fun specific promise + city — same promise as H1",
  },
};
