<script setup lang="ts">
definePageMeta({ layout: "empty" });
import DIGeneral from "@/components/person/DIGeneral.vue";
import DlSkeleton from "@/components/platform/DlSkeleton.vue";
import DiVisitors from "@/components/platform/DiVisitors.vue";

const browserAttributes = [
  "fontsHash: bc2cf8dbfd44b881ae1442",
  "webglHash: e13f2a699976dad7ca9068",
  "hardwareConcurrency: 8",
  "userAgent: Mozilla/5.0 (Win...",
  "screenWidth: 1920",
  "screenHeight: 1080",
  "localStorage: true",
  "language: en-US",
  "timeZone: America/New_York",
  "indexedDB: true",
  "canvasHash: f68f86fd4d9e8f3ee0fefd",
  "cookiesEnabled: true",
  "audioSampleRate: 48000",
  "screenColorDepth: 24",
  "audioChannelCount: 2",
];

const useCase = [
  {
    icon: "i-heroicons-cursor-arrow-rays",
    text: "User attribution across all touchpoints, even in incognito mode, browser extensions, VPNs, mobile, desktop, browser switching, etc.",
  },
  {
    icon: "i-heroicons-arrows-pointing-in",
    text: "Convert anonymous visitors into actionable leads, driving your marketing and sales efforts with precision.",
  },
  { icon: "i-heroicons-puzzle-piece", text: "Prevent account sharing by integrating it to the authentication process." },
  { icon: "i-heroicons-finger-print", text: "Detect account takeover and safeguard users' personal information." },
  { icon: "i-heroicons-currency-dollar", text: "Blocking paywall bypass methods such as incognito mode, browser extensions, or VPNs." },
  {
    icon: "i-heroicons-rectangle-group",
    text: "Personalize the buying experience to each individual by delivering personalized content and offers.",
  },
];

const howItWorks = [
  "Register to our platform",
  "Create a new project and add the domain",
  "Add our script to your website",
  "Start to see who visits your website",
  "Get the unique id of the visitor to uniquely know who they are",
];
</script>

