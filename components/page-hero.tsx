import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { RoofPeak } from "@/components/roof-peak";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image: string;
  fill?: string;
  peak?: boolean;
};

export function PageHero({
  title,
  subtitle,
  image,
  fill = "#111111",
  peak = true,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56svh] items-center justify-center pt-[calc(6.5rem+env(safe-area-inset-top))] sm:min-h-[62svh] sm:pt-32 lg:min-h-[68svh] lg:pt-40">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 text-center sm:px-8 sm:pb-16 lg:pb-20">
        <BrandMark className="animate-fade-up mx-auto mb-3 lg:mb-4" />
        <h1 className="animate-fade-up animate-delay-100 mx-auto max-w-6xl text-[clamp(2rem,8vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight text-white text-balance">
          {title}
        </h1>
        {subtitle ? (
          <p className="animate-fade-up animate-delay-200 mx-auto mt-3 max-w-xl font-display text-[clamp(1rem,3.2vw,1.5rem)] font-extrabold uppercase leading-snug tracking-wide text-lemon sm:mt-4">
            {subtitle}
          </p>
        ) : null}
      </div>

      {peak ? <RoofPeak fill={fill} placement="bottom" /> : null}
    </section>
  );
}
