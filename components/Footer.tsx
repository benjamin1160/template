import Link from "next/link";
import type { SiteConfig } from "@/site.config.types";

interface FooterProps {
  config: SiteConfig;
}

export default function Footer({ config }: FooterProps) {
  const year = 2026;
  const cityState = config.address
    ? `${config.address.city}, ${config.address.state}`
    : "";
  return (
    <footer className="bg-[#0a0a0a]">
      {config.footer.finalCta && (
        <section className="bg-[#ffd800] text-[#0a0a0a]">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 py-16 md:py-20 text-center">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl">
              {config.footer.finalCta.headline}
            </h2>
            {config.footer.finalCta.subheadline && (
              <p className="mt-4 text-lg sm:text-xl font-semibold">
                {config.footer.finalCta.subheadline}
              </p>
            )}
            <div className="mt-8">
              <a
                href={config.footer.finalCta.ctaLink}
                className="inline-flex items-center justify-center rounded-md bg-[#0a0a0a] text-white px-10 py-5 text-xl font-bold hover:bg-[#141414] transition-colors"
                data-cta="footer-final"
              >
                {config.footer.finalCta.ctaText}
              </a>
            </div>
          </div>
        </section>
      )}

      <div className="border-t border-[#262626]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-xl font-black text-white">
                {config.businessName}
              </div>
              <p className="mt-3 text-sm text-[#a3a3a3] max-w-sm">
                {config.tagline}
              </p>
              <div className="mt-6">
                <a
                  href={config.hero.ctaLink}
                  className="inline-flex items-center justify-center rounded-md bg-[#ffd800] text-[#0a0a0a] px-6 py-3 text-sm font-bold brick-shadow"
                  data-cta="footer-repeat"
                >
                  {config.hero.ctaText}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {config.footer.columns.map((col) => (
                <div key={col.title}>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#737373] mb-4">
                    {col.title}
                  </div>
                  <ul className="space-y-3">
                    {col.links.map((link) => {
                      const isAnchor = link.href.startsWith("#");
                      const isExternal = link.href.startsWith("http");
                      if (isAnchor || isExternal) {
                        return (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
                              target={isExternal ? "_blank" : undefined}
                              rel={
                                isExternal ? "noopener noreferrer" : undefined
                              }
                            >
                              {link.label}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="text-sm text-[#a3a3a3] hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
            <div>
              © {year} {config.footer.copyrightName}. All rights reserved.
            </div>
            {cityState && <div>{cityState}</div>}
          </div>
        </div>
      </div>
    </footer>
  );
}
