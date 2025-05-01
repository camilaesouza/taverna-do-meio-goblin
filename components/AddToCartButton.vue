<template>
  <div>
    <div v-if="itemInCart">
      <div class="flex items-center justify-between mt-4 gap-2">
        <button
            @click="decreaseQuantity"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          −
        </button>
        <span class="text-center font-bold text-lg">{{ quantity }}</span>
        <button
            @click="increaseQuantity"
            class="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
    <div v-else>
      <button
          @click="addToCart"
          class="md:text-sm text-[8px] bg-green-2 hover:bg-green-1 text-white font-medium py-2 px-4 rounded mt-4 w-full"
      >
        Adicionar ao meu pedido
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const itemInCart = computed(() =>
    cartStore.items.find(i => i.id === props.item.id)
)

const quantity = computed(() => itemInCart.value?.quantity || 0)

const addToCart = () => {
  cartStore.addItem(props.item)
}

const increaseQuantity = () => {
  cartStore.addItem(props.item)
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    cartStore.decreaseQuantity(props.item.id)
  } else {
    cartStore.removeItem(props.item.id)
  }
}
</script>
