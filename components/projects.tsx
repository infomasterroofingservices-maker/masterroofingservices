import { ProjectGallery } from "@/components/project-gallery";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getProjectMedia } from "@/lib/project-media";

export function Projects() {
  const media = getProjectMedia();

  return (
    <section
      id="projects"
      className="relative border-t border-white/10 bg-[#111111] pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Gallery"
            title="Project Gallery"
            description="Photos and video from jobs completed by our team — tap any item to view it larger."
          />
        </Reveal>
        <ProjectGallery media={media} />
      </div>
    </section>
  );
}
