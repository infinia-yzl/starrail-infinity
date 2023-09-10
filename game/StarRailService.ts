import camelcaseKeys from "camelcase-keys";

import { StarRailApi } from "../api";
import { Character, CharacterDetails } from "./Character.ts";
import { User } from "./User.ts";
import { Player, SpaceInfo } from "./Player.ts";
import { Equipment, Relic } from "./Equipment.ts";
import { Attribute, PathResource } from "./Mechanic.types.ts";
import { ApiRelic } from "../api/StarRailApi.type.ts";

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

      // Map snake_case to camelCase
      const mappedPlayer = new Player({
        uuid: playerData.uid,
        nickname: playerData.nickname,
        level: playerData.level,
        worldLevel: playerData.world_level,
        friendCount: playerData.friend_count,
        avatar: playerData.avatar,
        signature: playerData.signature,
        spaceInfo: camelcaseKeys(playerData.space_info as never) as SpaceInfo,
      });

      this._users.set(
        uuid,
        new User(
          mappedPlayer,
          characters.map(
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
                  char.relics.map((relic) =>
                    StarRailService.fromApiRelic(relic),
                  ),
                ),
              ),
          ),
          userApi,
        ),
      );
    } catch (e) {
      throw new Error(
        `Error fetching data from the game's API (player-details): ${e}`,
      );
    }
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
