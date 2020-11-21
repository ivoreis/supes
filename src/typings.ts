export type Race =
  | null
  | 'Alien'
  | 'Alpha'
  | 'Amazon'
  | 'Android'
  | 'Animal'
  | 'Asgardian'
  | 'Atlantean'
  | 'Bizarro'
  | 'Black Racer'
  | 'Bolovaxian'
  | 'Clone'
  | 'Cosmic Entity'
  | 'Cyborg'
  | 'Czarnian'
  | 'Dathomirian Zabrak'
  | 'Demi-God'
  | 'Demon'
  | 'Eternal'
  | 'Flora Colossus'
  | 'Frost Giant'
  | 'God / Eternal'
  | 'Gorilla'
  | 'Gungan'
  | 'Human'
  | 'Human / Altered'
  | 'Human / Clone'
  | 'Human / Cosmic'
  | 'Human / Radiation'
  | 'Human-Kree'
  | 'Human-Spartoi'
  | 'Human-Vulcan'
  | 'Human-Vuldarian'
  | 'Icthyo Sapien'
  | 'Inhuman'
  | 'Kaiju'
  | 'Kakarantharaian'
  | 'Korugaran'
  | 'Kryptonian'
  | 'Luphomoid'
  | 'Maiar'
  | 'Martian'
  | 'Metahuman'
  | 'Mutant'
  | 'Mutant / Clone'
  | 'New God'
  | 'Neyaphem'
  | 'Parademon'
  | 'Rodian'
  | 'Saiyan'
  | 'Spartoi'
  | 'Strontian'
  | 'Symbiote'
  | 'Talokite'
  | 'Tamaranean'
  | 'Ungaran'
  | 'Vampire'
  | 'Xenomorph XX121'
  | 'Yautja'
  | "Yoda's species"
  | 'Zen-Whoberian'
  | 'Zombie'

export type EyeColor =
  | '-'
  | 'Amber'
  | 'Black'
  | 'Blue'
  | 'Blue / White'
  | 'Brown'
  | 'Gold'
  | 'Green'
  | 'Green / Blue'
  | 'Grey'
  | 'Hazel'
  | 'Indigo'
  | 'Purple'
  | 'Red'
  | 'Silver'
  | 'Violet'
  | 'White'
  | 'White / Red'
  | 'Yellow'
  | 'Yellow (without irises)'
  | 'Yellow / Blue'
  | 'Yellow / Red'

export type HairColor =
  | '-'
  | 'Auburn'
  | 'Black'
  | 'Black / Blue'
  | 'Blond'
  | 'Blue'
  | 'Brown'
  | 'Brown / Black'
  | 'Brown / White'
  | 'Brownn'
  | 'Gold'
  | 'Green'
  | 'Grey'
  | 'Indigo'
  | 'Magenta'
  | 'No Hair'
  | 'Orange'
  | 'Orange / White'
  | 'Pink'
  | 'Purple'
  | 'Red'
  | 'Red / Orange'
  | 'Red / White'
  | 'Silver'
  | 'Strawberry Blond'
  | 'White'
  | 'Yellow'

export type Gender = '-' | 'male' | 'female'

export type Alignment = '-' | 'good' | 'bad' | 'neutral'

export interface Powerstat {
  intelligence: number
  strength: number
  speed: number
  durability: number
  power: number
  combat: number
}

export interface Appearance {
  gender: Gender
  race: Race
  height: [string, string] // ft/cm
  weight: [string, string] // lb/kg
  eyeColor: EyeColor
  hairColor: HairColor
}

export interface Biography {
  fullName: string
  alterEgos: string
  aliases: string[]
  placeOfBirth: string
  firstAppearance: string
  publisher: string
  alignment: Alignment
}

export interface Work {
  occupation: string
  base: string
}

export interface Connections {
  groupAffiliation: string
  relatives: string
}

export interface Supe {
  uuid: string
  name: string
  slug: string
  powerstats: Powerstat
  appearance: Appearance
  biography: Biography
  work: Work
  connections: Connections
  image: string
}
