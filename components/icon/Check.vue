<template>
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.169604 7.61304L4.35316 12L15.7948 1.74063C16.0537 1.50841 16.0699 1.11651 15.8304 0.865445C15.5909 0.614375 15.1868 0.599083 14.9279 0.831305L4.42393 10.25L1.10731 6.77234C0.867842 6.52127 0.464086 6.50598 0.205181 6.73785C-0.053723 6.97007 -0.0698643 7.36197 0.169604 7.61304Z"
      :fill="fill"
    />
  </svg>
</template>
  
  <script setup>
  defineProps({
      fill: {
          type: String,
          default: 'currentColor'
      },
  })
  </script>
  
  