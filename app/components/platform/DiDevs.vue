<script setup lang="ts">
const selected = 1;
const endpoints = [
  {
    name: "Credits status",
    method: "GET",
    active: false,
    code: "resources-credits",
    url: "/operator/organization/status",
    description: "Get the current status of all your packages and currently left credits. Also, get total and used seats, as well as your renew date.",
    headers: [{ key: "api-key", value: "ba376422-02e3-93f0ec7566d6", editable: false, active: true }],
    queries: [],
  },
  {
    name: "Search a person",
    method: "GET",
    active: true,
    code: "resources-person",
    url: "/gatekeeper/search/person/by",
    description:
      "Get the person full entity with all of it's fields and data that is related to this entity in just one request. All of the entities are standardized json objects with fixed fields and data types - to make it as easy as possible to integrate them into your system.",
    headers: [{ key: "api-key", value: "ba376422-02e3-93f0ec7566d6", editable: false, active: true }],
    queries: [
      {
        key: "skip",
        type: "number",
        value: "",
        placeholder: 0,
        editable: true,
        active: false,
        description: "The number of pages to skip, default to 0.",
      },
      {
        key: "multiple",
        type: "boolean",
        value: "true",
        editable: true,
        active: false,
        description: "Limit the number of results that return to one or many (default to 'true' = many).",
      },
      {
        key: "_id",
        type: "string",
        value: "",
        placeholder: "64d8d2cadf65f6761ebf2fbb",
        editable: true,
        active: false,
        description: "The unique id of the entity in our system (if you already have it).",
      },
      {
        key: "sources.url",
        type: "string",
        value: "",
        placeholder: "https://linkedin.com/john.d.7",
        editable: true,
        active: false,
        description: "A social network url of the person to search for (should not include the protocol: e.g. example.com/profile/123).",
      },
      {
        key: "phones.number",
        type: "string",
        value: "",
        placeholder: "+12124567890",
        editable: true,
        active: false,
        description: "A phone number of the person to search for.",
      },
      {
        key: "emails.address",
        type: "string",
        value: "",
        placeholder: "john.doe@example.com",
        editable: true,
        active: false,
        description: "An email address of the person to search for.",
      },
      {
        key: "names.first_name",
        type: "string",
        value: "",
        placeholder: "john",
        editable: true,
        active: false,
        description: "The first name of the person to search for.",
      },
      {
        key: "names.last_name",
        type: "string",
        value: "",
        placeholder: "doe",
        editable: true,
        active: false,
        description: "The last name of the person to search for.",
      },
      {
        key: "locations.country",
        type: "string",
        value: "",
        placeholder: "united states",
        editable: true,
        active: false,
        description: "The country of the person to search for.",
      },
      {
        key: "education.school_name",
        type: "string",
        value: "",
        placeholder: "the open university of israel",
        editable: true,
        active: false,
        description: "The name of the school a person studied at.",
      },
      {
        key: "experience.company_name",
        type: "string",
        value: "",
        placeholder: "apple",
        editable: true,
        active: false,
        description: "The name of the company a person worked at.",
      },
    ],
  },
  {
    name: "Search a company",
    method: "GET",
    active: false,
    code: "resources-company",
    url: "/gatekeeper/search/company/by",
    description:
      "Get the company full entity with all of it's fields and data in just one request. The response is a standardized json object with fixed fields and data types - to make it as easy as possible to integrate them into your system.",
    headers: [{ key: "api-key", value: "ba376422-02e3-93f0ec7566d6", editable: false, active: true }],
    queries: [
      {
        key: "skip",
        type: "number",
        value: "",
        placeholder: 0,
        editable: true,
        active: false,
        description: "The number of pages to skip, default to 0.",
      },
      {
        key: "multiple",
        type: "boolean",
        value: "true",
        editable: true,
        active: false,
        description: "Limit the number of results that return to one or many (default to 'true' = many).",
      },
      {
        key: "_id",
        type: "string",
        value: "",
        placeholder: "64d8d2cadf65f6761ebf2fbb",
        editable: true,
        active: false,
        description: "The unique id of the entity in our system (if you already have it).",
      },
      {
        key: "sources.url",
        type: "string",
        value: "",
        placeholder: "linkedin.com/company/apple",
        editable: true,
        active: false,
        description: "A social network url of the company to search for (should not include the protocol).",
      },
      {
        key: "domain",
        type: "string",
        value: "",
        placeholder: "wix.com",
        editable: true,
        active: false,
        description: "The domain (website url) of company (should not include the protocol).",
      },
    ],
  },
  {
    name: "Search a university",
    method: "GET",
    active: false,
    code: "resources-university",
    url: "/gatekeeper/search/school/by",
    description:
      "Get the university full entity with all of it's fields and data in just one request. All of the fields are standardized, fiexed, json fields and data types - to make it as easy as possible to integrate them into your system.",
    headers: [{ key: "api-key", value: "ba376422-02e3-93f0ec7566d6", editable: false, active: true }],
    queries: [
      {
        key: "skip",
        type: "number",
        value: "",
        placeholder: 0,
        editable: true,
        active: false,
        description: "The number of pages to skip, default to 0.",
      },
      {
        key: "multiple",
        type: "boolean",
        value: "true",
        editable: true,
        active: false,
        description: "Limit the number of results that return to one or many (default to 'true' = many).",
      },
      {
        key: "_id",
        type: "string",
        value: "",
        placeholder: "64d8d2cadf65f6761ebf2fbb",
        editable: true,
        active: false,
        description: "The unique id of the entity in our system (if you already have it).",
      },
      {
        key: "sources.url",
        type: "string",
        value: "",
        placeholder: "linkedin.com/school/stanford-university",
        editable: true,
        active: false,
        description: "A social network url of the university to search for (should not include the protocol).",
      },
      {
        key: "domain",
        type: "string",
        value: "",
        placeholder: "mit.edu",
        editable: true,
        active: false,
        description: "The domain (website url) of university (should not include the protocol).",
      },
    ],
  },
];
</script>

