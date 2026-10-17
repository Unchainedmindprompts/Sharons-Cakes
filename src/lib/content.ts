import { existsSync } from "node:fs";
import { join } from "node:path";

/* ─── Page content ───────────────────────────────────────────
   Everything written here comes from Sharon's own Facebook
   posts and the comments on them. No invented prices, no
   invented ingredients — if Sharon didn't post it, it isn't
   claimed here. */

/* ── The Goods ──────────────────────────────────────────────
   `photo` starts as null for every item: the card renders a
   decorative SVG illustration (see components/CakeArt.tsx).
   At build time this file checks public/cakes/<slug>.jpg —
   the moment a real photo of Sharon's actual cake is dropped
   in with that filename, the photo replaces the illustration
   automatically on the next build. */

export type CakeArtKind =
  | "cupcakes"
  | "layer-cake"
  | "reveal-cake"
  | "bridal-cake"
  | "fall-cake"
  | "cupcake-tray";

export interface Good {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  art: CakeArtKind;
  /** Sticker color for the card, as a Tailwind bg class. */
  accent: string;
  photo: string | null;
}

function cakePhoto(slug: string): string | null {
  return existsSync(join(process.cwd(), "public", "cakes", `${slug}.jpg`))
    ? `/cakes/${slug}.jpg`
    : null;
}

const goodsData: Omit<Good, "photo">[] = [
  {
    slug: "maple-cupcakes",
    name: "The Famous Maple Cupcakes",
    tagline: "The ones that started it all",
    description:
      "Vanilla cake, vanilla cream filling, and a tall swirl of maple frosting. These are the cupcakes that had a friend asking when the bakery grand opening is.",
    art: "cupcakes",
    accent: "bg-yolk",
  },
  {
    slug: "chocolate-nutella-ganache-cake",
    name: "Chocolate Nutella Ganache Cake",
    tagline: "Deeply chocolate. Dangerously sliceable.",
    description:
      "Chocolate cake layered with whipped Nutella ganache filling. Rich, glossy, and gone faster than anyone at the party wants to admit.",
    art: "layer-cake",
    accent: "bg-punch",
  },
  {
    slug: "gender-reveal-cakes",
    name: "Gender Reveal Cakes",
    tagline: "Pink or blue, hiding inside",
    description:
      "A cake with a secret. Sharon made one for a good friend's daughter, and the whole room held its breath until the first slice told the story.",
    art: "reveal-cake",
    accent: "bg-tealpop",
  },
  {
    slug: "bridal-shower-cakes",
    name: "Bridal Shower Cakes",
    tagline: "For brides and their favorite people",
    description:
      "Pretty enough for the gift table, good enough that guests go back for seconds. Sharon had so much fun making one for a friend's shower, she hasn't stopped since.",
    art: "bridal-cake",
    accent: "bg-punch",
  },
  {
    slug: "fall-themed-cakes",
    name: "Fall-Themed Cakes",
    tagline: "Autumn, in cake form",
    description:
      "Cozy colors, falling leaves, and all the warm flavors of the season. A fall birthday favorite around Sharon's house — her daughter Emily can confirm.",
    art: "fall-cake",
    accent: "bg-yolk",
  },
  {
    slug: "office-party-cupcakes",
    name: "Office Party Cupcakes",
    tagline: "Be the hero of the break room",
    description:
      "Cupcake orders for office parties and work celebrations. Sharon's coworkers already know: when her tray shows up at an inservice, it's the best meeting of the year.",
    art: "cupcake-tray",
    accent: "bg-tealpop",
  },
];

export const goods: Good[] = goodsData.map((g) => ({
  ...g,
  photo: cakePhoto(g.slug),
}));

/* ── The Gallery ────────────────────────────────────────────
   More of Sharon's real cakes, photographed in her kitchen
   and at the parties they were made for. Captions describe
   what's in the photo — nothing invented beyond that. */

export interface GalleryItem {
  file: string;
  title: string;
  caption: string;
  width: number;
  height: number;
}

