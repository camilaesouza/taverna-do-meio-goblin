<template>
  <div class="space-y-4">
    <h3 class="font-semibold -mb-[8px]">Forma de pagamento:</h3>

    <div class="flex flex-col gap-2">
      <label class="flex items-center gap-2">
        <input class="custom-radio" type="radio" value="pix" v-model="selectedMethod" />
        PIX
      </label>
      <label class="flex items-center gap-2">
        <input class="custom-radio" type="radio" value="credito" v-model="selectedMethod" />
        Cartão de Crédito
      </label>
      <label class="flex items-center gap-2">
        <input class="custom-radio" type="radio" value="debito" v-model="selectedMethod" />
        Cartão de Débito
      </label>
    </div>

    <div class="md:w-[425px] w-full space-y-2" v-if="selectedMethod === 'credito'">
      <label for="installments font-semibold">Parcelamento</label>
      <Multiselect
          v-model="selectedInstallments"
          :options="installmentOptions"
          placeholder="Selecione uma opção"
          class="multiselect-custom"
          :allow-empty="false"
          :show-labels="false"
          :close-on-select="true"
          :clear-on-select="false"
          track-by="installments"
          label="label"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useCartStore } from '@/stores/cart'
import Multiselect from "vue-multiselect"

const cartStore = useCartStore()

const props = defineProps<{
  total: number
}>()

const interestRates: Record<number, number> = {
  4: 7.33,
  5: 8.66,
  6: 9.96,
  7: 11.24,
  8: 12.50,
  9: 13.73,
  10: 14.93,
  11: 16.12,
  12: 17.28,
}

const selectedMethod = ref<'pix' | 'credito' | 'debito' | null>(null)
const selectedInstallments = ref(null)

const maxInstallments = computed(() => {
  if (props.total >= 600) return 12
  if (props.total >= 400) return 6
  if (props.total >= 200) return 3
  return 1
})

const installmentOptions = computed(() => {
  const options = []
  if (!props.total || props.total <= 0) return options

  for (let i = 1; i <= maxInstallments.value; i++) {
    let interestRate = 0
    let labelSuffix = ''
    if (i >= 4) {
      const percentage = interestRates[i] || 0
      interestRate = percentage / 100
      labelSuffix = ` (com juros)`
    }

    const totalWithInterest = props.total * (1 + interestRate)
    const amount = totalWithInterest / i

    options.push({
      installments: i,
      amount,
      totalWithInterest,
      label: `${i}x de R$ ${amount.toFixed(2).replace('.', ',')} (Total: R$ ${totalWithInterest.toFixed(2).replace('.', ',')})${labelSuffix}`
    })
  }

  return options
})

watch([selectedMethod, selectedInstallments], () => {
  if (selectedMethod.value === 'credito' && selectedInstallments.value) {
    const juros = selectedInstallments.value.totalWithInterest - props.total
    cartStore.setPaymentInterest(juros)
  } else {
    cartStore.setPaymentInterest(0)
  }
})

defineExpose({
  getPaymentSummary: () => {
    if (selectedMethod.value === 'pix') {
      return '💳 Forma de pagamento: PIX (à vista)'
    } else if (selectedMethod.value === 'debito') {
      return '💳 Forma de pagamento: Cartão de Débito (à vista)'
    } else if (selectedMethod.value === 'credito') {
      const parcela = selectedInstallments.value
      let paymentText = '💳 Forma de pagamento: Cartão de Crédito'

      if (parcela) {
        paymentText = `💳 Forma de pagamento: Cartão de Crédito\n` +
            `🧾 Parcelamento: ${parcela.installments}x de R$ ${parcela.amount.toFixed(2).replace('.', ',')} ` +
            `(total: R$ ${parcela.totalWithInterest.toFixed(2).replace('.', ',')})`
      }

      return paymentText
    } else {
      return '💳 Forma de pagamento: não selecionada'
    }
  },
  selectedMethod,
  selectedInstallments,
})
</script>


<style scoped>
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

/* Tags selecionadas e menu dropdown */
.multiselect-custom .multiselect__tags,
.multiselect-custom .multiselect__content-wrapper {
  background-color: #D2C5AB !important;
  border-color: #cdc2ae !important;
  color: #000000 !important;
  min-height: 43px !important;
}

/* Opções da lista */
.multiselect-custom .multiselect__option {
  background-color: #D2C5AB !important;
  color: #000000 !important;
}

/* Hover nas opções (passar o mouse) */
.multiselect-custom .multiselect__option--highlight {
  background-color: #c6b899 !important;
  color: #000000 !important;
}

/* Opção selecionada */
.multiselect-custom .multiselect__option--selected {
  background-color: #D2C5AB !important;
  font-weight: bold;
}

/* Hover na opção que está selecionada */
.multiselect-custom .multiselect__option--selected.multiselect__option--highlight {
  background-color: #b9ab8e !important;
}

/* Placeholder */
.multiselect-custom .multiselect__placeholder {
  color: #000000 !important;
}

/* Scrollbar para Webkit (Chrome, Safari, Edge) */
.multiselect-custom .multiselect__content-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.multiselect-custom .multiselect__content-wrapper::-webkit-scrollbar-thumb {
  background-color: #A4977B;
  border-radius: 4px;
}

.multiselect-custom .multiselect__content-wrapper::-webkit-scrollbar-track {
  background-color: #D2C5AB;
}

/* Scrollbar para Firefox */
.multiselect-custom .multiselect__content-wrapper {
  scrollbar-width: thin;
  scrollbar-color: #A4977B #D2C5AB;
}

.multiselect-custom .multiselect__single {
  background-color: #D2C5AB !important;
  color: #000000 !important;
}

.multiselect-custom .multiselect__input {
  background-color: #D2C5AB !important;
  color: #000000 !important;
}

.multiselect-custom .multiselect__clear {
  display: block !important;
}
</style>
