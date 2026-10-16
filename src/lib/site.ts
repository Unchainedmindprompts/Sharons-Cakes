/* ─── Site data ──────────────────────────────────────────────
   The basics about Sharon's Cakes in one place. The `portrait`
   field is the swappable hero photo of Sharon: drop a bigger,
   better portrait at the path it points to (public/sharon.jpg)
   and the whole site picks it up — no code changes needed. */

export const site = {
  name: "Sharon's Cakes",
  baker: "Sharon Abplanalp Davis",
  town: "Middle River",
  state: "Maryland",
  area: "Middle River, Maryland (Baltimore area)",
  facebookUrl: "https://facebook.com/sharon.abplanalpdavis",
  /** Hero portrait of Sharon. Replace public/sharon.jpg with a
      larger portrait any time; keep the same filename. */
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
