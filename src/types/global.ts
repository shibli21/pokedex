export enum HTTP_METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export interface Pokemons {
  cursor?: string;
  count?: number;
  next?: string;
  previous?: null;
  results?: PokemonResult[];
}

export interface PokemonResult {
  name?: string;
  url?: string;
}

export interface SinglePokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl": Sprites;
  "heartgold-soulsilver": Sprites;
  platinum: Sprites;
}

export interface Versions {
  "generation-i": GenerationI;
  "generation-ii": GenerationIi;
  "generation-iii": GenerationIii;
  "generation-iv": GenerationIv;
  "generation-v": GenerationV;
  "generation-vi": { [key: string]: GenerationVi };
  "generation-vii": GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Crystal;
  silver: Crystal;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  "firered-leafgreen": Crystal;
  "ruby-sapphire": Crystal;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface GenerationVi {
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  "ultra-sun-ultra-moon": GenerationVi;
}

export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

// export interface PokemonSpecies {
//   base_happiness?: number;
//   capture_rate?: number;
//   color?: Color;
//   egg_groups?: any[];
//   evolution_chain?: Color;
//   evolves_from_species?: Color;
//   flavor_text_entries?: any[];
//   form_descriptions?: any[];
//   forms_switchable?: boolean;
//   gender_rate?: number;
//   genera?: Genus[];
//   generation?: Generation;
//   growth_rate?: Generation;
//   habitat?: Generation;
//   has_gender_differences?: boolean;
//   hatch_counter?: number;
//   id?: number;
//   is_baby?: boolean;
//   is_legendary?: boolean;
//   is_mythical?: boolean;
//   name?: string;
//   names?: Name[];
//   order?: number;
//   pal_park_encounters?: PalParkEncounter[];
//   pokedex_numbers?: PokedexNumber[];
//   shape?: Generation;
//   varieties?: Variety[];
// }

// export interface Color {}

// export interface Genus {
//   genus?: string;
//   language?: Generation;
// }

// export interface Generation {
//   name?: string;
//   url?: string;
// }

// export interface Name {
//   language?: Generation;
//   name?: string;
// }

// export interface PalParkEncounter {
//   area?: Generation;
//   base_score?: number;
//   rate?: number;
// }

// export interface PokedexNumber {
//   entry_number?: number;
//   pokedex?: Generation;
// }

// export interface Variety {
//   is_default?: boolean;
//   pokemon?: Generation;
// }
export interface PokemonSpecies {
  base_happiness?: number;
  capture_rate?: number;
  color?: Color;
  egg_groups?: any[];
  evolution_chain?: EvolutionChainClass;
  evolves_from_species?: null;
  flavor_text_entries?: FlavorTextEntry[];
  form_descriptions?: any[];
  forms_switchable?: boolean;
  gender_rate?: number;
  genera?: Genus[];
  generation?: Color;
  growth_rate?: Color;
  habitat?: Color;
  has_gender_differences?: boolean;
  hatch_counter?: number;
  id?: number;
  is_baby?: boolean;
  is_legendary?: boolean;
  is_mythical?: boolean;
  name?: string;
  names?: Name[];
  order?: number;
  pal_park_encounters?: PalParkEncounter[];
  pokedex_numbers?: PokedexNumber[];
  shape?: Color;
  varieties?: Variety[];
}

export interface Color {
  name?: string;
  url?: string;
}

export interface EvolutionChainClass {
  url?: string;
}

export interface FlavorTextEntry {
  flavor_text?: string;
  language?: Color;
  version?: Color;
}

export interface Genus {
  genus?: string;
  language?: Color;
}

export interface Name {
  language?: Color;
  name?: string;
}

export interface PalParkEncounter {
  area?: Color;
  base_score?: number;
  rate?: number;
}

export interface PokedexNumber {
  entry_number?: number;
  pokedex?: Color;
}

export interface Variety {
  is_default?: boolean;
  pokemon?: Color;
}

export interface EvolutionChain {
  baby_trigger_item?: null;
  chain?: Chain;
  id?: number;
}

export interface Chain {
  evolution_details?: EvolutionDetail[];
  evolves_to?: Chain[];
  is_baby?: boolean;
  species?: Species;
}

export interface EvolutionDetail {
  gender?: null;
  held_item?: null;
  item?: null;
  known_move?: null;
  known_move_type?: null;
  location?: null;
  min_affection?: null;
  min_beauty?: null;
  min_happiness?: null;
  min_level?: number;
  needs_overworld_rain?: boolean;
  party_species?: null;
  party_type?: null;
  relative_physical_stats?: null;
  time_of_day?: string;
  trade_species?: null;
  trigger?: Species;
  turn_upside_down?: boolean;
}

export interface PokemonType {
  damage_relations?: DamageRelations;
  game_indices?: GameIndex[];
  generation?: Generation;
  id?: number;
  move_damage_class?: Generation;
  moves?: Generation[];
  name?: string;
  names?: Name[];
  pokemon?: Pokemon[];
}

export interface DamageRelations {
  double_damage_from?: Generation[];
  double_damage_to?: any[];
  half_damage_from?: any[];
  half_damage_to?: any[];
  no_damage_from?: any[];
  no_damage_to?: any[];
}

export interface Generation {
  name?: string;
  url?: string;
}

export interface Name {
  language?: Generation;
  name?: string;
}

export interface Pokemon {
  pokemon?: Generation;
  slot?: number;
}
