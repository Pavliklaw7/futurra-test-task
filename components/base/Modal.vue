<template>
  <transition name="modal">
    <div
      v-show="isModalOpen"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-black bg-opacity-20 transition-opacity" />
        
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div class="grid grid-cols-1 justify-items-center relative pt-6 pb-4 px-4 transform rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[400px]">
            <h5 class="text-center mb-6">
              Payment method
            </h5>

            <BaseButton
              class="mb-4"
              title="Buy now"
              icon="paypal"
              w-full
              :icon-size="{height: 14, width: 50}"
            />

            <BaseButton
              class="mb-4"
              title="PAY"
              icon="googlepay"
              w-full
            />

            <div class="flex items-center gap-2">
              <span class="flex-grow bg-slate-400 h-[1px]" />
              OR
              <span class="flex-grow bg-slate-400 h-[1px]" />
            </div>

            <CreditCardForm class="mb-[30px]" />

            <BaseButton
              class="mb-3 max-w-[300px]"
              title="Submit"
            />

            <BaseButton
              class="max-w-[300px]"
              title="close"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const modal = ref(null);

const emit = defineEmits(['close']);

onClickOutside(modal, () => emit('close'));

const onClose = () => {
  emit('close');
};

defineProps({
  title: {
    type: String,
    default: 'Modal title'
  },
  test: {
    type: String,
    default: 'Modal text'
  },
  isModalOpen: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  }
});
</script>

<style lang="scss" scoped>
.modal-active-enter,
.modal-leave-active {
  transition: all 0.3s ease-in-out;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>