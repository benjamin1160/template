import type { ArchetypeDef } from "../types";

/** Modeled on the "Car Wash & Detailing" Framer template: cinematic auto studio. */
export const showroomPremium: ArchetypeDef = {
  id: "showroom_premium",
  version: "1.0.0",
  vibe: "showroom",
  fonts: { heading: "Hanken Grotesk", body: "Inter" },
  paletteLogic:
    "Deep midnight-navy surfaces with off-white type and a restrained ice-blue accent. No loud saturated accent — the restraint is the premium signal. Alternate dark panels with light imagery for cinematic contrast.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero: heavy oversized claim left, one hero vehicle right — dramatic studio-quality shot, ideally the same car appearing before/after across the page. The car is the protagonist.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "valueStack", variant: "classic" },
    { type: "socialProof", variant: "spotlight" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Enthusiast-premium: speaks to people who love their cars. Named packages with real prices, testimonials that name the car. A single flash of playfulness in package naming is allowed; everywhere else, restraint.",
  referenceBrands: [
    "Car Wash & Detailing (Framer template)",
    "Chemical Guys' enthusiasm, Porsche's restraint",
    "detail-studio Instagram aesthetics",
  ],
  photographyRules: {
    requiredTone:
      "studio-quality automotive shots, consistent hero vehicle, gloss and reflection detail",
    reject: [
      "gas-station-wash snapshots",
      "cluttered parking-lot backgrounds",
      "flat bright lighting that kills reflections",
    ],
    minHeroResolution: [2400, 1400],
  },
  bannedDesign: [
    "more than one accent color",
    "purple/blue gradients",
    "urgency bars",
    "emoji anywhere",
    "busy badge clusters",
  ],
  bannedCopyPatterns: [
    "discount-led headlines",
    "fake countdown timers",
    "fleet/commercial jargon aimed at enthusiasts",
  ],
  seo: {
    schemaOrg: "AutoWash",
    titleMaxChars: 60,
    descriptionShape: "premium detailing promise + city — same promise as H1",
  },
};
