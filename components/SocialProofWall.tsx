import type { SiteConfig } from "@/site.config.types";

interface SocialProofWallProps {
  socialProof: NonNullable<SiteConfig["socialProof"]>;
}

function Stars({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {stars.map((filled, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${filled ? "text-[#ffd800]" : "text-[#404040]"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.161c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.286 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.366 2.446c-.783.57-1.838-.196-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.98 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProofWall({ socialProof }: SocialProofWallProps) {
  return (
    <section id="proof" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {socialProof.headline && (
          <div className="text-center mb-14">
            <h2 className="display text-4xl sm:text-5xl md:text-6xl text-white">
              {socialProof.headline}
            </h2>
          </div>
        )}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {socialProof.testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid rounded-2xl border border-[#262626] bg-[#141414] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <Stars rating={t.rating} />
                {t.source && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                    via {t.source}
                  </span>
                )}
              </div>
              <blockquote className="text-base sm:text-lg text-white/90 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 pt-5 border-t border-[#262626] flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#a3a3a3]">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </div>
                </div>
                {t.result && (
                  <div className="rounded-full border border-[#ffd800]/40 bg-[#ffd800]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffd800] whitespace-nowrap">
                    {t.result}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
