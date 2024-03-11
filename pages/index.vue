<template>
  <component :is="dynamicPage" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const router = useRouter();

const dynamicPage = shallowRef({});

const testedPage = useCookie('tested-page')

onMounted(() => {
  const query = router.currentRoute.value.query;

  if (query.abtest === 'test') {
    getRandomInitialPage()
  } else {
    dynamicPage.value = defineAsyncComponent(() => import('@/pages/APage.vue'));
    return
  }

  if (testedPage.value) {
    if (testedPage.value === 'APage') {
      dynamicPage.value = defineAsyncComponent(() => import(`@/pages/APage.vue`));
    } else {
      dynamicPage.value = defineAsyncComponent(() => import(`@/pages/BPage.vue`));
    }
  } 
})

const getRandomInitialPage = () => {
  const randomBool = Math.random() < 0.5;

  if (testedPage.value) return 

  if (randomBool) {
    dynamicPage.value = defineAsyncComponent(() => import(`@/pages/BPage.vue`));
    testedPage.value = 'BPage';
  } else {
    dynamicPage.value = defineAsyncComponent(() => import('@/pages/APage.vue'));
    testedPage.value = 'APage';
  }
}
</script> 
