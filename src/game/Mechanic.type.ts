// This file contains types for base game mechanics that aren't currently abstracted to their own classes.

import { ApiField, ApiResource } from "../api";

/**
 * Represents the various paths in the game.
 */
export enum Path {
  "Warrior" = "The Destruction",
  "Rogue" = "The Hunt",
  "Mage" = "The Erudition",
  "Shaman" = "The Harmony",
  "Warlock" = "The Nihility",
  "Knight" = "The Preservation",
  "Priest" = "The Abundance",
}

/**
 * Represents the various elements in the game.
 */
export enum Element {
  "Physical" = "Physical",
  "Fire" = "Fire",
  "Ice" = "Ice",
  "Thunder" = "Lightning",
  "Wind" = "Wind",
  "Quantum" = "Quantum",
  "Imaginary" = "Imaginary",
}

/**
 * Represents a game field derived from an API field.
 */
export type Field = ApiField;

/**
 * Describes an attribute with its field, name, icon, value, display properties, and other potential attributes.
 */
export interface Attribute {
  field: Field;
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
 * Represents a generic game resource that can extend the API resource.
 */
export interface Resource extends ApiResource {}

/**
 * Represents a resource associated with a specific path in the game.
 */
export interface PathResource extends Resource {
  id: Path;
}

/**
 * Represents a resource associated with a specific element in the game.
 */
export interface ElementResource extends Resource {
  id: Element;
}

/**
 * Enumerates the different types of effects in the game.
 */
export enum Effect {
  AoEAttack = "AoEAttack",
  Blast = "Blast",
  Enhance = "Enhance",
  MazeAttack = "MazeAttack", // Maze refers to "overworld", i.e. outside of combat
  SingleAttack = "SingleAttack",
}
