import type { ArchetypeDef } from "../types";
import { trustInstitutional } from "./trust-institutional";
import { warmLocal } from "./warm-local";
import { boldConversion } from "./bold-conversion";
import { editorialMinimal } from "./editorial-minimal";
import { playfulEnergetic } from "./playful-energetic";
import { premiumDark } from "./premium-dark";

/** Curated whole-site design recipes. One per business archetype. */
export const ARCHETYPES: ArchetypeDef[] = [
  trustInstitutional,
  warmLocal,
  boldConversion,
  editorialMinimal,
  playfulEnergetic,
  premiumDark,
];

export const ARCHETYPE_BY_ID = Object.fromEntries(
  ARCHETYPES.map((a) => [a.id, a]),
) as Record<ArchetypeDef["id"], ArchetypeDef>;
