<script setup lang="ts">
import { TheWebCo } from "@thewebco/pid";
new TheWebCo("14ada8cb-136b-442d-91ce-7330c6d5ebbd");
const route = useRoute();

useSeoMeta({
  ogSiteName: `TheWebCo AI${route.meta.title ? ` | ${route.meta.title}` : ""}`,
  title: `TheWebCo AI${route.meta.title ? ` | ${route.meta.title}` : ""}`,
  ogTitle: `TheWebCo AI${route.meta.title ? ` | ${route.meta.title}` : ""}`,
  description: "Next-Gen AI platform to uniquely know your data.",
  ogDescription: "Next-Gen AI platform to uniquely know your data.",
  ogImage: "https://thewebco.ai/social-banner.webp",
  ogImageAlt: "TheWebCo logo",
  ogUrl: "https://thewebco.ai",

  twitterCard: "summary_large_image",
  twitterImage: "https://thewebco.ai/social-banner.webp",
  twitterSite: "@TheWebCo",
  twitterCreator: "@TheWebCo",
});

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.svg" }],
  htmlAttrs: {
    lang: "en",
  },
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
