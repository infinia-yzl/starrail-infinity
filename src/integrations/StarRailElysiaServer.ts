// If you want to use a server other than Elysia, you can simply copy & paste the class, and change Elysia to something else
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { StarRailService } from "../services/StarRailService.ts";
import { SWAGGER_CONFIG } from "./swaggerConfig.ts";

/**
 * Represents a configurable Elysia server specifically designed for StarRail.
 *
 * @remarks
 * This server class can be used to configure a backend Elysia server.
 * For front-end consumers, the {@link StarRailElysiaApp} type should be used instead.
 */
export class StarRailElysiaServer {
  private service: StarRailService;

  /**
   * Creates an instance of the StarRailElysiaServer.
   *
   * @remarks
   * To add specific settings such as CORS, instantiate and configure an Elysia instance, then pass that in.
   * https://elysiajs.com/plugins/overview.html
   * @param app - An optional, pre-configured Elysia instance.
   */
  constructor(private readonly app = new Elysia()) {
    this.app.use(swagger(SWAGGER_CONFIG));

    this.service = new StarRailService();
    this.initializeRoutes();
  }

  /**
   * Retrieves the underlying Elysia instance. Useful for plugins like Eden Treaty and testing.
   * @returns The Elysia app instance.
   */
  public elysia(): Elysia {
    return this.app;
  }

  /**
   * Starts the Elysia server.
   *
   * @param port - The port on which the server should listen. Defaults to 3001.
   */
  start(port: number = 3001) {
    this.app.listen(port);
    console.log(`🌠🦊 StarRailElysiaServer is running on port ${port}`);
  }

  /**
   * Stops the Elysia server.
   *
   * @param requester - Optional name or identifier of the requester prompting the server to stop.
   */
  stop(requester?: string) {
    this.app
      .stop()
      .then(() =>
        console.log(
          `🌠🦊 StarRailElysiaServer has shutdown ${
            requester ? `as requested by ${requester}` : ""
          }`,
        ),
      );
  }

  /**
   * Private method to initialize API routes.
   */
  private initializeRoutes() {
    this.app.get(
      "/health",
      () => "💓 Healthy, ready to accept connections 💓",
      {
        detail: {
          tags: ["Health"],
        },
      },
    );

    // Fetch user data by UUID
    this.app.get(
      "/user/:uuid",
      async ({ params, set }) => {
        try {
          const uuid = params.uuid;
          const user = await this.service.getUser(uuid);

          if (user) {
            return user;
          } else {
            set.status = 404;
            return "User not found.";
          }
        } catch (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: any
        ) {
          set.status = 500;
          return error.message;
        }
      },
      {
        detail: {
          tags: ["Users"],
        },
      },
    );

    // Fetch all users
    this.app.get("/users", () => this.service.users, {
      detail: {
        tags: ["Users"],
      },
    });
  }
}

/**
 * Type definition representing the server interface for front-end consumers.
 *
 * @remarks
 * This type is recommended for front-end consumption, especially when using
 * plugins like [Eden Treaty](https://elysiajs.com/plugins/eden/treaty.html).
 *
 * @example
 * ```typescript
 * const appClient = edenTreaty<StarRailElysiaApp>('http://localhost:3001');
 * ```
 */
export type StarRailElysiaApp = ReturnType<StarRailElysiaServer["elysia"]>;
