import Eyebrow from "./Eyebrow";
import { orderingNote, steps } from "@/lib/content";
import { site } from "@/lib/site";

export default function Ordering() {
  return (
    <section id="how-to-order" className="scroll-mt-28 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <Eyebrow color="bg-punch" rotate="rotate-2">
            <span className="text-white">Easy as pie. Easier: it&rsquo;s cake.</span>
          </Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-choco sm:text-5xl">
            How Ordering Works
          </h2>
        </div>

        <div className="relative mt-14 grid gap-7 md:grid-cols-3">
          {/* dashed connector, desktop only */}
          <div
            aria-hidden="true"
            className="absolute top-9 right-[16%] left-[16%] hidden border-t-[3px] border-dashed border-choco/30 md:block"
          />
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="lift sticker-shadow relative rounded-3xl border-[3px] border-choco bg-white p-6 pt-8 text-center sm:p-7 sm:pt-9"
            >
              <span className="sticker-shadow-sm absolute -top-6 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-choco bg-yolk font-display text-xl text-choco">
                {i + 1}
              </span>
              <h3 className="font-display text-xl text-choco sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed font-semibold text-choco-soft">
                {step.text}
              </p>
              {i === 1 && (
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sticker-shadow-sm mt-5 inline-block rounded-full border-2 border-choco bg-punch-deep px-5 py-2 font-display text-sm text-white transition-transform hover:-translate-y-0.5"
                >
                  Message Sharon
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="sticker-shadow mx-auto mt-12 max-w-3xl rotate-[-0.5deg] rounded-3xl border-[3px] border-choco bg-yolk px-6 py-5 text-center text-lg leading-relaxed font-bold text-choco">
          {orderingNote}
        </p>
      </div>
    </section>
  );
}
