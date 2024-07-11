<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";

definePageMeta({ title: "Pricing" });
const yearlyCost = ref(true);
const credits = ref(50);
const seats = ref(1);

const currentPrices = computed(() => {
  const creditPackagePrice = 25;
  const totalCredits = (credits.value / 50 + 1) * creditPackagePrice;
  const totalSeats = (seats.value - 1) * 50;

  if (credits.value >= 500 || seats.value > 10) {
    return "Talk to us";
  }

  return yearlyCost.value ? (totalCredits + totalSeats) * 0.8 : totalCredits + totalSeats;
});
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14">
    <h2 class="text-3xl sm:text-4xl xl:text-5xl text-center mb-10">Choose the right plan for you</h2>

    <div class="grid lg:grid-cols-12 max-w-screen-2xl rounded-md ring-1 ring-neutral-200 mx-auto">
      <div class="p-8 lg:col-span-9">
        <div class="flex justify-between items-center">
          <h3 class="text-2xl">Platform</h3>
          <span class="flex gap-2 text-sm sm:text-base">
            <UToggle color="primary" v-model="yearlyCost" />
            <p>Yearly</p>
          </span>
        </div>

        <div class="hidden sm:flex items-center gap-4 mt-6">
          <p class="text-neutral-500 -mt-6">Credits</p>
          <div class="w-full">
            <URange size="sm" :min="0" :max="500" :step="50" v-model="credits" />
            <div class="flex justify-between -translate-x-1">
              <span>50</span>
              <span class="translate-x-2">100</span>
              <span class="translate-x-3">150</span>
              <span class="translate-x-4">200</span>
              <span class="translate-x-5">250</span>
              <span class="translate-x-5">300</span>
              <span class="translate-x-5">350</span>
              <span class="translate-x-5">400</span>
              <span class="translate-x-5">450</span>
              <span class="translate-x-6">500</span>
              <span class="translate-x-5">500+</span>
            </div>
          </div>
        </div>

        <div class="hidden sm:flex items-center gap-8 mt-6">
          <p class="text-neutral-500 -mt-6">Seats</p>
          <div class="w-full">
            <URange size="sm" :min="1" :max="11" :step="1" v-model="seats" />
            <div class="flex justify-between -translate-x-1">
              <span class="translate-x-2">1</span>
              <span class="translate-x-3">2</span>
              <span class="translate-x-3">3</span>
              <span class="translate-x-3">4</span>
              <span class="translate-x-4">5</span>
              <span class="translate-x-4">6</span>
              <span class="translate-x-5">7</span>
              <span class="translate-x-5">8</span>
              <span class="translate-x-5">9</span>
              <span class="translate-x-5">10</span>
              <span class="translate-x-5">10+</span>
            </div>
          </div>
        </div>

        <div class="sm:hidden flex items-center gap-4 mt-6">
          <span class="flex rounded-md ring-1 ring-neutral-200 items-center text-xl">
            <UButton class="flex items-center px-2 py-3 sm:px-3 sm:py-4" color="gray" variant="ghost" @click="credits > 50 ? (credits -= 50) : credits"
              ><UIcon name="i-heroicons-minus"
            /></UButton>
            <p class="p-1 sm:p-2 text-neutral-900 w-10 flex justify-center text-sm md:text-base">{{ credits + 50 < 550 ? credits + 50 : "500+" }}</p>
            <UButton class="flex items-center px-2 py-3 sm:px-3 sm:py-4" color="gray" variant="ghost" @click="credits < 500 ? (credits += 50) : credits"
              ><UIcon name="i-heroicons-plus"
            /></UButton>
          </span>

          <p class="text-sm sm:text-base font-medium">
            Credits package<span class="hidden sm:block text-neutral-500 text-xs font-normal"> (50 credits in a package, unlimited searchs)</span>
          </p>
        </div>

        <div class="sm:hidden flex items-center gap-4 mt-6">
          <span class="flex rounded-md ring-1 ring-neutral-200 items-center text-xl">
            <UButton class="flex items-center px-2 py-3 sm:px-3 sm:py-4" color="gray" variant="ghost" @click="seats > 1 ? (seats -= 1) : seats"
              ><UIcon name="i-heroicons-minus"
            /></UButton>
            <p class="p-1 sm:p-2 text-neutral-900 w-10 flex justify-center text-sm md:text-base">{{ seats < 11 ? seats : "10+" }}</p>
            <UButton class="flex items-center px-2 py-3 sm:px-3 sm:py-4" color="gray" variant="ghost" @click="seats < 11 ? (seats += 1) : seats"
              ><UIcon name="i-heroicons-plus"
            /></UButton>
          </span>

          <p class="text-sm sm:text-base font-medium">Seats</p>
        </div>

        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="text-sm font-semibold text-violet-500">What’s included</h4>
          <div class="h-px flex-auto bg-neutral-200"></div>
        </div>
        <ul role="list" class="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-neutral-500">
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />De-anonymize visitors</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />Form shortening</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-7 h-6" />Search and see reports for people, companies, and schools</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />Create and manage lists</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />Export lists and individual reports</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />CRM & calendar integrations</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />Pre-meeting intelligence report</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6" />Chrome extension access</li>
        </ul>
      </div>

      <div class="lg:col-span-3 rounded-r-md bg-neutral-100 flex flex-col justify-around items-center gap-4 px-8 space-y-4 lg:space-y-0 py-8 lg:py-0">
        <p class="text-neutral-500">Builld {{ yearlyCost ? "Yearly" : "Monthly" }}</p>
        <div>
          <p class="flex items-end justify-center gap-x-2">
            <span class="text-4xl font-bold tracking-tight">{{ currentPrices == "Talk to us" ? currentPrices : `$${currentPrices}` }}</span>
            <span class="text-sm font-semibold leading-6 tracking-wide text-neutral-500" v-if="currentPrices != 'Talk to us'"
              >USD {{ yearlyCost ? "(20% off)" : "" }}</span
            >
          </p>
          <UButton color="primary" variant="link" @click="() => (yearlyCost = true)" v-if="!yearlyCost" label="Switch to yearly billing and save 20%" />
        </div>
        <UButton label="Get access" to="https://app.thewebco.ai/auth/register" target="_blank" block />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-8 mt-32">
      <div>
        <h2 class="text-3xl">Frequently asked questions</h2>
        <p class="mt-4 text-lg text-neutral-500">
          Can’t find the answer you’re looking for?<br />Reach out to our
          <a href="/contact" class="font-medium text-primary-500 hover:text-primary-600">customer support</a> team.
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-12 max-w-5xl">
          <div>
            <dt class="text-lg leading-6 font-medium">What are credits?</dt>
            <dd class="sm:mt-2 text-base text-neutral-500">
              1 credit = 1 entity (person/company/school) report page.<br />You can search unlimited number of times, once you enter to a person/company/school
              specific page (report page), you have used one credit. A credit entitles you to all the information we have for that entity.
            </dd>
          </div>
          <div>
            <dt class="text-lg leading-6 font-medium">Are you GDPR and CCPA compliant?</dt>
            <dd class="sm:mt-2 text-base text-neutral-500">
              Yes, we are. TheWebCo is CCPA compliant and GDPR aligned, according to all laws and regulations. We only retain data for the duration necessary to
              provide our services and only use public and open sources on the internet.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">When I sign-up, do I commit to something?</dt>
            <dd class="sm:mt-2 text-base text-neutral-500">
              No, you're not. When you sign-up, you get free credits to evaluate us, you are not committing to using our service, and you don't even need to
              enter a credit card for this period. You can stop using our service anytime, and you only pay for what you use.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">Can I install your AI engine on my server?</dt>
            <dd class="sm:mt-2 text-base text-neutral-500">
              No, we only offer a SAAS model. You can use our platform on any web browser you want, plugin our service to your CRM, or integrate our API.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">Can I use a couple of your offerings simultaneously?</dt>
            <dd class="sm:mt-2 text-base text-neutral-500">Yes, you are. Use our platform, CRM plugins, and API all at the same time.</dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">Is anyone been notified when I am searching for them?</dt>
            <dd class="sm:mt-2 text-base text-neutral-500">All of TheWebCo's reports are confidential. The person you are searching for is not notified.</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="mt-32">
      <ClientOnly><DlCta /></ClientOnly>
    </div>
  </div>
</template>
