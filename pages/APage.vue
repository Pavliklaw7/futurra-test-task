<template>
  <div>
    <header class="flex items-center justify-start w-full max-w-[1170px] mx-auto h-[56px] mb-[65px] px-[20px] sm:px-6">
      <NuxtImg
        class="w-[179px]"
        src="APage/logo.png"
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
            variant="primary"
            @click="isModalOpen = true"
          />
          <BaseList
            class="md:hidden"
            :items="benefits"
          />
          <BaseButton
            class="block md:hidden mb-6 text-[#01c120]"
            w-full
            title="Safe & secure payment"
            icon="lock"
            variant="secondary"
          />
          <p class="block w-full md:hidden text-xs text-center">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
            you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
            at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
            Privacy Policy , Money Back , and Subscription Terms .
          </p>
        </div>
        <div class="card relative order-1 md:order-2 p-4 md:p-6 bg-white">
          <div :class="`flex items-center ${isTimeOut ? 'justify-center md:justify-between' : 'justify-between'}`">
            <div :class="`flex flex-col items-start md:mb-6 ${isTimeOut && 'items-center md:items-start md:mb-9'}`">
              <h4 class="h4-text font-extrabold mb-2">
                3-day trial for <span class="font-bold text-hilight">$0.99</span>
              </h4>
              <p class="text-xl font-normal md:font-semibold leading-6">
                {{ isTimeOut ? '$39.99/week' : 'Then $9.99' }}
              </p>
              <p
                v-if="!isTimeOut"
                class="line-through text-disabled"
              >
                $39.99/week
              </p>
            </div>
            <MainTimer
              v-if="!isTimeOut"
              @time-out="isTimeOut = true"
            />
          </div>
          <BaseList
            class="hidden md:grid"
            :items="benefits"
          />
          <BaseButton
            class="hidden md:inline-grid mb-6 text-[#01c120]"
            w-full
            title="Safe & secure payment"
            icon="lock"
            variant="secondary"
          />
          <p class="hidden md:block text-xs text-center landing-[14.4px] font-normal opacity-50">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will automatically be charged the full price of $19.99/Month. You can cancel your subscription at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms .
          </p>
        </div>
      </div>
    </main>
    <BaseModal
      :is-modal-open="isModalOpen"
      @close="isModalOpen = false"
    />
  </div>
</template>

<script setup lang="ts">
const isModalOpen  = ref(false)
const isTimeOut = ref(false)

const benefits: string[] = [
  `Exclusive access to <span class="text-hilight font-bold">350+</span> learning programs`,
  'Personalized course plan',
  'Comfy learning schedule made by you',
  `<span class="text-hilight font-bold">24/7</span> tutor support in a secure chat`,
  'Lifetime access to materials'
]

useHead({
  htmlAttrs: {
    class: 'a-page'
  }
})
</script>
