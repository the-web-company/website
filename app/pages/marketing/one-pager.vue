<script setup lang="ts">
definePageMeta({ layout: "empty" });
import DlPid from "@/components/use-cases/DlPid.vue";
</script>

<template>
  <div class="space-y-8">
    <div class="p-4">
      <span class="flex items-center">
        <UIcon name="i-heroicons-square-3-stack-3d" class="h-8 w-8 mr-2" />
        <h1 class="md:hidden lg:block text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-extralight">TheWebCo</h1>
      </span>

      <h1 class="text-4xl font-semibold leading-tight mt-6">
        For <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-200">the first time ever</span> you can actually know your
        visitors & users
      </h1>
      <h2 class="text-gray-500 text-lg md:text-xl mt-2">Take actions based on their journey, what's important to them, and who they are.</h2>
    </div>

    <div class="bg-primary-500 py-4 px-6">
      <div class="p-4 bg-gray-50 rounded-md">
        <h2 class="text-xl text-center">Our vision</h2>
        <p class="mt-1">The Web Company is a group of humans working to make the internet open, transparent and safer place. But how?</p>
        <p class="mt-2">
          We're on a mission to reveal your anonymouse requests and give you actionable insights. For the first time ever you can actually see who your visitors
          are and get real, accurate, and deep intent data about them.
        </p>
      </div>
    </div>

    <div class="flex p-4">
      <div class="w-5/12">
        <h2 class="text-lg">Some of the things you can do once you know the visitor</h2>
        <ol class="pl-6 list-decimal">
          <li>User attribution across all touchpoints, even in incognito mode, browser extensions, VPNs, mobile, desktop, browser switching, etc.</li>
          <li>Convert anonymous visitors into actionable leads, driving your marketing and sales efforts with precision.</li>
          <li>Prevent account sharing by integrating it to the authentication process.</li>
          <li>Detect account takeover and safeguard users' personal information.</li>
          <li>Blocking paywall bypass methods such as incognito mode, browser extensions, or VPNs.</li>
          <li>Personalize the buying experience to each individual by delivering personalized content and offers.</li>
        </ol>
      </div>
      <div class="w-7/12">
        <DlPid />
      </div>
    </div>
  </div>
</template>
