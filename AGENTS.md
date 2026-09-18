# AGENTS.md

## Overview
This is a project that contains scripts for the CustomNPCs mod that gets executed in Minecraft using nashorn.js.
This project is usually located inside the `customnpcs/scripts` folder in a singleplayer world.


## Nashorn
Nashorn is a JavaScript engine that is used to execute the scripts.
It allows us to write JavaScript code that can be executed in Java.

Regular Browser APIs are not available in Nashorn.

Nashorn does however have a few APIs that are available.

### Java API
We are able to call Java methods and classes from scripts using the `Java.type` function.
This can be classes of java itself, classes from Minecraft or Minecraft Forge/Fabric or even Minecraft mods.

```javascript
const URL = Java.type("java.net.URL");
```

There is also a `Java.from` function to convert, for example, Java iterables to JavaScript arrays.

```javascript
const list = Java.from(new ArrayList());
```

This is useful when you want to call regular javascript methods on the array like `map`, `filter`, `reduce`, etc.

### Minecraft obfuscation

CustomNPCs wrappers (`e.npc`, `e.player`, `IWorld`, …) use readable API names. As soon as you drop to the real Minecraft object, every method and field on that object is **obfuscated** (Searge names like `m_20194_`).

That includes at least:
- `e.npc.getMCEntity()`
- `e.player.getMCEntity()`
- `world.getMCWorld()` (and other `getMC*` accessors)

Do **not** call Mojang names such as `getServer()` on those objects. Look up the Searge name first and call that.

Never open or load `mcp/1.20.1.tiny` (it is huge). Always look up names with `node bin/mcp.js`. Preferred query is `fully.qualified.ClassName#memberName`; other forms also work (tiny-style `Class/member`, member name only like `isSameThread`, or reverse lookup of a Searge name like `m_20194_`). Output is minified JSON. Use `member.searge` as the name to invoke.

```
node bin/mcp.js net.minecraft.world.entity.Entity#getServer
```

At every callsite that uses an obfuscated method or field, put an inline comment mapping Searge back to the Mojang member. One comment line per obfuscated name, directly above the code. If one line of code uses several obfuscated names, use several comment lines. Splitting into variables is often better so each name can be commented clearly.

```javascript
const mcEntity = e.npc.getMCEntity();
// m_20194_ = net.minecraft.world.entity.Entity#getServer
const server = mcEntity.m_20194_();
```
Because Nashorn scripts only can run ES5 code, this project contains a transpiler that converts ES6+ code to ES5.
ES6 code can be written in the `src` folder and will be transpiled to the `ecmascript` folder.


## CustomNPCs
CustomNPCs is the mod that leverages Nashorn to execute the scripts.
This is the most important mod to make this project possible.

In CustomNPCs, there are 5 kinds of scripts that can be created (plus a project-only `debug` entry):
- Player scripts: These are scripts that are executed for each player that is online. They can hook into player events like `chat`, `kill`, `levelUp`, etc.
You cannot load different scripts for different players. You set them globally for all players and if needed, you can single out a player inside the script.

- NPC scripts: The CustomNPCs mod allows you to create NPCs that can interact with players. These scripts can be loaded into NPCs and can hook into NPC events like `interact`, `chat`, `damaged`, etc.

- Block scripts: The CustomNPCs mod allows you to place a 'Scripted Block' that can execute scripts. These scripts can hook into block events like `interact`, `fallenUpon`, `collide`, `broken`, etc.

- Item scripts: The CustomNPCs mod allows you to create 'Scripted Items' that can execute scripts. These scripts can hook into item events like `attach`, `pickedUp`, `toss`, etc.

- Forge scripts: The CustomNPCs mod allows you to load scripts globally for Forge. Events in this scripts are triggered by Forge events. Usually the CustomNPCs mod will check all registered Forge events (including those from mods), normalize the class paths and then checks if the script has a hook for the event. It usually takes a few tries to 'guess' the correct function name for the event.

- Debug scripts (`src/debug`): Agent-only scripts used to verify work in the running Minecraft world (inspect state, probe APIs, confirm a change). Write player event hooks here. The transpiler emits them to `ecmascript/debug/`. After building, enable them in the player script tab and reload with `node bin/execute.js reload`. Do not put gameplay logic here.


## Folder structure

The folder structure is as follows:
- `src`: This contains the source code for the script.
- `src/(players|npcs|blocks|items|forge|debug)`: These folders contain scripts per type. The scripts in here are entry points for the transpiler to find and transpile the code. `debug` is for agent verification scripts and is compiled into `ecmascript/debug/`.
- `src/*`: src is not limited to the above folders. You can put any script and any folder inside it, especially handy for helpers or utils.
- `ecmascript`: This folder contains the transpiled ES5 code, based on what is inside the `src/(players|npcs|blocks|items|forge|debug)` folders.
- `docs/<name>`: Raw Javadoc HTML dumps (CustomNPCs lives in `docs/customnpcs`).
- `docs-llm`: Scraped API reference, one folder per dump. Start at `docs-llm/index.md`; CustomNPCs hooks are in `docs-llm/customnpcs/events.md`.
- `bin`: Project CLI helpers for agents. Talk to the running world with `node bin/execute.js` (see **In-game CLI**). Do not load `docs-llm/api.json` into context; look up types with `node bin/get-class-info.js <name|fqn|package|source> [...]` (PowerShell and WSL). Exact case-insensitive match on `types[].name`, `types[].fqn`, `types[].package`, or `types[].source`; prints matching entries as JSON. Never load `mcp/1.20.1.tiny` (or any other `.tiny` mapping file) into context; always use `node bin/mcp.js` as described in **Minecraft obfuscation**.
- `.agent`: Agent scratchpad. See **Scratchpad (`.agent`)** below.

