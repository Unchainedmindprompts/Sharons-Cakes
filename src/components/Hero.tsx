import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Marquee from "./Marquee";
import { site } from "@/lib/site";

/* Photo-first hero: the island shot IS the hero — full width,
   edge to edge, with nothing laid over it but one small
   sticker. The words move to a slim cream band under the
   photo, above the marquee.

   The shot (2048×1152) puts the cakes at roughly x 25–80%,
   y 22–88%: "oh baby" two-tier left, chocolate drip cake
   center, white rose cake right, cupcake tray front-center.
   The crops keep them whole: on phones the band is 4:3, so
   the cover crop shows image x ≈12–88% at full height; at
   sm 16:10 shows x ≈5–95%; at lg the band is 82svh, which
   at 1024px shows x ≈5–95% and at 1440px the full width
   with y ≈4–96%. Cakes are never cut at any size.

   The sticker sits top-right because the corners aren't
   equal once the crops shift: top-left on a phone slides
   into the "oh baby" topper, and bottom-right crowds the
   rose cake's stand. Top-right only ever covers shelves,
   canisters, and a pendant — background decor at every
   breakpoint — and it stays a few points clear of the
   chocolate cake's tallest candle even on a phone. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-deep">
      {/* the photo: the entire visual hero */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-[82svh] lg:max-h-[60rem] lg:min-h-[32rem]">
        <Image
          src={site.heroImage}
          alt={site.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_50%]"
        />

        {/* the famous comment, pinned to the photo's top-right corner */}
        <div
          className="animate-bob sticker-shadow-sm absolute top-3 right-3 z-20 max-w-[7.5rem] rotate-6 rounded-2xl border-2 border-choco bg-yolk px-3 py-2 sm:top-5 sm:right-5 sm:max-w-[10rem] lg:top-6 lg:right-8"
          style={{ "--bob-rot": "6deg" } as React.CSSProperties}
        >
          <p className="font-display text-[11px] leading-tight text-choco sm:text-sm">
            &ldquo;When is the Bakery Grand Opening?&rdquo;
          </p>
          <p className="mt-1 text-[9px] font-extrabold tracking-wide text-choco-soft uppercase sm:text-[10px]">
            — a real comment on her cake
          </p>
        </div>
      </div>

      {/* the words: a slim cream band under the photo */}
      <div className="bg-cream">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:px-8 lg:py-10">
          <div className="shrink-0">
            <Eyebrow>Custom cakes &amp; cupcakes · Middle River, MD</Eyebrow>
            <h1 className="mt-4 font-display text-4xl leading-[1.02] text-choco sm:text-5xl xl:text-6xl">
              Too pretty to eat.
              <span className="block text-punch">Eat it anyway.</span>
            </h1>
          </div>

          <div className="lg:ml-auto lg:max-w-md">
            <p className="text-lg font-semibold text-choco-soft sm:text-xl">
              {site.subline}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
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
            <p className="mt-4 text-sm font-bold text-choco-soft">
              Every cake is made to order — reach out early, she books up on
              compliments alone.
            </p>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
