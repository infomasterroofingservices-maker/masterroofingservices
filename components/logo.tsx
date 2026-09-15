import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  compact?: boolean;
};

export function Logo({ className = "", priority = false, compact = false }: LogoProps) {
  const size = compact
    ? "h-10 max-w-[8.5rem] sm:h-16 sm:max-w-none lg:h-[88px]"
    : "h-14 max-w-[10.5rem] sm:h-16 sm:max-w-none lg:h-[88px]";

  return (
    <Image
      src="/logo.png"
      alt="Master Roofing Services"
      width={320}
      height={320}
      className={`w-auto object-contain object-left ${size} ${className}`}
      priority={priority}
    />
  );
}
