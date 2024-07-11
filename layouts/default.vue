<script setup lang="ts">
import DlHeader from "@/components/DlHeader.vue";
import DlFooter from "@/components/DlFooter.vue";
</script>

<template>
  <DlHeader />
  <slot />
  <DlFooter />
</template>
