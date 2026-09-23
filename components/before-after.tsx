import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { beforeAfterJobs } from "@/lib/project-media";

export function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="relative bg-[#111111] pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Transformations"
            title="Before vs After"
            description="The same properties, before our crew arrived and after the work was finished — tap any job to view it larger."
          />
        </Reveal>
        <BeforeAfterGallery jobs={beforeAfterJobs} />
      </div>
    </section>
  );
}
