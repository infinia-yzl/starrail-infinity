import { describe, expect, test } from "bun:test";
import { StarRailElysiaServer } from "./StarRailElysiaServer.ts";

// Does not test the underlying service, because mocking is not supported properly yet by Bun: https://github.com/oven-sh/bun/issues/5394
describe("StarRailElysiaServer Health Checks", () => {
  test("GET /health - should return Healthy", async () => {
    const server = new StarRailElysiaServer();

    const response = await server
      .elysia()
      .handle(new Request("http://localhost/health"))
      .then((res: Response) => res.text());

    expect(response).toBe("💓 Healthy, ready to accept connections 💓");
  });
});
