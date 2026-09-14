import { Reveal } from "@/components/reveal";
import { whyItems } from "@/lib/site";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="border-t border-white/10 bg-[#111111] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Why Choose Us
          </p>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Why Homeowners Choose Master Roofing Services
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-[17px]">
            Reliability, craftsmanship and customer service are the reasons
            people ask us back. We keep the process simple and the workmanship
            exact.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {whyItems.map((item, index) => (
            <Reveal
              key={item.number}
              delay={index * 70}
              className={index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <article className="h-full border border-white/10 bg-[#1a1a1a] p-6 sm:p-7">
                <p className="font-display text-2xl font-extrabold tracking-wide text-lemon">
                  {item.number}
                </p>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
