import type { SiteConfig } from "@/site.config.types";

interface GalleryGridProps {
  gallery: NonNullable<SiteConfig["gallery"]>;
}

/**
 * Masonry photo gallery — real photos of the work, place, or people at
 * their natural aspect ratios. Lazy-loaded below the fold; renders
 * nothing when the config has no images.
 */
export default function GalleryGrid({ gallery }: GalleryGridProps) {
  if (gallery.images.length === 0) return null;
  return (
    <section id="gallery" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {gallery.headline && (
          <div className="text-center mb-14">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg">
              {gallery.headline}
            </h2>
          </div>
        )}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {gallery.images.map((image, i) => (
            <figure
              key={i}
              className="break-inside-avoid overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block w-full"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
