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
        <Reveal className="relative mx-auto w-full max-w-sm pb-2 pl-3 sm:pl-4 lg:mx-0 lg:max-w-md">
          <div
            className="absolute top-4 left-0 h-[calc(100%-1rem)] w-[calc(100%-0.75rem)] border border-lemon sm:top-5 sm:w-[calc(100%-1rem)]"
            aria-hidden="true"
          />
          <div className="relative flex min-h-[16rem] flex-col justify-end bg-[#1a1a1a] px-6 py-8 sm:min-h-[18rem] sm:px-8 sm:py-9 lg:min-h-[20rem] lg:px-9 lg:py-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
              {founder.role}
            </p>
            <p className="mt-3 font-display text-[clamp(3rem,10vw,5.5rem)] font-extrabold uppercase leading-[0.82] tracking-tight text-white">
              {founder.name}
            </p>
            <span className="mt-5 h-1 w-12 bg-lemon" aria-hidden="true" />
            <p className="mt-4 max-w-[14rem] font-display text-xs font-extrabold uppercase tracking-[0.18em] text-white/55 sm:text-sm">
              {site.name}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
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
