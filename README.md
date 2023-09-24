# 🌠 StarRail Infinity 🌠

🌠 **StarRail Infinity** is a fan-made **API proxy** to **fetch** and interact with data from [Honkai: Star Rail](https://hsr.hoyoverse.com/). 

Built with a vision to improve and simplify data access, this project reflects my passion for the game and the broader community.
It is currently a work-in-progress with no hard timelines -- it's a passion project.

## ✨ Features:

### Current:
- **Proxy Access**: Directly fetch publicly available game data.
- **Basic Caching**: Minimize redundant API calls.
- **Fully Typed**: Built with TypeScript, ensure type-safe interactions and predictable responses.
- **Comprehensive Testing**: Utilises Bun's built-in testing functionality to ensure reliability.

### Upcoming:
1. **Indexing**: The plan isn't just to fetch, but to remember. I'm aiming to index player data for even swifter retrievals down the line.
2. **Insights**: I'm excited about the potential to delve into the nuances of player data. Imagine drawing meaningful patterns, understanding trends, and even perhaps making game strategy suggestions. The data holds stories, and I intend to narrate them.

## 💻 Getting Started:

This project is built with: 
- [Bun](https://bun.sh/) - Bun is a fast Javascript all-in-one toolkit. *It's similar to node.*
- [Elysia](https://elysiajs.com/) - ElysiaJS is a fast, and friendly Bun web framework.

**You'll need [Bun](https://bun.sh/) to be able to run `bun` commands. 
Install [Bun](https://bun.sh/) with [these instructions](https://github.com/oven-sh/bun/#install) first!**

After you have Bun installed:
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

## 🤝 Contribution and Maintenance

This is a personal side-project, developed out of passion and interest; a labor of love for the community.
Contributions are warmly welcomed! If you'd like to contribute, feel free to fork the repository, make your changes, and submit a pull request. 
If you have any ideas, suggestions, or issues, don't hesitate to open an issue to discuss it.

## ⚠️ Disclaimer & License

**`StarRail Infinity` is not affiliated, associated, authorized, endorsed by, or in any way officially connected with the official game or any of its subsidiaries or affiliates.** The official game website can be found at [https://hsr.hoyoverse.com/](https://hsr.hoyoverse.com/).

The software provided as part of `StarRail Infinity` is distributed under the terms of the MIT License. This means the software is provided "as is", without any warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. I, nor any contributors to this project, shall be held liable for any claim, damages, or other liability, whether in action of contract, tort, or otherwise, arising from, out of, or in connection with the software or its use or other dealings in the software.

- **StarRail Infinity** does not claim any rights or ownership over the data fetched from [Honkai: Star Rail](https://hsr.hoyoverse.com/). All data remains the property of the official game and its developers.

- Users of **StarRail Infinity** are expected to respect and adhere to the official [Honkai: Star Rail EULA](https://honkai-star-rail.com/terms-use-eula/). Any misuse of the data fetched through **StarRail Infinity** that violates the official game's EULA is strictly the responsibility of the user.

- This project does not modify, reproduce, distribute, or use the fetched data for any commercial endeavors. It solely acts as a proxy to access publicly available information.

- **StarRail Infinity** is not sponsored, endorsed, or in any way affiliated with the official game. Any representations or implications contrary to this fact are unintentional and will be corrected upon notice.

For the complete terms of the MIT License, please refer to the [LICENSE](/LICENSE) file in this repository.

## 📞 Contact

If you have any concerns or feedback regarding this project, please feel free [open an issue](https://github.com/infinia-yzl/starrail-infinity/issues/new/choose), or get in touch:

- **Email**: [dev@infinia.space](mailto:dev@infinia.space)
- **Discord**: infinia

Please note that response times may vary, and replies are on a best-effort basis, as this is a personal side project.
