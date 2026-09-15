import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Request a free quote from Master Roofing Services for roofing, landscaping, decking, fencing, paving and outdoor living work.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <Contact />
    </main>
  );
}
