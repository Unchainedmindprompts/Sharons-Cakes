import Image from "next/image";
import Eyebrow from "./Eyebrow";
import { gallery, type GalleryItem } from "@/lib/content";

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <figure className="lift sticker-shadow mb-6 break-inside-avoid overflow-hidden rounded-3xl border-[3px] border-choco bg-white">
      <Image
        src={`/cakes/${item.file}.jpg`}
        alt={`${item.title} by Sharon's Cakes`}
        width={item.width}
        height={item.height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="h-auto w-full"
      />
      <figcaption className="p-5">
        <p className="font-display text-lg leading-snug text-choco">
          {item.title}
        </p>
        <p className="mt-1.5 leading-relaxed font-semibold text-choco-soft">
          {item.caption}
        </p>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-28 bg-cream-deep">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="text-center">
          <Eyebrow color="bg-yolk" rotate="-rotate-2">
            Straight from her kitchen
          </Eyebrow>
          <h2 className="mt-5 font-display text-4xl text-choco sm:text-5xl">
            The Photo Album
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-choco-soft">
            Real cakes, real parties, zero stock photos. This is what shows
            up when Sharon&rsquo;s on cake duty: birthdays, babies, weddings,
            graduations, and at least one crab feast.
          </p>
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((item) => (
            <GalleryCard key={item.file} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
