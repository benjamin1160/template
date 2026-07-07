import type { ComponentType } from "react";
import type { SectionInstance, SiteConfig } from "@/site.config.types";
import { SECTION_BY_TYPE } from "@/registry/sections";
import { SECTION_COMPONENTS, type VariantId } from "@/lib/section-map";

interface SectionRendererProps {
  config: SiteConfig;
  sections: SectionInstance[];
}

/**
 * Renders an ordered section plan against the config's content slices.
 * Semantics match the previous hardcoded page: a section renders only
 * when its slice exists and isn't switched off via `enabled: false`.
 * Unknown variants fall back to the section's default variant, so a
 * stale config can never break the build.
 */
export default function SectionRenderer({
  config,
  sections,
}: SectionRendererProps) {
  return (
    <>
      {sections.map((instance, i) => {
        const def = SECTION_BY_TYPE[instance.type];
        if (!def) return null;

        const slice = config[def.configKey] as
          | { enabled?: boolean }
          | undefined;
        if (!slice || slice.enabled === false) return null;

        const requested = `${def.type}/${instance.variant ?? def.defaultVariant}`;
        const fallback = `${def.type}/${def.defaultVariant}`;
        const Component = (SECTION_COMPONENTS[requested as VariantId] ??
          SECTION_COMPONENTS[fallback as VariantId]) as unknown as
          | ComponentType<Record<string, unknown>>
          | undefined;
        if (!Component) return null;

        return (
          <Component key={`${requested}-${i}`} {...{ [def.configKey]: slice }} />
        );
      })}
    </>
  );
}
