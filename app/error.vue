<script setup>
const router = useRouter();
defineProps({
  error: Object,
});

function goBack() {
  router.go("-1");
}

function goHome() {
  router.push("/");
}
</script>

<template>
  <NuxtLayout name="empty">
    <div class="flex justify-center items-center gap-4 p-4 mt-40">
      <UCard class="max-w-2xl">
        <div class="relative">
          <img src="/cover-picture.webp" class="rounded-md mb-6" />
          <h2 class="absolute left-4 top-4 text-xl text-gray-50 font-semibold drop-shadow">
            Even in the vastness of space, this page is the one planet you can't seem to land on. Houston, we have a problem!
          </h2>
        </div>
        <p class="text-sm font-medium text-primary-500 dark:text-primary-400">{{ error.statusCode }} error</p>
        <h1 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-gray-50 md:text-3xl">{{ error.statusMessage?.split(":")?.[0] }}</h1>
        <p class="mt-4 text-gray-500 dark:text-gray-400">
          <span v-if="error.statusCode == 404">Sorry, you’re either misspelling the URL or requesting a page that's no longer exist.</span>
          <span v-else-if="error.statusCode == 500">{{ error ? error : "Whoops, something went wrong on our servers." }}</span>
          <span v-else>We don't know what happened, try in a minute or contact support if it keeps happening.</span>
        </p>

        <div class="flex items-center mt-6 gap-x-3">
          <UButton label="Go back" color="gray" variant="outline" icon="i-heroicons-arrow-long-left" @click="goBack" />

          <UButton label="Take me home" @click="goHome" />
        </div>
      </UCard>
    </div>
  </NuxtLayout>
</template>
