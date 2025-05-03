<template>
  <Navbar>
    <div class="px-4 py-6">
      <breadcrumb label="Sobre nós" />

      <!-- Blocos combinados de imagem + texto -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        <!-- Bloco 1: Fungo - foco provavelmente mais no centro ou topo -->
        <div class="text-center">
          <img
              src="/assets/img/fungo.webp"
              alt="Imagem de uma miniatura do personagem fungo, uma marmota de capa segurando uma espada de madeira"
              class="w-full h-[350px] object-cover rounded-2xl shadow-md mb-4"
              style="object-position: center 23%;"
          />
          <h2 class="text-xl font-semibold text-green-2 mb-2">Quem Somos</h2>
          <p class="text-gray-700 text-base leading-relaxed">
            Somos uma loja em crescimento e vendemos produtos relacionados a RPG com foco em miniaturas de resina,
            também criamos peças personalizadas em impressão 3D.
          </p>
        </div>

        <!-- Bloco 2: Goblin - como é uma pessoa com máscara, provavelmente foco central -->
        <div class="text-center">
          <img
              src="/assets/img/goblin-real.webp"
              alt="Imagem do nosso mascote goblin, é uma pessoa real utilizando a cabeça de um goblin"
              class="w-full h-[350px] object-cover rounded-2xl shadow-md mb-4"
              style="object-position: center 44%;"
          />
          <h2 class="text-xl font-semibold text-green-2 mb-2">Como Começou</h2>
          <p class="text-gray-700 text-base leading-relaxed">
            A taverna veio da paixão que temos pelo RPG, com mais de 10 anos de mesa decidimos levar nossas experiências
            para outras pessoas, a história do meio goblin surgiu de um heróico vilão goblin que teve metade de seu corpo
            arrancado e mesmo assim conseguiu derrubar o paladino do grupo mesmo estando com metade do corpo, era um boss?
            um semi boss? não, este heróico goblin era só um minion, então sua história de vida é muito tocante.
          </p>
        </div>

        <!-- Bloco 3: Gigante segurando martelo - foco geralmente no topo também -->
        <div class="text-center">
          <img
              src="/assets/img/mini-gigante.webp"
              alt="Imagem de uma miniatura no tamanho 30 centímetros de um gigante, ele está numa pose segurando um martelo no ombro"
              class="w-full h-[350px] object-cover rounded-2xl shadow-md mb-4"
              style="object-position: center 19%;"
          />
          <h2 class="text-xl font-semibold text-green-2 mb-2">Sobre a Impressora</h2>
          <p class="text-gray-700 text-base leading-relaxed">
            As impressões são feitas na impressora Saturn 4 Ultra para a melhor qualidade possivel de impressões pegando minimos detalhes.
          </p>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script setup>
import Navbar from "~/layouts/navbar.vue";
</script>
