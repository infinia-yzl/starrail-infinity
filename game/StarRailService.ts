import {StarRailApi} from "../api";
import {Character, Element, Path} from "./Character.ts";
import {User} from "./User.ts";
import {Player, SpaceInfo} from "./Player.ts";
import {mapKeysToCamelCase} from "../helper.ts";

export class StarRailService {
    // TODO: Change to Map instead for easy lookup and no dupes
    get users(): User[] {
        return this._users;
    }

    set users(value: User[]) {
        this._users = value;
    }

    private _users: User[];

    constructor(users = []) {
        this._users = users;
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
                spaceInfo: mapKeysToCamelCase(playerData.space_info) as SpaceInfo,
            });

            this._users.push(new User(mappedPlayer, characters.map(char => new Character({
                id: char.id,
                name: char.name,
                rarity: char.rarity,
                rank: char.rank,
                level: char.level,
                promotion: char.promotion,
                path: char.path.id as Path,
                element: char.element.id as Element,
            })), userApi));
        } catch (e) {
            throw new Error(`Error fetching data from the game's API (player-details): ${e}`);
        }
    }
}