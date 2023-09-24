import camelcaseKeys from "camelcase-keys";

import { StarRailApi } from "../api";
import {
  Character,
  CharacterDetails,
  Player,
  PlayerDetails,
  SpaceInfo,
  Equipment,
  Relic,
  User,
} from "../game";
import { Attribute, PathResource } from "../game/Mechanic.type.ts";
import { ApiCharacterData, ApiPlayerData, ApiRelic } from "../api";

/**
 * Service class for interacting with the StarRail API and data transformations.
 */
export class StarRailService {
  /**
   * Constructor for the `StarRailService` class.
   * @param {User[]} users - An initial set of user data.
   */
  constructor(users: User[] = []) {
    this._users = new Map<string, User>(
      users.map((user: User) => [user.player.uuid, user]),
    );
  }

  private readonly _users: Map<string, User>;

  /**
   * Getter for all users.
   * @returns {User[]} - List of all users.
   */
  get users(): User[] {
    return Array.from(this._users.values());
  }

  /**
   * Fetches a user's data, optionally bypassing cache.
   * @param {string} uuid - The UUID of the user.
   * @param {boolean} refresh - If true, bypasses cache and fetches fresh data.
   * @returns {Promise<User>} - The user's data.
   * @throws Will throw an error if the fetch fails.
   */
  async getUser(uuid: string, refresh?: boolean): Promise<User> {
    const cachedUser = this._users.get(uuid);

    // If we have a cached user and no refresh is requested, return the cached user
    if (cachedUser && !refresh) {
      return cachedUser;
    }

    // If no cached user or a refresh is requested, fetch and cache the user
    try {
      return await this._fetchAndCacheUser(uuid);
    } catch (e) {
      throw new Error(`Error fetching or caching user data: ${e}`);
    }
  }

  private async _fetchAndCacheUser(uuid: string): Promise<User> {
    const userApi = new StarRailApi(uuid);
    const { player: playerData, characters } = await userApi.getUserInfo();

    const user = new User(
      new Player(StarRailService.fromApiPlayer(playerData)),
      StarRailService.fromApiCharacters(characters),
      userApi,
    );
    this._users.set(uuid, user);

    return user;
  }

  /**
   * Transforms player data fetched from the API to a PlayerDetails format.
   * @param {ApiPlayerData} playerData - The raw player data from the API.
   * @returns {PlayerDetails} - The transformed player details.
   */
  static fromApiPlayer(playerData: ApiPlayerData): PlayerDetails {
    return {
      uuid: playerData.uid,
      nickname: playerData.nickname,
      level: playerData.level,
      worldLevel: playerData.world_level,
      friendCount: playerData.friend_count,
      avatar: playerData.avatar,
      signature: playerData.signature,
      spaceInfo: camelcaseKeys(playerData.space_info as never, {
        deep: true,
      }) as SpaceInfo,
    };
  }

  /**
   * Transforms character data fetched from the API to a list of Characters.
   * @param {ApiCharacterData[]} charactersData - The raw character data list from the API.
   * @returns {Character[]} - List of transformed characters.
   */
  static fromApiCharacters(charactersData: ApiCharacterData[]): Character[] {
    return charactersData.map(
      (char) =>
        new Character(
          camelcaseKeys(char as never, { deep: true }) as CharacterDetails,
          new Equipment(
            {
              id: char.id,
              name: char.name,
              rarity: char.rarity,
              rank: char.rank,
              level: char.level,
              promotion: char.promotion,
              icon: char.icon,
              preview: char.preview,
              portrait: char.portrait,
              path: char.path as PathResource,
              attributes: char.attributes as Attribute[],
              properties: char.properties as Attribute[],
            },
            char.relics.map((relic) => StarRailService.fromApiRelic(relic)),
          ),
        ),
    );
  }

  /**
   * Transforms relic data fetched from the API to a Relic format.
   * @param {ApiRelic} apiRelic - The raw relic data from the API.
   * @returns {Relic} - The transformed relic.
   */
  static fromApiRelic(apiRelic: ApiRelic): Relic {
    return {
      id: apiRelic.id,
      name: apiRelic.name,
      setId: apiRelic.set_id,
      setName: apiRelic.set_name,
      rarity: apiRelic.rarity,
      level: apiRelic.level,
      icon: apiRelic.icon,
      mainAffix: apiRelic.main_affix,
      subAffix: apiRelic.sub_affix,
    };
  }
}
