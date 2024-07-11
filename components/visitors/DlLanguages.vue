<script setup lang="ts">
import { Donut } from "@unovis/ts";
import { VisSingleContainer, VisDonut, VisBulletLegend, VisTooltip } from "@unovis/vue";

const localState = reactive({
  allLanguages: {} as Record<string, Set<string>>,
  labels: [{ name: "English" }, { name: "Hebrew" }, { name: "French" }] as Array<Record<"name", string>>,
  values: [101, 43, 71] as Array<number>,
});

const value = (d: number) => d;
const triggers = { [Donut.selectors.segment]: (d: Record<string, any>) => `${localState.labels[d.index].name}: ${d.value}` };
</script>

<template>
  <UCard>
    <h2 class="font-medium text-lg">Languages</h2>

    <VisSingleContainer :data="localState.values">
      <VisDonut :value="value" />
      <VisTooltip :triggers="triggers" />
    </VisSingleContainer>

    <div class="flex justify-center px-8 2xl:px-12">
      <VisBulletLegend :items="localState.labels" />
    </div>
  </UCard>
</template>
