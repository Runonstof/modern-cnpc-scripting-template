# net.minecraftforge.event.entity

- [Class ProjectileImpactEvent.ImpactResult](#class-projectileimpactevent.impactresult)
- [Class SpawnPlacementRegisterEvent.Operation](#class-spawnplacementregisterevent.operation)
- [EntityAttributeCreationEvent](#entityattributecreationevent)
- [EntityAttributeModificationEvent](#entityattributemodificationevent)
- [EntityEvent](#entityevent)
- [EntityEvent.EnteringSection](#entityevent.enteringsection)
- [EntityEvent.EntityConstructing](#entityevent.entityconstructing)
- [EntityJoinLevelEvent](#entityjoinlevelevent)
- [EntityLeaveLevelEvent](#entityleavelevelevent)
- [EntityMobGriefingEvent](#entitymobgriefingevent)
- [EntityMountEvent](#entitymountevent)
- [EntityStruckByLightningEvent](#entitystruckbylightningevent)
- [EntityTeleportEvent](#entityteleportevent)
- [EntityTeleportEvent.ChorusFruit](#entityteleportevent.chorusfruit)
- [EntityTeleportEvent.EnderEntity](#entityteleportevent.enderentity)
- [EntityTeleportEvent.EnderPearl](#entityteleportevent.enderpearl)
- [EntityTeleportEvent.SpreadPlayersCommand](#entityteleportevent.spreadplayerscommand)
- [EntityTeleportEvent.TeleportCommand](#entityteleportevent.teleportcommand)
- [EntityTravelToDimensionEvent](#entitytraveltodimensionevent)
- [ProjectileImpactEvent](#projectileimpactevent)
- [SpawnPlacementRegisterEvent](#spawnplacementregisterevent)
- [SpawnPlacementRegisterEvent.MergedSpawnPredicate](#spawnplacementregisterevent.mergedspawnpredicate)
## Class ProjectileImpactEvent.ImpactResult

*enum* `net.minecraftforge.event.entity.Class ProjectileImpactEvent.ImpactResult`

Enclosing class: ProjectileImpactEvent

### Methods
- `public static ProjectileImpactEvent.ImpactResult[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ProjectileImpactEvent.ImpactResult valueOf(String name)`
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

## Class SpawnPlacementRegisterEvent.Operation

*enum* `net.minecraftforge.event.entity.Class SpawnPlacementRegisterEvent.Operation`

Enclosing class: SpawnPlacementRegisterEvent

### Methods
- `public static SpawnPlacementRegisterEvent.Operation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SpawnPlacementRegisterEvent.Operation valueOf(String name)`
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

## EntityAttributeCreationEvent

*class* `net.minecraftforge.event.entity.EntityAttributeCreationEvent`

EntityAttributeCreationEvent.

 Use this event to register attributes for your own EntityTypes.
 This event is fired after registration and before common setup.

 Fired on the Mod bus IModBusEvent.

### Fields
- `private final Map<EntityType<? extends LivingEntity>,AttributeSupplier> map`

### Methods
- `public void put(EntityType<? extends LivingEntity> entity,  AttributeSupplier map)`

## EntityAttributeModificationEvent

*class* `net.minecraftforge.event.entity.EntityAttributeModificationEvent`

EntityAttributeModificationEvent.

 Use this event to add attributes to existing entity types.
 This event is fired after registration and before common setup, and after EntityAttributeCreationEvent

 Fired on the Mod bus IModBusEvent.

### Fields
- `private final Map<EntityType<? extends LivingEntity>,AttributeSupplier.Builder> entityAttributes`
- `private final List<EntityType<? extends LivingEntity>> entityTypes`

### Methods
- `public void add(EntityType<? extends LivingEntity> entityType,  Attribute attribute,  double value)`
- `public void add(EntityType<? extends LivingEntity> entityType,  Attribute attribute)`
- `public boolean has(EntityType<? extends LivingEntity> entityType,  Attribute attribute)`
- `public List<EntityType<? extends LivingEntity>> getTypes()`

## EntityEvent

*class* `net.minecraftforge.event.entity.EntityEvent`

EntityEvent is fired when an event involving any Entity occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 entity contains the entity that caused this event to occur.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Entity entity`

### Methods
- `public Entity getEntity()`

## EntityEvent.EnteringSection

*class* `net.minecraftforge.event.entity.EntityEvent.EnteringSection`

This event is fired on server and client after an Entity has entered a different section.

 Sections are 16x16x16 block grids of the world.

 This event does not fire when a new entity is spawned, only when an entity moves from one section to another one.
 Use EntityJoinLevelEvent to detect new entities joining the world.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: EntityEvent

### Fields
- `private final long packedOldPos`
- `private final long packedNewPos`

### Methods
- `public long getPackedOldPos()`
  A packed version of the old section's position. This is to be used with the various methods in SectionPos,
   such as SectionPos.of(long) or SectionPos.x(long) to avoid allocation.
  - returns: the packed position of the old section
- `public long getPackedNewPos()`
  A packed version of the new section's position. This is to be used with the various methods in SectionPos,
   such as SectionPos.of(long) or SectionPos.x(long) to avoid allocation.
  - returns: the packed position of the new section
- `public SectionPos getOldPos()`
  - returns: the position of the old section
- `public SectionPos getNewPos()`
  - returns: the position of the new section
- `public boolean didChunkChange()`
  Whether the chunk has changed as part of this event. If this method returns false, only the Y position of the
   section has changed.

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityEvent.EntityConstructing

*class* `net.minecraftforge.event.entity.EntityEvent.EntityConstructing`

EntityConstructing is fired when an Entity is being created.

 This event is fired within the constructor of the Entity.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: EntityEvent

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityJoinLevelEvent

*class* `net.minecraftforge.event.entity.EntityJoinLevelEvent`

This event is fired whenever an Entity joins a Level.
 This event is fired whenever an entity is added to a level in LevelWriter.addFreshEntity(Entity)
 and PersistentEntitySectionManager#addNewEntity(Entity, boolean).

 Note: This event may be called before the underlying LevelChunk is promoted to ChunkStatus.FULL.
 You will cause chunk loading deadlocks if you do not delay your world interactions.

 This event is cancellable and does not have a result.
 If the event is canceled, the entity will not be added to the level.

 This event is fired on the main Forge event bus
 on both logical sides.

### Fields
- `private final Level level`
- `private final boolean loadedFromDisk`

### Methods
- `public Level getLevel()`
  Returns the level that the entity is set to join.
  - returns: the level that the entity is set to join
- `public boolean loadedFromDisk()`
  - returns: true if the entity was loaded from disk, false otherwise.
 On the logical client, this will always return false.

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityLeaveLevelEvent

*class* `net.minecraftforge.event.entity.EntityLeaveLevelEvent`

This event is fired whenever an Entity leaves a Level.
 This event is fired whenever an entity is removed from the level in LevelCallback.onTrackingEnd(Object).

 This event is not cancellable and does not have a result.

 This event is fired on the main Forge event bus
 on both logical sides.

### Fields
- `private final Level level`

### Methods
- `public Level getLevel()`
  Returns the level the entity is set to leave.
  - returns: the level the entity is set to leave

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityMobGriefingEvent

*class* `net.minecraftforge.event.entity.EntityMobGriefingEvent`

EntityMobGriefingEvent is fired when mob griefing is about to occur and allows an event listener to specify whether it should or not.

 This event is fired when ever the mobGriefing game rule is checked.

 This event has a result:

 Event.Result.ALLOW means this instance of mob griefing is allowed.
 Event.Result.DEFAULT means the mobGriefing game rule is used to determine the behaviour.
 Event.Result.DENY means this instance of mob griefing is not allowed.

 This event is fired on the MinecraftForge.EVENT_BUS.

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityMountEvent

*class* `net.minecraftforge.event.entity.EntityMountEvent`

This event gets fired whenever a entity mounts/dismounts another entity.

 entityBeingMounted can be null, be sure to check for that.

 This event is Cancelable.

 If this event is canceled, the entity does not mount/dismount the other entity.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Entity entityMounting`
- `private final Entity entityBeingMounted`
- `private final Level level`
- `private final boolean isMounting`

### Methods
- `public boolean isMounting()`
- `public boolean isDismounting()`
- `public Entity getEntityMounting()`
- `public Entity getEntityBeingMounted()`
- `public Level getLevel()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityStruckByLightningEvent

*class* `net.minecraftforge.event.entity.EntityStruckByLightningEvent`

EntityStruckByLightningEvent is fired when an Entity is about to be struck by lightening.

 This event is fired whenever an EntityLightningBolt is updated to strike an Entity in
 LightningBolt.tick() via ForgeEventFactory.onEntityStruckByLightning(Entity, LightningBolt).

 lightning contains the instance of EntityLightningBolt attempting to strike an entity.

 This event is Cancelable.

 If this event is canceled, the Entity is not struck by the lightening.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final LightningBolt lightning`

### Methods
- `public LightningBolt getLightning()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTeleportEvent

*class* `net.minecraftforge.event.entity.EntityTeleportEvent`

EntityTeleportEvent is fired when an event involving any teleportation of an Entity occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 getTarget() contains the target destination.

 getPrev() contains the entity's current position.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

### Fields
- `protected double targetX`
- `protected double targetY`
- `protected double targetZ`

### Methods
- `public double getTargetX()`
- `public void setTargetX(double targetX)`
- `public double getTargetY()`
- `public void setTargetY(double targetY)`
- `public double getTargetZ()`
- `public void setTargetZ(double targetZ)`
- `public Vec3 getTarget()`
- `public double getPrevX()`
- `public double getPrevY()`
- `public double getPrevZ()`
- `public Vec3 getPrev()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTeleportEvent.ChorusFruit

*class* `net.minecraftforge.event.entity.EntityTeleportEvent.ChorusFruit`

EntityTeleportEvent.ChorusFruit is fired before a LivingEntity is teleported due to consuming Chorus Fruit.

 This event is Cancelable.

 If the event is not canceled, the entity will be teleported.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

 This event is only fired on the LogicalSide.SERVER side.

 If this event is canceled, the entity will not be teleported.

Enclosing class: EntityTeleportEvent

### Fields
- `private final LivingEntity entityLiving`

### Inherited fields
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `targetX`, `targetY`, `targetZ`

### Methods
- `public LivingEntity getEntityLiving()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `getPrev`, `getPrevX`, `getPrevY`, `getPrevZ`, `getTarget`, `getTargetX`, `getTargetY`, `getTargetZ`, `setTargetX`, `setTargetY`, `setTargetZ`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTeleportEvent.EnderEntity

*class* `net.minecraftforge.event.entity.EntityTeleportEvent.EnderEntity`

EntityTeleportEvent.EnderEntity is fired before an Enderman or Shulker randomly teleports.

 This event is Cancelable.

 If the event is not canceled, the entity will be teleported.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

 This event is only fired on the LogicalSide.SERVER side.

 If this event is canceled, the entity will not be teleported.

Enclosing class: EntityTeleportEvent

### Fields
- `private final LivingEntity entityLiving`

### Inherited fields
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `targetX`, `targetY`, `targetZ`

### Methods
- `public LivingEntity getEntityLiving()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `getPrev`, `getPrevX`, `getPrevY`, `getPrevZ`, `getTarget`, `getTargetX`, `getTargetY`, `getTargetZ`, `setTargetX`, `setTargetY`, `setTargetZ`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTeleportEvent.EnderPearl

*class* `net.minecraftforge.event.entity.EntityTeleportEvent.EnderPearl`

EntityTeleportEvent.EnderPearl is fired before an Entity is teleported from an EnderPearlEntity.

 This event is Cancelable.

 If the event is not canceled, the entity will be teleported.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

 This event is only fired on the LogicalSide.SERVER side.

 If this event is canceled, the entity will not be teleported.

Enclosing class: EntityTeleportEvent

### Fields
- `private final ServerPlayer player`
- `private final ThrownEnderpearl pearlEntity`
- `private float attackDamage`
- `private final HitResult hitResult`

### Inherited fields
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `targetX`, `targetY`, `targetZ`

### Methods
- `public ThrownEnderpearl getPearlEntity()`
- `public ServerPlayer getPlayer()`
- `@Nullable public @Nullable HitResult getHitResult()`
- `public float getAttackDamage()`
- `public void setAttackDamage(float attackDamage)`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `getPrev`, `getPrevX`, `getPrevY`, `getPrevZ`, `getTarget`, `getTargetX`, `getTargetY`, `getTargetZ`, `setTargetX`, `setTargetY`, `setTargetZ`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTeleportEvent.SpreadPlayersCommand

*class* `net.minecraftforge.event.entity.EntityTeleportEvent.SpreadPlayersCommand`

EntityTeleportEvent.SpreadPlayersCommand is fired before a living entity is teleported
 from use of SpreadPlayersCommand.

 This event is Cancelable.

 If the event is not canceled, the entity will be teleported.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

 This event is only fired on the LogicalSide.SERVER side.

 If this event is canceled, the entity will not be teleported.

Enclosing class: EntityTeleportEvent

### Inherited fields
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `targetX`, `targetY`, `targetZ`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `getPrev`, `getPrevX`, `getPrevY`, `getPrevZ`, `getTarget`, `getTargetX`, `getTargetY`, `getTargetZ`, `setTargetX`, `setTargetY`, `setTargetZ`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTeleportEvent.TeleportCommand

*class* `net.minecraftforge.event.entity.EntityTeleportEvent.TeleportCommand`

EntityTeleportEvent.TeleportCommand is fired before a living entity is teleported
 from use of TeleportCommand.

 This event is Cancelable.

 If the event is not canceled, the entity will be teleported.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

 This event is only fired on the LogicalSide.SERVER side.

 If this event is canceled, the entity will not be teleported.

Enclosing class: EntityTeleportEvent

### Inherited fields
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `targetX`, `targetY`, `targetZ`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityTeleportEvent`: `getPrev`, `getPrevX`, `getPrevY`, `getPrevZ`, `getTarget`, `getTargetX`, `getTargetY`, `getTargetZ`, `setTargetX`, `setTargetY`, `setTargetZ`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## EntityTravelToDimensionEvent

*class* `net.minecraftforge.event.entity.EntityTravelToDimensionEvent`

EntityTravelToDimensionEvent is fired before an Entity travels to a dimension.

 dimension contains the id of the dimension the entity is traveling to.

 This event is Cancelable.

 If this event is canceled, the Entity does not travel to the dimension.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final ResourceKey<Level> dimension`

### Methods
- `public ResourceKey<Level> getDimension()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## ProjectileImpactEvent

*class* `net.minecraftforge.event.entity.ProjectileImpactEvent`

This event is fired on the MinecraftForge.EVENT_BUS.

 This event is fired when a projectile entity impacts something.

 This event is fired via ForgeEventFactory.onProjectileImpact(Projectile, HitResult)
 This event is fired for all vanilla projectiles by Forge,
 custom projectiles should fire this event and check the result in a similar fashion.
 You can also directly set the ProjectileImpactEvent.ImpactResult to change the impact behaviour.

### Fields
- `private final HitResult ray`
- `private final Projectile projectile`
- `private ProjectileImpactEvent.ImpactResult result`

### Methods
- `public HitResult getRayTraceResult()`
- `public Projectile getProjectile()`
- `public void setImpactResult(@NotNull  @NotNull ProjectileImpactEvent.ImpactResult newResult)`
- `public ProjectileImpactEvent.ImpactResult getImpactResult()`

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## SpawnPlacementRegisterEvent

*class* `net.minecraftforge.event.entity.SpawnPlacementRegisterEvent`

This event allows each EntityType to have a SpawnPlacements.SpawnPredicate registered or modified.
 Spawn Predicates are checked whenever an Entity of the given EntityType spawns in the world naturally.

 If registering your own entity's spawn placements, you should use register(EntityType, SpawnPlacements.Type, Heightmap.Types, SpawnPlacements.SpawnPredicate, Operation)
 So that you ensure that your entity has a heightmap type and placement type registered.

 If modifying vanilla or another mod's spawn placements, you can use three operations:
 REPLACE: checked first, the last mod to replace the predicate wipes out all other predicates. Listen with a low EventPriority if you need to do this.
 OR: checked second, only one of these predicates must pass along with the original predicate
 AND: checked third, these predicates must all pass along with the original predicate

 This event is not cancellable and does not have a result.

 Fired on the Mod bus IModBusEvent.

### Fields
- `private final Map<EntityType<?>,SpawnPlacementRegisterEvent.MergedSpawnPredicate<?>> map`

### Methods
- `public <T extends Entity> void register(EntityType<T> entityType,  SpawnPlacements.SpawnPredicate<T> predicate)`
  Register an optional spawn placement predicate for a given entityType
- `public <T extends Entity> void register(EntityType<T> entityType,  SpawnPlacements.SpawnPredicate<T> predicate,  SpawnPlacementRegisterEvent.Operation operation)`
  Register a predicate for a given entityType with a given operation for handling
- `public <T extends Entity> void register(EntityType<T> entityType,  @Nullable  SpawnPlacements.Type placementType,  @Nullable  Heightmap.Types heightmap,  SpawnPlacements.SpawnPredicate<T> predicate,  SpawnPlacementRegisterEvent.Operation operation)`
  Register a predicate for a given entityType and operation
   With the option of changing the placementType and heightmap. These are only applied if SpawnPlacementRegisterEvent.Operation.REPLACE is used.
   Use null for the placement or heightmap to leave them as is (which should be done in almost every case)

## SpawnPlacementRegisterEvent.MergedSpawnPredicate

*class* `net.minecraftforge.event.entity.SpawnPlacementRegisterEvent.MergedSpawnPredicate`

Enclosing class: SpawnPlacementRegisterEvent

### Fields
- `private final SpawnPlacements.SpawnPredicate<T extends Entity> originalPredicate`
- `private final List<SpawnPlacements.SpawnPredicate<T extends Entity>> orPredicates`
- `private final List<SpawnPlacements.SpawnPredicate<T extends Entity>> andPredicates`
- `@Nullable private SpawnPlacements.SpawnPredicate<T extends Entity> replacementPredicate`
- `private SpawnPlacements.Type spawnType`
- `private Heightmap.Types heightmapType`

### Methods
- `public SpawnPlacements.Type getSpawnType()`
- `public Heightmap.Types getHeightmapType()`
- `private void merge(SpawnPlacementRegisterEvent.Operation operation,  SpawnPlacements.SpawnPredicate<T> predicate,  @Nullable  SpawnPlacements.Type spawnType,  @Nullable  Heightmap.Types heightmapType)`
- `@Internal public SpawnPlacements.SpawnPredicate<T> build()`
