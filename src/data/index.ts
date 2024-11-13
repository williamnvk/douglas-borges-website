import { posts } from "./posts";
import { posts2 } from "./posts2";
import { posts3 } from "./posts3";

export const POSTS = [...posts, ...posts2, ...posts3];

export const POSTS_SLUGS = POSTS.map((p) => p.slug);

export interface Post {
  slug: string;
  title: string;
  timeToRead: string;
  content: Array<string>;
}

export const getPostBySlug = (slug: string): Post | undefined => {
  return POSTS.find((post) => post.slug === slug);
};
