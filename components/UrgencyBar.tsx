import type { SiteConfig } from "@/site.config.types";

interface UrgencyBarProps {
  urgency: NonNullable<SiteConfig["urgency"]>;
}

export default function UrgencyBar({ urgency }: UrgencyBarProps) {
  if (!urgency.enabled) return null;
  return (
    <div className="sticky top-0 z-50 bg-accent text-accent-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 flex items-center justify-center gap-4 text-center text-sm sm:text-base">
        <span className="font-bold tracking-tight">{urgency.message}</span>
        {urgency.ctaLabel && urgency.ctaHref && (
          <a
            href={urgency.ctaHref}
            className="hidden sm:inline-block font-bold underline underline-offset-4 decoration-2 hover:decoration-4"
            data-cta="urgency-bar"
          >
            {urgency.ctaLabel} →
          </a>
        )}
      </div>
    </div>
  );
}
