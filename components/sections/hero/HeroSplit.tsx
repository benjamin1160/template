import type { SiteConfig } from "@/site.config.types";
import CTAButton from "@/components/CTAButton";

interface HeroProps {
  hero: SiteConfig["hero"];
}

/**
 * Split hero — copy left, photography right. Leads with the image, so
 * it earns its place only when a strong photo of real work/people
 * exists; without one it falls back to a stat-style surface panel.
 */
export default function HeroSplit({ hero }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            {hero.eyebrow && (
              <div className="reveal inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-7">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {hero.eyebrow}
              </div>
            )}

            <h1 className="reveal reveal-d1 display text-4xl sm:text-6xl lg:text-7xl text-fg">
              {hero.headline}
            </h1>

            <p className="reveal reveal-d2 mt-6 max-w-xl text-lg sm:text-xl text-muted leading-relaxed">
              {hero.subheadline}
            </p>

            <div className="reveal reveal-d3 mt-9 flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={hero.ctaLink}
                variant="primary"
                size="lg"
                dataCta="hero-primary"
              >
                {hero.ctaText}
              </CTAButton>
              {hero.secondaryCtaText && hero.secondaryCtaLink && (
                <CTAButton
                  href={hero.secondaryCtaLink}
                  variant="ghost"
                  size="lg"
                  dataCta="hero-secondary"
                >
                  {hero.secondaryCtaText}
                </CTAButton>
              )}
            </div>

            {hero.trustBullets && hero.trustBullets.length > 0 && (
              <ul className="reveal reveal-d4 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base text-muted">
                {hero.trustBullets.map((bullet, i) => (
                  <li key={i} className="inline-flex items-center gap-2">
                    <svg
                      viewBox="0 0 20 20"
                      className="h-5 w-5 flex-shrink-0 text-accent"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-fg/90">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="reveal reveal-d2 relative">
            {hero.backgroundImage ? (
              <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hero.backgroundImage}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-[var(--radius-card)] border border-border bg-surface-2 p-10">
                <p className="display text-center text-3xl sm:text-4xl text-fg/80">
                  {hero.eyebrow ?? hero.ctaText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
