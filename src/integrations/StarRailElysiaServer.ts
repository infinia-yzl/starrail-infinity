// If you want to use a server other than Elysia, you can simply copy & paste the class, and change Elysia to something else
import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { StarRailService } from "../services/StarRailService.ts";
import { SWAGGER_CONFIG } from "./swaggerConfig.ts";

/**
 * Configurable backend Elysia server class. \
 * If you're a front-end consumer, you probably don't need this -- use {@link StarRailElysiaApp} instead.
 */
export class StarRailElysiaServer {
  private service: StarRailService;

  /**
   * To add specific settings such as CORS, instantiate and configure an Elysia instance, then pass that in.
   * https://elysiajs.com/plugins/overview.html
   * @param app
   */
  constructor(private readonly app = new Elysia()) {
    this.app.use(swagger(SWAGGER_CONFIG));

    this.service = new StarRailService();
    this.initializeRoutes();
  }

  // Returns `app` for Eden Treaty and Testing
  public elysia(): Elysia {
    return this.app;
  }

  start(port: number = 3001) {
    this.app.listen(port);
    console.log(`🌠🦊 StarRailElysiaServer is running on port ${port}`);
  }

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

/*
  Highly recommended for front-end consumers. Use [Eden Treaty](https://elysiajs.com/plugins/eden/treaty.html). \
  For example:
  ```typescript
  const appClient = edenTreaty<StarRailElysiaApp>('http://localhost:3001');
  ```
*/
export type StarRailElysiaApp = ReturnType<StarRailElysiaServer["elysia"]>;
