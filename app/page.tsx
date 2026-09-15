import { Hero } from "@/components/hero";
import { HomeAbout } from "@/components/home-about";
import { HomeHighlights } from "@/components/home-highlights";
import { HowWeWorkProcess } from "@/components/how-we-work-process";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <HomeHighlights />
      <HomeAbout />
      <HowWeWorkProcess standalone />
      <Testimonials />
    </main>
  );
}
