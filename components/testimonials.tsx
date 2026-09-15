"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [pageSize, setPageSize] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const count = testimonials.length;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setPageSize(media.matches ? 3 : 1);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  function prev() {
    setIndex((value) => (value - 1 + count) % count);
  }

  function next() {
    setIndex((value) => (value + 1) % count);
  }

  const visible = Array.from({ length: pageSize }, (_, offset) => {
    const itemIndex = (index + offset) % count;
    const item = testimonials[itemIndex];
    return { ...item, itemIndex };
  });

  return (
    <section className="relative z-10 bg-[#111111]" aria-labelledby="testimonials-heading">
      <div className="relative bg-[#111111] pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20">
        <div className="mx-auto mb-10 max-w-[1400px] px-6 text-center sm:mb-14 sm:px-10 lg:mb-16 lg:px-16">
          <h2
            id="testimonials-heading"
            className="text-[2.25rem] text-white sm:text-5xl lg:text-6xl"
          >
            What They Say
          </h2>
        </div>
        <div
          className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 sm:px-10 md:grid-cols-3 md:gap-8 lg:gap-12 lg:px-16"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current == null) return;
            const dx = event.changedTouches[0].clientX - touchStartX.current;
            if (dx > 48) prev();
            if (dx < -48) next();
            touchStartX.current = null;
          }}
        >
          {visible.map((item) => (
            <article key={`${item.name}-${item.itemIndex}`} className="flex flex-col text-center">
              <div className="mb-4 flex justify-center gap-1" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="h-4 w-4 fill-lemon text-lemon"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-serif text-[1.05rem] leading-[1.7] text-white normal-case tracking-normal sm:text-lg lg:text-[1.2rem] lg:leading-8">
                “{item.quote}”
              </p>
              <p className="mt-6 font-sans text-sm text-white sm:text-base">
                {item.name}
                <span className="text-white/50"> · Google review</span>
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3 sm:mt-14">
          <button
            type="button"
            className="grid h-12 w-12 place-items-center bg-[#F7EB4F] text-[#111111] transition-transform hover:scale-105 sm:h-14 sm:w-14"
            aria-label="Previous reviews"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="grid h-12 w-12 place-items-center bg-[#F7EB4F] text-[#111111] transition-transform hover:scale-105 sm:h-14 sm:w-14"
            aria-label="Next reviews"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </section>
  );
}
