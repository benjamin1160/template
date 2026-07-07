import type { ArchetypeDef } from "../types";

export const editorialMinimal: ArchetypeDef = {
  id: "editorial_minimal",
  version: "1.0.0",
  vibe: "editorial",
  fonts: { heading: "Fraunces", body: "Inter" },
  paletteLogic:
    "Warm paper background, near-black ink, one burnt-sienna accent used almost exclusively on the primary CTA. Whitespace is the main design material.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Typography-led editorial hero: oversized serif headline, rule line, single CTA. No badges, no glow, no background imagery.",
  sectionPlan: [
    { type: "hero", variant: "editorial" },
    { type: "pain", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "spotlight" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Confident understatement: short declarative sentences, specific outcomes, zero hype. Reads like a well-edited magazine, not an ad.",
  referenceBrands: ["Aesop", "Kinfolk", "Basecamp", "Area 17"],
  photographyRules: {
    requiredTone: "muted, considered, editorial — or none at all",
    reject: ["busy collages", "saturated stock", "clip-art iconography"],
    minHeroResolution: [2000, 1200],
  },
  bannedDesign: [
    "strike-through price anchoring",
    "urgency bars",
    "neon accents",
    "card walls",
    "more than 2 fonts",
  ],
  bannedCopyPatterns: [
    "urgency countdown timers",
    "exclamation points",
    "ALL-CAPS CTAs",
    "superlatives without proof",
  ],
  seo: {
    schemaOrg: "ProfessionalService",
    titleMaxChars: 60,
    descriptionShape: "quiet specific promise + niche — same promise as H1",
  },
};
