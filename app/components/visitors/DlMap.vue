<script setup lang="ts">
import { Scale, TopoJSONMap } from "@unovis/ts";
import { WorldMapTopoJSON } from "@unovis/ts/maps";
import { VisSingleContainer, VisTopoJSONMap, VisTooltip } from "@unovis/vue";

const data = [
  { id: "AF", value: Math.round(Math.random() * 1000) },
  { id: "AL", value: Math.round(Math.random() * 1000) },
  { id: "DZ", value: Math.round(Math.random() * 1000) },
  { id: "AS", value: Math.round(Math.random() * 1000) },
  { id: "AD", value: Math.round(Math.random() * 1000) },
  { id: "AO", value: Math.round(Math.random() * 1000) },
  { id: "AI", value: Math.round(Math.random() * 1000) },
  { id: "AR", value: Math.round(Math.random() * 1000) },
  { id: "AM", value: Math.round(Math.random() * 1000) },
  { id: "AW", value: Math.round(Math.random() * 1000) },
  { id: "AU", value: Math.round(Math.random() * 1000) },
  { id: "AT", value: Math.round(Math.random() * 1000) },
  { id: "AZ", value: Math.round(Math.random() * 1000) },
  { id: "BS", value: Math.round(Math.random() * 1000) },
  { id: "BH", value: Math.round(Math.random() * 1000) },
  { id: "BD", value: Math.round(Math.random() * 1000) },
  { id: "BB", value: Math.round(Math.random() * 1000) },
  { id: "BY", value: Math.round(Math.random() * 1000) },
  { id: "BE", value: Math.round(Math.random() * 1000) },
  { id: "BZ", value: Math.round(Math.random() * 1000) },
  { id: "BJ", value: Math.round(Math.random() * 1000) },
  { id: "BM", value: Math.round(Math.random() * 1000) },
  { id: "BT", value: Math.round(Math.random() * 1000) },
  { id: "BO", value: Math.round(Math.random() * 1000) },
  { id: "BW", value: Math.round(Math.random() * 1000) },
  { id: "BR", value: Math.round(Math.random() * 1000) },
  { id: "BG", value: Math.round(Math.random() * 1000) },
  { id: "BF", value: Math.round(Math.random() * 1000) },
  { id: "BI", value: Math.round(Math.random() * 1000) },
  { id: "KH", value: Math.round(Math.random() * 1000) },
  { id: "CM", value: Math.round(Math.random() * 1000) },
  { id: "CA", value: Math.round(Math.random() * 1000) },
  { id: "CV", value: Math.round(Math.random() * 1000) },
  { id: "KY", value: Math.round(Math.random() * 1000) },
  { id: "CF", value: Math.round(Math.random() * 1000) },
  { id: "TD", value: Math.round(Math.random() * 1000) },
  { id: "CL", value: Math.round(Math.random() * 1000) },
  { id: "CN", value: Math.round(Math.random() * 1000) },
  { id: "CO", value: Math.round(Math.random() * 1000) },
  { id: "KM", value: Math.round(Math.random() * 1000) },
  { id: "CG", value: Math.round(Math.random() * 1000) },
  { id: "CK", value: Math.round(Math.random() * 1000) },
  { id: "CR", value: Math.round(Math.random() * 1000) },
  { id: "CI", value: Math.round(Math.random() * 1000) },
  { id: "HR", value: Math.round(Math.random() * 1000) },
  { id: "CU", value: Math.round(Math.random() * 1000) },
  { id: "CY", value: Math.round(Math.random() * 1000) },
  { id: "CZ", value: Math.round(Math.random() * 1000) },
  { id: "CD", value: Math.round(Math.random() * 1000) },
  { id: "DK", value: Math.round(Math.random() * 1000) },
  { id: "DJ", value: Math.round(Math.random() * 1000) },
  { id: "DM", value: Math.round(Math.random() * 1000) },
  { id: "DO", value: Math.round(Math.random() * 1000) },
  { id: "EC", value: Math.round(Math.random() * 1000) },
  { id: "EG", value: Math.round(Math.random() * 1000) },
  { id: "SV", value: Math.round(Math.random() * 1000) },
  { id: "GQ", value: Math.round(Math.random() * 1000) },
  { id: "ER", value: Math.round(Math.random() * 1000) },
  { id: "EE", value: Math.round(Math.random() * 1000) },
  { id: "ET", value: Math.round(Math.random() * 1000) },
  { id: "FJ", value: Math.round(Math.random() * 1000) },
  { id: "FI", value: Math.round(Math.random() * 1000) },
  { id: "FR", value: Math.round(Math.random() * 1000) },
  { id: "GF", value: Math.round(Math.random() * 1000) },
  { id: "PF", value: Math.round(Math.random() * 1000) },
  { id: "GA", value: Math.round(Math.random() * 1000) },
  { id: "GM", value: Math.round(Math.random() * 1000) },
  { id: "GE", value: Math.round(Math.random() * 1000) },
  { id: "DE", value: Math.round(Math.random() * 1000) },
  { id: "GH", value: Math.round(Math.random() * 1000) },
  { id: "GR", value: Math.round(Math.random() * 1000) },
  { id: "GL", value: Math.round(Math.random() * 1000) },
  { id: "GD", value: Math.round(Math.random() * 1000) },
  { id: "GU", value: Math.round(Math.random() * 1000) },
  { id: "GT", value: Math.round(Math.random() * 1000) },
  { id: "GN", value: Math.round(Math.random() * 1000) },
  { id: "GW", value: Math.round(Math.random() * 1000) },
  { id: "GY", value: Math.round(Math.random() * 1000) },
  { id: "HT", value: Math.round(Math.random() * 1000) },
  { id: "HN", value: Math.round(Math.random() * 1000) },
  { id: "HK", value: Math.round(Math.random() * 1000) },
  { id: "HU", value: Math.round(Math.random() * 1000) },
  { id: "IS", value: Math.round(Math.random() * 1000) },
  { id: "IN", value: Math.round(Math.random() * 1000) },
  { id: "ID", value: Math.round(Math.random() * 1000) },
  { id: "IR", value: Math.round(Math.random() * 1000) },
  { id: "IQ", value: Math.round(Math.random() * 1000) },
  { id: "IE", value: Math.round(Math.random() * 1000) },
  { id: "IL", value: Math.round(Math.random() * 1000) },
  { id: "IT", value: Math.round(Math.random() * 1000) },
  { id: "JM", value: Math.round(Math.random() * 1000) },
  { id: "JP", value: Math.round(Math.random() * 1000) },
  { id: "JO", value: Math.round(Math.random() * 1000) },
  { id: "KZ", value: Math.round(Math.random() * 1000) },
  { id: "KE", value: Math.round(Math.random() * 1000) },
  { id: "KI", value: Math.round(Math.random() * 1000) },
  { id: "KW", value: Math.round(Math.random() * 1000) },
  { id: "KG", value: Math.round(Math.random() * 1000) },
  { id: "LA", value: Math.round(Math.random() * 1000) },
  { id: "LV", value: Math.round(Math.random() * 1000) },
  { id: "LB", value: Math.round(Math.random() * 1000) },
  { id: "LS", value: Math.round(Math.random() * 1000) },
  { id: "LR", value: Math.round(Math.random() * 1000) },
  { id: "LY", value: Math.round(Math.random() * 1000) },
  { id: "LI", value: Math.round(Math.random() * 1000) },
  { id: "LT", value: Math.round(Math.random() * 1000) },
  { id: "LU", value: Math.round(Math.random() * 1000) },
  { id: "MO", value: Math.round(Math.random() * 1000) },
  { id: "MG", value: Math.round(Math.random() * 1000) },
  { id: "MW", value: Math.round(Math.random() * 1000) },
  { id: "MY", value: Math.round(Math.random() * 1000) },
  { id: "MV", value: Math.round(Math.random() * 1000) },
  { id: "ML", value: Math.round(Math.random() * 1000) },
  { id: "MT", value: Math.round(Math.random() * 1000) },
  { id: "MH", value: Math.round(Math.random() * 1000) },
  { id: "MR", value: Math.round(Math.random() * 1000) },
  { id: "MU", value: Math.round(Math.random() * 1000) },
  { id: "MX", value: Math.round(Math.random() * 1000) },
  { id: "MD", value: Math.round(Math.random() * 1000) },
  { id: "MC", value: Math.round(Math.random() * 1000) },
  { id: "MN", value: Math.round(Math.random() * 1000) },
  { id: "ME", value: Math.round(Math.random() * 1000) },
  { id: "MS", value: Math.round(Math.random() * 1000) },
  { id: "MA", value: Math.round(Math.random() * 1000) },
  { id: "MZ", value: Math.round(Math.random() * 1000) },
  { id: "MM", value: Math.round(Math.random() * 1000) },
  { id: "NA", value: Math.round(Math.random() * 1000) },
  { id: "NP", value: Math.round(Math.random() * 1000) },
  { id: "NL", value: Math.round(Math.random() * 1000) },
  { id: "NC", value: Math.round(Math.random() * 1000) },
  { id: "NZ", value: Math.round(Math.random() * 1000) },
  { id: "NI", value: Math.round(Math.random() * 1000) },
  { id: "NE", value: Math.round(Math.random() * 1000) },
  { id: "NG", value: Math.round(Math.random() * 1000) },
  { id: "NU", value: Math.round(Math.random() * 1000) },
  { id: "KP", value: Math.round(Math.random() * 1000) },
  { id: "MK", value: Math.round(Math.random() * 1000) },
  { id: "MP", value: Math.round(Math.random() * 1000) },
  { id: "NO", value: Math.round(Math.random() * 1000) },
  { id: "OM", value: Math.round(Math.random() * 1000) },
  { id: "PK", value: Math.round(Math.random() * 1000) },
  { id: "PW", value: Math.round(Math.random() * 1000) },
  { id: "PA", value: Math.round(Math.random() * 1000) },
  { id: "PG", value: Math.round(Math.random() * 1000) },
  { id: "PY", value: Math.round(Math.random() * 1000) },
  { id: "PE", value: Math.round(Math.random() * 1000) },
  { id: "PH", value: Math.round(Math.random() * 1000) },
  { id: "PL", value: Math.round(Math.random() * 1000) },
  { id: "PT", value: Math.round(Math.random() * 1000) },
  { id: "PR", value: Math.round(Math.random() * 1000) },
  { id: "QA", value: Math.round(Math.random() * 1000) },
  { id: "RO", value: Math.round(Math.random() * 1000) },
  { id: "RU", value: Math.round(Math.random() * 1000) },
  { id: "RW", value: Math.round(Math.random() * 1000) },
  { id: "SH", value: Math.round(Math.random() * 1000) },
  { id: "LC", value: Math.round(Math.random() * 1000) },
  { id: "WS", value: Math.round(Math.random() * 1000) },
  { id: "SM", value: Math.round(Math.random() * 1000) },
  { id: "SA", value: Math.round(Math.random() * 1000) },
  { id: "SN", value: Math.round(Math.random() * 1000) },
  { id: "RS", value: Math.round(Math.random() * 1000) },
  { id: "SC", value: Math.round(Math.random() * 1000) },
  { id: "SL", value: Math.round(Math.random() * 1000) },
  { id: "SG", value: Math.round(Math.random() * 1000) },
  { id: "SK", value: Math.round(Math.random() * 1000) },
  { id: "SI", value: Math.round(Math.random() * 1000) },
  { id: "SB", value: Math.round(Math.random() * 1000) },
  { id: "SO", value: Math.round(Math.random() * 1000) },
  { id: "ZA", value: Math.round(Math.random() * 1000) },
  { id: "SS", value: Math.round(Math.random() * 1000) },
  { id: "ES", value: Math.round(Math.random() * 1000) },
  { id: "LK", value: Math.round(Math.random() * 1000) },
  { id: "SD", value: Math.round(Math.random() * 1000) },
  { id: "SR", value: Math.round(Math.random() * 1000) },
  { id: "SE", value: Math.round(Math.random() * 1000) },
  { id: "CH", value: Math.round(Math.random() * 1000) },
  { id: "SY", value: Math.round(Math.random() * 1000) },
  { id: "TW", value: Math.round(Math.random() * 1000) },
  { id: "TJ", value: Math.round(Math.random() * 1000) },
  { id: "TZ", value: Math.round(Math.random() * 1000) },
  { id: "TH", value: Math.round(Math.random() * 1000) },
  { id: "TG", value: Math.round(Math.random() * 1000) },
  { id: "TO", value: Math.round(Math.random() * 1000) },
  { id: "TN", value: Math.round(Math.random() * 1000) },
  { id: "TR", value: Math.round(Math.random() * 1000) },
  { id: "TM", value: Math.round(Math.random() * 1000) },
  { id: "UG", value: Math.round(Math.random() * 1000) },
  { id: "UA", value: Math.round(Math.random() * 1000) },
  { id: "AE", value: Math.round(Math.random() * 1000) },
  { id: "GB", value: Math.round(Math.random() * 1000) },
  { id: "US", value: Math.round(Math.random() * 1000) },
  { id: "UY", value: Math.round(Math.random() * 1000) },
  { id: "UZ", value: Math.round(Math.random() * 1000) },
  { id: "VU", value: Math.round(Math.random() * 1000) },
  { id: "VE", value: Math.round(Math.random() * 1000) },
  { id: "VN", value: Math.round(Math.random() * 1000) },
  { id: "EH", value: Math.round(Math.random() * 1000) },
  { id: "YE", value: Math.round(Math.random() * 1000) },
  { id: "ZM", value: Math.round(Math.random() * 1000) },
  { id: "ZW", value: Math.round(Math.random() * 1000) },
];

