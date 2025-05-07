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
        <div class="mt-6 border-b py-3" v-if="cart.items && cart.items.length > 0">
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
            <p class="font-semibold">Preencha os campos de endereço para entrega</p>

            <AddressForm @update:addressData="onAddressDataUpdate" />
          </div>
        </div>

        <PaymentSelector v-if="cart.items.length > 0" class="mt-[15px] border-b py-3" :total="baseTotalWithoutInterest" ref="paymentRef" />

        <!-- Campo para aplicar cupom -->
        <div v-if="cart.items.length > 0" class="mb-4 mt-[20px] border-b py-3">
          <label class="block font-semibold mb-1 flex flex-col" for="coupon">
            Cupom de desconto:
            <span class="text-[13px] mb-[5px]">(Descontos por quantidade de miniaturas não são acumulativos com cupom)</span>
          </label>
          <div class="flex gap-2 items-center">
            <input
                id="coupon"
                v-model="couponCode"
                type="text"
                placeholder="Digite o código do cupom"
                class="placeholder-black input-field bg-[#D2C5AB] border border-[#cdc2ae] rounded p-2 text-sm w-full md:w-[250px]"
            />
            <button
                @click="applyCouponCode"
                class="bg-green-2 text-white px-4 py-2 rounded text-sm"
            >
              Aplicar
            </button>
            <button
                v-if="cart.appliedCoupon"
                @click="removeCouponCode"
                class="text-sm text-red-600 underline"
            >
              Remover
            </button>
          </div>
          <p v-if="cart.appliedCoupon" class="text-green-600 text-sm mt-1">
            Cupom aplicado: <strong>{{ cart.appliedCoupon.code }}</strong> - {{ cart.appliedCoupon.percentage }}% OFF
          </p>
        </div>

        <!-- Observação adicional -->
        <div v-if="cart.items && cart.items.length > 0" class="mt-6 w-full flex">
          <div class="w-full">
            <label for="observation" class="block font-semibold mb-1">Observação adicional (opcional):</label>
            <textarea
                id="observation"
                v-model="observationOrder"
                class="md:w-[480px] input-field placeholder-black bg-[#D2C5AB] border border-[#cdc2ae] rounded text-black w-full p-2 resize-none text-sm"
                rows="3"
                placeholder="Digite aqui alguma informação adicional para o pedido..."
            ></textarea>
          </div>
        </div>

        <div class="text-right font-bold mt-4 md:text-xl text-lg space-y-1">
          <!-- Subtotal com descontos -->
          <p class="text-[16px] text-[#000000b8]">
            Subtotal: R$ {{ cart.subtotal.toFixed(2).replace('.', ',') }}
          </p>

          <!-- Entrega, se for o caso -->
          <p class="text-[16px] text-[#000000b8]" v-if="deliveryOption === 'deliver-guarapuava'">
            Entrega (Guarapuava): + R$ {{ deliveryCharge.toFixed(2).replace('.', ',') }}
          </p>

          <!-- Juros, se houver parcelamento -->
          <p class="text-[16px] text-[#000000b8]" v-if="cart.paymentInterest > 0">
            Juros (parcelamento): + R$ {{ cart.paymentInterest.toFixed(2).replace('.', ',') }}
          </p>

          <!-- Cupom aplicado -->
          <p class="text-[16px] text-[#000000b8]" v-if="cart.appliedCoupon">
            Desconto aplicado ({{ cart.appliedCoupon.code }}):
            -R$ {{ cart.couponValue.toFixed(2).replace('.', ',') }}
          </p>

          <!-- Total final -->
          <p class="mt-2 text-lg md:text-xl">
            Total: <span class="text-emerald-600">R$ {{ totalWithDelivery.toFixed(2).replace('.', ',') }}</span>
          </p>
        </div>

        <div class="mt-[12px]">
          <p class="font-medium">Observação importante: Os pedidos são feitos pelo WhatsApp ou Instagram. Este site serve apenas para
            facilitar o atendimento — não é possível comprar diretamente por aqui.
          </p>
        </div>

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
import PaymentSelector from '~/components/PaymentSelector.vue'
import {useCoupons} from "~/stores/useCoupons";

const cart = useCartStore()
const observationOrder = ref('')
const deliveryOption = ref('')
const deliveryOptions = ref([
  {key: 'deliver-guarapuava', label: 'Entregar em Guarapuava - PR (adicional de R$ 7,00)'},
  {key: 'pick-up-order-guarapuava', label: 'Buscar em nosso endereço em Guarapuava - PR (a combinar)'},
  {key: 'deliver-by-transport', label: 'Entregar por Correios/SEDEX (a combinar informações e valores do frete pelo WhatsApp ou Instagram)'},
])

const paymentRef = ref()
const couponCode = ref('')

// Definindo o valor extra para entrega em Guarapuava
const deliveryCharge = 7.0

const deliveryData = ref({
  cep: '',
  address: '',
  neighborhood: '',
  number: '',
  complement: ''
})

async function applyCouponCode() {
  const { validateCoupon } = useCoupons()

  try {
    const coupon = await validateCoupon(couponCode.value.toUpperCase())

    if (!coupon.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Cupom inválido',
        text: coupon.message
      })
      return
    }

    cart.applyCoupon({
      code: couponCode.value,
      percentage: coupon.discount,
      couponId: coupon.couponId,
      isOneTimeUse: coupon.isOneTimeUse,
    })

    Swal.fire({
      icon: 'success',
      title: 'Cupom aplicado!',
      text: `Você ganhou ${coupon.discount}% de desconto no total.`
    })
  } catch (error) {
    console.error('Erro ao validar cupom:', error)
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Ocorreu um erro ao validar o cupom. Tente novamente mais tarde.'
    })
  }
}

