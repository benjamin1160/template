import type { SiteConfig } from "@/site.config.types";

interface SocialProofSpotlightProps {
  socialProof: NonNullable<SiteConfig["socialProof"]>;
}

function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex justify-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
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

/**
 * Spotlight social proof — one testimonial carries the section as an
 * oversized pull quote; up to three more sit quietly beneath it.
 * Editorial/premium registers where a wall of cards would feel busy.
 */
export default function SocialProofSpotlight({
  socialProof,
}: SocialProofSpotlightProps) {
  const [featured, ...rest] = socialProof.testimonials;
  if (!featured) return null;
  const supporting = rest.slice(0, 3);

  return (
    <section id="proof" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {socialProof.headline && (
          <div className="text-center mb-14">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg">
              {socialProof.headline}
            </h2>
          </div>
        )}

        <figure className="text-center">
          <Stars rating={featured.rating} />
          <blockquote className="display mt-8 text-2xl sm:text-3xl md:text-4xl text-fg leading-snug">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-8 text-sm text-muted">
            <span className="font-bold text-fg">{featured.name}</span>
            {" · "}
            {featured.role}
            {featured.company ? ` · ${featured.company}` : ""}
            {featured.result && (
              <span className="mt-3 block">
                <span className="inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                  {featured.result}
                </span>
              </span>
            )}
          </figcaption>
        </figure>

        {supporting.length > 0 && (
          <div className="mt-16 grid gap-6 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {supporting.map((t, i) => (
              <div key={i} className="rounded-[var(--radius-card)] border border-border bg-surface p-6">
                <blockquote className="text-sm sm:text-base text-fg/90 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-4 text-xs text-muted">
                  <span className="font-bold text-fg">{t.name}</span>
                  {" · "}
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
