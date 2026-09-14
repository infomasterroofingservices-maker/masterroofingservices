import Image from "next/image";
import { images } from "@/lib/site";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  fill?: string;
};

export function PageHero({ title, subtitle, fill = "#111111" }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[72svh] items-center justify-center sm:min-h-[80svh]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-[calc(5.5rem+env(safe-area-inset-top))] text-center sm:px-8 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
        <div
          className="animate-fade-up mx-auto mb-2 grid w-6 grid-cols-2 gap-0.5 sm:w-7 lg:mb-3 lg:w-8"
          aria-hidden="true"
        >
          <span className="aspect-square bg-lemon" />
          <span className="aspect-square bg-white" />
          <span className="aspect-square bg-white" />
          <span className="aspect-square bg-lemon" />
        </div>
        <h1 className="animate-fade-up animate-delay-100 mx-auto max-w-6xl text-[clamp(2.25rem,10.5vw,7.5rem)] font-extrabold leading-[0.92] tracking-tight text-white text-balance">
          {title}
        </h1>
        {subtitle ? (
          <p className="animate-fade-up animate-delay-200 mx-auto mt-3 max-w-xl font-display text-[clamp(1rem,3.4vw,1.75rem)] font-extrabold uppercase leading-snug tracking-wide text-lemon sm:mt-4">
            {subtitle}
          </p>
        ) : null}
      </div>

      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-20 h-7 w-full overflow-visible sm:h-12 lg:h-16"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,12 50,0 100,12" fill={fill} />
        <polyline
          points="0,12 50,0.6 100,12"
          fill="none"
          stroke="#F7EB4F"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </section>
  );
}
