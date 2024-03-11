<template>
  <div :class="`relative w-[160px] h-[60px] bg-black rounded-xl overflow-hidden ${warning && 'shadow-[0_0_6px_2px_#FF0000]'}`">
    <div
      class="flex items-center justify-center rounded-xl h-full  bg-primary"
      :style="{ width: progressBarWidth }"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[24px] leading-[33.6px] font-semibold">
        {{ displayTime }}
      </div>
    </div>
  </div>
</template>

<script setup>
const currentTime = useCookie('timer')

const duration = 3 * 60;
// const currentTime = ref(duration);
const progressBarWidth = ref('100%');
const warning = ref(false)

const emit = defineEmits(['time-out']);

onMounted(() => {
  if (currentTime.value === undefined) currentTime.value = duration;

  if (currentTime.value === 0) {
    emit('time-out')
    return
  }

    updateProgressBar()
    startTimer();
})

const updateProgressBar = () => {
  const progress = (currentTime.value / duration) * 100;
  if (currentTime.value <= 10) warning.value = true
  progressBarWidth.value = `${progress}%`;

}; 

const displayTime = computed(() => {
  const minutes = Math.floor(currentTime.value / 60);
  const seconds = currentTime.value % 60;
  const resultString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  return resultString.padStart(5, "0");
});

const startTimer = () => {
  const timerInterval = setInterval(() => {
    if (currentTime.value === 0) {
      clearInterval(timerInterval);
      emit('time-out')
    } else {
      currentTime.value--;
      updateProgressBar();
    }
  }, 1000);
};
</script>
