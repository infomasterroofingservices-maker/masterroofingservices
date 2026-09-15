import { readdirSync } from "node:fs";
import path from "node:path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov"]);

export type ProjectMedia = {
  src: string;
  type: "image" | "video";
  alt: string;
};

export function getProjectMedia(): ProjectMedia[] {
  const dir = path.join(process.cwd(), "public", "projects");

  try {
    return readdirSync(dir)
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return IMAGE_EXT.has(ext) || VIDEO_EXT.has(ext);
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