function removeCouponCode() {
  cart.removeCoupon()
  couponCode.value = ''
  Swal.fire({
    icon: 'info',
    title: 'Cupom removido',
    text: 'O desconto foi removido do seu pedido.'
  })
}

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

  const rawSubtotal = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const descontoCupom = cart.appliedCoupon ? rawSubtotal * (cart.appliedCoupon.percentage / 100) : 0
  const juros = cart.paymentInterest || 0
  const deliveryCharge = deliveryOption.value === 'deliver-guarapuava' ? 7 : 0
  const totalFinal = rawSubtotal - descontoCupom + juros + deliveryCharge

  let totalLines = `💵 Subtotal: R$ ${rawSubtotal.toFixed(2)}\n`

  if (deliveryCharge > 0) {
    totalLines += `🚚 Entrega (Guarapuava): + R$ ${deliveryCharge.toFixed(2)}\n`
  }

  if (juros > 0) {
    totalLines += `📈 Juros (parcelamento): + R$ ${juros.toFixed(2)}\n`
  }

  if (cart.appliedCoupon) {
    totalLines += `🎟️ Desconto aplicado (${cart.appliedCoupon.code}): -R$ ${descontoCupom.toFixed(2)}\n`
  }

  const totalLineFinal = `💰 Total: R$ ${totalFinal.toFixed(2)}`

  const observationText = observationOrder.value.trim()
      ? `📝 Observação: ${observationOrder.value.trim()}\n\n`
      : ''

  let deliveryText = ''
  if (deliveryOption.value === 'deliver-guarapuava') {
    const { address, number, neighborhood, complement } = deliveryData.value
    const fullAddress = `${address}, Nº ${number}${complement ? `, ${complement}` : ''}`
    deliveryText = `📦 Entrega em Guarapuava - Endereço: ${fullAddress}, Bairro: ${neighborhood}`
  } else {
    const deliverValue = deliveryOptions.value.find(option => option.key === deliveryOption.value)
    deliveryText = `📦 ${deliverValue?.label}` || ''
  }

  const paymentComponent = paymentRef.value
  const paymentText = paymentComponent.getPaymentSummary()

  return (
      `Olá! 👋 Vim pelo catálogo da Taverna e gostaria de fazer um pedido:\n\n` +
      `${formattedItems}\n\n` +
      `${totalLines}` +
      `${paymentText}\n\n` +
      `${totalLineFinal}\n\n` +
      `${deliveryText}\n\n` +
      `${observationText}` +
      `Aguardo retorno para confirmar a encomenda 😊`
  )
}

async function sendOrder() {
  if (cart.items.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Carrinho vazio',
      text: 'Adicione itens antes de copiar seu pedido.',
    })
    return
  }

  Swal.fire({
    icon: 'question',
    title: 'Confirmar envio do pedido?',
    html: 'Você será redirecionado para o WhatsApp com a mensagem pronta.<br><br><strong>Esteja ciente de que o pedido só será realizado após o envio da mensagem.</strong>',
    showCancelButton: true,
    confirmButtonText: 'Abrir WhatsApp',
    cancelButtonText: 'Cancelar',
  }).then(async (result) => {
    if (result.isConfirmed) {
      const message = generateMessage()
      const number = '554288642843';
      const url = "https://api.whatsapp.com/send/?phone=" + number + "&text=" + encodeURIComponent(message);
      window.open(url, '_blank')

      if (cart.appliedCoupon && cart.appliedCoupon.couponId) {
        const { markCouponAsUsed } = useCoupons()
        await markCouponAsUsed(cart.appliedCoupon.couponId)
      }
    }
  })
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
      title: 'Pedido copiado com sucesso!',
      html: 'Agora é só colar a mensagem no nosso WhatsApp ou Instagram.<br><br><strong>Esteja ciente de que o pedido só será realizado após o envio da mensagem em um desses canais.</strong>',
    })

    if (cart.appliedCoupon && cart.appliedCoupon.couponId) {
      const { markCouponAsUsed } = useCoupons()
      await markCouponAsUsed(cart.appliedCoupon.couponId)
    }
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Erro ao copiar',
      text: 'Seu navegador pode não permitir a cópia. Tente manualmente.',
    })
  }
}

const canSubmit = computed(() => {
  const payment = paymentRef.value?.selectedMethod;
  const selectedInstallments = paymentRef.value?.selectedInstallments;

  if (cart.items.length > 0 && deliveryOption.value && !!payment) {
    if (deliveryOption.value === 'deliver-guarapuava') {
      const { address, neighborhood, number } = deliveryData.value
      return address && neighborhood && number
    }

    if (payment === 'credito') {
      return !!selectedInstallments
    }

    return true
  }
  return false
})

const totalWithDelivery = computed(() => {
  let total = cart.total
  if (deliveryOption.value === 'deliver-guarapuava') {
    total += deliveryCharge
  }
  return total
})

const totalOriginalWithDelivery = computed(() => {
  let total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  if (deliveryOption.value === 'deliver-guarapuava') {
    total += deliveryCharge
  }
  return total
})

const baseTotalWithoutInterest = computed(() => {
  let base = cart.subtotal
  if (deliveryOption.value === 'deliver-guarapuava') {
    base += deliveryCharge
  }
  return base
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

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0px 1000px #D2C5AB inset !important;
  -webkit-text-fill-color: black !important;
  transition: background-color 5000s ease-in-out 0s;
}

.input-field {
  padding: 0.5rem;
  background-color: #D2C5AB;
  border: 1px solid #cdc2ae;
  border-radius: 4px;
  color: black;
  font-size: 0.875rem;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #D2C5AB;
  outline: none;
  background-color: #D2C5AB;
}
</style>
