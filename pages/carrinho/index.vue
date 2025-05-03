<template>
  <Navbar>
    <div class="px-4 py-6">
      <breadcrumb label="Meu carrinho" />

      <!-- Observações fixas -->
      <div class="mt-[10px] bg-[#E2D6BF] rounded-lg shadow-lg p-3 border border-[#cac1ad] mt-[-11px] mb-[20px] md:text-[14px] text-[12px]">
        <h5 class="text-green-2 font-semibold">Observações:</h5>
        <p class="mt-1">- Ao clicar para enviar seu pedido, será encaminhado ao Whatsapp da loja, mande a mensagem com as informações dos itens desejados, assim iniciaremos o seu atendimento para encomenda das miniaturas.
          Se preferir você pode clicar no botão "Copiar mensagem" e direcionar a mensagem você mesmo para o nosso
          <a class="font-semibold underline" target="_blank" href="https://wa.me/554288642843">Whatsapp</a> ou ao
          também no nosso
          <a class="font-semibold underline" target="_blank" href="https://www.instagram.com/taverna_do_meio_goblin">Instagram</a>.
        </p>
        <p class="mt-1">- Após o seu encaminhamento da mensagem e o atendimento completo, será passado um prazo para a entrega dos seus itens, assim como também um orçamento a parte para a entrega!</p>
        <p class="mt-[13px] md:text-[24px] text-[18px] font-railey md:text-start text-center">Os melhores preços, de qualquer lugar!</p>
      </div>

      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Meus itens</h1>

        <div v-if="cart.items && cart.items.length <= 0">Você não tem itens adicionados no carrinho!</div>

        <CartItem v-for="item in cart.items" :key="item.id" :item="item" />

        <div v-if="cart.globalDiscount" class="text-green-600 text-sm mt-1 text-right">
          <p v-if="cart.globalDiscount.type === 'percentage'">
            Desconto aplicado: {{ cart.globalDiscount.percentage }}% OFF
          </p>
          <p v-else-if="cart.globalDiscount.type === 'fixed'">
            Desconto aplicado: -R$ {{ cart.globalDiscount.amount.toFixed(2) }}
          </p>
        </div>

        <!-- Opções de entrega -->
        <div class="mt-6" v-if="cart.items && cart.items.length > 0">
          <label class="block font-semibold mb-2">Escolha a forma de entrega:</label>
          <div class="space-y-2">
            <label
                v-for="deliver in deliveryOptions"
                :key="deliver.key"
                class="flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-all"
            >
              <input
                  type="radio"
                  :value="deliver.key"
                  v-model="deliveryOption"
                  class="custom-radio"
              />
              <span class="text-sm sm:text-base">{{ deliver.label }}</span>
            </label>
          </div>

          <div v-if="deliveryOption === 'deliver-guarapuava'" class="mt-4">
            <p class="font-medium">Preencha os campos de endereço para entrega</p>

            <AddressForm @update:addressData="onAddressDataUpdate" />
          </div>
        </div>

        <!-- Observação adicional -->
        <div v-if="cart.items && cart.items.length > 0" class="mt-6 w-full flex">
          <div class="w-full">
            <label for="observation" class="block font-semibold mb-1">Observação adicional (opcional):</label>
            <textarea
                id="observation"
                v-model="observationOrder"
                class="md:w-[480px] placeholder-black bg-[#D2C5AB] border border-[#cdc2ae] rounded text-black w-full p-2 resize-none text-sm"
                rows="3"
                placeholder="Digite aqui alguma informação adicional para o pedido..."
            ></textarea>
          </div>
        </div>

        <p class="text-right font-bold mt-4 md:text-xl text-lg">Total: R$ {{ totalWithDelivery.toFixed(2) }}</p>

        <!-- Botões -->
        <div class="w-full flex md:gap-5 gap-1 md:flex-row flex-col-reverse justify-between items-center mt-8">
          <NuxtLink to="/catalogo"
                    class="text-center md:w-[300px] text-xs md:text-base mt-4 bg-green-2 text-white px-4 py-2 rounded w-full disabled:opacity-50">
            <span v-if="cart.items && cart.items.length > 0">Voltar para o catálogo</span>
            <span v-else>Ver catálogo</span>
          </NuxtLink>
          <div class="w-full flex md:flex-row flex-col-reverse items-center md:gap-5 gap-1 md:justify-end justify-start"
               v-if="cart.items && cart.items.length > 0">
            <button
                @click="copyOrder"
                :disabled="!canSubmit"
                class="md:w-[300px] text-xs md:text-base mt-4 bg-[#b0a58e] text-black px-4 py-2 rounded w-full disabled:opacity-50"
            >
              Copiar mensagem para o pedido
            </button>
            <button
                @click="sendOrder"
                :disabled="!canSubmit"
                class="md:w-[300px] text-xs md:text-base mt-4 bg-green-2 text-white px-4 py-2 rounded w-full disabled:opacity-50"
            >
              Enviar meu pedido pelo Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script setup lang="ts">
import Swal from 'sweetalert2'
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { calculateDiscountedPrice } from '~/utils/priceUtils'
import CartItem from '~/components/CartItem.vue'
import Navbar from '~/layouts/navbar.vue'
import { TypeEnumOptions } from '~/data/enums.js'
import AddressForm from '~/components/AddressForm.vue'

