<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";
import DlPid from "@/components/use-cases/DlPid.vue";

definePageMeta({ title: "Marketing | Use case" });
const { data } = await useAsyncData("use-cases-marketing", () => queryContent("/use-cases/marketing").findOne());
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 flex flex-col justify-center items-center py-10 xl:py-14">
    <h1 class="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-8 text-center" v-html="data?.title"></h1>
    <h2 class="text-center text-gray-500 text-lg md:text-xl mt-4">{{ data?.subtitle }}</h2>

    <div class="flex items-center gap-4 mt-6">
      <UButton label="Request demo" to="https://calendar.app.google/i7EhNVG7Yt4KUnGP9" target="_blank" />
      <UButton label="Try for free" color="white" variant="outline" to="https://app.thewebco.ai/auth/login" />
    </div>
  </div>

  <div class="bg-primary-100">
    <div class="max-w-screen-xl mx-auto px-4 3xl:px-0 py-8">
      <DlPid />
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <div class="grid grid-cols-6 grid-rows-12 gap-4 md:gap-6 lg:gap-8">
      <div
        class="col-span-6 md:col-span-3 row-span-7 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-currency-dollar" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Transforms your website into valuable leads</h3>
        <p class="text-gray-500 text-sm">Convert anonymous visitors into actionable leads, driving your marketing and sales efforts with precision.</p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-5 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-arrows-pointing-in" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Identify & target the right audience</h3>
        <p class="text-gray-500 text-sm">
          Focus your marketing efforts on high-potential prospects, ensuring your campaigns reach those most likely to convert.
        </p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-7 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-puzzle-piece" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Understand your visitors</h3>
        <p class="text-gray-500 text-sm">Get real, accurate, and deep intent data about your visitors, as well as detailed analytics on their journey.</p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-5 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-rectangle-group" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Personalize the buying experience</h3>
        <p class="text-gray-500 text-sm">Tailor the buying experience to each individual by delivering personalized content and offers.</p>
      </div>
    </div>
  </div>

  <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <ClientOnly><DlCta /></ClientOnly>
  </div>
</template>
