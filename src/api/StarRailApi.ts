import { Api } from "./Api.ts";
import { ApiUserInfo } from "./StarRailApi.type.ts";

/**
 * API class for interacting with the StarRail endpoint.
 */
export class StarRailApi extends Api {
  /** Base URL for the StarRail API. */
  static baseUrl = "https://api.mihomo.me";

  /**
   * Getter for the user's UUID.
   * @returns {string} - The UUID of the user.
   */
  get uuid(): string {
    return this._uuid;
  }

  /**
   * Constructor for the `StarRailApi` class.
   * @param {string} _uuid - The UUID of the user.
   */
  constructor(private readonly _uuid: string) {
    super({
      baseUrl: StarRailApi.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Fetches Star Rail user information.
   * @param {string} [lang='en'] - Language for the user information.
   * @returns {Promise<ApiUserInfo>} - Returns a promise resolving with the JSON data.
   */
  async getUserInfo(lang: string = "en"): Promise<ApiUserInfo> {
    const featureUrl = `/sr_info_parsed/${this.uuid}?lang=${lang}`;
    return this.get<ApiUserInfo>(featureUrl);
  }
}
