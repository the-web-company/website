<script setup lang="ts">
import DlAuthor from "@/components/blog/DlAuthor.vue";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="flex flex-col-reverse justify-between sm:flex-row gap-2 sm:gap-8">
    <div class="flex flex-col justify-between sm:w-1/2">
      <div>
        <div class="flex justify-between items-center gap-x-4 text-sm">
          <button class="capitalize rounded-md text-nowrap text-xs bg-gray-200 px-2 py-1.5 text-gray-500 hover:bg-gray-300">
            {{ post.category }}
          </button>
          <time :datetime="post.pubDate" class="text-gray-500 text-nowrap">{{ new Date(post.pubDate).toDateString() }}</time>
        </div>

        <h3 class="mt-4 text-lg font-semibold group-hover:text-gray-500">
          <a :href="post._path">{{ post.title }}</a>
        </h3>
        <p class="mt-2 text-sm text-gray-500 line-clamp-5">{{ post.description }}</p>
      </div>

      <div class="mt-5 flex border-t border-gray-300 pt-5">
        <DlAuthor :post="post" />
      </div>
    </div>

    <div class="sm:w-1/2">
      <a :href="post._path">
        <img :src="post.featuredImage" alt="post featured image" class="w-full rounded-md object-cover h-80" />
      </a>
    </div>
  </article>
</template>
