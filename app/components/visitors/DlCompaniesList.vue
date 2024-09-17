<template>
  <UCard>
    <div class="h-full flex flex-col">
      <h2 class="font-medium text-lg">Companies</h2>

      <div class="flex justify-between items-center">
        <div class="flex w-1/2 mt-2">
          <UInput placeholder="Filter company..." class="w-full" />
        </div>
      </div>

      <div class="mt-2 divide-y divide-gray-300 flex flex-col">
        <div class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar src="/companies/apple.webp" alt="Apple logo" loading="lazy" />
            <div class="flex flex-col justify-around">
              <h3>Apple</h3>
              <p class="text-gray-500 text-sm">A diverse collective of thinkers and doers, continually reimagining what’s possi...</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>442 visits</p>
              <p>182 visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" aria-label="to Apple profile" />
            </div>
          </div>
        </div>

        <div class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar src="/companies/tesla.webp" alt="Tesla logo" loading="lazy" />
            <div class="flex flex-col justify-around">
              <h3>Tesla</h3>
              <p class="text-gray-500 text-sm">To accelerate the advent of sustainable transport</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>371 visits</p>
              <p>138 visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" aria-label="to Tesla profile" />
            </div>
          </div>
        </div>

        <div class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar src="/companies/google.webp" alt="Google logo" loading="lazy" />
            <div class="flex flex-col justify-around">
              <h3>Google</h3>
              <p class="text-gray-500 text-sm">Organizing the world's information</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>326 visits</p>
              <p>92 visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" aria-label="to Google profile" />
            </div>
          </div>
        </div>

        <div class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar src="/companies/microsoft.webp" alt="Microsoft logo" loading="lazy" />
            <div class="flex flex-col justify-around">
              <h3>Microsoft</h3>
              <p class="text-gray-500 text-sm">We're on a mission to empower every person and every organization on the planet...</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>231 visits</p>
              <p>43 visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" aria-label="to Microsoft profile" />
            </div>
          </div>
        </div>

        <div class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar src="/companies/openai.webp" alt="OpenAI logo" loading="lazy" />
            <div class="flex flex-col justify-around">
              <h3>OpenAI</h3>
              <p class="text-gray-500 text-sm">OpenAI’s mission is to ensure that artificial general intelligence benefits all...</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>229 visits</p>
              <p>37 visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" aria-label="to OpenAI profile" />
            </div>
          </div>
        </div>

        <div class="flex justify-between p-2 hover:bg-gray-50 cursor-pointer">
          <div class="flex items-center gap-4">
            <UAvatar src="/companies/monday-com.webp" alt="Monday.com logo" loading="lazy" />
            <div class="flex flex-col justify-around">
              <h3>Monday.com</h3>
              <p class="text-gray-500 text-sm">Your go-to work platform</p>
            </div>
          </div>

          <div class="flex items-center gap-4 text-gray-500">
            <div class="flex flex-col justify-around text-sm">
              <p>193 visits</p>
              <p>32 visitors</p>
            </div>

            <div class="z-10">
              <UButton variant="ghost" squere trailing-icon="i-heroicons-briefcase" aria-label="to Monday.com profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
