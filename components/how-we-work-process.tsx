import Image from "next/image";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { RoofPeak } from "@/components/roof-peak";
import { howWeWorkSteps, phoneHref, site } from "@/lib/site";

type HowWeWorkProcessProps = {
  standalone?: boolean;
  compact?: boolean;
  peak?: boolean;
};

export function HowWeWorkProcess({
  standalone = false,
  compact = false,
  peak = false,
}: HowWeWorkProcessProps) {
  const cream = standalone;

  const content = (
    <>
      <Reveal>
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
          How We Work
        </p>
        <h2
          className={`max-w-4xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
            cream ? "text-foreground" : "text-white"
          }`}
        >
          We Make the Entire Process as Simple as Possible
        </h2>
      </Reveal>

      {compact ? (
        <Reveal>
          <p
            className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-[17px] ${
              cream ? "text-muted" : "text-white/70"
            }`}
          >
            A professional opinion, clear options and a straightforward next
            step — from the first call through to the finished job.
          </p>
        </Reveal>
      ) : (
        <div className="mt-10 grid items-center gap-8 lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal>
            <p
              className={`max-w-xl text-base leading-relaxed sm:text-[17px] ${
                cream ? "text-muted" : "text-white/70"
              }`}
            >
              Contact us through the form or call our team on{" "}
              <a
                href={phoneHref}
                className={`transition-colors ${
                  cream
                    ? "text-foreground hover:text-gold"
                    : "text-white hover:text-lemon"
                }`}
              >
                {site.phone}
              </a>{" "}
              to discuss your project. We will work with you — a professional
              opinion, clear options and a straightforward next step.
            </p>
            <Button href="/contact" className="mt-8">
              Get a Free Quote
            </Button>
          </Reveal>

          <Reveal delay={100} className="relative aspect-[16/10] overflow-hidden lg:aspect-[5/3]">
            <Image
              src="/projects/1.jpeg"
              alt="Completed commercial roofing work by Master Roofing Services"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      )}

      <ol
        className={`mt-12 grid gap-8 border-t pt-12 sm:mt-16 sm:grid-cols-2 sm:gap-10 sm:pt-16 lg:grid-cols-4 lg:gap-8 ${
          cream ? "border-foreground/10" : "border-white/10"
        }`}
      >
        {howWeWorkSteps.map((step, index) => (
          <li key={step.number}>
            <Reveal delay={index * 70}>
              <p className="font-display text-3xl font-extrabold tracking-wide text-lemon sm:text-4xl">
                {step.number}
              </p>
              <h3
                className={`mt-3 text-lg font-extrabold tracking-tight sm:text-xl ${
                  cream ? "text-foreground" : "text-white"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  cream ? "text-muted" : "text-white/70"
                }`}
              >
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </>
  );

  if (standalone) {
    return (
      <section className="relative bg-background pb-16 pt-16 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        {peak ? <RoofPeak fill="#f7f6f2" /> : null}
        <div className="mx-auto max-w-7xl px-5 sm:px-8">{content}</div>
      </section>
    );
  }

  return <div className="pb-16 sm:pb-20 lg:pb-24">{content}</div>;
}
