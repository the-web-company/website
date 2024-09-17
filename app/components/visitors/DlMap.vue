<script setup lang="ts">
import { Scale, TopoJSONMap } from "@unovis/ts";
import { WorldMapTopoJSON } from "@unovis/ts/maps";
import { VisSingleContainer, VisTopoJSONMap, VisTooltip } from "@unovis/vue";

const data = [
  { id: "AF", value: 146 },
  { id: "AL", value: 6 },
  { id: "DZ", value: 381 },
  { id: "AS", value: 25 },
  { id: "AD", value: 313 },
  { id: "AO", value: 171 },
  { id: "AI", value: 187 },
  { id: "AR", value: 588 },
  { id: "AM", value: 740 },
  { id: "AW", value: 984 },
  { id: "AU", value: 565 },
  { id: "AT", value: 927 },
  { id: "AZ", value: 332 },
  { id: "BS", value: 345 },
  { id: "BH", value: 200 },
  { id: "BD", value: 689 },
  { id: "BB", value: 365 },
  { id: "BY", value: 688 },
  { id: "BE", value: 898 },
  { id: "BZ", value: 637 },
  { id: "BJ", value: 568 },
  { id: "BM", value: 629 },
  { id: "BT", value: 60 },
  { id: "BO", value: 127 },
  { id: "BW", value: 920 },
  { id: "BR", value: 195 },
  { id: "BG", value: 859 },
  { id: "BF", value: 439 },
  { id: "BI", value: 772 },
  { id: "KH", value: 16 },
  { id: "CM", value: 976 },
  { id: "CA", value: 869 },
  { id: "CV", value: 201 },
  { id: "KY", value: 706 },
  { id: "CF", value: 391 },
  { id: "TD", value: 812 },
  { id: "CL", value: 826 },
  { id: "CN", value: 532 },
  { id: "CO", value: 243 },
  { id: "KM", value: 507 },
  { id: "CG", value: 497 },
  { id: "CK", value: 884 },
  { id: "CR", value: 720 },
  { id: "CI", value: 301 },
  { id: "HR", value: 55 },
  { id: "CU", value: 782 },
  { id: "CY", value: 620 },
  { id: "CZ", value: 404 },
  { id: "CD", value: 992 },
  { id: "DK", value: 434 },
  { id: "DJ", value: 267 },
  { id: "DM", value: 695 },
  { id: "DO", value: 923 },
  { id: "EC", value: 854 },
  { id: "EG", value: 978 },
  { id: "SV", value: 585 },
  { id: "GQ", value: 218 },
  { id: "ER", value: 205 },
  { id: "EE", value: 404 },
  { id: "ET", value: 816 },
  { id: "FJ", value: 114 },
  { id: "FI", value: 402 },
  { id: "FR", value: 298 },
  { id: "GF", value: 548 },
  { id: "PF", value: 662 },
  { id: "GA", value: 894 },
  { id: "GM", value: 696 },
  { id: "GE", value: 919 },
  { id: "DE", value: 136 },
  { id: "GH", value: 947 },
  { id: "GR", value: 610 },
  { id: "GL", value: 251 },
  { id: "GD", value: 267 },
  { id: "GU", value: 755 },
  { id: "GT", value: 220 },
  { id: "GN", value: 828 },
  { id: "GW", value: 566 },
  { id: "GY", value: 518 },
  { id: "HT", value: 289 },
  { id: "HN", value: 252 },
  { id: "HK", value: 298 },
  { id: "HU", value: 295 },
  { id: "IS", value: 951 },
  { id: "IN", value: 98 },
  { id: "ID", value: 854 },
  { id: "IR", value: 148 },
  { id: "IQ", value: 575 },
  { id: "IE", value: 611 },
  { id: "IL", value: 231 },
  { id: "IT", value: 643 },
  { id: "JM", value: 256 },
  { id: "JP", value: 839 },
  { id: "JO", value: 831 },
  { id: "KZ", value: 197 },
  { id: "KE", value: 382 },
  { id: "KI", value: 198 },
  { id: "KW", value: 84 },
  { id: "KG", value: 713 },
  { id: "LA", value: 677 },
  { id: "LV", value: 289 },
  { id: "LB", value: 560 },
  { id: "LS", value: 212 },
  { id: "LR", value: 66 },
  { id: "LY", value: 560 },
  { id: "LI", value: 678 },
  { id: "LT", value: 117 },
  { id: "LU", value: 776 },
  { id: "MO", value: 118 },
  { id: "MG", value: 649 },
  { id: "MW", value: 179 },
  { id: "MY", value: 254 },
  { id: "MV", value: 54 },
  { id: "ML", value: 200 },
  { id: "MT", value: 333 },
  { id: "MH", value: 300 },
  { id: "MR", value: 445 },
  { id: "MU", value: 968 },
  { id: "MX", value: 734 },
  { id: "MD", value: 309 },
  { id: "MC", value: 175 },
  { id: "MN", value: 421 },
  { id: "ME", value: 707 },
  { id: "MS", value: 51 },
  { id: "MA", value: 566 },
  { id: "MZ", value: 999 },
  { id: "MM", value: 501 },
  { id: "NA", value: 358 },
  { id: "NP", value: 694 },
  { id: "NL", value: 870 },
  { id: "NC", value: 628 },
  { id: "NZ", value: 243 },
  { id: "NI", value: 989 },
  { id: "NE", value: 182 },
  { id: "NG", value: 981 },
  { id: "NU", value: 27 },
  { id: "KP", value: 528 },
  { id: "MK", value: 439 },
  { id: "MP", value: 521 },
  { id: "NO", value: 938 },
  { id: "OM", value: 309 },
  { id: "PK", value: 491 },
  { id: "PW", value: 153 },
  { id: "PA", value: 968 },
  { id: "PG", value: 318 },
  { id: "PY", value: 138 },
  { id: "PE", value: 304 },
  { id: "PH", value: 339 },
  { id: "PL", value: 568 },
  { id: "PT", value: 566 },
  { id: "PR", value: 686 },
  { id: "QA", value: 263 },
  { id: "RO", value: 182 },
  { id: "RU", value: 78 },
  { id: "RW", value: 63 },
  { id: "SH", value: 495 },
  { id: "LC", value: 849 },
  { id: "WS", value: 287 },
  { id: "SM", value: 860 },
  { id: "SA", value: 269 },
  { id: "SN", value: 958 },
  { id: "RS", value: 710 },
  { id: "SC", value: 286 },
  { id: "SL", value: 674 },
  { id: "SG", value: 847 },
  { id: "SK", value: 112 },
  { id: "SI", value: 228 },
  { id: "SB", value: 233 },
  { id: "SO", value: 766 },
  { id: "ZA", value: 642 },
  { id: "SS", value: 949 },
  { id: "ES", value: 94 },
  { id: "LK", value: 812 },
  { id: "SD", value: 757 },
  { id: "SR", value: 42 },
  { id: "SE", value: 822 },
  { id: "CH", value: 628 },
  { id: "SY", value: 981 },
  { id: "TW", value: 972 },
  { id: "TJ", value: 988 },
  { id: "TZ", value: 733 },
  { id: "TH", value: 73 },
  { id: "TG", value: 428 },
  { id: "TO", value: 514 },
  { id: "TN", value: 363 },
  { id: "TR", value: 404 },
  { id: "TM", value: 938 },
  { id: "UG", value: 905 },
  { id: "UA", value: 119 },
  { id: "AE", value: 530 },
  { id: "GB", value: 733 },
  { id: "US", value: 907 },
  { id: "UY", value: 623 },
  { id: "UZ", value: 932 },
  { id: "VU", value: 439 },
  { id: "VE", value: 391 },
  { id: "VN", value: 672 },
  { id: "EH", value: 290 },
  { id: "YE", value: 538 },
  { id: "ZM", value: 828 },
  { id: "ZW", value: 649 },
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
