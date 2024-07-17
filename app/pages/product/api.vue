<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";
import DlWindow from "@/components/api/DlWindow.vue";
import DiDevs from "@/components/platform/DiDevs.vue";
import DlSkeleton from "@/components/platform/DlSkeleton.vue";

definePageMeta({ title: "API" });
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 flex flex-col justify-center items-center py-10 xl:py-14">
    <h1 class="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight text-center">
      The single source of <br class="hidden lg:block" /><span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-200"
        >people intelligence</span
      >
      for B2B
    </h1>
    <h2 class="text-center text-gray-500 text-lg md:text-xl mt-4">
      A 360-degree view to billions of people with deep, actionable insights. Experience growth like you never seen before.
    </h2>

    <div class="flex items-center gap-4 mt-6">
      <UButton label="Request demo" to="https://calendar.app.google/i7EhNVG7Yt4KUnGP9" target="_blank" />
      <UButton label="Try for free" color="white" variant="outline" to="https://app.thewebco.ai/auth/login" />
    </div>

    <div class="max-w-screen-xl w-full mt-10">
      <DlWindow />
    </div>
  </div>

  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-14 grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-16">
    <div>
      <h3 class="flex items-center gap-1 font-semibold"><UIcon name="i-heroicons-user-group" class="h-6 w-6 text-primary-500" />2B+ people.</h3>
      <p class="text-gray-500">We don't count profiles, we count people. Every person result contains it's full record fields.</p>
    </div>
    <div>
      <h3 class="flex items-center gap-1 font-semibold"><UIcon name="i-heroicons-identification" class="h-6 w-6 text-primary-500" />Contact enrichment.</h3>
      <p class="text-gray-500">The freshest and most accurate data on the planet. Get yourself the quality data you deserve.</p>
    </div>
    <div>
      <h3 class="flex items-center gap-1 font-semibold"><UIcon name="i-heroicons-light-bulb" class="h-6 w-6 text-primary-500" />Social insights.</h3>
      <p class="text-gray-500">A 360-degree view with deep, actionable insights like you never dared to dream of.</p>
    </div>
    <div>
      <h3 class="flex items-center gap-1 font-semibold">
        <UIcon name="i-heroicons-presentation-chart-line" class="h-6 w-6 text-primary-500" /> Professional insights.
      </h3>
      <p class="text-gray-500">The insights you want. Those you didn't know you needed and the ones you wouldn't thought are possible.</p>
    </div>
    <div>
      <h3 class="flex items-center gap-1 font-semibold"><UIcon name="i-heroicons-code-bracket-square" class="h-6 w-6 text-primary-500" />Powerful API.</h3>
      <p class="text-gray-500">A true search engine for people. With powerful filtering and query operators for amazing accuracy.</p>
    </div>
    <div>
      <h3 class="flex items-center gap-1 font-semibold"><UIcon name="i-heroicons-currency-dollar" class="h-6 w-6 text-primary-500" />Pay per value.</h3>
      <p class="text-gray-500">Fixed price, pay per match, define match strictness and required fields, no upfront fee, no commitment.</p>
    </div>
  </div>

  <!-- Logo cloud -->
  <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <div class="text-center">
      <h3 class="text-4xl">Trusted by the world’s most innovative teams</h3>
    </div>

    <div class="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:grid-cols-6">
      <img src="/api/playtika.webp" class="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition" alt="Playtika logo" />
      <img src="/api/microsoft.webp" class="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition" alt="Microsoft logo" />
      <img src="/api/google.webp" class="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition" alt="Google logo" />
      <img src="/api/verint.webp" class="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition" alt="Verint logo" />
      <img src="/api/rakia.webp" class="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition" alt="Rakia logo" />
      <img src="/api/seon.webp" class="max-h-12 w-full object-contain grayscale hover:grayscale-0 transition" alt="Seon logo" />
    </div>
  </div>

  <div class="relative max-w-screen-2xl mx-auto px-4 3xl:px-0 py-14 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-y-20">
    <div class="lg:pr-8 lg:pt-4">
      <div class="lg:max-w-lg space-y-2">
        <h3 class="text-3xl xl:text-4xl">Welcome to the age of intelligence</h3>
        <p class="text-gray-500 text-sm xl:text-base">
          We built a production-ready people data source, at scale and with global coverage, so you don't need to.
        </p>

        <dl class="py-4 max-w-xl space-y-8 text-base leading-7 text-gray-500 lg:max-w-none">
          <div class="flex gap-2">
            <div><UIcon name="i-heroicons-magnifying-glass" class="h-6 w-6 text-primary-500" /></div>
            <p><span class="font-semibold text-primary-500">Search</span> every paramter with advanced filtering and query operators for amazing accuracy.</p>
          </div>
          <div class="flex gap-2">
            <div><UIcon name="i-heroicons-code-bracket-square" class="h-6 w-6 text-primary-500" /></div>
            <p><span class="font-semibold text-primary-500">Simple</span> RESTful API with easy to use playground to help you get started quickly.</p>
          </div>
          <div class="flex gap-2">
            <div><UIcon name="i-heroicons-identification" class="h-6 w-6 text-primary-500" /></div>
            <p>
              <span class="font-semibold text-primary-500">No tricks</span> with multiple endpoints, one endpoint for every entity, get the whole data in a
              single request.
            </p>
          </div>
        </dl>
      </div>
    </div>

    <div
      class="max-w-none lg:absolute lg:translate-x-[50%] xl:translate-x-[60%] lg:translate-y-10 h-3/4 lg:h-full overflow-hidden ring-1 ring-purple-700 rounded-md"
    >
      <DlSkeleton selected="devs">
        <DiDevs />
      </DlSkeleton>
    </div>
  </div>

  <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <ClientOnly><DlCta /></ClientOnly>
  </div>
</template>
