import type { SiteConfig } from "@/site.config.types";

interface GuaranteeBadgeProps {
  guarantee: NonNullable<SiteConfig["guarantee"]>;
}

export default function GuaranteeBadge({ guarantee }: GuaranteeBadgeProps) {
  return (
    <section id="guarantee" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 rounded-2xl border border-border bg-surface p-8 sm:p-10 md:p-14">
          <div className="relative flex-shrink-0">
            <div className="flex h-48 w-48 sm:h-56 sm:w-56 flex-col items-center justify-center rounded-full border-[6px] border-accent bg-bg text-center">
              <div className="display text-4xl sm:text-5xl text-accent leading-none">
                {guarantee.badge}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-fg">
                Guarantee
              </div>
            </div>
            <div className="absolute -top-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg">
              <svg
                viewBox="0 0 20 20"
                className="h-7 w-7 text-accent-ink"
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
          </div>

          <div className="text-center md:text-left flex-1">
            <div className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
              Our Promise
            </div>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl text-fg">
              {guarantee.headline}
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed">
              {guarantee.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
