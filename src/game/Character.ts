import {
  Resource,
  Effect,
  PathResource,
  ElementResource,
  Attribute,
} from "./Mechanic.type.ts";
import { Equipment } from "./Equipment.ts";

/**
 * Detailed information about a character in the game.
 */
export interface CharacterDetails {
  /** Character's unique ID. */
  id: string;
  /** Character's name. */
  name: string;
  /** Character's rarity, usually represented as stars (e.g., 4*, 5*). */
  rarity: number;
  /** Character's rank or "Eidolon". */
  rank: number;
  /** Current level of the character. */
  level: number;
  /** Character's ascension level, commonly termed "Promotion". */
  promotion: number;
  /** Character's current path (development route). */
  path: PathResource;
  /** Elemental type of the character. */
  element: ElementResource;
  /** List of skills possessed by the character. */
  skills: Skill[];
  /** Skill tree nodes / traces available for the character. */
  skillTrees: SkillNode[];
  /** Character's base attributes. */
  attributes: Attribute[];
  /** Additional attributes given by equipment or buffs. */
  additions: Attribute[];
  /** Properties specific to this character. */
  properties: Attribute[];
}

/**
 * Information about a specific skill of a character.
 */
export interface Skill {
  /** Skill's unique ID. */
  id: string;
  /** Skill's name. */
  name: string;
  /** Current level of the skill. */
  level: number;
  /** Maximum level the skill can achieve. */
  maxLevel: number;
  /** Elemental resource associated with the skill. */
  element: Resource | null;
  /** Type of the skill. */
  type: string;
  /** Descriptive text about the type of skill. */
  typeText: string;
  /** Specific effect produced by the skill. */
  effect: Effect;
  /** Text description of the skill's effect. */
  effectText: string;
  /** Brief description of the skill. */
  simpleDesc: string;
  /** Detailed description of the skill. */
  desc: string;
  /** Icon representing the skill. */
  icon: string;
}

/**
 * Node representation in the skill tree, commonly known as "Traces".
 */
export interface SkillNode {
  /** Node's unique ID. */
  id: string;
  /** Current level of the skill node. */
  level: number;
  /** Anchor or position identifier of the node in the tree. */
  anchor: string;
  /** Maximum level the node can achieve. */
  maxLevel: number;
  /** Icon representing the node. */
  icon: string;
  /** Parent node's ID. */
  parent: null | string;
}

/**
 * Class representation of a character with associated details and equipment.
 */
export class Character {
  id: string;
  name: string;
  rarity: number;
  rank: number;
  level: number;
  promotion: number;
  path: PathResource;
  element: ElementResource;
  skills: Skill[];
  skillTrees: SkillNode[]; // aka traces
  attributes: Attribute[];
  additions: Attribute[];
  properties: Attribute[];

  equipment: Equipment;

  /**
   * Constructor to create a character instance.
   * @param {CharacterDetails} characterData - Detailed information about the character.
   * @param {Equipment} equipmentData - Equipment associated with the character.
   */
  constructor(characterData: CharacterDetails, equipmentData: Equipment) {
    this.id = characterData.id;
    this.name = characterData.name;
    this.rarity = characterData.rarity;
    this.rank = characterData.rank;
    this.level = characterData.level;
    this.promotion = characterData.promotion;
    this.path = characterData.path;
    this.element = characterData.element;
    this.skills = characterData.skills;
    this.skillTrees = characterData.skillTrees;
    this.attributes = characterData.attributes;
    this.additions = characterData.additions;
    this.properties = characterData.properties;

    this.equipment = equipmentData;
  }
}
