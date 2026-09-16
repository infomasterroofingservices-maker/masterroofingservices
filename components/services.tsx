import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { ServiceDetails } from "@/components/service-details";
import { serviceTags, services } from "@/lib/site";

export function Services() {
  return (
    <>
      <section id="services" className="bg-[#111111] pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 pt-12 sm:px-8 sm:pt-20 lg:pt-24">
          <Reveal>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold sm:mb-3">
              Our Services
            </p>
            <h2 className="max-w-3xl text-[1.75rem] font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Roofing Services Built For Lasting Protection
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
              New roof installation, repairs, restorations, metal roofing,
              painting, gutters, terracotta work, carports, patios, solar panel
              cleaning and driveway work — professional care that protects your
              home.
            </p>
          </Reveal>

          <Reveal delay={80} className="min-w-0">
            <ul className="mt-6 flex flex-wrap gap-2 sm:mt-10">
              {serviceTags.map((tag) => (
                <li key={tag.label}>
                  <a
                    href={tag.href}
                    className="block border border-white/20 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-white/80 transition-colors hover:border-gold hover:text-white sm:px-4 sm:text-xs sm:tracking-[0.16em]"
                  >
                    {tag.label}
                  </a>
                </li>
              ))}
            </ul>
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
                  <h3 className="mt-2 text-[1.5rem] leading-[1.15] text-white text-balance sm:mt-2 sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-white/75 sm:mt-4 sm:text-base">
                    {service.description}
                  </p>
                  <ServiceDetails items={service.details} />
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
