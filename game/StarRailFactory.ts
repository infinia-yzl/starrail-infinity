import {StarRailApi} from "../api";
import {Character} from "./Character.ts";
import {User} from "./User.ts";
import {Player} from "./Player.ts";

export class StarRailFactory {
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
                uuid,
                nickname: playerData.nickname,
                level: playerData.level,
                worldLevel: playerData.world_level,
                friendCount: playerData.friend_count,
                avatarName: playerData.avatar_name,
                signature: playerData.signature,
                lightConeCount: playerData.light_cone_count,
                avatarCount: playerData.avatar_count,
                achievementCount: playerData.achievement_count
            });

            this._users.push(new User(mappedPlayer, characters.map(char => new Character(char)), userApi));
        } catch (e) {
            throw new Error(`Error fetching data from the game's API (player-details): ${e}`);
        }
    }
}