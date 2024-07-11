<script setup lang="ts">
import DIGeneral from "@/components/person/DIGeneral.vue";
import DlInterests from "@/components/person/DlInterests.vue";
import DlCloseness from "@/components/person/DlCloseness.vue";
import DlContactTime from "@/components/person/DlContactTime.vue";
import DlIceBreakers from "@/components/person/DlIceBreakers.vue";
import DlSocialActivity from "@/components/person/DlSocialActivity.vue";
</script>

<template>
  <div class="relative mx-auto max-w-6xl bg-purple-800 rounded-md px-4 sm:px-6 lg:px-10 py-6 sm:py-10 md:py-16 overflow-hidden">
    <div class="text-center sm:text-start sm:w-1/2 lg:w-full pr-4 sm:p-0">
      <h3 class="text-3xl md:text-4xl">Nobody knows people<br />like TheWebCo does</h3>
      <p class="text-purple-400 mt-3 md:mt-5 md:text-lg">Start making a difference in your company now.</p>

      <div class="mt-8 flex flex-col md:flex-row items-center gap-x-5">
        <NuxtLink to="https://app.thewebco.ai/auth/register">
          <UButton size="xl">Get started</UButton>
        </NuxtLink>
        <UButton aria-label="Book a demo CTA button" size="xl" variant="link" to="https://calendar.app.google/i7EhNVG7Yt4KUnGP9" target="_blank"
          >Book a demo →</UButton
        >
      </div>
    </div>

    <div
      class="hidden sm:grid grid-cols-6 xl:grid-cols-3 xl:grid-rows-3 gap-4 absolute top-0 scale-[.6] -translate-y-96 md:-translate-y-80 lg:-translate-y-72 xl:-translate-y-60 translate-x-1/2 sm:translate-x-72 md:translate-x-1/3 lg:translate-x-72 -rotate-6"
    >
      <div class="col-span-6 xl:col-span-2 max-h-80 overflow-hidden">
        <DIGeneral />
      </div>
      <div class="col-span-6 md:col-span-3 xl:col-span-1 max-h-80 overflow-hidden">
        <DlInterests :show-video="false" />
      </div>
      <div class="col-span-6 md:col-span-3 xl:col-span-1 row-span-2 max-h-full overflow-hidden">
        <DlIceBreakers />
      </div>
      <div class="col-span-6 md:col-span-3 xl:col-span-1 max-h-80 overflow-hidden">
        <DlContactTime />
      </div>
      <div class="col-span-6 lg:col-span-2 xl:col-span-1 max-h-80 h-full overflow-hidden border-b border-neutral-300 rounded-md">
        <DlSocialActivity />
      </div>
      <div class="col-span-6 lg:col-span-4 xl:col-span-2 max-h-80 overflow-hidden">
        <DlCloseness />
      </div>
    </div>
  </div>
</template>
