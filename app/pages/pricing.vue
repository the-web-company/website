<script setup lang="ts">
import DlCta from "@/components/DlCta.vue";

definePageMeta({ title: "Pricing" });
const localState = reactive({
  requests: 0,
  identity: false,
  showPricingTable: false,
});

const pricingTable = [
  { label: "0-1K", eventPrice: "Free - every month!" },
  { label: "1K-500K", eventPrice: 0.0015 },
  { label: "500K-2M", eventPrice: 0.001 },
  { label: "2M-10M", eventPrice: 0.0005 },
  { label: "10M-50M", eventPrice: 0.00025 },
  { label: "50M-100M", eventPrice: 0.00018 },
  { label: "100M+", eventPrice: "Contact us" },
];

const formatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 });

const currentPrices = computed(() => {
  let totalPrice = 0;
  if (localState.requests < 1000) {
    totalPrice = localState.requests * 0;
  } else if (localState.requests < 500000) {
    totalPrice = localState.requests * Number(pricingTable[1]?.eventPrice);
  } else if (localState.requests < 2000000) {
    totalPrice = localState.requests * Number(pricingTable[2]?.eventPrice);
  } else if (localState.requests < 10000000) {
    totalPrice = localState.requests * Number(pricingTable[3]?.eventPrice);
  } else if (localState.requests < 50000000) {
    totalPrice = localState.requests * Number(pricingTable[4]?.eventPrice);
  } else if (localState.requests < 100000000) {
    totalPrice = localState.requests * Number(pricingTable[5]?.eventPrice);
  } else {
    return pricingTable[6]?.eventPrice;
  }

  if (localState.identity) {
    return totalPrice * 1.25;
  }

  return totalPrice;
});
</script>

