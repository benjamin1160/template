import type { SiteConfig } from "@/site.config.types";

interface StickyMobileCTAProps {
  phone?: string;
  ctaText: string;
  ctaLink: string;
}

export function buildProps(config: SiteConfig): StickyMobileCTAProps {
  return {
    phone: config.phone,
    ctaText: config.hero.ctaText,
    ctaLink: config.hero.ctaLink,
  };
}

export default function StickyMobileCTA({
  phone,
  ctaText,
  ctaLink,
}: StickyMobileCTAProps) {
  const isExternal =
    ctaLink.startsWith("http") ||
    ctaLink.startsWith("tel:") ||
    ctaLink.startsWith("mailto:");
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-bg/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 p-3">
        {phone && (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, "")}`}
            className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md border border-border-strong bg-surface text-fg"
            aria-label={`Call ${phone}`}
            data-cta="mobile-call"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        )}
        <a
          href={ctaLink}
          target={isExternal && ctaLink.startsWith("http") ? "_blank" : undefined}
          rel={
            isExternal && ctaLink.startsWith("http")
              ? "noopener noreferrer"
              : undefined
          }
          className="flex-1 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-bold text-accent-ink brick-shadow"
          data-cta="mobile-primary"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
