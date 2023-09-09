import {expect, test, describe, beforeAll} from "bun:test";
import {StarRailApi} from "./StarRailApi.ts";
import {Character} from "../game";

describe("StarRailApi tests", () => {
    const UUID = '801875354';
    let api: StarRailApi;

    beforeAll(() => {
        api = new StarRailApi(UUID);
    })

    test("should fetch user details based on UUID", async () => {
        const result = await api.getUserInfo();
        expect(result).toStrictEqual({
            player: {
                nickname: expect.any(String),
                level: expect.any(Number),
                world_level: expect.any(Number),
                friend_count: expect.any(Number),
                avatar_name: expect.any(String),
                signature: expect.any(String),
                light_cone_count: expect.any(Number),
                avatar_count: expect.any(Number),
                achievement_count: expect.any(Number),
            },
            characters: expect.any(Array<Character>),
        });
        console.log(result);
    });
});
