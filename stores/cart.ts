import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        globalDiscountsBySubtotal: [
            // { minSubtotal: 200, type: 'percentage', percentage: 10 },
            // { minSubtotal: 500, type: 'percentage', percentage: 50 },
        ],
        globalDiscount: null,
    }),

    getters: {
        subtotal(state) {
            return state.items.reduce((sum, item) => {
                const price = item.discountedPrice || item.price
                return sum + price * item.quantity
            }, 0)
        },
        totalQuantity(state) {
            return state.items.reduce((sum, item) => sum + item.quantity, 0)
        },
        total(state) {
            let total = this.subtotal

            // Aplica o desconto global, se houver
            if (state.globalDiscount) {
                if (state.globalDiscount.type === 'percentage') {
                    total -= total * (state.globalDiscount.percentage / 100)
                } else if (state.globalDiscount.type === 'fixed') {
                    total -= state.globalDiscount.amount
                }
            }
            return total
        }
    },

    actions: {
        addItem(item) {
            const keyOption = item.option || ''
            const existing = this.items.find(
                i => i.id === item.id && i.option === keyOption
            )

            if (existing) {
                existing.quantity += item.quantity
                this.applyItemDiscount(existing)
            } else {
                const newItem = {
                    ...item,
                    option: keyOption,
                    discountedPrice: item.price
                }
                this.applyItemDiscount(newItem)
                this.items.push(newItem)
            }

            // Verifica e aplica o desconto global após adicionar o item
            this.checkGlobalDiscount()
        },

        updateQuantity(key, newQuantity) {
            const item = this.items.find(i =>
                i.id === key.id && i.option === (key.option || '')
            )
            if (item) {
                item.quantity = newQuantity
                this.applyItemDiscount(item)
                this.checkGlobalDiscount()
            }
        },

        removeItem(key) {
            this.items = this.items.filter(i =>
                !(i.id === key.id && i.option === (key.option || ''))
            )
            // Verifica o desconto global após remover o item
            this.checkGlobalDiscount()
        },

        decreaseQuantity(key) {
            const item = this.items.find(i =>
                i.id === key.id && i.option === (key.option || '')
            )
            if (item) {
                item.quantity -= 1
                if (item.quantity <= 0) {
                    this.removeItem(key)
                } else {
                    this.applyItemDiscount(item)
                }
            }
            this.checkGlobalDiscount()
        },

        applyItemDiscount(item) {
            if (!item.discounts || !item.discounts.length) {
                item.discountedPrice = item.price
                return
            }

            let appliedDiscount = null
            // Verificando o desconto baseado na quantidade de itens comprados
            for (const discount of item.discounts) {
                if (item.quantity >= discount.minQty) {
                    if (!appliedDiscount || discount.minQty > appliedDiscount.minQty) {
                        appliedDiscount = discount
                    }
                }
            }

            // Se encontrou algum desconto aplicável
            if (appliedDiscount) {
                if (appliedDiscount.type === 'fixed') {
                    item.discountedPrice = appliedDiscount.price // Desconto fixo
                } else if (appliedDiscount.type === 'percentage') {
                    item.discountedPrice = item.price * (1 - appliedDiscount.percentage / 100) // Desconto percentual
                }
            } else {
                item.discountedPrice = item.price // Sem desconto
            }
        },

        checkGlobalDiscount() {
            const subtotal = this.subtotal

            // Verifica o melhor desconto global baseado no subtotal
            const bestDiscount = this.globalDiscountsBySubtotal
                .filter(d => subtotal >= d.minSubtotal)
                .sort((a, b) => b.minSubtotal - a.minSubtotal)[0]

            if (bestDiscount) {
                this.globalDiscount = bestDiscount
            } else {
                this.globalDiscount = null
            }
        }
    }
})
