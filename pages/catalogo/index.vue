<template>
  <Navbar>
    <div class="px-4 py-6">
      <breadcrumb label="Catálogo"></breadcrumb>

      <div class="mt-[30px] flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <div class="md:w-[360px] w-full">
          <label class="block text-sm font-semibold text-green-2 mb-1">Categoria</label>

          <multiselect
              v-model="selectedType"
              :options="typeOptions"
              track-by="key"
              label="label"
              placeholder="Todas"
              class="multiselect-custom"
              :searchable="true"
              :allow-empty="true"
              :show-labels="false"
              :close-on-select="true"
              :clear-on-select="false"
              :hide-selected="true"
              :show-clear="true"
          >
            <template #noResult>
              Nenhuma categoria encontrada
            </template>
          </multiselect>
        </div>

        <div class="flex flex-col">
          <label for="search" class="gap-1 flex md:flex-row flex-col text-sm font-semibold text-green-2 mb-1 block">
            Pesquisar
            <span class="text-[11px] text-[#000000] font-normal">
              *(Dica: use palavras-chaves como elfo, guerreiro, mulher ou homem)
            </span>
          </label>
          <div
              class="flex items-center bg-[#D2C5AB] h-[43px] md:w-[435px] w-full border border-[#cdc2ae] rounded text-black overflow-hidden">
            <input
                id="search"
                v-model="searchTerm"
                type="text"
                autocomplete="off"
                placeholder="Pesquisar miniaturas"
                class="flex-1 px-3 py-2 text-sm outline-none bg-[#D2C5AB] text-black placeholder-black"
            />
            <span class="px-3">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  style="color: #999999;"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 5.65a7.5 7.5 0 010 10.6z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="md:w-[360px] w-full">
          <label class="block text-sm font-semibold text-green-2 mb-1">Ordenar por preço</label>
          <multiselect
              v-model="priceOrder"
              :options="priceOrderOptions"
              track-by="value"
              label="label"
              placeholder="Nenhuma ordenação"
              class="multiselect-custom"
              :searchable="false"
              :allow-empty="true"
              :show-labels="false"
              :close-on-select="true"
              :clear-on-select="false"
              :hide-selected="false"
              :show-clear="true"
          />
        </div>
      </div>

      <div class="bg-[#E2D6BF] rounded-lg shadow-lg p-3 border border-[#cac1ad] mt-[-11px] mb-[20px] md:text-[14px] text-[12px]">
        <h5 class="text-green-2 font-semibold">Observações sobre os pedidos:</h5>
        <p class="mt-1">- Os pedidos podem ser feitos pelo nosso <a class="font-semibold underline" href="https://www.instagram.com/taverna_do_meio_goblin">Instagram</a> ou
          <a class="font-semibold underline" target="_blank" href="https://wa.me/554288642843">Whatapp</a>, só entrar em contato com a gente!</p>
        <p class="mt-1">- Miniaturas de valores acima de R$40 podem fugir do tamanho de 28|33mm e também sua qualidade é melhor.</p>
        <p class="mt-1">- Miniaturas com tamanhos especiais, normalmente são grandes, podem ter no mínimo 300mm (30cm) de altura, consultar com a gente o tamanho real.</p>
        <p class="mt-1">- Na compra de miniaturas em grandes quantidades podemos oferecer um descontinho! Não perca a chance de garantir suas minis!</p>
        <p class="mt-1">- Não encontrou o que procurava? Podemos fazer miniaturas ou trabalhos com impressão 3D personalizados, entra em contato com a gente!</p>

        <p class="mt-[13px] md:text-[24px] text-[18px] font-railey md:text-start text-center">Os melhores preços, de qualquer lugar!</p>
      </div>

      <!-- Card minis -->
      <div class="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div
            v-for="item in sortedCatalog"
            :key="item.id"
            class="bg-[#E2D6BF] rounded shadow-lg p-3 flex flex-col justify-between h-full border border-[#cac1ad]"
        >
          <!-- Conteúdo -->
          <div class="text-center">
            <div class="w-full aspect-[5/5] mb-2 overflow-hidden rounded">
              <img
                  class="w-full h-full object-cover cursor-pointer"
                  :src="item.image"
                  :alt="item.tag"
                  @click="openModal(item)"
                  onerror="this.style.display='none'"
              />
            </div>
            <p class="font-semibold text-green-1 text-sm line-clamp-2">{{ item.id }} - {{ item.name }}</p>
            <p class="font-semibold text-green-1 md:text-sm text-[11px] line-clamp-2 mt-1">{{ getTypeLabel(item.type) }}</p>
            <p class="font-semibold text-green-1 md:text-sm text-[11px] line-clamp-2 mt-1">Tamanho: {{ item.size }}</p>
            <p class="text-green-1 md:text-sm text-[11px] mt-[15px]">{{ item.observation }}</p>
            <p class="font-semibold text-green-1 mt-[15px] md:text-[18px] text-[16px]">R$ {{ item.price.toFixed(2) }}</p>
          </div>

          <!-- Botão fixado no final -->
          <div class="mt-4">
            <AddToCartButton :item="item" />
          </div>
        </div>
      </div>

      <!-- Botão flutuante do carrinho -->
      <CartButton />


      <!-- Modal de imagem -->
      <div
          v-if="showModal"
          class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          @click.self="closeModal"
      >
        <div class="relative max-w-3xl w-full p-4 overflow-hidden">
          <!-- Botão de fechar -->
          <button
              class="absolute md:top-2 top-[-9px] md:right-[50px] right-2 text-white text-2xl font-bold z-10"
              @click="closeModal"
          >
            &times;
          </button>

          <div class="flex justify-center flex-col items-center text-white mb-1 text-center">
            <p class="font-bold md:text-base text-sm">
              {{ selectedItemForModal?.id }} - {{ selectedItemForModal?.name }}
              {{ "(" + getTypeLabel(selectedItemForModal?.type) + " - " + selectedItemForModal?.size + ")" }}
            </p>
            <p class="text-sm font-medium">R$ {{ selectedItemForModal?.price.toFixed(2) }}</p>
            <p class="md:text-sm text-xs">{{ selectedItemForModal?.observation }}</p>
          </div>

          <!-- Imagem + setas adaptadas -->
          <!-- Imagem + setas -->
          <!-- Imagem + setas -->
          <div class="w-full md:h-[70vh] relative overflow-hidden">
            <div class="flex items-center justify-center w-full h-full">
              <!-- Seta esquerda (desktop) -->
              <button
                  @click.stop="prevImage"
                  :disabled="currentIndex === 0"
                  class="hidden md:flex absolute left-2 text-black bg-white/40 hover:bg-white/60 p-2 rounded-full z-10 disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <!-- Imagem -->
              <img
                  v-if="selectedItemForModal.image"
                  :src="selectedItemForModal.image"
                  class="zoomable-image z-0"
                  :alt="selectedItemForModal.tag"
                  @click="toggleZoom"
                  :class="{ 'zoomed': zoomActive }"
                  :style="zoomDisabled ? 'pointer-events: none;' : ''"
              />

              <!-- Seta direita (desktop) -->
              <button
                  @click.stop="nextImage"
                  :disabled="currentIndex === filteredCatalog.length - 1"
                  class="hidden md:flex absolute right-2 text-black bg-white/40 hover:bg-white/60 p-2 rounded-full z-10 disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Setas mobile abaixo -->
            <div class="flex md:hidden justify-between mt-4 px-10">
              <button
                  @click.stop="prevImage"
                  :disabled="currentIndex === 0"
                  class="text-black bg-white/40 hover:bg-white/60 p-2 rounded-full disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                  @click.stop="nextImage"
                  :disabled="currentIndex === filteredCatalog.length - 1"
                  class="text-black bg-white/40 hover:bg-white/60 p-2 rounded-full disabled:opacity-30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </Navbar>
