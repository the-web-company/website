<script setup lang="ts">
const data = [
  { name: "twitter", logo: "/social/twitter.webp", percentage: 49 },
  { name: "facebook", logo: "/social/facebook.webp", percentage: 21 },
  { name: "linkedin", logo: "/social/linkedin.webp", percentage: 12 },
  { name: "instagram", logo: "/social/instagram.webp", percentage: 6 },
  { name: "Stack Overflow", logo: "/social/stackoverflow.webp", percentage: 2 },
];
</script>

<template>
  <div class="group bg-purple-900 rounded-md p-2">
    <ul role="list" class="divide-y divide-purple-800 h-full">
      <li
        :class="[
          item.name == data[0].name ? 'group-hover:bg-purple-800 rounded-t-md' : '',
          'transition duration-500 ease-in-out w-full flex items-center gap-2 py-3 px-2',
        ]"
        v-for="(item, index) of data"
        :key="index"
      >
        <img class="h-8 w-8 object-cover" :src="item.logo" />
        <div class="w-full grid grid-cols-3">
          <p class="text-xs xl:text-sm capitalize">{{ item.name }}</p>
          <p class="text-xs xl:text-sm flex justify-end col-span-2">
            <span class="opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">{{
              item.name == data[0].name ? `most frequently used` : ""
            }}</span>
          </p>
          <div class="flex items-center col-span-2"><span class="h-2 bg-purple-500" :style="[`width: ${item.percentage}%`]"></span></div>
          <p class="text-xs xl:text-sm flex justify-end">{{ item.percentage }}%</p>
        </div>
      </li>
    </ul>
  </div>
</template>
