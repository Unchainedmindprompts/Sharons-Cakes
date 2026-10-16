import Eyebrow from "./Eyebrow";
import { faqs } from "@/lib/content";

/* Answer-first FAQ. The visible text and the FAQPage schema
   both come from lib/content.ts, so they always match. Native
   <details> keeps it accessible with zero JavaScript. */
export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <Eyebrow color="bg-yolk" rotate="-rotate-2">
            Good questions
          </Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-choco sm:text-5xl">
            Before You Ask
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question}
              open={i === 0}
              className="group sticker-shadow rounded-3xl border-[3px] border-choco bg-white open:bg-cream"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-lg text-choco sm:text-xl">
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  className="sticker-shadow-sm flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-choco bg-yolk font-display text-lg text-choco transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 text-lg leading-relaxed font-semibold text-choco-soft">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
