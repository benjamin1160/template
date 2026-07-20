import type { ArchetypeDef } from "../types";
import { trustInstitutional } from "./trust-institutional";
import { warmLocal } from "./warm-local";
import { boldConversion } from "./bold-conversion";
import { editorialMinimal } from "./editorial-minimal";
import { playfulEnergetic } from "./playful-energetic";
import { premiumDark } from "./premium-dark";
import { freshOrganic } from "./fresh-organic";
import { brightService } from "./bright-service";
import { trustedHome } from "./trusted-home";
import { showroomPremium } from "./showroom-premium";
import { neighborhoodGarage } from "./neighborhood-garage";
import { sturdyCraftsman } from "./sturdy-craftsman";
import { organicEditorial } from "./organic-editorial";
import { rapidShield } from "./rapid-shield";
import { modernPrecision } from "./modern-precision";

/** Curated whole-site design recipes. One per business archetype. */
export const ARCHETYPES: ArchetypeDef[] = [
  trustInstitutional,
  warmLocal,
  boldConversion,
  editorialMinimal,
  playfulEnergetic,
  premiumDark,
  freshOrganic,
  brightService,
  trustedHome,
  showroomPremium,
  neighborhoodGarage,
  sturdyCraftsman,
  organicEditorial,
  rapidShield,
  modernPrecision,
];

export const ARCHETYPE_BY_ID = Object.fromEntries(
  ARCHETYPES.map((a) => [a.id, a]),
) as Record<ArchetypeDef["id"], ArchetypeDef>;
