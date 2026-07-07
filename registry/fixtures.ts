import type { SiteConfig } from "../site.config.types";

/**
 * Realistic sample content for every section, used by the /catalog
 * preview and CI render checks. Keys match SiteConfig slice names.
 */
export interface SectionFixtures {
  hero: SiteConfig["hero"];
  bigNumbers: NonNullable<SiteConfig["bigNumbers"]>;
  pain: NonNullable<SiteConfig["pain"]>;
  plan: NonNullable<SiteConfig["plan"]>;
  valueStack: NonNullable<SiteConfig["valueStack"]>;
  guarantee: NonNullable<SiteConfig["guarantee"]>;
  socialProof: NonNullable<SiteConfig["socialProof"]>;
  faq: NonNullable<SiteConfig["faq"]>;
}

export const FIXTURES: SectionFixtures = {
  hero: {
    eyebrow: "For homeowners in Austin",
    headline: "Your roof replaced in 2 days — guaranteed for 25 years.",
    subheadline:
      "The crew 1,400 Austin homeowners trusted last year. Free inspection, fixed quote in 24 hours, zero surprises.",
    ctaText: "Get my free inspection →",
    ctaLink: "#offer",
    secondaryCtaText: "See real roofs",
    secondaryCtaLink: "#proof",
    trustBullets: [
      "1,400+ roofs replaced",
      "25-year workmanship warranty",
      "Fixed quote in 24 hours",
      "Licensed & insured",
    ],
  },
  bigNumbers: {
    enabled: true,
    headline: "The numbers don't lie.",
    stats: [
      { value: "1,400+", label: "Roofs replaced", sublabel: "since 2015" },
      { value: "2 days", label: "Average install", sublabel: "start to cleanup" },
      { value: "4.9/5", label: "Average rating", sublabel: "800+ reviews" },
      { value: "25-yr", label: "Workmanship warranty", sublabel: "in writing" },
    ],
  },
  pain: {
    enabled: true,
    headline: "A leaking roof doesn't wait for a convenient time.",
    points: [
      "Three contractors gave you three wildly different quotes — and none would put it in writing.",
      "The last crew left nails in your lawn and a voicemail box that's been full since Tuesday.",
      "Every storm season you wonder if this is the year the ceiling stain becomes a ceiling hole.",
    ],
  },
  plan: {
    enabled: true,
    headline: "Three steps to a roof you never think about again.",
    steps: [
      {
        name: "Book the free inspection",
        description: "20 minutes, photos included, no pressure.",
        outcome: "You know exactly what's wrong and what it costs.",
      },
      {
        name: "Approve the fixed quote",
        description: "One number, in writing, valid 30 days.",
        outcome: "No surprises on invoice day.",
      },
      {
        name: "We install in 2 days",
        description: "Full cleanup, magnetic nail sweep, final walkthrough.",
        outcome: "A 25-year warranty in your hand.",
      },
    ],
    ctaText: "Start with step 1 →",
    ctaLink: "#offer",
  },
  valueStack: {
    enabled: true,
    headline: "Everything included. One fixed price.",
    subheadline: "What every one of our 1,400 customers got.",
    items: [
      {
        name: "Full tear-off and 2-day install",
        description: "Architectural shingles, synthetic underlayment, new flashing.",
        originalValue: 12500,
      },
      {
        name: "25-year workmanship warranty",
        description: "Transferable if you sell. In writing.",
        originalValue: 2400,
      },
      {
        name: "Drone inspection + photo report",
        description: "Before and after, yours to keep for insurance.",
        originalValue: 450,
      },
      {
        name: "Magnetic nail sweep + full cleanup",
        description: "Your lawn like we were never there.",
        originalValue: 300,
      },
    ],
    totalLabel: "Total value",
    priceLabel: "Your fixed quote from",
    priceAmount: "$9,800",
    ctaText: "Get my exact number →",
    ctaLink: "#contact",
  },
  guarantee: {
    enabled: true,
    badge: "25-Year",
    headline: "If it leaks, we fix it free. For 25 years.",
    body: "Every roof we install carries a 25-year transferable workmanship warranty. If anything we installed fails, we repair it at zero cost — parts, labor, and the trip out. No fine print.",
  },
  socialProof: {
    enabled: true,
    headline: "Real homeowners. Real roofs.",
    testimonials: [
      {
        name: "Marcus Reyes",
        role: "Homeowner",
        company: "Barton Hills",
        quote:
          "Quoted Tuesday, installed Thursday and Friday, spotless lawn Saturday. The warranty paperwork was in my inbox before the crew left.",
        rating: 5,
        source: "Google",
        result: "2-day install",
      },
      {
        name: "Jenna Whitfield",
        role: "Homeowner",
        company: "Round Rock",
        quote:
          "Two other companies wouldn't put their quote in writing. These folks did, and the final invoice matched it to the dollar.",
        rating: 5,
        source: "Google",
        result: "Quote matched invoice",
      },
      {
        name: "David Chen",
        role: "Homeowner",
        company: "Cedar Park",
        quote:
          "Hail took out half the street's roofs. Ours was the only crew that handled the insurance paperwork for us. Done in two days.",
        rating: 5,
        source: "Yelp",
        result: "Insurance handled",
      },
    ],
  },
  faq: {
    enabled: true,
    headline: "The questions everyone asks.",
    items: [
      {
        question: "How fast can you start?",
        answer:
          "Inspections book within 48 hours. Most installs start within 10 days of an approved quote — sooner after storms, since we hold crew capacity for emergencies.",
      },
      {
        question: "Is the quote really fixed?",
        answer:
          "Yes. The number we put in writing is the number you pay. If we find hidden decking damage, we photograph it and get your approval before touching it.",
      },
      {
        question: "Do you handle insurance claims?",
        answer:
          "We document everything with drone photos and meet your adjuster on site. Most hail and wind claims are approved on the first pass.",
      },
    ],
  },
};
