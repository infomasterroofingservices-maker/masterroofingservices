import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getProjectMedia } from "@/lib/project-media";

export function Projects() {
  const media = getProjectMedia();

  return (
    <section id="projects" className="relative bg-[#111111] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Our Work"
            title="Our Recent Work"
            description="Photos and video from jobs completed by our team — tap any item to view it larger."
          />
        </Reveal>
        <ProjectGallery media={media} />
      </div>
    </section>
  );
}
