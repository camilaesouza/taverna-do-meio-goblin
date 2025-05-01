import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    getters: {
        totalItems: (state) =>
            state.items.reduce((acc, item) => acc + item.quantity, 0),

        totalPrice: (state) => {
            return state.items.reduce((acc, item) => {
                let unitPrice = item.price
                const observation = item.observation || ''

                // Detecta texto tipo: "no mínimo 3 o preço diminui para 16 R$"
                const descontoMatch = observation.match(/no mínimo (\d+).*?(\d+[,.]?\d*)\s*R\$/i)

                if (descontoMatch) {
                    const minQty = parseInt(descontoMatch[1])
                    const discountPrice = parseFloat(descontoMatch[2].replace(',', '.'))

                    if (item.quantity >= minQty) {
                        unitPrice = discountPrice
                    }
                }

                return acc + unitPrice * item.quantity
            }, 0).toFixed(2)
        }
    },
    actions: {
        addItem(miniature, qty = 1) {
            const found = this.items.find(i => i.id === miniature.id)
            if (found) {
                found.quantity += qty
            } else {
                this.items.push({ ...miniature, quantity: qty })
            }
        },
        removeItem(id) {
            this.items = this.items.filter(item => item.id !== id)
        },
        updateQuantity(id, quantity) {
            const item = this.items.find(i => i.id === id)
            if (item) item.quantity = quantity
        },
        clearCart() {
            this.items = []
        },
        decreaseQuantity(itemId) {
            const item = this.items.find(i => i.id === itemId)
            if (!item) return

            if (item.quantity > 1) {
                item.quantity--
            } else {
                // Remove se chegar a 0
                this.removeItem(itemId)
            }
        }
    },
    persist: true
})
