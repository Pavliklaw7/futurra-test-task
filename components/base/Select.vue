<template>
  <div
    class="base-select relative w-full mt-[7px] text-left outline-none h-[46px] leading-[46px] font-bold"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <label :class="`base-select__label text-label absolute top-0 translate-y-[-50%] px-[5px] leading-3 text-xs left-[12.15px] text-black bg-white`">{{ label }}</label>
    <div
      :class="`base-select__select flex items-center text-xs font-normal h-full bg-white border-[1px] rounded-md  pl-4 cursor-pointer select-none pr-6 truncate ${open && 'open'}`"
      @click="open = !open"
    >
      {{ selected }}
    </div>

    <IconArrow class="absolute top-1/2 right-[14.53px] -translate-y-[50%]" />

    <div :class="`base-select__dropdown absolute left-0 right-0 max-h-[192px] overflow-scroll z-10 text-[#6C727F] rounded-t-none rounded-b-md border-[1px] ${!open && 'hidden'}`">
      <div
        v-for="(option, i) of options"
        :key="i"
        :class="`base-select__option text-xs font-normal px-[16px] py-[8.5px] bg-white relative border-b-[1px] pl-2 cursor-pointer select-none hover:bg-[#00CA14] hover:text-white`"
        @click="
          selected = String(option);
          open = false;
          $emit('update:modelValue', String(option));
        "
      >
        {{ option }}
        <IconCheck
          v-if="selected === String(option)"
          class="absolute top-1/2 right-2 -translate-y-[50%]"
        />
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const instace = getCurrentInstance();
const testedPage = useCookie('tested-page')
const currentPageName = instace!.parent?.type.__name ? instace!.parent?.type.__name : testedPage ? testedPage : 'APage'

const {defaultSelected, options} = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  options: {
      type: Array<string|number>,
      required: true,
    },
    defaultSelected: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  })
const selected = ref(defaultSelected
          ? defaultSelected
          : 'Select');
const open = ref(false)

defineEmits<{
  'update:modelValue': [value: string];
}>();

  </script>
  
  