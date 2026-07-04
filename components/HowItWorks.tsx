import type { SiteConfig } from "@/site.config.types";
import SectionHeading from "./SectionHeading";
import CTAButton from "./CTAButton";

/**
 * StoryBrand "process plan" — the 3 steps that make doing business
 * with the company look easy. The single most-skipped section on
 * small-business sites, and one of the most persuasive.
 */

interface HowItWorksProps {
  plan: NonNullable<SiteConfig["plan"]>;
}

export default function HowItWorks({ plan }: HowItWorksProps) {
  return (
    <section id="plan" className="border-t border-border bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading subline={plan.subheadline}>{plan.headline}</SectionHeading>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {plan.steps.map((step, i) => (
            <li
              key={i}
              className="rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-ink"
                aria-hidden="true"
              >
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-fg">{step.name}</h3>
              <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
              {step.outcome && (
                <p className="mt-3 text-sm font-semibold text-accent">{step.outcome}</p>
              )}
            </li>
          ))}
        </ol>
        {plan.ctaText && plan.ctaLink && (
          <div className="mt-12 text-center">
            <CTAButton href={plan.ctaLink} variant="primary" size="lg" dataCta="plan-cta">
              {plan.ctaText}
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  );
}
