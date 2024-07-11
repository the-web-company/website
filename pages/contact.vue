<script setup lang="ts">
definePageMeta({ title: "Contact" });
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-5 space-y-10 lg:space-y-0 lg:space-x-10">
    <div class="2xl:col-span-3">
      <h2 class="text-3xl sm:text-4xl xl:text-5xl">Get in touch</h2>
      <p class="mt-6 xl:text-lg leading-8 text-purple-400">
        TheWebCo team would love to hear from you!<br />Drop us a message on one of the social platforms we're in, or just send us an email.
      </p>
      <dl class="mt-10 space-y-4 text-base leading-7 text-purple-400">
        <div class="flex gap-x-4">
          <dt class="flex-none">
            <span class="sr-only">Address</span>
            <svg class="h-7 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
          </dt>
          <dd>Dr Choen 7, Ramat Gan, Israel<br />652 N Broad St, Middletown, Delaware, US, 19709</dd>
        </div>

        <div class="flex gap-x-4">
          <dt class="flex-none">
            <span class="sr-only">Email</span>
            <svg class="h-7 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </dt>
          <dd><a class="duration-300 ease-in-out hover:text-purple-600" href="mailto:support@thewebco.ai">support@thewebco.ai</a></dd>
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
