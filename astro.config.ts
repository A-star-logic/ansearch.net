// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ansearch.net',
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en', // The `defaultLocale` value must present in `locales` keys
          fr: 'fr',
        },
      },
    }),
    icon(),
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  image: {
    service: passthroughImageService(),
  },
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
