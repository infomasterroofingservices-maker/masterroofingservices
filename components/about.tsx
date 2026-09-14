import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/site";

const principles = [
  "Honest assessments",
  "Quality workmanship",
  "Dependable service",
] as const;

export function About() {
  return (
    <section className="bg-[#111111] pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 border-t border-white/10 pt-16 sm:gap-12 sm:pt-20 lg:grid-cols-2 lg:gap-20 lg:pt-24">
          <Reveal>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Our Approach
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Built on Quality.
              <br />
              Backed by Experience.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
              <p>
                Every roof we work on is treated as a long-term investment, not
                a quick job. We take the time to understand the property,
                explain the options and complete the work with care.
              </p>
              <p>
                Quality workmanship, attention to detail and reliable
                communication sit at the center of how we operate. From the
                first inspection through to the finished edge, the goal is the
                same: a roof that protects what matters.
              </p>
            </div>
            <ul className="mt-8 space-y-3">
              {principles.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white sm:text-base">
                  <span
                    className="grid w-3.5 shrink-0 grid-cols-2 gap-px"
                    aria-hidden="true"
                  >
                    <span className="aspect-square bg-lemon" />
                    <span className="aspect-square bg-white/80" />
                    <span className="aspect-square bg-white/80" />
                    <span className="aspect-square bg-lemon" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/6] lg:min-h-[520px]">
            <Image
              src={images.about}
              alt="Roofing crew installing shingles on a residential worksite"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
