import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  children: ReactNode;
  subline?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  children,
  subline,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignClasses} max-w-4xl ${className}`}>
      {eyebrow && (
        <div
          className={`text-sm font-bold uppercase tracking-widest text-accent mb-4 ${
            align === "center" ? "" : ""
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="display text-4xl sm:text-5xl md:text-6xl text-fg">
        {children}
      </h2>
      {subline && (
        <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto">
          {subline}
        </p>
      )}
    </div>
  );
}
