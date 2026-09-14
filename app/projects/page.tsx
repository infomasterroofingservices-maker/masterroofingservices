import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Projects } from "@/components/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Projects | ${site.name}`,
  description:
    "Recent residential roofing, restoration, replacement and repair work completed by Master Roofing Services.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <PageHero title="Projects" />
      <Projects />
    </main>
  );
}
