<template>
  <div class="bg-yellow-1 h-screen w-screen bg-img relative overflow-hidden">

    <div class="flex justify-center items-center pt-4">
      <img src="/assets/img/goblin-logo-redondo.png" alt="logo" class="md:w-200px w-100px">
      <span class="font-railey md:text-55px text-2xl text-brown-1 text-shadow-1 md:-ml-2 -ml-0">Taverna do meio goblin</span>
    </div>

    <div class="flex flex-col items-center justify-center h-full relative z-10 md-mt-9 -mt-6">
      <nav class="flex flex-col md:flex-row gap-10 items-center">
        <NuxtLink to="/catalogo" class="text-brown-1 text-2xl font-bold hover:text-shadow-1">Catálogo</NuxtLink>
        <NuxtLink to="/sobre" class="text-brown-1 text-2xl font-bold hover:text-shadow-1">Sobre Nós</NuxtLink>
      </nav>

      <div class="hidden md:block w-570px h-2px bg-brown-1 rounded mt-1"></div>
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
