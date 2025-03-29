<template>
  <div class="bg-yellow-1 h-screen w-screen bg-img relative overflow-hidden">

    <div class="flex justify-center items-center pt-4">
      <img src="/assets/img/goblin-logo-redondo.png" alt="logo" width="200px">
      <span class="font-railey text-55px text-brown-1 text-shadow-1 -ml-2">Taverna do meio goblin</span>
    </div>

    <div class="flex flex-col items-center justify-center h-full relative z-10 -mt-9">
      <nav class="flex space-y-4 gap-10">
        <NuxtLink to="/catalogo" class="text-brown-1 text-2xl font-bold hover:text-shadow-1">Catálogo</NuxtLink>
        <NuxtLink to="/sobre" class="text-brown-1 text-2xl font-bold hover:text-shadow-1">Sobre Nós</NuxtLink>
      </nav>

      <div class="w-570px h-2px bg-brown-1 rounded"></div>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.bg-img {
  height: 100vh !important;
  background-repeat: no-repeat;
  background-image: url('../assets/img/home-bg.png');
  background-position: 50% 19%;
  background-size: cover;
  width: 100vw !important;
}
</style>
