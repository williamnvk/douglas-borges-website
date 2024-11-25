import { posts } from "./insights-2022";
import { posts2 } from "./insights-2023";
import { posts3 } from "./insights-2024";
import { newInsights } from "./insights-new";

export const INSIGHTS: Array<Post> = [
  ...posts.map((p) => ({ ...p, publishedAt: "2022-01-01" })),
  ...posts2.map((p) => ({ ...p, publishedAt: "2023-01-01" })),
  ...posts3.map((p) => ({ ...p, publishedAt: "2024-01-01" })),
  ...newInsights.map((p) => ({ ...p, publishedAt: "2024-11-25" })),
].reverse();

export const INSIGHTS_SLUGS = INSIGHTS.map((p) => p.slug);

export const INSIGHTS_HIGHLIGHTS = INSIGHTS.filter((p) =>
  "highlight" in p ? p.highlight || false : false
);

export interface Post {
  slug: string;
  title: string;
  timeToRead: string;
  publishedAt: string;
  highlight?: boolean;
  tags: string[];
  cover?: string;
  content: Array<string>;
}

export const INSIGHTS_TAGS = INSIGHTS.map((p) => p.tags).flat();

export const INSIGHTS_TAG_COUNTS = INSIGHTS_TAGS.reduce((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export const getInsightBySlug = (
  slug: string
): { current?: Post; next?: Post; previous?: Post } => {
  const index = INSIGHTS.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {}; // Return an empty object if the slug is not found
  }

  return {
    current: INSIGHTS[index],
    next: INSIGHTS[index + 1],
    previous: INSIGHTS[index - 1],
  };
};
