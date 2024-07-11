<script setup lang="ts">
import DiSocialLogo from "@/components/person/DlSocialLogo.vue";

const person = {
  cover_picture: "/components/general-cover.webp",
  profile_picture: "/components/tom-cook.webp",
  first_name: "tom",
  last_name: "cook",
  sources: [
    "linkedin",
    "facebook",
    "github",
    "twitter",
    "stackoverflow",
    "meetup",
    "gravatar",
    "instagram",
    "dribbble",
    "quora",
    "youtube",
    "angellist",
    "reddit",
  ],
  phones: [{ number: "+19512390523", type: "mobile" }],
  birth_date: "Fri May 25 1990",
  emails: [
    { address: "tom.c@apple.com", type: "professional" },
    { address: "tom_cook@yahoo.com", type: "personal" },
  ],
  gender: "Male",
  locations: ["San Francisco, CA, USA"],
  languages: ["English", "Spanish"],
  description: "",
};
</script>

<template>
  <div class="group bg-purple-900 rounded-md h-full">
    <div class="relative">
      <img :src="person.cover_picture" class="rounded-tl-md rounded-tr-md w-full h-14 object-cover" />
      <img :src="person.profile_picture" class="rounded-full w-20 h-20 absolute top-6 left-10 ring-2 ring-purple-900" />
      <h2 class="text-xl font-medium capitalize mt-2 mb-4 ml-36">{{ person.first_name }} {{ person.last_name }}</h2>
    </div>

    <div class="grid grid-cols-3 md:grid-cols-4 gap-4 px-4">
      <section class="col-span-3 md:col-span-1 md:row-start-1 md:col-start-4">
        <p class="font-medium text-sm">Social Networks</p>
        <span class="w-fit flex flex-wrap gap-2 2xl:gap-4">
          <a v-for="(item, index) of person.sources" :key="index" :class="[index > 6 ? 'hidden sm:block' : '']">
            <DiSocialLogo :name="item" class="!h-6 !w-6 cursor-pointer" />
          </a>
        </span>
      </section>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 col-span-3">
        <section>
          <p class="font-medium text-sm">Phone</p>
          <UTooltip :text="item.type" v-for="(item, index) of person.phones" :key="index" class="block">
            <div class="h-3 w-2/5 bg-purple-600 rounded-md group-hover:opacity-0 transition duration-500 ease-in-out"></div>
            <span class="absolute text-purple-400 text-xs transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 -top-0.5">{{
              item.number
            }}</span>
          </UTooltip>
        </section>

        <section>
          <p class="font-medium text-sm">Birthday</p>
          <p class="text-purple-400 text-xs break-words">
            {{ person.birth_date }}
          </p>
        </section>

        <section>
          <p class="font-medium text-sm">Email</p>
          <UTooltip :text="item.type" v-for="(item, index) of person.emails" :key="index" class="block relative">
            <div v-if="index == 0">
              <div class="h-3 w-1/3 bg-purple-600 rounded-md mb-1 group-hover:opacity-0 transition duration-500 ease-in-out"></div>
              <span class="absolute text-purple-400 text-xs transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 -top-0.5">{{
                item.address
              }}</span>
            </div>
            <div v-if="index == 1">
              <div class="h-3 w-2/3 bg-purple-600 rounded-md group-hover:opacity-0 transition duration-500 ease-in-out"></div>
              <span class="absolute text-purple-400 text-xs transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 -top-0.5">{{
                item.address
              }}</span>
            </div>
          </UTooltip>
        </section>

        <section>
          <p class="font-medium text-sm">Gender</p>
          <p class="text-purple-400 text-xs">{{ person.gender }}</p>
        </section>

        <section>
          <p class="font-medium text-sm">Locations</p>
          <div class="h-3 w-2/3 bg-purple-600 rounded-md"></div>
        </section>

        <section>
          <p class="font-medium text-sm">Languages</p>
          <div class="h-3 w-1/3 bg-purple-600 rounded-md mb-1"></div>
          <div class="h-3 w-2/5 bg-purple-600 rounded-md mb-1"></div>
          <div class="h-3 w-1/5 bg-purple-600 rounded-md"></div>
        </section>
      </div>
    </div>

    <section class="px-4">
      <p class="font-medium text-sm">About</p>
      <div class="flex flex-col gap-2">
        <div class="h-3 w-full bg-purple-600 rounded-md"></div>
        <div class="h-3 w-1/4 bg-purple-600 rounded-md"></div>
      </div>
    </section>
  </div>
</template>
