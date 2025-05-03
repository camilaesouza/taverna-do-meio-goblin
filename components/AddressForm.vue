<template>
  <div class="grid gap-3 md:grid-cols-3 grid-cols-1 mt-4">
    <input
        v-model="cep"
        @input="onCepInput"
        maxlength="9"
        placeholder="CEP"
        class="placeholder-black p-2 bg-[#D2C5AB] border border-[#cdc2ae] rounded text-black text-sm"
    />
    <input
        v-model="address"
        :disabled="true"
        placeholder="Rua (preenchido automaticamente)"
        class="cursor-not-allowed placeholder-black p-2 bg-[#bbaf9a] border border-[#cdc2ae] rounded text-black text-sm"
    />
    <input
        v-model="neighborhood"
        :disabled="true"
        placeholder="Bairro (preenchido automaticamente)"
        class="cursor-not-allowed placeholder-black p-2 bg-[#bbaf9a] border border-[#cdc2ae] rounded text-black text-sm"
    />

    <input
        v-model="number"
        placeholder="Número"
        class="placeholder-black p-2 bg-[#D2C5AB] border border-[#cdc2ae] rounded text-black text-sm"
    />
    <input
        v-model="complement"
        placeholder="Complemento"
        class="placeholder-black p-2 bg-[#D2C5AB] border border-[#cdc2ae] rounded text-black text-sm"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

const emit = defineEmits(['update:addressData'])

const cep = ref('')
const address = ref('')
const neighborhood = ref('')
const number = ref('')
const complement = ref('')

function onCepInput() {
  const cleanedCep = cep.value.replace(/\D/g, '')
  if (cleanedCep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            address.value = data.logradouro
            neighborhood.value = data.bairro
            emitAddressData()
          }
        })
        .catch(() => {
          console.error('Erro ao buscar CEP.')
        })
  }
}

function emitAddressData() {
  emit('update:addressData', {
    cep: cep.value,
    address: address.value,
    neighborhood: neighborhood.value,
    number: number.value,
    complement: complement.value
  })
}

// Atualiza sempre que qualquer campo mudar
watch([number, complement], emitAddressData)
</script>
