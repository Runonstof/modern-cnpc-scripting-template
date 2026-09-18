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
- [CustomGuiEvent](#customguievent)
- [CustomGuiEvent.ButtonEvent](#customguievent.buttonevent) — `customGuiButton`
- [CustomGuiEvent.CloseEvent](#customguievent.closeevent) — `customGuiClosed`
- [CustomGuiEvent.ScrollEvent](#customguievent.scrollevent) — `customGuiScroll`
- [CustomGuiEvent.SlotClickEvent](#customguievent.slotclickevent) — `customGuiSlotClicked`
- [CustomGuiEvent.SlotEvent](#customguievent.slotevent) — `customGuiSlot`
- [CustomNPCsEvent](#customnpcsevent)
- [DialogEvent](#dialogevent)
- [DialogEvent.CloseEvent](#dialogevent.closeevent) — `dialogClose`
- [DialogEvent.OpenEvent](#dialogevent.openevent) — `dialog`
- [DialogEvent.OptionEvent](#dialogevent.optionevent) — `dialogOption`
- [ForgeEvent](#forgeevent)
- [ForgeEvent.EntityEvent](#forgeevent.entityevent)
- [ForgeEvent.InitEvent](#forgeevent.initevent) — `init`
- [ForgeEvent.LevelEvent](#forgeevent.levelevent)
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
- [PlayerEvent.KeyReleasedEvent](#playerevent.keyreleasedevent) — `keyReleased`
- [PlayerEvent.KilledEntityEvent](#playerevent.killedentityevent) — `kill`
- [PlayerEvent.LevelUpEvent](#playerevent.levelupevent) — `levelUp`
- [PlayerEvent.LoginEvent](#playerevent.loginevent) — `login`
- [PlayerEvent.LogoutEvent](#playerevent.logoutevent) — `logout`
- [PlayerEvent.PickUpEvent](#playerevent.pickupevent) — `pickedUp`
- [PlayerEvent.PlaySoundEvent](#playerevent.playsoundevent) — `playSound`
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
- [WorldEvent.ScriptTriggerEvent](#worldevent.scripttriggerevent)
## BlockEvent

*class* `noppes.npcs.api.event.BlockEvent`

### Fields
- `public IBlock block`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.BreakEvent

*class* `noppes.npcs.api.event.BlockEvent.BreakEvent`

Script hook: `broken`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.ClickedEvent

*class* `noppes.npcs.api.event.BlockEvent.ClickedEvent`

Script hook: `clicked`

Enclosing class: BlockEvent

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.CollidedEvent

*class* `noppes.npcs.api.event.BlockEvent.CollidedEvent`

Script hook: `collide`

Enclosing class: BlockEvent

### Fields
- `public final IEntity entity`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.DoorToggleEvent

*class* `noppes.npcs.api.event.BlockEvent.DoorToggleEvent`

Script hook: `doorToggle`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## BlockEvent.ExplodedEvent

*class* `noppes.npcs.api.event.BlockEvent.ExplodedEvent`

Script hook: `exploded`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.HarvestedEvent

*class* `noppes.npcs.api.event.BlockEvent.HarvestedEvent`

Script hook: `harvested`

Enclosing class: BlockEvent

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.InitEvent

*class* `noppes.npcs.api.event.BlockEvent.InitEvent`

Script hook: `init`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## BlockEvent.NeighborChangedEvent

*class* `noppes.npcs.api.event.BlockEvent.NeighborChangedEvent`

Script hook: `neighborChanged`

Enclosing class: BlockEvent

### Fields
- `public final IPos changedPos`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.RainFillEvent

*class* `noppes.npcs.api.event.BlockEvent.RainFillEvent`

Script hook: `rainFilled`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## BlockEvent.TimerEvent

*class* `noppes.npcs.api.event.BlockEvent.TimerEvent`

Script hook: `timer`

Enclosing class: BlockEvent

### Fields
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## BlockEvent.UpdateEvent

*class* `noppes.npcs.api.event.BlockEvent.UpdateEvent`

Script hook: `tick`

Enclosing class: BlockEvent

### Inherited fields
- from `noppes.npcs.api.event.BlockEvent`: `block`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomGuiEvent

*class* `noppes.npcs.api.event.CustomGuiEvent`

### Fields
- `public final IPlayer player`
- `public final ICustomGui gui`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomGuiEvent.ButtonEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.ButtonEvent`

Script hook: `customGuiButton`

Enclosing class: CustomGuiEvent

### Fields
- `public final int buttonId`
- `public final IButton button`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomGuiEvent.CloseEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.CloseEvent`

Script hook: `customGuiClosed`

Enclosing class: CustomGuiEvent

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomGuiEvent.ScrollEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.ScrollEvent`

Script hook: `customGuiScroll`

Enclosing class: CustomGuiEvent

### Fields
- `public final int scrollId`
- `public final String[] selection`
- `public final boolean doubleClick`
- `public final int scrollIndex`
- `public final IScroll scroll`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomGuiEvent.SlotClickEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.SlotClickEvent`

Script hook: `customGuiSlotClicked`

Enclosing class: CustomGuiEvent

### Fields
- `public final int dragType`
- `public final String clickType`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent.SlotEvent`: `slot`, `slotId`, `stack`
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomGuiEvent.SlotEvent

*class* `noppes.npcs.api.event.CustomGuiEvent.SlotEvent`

Script hook: `customGuiSlot`

Enclosing class: CustomGuiEvent

### Fields
- `public final int slotId`
- `public final IItemStack stack`
- `public final IItemSlot slot`

### Inherited fields
- from `noppes.npcs.api.event.CustomGuiEvent`: `gui`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## CustomNPCsEvent

*class* `noppes.npcs.api.event.CustomNPCsEvent`

### Fields
- `public final NpcAPI API`

## DialogEvent

*class* `noppes.npcs.api.event.DialogEvent`

### Fields
- `public final IDialog dialog`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## DialogEvent.CloseEvent

*class* `noppes.npcs.api.event.DialogEvent.CloseEvent`

Script hook: `dialogClose`

Enclosing class: DialogEvent

### Inherited fields
- from `noppes.npcs.api.event.DialogEvent`: `dialog`, `player`
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## DialogEvent.OpenEvent

*class* `noppes.npcs.api.event.DialogEvent.OpenEvent`

Script hook: `dialog`

Enclosing class: DialogEvent

### Inherited fields
- from `noppes.npcs.api.event.DialogEvent`: `dialog`, `player`
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## ForgeEvent

*class* `noppes.npcs.api.event.ForgeEvent`

Called for most Forge events. For the events I use the forges name and make the first letter lowercase.

 Eg:

 - EntityEvent.EntityJoinLevelEvent becomes entityEventEntityJoinLevelEvent

 - PlayerEvent.StartTracking becomes playerEventStartTracking

 - etc

 Note that these events can change anytime and that I have no control over these. Use at own risk

### Fields
- `public final net.minecraftforge.eventbus.api.Event event`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## ForgeEvent.InitEvent

*class* `noppes.npcs.api.event.ForgeEvent.InitEvent`

Script hook: `init`

The init event has no forge event

Enclosing class: ForgeEvent

### Inherited fields
- from `noppes.npcs.api.event.ForgeEvent`: `event`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ForgeEvent.LevelEvent

*class* `noppes.npcs.api.event.ForgeEvent.LevelEvent`

This event is used for every forge event which extends LevelEvent

 LevelEvent

Enclosing class: ForgeEvent

### Fields
- `public final IWorld world`

### Inherited fields
- from `noppes.npcs.api.event.ForgeEvent`: `event`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## HandlerEvent

*class* `noppes.npcs.api.event.HandlerEvent`

## HandlerEvent.FactionsLoadedEvent

*class* `noppes.npcs.api.event.HandlerEvent.FactionsLoadedEvent`

Enclosing class: HandlerEvent

### Fields
- `public final IFactionHandler handler`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## HandlerEvent.RecipesLoadedEvent

*class* `noppes.npcs.api.event.HandlerEvent.RecipesLoadedEvent`

Enclosing class: HandlerEvent

### Fields
- `public final IRecipeHandler handler`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent

*class* `noppes.npcs.api.event.ItemEvent`

### Fields
- `public IItemScripted item`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent.AttackEvent

*class* `noppes.npcs.api.event.ItemEvent.AttackEvent`

Script hook: `attack`

Will trigger if you have an item and left click into the air or left
 click a block or left click an entity

Enclosing class: ItemEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final Object target`
- `public IPlayer player`
- `public final IDamageSource damageSource`
  The attack event for entities also has the damageSource

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent.InitEvent

*class* `noppes.npcs.api.event.ItemEvent.InitEvent`

Script hook: `init`

Enclosing class: ItemEvent

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent.InteractEvent

*class* `noppes.npcs.api.event.ItemEvent.InteractEvent`

Script hook: `interact`

Will trigger if you have an item and right click into the air Or right
 click a block Or right click an entity

Enclosing class: ItemEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final Object target`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent.PickedUpEvent

*class* `noppes.npcs.api.event.ItemEvent.PickedUpEvent`

Script hook: `pickedUp`

When Cancelled it prevents the item from spawning in the level, the item still disappears from the inventory

Enclosing class: ItemEvent

### Fields
- `public IEntityItem entity`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent.SpawnEvent

*class* `noppes.npcs.api.event.ItemEvent.SpawnEvent`

Script hook: `spawn`

Enclosing class: ItemEvent

### Fields
- `public IEntityItem entity`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ItemEvent.TossedEvent

*class* `noppes.npcs.api.event.ItemEvent.TossedEvent`

Script hook: `toss`

When Cancelled it prevents the item from spawning in the level, the item still disappears from the inventory

Enclosing class: ItemEvent

### Fields
- `public IEntityItem entity`
- `public IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.ItemEvent`: `item`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## NpcEvent

*class* `noppes.npcs.api.event.NpcEvent`

### Fields
- `public final ICustomNpc npc`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.CollideEvent

*class* `noppes.npcs.api.event.NpcEvent.CollideEvent`

Script hook: `collide`

Enclosing class: NpcEvent

### Fields
- `public final IEntity entity`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## NpcEvent.DiedEvent

*class* `noppes.npcs.api.event.NpcEvent.DiedEvent`

Script hook: `died`

Enclosing class: NpcEvent

### Fields
- `public final IDamageSource damageSource`
- `public final String type`
- `public final IEntity source`
- `public IItemStack[] droppedItems`
- `public int expDropped`
- `public ILine line`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.InitEvent

*class* `noppes.npcs.api.event.NpcEvent.InitEvent`

Script hook: `init`

Enclosing class: NpcEvent

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.InteractEvent

*class* `noppes.npcs.api.event.NpcEvent.InteractEvent`

Script hook: `interact`

Enclosing class: NpcEvent

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.KilledEntityEvent

*class* `noppes.npcs.api.event.NpcEvent.KilledEntityEvent`

Script hook: `kill`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLiving entity`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.MeleeAttackEvent

*class* `noppes.npcs.api.event.NpcEvent.MeleeAttackEvent`

Script hook: `meleeAttack`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLiving target`
- `public float damage`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.RangedLaunchedEvent

*class* `noppes.npcs.api.event.NpcEvent.RangedLaunchedEvent`

Script hook: `rangedAttack`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLiving target`
- `public float damage`
- `public List<IProjectile> projectiles`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.TargetEvent

*class* `noppes.npcs.api.event.NpcEvent.TargetEvent`

Script hook: `target`

Enclosing class: NpcEvent

### Fields
- `public IEntityLiving entity`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.TargetLostEvent

*class* `noppes.npcs.api.event.NpcEvent.TargetLostEvent`

Script hook: `targetLost`

Enclosing class: NpcEvent

### Fields
- `public final IEntityLiving entity`
  The previous target

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.TimerEvent

*class* `noppes.npcs.api.event.NpcEvent.TimerEvent`

Script hook: `timer`

Enclosing class: NpcEvent

### Fields
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## NpcEvent.UpdateEvent

*class* `noppes.npcs.api.event.NpcEvent.UpdateEvent`

Script hook: `tick`

Enclosing class: NpcEvent

### Inherited fields
- from `noppes.npcs.api.event.NpcEvent`: `npc`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent

*class* `noppes.npcs.api.event.PlayerEvent`

### Fields
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.AttackEvent

*class* `noppes.npcs.api.event.PlayerEvent.AttackEvent`

Script hook: `attack`

Will trigger if you have an item and left click into the air or left
 click a block or left click an entity

Enclosing class: PlayerEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final Object target`
- `public final IDamageSource damageSource`
  The attack event for entities also has the damageSource

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## PlayerEvent.ChatEvent

*class* `noppes.npcs.api.event.PlayerEvent.ChatEvent`

Script hook: `chat`

Enclosing class: PlayerEvent

### Fields
- `public String message`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.ContainerClosed

*class* `noppes.npcs.api.event.PlayerEvent.ContainerClosed`

Script hook: `containerClosed`

Enclosing class: PlayerEvent

### Fields
- `public final IContainer container`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.ContainerOpen

*class* `noppes.npcs.api.event.PlayerEvent.ContainerOpen`

Script hook: `containerOpen`

Enclosing class: PlayerEvent

### Fields
- `public final IContainer container`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## PlayerEvent.DiedEvent

*class* `noppes.npcs.api.event.PlayerEvent.DiedEvent`

Script hook: `died`

Enclosing class: PlayerEvent

### Fields
- `public final IDamageSource damageSource`
- `public final String type`
- `public final IEntity source`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## PlayerEvent.InitEvent

*class* `noppes.npcs.api.event.PlayerEvent.InitEvent`

Script hook: `init`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.InteractEvent

*class* `noppes.npcs.api.event.PlayerEvent.InteractEvent`

Script hook: `interact`

Will trigger if you have an item and right click into the air Or right
 click a block Or right click an entity

Enclosing class: PlayerEvent

### Fields
- `public final int type`
  0:air, 1:entity, 2:block
- `public final Object target`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.KeyPressedEvent

*class* `noppes.npcs.api.event.PlayerEvent.KeyPressedEvent`

Script hook: `keyPressed`

Called when a player presses a button.

Enclosing class: PlayerEvent

### Fields
- `public final int key`
  Keyboard buttons, (key codes
- `public final boolean isCtrlPressed`
- `public final boolean isAltPressed`
- `public final boolean isShiftPressed`
- `public final boolean isMetaPressed`
  This is the windows or apple key
- `public final String openGui`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.KeyReleasedEvent

*class* `noppes.npcs.api.event.PlayerEvent.KeyReleasedEvent`

Script hook: `keyReleased`

Called when a player releases a button.

Enclosing class: PlayerEvent

### Fields
- `public final int key`
  Keyboard buttons, (key codes
- `public final boolean isCtrlPressed`
- `public final boolean isAltPressed`
- `public final boolean isShiftPressed`
- `public final boolean isMetaPressed`
  This is the windows or apple key
- `public final String openGui`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.KilledEntityEvent

*class* `noppes.npcs.api.event.PlayerEvent.KilledEntityEvent`

Script hook: `kill`

Enclosing class: PlayerEvent

### Fields
- `public final IEntityLiving entity`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## PlayerEvent.LoginEvent

*class* `noppes.npcs.api.event.PlayerEvent.LoginEvent`

Script hook: `login`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.LogoutEvent

*class* `noppes.npcs.api.event.PlayerEvent.LogoutEvent`

Script hook: `logout`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.PickUpEvent

*class* `noppes.npcs.api.event.PlayerEvent.PickUpEvent`

Script hook: `pickedUp`

Enclosing class: PlayerEvent

### Fields
- `public final IItemStack item`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.PlaySoundEvent

*class* `noppes.npcs.api.event.PlayerEvent.PlaySoundEvent`

Script hook: `playSound`

Enclosing class: PlayerEvent

### Fields
- `public final String sound`
- `public final String category`
- `public final boolean looping`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.RangedLaunchedEvent

*class* `noppes.npcs.api.event.PlayerEvent.RangedLaunchedEvent`

Script hook: `rangedLaunched`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.TimerEvent

*class* `noppes.npcs.api.event.PlayerEvent.TimerEvent`

Script hook: `timer`

Enclosing class: PlayerEvent

### Fields
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.TossEvent

*class* `noppes.npcs.api.event.PlayerEvent.TossEvent`

Script hook: `toss`

Enclosing class: PlayerEvent

### Fields
- `public final IItemStack item`

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## PlayerEvent.UpdateEvent

*class* `noppes.npcs.api.event.PlayerEvent.UpdateEvent`

Script hook: `tick`

Enclosing class: PlayerEvent

### Inherited fields
- from `noppes.npcs.api.event.PlayerEvent`: `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ProjectileEvent

*class* `noppes.npcs.api.event.ProjectileEvent`

### Fields
- `public IProjectile projectile`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ProjectileEvent.ImpactEvent

*class* `noppes.npcs.api.event.ProjectileEvent.ImpactEvent`

Script hook: `projectileImpact`

Enclosing class: ProjectileEvent

### Fields
- `public final int type`
  0:entity, 1:block
- `public final Object target`

### Inherited fields
- from `noppes.npcs.api.event.ProjectileEvent`: `projectile`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## ProjectileEvent.UpdateEvent

*class* `noppes.npcs.api.event.ProjectileEvent.UpdateEvent`

Script hook: `projectileTick`

Enclosing class: ProjectileEvent

### Inherited fields
- from `noppes.npcs.api.event.ProjectileEvent`: `projectile`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## QuestEvent

*class* `noppes.npcs.api.event.QuestEvent`

### Fields
- `public final IQuest quest`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## QuestEvent.QuestCompletedEvent

*class* `noppes.npcs.api.event.QuestEvent.QuestCompletedEvent`

Enclosing class: QuestEvent

### Inherited fields
- from `noppes.npcs.api.event.QuestEvent`: `player`, `quest`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## QuestEvent.QuestStartEvent

*class* `noppes.npcs.api.event.QuestEvent.QuestStartEvent`

Enclosing class: QuestEvent

### Inherited fields
- from `noppes.npcs.api.event.QuestEvent`: `player`, `quest`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## QuestEvent.QuestTurnedInEvent

*class* `noppes.npcs.api.event.QuestEvent.QuestTurnedInEvent`

Enclosing class: QuestEvent

### Fields
- `public int expReward`
- `public IItemStack[] itemRewards`

### Inherited fields
- from `noppes.npcs.api.event.QuestEvent`: `player`, `quest`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent

*class* `noppes.npcs.api.event.RoleEvent`

### Fields
- `public final ICustomNpc npc`
- `public final IPlayer player`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent.BankUnlockedEvent

*class* `noppes.npcs.api.event.RoleEvent.BankUnlockedEvent`

Enclosing class: RoleEvent

### Fields
- `public final int slot`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent.BankUpgradedEvent

*class* `noppes.npcs.api.event.RoleEvent.BankUpgradedEvent`

Enclosing class: RoleEvent

### Fields
- `public final int slot`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent.FollowerFinishedEvent

*class* `noppes.npcs.api.event.RoleEvent.FollowerFinishedEvent`

Enclosing class: RoleEvent

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent.FollowerHireEvent

*class* `noppes.npcs.api.event.RoleEvent.FollowerHireEvent`

Enclosing class: RoleEvent

### Fields
- `public int days`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent.MailmanEvent

*class* `noppes.npcs.api.event.RoleEvent.MailmanEvent`

Enclosing class: RoleEvent

### Fields
- `public final IPlayerMail mail`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

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

## RoleEvent.TransporterUnlockedEvent

*class* `noppes.npcs.api.event.RoleEvent.TransporterUnlockedEvent`

Enclosing class: RoleEvent

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## RoleEvent.TransporterUseEvent

*class* `noppes.npcs.api.event.RoleEvent.TransporterUseEvent`

Enclosing class: RoleEvent

### Fields
- `public final IRoleTransporter.ITransportLocation location`

### Inherited fields
- from `noppes.npcs.api.event.RoleEvent`: `npc`, `player`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## WorldEvent

*class* `noppes.npcs.api.event.WorldEvent`

### Fields
- `public final IWorld world`

### Inherited fields
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`

## WorldEvent.ScriptTriggerEvent

*class* `noppes.npcs.api.event.WorldEvent.ScriptTriggerEvent`

Enclosing class: WorldEvent

### Fields
- `public final Object[] arguments`
- `public final IPos pos`
  If pos is a Script Block or Door it will call their scripts
- `public final IEntity entity`
  Can be null, if player it will call the player scripts too, if npc it will call the npc scripts
- `public final int id`

### Inherited fields
- from `noppes.npcs.api.event.WorldEvent`: `world`
- from `noppes.npcs.api.event.CustomNPCsEvent`: `API`
