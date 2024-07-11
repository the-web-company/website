<script setup lang="ts">
const messages = [
  { value: "", length: "w-1/2" },
  { value: "Nice blog post you published on Medium about scaling production, it was eye opening 📖" },
  { value: "", length: "w-2/3" },
  { value: "", length: "w-5/6" },
  { value: "Congratulations on the recent funding round! 🎉", length: "w-1/12" },
  { value: "", length: "w-9/12" },
  { value: "", length: "w-4/6" },
  { value: "", length: "w-1/5" },
];
</script>

<template>
  <div class="group bg-purple-900 ring-1 ring-purple-700 rounded-md p-2 h-full">
    <div class="flex flex-col h-full w-full justify-between gap-2">
      <div :class="[index > 3 ? 'hidden md:flex' : '', 'flex items-end']" v-for="(message, index) of messages" :key="index">
        <UAvatar src="/components/kristin-watson.webp" />
        <div class="flex items-end overflow-hidden">
          <span class="h-4 w-4 border-t-[15px] border-t-transparent border-r-[15px] border-r-purple-800 border-b-0 border-b-transparent bottom-0"></span>
          <p v-if="!message.length" class="p-2 bg-purple-800 text-purple-200 rounded-t-md rounded-br-md text-sm xl:text-base">{{ message.value }}</p>
          <div v-else-if="message.value && message.length" class="p-2 bg-purple-800 w-screen h-14 rounded-t-md rounded-br-md">
            <div class="h-3 w-full bg-purple-600 rounded-md mb-3 group-hover:opacity-0 transition duration-500 ease-in-out"></div>
            <div :class="[message.length, 'h-3 bg-purple-600 rounded-md group-hover:opacity-0 transition duration-500 ease-in-out']"></div>
            <p class="text-purple-200 text-sm xl:text-base opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out -translate-y-10">
              {{ message.value }}
            </p>
          </div>
          <div v-else class="p-2 bg-purple-800 w-screen h-14 rounded-t-md rounded-br-md">
            <div class="h-3 w-full bg-purple-600 rounded-md mb-3"></div>
            <div :class="[message.length, 'h-3 bg-purple-600 rounded-md']"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
