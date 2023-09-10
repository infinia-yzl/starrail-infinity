import {StarRailApi} from "../api";
import {Character, CharacterDetails} from "./Character.ts";
import {User} from "./User.ts";
import {Player, SpaceInfo} from "./Player.ts";
import {mapKeysToCamelCase} from "../helper.ts";
import {Equipment, Relic} from "./Equipment.ts";
import {Attribute, PathResource} from "./Mechanic.types.ts";
import {ApiRelic} from "../api/StarRailApi.type.ts";

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

            this._users.push(new User(
                mappedPlayer,
                characters.map(char => new Character(
                    mapKeysToCamelCase(char) as CharacterDetails,
                    new Equipment({
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
                    }, char.relics.map((relic) => StarRailService.fromApiRelic(relic))),
                )),
                userApi));
        } catch (e) {
            throw new Error(`Error fetching data from the game's API (player-details): ${e}`);
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
        }
    }

    // static fromApiAttribute(apiAttribute: ApiAttribute): Attribute {
    //     return {
    //         field: apiAttribute.field,
    //         name: apiAttribute.name,
    //         icon: apiAttribute.icon,
    //         value: apiAttribute.value,
    //         display: apiAttribute.display,
    //         percent: apiAttribute.percent,
    //         type: apiAttribute.type,
    //         count: apiAttribute.count,
    //         step: apiAttribute.step,
    //     }
    // }
}