import type { SiteConfig } from "@/site.config.types";

interface SocialProofGoogleProps {
  socialProof: NonNullable<SiteConfig["socialProof"]>;
}

/*
 * Google's brand colors are intentionally hardcoded in this variant —
 * the G logo, amber stars, and letter-avatar palette reproduce the
 * native Google-review look, which must stay identical in every vibe.
 * Everything else (surfaces, text, borders) uses the semantic tokens.
 */
const GOOGLE_STAR = "#fbbc04";
const AVATAR_COLORS = ["#1a73e8", "#188038", "#d93025", "#f9ab00", "#9334e6", "#e8710a"];

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

function GoogleStars({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  const rounded = Math.round(rating);
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={size}
          fill={i < rounded ? GOOGLE_STAR : "none"}
          stroke={i < rounded ? GOOGLE_STAR : "currentColor"}
          strokeWidth={i < rounded ? 0 : 1.4}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.783.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.98 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function LetterAvatar({ name }: { name: string }) {
  const initial = (name.trim()[0] || "?").toUpperCase();
  const color = AVATAR_COLORS[name.length % AVATAR_COLORS.length];
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-medium text-white"
      style={{ backgroundColor: color }}
      aria-hidden="true"
    >
      {initial}
    </span>
  );
}

/**
 * Google-review wall: an aggregate rating header with the Google G and
 * amber stars, then review cards styled like native Google reviews —
 * letter avatars, name + relative date, star row, plain review text.
 */
export default function SocialProofGoogle({ socialProof }: SocialProofGoogleProps) {
  const { aggregate } = socialProof;
  const sourceName = aggregate?.source || "Google";

  return (
    <section id="proof" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="text-center mb-12">
          {socialProof.headline && (
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg mb-6">
              {socialProof.headline}
            </h2>
          )}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-border bg-surface px-6 py-3">
            <span className="flex items-center gap-2">
              <GoogleG className="h-6 w-6" />
              <span className="text-sm font-semibold text-fg">{sourceName} Reviews</span>
            </span>
            {aggregate && (
              <>
                <span className="text-2xl font-bold text-fg">
                  {aggregate.rating.toFixed(1)}
                </span>
                <span className="text-border-strong">
                  <GoogleStars rating={aggregate.rating} size="h-5 w-5" />
                </span>
                <span className="text-sm text-muted">
                  Based on {aggregate.count.toLocaleString()} reviews
                </span>
              </>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {socialProof.testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-[var(--radius-card)] border border-border bg-surface p-6 flex flex-col"
            >
              <div className="flex items-center gap-3">
                <LetterAvatar name={t.name} />
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-fg">{t.name}</div>
                  {t.date && <div className="text-xs text-muted-2">{t.date}</div>}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-border-strong">
                <GoogleStars rating={t.rating} />
                <GoogleG className="h-3.5 w-3.5" />
              </div>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-fg/90">
                {t.quote}
              </p>
            </div>
          ))}
        </div>

        {aggregate?.url && (
          <div className="mt-10 text-center">
            <a
              href={aggregate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius-btn)] border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-fg hover:bg-surface-2"
            >
              <GoogleG className="h-4 w-4" />
              See all reviews on {sourceName}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
