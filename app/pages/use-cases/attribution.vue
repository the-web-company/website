<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";
import DlPid from "@/components/use-cases/DlPid.vue";

definePageMeta({ title: "Attribution | Use case" });
const { data } = await useAsyncData("use-cases-attribution", () => queryContent("/use-cases/attribution").findOne());
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
        <UIcon name="i-heroicons-device-phone-mobile" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Easy solution</h3>
        <p class="text-gray-500 text-sm">
          Attribution can be complex due to the multitude of channels and devices a user might use, with TheWebCo it's as easy as adding a script tag.
        </p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-5 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <svg class="h-7 w-7 mb-2 fill-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M182.8 28.4l-74 39.5C89.1 78.4 73.2 94.9 63.4 115L26.7 190.6c-9.8 20.1-13 42.9-9.1 64.9l14.5 82.8c3.9 22.1 14.6 42.3 30.7 57.9l60.3 58.4c16.1 15.6 36.6 25.6 58.7 28.7l83 11.7c22.1 3.1 44.6-.9 64.4-11.4l74-39.5c19.7-10.5 35.6-27 45.4-47.2l36.7-75.5c9.8-20.1 13-42.9 9.1-64.9c-.9-5.3-5.3-9.3-10.6-10.1c-51.5-8.2-92.8-47.1-104.5-97.4c-1.8-7.6-8-13.4-15.7-14.6c-54.6-8.7-97.7-52-106.2-106.8c-.8-5.4-4.9-9.8-10.3-10.6c-22.1-3.1-44.6 .9-64.4 11.4zm46.3 19.7c15 58.3 62 103.6 121.2 116.4c15.6 54.1 59 96.4 113.7 110.5c0 11.2-2.5 22.3-7.5 32.5L419.8 383c-6.8 14.1-17.9 25.6-31.7 32.9l-74 39.5c-13.7 7.3-29.4 10.1-44.8 7.9l-83-11.7c-15.4-2.2-29.7-9.2-40.9-20L85.1 373.2c-11.2-10.9-18.7-25-21.4-40.4L49.1 250c-2.7-15.4-.5-31.3 6.4-45.4L92.2 129c6.8-14.1 17.9-25.6 31.7-32.9l74-39.5c9.7-5.2 20.4-8.1 31.2-8.6zM184 192a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm8 184a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM312 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm40 120a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
          />
        </svg>
        <h3 class="text-lg">No 3rd party cookies? No worries!</h3>
        <p class="text-gray-500 text-sm">TheWebCo enhanced attribution model work within the new constraints.</p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-7 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-arrows-right-left" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Switching between devices</h3>
        <p class="text-gray-500 text-sm">
          Incognito mode, browser extensions, VPNs, mobile apps, desktop browser, browser switching - you'll get the same unique visitor id.
        </p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-5 p-4 rounded-md ring-1 ring-gray-200 bg-gray-100 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-window" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Browser tampering</h3>
        <p class="text-gray-500 text-sm">TheWebCo identifying tampering attempts and factors them in, providing a unique result every time.</p>
      </div>
    </div>
  </div>

  <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <ClientOnly><DlCta /></ClientOnly>
  </div>
</template>
