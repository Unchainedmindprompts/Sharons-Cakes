import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/entities";

/* Single-page site: the sitemap is just the homepage, on the
   same SITE_URL constant as every schema @id. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
