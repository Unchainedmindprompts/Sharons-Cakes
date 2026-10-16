import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Marquee from "./Marquee";
import { site } from "@/lib/site";

/* Cakes-first hero: the photo is the star, the words live
   beside it. The shot (2048×1152) puts the cakes at roughly
   x 25–75%, y 22–88% — the "oh baby" two-tier on the left,
   the chocolate drip cake center, the white rose cake right,
   and the cupcake tray center-front — over a plain white
   island front. So the photo fills the right ~2/3 at lg+
   with the cream text panel on the left, and object-[50%_50%]
   is not a guess: at 1024px the cover crop shows image
   x ≈23–77%, at 1440px x ≈20–80%, and in the mobile band
   x ≈24–76% — every cake fully in frame at every size,
   with nothing of ours ever laid over one. On mobile the
   panel overlaps only the island's empty front. The lg
   type sizes step down a notch so the narrow panel still
   fits inside the 92svh row and the photo is never forced
   into a taller, tighter crop. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-deep">
      <div className="lg:grid lg:min-h-[92svh] lg:grid-cols-12">
        {/* the photo: a band on mobile, full-height right side on desktop */}
        <div className="relative h-[26rem] sm:h-[30rem] lg:order-2 lg:col-span-8 lg:h-full">
          <Image
            src={site.heroImage}
            alt={site.heroAlt}
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 67vw"
            className="object-cover object-[50%_50%]"
          />
        </div>

        {/* the text panel, left side */}
        <div className="relative z-10 lg:order-1 lg:col-span-4 lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:mx-0 lg:max-w-none lg:px-8 lg:py-24 xl:px-12">
            <div className="sticker-shadow relative -mt-8 w-full rounded-[2rem] border-[3px] border-choco bg-cream p-6 sm:p-9 lg:mt-0 lg:p-7 xl:p-9">
              {/* the famous comment, pinned to the panel corner */}
              <div
                className="animate-bob sticker-shadow-sm absolute -top-7 right-5 z-20 max-w-[10rem] rotate-6 rounded-2xl border-2 border-choco bg-yolk px-3 py-2 sm:right-8"
                style={{ "--bob-rot": "6deg" } as React.CSSProperties}
              >
                <p className="font-display text-xs leading-tight text-choco sm:text-sm">
                  &ldquo;When is the Bakery Grand Opening?&rdquo;
                </p>
                <p className="mt-1 text-[10px] font-extrabold tracking-wide text-choco-soft uppercase">
                  — a real comment on her cake
                </p>
              </div>

              <Eyebrow>Custom cakes &amp; cupcakes · Middle River, MD</Eyebrow>

              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-choco sm:text-6xl lg:text-5xl xl:text-7xl">
                Too pretty to eat.
                <span className="block text-punch">Eat it anyway.</span>
              </h1>

              <p className="mt-5 text-lg font-semibold text-choco-soft sm:text-xl">
                {site.subline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
