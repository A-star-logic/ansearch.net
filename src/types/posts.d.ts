import type { MarkdownInstance } from 'astro';

export type BlogPost = MarkdownInstance<{
  layout: string;
  title: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  'image-alt': string;
  'posted-on': string;
  edited: string;
}>;
