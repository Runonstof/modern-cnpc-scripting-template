# Script event hooks

Export a function with the hook name. The first argument is the event object.

```javascript
export function interact(e) {
  e.npc.say('Hello there, ' + e.player.name + '!');
}
```

## block

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `BlockEvent` | `block`, `API` |  |
| `broken` | `BlockEvent.BreakEvent` | `block`, `API` |  |
| `clicked` | `BlockEvent.ClickedEvent` | `player`, `block`, `API` |  |
| `collide` | `BlockEvent.CollidedEvent` | `entity`, `block`, `API` |  |
| `doorToggle` | `BlockEvent.DoorToggleEvent` | `block`, `API` |  |
| `fallenUpon` | `BlockEvent.EntityFallenUponEvent` | `entity`, `distanceFallen`, `block`, `API` |  |
| `exploded` | `BlockEvent.ExplodedEvent` | `block`, `API` |  |
| `harvested` | `BlockEvent.HarvestedEvent` | `player`, `block`, `API` |  |
| `init` | `BlockEvent.InitEvent` | `block`, `API` |  |
| `interact` | `BlockEvent.InteractEvent` | `player`, `hitX`, `hitY`, `hitZ`, `side`, `block`, `API` |  |
| `neighborChanged` | `BlockEvent.NeighborChangedEvent` | `changedPos`, `block`, `API` |  |
| `rainFilled` | `BlockEvent.RainFillEvent` | `block`, `API` |  |
| `redstone` | `BlockEvent.RedstoneEvent` | `prevPower`, `power`, `block`, `API` |  |
| `timer` | `BlockEvent.TimerEvent` | `id`, `block`, `API` |  |
| `tick` | `BlockEvent.UpdateEvent` | `block`, `API` |  |

## dialog

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `DialogEvent` | `dialog`, `player`, `npc`, `API` |  |
| `dialogClose` | `DialogEvent.CloseEvent` | `dialog`, `player`, `npc`, `API` |  |
| `dialog` | `DialogEvent.OpenEvent` | `dialog`, `player`, `npc`, `API` |  |
| `dialogOption` | `DialogEvent.OptionEvent` | `option`, `dialog`, `player`, `npc`, `API` |  |

## forge

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `ForgeEvent` | `event`, `API` | Called for most Forge events. For the events I use the forges name and make the first letter lowercase.   Eg:   - EntityEvent.EntityJoinLevelEvent becomes entityEventEntityJoinLevelEvent   - PlayerEvent.StartTracking becomes playerEventStartTracking   - etc   Note that these events can change anytime and that I have no control over these. Use at own risk |
| `—` | `ForgeEvent.EntityEvent` | `entity`, `event`, `API` | This event is used for every forge event which extends EntityEvent   EventyEvent   LivingEvent   PlayerEvent |
| `init` | `ForgeEvent.InitEvent` | `event`, `API` | The init event has no forge event |
| `—` | `ForgeEvent.LevelEvent` | `world`, `event`, `API` | This event is used for every forge event which extends LevelEvent   LevelEvent |

## global

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `CustomNPCsEvent` | `API` |  |

## gui

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `CustomGuiEvent` | `player`, `gui`, `API` |  |
| `customGuiButton` | `CustomGuiEvent.ButtonEvent` | `buttonId`, `button`, `gui`, `player`, `API` |  |
| `customGuiClosed` | `CustomGuiEvent.CloseEvent` | `gui`, `player`, `API` |  |
| `customGuiScroll` | `CustomGuiEvent.ScrollEvent` | `scrollId`, `selection`, `doubleClick`, `scrollIndex`, `scroll`, `gui`, `player`, `API` |  |
| `customGuiSlotClicked` | `CustomGuiEvent.SlotClickEvent` | `dragType`, `clickType`, `slot`, `slotId`, `stack`, `gui`, `player`, `API` |  |
| `customGuiSlot` | `CustomGuiEvent.SlotEvent` | `slotId`, `stack`, `slot`, `gui`, `player`, `API` |  |

