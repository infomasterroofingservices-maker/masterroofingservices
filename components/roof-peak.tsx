type RoofPeakProps = {
  fill: string;
  direction?: "up" | "down";
  placement?: "top" | "bottom";
};

export function RoofPeak({
  fill,
  direction = "up",
  placement = "top",
}: RoofPeakProps) {
  const up = direction === "up";
  const positionClass =
    placement === "bottom"
      ? "bottom-0"
      : up
        ? "top-0 -translate-y-full"
        : "top-0";

  return (
    <svg
      className={`pointer-events-none absolute left-0 z-20 h-7 w-full overflow-visible sm:h-12 lg:h-16 ${positionClass}`}
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {up ? (
        <>
          <polygon points="0,12 50,0 100,12" fill={fill} />
          <polyline
            points="0,12 50,0.6 100,12"
            fill="none"
            stroke="#F7EB4F"
            strokeWidth="2.5"
            strokeLinejoin="miter"
            strokeLinecap="square"
            vectorEffect="non-scaling-stroke"
          />
        </>
      ) : (
        <>
          <polygon points="0,0 50,12 100,0" fill={fill} />
          <polyline
            points="0,0 50,11.4 100,0"
            fill="none"
            stroke="#F7EB4F"
            strokeWidth="2.5"
            strokeLinejoin="miter"
            strokeLinecap="square"
            vectorEffect="non-scaling-stroke"
          />
        </>
      )}
    </svg>
  );
}
