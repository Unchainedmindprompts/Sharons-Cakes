import Image from "next/image";
import CakeArt from "./CakeArt";
import Eyebrow from "./Eyebrow";
import { goods, type Good } from "@/lib/content";

function GoodCard({ good, index }: { good: Good; index: number }) {
  return (
    <article className="lift group sticker-shadow flex flex-col overflow-hidden rounded-3xl border-[3px] border-choco bg-white">
      <div className={`relative aspect-[4/3] overflow-hidden ${good.photo ? "" : good.accent}`}>
        {good.photo ? (
          <Image
            src={good.photo}
            alt={`${good.name} by Sharon's Cakes`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <CakeArt
            kind={good.art}
            className="absolute inset-0 m-auto h-[86%] w-[86%] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1"
          />
        )}
        <span className="sticker-shadow-sm absolute top-3 left-3 -rotate-3 rounded-full border-2 border-choco bg-cream px-3 py-0.5 font-display text-xs text-choco">
          No. {index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl leading-snug text-choco sm:text-2xl">
          {good.name}
        </h3>
        <p className="mt-1 font-display text-sm text-punch-deep">
          {good.tagline}
        </p>
        <p className="mt-3 leading-relaxed font-semibold text-choco-soft">
          {good.description}
        </p>
      </div>
    </article>
  );
}

export default function Goods() {
  return (
    <section id="the-goods" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <Eyebrow color="bg-tealpop" rotate="rotate-2">
            The good stuff
          </Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-choco sm:text-5xl">
            The Goods
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-choco-soft">
            The cakes and cupcakes Sharon&rsquo;s friends, family, and
            coworkers keep talking about — straight from her kitchen in
            Middle River.
          </p>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {goods.map((good, i) => (
            <GoodCard key={good.slug} good={good} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
