import {Character} from "./Character.ts";
import {Player} from "./Player.ts";
import {StarRailApi} from "../api";

export class User {
    constructor(public player: Player, public characters: Character[], public api: StarRailApi) {
        if (player.uuid !== api.uuid) {
            throw new Error('Fatal error: Player Api UUID mismatch when constructing User.')
        }
    }
}
