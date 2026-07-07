import type { ArchetypeDef } from "../types";

export const warmLocal: ArchetypeDef = {
  id: "warm_local",
  version: "1.0.0",
  vibe: "warm",
  fonts: { heading: "Fraunces", body: "Inter" },
  paletteLogic:
    "Cream background with one warm earth-tone accent (terracotta default; ochre/forest via brand override). Never pure black text, never pure white background — the warmth is the brand.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split layout led by a real photo of the work, place, or people — warm natural light, never abstract gradients. Overlay copy left-aligned.",
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
    "Neighborly and concrete: first names, town names, years in business. Warm but never saccharine; proof over promises.",
  referenceBrands: ["Magnolia", "Rejuvenation", "Duluth Trading", "Nickel & Suede"],
  photographyRules: {
    requiredTone: "warm, natural light, people and places doing real work",
    reject: ["sterile studio stock", "corporate handshakes", "abstract textures"],
    minHeroResolution: [2000, 1200],
  },
  bannedDesign: [
    "purple/blue gradients",
    "glassmorphism",
    "centered hero text",
    "emoji in headings",
    "more than 2 fonts",
    "pure black text (#000)",
    "pure white backgrounds (#fff)",
  ],
  bannedCopyPatterns: [
    "urgency countdown timers",
    "scarcity claims without a real number",
    "ALL-CAPS shouty CTAs",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "specific promise + city — same promise as H1",
  },
};
