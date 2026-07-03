import Link from "next/link";
import type { SiteConfig } from "@/site.config.types";
import CTAButton from "./CTAButton";

interface HeaderProps {
  config: SiteConfig;
}

export default function Header({ config }: HeaderProps) {
  return (
    <header className="sticky top-[36px] z-40 border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0a0a0a]/75">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-black tracking-tight text-white truncate max-w-[180px] sm:max-w-none">
              {config.businessName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {config.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-[#a3a3a3] hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {config.phone && (
              <a
                href={`tel:${config.phone.replace(/[^+\d]/g, "")}`}
                className="hidden lg:inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#ffd800] transition-colors"
                data-cta="header-phone"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                {config.phone}
              </a>
            )}
            <CTAButton
              href={config.hero.ctaLink}
              variant="primary"
              size="sm"
              dataCta="header-primary"
            >
              {config.hero.ctaText}
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
