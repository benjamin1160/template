import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import siteConfig from "@/site.config";
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
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
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