So its important to note that `ecmascript/` should not be modified manually.

## Scratchpad (`.agent`)

Use `.agent/` as the local scratchpad for this project.

That includes:
- Notes and UUIDs (for example `.agent/vaelith-npc.md`)
- Temporary test scripts for `node bin/execute.js js` (probe, attach, one-off dumps). Write those as `.agent/*.js`, not under `bin/` or `src/`
- Any other session-only files that should not be committed

Do **not** put throwaway test scripts in `bin/` (`bin/` is only for lasting CLI helpers such as `execute.js` and `mcp.js`). Do not use harness-specific stores for this scratchpad.

`.agent/.gitignore` ignores everything except itself, so scratch files are not committed.

## Building
Use `npm run build` to build all scripts once.


## Events
Every script can hook into events and they all get a corresponding event object as their first argument.

Here is an example NPC script that says hello when the player interacts with the NPC.
```javascript
export function interact(e) {
    e.npc.say('Hello there, ' + e.player.name + '!');
}
```

Functions may be defined without export if you export them in the same file.
```javascript
function interact(e) {
    e.npc.say('Hello there, ' + e.player.name + '!');
}
export { interact };
```

For event hooks in entry points, it is recommended to use the `export function` syntax.
For utils and helpers, it does not matter which pattern is used, as long as the necessary functions are exported.


```javascript
// A common pattern for this is to get the global CustomNPCs API instance
const API = Java.type('noppes.npcs.api.NpcAPI').Instance();

// And to get the overworld instance
const world = API.getIWorld('minecraft:overworld');
```

### Worlddata

The world object (and also player and npc object) have a storeddata and tempdata object.
Storeddata can only hold scalar values and for world storeddata, it is saved into `world_data.json`. (For NPCs and players, etc, it is saved into their NBT data).
Storeddata persist across restarts and script reloads

Tempdata on the other hand can hold any type of data, including objects, classes, arrays etc. It is not saved across restarts and script reloads.
Tempdata is also handy to communicate data between scripts.

For agent debugging, write probes into **world** `tempdata` (via `tempdata.put(key, value)` in gameplay or `/js`). Then ask the user to reproduce the script path in-game so that value is actually written. After they confirm, read it back with `node bin/execute.js js` (for example `tempdata.get("myKey")` or `tempdata.getKeys()`). Do not assume the user already triggered the path.

## Importing
You can import files from the `src` folder using the `~` alias.
It is recommended to not use file extensions when importing for javascript files.

```javascript
import { dd } from '~/lib/dump';
```

Note that it is important to use `export function` syntax on event hooks, else the transpiler tree-shakes the function away.
Regular functions can be declared without `export`, as long as they get used inside the script, they will not be tree-shaken away.

For each type of script, there are different events. They are listed in @docs-llm/customnpcs/events.md. The rest of the CustomNPCs API is in `docs-llm/customnpcs/`, grouped by package.


## In-game CLI

`src/debug/ai-integration.js` (enable it in the player script tab) exposes a localhost HTTP API. Agents must drive the world through `node bin/execute.js`, not by typing Minecraft commands for the user.

Never run `/noppes script reload` yourself. After `npm run build`, reload with:

```
node bin/execute.js reload
node bin/execute.js reload Vaelith now follows the player
```

That talks to ai-integration, which runs `noppes script reload` in-game. Extra text after `reload` is dumped in a second in-game `ddDebug` line; use that for one sentence describing the change that was just built. It fails if ai-integration is not loaded yet or no player is online; in that case ask the user to enable the debug player script and reload once in-game.

Other examples (PowerShell and WSL):

```
node bin/execute.js command /time set day
node bin/execute.js command time set day
node bin/execute.js js "player.setMotionY(.5) || true"
node bin/execute.js js "tempdata.get('probe')"
```

`/js` always evaluates an **expression** (wrapped as `return (...)`). Available names: `player`, `world`, `API`, `dd`, `storeddata`, `tempdata` (those storeddata and tempdata instances belong to `world`), `target` (entity the player is looking at), `block` (block the player is looking at). Nashorn `Java.type` still works.

If a `/js` snippet is more than a one-liner, save it under `.agent/` (see **Scratchpad (`.agent`)**) and pass that file into `execute.js`. Do not add those temporary test scripts to `bin/`.

When you spawn an entity through `execute.js` (`js` or `command`), return its UUID in the expression result (for example `npc.getUUID()`). Keep that UUID in the conversation so later `/js` can look the entity up with `world.getEntity(uuid)` instead of guessing from look-target or nearby entities.

## Development Cycle

Whenever you make changes to the scripts, run `npm run build` first to build the scripts.
This will put the compiled versions into the `ecmascript/` folder.

When any changes are made in the `ecmascript/` folder, the scripts need to be reloaded in game in order to take effect.
Do that with `node bin/execute.js reload`. Usually all `init` events in almost all scripts are executed too.

You can also run `npm run watch` to watch for changes in the `src/` folder and automatically build the scripts.
This is useful when you are developing a script and want to see the changes immediately in game.

So after you made all your changes:
1. Run `npm run build` to build the scripts.
2. Run `node bin/execute.js reload` to reload the scripts in game. Optionally pass a one-sentence note so the in-game reload dump says what changed.

