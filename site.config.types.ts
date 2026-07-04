export interface ValueStackItem {
  name: string;
  description?: string;
  originalValue: number;
  included?: boolean;
}

export interface BigNumberStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  image?: string;
  rating: number;
  date?: string;
  source?: string;
  result?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  description: string;
  icon?: string;
  features?: string[];
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
}

export interface BusinessHours {
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
  sunday?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FinalCta {
  headline: string;
  subheadline?: string;
  ctaText: string;
  ctaLink: string;
}

export type LandingRegister = "hormozi";

/**
 * Curated art directions. Each vibe sets the full token set — palette,
 * display/body fonts, radii, glow — in app/globals.css:
 *  - midnight  — ink black, heavy display sans, electric accent (default)
 *  - editorial — warm paper, display serif, restrained; premium services
 *  - crisp     — cool off-white, tight geometric sans; professional services
 *  - warm      — cream + terracotta, soft serif, rounded; family businesses
 *  - voltage   — near-black, grotesk display, neon accent; max offer energy
 */
export type DesignVibe =
  | "midnight"
  | "editorial"
  | "crisp"
  | "warm"
  | "voltage";

export interface SiteConfig {
  businessName: string;
  tagline: string;
  description: string;
  url: string;
  logo?: string;
  phone?: string;
  email: string;
  address?: Address;
  businessType?: string;
  geo?: GeoCoordinates;
  hours?: BusinessHours;
  foundedYear?: number;

  theme: {
    primaryColor: string;
    accentColor: string;
    darkMode: boolean;
  };

  /**
   * Art direction. `vibe` picks the curated direction; `accent` (and
   * `accentInk` — text color ON the accent) optionally override the
   * vibe's default accent with the business's brand color. Omitted →
   * midnight with its stock accent.
   */
  design?: {
    vibe: DesignVibe;
    accent?: string;
    accentInk?: string;
  };

  landingRegister: LandingRegister;

  /**
   * GoHighLevel sub-account binding. When present (populated by the
   * quick-launch pipeline at generation time), the layout renders the
   * LeadConnector chat widget bound to this location so chats land in
   * the client's GHL conversations inbox. Set chatWidget: false to
   * suppress the widget without removing the binding.
   */
  ghl?: {
    locationId: string;
    chatWidget?: boolean;
  };

  nav: NavItem[];

  urgency?: {
    enabled: boolean;
    message: string;
    ctaLabel?: string;
    ctaHref?: string;
  };

  hero: {
    eyebrow?: string;
    headline: string;
    subheadline: string;
    ctaText: string;
    ctaLink: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
    trustBullets?: string[];
    backgroundImage?: string;
    backgroundVideo?: string;
  };

  bigNumbers?: {
    enabled: boolean;
    headline?: string;
    stats: BigNumberStat[];
  };

  pain?: {
    enabled: boolean;
    headline: string;
    points: string[];
  };

  valueStack?: {
    enabled: boolean;
    headline: string;
    subheadline?: string;
    items: ValueStackItem[];
    totalLabel?: string;
    priceLabel: string;
    priceAmount?: string;
    ctaText: string;
    ctaLink: string;
  };

  guarantee?: {
    enabled: boolean;
    badge: string;
    headline: string;
    body: string;
  };

  socialProof?: {
    enabled: boolean;
    headline?: string;
    testimonials: Testimonial[];
  };

  about: {
    headline: string;
    story: string;
    mission?: string;
    values?: string[];
  };

  services: ServiceItem[];

  faq?: {
    enabled: boolean;
    headline?: string;
    items: FAQItem[];
  };

  testimonials: Testimonial[];

  blog: {
    enabled: boolean;
    postsPerPage: number;
    posts: BlogPost[];
  };

  contact: {
    headline: string;
    subtitle: string;
    formFields: ("name" | "email" | "phone" | "message" | "company")[];
    formEndpoint?: string;
  };

  seo: {
    titleTemplate: string;
    defaultOgImage?: string;
    locale: string;
    primaryKeywords?: string[];
  };

  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
    yelp?: string;
    googleBusiness?: string;
  };

  footer: {
    copyrightName: string;
    columns: FooterColumn[];
    finalCta?: FinalCta;
  };
}
