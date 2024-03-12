<template>
  <div class="base-input relative mt-[7px]">
    <label
      for="card-number"
      :class="`base-input__label font-semibold absolute text-xs top-0 translate-y-[-50%] px-[5px] bg-white left-[12.15px] rounded-full`"
    >{{ label }}</label>
    <NuxtImg
      v-if="icon"
      class="absolute top-1/2 right-3 -translate-y-1/2"
      :width="iconSize.width"
      :height="iconSize.height"
      :src="`${currentPageName}/icons/${icon}.svg`"
      :alt="`${icon} icon`"
    />
    <input
      v-model="modelValue"
      type="text"
      name="card-number"
      :class="`base-input__input px-4 block w-full rounded-md bg-white border-0 h-[46px] ring-gray-300 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-gray-900 ${icon ? 'pr-20' : 'pr-7'} text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${hideBorder && 'hideBorder'}`"
      :placeholder="placeholder"
      :maxlength="maxLength"
      @input="handleInput"
    >
  </div>
</template>

<script setup lang="ts">
const instace = getCurrentInstance();
const testedPage = useCookie('tested-page')
const currentPageName = instace!.parent?.type.__name ? instace!.parent?.type.__name : testedPage ? testedPage : 'APage'

const modelValue = ref('')
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
    hideBorder: {
        type: Boolean,
        defaule: false
    },
    isCreditCard: Boolean,
    onlyNumbers: Boolean,
    onlyLetters: Boolean
})
      
const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    
    if (onlyNumbers) {
        target.value = modelValue.value.replace(/\D/g, "");
    }
    if (onlyLetters) {
        target.value = target.value.replace(/[^a-z A-Z]/g, '');
    }
    if (isCreditCard) {
        target.value = applyCreditCardMask(target.value)
    }

    modelValue.value = target.value;

    emit('update:modelValue', target.value.trim());
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