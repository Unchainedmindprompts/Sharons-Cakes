/* ─── Site data ──────────────────────────────────────────────
   The basics about Sharon's Cakes in one place. Two photos of
   Sharon live here: `heroImage` (public/hero.jpg), the wide
   showcase shot that fills the homepage hero, and `portrait`
   (public/sharon.jpg), her real profile photo, used in the
   Meet Sharon section and the schema. Swap either file at its
   path and the site picks it up — no code changes needed. */

export const site = {
  name: "Sharon's Cakes",
  baker: "Sharon Abplanalp Davis",
  town: "Middle River",
  state: "Maryland",
  area: "Middle River, Maryland (Baltimore area)",
  facebookUrl: "https://facebook.com/sharon.abplanalpdavis",
  /** Wide showcase photo that fills the homepage hero: her
      cakes on the island of a modern farmhouse kitchen. */
  heroImage: "/hero.jpg",
  heroAlt:
    "Sharon's cakes on a white marble kitchen island in a black-and-white modern farmhouse kitchen: a two-tier 'oh baby' cake, a chocolate drip birthday cake, a white rose cake, and a tray of pink cupcakes",
  /** Sharon's real profile photo, used in Meet Sharon. Replace
      public/sharon.jpg with a larger portrait any time; keep
      the same filename. */
  portrait: "/sharon.jpg",
  portraitAlt: "Sharon Abplanalp Davis, the baker behind Sharon's Cakes",
  headline: "Too pretty to eat. Eat it anyway.",
  subline:
    "Custom cakes and cupcakes, baked at home in Middle River, Maryland by Sharon — for birthdays, baby showers, office parties, and Tuesdays that need cake.",
};

export const navLinks = [
  { label: "The Goods", href: "#the-goods" },
  { label: "Kind Words", href: "#kind-words" },
  { label: "Meet Sharon", href: "#meet-sharon" },
  { label: "FAQ", href: "#faq" },
];

export const marqueeItems = [
  "Birthdays",
  "Gender Reveals",
  "Bridal Showers",
  "Office Parties",
  "Just Because",
];
