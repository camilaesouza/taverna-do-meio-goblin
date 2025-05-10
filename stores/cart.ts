import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        appliedCoupon: null, // { code: 'PROMO10', percentage: 10 }
        paymentInterest: 0,
    }),

    getters: {
        totalQuantity(state) {
            return state.items.reduce((sum, item) => sum + item.quantity, 0)
        },
        subtotal(state) {
            if (state.appliedCoupon) {
                return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
            }
            return state.items.reduce((sum, item) => {
                const price = item.discountedPrice || item.price
                return sum + price * item.quantity
            }, 0)
        },
        total(state) {
            const rawTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
            let total = rawTotal
            if (state.appliedCoupon) {
                total = rawTotal * (1 - state.appliedCoupon.percentage / 100)
            }

            return total + state.paymentInterest
        },

        couponValue(state) {
            if (!state.appliedCoupon) return 0
            const rawTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
            return rawTotal * (state.appliedCoupon.percentage / 100)
        }
    },

    actions: {
        setPaymentInterest(interest: number) {
            this.paymentInterest = interest
        },
        addItem(item) {
            const keyOption = item.option || ''
            const existing = this.items.find(i => i.id === item.id && i.option === keyOption)

            if (existing) {
                existing.quantity += item.quantity
                this.items
                    .filter(i => i.id === item.id)
                    .forEach(i => this.applyItemDiscount(i))
            } else {
                const newItem = {
                    ...item,
                    option: keyOption,
                    discountedPrice: item.price
                }
                this.items.push(newItem)
            }

            this.items
                .filter(i => i.id === item.id)
                .forEach(i => this.applyItemDiscount(i))
        },

        updateQuantity(key, newQuantity) {
            const item = this.items.find(i => i.id === key.id && i.option === (key.option || ''))
            if (item) {
                item.quantity = newQuantity
            }

            this.items
                .filter(i => i.id === item.id)
                .forEach(i => this.applyItemDiscount(i))
        },

        removeItem(key) {
            this.items = this.items.filter(i => !(i.id === key.id && i.option === (key.option || '')))

            this.items
                .filter(i => i.id === key.id)
                .forEach(i => this.applyItemDiscount(i))
        },

        decreaseQuantity(key) {
            const item = this.items.find(i => i.id === key.id && i.option === (key.option || ''))
            if (item) {
                item.quantity -= 1
                if (item.quantity <= 0) {
                    this.removeItem(key)
                }
            }

            this.items
                .filter(i => i.id === item.id)
                .forEach(i => this.applyItemDiscount(i))
        },

        applyItemDiscount(item) {
            if (this.appliedCoupon) {
                item.discountedPrice = item.price
                return
            }

            if (!item.discounts || !item.discounts.length) {
                item.discountedPrice = item.price
                return
            }

            const totalQuantityForId = this.items
                .filter(i => i.id === item.id)
                .reduce((sum, i) => sum + i.quantity, 0)

            let appliedDiscount = null
            for (const discount of item.discounts) {
                if (totalQuantityForId >= discount.minQty) {
                    if (!appliedDiscount || discount.minQty > appliedDiscount.minQty) {
                        appliedDiscount = discount
                    }
                }
            }

            if (appliedDiscount) {
                if (appliedDiscount.type === 'fixed') {
                    item.discountedPrice = appliedDiscount.price
                } else if (appliedDiscount.type === 'percentage') {
                    item.discountedPrice = item.price * (1 - appliedDiscount.percentage / 100)
                }
            } else {
                item.discountedPrice = item.price
            }
        },

        applyCoupon(coupon) {
            this.appliedCoupon = coupon
            this.items.forEach(item => {
                item.discountedPrice = item.price
            })
        },

        removeCoupon() {
            this.appliedCoupon = null
            this.items.forEach(item => this.applyItemDiscount(item))
        }
    }
})
