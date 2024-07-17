<script setup lang="ts">
const links = ref([
  // {
  //   label: "Products",
  //   children: [
  //     {
  //       label: "Platform",
  //       to: "/products/platform",
  //       icon: "i-heroicons-rectangle-group",
  //       description: "A simple pricing, for solo developers or teams.",
  //     },
  //     {
  //       label: "API",
  //       to: "/products/api",
  //       icon: "i-heroicons-computer-desktop",
  //       description: "Get started with one of our official templates.",
  //     },
  //   ],
  // },
  {
    label: "Use cases",
    open: false,
    basePath: "/use-cases",
    icon: "i-heroicons-rectangle-stack",
    children: [
      {
        label: "User attribution",
        to: "/use-cases/attribution",
        icon: "i-heroicons-cursor-arrow-rays",
        description: "A single solution for user attribution across the web that's just works.",
      },
      {
        label: "Fraud",
        to: "/use-cases/fraud",
        icon: "i-heroicons-finger-print",
        description: "Instantly identify fraud, account sharing, account takeover, and paywall bypass.",
      },
      {
        label: "Marketing",
        to: "/use-cases/marketing",
        icon: "i-heroicons-user-circle",
        description: "Uncover learnings about your visitors by recognizing them across web and mobile.",
      },
      // {
      //   label: "Increase conversion",
      //   to: "/use-cases/conversion",
      //   icon: "i-heroicons-arrow-trending-up",
      //   description: "Accurately recognize visitors and deliver a personalized experience.",
      // },
    ],
  },
  // { label: "Pricing", to: "/pricing", icon: "i-heroicons-tag" },
  { label: "Blog", to: "/blog", icon: "i-heroicons-pencil" },
  { label: "Contact", to: "/contact", icon: "i-heroicons-chat-bubble-oval-left" },
]);

const route = useRoute();
const mobileMenu = ref(false);
</script>

<template>
  <nav
    :class="[
      mobileMenu ? '' : '',
      'z-50 sticky top-0 lg:bg-background/75 lg:backdrop-blur rounded-md max-w-screen-2xl mx-2 sm:mx-auto px-1 lg:px-4 3xl:p-0 py-1',
    ]"
  >
    <div class="flex justify-between">
      <a href="/" rel="prefetch" class="flex items-center">
        <h1 class="md:hidden lg:block text-xl md:text-2xl xl:text-3xl 3xl:text-4xl font-extralight">TheWebC</h1>
        <UIcon name="i-heroicons-globe-alt" class="h-8 w-8" />
      </a>

      <div class="hidden md:flex gap-2 lg:gap-4 items-center">
        <div v-for="(link, index) of links" :key="index">
          <NuxtLink :to="link.to" v-if="!link.children">
            <span :class="[route.path == link.to ? 'text-primary-500' : '', 'flex gap-1 items-center px-2 text-sm xl:text-base hover:text-primary-500']">{{
              link.label
            }}</span>
          </NuxtLink>

          <UPopover mode="hover" v-else v-model:open="link.open" class="-mr-2">
            <UButton
              variant="ghost"
              :label="link.label"
              size="md"
              :class="[link.open ? 'text-primary-500' : 'text-gray-900']"
              :ui="{
                font: '',
                size: { md: 'text-sm xl:text-base' },
                color: {
                  gray: {
                    ghost: 'hover:text-primary-50 hover:bg-primary-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
                  },
                },
              }"
            >
              <template #trailing>
                <UIcon :name="link.open ? `i-heroicons-chevron-up-20-solid` : `i-heroicons-chevron-down-20-solid`" class="w-5 h-5 -ml-2" />
              </template>
            </UButton>

            <template #panel>
              <div class="flex flex-col p-2 gap-1">
                <NuxtLink
                  v-for="(child, childIndex) of link.children"
                  :key="childIndex"
                  :to="child.to"
                  :class="[route.path == child.to ? 'bg-gray-100' : '', 'flex gap-2 p-2 rounded-md hover:bg-gray-200']"
                >
                  <UIcon :name="child.icon" class="w-5 h-5" />
                  <span class="text-sm">
                    <p>{{ child.label }}</p>
                    <p class="text-gray-500 max-w-96">{{ child.description }}</p>
                  </span>
                </NuxtLink>
              </div>
            </template>
          </UPopover>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-4 4xl:text-base 3xl:text-base">
        <UButton label="Log in" variant="ghost" to="https://app.thewebco.ai/auth/login" />
        <UButton label="Request demo" to="https://calendar.app.google/i7EhNVG7Yt4KUnGP9" target="_blank" class="hidden lg:block" />
      </div>

      <div class="flex items-center md:hidden">
        <UButton :icon="mobileMenu ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" size="sm" square variant="ghost" @click="mobileMenu = !mobileMenu" />
      </div>
    </div>
  </nav>

  <!-- Mobile menu, show/hide based on menu open state. -->
  <div :class="[mobileMenu ? 'lg:hidden' : 'hidden']">
    <div class="fixed inset-y-0 right-0 z-50 overflow-y-auto bg-gray-100 px-6 py-6 w-full max-w-60">
      <div class="flex items-center justify-between">
        <UButton icon="i-heroicons-x-mark" size="sm" color="gray" square variant="ghost" @click="mobileMenu = !mobileMenu" />
      </div>
      <div>
        <div class="divide-y divide-gray-300">
          <div class="space-y-2 py-6 text-gray-500">
            <span v-for="(link, index) of links" :key="index">
              <ULink
                v-if="!link.children"
                :to="link.to"
                :class="[route.path == link.to ? 'text-primary-500' : '', 'flex items-center gap-1 py-2 nav-link hover:text-primary-500']"
              >
                <UIcon :name="link.icon" :class="[route.path == link.to ? 'text-primary-500' : '', 'h-5 w-5']" />
                {{ link.label }}
              </ULink>

              <div v-else>
                <span>{{ link.label }}</span>
                <ULink
                  v-for="(item, innerIndex) of link.children"
                  :key="innerIndex"
                  :to="item.to"
                  :class="[route.path == item.to ? 'text-primary-500' : '', 'flex items-center gap-1 px-3 py-2 nav-link hover:text-primary-500']"
                >
                  <UIcon :name="item.icon" :class="[route.path == item.to ? 'text-primary-500' : '', 'h-5 w-5']" />
                  {{ item.label }}
                </ULink>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
