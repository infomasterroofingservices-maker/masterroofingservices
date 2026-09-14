import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { images } from "@/lib/site";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-dark">
      <Image
        src={images.cta}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      <svg
        className="pointer-events-none absolute top-0 left-0 z-20 h-7 w-full overflow-visible sm:h-12 lg:h-16"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 50,12 100,0" fill="#111111" />
        <polyline
          points="0,0 50,11.4 100,0"
          fill="none"
          stroke="#F7EB4F"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative bg-dark/70 px-4 pt-[5.25rem] pb-14 sm:px-8 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-28">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-[1.75rem] font-extrabold tracking-tight text-white text-balance sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Tell us about your project and we will follow up with a clear next
            step.
          </p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
