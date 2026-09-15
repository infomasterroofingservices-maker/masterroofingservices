import Image from "next/image";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { founder, site } from "@/lib/site";

export function Founder() {
  return (
    <section
      id="founder"
      className="relative bg-[#111111] py-20 sm:py-24 lg:py-28"
      aria-labelledby="founder-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <p className="absolute top-2 right-0 select-none font-display text-[clamp(6rem,18vw,14rem)] font-extrabold leading-none tracking-tight text-white/[0.035] sm:top-4">
          FOUNDER
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-x-20 lg:gap-y-10">
        <Reveal className="relative mx-auto w-full max-w-md pb-8 pl-3 sm:pl-5 sm:pb-0 lg:mx-0 lg:max-w-none">
          <div
            className="absolute top-5 left-0 h-[calc(100%-1.25rem)] w-[calc(100%-0.75rem)] border border-lemon sm:top-7 sm:w-[calc(100%-1.25rem)]"
            aria-hidden="true"
          />
          <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
            <Image
              src={founder.image}
              alt={`${founder.name}, ${founder.role} of ${site.name}`}
              fill
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 100vw"
              className="object-cover object-[center_12%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-5 right-8 bg-lemon px-5 py-4 sm:left-auto sm:-right-4 sm:bottom-8 sm:w-56 sm:px-6 sm:py-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#111111]/70">
              {founder.role}
            </p>
            <p className="mt-1 font-display text-3xl font-extrabold uppercase leading-none tracking-wide text-[#111111] sm:text-4xl">
              {founder.name}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="pt-6 lg:pt-0">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Meet the Founder
          </p>
          <h2
            id="founder-heading"
            className="max-w-xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Hands-on from the first inspection.
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-white/70 sm:text-[17px]">
            {founder.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="relative mt-8 max-w-xl border-l-2 border-lemon pl-5">
            <p className="font-serif text-lg leading-relaxed text-white italic sm:text-xl">
              &ldquo;{founder.quote}&rdquo;
            </p>
            <footer className="mt-3 text-sm uppercase tracking-[0.16em] text-white/50">
              {founder.name}, {site.address}
            </footer>
          </blockquote>
          <Button href="/contact" className="mt-8 w-full sm:mt-10 sm:w-auto">
            Talk to {founder.name}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
