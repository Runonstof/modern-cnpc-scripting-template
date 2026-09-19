# net.minecraftforge.event.entity.player

- [AdvancementEvent](#advancementevent)
- [AnvilRepairEvent](#anvilrepairevent)
- [ArrowLooseEvent](#arrowlooseevent)
- [ArrowNockEvent](#arrownockevent)
- [AttackEntityEvent](#attackentityevent)
- [BonemealEvent](#bonemealevent)
- [CriticalHitEvent](#criticalhitevent)
- [EntityItemPickupEvent](#entityitempickupevent)
- [FillBucketEvent](#fillbucketevent)
- [ItemFishedEvent](#itemfishedevent)
- [ItemTooltipEvent](#itemtooltipevent)
- [PlayerContainerEvent](#playercontainerevent)
- [PlayerContainerEvent.Close](#playercontainerevent.close)
- [PlayerContainerEvent.Open](#playercontainerevent.open)
- [PlayerDestroyItemEvent](#playerdestroyitemevent)
- [PlayerDropsEvent](#playerdropsevent)
- [PlayerEvent](#playerevent)
- [PlayerEvent.BreakSpeed](#playerevent.breakspeed)
- [PlayerEvent.Clone](#playerevent.clone)
- [PlayerEvent.HarvestCheck](#playerevent.harvestcheck)
- [PlayerEvent.LoadFromFile](#playerevent.loadfromfile)
- [PlayerEvent.NameFormat](#playerevent.nameformat)
- [PlayerEvent.SaveToFile](#playerevent.savetofile)
- [PlayerEvent.StartTracking](#playerevent.starttracking)
- [PlayerEvent.StopTracking](#playerevent.stoptracking)
- [PlayerEvent.Visibility](#playerevent.visibility)
- [PlayerFlyableFallEvent](#playerflyablefallevent)
- [PlayerInteractEvent](#playerinteractevent)
- [PlayerInteractEvent.EntityInteract](#playerinteractevent.entityinteract)
- [PlayerInteractEvent.EntityInteractSpecific](#playerinteractevent.entityinteractspecific)
- [PlayerInteractEvent.LeftClickBlock](#playerinteractevent.leftclickblock)
- [PlayerInteractEvent.LeftClickEmpty](#playerinteractevent.leftclickempty)
- [PlayerInteractEvent.RightClickBlock](#playerinteractevent.rightclickblock)
- [PlayerInteractEvent.RightClickEmpty](#playerinteractevent.rightclickempty)
- [PlayerInteractEvent.RightClickItem](#playerinteractevent.rightclickitem)
- [PlayerPickupXpEvent](#playerpickupxpevent)
- [PlayerSetSpawnEvent](#playersetspawnevent)
- [PlayerSleepInBedEvent](#playersleepinbedevent)
- [PlayerWakeUpEvent](#playerwakeupevent)
- [SleepingLocationCheckEvent](#sleepinglocationcheckevent)
- [SleepingTimeCheckEvent](#sleepingtimecheckevent)
- [UseHoeEvent](#usehoeevent)
## AdvancementEvent

*class* `net.minecraftforge.event.entity.player.AdvancementEvent`

This event is fired when a player gets an advancement.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public Advancement getAdvancement()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## AnvilRepairEvent

*class* `net.minecraftforge.event.entity.player.AnvilRepairEvent`

Fired when the player removes a "repaired" item from the Anvil's Output slot.

 breakChance specifies as a percentage the chance that the anvil will be "damaged" when used.

 ItemStacks are the inputs/output from the anvil. They cannot be edited.

### Methods
- `@Deprecated public ItemStack getLeft()` (deprecated)
  Deprecated.
  Deprecated in favour of getItemInput() - this is actually the output slot of the anvil
  - returns: the output slot
- `@Deprecated public ItemStack getRight()` (deprecated)
  Deprecated.
  Deprecated in favour of getIngredientInput()} - this is actually the first input slot of the anvil
  - returns: the first input slot
- `@Deprecated public ItemStack getOutput()` (deprecated)
  Deprecated.
  Deprecated in favour of getItemResult() - this is actually the second input slot of the anvil
  - returns: the second input slot
- `public ItemStack getItemResult()`
  Get the output result from the anvil
  - returns: the output
- `public ItemStack getItemInput()`
  Get the first item input into the anvil
  - returns: the first input slot
- `public ItemStack getIngredientInput()`
  Get the second item input into the anvil
  - returns: the second input slot
- `public float getBreakChance()`
- `public void setBreakChance(float breakChance)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ArrowLooseEvent

*class* `net.minecraftforge.event.entity.player.ArrowLooseEvent`

ArrowLooseEvent is fired when a player stops using a bow.

 This event is fired whenever a player stops using a bow in
 ItemBow.onPlayerStoppedUsing(ItemStack, World, EntityLivingBase, int).

 bow contains the ItemBow ItemStack that was used in this event.

 charge contains the value for how much the player had charged before stopping the shot.

 This event is Cancelable.

 If this event is canceled, the player does not stop using the bow.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public ItemStack getBow()`
- `public World getWorld()`
- `public boolean hasAmmo()`
- `public int getCharge()`
- `public void setCharge(int charge)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ArrowNockEvent

*class* `net.minecraftforge.event.entity.player.ArrowNockEvent`

ArrowNockEvent is fired when a player begins using a bow.

 This event is fired whenever a player begins using a bow in
 ItemBow.onItemRightClick(World, EntityPlayer, EnumHand).

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public ItemStack getBow()`
- `public World getWorld()`
- `public EnumHand getHand()`
- `public boolean hasAmmo()`
- `public ActionResult<ItemStack> getAction()`
- `public void setAction(ActionResult<ItemStack> action)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## AttackEntityEvent

*class* `net.minecraftforge.event.entity.player.AttackEntityEvent`

AttackEntityEvent is fired when a player attacks an Entity.

 This event is fired whenever a player attacks an Entity in
 EntityPlayer.attackTargetEntityWithCurrentItem(Entity).

 target contains the Entity that was damaged by the player.

 This event is Cancelable.

 If this event is canceled, the player does not attack the Entity.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public Entity getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BonemealEvent

*class* `net.minecraftforge.event.entity.player.BonemealEvent`

This event is called when a player attempts to use Bonemeal on a block.
 It can be canceled to completely prevent any further processing.

 You can also set the result to ALLOW to mark the event as processed
 and use up a bonemeal from the stack but do no further processing.

 setResult(ALLOW) is the same as the old setHandled()

### Methods
- `public World getWorld()`
- `public BlockPos getPos()`
- `public IBlockState getBlock()`
- `public EnumHand getHand()`
- `public ItemStack getStack()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

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
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityItemPickupEvent

*class* `net.minecraftforge.event.entity.player.EntityItemPickupEvent`

This event is called when a player collides with a EntityItem on the ground.
 The event can be canceled, and no further processing will be done.

 You can set the result of this event to ALLOW which will trigger the
 processing of achievements, FML's event, play the sound, and kill the
 entity if all the items are picked up.

 setResult(ALLOW) is the same as the old setHandled()

### Methods
- `public EntityItem getItem()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FillBucketEvent

*class* `net.minecraftforge.event.entity.player.FillBucketEvent`

This event is fired when a player attempts to use a Empty bucket, it
 can be canceled to completely prevent any further processing.

 If you set the result to 'ALLOW', it means that you have processed
 the event and wants the basic functionality of adding the new
 ItemStack to your inventory and reducing the stack size to process.
 setResult(ALLOW) is the same as the old setHandled();

### Methods
- `public ItemStack getEmptyBucket()`
- `public World getWorld()`
- `public RayTraceResult getTarget()`
- `public ItemStack getFilledBucket()`
- `public void setFilledBucket(ItemStack bucket)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ItemFishedEvent

*class* `net.minecraftforge.event.entity.player.ItemFishedEvent`

This event is called when a player fishes an item.

 This event is Cancelable
 Canceling the event will cause the player to receive no items at all.
 The hook will still take the damage specified

### Methods
- `public int getRodDamage()`
  Get the damage the rod will take.
  - returns: The damage the rod will take
- `public void damageRodBy(int rodDamage)`
  Specifies the amount of damage that the fishing rod should take.
   This is not added to the pre-existing damage to be taken.
  - param: rodDamage - The damage the rod will take. Must be nonnegative
- `public NonNullList<ItemStack> getDrops()`
  Use this to get the items the player will receive.
   You cannot use this to modify the drops the player will get.
   If you want to affect the loot, you should use LootTables.
- `public EntityFishHook getHookEntity()`
  Use this to stuff related to the hook itself, like the position of the bobber.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ItemTooltipEvent

*class* `net.minecraftforge.event.entity.player.ItemTooltipEvent`

### Methods
- `public ITooltipFlag getFlags()`
  Use to determine if the advanced information on item tooltips is being shown, toggled by F3+H.
- `public ItemStack getItemStack()`
  The ItemStack with the tooltip.
- `public java.util.List<java.lang.String> getToolTip()`
  The ItemStack tooltip.
- `public EntityPlayer getEntityPlayer()`
  This event is fired with a null player during startup when populating search trees for tooltips.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerContainerEvent

*class* `net.minecraftforge.event.entity.player.PlayerContainerEvent`

### Methods
- `public Container getContainer()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerContainerEvent.Close

*class* `net.minecraftforge.event.entity.player.PlayerContainerEvent.Close`

Enclosing class: PlayerContainerEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerContainerEvent`: `getContainer`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerContainerEvent.Open

*class* `net.minecraftforge.event.entity.player.PlayerContainerEvent.Open`

Enclosing class: PlayerContainerEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerContainerEvent`: `getContainer`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerDestroyItemEvent

*class* `net.minecraftforge.event.entity.player.PlayerDestroyItemEvent`

PlayerDestroyItemEvent is fired when a player destroys an item.

 This event is fired whenever a player destroys an item in
 PlayerControllerMP.onPlayerDestroyBlock(BlockPos),
 PlayerControllerMP.processRightClick(EntityPlayer, World, EnumHand),
 PlayerControllerMP.processRightClickBlock(EntityPlayerSP, WorldClient, BlockPos, EnumFacing, Vec3d, EnumHand),
 EntityPlayer.attackTargetEntityWithCurrentItem(Entity),
 EntityPlayer.damageShield(float),
 EntityPlayer.interactOn(Entity, EnumHand),
 ForgeHooks.getContainerItem(ItemStack),
 PlayerInteractionManager.processRightClick(EntityPlayer, World, ItemStack, EnumHand),
 PlayerInteractionManager.processRightClickBlock(EntityPlayer, World, ItemStack, EnumHand, BlockPos, EnumFacing, float, float, float)
 and PlayerInteractionManager.tryHarvestBlock(BlockPos).

 original contains the original ItemStack before the item was destroyed.

 (@link #hand) contains the hand that the current item was held in.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired from ForgeEventFactory.onPlayerDestroyItem(EntityPlayer, ItemStack, EnumHand).

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public ItemStack getOriginal()`
- `public EnumHand getHand()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerDropsEvent

*class* `net.minecraftforge.event.entity.player.PlayerDropsEvent`

Child class of LivingDropEvent that is fired specifically when a
 player dies. Canceling the event will prevent ALL drops from entering the
 world.

### Methods
- `public EntityPlayer getEntityPlayer()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingDropsEvent`: `getDrops`, `getLootingLevel`, `getSource`, `isRecentlyHit`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent

*class* `net.minecraftforge.event.entity.player.PlayerEvent`

PlayerEvent is fired whenever an event involving Living entities occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityPlayer getEntityPlayer()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.BreakSpeed

*class* `net.minecraftforge.event.entity.player.PlayerEvent.BreakSpeed`

BreakSpeed is fired when a player attempts to harvest a block.

 This event is fired whenever a player attempts to harvest a block in
 EntityPlayer.canHarvestBlock(IBlockState).

 This event is fired via the ForgeEventFactory.getBreakSpeed(EntityPlayer, IBlockState, float, BlockPos).

 state contains the block being broken.

 originalSpeed contains the original speed at which the player broke the block.

 newSpeed contains the newSpeed at which the player will break the block.

 pos contains the coordinates at which this event is occurring. Y value -1 means location is unknown.

 This event is Cancelable.

 If it is canceled, the player is unable to break the block.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Methods
- `public IBlockState getState()`
- `public float getOriginalSpeed()`
- `public float getNewSpeed()`
- `public void setNewSpeed(float newSpeed)`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.Clone

*class* `net.minecraftforge.event.entity.player.PlayerEvent.Clone`

Fired when the EntityPlayer is cloned, typically caused by the network sending a RESPAWN_PLAYER event.
 Either caused by death, or by traveling from the End to the overworld.

Enclosing class: PlayerEvent

### Methods
- `public EntityPlayer getOriginal()`
  The old EntityPlayer that this new entity is a clone of.
- `public boolean isWasDeath()`
  True if this event was fired because the player died.
   False if it was fired because the entity switched dimensions.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.HarvestCheck

*class* `net.minecraftforge.event.entity.player.PlayerEvent.HarvestCheck`

HarvestCheck is fired when a player attempts to harvest a block.

 This event is fired whenever a player attempts to harvest a block in
 EntityPlayer.canHarvestBlock(IBlockState).

 This event is fired via the ForgeEventFactory.doPlayerHarvestCheck(EntityPlayer, IBlockState, boolean).

 state contains the IBlockState that is being checked for harvesting.

 success contains the boolean value for whether the Block will be successfully harvested.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Methods
- `public IBlockState getTargetBlock()`
- `public boolean canHarvest()`
- `public void setCanHarvest(boolean success)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.LoadFromFile

*class* `net.minecraftforge.event.entity.player.PlayerEvent.LoadFromFile`

The player is being loaded from the world save. Note that the
 player won't have been added to the world yet. Intended to
 allow mods to load an additional file from the players directory
 containing additional mod related player data.

Enclosing class: PlayerEvent

### Methods
- `public java.io.File getPlayerFile(java.lang.String suffix)`
  Construct and return a recommended file for the supplied suffix
  - param: suffix - The suffix to use.
- `public java.io.File getPlayerDirectory()`
  The directory where player data is being stored. Use this
   to locate your mod additional file.
- `public java.lang.String getPlayerUUID()`
  The UUID is the standard for player related file storage.
   It is broken out here for convenience for quick file generation.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.NameFormat

*class* `net.minecraftforge.event.entity.player.PlayerEvent.NameFormat`

NameFormat is fired when a player's display name is retrieved.

 This event is fired whenever a player's name is retrieved in
 EntityPlayer.getDisplayName() or EntityPlayer.refreshDisplayName().

 This event is fired via the ForgeEventFactory.getPlayerDisplayName(EntityPlayer, String).

 username contains the username of the player.
 displayname contains the display name of the player.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayerEvent

### Methods
- `public java.lang.String getUsername()`
- `public java.lang.String getDisplayname()`
- `public void setDisplayname(java.lang.String displayname)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

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

### Methods
- `public java.io.File getPlayerFile(java.lang.String suffix)`
  Construct and return a recommended file for the supplied suffix
  - param: suffix - The suffix to use.
- `public java.io.File getPlayerDirectory()`
  The directory where player data is being stored. Use this
   to locate your mod additional file.
- `public java.lang.String getPlayerUUID()`
  The UUID is the standard for player related file storage.
   It is broken out here for convenience for quick file generation.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.StartTracking

*class* `net.minecraftforge.event.entity.player.PlayerEvent.StartTracking`

Fired when an Entity is started to be "tracked" by this player (the player receives updates about this entity, e.g. motion).

Enclosing class: PlayerEvent

### Methods
- `public Entity getTarget()`
  The Entity now being tracked.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.StopTracking

*class* `net.minecraftforge.event.entity.player.PlayerEvent.StopTracking`

Fired when an Entity is stopped to be "tracked" by this player (the player no longer receives updates about this entity, e.g. motion).

Enclosing class: PlayerEvent

### Methods
- `public Entity getTarget()`
  The Entity no longer being tracked.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerEvent.Visibility

*class* `net.minecraftforge.event.entity.player.PlayerEvent.Visibility`

Fired when the world checks if a player is near enough to be attacked by an entity.
 The resulting visibility modifier is multiplied by the one calculated by Minecraft (based on sneaking and more) and used to calculate the radius a player has to be in (targetDistance*modifier).
 This can also be used to increase the visibility of a player, if it was decreased by Minecraft or other mods. But the resulting value cannot be higher than the standard target distance.

Enclosing class: PlayerEvent

### Methods
- `public void modifyVisibility(double mod)`
  - param: mod - Is multiplied with the current modifier
- `public double getVisibilityModifier()`
  - returns: The current modifier

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerFlyableFallEvent

*class* `net.minecraftforge.event.entity.player.PlayerFlyableFallEvent`

Occurs when a player falls, but is able to fly. Doesn't need to be cancelable, this is mainly for notification purposes.

### Methods
- `public float getDistance()`
- `public void setDistance(float distance)`
- `public float getMultiplier()`
- `public void setMultiplier(float multiplier)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent`

PlayerInteractEvent is fired when a player interacts in some way.
 All subclasses are fired on MinecraftForge.EVENT_BUS.
 See the individual documentation on each subevent for more details.

### Methods
- `public EnumHand getHand()`
  - returns: The hand involved in this interaction. Will never be null.
- `public ItemStack getItemStack()`
  - returns: The itemstack involved in this interaction, ItemStack.EMPTY if the hand was empty.
- `public BlockPos getPos()`
  If the interaction was on an entity, will be a BlockPos centered on the entity.
   If the interaction was on a block, will be the position of that block.
   Otherwise, will be a BlockPos centered on the player.
   Will never be null.
  - returns: The position involved in this interaction.
- `public EnumFacing getFace()`
  - returns: The face involved in this interaction. For all non-block interactions, this will return null.
- `public World getWorld()`
  - returns: Convenience method to get the world of this interaction.
- `public Side getSide()`
  - returns: The effective, i.e. logical, side of this interaction. This will be Side.CLIENT on the client thread, and Side.SERVER on the server thread.
- `public EnumActionResult getCancellationResult()`
  - returns: The EnumActionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
 method of the event. By default, this is EnumActionResult.PASS, meaning cancelled events will cause
 the client to keep trying more interactions until something works.
- `public void setCancellationResult(EnumActionResult result)`
  Set the EnumActionResult that will be returned to vanilla if the event is cancelled, instead of calling the relevant
   method of the event.
   Note that this only has an effect on PlayerInteractEvent.RightClickBlock, PlayerInteractEvent.RightClickItem, PlayerInteractEvent.EntityInteract, and PlayerInteractEvent.EntityInteractSpecific.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.EntityInteract

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.EntityInteract`

This event is fired on both sides when the player right clicks an entity.
 It is responsible for all general entity interactions.

 This event is fired only if the result of the above PlayerInteractEvent.EntityInteractSpecific is not EnumActionResult.SUCCESS.
 This event's state affects whether Entity.processInitialInteract(net.minecraft.entity.player.EntityPlayer, net.minecraft.util.EnumHand) and Item.itemInteractionForEntity(net.minecraft.item.ItemStack, net.minecraft.entity.player.EntityPlayer, net.minecraft.entity.EntityLivingBase, net.minecraft.util.EnumHand) are called.

 Let result be EnumActionResult.SUCCESS if Entity.processInitialInteract(net.minecraft.entity.player.EntityPlayer, net.minecraft.util.EnumHand) or Item.itemInteractionForEntity(net.minecraft.item.ItemStack, net.minecraft.entity.player.EntityPlayer, net.minecraft.entity.EntityLivingBase, net.minecraft.util.EnumHand) return true,
 or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not EnumActionResult.SUCCESS, the client will then try PlayerInteractEvent.RightClickItem.

Enclosing class: PlayerInteractEvent

### Methods
- `public Entity getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.EntityInteractSpecific

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.EntityInteractSpecific`

This event is fired on both sides whenever a player right clicks an entity.

 "Interact at" is an interact where the local vector (which part of the entity you clicked) is known.
 The state of this event affects whether Entity.applyPlayerInteraction(net.minecraft.entity.player.EntityPlayer, net.minecraft.util.math.Vec3d, net.minecraft.util.EnumHand) is called.

 Let result be the return value of Entity.applyPlayerInteraction(net.minecraft.entity.player.EntityPlayer, net.minecraft.util.math.Vec3d, net.minecraft.util.EnumHand), or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not EnumActionResult.SUCCESS, the client will then try PlayerInteractEvent.EntityInteract.

Enclosing class: PlayerInteractEvent

### Methods
- `public Vec3d getLocalPos()`
  Returns the local interaction position. This is a 3D vector, where (0, 0, 0) is centered exactly at the
   center of the entity's bounding box at their feet. This means the X and Z values will be in the range
   [-width / 2, width / 2] while Y values will be in the range [0, height]
  - returns: The local position
- `public Entity getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.LeftClickBlock

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.LeftClickBlock`

This event is fired when a player left clicks while targeting a block.
 This event controls which of Block.onBlockClicked(net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.entity.player.EntityPlayer) and/or the item harvesting methods will be called
 Canceling the event will cause none of the above noted methods to be called.
 There are various results to this event, see the getters below.

 Note that if the event is canceled and the player holds down left mouse, the event will continue to fire.
 This is due to how vanilla calls the left click handler methods.

 Also note that creative mode directly breaks the block without running any other logic.
 Therefore, in creative mode, setUseBlock(net.minecraftforge.fml.common.eventhandler.Event.Result) and setUseItem(net.minecraftforge.fml.common.eventhandler.Event.Result) have no effect.

Enclosing class: PlayerInteractEvent

### Methods
- `public Vec3d getHitVec()`
  - returns: The local hit vector of this click
- `public Event.Result getUseBlock()`
  - returns: If Block.onBlockClicked(net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.entity.player.EntityPlayer) should be called. Changing this has no effect in creative mode
- `public Event.Result getUseItem()`
  - returns: If the block should be attempted to be mined with the current item. Changing this has no effect in creative mode
- `public void setUseBlock(Event.Result triggerBlock)`
- `public void setUseItem(Event.Result triggerItem)`
- `public void setCanceled(boolean canceled)`
  Description copied from class: Event
  Sets the cancel state of this event. Note, not all events are cancelable, and any attempt to
   invoke this method on an event that is not cancelable (as determined by Event.isCancelable()
   will result in an UnsupportedOperationException.
  
   The functionality of setting the canceled state is defined on a per-event bases.
  - param: canceled - The new canceled value

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.LeftClickEmpty

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.LeftClickEmpty`

This event is fired on the client side when the player left clicks empty space with any ItemStack.
 The server is not aware of when the client left clicks empty space, you will need to tell the server yourself.
 This event cannot be canceled.

Enclosing class: PlayerInteractEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.RightClickBlock

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.RightClickBlock`

This event is fired on both sides whenever the player right clicks while targeting a block.
 This event controls which of Block.onBlockActivated(net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.block.state.IBlockState, net.minecraft.entity.player.EntityPlayer, net.minecraft.util.EnumHand, net.minecraft.util.EnumFacing, float, float, float) and/or Item.onItemUse(net.minecraft.entity.player.EntityPlayer, net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.util.EnumHand, net.minecraft.util.EnumFacing, float, float, float)
 will be called after Item.onItemUseFirst(net.minecraft.entity.player.EntityPlayer, net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.util.EnumFacing, float, float, float, net.minecraft.util.EnumHand) is called.
 Canceling the event will cause none of the above three to be called

 Let result be a return value of the above three methods, or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not EnumActionResult.SUCCESS, the client will then try PlayerInteractEvent.RightClickItem.

 There are various results to this event, see the getters below.
 Note that handling things differently on the client vs server may cause desynchronizations!

Enclosing class: PlayerInteractEvent

### Methods
- `public Vec3d getHitVec()`
  - returns: The hit vector of this click
- `public Event.Result getUseBlock()`
  - returns: If Block.onBlockActivated(net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.block.state.IBlockState, net.minecraft.entity.player.EntityPlayer, net.minecraft.util.EnumHand, net.minecraft.util.EnumFacing, float, float, float) should be called
- `public Event.Result getUseItem()`
  - returns: If Item.onItemUseFirst(net.minecraft.entity.player.EntityPlayer, net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.util.EnumFacing, float, float, float, net.minecraft.util.EnumHand) and Item.onItemUse(net.minecraft.entity.player.EntityPlayer, net.minecraft.world.World, net.minecraft.util.math.BlockPos, net.minecraft.util.EnumHand, net.minecraft.util.EnumFacing, float, float, float) should be called
- `public void setUseBlock(Event.Result triggerBlock)`
  DENY: Block will never be used.
   DEFAULT: Default behaviour (sneak will not use block, unless all items return true in Item.doesSneakBypassUse(net.minecraft.item.ItemStack, net.minecraft.world.IBlockAccess, net.minecraft.util.math.BlockPos, net.minecraft.entity.player.EntityPlayer)).
   ALLOW: Block will always be used, regardless of sneaking and doesSneakBypassUse.
- `public void setUseItem(Event.Result triggerItem)`
  DENY: The item will never be used.
   DEFAULT: The item will be used if the block fails.
   ALLOW: The item will always be used.
- `public void setCanceled(boolean canceled)`
  Description copied from class: Event
  Sets the cancel state of this event. Note, not all events are cancelable, and any attempt to
   invoke this method on an event that is not cancelable (as determined by Event.isCancelable()
   will result in an UnsupportedOperationException.
  
   The functionality of setting the canceled state is defined on a per-event bases.
  - param: canceled - The new canceled value

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.RightClickEmpty

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.RightClickEmpty`

This event is fired on the client side when the player right clicks empty space with an empty hand.
 The server is not aware of when the client right clicks empty space with an empty hand, you will need to tell the server yourself.
 This event cannot be canceled.

Enclosing class: PlayerInteractEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerInteractEvent.RightClickItem

*class* `net.minecraftforge.event.entity.player.PlayerInteractEvent.RightClickItem`

This event is fired on both sides before the player triggers Item.onItemRightClick(net.minecraft.world.World, net.minecraft.entity.player.EntityPlayer, net.minecraft.util.EnumHand).
 Note that this is NOT fired if the player is targeting a block PlayerInteractEvent.RightClickBlock or entity PlayerInteractEvent.EntityInteract PlayerInteractEvent.EntityInteractSpecific.

 Let result be the return value of Item.onItemRightClick(net.minecraft.world.World, net.minecraft.entity.player.EntityPlayer, net.minecraft.util.EnumHand), or PlayerInteractEvent.cancellationResult if the event is cancelled.
 If we are on the client and result is not EnumActionResult.SUCCESS, the client will then continue to other hands.

Enclosing class: PlayerInteractEvent

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerInteractEvent`: `getCancellationResult`, `getFace`, `getHand`, `getItemStack`, `getPos`, `getSide`, `getWorld`, `setCancellationResult`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerPickupXpEvent

*class* `net.minecraftforge.event.entity.player.PlayerPickupXpEvent`

This event is called when a player collides with a EntityXPOrb on the ground.
 The event can be canceled, and no further processing will be done.

### Methods
- `public EntityXPOrb getOrb()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerSetSpawnEvent

*class* `net.minecraftforge.event.entity.player.PlayerSetSpawnEvent`

### Methods
- `public boolean isForced()`
  This event is called before a player's spawn point is changed.
   The event can be canceled, and no further processing will be done.
- `public BlockPos getNewSpawn()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerSleepInBedEvent

*class* `net.minecraftforge.event.entity.player.PlayerSleepInBedEvent`

PlayerSleepInBedEvent is fired when a player sleeps in a bed.

 This event is fired whenever a player sleeps in a bed in
 EntityPlayer.trySleep(BlockPos).

 result contains whether the player is able to sleep.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityPlayer.SleepResult getResultStatus()`
- `public void setResult(EntityPlayer.SleepResult result)`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerWakeUpEvent

*class* `net.minecraftforge.event.entity.player.PlayerWakeUpEvent`

This event is fired when the player is waking up.

 This is merely for purposes of listening for this to happen.

 There is nothing that can be manipulated with this event.

### Methods
- `public boolean wakeImmediately()`
  Used for the 'wake up animation'.
   This is false if the player is considered 'sleepy' and the overlay should slowly fade away.
- `public boolean updateWorld()`
  Indicates if the server should be notified of sleeping changes.
   This will only be false if the server is considered 'up to date' already, because, for example, it initiated the call.
- `public boolean shouldSetSpawn()`
  Indicates if the player's sleep was considered successful.
   In vanilla, this is used to determine if the spawn chunk is to be set to the bed's position.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SleepingLocationCheckEvent

*class* `net.minecraftforge.event.entity.player.SleepingLocationCheckEvent`

This event is fired when game checks, if sleeping player should be still considered "in bed".

 Failing this check will cause player to wake up.

 This event has a result. Event.HasResult

 setResult(ALLOW) informs game that player is still "in bed"

 setResult(DEFAULT) causes game to check Block.isBed(IBlockState, IBlockAccess, BlockPos, Entity) instead

### Methods
- `public BlockPos getSleepingLocation()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SleepingTimeCheckEvent

*class* `net.minecraftforge.event.entity.player.SleepingTimeCheckEvent`

This event is fired when the game checks if players can sleep at this time.

 Failing this check will cause sleeping players to wake up and prevent awake players from sleeping.

 This event has a result. Event.HasResult

 setResult(ALLOW) informs game that player can sleep at this time.

 setResult(DEFAULT) causes game to check !World.isDaytime() instead.

### Methods
- `public BlockPos getSleepingLocation()`
  Note that the sleeping location may be an approximated one.
  - returns: The player's sleeping location.

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## UseHoeEvent

*class* `net.minecraftforge.event.entity.player.UseHoeEvent`

This event is fired when a player attempts to use a Hoe on a block, it
 can be canceled to completely prevent any further processing.

 You can also set the result to ALLOW to mark the event as processed
 and damage the hoe.

 setResult(ALLOW) is the same as the old setHandled();

### Methods
- `public ItemStack getCurrent()`
- `public World getWorld()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
