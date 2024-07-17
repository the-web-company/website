<script setup lang="ts">
import DlSocialLogo from "@/components/person/DlSocialLogo.vue";

const highLevelStats = [
  { label: "Unique anon visitors", icon: "i-heroicons-user-group", value: 1452 },
  { label: "Familiar visitors", icon: "i-heroicons-identification", value: 1162 },
  { label: "Visitors already in your CRM", icon: "i-heroicons-funnel", value: 146 },
  { label: "Visitors with warm intro", icon: "i-heroicons-share", value: 581 },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"];
const matrix = [
  [0, 0, 2, 2, 3, 4, 3, 2, 2, 1, 0, 0],
  [0, 0, 2, 4, 8, 9, 7, 5, 3, 3, 1, 0],
  [0, 0, 2, 4, 8, 9, 7, 5, 3, 3, 1, 0],
  [0, 0, 2, 4, 8, 9, 7, 5, 3, 3, 1, 0],
  [0, 0, 2, 4, 4, 5, 4, 3, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 5, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 5, 1],
];

const colors = [
  "bg-primary-100",
  "bg-primary-200",
  "bg-primary-300",
  "bg-primary-400",
  "bg-primary-500",
  "bg-primary-600",
  "bg-primary-700",
  "bg-primary-800",
  "bg-primary-900",
  "bg-primary-950",
];

const companies = [
  {
    name: "Apple",
    title: "A diverse collective of thinkers and doers, continually reimagining what’s possible.",
    profile_image: "/companies/apple.webp",
    visits: 442,
    visitors: 182,
  },
  {
    name: "Tesla",
    title: "To accelerate the advent of sustainable transport",
    profile_image: "/companies/tesla.webp",
    visits: 371,
    visitors: 138,
  },
  {
    name: "OpenAI",
    title: "OpenAI’s mission is to ensure that artificial general intelligence benefits all of humanity.",
    profile_image: "/companies/openai.webp",
    visits: 229,
    visitors: 37,
  },
  {
    name: "Monday.com",
    title: "Your go-to work platform",
    profile_image: "/companies/monday-com.webp",
    visits: 193,
    visitors: 32,
  },
];

const referrers = [
  { referrer: "Google", type: "Search", visitors: 4731, de_anonymized: 3386 },
  { referrer: "Direct", type: "Direct", visitors: 1892, de_anonymized: 1293 },
  { referrer: "YouTube", type: "Social", visitors: 437, de_anonymized: 329 },
  { referrer: "X (Twitter)", type: "Social", visitors: 281, de_anonymized: 198 },
];

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    company: "Apple.com",
    social_networks: ["facebook", "linkedin", "stack overflow", "github", "twitter", "vimeo", "myspace"],
    avg_session_duration: 252,
  },
  {
    name: "Courtney Henry",
    title: "SDR",
    company: "Monday.com",
    social_networks: ["angellist", "foursquare", "skype", "behance"],
    avg_session_duration: 391,
  },
  {
    name: "Tom Cook",
    title: "Director of Product",
    company: "OpenAI",
    social_networks: ["google", "reddit", "gitlab", "meetup", "deezer", "ask.fm", "adidas"],
    avg_session_duration: 46,
  },
  {
    name: "Whitney Francis",
    title: "Copywriter",
    company: "Apple",
    social_networks: ["facebook", "twitter", "gravatar", "youtube", "cranchbase", "airbnb", "aboutme", "flickr", "skype"],
    avg_session_duration: 140,
  },
  {
    name: "Leonard Krasner",
    title: "Account Manager",
    company: "Tesla",
    social_networks: ["linkedin", "twitter", "instagram", "telegram", "dribbble", "quora"],
    avg_session_duration: 692,
  },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
    <UCard v-for="(item, index) of highLevelStats" :key="index" :ui="{ body: { padding: '!px-3 !py-4' } }" :class="[index > 1 ? 'hidden sm:block' : '']">
      <div class="flex gap-2 items-center">
        <div class="px-2 py-1">
          <UIcon :name="item.icon" class="md:h-6 md:w-6 text-gray-500" />
        </div>

        <div class="flex flex-col justify-around">
          <h3 class="text-sm text-gray-500">{{ item.label }}</h3>
          <p class="text-xl font-medium">{{ item.value }}</p>
        </div>
      </div>
    </UCard>
  </div>

  <div class="grid grid-cols-2 lg:grid-cols-6 gap-2 mt-2">
    <div class="col-span-2">
      <UCard :ui="{ body: { padding: '!px-3 !py-4' } }">
        <h2 class="font-medium">By time of day</h2>

        <div class="h-full grid grid-rows-8 gap-1 mt-1">
          <div v-for="(day, dayIndex) of matrix" :key="dayIndex" class="grid grid-cols-12 h-full w-full">
            <span class="text-xs text-gray-500 flex justify-center items-center">{{ days[dayIndex] }}</span>

            <div class="col-span-11 w-full grid grid-cols-12 gap-1">
              <UTooltip :text="`${hour}`" v-for="(hour, hourIndex) of day" :key="hourIndex" :class="[colors[hour], 'rounded-md']">
                <span class="sr-only">{{ hour }}</span>
              </UTooltip>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-1">
            <span></span>

            <div class="col-span-11 grid grid-cols-12 gap-1">
              <span v-for="(hour, index) of hours" :key="index" class="text-xs text-gray-500 flex justify-center items-center">
                {{ hour }}
              </span>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <div class="col-span-2">
      <UCard :ui="{ body: { padding: '!px-3 !py-4' } }">
        <div class="h-full flex flex-col">
          <h2 class="font-medium">Companies</h2>

          <div class="mt-2 divide-y divide-gray-300 flex flex-col">
            <div v-for="(company, index) of companies" :key="index" class="grid grid-cols-8 p-2 hover:bg-gray-50 cursor-pointer">
              <div class="flex items-center gap-4 col-span-5">
                <UAvatar :src="company.profile_image" :alt="company.name" />
                <div class="flex flex-col justify-around">
                  <h3 class="text-sm">{{ company.name }}</h3>
                  <p class="text-gray-500 text-xs line-clamp-1">{{ company.title }}</p>
                </div>
              </div>

              <div class="flex justify-end items-center gap-4 text-gray-500 col-span-3">
                <div class="flex flex-col justify-around text-xs">
                  <p class="hidden sm:block lg:hidden xl:block">{{ company.visits }} visits</p>
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
    </div>

    <div class="col-span-2">
      <UCard :ui="{ body: { padding: '!px-3 !py-4' } }">
        <h2 class="font-medium">Referrers</h2>

        <UTable
          :columns="[
            { key: 'referrer', label: 'Referrer' },
            { key: 'type', label: 'Type' },
            { key: 'visitors', label: 'Visitors', sortable: true },
            { key: 'de_anonymized', label: 'De anonymized', sortable: true },
          ]"
          :rows="referrers"
          :ui="{ th: { padding: 'px-2 py-1.5' } }"
        >
          <template #referrer-data="{ row }">
            <p class="text-xs">{{ row.referrer }}</p>
          </template>

          <template #type-data="{ row }">
            <p class="text-xs">{{ row.type }}</p>
          </template>

          <template #visitors-data="{ row }">
            <p class="text-xs">
              {{ row.visitors }} <span class="text-gray-500">({{ ((row.visitors / 7724) * 100).toFixed(2) }}%)</span>
            </p>
          </template>

          <template #de_anonymized-data="{ row }">
            <p class="text-xs">
              {{ row.de_anonymized }} <span class="text-gray-500">({{ ((row.de_anonymized / 5455) * 100).toFixed(2) }}%)</span>
            </p>
          </template>
        </UTable>
      </UCard>
    </div>

    <div class="col-span-2 lg:col-span-6">
      <UCard :ui="{ body: { padding: '!px-3 !py-4' } }">
        <h2 class="font-medium">Familiar visitors</h2>

        <UTable
          :rows="people"
          :columns="[
            { key: 'name', label: 'Name' },
            { key: 'title', label: 'Title' },
            { key: 'company', label: 'Company' },
            { key: 'social_networks', label: 'Social networks' },
            { key: 'avg_session_duration', label: 'Average session duration' },
            { key: 'go_to_profile', label: '' },
          ]"
        >
          <template #social_networks-data="{ row }">
            <div class="flex gap-2 cursor-pointer">
              <DlSocialLogo v-for="(source, index) of row.social_networks || []" :key="index" :name="source" class="!h-5 !w-5" />
            </div>
          </template>

          <template #avg_session_duration-data="{ row }">
            <span>
              {{ Math.floor(row.avg_session_duration / 60) }}:{{ Math.floor(row.avg_session_duration % 60) < 10 ? "0" : ""
              }}{{ Math.floor(row.avg_session_duration % 60) }}
            </span>
          </template>

          <template #go_to_profile-data="{ row }">
            <div class="z-10">
              <UButton icon="i-heroicons-identification" size="sm" square variant="ghost" />
            </div>
          </template>
        </UTable>
      </UCard>
    </div>
  </div>
</template>
