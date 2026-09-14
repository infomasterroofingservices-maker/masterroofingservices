import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { homeHighlights } from "@/lib/site";

export function HomeHighlights() {
  return (
    <section className="relative bg-[#111111] pt-12 pb-12 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
      <svg
        className="absolute -top-7 left-0 h-7 w-full overflow-visible sm:-top-12 sm:h-12 lg:-top-16 lg:h-16"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,12 50,0 100,12" fill="#111111" />
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

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:px-8 md:grid-cols-6">
        {homeHighlights.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 70}
            className={`h-full md:col-span-2 ${index === 3 ? "md:col-start-2" : ""}`}
          >
            <Link href={item.href} className="group flex h-full flex-col text-center">
              <h2 className="text-[2rem] leading-tight text-white sm:text-4xl lg:text-5xl">
                {item.title}
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-white/80 sm:mt-3 sm:min-h-[4.5rem] sm:text-base lg:text-lg">
                {item.description}
              </p>
              <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden sm:mt-6">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center px-4 sm:mt-14 sm:px-8 lg:mt-16">
        <Link
          href="/contact"
          className="inline-flex min-h-11 w-full max-w-xs items-center justify-center bg-[#F7EB4F] px-6 py-3 font-display text-base font-extrabold uppercase tracking-wide text-[#111111] transition-colors hover:bg-[#F7EB4F]/90 sm:w-auto sm:px-10 sm:py-4 sm:text-xl"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
