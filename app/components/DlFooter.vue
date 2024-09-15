<script setup lang="ts">
const currentYear = new Date().getFullYear();
const menu = [
  {
    label: "Product",
    children: [
      // { label: "Features", to: "/product/features" },
      { label: "API", to: "/product/api" },
    ],
  },
  {
    label: "Use cases",
    children: [
      { label: "User attribution", to: "/use-cases/attribution" },
      { label: "Fraud", to: "/use-cases/fraud" },
      { label: "Marketing", to: "/use-cases/marketing" },
      // { label: "Increase conversion", to: "/use-cases/conversion" },
    ],
  },
  {
    label: "Support",
    children: [
      { label: "Pricing", to: "/pricing" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    label: "Legal",
    children: [
      { label: "Claim", to: "/legal/claim" },
      { label: "Privacy", to: "/legal/privacy" },
      { label: "Terms", to: "/legal/terms" },
    ],
  },
];
</script>

<template>
  <footer>
    <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14">
      <div class="xl:grid xl:grid-cols-5 xl:gap-8">
        <div class="flex flex-col sm:flex-row xl:flex-col justify-around items-center xl:items-start space-y-4 sm:space-y-0 xl:space-y-8 mb-4 xl:m-0">
          <NuxtLink class="flex items-center" to="/">
            <img src="/favicon.svg" class="h-8 w-8 mr-2" />
            <h2 class="text-3xl font-extralight">TheWebCo</h2>
          </NuxtLink>

          <div class="flex space-x-6 items-center">
            <NuxtLink href="https://x.com/thewebco_hq" target="_blank" class="text-gray-400 hover:text-gray-600">
              <span class="sr-only">Twitter / X</span>
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 487.43 456.19">
                <path
                  id="path1009"
                  class="cls-1"
                  d="M7.48,21.9,195.66,273.57,6.29,478.1H48.91L214.71,299l134,179.11h145L294.93,212.33,471.2,21.9H428.58L275.89,186.82,152.51,21.9ZM70.16,53.3h66.63L431,446.7H364.39Z"
                  transform="translate(-6.29 -21.9)"
                />
              </svg>
            </NuxtLink>
            <NuxtLink href="https://www.linkedin.com/company/thewebco" target="_blank" class="text-gray-400 hover:text-gray-600">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" height="1em" viewBox="0 0 448 512" aria-hidden="true">
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink href="https://github.com/the-web-company" target="_blank" class="text-gray-400 hover:text-gray-600">
              <span class="sr-only">GitHub</span>
              <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>
            <NuxtLink href="https://www.youtube.com/channel/the-web-company" target="_blank" class="text-gray-400 hover:text-gray-600">
              <span class="sr-only">YouTube</span>
              <svg class="h-9 w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="col-start-3 col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
          <div v-for="(item, index) of menu" :key="index" class="flex flex-col text-center">
            <ul class="space-y-3">
              <h3 class="text-sm font-semibold">{{ item.label }}</h3>
              <li v-for="(child, childIndex) of item.children" :key="childIndex">
                <NuxtLink :to="child.to" class="duration-300 ease-in-out text-gray-500 hover:text-gray-500 text-sm">{{ child.label }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-300 pt-8 text-sm text-center">
        <p class="text-gray-500">&copy; {{ currentYear }} TheWebCo, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
