import type { ComponentType } from "react";
import HeroClassic from "@/components/sections/hero/HeroClassic";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import HeroEditorial from "@/components/sections/hero/HeroEditorial";
import SocialProofSpotlight from "@/components/sections/socialProof/SocialProofSpotlight";
import BigNumbersClassic from "@/components/sections/bigNumbers/BigNumbersClassic";
import PainClassic from "@/components/sections/pain/PainClassic";
import HowItWorksClassic from "@/components/sections/plan/HowItWorksClassic";
import ValueStackClassic from "@/components/sections/valueStack/ValueStackClassic";
import GuaranteeBadgeClassic from "@/components/sections/guarantee/GuaranteeBadgeClassic";
import SocialProofWallClassic from "@/components/sections/socialProof/SocialProofWallClassic";
import SocialProofGoogle from "@/components/sections/socialProof/SocialProofGoogle";
import FAQClassic from "@/components/sections/faq/FAQClassic";

/**
 * The only place variant ids meet components. All imports are static so
 * every variant stays a server component and Next can tree-shake nothing
 * it needs. Keys must equal VariantDef.id in registry/sections.ts —
 * scripts/check-registry.mjs enforces the correspondence.
 */
export const SECTION_COMPONENTS = {
  "hero/classic": HeroClassic,
  "hero/split": HeroSplit,
  "hero/editorial": HeroEditorial,
  "socialProof/spotlight": SocialProofSpotlight,
  "bigNumbers/classic": BigNumbersClassic,
  "pain/classic": PainClassic,
  "plan/classic": HowItWorksClassic,
  "valueStack/classic": ValueStackClassic,
  "guarantee/classic": GuaranteeBadgeClassic,
  "socialProof/classic": SocialProofWallClassic,
  "socialProof/google": SocialProofGoogle,
  "faq/classic": FAQClassic,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as const satisfies Record<string, ComponentType<any>>;

export type VariantId = keyof typeof SECTION_COMPONENTS;
