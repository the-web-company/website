<script setup lang="ts">
import { Line, Scatter } from "@unovis/ts";
import { VisXYContainer, VisLine, VisBulletLegend, VisAxis, VisTooltip, VisScatter } from "@unovis/vue";

type DataRecord = { x: number; y: number; y2: number };
const data = ref<DataRecord[]>([
  { x: 1, y: 2, y2: 4 },
  { x: 2, y: 1, y2: 20 },
  { x: 3, y: 3, y2: 10 },
  { x: 4, y: 10, y2: 26 },
  { x: 5, y: 35, y2: 60 },
  { x: 6, y: 92, y2: 110 },
  { x: 7, y: 129, y2: 158 },
]);
const items = [
  { name: "Total unique visitors", color: "red" },
  { name: "Familiar visitors", color: "blue" },
];

const x = (d: DataRecord) => d.x;
const y = [(d: DataRecord) => d.y, (d: DataRecord) => d.y2];

const triggers = {
  [Line.selectors.line]: (d: Record<string, any>) => (d.values[0].value == 2 ? "Familiar visitors" : "Total unique visitors"),
  [Scatter.selectors.point]: (d: Record<string, any>) => `day: ${d._point.xValue}, value: ${d._point.yValue}`,
};
</script>

<template>
  <UCard>
    <h2 class="font-medium text-lg">Timeline</h2>

    <VisXYContainer :data="data">
      <VisLine :x="x" :y="y" :color="['blue', 'red']" />
      <VisAxis type="x" />
      <VisAxis type="y" />
      <VisScatter :x="x" :y="y" :color="['blue', 'red']" />
      <VisTooltip :triggers="triggers" />
    </VisXYContainer>

    <div class="flex justify-center">
      <VisBulletLegend :items="items" />
    </div>
  </UCard>
</template>
