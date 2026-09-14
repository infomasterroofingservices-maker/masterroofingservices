import Image from "next/image";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { serviceTags, services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="bg-[#111111]">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8 sm:pt-24 lg:pt-28">
        <Reveal>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold sm:mb-3">
            Our Services
          </p>
          <h2 className="max-w-3xl text-[1.75rem] font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Built For The Home And The Outdoor Spaces Around It
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
            Roofing, landscaping, decking, fencing and paving — one team for the
            work that protects the property and the spaces you live in every day.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="-mx-4 mt-6 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            <ul className="flex w-max gap-2 sm:w-full sm:flex-wrap">
              {serviceTags.map((tag) => (
                <li
                  key={tag}
                  className="shrink-0 border border-white/15 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/80 sm:px-4 sm:text-xs sm:tracking-[0.16em]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 sm:mt-20 lg:mt-24">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className="scroll-mt-24 border-t border-white/10 lg:scroll-mt-32"
          >
            <div className="mx-auto grid max-w-[1500px] items-stretch lg:grid-cols-2">
              <div
                className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[560px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111111] lg:hidden"
                  aria-hidden="true"
                />
              </div>

              <div className="relative z-10 -mt-8 px-4 pb-10 sm:-mt-0 sm:flex sm:items-center sm:px-10 sm:py-14 lg:px-16 lg:py-20">
                <Reveal className="w-full bg-[#1a1a1a] px-5 py-7 sm:bg-transparent sm:p-0">
                  <div
                    className="mb-4 grid w-6 grid-cols-2 gap-0.5 sm:mb-6 sm:w-8"
                    aria-hidden="true"
                  >
                    <span className="aspect-square bg-lemon" />
                    <span className="aspect-square bg-white" />
                    <span className="aspect-square bg-white" />
                    <span className="aspect-square bg-lemon" />
                  </div>
                  <p className="text-xs font-medium tracking-[0.16em] text-gold sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[1.65rem] leading-[1.05] text-white sm:mt-3 sm:text-5xl lg:text-6xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/75 sm:mt-5 sm:text-base lg:text-[17px] lg:leading-7">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 sm:mt-8 sm:space-y-2.5">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/85 sm:gap-3 sm:text-[15px]"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-lemon"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" className="mt-7 w-full sm:mt-10 sm:w-auto">
                    Request a Quote
                  </Button>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
