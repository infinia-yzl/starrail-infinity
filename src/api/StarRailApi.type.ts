/**
 * From Hoyo's API.
 */
export interface ApiPlayerData {
  uid: string;
  nickname: string;
  level: number;
  world_level: number;
  friend_count: number;
  avatar: ApiResource;
  signature: string;
  is_display: boolean;
  space_info: ApiSpaceInfo;
}

/**
 * From Hoyo's API.
 */
export interface ApiCharacterData {
  id: string;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  icon: string;
  preview: string;
  portrait: string;
  rank_icons: string[];
  path: ApiResource;
  element: ApiResource;
  skills: ApiSkill[];
  skill_trees: ApiSkillTree[];
  light_cone: ApiLightCone;
  relics: ApiRelic[];
  relic_sets: ApiRelicSet[];
  attributes: ApiAttribute[];
  additions: ApiAttribute[];
  properties: ApiAttribute[];
}

/**
 * From Hoyo's API.
 */
export interface ApiAttribute {
  field: ApiField;
  name: string;
  icon: string;
  value: number;
  display: string;
  percent: boolean;
  type?: string;
  count?: number;
  step?: number;
}

/**
 * From Hoyo's API.
 */
export enum ApiField {
  AllDmg = "all_dmg",
  Atk = "atk",
  BreakDmg = "break_dmg",
  CritDmg = "crit_dmg",
  CritRate = "crit_rate",
  Def = "def",
  EffectHit = "effect_hit",
  EffectRes = "effect_res",
  FireDmg = "fire_dmg",
  HP = "hp",
  IceDmg = "ice_dmg",
  ImaginaryDmg = "imaginary_dmg",
  LightningDmg = "lightning_dmg",
  PhysicalDmg = "physical_dmg",
  QuantumDmg = "quantum_dmg",
  Spd = "spd",
  WindDmg = "wind_dmg",
}

/**
 * From Hoyo's API.
 */
export interface ApiResource {
  id: string;
  name: string;
  color?: string;
  icon: string;
}

/**
 * From Hoyo's API.
 */
export interface ApiLightCone {
  id: string;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  icon: string;
  preview: string;
  portrait: string;
  path: ApiResource;
  attributes: ApiAttribute[];
  properties: ApiAttribute[];
}

/**
 * From Hoyo's API.
 */
export interface ApiRelicSet {
  id: string;
  name: string;
  icon: string;
  num: number;
  desc: string;
  properties: ApiAttribute[];
}

/**
 * From Hoyo's API.
 */
export interface ApiRelic {
  id: string;
  name: string;
  set_id: string;
  set_name: string;
  rarity: number;
  level: number;
  icon: string;
  main_affix: ApiAttribute;
  sub_affix: ApiAttribute[];
}

/**
 * From Hoyo's API.
 */
export interface ApiSkillTree {
  id: string;
  level: number;
  anchor: string;
  max_level: number;
  icon: string;
  parent: null | string;
}

/**
 * From Hoyo's API.
 */
export interface ApiSkill {
  id: string;
  name: string;
  level: number;
  max_level: number;
  element: ApiResource | null;
  type: string;
  type_text: string;
  effect: ApiEffect;
  effect_text: string;
  simple_desc: string;
  desc: string;
  icon: string;
}

/**
 * From Hoyo's API.
 */
export enum ApiEffect {
  AoEAttack = "AoEAttack",
  Blast = "Blast",
  Enhance = "Enhance",
  MazeAttack = "MazeAttack",
  SingleAttack = "SingleAttack",
}

/**
 * From Hoyo's API.
 */
export interface ApiSpaceInfo {
  challenge_data: ApiChallengeData;
  pass_area_progress: number;
  light_cone_count: number;
  avatar_count: number;
  achievement_count: number;
}

/**
 * From Hoyo's API.
 */
export interface ApiChallengeData {
  maze_group_id: number;
  maze_group_index: number;
  pre_maze_group_index: number;
}

/**
 * From Hoyo's API.
 */
export interface ApiUserInfo {
  player: ApiPlayerData;
  characters: ApiCharacterData[];
}
