import type { SiteConfig } from "@/site.config.types";

interface JsonLdProps {
  config: SiteConfig;
}

export default function JsonLd({ config }: JsonLdProps) {
  const testimonials = config.socialProof?.testimonials ?? config.testimonials ?? [];
  const ratings = testimonials.map((t) => t.rating).filter((r) => r > 0);
  const avgRating =
    ratings.length > 0
      ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10
      : undefined;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": config.businessType || "LocalBusiness",
    name: config.businessName,
    description: config.description,
    url: config.url,
    email: config.email,
    slogan: config.tagline,
  };

  if (config.phone) data.telephone = config.phone;
  if (config.logo) data.logo = config.logo;
  if (config.foundedYear) data.foundingDate = String(config.foundedYear);

  if (config.address) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: config.address.street,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.zip,
      addressCountry: config.address.country,
    };
  }

  if (config.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: config.geo.latitude,
      longitude: config.geo.longitude,
    };
  }

  if (avgRating && ratings.length > 0) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: ratings.length,
      bestRating: 5,
      worstRating: 1,
    };
  }

  if (testimonials.length > 0) {
    data.review = testimonials.slice(0, 5).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      ...(t.date ? { datePublished: t.date } : {}),
    }));
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
