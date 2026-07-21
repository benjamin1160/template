import type { SiteConfig } from "@/site.config.types";

interface SocialProofWallProps {
  socialProof: NonNullable<SiteConfig["socialProof"]>;
}

function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {stars.map((filled, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${filled ? "text-accent" : "text-border-strong"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.783.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.98 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function AggregateBadge({
  aggregate,
}: {
  aggregate: NonNullable<NonNullable<SiteConfig["socialProof"]>["aggregate"]>;
}) {
  const label = `${aggregate.rating} · ${aggregate.count} reviews${
    aggregate.source ? ` on ${aggregate.source}` : ""
  }`;
  const badge = (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-fg">
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-accent" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.783.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.98 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
      {label}
    </span>
  );
  return aggregate.url ? (
    <a href={aggregate.url} target="_blank" rel="noopener noreferrer">
      {badge}
    </a>
  ) : (
    badge
  );
}

export default function SocialProofWall({ socialProof }: SocialProofWallProps) {
  return (
    <section id="proof" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {(socialProof.headline || socialProof.aggregate) && (
          <div className="text-center mb-14">
            {socialProof.headline && (
              <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg">
                {socialProof.headline}
              </h2>
            )}
            {socialProof.aggregate && (
              <div className={socialProof.headline ? "mt-6" : ""}>
                <AggregateBadge aggregate={socialProof.aggregate} />
              </div>
            )}
          </div>
        )}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {socialProof.testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl border border-border bg-surface p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <Stars rating={t.rating} />
                {t.source && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-2">
                    via {t.source}
                  </span>
                )}
              </div>
              <blockquote className="text-base sm:text-lg text-fg/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-fg">{t.name}</div>
                  <div className="text-xs text-muted">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </div>
                </div>
                {t.result && (
                  <div className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent whitespace-nowrap">
                    {t.result}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
