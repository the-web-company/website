<script setup lang="ts">
import DlMap from "@/components/visitors/DlMap.vue";
import DlPath from "@/components/visitors/DlPath.vue";
import DlTimeline from "@/components/visitors/DlTimeline.vue";
import DlReferrers from "@/components/visitors/DlReferrers.vue";
import DlLanguages from "@/components/visitors/DlLanguages.vue";
import DlIndustries from "@/components/visitors/DlIndustries.vue";
import DlContactTime from "@/components/person/DlContactTime.vue";
import DlIngegration from "@/components/visitors/DlIngegration.vue";
import DlCompaniesList from "@/components/visitors/DlCompaniesList.vue";

const selected = ref(1);

onMounted(() => {
  setInterval(() => {
    selected.value += 1;
    if (selected.value > 3) {
      selected.value = 1;
    }
  }, 10000);
});
</script>

<template>
  <div class="max-w-screen-3xl mx-auto px-4 3xl:p-0 grid grid-cols-1 md:grid-cols-5 gap-4 xl:gap-8">
    <div class="md:col-span-3 lg:col-span-2 sm:p-5 xl:p-10 space-y-8">
      <div class="space-y-2">
        <h3 class="text-3xl xl:text-4xl">Welcome to the age of intelligence</h3>
        <p class="text-purple-400 text-sm xl:text-base">
          For the first time you can actually see your visitors and take actions based on their journey, what's important to them, and who they are.
        </p>
      </div>

      <div class="space-y-4 sm:space-y-8">
        <div
          :class="[
            selected == 1 ? 'ring-1 ring-purple-700 bg-purple-900' : '',
            'flex gap-4 items-center p-2 cursor-pointer rounded-md relative transition duration-300 ease-in-out hover:ring-1 hover:ring-purple-700 hover:bg-purple-900',
          ]"
          @click="() => (selected = 1)"
        >
          <div><UIcon name="i-heroicons-arrow-trending-up" class="h-6 w-6 text-purple-400" /></div>
          <div>
            <h4 class="xl:text-lg">Reveal anonymous website visitors</h4>
            <p class="text-purple-400 text-sm xl:text-base">
              It's as simple as adding a snippet of JavaScript to your website and start seeing your visitors in real-time.
            </p>
          </div>
        </div>

        <div
          :class="[
            selected == 2 ? 'ring-1 ring-purple-700 bg-purple-900' : '',
            'flex gap-4 items-center p-2 cursor-pointer rounded-md relative transition duration-300 ease-in-out hover:ring-1 hover:ring-purple-700 hover:bg-purple-900',
          ]"
          @click="() => (selected = 2)"
        >
          <div><UIcon name="i-heroicons-chart-bar" class="h-6 w-6 text-purple-400" /></div>
          <div>
            <h4 class="xl:text-lg">Single source of truth</h4>
            <p class="text-purple-400 text-sm xl:text-base">Unite your teams around a single source of truth, know who to reach and how to reach them.</p>
          </div>
        </div>

        <div
          :class="[
            selected == 3 ? 'ring-1 ring-purple-700 bg-purple-900' : '',
            'flex gap-4 items-center p-2 cursor-pointer rounded-md relative transition duration-300 ease-in-out hover:ring-1 hover:ring-purple-700 hover:bg-purple-900',
          ]"
          @click="() => (selected = 3)"
        >
          <div><UIcon name="i-heroicons-chart-pie" class="h-6 w-6 text-purple-400" /></div>
          <div>
            <h4 class="xl:text-lg">Make better decisions</h4>
            <p class="text-purple-400 text-sm xl:text-base">Filter by any parameter and see your visitor's journey enables you to double down on what works.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative md:col-span-2 lg:col-span-3 max-w-screen-lg w-full h-96 md:h-full overflow-hidden lg:overflow-visible">
      <div
        :class="[
          selected == 1 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-75 xl:scale-90 translate-y-2 lg:translate-y-16',
        ]"
      >
        <DlIngegration />
      </div>
      <div
        :class="[
          selected == 1 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 xl:scale-75 translate-y-8 md:translate-y-20 lg:translate-y-32 -translate-x-24 sm:-translate-x-36 md:-translate-x-20 lg:-translate-x-28 w-full 2xl:w-2/3',
        ]"
      >
        <DlTimeline />
      </div>
      <div
        :class="[
          selected == 1 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-75 xl:scale-100 translate-y-40 sm:translate-y-60 lg:translate-y-80 translate-x-44 sm:translate-x-56 md:translate-x-28 lg:translate-x-60 xl:translate-x-80 2xl:translate-x-96',
        ]"
      >
        <DlContactTime />
      </div>
      <div
        :class="[
          selected == 2 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 2xl:scale-75 3xl:scale-90 -translate-y-20 md:-translate-y-10 lg:translate-y-8 2xl:-translate-y-2 -translate-x-52 sm:-translate-x-40 md:-translate-x-60 lg:-translate-x-36 2xl:-translate-x-10',
        ]"
      >
        <DlMap />
      </div>
      <div
        :class="[
          selected == 2 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 2xl:scale-75 -translate-x-32 sm:-translate-x-20 md:-translate-x-32 lg:-translate-x-24 md:translate-y-20 lg:translate-y-36 max-w-lg',
        ]"
      >
        <DlIndustries />
      </div>
      <div
        :class="[
          selected == 2 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 2xl:scale-75 translate-y-10 md:translate-y-36 lg:translate-y-52 -translate-x-10 sm:translate-x-20 md:-translate-x-10 lg:translate-x-32 2xl:translate-x-64 3xl:translate-x-80',
        ]"
      >
        <DlReferrers />
      </div>
      <div
        :class="[
          selected == 3 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 xl:scale-75 -translate-x-40 sm:-translate-x-10 md:-translate-x-52 lg:-translate-x-20 -translate-y-24 md:-translate-y-14 lg:-translate-y-4 min-w-max xl:min-w-full',
        ]"
      >
        <DlCompaniesList />
      </div>
      <div
        :class="[
          selected == 3 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 xl:scale-75 -translate-x-20 lg:-translate-x-14 2x:translate-x-6 translate-y-8 md:translate-y-24 lg:translate-y-56',
        ]"
      >
        <DlLanguages />
      </div>
      <div
        :class="[
          selected == 3 ? '' : 'hidden',
          'transition duration-300 ease-in-out rounded-md ring-1 ring-purple-700 absolute scale-50 xl:scale-75 sm:translate-x-36 md:-translate-x-10 lg:translate-x-40 2xl:translate-x-80 translate-y-14 md:translate-y-36',
        ]"
      >
        <DlPath />
      </div>
    </div>
  </div>
</template>
