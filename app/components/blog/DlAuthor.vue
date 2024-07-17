<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-4 text-sm">
    <img :src="post.authorPicture" :alt="`${post.author} author profile picture`" class="h-10 w-10 rounded-full ring-1 ring-gray-300" />
    <div>
      <a :href="post.authorLink" target="_blank"
        ><p>{{ post.author }}</p></a
      >
      <p class="text-gray-500">{{ post.authorTitle }}</p>
    </div>
  </div>
</template>
