# noppes.npcs.api.event

- [BlockEvent](#blockevent)
- [BlockEvent.BreakEvent](#blockevent.breakevent) — `broken`
- [BlockEvent.ClickedEvent](#blockevent.clickedevent) — `clicked`
- [BlockEvent.CollidedEvent](#blockevent.collidedevent) — `collide`
- [BlockEvent.DoorToggleEvent](#blockevent.doortoggleevent) — `doorToggle`
- [BlockEvent.EntityFallenUponEvent](#blockevent.entityfallenuponevent) — `fallenUpon`
- [BlockEvent.ExplodedEvent](#blockevent.explodedevent) — `exploded`
- [BlockEvent.HarvestedEvent](#blockevent.harvestedevent) — `harvested`
- [BlockEvent.InitEvent](#blockevent.initevent) — `init`
- [BlockEvent.InteractEvent](#blockevent.interactevent) — `interact`
- [BlockEvent.NeighborChangedEvent](#blockevent.neighborchangedevent) — `neighborChanged`
- [BlockEvent.RainFillEvent](#blockevent.rainfillevent) — `rainFilled`
- [BlockEvent.RedstoneEvent](#blockevent.redstoneevent) — `redstone`
- [BlockEvent.TimerEvent](#blockevent.timerevent) — `timer`
- [BlockEvent.UpdateEvent](#blockevent.updateevent) — `tick`
- [CustomContainerEvent](#customcontainerevent)
- [CustomContainerEvent.CloseEvent](#customcontainerevent.closeevent)
- [CustomContainerEvent.SlotClickedEvent](#customcontainerevent.slotclickedevent)
- [CustomGuiEvent](#customguievent)
- [CustomGuiEvent.ButtonEvent](#customguievent.buttonevent)
- [CustomGuiEvent.CloseEvent](#customguievent.closeevent)
- [CustomGuiEvent.ScrollEvent](#customguievent.scrollevent)
- [CustomGuiEvent.SlotClickEvent](#customguievent.slotclickevent)
- [CustomGuiEvent.SlotEvent](#customguievent.slotevent)
- [CustomNPCsEvent](#customnpcsevent)
- [DialogEvent](#dialogevent)
- [DialogEvent.CloseEvent](#dialogevent.closeevent) — `dialogClose`
- [DialogEvent.OpenEvent](#dialogevent.openevent) — `dialog`
- [DialogEvent.OptionEvent](#dialogevent.optionevent) — `dialogOption`
- [ForgeEvent](#forgeevent)
- [ForgeEvent.EntityEvent](#forgeevent.entityevent)
- [ForgeEvent.InitEvent](#forgeevent.initevent) — `init`
- [ForgeEvent.WorldEvent](#forgeevent.worldevent)
- [HandlerEvent](#handlerevent)
- [HandlerEvent.FactionsLoadedEvent](#handlerevent.factionsloadedevent)
- [HandlerEvent.RecipesLoadedEvent](#handlerevent.recipesloadedevent)
- [ItemEvent](#itemevent)
- [ItemEvent.AttackEvent](#itemevent.attackevent) — `attack`
- [ItemEvent.InitEvent](#itemevent.initevent) — `init`
- [ItemEvent.InteractEvent](#itemevent.interactevent) — `interact`
- [ItemEvent.PickedUpEvent](#itemevent.pickedupevent) — `pickedUp`
- [ItemEvent.SpawnEvent](#itemevent.spawnevent) — `spawn`
- [ItemEvent.TossedEvent](#itemevent.tossedevent) — `toss`
- [ItemEvent.UpdateEvent](#itemevent.updateevent) — `tick`
- [NpcEvent](#npcevent)
- [NpcEvent.CollideEvent](#npcevent.collideevent) — `collide`
- [NpcEvent.DamagedEvent](#npcevent.damagedevent) — `damaged`
- [NpcEvent.DiedEvent](#npcevent.diedevent) — `died`
- [NpcEvent.InitEvent](#npcevent.initevent) — `init`
- [NpcEvent.InteractEvent](#npcevent.interactevent) — `interact`
- [NpcEvent.KilledEntityEvent](#npcevent.killedentityevent) — `kill`
- [NpcEvent.MeleeAttackEvent](#npcevent.meleeattackevent) — `meleeAttack`
- [NpcEvent.RangedLaunchedEvent](#npcevent.rangedlaunchedevent) — `rangedAttack`
- [NpcEvent.TargetEvent](#npcevent.targetevent) — `target`
- [NpcEvent.TargetLostEvent](#npcevent.targetlostevent) — `targetLost`
- [NpcEvent.TimerEvent](#npcevent.timerevent) — `timer`
- [NpcEvent.UpdateEvent](#npcevent.updateevent) — `tick`
- [PlayerEvent](#playerevent)
- [PlayerEvent.AttackEvent](#playerevent.attackevent) — `attack`
- [PlayerEvent.BreakEvent](#playerevent.breakevent) — `broken`
- [PlayerEvent.ChatEvent](#playerevent.chatevent) — `chat`
- [PlayerEvent.ContainerClosed](#playerevent.containerclosed) — `containerClosed`
- [PlayerEvent.ContainerOpen](#playerevent.containeropen) — `containerOpen`
- [PlayerEvent.DamagedEntityEvent](#playerevent.damagedentityevent) — `damagedEntity`
- [PlayerEvent.DamagedEvent](#playerevent.damagedevent) — `damaged`
- [PlayerEvent.DiedEvent](#playerevent.diedevent) — `died`
- [PlayerEvent.FactionUpdateEvent](#playerevent.factionupdateevent) — `factionUpdate`
- [PlayerEvent.InitEvent](#playerevent.initevent) — `init`
- [PlayerEvent.InteractEvent](#playerevent.interactevent) — `interact`
- [PlayerEvent.KeyPressedEvent](#playerevent.keypressedevent) — `keyPressed`
- [PlayerEvent.KilledEntityEvent](#playerevent.killedentityevent) — `kill`
- [PlayerEvent.LevelUpEvent](#playerevent.levelupevent) — `levelUp`
- [PlayerEvent.LoginEvent](#playerevent.loginevent) — `login`
- [PlayerEvent.LogoutEvent](#playerevent.logoutevent) — `logout`
- [PlayerEvent.PickUpEvent](#playerevent.pickupevent) — `pickedUp`
- [PlayerEvent.RangedLaunchedEvent](#playerevent.rangedlaunchedevent) — `rangedLaunched`
- [PlayerEvent.TimerEvent](#playerevent.timerevent) — `timer`
- [PlayerEvent.TossEvent](#playerevent.tossevent) — `toss`
- [PlayerEvent.UpdateEvent](#playerevent.updateevent) — `tick`
- [ProjectileEvent](#projectileevent)
- [ProjectileEvent.ImpactEvent](#projectileevent.impactevent) — `projectileImpact`
- [ProjectileEvent.UpdateEvent](#projectileevent.updateevent) — `projectileTick`
- [QuestEvent](#questevent)
- [QuestEvent.QuestCompletedEvent](#questevent.questcompletedevent)
- [QuestEvent.QuestStartEvent](#questevent.queststartevent)
- [QuestEvent.QuestTurnedInEvent](#questevent.questturnedinevent)
- [RoleEvent](#roleevent)
- [RoleEvent.BankUnlockedEvent](#roleevent.bankunlockedevent)
- [RoleEvent.BankUpgradedEvent](#roleevent.bankupgradedevent)
- [RoleEvent.FollowerFinishedEvent](#roleevent.followerfinishedevent)
- [RoleEvent.FollowerHireEvent](#roleevent.followerhireevent)
- [RoleEvent.MailmanEvent](#roleevent.mailmanevent)
- [RoleEvent.TradeFailedEvent](#roleevent.tradefailedevent)
- [RoleEvent.TraderEvent](#roleevent.traderevent)
- [RoleEvent.TransporterUnlockedEvent](#roleevent.transporterunlockedevent)
- [RoleEvent.TransporterUseEvent](#roleevent.transporteruseevent)
- [WorldEvent](#worldevent)
- [WorldEvent.ScriptCommandEvent](#worldevent.scriptcommandevent)
## BlockEvent

*class* `noppes.npcs.api.event.BlockEvent`

### Fields
- `public IBlock block`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.BreakEvent

*class* `noppes.npcs.api.event.BlockEvent.BreakEvent`

Script hook: `broken`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.ClickedEvent

*class* `noppes.npcs.api.event.BlockEvent.ClickedEvent`

Script hook: `clicked`

Enclosing class: BlockEvent

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.CollidedEvent

*class* `noppes.npcs.api.event.BlockEvent.CollidedEvent`

Script hook: `collide`

Enclosing class: BlockEvent

### Fields
- `public final IEntity entity`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.DoorToggleEvent

*class* `noppes.npcs.api.event.BlockEvent.DoorToggleEvent`

Script hook: `doorToggle`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.EntityFallenUponEvent

*class* `noppes.npcs.api.event.BlockEvent.EntityFallenUponEvent`

Script hook: `fallenUpon`

Enclosing class: BlockEvent

### Fields
- `public final IEntity entity`
- `public float distanceFallen`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.ExplodedEvent

*class* `noppes.npcs.api.event.BlockEvent.ExplodedEvent`

Script hook: `exploded`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.HarvestedEvent

*class* `noppes.npcs.api.event.BlockEvent.HarvestedEvent`

Script hook: `harvested`

Enclosing class: BlockEvent

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.InitEvent

*class* `noppes.npcs.api.event.BlockEvent.InitEvent`

Script hook: `init`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.InteractEvent

*class* `noppes.npcs.api.event.BlockEvent.InteractEvent`

Script hook: `interact`

Enclosing class: BlockEvent

### Fields
- `public final IPlayer player`
- `public final float hitX`
- `public final float hitY`
- `public final float hitZ`
- `public final int side`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.NeighborChangedEvent

*class* `noppes.npcs.api.event.BlockEvent.NeighborChangedEvent`

Script hook: `neighborChanged`

Enclosing class: BlockEvent

### Fields
- `public final IPos changedPos`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.RainFillEvent

*class* `noppes.npcs.api.event.BlockEvent.RainFillEvent`

Script hook: `rainFilled`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.RedstoneEvent

*class* `noppes.npcs.api.event.BlockEvent.RedstoneEvent`

Script hook: `redstone`

Enclosing class: BlockEvent

### Fields
- `public final int prevPower`
- `public final int power`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.TimerEvent

*class* `noppes.npcs.api.event.BlockEvent.TimerEvent`

Script hook: `timer`

Enclosing class: BlockEvent

### Fields
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## BlockEvent.UpdateEvent

*class* `noppes.npcs.api.event.BlockEvent.UpdateEvent`

Script hook: `tick`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomContainerEvent

*class* `noppes.npcs.api.event.CustomContainerEvent`

### Fields
- `public final IContainer container`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomContainerEvent.CloseEvent

*class* `noppes.npcs.api.event.CustomContainerEvent.CloseEvent`

Enclosing class: CustomContainerEvent

### Inherited fields
- from `noppes.npcs.api.event.CustomContainerEvent`: `container`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomContainerEvent.SlotClickedEvent

*class* `noppes.npcs.api.event.CustomContainerEvent.SlotClickedEvent`

Enclosing class: CustomContainerEvent

### Fields
- `public IItemStack slotItem`
- `public IItemStack heldItem`
- `public final int slot`

### Inherited fields
- from `noppes.npcs.api.event.CustomContainerEvent`: `container`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomGuiEvent

*class* `noppes.npcs.api.event.CustomGuiEvent`

### Fields
- `public final IPlayer player`
- `public final ICustomGui gui`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomGuiEvent.ButtonEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.ButtonEvent`

Enclosing class: CustomGuiEvent

### Fields
- `public final int buttonId`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomGuiEvent.CloseEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.CloseEvent`

Enclosing class: CustomGuiEvent

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomGuiEvent.ScrollEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.ScrollEvent`

Enclosing class: CustomGuiEvent

### Fields
- `public final int scrollId`
- `public final java.lang.String[] selection`
- `public final boolean doubleClick`
- `public final int scrollIndex`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomGuiEvent.SlotClickEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.SlotClickEvent`

Enclosing class: CustomGuiEvent

### Fields
- `public final int slotId`
- `public final IItemStack stack`
- `public final int dragType`
- `public final java.lang.String clickType`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomGuiEvent.SlotEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.SlotEvent`

Enclosing class: CustomGuiEvent

### Fields
- `public final int slotId`
- `public final IItemStack stack`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## CustomNPCsEvent

*class* `noppes.npcs.api.event.CustomNPCsEvent`

### Fields
- `public final NpcAPI API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## DialogEvent

*class* `noppes.npcs.api.event.DialogEvent`

### Fields
- `public final IDialog dialog`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## DialogEvent.CloseEvent

*class* `noppes.npcs.api.event.DialogEvent.CloseEvent`

Script hook: `dialogClose`

Enclosing class: DialogEvent

### Inherited fields
- from `noppes.npcs.api.event.DialogEvent`: `dialog`, `player`
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## DialogEvent.OpenEvent

*class* `noppes.npcs.api.event.DialogEvent.OpenEvent`

Script hook: `dialog`

Enclosing class: DialogEvent

### Inherited fields
- from `noppes.npcs.api.event.DialogEvent`: `dialog`, `player`
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## DialogEvent.OptionEvent

*class* `noppes.npcs.api.event.DialogEvent.OptionEvent`

Script hook: `dialogOption`

Enclosing class: DialogEvent

### Fields
- `public final IDialogOption option`

### Inherited fields
- from `noppes.npcs.api.event.DialogEvent`: `dialog`, `player`
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ForgeEvent

*class* `noppes.npcs.api.event.ForgeEvent`

Called for most Forge events. For the events I use the forges name and make the first letter lowercase.

 Eg:

 - EntityEvent.EntityJoinWorldEvent becomes entityEventEntityJoinWorldEvent

 - PlayerEvent.StartTracking becomes playerEventStartTracking

 - etc

 Note that these events can change anytime and that I have no control over these. Use at own risk

### Fields
- `public final net.minecraftforge.fml.common.eventhandler.Event event`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ForgeEvent.EntityEvent

*class* `noppes.npcs.api.event.ForgeEvent.EntityEvent`

This event is used for every forge event which extends EntityEvent

 EventyEvent

 LivingEvent

 PlayerEvent

Enclosing class: ForgeEvent

### Fields
- `public final IEntity entity`

### Inherited fields
- from `noppes.npcs.api.event.ForgeEvent`: `event`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ForgeEvent.InitEvent

*class* `noppes.npcs.api.event.ForgeEvent.InitEvent`

Script hook: `init`

The init event has no forge event

Enclosing class: ForgeEvent

### Inherited fields
- from `noppes.npcs.api.event.ForgeEvent`: `event`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ForgeEvent.WorldEvent

*class* `noppes.npcs.api.event.ForgeEvent.WorldEvent`

This event is used for every forge event which extends WorldEvent

 WorldEvent

Enclosing class: ForgeEvent

### Fields
- `public final IWorld world`

### Inherited fields
- from `noppes.npcs.api.event.ForgeEvent`: `event`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## HandlerEvent

*class* `noppes.npcs.api.event.HandlerEvent`

## HandlerEvent.FactionsLoadedEvent

*class* `noppes.npcs.api.event.HandlerEvent.FactionsLoadedEvent`

Enclosing class: HandlerEvent

### Fields
- `public final IFactionHandler handler`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## HandlerEvent.RecipesLoadedEvent

*class* `noppes.npcs.api.event.HandlerEvent.RecipesLoadedEvent`

Enclosing class: HandlerEvent

### Fields
- `public final IRecipeHandler handler`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent

*class* `noppes.npcs.api.event.ItemEvent`

### Fields
- `public IItemScripted item`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.AttackEvent

*class* `noppes.npcs.api.event.ItemEvent.AttackEvent`

Script hook: `attack`

Will trigger if you have an item and left click into the air or left
 click a block or left click an entity

Enclosing class: ItemEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final java.lang.Object target`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.InitEvent

*class* `noppes.npcs.api.event.ItemEvent.InitEvent`

Script hook: `init`

Enclosing class: ItemEvent

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.InteractEvent

*class* `noppes.npcs.api.event.ItemEvent.InteractEvent`

Script hook: `interact`

Will trigger if you have an item and right click into the air Or right
 click a block Or right click an entity

Enclosing class: ItemEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final java.lang.Object target`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.PickedUpEvent

*class* `noppes.npcs.api.event.ItemEvent.PickedUpEvent`

Script hook: `pickedUp`

When Cancelled it prevents the item from spawning in the world, the item still disappears from the inventory

Enclosing class: ItemEvent

### Fields
- `public IEntityItem entity`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.SpawnEvent

*class* `noppes.npcs.api.event.ItemEvent.SpawnEvent`

Script hook: `spawn`

Enclosing class: ItemEvent

### Fields
- `public IEntityItem entity`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.TossedEvent

*class* `noppes.npcs.api.event.ItemEvent.TossedEvent`

Script hook: `toss`

When Cancelled it prevents the item from spawning in the world, the item still disappears from the inventory

Enclosing class: ItemEvent

### Fields
- `public IEntityItem entity`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ItemEvent.UpdateEvent

*class* `noppes.npcs.api.event.ItemEvent.UpdateEvent`

Script hook: `tick`

When the item is in an inventory this will be called every 10 ticks (0.5 seconds)

Enclosing class: ItemEvent

### Fields
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent

*class* `noppes.npcs.api.event.NpcEvent`

### Fields
- `public final ICustomNpc npc`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.CollideEvent

*class* `noppes.npcs.api.event.NpcEvent.CollideEvent`

Script hook: `collide`

Enclosing class: NpcEvent

### Fields
- `public final IEntity entity`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.DamagedEvent

*class* `noppes.npcs.api.event.NpcEvent.DamagedEvent`

Script hook: `damaged`

Enclosing class: NpcEvent

### Fields
- `public final IDamageSource damageSource`
- `public final IEntity source`
- `public float damage`
- `public boolean clearTarget`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.DiedEvent

*class* `noppes.npcs.api.event.NpcEvent.DiedEvent`

Script hook: `died`

Enclosing class: NpcEvent

### Fields
- `public final IDamageSource damageSource`
- `public final java.lang.String type`
- `public final IEntity source`
- `public IItemStack[] droppedItems`
- `public int expDropped`
- `public ILine line`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.InitEvent

*class* `noppes.npcs.api.event.NpcEvent.InitEvent`

Script hook: `init`

Enclosing class: NpcEvent

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.InteractEvent

*class* `noppes.npcs.api.event.NpcEvent.InteractEvent`

Script hook: `interact`

Enclosing class: NpcEvent

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.KilledEntityEvent

*class* `noppes.npcs.api.event.NpcEvent.KilledEntityEvent`

Script hook: `kill`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLivingBase entity`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.MeleeAttackEvent

*class* `noppes.npcs.api.event.NpcEvent.MeleeAttackEvent`

Script hook: `meleeAttack`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLivingBase target`
- `public float damage`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.RangedLaunchedEvent

*class* `noppes.npcs.api.event.NpcEvent.RangedLaunchedEvent`

Script hook: `rangedAttack`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLivingBase target`
- `public float damage`
- `public java.util.List<IProjectile> projectiles`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.TargetEvent

*class* `noppes.npcs.api.event.NpcEvent.TargetEvent`

Script hook: `target`

Enclosing class: NpcEvent

### Fields
- `public IEntityLivingBase entity`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.TargetLostEvent

*class* `noppes.npcs.api.event.NpcEvent.TargetLostEvent`

Script hook: `targetLost`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLivingBase entity`
  The previous target

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.TimerEvent

*class* `noppes.npcs.api.event.NpcEvent.TimerEvent`

Script hook: `timer`

Enclosing class: NpcEvent

### Fields
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## NpcEvent.UpdateEvent

*class* `noppes.npcs.api.event.NpcEvent.UpdateEvent`

Script hook: `tick`

Enclosing class: NpcEvent

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent

*class* `noppes.npcs.api.event.PlayerEvent`

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.AttackEvent

*class* `noppes.npcs.api.event.PlayerEvent.AttackEvent`

Script hook: `attack`

Will trigger if you have an item and left click into the air or left
 click a block or left click an entity

Enclosing class: PlayerEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final java.lang.Object target`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.BreakEvent

*class* `noppes.npcs.api.event.PlayerEvent.BreakEvent`

Script hook: `broken`

Enclosing class: PlayerEvent

### Fields
- `public final IBlock block`
- `public int exp`
  Experience that drops if the block is broken

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.ChatEvent

*class* `noppes.npcs.api.event.PlayerEvent.ChatEvent`

Script hook: `chat`

Enclosing class: PlayerEvent

### Fields
- `public java.lang.String message`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.ContainerClosed

*class* `noppes.npcs.api.event.PlayerEvent.ContainerClosed`

Script hook: `containerClosed`

Enclosing class: PlayerEvent

### Fields
- `public final IContainer container`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.ContainerOpen

*class* `noppes.npcs.api.event.PlayerEvent.ContainerOpen`

Script hook: `containerOpen`

Enclosing class: PlayerEvent

### Fields
- `public final IContainer container`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.DamagedEntityEvent

*class* `noppes.npcs.api.event.PlayerEvent.DamagedEntityEvent`

Script hook: `damagedEntity`

Enclosing class: PlayerEvent

### Fields
- `public final IDamageSource damageSource`
- `public final IEntity target`
- `public float damage`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.DamagedEvent

*class* `noppes.npcs.api.event.PlayerEvent.DamagedEvent`

Script hook: `damaged`

Enclosing class: PlayerEvent

### Fields
- `public final IDamageSource damageSource`
- `public final IEntity source`
- `public float damage`
- `public boolean clearTarget`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.DiedEvent

*class* `noppes.npcs.api.event.PlayerEvent.DiedEvent`

Script hook: `died`

Enclosing class: PlayerEvent

### Fields
- `public final IDamageSource damageSource`
- `public final java.lang.String type`
- `public final IEntity source`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.FactionUpdateEvent

*class* `noppes.npcs.api.event.PlayerEvent.FactionUpdateEvent`

Script hook: `factionUpdate`

Called when a players faction points change

Enclosing class: PlayerEvent

### Fields
- `public final IFaction faction`
- `public int points`
- `public boolean init`
  true if it's setting the default points to the player

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.InitEvent

*class* `noppes.npcs.api.event.PlayerEvent.InitEvent`

Script hook: `init`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.InteractEvent

*class* `noppes.npcs.api.event.PlayerEvent.InteractEvent`

Script hook: `interact`

Will trigger if you have an item and right click into the air Or right
 click a block Or right click an entity

Enclosing class: PlayerEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final java.lang.Object target`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.KeyPressedEvent

*class* `noppes.npcs.api.event.PlayerEvent.KeyPressedEvent`

Script hook: `keyPressed`

Called when a players press and releases a button, Wont be called when a gui or chat is opened or if a button is held for a longer time.

 Button has to be held less then 0.5 seconds.

 Currently does not support multiple button presses,

 eg: pressing 'a' and then 'd' and then releasing 'a' and then 'd' will no cause the event to trigger

Enclosing class: PlayerEvent

### Fields
- `public final int key`
  Keyboard button pressed, (key codes
- `public final boolean isCtrlPressed`
- `public final boolean isAltPressed`
- `public final boolean isShiftPressed`
- `public final boolean isMetaPressed`
  This is the windows or apple key

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.KilledEntityEvent

*class* `noppes.npcs.api.event.PlayerEvent.KilledEntityEvent`

Script hook: `kill`

Enclosing class: PlayerEvent

### Fields
- `public final IEntityLivingBase entity`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.LevelUpEvent

*class* `noppes.npcs.api.event.PlayerEvent.LevelUpEvent`

Script hook: `levelUp`

Called when a players level changes

Enclosing class: PlayerEvent

### Fields
- `public final int change`
  The amount the level of the player changed

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.LoginEvent

*class* `noppes.npcs.api.event.PlayerEvent.LoginEvent`

Script hook: `login`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.LogoutEvent

*class* `noppes.npcs.api.event.PlayerEvent.LogoutEvent`

Script hook: `logout`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.PickUpEvent

*class* `noppes.npcs.api.event.PlayerEvent.PickUpEvent`

Script hook: `pickedUp`

Enclosing class: PlayerEvent

### Fields
- `public final IItemStack item`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.RangedLaunchedEvent

*class* `noppes.npcs.api.event.PlayerEvent.RangedLaunchedEvent`

Script hook: `rangedLaunched`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.TimerEvent

*class* `noppes.npcs.api.event.PlayerEvent.TimerEvent`

Script hook: `timer`

Enclosing class: PlayerEvent

### Fields
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.TossEvent

*class* `noppes.npcs.api.event.PlayerEvent.TossEvent`

Script hook: `toss`

Enclosing class: PlayerEvent

### Fields
- `public final IItemStack item`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## PlayerEvent.UpdateEvent

*class* `noppes.npcs.api.event.PlayerEvent.UpdateEvent`

Script hook: `tick`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ProjectileEvent

*class* `noppes.npcs.api.event.ProjectileEvent`

### Fields
- `public IProjectile projectile`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ProjectileEvent.ImpactEvent

*class* `noppes.npcs.api.event.ProjectileEvent.ImpactEvent`

Script hook: `projectileImpact`

Enclosing class: ProjectileEvent

### Fields
- `public final int type`
  0:entity, 1:block
- `public final java.lang.Object target`

### Inherited fields
- from `noppes.npcs.api.event.ProjectileEvent`: `projectile`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## ProjectileEvent.UpdateEvent

*class* `noppes.npcs.api.event.ProjectileEvent.UpdateEvent`

Script hook: `projectileTick`

Enclosing class: ProjectileEvent

### Inherited fields
- from `noppes.npcs.api.event.ProjectileEvent`: `projectile`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## QuestEvent

*class* `noppes.npcs.api.event.QuestEvent`

### Fields
- `public final IQuest quest`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## QuestEvent.QuestCompletedEvent

*class* `noppes.npcs.api.event.QuestEvent.QuestCompletedEvent`

Enclosing class: QuestEvent

### Inherited fields
- from `noppes.npcs.api.event.QuestEvent`: `player`, `quest`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## QuestEvent.QuestStartEvent

*class* `noppes.npcs.api.event.QuestEvent.QuestStartEvent`

Enclosing class: QuestEvent

### Inherited fields
- from `noppes.npcs.api.event.QuestEvent`: `player`, `quest`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## QuestEvent.QuestTurnedInEvent

*class* `noppes.npcs.api.event.QuestEvent.QuestTurnedInEvent`

Enclosing class: QuestEvent

### Fields
- `public int expReward`
- `public IItemStack[] itemRewards`

### Inherited fields
- from `noppes.npcs.api.event.QuestEvent`: `player`, `quest`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent

*class* `noppes.npcs.api.event.RoleEvent`

### Fields
- `public final ICustomNpc npc`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.BankUnlockedEvent

*class* `noppes.npcs.api.event.RoleEvent.BankUnlockedEvent`

Enclosing class: RoleEvent

### Fields
- `public final int slot`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.BankUpgradedEvent

*class* `noppes.npcs.api.event.RoleEvent.BankUpgradedEvent`

Enclosing class: RoleEvent

### Fields
- `public final int slot`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.FollowerFinishedEvent

*class* `noppes.npcs.api.event.RoleEvent.FollowerFinishedEvent`

Enclosing class: RoleEvent

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.FollowerHireEvent

*class* `noppes.npcs.api.event.RoleEvent.FollowerHireEvent`

Enclosing class: RoleEvent

### Fields
- `public int days`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.MailmanEvent

*class* `noppes.npcs.api.event.RoleEvent.MailmanEvent`

Enclosing class: RoleEvent

### Fields
- `public final IPlayerMail mail`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.TradeFailedEvent

*class* `noppes.npcs.api.event.RoleEvent.TradeFailedEvent`

Enclosing class: RoleEvent

### Fields
- `public final IItemStack sold`
- `public final IItemStack currency1`
- `public final IItemStack currency2`
- `public IItemStack receiving`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.TraderEvent

*class* `noppes.npcs.api.event.RoleEvent.TraderEvent`

Enclosing class: RoleEvent

### Fields
- `public IItemStack sold`
- `public IItemStack currency1`
- `public IItemStack currency2`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.TransporterUnlockedEvent

*class* `noppes.npcs.api.event.RoleEvent.TransporterUnlockedEvent`

Enclosing class: RoleEvent

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## RoleEvent.TransporterUseEvent

*class* `noppes.npcs.api.event.RoleEvent.TransporterUseEvent`

Enclosing class: RoleEvent

### Fields
- `public final IRoleTransporter.ITransportLocation location`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## WorldEvent

*class* `noppes.npcs.api.event.WorldEvent`

### Fields
- `public final IWorld world`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`

## WorldEvent.ScriptCommandEvent

*class* `noppes.npcs.api.event.WorldEvent.ScriptCommandEvent`

Enclosing class: WorldEvent

### Fields
- `public final java.lang.String[] arguments`
- `public final IPos pos`

### Inherited fields
- from `noppes.npcs.api.event.WorldEvent`: `world`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`
