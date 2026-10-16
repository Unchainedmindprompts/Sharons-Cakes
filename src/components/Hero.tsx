import Image from "next/image";
import Eyebrow from "./Eyebrow";
import Marquee from "./Marquee";
import { site } from "@/lib/site";

/* Full-bleed photo hero. Sharon stands right of center in the
   photo holding her two-tier pink cake, so:
   - the crop is anchored ~68–70% across, which keeps her face
     fully in frame and clear of the text at every viewport;
   - the headline panel sits on the left, over the shelves and
     counter, in a cream sticker-styled card so the type passes
     contrast at a glance without darkening the photo.
   On small screens the photo becomes a full-width band and the
   panel stacks up over its lower edge — never over her face. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream-deep">
      {/* the photo: a band on mobile, full-bleed fill on desktop */}
      <div className="relative h-[26rem] sm:h-[30rem] lg:absolute lg:inset-0 lg:h-full">
        <Image
          src={site.heroImage}
          alt={site.heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_25%] lg:object-[70%_20%]"
        />
      </div>

      {/* the text panel, left side */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:flex lg:min-h-[92svh] lg:items-center lg:py-24">
        <div className="sticker-shadow relative -mt-14 w-full max-w-xl rounded-[2rem] border-[3px] border-choco bg-cream p-6 sm:p-9 lg:mt-0 lg:max-w-lg lg:bg-cream/95 xl:max-w-xl">
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

          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-choco sm:text-6xl lg:text-7xl">
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

      <Marquee />
    </section>
  );
}
