import type { ArchetypeDef } from "../types";

/** Curated whole-site design recipes. Populated by the design catalog. */
export const ARCHETYPES: ArchetypeDef[] = [];

export const ARCHETYPE_BY_ID = Object.fromEntries(
  ARCHETYPES.map((a) => [a.id, a]),
) as Record<ArchetypeDef["id"], ArchetypeDef>;
