<template>
  <button
    :class="`inline-grid grid-flow-col items-center justify-center gap-2 w-full font-bold text-base leading-[19.2px]
    ${wFull ? 'max-w-auto': ''} 
    ${disabled && 'bg-slate-300 pointer-events-none'}
    h-[56px] rounded-xl  text-center ${variantStyles()}`"
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
        type: String, // 'primary' | 'secondary' | 'casper',
        default: 'primary'
    }
})

const variantStyles = () => {
  if (variant === 'primary') {
    return 'bg-black text-white'
  }
  if (variant === 'secondary') {
    return 'border'
  }
  if (variant === 'casper') {
    return 'border-[1px] bg-white text-[#01c120]'
  }
}
</script>
