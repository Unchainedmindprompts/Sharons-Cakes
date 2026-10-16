import Hero from "@/components/Hero";
import Goods from "@/components/Goods";
import KindWords from "@/components/KindWords";
import MeetSharon from "@/components/MeetSharon";
import Ordering from "@/components/Ordering";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import ScallopDivider from "@/components/ScallopDivider";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Goods />

      <div className="bg-cream">
        <ScallopDivider className="text-punch" />
      </div>
      <KindWords />

      <div className="bg-punch">
        <ScallopDivider className="text-cream" />
      </div>
      <MeetSharon />

      <div className="bg-cream">
        <ScallopDivider className="text-cream-deep" />
      </div>
      <Ordering />

      <div className="bg-cream-deep">
        <ScallopDivider className="text-cream" />
      </div>
      <Faq />

      {/* final call to action */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="sticker-shadow relative overflow-hidden rounded-[2.5rem] border-[3px] border-choco bg-yolk px-6 py-12 text-center sm:px-12">
          <p className="font-display text-3xl text-choco sm:text-5xl">
            Got something to celebrate?
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg font-bold text-choco-soft">
            Or nothing at all — Sharon doesn&rsquo;t judge, she just bakes.
            Send her a message and let&rsquo;s talk cake.
          </p>
          <a
            href={site.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker-shadow lift mt-8 inline-block rounded-full border-2 border-choco bg-punch-deep px-9 py-4 font-display text-xl text-white"
          >
            Order a Cake
          </a>
        </div>
      </section>

      <div className="bg-cream">
        <ScallopDivider className="text-choco" />
      </div>
    </>
  );
}
