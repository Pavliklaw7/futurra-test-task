<template>
  <div class="h-screen">
    <header class="flex items-center justify-start w-full max-w-[1170px] mx-auto h-[56px] mb-[65px] px-[20px] sm:px-6">
      <NuxtImg
        class="w-[179px]"
        src="BPage/logo.png"
        alt="planet learn logo"
      />
    </header>
    <main class="flex flex-col items-center px-[20px] sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_474px] w-full md:max-w-[947px] gap-6">
        <div class="hidden md:flex flex-col items-start order-2 md:order-1">
          <h1 class="h1-text mb-6 uppercase">
            <span class="text-primary">Start</span> your <br> learning journey <br> <span class="text-primary">now</span>
          </h1>
          <h4 class="h4-text font-normal mb-8">
            Get a <span class="text-primary font-bold">Planet</span><span class="font-bold">Learn</span> plan to <br> rock self-learning
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
            class="block md:hidden mb-6"
            w-full
            title="Safe & secure payment"
            icon="lock"
          />
          <p class="block md:hidden text-xs text-center">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
            you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
            at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
            Privacy Policy , Money Back , and Subscription Terms .
          </p>
        </div>
        <div class="relative order-1 md:order-2">
          <NuxtImg
            class="hidden md:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-20"
            src="BPage/ball.png"
            alt="ball"
          />
          <div class="card p-4 md:p-6 mb-4 md:mb-0 backdrop-blur-sm">
            <NuxtImg
              class="hidden md:block absolute top-[20%] -right-[3%] translate-x-[55%] w-[247px] h-[247px] object-none"
              src="BPage/rocket.png"
              alt="ball"
            />
            <div :class="`flex items-center ${isTimeOut ? 'justify-center md:justify-between' : 'justify-between'}`">
              <div :class="`flex flex-col items-start md:mb-6 ${isTimeOut && 'items-center md:items-start md:mb-9'}`">
                <h4>
                  <span class="h4-text text-hilight font-bold">3-day trial for $0.99</span>
                </h4>
                <p class="text-xl font-semibold leading-6">
                  {{ isTimeOut ? 'Then $39.99' : 'Then $9.99' }}
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
              class="hidden md:inline-grid mb-6"
              w-full
              title="Safe & secure payment"
              icon="lock"
              variant="secondary"
            />
            <p class="hidden md:block text-xs text-center">
              $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
              you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
              at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
              Privacy Policy , Money Back , and Subscription Terms .
            </p>
          </div>
          <div class="block md:hidden card p-4 md:p-6 backdrop-blur-sm">
            <h1 class="h1-text mb-6 uppercase">
              <span class="text-primary">Start</span> your <br> learning journey <br> <span class="text-primary">now</span>
            </h1>
            <h4 class="h4-text font-normal mb-8">
              Get a <span class="text-primary font-bold">Planet</span><span class="font-bold">Learn</span> plan to <br> rock self-learning
            </h4>
            <BaseButton
              class="mb-8 md:mb-0 max-w-full md:max-w-[273px]"
              title="Get my plan"
              variant="primary"
              @click="isModalOpen = true"
            />
            <BaseList
              class="grid md:hiden"
              :items="benefits"
            />
            <BaseButton
              class="inline-grid md:hidden mb-6"
              w-full
              title="Safe & secure payment"
              icon="lock"
              variant="secondary"
            />
            <p class="block md:hidden text-xs text-center">
              $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
              you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
              at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
              Privacy Policy , Money Back , and Subscription Terms .
            </p>
          </div>
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

const benefits: string[] = [
    `<span class="text-hilight">Exclusive access to <span class="font-bold">350+</span> learning programs</span>`,
    'Personalized course plan',
    'Comfy learning schedule made by you',
    `<span class="text-hilight"><span class="font-bold">24/7</span> tutor support in a secure chat</span>`,
    'Lifetime access to materials'
]

const isModalOpen  = ref(false)
const isTimeOut = ref(false)

useHead({
  htmlAttrs: {
    class: 'b-page'
  }
})
</script>
