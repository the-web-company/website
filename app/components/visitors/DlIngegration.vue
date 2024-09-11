<template>
  <UCard>
    <UBreadcrumb
      :links="[
        { label: 'Add domain', icon: 'i-heroicons-square-3-stack-3d' },
        { label: 'Script installation', icon: 'i-heroicons-square-3-stack-3d' },
      ]"
      :ui="{ ol: 'gap-x-3', li: 'gap-x-3' }"
    >
      <template #divider>
        <span class="w-8 h-1 rounded-full bg-purple-200" />
      </template>
    </UBreadcrumb>

    <p class="mt-4 text-sm lg:text-base">Add this snippet to your website html to identify your anonymous web traffic and track events in TheWebCo.</p>
    <code class="relative break-all mt-2 rounded-md p-2 ring-1 ring-purple-300 text-sm lg:text-base">
      &lt;script type="text/javascript" src="//thewebcoscripts.com/becon/v1.js"&gt;&lt;/script&gt;
      <div class="top-2 right-2 absolute text-purple-500 cursor-pointer bg-purple-100 hover:bg-purple-200 p-1 w-fit flex justify-center items-start rounded-md">
        <UIcon name="i-heroicons-clipboard" />
      </div>
    </code>
    <div class="flex gap-1 items-center mt-1 text-xs lg:text-sm">
      <UIcon name="i-heroicons-question-mark-circle" />
      <p>Copy the code snippet and paste it in your website code above the <UBadge label="</head>" size="xs" /> tag.</p>
    </div>

    <div class="flex justify-end mt-4"><UButton label="Test integration" /></div>
  </UCard>
</template>
