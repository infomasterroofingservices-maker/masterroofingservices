"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

export function CtaGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return children;
}
