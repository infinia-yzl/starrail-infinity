export const SWAGGER_CONFIG = {
  documentation: {
    info: {
      title: "StarRailService API Documentation",
      version: "1.0.0",
      description:
        "This API is a proxy to retrieve [Honkai: Star Rail](https://hsr.hoyoverse.com/en-us/) game data, including player information, equipment, and more.",
    },
    tags: [
      { name: "Health", description: "Endpoints to check the server health." },
      {
        name: "Users",
        description:
          "Endpoints related to publicly exposed user data from Hoyo's API.",
      },
      // Add more tags as required
    ],
  },
};
