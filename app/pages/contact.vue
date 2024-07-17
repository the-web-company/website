<script setup lang="ts">
definePageMeta({ title: "Contact" });
const { data } = await useAsyncData("contact", () => queryContent("/contact").findOne());
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 space-y-10 lg:space-y-0 lg:space-x-10">
    <div class="2xl:col-span-3">
      <h2 class="text-3xl sm:text-4xl xl:text-5xl">{{ data?.title }}</h2>
      <p class="mt-6 xl:text-lg leading-8 text-gray-500" v-html="data?.subtitle"></p>
      <dl class="mt-10 space-y-4 text-base leading-7 text-gray-500">
        <div class="flex gap-x-4" v-for="(item, index) of data?.items" :key="index">
          <dt class="flex-none">
            <UIcon :name="item.icon" class="h-7 w-6 text-gray-500" />
          </dt>
          <dd v-html="item.text"></dd>
        </div>
      </dl>
    </div>

    <div id="contact-embedded-form" class="2xl:col-span-2" />
  </div>
</template>
