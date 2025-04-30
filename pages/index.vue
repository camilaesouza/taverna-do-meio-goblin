<template>
  <div class="bg-yellow-1 min-h-screen w-screen relative overflow-hidden flex flex-col items-center pt-20">
    <div class="absolute top-0 left-0 w-full z-0">
      <svg viewBox="0 0 1440 150" class="w-full h-[100px]" preserveAspectRatio="none">
        <path d="M0,0 L0,50 L720,100 L1440,50 L1440,0 Z" fill="#6E7B5E" />
      </svg>
    </div>

    <div class="z-10 mt-[-67px]">
      <img
          src="/assets/img/goblin-logo-escrita.webp"
          alt="Logo"
          class="w-[150px] h-auto"
      />
    </div>

    <div class="flex flex-col items-center gap-[30px] mt-[70px] z-10">
      <NuxtLink to="/catalogo" class="btn-goblin text-center w-[250px] h-[50px]">Catálogo</NuxtLink>
      <NuxtLink to="/sobre-nos" class="btn-goblin text-center w-[250px] h-[50px]">Sobre nós</NuxtLink>
      <a href="https://www.instagram.com/taverna_do_meio_goblin" target="_blank" class="btn-goblin text-center w-[250px] h-[50px]">Instagram</a>
    </div>

    <p class="text-brown-1 font-railey text-[30px] mt-[60px] z-10 leading-snug text-center">
      Os melhores preços,<br />
      de qualquer lugar!
    </p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.btn-goblin {
  @apply bg-[#6E7B5E] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:brightness-110 transition;
}
</style>
