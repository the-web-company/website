<script setup lang="ts">
import DlAuthor from "@/components/blog/DlAuthor.vue";
import DlHighlight from "@/components/blog/DlHighlight.vue";

definePageMeta({ title: "Blog" });
const { data } = await useAsyncData("blog", () => queryContent("/blog").findOne());

const itemsPerPage = 10;
const page = ref(1);
const loading = ref(false);
const selectedCategory = ref("all");
const total = await queryContent("/posts").count();
const allCategories = new Set((await queryContent("/posts").where({ published: true }).find()).map((post: Record<string, any>) => post.category));
let posts = ref([] as Array<any>);
getPosts();

watch(page, () => {
  getPosts();
});

async function getPosts() {
  loading.value = true;
  posts.value = await queryContent("/posts")
    .where({ published: true })
    .sort({ pubDate: -1 })
    .skip((page.value - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .find();
  loading.value = false;
}

watch(selectedCategory, async () => {
  loading.value = true;
  if (selectedCategory.value == "all") {
    return getPosts();
  }

  posts.value = await queryContent("/posts")
    .where({ category: { $match: selectedCategory.value }, published: true })
    .sort({ pubDate: -1 })
    .skip((page.value - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .find();
  loading.value = false;
});
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-14">
    <div>
      <h2 class="text-3xl sm:text-4xl xl:text-5xl">{{ data?.title }}</h2>
      <p class="mt-2 text-lg text-gray-500">{{ data?.subtitle }}</p>
    </div>

    <div class="mt-4" v-if="posts.length">
      <div class="flex gap-4">
        <div v-for="(category, index) of ['all', ...allCategories]" :key="index">
          <button
            :class="[
              selectedCategory == category ? 'bg-gray-100' : '',
              'capitalize rounded-md text-nowrap text-xs bg-gray-100 px-2 py-1.5 text-gray-500 hover:bg-gray-200',
            ]"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="my-10 bg-gray-100 rounded-md p-2">
        <DlHighlight :post="posts[0]" />
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-20">
        <article class="grid grid-col-1 sm:grid-cols-3 gap-2 sm:gap-8" v-for="(post, index) of posts.slice(1)" :key="index">
          <a :href="post._path">
            <img :src="post.featuredImage" alt="post featured image" class="h-80 w-full rounded-md object-cover" />
          </a>

          <div class="sm:col-span-2 h-full max-h-80 flex flex-col justify-between space-y-5">
            <div>
              <div class="flex justify-between items-center gap-x-4 text-sm">
                <button
                  @click="selectedCategory = post.category"
                  class="capitalize rounded-md text-nowrap text-xs bg-gray-100 px-2 py-1.5 text-gray-500 hover:bg-gray-200"
                >
                  {{ post.category }}
                </button>
                <time :datetime="post.pubDate" class="text-gray-500 text-nowrap">{{ new Date(post.pubDate).toDateString() }}</time>
              </div>
              <a :href="post._path">
                <h3 class="mt-4 text-lg font-semibold">
                  {{ post.title }}
                </h3>
              </a>
              <p class="mt-2 text-sm text-gray-500 line-clamp-5">{{ post.description }}</p>
            </div>

            <div class="flex border-t border-gray-300 pt-5">
              <DlAuthor :post="post" />
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="flex justify-center mt-20">
      <UPagination v-model="page" :page-count="itemsPerPage" :total="total" />
    </div>
  </div>
</template>
