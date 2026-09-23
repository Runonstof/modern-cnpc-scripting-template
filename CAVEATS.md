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

## Puppeteer job and unused limbs

The Puppeteer job (`NpcJob` 9, `IJobPuppet`) can pose individual parts without freezing the whole NPC.

Each part (`JobPuppet.PartConfig`) has a `disabled` flag. The script API (`getPart` / `setRotation`) does not expose it; set the field with reflection. When `disabled` is true, that limb keeps its vanilla animation (walk, idle, attack). When it is false, the puppet rotation is used.

`setRotation(180, 180, 180)` is the rest / “no extra pose” value. It does not by itself restore vanilla motion. Disable parts you are not driving.

`whileStanding` / `whileAttacking` / `whileMoving` (`PuppetStanding`, `PuppetAttacking`, `PuppetMoving`) choose when the job applies at all. You can leave those on and still get walk cycles by disabling every part except the one you pose (for example only the left arm, part 1).

Parts: 0 head, 1 left arm, 2 right arm, 3 body, 4 left leg, 5 right leg. 6–11 are the animation-keyframe copies of those.

Writing `NpcJob`, `PuppetStanding` / `PuppetAttacking` / `PuppetMoving`, or `disabled` on parts via `setEntityNbt` or reflection often does not show until `npc.reset()`. The live job object and the client keep the old pose until that flush. After the first reset, later `setRotation` / `disabled` toggles can work without another reset. Do not reset every tick; do it once after the job is configured (see **Reset**).

## Custom GUI text fields vs text areas

`ICustomGui.addTextField` looks like the right control for a single-line number or string. Backspace, delete, and similar editing keys do not work there.

Use `addTextArea` instead, even for one-line values. `ITextArea` extends `ITextField`, so `setText` / `getText`, `setCharacterType`, `setFloat`, and `setInteger` still apply. Keep the height small (about 16) so it reads as a field.

## NPC `tick` is every 10 ticks

`tick` (`NpcEvent.UpdateEvent`) does not run every game tick. CustomNPCs calls it about every 10 ticks (half a second). The same is true of item `tick`, which the event list documents as every 10 ticks.

That is too coarse for motion. A ball, flight loop, or anything else that should look continuous will jump once per call. Do not drive that from `tick`.

Use a daemon Java thread that sleeps a short interval and runs the update on the server thread (`server.execute`), the way `src/lib/fast-tick.js` does. Keep the work on the server thread; only the wait belongs on the Java thread.

## Motion X/Y/Z scales exponentially

`getMotionX` / `getMotionY` / `getMotionZ` and the matching setters do not scale in a straight line. Drag and gravity compound every tick, so distance and height change exponentially with the number you set. A small increase in `motionY` makes the entity go much higher. Change those values in small steps.
