import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="bg-[#111111] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Our Work"
            title="Our Recent Work"
            description="A look at some of the roofing projects completed by our team."
          />
        </Reveal>
        <div className="mt-12 columns-1 gap-4 md:columns-2 lg:columns-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 60} className="break-inside-avoid">
              <ProjectCard
                title={project.title}
                caption={project.caption}
                image={project.image}
                aspect={project.aspect}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
