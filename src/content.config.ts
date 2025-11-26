import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    author: z.string(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    date: z.string(),
    edited: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
