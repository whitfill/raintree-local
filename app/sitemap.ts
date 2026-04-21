import type { MetadataRoute } from "next";
import { cities } from "./locations/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = cities.map((c) => ({
    url: c.canonical,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.raintreems.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...locationPages,
  ];
}
