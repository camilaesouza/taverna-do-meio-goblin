<template>
  <Navbar>
    <div class="px-4 py-6">
      <breadcrumb label="Catálogo"></breadcrumb>

      <div class="mt-[30px] flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <div class="md:w-[200px] w-full">
          <label class="block text-sm font-semibold text-green-600 mb-1">Categoria</label>

          <multiselect
              v-model="selectedType"
              :options="typeOptions"
              track-by="key"
              label="label"
              placeholder="Todas"
              class="multiselect-custom"
              :searchable="false"
              :allow-empty="true"
              :show-labels="false"
              :close-on-select="true"
              :clear-on-select="false"
              :hide-selected="true"
              :show-clear="true"
          />
        </div>

        <div class="flex-1">
          <label for="search" class="text-sm font-semibold text-green-600 mb-1 block">Pesquisar</label>
          <div
              class="flex items-center bg-[#D2C5AB] h-[43px] md:w-[290px] w-full border border-[#cdc2ae] rounded text-black overflow-hidden">
            <input
                id="search"
                v-model="searchTerm"
                type="text"
                autocomplete="off"
                placeholder="Buscar por miniatura"
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
      </div>

      <div class="mt-[-11px] mb-[13px] md:text-[13px] text-[11px]">
        <h5 class="text-green-600 font-semibold">Observações para os pedidos:</h5>
        <p>- Os pedidos podem ser feitos pelo nosso <a class="font-semibold underline" href="https://www.instagram.com/taverna_do_meio_goblin">instagram</a>, só entrar em contato com a gente!</p>
        <p>- Miniaturas de valores acima de R$40 podem fugir do tamanho de 28|33mm e também sua qualidade é melhor.</p>
        <p>- Miniaturas com tamanhos especiais, normalmente são grandes, podem ter no mínimo 300mm (30cm) de altura, consultar com a gente o tamanho real.</p>
        <p>- Na compra de miniaturas em grandes quantidades podemos oferecer um descontinho! Não perca a chance de garantir suas minis!</p>

        <p class="mt-[13px] md:text-[24px] text-[18px] font-railey md:text-start text-center">Os melhores preços, de qualquer lugar!</p>
      </div>

      <!-- Grid de cards -->
      <div class="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div
            v-for="item in filteredCatalog"
            :key="item.id"
            class="bg-[#E2D6BF] rounded shadow-lg p-3 flex flex-col border border-[#cac1ad]"
        >
          <div class="w-full aspect-[4/5] mb-2 overflow-hidden rounded">
            <img
                class="w-full h-full object-contain cursor-pointer"
                :src="item.image"
                :alt="item.name"
                @click="openModal(item.image, item.name)"
                onerror="this.style.display='none'"
            />
          </div>
          <div class="text-center">
            <p class="font-semibold text-green-1 text-sm line-clamp-2 md:mt-[-25px] mt-[-15px]">{{ item.name }}</p>
            <p class="font-semibold text-green-1 md:text-sm text-[11px] line-clamp-2 mt-1">Tamanho: {{ item.size }}</p>
            <p class="text-green-1 md:text-sm text-[11px] mt-[15px]">{{ item.observation }}</p>
            <p class="font-semibold text-green-1 mt-[15px] md:text-[18px] text-[16px]">R$ {{ item.price.toFixed(2) }}</p>
          </div>
        </div>
      </div>

      <!-- Modal de imagem -->
      <div
          v-if="showModal"
          class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          @click.self="closeModal"
      >
        <div class="relative max-w-3xl w-full p-4">
          <button
              class="absolute top-2 right-2 text-white text-2xl font-bold"
              @click="closeModal"
          >
            &times;
          </button>
          <img :src="selectedImage" class="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl" :alt="selectedImage.name"/>
        </div>
      </div>
    </div>
  </Navbar>
</template>


<script setup lang="ts">
import {ref, computed} from 'vue'
import {catalog} from '~/data/catalog'
import {TypeEnumOptions} from '~/data/enums'
import Navbar from '~/layouts/navbar.vue'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const selectedType = ref(null)
const searchTerm = ref('')
const showModal = ref(false)
const selectedImage = ref('')
const selectedImageName = ref('')

const typeOptions = [
  {key: '', label: 'Todas'},
  ...TypeEnumOptions
]

const filteredCatalog = computed(() => {
  return catalog.filter(item => {
    const matchesType =
        !selectedType.value || !selectedType.value.key || item.type === selectedType.value.key

    const search = searchTerm.value.toLowerCase()
    const matchesSearch =
        item.name.toLowerCase().includes(search) ||
        item.tag.toLowerCase().includes(search)

    return matchesType && matchesSearch
  })
})

function openModal(image: string, name: string) {
  selectedImage.value = image
  selectedImageName.value = name
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<style>
/* Tags selecionadas e menu dropdown */
.multiselect-custom .multiselect__tags,
.multiselect-custom .multiselect__content-wrapper {
  background-color: #D2C5AB !important;
  border-color: #cdc2ae !important;
  color: #000000 !important;
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
</style>
