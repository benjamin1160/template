import type { SiteConfig } from "@/site.config.types";

interface BigNumbersProps {
  bigNumbers: NonNullable<SiteConfig["bigNumbers"]>;
}

export default function BigNumbers({ bigNumbers }: BigNumbersProps) {
  const { headline, stats } = bigNumbers;
  return (
    <section className="border-y border-[#262626] bg-[#0a0a0a] py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {headline && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className="display text-3xl sm:text-4xl md:text-5xl text-white">
              {headline}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="display text-6xl md:text-7xl lg:text-8xl text-[#ffd800] tabular-nums">
                {stat.value}
              </div>
              <div className="mt-3 text-sm md:text-base font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="mt-1 text-xs md:text-sm text-[#a3a3a3]">
                  {stat.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
