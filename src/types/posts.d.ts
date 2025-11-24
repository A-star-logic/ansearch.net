import type { MarkdownInstance } from "astro";

export type BlogPost = MarkdownInstance<{
  layout: string;
  title: string;
  author: string;
  category: string;
  'posted-on': string;
  edited: string;
}>;