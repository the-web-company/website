<script setup lang="ts">
import { Donut } from "@unovis/ts";
import { VisSingleContainer, VisDonut, VisBulletLegend, VisTooltip } from "@unovis/vue";

const data: number[] = [30, 40, 50, 60, 70, 80, 90, 100];
const value = (d: number) => d;
const items = [
  { name: "Insurance" },
  { name: "Banking" },
  { name: "Construction" },
  { name: "Sports" },
  { name: "Automotive" },
  { name: "Accounting" },
  { name: "Information Technology & Services" },
  { name: "Marketing & Advertising" },
];

const triggers = { [Donut.selectors.segment]: (d: Record<string, any>) => `${items[d.index].name}: ${d.value}` };
</script>

<template>
  <UCard>
    <h2 class="text-lg">Industries</h2>

    <VisSingleContainer :data="data">
      <VisDonut :value="value" />
      <VisTooltip :triggers="triggers" />
    </VisSingleContainer>

    <div class="flex justify-center px-8 2xl:px-12">
      <VisBulletLegend :items="items" />
    </div>
  </UCard>
</template>
