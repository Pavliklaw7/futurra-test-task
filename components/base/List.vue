<template>
  <ul
    class="grid justify-start mb-6 marker:pb-2 marker:text-xxl"
    role="list"
  >
    <li
      v-for="item in items"
      :key="item"
      class="inline-grid grid-cols-[24px_1fr] gap-x-[10px] items-center mb-4"
    >
      <NuxtImg
        class="w-full"
        :src="`${currentPageName}/icons/star.svg`"
        alt="star"
      />
      <p v-html="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const instace = getCurrentInstance();
const currentPageName = instace!.parent?.type.__name!

defineProps({
    items: {
        type: Array<string>,
        default: []
    }
})
</script>
