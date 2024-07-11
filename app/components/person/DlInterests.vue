<script setup lang="ts">
const props = defineProps({
  showVideo: {
    type: Boolean,
    default: true,
  },
});

const videoRef = ref();
onMounted(() => {
  if (props.showVideo) {
    videoRef.value.addEventListener("ended", () => {
      videoRef.value.currentTime = 0;
      videoRef.value.play();
    });
  }
});

const startVideo = () => {
  if (props.showVideo) {
    videoRef.value.play();
  }
};

const stopVideo = () => {
  if (props.showVideo) {
    videoRef.value.currentTime = 0;
    videoRef.value.pause();
  }
};
</script>

<template>
  <div class="bg-purple-900 rounded-md p-2 grid grid-rows-4 gap-2 h-full" @mouseover="startVideo" @mouseleave="stopVideo">
    <div class="w-full h-full bg-purple-800 rounded-md"></div>
    <div class="w-full h-full bg-purple-700 rounded-md justify-between p-2 row-span-2 flex gap-2">
      <p class="text-sm xl:text-base">Have a active Formula 1 subscription</p>
      <video v-if="showVideo" ref="videoRef" muted class="rounded-md object-cover w-7/12">
        <source src="/components/formula_1.mp4" />
      </video>
      <img v-else src="/components/formula_1.webp" class="rounded-md object-cover w-1/2 2xl:w-fit" />
    </div>
    <div class="w-full h-full bg-purple-800 rounded-md"></div>
  </div>
</template>
