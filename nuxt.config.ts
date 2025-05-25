// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  router: {
    options: {
      strict: true, // remove trailing slashes
    },
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {},
  image: {
    provider: "ipx",
  },
  nitro: {
    prerender: {
      //routes: ['/sitemap.xml'],
      autoSubfolderIndex: false,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],
});