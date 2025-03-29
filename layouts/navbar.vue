<template>
  <div class="flex min-h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside :class="[
      'fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300',
      sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      'md:relative md:translate-x-0 md:block'
    ]">
      <div class="p-6 flex flex-col h-full">
        <!-- Botão Fechar (apenas no mobile) -->
        <button @click="sidebarOpen = false" class="mb-6 p-2 rounded hover:bg-gray-100 self-end md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Logo -->
       <NuxtLink to="/" class="w-full flex justify-center">
         <img src="../assets/img/goblin-logo-redondo.png" alt="logo" width="150px">
       </NuxtLink>

        <!-- Menu -->
        <nav class="space-y-4 flex-1 mt-2">
          <NuxtLink to="/miniaturas" class="block p-2 rounded hover:bg-green-100 transition">Miniaturas</NuxtLink>
        </nav>
      </div>
    </aside>

    <!-- Conteúdo -->
    <div class="flex-1 flex flex-col">

      <!-- Navbar -->
      <header class="bg-white shadow flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-2">
          <!-- Botão abrir sidebar (apenas no mobile) -->
          <button @click="sidebarOpen = !sidebarOpen" class="p-2 rounded hover:bg-gray-200 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 class="text-xl font-semibold text-green-600">Taverna do meio goblin</h1>
        </div>
      </header>

      <!-- Slot -->
      <main class="p-6">
        <slot />
      </main>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const sidebarOpen = ref(false)
</script>

<style scoped>
/* Adiciona uma transição suave para a sidebar */
.sidebar-transition {
  transition: transform 0.3s ease;
}
</style>
