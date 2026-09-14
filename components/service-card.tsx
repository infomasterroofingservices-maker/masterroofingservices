import Link from "next/link";
import { ArrowUpRight, BrickWall, Fence, Home, Lamp, Trees } from "lucide-react";

const icons = {
  home: Home,
  trees: Trees,
  deck: Lamp,
  fence: Fence,
  paving: BrickWall,
} as const;

export type ServiceIcon = keyof typeof icons;

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <Link
      href="/contact"
      className="group flex h-full flex-col rounded-xl border border-white/10 bg-[#1a1a1a] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lemon/50"
    >
      <Icon className="h-5 w-5 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} aria-hidden="true" />
      <h3 className="mt-5 text-lg font-extrabold tracking-tight text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-white">
        Request a quote
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
