import { expect, test, describe } from "bun:test";

import MOCK_USER_INFO from "./_mocks/userinfo_v1_3_0.json";
import { User } from "./game";
import { StarRailApi } from "./api";
import { StarRailService } from "./StarRailService.ts";
import { ApiCharacterData } from "./api/StarRailApi.type.ts";

// Since we have no tests under `./game`, we'll do E2E testing here
describe("StarRailService", async () => {
  describe("Users", () => {
    test("should initialize users", () => {
      const users: User[] = [
        new User(
          StarRailService.fromApiPlayer(MOCK_USER_INFO.player),
          StarRailService.fromApiCharacters(
            MOCK_USER_INFO.characters as ApiCharacterData[],
          ),
          new StarRailApi(MOCK_USER_INFO.player.uid),
        ),
      ];

      expect(users).toBeArrayOfSize(1);

      const service = new StarRailService(users);
      expect(service.users).toEqual(users);
    });

    test("should throw error on API UUID mismatch", () => {
      expect(() => {
        new User(
          StarRailService.fromApiPlayer(MOCK_USER_INFO.player),
          StarRailService.fromApiCharacters(
            MOCK_USER_INFO.characters as ApiCharacterData[],
          ),
          new StarRailApi("123456"),
        );
      }).toThrow(
        "Fatal error: Player Api UUID mismatch when constructing User.",
      );
    });
  });
});
