import type { SiteConfig } from "@/site.config.types";
import CTAButton from "@/components/CTAButton";

interface HeroProps {
  hero: SiteConfig["hero"];
}

/**
 * Editorial hero — left-aligned, oversized display type, a single rule
 * line, restrained motion, one primary CTA with a quiet text secondary.
 * No glow, no badges: the typography is the design.
 */
export default function HeroEditorial({ hero }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-bg pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-36"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {hero.eyebrow && (
          <p className="reveal text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-muted mb-8">
            {hero.eyebrow}
          </p>
        )}

        <h1 className="reveal reveal-d1 display max-w-4xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-fg">
          {hero.headline}
        </h1>

        <div className="reveal reveal-d2 mt-10 h-px w-24 bg-border-strong" />

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <p className="reveal reveal-d2 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="reveal reveal-d3 flex flex-col items-start gap-4">
            <CTAButton
              href={hero.ctaLink}
              variant="primary"
              size="lg"
              dataCta="hero-primary"
            >
              {hero.ctaText}
            </CTAButton>
            {hero.secondaryCtaText && hero.secondaryCtaLink && (
              <a
                href={hero.secondaryCtaLink}
                data-cta="hero-secondary"
                className="text-sm font-semibold text-fg underline underline-offset-4 decoration-border-strong hover:decoration-accent"
              >
                {hero.secondaryCtaText}
              </a>
            )}
          </div>
        </div>

        {hero.trustBullets && hero.trustBullets.length > 0 && (
          <ul className="reveal reveal-d4 mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-6 text-sm text-muted">
            {hero.trustBullets.map((bullet, i) => (
              <li key={i} className="font-medium">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
