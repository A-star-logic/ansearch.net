import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  router: {
    options: {
      strict: true, // remove trailing slashes
    },
  },

  components: {
    dirs: [],
  },
  imports: {
    autoImport: false,
    scan: false,
  },
  css: ['~/assets/main.css'],
  image: {
    provider: 'ipx',
  },
  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },

    prerender: {
      autoSubfolderIndex: false,
      routes: ['/'],
      crawlLinks: true,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },
  i18n: {
    defaultLocale: 'en',
    baseUrl: 'https://ansearch.net',
    lazy: true,
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
        language: 'en-GB',
        isCatchallLocale: true,
      },
      { code: 'fr', name: 'Français', file: 'fr.json', language: 'fr-FR' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'nitro-cloudflare-dev',
    '@nuxtjs/i18n',
  ],
});
