import { Character } from "./Character.ts";
import { Player } from "./Player.ts";
import { StarRailApi } from "../api";

/**
 * Represents a user in Star Rail, encapsulating player details and associated characters.
 */
export class User {
  /**
   * Represents a Star Rail user.
   * @param {Player} player - The Player instance associated with the user.
   * @param {Character[]} characters - The array of characters associated with the user.
   * @param {StarRailApi} api - The StarRailApi instance for fetching user data.
   */
  constructor(
    public player: Player,
    public characters: Character[],
    public api: StarRailApi,
  ) {
    /**
     * Ensures that the UUID from the player matches the UUID from the API for data consistency.
     */
    if (player.uuid !== api.uuid) {
      throw new Error(
        "Fatal error: Player Api UUID mismatch when constructing User.",
      );
    }
  }
}
