import siteConfig from "@/site.config";
import SectionRenderer from "@/components/SectionRenderer";
import { DEFAULT_SECTIONS } from "@/registry/sections";

export default function Home() {
  return (
    <SectionRenderer
      config={siteConfig}
      sections={siteConfig.sections ?? DEFAULT_SECTIONS}
    />
  );
}
