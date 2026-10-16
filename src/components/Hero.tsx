import Image from "next/image";
import CakeArt from "./CakeArt";
import Eyebrow from "./Eyebrow";
import Marquee from "./Marquee";
import { site } from "@/lib/site";

/* Decorative sprinkles scattered over the hero. Positions are
   percentages of the section; colors cycle the palette. */
const SPRINKLES = [
  { left: "6%", top: "12%", rot: 24, color: "bg-punch" },
  { left: "12%", top: "58%", rot: -32, color: "bg-tealpop" },
  { left: "3%", top: "82%", rot: 64, color: "bg-yolk" },
  { left: "20%", top: "6%", rot: -14, color: "bg-tealpop" },
  { left: "88%", top: "10%", rot: 40, color: "bg-yolk" },
  { left: "94%", top: "46%", rot: -48, color: "bg-punch" },
  { left: "84%", top: "84%", rot: 18, color: "bg-tealpop" },
  { left: "70%", top: "4%", rot: -60, color: "bg-punch" },
  { left: "28%", top: "90%", rot: 36, color: "bg-punch" },
  { left: "64%", top: "92%", rot: -22, color: "bg-yolk" },
];

function CakeCard({
  art,
  caption,
  className,
}: {
  art: "layer-cake" | "cupcakes";
  caption: string;
  className: string;
}) {
  return (
    <figure
      className={`sticker-shadow w-52 shrink-0 rounded-3xl border-[3px] border-choco bg-white p-3 ${className}`}
    >
      <CakeArt kind={art} className="h-auto w-full" />
      <figcaption className="pt-1 pb-1 text-center font-display text-sm text-choco">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* sprinkles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {SPRINKLES.map((s, i) => (
          <span
            key={i}
            className={`absolute h-2 w-6 rounded-full opacity-70 ${s.color}`}
            style={{ left: s.left, top: s.top, transform: `rotate(${s.rot}deg)` }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 text-center sm:px-6 sm:pt-20 sm:pb-20">
        <Eyebrow>Custom cakes &amp; cupcakes · Middle River, MD</Eyebrow>

        <h1 className="mx-auto mt-7 max-w-4xl font-display text-[2.9rem] leading-[1.02] text-choco sm:text-7xl lg:text-[5.4rem]">
          Too pretty to eat.
          <span className="block text-punch">Eat it anyway.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-choco-soft sm:text-xl">
          {site.subline}
        </p>

        {/* ── The collage: Sharon front and center, cakes supporting ── */}
        <div className="mt-14 flex items-end justify-center sm:mt-16">
          <CakeCard
            art="layer-cake"
            caption="Chocolate + Nutella ganache"
            className="z-0 -mr-10 hidden translate-y-8 -rotate-6 lg:block"
          />

          <div className="relative z-10 w-60 shrink-0 sm:w-80">
            {/* layered offset arches behind the portrait */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[2rem] border-[3px] border-choco bg-tealpop"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-t-[999px] rounded-b-[2rem] border-[3px] border-choco bg-yolk"
            />
            <div className="sticker-shadow relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[3px] border-choco bg-cream-deep">
              <Image
                src={site.portrait}
                alt={site.portraitAlt}
                fill
                priority
                sizes="(max-width: 640px) 240px, 320px"
                className="object-cover object-[28%_50%]"
              />
            </div>

            {/* the famous comment, as a sticker */}
            <div
              className="animate-bob sticker-shadow-sm absolute top-8 -right-4 z-20 max-w-[9.5rem] rotate-6 rounded-2xl border-2 border-choco bg-yolk px-3 py-2 sm:-right-12"
              style={{ "--bob-rot": "6deg" } as React.CSSProperties}
            >
              <p className="font-display text-xs leading-tight text-choco sm:text-sm">
                &ldquo;When is the Bakery Grand Opening?&rdquo;
              </p>
              <p className="mt-1 text-[10px] font-extrabold tracking-wide text-choco-soft uppercase">
                — a real comment on her cake
              </p>
            </div>

            {/* round badge */}
            <div className="sticker-shadow-sm absolute bottom-20 -left-4 z-20 flex size-24 -rotate-6 items-center justify-center rounded-full border-2 border-choco bg-punch-deep p-2 text-center sm:-left-10 sm:size-28">
              <p className="font-display text-[11px] leading-tight text-white sm:text-xs">
                Baked with love in Middle River, MD
              </p>
            </div>

            {/* name tag */}
            <div className="sticker-shadow-sm absolute -bottom-5 left-1/2 z-20 -translate-x-1/2 -rotate-2 rounded-full border-2 border-choco bg-cream px-4 py-1.5 whitespace-nowrap">
              <p className="font-display text-sm text-choco">
                That&rsquo;s Sharon — head baker
              </p>
            </div>
          </div>

          <CakeCard
            art="cupcakes"
            caption="The famous maple cupcakes"
            className="z-0 -ml-10 hidden translate-y-8 rotate-6 lg:block"
          />
        </div>

        {/* ── CTAs ── */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 sm:mt-20">
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-shadow lift inline-block rounded-full border-2 border-choco bg-punch-deep px-8 py-3.5 font-display text-lg text-white"
          >
            Order a Cake
          </a>
          <a
            href="#the-goods"
            className="sticker-shadow lift inline-block rounded-full border-2 border-choco bg-yolk px-8 py-3.5 font-display text-lg text-choco"
          >
            See the Goods
          </a>
        </div>
        <p className="mt-5 text-sm font-bold text-choco-soft">
          Every cake is made to order — reach out early, she books up on
          compliments alone.
        </p>
      </div>

      <Marquee />
    </section>
  );
}
