import type { SiteConfig } from "@/site.config.types";
import CTAButton from "./CTAButton";

interface HeroProps {
  hero: SiteConfig["hero"];
}

export default function Hero({ hero }: HeroProps) {
  const bgUrl = hero.backgroundImage;
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg pt-16 pb-20 sm:pt-24 sm:pb-32 md:pt-32 md:pb-40"
    >
      {bgUrl && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgUrl}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-bg/70" />
        </div>
      )}
      {hero.backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src={hero.backgroundVideo} />
        </video>
      )}
      <div className="hero-glow" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 text-center">
        {hero.eyebrow && (
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </div>
        )}

        <h1 className="reveal reveal-d1 display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-fg">
          {hero.headline}
        </h1>

        <p className="reveal reveal-d2 mt-8 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted leading-relaxed">
          {hero.subheadline}
        </p>

        <div className="reveal reveal-d3 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton
            href={hero.ctaLink}
            variant="primary"
            size="xl"
            dataCta="hero-primary"
          >
            {hero.ctaText}
          </CTAButton>
          {hero.secondaryCtaText && hero.secondaryCtaLink && (
            <CTAButton
              href={hero.secondaryCtaLink}
              variant="ghost"
              size="xl"
              dataCta="hero-secondary"
            >
              {hero.secondaryCtaText}
            </CTAButton>
          )}
        </div>

        {hero.trustBullets && hero.trustBullets.length > 0 && (
          <ul className="reveal reveal-d4 mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm sm:text-base text-muted">
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
    </section>
  );
}
