import { navLinks, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-choco bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="font-display text-2xl leading-none text-choco sm:text-3xl"
        >
          Sharon&rsquo;s <span className="text-punch">Cakes</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-extrabold text-choco underline-offset-4 hover:text-punch-deep hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={site.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sticker-shadow-sm inline-block rounded-full border-2 border-choco bg-punch-deep px-4 py-2 font-display text-sm text-white transition-transform hover:-translate-y-0.5 sm:px-5 sm:text-base"
        >
          Order a Cake
        </a>
      </div>
    </header>
  );
}
