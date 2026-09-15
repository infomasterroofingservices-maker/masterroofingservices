"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import type { ProjectMedia } from "@/lib/project-media";

type ProjectGalleryProps = {
  media: ProjectMedia[];
};

export function ProjectGallery({ media }: ProjectGalleryProps) {
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
          current === null ? current : (current + 1) % media.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null ? current : (current - 1 + media.length) % media.length,
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
  }, [active, media.length]);

  if (media.length === 0) {
    return (
      <p className="mt-12 text-base text-white/70">
        Project photos and videos will appear here soon.
      </p>
    );
  }

  const activeItem = active === null ? null : media[active];

  return (
    <>
      <div className="mt-12 columns-1 gap-3 sm:gap-4 md:columns-2 lg:columns-3">
        {media.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative mb-3 block w-full break-inside-avoid overflow-hidden bg-[#1a1a1a] ring-1 ring-white/10 transition duration-500 hover:ring-[#F7EB4F] focus-visible:ring-2 focus-visible:ring-[#F7EB4F] sm:mb-4"
            aria-label={
              item.type === "video"
                ? `Play project video ${index + 1}`
                : `View project photo ${index + 1}`
            }
          >
            <span className="block overflow-hidden">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="pointer-events-none h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <GalleryVideo src={item.src} paused={active !== null} />
              )}
            </span>
            {item.type === "video" ? (
              <span className="pointer-events-none absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-[#F7EB4F] px-2.5 py-1 font-display text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#111111]">
                <Play className="h-3 w-3 fill-current" aria-hidden="true" />
                Video
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {mounted && activeItem
        ? createPortal(
            <div
              className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4 sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label="Project gallery"
              onClick={() => setActive(null)}
            >
              <button
                type="button"
                className="absolute top-4 right-4 grid h-11 w-11 place-items-center text-white transition-colors hover:text-lemon"
                aria-label="Close gallery"
                onClick={() => setActive(null)}
              >
                <X className="h-7 w-7" />
              </button>
              {media.length > 1 ? (
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
                          : (current - 1 + media.length) % media.length,
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
                        current === null ? current : (current + 1) % media.length,
                      );
                    }}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </>
              ) : null}
              <div
                className="max-h-[86vh] w-full max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                {activeItem.type === "image" ? (
                  <Image
                    src={activeItem.src}
                    alt={activeItem.alt}
                    width={1920}
                    height={1440}
                    sizes="100vw"
                    className="mx-auto max-h-[86vh] w-auto max-w-full object-contain"
                  />
                ) : (
                  <video
                    key={activeItem.src}
                    src={activeItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="mx-auto max-h-[86vh] w-auto max-w-full"
                  />
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function GalleryVideo({ src, paused }: { src: string; paused: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !paused) {
          element.play().catch(() => undefined);
        } else {
          element.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [paused, src]);

  useEffect(() => {
    if (paused) ref.current?.pause();
  }, [paused]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className="pointer-events-none h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}
