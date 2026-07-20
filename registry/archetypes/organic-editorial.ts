import type { ArchetypeDef } from "../types";

/** Modeled on the "Langard" Framer template: moody editorial landscape design. */
export const organicEditorial: ArchetypeDef = {
  id: "organic_editorial",
  version: "1.0.0",
  vibe: "grove",
  fonts: { heading: "Libre Caslon Display", body: "Inter" },
  paletteLogic:
    "Near-black surfaces with white type and a mint accent carrying deep-teal ink. Dark-anchored with generous negative space; nature photography supplies all the color. The dark reads premium only with disciplined contrast.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Editorial hero: oversized condensed-serif headline, poetic one-liner, one quiet CTA. A dark full-bleed garden photo may sit behind it; restraint over badges.",
  sectionPlan: [
    { type: "hero", variant: "editorial" },
    { type: "plan", variant: "classic" },
    { type: "bigNumbers", variant: "classic" },
    { type: "socialProof", variant: "spotlight" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Poetic-editorial premium: evocative but concrete ('where green dreams take root'), numbered services, uppercase micro-eyebrows. Fewer words, larger type. Projects and craft carry the persuasion, not offers.",
  referenceBrands: [
    "Langard (Framer template)",
    "high-end landscape architecture studios",
    "Kinfolk-adjacent garden editorial",
  ],
  photographyRules: {
    requiredTone:
      "rich nature/garden photography — lush textures, dusk or golden-hour moodiness welcome",
    reject: ["flat midday snapshots", "suburban lawn stock", "oversaturated HDR"],
    minHeroResolution: [2400, 1400],
  },
  bannedDesign: [
    "strike-through price anchoring",
    "urgency bars",
    "emoji anywhere",
    "rounded-pill buttons",
    "more than one accent color",
  ],
  bannedCopyPatterns: [
    "discount language",
    "exclamation points",
    "direct-response urgency claims",
  ],
  seo: {
    schemaOrg: "LocalBusiness",
    titleMaxChars: 60,
    descriptionShape: "design-studio promise + specialty + region — same promise as H1",
  },
};
