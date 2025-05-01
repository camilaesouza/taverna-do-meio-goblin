export function calcularPrecoComDesconto(item) {
    const observation = item.observation || ''
    const match = observation.match(/no mínimo (\d+).*?(\d+[,.]?\d*)\s*R\$/i)

    if (match) {
        const minQty = parseInt(match[1])
        const discount = parseFloat(match[2].replace(',', '.'))
        if (item.quantity >= minQty) {
            return discount
        }
    }

    return item.price
}