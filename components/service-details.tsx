"use client";

import { useId, useState } from "react";

type ServiceDetailsProps = {
  items: readonly string[];
};

export function ServiceDetails({ items }: ServiceDetailsProps) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  if (items.length === 0) return null;

  return (
    <div className="mt-4 sm:mt-5">
      <button
        type="button"
        className="hidden min-h-11 items-center font-display text-sm font-extrabold uppercase tracking-wide text-white/80 transition-colors hover:text-lemon max-lg:inline-flex"
        aria-expanded={open}
        aria-controls={detailsId}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Read less" : "Read more"}
      </button>
      <ul
        id={detailsId}
        className={`space-y-1.5 sm:space-y-2 ${
          open ? "mt-4 block" : "max-lg:hidden"
        }`}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/85 sm:gap-3 sm:text-[15px]"
          >
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-lemon"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
