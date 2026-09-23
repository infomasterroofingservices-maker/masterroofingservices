import type { Metadata } from "next";
import { BeforeAfter } from "@/components/before-after";
import { PageHero } from "@/components/page-hero";
import { Projects } from "@/components/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description:
    "See before-and-after transformations and recent jobs from Master Roofing Services — photos and video from work completed by our team.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Our Work"
        subtitle="Jobs completed by our team"
      />
      <BeforeAfter />
      <Projects />
    </main>
  );
}
