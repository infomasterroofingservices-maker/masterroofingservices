import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "Roofing, landscaping, decking, fencing, paving, pergolas, retaining walls and outdoor living from Master Roofing Services.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero title="Services" />
      <Services />
      <Process />
    </main>
  );
}
