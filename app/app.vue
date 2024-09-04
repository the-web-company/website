<script setup lang="ts">
const route = useRoute();

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  ogSiteName: `TheWebCo AI${route.meta.title ? ` | ${route.meta.title}` : ""}`,
  title: `TheWebCo AI${route.meta.title ? ` | ${route.meta.title}` : ""}`,
  ogTitle: `TheWebCo AI${route.meta.title ? ` | ${route.meta.title}` : ""}`,
  description: "Really know your visitors & users!",
  ogDescription: "Really know your visitors & users!",
  ogImage: "https://thewebco.ai/social-banner.webp",
  ogImageAlt: "TheWebCo logo",
  ogUrl: "https://thewebco.ai",
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterImage: "https://thewebco.ai/social-banner.webp",
  twitterSite: "@thewebco_hq",
  twitterCreator: "@thewebco_hq",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
:root {
  font-family: Lato, "Helvetica Neue", sans-serif;
}

html {
  @apply h-full text-zinc-900 bg-zinc-50;
}
</style>
