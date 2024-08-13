import { defineNuxtPlugin } from "#app";
import { TheWebCo } from "@thewebco/pid";

export default defineNuxtPlugin((nuxtApp) => {
  const thewebcoClient = new TheWebCo("14ada8cb-136b-442d-91ce-7330c6d5ebbd");

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.afterEach(() => nextTick(() => thewebcoClient.logEvent()));
  return { provide: { thewebco: () => thewebcoClient } };
});
