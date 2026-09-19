# net.minecraftforge.event.entity.player

- [AdvancementEvent](#advancementevent)
- [AdvancementEvent.AdvancementEarnEvent](#advancementevent.advancementearnevent)
- [AdvancementEvent.AdvancementProgressEvent](#advancementevent.advancementprogressevent)
- [AnvilRepairEvent](#anvilrepairevent)
- [ArrowLooseEvent](#arrowlooseevent)
- [ArrowNockEvent](#arrownockevent)
- [AttackEntityEvent](#attackentityevent)
- [BonemealEvent](#bonemealevent)
- [Class AdvancementEvent.AdvancementProgressEvent.ProgressType](#class-advancementevent.advancementprogressevent.progresstype)
- [Class PlayerInteractEvent.LeftClickBlock.Action](#class-playerinteractevent.leftclickblock.action)
- [CriticalHitEvent](#criticalhitevent)
- [EntityItemPickupEvent](#entityitempickupevent)
- [FillBucketEvent](#fillbucketevent)
- [ItemFishedEvent](#itemfishedevent)
- [ItemTooltipEvent](#itemtooltipevent)
- [PermissionsChangedEvent](#permissionschangedevent)
- [PlayerContainerEvent](#playercontainerevent)
- [PlayerContainerEvent.Close](#playercontainerevent.close)
- [PlayerContainerEvent.Open](#playercontainerevent.open)
- [PlayerDestroyItemEvent](#playerdestroyitemevent)
- [PlayerEvent](#playerevent)
- [PlayerEvent.BreakSpeed](#playerevent.breakspeed)
- [PlayerEvent.Clone](#playerevent.clone)
- [PlayerEvent.HarvestCheck](#playerevent.harvestcheck)
- [PlayerEvent.ItemCraftedEvent](#playerevent.itemcraftedevent)
- [PlayerEvent.ItemPickupEvent](#playerevent.itempickupevent)
- [PlayerEvent.ItemSmeltedEvent](#playerevent.itemsmeltedevent)
- [PlayerEvent.LoadFromFile](#playerevent.loadfromfile)
- [PlayerEvent.NameFormat](#playerevent.nameformat)
- [PlayerEvent.PlayerChangedDimensionEvent](#playerevent.playerchangeddimensionevent)
- [PlayerEvent.PlayerChangeGameModeEvent](#playerevent.playerchangegamemodeevent)
- [PlayerEvent.PlayerLoggedInEvent](#playerevent.playerloggedinevent)
- [PlayerEvent.PlayerLoggedOutEvent](#playerevent.playerloggedoutevent)
- [PlayerEvent.PlayerRespawnEvent](#playerevent.playerrespawnevent)
- [PlayerEvent.SaveToFile](#playerevent.savetofile)
- [PlayerEvent.StartTracking](#playerevent.starttracking)
- [PlayerEvent.StopTracking](#playerevent.stoptracking)
- [PlayerEvent.TabListNameFormat](#playerevent.tablistnameformat)
- [PlayerFlyableFallEvent](#playerflyablefallevent)
- [PlayerInteractEvent](#playerinteractevent)
- [PlayerInteractEvent.EntityInteract](#playerinteractevent.entityinteract)
- [PlayerInteractEvent.EntityInteractSpecific](#playerinteractevent.entityinteractspecific)
- [PlayerInteractEvent.LeftClickBlock](#playerinteractevent.leftclickblock)
- [PlayerInteractEvent.LeftClickEmpty](#playerinteractevent.leftclickempty)
- [PlayerInteractEvent.RightClickBlock](#playerinteractevent.rightclickblock)
- [PlayerInteractEvent.RightClickEmpty](#playerinteractevent.rightclickempty)
- [PlayerInteractEvent.RightClickItem](#playerinteractevent.rightclickitem)
- [PlayerSetSpawnEvent](#playersetspawnevent)
- [PlayerSleepInBedEvent](#playersleepinbedevent)
- [PlayerSpawnPhantomsEvent](#playerspawnphantomsevent)
- [PlayerWakeUpEvent](#playerwakeupevent)
- [PlayerXpEvent](#playerxpevent)
- [PlayerXpEvent.LevelChange](#playerxpevent.levelchange)
- [PlayerXpEvent.PickupXp](#playerxpevent.pickupxp)
- [PlayerXpEvent.XpChange](#playerxpevent.xpchange)
- [SleepingLocationCheckEvent](#sleepinglocationcheckevent)
- [SleepingTimeCheckEvent](#sleepingtimecheckevent)
- [TradeWithVillagerEvent](#tradewithvillagerevent)
## AdvancementEvent

*class* `net.minecraftforge.event.entity.player.AdvancementEvent`

Base class used for advancement-related events. Should not be used directly.

### Fields
- `private final AdvancementHolder advancement`

### Methods
- `public AdvancementHolder getAdvancement()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## AdvancementEvent.AdvancementEarnEvent

*class* `net.minecraftforge.event.entity.player.AdvancementEvent.AdvancementEarnEvent`

Fired when the player earns an advancement. An advancement is earned once its requirements are complete.

 Note that advancements may be hidden from the player or used in background mechanics, such as recipe
 advancements for unlocking recipes in the recipe book.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical server.

Enclosing class: AdvancementEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.AdvancementEvent`: `getAdvancement`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## AdvancementEvent.AdvancementProgressEvent

*class* `net.minecraftforge.event.entity.player.AdvancementEvent.AdvancementProgressEvent`

Fired when the player's progress on an advancement criterion is granted or revoked.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical server.

Enclosing class: AdvancementEvent

### Fields
- `private final AdvancementProgress advancementProgress`
- `private final String criterionName`
- `private final AdvancementEvent.AdvancementProgressEvent.ProgressType progressType`

### Methods
- `public AdvancementProgress getAdvancementProgress()`
  Returns the progress of the advancement.
  - returns: the progress of the advancement
- `public String getCriterionName()`
  Returns name of the criterion that was progressed.
  - returns: name of the criterion that was progressed
- `public AdvancementEvent.AdvancementProgressEvent.ProgressType getProgressType()`
  Returns The type of progress for the criterion in this event.
  - returns: The type of progress for the criterion in this event

### Inherited methods
- from `net.minecraftforge.event.entity.player.AdvancementEvent`: `getAdvancement`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## AnvilRepairEvent

*class* `net.minecraftforge.event.entity.player.AnvilRepairEvent`

Fired when the player removes a "repaired" item from the Anvil's Output slot.

 breakChance specifies as a percentage the chance that the anvil will be "damaged" when used.

 ItemStacks are the inputs/output from the anvil. They cannot be edited.

### Fields
- `@NotNull private final @NotNull ItemStack left`
- `@NotNull private final @NotNull ItemStack right`
- `@NotNull private final @NotNull ItemStack output`
- `private float breakChance`

### Methods
- `@NotNull public @NotNull ItemStack getOutput()`
  Get the output result from the anvil
  - returns: the output
- `@NotNull public @NotNull ItemStack getLeft()`
  Get the first item input into the anvil
  - returns: the first input slot
- `@NotNull public @NotNull ItemStack getRight()`
  Get the second item input into the anvil
  - returns: the second input slot
- `public float getBreakChance()`
- `public void setBreakChance(float breakChance)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## ArrowLooseEvent

*class* `net.minecraftforge.event.entity.player.ArrowLooseEvent`

ArrowLooseEvent is fired when a player stops using a bow.

 This event is fired whenever a player stops using a bow in
 BowItem.releaseUsing(ItemStack, Level, LivingEntity, int).

 bow contains the ItemBow ItemStack that was used in this event.

 charge contains the value for how much the player had charged before stopping the shot.

 This event is Cancelable.

 If this event is canceled, the player does not stop using the bow.

 For crossbows, the charge will always be 1; Set it to -1 in order to prevent firing the arrow.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final ItemStack bow`
- `private final Level level`
- `private final boolean hasAmmo`
- `private int charge`

### Methods
- `@NotNull public @NotNull ItemStack getBow()`
- `public Level getLevel()`
- `public boolean hasAmmo()`
- `public int getCharge()`
- `public void setCharge(int charge)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## ArrowNockEvent

*class* `net.minecraftforge.event.entity.player.ArrowNockEvent`

ArrowNockEvent is fired when a player begins using a bow.

 This event is fired whenever a player begins using a bow in
 BowItem.use(Level, Player, InteractionHand).

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final ItemStack bow`
- `private final InteractionHand hand`
- `private final Level level`
- `private final boolean hasAmmo`
- `private InteractionResultHolder<ItemStack> action`

### Methods
- `@NotNull public @NotNull ItemStack getBow()`
- `public Level getLevel()`
- `public InteractionHand getHand()`
- `public boolean hasAmmo()`
- `public InteractionResultHolder<ItemStack> getAction()`
- `public void setAction(InteractionResultHolder<ItemStack> action)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## AttackEntityEvent

*class* `net.minecraftforge.event.entity.player.AttackEntityEvent`

AttackEntityEvent is fired when a player attacks an Entity.

 This event is fired whenever a player attacks an Entity in
 Player.attack(Entity).

 target contains the Entity that was damaged by the player.

 This event is Cancelable.

 If this event is canceled, the player does not attack the Entity.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Entity target`

### Methods
- `public Entity getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## BonemealEvent

*class* `net.minecraftforge.event.entity.player.BonemealEvent`

This event is called when a player attempts to use Bonemeal on a block.
 It can be canceled to completely prevent any further processing.

 You can also set the result to ALLOW to mark the event as processed
 and use up a bonemeal from the stack but do no further processing.

 setResult(ALLOW) is the same as the old setHandled()

### Fields
- `private final Level level`
- `private final BlockPos pos`
- `private final BlockState block`
- `private final ItemStack stack`

### Methods
- `public Level getLevel()`
- `public BlockPos getPos()`
- `public BlockState getBlock()`
- `@NotNull public @NotNull ItemStack getStack()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## Class AdvancementEvent.AdvancementProgressEvent.ProgressType

*enum* `net.minecraftforge.event.entity.player.Class AdvancementEvent.AdvancementProgressEvent.ProgressType`

Enclosing class: AdvancementEvent.AdvancementProgressEvent

### Methods
- `public static AdvancementEvent.AdvancementProgressEvent.ProgressType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AdvancementEvent.AdvancementProgressEvent.ProgressType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PlayerInteractEvent.LeftClickBlock.Action

*enum* `net.minecraftforge.event.entity.player.Class PlayerInteractEvent.LeftClickBlock.Action`

Enclosing class: PlayerInteractEvent.LeftClickBlock

### Methods
- `public static PlayerInteractEvent.LeftClickBlock.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PlayerInteractEvent.LeftClickBlock.Action valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static PlayerInteractEvent.LeftClickBlock.Action convert(ServerboundPlayerActionPacket.Action action)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CriticalHitEvent

*class* `net.minecraftforge.event.entity.player.CriticalHitEvent`

This event is fired whenever a player attacks an Entity in
 EntityPlayer#attackTargetEntityWithCurrentItem(Entity).

 This event is not Cancelable.

 This event has a result. Event.HasResult

 DEFAULT: means the vanilla logic will determine if this a critical hit.

 DENY: it will not be a critical hit but the player still will attack

 ALLOW: this attack is forced to be critical

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private float damageModifier`
- `private final float oldDamageModifier`
- `private final Entity target`
- `private final boolean vanillaCritical`

### Methods
- `public Entity getTarget()`
  The Entity that was damaged by the player.
- `public void setDamageModifier(float mod)`
  This set the damage multiplier for the hit.
   If you set it to 0, then the particles are still generated but damage is not done.
- `public float getDamageModifier()`
  The damage modifier for the hit.
  
   This is by default 1.5F for ciritcal hits and 1F for normal hits .
- `public float getOldDamageModifier()`
  The orignal damage modifier for the hit wthout any changes.
  
   This is 1.5F for ciritcal hits and 1F for normal hits .
- `public boolean isVanillaCritical()`
  Returns true if this hit was critical by vanilla

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## EntityItemPickupEvent

*class* `net.minecraftforge.event.entity.player.EntityItemPickupEvent`

This event is called when a player collides with a EntityItem on the ground.
 The event can be canceled, and no further processing will be done.

 You can set the result of this event to ALLOW which will trigger the
 processing of achievements, FML's event, play the sound, and kill the
 entity if all the items are picked up.

 setResult(ALLOW) is the same as the old setHandled()

### Fields
- `private final ItemEntity item`

### Methods
- `public ItemEntity getItem()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## FillBucketEvent

*class* `net.minecraftforge.event.entity.player.FillBucketEvent`

This event is fired when a player attempts to use a Empty bucket, it
 can be canceled to completely prevent any further processing.

 If you set the result to 'ALLOW', it means that you have processed
 the event and wants the basic functionality of adding the new
 ItemStack to your inventory and reducing the stack size to process.
 setResult(ALLOW) is the same as the old setHandled();

### Fields
- `private final ItemStack current`
- `private final Level level`
- `@Nullable private final @Nullable HitResult target`
- `private ItemStack result`

### Methods
- `@NotNull public @NotNull ItemStack getEmptyBucket()`
- `public Level getLevel()`
- `@Nullable public @Nullable HitResult getTarget()`
- `@NotNull public @NotNull ItemStack getFilledBucket()`
- `public void setFilledBucket(@NotNull  @NotNull ItemStack bucket)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## ItemFishedEvent

*class* `net.minecraftforge.event.entity.player.ItemFishedEvent`

This event is called when a player fishes an item.

 This event is Cancelable
 Canceling the event will cause the player to receive no items at all.
 The hook will still take the damage specified

### Fields
- `private final NonNullList<ItemStack> stacks`
- `private final FishingHook hook`
- `private int rodDamage`

### Methods
- `public int getRodDamage()`
  Get the damage the rod will take.
  - returns: The damage the rod will take
- `public void damageRodBy(@Nonnegative  int rodDamage)`
  Specifies the amount of damage that the fishing rod should take.
   This is not added to the pre-existing damage to be taken.
  - param: rodDamage - The damage the rod will take. Must be nonnegative
- `public NonNullList<ItemStack> getDrops()`
  Use this to get the items the player will receive.
   You cannot use this to modify the drops the player will get.
   If you want to affect the loot, you should use LootTables.
- `public FishingHook getHookEntity()`
  Use this to stuff related to the hook itself, like the position of the bobber.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## ItemTooltipEvent

*class* `net.minecraftforge.event.entity.player.ItemTooltipEvent`

### Fields
- `private final TooltipFlag flags`
- `@NotNull private final @NotNull ItemStack itemStack`
- `private final List<Component> toolTip`

### Methods
- `public TooltipFlag getFlags()`
  Use to determine if the advanced information on item tooltips is being shown, toggled by F3+H.
- `@NotNull public @NotNull ItemStack getItemStack()`
  The ItemStack with the tooltip.
- `public List<Component> getToolTip()`
  The ItemStack tooltip.
- `@Nullable public @Nullable Player getEntity()`
  This event is fired with a null player during startup when populating search trees for tooltips.

## PermissionsChangedEvent

*class* `net.minecraftforge.event.entity.player.PermissionsChangedEvent`

This event will fire when the player is opped or deopped.

 This event is cancelable which will stop the op or deop from happening.

### Fields
- `private final int newLevel`
- `private final int oldLevel`

### Methods
- `public int getNewLevel()`
  - returns: The new permission level.
- `public int getOldLevel()`
  - returns: The old permission level.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerContainerEvent

*class* `net.minecraftforge.event.entity.player.PlayerContainerEvent`

### Fields
- `private final AbstractContainerMenu container`

### Methods
- `public AbstractContainerMenu getContainer()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerContainerEvent.Close

*class* `net.minecraftforge.event.entity.player.PlayerContainerEvent.Close`

Enclosing class: PlayerContainerEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerContainerEvent`: `getContainer`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerContainerEvent.Open

*class* `net.minecraftforge.event.entity.player.PlayerContainerEvent.Open`

Enclosing class: PlayerContainerEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerContainerEvent`: `getContainer`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerDestroyItemEvent

*class* `net.minecraftforge.event.entity.player.PlayerDestroyItemEvent`

PlayerDestroyItemEvent is fired when a player destroys an item.

 This event is fired whenever a player destroys an item in
 MultiPlayerGameMode.destroyBlock(BlockPos),
 MultiPlayerGameMode.useItem(Player, InteractionHand),
 MultiPlayerGameMode.useItemOn(LocalPlayer, InteractionHand, BlockHitResult) ,
 Player.attack(Entity),
 Player#hurtCurrentlyUsedShield(float),
 Player.interactOn(Entity, InteractionHand),
 ForgeHooks.getCraftingRemainingItem(ItemStack),
 ServerPlayerGameMode.useItem(ServerPlayer, Level, ItemStack, InteractionHand) ,
 ServerPlayerGameMode.useItemOn(ServerPlayer, Level, ItemStack, InteractionHand, BlockHitResult)
 and ServerPlayerGameMode.destroyBlock(BlockPos).

 original contains the original ItemStack before the item was destroyed.

 (@link #hand) contains the hand that the current item was held in.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired from ForgeEventFactory.onPlayerDestroyItem(Player, ItemStack, InteractionHand).

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `@NotNull private final @NotNull ItemStack original`
- `@Nullable private final @Nullable InteractionHand hand`

### Methods
- `@NotNull public @NotNull ItemStack getOriginal()`
- `@Nullable public @Nullable InteractionHand getHand()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent`

PlayerEvent is fired whenever an event involving a Player occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Player player`

### Methods
- `public Player getEntity()`

## PlayerEvent.BreakSpeed

*class* `net.minecraftforge.event.entity.player.PlayerEvent.BreakSpeed`

BreakSpeed is fired when a player attempts to harvest a block.

 This event is fired whenever a player attempts to harvest a block in
 Player.getDigSpeed(BlockState, BlockPos).

 This event is fired via the ForgeEventFactory.getBreakSpeed(Player, BlockState, float, BlockPos).

 state contains the block being broken.

 originalSpeed contains the original speed at which the player broke the block.

 newSpeed contains the newSpeed at which the player will break the block.

 pos contains the coordinates at which this event is occurring. Optional value.

 This event is Cancelable.

 If it is canceled, the player is unable to break the block.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Fields
- `private static final BlockPos LEGACY_UNKNOWN`
- `private final BlockState state`
- `private final float originalSpeed`
- `private float newSpeed`
- `private final Optional<BlockPos> pos`

### Methods
- `public BlockState getState()`
- `public float getOriginalSpeed()`
- `public float getNewSpeed()`
- `public void setNewSpeed(float newSpeed)`
- `public Optional<BlockPos> getPosition()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.Clone

*class* `net.minecraftforge.event.entity.player.PlayerEvent.Clone`

Fired when the EntityPlayer is cloned, typically caused by the impl sending a RESPAWN_PLAYER event.
 Either caused by death, or by traveling from the End to the overworld.

Enclosing class: PlayerEvent

### Fields
- `private final Player original`
- `private final boolean wasDeath`

### Methods
- `public Player getOriginal()`
  The old EntityPlayer that this new entity is a clone of.
- `public boolean isWasDeath()`
  True if this event was fired because the player died.
   False if it was fired because the entity switched dimensions.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.HarvestCheck

*class* `net.minecraftforge.event.entity.player.PlayerEvent.HarvestCheck`

HarvestCheck is fired when a player attempts to harvest a block.

 This event is fired whenever a player attempts to harvest a block in
 Player.hasCorrectToolForDrops(BlockState).

 This event is fired via the ForgeEventFactory.doPlayerHarvestCheck(Player, BlockState, boolean).

 state contains the BlockState that is being checked for harvesting.

 success contains the boolean value for whether the Block will be successfully harvested.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Fields
- `private final BlockState state`
- `private boolean success`

### Methods
- `public BlockState getTargetBlock()`
- `public boolean canHarvest()`
- `public void setCanHarvest(boolean success)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.ItemCraftedEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.ItemCraftedEvent`

Enclosing class: PlayerEvent

### Fields
- `@NotNull private final @NotNull ItemStack crafting`
- `private final Container craftMatrix`

### Methods
- `@NotNull public @NotNull ItemStack getCrafting()`
- `public Container getInventory()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.ItemPickupEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.ItemPickupEvent`

Enclosing class: PlayerEvent

### Fields
- `private final ItemEntity originalEntity`
  Original EntityItem with current remaining stack size
- `private final ItemStack stack`
  Clone item stack, containing the item and amount picked up

### Methods
- `public ItemStack getStack()`
- `public ItemEntity getOriginalEntity()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.ItemSmeltedEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.ItemSmeltedEvent`

Enclosing class: PlayerEvent

### Fields
- `@NotNull private final @NotNull ItemStack smelting`

### Methods
- `@NotNull public @NotNull ItemStack getSmelting()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.LoadFromFile

*class* `net.minecraftforge.event.entity.player.PlayerEvent.LoadFromFile`

The player is being loaded from the world save. Note that the
 player won't have been added to the world yet. Intended to
 allow mods to load an additional file from the players directory
 containing additional mod related player data.

Enclosing class: PlayerEvent

### Fields
- `private final File playerDirectory`
- `private final String playerUUID`

### Methods
- `public File getPlayerFile(String suffix)`
  Construct and return a recommended file for the supplied suffix
  - param: suffix - The suffix to use.
- `public File getPlayerDirectory()`
  The directory where player data is being stored. Use this
   to locate your mod additional file.
- `public String getPlayerUUID()`
  The UUID is the standard for player related file storage.
   It is broken out here for convenience for quick file generation.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.NameFormat

*class* `net.minecraftforge.event.entity.player.PlayerEvent.NameFormat`

NameFormat is fired when a player's display name is retrieved.

 This event is fired whenever a player's name is retrieved in
 Player.getDisplayName() or Player.refreshDisplayName().

 This event is fired via the ForgeEventFactory.getPlayerDisplayName(Player, Component).

 username contains the username of the player.
 displayname contains the display name of the player.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Fields
- `private final Component username`
- `private Component displayname`

### Methods
- `public Component getUsername()`
- `public Component getDisplayname()`
- `public void setDisplayname(Component displayname)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.PlayerChangedDimensionEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.PlayerChangedDimensionEvent`

Enclosing class: PlayerEvent

### Fields
- `private final ResourceKey<Level> fromDim`
- `private final ResourceKey<Level> toDim`

### Methods
- `public ResourceKey<Level> getFrom()`
- `public ResourceKey<Level> getTo()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.PlayerChangeGameModeEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.PlayerChangeGameModeEvent`

Fired when the game type of a server player is changed to a different value than what it was previously. Eg Creative to Survival, not Survival to Survival.
 If the event is cancelled the game mode of the player is not changed and the value of newGameMode is ignored.

Enclosing class: PlayerEvent

### Fields
- `private final GameType currentGameMode`
- `private GameType newGameMode`

### Methods
- `public GameType getCurrentGameMode()`
- `public GameType getNewGameMode()`
- `public void setNewGameMode(GameType newGameMode)`
  Sets the game mode the player will be changed to if this event is not cancelled.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.PlayerLoggedInEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.PlayerLoggedInEvent`

Enclosing class: PlayerEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.PlayerLoggedOutEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.PlayerLoggedOutEvent`

Enclosing class: PlayerEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.PlayerRespawnEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent.PlayerRespawnEvent`

Enclosing class: PlayerEvent

### Fields
- `private final boolean endConquered`

### Methods
- `public boolean isEndConquered()`
  Did this respawn event come from the player conquering the end?
  - returns: if this respawn was because the player conquered the end

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.SaveToFile

*class* `net.minecraftforge.event.entity.player.PlayerEvent.SaveToFile`

The player is being saved to the world store. Note that the
 player may be in the process of logging out or otherwise departing
 from the world. Don't assume it's association with the world.
 This allows mods to load an additional file from the players directory
 containing additional mod related player data.

 Use this event to save the additional mod related player data to the world.

 WARNING: Do not overwrite the player's .dat file here. You will
 corrupt the world state.

Enclosing class: PlayerEvent

### Fields
- `private final File playerDirectory`
- `private final String playerUUID`

### Methods
- `public File getPlayerFile(String suffix)`
  Construct and return a recommended file for the supplied suffix
  - param: suffix - The suffix to use.
- `public File getPlayerDirectory()`
  The directory where player data is being stored. Use this
   to locate your mod additional file.
- `public String getPlayerUUID()`
  The UUID is the standard for player related file storage.
   It is broken out here for convenience for quick file generation.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.StartTracking

*class* `net.minecraftforge.event.entity.player.PlayerEvent.StartTracking`

Fired when an Entity is started to be "tracked" by this player (the player receives updates about this entity, e.g. motion).

Enclosing class: PlayerEvent

### Fields
- `private final Entity target`

### Methods
- `public Entity getTarget()`
  The Entity now being tracked.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.StopTracking

*class* `net.minecraftforge.event.entity.player.PlayerEvent.StopTracking`

Fired when an Entity is stopped to be "tracked" by this player (the player no longer receives updates about this entity, e.g. motion).

Enclosing class: PlayerEvent

### Fields
- `private final Entity target`

### Methods
- `public Entity getTarget()`
  The Entity no longer being tracked.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerEvent.TabListNameFormat

*class* `net.minecraftforge.event.entity.player.PlayerEvent.TabListNameFormat`

TabListNameFormat is fired when a player's display name for the tablist is retrieved.

 This event is fired whenever a player's display name for the tablist is retrieved in
 ServerPlayer.getTabListDisplayName() or ServerPlayer.refreshTabListName().

 This event is fired via the ForgeEventFactory.getPlayerTabListDisplayName(Player).

 getDisplayName() contains the display name of the player or null if the client should determine the display name itself.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Fields
- `@Nullable private @Nullable Component displayName`

### Methods
- `@Nullable public @Nullable Component getDisplayName()`
- `public void setDisplayName(@Nullable  @Nullable Component displayName)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerFlyableFallEvent

*class* `net.minecraftforge.event.entity.player.PlayerFlyableFallEvent`

Occurs when a player falls, but is able to fly. Doesn't need to be cancelable, this is mainly for notification purposes.

### Fields
- `private float distance`
- `private float multiplier`

### Methods
- `public float getDistance()`
- `public void setDistance(float distance)`
- `public float getMultiplier()`
- `public void setMultiplier(float multiplier)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent`

PlayerInteractEvent is fired when a player interacts in some way.
 All subclasses are fired on MinecraftForge.EVENT_BUS.
 See the individual documentation on each subevent for more details.

### Fields
- `private final InteractionHand hand`
- `private final BlockPos pos`
- `@Nullable private final @Nullable Direction face`
- `private InteractionResult cancellationResult`

### Methods
- `@NotNull public @NotNull InteractionHand getHand()`
  - returns: The hand involved in this interaction. Will never be null.
- `@NotNull public @NotNull ItemStack getItemStack()`
  - returns: The itemstack involved in this interaction, ItemStack.EMPTY if the hand was empty.
- `@NotNull public @NotNull BlockPos getPos()`
  If the interaction was on an entity, will be a BlockPos centered on the entity.
   If the interaction was on a block, will be the position of that block.
   Otherwise, will be a BlockPos centered on the player.
   Will never be null.
  - returns: The position involved in this interaction.
- `@Nullable public @Nullable Direction getFace()`
  - returns: The face involved in this interaction. For all non-block interactions, this will return null.
- `public Level getLevel()`
  - returns: Convenience method to get the level of this interaction.
- `public LogicalSide getSide()`
  - returns: The effective, i.e. logical, side of this interaction. This will be LogicalSide.CLIENT on the client thread, and LogicalSide.SERVER on the server thread.
- `public InteractionResult getCancellationResult()`
  - returns: The InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
 method of the event. By default, this is InteractionResult.PASS, meaning cancelled events will cause
 the client to keep trying more interactions until something works.
- `public void setCancellationResult(InteractionResult result)`
  Set the InteractionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
   method of the event.
   Note that this only has an effect on PlayerInteractEvent.RightClickBlock, PlayerInteractEvent.RightClickItem, PlayerInteractEvent.EntityInteract, and PlayerInteractEvent.EntityInteractSpecific.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.EntityInteract

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.EntityInteract`

This event is fired on both sides when the player right clicks an entity.
 It is responsible for all general entity interactions.

 This event is fired only if the result of the above PlayerInteractEvent.EntityInteractSpecific is not InteractionResult.SUCCESS.
 This event's state affects whether Entity.interact(Player, InteractionHand) and
 Item.interactLivingEntity(ItemStack, Player, LivingEntity, InteractionHand) are called.

 Let result be InteractionResult.SUCCESS if Entity.interact(Player, InteractionHand) or
 Item.interactLivingEntity(ItemStack, Player, LivingEntity, InteractionHand) return true,
 or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not InteractionResult.SUCCESS, the client will then try PlayerInteractEvent.RightClickItem.

Enclosing class: PlayerInteractEvent

### Fields
- `private final Entity target`

### Methods
- `public Entity getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.EntityInteractSpecific

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.EntityInteractSpecific`

This event is fired on both sides whenever a player right clicks an entity.

 "Interact at" is an interact where the local vector (which part of the entity you clicked) is known.
 The state of this event affects whether Entity.interactAt(Player, Vec3, InteractionHand) is called.

 Let result be the return value of Entity.interactAt(Player, Vec3, InteractionHand), or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not InteractionResult.SUCCESS, the client will then try PlayerInteractEvent.EntityInteract.

Enclosing class: PlayerInteractEvent

### Fields
- `private final Vec3 localPos`
- `private final Entity target`

### Methods
- `public Vec3 getLocalPos()`
  Returns the local interaction position. This is a 3D vector, where (0, 0, 0) is centered exactly at the
   center of the entity's bounding box at their feet. This means the X and Z values will be in the range
   [-width / 2, width / 2] while Y values will be in the range [0, height]
  - returns: The local position
- `public Entity getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.LeftClickBlock

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.LeftClickBlock`

This event is fired when a player left clicks while targeting a block.
 This event controls which of BlockBehaviour.attack(BlockState, Level, BlockPos, Player) and/or the item harvesting methods will be called
 Canceling the event will cause none of the above noted methods to be called.
 There are various results to this event, see the getters below.

 This event is fired at various points during left clicking on blocks, at both the start and end on the server, and at the start and while held down on the client.
 Use getAction() to check which type of action triggered this event.

 Note that if the event is canceled and the player holds down left mouse, the event will continue to fire.
 This is due to how vanilla calls the left click handler methods.

 Also note that creative mode directly breaks the block without running any other logic.
 Therefore, in creative mode, setUseBlock(net.minecraftforge.eventbus.api.Event.Result) and setUseItem(net.minecraftforge.eventbus.api.Event.Result) have no effect.

Enclosing class: PlayerInteractEvent

### Fields
- `private net.minecraftforge.eventbus.api.Event.Result useBlock`
- `private net.minecraftforge.eventbus.api.Event.Result useItem`
- `private final PlayerInteractEvent.LeftClickBlock.Action action`

### Methods
- `public net.minecraftforge.eventbus.api.Event.Result getUseBlock()`
  - returns: If BlockBehaviour.attack(BlockState, Level, BlockPos, Player) should be called. Changing this has no effect in creative mode
- `public net.minecraftforge.eventbus.api.Event.Result getUseItem()`
  - returns: If the block should be attempted to be mined with the current item. Changing this has no effect in creative mode
- `@NotNull public @NotNull PlayerInteractEvent.LeftClickBlock.Action getAction()`
  - returns: The action type for this interaction. Will never be null.
- `public void setUseBlock(net.minecraftforge.eventbus.api.Event.Result triggerBlock)`
- `public void setUseItem(net.minecraftforge.eventbus.api.Event.Result triggerItem)`
- `public void setCanceled(boolean canceled)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.LeftClickEmpty

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.LeftClickEmpty`

This event is fired on the client side when the player left clicks empty space with any ItemStack.
 The server is not aware of when the client left clicks empty space, you will need to tell the server yourself.
 This event cannot be canceled.

Enclosing class: PlayerInteractEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.RightClickBlock

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.RightClickBlock`

This event is fired on both sides whenever the player right clicks while targeting a block.

 This event controls which of IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext), BlockBehaviour.use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult),
 and Item.useOn(UseOnContext) will be called.

 Canceling the event will cause none of the above three to be called.

 Let result be the first non-pass return value of the above three methods, or pass, if they all pass.

 Or PlayerInteractEvent.cancellationResult if the event is cancelled.

 If result equals InteractionResult.PASS, we proceed to PlayerInteractEvent.RightClickItem.

 There are various results to this event, see the getters below.

 Note that handling things differently on the client vs server may cause desynchronizations!

Enclosing class: PlayerInteractEvent

### Fields
- `private net.minecraftforge.eventbus.api.Event.Result useBlock`
- `private net.minecraftforge.eventbus.api.Event.Result useItem`
- `private BlockHitResult hitVec`

### Methods
- `public net.minecraftforge.eventbus.api.Event.Result getUseBlock()`
  - returns: If BlockBehaviour.use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult) should be called
- `public net.minecraftforge.eventbus.api.Event.Result getUseItem()`
  - returns: If IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext) and Item.useOn(UseOnContext) should be called
- `public BlockHitResult getHitVec()`
  - returns: The ray trace result targeting the block.
- `public void setUseBlock(net.minecraftforge.eventbus.api.Event.Result triggerBlock)`
  DENY: BlockBehaviour.use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult) will never be called.
  
   DEFAULT: BlockBehaviour.use(BlockState, Level, BlockPos, Player, InteractionHand, BlockHitResult) will be called if IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext) passes.
  
   Note that default activation can be blocked if the user is sneaking and holding an item that does not return true to IForgeItem.doesSneakBypassUse(net.minecraft.world.item.ItemStack, net.minecraft.world.level.LevelReader, net.minecraft.core.BlockPos, net.minecraft.world.entity.player.Player).
  
   ALLOW: Block.updateOrDestroy(BlockState, BlockState, LevelAccessor, BlockPos, int, int) will always be called, unless IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext) does not pass.
- `public void setUseItem(net.minecraftforge.eventbus.api.Event.Result triggerItem)`
  DENY: Neither Item.useOn(UseOnContext) or IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext) will be called.
  
   DEFAULT: IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext) will always be called, and Item.useOn(UseOnContext) will be called if the block passes.
  
   ALLOW: IForgeItem.onItemUseFirst(net.minecraft.world.item.ItemStack, net.minecraft.world.item.context.UseOnContext) will always be called, and Item.useOn(UseOnContext) will be called if the block passes, regardless of cooldowns or emptiness.
- `public void setCanceled(boolean canceled)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.RightClickEmpty

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.RightClickEmpty`

This event is fired on the client side when the player right clicks empty space with an empty hand.
 The server is not aware of when the client right clicks empty space with an empty hand, you will need to tell the server yourself.
 This event cannot be canceled.

Enclosing class: PlayerInteractEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerInteractEvent.RightClickItem

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.RightClickItem`

This event is fired on both sides before the player triggers Item.use(Level, Player, InteractionHand).
 Note that this is NOT fired if the player is targeting a block PlayerInteractEvent.RightClickBlock or entity PlayerInteractEvent.EntityInteract PlayerInteractEvent.EntityInteractSpecific.

 Let result be the return value of Item.use(Level, Player, InteractionHand), or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not InteractionResult.SUCCESS, the client will then continue to other hands.

Enclosing class: PlayerInteractEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getLevel`, `getPos`, `getSide`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerSetSpawnEvent

*class* `net.minecraftforge.event.entity.player.PlayerSetSpawnEvent`

This event is fired when a player's spawn point is set or reset.

 The event can be canceled, which will prevent the spawn point from being changed.

### Fields
- `private final ResourceKey<Level> spawnLevel`
- `private final boolean forced`
- `@Nullable private final @Nullable BlockPos newSpawn`

### Methods
- `public boolean isForced()`
- `@Nullable public @Nullable BlockPos getNewSpawn()`
  The new spawn position, or null if the spawn position is being reset.
- `public ResourceKey<Level> getSpawnLevel()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerSleepInBedEvent

*class* `net.minecraftforge.event.entity.player.PlayerSleepInBedEvent`

PlayerSleepInBedEvent is fired when a player sleeps in a bed.

 This event is fired whenever a player sleeps in a bed in
 LivingEntity.startSleeping(BlockPos).

 result contains whether the player is able to sleep.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private Player.BedSleepingProblem result`
- `private final Optional<BlockPos> pos`

### Methods
- `public Player.BedSleepingProblem getResultStatus()`
- `public void setResult(Player.BedSleepingProblem result)`
- `public BlockPos getPos()`
- `public Optional<BlockPos> getOptionalPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerSpawnPhantomsEvent

*class* `net.minecraftforge.event.entity.player.PlayerSpawnPhantomsEvent`

This event is fired from PhantomSpawner.tick(net.minecraft.server.level.ServerLevel, boolean, boolean), once per player, when phantoms would attempt to be spawned.

 This event is not fired for spectating players.

 This event is fired before any per-player checks (but after Player.isSpectator()), but after all global checks.

 The behavior of PhantomSpawner is determined by the result of this event.

 See setResult(net.minecraftforge.eventbus.api.Event.Result) for documentation.

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private int phantomsToSpawn`

### Methods
- `public int getPhantomsToSpawn()`
  - returns: How many phantoms will be spawned, if spawning is successful. The default value is randomly generated.
- `public void setPhantomsToSpawn(int phantomsToSpawn)`
  Sets the number of phantoms to be spawned.
  - param: phantomsToSpawn - How many phantoms should spawn, given checks are passed.
- `public void setResult(@NotNull  @NotNull net.minecraftforge.eventbus.api.Event.Result result)`
  The result of this event controls if phantoms will be spawned.
  
   If the result is Event.Result.ALLOW, phantoms will always be spawned;
   If the result is Event.Result.DENY, phantoms will never be spawned;
   If the result is Event.Result.DEFAULT, vanilla checks will be run to determine if the spawn may occur.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerWakeUpEvent

*class* `net.minecraftforge.event.entity.player.PlayerWakeUpEvent`

This event is fired when the player is waking up.

 This is merely for purposes of listening for this to happen.

 There is nothing that can be manipulated with this event.

### Fields
- `private final boolean wakeImmediately`
- `private final boolean updateLevel`

### Methods
- `public boolean wakeImmediately()`
  Used for the 'wake up animation'.
   This is false if the player is considered 'sleepy' and the overlay should slowly fade away.
- `public boolean updateLevel()`
  Indicates if the server should be notified of sleeping changes.
   This will only be false if the server is considered 'up to date' already, because, for example, it initiated the call.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerXpEvent

*class* `net.minecraftforge.event.entity.player.PlayerXpEvent`

PlayerXpEvent is fired whenever an event involving player experience occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerXpEvent.LevelChange

*class* `net.minecraftforge.event.entity.player.PlayerXpEvent.LevelChange`

This event is fired when the player's experience level changes through the Player.giveExperienceLevels(int) method.
 It can be cancelled, and no further processing will be done.

Enclosing class: PlayerXpEvent

### Fields
- `private int levels`

### Methods
- `public int getLevels()`
- `public void setLevels(int levels)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerXpEvent.PickupXp

*class* `net.minecraftforge.event.entity.player.PlayerXpEvent.PickupXp`

This event is fired after the player collides with an experience orb, but before the player has been given the experience.
 It can be cancelled, and no further processing will be done.

Enclosing class: PlayerXpEvent

### Fields
- `private final ExperienceOrb orb`

### Methods
- `public ExperienceOrb getOrb()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## PlayerXpEvent.XpChange

*class* `net.minecraftforge.event.entity.player.PlayerXpEvent.XpChange`

This event is fired when the player's experience changes through the Player.giveExperiencePoints(int) method.
 It can be cancelled, and no further processing will be done.

Enclosing class: PlayerXpEvent

### Fields
- `private int amount`

### Methods
- `public int getAmount()`
- `public void setAmount(int amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## SleepingLocationCheckEvent

*class* `net.minecraftforge.event.entity.player.SleepingLocationCheckEvent`

This event is fired when game checks, if sleeping player should be still considered "in bed".

 Failing this check will cause player to wake up.

 This event has a result. Event.HasResult

 setResult(ALLOW) informs game that player is still "in bed"

 setResult(DEFAULT) causes game to check IForgeBlock.isBed(BlockState, BlockGetter, BlockPos, Entity) instead

### Fields
- `private final BlockPos sleepingLocation`

### Methods
- `public BlockPos getSleepingLocation()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## SleepingTimeCheckEvent

*class* `net.minecraftforge.event.entity.player.SleepingTimeCheckEvent`

This event is fired when the game checks if players can sleep at this time.

 Failing this check will cause sleeping players to wake up and prevent awake players from sleeping.

 This event has a result. Event.HasResult

 setResult(ALLOW) informs game that player can sleep at this time.

 setResult(DEFAULT) causes game to check !Level.isDay() instead.

### Fields
- `private final Optional<BlockPos> sleepingLocation`

### Methods
- `public Optional<BlockPos> getSleepingLocation()`
  Note that the sleeping location may be an approximated one.
  - returns: The player's sleeping location.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## TradeWithVillagerEvent

*class* `net.minecraftforge.event.entity.player.TradeWithVillagerEvent`

Fired when a player trades with an AbstractVillager.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical server.

### Fields
- `private final MerchantOffer offer`
- `private final AbstractVillager abstractVillager`

### Methods
- `public MerchantOffer getMerchantOffer()`
  Returns the MerchantOffer selected by the player to trade with.
  - returns: the MerchantOffer selected by the player to trade with
- `public AbstractVillager getAbstractVillager()`
  Returns the villager the player traded with.
  - returns: the villager the player traded with

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`
