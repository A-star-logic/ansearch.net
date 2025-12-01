import { defineCollection, z } from 'astro:content';

const landingPages = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // URL slug (e.g., "product-managers", "researchers")
      pageSlug: z.string(),
      // Language code
      lang: z.enum(['en', 'fr']),
      // Navigation metadata (for menus)
      nav: z
        .object({
          title: z.string(),
          icon: z.string().optional(),
          order: z.number().optional(), // For sorting in menus
        })
        .optional(),
      // Hero section
      hero: z.object({
        title: z.string(),
        subtitle: z.string(),
        tagline: z.string().optional(),
        image: image(),
        imageAlt: z.string().optional(),
      }),
      // Feature sections (the "how it works" parts)
      features: z.array(
        z.object({
          icon: z.string(),
          caption: z.string(),
          title: z.string(),
          content: z.string(),
          image: image(),
          imageAlt: z.string().optional(),
        }),
      ),
    }),
});

const policies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lastUpdated: z.string().optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      // URL slug (e.g., "ask", "forage")
      pageSlug: z.string(),
      // Language code
      lang: z.enum(['en', 'fr']),
      // Navigation metadata (for menus)
      nav: z.object({
        title: z.string(),
        icon: z.string().optional(),
        order: z.number().optional(),
      }),
      // Hero section
      hero: z.object({
        title: z.string(),
        subtitle: z.string(),
        tagline: z.string().optional(),
        image: image(),
        imageAlt: z.string().optional(),
      }),
      // Feature sections
      features: z.array(
        z.object({
          icon: z.string(),
          caption: z.string(),
          title: z.string(),
          content: z.string(),
          image: image(),
          imageAlt: z.string().optional(),
        }),
      ),
    }),
});

export const collections = {
  'landing-pages': landingPages,
  policies: policies,
  products: products,
};
