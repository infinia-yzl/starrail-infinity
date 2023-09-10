import {
  Resource,
  Effect,
  PathResource,
  ElementResource,
} from "./Mechanic.type.ts";
import { Equipment } from "./Equipment.ts";

export interface CharacterDetails {
  id: string;
  name: string;
  rarity: number; // Rank (4* / 5*)
  rank: number; // Eidolon
  level: number;
  promotion: number; // Ascension
  path: PathResource;
  element: ElementResource;
  skill: Skill[];
  skillTree: SkillNode[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  element: Resource | null;
  type: string;
  typeText: string;
  effect: Effect;
  effectText: string;
  simpleDesc: string;
  desc: string;
  icon: string;
}

// Traces
export interface SkillNode {
  id: string;
  level: number;
  anchor: string;
  maxLevel: number;
  icon: string;
  parent: null | string;
}

export class Character {
  id: string;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  path: PathResource;
  element: ElementResource;
  skill: Skill[];
  skillTree: SkillNode[];

  equipment: Equipment;

  constructor(characterData: CharacterDetails, equipmentData: Equipment) {
    this.id = characterData.id;
    this.name = characterData.name;
    this.rarity = characterData.rarity;
    this.rank = characterData.rank;
    this.level = characterData.level;
    this.promotion = characterData.promotion;
    this.path = characterData.path;
    this.element = characterData.element;
    this.skill = characterData.skill;
    this.skillTree = characterData.skillTree;

    this.equipment = equipmentData;
  }
}
