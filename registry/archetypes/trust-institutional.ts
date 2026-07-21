import type { ArchetypeDef } from "../types";

export const trustInstitutional: ArchetypeDef = {
  id: "trust_institutional",
  version: "1.1.0",
  vibe: "crisp",
  fonts: { heading: "Manrope", body: "Inter" },
  paletteLogic:
    "Cool off-white background, one confident blue accent used sparingly on CTAs and key figures. Whites stay clean, borders hairline. Brand color may replace the accent if it clears contrast floors.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Split layout: precise claim with a number or credential left, professional photo of the team or premises right. Calm, not salesy.",
  sectionPlan: [
    { type: "hero", variant: "split" },
    { type: "bigNumbers", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "gallery", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Measured authority: credentials, years, case counts. Plain sentences, no exclamation points, no urgency theatrics. Objections answered with facts.",
  referenceBrands: ["Stripe", "Vanguard", "Mayo Clinic", "Clio"],
  photographyRules: {
    requiredTone: "professional, natural light, real team and premises",
    reject: ["corporate handshake stock", "gavel/stethoscope clichés", "abstract gradients"],
    minHeroResolution: [2000, 1200],
  },
  bannedDesign: [
    "countdown timers",
    "neon accents",
    "strike-through price anchoring",
    "emoji in headings",
    "more than 2 fonts",
  ],
  bannedCopyPatterns: [
    "urgency scarcity claims",
    "ALL-CAPS CTAs",
    "exclamation points in headlines",
  ],
  seo: {
    schemaOrg: "ProfessionalService",
    titleMaxChars: 60,
    descriptionShape: "credential + specific service + city — same promise as H1",
  },
};
