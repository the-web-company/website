<script setup lang="ts">
import DlUseCases from "@/components/DlUseCases.vue";
import DlBentoGrid from "@/components/DlBentoGrid.vue";
import DlNewsletter from "@/components/DlNewsletter.vue";
import DlAnonFeatures from "@/components/DlAnonFeatures.vue";
import DlTestimonials from "@/components/DlTestimonials.vue";
import DlSkeleton from "@/components/platform/DlSkeleton.vue";
import DiVisitors from "@/components/platform/DiVisitors.vue";
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 flex flex-col justify-center items-center py-10 xl:py-14">
    <h1 class="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight text-center">
      For <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-200">the first time ever</span> you can actually
      <br class="hidden lg:block" />
      know your visitors & users
    </h1>
    <h2 class="text-center text-gray-500 text-lg md:text-xl mt-4">Take actions based on their journey, what's important to them, and who they are</h2>

    <div class="flex items-center gap-4 mt-6">
      <UButton label="Request demo" to="https://calendar.app.google/i7EhNVG7Yt4KUnGP9" target="_blank" />
      <UButton label="Try for free" variant="outline" to="https://app.thewebco.ai/auth/login" />
    </div>

    <div class="max-w-screen-2xl w-full mt-10">
      <DlSkeleton>
        <DiVisitors />
      </DlSkeleton>
    </div>
  </div>

  <div class="bg-primary-100 px-4 3xl:px-0 py-10 xl:py-14">
    <DlAnonFeatures />
  </div>

  <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <div class="space-y-2 text-center">
      <h3 class="text-4xl">New dawn of real world analytics</h3>
      <p class="text-gray-500">
        Say goodbye to anonymous audiences and meaningless metrics. Unveil actionable insights and understand your visitors like never before.
      </p>
    </div>

    <DlBentoGrid />
  </div>

  <div class="bg-primary-100">
    <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
      <DlUseCases />
    </div>
  </div>

  <!-- <div class="bg-violet-50 px-4 3xl:px-0 py-10 xl:py-14">
    <div class="max-w-screen-2xl mx-auto space-y-8">
      <h3 class="text-4xl text-center">Customer feedback that speaks for Itself</h3>
      <DlTestimonials />
    </div>
  </div> -->

  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14">
    <DlNewsletter />
  </div>
</template>
