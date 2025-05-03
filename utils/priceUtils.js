export function calculateDiscountedPrice(item) {
    if (!item || !item.discounts || !Array.isArray(item.discounts)) {
        return item.price
    }

    const applicableDiscount = item.discounts
        .filter(discount => item.quantity >= discount.minQty)
        .sort((a, b) => b.minQty - a.minQty)[0]

    if (!applicableDiscount) {
        return item.price
    }

    if (applicableDiscount.type === 'fixed') {
        return applicableDiscount.price
    }

    if (applicableDiscount.type === 'percentage') {
        return item.price - (item.price * applicableDiscount.percentage) / 100
    }

    return item.price
}
