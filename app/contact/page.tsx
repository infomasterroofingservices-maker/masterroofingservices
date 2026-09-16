import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Request a free quote from Master Roofing Services for new roof installation, repairs, restorations, metal roofing, painting, gutters, terracotta work, carports, patios, solar panel cleaning and driveway work.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Contact />
    </main>
  );
}
