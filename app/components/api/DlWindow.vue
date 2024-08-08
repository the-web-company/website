<script setup lang="ts">
import person from "@/components/api/person.json";
import company from "@/components/api/company.json";
import university from "@/components/api/university.json";

const files = [
  { label: "person.json", icon: "i-heroicons-user" },
  { label: "company.json", icon: "i-heroicons-building-office" },
  { label: "university.json", icon: "i-heroicons-building-library" },
];

const chosenFile = ref("person.json");
const menuMobile = ref(false);
</script>

<template>
  <div class="relative">
    <!-- Toolbars -->
    <div class="bg-gray-300 rounded-t-lg flex pr-2 lg:p-0">
      <div class="px-4 lg:mr-4 text-sm flex items-center gap-2">
        <i class="rounded-full w-3 h-3 bg-gray-400"></i>
        <i class="rounded-full w-3 h-3 bg-gray-400"></i>
        <i class="rounded-full w-3 h-3 bg-gray-400"></i>
      </div>
      <div
        :class="[
          file.label == chosenFile ? 'bg-gray-200' : '',
          'hidden md:flex relative px-4 py-2 mt-2 border-x border-t border-gray-300 bg-gray-100 hover:bg-gray-200 rounded-t-lg cursor-pointer min-w-40 max-w-60 w-full',
        ]"
        v-for="(file, index) of files"
        :key="index"
        @click="() => (chosenFile = file.label)"
      >
        <div class="text-sm overflow-hidden pt-1">{{ file.label }}</div>
        <div class="text-gray-500 absolute top-0 right-0 pt-3 pr-2 text-xs">
          <UIcon name="i-heroicons-x-circle-solid" class="mx-px w-4 h-4" />
        </div>
      </div>
      <div class="relative flex-col md:hidden">
        <div
          class="flex relative px-4 py-2 mt-2 border-x border-t border-gray-300 bg-gray-200 rounded-t-lg cursor-pointer min-w-40 max-w-60 w-full'"
          @click="menuMobile = !menuMobile"
        >
          <div class="text-sm overflow-hidden pt-1">{{ chosenFile }}</div>
          <div class="text-gray-500 absolute top-0 right-0 pt-3 pr-2 text-xs">
            <UIcon name="i-heroicons-chevron-down" class="mx-px w-4 h-4" />
          </div>
        </div>
        <div v-if="menuMobile" class="absolute border border-gray-300 bg-gray-200 rounded-b-md pb-2 w-full">
          <div
            v-for="(file, index) of files"
            :key="index"
            @click="
              () => {
                chosenFile = file.label;
                menuMobile = false;
              }
            "
            :class="[file.label == chosenFile ? 'bg-gray-300' : '', 'py-2 px-4']"
          >
            <div class="text-sm overflow-hidden">{{ file.label }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-200 border-l border-r border-b border-gray-300 hidden sm:flex flex-row py-1 md:py-2">
      <div class="p-2 flex gap-2 text-gray-400">
        <UIcon name="i-heroicons-arrow-long-left" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        <UIcon name="i-heroicons-arrow-long-right" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        <UIcon name="i-heroicons-arrow-path" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </div>
      <div class="px-2 md:px-4 py-1 md:py-2 my-auto flex-1 border border-gray-300 bg-white rounded-md text-xs md:text-sm">
        /Users/thewebco/examples/{{ chosenFile }}
      </div>
      <div class="p-2 flex gap-2 text-gray-400">
        <UIcon name="i-heroicons-arrow-down-tray" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        <UIcon name="i-heroicons-user-circle-solid" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
        <UIcon name="i-heroicons-bars-3" class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
      </div>
    </div>
  </div>

  <!-- Page Content  -->
  <div class="w-full text-sm max-h-[50vh] overflow-scroll p-2 border border-gray-300 rounded-b-md">
    <div v-if="chosenFile === 'person.json'">
      <pre>{{ person }}</pre>
    </div>

    <div v-if="chosenFile === 'company.json'">
      <pre>{{ company }}</pre>
    </div>

    <div v-if="chosenFile === 'university.json'">
      <pre>{{ university }}</pre>
    </div>
  </div>
</template>
