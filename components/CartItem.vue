<template>
  <div class="border-b py-3 flex justify-between items-center">
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
</style>
