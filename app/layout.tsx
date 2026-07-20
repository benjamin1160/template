import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import {
  Inter,
  Fraunces,
  Manrope,
  Space_Grotesk,
  Nunito,
  Instrument_Sans,
  Hanken_Grotesk,
  Plus_Jakarta_Sans,
  Libre_Caslon_Display,
  Outfit,
} from "next/font/google";
import siteConfig from "@/site.config";
import type { DesignVibe } from "@/site.config.types";
import { validateSiteConfig } from "@/lib/validate-config";
import UrgencyBar from "@/components/UrgencyBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA, { buildProps as stickyProps } from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

// Vibe-specific families: preload disabled so a generated site only
// downloads the families its active vibe's font stacks reference.
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: false,
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
  preload: false,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
  preload: false,
});

const caslon = Libre_Caslon_Display({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: false,
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

/** Browser chrome color per vibe — must match each vibe's --bg. */
const VIBE_META: Record<DesignVibe, { themeColor: string; dark: boolean }> = {
  midnight: { themeColor: "#0a0a0a", dark: true },
  editorial: { themeColor: "#faf7f1", dark: false },
  crisp: { themeColor: "#fafafa", dark: false },
  warm: { themeColor: "#fdf8f3", dark: false },
  voltage: { themeColor: "#09090b", dark: true },
  playful: { themeColor: "#fffbeb", dark: false },
  meadow: { themeColor: "#f2f1e7", dark: false },
  sparkle: { themeColor: "#f7f7f2", dark: false },
  homestead: { themeColor: "#ffffff", dark: false },
  showroom: { themeColor: "#05111e", dark: true },
  garage: { themeColor: "#f6f5f0", dark: false },
  craftsman: { themeColor: "#f7f7ec", dark: false },
  grove: { themeColor: "#121212", dark: true },
  shield: { themeColor: "#ffffff", dark: false },
  precision: { themeColor: "#ffffff", dark: false },
};

// Runs during `next build` static generation — an invalid config fails
// the build with named paths instead of shipping a broken site.
validateSiteConfig(siteConfig);

const vibe: DesignVibe = siteConfig.design?.vibe ?? "midnight";
const vibeMeta = VIBE_META[vibe] ?? VIBE_META.midnight;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "https://example.com"),
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.primaryKeywords,
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    ...(siteConfig.seo.defaultOgImage
      ? { images: [{ url: siteConfig.seo.defaultOgImage }] }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: vibeMeta.themeColor,
  colorScheme: vibeMeta.dark ? "dark" : "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Brand color override — the vibe supplies a curated default accent;
  // site.config may swap it for the business's real brand color.
  const accentOverride: CSSProperties | undefined = siteConfig.design?.accent
    ? ({
        "--accent": siteConfig.design.accent,
        ...(siteConfig.design.accentInk
          ? { "--accent-ink": siteConfig.design.accentInk }
          : {}),
      } as CSSProperties)
    : undefined;

  return (
    <html
      lang="en"
      data-vibe={vibe}
      style={accentOverride}
      className={`${inter.variable} ${fraunces.variable} ${manrope.variable} ${grotesk.variable} ${nunito.variable} ${instrument.variable} ${hanken.variable} ${jakarta.variable} ${caslon.variable} ${outfit.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg antialiased">
        <JsonLd config={siteConfig} />
        {siteConfig.urgency?.enabled && (
          <UrgencyBar urgency={siteConfig.urgency} />
        )}
        <Header config={siteConfig} />
        <main className="flex-1">{children}</main>
        <Footer config={siteConfig} />
        <StickyMobileCTA {...stickyProps(siteConfig)} />
        <ChatWidget config={siteConfig} />
      </body>
    </html>
  );
}
