<template>
  <div class="btn-goblin text-center w-[200px] h-[50px]">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<style scoped>
.btn-goblin {
  @apply bg-[#6E7B5E] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:brightness-110 transition;
}
</style>