import { Api } from "./Api.ts";
import { Character } from "../game";

export interface ApiPlayerData {
    nickname: string;
    level: number;
    world_level: number;
    friend_count: number;
    avatar_name: string;
    signature: string;
    light_cone_count: number;
    avatar_count: number;
    achievement_count: number;
}

interface ApiCharacterData {

}

export interface ApiUserInfo {
    player: ApiPlayerData;
    characters: ApiCharacterData[];
}


export class StarRailApi extends Api {
    static baseUrl = 'https://api.mihomo.me';

    get uuid(): string {
        return this._uuid;
    }

    constructor(private readonly _uuid: string) {
        super({
            baseUrl: StarRailApi.baseUrl,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    /**
     * Get Star Rail user information.
     *
     * @param {string} [lang='en'] - Language for the user information.
     * @returns {Promise<any>} - Returns a promise resolving with the JSON data.
     */
    async getUserInfo(lang: string = 'en'): Promise<ApiUserInfo> {
        const featureUrl = `/sr_info_parsed/${this.uuid}?lang=${lang}`;
        return this.get<ApiUserInfo>(featureUrl);
    }
}
