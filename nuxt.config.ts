// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts", "@nuxtjs/sitemap", "@nuxtjs/seo"],
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
    description: "Know your visitors & users",
    defaultLocale: "en",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  nitro: {
    preset: "github_pages",
    prerender: {
      crawlLinks: true,
      routes: ["/posts/2024/9/visitor-tracking", "/posts/2024/8/revolutionizing-online-security", "/posts/2024/7/user-attribution"],
    },
  },
});
