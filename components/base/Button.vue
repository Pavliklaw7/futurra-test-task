<template>
  <button
    :class="`inline-grid grid-flow-col items-center justify-center gap-2 w-full 
    ${wFull ? 'max-w-auto': ''} h-[56px] rounded-xl bg-black text-white text-center`"
  >
    <NuxtImg
      v-if="icon"
      :width="iconSize.width"
      :height="iconSize.height"
      :src="`${route.name}/icons/${icon}.svg`"
      :alt="`${icon} icon`"
    />
    {{ title }}
  </button>
</template>

<script setup>
const route = useRoute()

defineProps({
    title: {
        type: String,
        required: true
    }, 
    wFull: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    },
    iconSize: {
        type: Object,
        // eslint-disable-next-line vue/require-valid-default-prop
        default: {
            height: 24,
            width: 24
        }
    },
    variant: {
        type: String, // 'primary' | 'secondary' | 'casper',
        default: 'primary'
    }
})

</script>

<style lang="scss" scoped>

</style>