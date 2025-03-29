<template>
<div class="bg-yellow-1 h-screen w-screen bg-img relative overflow-hidden">
  <div class="bg-yellow-2 w-screen h-65px flex items-center">
    <NuxtLink to="/" class="flex items-center w-430px">
      <img width="100px" src="/assets/img/goblin-logo-redondo.png" alt="logo-goblin">
      <span class="font-railey text-brown-1 text-30px">Taverna do meio goblin</span>
    </NuxtLink>
    <div class="flex justify-end w-full gap-5 pr-2">
      <NuxtLink to="/catalogo" class="text-brown-1 text-lg hover:font-bold">Catálogo</NuxtLink>
      <NuxtLink to="/sobre" class="text-brown-1 text-lg hover:font-bold">Sobre Nós</NuxtLink>
    </div>
  </div>

  <slot></slot>
</div>
</template>

<script setup>
</script>

<style scoped>
</style>
