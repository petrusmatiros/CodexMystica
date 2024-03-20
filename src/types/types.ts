export type Spell = {
    slug: string;
    name: string;
    desc: string;
    higher_level: string;
    page: string;
    range: string;
    target_range_sort: number;
    components: string;
    requires_verbal_components: boolean;
    requires_somatic_components: boolean;
    requires_material_components: boolean;
    material: string;
    can_be_cast_as_ritual: boolean;
    ritual: string;
    duration: string;
    concentration: string;
    requires_concentration: boolean;
    casting_time: string;
    level: string;
    level_int: number;
    spell_level: number;
    school: string;
    dnd_class: string;
    spell_lists: string[];
    archetype: string;
    circles: string;
    document__slug: string;
    document__title: string;
    document__license_url: string;
    document__url: string;
  }

export enum SpellLevel {
  CANTRIP = "Cantrip",
  FIRST_LEVEL = "1st-level",
  SECOND_LEVEL = "2nd-level",
  THIRD_LEVEL = "3rd-level",
  FOURTH_LEVEL = "4th-level",
  FIFTH_LEVEL = "5th-level",
  SIXTH_LEVEL = "6th-level",
  SEVENTH_LEVEL = "7th-level",
  EIGHTH_LEVEL = "8th-level",
  NINTH_LEVEL = "9th-level",
}

export enum SpellSchool {
  ABJURATION = "abjuration",
  CONJURATION = "conjuration",
  DIVINATION = "divination",
  ENCHANTMENT = "enchantment",
  EVOCATION = "evocation",
  ILLUSION = "illusion",
  NECROMANCY = "necromancy",
  TRANSMUTATION = "transmutation",
}

export enum DamageType {
  FIRE = "fire",
  FORCE = "force",
  ACID = "acid",
  LIGHTNING = "lightning",
  THUNDER = "thunder",
  POISON = "poison",
  COLD = "cold",
  PSYCHIC = "psychic",
  NECROTIC = "necrotic",
  RADIANT = "radiant",
  SLASHING = "slashing",
  PIERCING = "piercing",
  BLUDGEONING = "bludgeoning",
}