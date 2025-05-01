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
node assets/js/convert-to-webp.cjs
```

Ele irá converter as imagens `.png` para `.webp`.

## Adicionar uma nova miniatura ao catalogo

1. No arquivo `data/catalog.ts` adicionar as informações do novo dado seguindo o exemplo:

```
{
    id: 1, -> Continuando com as informações existentes
    name: 'Elves Assassin' -> Nome da miniatura,
    size: '28mm|33mm' -> Tamanho (normalmente 28mm|33mm ou especial),
    price: 20.00, -> Preço
    type: TypeEnum.EVERDARK_ELVES, -> Categoria da mini, seguindo com base no enums criado no passo anterior
    tag: 'assassino, élfico, elfo, feminino, feminina, mulher, chicote, corda', -> descrições da mini, ou o que ela possui
    observation: 'Na compra de no mínimo 3 o preço diminui para 16 R$', -> observações de necessário, se não houver deixar 'null'
    image: '/img/catalog/everdark-elves/elves-assassin.webp', -> path da imagem da sua miniatura
},
```

