export const TypeEnum = {
    EVERDARK_ELVES: 'everdark_elves',
    BADLANDS: 'badlands',
    BARBARIANS: 'barbarians',
    BLOODSAIL_OGRES: 'bloodsail_ogres',
    CARNIVAL_AND_ORCS: 'carnival_and_orcs',
    CARNIVAL_AND_ORCS_2: 'carnival_and_orcs_2',
    DARK_WOOD_BEASTS_AND_SWAMPS: 'dark_wood_beasts_and_swamps',
    DARK_WOOD_BEASTS_AND_SWAMPS_2: 'dark_wood_beasts_and_swamps_2',
    DARK_WOOD_BEASTS_AND_WOLF_ORDER: 'dark_wood_beasts_and_wolf_order',
    DAYBREAK: 'daybreak',

    TITANS_OF_ADVENTURE: 'titans_of_adventure',
} as const;

export type TypeEnumKey = (typeof TypeEnum)[keyof typeof TypeEnum];

export const TypeEnumOptions = [
    { key: TypeEnum.BADLANDS, label: 'Badlands' },
    { key: TypeEnum.BARBARIANS, label: 'Barbarians' },
    { key: TypeEnum.BLOODSAIL_OGRES, label: 'Bloodsail ogres' },
    { key: TypeEnum.CARNIVAL_AND_ORCS, label: 'Carnival and orcs' },
    { key: TypeEnum.CARNIVAL_AND_ORCS_2, label: 'Carnival and orcs 2' },
    { key: TypeEnum.EVERDARK_ELVES, label: 'Everdark Elves' },
    { key: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS, label: 'Dark wood beasts and swamps' },
    { key: TypeEnum.DARK_WOOD_BEASTS_AND_SWAMPS_2, label: 'Dark wood beasts and swamps 2' },
    { key: TypeEnum.DARK_WOOD_BEASTS_AND_WOLF_ORDER, label: 'Dark wood beasts and wolf order' },
    { key: TypeEnum.DAYBREAK, label: 'Daybreak' },

    { key: TypeEnum.TITANS_OF_ADVENTURE, label: 'Titans of Adventure' },
];