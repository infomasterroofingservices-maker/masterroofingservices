import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "New roof installation, repairs, restoration, metal roofing, painting, gutters, terracotta restoration, carports and patios from Master Roofing Services.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero title="Services" fill="#f7f6f2" />
      <Services />
    </main>
  );
}
