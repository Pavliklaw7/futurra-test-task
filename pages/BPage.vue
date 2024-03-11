<template>
  <div>
    <header class="flex items-center justify-start w-full max-w-[1170px] mx-auto h-[56px] mb-[65px] px-[20px] sm:px-6">
      <NuxtImg
        class="w-[179px]"
        src="B/logo.png"
        alt="planet learn logo"
      />
    </header>
    <main class="flex flex-col items-center px-[20px] sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-[1fr_474px] w-full md:max-w-[947px] gap-6">
        <div class="flex flex-col items-start order-2 md:order-1">
          <h1 class="h1 mb-6">
            Start your learning journey now
          </h1>
          <h4 class="mb-8">
            Get a PlanetLearn plan to rock self-learning
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
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
            you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
            at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
            Privacy Policy , Money Back , and Subscription Terms .
          </p>
        </div>
        <div class="card order-1 md:order-2 p-4 md:p-6">
          <NuxtImg
            class="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-10"
            src="b/ball.png"
            alt="ball"
          />
          <NuxtImg
            class="absolute top-[10%] right-0 translate-x-[55%] object-none"
            src="b/rocket.png"
            alt="ball"
          />
          <div class="flex items-center justify-between">
            <div class="flex flex-col items-start md:mb-6">
              <h4>
                3-day trial for $0.99
              </h4>
              <p>
                Then $9.99
              </p>
              <p>
                $39.99/week
              </p>
            </div>
            <MainTimer />
          </div>
          <BaseList
            class="hidden md:grid"
            :items="benefits"
          />>
          <BaseButton
            class="hidden md:inline-grid mb-6"
            w-full
            title="Safe & secure payment"
            icon="lock"
          />
          <p class="hidden md:block text-xs text-center">
            $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
            you will automatically be charged the full price of $19.99/Month . You can cancel your subscription
            at any time. By continuing, you indicate that you've read and agree to our Terms & Conditions,
            Privacy Policy , Money Back , and Subscription Terms .
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
import { benefits } from '~/constants/benefits';

const isModalOpen  = ref(false)

useHead({
  htmlAttrs: {
    class: 'b-page'
  }
})
</script>
