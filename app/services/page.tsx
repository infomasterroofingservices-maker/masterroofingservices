import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Services | ${site.name}`,
  description:
    "New roof installation, repairs, restoration, metal roofing, painting, gutters, terracotta restoration, carports, patios, solar panel cleaning, bird mesh and driveway wash and paint from Master Roofing Services.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero title="Services" subtitle="The services we provide" />
      <Services />
    </main>
  );
}
