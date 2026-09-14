import Image from "next/image";

type ProjectCardProps = {
  title: string;
  caption: string;
  image: string;
  aspect: string;
};

export function ProjectCard({ title, caption, image, aspect }: ProjectCardProps) {
  return (
    <article className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl">
      <div className={`relative overflow-hidden ${aspect}`}>
        <Image
          src={image}
          alt={`${title} — ${caption}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">{title}</p>
          <p className="mt-1 text-sm text-white/90">{caption}</p>
        </div>
      </div>
    </article>
  );
}