<template>
  <div class="max-w-screen-2xl mx-auto px-4 3xl:px-0 py-10 xl:py-14">
    <h2 class="text-3xl sm:text-4xl xl:text-5xl text-center mb-10">Choose the right plan for you</h2>

    <div class="grid lg:grid-cols-12 max-w-screen-2xl rounded-md ring-1 ring-gray-300 mx-auto">
      <div class="p-8 lg:col-span-9">
        <div class="hidden sm:flex flex-col gap-4">
          <div>
            <div class="flex items-center gap-4">
              <p class="text-gray-500">Requests</p>
              <URange size="sm" :min="0" :step="1000" :max="100000000" v-model="localState.requests" />
              <UInput v-model="localState.requests" placeholder="Number of monthly req" type="number"> </UInput>
            </div>
            <UButton
              :label="localState.showPricingTable ? 'Hide pricing table' : 'Show pricing table'"
              variant="link"
              :padded="false"
              size="xs"
              @click="localState.showPricingTable = !localState.showPricingTable"
            />

            <div v-if="localState.showPricingTable" class="grid grid-cols-2 pl-4">
              <div>
                <div v-for="(item, index) of pricingTable" :key="index" class="flex justify-between border-b border-gray-300 py-2 text-sm">
                  <span>{{ item.label }}</span>
                  <span class="text-gray-500"
                    ><span v-if="index != 0 && index != pricingTable.length - 1">$</span><strong>{{ item.eventPrice }}</strong
                    ><span v-if="index != 0 && index != pricingTable.length - 1">/req</span></span
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between items-center">
            <p class="text-gray-500">Identity add on</p>
            <UToggle v-model="localState.identity" />
          </div>
        </div>

        <!-- <div class="sm:hidden flex items-center gap-4 mt-6">
          <span class="flex rounded-md ring-1 ring-gray-300 items-center text-xl">
            <UButton class="flex items-center px-2 py-3 sm:px-3 sm:py-4" color="gray" variant="ghost" @click="credits > 50 ? (credits -= 50) : credits"
              ><UIcon name="i-heroicons-minus"
            /></UButton>
            <p class="p-1 sm:p-2 w-10 flex justify-center text-sm md:text-base">{{ credits + 50 < 550 ? credits + 50 : "500+" }}</p>
            <UButton class="flex items-center px-2 py-3 sm:px-3 sm:py-4" color="gray" variant="ghost" @click="credits < 500 ? (credits += 50) : credits"
              ><UIcon name="i-heroicons-plus"
            /></UButton>
          </span>

          <p class="text-sm sm:text-base font-medium">
            Credits package<span class="hidden sm:block text-gray-500 text-xs font-normal"> (50 credits in a package, unlimited searchs)</span>
          </p>
        </div> -->

        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="text-sm font-semibold text-primary-500">What’s included</h4>
          <div class="h-px flex-auto bg-gray-300"></div>
        </div>
        <ul role="list" class="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-gray-500">
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />De-anonymize visitors</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />Form shortening</li>
          <li class="flex gap-x-3">
            <UIcon name="i-heroicons-check" class="w-7 h-6 text-primary-500" />Search and see reports for people, companies, and schools
          </li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />Create and manage lists</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />Export lists and individual reports</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />CRM & calendar integrations</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />Pre-meeting intelligence report</li>
          <li class="flex gap-x-3"><UIcon name="i-heroicons-check" class="w-5 h-6 text-primary-500" />Chrome extension access</li>
        </ul>
      </div>

      <div class="lg:col-span-3 rounded-r-md bg-gray-100 flex flex-col justify-around items-center gap-4 px-8 space-y-4 lg:space-y-0 py-8 lg:py-0">
        <div>
          <p class="flex items-end justify-center gap-x-2">
            <span class="text-4xl font-bold tracking-tight">{{
              currentPrices == "Contact us" ? currentPrices : `${formatter.format(Number(currentPrices))}`
            }}</span>
          </p>
        </div>
        <UButton label="Get access" to="https://app.thewebco.ai/auth/register" target="_blank" block />
      </div>
    </div>

    <div class="lg:grid lg:grid-cols-3 lg:gap-8 mt-32">
      <div>
        <h2 class="text-3xl">Frequently asked questions</h2>
        <p class="mt-4 text-lg text-gray-500">
          Can’t find the answer you’re looking for?<br />Reach out to our
          <a href="/contact" class="font-medium text-primary-500 hover:text-primary-600">customer support</a> team.
        </p>
      </div>
      <div class="mt-12 lg:mt-0 lg:col-span-2">
        <dl class="space-y-12 max-w-5xl">
          <div>
            <dt class="text-lg leading-6 font-medium">What are credits?</dt>
            <dd class="sm:mt-2 text-base text-gray-500">
              1 credit = 1 entity (person/company/school) report page.<br />You can search unlimited number of times, once you enter to a person/company/school
              specific page (report page), you have used one credit. A credit entitles you to all the information we have for that entity.
            </dd>
          </div>
          <div>
            <dt class="text-lg leading-6 font-medium">Are you GDPR and CCPA compliant?</dt>
            <dd class="sm:mt-2 text-base text-gray-500">
              Yes, we are. TheWebCo is CCPA compliant and GDPR aligned, according to all laws and regulations. We only retain data for the duration necessary to
              provide our services and only use public and open sources on the internet.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">When I sign-up, do I commit to something?</dt>
            <dd class="sm:mt-2 text-base text-gray-500">
              No, you're not. When you sign-up, you get free credits to evaluate us, you are not committing to using our service, and you don't even need to
              enter a credit card for this period. You can stop using our service anytime, and you only pay for what you use.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">Can I install your AI engine on my server?</dt>
            <dd class="sm:mt-2 text-base text-gray-500">
              No, we only offer a SAAS model. You can use our platform on any web browser you want, plugin our service to your CRM, or integrate our API.
            </dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">Can I use a couple of your offerings simultaneously?</dt>
            <dd class="sm:mt-2 text-base text-gray-500">Yes, you are. Use our platform, CRM plugins, and API all at the same time.</dd>
          </div>

          <div>
            <dt class="text-lg leading-6 font-medium">Is anyone been notified when I am searching for them?</dt>
            <dd class="sm:mt-2 text-base text-gray-500">All of TheWebCo's reports are confidential. The person you are searching for is not notified.</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="mt-32">
      <ClientOnly><DlCta /></ClientOnly>
    </div>
  </div>
</template>
