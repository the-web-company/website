<script setup lang="ts">
const columns = [
  { key: "referrer", label: "Referrer" },
  { key: "type", label: "Type" },
  { key: "visitors", label: "Visitors", sortable: true },
  { key: "de_anonymized", label: "De anonymized", sortable: true },
  { key: "session_duration", label: "Session duration", sortable: true },
];

const referrers = [
  { referrer: "Google", type: "Search", visitors: 4731, de_anonymized: 3386, session_duration: 253 },
  { referrer: "Direct", type: "Direct", visitors: 1892, de_anonymized: 1293, session_duration: 399 },
  { referrer: "YouTube", type: "Social", visitors: 437, de_anonymized: 329, session_duration: 123 },
  { referrer: "X (Twitter)", type: "Social", visitors: 281, de_anonymized: 198, session_duration: 95 },
];

const page = ref(1);
const selected = ref([] as Array<Record<string, any>>);
const totalTraffic = computed(() => referrers.reduce((allVisitors, referrer) => allVisitors + referrer.visitors, 0));
const totalDeAnonymizedTraffic = computed(() => referrers.reduce((allDeAnonymizedVisitors, referrer) => allDeAnonymizedVisitors + referrer.de_anonymized, 0));
</script>

<template>
  <UCard>
    <div class="h-full flex flex-col min-h-96">
      <h2 class="text-lg">Referrers</h2>

      <div class="w-1/2 mt-2">
        <UInput placeholder="Filter referrer..." class="w-full" />
      </div>

      <div class="flex-1">
        <UTable class="h-full" v-model="selected" :columns="columns" :rows="referrers">
          <template #visitors-data="{ row }">
            <p>
              {{ row.visitors }} <span class="text-xs">({{ ((row.visitors / totalTraffic) * 100).toFixed(2) }}%)</span>
            </p>
          </template>

          <template #de_anonymized-data="{ row }">
            <p>
              {{ row.de_anonymized }} <span class="text-xs">({{ ((row.de_anonymized / totalDeAnonymizedTraffic) * 100).toFixed(2) }}%)</span>
            </p>
          </template>

          <template #session_duration-data="{ row }">
            <span
              >{{ Math.floor(row.session_duration / 60) }}:{{
                row.session_duration % 60 < 10 ? `0${row.session_duration % 60}` : row.session_duration % 60
              }}</span
            >
          </template>
        </UTable>
      </div>

      <div class="flex justify-center mt-2">
        <UPagination v-model="page" :page-count="4" :total="referrers.length" />
      </div>
    </div>
  </UCard>
</template>
