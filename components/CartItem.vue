<template>
  <div class="border-b py-3 flex justify-between items-center">
    <div>
      <p class="font-bold">{{ item.name }}</p>
      <p class="text-sm">Tamanho: {{ item.size }}</p>
      <p class="text-xs">{{ item.observation }}</p>
      <p class="text-sm">
        R$ {{ discountedPrice.toFixed(2) }}
        <span v-if="discountApplied" class="line-through text-xs text-red-500 ml-2">R$ {{ item.price.toFixed(2) }}</span>
      </p>
    </div>
    <div class="flex items-center gap-3 md:flex-row flex-col">
      <!-- Estilo de quantidade com lógica de remoção automática -->
      <div class="flex items-center bg-[#D2C5AB] h-[35px] border border-[#cdc2ae] rounded text-black overflow-hidden">
        <button
            @click="decreaseQuantity"
            class="px-2 py-1 bg-[#B0A58E] text-white border-r border-[#cdc2ae]">
          −
        </button>
        <input
            type="number"
            min="0"
            v-model.number="item.quantity"
            @change="update"
            class="w-[50px] text-center text-xs outline-none bg-[#D2C5AB] text-black"
        />
        <button
            @click="increaseQuantity"
            class="px-2 py-1 bg-[#B0A58E] text-white border-l border-[#cdc2ae]">
          +
        </button>
      </div>
      <button @click="remove" class="text-red-500 text-sm">Remover</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({ item: Object })
const cart = useCartStore()

function update() {
  if (props.item.quantity <= 0) {
    remove()
  } else {
    cart.updateQuantity(props.item.id, props.item.quantity)
  }
}

function remove() {
  cart.removeItem(props.item.id)
}

function increaseQuantity() {
  cart.updateQuantity(props.item.id, props.item.quantity + 1)
}

function decreaseQuantity() {
  cart.updateQuantity(props.item.id, props.item.quantity - 1)
  if (props.item.quantity <= 0) {
    remove()
  }
}

const discountedPrice = computed(() => {
  const observation = props.item.observation || ''
  const match = observation.match(/no mínimo (\d+).*?(\d+[,.]?\d*)\s*R\$/i)

  if (match) {
    const minQty = parseInt(match[1])
    const discount = parseFloat(match[2].replace(',', '.'))
    if (props.item.quantity >= minQty) {
      return discount
    }
  }

  return props.item.price
})

const discountApplied = computed(() => discountedPrice.value < props.item.price)
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
</style>
