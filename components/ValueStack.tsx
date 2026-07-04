import type { SiteConfig } from "@/site.config.types";
import CTAButton from "./CTAButton";
import { currency, totalValue, suggestedPrice } from "@/lib/theme";

interface ValueStackProps {
  valueStack: NonNullable<SiteConfig["valueStack"]>;
}

export default function ValueStack({ valueStack }: ValueStackProps) {
  const total = totalValue(valueStack.items);
  const priceText = valueStack.priceAmount || suggestedPrice(valueStack.items);
  const totalLabel = valueStack.totalLabel || "Total value";

  return (
    <section id="offer" className="bg-bg py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg">
            {valueStack.headline}
          </h2>
          {valueStack.subheadline && (
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto">
              {valueStack.subheadline}
            </p>
          )}
        </div>

        <div className="overflow-hidden rounded-2xl border border-border-strong bg-surface">
          <ul className="divide-y divide-border">
            {valueStack.items.map((item, i) => (
              <li key={i} className="flex gap-4 p-5 sm:p-6 items-start">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent">
                  <svg
                    viewBox="0 0 20 20"
                    className="h-5 w-5 text-accent-ink"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <p className="text-lg sm:text-xl font-bold text-fg">
                      {item.name}
                    </p>
                    <p className="strike-price text-base sm:text-lg font-semibold tabular-nums">
                      {currency(item.originalValue)}
                    </p>
                  </div>
                  {item.description && (
                    <p className="mt-1 text-sm sm:text-base text-muted">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="border-t border-border-strong bg-surface-2 px-6 py-6 sm:px-8">
            <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-border">
              <span className="text-sm sm:text-base font-semibold uppercase tracking-wider text-muted">
                {totalLabel}
              </span>
              <span className="strike-price text-2xl sm:text-3xl font-black tabular-nums">
                {currency(total)}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4 pt-5">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-fg">
                {valueStack.priceLabel}
              </span>
              <span className="display text-4xl sm:text-5xl md:text-6xl text-accent tabular-nums">
                {priceText}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <CTAButton
            href={valueStack.ctaLink}
            variant="primary"
            size="xl"
            dataCta="value-stack"
          >
            {valueStack.ctaText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
