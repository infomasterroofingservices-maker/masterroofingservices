import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary: "bg-[#F7EB4F] text-[#111111] hover:bg-[#F7EB4F]/90",
  secondary:
    "border border-white/35 bg-transparent text-white hover:border-lemon hover:bg-white/10 hover:text-lemon",
  outline:
    "border border-foreground/20 bg-transparent text-foreground hover:border-gold",
} as const;

const sizes = {
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-14 px-8 py-4 text-lg sm:min-h-16 sm:px-10 sm:text-xl",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

const base =
  "inline-flex items-center justify-center font-display font-extrabold uppercase tracking-wide transition-colors duration-300 touch-manipulation";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">)
  | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">)
);

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ComponentPropsWithoutRef<"button">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
