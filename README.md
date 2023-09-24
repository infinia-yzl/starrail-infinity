# 🌠 StarRailInfinity 🌠

Welcome to **StarRailInfinity** - a simple proxy designed to fetch publicly available data from the official game's API of [Honkai: Star Rail](https://hsr.hoyoverse.com/). 

Built with a vision to improve and simplify data access, this project reflects my passion for the game and the broader community.

## Features:

### Current:
- **Proxy Access**: Directly fetch game data. A straightforward gateway to the game's publicly available details.
- **Basic Caching**: Minimize redundant API calls.
- **Fully Typed**: Built with TypeScript, ensure type-safe interactions and predictable responses.
- **Comprehensive Testing**: Utilises Bun's built-in testing functionality to ensure reliability.

### Upcoming:
1. **Indexing**: The plan isn't just to fetch, but to remember. I'm aiming to store player data for even swifter retrievals down the line.
2. **Insights**: I'm excited about the potential to delve into the nuances of player data. Imagine drawing meaningful patterns, understanding trends, and even perhaps making game strategy suggestions. The data holds stories, and I intend to narrate them.

## 💻 Getting Started:

This project is built with: 
- [Bun](https://bun.sh/) - Bun is a fast Javascript all-in-one toolkit. *It's similar to node.*
- [Elysia](https://elysiajs.com/) - ElysiaJS is a fast, and friendly Bun web framework.

1. **Install Dependencies**:

    ```bash
    bun install
    ```

2. **Test**:

   ```bash
    bun test
    ```

3. **Run the Server**:

    ```bash
    bun start
    ```
   
    or in `dev` mode
    
    ```bash
    bun dev
    ```

4. **Documentation and Testing**:

    - **Swagger OpenAPI Docs**: [http://localhost:3001/swagger](http://localhost:3001/swagger)
    - **Fetch a User**: [http://localhost:3001/user/{uuid}](http://localhost:3001/user/{uuid}) (Replace `{uuid}` with the specific user's UUID)


## 📜 License

This project is licensed under the MIT License. Check out the full license [here](/LICENSE).

## 🤝 Contribution and Maintenance

This is a personal side-project, developed out of passion and interest; a labor of love for the community.
Contributions are warmly welcomed! If you'd like to contribute, feel free to fork the repository, make your changes, and submit a pull request. 
If you have any ideas, suggestions, or issues, don't hesitate to open an issue to discuss it.

## ⚠️ Disclaimer

`StarRailInfinity` is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the official game or any of its subsidiaries or affiliates. The official game website can be found at [https://hsr.hoyoverse.com/](https://hsr.hoyoverse.com/).

This project is provided “as is”, without warranty of any kind, express or implied. I am not responsible for any claim, damages, or other liability arising from, out of, or in connection with the software or its usage.
