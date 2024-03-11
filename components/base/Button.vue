<template>
  <button
    :class="[`inline-grid grid-flow-col items-center justify-center gap-2 w-full font-bold text-base leading-[19.2px] h-[56px] rounded-xl text-center bg`,
             `${variant ? `btn-${variant}` : 'btn'}`, {wFull:'w-full max-w-auto'}, {'btn-disabled': disabled}]"
  >
    <NuxtImg
      v-if="icon"
      :width="iconSize.width"
      :height="iconSize.height"
      :src="`${currentPageName}/icons/${icon}.svg`"
      :alt="`${icon} icon`"
    />
    {{ title }}
  </button>
</template>

<script setup lang="ts">
const instace = getCurrentInstance();
const testedPage = useCookie('tested-page')
const currentPageName = instace!.parent?.type.__name ? instace!.parent?.type.__name : testedPage ? testedPage : 'APage'

const {variant} = defineProps({
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
    disabled: {
      type: Boolean,
      default: false
    },
    variant: {
        type: String, // 'primary' | 'secondary' | 'casper' | 'warning',
        default: ''
    }
})

</script>
