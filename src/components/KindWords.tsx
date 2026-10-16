import Eyebrow from "./Eyebrow";
import { quotes } from "@/lib/content";

/* The quote wall: real comments from Sharon's Facebook cake
   posts, pinned up like notes on a fridge — tape strip on top,
   a slight tilt, straightening on hover. */
const ROTATIONS = [
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
  "-rotate-2",
  "rotate-1",
  "-rotate-1",
  "rotate-2",
];
const TAPES = ["bg-yolk/85", "bg-tealpop/85", "bg-punch/70", "bg-yolk/85"];

export default function KindWords() {
  return (
    <section id="kind-words" className="scroll-mt-28 bg-punch">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <Eyebrow color="bg-cream" rotate="-rotate-2">
            Don&rsquo;t take our word for it
          </Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-cream [text-shadow:3px_3px_0_#2e1a0e] sm:text-5xl">
            Kind Words
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-extrabold text-cream">
            Real comments from real people on Sharon&rsquo;s Facebook cake
            posts. She didn&rsquo;t pay them. The cake did.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote, i) => (
            <figure
              key={quote}
              className={`lift sticker-shadow relative rounded-3xl border-[3px] border-choco bg-cream p-6 pt-8 transition-transform duration-300 hover:rotate-0 ${ROTATIONS[i % ROTATIONS.length]} ${
                i === 5 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 rounded-sm ${TAPES[i % TAPES.length]}`}
              />
              <blockquote className="font-display text-lg leading-snug text-choco sm:text-xl">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-extrabold tracking-widest text-choco-soft uppercase">
                — a Facebook commenter
              </figcaption>
            </figure>
          ))}

          {/* closing card */}
          <figure className="lift sticker-shadow relative flex flex-col justify-center rounded-3xl border-[3px] border-choco bg-choco p-6 pt-8 -rotate-1 transition-transform duration-300 hover:rotate-0">
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 rounded-sm bg-yolk/85"
            />
            <blockquote className="font-display text-lg leading-snug text-cream sm:text-xl">
              Your comment could be up here next.
            </blockquote>
            <figcaption className="mt-4 text-xs font-extrabold tracking-widest text-cream/70 uppercase">
              — after your first slice
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
