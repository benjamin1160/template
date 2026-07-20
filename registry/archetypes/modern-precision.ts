import type { ArchetypeDef } from "../types";

/** Modeled on the "Shadory" Framer template: quietly premium installer/manufacturer. */
export const modernPrecision: ArchetypeDef = {
  id: "modern_precision",
  version: "1.0.0",
  vibe: "precision",
  fonts: { heading: "Outfit", body: "Outfit" },
  paletteLogic:
    "Cool white base with soft gray-blue surfaces and one deep navy accent on pill CTAs. Understated, medium-weight typography — precision reads through spacing and numbers, not boldness.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero: rating badge above a tight medium-weight headline, dual CTAs, product-in-situ photo right. Numeric proof (reviews, years, projects) directly under the fold.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "spotlight" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Premium-professional manufacturer voice with concrete proof points: delivery-day numbers, warranty terms, review counts, awards. Serves homeowners and B2B/dealer readers in the same register.",
  referenceBrands: [
    "Shadory (Framer template)",
    "European building-product manufacturers",
    "Clopay/Somfy positioning done modern",
  ],
  photographyRules: {
    requiredTone:
      "architectural product-in-situ shots — installed doors/blinds/systems on modern homes, clean lines",
    reject: ["cluttered job sites", "warehouse racking", "renders that read as fake"],
    minHeroResolution: [2000, 1200],
  },
  bannedDesign: [
    "heavy black display weights",
    "neon accents",
    "serif display type",
    "urgency bars",
  ],
  bannedCopyPatterns: [
    "discount-led headlines",
    "exclamation points",
    "vague 'premium quality' claims without a number or term behind them",
  ],
  seo: {
    schemaOrg: "HomeAndConstructionBusiness",
    titleMaxChars: 60,
    descriptionShape: "product + install promise + region — same promise as H1",
  },
};
