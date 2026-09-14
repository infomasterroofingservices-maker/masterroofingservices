import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Master Roofing Services"
      width={320}
      height={320}
      className={`h-12 w-auto max-w-[9.5rem] object-contain object-left sm:h-16 sm:max-w-none lg:h-[88px] ${className}`}
      priority={priority}
    />
  );
}
