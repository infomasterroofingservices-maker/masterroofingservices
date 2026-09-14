import type { Metadata } from "next";
import { About } from "@/components/about";
import { Founder } from "@/components/founder";
import { HomeAbout } from "@/components/home-about";
import { PageHero } from "@/components/page-hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | ${site.name}`,
  description:
    "Learn about Master Roofing Services — quality workmanship, honest recommendations and roofs built to protect what matters.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero title="About Us" subtitle="Built to protect what matters" />
      <HomeAbout ctaHref={null} spacing="page" />
      <Founder />
      <About />
      <WhyChooseUs />
    </main>
  );
}
