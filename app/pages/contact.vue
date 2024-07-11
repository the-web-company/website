<script setup lang="ts">
definePageMeta({ title: "Contact" });
const { data } = await useAsyncData("contact", () => queryContent("/contact").findOne());
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 space-y-10 lg:space-y-0 lg:space-x-10">
    <div class="2xl:col-span-3">
      <h2 class="text-3xl sm:text-4xl xl:text-5xl">{{ data.title }}</h2>
      <p class="mt-6 xl:text-lg leading-8 text-purple-400" v-html="data.subtitle"></p>
      <dl class="mt-10 space-y-4 text-base leading-7 text-purple-400">
        <div class="flex gap-x-4" v-for="(item, index) of data.items" :key="index">
          <dt class="flex-none">
            <UIcon :name="item.icon" class="h-7 w-6 text-purple-400" />
          </dt>
          <dd v-html="item.text"></dd>
        </div>
      </dl>
    </div>

    <div id="contact-embedded-form" class="2xl:col-span-2" />
  </div>
</template>

<style scoped>
#contact-embedded-form :deep(form) {
  @apply flex flex-col gap-6;
}

#contact-embedded-form :deep(fieldset) {
  @apply w-full max-w-full;
}

#contact-embedded-form :deep(fieldset.form-columns-2) {
  @apply flex gap-6;
}

#contact-embedded-form :deep(.hs-error-msg) {
  @apply text-sm text-red-500;
}

#contact-embedded-form :deep(label > span:first-child) {
  @apply text-sm font-medium text-gray-700 mr-1;
}

#contact-embedded-form :deep(label > .hs-form-required) {
  @apply text-red-500;
}

#contact-embedded-form :deep(div.input > input),
#contact-embedded-form :deep(div.input > textarea) {
  @apply w-full rounded-md placeholder-gray-400 text-sm px-3 py-2 shadow-sm bg-neutral-50 text-neutral-900 ring-1 ring-inset ring-neutral-300 focus:ring-2 focus:ring-primary-500;
}

#contact-embedded-form :deep(div.input > textarea) {
  @apply h-32;
}

#contact-embedded-form :deep(input.hs-button.primary.large) {
  @apply font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm text-white bg-primary-500 hover:bg-primary-600 cursor-pointer;
}

#contact-embedded-form :deep(div.hs_submit > div.actions) {
  @apply flex justify-end;
}

#contact-embedded-form :deep(div.hs_error_rollup) {
  @apply hidden;
}
</style>
