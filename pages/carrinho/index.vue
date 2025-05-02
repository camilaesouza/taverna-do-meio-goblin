<template>
  <Navbar>
    <div class="px-4 py-6">
      <breadcrumb label="Meu carrinho"></breadcrumb>

      <div
          class="mt-[10px] bg-[#E2D6BF] rounded-lg shadow-lg p-3 border border-[#cac1ad] mt-[-11px] mb-[20px] md:text-[14px] text-[12px]">
        <h5 class="text-green-2 font-semibold">Observações:</h5>
        <p class="mt-1">- Ao clicar para enviar seu pedido, será encaminhado ao Whatsapp da loja, mande a mensagem com
          as informações dos itens desejados, assim iniciaremos o seu atendimento para encomenda das miniaturas.
          Se preferir você pode clicar no botão "Copiar mensagem" e direcionar a mensagem você mesmo para o nosso
          <a class="font-semibold underline" target="_blank" href="https://wa.me/554288642843">Whatsapp</a> ou ao
          também no nosso
          <a class="font-semibold underline" target="_blank" href="https://www.instagram.com/taverna_do_meio_goblin">Instagram</a>.
        </p>

        <p class="mt-1">- Após o seu encaminhamento da mensagem e o atendimento completo, será passado um prazo para a
          entrega dos seus itens!</p>

        <p class="mt-[13px] md:text-[24px] text-[18px] font-railey md:text-start text-center">Os melhores preços, de
          qualquer lugar!</p>
      </div>

      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Meus itens</h1>

        <div v-if="cart.items && cart.items.length <= 0">Você não tem itens adicionados no carrinho!</div>

        <CartItem v-for="item in cart.items" :key="item.id" :item="item"/>
        <p class="text-right font-bold mt-4">Total: R$ {{ cart.totalPrice }}</p>
        <div class="w-full flex md:gap-5 gap-1 md:flex-row flex-col-reverse justify-between items-center">
          <NuxtLink to="/catalogo" class="md:block hidden md:mt-[0px] mt-[40px] md:w-[250px] mt-4 bg-green-2 text-white px-4 py-2 rounded w-full text-center">
            <span v-if="cart.items && cart.items.length > 0">Voltar para o catálogo</span>
            <span v-else>Ver catálogo</span>
          </NuxtLink>
          <div class="w-full flex md:flex-row flex-col-reverse items-center md:gap-5 gap-1 md:justify-end justify-start"
               v-if="cart.items && cart.items.length > 0">
            <button @click="copiarPedido"
                    class="md:w-[300px] text-xs md:text-base mt-4 bg-[#b0a58e] text-black px-4 py-2 rounded w-full">
              Copiar mensagem para o pedido
            </button>
            <button @click="enviarPedido"
                    class="md:w-[300px] text-xs md:text-base mt-4 bg-green-2 text-white px-4 py-2 rounded w-full">
              Enviar meu pedido pelo Whatsapp
            </button>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script setup>
import Swal from 'sweetalert2'
import {useCartStore} from '~/stores/cart'
import {calcularPrecoComDesconto} from '~/utils/priceUtils'
import CartItem from '~/components/CartItem.vue'
import Navbar from '~/layouts/navbar.vue'

const cart = useCartStore()

function gerarMensagemPedido() {
  const itensFormatados = cart.items.map(item => {
    const precoFinal = calcularPrecoComDesconto(item)
    const totalItem = (precoFinal * item.quantity).toFixed(2)
    const precoUnitario = precoFinal.toFixed(2)

    const opcaoTexto = item.option ? ` - Opção: ${item.option.toUpperCase()}` : ''

    return `• ${item.name} (${item.size})${opcaoTexto} x${item.quantity} — R$ ${totalItem} (R$ ${precoUnitario} cada)`
  }).join('\n')

  const totalGeral = `\n💰 Total do pedido: R$ ${Number(cart.totalPrice).toFixed(2)}`

  return (
      `Olá! 👋 Vim pelo catálogo da Taverna e gostaria de fazer um pedido:\n\n` +
      `${itensFormatados}` +
      `${totalGeral}\n\n` +
      `Aguardo retorno para confirmar a encomenda 😊`
  )
}

function enviarPedido() {
  if (cart.items.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  const mensagem = gerarMensagemPedido()
  const url = `https://wa.me/554288642843?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank')
}

async function copiarPedido() {
  if (cart.items.length === 0) {
    Swal.fire({
      icon: 'warning',
      title: 'Carrinho vazio',
      text: 'Adicione itens antes de copiar seu pedido.',
    })
    return;
  }

  try {
    await navigator.clipboard.writeText(gerarMensagemPedido())
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
    console.error('Erro ao copiar:', err)
  }
}
</script>
