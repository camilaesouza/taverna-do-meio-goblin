<template>
  <NuxtLink to="/carrinho" class="fixed md:bottom-[50px] bottom-[35px] md:right-[35px] right-[30px] bg-green-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m2-9h10m0 0l2 9m-2-9H7" />
    </svg>
    <span class="ml-1 text-sm font-bold">{{ cart.totalQuantity }}</span>
  </NuxtLink>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'
const cart = useCartStore()
</script>
