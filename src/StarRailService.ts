import camelcaseKeys from "camelcase-keys";

import { StarRailApi } from "./api";
import {
  Character,
  CharacterDetails,
  Player,
  PlayerDetails,
  SpaceInfo,
  Equipment,
  Relic,
  User,
} from "./game";
import { Attribute, PathResource } from "./game/Mechanic.type.ts";
import {
  ApiCharacterData,
  ApiPlayerData,
  ApiRelic,
} from "./api/StarRailApi.type.ts";

export class StarRailService {
  private readonly _users: Map<string, User>;

  get users(): User[] {
    return Array.from(this._users.values());
  }

  getUser(uuid: string): User | undefined {
    return this._users.get(uuid);
  }

  constructor(users: User[] = []) {
    this._users = new Map<string, User>(
      users.map((user: User) => [user.player.uuid, user]),
    );
  }

  async importUserData(uuid: string) {
    const userApi = new StarRailApi(uuid);

    try {
      const { player: playerData, characters } = await userApi.getUserInfo();

      this._users.set(
        uuid,
        new User(
          new Player(StarRailService.fromApiPlayer(playerData)),
          StarRailService.fromApiCharacters(characters),
          userApi,
        ),
      );
    } catch (e) {
      throw new Error(
        `Error fetching data from the game's API (player-details): ${e}`,
      );
    }
  }

  static fromApiPlayer(playerData: ApiPlayerData): PlayerDetails {
    return {
      uuid: playerData.uid,
      nickname: playerData.nickname,
      level: playerData.level,
      worldLevel: playerData.world_level,
      friendCount: playerData.friend_count,
      avatar: playerData.avatar,
      signature: playerData.signature,
      spaceInfo: camelcaseKeys(playerData.space_info as never) as SpaceInfo,
    };
  }

  static fromApiCharacters(charactersData: ApiCharacterData[]): Character[] {
    return charactersData.map(
      (char) =>
        new Character(
          camelcaseKeys(char as never) as CharacterDetails,
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
