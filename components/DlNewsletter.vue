<script setup lang="ts">
const localState = reactive({
  email: "",
  loading: false,
  submitted: false,
});

async function submit() {
  localState.loading = true;
  await $fetch<Record<string, any>>("https://auth.thewebco.ai/functions/v1/newsletter", {
    method: "POST",
    body: JSON.stringify({ email: localState.email }),
  })
    .then(() => (localState.submitted = true))
    .finally(() => {
      localState.loading = false;
      localState.email = "";
    });
}
</script>

<template>
  <div class="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
    <div class="lg:max-w-lg">
      <h2 class="text-3xl lg:text-4xl">Subscribe to our newsletter</h2>
      <p class="mt-2 leading-8 text-purple-400">Get our latest news, announcements and updates delivered directly to your inbox.</p>
      <div class="mt-2 flex gap-x-4" v-if="!localState.submitted">
        <UInput placeholder="Enter your email" class="w-full" v-model="localState.email" />
        <UButton label="Subscribe" @click="submit" :disabled="!localState.email" :loading="localState.loading" />
      </div>
      <div v-else>
        <UAlert
          title="Success! 🥳"
          icon="i-heroicons-newspaper"
          variant="soft"
          description="You are now subscribed to our newsletter, stay tuned for updates and announcements"
        />
      </div>
    </div>
    <div class="hidden md:grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
      <div class="flex flex-col items-start">
        <div class="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
          <div class="rounded-md bg-purple-900 p-2 w-10 h-10">
            <UIcon name="i-heroicons-calendar-days" class="h-6 w-6 text-purple-400" />
          </div>
          <h3 class="sm:mt-4 font-semibold">Monthly update</h3>
        </div>
        <p class="mt-2 text-sm text-purple-400">A monthly summary of everything that happened in TheWebCo. Every important feature, and new update.</p>
      </div>
      <div class="flex flex-col items-start">
        <div class="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
          <div class="rounded-md bg-purple-900 p-2 w-10 h-10">
            <UIcon name="i-heroicons-hand-raised" class="h-6 w-6 text-purple-400" />
          </div>
          <h3 class="sm:mt-4 font-semibold">No spam</h3>
        </div>
        <p class="mt-2 text-sm text-purple-400">We hold ourselves to the highest standards and commit to not flood your inbox and never send spam emails.</p>
      </div>
    </div>
  </div>
</template>
