import Image from "next/image";
import Link from "next/link";

type HomeAboutProps = {
  ctaHref?: string | null;
  ctaLabel?: string;
  id?: string;
  spacing?: "home" | "page";
};

export function HomeAbout({
  ctaHref = "/about",
  ctaLabel = "Learn More",
  id,
  spacing = "home",
}: HomeAboutProps) {
  return (
    <section
      id={id}
      className={
        spacing === "page"
          ? "relative bg-[#111111] pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20"
          : "relative bg-[#111111] pb-12 pt-2 sm:pb-20 lg:pb-28 lg:pt-10"
      }
    >
      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-8">
        <div className="relative lg:flex lg:min-h-[560px] lg:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11] lg:h-[560px] lg:w-[68%] lg:aspect-auto">
            <Image
              src="/images/project-1.jpg"
              alt="Australian home with a well-kept roof and outdoor living areas"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative z-10 mx-0 -mt-8 bg-[#1a1a1a] px-5 py-8 sm:mx-8 sm:-mt-12 sm:px-10 sm:py-10 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[46%] lg:-translate-y-1/2 lg:px-12 lg:py-14">
            <div
              className="absolute -left-2 top-8 grid w-7 grid-cols-2 gap-0.5 sm:-left-5 sm:top-14 sm:w-10"
              aria-hidden="true"
            >
              <span className="aspect-square bg-lemon" />
              <span className="aspect-square bg-white" />
              <span className="aspect-square bg-white" />
              <span className="aspect-square bg-lemon" />
            </div>

            <h2 className="text-[2.5rem] text-white sm:text-6xl lg:text-7xl">About</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/90 sm:mt-6 sm:text-base lg:text-[17px] lg:leading-7">
              As a proud Australian homeowner, you know that the roof over your
              head is more than just tiles and nails—it&apos;s a vital investment
              in your home&apos;s safety, value and longevity. You deserve the
              peace of mind that comes from working with a trusted, experienced
              local company that stands behind its work. At Master Roofing
              Services, we&apos;re committed to honest assessments, top-quality
              craftsmanship and dependable service, ensuring your home is built
              to protect what matters most—your family, through heat, storms
              and everything in between.
            </p>
            {ctaHref ? (
              <Link
                href={ctaHref}
                className="mt-6 inline-flex min-h-11 w-full items-center justify-center bg-[#F7EB4F] px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-[#111111] transition-colors hover:bg-[#F7EB4F]/90 sm:mt-8 sm:w-auto sm:px-8 sm:text-base"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
