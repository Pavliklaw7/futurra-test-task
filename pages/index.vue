<template>
  <component :is="dynamicPage" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const router = useRouter();

const dynamicPage = shallowRef({});

onMounted(() => {
  const query = router.currentRoute.value.query;

  if (query.abtest === 'test') {
    getRandomInitialPage()
    // TODO: save to storage random a or b page
  } else {
    dynamicPage.value = defineAsyncComponent(() => import('@/pages/APage.vue'));
  }
})

const getRandomInitialPage = () => {
  const randomBool = Math.random() < 0.5;

  if (randomBool) {
    dynamicPage.value = defineAsyncComponent(() => import(`@/pages/BPage.vue`));
  } else {
    dynamicPage.value = defineAsyncComponent(() => import('@/pages/APage.vue'));
  }
}
</script>
