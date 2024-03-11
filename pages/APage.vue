<template>
  <div>
    <header class="flex items-center justify-start w-full max-w-[1170px] mx-auto h-[56px] mb-[65px] px-[20px] sm:px-6">
      <NuxtImg
        class="w-[179px]"
        src="A/logo.png"
        alt="planet learn logo"
      />
    </header>
    <main class="flex flex-col items-center px-[20px] sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_474px] w-full md:max-w-[947px] gap-6">
        <div class="flex flex-col items-start order-2 md:order-1">
          <h1 class="h1-text mb-6">
            Start your learning journey now
          </h1>
          <h4 class="h4-text mb-8">
            Get a <span class="text-hilight font-extrabold">Planet</span><span class="font-extrabold">Learn</span> plan to rock self-learning
          </h4>
          <BaseButton
            class="mb-8 md:mb-0 max-w-full md:max-w-[273px]"
            title="Get my plan"
            @click="isModalOpen = true"
          />
          <BaseList
            class="md:hidden"
            :items="benefits"
          />
          <BaseButton
            class="block md:hidden mb-6"
            w-full
            title="Safe & secure payment"
            icon="lock"
          />
          <p class="block md:hidden text-xs text-center">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the <br> 3-day trial period,
            you will automatically be charged the full price of $19.99/Month <br> . You can cancel your subscription
            at any time. By continuing, you indicate that <br> you've read and agree to our Terms & Conditions,
            Privacy Policy , Money Back <br> , and Subscription Terms .
          </p>
        </div>
        <div class="card order-1 md:order-2 p-4 md:p-6">
          <div class="flex items-center justify-between">
            <div class="flex flex-col items-start md:mb-6">
              <h4 class="h4-text font-extrabold">
                3-day trial for <span class="font-outfit text-hilight">$0.99</span>
              </h4>
              <p class="text-xl font-semibold leading-6">
                Then $9.99
              </p>
              <p class="line-through text-disabled">
                $39.99/week
              </p>
            </div>
            <MainTimer @on-timer-finish="onTimerFinish" />
          </div>
          <BaseList :items="benefits" />
          <BaseButton
            class="hidden md:inline-grid mb-6"
            w-full
            title="Safe & secure payment"
            icon="lock"
            variant="casper"
          />
          <p class="hidden md:block text-xs text-center landing-[14.4px] font-normal opacity-50">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month. You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
          </p>
          <!-- </BaseList :items="benefits" /> -->
        </div>
      </div>
    </main>
    <BaseModal :is-modal-open="isModalOpen" />
  </div>
</template>

<script setup lang="ts">
import { benefits } from '@/constants/benefits';

const isModalOpen  = ref(false)

const onTimerFinish = () => {
  // TODO: set to local storage setted timer state
}

useHead({
  htmlAttrs: {
    class: 'a-page'
  }
})
</script>