const palette = ["#dbeafe", "#172554"];
const colorScale = Scale.scaleSequential(palette).domain([0, 1000]);
const areaColor = () => (d: Record<string, any>) => colorScale(d.value);
const tooltipTriggers = { [TopoJSONMap.selectors.feature]: (d: Record<string, any>) => `${d.properties.name}: ${d.data ? d.data.value : "no data"}` };
const columns = [
  { key: "label", label: "Country", sortable: true },
  { key: "visitors", label: "Visitors", sortable: true },
  { key: "de_anonymized", label: "De anonymized", sortable: true },
];

const countries = [
  { label: "Israel", visitors: 200, de_anonymized: 182 },
  { label: "United Stats", visitors: 2941, de_anonymized: 2318 },
  { label: "France", visitors: 532, de_anonymized: 491 },
  { label: "Germany", visitors: 218, de_anonymized: 105 },
];

const totalTraffic = computed(() => countries.reduce((allVisitors, country) => allVisitors + country.visitors, 0));
const totalDeAnonymizedTraffic = computed(() => countries.reduce((allDeAnonymizedVisitors, country) => allDeAnonymizedVisitors + country.de_anonymized, 0));
</script>

<template>
  <UCard>
    <h2>Map</h2>

    <div class="flex gap-4">
      <div class="w-3/5">
        <VisSingleContainer :data="{ areas: data }" :duration="0" class="h-full">
          <VisTopoJSONMap :topojson="WorldMapTopoJSON" :areaColor="areaColor()" disableZoom />
          <VisTooltip :triggers="tooltipTriggers" />
        </VisSingleContainer>
      </div>

      <div class="w-2/5">
        <div class="flex w-1/2">
          <UInput placeholder="Filter country..." class="w-full" />
        </div>

        <UTable class="flex-1" :columns="columns" :rows="countries">
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
        </UTable>
      </div>
    </div>
  </UCard>
</template>
