# net.minecraftforge.event.entity.living

- [AnimalTameEvent](#animaltameevent)
- [BabyEntitySpawnEvent](#babyentityspawnevent)
- [EnderTeleportEvent](#enderteleportevent)
- [LivingAttackEvent](#livingattackevent)
- [LivingDamageEvent](#livingdamageevent)
- [LivingDeathEvent](#livingdeathevent)
- [LivingDestroyBlockEvent](#livingdestroyblockevent)
- [LivingDropsEvent](#livingdropsevent)
- [LivingEntityUseItemEvent](#livingentityuseitemevent)
- [LivingEntityUseItemEvent.Finish](#livingentityuseitemevent.finish)
- [LivingEntityUseItemEvent.Start](#livingentityuseitemevent.start)
- [LivingEntityUseItemEvent.Stop](#livingentityuseitemevent.stop)
- [LivingEntityUseItemEvent.Tick](#livingentityuseitemevent.tick)
- [LivingEquipmentChangeEvent](#livingequipmentchangeevent)
- [LivingEvent](#livingevent)
- [LivingEvent.LivingJumpEvent](#livingevent.livingjumpevent)
- [LivingEvent.LivingUpdateEvent](#livingevent.livingupdateevent)
- [LivingExperienceDropEvent](#livingexperiencedropevent)
- [LivingFallEvent](#livingfallevent)
- [LivingHealEvent](#livinghealevent)
- [LivingHurtEvent](#livinghurtevent)
- [LivingKnockBackEvent](#livingknockbackevent)
- [LivingPackSizeEvent](#livingpacksizeevent)
- [LivingSetAttackTargetEvent](#livingsetattacktargetevent)
- [LivingSpawnEvent](#livingspawnevent)
- [LivingSpawnEvent.AllowDespawn](#livingspawnevent.allowdespawn)
- [LivingSpawnEvent.CheckSpawn](#livingspawnevent.checkspawn)
- [LivingSpawnEvent.SpecialSpawn](#livingspawnevent.specialspawn)
- [LootingLevelEvent](#lootinglevelevent)
- [PotionColorCalculationEvent](#potioncolorcalculationevent)
- [PotionEvent](#potionevent)
- [PotionEvent.PotionAddedEvent](#potionevent.potionaddedevent)
- [PotionEvent.PotionApplicableEvent](#potionevent.potionapplicableevent)
- [PotionEvent.PotionExpiryEvent](#potionevent.potionexpiryevent)
- [PotionEvent.PotionRemoveEvent](#potionevent.potionremoveevent)
- [ZombieEvent](#zombieevent)
- [ZombieEvent.SummonAidEvent](#zombieevent.summonaidevent)
## AnimalTameEvent

*class* `net.minecraftforge.event.entity.living.AnimalTameEvent`

This event is fired when an EntityAnimal is tamed.

 It is fired via ForgeEventFactory.onAnimalTame(EntityAnimal, EntityPlayer).
 Forge fires this event for applicable vanilla animals, mods need to fire it themselves.
 This event is Cancelable. If canceled, taming the animal will fail.
 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityAnimal getAnimal()`
- `public EntityPlayer getTamer()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BabyEntitySpawnEvent

*class* `net.minecraftforge.event.entity.living.BabyEntitySpawnEvent`

BabyEntitySpawnEvent is fired just before a baby entity is about to be spawned.

 Parents will have disengaged their relationship. @Cancelable

 It is possible to change the child completely by using setChild(EntityAgeable)

 This event is fired from EntityAIMate.spawnBaby() and EntityAIVillagerMate.giveBirth()

 parentA contains the initiating parent entity.

 parentB contains the secondary parent entity.

 causedByPlayer contains the player responsible for the breading (if applicable).

 child contains the child that will be spawned.

 This event is Cancelable.

 If this event is canceled, the child Entity is not added to the world, and the parents

 will no longer attempt to mate.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityLiving getParentA()`
- `public EntityLiving getParentB()`
- `public EntityPlayer getCausedByPlayer()`
- `public EntityAgeable getChild()`
- `public void setChild(EntityAgeable proposedChild)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EnderTeleportEvent

*class* `net.minecraftforge.event.entity.living.EnderTeleportEvent`

Event for when an Enderman/Shulker teleports or an ender pearl is used. Can be used to either modify the target position, or cancel the teleport outright.

### Methods
- `public double getTargetX()`
- `public void setTargetX(double targetX)`
- `public double getTargetY()`
- `public void setTargetY(double targetY)`
- `public double getTargetZ()`
- `public void setTargetZ(double targetZ)`
- `public float getAttackDamage()`
- `public void setAttackDamage(float attackDamage)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingAttackEvent

*class* `net.minecraftforge.event.entity.living.LivingAttackEvent`

LivingAttackEvent is fired when a living Entity is attacked.

 This event is fired whenever an Entity is attacked in
 EntityLivingBase.attackEntityFrom(DamageSource, float) and
 EntityPlayer.attackEntityFrom(DamageSource, float).

 This event is fired via the ForgeHooks.onLivingAttack(EntityLivingBase, DamageSource, float).

 source contains the DamageSource of the attack.

 amount contains the amount of damage dealt to the entity.

 This event is Cancelable.

 If this event is canceled, the Entity does not take attack damage.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public DamageSource getSource()`
- `public float getAmount()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingDamageEvent

*class* `net.minecraftforge.event.entity.living.LivingDamageEvent`

LivingDamageEvent is fired just before damage is applied to entity.

 At this point armor, potion and absorption modifiers have already been applied to damage - this is FINAL value.

 Also note that appropriate resources (like armor durability and absorption extra hearths) have already been consumed.

 This event is fired whenever an Entity is damaged in
 EntityLivingBase.damageEntity(DamageSource, float) and
 EntityPlayer.damageEntity(DamageSource, float).

 This event is fired via the ForgeHooks.onLivingDamage(EntityLivingBase, DamageSource, float).

 source contains the DamageSource that caused this Entity to be hurt.

 amount contains the final amount of damage that will be dealt to entity.

 This event is Cancelable.

 If this event is canceled, the Entity is not hurt. Used resources WILL NOT be restored.

 This event does not have a result. HasResult

### Methods
- `public DamageSource getSource()`
- `public float getAmount()`
- `public void setAmount(float amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingDeathEvent

*class* `net.minecraftforge.event.entity.living.LivingDeathEvent`

LivingDeathEvent is fired when an Entity dies.

 This event is fired whenever an Entity dies in
 EntityLivingBase.onDeath(DamageSource),
 EntityPlayer.onDeath(DamageSource), and
 EntityPlayerMP.onDeath(DamageSource).

 This event is fired via the ForgeHooks.onLivingDeath(EntityLivingBase, DamageSource).

 source contains the DamageSource that caused the entity to die.

 This event is Cancelable.

 If this event is canceled, the Entity does not die.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public DamageSource getSource()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingDestroyBlockEvent

*class* `net.minecraftforge.event.entity.living.LivingDestroyBlockEvent`

Fired when the ender dragon or wither attempts to destroy a block and when ever a zombie attempts to break a door. Basically a event version of Block.canEntityDestroy(IBlockState, IBlockAccess, BlockPos, Entity)

 This event is Cancelable.

 If this event is canceled, the block will not be destroyed.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public IBlockState getState()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingDropsEvent

*class* `net.minecraftforge.event.entity.living.LivingDropsEvent`

LivingDropsEvent is fired when an Entity's death causes dropped items to appear.

 This event is fired whenever an Entity dies and drops items in
 EntityLivingBase.onDeath(DamageSource).

 This event is fired via the ForgeHooks.onLivingDrops(EntityLivingBase, DamageSource, ArrayList, int, boolean).

 source contains the DamageSource that caused the drop to occur.

 drops contains the ArrayList of EntityItems that will be dropped.

 lootingLevel contains the amount of loot that will be dropped.

 recentlyHit determines whether the Entity doing the drop has recently been damaged.

 This event is Cancelable.

 If this event is canceled, the Entity does not drop anything.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public DamageSource getSource()`
- `public java.util.List<EntityItem> getDrops()`
- `public int getLootingLevel()`
- `public boolean isRecentlyHit()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEntityUseItemEvent

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`

### Methods
- `public ItemStack getItem()`
- `public int getDuration()`
- `public void setDuration(int duration)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEntityUseItemEvent.Finish

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent.Finish`

Fired after an item has fully finished being used.
 The item has been notified that it was used, and the item/result stacks reflect after that state.
 This means that when this is fired for a Potion, the potion effect has already been applied.

 LivingEntityUseItemEvent.item is a copy of the item BEFORE it was used.

 If you wish to cancel those effects, you should cancel one of the above events.

 The result item stack is the stack that is placed in the player's inventory in replacement of the stack that is currently being used.

Enclosing class: LivingEntityUseItemEvent

### Methods
- `public ItemStack getResultStack()`
- `public void setResultStack(ItemStack result)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`: `getDuration`, `getItem`, `setDuration`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEntityUseItemEvent.Start

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent.Start`

Fired when a player starts 'using' an item, typically when they hold right mouse.
 Examples:
 Drawing a bow
 Eating Food
 Drinking Potions/Milk
 Guarding with a sword

 Cancel the event, or set the duration or <= 0 to prevent it from processing.

Enclosing class: LivingEntityUseItemEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`: `getDuration`, `getItem`, `setDuration`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEntityUseItemEvent.Stop

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent.Stop`

Fired when a player stops using an item without the use duration timing out.
 Example:
 Stop eating 1/2 way through
 Stop defending with sword
 Stop drawing bow. This case would fire the arrow

 Duration on this event is how long the item had left in it's count down before 'finishing'

 Canceling this event will prevent the Item from being notified that it has stopped being used,
 The only vanilla item this would effect are bows, and it would cause them NOT to fire there arrow.

Enclosing class: LivingEntityUseItemEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`: `getDuration`, `getItem`, `setDuration`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEntityUseItemEvent.Tick

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent.Tick`

Fired every tick that a player is 'using' an item, see LivingEntityUseItemEvent.Start for info.

 Cancel the event, or set the duration or <= 0 to cause the player to stop using the item.

Enclosing class: LivingEntityUseItemEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`: `getDuration`, `getItem`, `setDuration`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEquipmentChangeEvent

*class* `net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent`

LivingEquipmentChangeEvent is fired when the Equipment of a Entity changes.

 This event is fired whenever changes in Equipment are detected in EntityLivingBase.onUpdate().

 This also includes entities joining the World, as well as being cloned.

 This event is fired on server-side only.

 slot contains the affected EntityEquipmentSlot.

 from contains the ItemStack that was equipped previously.

 to contains the ItemStack that is equipped now.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityEquipmentSlot getSlot()`
- `public ItemStack getFrom()`
- `public ItemStack getTo()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent`

LivingEvent is fired whenever an event involving Living entities occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityLivingBase getEntityLiving()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEvent.LivingJumpEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent.LivingJumpEvent`

LivingJumpEvent is fired when an Entity jumps.

 This event is fired whenever an Entity jumps in
 EntityLivingBase.jump(), EntityMagmaCube.jump(),
 and EntityLivingBase.jump().

 This event is fired via the ForgeHooks.onLivingJump(EntityLivingBase).

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: LivingEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingEvent.LivingUpdateEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent.LivingUpdateEvent`

LivingUpdateEvent is fired when an Entity is updated.

 This event is fired whenever an Entity is updated in
 EntityLivingBase.onUpdate().

 This event is fired via the ForgeHooks.onLivingUpdate(EntityLivingBase).

 This event is Cancelable.

 If this event is canceled, the Entity does not update.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: LivingEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingExperienceDropEvent

*class* `net.minecraftforge.event.entity.living.LivingExperienceDropEvent`

Event for when an entity drops experience on its death, can be used to change
 the amount of experience points dropped or completely prevent dropping of experience
 by canceling the event.

### Methods
- `public int getDroppedExperience()`
- `public void setDroppedExperience(int droppedExperience)`
- `public EntityPlayer getAttackingPlayer()`
- `public int getOriginalExperience()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingFallEvent

*class* `net.minecraftforge.event.entity.living.LivingFallEvent`

LivingFallEvent is fired when an Entity is set to be falling.

 This event is fired whenever an Entity is set to fall in
 EntityLivingBase.fall(float, float).

 This event is fired via the ForgeHooks.onLivingFall(EntityLivingBase, float, float).

 distance contains the distance the Entity is to fall. If this event is canceled, this value is set to 0.0F.

 This event is Cancelable.

 If this event is canceled, the Entity does not fall.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public float getDistance()`
- `public void setDistance(float distance)`
- `public float getDamageMultiplier()`
- `public void setDamageMultiplier(float damageMultiplier)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingHealEvent

*class* `net.minecraftforge.event.entity.living.LivingHealEvent`

LivingHealEvent is fired when an Entity is set to be healed.

 This event is fired whenever an Entity is healed in EntityLivingBase.heal(float)

 This event is fired via the ForgeEventFactory.onLivingHeal(EntityLivingBase, float).

 amount contains the amount of healing done to the Entity that was healed.

 This event is Cancelable.

 If this event is canceled, the Entity is not healed.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public float getAmount()`
- `public void setAmount(float amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingHurtEvent

*class* `net.minecraftforge.event.entity.living.LivingHurtEvent`

LivingHurtEvent is fired when an Entity is set to be hurt.

 This event is fired whenever an Entity is hurt in
 EntityLivingBase.damageEntity(DamageSource, float) and
 EntityPlayer.damageEntity(DamageSource, float).

 This event is fired via the ForgeHooks.onLivingHurt(EntityLivingBase, DamageSource, float).

 source contains the DamageSource that caused this Entity to be hurt.

 amount contains the amount of damage dealt to the Entity that was hurt.

 This event is Cancelable.

 If this event is canceled, the Entity is not hurt.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public DamageSource getSource()`
- `public float getAmount()`
- `public void setAmount(float amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingKnockBackEvent

*class* `net.minecraftforge.event.entity.living.LivingKnockBackEvent`

LivingKnockBackEvent is fired when a living entity is about to be knocked back.

 This event is fired whenever an Entity is knocked back in
 EntityLivingBase.attackEntityFrom(DamageSource, float),
 EntityLivingBase#blockWithShield(EntityLivingBase),
 EntityMob.attackEntityAsMob(Entity) and
 EntityPlayer.attackTargetEntityWithCurrentItem(Entity)

 This event is fired via ForgeHooks.onLivingKnockBack(EntityLivingBase, Entity, float, double, double).

 attacker contains the Entity that caused the knock back.

 strength contains the strength of the knock back.

 ratioX contains the x ratio of the knock back.

 ratioZ contains the z ratio of the knock back.

 This event is Cancelable.

 If this event is canceled, the entity is not knocked back.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `protected Entity attacker`
- `protected float strength`
- `protected double ratioX`
- `protected double ratioZ`
- `protected final Entity originalAttacker`
- `protected final float originalStrength`
- `protected final double originalRatioX`
- `protected final double originalRatioZ`

### Methods
- `public Entity getAttacker()`
- `public float getStrength()`
- `public double getRatioX()`
- `public double getRatioZ()`
- `public Entity getOriginalAttacker()`
- `public float getOriginalStrength()`
- `public double getOriginalRatioX()`
- `public double getOriginalRatioZ()`
- `public void setAttacker(Entity attacker)`
- `public void setStrength(float strength)`
- `public void setRatioX(double ratioX)`
- `public void setRatioZ(double ratioZ)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingPackSizeEvent

*class* `net.minecraftforge.event.entity.living.LivingPackSizeEvent`

### Methods
- `public int getMaxPackSize()`
  This event is fired when the spawning system determines the
   maximum amount of the selected entity that can spawn at the same
   time.
  
   If you set the result to 'ALLOW', it means that you want to return
   the value of maxPackSize as the maximum pack size for current entity.
- `public void setMaxPackSize(int maxPackSize)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingSetAttackTargetEvent

*class* `net.minecraftforge.event.entity.living.LivingSetAttackTargetEvent`

LivingSetAttackTargetEvent is fired when an Entity sets a target to attack.

 This event is fired whenever an Entity sets a target to attack in
 EntityLiving.setAttackTarget(EntityLivingBase).

 This event is fired via the ForgeHooks.onLivingSetAttackTarget(EntityLivingBase, EntityLivingBase).

 target contains the newly targeted Entity.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityLivingBase getTarget()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingSpawnEvent

*class* `net.minecraftforge.event.entity.living.LivingSpawnEvent`

LivingSpawnEvent is fired for any events associated with Living Enttnies spawn status.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 world contains the world in which this living Entity is being spawned.

 x contains the x-coordinate this entity is being spawned at.

 y contains the y-coordinate this entity is being spawned at.

 z contains the z-coordinate this entity is being spawned at.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public World getWorld()`
- `public float getX()`
- `public float getY()`
- `public float getZ()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingSpawnEvent.AllowDespawn

*class* `net.minecraftforge.event.entity.living.LivingSpawnEvent.AllowDespawn`

Fired each tick for despawnable mobs to allow control over despawning.
 Result#DEFAULT will pass the mob on to vanilla despawn mechanics.
 Result#ALLOW will force the mob to despawn.
 Result#DENY will force the mob to remain.
 This is fired every tick for every despawnable entity. Be efficient in your handlers.

 Note: this is not fired if the mob is definitely going to otherwise despawn. It is fired to check if
 the mob can be allowed to despawn. See EntityLiving.despawnEntity()

Enclosing class: LivingSpawnEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingSpawnEvent`: `getWorld`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingSpawnEvent.CheckSpawn

*class* `net.minecraftforge.event.entity.living.LivingSpawnEvent.CheckSpawn`

Fires before mob spawn events.

 Result is significant:
 DEFAULT: use vanilla spawn rules
 ALLOW: allow the spawn
 DENY: deny the spawn

Enclosing class: LivingSpawnEvent

### Methods
- `public boolean isSpawner()`
- `public MobSpawnerBaseLogic getSpawner()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingSpawnEvent`: `getWorld`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LivingSpawnEvent.SpecialSpawn

*class* `net.minecraftforge.event.entity.living.LivingSpawnEvent.SpecialSpawn`

SpecialSpawn is fired when an Entity is to be spawned.

 This allows you to do special inializers in the new entity.

 This event is fired via the ForgeEventFactory.doSpecialSpawn(EntityLiving, World, float, float, float).

 This event is Cancelable.

 If this event is canceled, the Entity is not spawned.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: LivingSpawnEvent

### Methods
- `public MobSpawnerBaseLogic getSpawner()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingSpawnEvent`: `getWorld`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LootingLevelEvent

*class* `net.minecraftforge.event.entity.living.LootingLevelEvent`

### Methods
- `public DamageSource getDamageSource()`
- `public int getLootingLevel()`
- `public void setLootingLevel(int lootingLevel)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PotionColorCalculationEvent

*class* `net.minecraftforge.event.entity.living.PotionColorCalculationEvent`

Fires after Potion Color Calculation.

 this event is not Cancelable

 This event is fired on the MinecraftForge#EVENT_BUS.

### Methods
- `public int getColor()`
- `public void setColor(int color)`
- `public boolean areParticlesHidden()`
- `public void shouldHideParticles(boolean hideParticle)`
- `public java.util.Collection<PotionEffect> getEffects()`
  Note that returned list is unmodifiable.
  - returns: effects

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PotionEvent

*class* `net.minecraftforge.event.entity.living.PotionEvent`

This Event and its subevents gets fired from EntityLivingBase on the MinecraftForge#EVENT_BUS.

### Fields
- `protected final PotionEffect effect`

### Methods
- `public PotionEffect getPotionEffect()`
  Retuns the PotionEffect.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PotionEvent.PotionAddedEvent

*class* `net.minecraftforge.event.entity.living.PotionEvent.PotionAddedEvent`

This Event is fired when a new Potion is added to the Entity. This is also fired if the Entity already has this effect but with different duration/level.
 This Event is not Cancelable
 This Event does not have a Result.

Enclosing class: PotionEvent

### Inherited fields
- from `net.minecraftforge.event.entity.living.PotionEvent`: `effect`

### Methods
- `public PotionEffect getPotionEffect()`
  Description copied from class: PotionEvent
  Retuns the PotionEffect.
  - returns: the added PotionEffect. This is the umerged PotionEffect if the old PotionEffect is not null.
- `public PotionEffect getOldPotionEffect()`
  - returns: the old PotionEffect. THis can be null if the entity did not have an effect of this kind before.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PotionEvent.PotionApplicableEvent

*class* `net.minecraftforge.event.entity.living.PotionEvent.PotionApplicableEvent`

This Event is fired to check if a Potion can get applied to an Entity.
 This Event is not Cancelable
 This Event has a result Event.HasResult.
 ALLOW will apply this potion effect.
 DENY will not apply this potion effect.
 DEFAULT will run vanilla logic to determine if this potion isApplicable.

Enclosing class: PotionEvent

### Inherited fields
- from `net.minecraftforge.event.entity.living.PotionEvent`: `effect`

### Methods
- `public PotionEffect getPotionEffect()`
  Description copied from class: PotionEvent
  Retuns the PotionEffect.
  - returns: the PotionEffect.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PotionEvent.PotionExpiryEvent

*class* `net.minecraftforge.event.entity.living.PotionEvent.PotionExpiryEvent`

This Event is fired when a Potion effect expires on an Entity.
 This Event is not Cancelable
 This Event does not have a Result.

Enclosing class: PotionEvent

### Inherited fields
- from `net.minecraftforge.event.entity.living.PotionEvent`: `effect`

### Inherited methods
- from `net.minecraftforge.event.entity.living.PotionEvent`: `getPotionEffect`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PotionEvent.PotionRemoveEvent

*class* `net.minecraftforge.event.entity.living.PotionEvent.PotionRemoveEvent`

This Event is fired when a Potion is about to get removed from an Entity.
 This Event is Cancelable.
 This Event does not have a result.

Enclosing class: PotionEvent

### Inherited fields
- from `net.minecraftforge.event.entity.living.PotionEvent`: `effect`

### Methods
- `public Potion getPotion()`
  - returns: the Potion which is tried to remove from the Entity.
- `public PotionEffect getPotionEffect()`
  Description copied from class: PotionEvent
  Retuns the PotionEffect.
  - returns: the PotionEffect. In the remove event this can be null if the Entity does not have a Potion of the right type active.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ZombieEvent

*class* `net.minecraftforge.event.entity.living.ZombieEvent`

ZombieEvent is fired whenever a zombie is spawned for aid.
 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EntityZombie getSummoner()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ZombieEvent.SummonAidEvent

*class* `net.minecraftforge.event.entity.living.ZombieEvent.SummonAidEvent`

SummonAidEvent is fired when a Zombie Entity is summoned.
 This event is fired whenever a Zombie Entity is summoned in
 EntityZombie.attackEntityFrom(DamageSource, float).

 This event is fired via the ForgeEventFactory.fireZombieSummonAid(EntityZombie, World, int, int, int, EntityLivingBase, double).

 customSummonedAid remains null, but can be populated with a custom EntityZombie which will be spawned.
 world contains the world that this summoning is occurring in.
 x contains the x-coordinate at which this summoning event is occurring.
 y contains the y-coordinate at which this summoning event is occurring.
 z contains the z-coordinate at which this summoning event is occurring.
 attacker contains the living Entity that attacked and caused this event to fire.
 summonChance contains the likelihood that a Zombie would successfully be summoned.

 This event is not Cancelable.

 This event has a result. Event.HasResult
 Result#ALLOW Zombie is summoned.
 Result#DENY Zombie is not summoned.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ZombieEvent

### Methods
- `public EntityZombie getCustomSummonedAid()`
  Populate this field to have a custom zombie instead of a normal zombie summoned
- `public void setCustomSummonedAid(EntityZombie customSummonedAid)`
- `public World getWorld()`
- `public int getX()`
- `public int getY()`
- `public int getZ()`
- `public EntityLivingBase getAttacker()`
- `public double getSummonChance()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.ZombieEvent`: `getSummoner`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
