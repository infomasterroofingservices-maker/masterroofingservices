import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { phoneHref, site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-[#111111] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-16 lg:gap-y-10">
        <Reveal className="order-1 lg:order-none lg:col-start-1 lg:row-start-1">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Get a Quote
          </p>
          <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Let&apos;s Talk About Your Project
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-[17px]">
            This is the place to request a quote. Tell us what you need and we
            will follow up with an honest assessment and a clear next step.
          </p>
        </Reveal>

        <Reveal className="order-2 lg:order-none lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="rounded-xl border border-white/10 bg-[#1a1a1a] p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-[1.75rem]">
              Request a Free Quote
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Share a few details about the job and we will get back to you with
              the next step.
            </p>
            <ContactForm />
          </div>
        </Reveal>

        <Reveal className="order-3 lg:order-none lg:col-start-1 lg:row-start-2" delay={80}>
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
                  className="mt-1 block text-sm font-medium text-white transition-colors hover:text-lemon"
                >
                  {email}
                </a>
              ))}
            </Info>
            <Info icon={MapPin} label="Address" value={site.address} />
          </ul>
        </Reveal>
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
      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-[#1a1a1a]">
        <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-[0.16em] text-white/50">
          {label}
        </span>
        {children ?? (
          <span className="mt-1 block text-sm font-medium text-white transition-colors group-hover:text-lemon">
            {value}
          </span>
        )}
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="group flex items-start gap-4 py-4">
          {content}
        </a>
      ) : (
        <div className="flex items-start gap-4 py-4">{content}</div>
      )}
    </li>
  );
}
