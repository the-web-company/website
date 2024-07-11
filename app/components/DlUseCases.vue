<script setup lang="ts">
const useCases = [
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
];
</script>

<template>
  <div>
    <h3 class="text-3xl xl:text-4xl mb-10">Some of the things we can do</h3>

    <div class="sm:mx-8">
      <dl class="grid mx-auto sm:max-w-4xl grid-cols-1 gap-x-8 gap-y-10 md:gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        <div class="flex flex-col space-y-4 md:space-y-6 ring-1 ring-purple-700 bg-purple-900 p-4 rounded-md" v-for="(item, index) of useCases" :key="index">
          <div class="flex items-center justify-center rounded-md bg-purple-800 p-2 w-fit">
            <UIcon :name="item.icon" class="bg-purple-400 h-6 w-6" />
          </div>

          <div class="space-y-1">
            <h4 class="font-semibold">{{ item.label }}</h4>
            <p class="text-purple-400">{{ item.description }}</p>
          </div>

          <NuxtLink class="text-purple-300 hover:text-purple-400" :to="item.to"> Learn more <span aria-hidden="true">→</span> </NuxtLink>
        </div>
      </dl>
    </div>
  </div>
</template>
