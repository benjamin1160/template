import type { SiteConfig } from "@/site.config.types";

interface FAQProps {
  faq: NonNullable<SiteConfig["faq"]>;
}

export default function FAQ({ faq }: FAQProps) {
  return (
    <section id="faq" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        {faq.headline && (
          <div className="text-center mb-12">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg">
              {faq.headline}
            </h2>
          </div>
        )}
        <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
          {faq.items.map((item, i) => (
            <details key={i} className="group px-6 py-5 sm:px-8">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <span className="text-base sm:text-lg font-bold text-fg">
                  {item.question}
                </span>
                <span className="mt-1 flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="faq-plus h-6 w-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-base leading-relaxed text-muted">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
