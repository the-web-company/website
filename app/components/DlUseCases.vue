<template>
  <div>
    <h3 class="text-3xl xl:text-4xl mb-10">Some of the things we can do</h3>

    <div class="sm:mx-8">
      <div class="grid mx-auto sm:max-w-4xl grid-cols-1 gap-x-8 gap-y-10 md:gap-y-16 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        <div class="flex flex-col space-y-4 md:space-y-6 ring-1 ring-primary-300 bg-primary-200 p-4 rounded-md">
          <div class="flex items-center justify-center rounded-md bg-primary-300 p-2 w-fit">
            <UIcon name="i-heroicons-cursor-arrow-rays" class="bg-primary-600 h-6 w-6" />
          </div>

          <div class="space-y-1">
            <h4 class="font-semibold">User attribution</h4>
            <p class="text-primary-600">A single solution for user attribution across the web that's just works.</p>
          </div>

          <NuxtLink class="text-primary-500 hover:text-primary-600" to="/use-cases/attribution"> Learn more <span aria-hidden="true">→</span> </NuxtLink>
        </div>

        <div class="flex flex-col space-y-4 md:space-y-6 ring-1 ring-primary-300 bg-primary-200 p-4 rounded-md">
          <div class="flex items-center justify-center rounded-md bg-primary-300 p-2 w-fit">
            <UIcon name="i-heroicons-finger-print" class="bg-primary-600 h-6 w-6" />
          </div>

          <div class="space-y-1">
            <h4 class="font-semibold">Fraud</h4>
            <p class="text-primary-600">Instantly identify fraud, account sharing, account takeover, and paywall bypass.</p>
          </div>

          <NuxtLink class="text-primary-500 hover:text-primary-600" to="/use-cases/fraud"> Learn more <span aria-hidden="true">→</span> </NuxtLink>
        </div>

        <div class="flex flex-col space-y-4 md:space-y-6 ring-1 ring-primary-300 bg-primary-200 p-4 rounded-md">
          <div class="flex items-center justify-center rounded-md bg-primary-300 p-2 w-fit">
            <UIcon name="i-heroicons-user-circle" class="bg-primary-600 h-6 w-6" />
          </div>

          <div class="space-y-1">
            <h4 class="font-semibold">Marketing</h4>
            <p class="text-primary-600">Uncover learnings about your visitors by recognizing them across web and mobile.</p>
          </div>

          <NuxtLink class="text-primary-500 hover:text-primary-600" to="/use-cases/marketing"> Learn more <span aria-hidden="true">→</span> </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
