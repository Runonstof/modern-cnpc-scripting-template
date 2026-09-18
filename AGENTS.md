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

### JavaScript
Because Nashorn scripts only can run ES5 code, this project contains a transpiler that converts ES6+ code to ES5.
ES6 code can be written in the `src` folder and will be transpiled to the `ecmascript` folder.


## CustomNPCs
CustomNPCs is the mod that leverages Nashorn to execute the scripts.
This is the most important mod to make this project possible.

In CustomNPCs, there are 5 kinds of scripts that can be created:
- Player scripts: These are scripts that are executed for each player that is online. They can hook into player events like `chat`, `kill`, `levelUp`, etc.
You cannot load different scripts for different players. You set them globally for all players and if needed, you can single out a player inside the script.

- NPC scripts: The CustomNPCs mod allows you to create NPCs that can interact with players. These scripts can be loaded into NPCs and can hook into NPC events like `interact`, `chat`, `damaged`, etc.

- Block scripts: The CustomNPCs mod allows you to place a 'Scripted Block' that can execute scripts. These scripts can hook into block events like `interact`, `fallenUpon`, `collide`, `broken`, etc.

- Item scripts: The CustomNPCs mod allows you to create 'Scripted Items' that can execute scripts. These scripts can hook into item events like `attach`, `pickedUp`, `toss`, etc.

- Forge scripts: The CustomNPCs mod allows you to load scripts globally for Forge. Events in this scripts are triggered by Forge events. Usually the CustomNPCs mod will check all registered Forge events (including those from mods), normalize the class paths and then checks if the script has a hook for the event. It usually takes a few tries to 'guess' the correct function name for the event.


## Folder structure

The folder structure is as follows:
- `src`: This contains the source code for the script.
- `src/(players|npcs|blocks|items|forge)`: These folders contain scripts per type. The scripts in here are entry points for the transpiler to find and transpile the code.
- `src/*`: src is not limited to the above folders. You can put any script and any folder inside it, especially handy for helpers or utils.
- `ecmascript`: This folder contains the transpiled ES5 code, based on what is inside the `src/(players|npcs|blocks|items|forge)` folders.
- `docs-llm`: CustomNPCs API reference. Start at `docs-llm/index.md` and `docs-llm/events.md`.
- `bin`: Project CLI helpers for agents. Do not load `docs-llm/api.json` into context; look up types with `node bin/get-class-info.js <name|fqn|package> [...]` (PowerShell and WSL). Exact case-insensitive match on `types[].name`, `types[].fqn`, or `types[].package`; prints matching entries as JSON.

So its important to note that `ecmascript/` should not be modified manually.

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

## Importing
You can import files from the `src` folder using the `~` alias.
It is recommended to not use file extensions when importing for javascript files.

```javascript
import { dd } from '~/lib/dump';
```

Note that it is important to use `export function` syntax on event hooks, else the transpiler tree-shakes the function away.
Regular functions can be declared without `export`, as long as they get used inside the script, they will not be tree-shaken away.

For each type of script, there are different events. They are listed in @docs-llm/events.md. The rest of the CustomNPCs API is in `docs-llm/`, grouped by package.
