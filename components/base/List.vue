<template>
  <ul
    class="hidden md:grid justify-start mb-6 marker:pb-2"
    role="list"
  >
    <li
      v-for="item in items"
      :key="item"
      class="inline-grid grid-cols-[24px_1fr] gap-x-[10px] items-center mb-4"
    >
      <NuxtImg
        class="w-full"
        :src="`${String(route.name)}/icons/star.svg`"
        alt="star"
      />
      <p v-html="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const route = useRoute()

defineProps({
    items: {
        type: Array<string>,
        default: []
    }
})
</script>

<style scoped>

</style>