import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { images, phoneHref, site } from "@/lib/site";

const emailHref = `mailto:${site.emails[0]}`;

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#111111] pt-[calc(5.75rem+env(safe-area-inset-top))] pb-10 sm:pt-[calc(8rem+env(safe-area-inset-top))] sm:pb-24 lg:pt-[calc(9.5rem+env(safe-area-inset-top))] lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-6 px-4 sm:gap-12 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-10">
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-gold sm:mb-3">
            Get a Quote
          </p>
          <h1 className="max-w-xl text-[1.7rem] font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/70 sm:mt-4 sm:text-[17px]">
            Tell us what you need. We will follow up with an honest assessment
            and a clear next step.
          </p>
          <p className="mt-3 text-xs font-medium text-white/60 sm:mt-4 sm:text-sm sm:text-white/70">
            Serving {site.serviceArea}
          </p>
        </div>

        <div className="order-2 grid grid-cols-2 gap-2 lg:hidden">
          <a
            href={phoneHref.startsWith("tel:") ? phoneHref : "/contact"}
            className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-lemon px-2 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-[#111111] touch-manipulation"
          >
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 shrink-0" strokeWidth={2.4} />
              Call Now
            </span>
            <span className="font-sans text-[11px] font-medium normal-case tracking-normal text-[#111111]/75">
              {site.phone}
            </span>
          </a>
          <a
            href={emailHref}
            className="flex min-h-14 items-center justify-center gap-1.5 border border-white/20 px-2 font-display text-sm font-extrabold uppercase tracking-wide text-white touch-manipulation"
          >
            <Mail className="h-4 w-4 shrink-0" strokeWidth={2.4} />
            Email Us
          </a>
        </div>

        <div className="order-3 -mx-4 sm:mx-0 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="relative overflow-hidden border-t-[3px] border-t-lemon border-b border-b-white/10 bg-dark sm:border sm:border-white/10 sm:border-t-[3px] sm:border-t-lemon">
            <Image
              src={images.cta}
              alt=""
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover object-top"
            />
            <div className="relative bg-dark/70 px-4 py-6 sm:p-8 lg:p-10">
              <h2 className="text-[1.35rem] font-extrabold tracking-tight text-white sm:text-[1.75rem]">
                Request a Free Quote
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/65 sm:mt-3 sm:text-base sm:text-white/70">
                Share a few details and we will get back to you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="order-4 lg:order-none lg:col-start-1 lg:row-start-2">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            <Info
              icon={Phone}
              label="Phone"
              value={site.phone}
              href={phoneHref.startsWith("tel:") ? phoneHref : undefined}
            />
            <Info icon={Mail} label="Email">
              {site.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="mt-1 block break-all text-sm font-medium text-white transition-colors hover:text-lemon"
                >
                  {email}
                </a>
              ))}
            </Info>
            <Info icon={MapPin} label="Location">
              <span className="mt-1 block text-sm font-medium text-white">
                {site.address}
              </span>
              <span className="mt-1 block text-sm text-white/55">
                {site.serviceArea}
              </span>
            </Info>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon: Icon,
  label,
  value,
  href,
  children,
}: {
  icon: typeof Phone;
  label: string;
  value?: string;
  href?: string;
  children?: ReactNode;
}) {
  const content = (
    <>
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center border border-white/15 bg-white/5">
        <Icon className="h-4 w-4 text-lemon" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[10px] uppercase tracking-[0.16em] text-white/45 sm:text-xs">
          {label}
        </span>
        {children ?? (
          <span className="mt-1 block font-display text-base font-extrabold tracking-wide text-white transition-colors group-hover:text-lemon sm:text-sm sm:font-medium sm:uppercase">
            {value}
          </span>
        )}
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="group flex min-h-14 items-center gap-3 py-3 sm:min-h-0 sm:items-start sm:gap-4 sm:py-4">
          {content}
        </a>
      ) : (
        <div className="flex items-start gap-3 py-3 sm:gap-4 sm:py-4">{content}</div>
      )}
    </li>
  );
}
