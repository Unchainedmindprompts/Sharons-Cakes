# Sharon's Cakes

A fun, loud, one-page showcase site for **Sharon's Cakes** — custom cakes and
cupcakes baked at home in Middle River, Maryland by Sharon Abplanalp Davis.
Next.js (App Router, TypeScript) + Tailwind CSS v4.

## Run it

```sh
npm install
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve the production build
```

## Swapping in real photos

The site is built so photos drop in with **zero code changes**:

- **Cake photos** — save a real photo of the actual cake as
  `public/cakes/<slug>.jpg`, using the slug from `src/lib/content.ts`:

  | File | Card |
  | --- | --- |
  | `public/cakes/maple-cupcakes.jpg` | The Famous Maple Cupcakes |
  | `public/cakes/chocolate-nutella-ganache-cake.jpg` | Chocolate Nutella Ganache Cake |
  | `public/cakes/gender-reveal-cakes.jpg` | Gender Reveal Cakes |
  | `public/cakes/bridal-shower-cakes.jpg` | Bridal Shower Cakes |
  | `public/cakes/fall-themed-cakes.jpg` | Fall-Themed Cakes |
  | `public/cakes/office-party-cupcakes.jpg` | Office Party Cupcakes |

  At build time, `src/lib/content.ts` checks whether each file exists. If it
  does, the photo replaces the decorative SVG illustration on that card
  automatically. Until then, the illustration shows. (Landscape-ish photos
  work best — cards display at a 4:3 crop.)

- **Sharon's portrait** — replace `public/sharon.jpg` with a bigger, better
  portrait, keeping the same filename. The hero, the Meet Sharon section, the
  Open Graph image, and the schema all point at the `portrait` field in
  `src/lib/site.ts`, so everything updates at once. A vertical (portrait)
  photo works best — it displays in a 4:5 arch frame.

## Changing the domain (SITE_URL)

The site has **no domain yet**. `SITE_URL` in `src/lib/entities.ts` is a
placeholder (`https://sharons-cakes.vercel.app`) that feeds every schema
`@id`, the sitemap, robots.txt, and the metadata base in
`src/app/layout.tsx`. When a real domain is chosen, change that one constant
(and confirm `metadataBase` still reads from it) and rebuild.

## Content rules

Everything on the page comes from Sharon's own Facebook posts and the
comments on them — the Kind Words are real comments, word for word. No
prices are listed because Sharon hasn't published any; ordering runs through
her Facebook profile (the "Order a Cake" buttons) until she picks another
method. To change the order link, edit `facebookUrl` in `src/lib/site.ts`.

The visible FAQ text and the FAQPage JSON-LD are generated from the same
`faqs` array in `src/lib/content.ts`, so they can never drift apart.