</template>


<script setup lang="ts">
import {computed, ref} from 'vue'
import {catalog} from '~/data/catalog'
import {TypeEnum, TypeEnumOptions} from '~/data/enums'
import Navbar from '~/layouts/navbar.vue'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
import AddToCartButton from '~/components/AddToCartButton.vue'
import CartButton from '~/components/CartButton.vue'
import { synonymMap } from '@/utils/synonymMap.js'

const selectedType = ref(null)
const searchTerm = ref('')
const showModal = ref(false)
const selectedItemForModal = ref(null)
const zoomActive = ref(false)
const zoomDisabled = ref(false)
const currentIndex = ref(0)
const priceOrder = ref('');

const priceOrderOptions = [
  { value: '', label: 'Nenhuma ordenação' },
  { value: 'asc', label: 'Do menor para o maior' },
  { value: 'desc', label: 'Do maior para o menor' },
];

const typeOptions = [
  { key: '', label: 'Todas' },
  ...TypeEnumOptions.sort((a, b) => {
    if (a.key === TypeEnum.OTHERS) return 1;
    if (b.key === TypeEnum.OTHERS) return -1;
    return a.key.localeCompare(b.key);
  }),
];

const sortedCatalog = computed(() => {
  const sorted = [...filteredCatalog.value];
  let orderSelected = priceOrder?.value;

  if (orderSelected?.value === 'asc') {
    return sorted.sort((a, b) => a.price - b.price);
  } else if (orderSelected?.value === 'desc') {
    return sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
});

function fallbackSingular(word) {
  if (word.endsWith('s') && word.length > 4) {
    return word.slice(0, -1)
  }
  return word
}

function normalizeWord(word) {
  word = removeAccents(word.toLowerCase().replace(/-/g, ' ').trim())
  return synonymMap[word] || fallbackSingular(word)
}

const filteredCatalog = computed(() => {
  const search = removeAccents(searchTerm.value.toLowerCase().trim())
  const searchWords = search.split(/\s+/).filter(Boolean).map(normalizeWord)

  return catalog.filter(item => {
    const name = removeAccents(item.name.toLowerCase())
    const tags = removeAccents(item.tag.toLowerCase().replace(/,/g, ''))
    const combined = `${name} ${tags}`
    const combinedWords = combined.split(/\s+/).filter(Boolean).map(normalizeWord)

    const matchesType =
        !selectedType.value || !selectedType.value.key || item.type === selectedType.value.key

    const matchesSearch = searchWords.every(searchWord =>
        combinedWords.some(combinedWord =>
            (
                combinedWord.length >= 4 && searchWord.length >= 4 && (
                    combinedWord.includes(searchWord) || searchWord.includes(combinedWord)
                )
            ) || combinedWord === searchWord
        )
    )

    return matchesType && matchesSearch
  })
})

function openModal(item) {
  currentIndex.value = filteredCatalog.value.findIndex(itemCatalog => itemCatalog.id === item.id)
  updateModalData()
  showModal.value = true
}

function updateModalData() {
  selectedItemForModal.value = filteredCatalog.value[currentIndex.value]
}

function nextImage() {
  if (currentIndex.value < filteredCatalog.value.length - 1) {
    currentIndex.value++
    updateModalData()
  }
}

function prevImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    updateModalData()
  }
}

