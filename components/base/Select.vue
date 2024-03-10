<template>
  <div
    class="relative w-full text-left outline-none h-[46px] leading-[46px]"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      :class="`bg-white rounded-md ring-1 ring-inset ring-gray-300 pl-4 cursor-pointer select-none 
      ${open && 'border-[#00CA14]} rounded-b-none'} after:absolute after:content-[url(~/${String(route.name)}/assets/icons/arrow-down.svg)] after:top-1/2 after:right-[14.53px] after:-translate-y-[50%]`"
      @click="open = !open"
    >
      {{ selected }}
    </div>


    <div :class="`absolute left-0 right-0 max-h-[192px] z-10 text-[#6C727F] rounded-t-none rounded-b-md overflow-hidden border-[1px] border-[#6C727F] ${!open && 'hidden'}`">
      <div
        v-for="(option, i) of options"
        :key="i"
        class="text-[#6C727F] bg-white pl-2 cursor-pointer select-none hover:bg-[#00CA14] hover:text-white"
        @click="
          selected = String(option);
          open = false;
          $emit('input', option);
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
const route = useRoute()

 const {defaultSelected, options} = defineProps({
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

//   onMounted(() => {
//     this.$emit("input", selected.value);
//   })
  </script>
  
  <style scoped>

  </style>
  