<template>
  <div class="flex">
    <div class="w-2/5 bg-primary-500 p-4">
      <span class="flex items-center text-gray-50">
        <img src="/favicon.svg" class="h-8 w-8 mr-2" alt="TheWebCo logo" />
        <h1 class="text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-extralight">TheWebCo</h1>
      </span>

      <h2 class="text-3xl font-semibold leading-tight mt-10 text-gray-50">
        For <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary-900 to-primary-600">the first time ever</span> you can actually know your
        visitors & users
      </h2>
      <h3 class="text-gray-300 text-lg md:text-xl mt-4">Take actions based on their journey, what's important to them, and who they are.</h3>

      <div class="mt-36">
        <div class="flex flex-col gap-6 md:gap-8 items-center">
          <div class="w-[23rem] overflow-x-hidden p-4 bg-primary-200 ring-1 ring-primary-300 z-20 rounded-md">
            <div class="flex flex-wrap gap-2 min-w-[40rem]">
              <div v-for="(value, index) of [...browserAttributes]" :key="index">
                <UBadge>{{ value }}</UBadge>
              </div>
            </div>
          </div>

          <div
            class="mt-10 bg-primary-200 ring-1 ring-primary-300 rounded-md w-fit p-4 flex justify-center items-center h-fit relative before:content-[''] before:w-20 before:border-b rotate-90 before:absolute before:bottom-1/2 before:border-primary-300 before:right-full after:content-[''] after:w-20 after:border-b after:absolute after:bottom-1/2 after:border-primary-300 after:left-full"
          >
            <svg class="h-10 w-10 md:h-14 md:w-14 fill-primary-500 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="m23.5,9c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.5v-1.5c0-.169-.01-.336-.028-.5h1.528c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.757c-.453-1.277-1.466-2.29-2.743-2.743V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.528c-.164-.018-.331-.028-.5-.028h-1.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-2.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-2.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-1.5c-.169,0-.336.01-.5.028V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.757c-1.277.453-2.29,1.466-2.743,2.743H.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.528c-.018.164-.028.331-.028.5v1.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v2.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v2.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v1.5c0,.169.01.336.028.5H.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.757c.453,1.277,1.466,2.29,2.743,2.743v1.757c0,.276.224.5.5.5s.5-.224.5-.5v-1.528c.164.018.331.028.5.028h1.5v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h2.5v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h2.5v1.5c0,.276.224.5.5.5s.5-.224.5-.5v-1.5h1.5c.169,0,.336-.01.5-.028v1.528c0,.276.224.5.5.5s.5-.224.5-.5v-1.757c1.277-.453,2.29-1.466,2.743-2.743h1.757c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.528c.018-.164.028-.331.028-.5v-1.5h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.5v-2.5h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5h-1.5v-2.5h1.5Zm-6,12H6.5c-1.93,0-3.5-1.57-3.5-3.5V6.5c0-1.93,1.57-3.5,3.5-3.5h11c1.93,0,3.5,1.57,3.5,3.5v11c0,1.93-1.57,3.5-3.5,3.5Zm-.5-13.5v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5V7.5c0-.276.224-.5.5-.5s.5.224.5.5Zm-5.162.872c-.215-.812-1.022-1.376-1.857-1.371-.782.029-1.497.605-1.698,1.363l-2.265,8c-.075.266.079.542.345.617.045.013.091.019.137.019.218,0,.418-.144.48-.364l.744-2.628s.001,0,.002,0h4.587l.703,2.622c.072.266.346.421.612.354.267-.072.425-.346.354-.613l-2.145-7.998Zm-3.83,4.636l1.24-4.38c.091-.345.423-.614.77-.627.378-.033.756.262.854.629l1.174,4.378h-4.038Z"
              />
            </svg>
          </div>

          <div class="p-4 bg-primary-200 ring-1 ring-primary-300 rounded-md scale-75 w-[30rem]">
            <DIGeneral :short-list="true" class="w-full" />
          </div>
        </div>
      </div>

      <div class="mt-36">
        <h2 class="text-3xl font-semibold leading-tight text-gray-50 mb-2">Contact</h2>

        <div class="ml-2 space-y-1 text-gray-50">
          <p>Email: support@thewebco.ai</p>
          <p>Website: https://thewebco.ai</p>
        </div>

        <div class="flex justify-end items-center gap-4 mt-4">
          <NuxtLink href="https://x.com/thewebco_hq" target="_blank" class="text-gray-100">
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
          <NuxtLink href="https://www.linkedin.com/company/thewebco" target="_blank" class="text-gray-100">
            <span class="sr-only">LinkedIn</span>
            <svg class="h-5 w-5" fill="currentColor" height="1em" viewBox="0 0 448 512" aria-hidden="true">
              <path
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </NuxtLink>
          <NuxtLink href="https://www.youtube.com/channel/the-web-company" target="_blank" class="text-gray-100">
            <span class="sr-only">YouTube</span>
            <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clip-rule="evenodd"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-20">
        <p>second page</p>
      </div>
    </div>
    <div class="w-3/5 p-4 space-y-12 divide-y divide-primary-400">
      <div>
        <h2 class="text-xl text-center my-4">Our vision</h2>
        <p>The Web Company is a group of humans working to make the internet open, transparent and safer place. But how?</p>
        <p class="mt-2">
          We're on a mission to reveal your anonymouse requests and give you actionable insights. For the first time ever you can actually see who your visitors
          are and get real, accurate, and deep intent data about them.
        </p>
      </div>

      <div class="pt-12">
        <h2 class="text-xl text-center mb-4">Some of the things you can do once you know the visitor</h2>
        <div class="grid gap-4 grid-cols-2">
          <div v-for="(item, index) of useCase" :key="index" class="py-4 px-2">
            <UIcon :name="item.icon" class="h-7 w-7" />
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>

      <div class="pt-12">
        <h2 class="text-xl text-center mb-4">How it works</h2>
        <ul class="list-decimal ml-5">
          <li v-for="(item, index) of howItWorks" :key="index" class="py-1">{{ item }}</li>
        </ul>

        <div class="flex items-center h-52 px-20">
          <h2 class="text-center text-3xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-800 to-primary-200">
            Turn anonymous data into insights & impactful actions.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
