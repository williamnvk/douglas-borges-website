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