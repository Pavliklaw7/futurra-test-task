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
          <div :class="`modal grid grid-cols-1 justify-items-center relative pt-6 pb-4 px-4 transform rounded-xl text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[400px]`">
            <h5 class="text-center mb-6 text-[21px] font-extrabold">
              Payment method
            </h5>

            <BaseButton
              class="mb-4"
              title="Buy now"
              icon="paypal"
              w-full
              :icon-size="{height: 14, width: 50}"
              variant="warning"
            />

            <BaseButton
              class="mb-4 text-black"
              title="PAY"
              icon="googlepay"
              w-full
            />

            <div :class="`flex w-full mb-4 items-center gap-2 ${currentPageName === 'APage' ? 'text-black opacity-40' : 'text-white'} text-black`">
              <span :class="`flex-grow ${currentPageName === 'APage' ? 'bg-black' : 'bg-white'} opacity-20 h-[2px]`" />
              OR
              <span :class="`flex-grow ${currentPageName === 'APage' ? 'bg-black' : 'bg-white'} opacity-20 h-[2px]`" />
            </div>

            <form class="mb-[30px]">
              <BaseInput
                v-model="creditCardData.cardNumber"
                class="mb-[30px]"
                label="Card number"
                placeholder="••••  ••••  ••••  ••••"
                icon="mastercard"
                :icon-size="{ width: 32, height: 22 }"
                only-numbers
                is-credit-card
              />
              <div class="grid grid-cols-3 gap-[10px] items-center">
                <BaseSelect
                  v-model="creditCardData.month"
                  :options="months"
                />
                <BaseSelect
                  v-model="creditCardData.year"
                  :options="years"
                />
                <BaseInput
                  v-model="creditCardData.cvc"
                  label="CVC"
                  placeholder="•••"
                  only-numbers
                  :max-length="3"
                  :hide-border="true"
                />
              </div>
            </form>

            <BaseButton
              :class="`mb-3 ${currentPageName === 'APage' && 'max-w-[300px]'}`"
              title="Submit"
              :disabled="!isFormValid"
              variant="primary"
              w-full
            />

            <BaseButton
              :class="`${currentPageName === 'APage' && 'max-w-[300px]'}`"
              title="close"
              variant="casper"
              @click="onClose"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import type { CreditCardDataDto } from '~/models';
import { months  } from '~/constants/months';
import { years  } from '~/constants/years';

const instace = getCurrentInstance();
const testedPage = useCookie('tested-page')
const currentPageName = instace!.parent?.type.__name ? instace!.parent?.type.__name : testedPage ? testedPage : 'APage'


const creditCardData = reactive({
  cardNumber: '',
  month: '',
  year: '',
  cvc: ''
}) as CreditCardDataDto;



watch(creditCardData, () => {
const {cardNumber, month, year, cvc} = creditCardData;
  if (cardNumber.length === 19 
  && month && year && cvc.length === 3
  ) {
    isFormValid.value = true
  } else {
    isFormValid.value = false
  }
})

const modal = ref(null);
const isFormValid = ref(false)

const emit = defineEmits(['close']);

onClickOutside(modal, () => emit('close'));

const onClose = () => {
  console.log('creditCardData', creditCardData)
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