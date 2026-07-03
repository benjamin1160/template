import type { SiteConfig } from "@/site.config.types";

interface PainProps {
  pain: NonNullable<SiteConfig["pain"]>;
}

export default function Pain({ pain }: PainProps) {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <h2 className="display text-4xl sm:text-5xl md:text-6xl text-white text-center">
          {pain.headline}
        </h2>
        <ul className="mt-14 space-y-6">
          {pain.points.map((point, i) => (
            <li
              key={i}
              className="flex gap-5 items-start rounded-xl border border-[#262626] bg-[#141414] p-5 sm:p-6"
            >
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#ff3b30]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#ff3b30]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
