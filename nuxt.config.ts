// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/sitemap", "nuxt-simple-robots"],
  runtimeConfig: {
    public: {
      posthogPublicKey: "phc_XdInqLt3eIBMxaliR7MeKhJnQD0SOl0GIjhpIJCpsnA",
      posthogHost: "https://us.i.posthog.com",
    },
  },
  colorMode: {
    preference: "light",
  },
  robots: {
    disallow: [],
    allow: "*",
  },
  fonts: {
    defaults: {
      weights: [200, 400, 500, 600, 700, 800],
      styles: ["normal"],
    },
  },
  content: {
    experimental: {
      clientDB: true,
    },
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  site: {
    url: "https://thewebco.ai",
    name: "TheWebCo",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  nitro: {
    preset: "github_pages",
  },
});
