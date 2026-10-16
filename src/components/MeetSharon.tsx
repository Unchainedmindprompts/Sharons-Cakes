import Image from "next/image";
import Eyebrow from "./Eyebrow";
import { site } from "@/lib/site";

const CHIPS = [
  "Operations manager by day",
  "Baker by night",
  "Crab-feast cake duty: also Sharon",
  "Middle River, Maryland",
];

export default function MeetSharon() {
  return (
    <section id="meet-sharon" className="scroll-mt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        {/* portrait, smaller encore */}
        <div className="relative mx-auto w-56 sm:w-64">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-t-[999px] rounded-b-[2rem] border-[3px] border-choco bg-punch"
          />
          <div className="sticker-shadow relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-[3px] border-choco bg-cream-deep">
            <Image
              src={site.portrait}
              alt={site.portraitAlt}
              fill
              sizes="(max-width: 640px) 224px, 256px"
              className="object-cover object-[28%_50%]"
            />
          </div>
          <div className="sticker-shadow-sm absolute -right-4 -bottom-4 rotate-3 rounded-full border-2 border-choco bg-yolk px-3 py-1">
            <p className="font-display text-xs text-choco">Est. with love</p>
          </div>
        </div>

        <div>
          <Eyebrow color="bg-tealpop" rotate="-rotate-2">
            The baker herself
          </Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-choco sm:text-5xl">
            Meet Sharon
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed font-semibold text-choco-soft">
            <p>
              By day, Sharon runs operations for a home-nursing company.
              By night, the mixer comes out — and Middle River, Maryland
              smells like vanilla and maple.
            </p>
            <p>
              What started as cakes for family turned into cakes for
              everybody: birthdays for her daughter Emily, a bridal
              shower cake for a dear friend, a gender reveal that had a
              whole room holding its breath, and cupcake trays that make
              her coworkers&rsquo; day. When Sharon and her husband Jimmy
              head out on the Chesapeake Bay — Worton Creek, yacht-club
              crab feasts — guess who brings the cake.
            </p>
            <p>
              Now friends of friends are asking, and Sharon is saying
              yes. Every cake is made to order, by hand, by her — no
              bakery staff, no shortcuts, no freezer. Just Sharon, a
              mixer, and a well-earned reputation for cakes people
              almost hate to cut.
            </p>
          </div>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {CHIPS.map((chip, i) => (
              <li
                key={chip}
                className={`sticker-shadow-sm rounded-full border-2 border-choco px-3.5 py-1 text-sm font-extrabold text-choco ${
                  i % 3 === 0
                    ? "bg-yolk"
                    : i % 3 === 1
                      ? "bg-tealpop text-white"
                      : "bg-cream-deep"
                }`}
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