function closeModal() {
  showModal.value = false
  zoomActive.value = false
}

function toggleZoom() {
  if (!zoomDisabled.value) {
    zoomActive.value = !zoomActive.value
  }
}

onMounted(() => {
  zoomDisabled.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
})

function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function getTypeLabel(typeKey: unknown): string {
  if (typeof typeKey !== 'string') return '';
  const found = TypeEnumOptions.find(option => option.key === typeKey);
  return found ? found.label : typeKey;
}
</script>

<style>
/* Tags selecionadas e menu dropdown */
.multiselect-custom .multiselect__tags,
.multiselect-custom .multiselect__content-wrapper {
  background-color: #D2C5AB !important;
  border-color: #cdc2ae !important;
  color: #000000 !important;
  min-height: 43px !important;
}

/* Opções da lista */
.multiselect-custom .multiselect__option {
  background-color: #D2C5AB !important;
  color: #000000 !important;
}

/* Hover nas opções (passar o mouse) */
.multiselect-custom .multiselect__option--highlight {
  background-color: #c6b899 !important;
  color: #000000 !important;
}

/* Opção selecionada */
.multiselect-custom .multiselect__option--selected {
  background-color: #D2C5AB !important;
  font-weight: bold;
}

/* Hover na opção que está selecionada */
.multiselect-custom .multiselect__option--selected.multiselect__option--highlight {
  background-color: #b9ab8e !important;
}

/* Placeholder */
.multiselect-custom .multiselect__placeholder {
  color: #000000 !important;
}

/* Scrollbar para Webkit (Chrome, Safari, Edge) */
.multiselect-custom .multiselect__content-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.multiselect-custom .multiselect__content-wrapper::-webkit-scrollbar-thumb {
  background-color: #A4977B;
  border-radius: 4px;
}

.multiselect-custom .multiselect__content-wrapper::-webkit-scrollbar-track {
  background-color: #D2C5AB;
}

/* Scrollbar para Firefox */
.multiselect-custom .multiselect__content-wrapper {
  scrollbar-width: thin;
  scrollbar-color: #A4977B #D2C5AB;
}

.multiselect-custom .multiselect__single {
  background-color: #D2C5AB !important;
  color: #000000 !important;
}

.multiselect-custom .multiselect__input {
  background-color: #D2C5AB !important;
  color: #000000 !important;
}

.multiselect-custom .multiselect__clear {
  display: block !important;
}

/* Estilos do modal e da imagem */
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.zoomable-image {
  transition: transform 0.3s ease;
  cursor: zoom-in;
  max-height: 100%;
  max-width: 100%;
  touch-action: none;
}

.zoomable-image.zoomed {
  transform: scale(2);
  cursor: zoom-out;
}

button {
  z-index: 10;
  pointer-events: auto;
}
</style>
