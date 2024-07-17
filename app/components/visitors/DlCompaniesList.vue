<script setup lang="ts">
const companies = [
  {
    name: "Apple",
    subtitle: "A diverse collective of thinkers and doers, continually reimagining what’s possible.",
    logo: "/companies/apple.webp",
    visits: 442,
    visitors: 182,
  },
  {
    name: "Tesla",
    subtitle: "To accelerate the advent of sustainable transport",
    logo: "/companies/tesla.webp",
    visits: 371,
    visitors: 138,
  },
  {
    name: "Google",
    subtitle: "Organizing the world's information",
    logo: "/companies/google.webp",
    visits: 326,
    visitors: 92,
  },
  {
    name: "Microsoft",
    subtitle: "We're on a mission to empower every person and every organization on the planet to achieve more.",
    logo: "/companies/microsoft.webp",
    visits: 231,
    visitors: 43,
  },
  {
    name: "OpenAI",
    subtitle: "OpenAI’s mission is to ensure that artificial general intelligence benefits all of humanity.",
    logo: "/companies/openai.webp",
    visits: 229,
    visitors: 37,
  },
  {
    name: "Monday.com",
    subtitle: "Your go-to work platform",
    logo: "/companies/monday-com.webp",
    visits: 193,
    visitors: 32,
  },
];
</script>

<template>
  <UCard>
    <div class="h-full flex flex-col">
      <h2 class="font-medium text-lg">Companies</h2>

      <div class="flex justify-between items-center">
        <div class="flex w-1/2 mt-2">
          <UInput placeholder="Filter company..." class="w-full" />
        </div>
      </div>

      <div class="mt-2 divide-y divide-gray-300 flex flex-col">
        <div v-for="(company, index) of companies" :key="index" class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar :src="company.logo" :alt="company.name" />
            <div class="flex flex-col justify-around">
              <h3>{{ company.name }}</h3>
              <p class="text-gray-500 text-sm">{{ company.subtitle.length > 80 ? `${company.subtitle.slice(0, 80)}...` : company.subtitle }}</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>{{ company.visits }} visits</p>
              <p>{{ company.visitors }} visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
