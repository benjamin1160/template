import Link from "next/link";
import { notFound } from "next/navigation";
import { ARCHETYPES } from "@/registry/archetypes";
import { REGISTRY_VERSION, SECTIONS, VIBES } from "@/registry/sections";

export const metadata = { title: "Design catalog", robots: { index: false } };

/**
 * Catalog index — vibes, variants, and archetypes at a glance. Gated
 * behind NEXT_PUBLIC_ENABLE_CATALOG so generated client sites never
 * ship it; the template's own preview deploy sets the flag.
 */
export default function CatalogIndex() {
  if (process.env.NEXT_PUBLIC_ENABLE_CATALOG !== "1") notFound();

  const variantCount = SECTIONS.reduce((n, s) => n + s.variants.length, 0);

  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">
        Registry v{REGISTRY_VERSION}
      </p>
      <h1 className="display mt-3 text-4xl sm:text-5xl text-fg">
        Design catalog
      </h1>
      <p className="mt-4 max-w-2xl text-muted">
        {SECTIONS.length} section types · {variantCount} variants ·{" "}
        {VIBES.length} vibes · {ARCHETYPES.length} archetypes. Pick a vibe to
        preview every variant rendered with realistic fixture content.
      </p>

      <h2 className="display mt-12 text-2xl text-fg">Vibes</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {VIBES.map((vibe) => (
          <li key={vibe}>
            <Link
              href={`/catalog/${vibe}/`}
              className="block rounded-[var(--radius-card)] border border-border bg-surface p-5 hover:border-border-strong"
            >
              <span className="font-bold text-fg">{vibe}</span>
              <span className="mt-1 block text-sm text-muted">
                Preview all variants in {vibe} →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="display mt-12 text-2xl text-fg">Archetypes</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {ARCHETYPES.map((a) => (
          <li
            key={a.id}
            className="rounded-[var(--radius-card)] border border-border bg-surface p-5"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-bold text-fg">{a.id}</span>
              <span className="text-xs text-muted-2">
                vibe: {a.vibe} · v{a.version}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">{a.heroStyle}</p>
            <p className="mt-2 text-xs text-muted-2">
              {a.sectionPlan.map((s) => `${s.type}/${s.variant}`).join(" → ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
