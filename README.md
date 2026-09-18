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

### Updating API docs

Put each Javadoc HTML dump in its own folder under `docs/` (CustomNPCs is `docs/customnpcs/`), then run:

```
npm run docs:llm
```

That regenerates `docs-llm/` (one subfolder per dump, plus a merged `api.json`). Day-to-day scripting only needs `docs-llm/`.

Look up API types without opening `api.json`:

```
node bin/get-class-info.js IBlock IPlayer
node bin/get-class-info.js noppes.npcs.api.gui
node bin/get-class-info.js customnpcs
```

Works the same in PowerShell and WSL. Extra args are extra exact, case-insensitive queries against `name`, `fqn`, `package`, and `source`.

Look up Minecraft MCP / Mojang names without opening `mcp/1.20.1.tiny`:

```
node bin/mcp.js net.minecraft.world.entity.Entity#getServer
```

Use `member.searge` as the obfuscated name to call.

### Examples

Please check `src/npcs/my_npc_one.js` and  `src/npcs/my_npc_two.js` for examples