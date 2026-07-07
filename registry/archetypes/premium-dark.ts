import type { ArchetypeDef } from "../types";

export const premiumDark: ArchetypeDef = {
  id: "premium_dark",
  version: "1.0.0",
  vibe: "midnight",
  fonts: { heading: "Inter", body: "Inter" },
  paletteLogic:
    "Ink-black surfaces with a single metallic or electric accent (brand override encouraged: gold, champagne, ice blue). No pure white anywhere — off-whites only. Darkness reads as expensive only when contrast is disciplined.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split hero: restrained claim left, dramatic low-light photography of the product/work right. The photo does the selling.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "spotlight" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Spare and assured: fewer words, heavier nouns. Price is not defended, it's implied. Specific materials, marques, and timelines carry the persuasion.",
  referenceBrands: ["Porsche", "Rimowa", "Aman Resorts", "Bang & Olufsen"],
  photographyRules: {
    requiredTone: "dramatic, low-key lighting, detail shots of craft and finish",
    reject: ["bright flat lighting", "busy backgrounds", "watermarked stock"],
    minHeroResolution: [2400, 1400],
  },
  bannedDesign: [
    "pure white anywhere",
    "strike-through price anchoring",
    "urgency bars",
    "emoji anywhere",
    "rounded-pill buttons",
  ],
  bannedCopyPatterns: [
    "discount language",
    "urgency scarcity claims",
    "exclamation points",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "marque-level promise + specialty + city — same promise as H1",
  },
};
