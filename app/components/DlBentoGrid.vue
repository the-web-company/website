<script setup lang="ts">
import DIGeneral from "@/components/person/DIGeneral.vue";
import DlInterests from "@/components/person/DlInterests.vue";
import DlCloseness from "@/components/person/DlCloseness.vue";
import DlContactTime from "@/components/person/DlContactTime.vue";
import DlIceBreakers from "@/components/person/DlIceBreakers.vue";
import DlSocialActivity from "@/components/person/DlSocialActivity.vue";
</script>

<template>
  <div class="grid grid-cols-6 xl:grid-cols-3 xl:grid-rows-3 gap-2 md:gap-4 lg:gap-6">
    <div class="col-span-6 xl:col-span-2 max-h-80 rounded-md overflow-hidden border-b border-purple-700">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-identification" class="h-6 w-6 text-purple-100" />
        <h3>Really know who visites your website</h3>
      </div>
      <div class="h-full border border-purple-700 rounded-md"><DIGeneral /></div>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-1 max-h-80 rounded-md overflow-hidden border-b border-purple-700">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-light-bulb" class="h-6 w-6 text-purple-100" />
        <h3>Understand what important to your visitors</h3>
      </div>
      <div class="h-full border border-purple-700 rounded-md"><DlInterests /></div>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-1 row-span-2 max-h-full overflow-hidden border-b border-purple-700">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-sparkles" class="h-6 w-6 text-purple-100" />
        <h3>Break the ice with unique AI generated insights</h3>
      </div>
      <div class="h-full border border-purple-700 rounded-md"><DlIceBreakers /></div>
    </div>
    <div class="col-span-6 md:col-span-3 xl:col-span-1 max-h-80 rounded-md overflow-hidden border-b border-purple-700">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-clock" class="h-6 w-6 text-purple-100" />
        <h3>Find out when to contact</h3>
      </div>
      <div class="h-80 border border-purple-700 rounded-md"><DlContactTime /></div>
    </div>
    <div class="col-span-6 lg:col-span-2 xl:col-span-1 max-h-80 rounded-md overflow-hidden border-b border-purple-700">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-window" class="h-6 w-6 text-purple-100" />
        <h3>Know where your visitors hangs out</h3>
      </div>
      <div class="border border-purple-700 rounded-md"><DlSocialActivity /></div>
    </div>
    <div class="col-span-6 lg:col-span-4 xl:col-span-2 max-h-80 rounded-md overflow-hidden border-b border-purple-700">
      <div class="flex items-center gap-2 mb-2">
        <UIcon name="i-heroicons-share" class="h-6 w-6 text-purple-100" />
        <h3>Find out how you can connect</h3>
      </div>
      <div class="border border-purple-700 rounded-md"><DlCloseness /></div>
    </div>
  </div>
</template>
