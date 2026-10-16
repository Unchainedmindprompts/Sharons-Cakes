/* ─── Entity registry ────────────────────────────────────────
   The site's @id library, following the house pattern: every
   page refers to the same entities the same way, and the whole
   JSON-LD @graph is built from the same data files that render
   the visible page, so schema and content can never drift.

   ⚠️ SITE_URL is a PLACEHOLDER. Sharon's Cakes has no domain
   yet — when one is chosen, change SITE_URL here (and the
   metadataBase in app/layout.tsx) and every @id follows. */

import { faqs, goods, quotes } from "./content";
import { site } from "./site";

export const SITE_URL = "https://sharons-cakes.vercel.app";

export const BAKERY_ID = `${SITE_URL}/#bakery`;
export const SHARON_ID = `${SITE_URL}/#sharon`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FAQ_ID = `${SITE_URL}/#faq`;

/** The full @graph for the homepage: Bakery, founder Person,
    WebSite, one Review node per real Facebook quote, and the
    FAQPage built from the exact strings the FAQ section shows. */
export function buildGraph() {
  const reviews = quotes.map((quote, i) => ({
    "@type": "Review",
    "@id": `${SITE_URL}/#review-${i + 1}`,
    itemReviewed: { "@id": BAKERY_ID },
    author: { "@type": "Person", name: "Facebook commenter" },
    reviewBody: quote,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Bakery",
        "@id": BAKERY_ID,
        name: site.name,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}${site.portrait}`,
        founder: { "@id": SHARON_ID },
        sameAs: [site.facebookUrl],
        address: {
          "@type": "PostalAddress",
          addressLocality: site.town,
          addressRegion: "MD",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Middle River" },
          { "@type": "AdministrativeArea", name: "Baltimore County" },
        ],
        makesOffer: goods.map((g) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: g.name },
        })),
        review: reviews.map((r) => ({ "@id": r["@id"] })),
      },
      {
        "@type": "Person",
        "@id": SHARON_ID,
        name: site.baker,
        givenName: "Sharon",
        familyName: "Abplanalp Davis",
        jobTitle: "Baker",
        image: `${SITE_URL}${site.portrait}`,
        sameAs: [site.facebookUrl],
        worksFor: { "@id": BAKERY_ID },
        homeLocation: {
          "@type": "Place",
          name: "Middle River, Maryland",
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: site.name,
        publisher: { "@id": BAKERY_ID },
      },
      ...reviews,
      {
        "@type": "FAQPage",
        "@id": FAQ_ID,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };
}
