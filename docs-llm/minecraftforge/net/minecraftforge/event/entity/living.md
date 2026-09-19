# net.minecraftforge.event.entity.living

- [AnimalTameEvent](#animaltameevent)
- [BabyEntitySpawnEvent](#babyentityspawnevent)
- [Class LivingChangeTargetEvent.LivingTargetType](#class-livingchangetargetevent.livingtargettype)
- [EnderManAngerEvent](#endermanangerevent)
- [LivingAttackEvent](#livingattackevent)
- [LivingBreatheEvent](#livingbreatheevent)
- [LivingChangeTargetEvent](#livingchangetargetevent)
- [LivingChangeTargetEvent.ILivingTargetType](#livingchangetargetevent.ilivingtargettype)
- [LivingConversionEvent](#livingconversionevent)
- [LivingConversionEvent.Post](#livingconversionevent.post)
- [LivingConversionEvent.Pre](#livingconversionevent.pre)
- [LivingDamageEvent](#livingdamageevent)
- [LivingDeathEvent](#livingdeathevent)
- [LivingDestroyBlockEvent](#livingdestroyblockevent)
- [LivingDropsEvent](#livingdropsevent)
- [LivingDrownEvent](#livingdrownevent)
- [LivingEntityUseItemEvent](#livingentityuseitemevent)
- [LivingEntityUseItemEvent.Finish](#livingentityuseitemevent.finish)
- [LivingEntityUseItemEvent.Start](#livingentityuseitemevent.start)
- [LivingEntityUseItemEvent.Stop](#livingentityuseitemevent.stop)
- [LivingEntityUseItemEvent.Tick](#livingentityuseitemevent.tick)
- [LivingEquipmentChangeEvent](#livingequipmentchangeevent)
- [LivingEvent](#livingevent)
- [LivingEvent.LivingJumpEvent](#livingevent.livingjumpevent)
- [LivingEvent.LivingTickEvent](#livingevent.livingtickevent)
- [LivingEvent.LivingVisibilityEvent](#livingevent.livingvisibilityevent)
- [LivingExperienceDropEvent](#livingexperiencedropevent)
- [LivingFallEvent](#livingfallevent)
- [LivingGetProjectileEvent](#livinggetprojectileevent)
- [LivingHealEvent](#livinghealevent)
- [LivingHurtEvent](#livinghurtevent)
- [LivingKnockBackEvent](#livingknockbackevent)
- [LivingMakeBrainEvent](#livingmakebrainevent)
- [LivingPackSizeEvent](#livingpacksizeevent)
- [LivingSwapItemsEvent](#livingswapitemsevent)
- [LivingSwapItemsEvent.Hands](#livingswapitemsevent.hands)
- [LivingUseTotemEvent](#livingusetotemevent)
- [LootingLevelEvent](#lootinglevelevent)
- [MobEffectEvent](#mobeffectevent)
- [MobEffectEvent.Added](#mobeffectevent.added)
- [MobEffectEvent.Applicable](#mobeffectevent.applicable)
- [MobEffectEvent.Expired](#mobeffectevent.expired)
- [MobEffectEvent.Remove](#mobeffectevent.remove)
- [MobSpawnEvent](#mobspawnevent)
- [MobSpawnEvent.AllowDespawn](#mobspawnevent.allowdespawn)
- [MobSpawnEvent.FinalizeSpawn](#mobspawnevent.finalizespawn)
- [MobSpawnEvent.PositionCheck](#mobspawnevent.positioncheck)
- [MobSpawnEvent.SpawnPlacementCheck](#mobspawnevent.spawnplacementcheck)
- [PotionColorCalculationEvent](#potioncolorcalculationevent)
- [ShieldBlockEvent](#shieldblockevent)
- [ZombieEvent](#zombieevent)
- [ZombieEvent.SummonAidEvent](#zombieevent.summonaidevent)
## AnimalTameEvent

*class* `net.minecraftforge.event.entity.living.AnimalTameEvent`

This event is fired when an Animal is tamed.

 It is fired via ForgeEventFactory.onAnimalTame(Animal, Player).
 Forge fires this event for applicable vanilla animals, mods need to fire it themselves.
 This event is Cancelable. If canceled, taming the animal will fail.
 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Animal animal`
- `private final Player tamer`

### Methods
- `public Animal getAnimal()`
- `public Player getTamer()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## BabyEntitySpawnEvent

*class* `net.minecraftforge.event.entity.living.BabyEntitySpawnEvent`

BabyEntitySpawnEvent is fired just before a baby entity is about to be spawned.

 Parents will have disengaged their relationship. Cancelable

 It is possible to change the child completely by using setChild(AgeableMob)

 This event is fired from Animal.spawnChildFromBreeding(ServerLevel, Animal) and
 Animal.spawnChildFromBreeding(ServerLevel, Animal)

 parentA contains the initiating parent entity.

 parentB contains the secondary parent entity.

 causedByPlayer contains the player responsible for the breading (if applicable).

 child contains the child that will be spawned.

 This event is Cancelable.

 If this event is canceled, the child Entity is not added to the world, and the parents

 will no longer attempt to mate.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Mob parentA`
- `private final Mob parentB`
- `private final Player causedByPlayer`
- `private AgeableMob child`

### Methods
- `public Mob getParentA()`
- `public Mob getParentB()`
- `@Nullable public @Nullable Player getCausedByPlayer()`
- `@Nullable public @Nullable AgeableMob getChild()`
- `public void setChild(AgeableMob proposedChild)`

## Class LivingChangeTargetEvent.LivingTargetType

*enum* `net.minecraftforge.event.entity.living.Class LivingChangeTargetEvent.LivingTargetType`

This enum contains two default living target types.

Enclosing class: LivingChangeTargetEvent

### Methods
- `public static LivingChangeTargetEvent.LivingTargetType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LivingChangeTargetEvent.LivingTargetType valueOf(String name)`
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

## EnderManAngerEvent

*class* `net.minecraftforge.event.entity.living.EnderManAngerEvent`

This event is fired on the forge bus before an Enderman detects that a player is looking at them.
 It will not be fired if the detection is already prevented by IForgeItem.isEnderMask(net.minecraft.world.item.ItemStack, net.minecraft.world.entity.player.Player, net.minecraft.world.entity.monster.EnderMan)

 This event is Cancelable.
 If this event is canceled, the Enderman will not target the player.

 This event does not have a Event.Result.

### Fields
- `private final Player player`

### Methods
- `public Player getPlayer()`
  The player that is being checked.
- `public EnderMan getEntity()`

## LivingAttackEvent

*class* `net.minecraftforge.event.entity.living.LivingAttackEvent`

LivingAttackEvent is fired when a living Entity is attacked.

 This event is fired whenever an Entity is attacked in
 LivingEntity.hurt(DamageSource, float) and
 Player.hurt(DamageSource, float).

 This event is fired via the ForgeHooks.onLivingAttack(LivingEntity, DamageSource, float).

 source contains the DamageSource of the attack.

 amount contains the amount of damage dealt to the entity.

 This event is Cancelable.

 If this event is canceled, the Entity does not take attack damage.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final DamageSource source`
- `private final float amount`

### Methods
- `public DamageSource getSource()`
- `public float getAmount()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingBreatheEvent

*class* `net.minecraftforge.event.entity.living.LivingBreatheEvent`

LivingBreatheEvent is fired whenever a living entity ticks.

 This event is fired via ForgeHooks.onLivingBreathe(LivingEntity, int, int).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on MinecraftForge.EVENT_BUS

### Fields
- `private boolean canBreathe`
- `private boolean canRefillAir`
- `private int consumeAirAmount`
- `private int refillAirAmount`

### Methods
- `public boolean canBreathe()`
  If the entity can breathe and canRefillAir() returns true, their air value will be increased by getRefillAirAmount().
  
   If the entity can breathe and canRefillAir() returns false, their air value will stay the same.
  
   If the entity cannot breathe, their air value will be reduced by getConsumeAirAmount().
  - returns: True if the entity can breathe
- `public void setCanBreathe(boolean canBreathe)`
  Sets if the entity can breathe or not.
  - param: canBreathe - The new value.
- `public boolean canRefillAir()`
  If the entity can breathe, canRefillAir() will be checked to see if their air value should be refilled.
  - returns: True if the entity can refill its air value
- `public void setCanRefillAir(boolean canRefillAir)`
  Sets if the entity can refill its air value or not.
  - param: canRefillAir - The new value.
- `public int getConsumeAirAmount()`
  - returns: The amount the entity's air supply will be reduced by if the entity cannot breathe.
- `public void setConsumeAirAmount(int consumeAirAmount)`
  Sets the new consumed air amount.
  - param: consumeAirAmount - The new value.
- `public int getRefillAirAmount()`
  - returns: The amount the entity's air supply will be increased by if the entity can breathe.
- `public void setRefillAirAmount(int refillAirAmount)`
  Sets the new refilled air amount.
  - param: refillAirAmount - The new value.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingChangeTargetEvent

*class* `net.minecraftforge.event.entity.living.LivingChangeTargetEvent`

This event allows you to change the target an entity has.

 This event is fired before LivingSetAttackTargetEvent.

 This event is fired via the ForgeHooks.onLivingChangeTarget(LivingEntity, LivingEntity, ILivingTargetType)

 getOriginalTarget() returns the target that should originally be set.
 The return value cannot be affected by calling setNewTarget(LivingEntity).

 getNewTarget() returns the new target that this entity will have.
 The return value can be affected by calling setNewTarget(LivingEntity).

 getTargetType() returns the target type that caused the change of targets.

 This event is Cancelable.

 If you cancel this event, the target will not be changed and it will stay the same.
 Cancelling this event will prevent LivingSetAttackTargetEvent from being posted.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final LivingChangeTargetEvent.ILivingTargetType targetType`
- `private final LivingEntity originalTarget`
- `private LivingEntity newTarget`

### Methods
- `public LivingEntity getNewTarget()`
  Returns the new target of this entity..
  - returns: the new target of this entity.
- `public void setNewTarget(LivingEntity newTarget)`
  Sets the new target this entity shall have.
  - param: newTarget - The new target of this entity.
- `public LivingChangeTargetEvent.ILivingTargetType getTargetType()`
  Returns the living target type..
  - returns: the living target type.
- `public LivingEntity getOriginalTarget()`
  Returns the original entity MC intended to use as a target before firing this event..
  - returns: the original entity MC intended to use as a target before firing this event.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingChangeTargetEvent.ILivingTargetType

*interface* `net.minecraftforge.event.entity.living.LivingChangeTargetEvent.ILivingTargetType`

A living target type indicates what kind of system caused a change of
 targets. For a list of default target types, take a look at
 LivingChangeTargetEvent.LivingTargetType.

Enclosing class: LivingChangeTargetEvent

## LivingConversionEvent

*class* `net.minecraftforge.event.entity.living.LivingConversionEvent`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingConversionEvent.Post

*class* `net.minecraftforge.event.entity.living.LivingConversionEvent.Post`

LivingConversionEvent.Post is triggered when an entity is replacing
 itself with another entity.
 The old living entity is likely to be removed right after this event.

Enclosing class: LivingConversionEvent

### Fields
- `private final LivingEntity outcome`

### Methods
- `public LivingEntity getOutcome()`
  Gets the finalized new entity (with all data like potion
   effect and equipments set)
  - returns: the finalized new entity

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingConversionEvent.Pre

*class* `net.minecraftforge.event.entity.living.LivingConversionEvent.Pre`

LivingConversionEvent.Pre is triggered when an entity is trying
 to replace itself with another entity

 This event may trigger every tick even if it was cancelled last tick
 for entities like Zombies and Hoglins. To prevent it, the conversion
 timer needs to be changed or reset

 This event is Cancelable
 If cancelled, the replacement will not occur

Enclosing class: LivingConversionEvent

### Fields
- `private final EntityType<? extends LivingEntity> outcome`
- `private final Consumer<Integer> timer`

### Methods
- `public EntityType<? extends LivingEntity> getOutcome()`
  Gets the entity type of the new entity this living entity is
   converting to
  - returns: the entity type of the new entity
- `public void setConversionTimer(int ticks)`
  Sets the conversion timer, by changing this it prevents the
   event being triggered every tick
   Do note the timer of some of the entities are increments, but
   some of them are decrements
   Not every conversion is applicable for this
  - param: ticks - timer ticks

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingDamageEvent

*class* `net.minecraftforge.event.entity.living.LivingDamageEvent`

LivingDamageEvent is fired just before damage is applied to entity.

 At this point armor, potion and absorption modifiers have already been applied to damage - this is FINAL value.

 Also note that appropriate resources (like armor durability and absorption extra hearths) have already been consumed.

 This event is fired whenever an Entity is damaged in
 LivingEntity#actuallyHurt(DamageSource, float) and
 Player#actuallyHurt(DamageSource, float).

 This event is fired via the ForgeHooks.onLivingDamage(LivingEntity, DamageSource, float).

 source contains the DamageSource that caused this Entity to be hurt.

 amount contains the final amount of damage that will be dealt to entity.

 This event is Cancelable.

 If this event is canceled, the Entity is not hurt. Used resources WILL NOT be restored.

 This event does not have a result. Event.HasResult

### Fields
- `private final DamageSource source`
- `private float amount`

### Methods
- `public DamageSource getSource()`
- `public float getAmount()`
- `public void setAmount(float amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingDeathEvent

*class* `net.minecraftforge.event.entity.living.LivingDeathEvent`

LivingDeathEvent is fired when an Entity dies.

 This event is fired whenever an Entity dies in
 LivingEntity.die(DamageSource),
 Player.die(DamageSource), and
 ServerPlayer.die(DamageSource).

 This event is fired via the ForgeHooks.onLivingDeath(LivingEntity, DamageSource).

 source contains the DamageSource that caused the entity to die.

 This event is Cancelable.

 If this event is canceled, the Entity does not die.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final DamageSource source`

### Methods
- `public DamageSource getSource()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingDestroyBlockEvent

*class* `net.minecraftforge.event.entity.living.LivingDestroyBlockEvent`

Fired when the ender dragon or wither attempts to destroy a block and when ever a zombie attempts to break a door. Basically a event version of IForgeBlock.canEntityDestroy(BlockState, BlockGetter, BlockPos, Entity)

 This event is Cancelable.

 If this event is canceled, the block will not be destroyed.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final BlockPos pos`
- `private final BlockState state`

### Methods
- `public BlockState getState()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingDropsEvent

*class* `net.minecraftforge.event.entity.living.LivingDropsEvent`

LivingDropsEvent is fired when an Entity's death causes dropped items to appear.

 This event is fired whenever an Entity dies and drops items in
 LivingEntity.die(DamageSource).

 This event is fired via the ForgeHooks.onLivingDrops(LivingEntity, DamageSource, Collection, int, boolean) .

 source contains the DamageSource that caused the drop to occur.

 drops contains the ArrayList of EntityItems that will be dropped.

 lootingLevel contains the amount of loot that will be dropped.

 recentlyHit determines whether the Entity doing the drop has recently been damaged.

 This event is Cancelable.

 If this event is canceled, the Entity does not drop anything.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final DamageSource source`
- `private final Collection<ItemEntity> drops`
- `private final int lootingLevel`
- `private final boolean recentlyHit`

### Methods
- `public DamageSource getSource()`
- `public Collection<ItemEntity> getDrops()`
- `public int getLootingLevel()`
- `public boolean isRecentlyHit()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingDrownEvent

*class* `net.minecraftforge.event.entity.living.LivingDrownEvent`

LivingDrownEvent is fired whenever a living entity can't breathe and its air supply is less than or equal to zero.

 This event is fired via ForgeHooks.onLivingBreathe(LivingEntity, int, int).

 This event is Cancelable. Effects of cancellation are noted in setCanceled(boolean).

 This event does not have a result.
 This event is fired on MinecraftForge.EVENT_BUS

### Fields
- `private boolean isDrowning`
- `private float damageAmount`
- `private int bubbleCount`

### Methods
- `public boolean isDrowning()`
  This method returns true if the entity is "actively" drowning.
  
   For most entities, this happens when their air supply reaches -20.
  
   When this is true, the entity will take damage, spawn particles, and reset their air supply to 0.
  - returns: If the entity is actively drowning.
- `public void setDrowning(boolean isDrowning)`
  Sets if the entity is actively drowning.
  - param: isDrowning - The new value.
- `public float getDamageAmount()`
  Gets the amount of drowning damage the entity would take.
  
   Drowning damage is only inflicted if the entity is actively drowning.
  
   For vanilla entities, the default amount of damage is 2 (1 heart).
  
   If the damage amount is less than or equal to zero, Entity.hurt(net.minecraft.world.damagesource.DamageSource, float) will not be called.
  - returns: The amount of damage that will be dealt to the entity when actively drowning.
- `public void setDamageAmount(float damageAmount)`
  Sets the amount of drowning damage that may be inflicted.
  - param: damageAmount - The new value.
- `public int getBubbleCount()`
  Gets the number of ParticleTypes.BUBBLE particles that would be spawned.
  
   Bubbles are only spawned if the entity is actively drowning.
  
   For vanilla entities, the default value is 8 particles.
  - returns: The number of bubble particles that will spawn when actively drowning.
- `public void setBubbleCount(int bubbleCount)`
  Sets the amount of bubbles that may be spawned.
  - param: bubbleCount - The new value.
- `public void setCanceled(boolean cancel)`
  Cancels the drowning event.
  
   Cancellation is mostly equivalent to setDrowning(boolean) with a value of false.
  
   However, this also incurs the usual side effects of cancellation.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEntityUseItemEvent

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`

### Fields
- `private final ItemStack item`
- `private int duration`

### Methods
- `@NotNull public @NotNull ItemStack getItem()`
- `public int getDuration()`
- `public void setDuration(int duration)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEntityUseItemEvent.Finish

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent.Finish`

Fired after an item has fully finished being used.
 The item has been notified that it was used, and the item/result stacks reflect after that state.
 This means that when this is fired for a Potion, the potion effect has already been applied.

 LivingEntityUseItemEvent.item is a copy of the item BEFORE it was used.

 If you wish to cancel those effects, you should cancel one of the above events.

 The result item stack is the stack that is placed in the player's inventory in replacement of the stack that is currently being used.

Enclosing class: LivingEntityUseItemEvent

### Fields
- `private ItemStack result`

### Methods
- `@NotNull public @NotNull ItemStack getResultStack()`
- `public void setResultStack(@NotNull  @NotNull ItemStack result)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`: `getDuration`, `getItem`, `setDuration`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

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
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

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
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEntityUseItemEvent.Tick

*class* `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent.Tick`

Fired every tick that a player is 'using' an item, see LivingEntityUseItemEvent.Start for info.

 Cancel the event, or set the duration to <= 0 to cause the player to stop using the item.

Enclosing class: LivingEntityUseItemEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEntityUseItemEvent`: `getDuration`, `getItem`, `setDuration`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEquipmentChangeEvent

*class* `net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent`

LivingEquipmentChangeEvent is fired when the Equipment of a Entity changes.

 This event is fired whenever changes in Equipment are detected in LivingEntity.tick().

 This also includes entities joining the World, as well as being cloned.

 This event is fired on server-side only.

 slot contains the affected EquipmentSlot.

 from contains the ItemStack that was equipped previously.

 to contains the ItemStack that is equipped now.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final EquipmentSlot slot`
- `private final ItemStack from`
- `private final ItemStack to`

### Methods
- `public EquipmentSlot getSlot()`
- `@NotNull public @NotNull ItemStack getFrom()`
- `@NotNull public @NotNull ItemStack getTo()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent`

LivingEvent is fired whenever an event involving a LivingEntity occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final LivingEntity livingEntity`

### Methods
- `public LivingEntity getEntity()`

## LivingEvent.LivingJumpEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent.LivingJumpEvent`

LivingJumpEvent is fired when an Entity jumps.

 This event is fired whenever an Entity jumps in
 LivingEntity#jumpFromGround(), MagmaCube#jumpFromGround(),
 and Horse#jumpFromGround().

 This event is fired via the ForgeHooks.onLivingJump(LivingEntity).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: LivingEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEvent.LivingTickEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent.LivingTickEvent`

LivingUpdateEvent is fired when a LivingEntity is ticked in LivingEntity.tick().

 This event is fired via the ForgeHooks.onLivingTick(LivingEntity).

 This event is Cancelable.

 If this event is canceled, the Entity does not update.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: LivingEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingEvent.LivingVisibilityEvent

*class* `net.minecraftforge.event.entity.living.LivingEvent.LivingVisibilityEvent`

Enclosing class: LivingEvent

### Fields
- `private double visibilityModifier`
- `@Nullable private final @Nullable Entity lookingEntity`

### Methods
- `public void modifyVisibility(double mod)`
  - param: mod - Is multiplied with the current modifier
- `public double getVisibilityModifier()`
  - returns: The current modifier
- `@Nullable public @Nullable Entity getLookingEntity()`
  - returns: The entity trying to see this LivingEntity, if available

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingExperienceDropEvent

*class* `net.minecraftforge.event.entity.living.LivingExperienceDropEvent`

Event for when an entity drops experience on its death, can be used to change
 the amount of experience points dropped or completely prevent dropping of experience
 by canceling the event.

### Fields
- `@Nullable private final @Nullable Player attackingPlayer`
- `private final int originalExperiencePoints`
- `private int droppedExperiencePoints`

### Methods
- `public int getDroppedExperience()`
- `public void setDroppedExperience(int droppedExperience)`
- `@Nullable public @Nullable Player getAttackingPlayer()`
  - returns: The player that last attacked the entity and thus caused the experience. This can be null, in case the player has since logged out.
- `public int getOriginalExperience()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingFallEvent

*class* `net.minecraftforge.event.entity.living.LivingFallEvent`

LivingFallEvent is fired when an Entity is set to be falling.

 This event is fired whenever an Entity is set to fall in
 LivingEntity.causeFallDamage(float, float, DamageSource).

 This event is fired via the ForgeHooks#onLivingFall(LivingEntity, float, float).

 distance contains the distance the Entity is to fall. If this event is canceled, this value is set to 0.0F.

 This event is Cancelable.

 If this event is canceled, the Entity does not fall.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private float distance`
- `private float damageMultiplier`

### Methods
- `public float getDistance()`
- `public void setDistance(float distance)`
- `public float getDamageMultiplier()`
- `public void setDamageMultiplier(float damageMultiplier)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingGetProjectileEvent

*class* `net.minecraftforge.event.entity.living.LivingGetProjectileEvent`

This event is fired when a living entity attempts to get a projectile with the
 LivingEntity.getProjectile(ItemStack) method. The item stack given is usually the item stack of a
 ProjectileWeaponItem and the item stack returned is usually the item stack of a
 Projectile.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final ItemStack projectileWeaponItemStack`
- `private ItemStack projectileItemStack`

### Methods
- `public ItemStack getProjectileWeaponItemStack()`
  - returns: The itemstack of the itrm that is looking for a projectile. With vanilla behavior, this usually returns
 an itemstack of a ProjectileWeaponItem, but it's possible for that to not be the
 case if modder uses a different implementation of LivingEntity.getProjectile(ItemStack).
- `public ItemStack getProjectileItemStack()`
  - returns: The itemstack of the projectile found. Initially this is set to the projectile found by vanilla
 behaviour, but it's possible for thatnot to be the case if a modder uses a different implementation of
 LivingEntity.getProjectile(ItemStack).
- `public void setProjectileItemStack(ItemStack projectileItemStack)`
  Sets the projectile itemstack to be used.
  
   If the entity is a player: whenever the projectile is fired/consumed the stack will be shrunk by
   one. To disable this behaviour you can copy the stack before giving it to the event. For bows, you can use
   ArrowLooseEvent to remove the arrow yourself.
  
   Be aware that since this event fires every time a living entity gets a projectile, whether or not its
   Entity.level is client-side, you will want to make a conditional to always set the item stack to
   what you'd want it to be to avoid client-server desyncs.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingHealEvent

*class* `net.minecraftforge.event.entity.living.LivingHealEvent`

LivingHealEvent is fired when an Entity is set to be healed.

 This event is fired whenever an Entity is healed in LivingEntity.heal(float)

 This event is fired via the ForgeEventFactory.onLivingHeal(LivingEntity, float).

 amount contains the amount of healing done to the Entity that was healed.

 This event is Cancelable.

 If this event is canceled, the Entity is not healed.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private float amount`

### Methods
- `public float getAmount()`
- `public void setAmount(float amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingHurtEvent

*class* `net.minecraftforge.event.entity.living.LivingHurtEvent`

LivingHurtEvent is fired when an Entity is set to be hurt.

 This event is fired whenever an Entity is hurt in
 LivingEntity#actuallyHurt(DamageSource, float) and
 Player#actuallyHurt(DamageSource, float).

 This event is fired via the ForgeHooks.onLivingHurt(LivingEntity, DamageSource, float).

 source contains the DamageSource that caused this Entity to be hurt.

 amount contains the amount of damage dealt to the Entity that was hurt.

 This event is Cancelable.

 If this event is canceled, the Entity is not hurt.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final DamageSource source`
- `private float amount`

### Methods
- `public DamageSource getSource()`
- `public float getAmount()`
- `public void setAmount(float amount)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingKnockBackEvent

*class* `net.minecraftforge.event.entity.living.LivingKnockBackEvent`

LivingKnockBackEvent is fired when a living entity is about to be knocked back.

 This event is fired whenever an Entity is knocked back in
 LivingEntity.hurt(DamageSource, float),
 LivingEntity#blockUsingShield(LivingEntity),
 Mob.doHurtTarget(Entity) and
 Player.attack(Entity)

 This event is fired via ForgeHooks.onLivingKnockBack(LivingEntity, float, double, double) .

 strength contains the strength of the knock back.

 ratioX contains the x ratio of the knock back.

 ratioZ contains the z ratio of the knock back.

 This event is Cancelable.

 If this event is canceled, the entity is not knocked back.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `protected float strength`
- `protected double ratioX`
- `protected double ratioZ`
- `protected final float originalStrength`
- `protected final double originalRatioX`
- `protected final double originalRatioZ`

### Methods
- `public float getStrength()`
- `public double getRatioX()`
- `public double getRatioZ()`
- `public float getOriginalStrength()`
- `public double getOriginalRatioX()`
- `public double getOriginalRatioZ()`
- `public void setStrength(float strength)`
- `public void setRatioX(double ratioX)`
- `public void setRatioZ(double ratioZ)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingMakeBrainEvent

*class* `net.minecraftforge.event.entity.living.LivingMakeBrainEvent`

LivingMakeBrainEvent is fired whenever a new Brain instance is created using LivingEntity.makeBrain(Dynamic).

 To access the internal BrainBuilder, call getTypedBrainBuilder(LivingEntity) using the downcasted LivingEntity obtained from LivingEvent.getEntity().

 The BrainBuilder will initially contain all the state found in the original Brain instance.

 After this event is posted, a fresh Brain instance will be created using the encapsulated state found in the BrainBuilder
 and replace the previously created Brain instance for the entity.

 This event is fired via the ForgeHooks.onLivingMakeBrain(LivingEntity, Brain, Dynamic).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final BrainBuilder<?> brainBuilder`

### Methods
- `public <E extends LivingEntity> BrainBuilder<E> getTypedBrainBuilder(E ignoredEntity)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingPackSizeEvent

*class* `net.minecraftforge.event.entity.living.LivingPackSizeEvent`

### Fields
- `private int maxPackSize`

### Methods
- `public int getMaxPackSize()`
  This event is fired when the spawning system determines the
   maximum amount of the selected entity that can spawn at the same
   time.
  
   If you set the result to 'ALLOW', it means that you want to return
   the value of maxPackSize as the maximum pack size for current entity.
- `public void setMaxPackSize(int maxPackSize)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingSwapItemsEvent

*class* `net.minecraftforge.event.entity.living.LivingSwapItemsEvent`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingSwapItemsEvent.Hands

*class* `net.minecraftforge.event.entity.living.LivingSwapItemsEvent.Hands`

This event is fired when a living entity is about to swap the items in their main and offhand.
 This event is executed in ServerGamePacketListenerImpl.handlePlayerAction(net.minecraft.network.protocol.game.ServerboundPlayerActionPacket)

 This event is cancellable, and does not have a result.

Enclosing class: LivingSwapItemsEvent

### Fields
- `private ItemStack toMainHand`
- `private ItemStack toOffHand`

### Methods
- `public ItemStack getItemSwappedToMainHand()`
  Gets the item that will be swapped to the main hand of the entity.
  - returns: The item that will be swapped to the main hand.
- `public ItemStack getItemSwappedToOffHand()`
  Gets the item that will be swapped to the offhand of the entity.
  - returns: The item that will be swapped to the offhand.
- `public void setItemSwappedToMainHand(ItemStack item)`
  Sets the item that will be swapped to the main hand of the entity.
  - param: item - The item to swap to the main hand.
- `public void setItemSwappedToOffHand(ItemStack item)`
  Sets the item that will be swapped to the offhand of the entity.
  - param: item - The item to swap to the offhand.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LivingUseTotemEvent

*class* `net.minecraftforge.event.entity.living.LivingUseTotemEvent`

Fired when an Entity attempts to use a totem to prevent its death.

 This event is cancellable, and does not have a result.
 If this event is cancelled, the totem will not prevent the entity's death.

 This event is fired on the Forge event bus,
 only on the logical server.

### Fields
- `private final DamageSource source`
- `private final ItemStack totem`
- `private final InteractionHand hand`

### Methods
- `public DamageSource getSource()`
  Returns the damage source that caused the entity to die.
  - returns: the damage source that caused the entity to die
- `public ItemStack getTotem()`
  Returns the totem of undying being used from the entity's inventory.
  - returns: the totem of undying being used from the entity's inventory
- `public InteractionHand getHandHolding()`
  Returns the hand holding the totem.
  - returns: the hand holding the totem

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## LootingLevelEvent

*class* `net.minecraftforge.event.entity.living.LootingLevelEvent`

### Fields
- `@Nullable private final @Nullable DamageSource damageSource`
- `private int lootingLevel`

### Methods
- `@Nullable public @Nullable DamageSource getDamageSource()`
- `public int getLootingLevel()`
- `public void setLootingLevel(int lootingLevel)`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## MobEffectEvent

*class* `net.minecraftforge.event.entity.living.MobEffectEvent`

This event is fired when an interaction between a LivingEntity and MobEffectInstance happens.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `@Nullable protected final @Nullable MobEffectInstance effectInstance`

### Methods
- `@Nullable public @Nullable MobEffectInstance getEffectInstance()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## MobEffectEvent.Added

*class* `net.minecraftforge.event.entity.living.MobEffectEvent.Added`

This event is fired when a new MobEffectInstance is added to an entity.
 This event is also fired if an entity already has the effect but with a different duration or amplifier.
 This event is not Cancelable.
 This event does not have a result.

Enclosing class: MobEffectEvent

### Fields
- `private final MobEffectInstance oldEffectInstance`
- `private final Entity source`

### Inherited fields
- from `net.minecraftforge.event.entity.living.MobEffectEvent`: `effectInstance`

### Methods
- `@NotNull public @NotNull MobEffectInstance getEffectInstance()`
  - returns: the added MobEffectInstance. This is the unmerged MobEffectInstance if the old MobEffectInstance is not null.
- `@Nullable public @Nullable MobEffectInstance getOldEffectInstance()`
  - returns: the old MobEffectInstance. This can be null if the entity did not have an effect of this kind before.
- `@Nullable public @Nullable Entity getEffectSource()`
  - returns: the entity source of the effect, or null if none exists

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## MobEffectEvent.Applicable

*class* `net.minecraftforge.event.entity.living.MobEffectEvent.Applicable`

This event is fired to check if a MobEffectInstance can be applied to an entity.
 This event is not Cancelable.
 This event has a result.

 ALLOW will apply this mob effect.
 DENY will not apply this mob effect.
 DEFAULT will run vanilla logic to determine if this mob effect is applicable in LivingEntity.canBeAffected(net.minecraft.world.effect.MobEffectInstance).

Enclosing class: MobEffectEvent

### Inherited fields
- from `net.minecraftforge.event.entity.living.MobEffectEvent`: `effectInstance`

### Methods
- `@NotNull public @NotNull MobEffectInstance getEffectInstance()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## MobEffectEvent.Expired

*class* `net.minecraftforge.event.entity.living.MobEffectEvent.Expired`

This event is fired when a MobEffectInstance expires on an entity.
 This event is not Cancelable.
 This event does not have a result.

Enclosing class: MobEffectEvent

### Inherited fields
- from `net.minecraftforge.event.entity.living.MobEffectEvent`: `effectInstance`

### Inherited methods
- from `net.minecraftforge.event.entity.living.MobEffectEvent`: `getEffectInstance`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## MobEffectEvent.Remove

*class* `net.minecraftforge.event.entity.living.MobEffectEvent.Remove`

This Event is fired when a MobEffect is about to get removed from an Entity.
 This Event is Cancelable. If canceled, the effect will not be removed.
 This Event does not have a result.

Enclosing class: MobEffectEvent

### Fields
- `private final MobEffect effect`

### Inherited fields
- from `net.minecraftforge.event.entity.living.MobEffectEvent`: `effectInstance`

### Methods
- `public MobEffect getEffect()`
  - returns: the MobEffectEvent which is being removed from the entity
- `@Nullable public @Nullable MobEffectInstance getEffectInstance()`
  - returns: the MobEffectInstance. In the remove event, this can be null if the entity does not have a MobEffect of the right type active.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## MobSpawnEvent

*class* `net.minecraftforge.event.entity.living.MobSpawnEvent`

This class holds all events relating to the entire flow of mob spawns.

 Currently, the events have the following flow for any given mob spawn:

 Before the spawn is attempted MobSpawnEvent.SpawnPlacementCheck is fired, to determine if the spawn may occur based on mob-specific rules.

 After the entity is created MobSpawnEvent.PositionCheck is fired, to determine if the selected position is legal for the entity.

 If both checks succeeded, MobSpawnEvent.FinalizeSpawn is fired, which performs initialization on the newly-spawned entity.

 Finally, if the spawn was not cancelled via MobSpawnEvent.FinalizeSpawn.setSpawnCancelled(boolean), then EntityJoinLevelEvent is fired as the entity enters the world.

 MobSpawnEvent.AllowDespawn is not related to the mob spawn event flow, as it fires when a despawn is attempted.

### Fields
- `private final ServerLevelAccessor level`
- `private final double x`
- `private final double y`
- `private final double z`

### Methods
- `public Mob getEntity()`
- `public ServerLevelAccessor getLevel()`
  - returns: The level relating to the mob spawn action
- `public double getX()`
  - returns: The x-coordinate relating to the mob spawn action
- `public double getY()`
  - returns: The y-coordinate relating to the mob spawn action
- `public double getZ()`
  - returns: The z-coordinate relating to the mob spawn action

## MobSpawnEvent.AllowDespawn

*class* `net.minecraftforge.event.entity.living.MobSpawnEvent.AllowDespawn`

This event is fired from Mob.checkDespawn().

 It fires once per tick per mob that is attempting to despawn.

 It is not fired if the mob is persistent (meaning it may not despawn).

 This event is not cancellable, but does have a result.
 Event.Result.DEFAULT indicates that default despawn mechanics should be used.
 Event.Result.ALLOW indicates that the mob should forcefully despawn.
 Event.Result.DENY indicates that the mob should forcefully stay spawned.

 This event is fired on the main Forge event bus,
 only on the logical server.

Enclosing class: MobSpawnEvent

### Inherited methods
- from `net.minecraftforge.event.entity.living.MobSpawnEvent`: `getEntity`, `getLevel`, `getX`, `getY`, `getZ`

## MobSpawnEvent.FinalizeSpawn

*class* `net.minecraftforge.event.entity.living.MobSpawnEvent.FinalizeSpawn`

This event is fired before Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) is called.

 This allows mods to control mob initialization.

 In vanilla code, this event is injected by a transformer and not via patch, so calls cannot be traced via call hierarchy (it is not source-visible).

 Canceling this event will result in Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) not being called, and the returned value always being null, instead of propagating the SpawnGroupData.

 The entity will still be spawned. If you want to prevent the spawn, use setSpawnCancelled(boolean), which will cause Forge to prevent the spawn.

 This event is fired on MinecraftForge.EVENT_BUS, and is only fired on the logical server.

Enclosing class: MobSpawnEvent

### Fields
- `private final MobSpawnType spawnType`
- `@Nullable private final @Nullable BaseSpawner spawner`
- `private DifficultyInstance difficulty`
- `@Nullable private @Nullable SpawnGroupData spawnData`
- `@Nullable private @Nullable CompoundTag spawnTag`

### Methods
- `public DifficultyInstance getDifficulty()`
  Retrieves the DifficultyInstance for the chunk where the mob is about to be spawned.
  - returns: The local difficulty instance
- `public void setDifficulty(DifficultyInstance inst)`
  Sets the difficulty instance for this event, which will be propagated to Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) unless cancelled.
   The difficulty instance controls how likely certain random effects are to occur, or if certain mob abilities are enabled.
  - param: inst - The new difficulty instance.
- `public MobSpawnType getSpawnType()`
  Retrieves the type of mob spawn that happened (the event that caused the spawn). The enum names are self-explanatory.
  - returns: The mob spawn type.
- `@Nullable public @Nullable SpawnGroupData getSpawnData()`
  Retrieves the SpawnGroupData for this entity. When spawning mobs in a loop, this group data is used for the entire group and impacts future spawns.
   This is how entities like horses ensure that the whole group spawns as a single variant. How this is used varies on a per-entity basis.
  - returns: The spawn group data.
- `public void setSpawnData(@Nullable  @Nullable SpawnGroupData data)`
  Sets the spawn data for this entity. If this event is cancelled, this value is not used, since Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) will not be called.
  - param: data - The new spawn data
- `@Nullable public @Nullable CompoundTag getSpawnTag()`
  This is the NBT data the entity was loaded from, if applicable. It is unknown if the entity has already been loaded from this data, or if it will be loaded later.
   Callers should not modify this data. If you need to change the data, you can create a copy, modify it, and set it via setSpawnTag(net.minecraft.nbt.CompoundTag)
  - returns: The spawn data this entity was or will be loaded from, if any.
- `public void setSpawnTag(@Nullable  @Nullable CompoundTag tag)`
  Sets the spawn data for this event, which will be propagated to Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) unless cancelled.
   The only vanilla mob known to use this tag for anything in finalize is tropical fish for setting the variant when spawned via bucket.
  - param: tag - The new spawn tag
- `@Nullable public @Nullable BaseSpawner getSpawner()`
  Retrieves the underlying BaseSpawner instance if this mob was created by a Mob Spawner of some form.
   This is always null unless getSpawnType() is MobSpawnType.SPAWNER, and may still be null even then.
  - returns: The BaseSpawner responsible for triggering the spawn, or null if none is available.
- `public void setSpawnCancelled(boolean cancel)`
  This method can be used to cancel the spawn of this mob.
   This method must be used if you want to block the spawn, as canceling the event only blocks the call to Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag).
   Note that if the spawn is cancelled, but the event is not, then Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) will still be called, but the entity will not be spawned.
   Usually that has no side effects, but callers should be aware.
  - param: cancel - If the spawn should be cancelled (or not).
- `public boolean isSpawnCancelled()`
  Returns the current spawn cancellation status, which can be changed via setSpawnCancelled(boolean).
  - returns: If this mob's spawn is cancelled or not.

### Inherited methods
- from `net.minecraftforge.event.entity.living.MobSpawnEvent`: `getEntity`, `getLevel`, `getX`, `getY`, `getZ`

## MobSpawnEvent.PositionCheck

*class* `net.minecraftforge.event.entity.living.MobSpawnEvent.PositionCheck`

This event is fired when a mob checks for a valid spawn position, after SpawnPlacements.checkSpawnRules(net.minecraft.world.entity.EntityType<T>, net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.entity.MobSpawnType, net.minecraft.core.BlockPos, net.minecraft.util.RandomSource) has been evaluated.

 Conditions validated here include the following:

 Obstruction - mobs inside blocks or fluids.
 Pathfinding - if the spawn block is valid for pathfinding.
 Sea Level - Ocelots check if the position is above sea level.
 Spawn Block - Ocelots check if the below block is grass or leaves.

 These checks are performed by the vanilla methods Mob.checkSpawnRules(net.minecraft.world.level.LevelAccessor, net.minecraft.world.entity.MobSpawnType) and Mob.checkSpawnObstruction(net.minecraft.world.level.LevelReader).

 The logical-and of both methods forms the default result of this event.

 This event has a result.

 To change the result of this event, use Event.setResult(net.minecraftforge.eventbus.api.Event.Result). Results are interpreted in the following manner:

 Allow - The position will be accepted, and the spawn process will continue.
 Default - The position will be accepted if Mob.checkSpawnRules(net.minecraft.world.level.LevelAccessor, net.minecraft.world.entity.MobSpawnType) and Mob.checkSpawnObstruction(net.minecraft.world.level.LevelReader) are both true.
 Deny - The position will not be accepted. The spawn process will abort, and further events will not be called.

 This event is fired on the main Forge event bus,
 only on the logical server.

Enclosing class: MobSpawnEvent

### Fields
- `@Nullable private final @Nullable BaseSpawner spawner`
- `private final MobSpawnType spawnType`

### Methods
- `@Nullable public @Nullable BaseSpawner getSpawner()`
  Retrieves the underlying BaseSpawner instance if this mob was created by a Mob Spawner of some form.
   This is always null unless getSpawnType() is MobSpawnType.SPAWNER, and may still be null even then.
  - returns: The BaseSpawner responsible for triggering the spawn, or null if none is available.
- `public MobSpawnType getSpawnType()`
  Retrieves the type of mob spawn that is happening.
  - returns: The mob spawn type.

### Inherited methods
- from `net.minecraftforge.event.entity.living.MobSpawnEvent`: `getEntity`, `getLevel`, `getX`, `getY`, `getZ`

## MobSpawnEvent.SpawnPlacementCheck

*class* `net.minecraftforge.event.entity.living.MobSpawnEvent.SpawnPlacementCheck`

This event is fired when Spawn Placements (aka Spawn Rules) are checked, before a mob attempts to spawn.

 Spawn Placement checks include light levels, slime chunks, grass blocks for animals, and others in the same vein.

 The purpose of this event is to permit runtime changes to any or all spawn placement logic without having to wrap the placement for each entity.

 This event has a result.

 To change the result of this event, use Event.setResult(net.minecraftforge.eventbus.api.Event.Result). Results are interpreted in the following manner:

 Allow - The check will succeed, and the spawn process will continue.
 Default - The value of the vanilla check will be used to determine success.
 Deny - The check will fail, and the spawn process will abort.

 This event is fired on the main Forge event bus,
 only on the logical server.

 This event is not fired for mob spawners which utilize CustomSpawnRules, as they do not check spawn placements.

Enclosing class: MobSpawnEvent

### Fields
- `private final EntityType<?> entityType`
- `private final ServerLevelAccessor level`
- `private final MobSpawnType spawnType`
- `private final BlockPos pos`
- `private final RandomSource random`
- `private final boolean defaultResult`

### Methods
- `public EntityType<?> getEntityType()`
  - returns: The type of entity that checks are being performed for.
- `public ServerLevelAccessor getLevel()`
  - returns: The level relating to the mob spawn action
- `public MobSpawnType getSpawnType()`
  Retrieves the type of mob spawn that is happening.
  - returns: The mob spawn type.
- `public BlockPos getPos()`
  - returns: The position where checks are being evaluated.
- `public RandomSource getRandom()`
  In all vanilla cases, this is equal to LevelAccessor.getRandom().
  - returns: The random source being used.
- `public boolean getDefaultResult()`
  The default vanilla result is useful if an additional check wants to force Event.Result.ALLOW only if the vanilla check would succeed.
  - returns: The result of the vanilla spawn placement check.

## PotionColorCalculationEvent

*class* `net.minecraftforge.event.entity.living.PotionColorCalculationEvent`

Fires after Potion Color Calculation.

 this event is not Cancelable

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private int color`
- `private boolean hideParticle`
- `private final Collection<MobEffectInstance> effectList`

### Methods
- `public int getColor()`
- `public void setColor(int color)`
- `public boolean areParticlesHidden()`
- `public void shouldHideParticles(boolean hideParticle)`
- `public Collection<MobEffectInstance> getEffects()`
  Note that returned list is unmodifiable.
  - returns: effects

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## ShieldBlockEvent

*class* `net.minecraftforge.event.entity.living.ShieldBlockEvent`

The ShieldBlockEvent is fired when an entity successfully blocks with a shield.

 Cancelling this event will have the same impact as if the shield was not eligible to block.

 The damage blocked cannot be set lower than zero or greater than the original value.

 Note: The shield item stack "should" be available from LivingEntity.getUseItem()
 at least for players.

### Fields
- `private final DamageSource source`
- `private final float originalBlocked`
- `private float dmgBlocked`
- `private boolean shieldTakesDamage`

### Methods
- `public DamageSource getDamageSource()`
  - returns: The damage source.
- `public float getOriginalBlockedDamage()`
  - returns: The original amount of damage blocked, which is the same as the original
 incoming damage value.
- `public float getBlockedDamage()`
  - returns: The current amount of damage blocked, as a result of this event.
- `public boolean shieldTakesDamage()`
  Controls if LivingEntity.hurtCurrentlyUsedShield(float) is called.
  - returns: If the shield item will take durability damage or not.
- `public void setBlockedDamage(float blocked)`
  Set how much damage is blocked by this action.
  
   Note that initially the blocked amount is the entire attack.
- `public void setShieldTakesDamage(boolean damage)`
  Set if the shield will take durability damage or not.

### Inherited methods
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntity`

## ZombieEvent

*class* `net.minecraftforge.event.entity.living.ZombieEvent`

ZombieEvent is fired whenever a zombie is spawned for aid.
 If a method utilizes this event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Zombie zombie`

### Methods
- `public Zombie getEntity()`

## ZombieEvent.SummonAidEvent

*class* `net.minecraftforge.event.entity.living.ZombieEvent.SummonAidEvent`

SummonAidEvent is fired when a Zombie Entity is summoned.
 This event is fired whenever a Zombie Entity is summoned in
 Zombie#actuallyHurt(DamageSource, float).

 This event is fired via the ForgeEventFactory.fireZombieSummonAid(Zombie, Level, int, int, int, LivingEntity, double).

 getCustomSummonedAid() remains null, but can be populated with a custom EntityZombie which will be spawned.
 getLevel() contains the world that this summoning is occurring in.
 getX() contains the x-coordinate at which this summoning event is occurring.
 getY() contains the y-coordinate at which this summoning event is occurring.
 getZ() contains the z-coordinate at which this summoning event is occurring.
 getAttacker() contains the living Entity that attacked and caused this event to fire.
 getSummonChance() contains the likelihood that a Zombie would successfully be summoned.

 This event is not Cancelable.

 This event has a result. Event.HasResult
 Event.Result.ALLOW Zombie is summoned.
 Event.Result.DENY Zombie is not summoned.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: ZombieEvent

### Fields
- `private Zombie customSummonedAid`
- `private final Level level`
- `private final int x`
- `private final int y`
- `private final int z`
- `private final LivingEntity attacker`
- `private final double summonChance`

### Methods
- `public Zombie getCustomSummonedAid()`
  Populate this field to have a custom zombie instead of a normal zombie summoned
- `public void setCustomSummonedAid(Zombie customSummonedAid)`
- `public Level getLevel()`
- `public int getX()`
- `public int getY()`
- `public int getZ()`
- `public LivingEntity getAttacker()`
- `public double getSummonChance()`

### Inherited methods
- from `net.minecraftforge.event.entity.living.ZombieEvent`: `getEntity`
