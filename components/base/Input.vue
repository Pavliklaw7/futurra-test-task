<template>
  <div class="relative">
    <label
      for="card-number"
      class="absolute top-0 translate-y-[-50%] px-[5px] left-[12.15px] bg-white"
    >{{ label }}</label>
    <NuxtImg
      v-if="icon"
      class="absolute top-1/2 right-3 -translate-y-1/2"
      :width="iconSize.width"
      :height="iconSize.height"
      :src="`${String(route.name)}/icons/${icon}.svg`"
      :alt="`${icon} icon`"
    />
    <input
      v-model="value"
      type="text"
      name="card-number"
      :class="`block w-full rounded-md border-0 h-[46px] pl-7 ${icon ? 'pr-20' : 'pr-7'} text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @input="handleInput"
    >
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const value = ref('')

const {
    isCreditCard,
    onlyNumbers,
    onlyLetters
} = defineProps({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
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
    maxLength: {
        type: Number,
        default: 1000
    },
    isCreditCard: Boolean,
    onlyNumbers: Boolean,
    onlyLetters: Boolean
})
      

const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;

    if (onlyNumbers) {
        target.value = value.value.replace(/\D/g, "");
    }
    if (onlyLetters) {
        target.value = target.value.replace(/[^a-z A-Z]/g, '');
    }
    if (isCreditCard) {
        target.value = applyCreditCardMask(target.value)
    }

    value.value = target.value;

   // this.$emit('input', target.value.trim());

}

const applyCreditCardMask = (value: string) => {
    return value
    .replace(/(.{4})/g, "$1 ")
    .trim()
    .slice(0, 19);
}
</script>

<style scoped>


</style>