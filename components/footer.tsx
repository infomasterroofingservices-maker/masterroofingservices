import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, phoneHref, services, site } from "@/lib/site";

const linkClass =
  "flex min-h-9 items-center font-display text-xs font-extrabold uppercase tracking-wide text-white/70 transition-colors hover:text-white sm:min-h-11 sm:text-sm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-lemon/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pt-7 pb-6 sm:px-8 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:gap-12">
          <div className="col-span-2 lg:col-span-1">
            <Logo compact />
            <p className="mt-3 hidden max-w-sm text-sm leading-relaxed text-white/60 sm:block">
              {site.name} provides professional roofing repairs, restoration,
              replacement and maintenance with quality workmanship and dependable
              service.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/50 sm:mt-3 sm:text-sm sm:text-white/60">
              Serving {site.serviceArea}.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:text-[11px]">
              Navigation
            </p>
            <nav className="mt-2.5 flex flex-col sm:mt-5" aria-label="Footer">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:text-[11px]">
              Services
            </p>
            <nav className="mt-2.5 flex flex-col sm:mt-5" aria-label="Footer services">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services#${service.id}`}
                  className={linkClass}
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold sm:text-[11px]">
              Contact
            </p>
            <ul className="mt-2.5 space-y-1 text-sm text-white/70 sm:mt-5 sm:space-y-0">
              <li>
                <a
                  href={phoneHref}
                  className="flex min-h-9 items-center font-display text-lg font-extrabold tracking-wide text-white transition-colors hover:text-lemon sm:min-h-11 sm:text-sm sm:uppercase"
                >
                  {site.phone}
                </a>
              </li>
              {site.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="flex min-h-8 items-center break-all text-xs transition-colors hover:text-white sm:min-h-11 sm:text-sm"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex min-h-8 items-center text-xs text-white/55 sm:min-h-11 sm:text-sm sm:text-white/70">
                {site.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8 sm:py-5">
          <p className="text-[11px] text-white/40 sm:text-xs sm:text-white/45">
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="https://adityajain-os.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[11px] text-white/55 transition-colors hover:border-white/35 hover:bg-white/10 sm:text-xs"
          >
            Designed &amp; developed by{" "}
            <span className="font-medium text-white">Aditya Jain</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-white/70" strokeWidth={2} />
          </a>
        </div>
      </div>
    </footer>
  );
}
