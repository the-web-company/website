import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/sitemap", "nuxt-simple-robots"],
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_STUDIO_TOKENS: "9cade5b665b01239015afdbf9a2bd10f29717470d45e190cbe8cbf94ffb4a5f7",
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
    sources: {
      content: {
        driver: "fs",
        prefix: "/blog", // All contents inside this source will be prefixed with `/docs`
        base: resolve(__dirname, "content"),
      },
    },
    markdown: {
      remarkPlugins: ["remark-reading-time"],
    },
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
