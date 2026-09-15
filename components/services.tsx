import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { serviceTags, services } from "@/lib/site";

export function Services() {
  return (
    <>
      <section id="services" className="bg-background pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8 sm:pt-20 lg:pt-24">
          <Reveal>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold sm:mb-3">
              Our Services
            </p>
            <h2 className="max-w-3xl text-[1.75rem] font-extrabold tracking-tight text-foreground text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Built For The Home And The Outdoor Spaces Around It
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted sm:mt-4 sm:text-[17px]">
              Roofing, landscaping, decking, fencing and paving — one team for the
              work that protects the property and the spaces you live in every day.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="-mx-4 mt-6 overflow-x-auto overscroll-x-contain px-4 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
              <ul className="flex w-max gap-2 sm:w-full sm:flex-wrap">
                {serviceTags.map((tag) => (
                  <li key={tag.label} className="shrink-0">
                    <a
                      href={tag.href}
                      className="block border border-foreground/15 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:border-gold hover:text-foreground sm:px-4 sm:text-xs sm:tracking-[0.16em]"
                    >
                      {tag.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="relative bg-[#111111]">
        {services.map((service, index) => (
          <article
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 lg:scroll-mt-32 ${
              index === 0 ? "" : "border-t border-white/10"
            }`}
          >
            <div className="mx-auto grid max-w-[1500px] items-stretch lg:grid-cols-2">
              <div
                className={`relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[400px] ${
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

              <div className="relative z-10 -mt-8 px-4 pb-8 sm:-mt-0 sm:flex sm:items-center sm:px-10 sm:py-10 lg:px-14 lg:py-12">
                <Reveal className="w-full bg-[#1a1a1a] px-5 py-6 sm:bg-transparent sm:p-0">
                  <p className="text-xs font-medium tracking-[0.16em] text-gold sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-[1.5rem] leading-[1.05] text-white sm:mt-2 sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/75 sm:mt-4 sm:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 sm:mt-6 sm:space-y-2">
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
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex min-h-11 items-center font-display text-sm font-extrabold uppercase tracking-wide text-lemon transition-colors hover:text-white sm:mt-8"
                  >
                    Request a quote
                  </Link>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
        <div className="px-4 py-14 text-center sm:py-16">
          <Button href="/contact">Request a Quote</Button>
        </div>
      </div>
    </>
  );
}
