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

1. Create a new script inside `src/`. It is recommended to keep a nice structure by separating by script type: npcs/players/items/blocks/forge.
2. Run `npm run watch`
3. The result will come in `ecmascript/`    folder
4. If you followed the recommended clone location, you can just do `/noppes script reload` in-game immediately!

### Updating CustomNPCs API docs

Replace the Javadoc HTML dump in `docs/`, then run:

```
npm run docs:llm
```

That regenerates `docs-llm/` for the repo. Day-to-day scripting only needs `docs-llm/`.

### Examples

Please check `src/npcs/my_npc_one.js` and  `src/npcs/my_npc_two.js` for examples