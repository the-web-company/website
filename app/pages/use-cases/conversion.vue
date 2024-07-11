<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";
import DlPid from "@/components/use-cases/DlPid.vue";

definePageMeta({ title: "Conversion | Use case" });
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 flex flex-col justify-center items-center py-10 xl:py-14">
    <h1 class="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-8 text-center">
      Provide tailored exprince to<br class="hidden lg:block" />your visitors &
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-rose-500">increase conversion</span>
    </h1>
    <h2 class="text-center text-purple-400 text-lg md:text-xl mt-4">Accurately recognize visitors and deliver a personalized experience.</h2>

    <div class="flex items-center gap-4 mt-6">
      <UButton label="Request demo" to="https://calendar.app.google/i7EhNVG7Yt4KUnGP9" target="_blank" />
      <UButton label="Try for free" color="white" variant="outline" to="https://app.thewebco.ai/auth/login" />
    </div>
  </div>

  <div class="bg-purple-900">
    <div class="max-w-screen-xl mx-auto px-4 3xl:px-0 py-8">
      <DlPid />
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <div class="grid grid-cols-6 grid-rows-12 gap-4 md:gap-6 lg:gap-8">
      <div
        class="col-span-6 md:col-span-3 row-span-7 p-4 rounded-md ring-1 ring-purple-600 bg-purple-900 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-share" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Prevent account sharing</h3>
        <p class="text-purple-400 text-sm">
          Integrate TheWebCo unique visitor id to the authentication process and ensure that only the authorized user can access the account.
        </p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-5 p-4 rounded-md ring-1 ring-purple-600 bg-purple-900 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-user" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Detect account takeover</h3>
        <p class="text-purple-400 text-sm">
          Safeguard users' personal information and maintaining the trustworthiness of your platform by using TheWebCo solution.
        </p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-7 p-4 rounded-md ring-1 ring-purple-600 bg-purple-900 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-currency-dollar" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Block paywall bypass</h3>
        <p class="text-purple-400 text-sm">
          Maintain your revenue stream and continue delivering valuable and high-quality content to your paying audience by blocking bypass methods such as
          incognito mode, browser extensions, or VPNs.
        </p>
      </div>
      <div
        class="col-span-6 md:col-span-3 row-span-5 p-4 rounded-md ring-1 ring-purple-600 bg-purple-900 transition duration-500 ease-in-out hover:shadow-md hover:ring-purple-400 overflow-hidden"
      >
        <UIcon name="i-heroicons-window" class="h-7 w-7 mb-2" />
        <h3 class="text-lg">Identify visitor browser tampering</h3>
        <p class="text-purple-400 text-sm">
          Take preventive actions, safeguard sensitive information, and ensure a secure and trustworthy user experience by identifying tampering attempts.
        </p>
      </div>
    </div>
  </div>

  <div class="max-w-screen-2xl mx-auto space-y-8 px-4 3xl:px-0 py-14">
    <ClientOnly><DlCta /></ClientOnly>
  </div>
</template>
