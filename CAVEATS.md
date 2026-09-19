# CustomNPCs caveats

Small, easy-to-miss behaviors of the CustomNPCs mod. The script API can look correct while the client or a clone still has the old look.

## Display setters vs saved NBT

`npc.getDisplay()` methods (`setModel`, `setSize`, `setSkinTexture`, `setSkinUrl`, …) update the live NPC. They do not always write every field that clones and reloads actually persist.

Entity NBT is the source of truth for that. After changing appearance, check at least:

- `Texture` (skin path)
- `Size`
- `SkinUrl` / `UsingSkinUrl`
- `NpcModelData` (`EntityName` is the model id)

A living NPC can already show the new model/size/skin while the NBT (and anything saved from it) still has the default Steve texture and size 2.

When a setter does not stick, write the matching NBT keys, then flush (see **Reset**).

`INbt` uses `putString`, not `setString`.

## Reset flushes like closing the GUI

`npc.reset()` reloads the NPC from its current entity NBT. That is close to closing the NPC GUI: in-memory display and the saved tag get aligned, and `init` runs again.

Use it **once** after the template is fully configured and NBT is written, immediately before you persist the NPC (clone, copy, etc.).

Do not call `reset()` on every combat spawn or summon. It is heavy and re-fires init.

## Re-selecting the model

The GUI can already show the correct model (for example Skeleton) while the renderer still uses the wrong mesh or texture. Clicking that same model again rebuilds it.

In script that is another `setModel` with the same id, **after** size and texture are set (and after `reset()` if you used one):

```javascript
display.setModel(display.getModel());
// or display.setModel('minecraft:skeleton');
```

That is enough to refresh the model. It is not a substitute for writing `Texture` / `Size` when those fields are wrong.

## Clones do not always overwrite

`storeAsClone(tab, name)` and `API.getClones().set(tab, name, entity)` can leave an existing entry under that name unchanged. Later `spawn` / `get` then keep returning the old NPC (wrong texture, size, model).

When replacing a clone:

1. `API.getClones().remove(tab, name)`
2. Configure the live NPC and write display NBT
3. `reset()` once
4. Re-apply `setModel` if the model must refresh
5. `storeAsClone` and/or `set`

Do not trust the live NPC you just edited as proof the clone is good. `spawn` it (not only `get`) and read `Texture`, `Size`, and `getModel()` on **that** entity.

`get()` can disagree with `spawn()` or with the live source. Prefer a real spawn check.
