<script setup lang="ts">
const props = defineProps({
  selected: {
    type: String,
    default: "visitors",
  },
});

const selected =
  props.selected == "visitors" ? { label: "Visitors", icon: "i-heroicons-chart-bar" } : { label: "API & docs", icon: "i-heroicons-code-bracket" };
let navigation = [
  { label: "Dashboard", icon: "i-heroicons-home" },
  {
    label: "Prospect & enrich",
    items: [
      { label: "Search", icon: "i-heroicons-magnifying-glass" },
      { label: "Lists", icon: "i-heroicons-queue-list" },
    ],
  },
  { label: "Insights", items: [{ label: "Meetings", icon: "i-heroicons-calendar-days" }] },
  {
    label: "Website",
    items: [
      { label: "Forms", icon: "i-heroicons-table-cells" },
      { label: "Visitors", icon: "i-heroicons-chart-bar" },
    ],
  },
  { label: "Developers", items: [{ label: "API & docs", icon: "i-heroicons-code-bracket" }] },
  { label: "Settings", icon: "i-heroicons-cog" },
];
</script>

<template>
  <div class="h-full w-full flex ring-1 ring-gray-200 rounded-md">
    <div class="w-fit flex flex-col bg-gray-50 rounded-l-md">
      <div class="flex items-center mx-auto pt-2 pb-4">
        <UIcon name="i-heroicons-square-3-stack-3d" class="h-8 w-8" />
      </div>
      <nav class="flex-1">
        <span v-for="(item, index) in navigation" :key="index">
          <div
            v-if="!item.items"
            :class="[
              item.label == selected.label ? 'bg-primary-500 text-gray-900' : 'hover:bg-primary-500 hover:text-primary-50',
              'group flex items-center mx-1 md:mx-2 lg:mx-4 my-1 rounded-md p-2 cursor-pointer',
            ]"
          >
            <UIcon
              :name="item.icon"
              :class="[item.label == selected.label ? 'text-primary-500' : 'text-gray-900', 'w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-50']"
            />
          </div>
          <div v-else class="py-2">
            <div
              v-for="(itemRoute, indexRoute) of item.items"
              :key="indexRoute"
              :class="[
                itemRoute.label == selected.label ? 'bg-primary-500 text-gray-900' : 'hover:bg-primary-500 hover:text-primary-50',
                'group flex items-center mx-1 md:mx-2 lg:mx-4 my-1 rounded-md p-2 cursor-pointer',
              ]"
            >
              <UIcon
                :name="itemRoute.icon"
                :class="[itemRoute.label == selected.label ? 'text-primary-50' : 'text-gray-900', 'w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-50']"
              />
            </div>
          </div>
        </span>
        <div class="h-full rounded-tr-md"></div>
      </nav>

      <div class="flex justify-between p-1 sm:p-2 lg:p-4">
        <div class="flex items-center justify-center rounded-bl-md">
          <UAvatar src="/components/kristin-watson.webp" size="sm" />
        </div>
      </div>
    </div>

    <div class="min-h-full flex flex-col flex-1 bg-gray-50 rounded-r-md">
      <main class="p-2 flex-1 min-h-full mx-auto w-full">
        <slot />
      </main>
    </div>
  </div>
</template>
