import type { DesignVibe, SectionType, SiteConfig } from "../site.config.types";

export type { DesignVibe, SectionType };

/**
 * A registered layout variant of a section. Metadata is written for two
 * readers: humans browsing /catalog and the factory AI choosing designs —
 * useWhen/avoidWhen are the selection signal, requiredFields the contract.
 */
export interface VariantDef {
  /** `${section}/${variant}` — must match a key in lib/section-map.ts. */
  id: string;
  section: SectionType;
  variant: string;
  name: string;
  description: string;
  useWhen: string[];
  avoidWhen?: string[];
  /** Dotted paths into the section's config slice that must be present. */
  requiredFields: string[];
  optionalFields?: string[];
  supportedVibes: DesignVibe[] | "all";
  status: "stable" | "beta";
  /** Registry version that introduced this variant. */
  since: string;
}

export interface SectionDef {
  type: SectionType;
  /** SiteConfig key holding this section's content slice. */
  configKey: keyof SiteConfig & SectionType;
  /** Required sections render on every site (hero). */
  required: boolean;
  defaultVariant: string;
  variants: VariantDef[];
}

/** Per-archetype photography sourcing rules (consumed by the factory). */
export interface PhotographyRules {
  requiredTone: string;
  reject: string[];
  minHeroResolution: [number, number];
}

/**
 * A curated whole-site design recipe: vibe + fonts + an ordered section
 * plan + copy register + banned lists. The factory classifies a business
 * into one archetype, then fills config within these constraints.
 */
export interface ArchetypeDef {
  id:
    | "trust_institutional"
    | "warm_local"
    | "bold_conversion"
    | "editorial_minimal"
    | "playful_energetic"
    | "premium_dark";
  version: string;
  vibe: DesignVibe;
  /** Constrained to fonts the vibe actually loads in app/layout.tsx. */
  fonts: { heading: string; body: string };
  paletteLogic: string;
  accessibilityFloor: {
    bodyContrastMin: number;
    uiContrastMin: number;
    focusRing: string;
  };
  heroStyle: string;
  /** The layout skeleton: ordered variants for the landing page. */
  sectionPlan: { type: SectionType; variant: string }[];
  copyRegister: string;
  referenceBrands: string[];
  photographyRules: PhotographyRules;
  bannedDesign: string[];
  bannedCopyPatterns: string[];
  seo: {
    schemaOrg: string;
    titleMaxChars: number;
    descriptionShape: string;
  };
}

/** The machine-readable artifact (registry/manifest.json) the factory consumes. */
export interface RegistryManifest {
  registryVersion: string;
  vibes: DesignVibe[];
  /** Section plan used when site.config has no `sections` array. */
  defaultSectionPlan: { type: SectionType; variant?: string }[];
  sections: SectionDef[];
  archetypes: ArchetypeDef[];
}
