import { marqueeItems } from "@/lib/site";

/* The scrolling occasion strip. The track is rendered twice and
   slides one full copy width (see .animate-marquee in
   globals.css), so the loop is seamless. Pauses on hover. */
export default function Marquee() {
  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {marqueeItems.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-5 font-display text-lg tracking-wide sm:text-xl">
            {item}
          </span>
          <span aria-hidden="true" className="text-yolk">
            ✶
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 -rotate-1 scale-[1.02] border-y-[3px] border-choco bg-choco py-3 text-cream shadow-[0_4px_0_0_rgba(46,26,14,0.25)] group">
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
