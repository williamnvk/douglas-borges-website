import { INSIGHTS_SLUGS } from "@/data";
import { siteUrl } from "@/data/dictionaries";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const insights = INSIGHTS_SLUGS.map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: new Date(),
    priority: 0.2,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/empresas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/servicos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/palestras-e-eventos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/links`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...insights.map((insight) => ({
      ...insight,
      changeFrequency: "monthly" as const,
    })),
  ];
}
