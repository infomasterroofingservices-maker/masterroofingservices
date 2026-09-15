import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { RoofPeak } from "@/components/roof-peak";
import { homeHighlights } from "@/lib/site";

export function HomeHighlights() {
  return (
    <section className="relative bg-background pt-12 pb-12 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
      <RoofPeak fill="#f7f6f2" />

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:px-8 md:grid-cols-6">
        {homeHighlights.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 70}
            className={`h-full md:col-span-2 ${index === 3 ? "md:col-start-2" : ""}`}
          >
            <Link href={item.href} className="group flex h-full flex-col text-center">
              <h2 className="text-[2rem] leading-tight text-foreground sm:text-3xl lg:text-5xl">
                {item.title}
              </h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted sm:mt-3 sm:min-h-[4.5rem] sm:text-base lg:text-lg">
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
    </section>
  );
}
