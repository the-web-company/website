<script setup lang="ts">
const results = {
  start: {
    picture: "/companies/apple.webp",
  },
  end: {
    picture: "/components/tom-cook.webp",
  },
};

const localState = reactive({
  tab: 0,
  users: [
    {
      name: "Calvin Hawkins",
      title: "Applications Executive",
      picture: "/components/calvin-hawkins.webp",
    },
  ],
  work: [
    {
      name: "Jenny Wilson",
      title: "Studio Artist",
      picture: "/components/jenny-wilson.webp",
    },
  ],
  school: [
    {
      name: "Courtney Henry",
      title: "Designer",
      picture: "/components/courtney-henry.webp",
    },
  ],
  events: [
    {
      name: "Leslie Alexander",
      title: "Co-Founder / CEO",
      picture: "/components/leslie-alexander.webp",
    },
  ],
  code: [],
});

const items = [
  { label: "users", icon: "i-heroicons-users" },
  { label: "work", icon: "i-heroicons-briefcase" },
  { label: "school", icon: "i-heroicons-academic-cap" },
  { label: "events", icon: "i-heroicons-calendar" },
  { label: "code", icon: "i-heroicons-code-bracket" },
];

const currentTab = computed(() => {
  return items[Number(localState.tab)].label as "users" | "work" | "school" | "events" | "code";
});
</script>

<template>
  <div class="bg-gray-100 rounded-md py-2 px-2 xl:px-6 2xl:px-8" @mouseover="localState.tab = 1" @mouseleave="localState.tab = 0">
    <div class="flex items-center justify-between w-full h-full">
      <div class="z-20 relative">
        <img :src="results.start.picture" class="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 3xl:w-32 3xl:h-32 rounded-full object-cover" />
      </div>

      <div
        class="mx-2 z-10 border bg-gray-100 border-gray-300 rounded-md py-1 md:py-2 px-2 md:px-4 relative before:content-[''] before:w-28 sm:before:w-32 md:before:w-44 lg:before:w-32 xl:before:w-52 2xl:before:w-72 3xl:before:w-80 before:border-b before:absolute before:top-1/2 before:border-gray-300 before:right-full"
      >
        <UTabs :items="items" v-model="localState.tab">
          <template #default="{ item, index, selected }">
            <div class="flex items-center gap-1 md:gap-2 relative truncate md:px-2">
              <UIcon :name="item.icon" class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-rose-500" />
            </div>
          </template>
        </UTabs>

        <ul class="h-56 divide-y divide-gray-300" v-if="localState[currentTab].length">
          <li v-if="currentTab == 'school'" class="flex p-2 md:py-4">
            <div class="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-300"></div>
            <div class="ml-3 flex flex-col justify-center gap-1">
              <div class="h-4 w-20 bg-gray-300 rounded-md"></div>
              <div class="h-3 w-40 bg-gray-300 rounded-md hidden sm:block"></div>
            </div>
          </li>

          <li class="flex p-2 md:py-4" v-for="(item, index) of localState[currentTab]" :key="index">
            <img class="h-8 w-8 md:h-10 md:w-10 rounded-full" :src="item.picture" />
            <div class="ml-3 flex flex-col justify-center">
              <p class="text-sm">{{ item.name }}</p>
              <p class="text-sm text-gray-500 hidden sm:block">{{ item.title }}</p>
            </div>
          </li>

          <li v-if="currentTab == 'users'" class="flex p-2 md:py-4" v-for="item of 2" :key="item">
            <div class="h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-300"></div>
            <div class="ml-3 flex flex-col justify-center gap-1">
              <div class="h-4 w-20 bg-gray-300 rounded-md"></div>
              <div class="h-3 w-40 bg-gray-300 rounded-md hidden sm:block"></div>
            </div>
          </li>
        </ul>
        <div v-else class="h-56 text-gray-500 flex justify-center items-center">
          <p class="xl:w-3/4 text-center text-sm">There are no close connections via {{ currentTab }}</p>
        </div>
      </div>

      <div
        class="text-right relative before:content-[''] before:w-28 sm:before:w-32 md:before:w-44 lg:before:w-48 xl:before:w-72 3xl:before:w-80 before:border-b before:absolute before:top-1/2 before:border-gray-300 before:right-full"
      >
        <img :src="results.end.picture" class="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28 3xl:w-32 3xl:h-32 rounded-full object-cover" />
      </div>
    </div>
  </div>
</template>
