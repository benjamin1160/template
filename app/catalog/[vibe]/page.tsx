import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FIXTURES } from "@/registry/fixtures";
import { SECTIONS, VIBES } from "@/registry/sections";
import { SECTION_COMPONENTS, type VariantId } from "@/lib/section-map";

export const metadata = { title: "Variant preview", robots: { index: false } };

export function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_ENABLE_CATALOG !== "1") return [];
  return VIBES.map((vibe) => ({ vibe }));
}

/**
 * Renders every registered variant with fixture content inside a
 * data-vibe wrapper, so each vibe's token block re-skins the previews.
 * This is also the CI render check: a variant that throws breaks the
 * build when the catalog flag is on.
 */
export default async function CatalogVibePage({
  params,
}: {
  params: Promise<{ vibe: string }>;
}) {
  if (process.env.NEXT_PUBLIC_ENABLE_CATALOG !== "1") notFound();
  const { vibe } = await params;
  if (!VIBES.includes(vibe as (typeof VIBES)[number])) notFound();

  return (
    <div data-vibe={vibe} className="bg-bg text-fg">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 pt-12">
        <Link href="/catalog/" className="text-sm text-muted hover:text-fg">
          ← Catalog
        </Link>
        <h1 className="display mt-3 text-4xl text-fg">{vibe}</h1>
        <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
          {VIBES.filter((v) => v !== vibe).map((v) => (
            <Link key={v} href={`/catalog/${v}/`} className="underline underline-offset-4 hover:text-fg">
              {v}
            </Link>
          ))}
        </div>
      </div>

      {SECTIONS.map((section) =>
        section.variants.map((variant) => {
          const Component = SECTION_COMPONENTS[
            variant.id as VariantId
          ] as unknown as ComponentType<Record<string, unknown>>;
          const slice = FIXTURES[section.type];
          const supported =
            variant.supportedVibes === "all" ||
            variant.supportedVibes.includes(vibe as (typeof VIBES)[number]);
          return (
            <section key={variant.id} className="mt-16">
              <div className="mx-auto max-w-5xl px-6 sm:px-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-border-strong pt-6">
                  <h2 className="font-mono text-sm font-bold text-accent">
                    {variant.id}
                  </h2>
                  <span className="text-xs text-muted-2">
                    {variant.status}
                    {!supported && " · not recommended for this vibe"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{variant.description}</p>
                <p className="mt-1 text-xs text-muted-2">
                  use when: {variant.useWhen.join("; ")}
                </p>
              </div>
              <div className="mt-6 border-y border-border">
                <Component {...{ [section.configKey]: slice }} />
              </div>
            </section>
          );
        }),
      )}
      <div className="h-24" />
    </div>
  );
}
