import {TypeEnum, type TypeEnumKey} from './enums';

export interface CatalogItem {
    id: number;
    name: string;
    size: string;
    price: number;
    type: TypeEnumKey;
    tag: string;
    observation: null | string;
    image: string;
}

export const catalog: CatalogItem[] = [
//EVERDARK_ELVES
    {
        id: 1,
        name: 'Elves Assassin',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'assassino, élfico, elfo, feminino, feminina, mulher',
        observation: 'Na compra de no mínimo 3 o preço diminui para 16 R$',
        image: '/img/catalog/everdark-elves/elves-assassin.png',
    },
    {
        id: 2,
        name: 'Flying Assasins',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'assassinos, voadores, fada, feminino, feminina, mulher, elfo',
        observation: 'Na compra de no mínimo 3 o preço diminui para 16 R$',
        image: '/img/catalog/everdark-elves/flying-assassins.png'
    },
    {
        id: 3,
        name: 'Beast Master',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'mestre das feras, elfo, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/everdark-elves/beast-master.png'
    },
    {
        id: 4,
        name: 'Wild Sorcerer (Elfos + Balista)',
        size: '28mm|33mm',
        price: 70.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'feiticeiro selvagem com balista, elfo',
        observation: null,
        image: '/img/catalog/everdark-elves/wild-sorcerer-full.png'
    },
    {
        id: 5,
        name: 'Wild Sorcerer (Somente Elfos)',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'feiticeiro selvagem, elfo',
        observation: null,
        image: '/img/catalog/everdark-elves/wild-sorcerer-elfs.png'
    },
    {
        id: 6,
        name: 'Wild Sorcerer (Somente Balista)',
        size: '28mm|33mm',
        price: 40.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'balista do feiticeiro selvagem, masculino, homem, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/everdark-elves/wild-sorcerer-balista.png'
    },
    {
        id: 7,
        name: 'Dark Pegassus',
        size: '28mm|33mm',
        price: 60.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'pégaso negro, cavalo, animal',
        observation: null,
        image: '/img/catalog/everdark-elves/dark-pegassus.png'
    },
    {
        id: 8,
        name: 'Witch',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'bruxa, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/everdark-elves/witch.png'
    },
    {
        id: 9,
        name: 'Chariot Crossbow',
        size: 'especial',
        price: 110.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'carroça, carruagem, animal, cavalo',
        observation: null,
        image: '/img/catalog/everdark-elves/chariot-crossbow.png'
    },
    {
        id: 10,
        name: 'Chariot Lancer',
        size: 'especial',
        price: 120.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'carroça, carruagem, lança, cavalo',
        observation: null,
        image: '/img/catalog/everdark-elves/chariot-lancer.png'
    },
    {
        id: 11,
        name: 'Elf warriors',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'elfo, guerreiro, masculino, homem',
        observation: 'Na compra de no mínimo 3 o preço diminui para 16 R$',
        image: '/img/catalog/everdark-elves/archmage.png'
    },
    {
        id: 12,
        name: 'Elves Dread Knights',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'cavaleiros, elfo, montaria, animal, cavalo',
        observation: null,
        image: '/img/catalog/everdark-elves/dread-knights.png'
    },
    {
        id: 13,
        name: 'Brain',
        size: '28mm|33mm',
        price: 15.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'cérebro, criatura',
        observation: null,
        image: '/img/catalog/everdark-elves/brain.png'
    },
    {
        id: 14,
        name: 'Mindflayer A & B',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'devorador de mentes',
        observation: null,
        image: '/img/catalog/everdark-elves/mindflayer-ab.png'
    },
    {
        id: 15,
        name: 'Mindflayer C',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'devorador de mentes',
        observation: null,
        image: '/img/catalog/everdark-elves/mindflayer-c.png'
    },
    {
        id: 16,
        name: 'Avatar Banner',
        size: 'especial',
        price: 110.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'estandarte, elfo, feminino, feminina, mulher, criatura',
        observation: null,
        image: '/img/catalog/everdark-elves/avatar-banner.png'
    },
    {
        id: 17,
        name: 'Avatar Spear',
        size: 'especial',
        price: 110.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'lança, elfo, feminino, feminina, mulher, criatura',
        observation: null,
        image: '/img/catalog/everdark-elves/avatar-spear.png'
    },
    {
        id: 18,
        name: 'Kraken',
        size: 'especial',
        price: 160.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'criatura',
        observation: null,
        image: '/img/catalog/everdark-elves/kraken.png'
    },
    {
        id: 19,
        name: 'Kraken Diorama',
        size: 'especial',
        price: 200.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'criatura, cenário, cenario',
        observation: 'Todas as peças inclusas',
        image: '/img/catalog/everdark-elves/kraken-diorama.png'
    },
    {
        id: 20,
        name: 'Terrain Diorama',
        size: 'especial',
        price: 300.00,
        type: TypeEnum.EVERDARK_ELVES,
        tag: 'criatura, cenário, cenario',
        observation: 'Todas as peças inclusas',
        image: '/img/catalog/everdark-elves/terrain-diorama.png'
    },

    // BADLANDS
    {
        id: 21,
        name: 'Beast Whisperer',
        size: '28mm|33mm',
        price: 16.00,
        type: TypeEnum.BADLANDS,
        tag: 'goblin',
        observation: null,
        image: '/img/catalog/badlands/beast-whisperer.png'
    },
    {
        id: 22,
        name: 'Kairn Den Mother',
        size: '28mm|33mm',
        price: 30.00,
        type: TypeEnum.BADLANDS,
        tag: 'bruxa',
        observation: null,
        image: '/img/catalog/badlands/kairn-den-mother.png'
    },
    {
        id: 23,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-1.png'
    },
    {
        id: 24,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, guerreira, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-2.png'
    },
    {
        id: 25,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, guerreira, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-3.png'
    },
    {
        id: 26,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-4.png'
    },
    {
        id: 27,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-5.png'
    },
    {
        id: 28,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-6.png'
    },
    {
        id: 29,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-7.png'
    },
    {
        id: 30,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-8.png'
    },
    {
        id: 31,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-9.png'
    },
    {
        id: 32,
        name: 'Kairn Fighter',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/kairn-fighter-10.png'
    },
    {
        id: 33,
        name: 'SaberTooth Warrior',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.BADLANDS,
        tag: 'feminino, feminina, mulher, montaria, animal',
        observation: null,
        image: '/img/catalog/badlands/sabertooth-warrior-1.png'
    },
    {
        id: 34,
        name: 'SaberTooth Warrior',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.BADLANDS,
        tag: 'feminino, feminina, mulher, montaria, animal',
        observation: null,
        image: '/img/catalog/badlands/sabertooth-warrior-2.png'
    },
    {
        id: 35,
        name: 'HeadHuntress',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'cabeça, feminino, feminina, mulher, caçadora',
        observation: null,
        image: '/img/catalog/badlands/headhuntress.png'
    },
    {
        id: 36,
        name: 'Raptors',
        size: '28mm|33mm',
        price: 16.00,
        type: TypeEnum.BADLANDS,
        tag: 'dinossauro, animal, criatura',
        observation: null,
        image: '/img/catalog/badlands/raptors.png'
    },
    {
        id: 37,
        name: 'Sloth',
        size: 'especial',
        price: 65.00,
        type: TypeEnum.BADLANDS,
        tag: 'criatura, animal',
        observation: null,
        image: '/img/catalog/badlands/sloth.png'
    },
    {
        id: 38,
        name: 'Warlord',
        size: 'especial',
        price: 65.00,
        type: TypeEnum.BADLANDS,
        tag: 'criatura, montaria, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/warlord.png'
    },
    {
        id: 39,
        name: 'Warmonger',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BADLANDS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/badlands/warmonger.png'
    },
    {
        id: 40,
        name: 'Warrior Queen',
        size: 'especial',
        price: 145.00,
        type: TypeEnum.BADLANDS,
        tag: 'criatura, montaria, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/badlands/warrior-queen.png'
    },

    //Barbarians
    {
        id: 41,
        name: 'ZoFuriana',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BARBARIANS,
        tag: 'guerreira, feminino, feminina, mulher, guerreiro',
        observation: null,
        image: '/img/catalog/barbarians/zofuriana.png'
    },
    {
        id: 42,
        name: 'Gyratos',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BARBARIANS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/gyratos.png'
    },
    {
        id: 43,
        name: 'Tehnar',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BARBARIANS,
        tag: 'guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/tehnar.png'
    },
    {
        id: 44,
        name: 'Vindicta Raid Queen',
        size: 'especial',
        price: 75.00,
        type: TypeEnum.BARBARIANS,
        tag: 'guerreiro, feminino, feminina, mulher, guerreira',
        observation: null,
        image: '/img/catalog/barbarians/vindicta-raid-queen.png'
    },
    {
        id: 45,
        name: 'Ferin',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.BARBARIANS,
        tag: 'troll, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/barbarians/ferin.png'
    },
    {
        id: 46,
        name: 'Roogarin',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.BARBARIANS,
        tag: 'troll, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/roogarin.png'
    },
    {
        id: 47,
        name: 'BJorn',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BARBARIANS,
        tag: 'bárbaro, guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/bjorn.png'
    },
    {
        id: 48,
        name: 'Eric',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BARBARIANS,
        tag: 'bárbaro, guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/eric.png'
    },
    {
        id: 49,
        name: 'Olaf',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.BARBARIANS,
        tag: 'bárbaro, guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/olaf.png'
    },
    {
        id: 50,
        name: 'Martha Bogmaiden',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.BARBARIANS,
        tag: 'bruxa, feminino, feminina, mulher',
        observation: null,
        image: '/img/catalog/barbarians/martha-bogmaiden.png'
    },
    {
        id: 51,
        name: 'Griz the Hungry',
        size: 'especial',
        price: 65.00,
        type: TypeEnum.BARBARIANS,
        tag: 'montaria, criatura, bárbaro, guerreiro, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/griz-the-hungry.png'
    },
    {
        id: 52,
        name: 'Elknar the Calm',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.BARBARIANS,
        tag: 'alce, criatura, masculino, homem',
        observation: null,
        image: '/img/catalog/barbarians/elknar-the-calm.png'
    },
    {
        id: 53,
        name: 'Ice Giant',
        size: 'especial',
        price: 260.00,
        type: TypeEnum.BARBARIANS,
        tag: 'gigante, deus',
        observation: null,
        image: '/img/catalog/barbarians/ice-giant.png'
    },

    // Bloodsail ogres
    {
        id: 54,
        name: 'Anchor Bashers',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'Ogro, pescador',
        observation: 'Na compra de no mínimo 3 o preço diminui para 20 R$',
        image: '/img/catalog/bloodsail-ogres/anchor-bashers-1.png'
    },
    {
        id: 55,
        name: 'Anchor Bashers',
        size: '28mm|33mm',
        price: 28.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'ogros batedores de âncora',
        observation: 'Na compra de no mínimo 3 o preço diminui para 25 R$',
        image: '/img/catalog/bloodsail-ogres/anchor-bashers-2.png'
    },
    {
        id: 56,
        name: 'Anchor Basher Hero',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'Ogro, Dreadnought',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/anchor-basher-hero.png'
    },
    {
        id: 57,
        name: 'Hunter',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'Ogro, caçador',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/hunter.png'
    },
    {
        id: 58,
        name: 'Voodoo Doctor',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'Ogro, bruxo, voodoo',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/voodoo-doctor.png'
    },
    {
        id: 59,
        name: 'Tribesman',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'humano, pirata',
        observation: 'Na compra de no mínimo 3 o preço diminui para 17 R$',
        image: '/img/catalog/bloodsail-ogres/tribesman.png'
    },
    {
        id: 60,
        name: 'Pirate Hippos',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'humano, caçador, montaria',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/pirate-hippos.png'
    },
    {
        id: 61,
        name: 'Aligattors',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'crocodilo, animal',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/elemental-golem.png'
    },
    {
        id: 62,
        name: 'Pirate Yetis',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'Yeti, pirata, criatura',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/hipirate-yetis.png'
    },
    {
        id: 63,
        name: 'Aboleth',
        size: 'especial',
        price: 110.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'aboleth, criatura, mar',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/aboleth.png'
    },
    {
        id: 64,
        name: 'Chuul',
        size: 'especial',
        price: 110.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'Chuul, mar, profundezas',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/archmage.png'
    },
    {
        id: 65,
        name: 'King Kong',
        size: 'especial',
        price: 280.00,
        type: TypeEnum.BLOODSAIL_OGRES,
        tag: 'animal, macaco, gorila',
        observation: null,
        image: '/img/catalog/bloodsail-ogres/king-kong.png'
    },

    //Carnival and orcs

    {
        id: 66,
        name: 'Orc',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'orc de carnaval, masculino, homem',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18R$',
        image: '/img/catalog/carnival-and-orcs/orc-1.png'
    },
    {
        id: 67,
        name: 'Orc',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'orc de carnaval, masculino, homem',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18R$',
        image: '/img/catalog/carnival-and-orcs/orc-2.png'
    },
    {
        id: 68,
        name: 'Orc',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'orc de carnaval, masculino, homem',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18R$',
        image: '/img/catalog/carnival-and-orcs/orc-3.png'
    },
    {
        id: 69,
        name: 'Troll Wizard',
        size: 'especial',
        price: 80.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'troll, feiticeiro, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/troll-wizard.png'
    },
    {
        id: 70,
        name: 'Shaman',
        size: '28mm|33mm',
        price: 30.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'xamã, orc, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/shaman.png'
    },
    {
        id: 71,
        name: 'Orc Shaman on Boar',
        size: 'especial',
        price: 45.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'xamã, orc, montaria, javali, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/orc-shaman-on-boar.png'
    },
    {
        id: 72,
        name: 'StrongMan',
        size: '28mm|33mm',
        price: 30.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'aberração, aberrações, circo',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/strongman.png'
    },
    {
        id: 73,
        name: 'Acrobats',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'acrobata, circo',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/acrobats.png'
    },
    {
        id: 74,
        name: 'Ring Master',
        size: '28mm|33mm',
        price: 30.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'criatura, bufão',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/ring-master-1.png'
    },
    {
        id: 75,
        name: 'Ring Master',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'criatura, bufão, montaria',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/ring-master-2.png'
    },
    {
        id: 76,
        name: 'Carnival Carnie 1',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'circo, masculino, homem, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/carnival-carnie-1.png'
    },
    {
        id: 77,
        name: 'Carnival Carnie 2',
        size: '28mm|33mm',
        price: 15.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'circo, masculino, homem, criatura, anão',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/carnival-carnie-2.png'
    },
    {
        id: 78,
        name: 'Carnival Carnie 3',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'circo, masculino, homem, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/carnival-carnie-3.png'
    },
    {
        id: 79,
        name: 'Carnival Carnie 4',
        size: '28mm|33mm',
        price: 15.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'circo, masculino, homem, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/carnival-carnie-4.png'
    },
    {
        id: 80,
        name: 'Carnival Carnie 5',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'circo, masculino, homem, criatura, duas cabeças',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/carnival-carnie-5.png'
    },
    {
        id: 81,
        name: 'Filth Father',
        size: 'especial',
        price: 240.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'circo, masculino, homem, criatura, aberração, demônio',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/filth-father.png'
    },
    {
        id: 82,
        name: 'Dinosaur',
        size: 'especial',
        price: 200.00,
        type: TypeEnum.CARNIVAL_AND_ORCS,
        tag: 'dinossauro, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs/dinosaur.png'
    },

    // Carnival and orcs 2

    {
        id: 83,
        name: 'Warchief on Boar',
        size: 'especial',
        price: 50.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'guerreiro, masculino, homem, orc, montaria',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/warchief-on-boar.png'
    },
    {
        id: 84,
        name: 'Warrior Chieftain',
        size: '28mm|33mm',
        price: 30.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'guerreiro, masculino, homem, orc',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/warrior-chieftain.png'
    },
    {
        id: 85,
        name: 'Boar Riders',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'guerreiro, masculino, homem, orc, montaria',
        observation: 'Na compra de no mínimo 3 o preço diminui para 40 R$',
        image: '/img/catalog/carnival-and-orcs-2/boar-riders.png'
    },
    {
        id: 86,
        name: 'Wild Orcs',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'guerreiro, masculino, homem, orc',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18 R$',
        image: '/img/catalog/carnival-and-orcs-2/wild-orcs-1.png'
    },
    {
        id: 87,
        name: 'Wild Orcs',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'guerreiro, masculino, homem, orc',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18 R$',
        image: '/img/catalog/carnival-and-orcs-2/wild-orcs-2.png'
    },
    {
        id: 88,
        name: 'Warchief on Wyvern',
        size: 'especial',
        price: 160.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'guerreiro, masculino, homem, orc, montaria',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/warchief-on-wyvern.png'
    },
    {
        id: 89,
        name: 'Wyvern',
        size: 'especial',
        price: 145.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'montaria, criatura',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/wyvern.png'
    },
    {
        id: 90,
        name: 'Beasts',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'criatura, carnaval, aberração',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/beasts.png'
    },
    {
        id: 91,
        name: 'Lord',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'demônio',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/lord.png'
    },
    {
        id: 92,
        name: 'Filth Demons',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'demônio, demônios',
        observation: 'Na compra de no mínimo 3 o preço diminui para 21 R$',
        image: '/img/catalog/carnival-and-orcs-2/filth-demons.png'
    },
    {
        id: 93,
        name: 'Mage',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'mago, orc, masculino, homem, circo',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/mage.png'
    },
    {
        id: 94,
        name: 'Norse Knights',
        size: 'especial',
        price: 180.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'mago, orc, masculino, homem, circo, montaria, sapo',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/norse-knights.png'
    },
    {
        id: 95,
        name: 'Cart',
        size: 'gigante',
        price: 210.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'carroça',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/cart.png'
    },
    {
        id: 96,
        name: 'Toads',
        size: '28mm|33mm',
        price: 12.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'sapos, sapos, carnaval',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/toads-1.png'
    },
    {
        id: 97,
        name: 'Toads',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'sapos, sapos, carnaval',
        observation: null,
        image: '/img/catalog/carnival-and-orcs-2/toads-2.png'
    },
    {
        id: 98,
        name: 'Slaads',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.CARNIVAL_AND_ORCS_2,
        tag: 'criatura, mar, oceano',
        observation: 'Na compra de no mínimo 3 o preço diminui para 21 R$',
        image: '/img/catalog/carnival-and-orcs-2/slaads.png'
    },

    // Dark Wood Beasts and Swamps

    {
        id: 99,
        name: 'Goatman Shaman',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'xamã, bode',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/goatman-shaman.png'
    },
    {
        id: 100,
        name: 'Drakonkin Warlord',
        size: 'especial',
        price: 55.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'centauro, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/drakonkin-warlord.png'
    },
    {
        id: 101,
        name: 'Drakonkin',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'centauro, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/drakonkin.png'
    },
    {
        id: 102,
        name: 'Goatman Warriors',
        size: '28mm|33mm',
        price: 22.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'guerreiros, bode',
        observation: 'Na compra de no mínimo 3 o preço diminui para 19 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps/goatman-warriors.png'
    },
    {
        id: 103,
        name: 'Minotauros',
        size: '28mm|33mm',
        price: 22.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'minotauro',
        observation: 'Na compra de no mínimo 3 o preço diminui para 19 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps/gnomes-infantry-gunners.png'
    },
    {
        id: 104,
        name: 'Shrooms',
        size: '28mm|33mm',
        price: 16.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'cogumelos, myconid',
        observation: 'Na compra de no mínimo 3 o preço diminui para 12 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps/shrooms-1.png'
    },
    {
        id: 105,
        name: 'Shrooms',
        size: '28mm|33mm',
        price: 16.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'cogumelos, myconid',
        observation: 'Na compra de no mínimo 3 o preço diminui para 12 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps/shrooms-2.png'
    },
    {
        id: 106,
        name: 'Shroom Golems',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'cogumelos, myconid',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/shroom-golems.png'
    },
    {
        id: 107,
        name: 'Caterpillar',
        size: 'especial',
        price: 200.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'lagarta, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/caterpillar.png'
    },
    {
        id: 108,
        name: 'Swamp Dragon',
        size: 'especial',
        price: 220.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'dragão, pântano, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/swamp-dragon.png'
    },
    {
        id: 109,
        name: 'Gargoyles',
        size: '28mm|33mm',
        price: 30.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'gárgulas, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/gargoyles.png'
    },
    {
        id: 110,
        name: 'Grave Golem',
        size: 'especial',
        price: 180.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS,
        tag: 'morto vivo, golem',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps/grave-golem.png'
    },

    // Dark Wood Beasts and Swamps 2

    {
        id: 111,
        name: 'Goatman Champion',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/goatman-champion-1.png'
    },
    {
        id: 112,
        name: 'Goatman Champion',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/goatman-champion-2.png'
    },
    {
        id: 113,
        name: 'Razor Beast Chariot',
        size: 'especial',
        price: 95.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro, carruagem, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/razor-beast-chariot.png'
    },
    {
        id: 114,
        name: 'Deathknights',
        size: '28mm|33mm',
        price: 22.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/deathknights.png'
    },
    {
        id: 115,
        name: 'Goatman Light Warriors',
        size: '28mm|33mm',
        price: 22.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro',
        observation: 'Na compra de no mínimo 3 o preço diminui para 18 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/goatman-light-warriors.png'
    },
    {
        id: 116,
        name: 'Minotaur Warlord',
        size: 'especial',
        price: 215.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/minotaur-warlord-1.png'
    },
    {
        id: 117,
        name: 'Minotaur Warlord',
        size: 'especial',
        price: 220.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'guerreiro, minotauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/minotaur-warlord-2.png'
    },
    {
        id: 118,
        name: 'Giant Beast',
        size: 'especial',
        price: 160.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'criatura, voador, demônio',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/giant-beast.png'
    },
    {
        id: 119,
        name: 'Frog Archers',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'sapo, arqueiro, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/frog-archers.png'
    },
    {
        id: 120,
        name: 'Frog Centurion',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'sapo, guerreiro, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/frog-centurion.png'
    },
    {
        id: 121,
        name: 'Frog Chariot',
        size: 'especial',
        price: 50.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'sapo, carruagem, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/frog-chariot.png'
    },
    {
        id: 122,
        name: 'Frog Guardians',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'sapo, guerreiro, criatura',
        observation: 'Na compra de no mínimo 3 o preço diminui para 15 R$',
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/frog-guardians-1.png'
    },
    {
        id: 123,
        name: 'Frog Guardians',
        size: 'especial',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'sapo, montaria',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/frog-guardians-2.png'
    },
    {
        id: 124,
        name: 'Death Knight',
        size: '28mm|33mm',
        price: 20.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'morto vivo, guerreiro,cavaleiro da morte',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/death-knight.png'
    },
    {
        id: 125,
        name: 'Death Dogs',
        size: '28mm|33mm',
        price: 13.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2,
        tag: 'criatura, cachorro, demonio',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-swamps-2/death-dogs.png'
    },

// DARK_WOOD_BEASTS_AND_WOLF_ORDER
    {
        id: 126,
        name: 'Lord Commander',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'guerreiro, lobisomem',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/lord-commander.png'
    },
    {
        id: 127,
        name: 'Beast Lord',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'minotauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/beast-lord.png'
    },
    {
        id: 128,
        name: 'WereWolf',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'lobisomem, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/werewolf.png'
    },
    {
        id: 129,
        name: 'Wolf Princes',
        size: '28mm|33mm',
        price: 45.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'guerreiro, montaria, lobo',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/wolf-princes.png'
    },
    {
        id: 130,
        name: 'Archers',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'arqueiros, arqueiro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/archers.png'
    },
    {
        id: 131,
        name: 'Ungor Herds',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'ungor, sátiro, sátiros',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/ungor-herds.png'
    },
    {
        id: 132,
        name: 'Satyrs',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'sátiro, sátiros',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/satyrs-1.png'
    },
    {
        id: 133,
        name: 'Satyrs',
        size: '28mm|33mm',
        price: 18.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'sátiro, sátiros',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/satyrs-2.png'
    },
    {
        id: 134,
        name: 'Centaurs',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'centauros, centauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/centaurs-1.png'
    },
    {
        id: 135,
        name: 'Centaurs',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'centauros, centauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/centaurs-2.png'
    },
    {
        id: 136,
        name: 'Centaurs',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'centauros, centauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/centaurs-3.png'
    },
    {
        id: 137,
        name: 'Centaurs',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'centauros, centauro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/centaurs-4.png'
    },
    {
        id: 138,
        name: 'Beast Giant',
        size: 'especial',
        price: 210.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'gigante, minotauro, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/beast-giant.png'
    },
    {
        id: 139,
        name: 'Giant Berserker',
        size: 'especial',
        price: 235.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'gigante, minotauro, criatura',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/giant-berserker.png'
    },
    {
        id: 140,
        name: 'Ettin',
        size: '28mm|33mm',
        price: 35.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'ogro',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/ettin.png'
    },
    {
        id: 141,
        name: 'Ettercap',
        size: '28mm|33mm',
        price: 25.00,
        type: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER,
        tag: 'aranha',
        observation: null,
        image: '/img/catalog/dark-wood-beasts-and-wolf-order/ettercap.png'
    },

// DAYBREAK
    {
        id: 142,
        name: 'Busto - Dusk Monk',
        size: 'especial',
        price: 90.00,
        type: TypeEnum.DAYBREAK,
        tag: 'busto, caveira',
        observation: 'Busto estúdio DayBreak',
        image: '/img/catalog/daybreak/busto-dusk-monk.png'
    },
    {
        id: 143,
        name: 'Busto - Hector Stumpfkant',
        size: 'especial',
        price: 90.00,
        type: TypeEnum.DAYBREAK,
        tag: 'busto, orc',
        observation: 'Busto estúdio DayBreak',
        image: '/img/catalog/daybreak/busto-hector-stumpfkant.png'
    },
    {
        id: 144,
        name: 'Busto - Higgurath Doubleslit',
        size: 'especial',
        price: 90.00,
        type: TypeEnum.DAYBREAK,
        tag: 'busto, orc',
        observation: 'Busto estúdio DayBreak',
        image: '/img/catalog/daybreak/busto-higgurath-doubleslit.png'
    },
    {
        id: 145,
        name: 'Busto - Sothard Deadhand',
        size: 'especial',
        price: 90.00,
        type: TypeEnum.DAYBREAK,
        tag: 'busto, orc, anão',
        observation: 'Busto estúdio DayBreak',
        image: '/img/catalog/daybreak/busto-sothard-deadhand.png'
    },
    {
        id: 146,
        name: 'Benjammer Holt',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/benjammer-holt.png'
    },
    {
        id: 147,
        name: 'Circer Malaar',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/circer-malaar.png'
    },
    {
        id: 148,
        name: 'Deathbringer Olan Troka',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/deathbringer-olan-troka.png'
    },
    {
        id: 149,
        name: 'Doblar Grakk',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/doblar-grakk.png'
    },
    {
        id: 150,
        name: 'Gartaz the Halfed',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/gartaz-the-halfed.png'
    },
    {
        id: 151,
        name: 'Grasta Poka',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/grasta-poka.png'
    },
    {
        id: 152,
        name: 'Jakzo Stormer',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/jakzo-stormer.png'
    },
    {
        id: 153,
        name: 'Jolan Frak',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/jolan-frak.png'
    },
    {
        id: 154,
        name: 'Jorduz Hunter',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/jorduz-hunter.png'
    },
    {
        id: 155,
        name: 'Lieutenant Mitrog',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/lieutenant-mitrog.png'
    },
    {
        id: 156,
        name: 'Skull Summoner Paktas Blox',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll, xamã',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/skull-summoner-paktas-blox-1.png'
    },
    {
        id: 157,
        name: 'Skull Summoner Paktas Blox',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'troll, assassino',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$ - No tamanho 33mm a cada 5 miniaturas cada uma fica por 18 R$',
        image: '/img/catalog/daybreak/skull-summoner-paktas-blox-2.png'
    },
    {
        id: 158,
        name: 'Chlodvig du Marteau Lourd',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, humano, masculino, homem',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$',
        image: '/img/catalog/daybreak/chlodvig-du-marteau-lourd.png'
    },
    {
        id: 159,
        name: "Colonel Thierry du Lion D'Argent",
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, humano, masculino, homem',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$',
        image: '/img/catalog/daybreak/colonel-thierry-du-lion-dargent.png'
    },
    {
        id: 160,
        name: 'Erasmus du Tranchant',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, humano, masculino, homem',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$',
        image: '/img/catalog/daybreak/erasmus-du-tranchant.png'
    },
    {
        id: 161,
        name: "Grand Prêtre Ferdinand du Lion D'Argent",
        size: 'especial',
        price: 50.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, humano, montaria, masculino, homem',
        observation: 'Estúdio DayBreak',
        image: '/img/catalog/daybreak/grand-pretre-ferdinand-du-lion-dargent.png'
    },
    {
        id: 162,
        name: "Grande Prêtresse Salomé du Lion D'Argent",
        size: 'especial',
        price: 50.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, paladina, humano, humana, feminino, feminina, mulher, montaria',
        observation: 'Estúdio DayBreak',
        image: '/img/catalog/daybreak/grande-pretresse-salome-du-lion-dargent.png'
    },
    {
        id: 163,
        name: "Isabelle Du Lion D'Argent",
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, paladina, humano, humana, feminino, feminina, mulher',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$',
        image: '/img/catalog/daybreak/isabelle-du-lion-dargent.png'
    },
    {
        id: 164,
        name: "Le Chevalier Florian de l'Ancienne Bataille",
        size: 'especial',
        price: 50.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, humano, montaria, masculino, homem',
        observation: 'Estúdio DayBreak',
        image: '/img/catalog/daybreak/le-chevalier-florian-de-lancienne-bataille.png'
    },
    {
        id: 165,
        name: "Marie du Lion D'Argent",
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, paladina, humano, humana, feminino, feminina, mulher',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$',
        image: '/img/catalog/daybreak/marie-du-lion-dargent.png'
    },
    {
        id: 166,
        name: 'Mattias du Lion Tuant 01',
        size: '33mm',
        price: 20.00,
        type: TypeEnum.DAYBREAK,
        tag: 'paladino, humano, masculino, homem',
        observation: 'Estúdio DayBreak - Disponível no tamanho 54mm com aumento de 10 R$',
        image: '/img/catalog/daybreak/mattias-du-lion-tuant-01.png'
    },
];
