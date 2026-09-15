import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Projects } from "@/components/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Work | ${site.name}`,
  description:
    "See recent jobs from Master Roofing Services — photos and video from work completed by our team.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero
        title="Our Work"
        subtitle="Jobs completed by our team"
        image="/projects/1.jpeg"
        fill="#111111"
      />
      <Projects />
    </main>
  );
}
