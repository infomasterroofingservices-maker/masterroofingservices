import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { RoofPeak } from "@/components/roof-peak";
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
      <RoofPeak fill="#111111" direction="down" />
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
