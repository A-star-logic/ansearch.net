import { defineCollection, z } from 'astro:content';

const landingPages = defineCollection({
  schema: ({ image }) => {
    return z.object({
      // Feature sections (the "how it works" parts)
      features: z.array(
        z.object({
          caption: z.string(),
          content: z.string(),
          icon: z.string(),
          image: image(),
          imageAlt: z.string().optional(),
          title: z.string(),
        }),
      ),
      // Hero section
      hero: z.object({
        image: image(),
        imageAlt: z.string().optional(),
        subtitle: z.string(),
        tagline: z.string().optional(),
        title: z.string(),
      }),
      // Language code
      lang: z.enum(['en', 'fr']),
      // Navigation metadata (for menus)
      nav: z
        .object({
          icon: z.string().optional(),
          order: z.number().optional(), // For sorting in menus

          title: z.string(),
        })
        .optional(),
      // URL slug (e.g., "product-managers", "researchers")

      pageSlug: z.string(),
    });
  },
  type: 'content',
});

const policies = defineCollection({
  schema: z.object({
    description: z.string().optional(),
    lastUpdated: z.string().optional(),
    title: z.string(),
  }),
  type: 'content',
});

const products = defineCollection({
  schema: ({ image }) => {
    return z.object({
      // Feature sections
      features: z.array(
        z.object({
          caption: z.string(),
          content: z.string(),
          icon: z.string(),
          image: image(),
          imageAlt: z.string().optional(),
          title: z.string(),
        }),
      ),
      // Hero section
      hero: z.object({
        image: image(),
        imageAlt: z.string().optional(),
        subtitle: z.string(),
        tagline: z.string().optional(),
        title: z.string(),
      }),
      // Language code
      lang: z.enum(['en', 'fr']),
      // Navigation metadata (for menus)
      nav: z.object({
        icon: z.string().optional(),
        order: z.number().optional(),
        title: z.string(),
      }),
      // URL slug (e.g., "ask", "forage")
      pageSlug: z.string(),
    });
  },
  type: 'content',
});

export const collections = {
  'landing-pages': landingPages,
  policies: policies,
  products: products,
};
