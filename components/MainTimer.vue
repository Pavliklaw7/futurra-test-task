<template>
  <div class="relative w-[160px] h-[60px] bg-black rounded-xl overflow-hidden">
    <div
      class="flex items-center justify-center rounded-xl h-full bg-[#00CA14]"
      :style="{ width: progressBarWidth }"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[24px] leading-[33.6px] font-semibold">
        {{ displayTime }}
      </div>
    </div>
  </div>
</template>

<script setup>
const duration = 3 * 60;
const currentTime = ref(duration);
const progressBarWidth = ref('100%');

// TODO: get current timer state from storage

  const updateProgressBar = () => {
    const progress = (currentTime.value / duration) * 100;
    progressBarWidth.value = `${progress}%`;
  };

  const displayTime = computed(() => {
    const minutes = Math.floor(currentTime.value / 60);
    const seconds = currentTime.value % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      if (currentTime.value === 0) {
        clearInterval(timerInterval);
      } else {
        currentTime.value--;
        updateProgressBar();
        // TODO: set to storage current timer state
      }
    }, 1000);
  };

  onMounted(() => {
    startTimer();
  });
</script>
