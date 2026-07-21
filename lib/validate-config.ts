import { z } from "zod";
import type { SiteConfig } from "@/site.config.types";
import { VIBES } from "@/registry/sections";

const vibeEnum = z.enum(VIBES as [(typeof VIBES)[number], ...typeof VIBES]);

const sectionTypeEnum = z.enum([
  "hero",
  "bigNumbers",
  "pain",
  "plan",
  "valueStack",
  "guarantee",
  "socialProof",
  "gallery",
  "faq",
]);

const valueStackItem = z.object({
  name: z.string(),
  description: z.string().optional(),
  originalValue: z.number(),
  included: z.boolean().optional(),
});

const bigNumberStat = z.object({
  value: z.string(),
  label: z.string(),
  sublabel: z.string().optional(),
});

const testimonial = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string().optional(),
  quote: z.string(),
  image: z.string().optional(),
  rating: z.number(),
  date: z.string().optional(),
  source: z.string().optional(),
  result: z.string().optional(),
});

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const planStep = z.object({
  name: z.string(),
  description: z.string(),
  outcome: z.string().optional(),
});

const serviceItem = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
  image: z.string().optional(),
});

const blogPost = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  date: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
});

const businessHours = z.object({
  monday: z.string().optional(),
  tuesday: z.string().optional(),
  wednesday: z.string().optional(),
  thursday: z.string().optional(),
  friday: z.string().optional(),
  saturday: z.string().optional(),
  sunday: z.string().optional(),
});

const address = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  zip: z.string(),
  country: z.string(),
});

const geoCoordinates = z.object({
  latitude: z.number(),
  longitude: z.number(),
});

const navItem = z.object({
  label: z.string(),
  href: z.string(),
});

const footerLink = z.object({
  label: z.string(),
  href: z.string(),
});

const footerColumn = z.object({
  title: z.string(),
  links: z.array(footerLink),
});

const finalCta = z.object({
  headline: z.string(),
  subheadline: z.string().optional(),
  ctaText: z.string(),
  ctaLink: z.string(),
});

const sectionInstance = z.object({
  type: sectionTypeEnum,
  variant: z.string().optional(),
});

export const siteConfigSchema = z.object({
  businessName: z.string(),
  tagline: z.string(),
  description: z.string(),
  url: z.string(),
  logo: z.string().optional(),
  phone: z.string().optional(),
  email: z.string(),
  address: address.optional(),
  businessType: z.string().optional(),
  geo: geoCoordinates.optional(),
  hours: businessHours.optional(),
  foundedYear: z.number().optional(),

  theme: z.object({
    primaryColor: z.string(),
    accentColor: z.string(),
    darkMode: z.boolean(),
  }),

  design: z
    .object({
      vibe: vibeEnum,
      accent: z.string().optional(),
      accentInk: z.string().optional(),
      archetype: z.string().optional(),
    })
    .optional(),

  landingRegister: z.literal("hormozi"),

  ghl: z
    .object({
      locationId: z.string(),
      chatWidget: z.boolean().optional(),
    })
    .optional(),

  sections: z.array(sectionInstance).optional(),

  nav: z.array(navItem),

  urgency: z
    .object({
      enabled: z.boolean(),
      message: z.string(),
      ctaLabel: z.string().optional(),
      ctaHref: z.string().optional(),
    })
    .optional(),

  hero: z.object({
    eyebrow: z.string().optional(),
    headline: z.string(),
    subheadline: z.string(),
    ctaText: z.string(),
    ctaLink: z.string(),
    secondaryCtaText: z.string().optional(),
    secondaryCtaLink: z.string().optional(),
    trustBullets: z.array(z.string()).optional(),
    backgroundImage: z.string().optional(),
    backgroundVideo: z.string().optional(),
  }),

  bigNumbers: z
    .object({
      enabled: z.boolean(),
      headline: z.string().optional(),
      stats: z.array(bigNumberStat),
    })
    .optional(),

  pain: z
    .object({
      enabled: z.boolean(),
      headline: z.string(),
      points: z.array(z.string()),
    })
    .optional(),

  plan: z
    .object({
      enabled: z.boolean(),
      headline: z.string(),
      subheadline: z.string().optional(),
      steps: z.array(planStep),
      ctaText: z.string().optional(),
      ctaLink: z.string().optional(),
    })
    .optional(),

  valueStack: z
    .object({
      enabled: z.boolean(),
      headline: z.string(),
      subheadline: z.string().optional(),
      items: z.array(valueStackItem),
      totalLabel: z.string().optional(),
      priceLabel: z.string(),
      priceAmount: z.string().optional(),
      ctaText: z.string(),
      ctaLink: z.string(),
    })
    .optional(),

  guarantee: z
    .object({
      enabled: z.boolean(),
      badge: z.string(),
      headline: z.string(),
      body: z.string(),
    })
    .optional(),

  socialProof: z
    .object({
      enabled: z.boolean(),
      headline: z.string().optional(),
      testimonials: z.array(testimonial),
      aggregate: z
        .object({
          rating: z.number(),
          count: z.number(),
          source: z.string().optional(),
          url: z.string().optional(),
        })
        .optional(),
    })
    .optional(),

  gallery: z
    .object({
      enabled: z.boolean(),
      headline: z.string().optional(),
      images: z.array(z.object({ src: z.string(), alt: z.string() })),
    })
    .optional(),

  about: z.object({
    headline: z.string(),
    story: z.string(),
    mission: z.string().optional(),
    values: z.array(z.string()).optional(),
  }),

  services: z.array(serviceItem),

  faq: z
    .object({
      enabled: z.boolean(),
      headline: z.string().optional(),
      items: z.array(faqItem),
    })
    .optional(),

  testimonials: z.array(testimonial),

  blog: z.object({
    enabled: z.boolean(),
    postsPerPage: z.number(),
    posts: z.array(blogPost),
  }),

  contact: z.object({
    headline: z.string(),
    subtitle: z.string(),
    formFields: z.array(
      z.enum(["name", "email", "phone", "message", "company"]),
    ),
    formEndpoint: z.string().optional(),
  }),

  seo: z.object({
    titleTemplate: z.string(),
    defaultOgImage: z.string().optional(),
    locale: z.string(),
    primaryKeywords: z.array(z.string()).optional(),
  }),

  social: z.object({
    facebook: z.string().optional(),
    twitter: z.string().optional(),
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    youtube: z.string().optional(),
    tiktok: z.string().optional(),
    yelp: z.string().optional(),
    googleBusiness: z.string().optional(),
  }),

  footer: z.object({
    copyrightName: z.string(),
    columns: z.array(footerColumn),
    finalCta: finalCta.optional(),
  }),
});

// Compile-time drift guards: the zod schema and the SiteConfig interface
// must describe the same shape in both directions.
type Inferred = z.infer<typeof siteConfigSchema>;
const _schemaCoversType: SiteConfig = {} as Inferred;
const _typeCoversSchema: Inferred = {} as SiteConfig;
void _schemaCoversType;
void _typeCoversSchema;

/**
 * Validates a site config, throwing a readable error naming every bad
 * path. Called at module scope in app/layout.tsx so an invalid config
 * fails `next build` instead of shipping a broken site.
 */
export function validateSiteConfig(config: unknown): SiteConfig {
  const result = siteConfigSchema.safeParse(config);
  if (!result.success) {
    const details = result.error.issues
      .map((issue) => `  - ${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("\n");
    throw new Error(
      `site.config.ts failed validation:\n${details}\n` +
        "Fix the fields above (see site.config.types.ts for the contract).",
    );
  }
  return result.data as SiteConfig;
}
