# Documentação para adicionar uma nova mini ao catálogo

## Adicionar uma nova categoria

1. No arquivo `data/enums.ts` basta adicionar no `TypeEnum` a nova variável
com o nome escolhido seguindo o exemplo:

```
EVERDARK_ELVES: 'everdark_elves',
```

2. No mesmo arquivo também adicionar no `TypeEnumOptions`, seguindo o exemplo:
```
 { key: TypeEnum.EVERDARK_ELVES, label: 'Everdark Elves' },
```

## Adiciona imagens

1. As imagens das miniaturas estão sendo adicionadas dentro das pasta `public/img/catalog/**`, 
conforme a categoria da sua mini, adicione uma nova pasta para diferenciar das demais. 

Obs: Sempre colocar imagens `.png` ou `.webp` para o segundo passo

2. Para que as imagens carreguem de forma rápida, estamos usando o tipo `.webp`,
mas se tiver imagens `.png` existe um comando para converter automaticamente essas imagens para
facilitar o trabalho, ao adicionar as imagens dentro da pasta correta na `public/img/catalog` 
basta rodar o comando:
 
```
> node assets/js/convert-to-webp.cjs
```

Ele irá converter as imagens `.png` para `.webp`.

## Adicionar uma nova miniatura ao catalogo

1. No arquivo `data/catalog.ts` adicionar as informações do novo dado seguindo o exemplo:

```
    {
        id: 1,
        name: 'Elves Assassin',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'assassino, élfico, elfo, feminino, feminina, mulher, chicote, corda',
        observation: 'Na compra de no mínimo 3 o preço diminui para 16 R$',
        options: ['a', 'b', 'c'],
        discounts: [
            { minQty: 3, price: 16, type: 'fixed' },
        ],
        image: '/img/catalog/everdark-elves/elves-assassin.webp',
    },
```

Explicações dos campos:

```
id => campo único, vai incrementando o valor
name => Nome do item ou miniatura
size => Tamanho, minis normais tem 28|33mm e mais que isso o tamanho é considerado "especial"
price => Preço da miniatura
type => Categoria (explicado no passo 1)
tag => descreva o item/mini e itens dentro dela, se é guerreiro, elfo, mulher (sempre separando as palavras por vírgula)
observation => Detalhes sobre o item/mini
options => Opções da mini, as versões dela
discounts => Quais os descontos do item/mini com base em quantidades ou valores:
    { minQty: 3, price: 16, type: 'fixed' } => Quantidade minima 3, o preço fica 16,
    { minQty: 10, percentage: 20, type: 'percentage' } => Quantidade 10, podemos aplicar uma prcentagem de 20% no valor
image => Path da imagem (explicado anteriormente)
```

## Adicionar cupons

1. No arquivo `data/coupons.js` você adiciona o seu novo cupom. (Usamos um sistema servless com o Firebase e o banco firestore, então ao criar
os cupons no arquivo, sera necessário rodar um comando node e então ele atualiza no banco de dados).

Seguir os exemplos:

Para cupom de uso unico:

```
{
  code: 'TAVERNA20',
  discount: 20,
  expiresAt: null,
  used: false
},
```

Para cupom com data de expiração

```
{
  code: 'TAVERNA10',
  discount: 10,
  expiresAt: '2025-05-07T23:59:59Z', (ano-mês-diaTHora:Minuto:SegundoZ)
  used: false
},
```

Explicação dos campos:

```
{
  code => Código do cupom
  discount => Desconto do cupom para porcentagem, se colocar 10, significa 10%
  expiresAt => Data de expiração do cupom, se nao tiver deixar como 'null', se tiver usar datas no formato UTC
  used => Se o cupom ja foi usado. Utilizado para cupons de uso unico, normalmente setar como false
},
```

2. No terminal/console rodar o comando 

```
> node assets/js/sync-coupons.js
```

Ele irá criar os cupons na nossa base de dados. Ele também exclui cupons que não estão no 
arquivo de cupons ou atualiza cupons ja existentes. Tome cuidado! 