const cart = useCartStore()
const observationOrder = ref('')
const deliveryOption = ref('')
const deliveryAddress = ref('') // Endereço (Rua e Número)
const deliveryNeighborhood = ref('')
const deliveryComplement = ref('')
const deliveryOptions = ref([
  {key: 'deliver-guarapuava', label: 'Entregar em Guarapuava - PR (adicional de R$ 7,00)'},
  {key: 'pick-up-order-guarapuava', label: 'Buscar em nosso endereço em Guarapuava - PR (a combinar)'},
  {key: 'deliver-by-transport', label: 'Entregar por Correios/SEDEX (a combinar informações e valores do frete pelo WhatsApp ou Instagram)'},
])

// Definindo o valor extra para entrega em Guarapuava
const deliveryCharge = 7.0

const deliveryData = ref({
  cep: '',
  address: '',
  neighborhood: '',
  number: '',
  complement: ''
})

function onAddressDataUpdate(data: typeof deliveryData.value) {
  deliveryData.value = data
}

function getTypeLabel(typeKey: unknown): string {
  if (typeof typeKey !== 'string') return ''
  const found = TypeEnumOptions.find(option => option.key === typeKey)
  return found ? found.label : typeKey
}

function generateMessage() {
  const formattedItems = cart.items.map(item => {
    const originalPrice = item.price
    const finalPrice = calculateDiscountedPrice(item)
    const itemTotal = (finalPrice * item.quantity).toFixed(2)
    const unitPrice = finalPrice.toFixed(2)
    const unitDiscount = originalPrice - finalPrice

    const optionText = item.option ? ` - Opção: ${item.option.toUpperCase()}` : ''
    const discountText = unitDiscount > 0 ? ` (aplicado desconto de R$ ${unitDiscount.toFixed(2)} por unidade)` : ''

    return `• ${item.name} (id: ${item.id}, tamanho: ${item.size}) - ${getTypeLabel(item.type)}${optionText}
        \t- Quantidade: ${item.quantity}
        \t- Valor unitário: R$ ${unitPrice}${discountText}
        \t- Valor total: R$ ${itemTotal}`
  }).join('\n\n')

  const totalWithDiscount = Number(cart.total).toFixed(2)
  const globalDiscountText = cart.globalDiscount
      ? ` (Aplicado desconto de R$ ${(cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0) - cart.total).toFixed(2)})`
      : ''

  let totalLine = `💰 Total do pedido: R$ ${totalWithDiscount}${globalDiscountText}`

  const observationText = observationOrder.value.trim()
      ? `📝 Observação: ${observationOrder.value.trim()}\n\n`
      : ''

  let deliveryText = ''
  if (deliveryOption.value === 'deliver-guarapuava') {
    const { address, number, neighborhood, complement } = deliveryData.value
    const fullAddress = `${address}, Nº ${number}${complement ? `, ${complement}` : ''}`
    deliveryText = `📦 Entrega em Guarapuava - Endereço: ${fullAddress}, Bairro: ${neighborhood}`
    totalLine = `💰 Total do pedido: R$ ${(Number(totalWithDiscount) + deliveryCharge).toFixed(2)}${globalDiscountText} (adicionados R$ ${deliveryCharge.toFixed(2)} de entrega)`
  } else {
    const deliverValue = deliveryOptions.value.find(option => option.key === deliveryOption.value)
    deliveryText = `📦 ${deliverValue?.label}` || '';
  }

  return (
      `Olá! 👋 Vim pelo catálogo da Taverna e gostaria de fazer um pedido:\n\n` +
      `${formattedItems}\n\n` +
      `${totalLine}\n\n` +
      `${deliveryText}\n\n` +
      `${observationText}` +
      `Aguardo retorno para confirmar a encomenda 😊`
  )
}

function sendOrder() {
  if (cart.items.length === 0) {
    alert('Seu carrinho está vazio!')
    return
  }

  const message = generateMessage()
  const url = `https://wa.me/554288642843?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

async function copyOrder() {
  if (cart.items.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Carrinho vazio',
      text: 'Adicione itens antes de copiar seu pedido.',
    })
    return
  }

  try {
    await navigator.clipboard.writeText(generateMessage())
    Swal.fire({
      icon: 'success',
      title: 'Copiado!',
      text: 'Mensagem copiada com sucesso. Agora é só encaminhar ao nosso Whatsapp.',
      toast: true,
      position: 'top-end',
      timer: 3000,
      showConfirmButton: false,
    })
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Erro ao copiar',
      text: 'Seu navegador pode não permitir a cópia. Tente manualmente.',
    })
    console.error('Copy error:', err)
  }
}

// Computed para verificar se todos os campos foram preenchidos corretamente
const canSubmit = computed(() => {
  if (cart.items.length > 0 && deliveryOption.value) {
    if (deliveryOption.value === 'deliver-guarapuava') {
      const { address, neighborhood, number } = deliveryData.value
      return address && neighborhood && number
    }
    return true
  }
  return false
})

// Valor total com a entrega adicionada (se for Guarapuava)
const totalWithDelivery = computed(() => {
  let total = cart.total
  if (deliveryOption.value === 'deliver-guarapuava') {
    total += deliveryCharge
  }
  return total
})
</script>
<style>
.custom-radio {
  appearance: none;
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #c5b490;
  border-radius: 50%;
  background-color: #c7b99b;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  position: relative;
}

.custom-radio::before {
  content: "";
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  transform: scale(0);
  background-color: #4e4525;
  transition: transform 0.2s ease-in-out;
}

.custom-radio:checked::before {
  transform: scale(1);
}

/* Aumenta a área clicável sem mudar visualmente o tamanho */
label.flex.items-center {
  padding: 2px;
  border-radius: 0.5rem;
  transition: background 0.2s ease;
}
</style>
