import type { MetadataRoute } from "next";
import { cities } from "./locations/data";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = cities.map((c) => ({
    url: c.canonical,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `https://www.raintreems.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.raintreems.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://www.raintreems.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...locationPages,
    ...blogPosts,
  ];
}
