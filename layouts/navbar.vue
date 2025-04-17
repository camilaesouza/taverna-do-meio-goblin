<template>
  <div class="bg-yellow-1 w-full h-screen flex flex-col bg-img">
    <div class="bg-green-1 w-full h-[65px] flex items-center md:pl-2 pl-0 md:pr-4 shrink-0">
      <NuxtLink to="/" class="items-center md:w-[430px] w-[185px] flex ml-[-10px] md:ml-0">
        <img class="w-[100px]" src="/assets/img/goblin-logo-redondo.png" alt="logo-goblin">
        <span class="font-railey text-white md:text-[30px] text-lg md:ml-[-5px] ml-[-15px] md:block hidden">Taverna do meio goblin</span>
      </NuxtLink>
      <div class="flex justify-end w-full gap-5 pr-2 items-center">
        <NuxtLink to="/catalog" class="text-white md:text-lg text-[12px] hover:font-bold md:font-normal font-bold">
          Catálogo
        </NuxtLink>
        <NuxtLink to="/about" class="text-white md:text-lg text-[12px] hover:font-bold md:font-normal font-bold">
          Sobre nós
        </NuxtLink>
        <a href="https://www.instagram.com/taverna_do_meio_goblin" target="_blank" class="text-white md:text-lg text-[12px] hover:font-bold md:font-normal font-bold">
          Instagram
        </a>
      </div>
    </div>

    <div class="flex-1 overflow-auto">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>