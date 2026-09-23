import { readdirSync } from "node:fs";
import path from "node:path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);
const EXCLUDED = new Set(["12.jpeg", "13.jpeg", "15.jpeg"]);

export type ProjectMedia = {
  src: string;
  type: "image" | "video";
  alt: string;
};

export type BeforeAfterJob = {
  src: string;
  title: string;
  alt: string;
};

export const beforeAfterJobs: BeforeAfterJob[] = [
  {
    src: "/beforevsafter/roofinstallation.png",
    title: "Roof Installation",
    alt: "Before and after of a new roof installation by Master Roofing Services",
  },
  {
    src: "/beforevsafter/metalroofing.png",
    title: "Metal Roofing",
    alt: "Before and after of a metal roof replacement by Master Roofing Services",
  },
  {
    src: "/beforevsafter/paint.png",
    title: "Roof Painting",
    alt: "Before and after of roof painting by Master Roofing Services",
  },
  {
    src: "/beforevsafter/terracotta.png",
    title: "Terracotta Roof Restoration",
    alt: "Before and after of terracotta roof restoration by Master Roofing Services",
  },
  {
    src: "/beforevsafter/carport.png",
    title: "Carport and Patio",
    alt: "Before and after of a carport and patio rebuild by Master Roofing Services",
  },
  {
    src: "/beforevsafter/driveway.png",
    title: "Driveway Wash and Paint",
    alt: "Before and after of driveway wash and paint by Master Roofing Services",
  },
  {
    src: "/beforevsafter/gutterinstallation.png",
    title: "Gutter Installation",
    alt: "Before and after of gutter installation by Master Roofing Services",
  },
  {
    src: "/beforevsafter/roofleakrepar.png",
    title: "Roof Leak Repair",
    alt: "Before and after of a roof leak repair by Master Roofing Services",
  },
];

export function getProjectMedia(): ProjectMedia[] {
  const dir = path.join(process.cwd(), "public", "projects");

  try {
    return readdirSync(dir)
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return (
          (IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext)) && !EXCLUDED.has(file)
        );
      })
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((file) => {
        const ext = path.extname(file).toLowerCase();
        const isVideo = VIDEO_EXT.has(ext);
        return {
          src: `/projects/${file}`,
          type: isVideo ? "video" : "image",
          alt: isVideo
            ? "Video of completed work by Master Roofing Services"
            : "Completed work by Master Roofing Services",
        };
      });
  } catch {
    return [];
  }
}