## handler

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `HandlerEvent` | — |  |
| `—` | `HandlerEvent.FactionsLoadedEvent` | `handler`, `API` |  |
| `—` | `HandlerEvent.RecipesLoadedEvent` | `handler`, `API` |  |

## item

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `ItemEvent` | `item`, `API` |  |
| `attack` | `ItemEvent.AttackEvent` | `type`, `target`, `player`, `damageSource`, `item`, `API` | Will trigger if you have an item and left click into the air or left  click a block or left click an entity |
| `init` | `ItemEvent.InitEvent` | `item`, `API` |  |
| `interact` | `ItemEvent.InteractEvent` | `type`, `target`, `player`, `item`, `API` | Will trigger if you have an item and right click into the air Or right  click a block Or right click an entity |
| `pickedUp` | `ItemEvent.PickedUpEvent` | `entity`, `player`, `item`, `API` | When Cancelled it prevents the item from spawning in the level, the item still disappears from the inventory |
| `spawn` | `ItemEvent.SpawnEvent` | `entity`, `item`, `API` |  |
| `toss` | `ItemEvent.TossedEvent` | `entity`, `player`, `item`, `API` | When Cancelled it prevents the item from spawning in the level, the item still disappears from the inventory |
| `tick` | `ItemEvent.UpdateEvent` | `player`, `item`, `API` | When the item is in an inventory this will be called every 10 ticks (0.5 seconds) |

## npc

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `NpcEvent` | `npc`, `API` |  |
| `collide` | `NpcEvent.CollideEvent` | `entity`, `npc`, `API` |  |
| `damaged` | `NpcEvent.DamagedEvent` | `damageSource`, `source`, `damage`, `clearTarget`, `npc`, `API` |  |
| `died` | `NpcEvent.DiedEvent` | `damageSource`, `type`, `source`, `droppedItems`, `expDropped`, `line`, `npc`, `API` |  |
| `init` | `NpcEvent.InitEvent` | `npc`, `API` |  |
| `interact` | `NpcEvent.InteractEvent` | `player`, `npc`, `API` |  |
| `kill` | `NpcEvent.KilledEntityEvent` | `entity`, `npc`, `API` |  |
| `meleeAttack` | `NpcEvent.MeleeAttackEvent` | `target`, `damage`, `npc`, `API` |  |
| `rangedAttack` | `NpcEvent.RangedLaunchedEvent` | `target`, `damage`, `projectiles`, `npc`, `API` |  |
| `target` | `NpcEvent.TargetEvent` | `entity`, `npc`, `API` |  |
| `targetLost` | `NpcEvent.TargetLostEvent` | `entity`, `npc`, `API` |  |
| `timer` | `NpcEvent.TimerEvent` | `id`, `npc`, `API` |  |
| `tick` | `NpcEvent.UpdateEvent` | `npc`, `API` |  |

