import { expect, test, describe, beforeAll } from "bun:test";
import { StarRailApi } from "./StarRailApi.ts";
import { ApiCharacterData } from "./StarRailApi.type.ts";

describe("StarRailApi tests", () => {
  const UUID = "801875354";
  let api: StarRailApi;

  beforeAll(() => {
    api = new StarRailApi(UUID);
  });

  // Actual API calls, not mocked
  test("should fetch user details based on UUID", async () => {
    const result = await api.getUserInfo();
    // console.log(result);

    expect(result).toStrictEqual({
      player: expect.any(Object),
      characters: expect.any(Array<ApiCharacterData>),
    });

    const { player } = result;

    // Bun still doesn't have enough matchers ready at time of writing (e.g. no `objectContaining` or `arrayContaining`)
    expect(player).toStrictEqual({
      uid: expect.any(String),
      nickname: expect.any(String),
      level: expect.any(Number),
      world_level: expect.any(Number),
      friend_count: expect.any(Number),
      avatar: expect.any(Object),
      signature: expect.any(String),
      is_display: expect.any(Boolean),
      space_info: expect.any(Object),
    });

    // Less important tests, less strict
    const { avatar, space_info } = player;

    // ApiResource
    expect(avatar).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      icon: expect.any(String),
    });

    expect(space_info).toEqual({
      challenge_data: expect.any(Object),
      pass_area_progress: expect.any(Number),
      light_cone_count: expect.any(Number),
      avatar_count: expect.any(Number),
      achievement_count: expect.any(Number),
    });

    const { challenge_data } = space_info;

    expect(challenge_data).toEqual({
      maze_group_id: expect.any(Number),
      maze_group_index: expect.any(Number),
      pre_maze_group_index: expect.any(Number),
    });
  });
});
