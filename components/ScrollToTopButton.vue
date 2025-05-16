<template>
  <button
      class="fixed md:bottom-[130px] bottom-[110px] md:right-[40px] right-[34px] p-[13px] bg-[#908367] text-white font-bold rounded-[25px] shadow-md hover:bg-[#7a6f58] transition-colors duration-300"
      @click="$emit('scroll')"
  >
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M12 4L12 20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
      />
      <path
          d="M6 10L12 4L18 10"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
      />
    </svg>

  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
