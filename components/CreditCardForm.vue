<template>
  <form>
    <BaseInput
      class="mb-[30px]"
      label="Card number"
      placeholder="••••  ••••  ••••  ••••"
      icon="mastercard"
      :icon-size="{ width: 32, height: 22 }"
      only-numbers
      is-credit-card
    />
    <div class="grid grid-cols-3 gap-[10px]">
      <BaseSelect :options="months" />
      <BaseSelect :options="years" />
      <BaseInput
        label="CVC"
        placeholder="•••"
        only-numbers
        :max-length="3"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { months } from '~/constants/montes';
import { years } from '~/constants/years';
</script>

<style scoped></style>