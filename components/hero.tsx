import Image from "next/image";
import { Button } from "@/components/button";
import { images, phoneHref } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={images.hero}
          alt="Professional roofers installing architectural shingles on a residential home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
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
          Master Roofing
        </h1>
        <p className="animate-fade-up animate-delay-200 mx-auto mt-3 max-w-[20rem] font-display text-[clamp(1rem,4.6vw,3rem)] font-extrabold uppercase leading-snug tracking-wide text-lemon sm:mt-4 sm:max-w-none">
          Built to last. Built to protect.
        </p>
        <div className="animate-fade-up animate-delay-300 mx-auto mt-7 flex w-full max-w-xs flex-col justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap">
          <Button href="/contact" size="lg" className="w-full sm:w-auto">
            Get a Free Quote
          </Button>
          <Button href={phoneHref} variant="secondary" size="lg" className="w-full sm:w-auto">
            Call Us
          </Button>
        </div>
      </div>
    </section>
  );
}
