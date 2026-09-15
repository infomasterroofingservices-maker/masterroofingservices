"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks } from "@/lib/site";

type NavbarProps = {
  phone: string;
  phoneHref: string;
};

function PhoneDiamond() {
  return (
    <span className="grid h-8 w-8 shrink-0 rotate-45 place-items-center bg-lemon" aria-hidden="true">
      <Phone className="h-3.5 w-3.5 -rotate-45 text-[#111111]" strokeWidth={2.75} />
    </span>
  );
}

export function Navbar({ phone, phoneHref }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isContact = pathname === "/contact";
  const solid = isContact || scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
    setScrolled(window.scrollY > 24);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        solid ? "bg-[#111111]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-2 px-4 sm:h-20 sm:gap-3 sm:px-8 lg:h-[110px] lg:px-10">
        <Link
          href="/"
          className="relative z-50 shrink-0"
          aria-label="Master Roofing Services home"
        >
          <Logo priority />
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          <nav className="flex items-center gap-6 xl:gap-10" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap font-display text-lg font-extrabold uppercase tracking-wide transition-colors ${
                  pathname === link.href ? "text-lemon" : "text-white hover:text-lemon"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#F7EB4F] px-4 py-2.5 font-display text-lg font-extrabold uppercase tracking-wide text-[#111111] transition-colors hover:bg-[#F7EB4F]/90"
          >
            Get a Quote
          </Link>

          <a
            href={phoneHref}
            className="flex items-center gap-2.5 text-white transition-colors hover:text-lemon"
          >
            <PhoneDiamond />
            <span className="font-display text-[1.75rem] leading-none font-extrabold tracking-wide">
              {phone}
            </span>
          </a>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="relative z-50 grid min-h-11 min-w-11 place-items-center text-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-[#111111] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className={`flex h-full flex-col justify-center gap-1 px-6 pt-[calc(6.5rem+env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-transform duration-300 sm:px-8 ${
            open ? "translate-y-0" : "translate-y-4"
          }`}
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 font-display text-2xl font-extrabold uppercase sm:text-3xl ${
                pathname === link.href ? "text-lemon" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center bg-[#F7EB4F] px-4 py-3 font-display text-lg font-extrabold uppercase tracking-wide text-[#111111]"
          >
            Get a Quote
          </Link>
          <a href={phoneHref} className="mt-6 flex items-center gap-3 text-white">
            <PhoneDiamond />
            <span className="font-display text-lg font-extrabold tracking-wide break-all sm:text-2xl">
              {phone}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
