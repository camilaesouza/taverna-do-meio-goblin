<template>
  <div class="border-b py-3 flex justify-between items-center">
    <div class="flex gap-3">
      <div @click="openModal" class="md:w-[90px] w-[100px] md:h-[90px] h-[60px] overflow-hidden flex items-center justify-center">
        <img :src="item.image" :alt="item.tag" class="w-full h-full object-cover">
      </div>
     <div>
       <p class="font-bold">
         {{ item.name }}
         <span v-if="item.option">({{ item.option }})</span>
       </p>
       <p class="text-sm">Tamanho: {{ item.size }}</p>
       <p class="text-xs">{{ item.observation }}</p>
       <p class="text-sm">
         R$ {{ (item.discountedPrice || item.price).toFixed(2) }}
         <span
             v-if="item.discountedPrice && item.discountedPrice < item.price"
             class="line-through text-xs text-red-500 ml-2"
         >
          R$ {{ item.price.toFixed(2) }}
        </span>
       </p>
     </div>
    </div>
    <div class="flex items-center gap-3 md:flex-row flex-col">
      <div
          class="flex items-center bg-[#D2C5AB] h-[35px] border border-[#cdc2ae] rounded text-black overflow-hidden"
      >
        <button
            @click="decreaseQuantity"
            class="px-2 py-1 bg-[#B0A58E] text-white border-r border-[#cdc2ae]"
        >
          −
        </button>
        <input
            type="number"
            min="0"
            v-model.number="localQuantity"
            @change="update"
            class="w-[50px] text-center text-xs outline-none bg-[#D2C5AB] text-black"
        />
        <button
            @click="increaseQuantity"
            class="px-2 py-1 bg-[#B0A58E] text-white border-l border-[#cdc2ae]"
        >
          +
        </button>
      </div>
      <button @click="remove" class="text-red-500 text-sm">Remover</button>
    </div>

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

        <!-- Informações da imagem -->
        <div class="flex justify-center flex-col items-center text-white mb-1 text-center">
          <p class="font-bold md:text-base text-sm">
            {{ item.id }} - {{ item.name }}
            <span v-if="item.option">({{ item.option }})</span>
          </p>
          <p class="text-sm font-medium">R$ {{ (item.discountedPrice || item.price).toFixed(2) }}</p>
          <p class="md:text-sm text-xs">{{ item.observation }}</p>
        </div>

        <!-- Imagem -->
        <div class="w-full md:h-[70vh] relative overflow-hidden flex justify-center items-center">
          <img
              :src="item.image"
              class="zoomable-image z-0"
              :alt="item.tag"
              @click="toggleZoom"
              :class="{ 'zoomed': zoomActive }"
              :style="zoomDisabled ? 'pointer-events: none;' : ''"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const zoomActive = ref(false)
const zoomDisabled = ref(false)

onMounted(() => {
  zoomDisabled.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
})

const showModal = ref(false)

function openModal() {
  showModal.value = true
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

const cart = useCartStore()

const currentItemKey = computed(() => ({
  id: props.item.id,
  option: props.item.option || ''
}))

const localQuantity = ref(props.item.quantity)

watch(
    () => props.item.quantity,
    (newQty) => {
      localQuantity.value = newQty
    }
)

function update() {
  if (localQuantity.value <= 0) {
    remove()
  } else {
    cart.updateQuantity(currentItemKey.value, localQuantity.value)
  }
}

function remove() {
  cart.removeItem(currentItemKey.value)
}

function increaseQuantity() {
  localQuantity.value += 1
  update()
}

function decreaseQuantity() {
  if (localQuantity.value > 1) {
    localQuantity.value -= 1
    update()
  } else {
    remove()
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
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
</style>
