import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-choco text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6">
        <p className="font-display text-3xl">
          Sharon&rsquo;s <span className="text-punch">Cakes</span>
        </p>
        <p className="font-bold">
          {site.town}, {site.state} · Custom cakes &amp; cupcakes, made to
          order
        </p>
        <a
          href={site.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold text-yolk underline underline-offset-4 hover:text-cream"
        >
          Find Sharon on Facebook
        </a>
        <p className="mt-3 text-sm text-cream/70">
          Baked at home with love in Middle River, Maryland.
        </p>
        <p className="text-xs text-cream/50">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs text-cream/50">
          Website by{" "}
          <a
            href="https://kodecite.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-cream"
          >
            KodeCite
          </a>
        </p>
      </div>
    </footer>
  );
}
