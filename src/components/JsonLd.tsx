import { buildGraph } from "@/lib/entities";

/* The entity graph, rendered as JSON-LD. Built from the same
   data files as the visible page (see lib/entities.ts). */
export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildGraph()) }}
    />
  );
}
