<template>
    <button :class="`inline-grid grid-flow-col items-center justify-center gap-2 w-full ${wFull ? 'max-w-auto': 'max-w-[273px]'} h-[56px] rounded-xl bg-black text-white text-center`">
        <NuxtImg v-if="icon" :width="iconSize.width" :height="iconSize.height" :src="`icons/${icon}.svg`" :alt="`${icon} icon`" />
        {{ title }}
    </button>
</template>

<script setup>
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
        type: String
    },
    iconSize: {
        type: Object,
        default: {
            height: 24,
            width: 24
        }
    },
    variant: {
        type: String, // TODO: make 'primaru' | 'secondary' without error
        default: 'primary'
    }
})
</script>

<style lang="scss" scoped>

</style>