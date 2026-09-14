import Link from "next/link";
import { Logo } from "@/components/logo";
import { navLinks, phoneHref, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-8 sm:pt-16 sm:pb-16">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-12">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60 sm:mt-5">
              {site.name} provides professional roofing repairs, restoration,
              replacement and maintenance with quality workmanship and dependable
              service.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:contents">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                Navigation
              </p>
              <nav className="mt-4 flex flex-col sm:mt-5" aria-label="Footer">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex min-h-11 items-center font-display text-sm font-extrabold uppercase tracking-wide text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
                Contact
              </p>
              <ul className="mt-4 space-y-0 text-sm text-white/70 sm:mt-5">
                <li>
                  <a
                    href={phoneHref}
                    className="flex min-h-11 items-center break-all transition-colors hover:text-white"
                  >
                    {site.phone}
                  </a>
                </li>
                {site.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="flex min-h-11 items-center break-all transition-colors hover:text-white"
                    >
                      {email}
                    </a>
                  </li>
                ))}
                <li className="flex min-h-11 items-center break-words">{site.address}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs leading-relaxed text-white/45 sm:px-8 sm:py-5">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
