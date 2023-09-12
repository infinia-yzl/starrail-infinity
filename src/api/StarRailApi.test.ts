import { expect, test, describe, beforeAll } from "bun:test";
import { StarRailApi } from "./StarRailApi.ts";
import { ApiCharacterData } from "./StarRailApi.type.ts";

// Skip by default, so we don't make unnecessary API calls.
// Tip: un-skip, `console.log` the result and add it to a new mock file for testing.
describe.skip("StarRailApi", () => {
  const UUID = "701233111";
  let api: StarRailApi;

  beforeAll(() => {
    api = new StarRailApi(UUID);
  });

  // Actual API calls, not mocked
  test("should fetch user details based on UUID", async () => {
    const result = await api.getUserInfo();
    // console.log(result);
    // const output = Bun.file("./mocks/userinfo_v_1_3_0_a.json", {
    //   type: "application/json",
    // }); // create file (doesn't seem to work)
    // await Bun.write(output, JSON.stringify(result));

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
