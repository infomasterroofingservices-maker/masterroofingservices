import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Request a free roofing quote from Master Roofing Services. Tell us about your roof and we will follow up with a clear next step.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero title="Contact Us" subtitle="Request a free quote" />
      <Contact />
    </main>
  );
}
