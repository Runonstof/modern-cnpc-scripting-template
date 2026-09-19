# Known recipes

Do not re-read `bin/execute.js`, `src/debug/ai-integration.js`, or old `.agent/spawn-*.js` to rediscover these. Appearance / clone / `reset()` details are in [CAVEATS.md](CAVEATS.md).

`/js` already has `player`, `world`, `API`, `dd`, `storeddata`, `tempdata`, `target`, `block`.

## Look-at block

```
node bin/execute.js js "block ? {name: block.getName(), x: block.getX(), y: block.getY(), z: block.getZ()} : null"
```

## Spawn NPC on look-target

Write `.agent/spawn-<name>.js` and run `node bin/execute.js js .agent/spawn-<name>.js`.

```javascript
(function () {
  if (!block) throw new Error('No look-target block');
  var x = block.getX();
  var y = block.getY() + 1;
  var z = block.getZ();
  var npc = API.spawnNPC(world.getMCLevel(), x, y, z);
  var display = npc.getDisplay();
  display.setName('Name');
  display.setTitle('Title');
  display.setSkinUrl('https://textures.minecraft.net/texture/<hash>');
  display.setHasLivingAnimation(true);
  display.setShowName(0);
  display.setSize(5);
  display.setTint(0xffffff);
  display.setVisible(0);
  npc.setHome(x, y, z);
  npc.setRotation(player.getRotation() + 180);
  npc.updateClient();
  tempdata.put('npcUuid', npc.getUUID());
  return { uuid: npc.getUUID(), x: npc.getX(), y: npc.getY(), z: npc.getZ() };
})();
```

Size 5 is default; 6 is slightly bigger. Prefer `textures.minecraft.net` URLs. After spawn, keep the UUID in the chat and on `tempdata`. Later: `world.getEntity(tempdata.get('npcUuid'))`.

Gameplay behavior belongs in `src/npcs/<name>.js`, then `npm run build` and attach (below). Do not put lasting logic only in the spawn snippet.

## Attach a script to a living NPC

Built files use the GUI path, e.g. `npcs/aldric.js`. In `src` use `npcAddScript` from `src/lib/npc-scripts.js`. Via `/js`, write NBT the same way that helper does (`Scripts` list, `ScriptEnabled`), then `npc.reset()` once if `init` must run. Do not invent a second attach API.

## API and obfuscation

```
node bin/get-class-info.js IDisplay
node bin/mcp.js net.minecraft.world.entity.Entity#getServer
```

Do not open `docs/`, `docs-llm/api.json`, or `mcp/*.tiny`.