## player

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `PlayerEvent` | `player`, `API` |  |
| `attack` | `PlayerEvent.AttackEvent` | `type`, `target`, `damageSource`, `player`, `API` | Will trigger if you have an item and left click into the air or left  click a block or left click an entity |
| `broken` | `PlayerEvent.BreakEvent` | `block`, `exp`, `player`, `API` |  |
| `chat` | `PlayerEvent.ChatEvent` | `message`, `player`, `API` |  |
| `containerClosed` | `PlayerEvent.ContainerClosed` | `container`, `player`, `API` |  |
| `containerOpen` | `PlayerEvent.ContainerOpen` | `container`, `player`, `API` |  |
| `damagedEntity` | `PlayerEvent.DamagedEntityEvent` | `damageSource`, `target`, `damage`, `player`, `API` |  |
| `damaged` | `PlayerEvent.DamagedEvent` | `damageSource`, `source`, `damage`, `clearTarget`, `player`, `API` |  |
| `died` | `PlayerEvent.DiedEvent` | `damageSource`, `type`, `source`, `player`, `API` |  |
| `factionUpdate` | `PlayerEvent.FactionUpdateEvent` | `faction`, `points`, `init`, `player`, `API` | Called when a players faction points change |
| `init` | `PlayerEvent.InitEvent` | `player`, `API` |  |
| `interact` | `PlayerEvent.InteractEvent` | `type`, `target`, `player`, `API` | Will trigger if you have an item and right click into the air Or right  click a block Or right click an entity |
| `keyPressed` | `PlayerEvent.KeyPressedEvent` | `key`, `isCtrlPressed`, `isAltPressed`, `isShiftPressed`, `isMetaPressed`, `openGui`, `player`, `API` | Called when a player presses a button. |
| `keyReleased` | `PlayerEvent.KeyReleasedEvent` | `key`, `isCtrlPressed`, `isAltPressed`, `isShiftPressed`, `isMetaPressed`, `openGui`, `player`, `API` | Called when a player releases a button. |
| `kill` | `PlayerEvent.KilledEntityEvent` | `entity`, `player`, `API` |  |
| `levelUp` | `PlayerEvent.LevelUpEvent` | `change`, `player`, `API` | Called when a players level changes |
| `login` | `PlayerEvent.LoginEvent` | `player`, `API` |  |
| `logout` | `PlayerEvent.LogoutEvent` | `player`, `API` |  |
| `pickedUp` | `PlayerEvent.PickUpEvent` | `item`, `player`, `API` |  |
| `playSound` | `PlayerEvent.PlaySoundEvent` | `sound`, `category`, `looping`, `player`, `API` |  |
| `rangedLaunched` | `PlayerEvent.RangedLaunchedEvent` | `player`, `API` |  |
| `timer` | `PlayerEvent.TimerEvent` | `id`, `player`, `API` |  |
| `toss` | `PlayerEvent.TossEvent` | `item`, `player`, `API` |  |
| `tick` | `PlayerEvent.UpdateEvent` | `player`, `API` |  |

## projectile

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `ProjectileEvent` | `projectile`, `API` |  |
| `projectileImpact` | `ProjectileEvent.ImpactEvent` | `type`, `target`, `projectile`, `API` |  |
| `projectileTick` | `ProjectileEvent.UpdateEvent` | `projectile`, `API` |  |

## quest

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `QuestEvent` | `quest`, `player`, `API` |  |
| `—` | `QuestEvent.QuestCompletedEvent` | `player`, `quest`, `API` |  |
| `—` | `QuestEvent.QuestStartEvent` | `player`, `quest`, `API` |  |
| `—` | `QuestEvent.QuestTurnedInEvent` | `expReward`, `itemRewards`, `player`, `quest`, `API` |  |

## role

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `RoleEvent` | `npc`, `player`, `API` |  |
| `—` | `RoleEvent.BankUnlockedEvent` | `slot`, `npc`, `player`, `API` |  |
| `—` | `RoleEvent.BankUpgradedEvent` | `slot`, `npc`, `player`, `API` |  |
| `—` | `RoleEvent.FollowerFinishedEvent` | `npc`, `player`, `API` |  |
| `—` | `RoleEvent.FollowerHireEvent` | `days`, `npc`, `player`, `API` |  |
| `—` | `RoleEvent.MailmanEvent` | `mail`, `npc`, `player`, `API` |  |
| `—` | `RoleEvent.TradeFailedEvent` | `sold`, `currency1`, `currency2`, `receiving`, `npc`, `player`, `API` |  |
| `—` | `RoleEvent.TraderEvent` | `sold`, `currency1`, `currency2`, `npc`, `player`, `API` |  |
| `—` | `RoleEvent.TransporterUnlockedEvent` | `npc`, `player`, `API` |  |
| `—` | `RoleEvent.TransporterUseEvent` | `location`, `npc`, `player`, `API` |  |

## world

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `WorldEvent` | `world`, `API` |  |
| `—` | `WorldEvent.ScriptTriggerEvent` | `arguments`, `pos`, `entity`, `id`, `world`, `API` |  |
