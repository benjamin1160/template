import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "xl";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  dataCta?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink font-bold hover:bg-accent-hover brick-shadow border border-accent",
  secondary:
    "bg-surface-2 text-fg font-semibold border border-border-strong hover:bg-border hover:border-muted-2",
  ghost:
    "bg-transparent text-fg font-semibold border border-border-strong hover:bg-surface",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  ariaLabel,
  dataCta,
}: CTAButtonProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] transition-all duration-150 tracking-tight leading-none whitespace-nowrap";
  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        data-cta={dataCta || "cta"}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      aria-label={ariaLabel}
      data-cta={dataCta || "cta"}
    >
      {children}
    </Link>
  );
}
