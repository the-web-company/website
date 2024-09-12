<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";
import DlAuthor from "@/components/blog/DlAuthor.vue";

const route = useRoute();
const currentPost = await queryContent(route.path).findOne();

useSeoMeta({
  title: currentPost.title,
  ogTitle: currentPost.title,
  description: currentPost.description,
  ogDescription: currentPost.description,
  ogImage: `https://thewebco.ai${currentPost.featuredImage}`,
  ogImageAlt: "TheWebCo blog post hero image",
  ogImageType: "image/png",
  ogUrl: `https://thewebco.ai${currentPost._path}`,

  twitterCard: "summary_large_image",
  twitterImage: `https://thewebco.ai${currentPost.featuredImage}`,

  ogType: "article",
  ogLocale: "en_US",
  articleAuthor: currentPost.author,
  articlePublishedTime: currentPost.pubDate,
});

onMounted(() => {
  const anchors: NodeListOf<any> = document.querySelectorAll(".blog-content h2, h3");
  const links = document.querySelectorAll("nav > ul > div > li > a");

  window.addEventListener("scroll", () => {
    if (typeof anchors != "undefined" && anchors != null && typeof links != "undefined" && links != null) {
      let scrollTop = window.scrollY;

      // highlight the last scrolled-to: set everything inactive first
      links.forEach((link) => {
        link.classList.remove("active");
      });

      // then iterate backwards, on the first match highlight it and break
      for (var i = anchors.length - 1; i >= 0; i--) {
        if (scrollTop > anchors[i].offsetTop - 80) {
          links[i]?.classList.add("active");
          break;
        }
      }
    }
  });
});
</script>

<template>
  <div class="max-w-screen-xl mx-auto relative">
    <div class="md:absolute pt-8 md:pt-14">
      <UButton icon="i-heroicons-arrow-long-left" label="Blog" variant="link" size="lg" to="/blog" />
    </div>
  </div>

  <main class="max-w-screen-xl mx-auto px-4 3xl:px-0 md:py-14">
    <h3 class="text-3xl font-semibold text-center">{{ currentPost.title }}</h3>

    <div class="flex flex-col sm:flex-row justify-between items-center my-10 gap-4">
      <DlAuthor :post="currentPost" />

      <div class="flex flex-col sm:flex-row gap-2 items-center text-sm text-gray-500">
        <span class="flex gap-1 items-center">
          <UIcon name="i-heroicons-calendar-days" />
          <time :datetime="currentPost.pubDate">{{ new Date(currentPost.pubDate).toDateString() }}</time>
        </span>
        <p class="hidden sm:block">•</p>
        <span class="flex gap-1 items-center"><UIcon name="i-heroicons-clock" />{{ currentPost.readingTime.text }}</span>
      </div>
    </div>

    <div class="relative flex flex-col-reverse lg:grid lg:grid-cols-10 lg:gap-6 px-4 sm:px-8 md:px-14">
      <div class="blog-content lg:col-span-8">
        <ContentDoc>
          <template #not-found>
            <h1>Article not found, return to blog page</h1>
          </template>
        </ContentDoc>
      </div>

      <div class="lg:px-0 lg:col-span-2 text-gray-500 text-sm h-fit lg:sticky lg:top-20 flex flex-col-reverse lg:flex-col">
        <nav>
          <p class="font-semibold">ON THIS PAGE</p>
          <ul>
            <div v-for="link of currentPost.body?.toc?.links" :key="link.id">
              <li class="py-1">
                <a :href="`#${link.id}`" class="hover:text-gray-900">{{ link.text }}</a>
              </li>
              <li v-for="sublink of link.children || []" :key="sublink.id" class="ml-2 pl-2 border-l border-gray-300 py-1">
                <a :href="`#${sublink.id}`" class="hover:text-gray-900">{{ sublink.text }}</a>
              </li>
            </div>
          </ul>
        </nav>

        <div class="mb-6 lg:m-0 pb-6 lg:p-0 border-b lg:border-0 border-gray-300">
          <p class="font-semibold mt-5 text-xs">Share this article:</p>
          <div class="mt-2 flex items-center gap-4">
            <NuxtLink
              :href="`https://twitter.com/intent/tweet?text=https://thewebco.ai${currentPost._path}`"
              target="_blank"
              class="text-gray-400 hover:text-gray-700"
            >
              <span class="sr-only">Twitter / X</span>
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 487.43 456.19">
                <path
                  id="path1009"
                  class="cls-1"
                  d="M7.48,21.9,195.66,273.57,6.29,478.1H48.91L214.71,299l134,179.11h145L294.93,212.33,471.2,21.9H428.58L275.89,186.82,152.51,21.9ZM70.16,53.3h66.63L431,446.7H364.39Z"
                  transform="translate(-6.29 -21.9)"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              :href="`https://www.linkedin.com/shareArticle?mini=true&url=https://thewebco.ai${currentPost._path}`"
              target="_blank"
              class="text-gray-400 hover:text-gray-700"
            >
              <span class="sr-only">LinkedIn</span>
              <svg class="h-5 w-5" fill="currentColor" height="1em" viewBox="0 0 448 512" aria-hidden="true">
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              :href="`https://www.facebook.com/sharer/sharer.php?u=https://thewebco.ai${currentPost._path}`"
              target="_blank"
              class="text-gray-400 hover:text-gray-700"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-5 w-5"
                height="100%"
                style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
                version="1.1"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <g>
                  <path
                    d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                    style="fill-rule: nonzero"
                  />
                  <path
                    d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                    style="fill: #fff; fill-rule: nonzero"
                  />
                </g>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="py-10">
      <ClientOnly><DlCta /></ClientOnly>
    </div>
  </main>
</template>

<style scoped>
nav .active {
  @apply text-gray-900;
}

.blog-content :deep(h1) {
  @apply text-2xl mt-6 -mb-2 font-semibold;
}

.blog-content :deep(h2) {
  @apply text-2xl mt-8 -mb-2;
}
.blog-content :deep(h3) {
  @apply text-xl mt-6;
}

.blog-content :deep(p) {
  @apply my-2 leading-loose;
}

.blog-content :deep(img) {
  @apply rounded-md h-full md:w-3/4 object-cover my-4 mx-auto;
}

.blog-content :deep(ol),
.blog-content :deep(ul) {
  @apply pl-8;
}

.blog-content :deep(ol) {
  @apply list-decimal;
}

.blog-content :deep(ul) {
  @apply list-disc;
}

.blog-content :deep(ol li),
.blog-content :deep(ul li) {
  @apply my-4 leading-loose;
}

.blog-content :deep(ol li br) {
  content: "";
  @apply block h-2;
}

.blog-content :deep(pre) {
  @apply mt-1 text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 rounded-md p-2;
}
</style>
