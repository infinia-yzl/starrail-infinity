import { Api } from "./Api.ts";
import {ApiUserInfo} from "./StarRailApi.type.ts";

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
