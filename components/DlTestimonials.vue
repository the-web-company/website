<script setup lang="ts">
const testimonials = [
  {
    name: "Dror T",
    company: "Compira Labs",
    text: "Using TheWebCo has transformed the way we approach sales. The platform's prospecting capabilities are a game-changer and led to a 50% increase in conversion.",
    picture: "/testimonials/dror-t.webp",
  },
  {
    name: "Yotam E",
    company: "Oracle",
    text: "Everyone wants the ability to know information about people, TheWebCo makes it happen.",
    picture: "/testimonials/yotam-e.webp",
  },
  {
    name: "Nir W",
    company: "Wix",
    text: "I've tried many lead generation tools in the past, but none of them come close to the quality and precision of TheWebCo. The user-friendly interface and seamless integration with our CRM make it a must-have for any sales team.",
    picture: "/testimonials/nir-w.webp",
  },
  {
    name: "Asaf S",
    company: "ironSource",
    text: "Our company was wasting so much time and effort on outdated prospecting methods until we discovered TheWebCo. It's not just a tool; it's a revolution. The predictive analytics and real-time insights have transformed the way we do business.",
    picture: "/testimonials/asaf-s.webp",
  },
  {
    name: "Adam N",
    company: "Stealth Startup",
    text: "Investing wisely is all about data. TheWebCo provides us with the data-driven insights we need to succeed.",
    picture: "/testimonials/adam-n.webp",
  },
  {
    name: "Shahar G",
    company: "AllCloud",
    text: "Tried out @TheWebCo today. They're awesome - couldn't believe the amount of data they returned. I've been looking for a Zoominfo alternative for a while - not sure how I missed them.",
    picture: "/testimonials/shahar-g.webp",
  },
  {
    name: "Nadav M",
    company: "BigID",
    text: "With TheWebCo, we no longer worry about fake or inaccurate information. It's our trusty shield against identity fraud.",
    picture: "/testimonials/nadav-m.webp",
  },
  {
    name: "Almog S",
    company: "Bionic",
    text: "TheWebCo: The lead gen tool that delivers. Our ROI has soared since we started using it!",
    picture: "/testimonials/almog-s.webp",
  },
];

const testimonialsRef = ref();
onMounted(() => {
  // testimonialsRef.value.setAttribute("data-animated", true);
});
</script>

<template>
  <div data-animated="true" class="relative flex flex-col gap-4 overflow-x-hidden">
    <div class="flex gap-4 w-full">
      <div
        v-for="(testimonial, index) of [...testimonials, ...testimonials]"
        :key="index"
        class="bg-violet-100 rounded-md p-4 flex flex-col justify-between min-w-96"
      >
        <p>{{ testimonial.text }}</p>
        <div class="flex items-center gap-2 mt-4">
          <img :src="testimonial.picture" class="h-10 w-10 rounded-full" />
          <span class="text-sm">
            <p>{{ testimonial.name }}</p>
            <p class="text-neutral-500">{{ testimonial.company }}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
div[data-animated="true"] {
  mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);

  > div {
    animation: scroll 50s linear infinite;
  }
  > div:hover {
    animation-play-state: paused;
  }
}

@keyframes scroll {
  to {
    transform: translate(-208%);
  }
}
</style>
