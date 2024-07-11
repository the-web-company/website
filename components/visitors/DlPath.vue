<script setup lang="ts">
const columns = [
  { key: "path", label: "Path" },
  { key: "visitors", label: "Visitors", sortable: true },
  { key: "de_anonymized", label: "De anonymized", sortable: true },
];

const paths = [
  { path: "/", visitors: 4731, de_anonymized: 3386 },
  { path: "/products", visitors: 1892, de_anonymized: 1293 },
  { path: "/pricing", visitors: 437, de_anonymized: 329 },
  { path: "/blog/how-to-do-something", visitors: 281, de_anonymized: 198 },
  { path: "/contact-us", visitors: 182, de_anonymized: 120 },
];

const page = ref(1);
const selected = ref([] as Array<Record<string, any>>);
</script>

<template>
  <UCard>
    <div class="h-full flex flex-col min-h-96">
      <h2 class="text-lg">Paths</h2>

      <div class="w-1/2 mt-2">
        <UInput placeholder="Filter path..." class="w-full" />
      </div>

      <div class="flex-1"><UTable class="h-full" v-model="selected" :columns="columns" :rows="paths" /></div>

      <div class="flex justify-center mt-2">
        <UPagination v-model="page" :page-count="4" :total="paths.length" />
      </div>
    </div>
  </UCard>
</template>
