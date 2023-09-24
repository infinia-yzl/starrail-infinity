import { PathResource, Attribute } from "./Mechanic.type.ts";

/**
 * Detailed information about a LightCone.
 */
export interface LightCone {
  /** LightCone's unique ID. */
  id: string;
  /** LightCone's name. */
  name: string;
  /** LightCone's rarity, usually represented as stars (e.g., 4*, 5*). */
  rarity: number;
  /** LightCone's rank or "Eidolon". */
  rank: number;
  /** Current level of the LightCone. */
  level: number;
  /** LightCone's ascension level, commonly termed "Promotion". */
  promotion: number;
  /** Icon representing the LightCone. */
  icon: string;
  /** Preview image of the LightCone. */
  preview: string;
  /** Portrait image of the LightCone. */
  portrait: string;
  /** LightCone's current path (development route). */
  path: PathResource;
  /** LightCone's base attributes. */
  attributes: Attribute[];
  /** Properties specific to this LightCone. */
  properties: Attribute[];
}

/**
 * Information about a specific Relic in the game.
 */
export interface Relic {
  /** Relic's unique ID. */
  id: string;
  /** Relic's name. */
  name: string;
  /** The ID of the set to which this relic belongs. */
  setId: string;
  /** The name of the set to which this relic belongs. */
  setName: string;
  /** Relic's rarity, usually represented as stars (e.g., 4*, 5*). */
  rarity: number;
  /** Current level of the relic. */
  level: number;
  /** Icon representing the relic. */
  icon: string;
  /** The main attribute or effect produced by the relic. */
  mainAffix: Attribute;
  /** Subsequent attributes or secondary effects produced by the relic. */
  subAffix: Attribute[];
}

/**
 * Class representation of equipment with associated LightCone and Relics.
 */
export class Equipment {
  /**
   * Constructor to create an equipment instance.
   * @param {LightCone} lightCone - Detailed information about the associated LightCone.
   * @param {Relic[]} relics - Array of relics associated with the equipment.
   */
  constructor(
    public lightCone: LightCone,
    public relics: Relic[],
  ) {}
}
