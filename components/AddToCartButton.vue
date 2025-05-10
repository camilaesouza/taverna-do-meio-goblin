<template>
  <div>
    <!-- Se o item está no carrinho -->
    <div v-if="itemInCart">
      <!-- Se o item tem opções, exibe o select para escolher a opção -->
      <div v-if="item.options && item.options.length" class="mt-4">
        <label class="block text-xs font-semibold mb-1 text-green-1">Escolha a opção:</label>
        <multiselect
            v-model="selectedOption"
            :options="item.options"
            :custom-label="opt => opt.toUpperCase()"
            placeholder="Selecione uma opção"
            class="multiselect-custom"
            :searchable="false"
            :show-labels="false"
            :close-on-select="true"
        />
      </div>

      <!-- Botões de quantidade -->
      <div class="flex items-center justify-between mt-4 gap-2">
        <button
            @click="decreaseQuantity"
            :disabled="item.options?.length && !selectedOption"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          −
        </button>
        <span class="text-center font-bold text-lg">{{ quantity }}</span>
        <button
            @click="increaseQuantity"
            :disabled="item.options?.length && !selectedOption"
            class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>

    <!-- Se o item não está no carrinho -->
    <div v-else>
      <!-- Se o item tem opções, exibe o select para escolher a opção -->
      <div v-if="item.options && item.options.length" class="mt-4">
        <label class="block text-xs font-semibold mb-1 text-green-1">Escolha a opção:</label>
        <multiselect
            v-model="selectedOption"
            :options="item.options"
            :custom-label="opt => opt.toUpperCase()"
            placeholder="Selecione..."
            class="multiselect-custom"
            :searchable="false"
            :show-labels="false"
            :close-on-select="true"
        />
      </div>

      <!-- Botão de adicionar ao carrinho -->
      <button
          @click="addToCart"
          :disabled="item.options?.length && !selectedOption"
          class="md:text-sm text-[11px] bg-green-2 hover:bg-green-1 text-white font-medium py-2 px-4 rounded mt-4 w-full disabled:opacity-50"
      >
        Adicionar ao pedido
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useCartStore } from '~/stores/cart'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const selectedOption = ref('')

const itemInCart = computed(() => {
  return cartStore.items.find(
      i => i.id === props.item.id && (i.option || '') === (selectedOption.value || '')
  )
})

const quantity = computed(() => itemInCart.value?.quantity || 0)

const addToCart = () => {
  const cartItem = {
    ...props.item,
    option: selectedOption.value || '',
    quantity: 1
  }
  cartStore.addItem(cartItem)
}

const increaseQuantity = () => {
  const cartItem = {
    ...props.item,
    option: selectedOption.value || '',
    quantity: 1
  }
  cartStore.addItem(cartItem)
}

const decreaseQuantity = () => {
  cartStore.decreaseQuantity({
    id: props.item.id,
    option: selectedOption.value || ''
  })
}

watch(
    () => props.item.id,
    () => {
      const existing = cartStore.items.find(
          i => i.id === props.item.id && (i.option || '') !== ''
      )
      selectedOption.value = existing?.option || ''
    },
    { immediate: true }
)
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

/* CSS media query dentro de um stylesheet */
@media (max-width: 600px) {
  .multiselect-custom .multiselect__tags {
    font-size: 13px !important;
  }
}
</style>