export const gallery: GalleryItem[] = [
  {
    file: "maryland-crab-cake",
    title: "The Full Maryland",
    caption:
      "Two crabs, a beach of crumbs, and a whole tin of Old Bay standing guard. This is what happens when a Middle River baker does a crab feast in cake form.",
    width: 638,
    height: 1100,
  },
  {
    file: "teddy-bear-baby-shower-cake",
    title: "Sweet Baby, Bear Edition",
    caption:
      "Five teddy bears, clouds, and enough pink to hear the “awww” from the next room.",
    width: 562,
    height: 1100,
  },
  {
    file: "smores-birthday-cake",
    title: "S'mores, No Campfire Required",
    caption:
      "Toasted marshmallows, graham crackers, and a chocolate drip doing the most.",
    width: 781,
    height: 1100,
  },
  {
    file: "boho-wedding-cake",
    title: "Mr & Mrs Wood",
    caption:
      "Two tiers, pampas grass, and white roses. The “I do” cake, Sharon style.",
    width: 647,
    height: 1100,
  },
  {
    file: "army-graduation-cake",
    title: "Reporting for Duty",
    caption:
      "A whole helicopter landed on this graduation cake. Congratulations, 2nd Lt Rhoads.",
    width: 799,
    height: 1100,
  },
  {
    file: "glam-makeup-birthday-cake",
    title: "Double Digits, Full Glam",
    caption:
      "Lipstick, lashes, and a quilted purse: turning ten is serious business.",
    width: 664,
    height: 1100,
  },
  {
    file: "woodland-baby-shower-cake",
    title: "The Whole Forest RSVP'd",
    caption:
      "Foxes, squirrels, and one very smug deer, all here to welcome the baby.",
    width: 650,
    height: 1100,
  },
  {
    file: "christmas-fawn-cake",
    title: "Oh Deer",
    caption:
      "A fawn, a jingle bell, and a chocolate drip. Christmas never stood a chance.",
    width: 782,
    height: 1100,
  },
  {
    file: "black-ribbon-birthday-cake",
    title: "All Tied Up",
    caption:
      "Black bows, red roses, and a buffalo check band. Birthday cake, but make it fashion.",
    width: 701,
    height: 1100,
  },
  {
    file: "golden-candle-birthday-cake",
    title: "Make a Wish",
    caption:
      "Seven gold candles and a ring of rosettes. Simple, classic, gone by the end of the song.",
    width: 715,
    height: 1100,
  },
  {
    file: "chili-cookoff-cupcakes",
    title: "The Cook-Off Dozen",
    caption:
      "Flame frosting and chili pepper toppers for the cook-off crowd. Sweet heat, hold the beans.",
    width: 1100,
    height: 1042,
  },
];

/* ── Kind Words ─────────────────────────────────────────────
   Real comments from Sharon's Facebook cake posts, word for
   word. In the schema (lib/entities.ts) each one is a Review
   authored by "Facebook commenter". */

export const quotes: string[] = [
  "When is the Bakery Grand Opening?",
  "Too gorgeous to eat!",
  "I wouldn't want to cut it.",
  "It was DELICIOUS.",
  "You keep amazing me more and more!",
  "I'm trying to think of a reason to have a big party, so I can order some cupcakes.",
  "Looks too good to cut, as usual.",
  "Can I be your neighbor?",
];

/* ── How ordering works ───────────────────────────────────── */

export interface Step {
  title: string;
  text: string;
}

export const steps: Step[] = [
  {
    title: "Dream it up",
    text: "A birthday, a baby on the way, a wedding shower, an office that deserves better snacks — or no reason at all. If you can celebrate it, Sharon can cake it.",
  },
  {
    title: "Message Sharon on Facebook",
    text: "That's where orders happen right now. Tell her the date, the occasion, and what you're dreaming up, and she'll take it from there.",
  },
  {
    title: "Pick up in Middle River & party",
    text: "Pick up your cake in Middle River, Maryland, carry it in like a hero, and try — just try — to save yourself a slice.",
  },
];

export const orderingNote =
  "One honest heads-up: every cake is made to order in Sharon's home kitchen, around her full-time day job. She bakes because she loves it — so reach out early and give her time to work her magic.";

/* ── FAQ ────────────────────────────────────────────────────
   Answer-first. This exact text is what renders on the page
   AND what goes into the FAQPage schema, so the two always
   match word for word. */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Where is Sharon's Cakes?",
    answer:
      "Sharon's Cakes is a home bakery in Middle River, Maryland, in the Baltimore area. Sharon bakes everything herself at home, and orders are picked up in Middle River.",
  },
  {
    question: "What does Sharon bake?",
    answer:
      "Custom cakes and cupcakes for birthdays, gender reveals, bridal showers, office parties, and just because — including her famous maple cupcakes (vanilla cake, vanilla cream filling, maple frosting) and her chocolate cake with whipped Nutella ganache filling.",
  },
  {
    question: "How do I order?",
    answer:
      "Message Sharon on Facebook — that's where orders happen for now. Tell her the date, the occasion, and what you're dreaming up, and she'll take it from there.",
  },
  {
    question: "How far ahead should I order?",
    answer:
      "As early as you can. Every cake is made to order in Sharon's home kitchen around her full-time job, so the earlier you reach out, the better.",
  },
  {
    question: "Does Sharon deliver?",
    answer:
      "Pickup in Middle River is the standard. If you need delivery, ask when you order and Sharon will let you know what's possible.",
  },
];
