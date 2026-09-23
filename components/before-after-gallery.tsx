"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { BeforeAfterJob } from "@/lib/project-media";

type BeforeAfterGalleryProps = {
  jobs: BeforeAfterJob[];
};

export function BeforeAfterGallery({ jobs }: BeforeAfterGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? current : (current + 1) % jobs.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null
            ? current
            : (current - 1 + jobs.length) % jobs.length,
        );
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, jobs.length]);

  if (jobs.length === 0) return null;

  const activeJob = active === null ? null : jobs[active];

  return (
    <>
      <div className="mt-12 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
        {jobs.map((job, index) => (
          <article key={job.src} className="min-w-0">
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block w-full overflow-hidden bg-[#1a1a1a] ring-1 ring-white/10 transition duration-500 hover:ring-[#F7EB4F] focus-visible:ring-2 focus-visible:ring-[#F7EB4F]"
              aria-label={`View ${job.title} before and after`}
            >
              <span className="block overflow-hidden">
                <Image
                  src={job.src}
                  alt={job.alt}
                  width={2400}
                  height={1200}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="pointer-events-none h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span
                className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/35"
                aria-hidden="true"
              />
              <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] px-2 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-lemon sm:px-2.5">
                Vs
              </span>
              <span className="pointer-events-none absolute top-3 left-3 bg-black/70 px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.16em] text-white">
                Before
              </span>
              <span className="pointer-events-none absolute top-3 right-3 bg-[#F7EB4F] px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                After
              </span>
            </button>
            <div className="mt-4 flex items-baseline gap-3">
              <p className="font-display text-sm font-extrabold tracking-wide text-lemon">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                {job.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {mounted && activeJob
        ? createPortal(
            <div
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeJob.title} before and after`}
              onClick={() => setActive(null)}
            >
              <button
                type="button"
                className="absolute top-4 right-4 grid h-11 w-11 place-items-center text-white transition-colors hover:text-lemon"
                aria-label="Close"
                onClick={() => setActive(null)}
              >
                <X className="h-7 w-7" />
              </button>
              {jobs.length > 1 ? (
                <>
                  <button
                    type="button"
                    className="absolute top-1/2 left-2 grid h-11 w-11 -translate-y-1/2 place-items-center text-white transition-colors hover:text-lemon sm:left-6"
                    aria-label="Previous"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActive((current) =>
                        current === null
                          ? current
                          : (current - 1 + jobs.length) % jobs.length,
                      );
                    }}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 grid h-11 w-11 -translate-y-1/2 place-items-center text-white transition-colors hover:text-lemon sm:right-6"
                    aria-label="Next"
                    onClick={(event) => {
                      event.stopPropagation();
                      setActive((current) =>
                        current === null ? current : (current + 1) % jobs.length,
                      );
                    }}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              ) : null}
              <div
                className="w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={activeJob.src}
                  alt={activeJob.alt}
                  width={2400}
                  height={1200}
                  sizes="100vw"
                  className="mx-auto max-h-[80vh] w-auto max-w-full object-contain"
                />
                <p className="mt-4 text-center font-display text-sm font-extrabold uppercase tracking-[0.16em] text-white sm:text-base">
                  {activeJob.title}
                </p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
