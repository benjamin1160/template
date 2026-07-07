import type { RegistryManifest } from "./types";
import {
  DEFAULT_SECTIONS,
  REGISTRY_VERSION,
  SECTIONS,
  VIBES,
} from "./sections";
import { ARCHETYPES } from "./archetypes";

/**
 * Assembles the machine-readable manifest emitted to registry/manifest.json
 * by scripts/build-registry.mjs. The factory (everyrhing-site) fetches that
 * JSON from generated repos — keep this pure data, no component imports.
 */
export function buildManifest(): RegistryManifest {
  return {
    registryVersion: REGISTRY_VERSION,
    vibes: VIBES,
    defaultSectionPlan: DEFAULT_SECTIONS,
    sections: SECTIONS,
    archetypes: ARCHETYPES,
  };
}
