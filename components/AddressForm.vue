<template>
  <div class="grid gap-3 md:grid-cols-3 grid-cols-1 mt-4">
    <input
        v-model="cep"
        @input="onCepInput"
        maxlength="9"
        placeholder="CEP"
        class="placeholder-black input-field"
    />
    <input
        v-model="address"
        :disabled="true"
        placeholder="Rua (preenchido automaticamente)"
        class="placeholder-black input-field cursor-not-allowed"
    />
    <input
        v-model="neighborhood"
        :disabled="true"
        placeholder="Bairro (preenchido automaticamente)"
        class="placeholder-black input-field cursor-not-allowed"
    />
    <input
        v-model="number"
        placeholder="Número"
        class="placeholder-black input-field"
    />
    <input
        v-model="complement"
        placeholder="Complemento"
        class="placeholder-black input-field"
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
          } else {
            clearAddressFields()
          }
        })
        .catch(() => {
          console.error('Erro ao buscar CEP.')
          clearAddressFields()
        })
  } else {
    clearAddressFields()
  }
}

function clearAddressFields() {
  address.value = ''
  neighborhood.value = ''
  number.value = ''
  complement.value = ''
  emitAddressData()
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


<style scoped>
.input-field {
  padding: 0.5rem;
  background-color: #D2C5AB;
  border: 1px solid #cdc2ae;
  border-radius: 4px;
  color: black;
  font-size: 0.875rem;
  transition: border-color 0.3s ease;
}

/* Remover a borda azul padrão do navegador ao focar */
.input-field:focus {
  border-color: #D2C5AB; /* Cor de borda ao focar no input */
  outline: none;
  background-color: #D2C5AB; /* Manter a cor de fundo consistente */
}

/* Para evitar borda ou fundo azul quando o input tem sugestões */
.input-field:focus:not(.cursor-not-allowed) {
  background-color: #D2C5AB; /* Garantir a cor de fundo correta */
}

.input-field.cursor-not-allowed {
  background-color: #bbaf9a; /* Manter a cor para campos desabilitados */
  cursor: not-allowed;
  border-color: #cdc2ae;
}

.input-field.cursor-not-allowed:focus {
  border-color: #cdc2ae; /* Evita alteração na borda do campo desabilitado */
  background-color: #bbaf9a; /* Manter o fundo do campo desabilitado consistente */
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0px 1000px #D2C5AB inset !important;
  -webkit-text-fill-color: black !important;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
