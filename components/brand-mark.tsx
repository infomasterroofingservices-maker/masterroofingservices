type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <div
      className={`grid w-6 grid-cols-2 gap-0.5 sm:w-7 lg:w-8 ${className}`}
      aria-hidden="true"
    >
      <span className="aspect-square bg-lemon" />
      <span className="aspect-square bg-white" />
      <span className="aspect-square bg-white" />
      <span className="aspect-square bg-lemon" />
    </div>
  );
}
