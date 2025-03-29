<template>
<div class="bg-yellow-1 h-screen w-screen bg-img relative overflow-hidden">
  <div class="bg-yellow-2 w-screen h-65px flex items-center">
    <NuxtLink to="/" class="flex items-center w-430px">
      <img class="md:w-100px w-75px" src="/assets/img/goblin-logo-redondo.png" alt="logo-goblin">
      <span class="font-railey text-brown-1 md:text-30px text-lg md:-ml-0 -ml-12px">Taverna do meio goblin</span>
    </NuxtLink>
    <div class="flex justify-end w-full gap-5 pr-2 items-center">
      <NuxtLink to="/catalogo" class="text-brown-1 md:text-lg text-12px hover:font-bold md:font-normal font-bold">Catálogo</NuxtLink>
      <NuxtLink to="/sobre" class="text-brown-1 md:text-lg text-12px hover:font-bold md:font-normal font-bold">Sobre Nós</NuxtLink>
    </div>
  </div>

  <slot></slot>
</div>
</template>

<script setup>
</script>

<style scoped>
</style>