<template>
  <div class="bg-gray-100 rounded-md max-w-5xl p-2">
    <header class="border-b border-purple-700">
      <nav class="flex pb-4">
        <ul role="list" class="flex min-w-full flex-none gap-x-6 font-semibold leading-6 text-xs">
          <li class="flex items-center gap-2 cursor-pointer hover:text-primary-500"><UIcon name="i-heroicons-key" class="h-5 w-5" />API</li>
          <li class="flex items-center gap-2 cursor-pointer hover:text-primary-500"><UIcon name="i-heroicons-document-text" class="h-5 w-5" />Documentation</li>
          <li class="flex items-center gap-2 cursor-pointer text-primary-500"><UIcon name="i-heroicons-sparkles" class="h-5 w-5" />Playground</li>
        </ul>
      </nav>
    </header>

    <div class="grid md:grid-cols-7 md:divide-x md:divide-gray-300 gap-2 mt-2">
      <nav class="hidden md:flex flex-col gap-y-2">
        <ul class="space-y-1">
          <li v-for="(endpoint, index) of endpoints" :key="index">
            <button :class="[endpoint.active ? 'bg-gray-300 ' : '', 'group flex items-center text-xs rounded-md hover:bg-gray-300 p-1.5 w-full']">
              <p class="font-semibold text-start">{{ endpoint.name }}</p>
            </button>
          </li>
        </ul>
      </nav>

      <div class="md:col-span-6 px-2 space-y-4 md:space-y-8">
        <header class="flex items-center gap-4 w-full">
          <span class="text-gray-500 text-xs px-2 py-1.5 ring-1 ring-inset ring-primary-300 rounded-md w-full flex gap-4 overflow-x-auto">
            <span class="text-rose-400">{{ endpoints[selected]?.method }}</span
            >https://api.prod.thewebco.ai{{ endpoints[selected]?.url }}
          </span>
          <UButton label="Send" />
        </header>

        <div class="flex flex-col-reverse md:flex-row gap-4">
          <div class="md:w-1/2 lg:w-1/3 space-y-4 md:space-y-8">
            <div>
              <h2 class="mb-1 text-sm">Headers</h2>
              <div class="space-y-3">
                <div class="flex items-center gap-2" v-for="(header, index) of endpoints[selected]?.headers" :key="index">
                  <UCheckbox v-model="header.active" color="primary" :disabled="!header.editable" />
                  <div class="flex-1"><UInput color="white" variant="outline" size="xs" disabled v-model="header.key" /></div>
                  <div class="flex-1">
                    <UInput color="white" variant="outline" size="xs" :disabled="!header.editable" v-model="header.value" />
                  </div>
                </div>
              </div>
            </div>

            <div v-if="endpoints[selected]?.queries.length">
              <h2 class="mb-1 text-sm">Query params</h2>
              <div class="space-y-3">
                <div class="flex items-center gap-2" v-for="(query, index) of endpoints[selected]?.queries" :key="index">
                  <UCheckbox v-model="query.active" color="primary" :disabled="!query.editable" />
                  <div class="flex-1"><UInput color="white" variant="outline" size="xs" disabled v-model="query.key" /></div>
                  <div class="flex-1">
                    <UInput
                      color="white"
                      variant="outline"
                      size="xs"
                      :placeholder="String(query.placeholder)"
                      :disabled="!query.editable"
                      v-model="query.value"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-2/3 space-y-4">
            <div class="text-gray-600 bg-gray-200 rounded-md">
              <div class="bg-gray-300 flex justify-between items-center p-2 rounded-t-md">
                <h4 class="text-sm">Request</h4>
                <UButton icon="i-heroicons-clipboard" size="sm" color="primary" square variant="solid" />
              </div>
              <div class="p-2">
                <pre class="whitespace-pre-wrap text-xs">
curl --request GET \ 
  --url https://api.thewebco.ai/gatekeeper/search/by
  --header 'Content-Type: application/json' \ 
  --header 'api-key: ba376422-02e3-93f0ec7566d6'
                </pre>
              </div>
            </div>

            <div class="hidden md:block text-gray-600 bg-gray-200 rounded-md">
              <div class="bg-gray-300 flex justify-between items-center p-2 rounded-t-md">
                <h4 class="text-sm py-2">Response</h4>
              </div>
              <div>
                <div class="flex flex-col justify-center items-center gap-2 h-60 text-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
