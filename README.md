# Modern CustomNPC scripting workspace

## Features:
- Supports TypeScript, but is not required
- ES6 features, like arrow functions, default arguments and much more
- Importing other files for a clean project structure.
- A few premade utilities in `src/lib/`


## Installation

1. Clone this repo. It is recommended to clone this to your local development world: `.minecraft/saves/WorldName/customnpcs/scripts`
2. Run `npm install`

Done! You have set up the workspace!

## Developing scripts

1. Create a new script inside `src/`. It is recommended to keep a nice structure by separating by script type: npcs/players/items/blocks/forge. Agent verification scripts go in `src/debug/` and are built into `ecmascript/debug/`.
2. Run `npm run watch`
3. The result will come in `ecmascript/`    folder
4. If you followed the recommended clone location, you can just do `/noppes script reload` in-game immediately!
5. Then load the `debug/ai-integration.js` script in the player script tab to enable the agent integration.
