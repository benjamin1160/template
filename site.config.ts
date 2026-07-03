import type { SiteConfig } from "./site.config.types";

const siteConfig: SiteConfig = {
  businessName: "Your Business Name",
  tagline: "The outcome your customers actually want",
  description:
    "One sentence: the exact result you deliver, for whom, in what timeframe, with what guarantee.",
  url: "https://example.com",
  phone: "+1-555-000-0000",
  email: "hello@example.com",
  address: {
    street: "123 Main Street",
    city: "Phoenix",
    state: "AZ",
    zip: "85001",
    country: "US",
  },
  businessType: "LocalBusiness",
  foundedYear: 2020,

  theme: {
    primaryColor: "#0a0a0a",
    accentColor: "#ffd800",
    darkMode: true,
  },

  landingRegister: "hormozi",

  nav: [
    { label: "Offer", href: "#offer" },
    { label: "Proof", href: "#proof" },
    { label: "Guarantee", href: "#guarantee" },
    { label: "FAQ", href: "#faq" },
  ],

  urgency: {
    enabled: true,
    message: "⚡ Only 3 spots left this month",
    ctaLabel: "Claim yours",
    ctaHref: "#offer",
  },

  hero: {
    eyebrow: "For business owners in Phoenix",
    headline: "Get 30+ qualified leads in 60 days—or you don't pay.",
    subheadline:
      "The exact system we've used to fill the calendars of 2,800+ local businesses. No retainers. No long contracts. Real results, fast.",
    ctaText: "Claim my 3 spots →",
    ctaLink: "#offer",
    secondaryCtaText: "See client results",
    secondaryCtaLink: "#proof",
    trustBullets: [
      "2,847+ local businesses served",
      "60-day performance guarantee",
      "No long-term contract",
      "Setup in under 7 days",
    ],
  },

  bigNumbers: {
    enabled: true,
    headline: "The numbers don't lie.",
    stats: [
      { value: "2,847", label: "Businesses served", sublabel: "since 2020" },
      { value: "$47M+", label: "Client revenue generated", sublabel: "tracked & verified" },
      { value: "4.9/5", label: "Average rating", sublabel: "across 1,200+ reviews" },
      { value: "60-day", label: "Money-back guarantee", sublabel: "zero-risk" },
    ],
  },

  pain: {
    enabled: true,
    headline: "You didn't start this business to babysit ad campaigns.",
    points: [
      "You've spent thousands on \"marketing experts\" who deliver reports, not customers.",
      "Your phone rings, but half the callers are tire-kickers wasting your time.",
      "You're the best in your market—but the top spot on Google goes to a competitor with a worse product.",
      "You know you need to show up online. You have zero time to figure out how.",
    ],
  },

  valueStack: {
    enabled: true,
    headline: "Here's exactly what you get.",
    subheadline: "Every piece we've built for the 2,847 businesses before you. Yours.",
    items: [
      {
        name: "Done-for-you lead-gen system",
        description: "We build, launch, and manage the entire funnel. You get the leads.",
        originalValue: 4997,
      },
      {
        name: "60-day guaranteed pipeline",
        description: "30+ qualified booked calls in your calendar, or we work free until you get them.",
        originalValue: 3997,
      },
      {
        name: "AI follow-up assistant",
        description: "Every lead gets called, texted, and re-engaged inside 90 seconds. 24/7.",
        originalValue: 2997,
      },
      {
        name: "Custom-branded landing page",
        description: "Built by our team in 5 days. Yours to keep.",
        originalValue: 1497,
      },
      {
        name: "Weekly performance review",
        description: "A real human on a real call every week. No dashboards—just outcomes.",
        originalValue: 997,
      },
      {
        name: "Private client community",
        description: "The playbooks, scripts, and templates that took us 5 years to build.",
        originalValue: 497,
      },
    ],
    totalLabel: "Total value",
    priceLabel: "Your investment today",
    priceAmount: "$2,497",
    ctaText: "Claim my spot →",
    ctaLink: "#contact",
  },

  guarantee: {
    enabled: true,
    badge: "60-Day",
    headline: "You get the leads—or you get your money back. Period.",
    body: "If we don't put at least 30 qualified booked calls on your calendar in the first 60 days, we refund every dollar and keep working for free until we do. No fine print. No games.",
  },

  socialProof: {
    enabled: true,
    headline: "Real business owners. Real results.",
    testimonials: [
      {
        name: "Marcus Reyes",
        role: "Owner",
        company: "Reyes HVAC",
        quote:
          "We booked 47 service calls in the first 30 days. I had to hire two more techs. Best decision I've made in 12 years of running this business.",
        rating: 5,
        source: "Google",
        result: "47 calls in 30 days",
      },
      {
        name: "Jenna Whitfield",
        role: "Founder",
        company: "Whitfield Detailing",
        quote:
          "I was skeptical of the guarantee. They hit 30 leads in week 3. I stopped counting after 80. My whole month is booked out.",
        rating: 5,
        source: "Google",
        result: "3x monthly bookings",
      },
      {
        name: "David Chen",
        role: "GM",
        company: "Chen Family Dental",
        quote:
          "We were spending $6k/mo on Google Ads with nothing to show. Switched. Now our new-patient count doubled and our cost per acquisition dropped 63%.",
        rating: 5,
        source: "Yelp",
        result: "2x new patients",
      },
      {
        name: "Rachel O'Connor",
        role: "Owner",
        company: "O'Connor Roofing",
        quote:
          "The follow-up AI alone paid for the whole thing. Leads I would've never called back turned into $180k of jobs in one quarter.",
        rating: 5,
        source: "Google",
        result: "$180k in Q1",
      },
      {
        name: "Tomás García",
        role: "Owner",
        company: "García Landscaping",
        quote:
          "Simple. It works. I stopped chasing quotes and my crew is booked six weeks out. First time in ten years.",
        rating: 5,
        source: "Google",
        result: "6-week backlog",
      },
      {
        name: "Priya Nair",
        role: "Owner",
        company: "Nair Med Spa",
        quote:
          "Every dollar tracked. Every lead accounted for. My marketing finally feels like a business, not a bonfire.",
        rating: 5,
        source: "Yelp",
        result: "4.2x ROAS",
      },
    ],
  },

  about: {
    headline: "Why we exist",
    story:
      "We got tired of watching great local businesses lose to worse competitors with bigger ad budgets. So we built the system we wished existed when we ran our own service business. Everything we do is measured, guaranteed, and priced to be a no-brainer.",
    mission:
      "Make world-class marketing available to any local business willing to show up and do the work.",
    values: [
      "We don't win unless you win",
      "Numbers over narratives",
      "Speed of execution beats theory",
      "Say what we do. Do what we say.",
    ],
  },

  services: [
    {
      slug: "lead-generation",
      name: "Done-for-you lead generation",
      description:
        "We build the funnel, run the ads, and hand you booked calls. You show up and close.",
      features: [
        "Custom offer positioning",
        "Ad creative + copy",
        "Landing page built in 5 days",
        "Ongoing optimization",
      ],
    },
    {
      slug: "ai-follow-up",
      name: "AI follow-up assistant",
      description:
        "Every inbound lead gets called, texted, and re-engaged in under 90 seconds. 24/7. Never miss another one.",
      features: [
        "Instant SMS + voice callback",
        "Multi-day nurture sequences",
        "CRM sync built in",
        "Full transcript history",
      ],
    },
    {
      slug: "landing-page",
      name: "Custom landing page build",
      description:
        "A page built specifically to convert your traffic. Copywriting, design, and integration done for you.",
      features: [
        "Copy from a real copywriter",
        "Mobile-first design",
        "Analytics + call tracking",
        "Yours to keep",
      ],
    },
  ],

  faq: {
    enabled: true,
    headline: "The questions everyone asks.",
    items: [
      {
        question: "How long until I see leads?",
        answer:
          "Most clients get their first booked call within 7–10 days of launch. The 60-day guarantee covers you either way—if we don't hit 30 qualified calls, we refund every dollar and keep working free.",
      },
      {
        question: "What's the total investment?",
        answer:
          "$2,497 setup, then $997/mo for management. No long-term contract. Cancel any time. The 60-day money-back guarantee applies to the setup fee as well.",
      },
      {
        question: "What if it doesn't work for my industry?",
        answer:
          "We've launched this system across 40+ industries: HVAC, roofing, dental, med spa, legal, home services, and more. If we don't think we can hit the guarantee in your market, we'll tell you on the intro call and won't take your money.",
      },
      {
        question: "Do I have to sign a long contract?",
        answer: "No. Month-to-month. Cancel any time. That's the whole point of the guarantee.",
      },
      {
        question: "Who actually does the work?",
        answer:
          "A senior strategist owns your account (not a junior). Ad buying, copywriting, and page building are handled by our in-house team. No offshoring, no white-labeling.",
      },
      {
        question: "How do I get started?",
        answer:
          "Click any button on this page. You'll book a 20-minute strategy call. If we're a fit, we start immediately. If we're not, we'll point you somewhere better—no hard sell.",
      },
    ],
  },

  testimonials: [],

  blog: { enabled: false, postsPerPage: 9, posts: [] },

  contact: {
    headline: "Claim your spot.",
    subtitle:
      "Three spots left this month. Book a 20-minute call. If we're a fit, we start immediately.",
    formFields: ["name", "email", "phone", "company", "message"],
  },

  seo: {
    titleTemplate: "%s | Your Business Name",
    locale: "en_US",
    primaryKeywords: ["local lead generation", "done-for-you marketing"],
  },

  social: {},

  footer: {
    copyrightName: "Your Business Name",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Offer",
        links: [
          { label: "What you get", href: "#offer" },
          { label: "Guarantee", href: "#guarantee" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
    ],
    finalCta: {
      headline: "Three spots left this month.",
      subheadline: "Miss it and the next opening is in 6 weeks.",
      ctaText: "Claim my spot →",
      ctaLink: "#contact",
    },
  },
};

export default siteConfig;
