# net.minecraft.world.level.gameevent

- [BlockPositionSource](#blockpositionsource)
- [BlockPositionSource.Type](#blockpositionsource.type)
- [Class GameEventListener.DeliveryMode](#class-gameeventlistener.deliverymode)
- [DynamicGameEventListener](#dynamicgameeventlistener)
- [EntityPositionSource](#entitypositionsource)
- [EntityPositionSource.Type](#entitypositionsource.type)
- [EuclideanGameEventListenerRegistry](#euclideangameeventlistenerregistry)
- [EuclideanGameEventListenerRegistry.OnEmptyAction](#euclideangameeventlistenerregistry.onemptyaction)
- [GameEvent](#gameevent)
- [GameEvent.Context](#gameevent.context)
- [GameEvent.ListenerInfo](#gameevent.listenerinfo)
- [GameEventDispatcher](#gameeventdispatcher)
- [GameEventListener](#gameeventlistener)
- [GameEventListener.Holder](#gameeventlistener.holder)
- [GameEventListenerRegistry](#gameeventlistenerregistry)
- [GameEventListenerRegistry.ListenerVisitor](#gameeventlistenerregistry.listenervisitor)
- [PositionSource](#positionsource)
- [PositionSourceType](#positionsourcetype)
## BlockPositionSource

*class* `net.minecraft.world.level.gameevent.BlockPositionSource`

### Fields
- `public static final com.mojang.serialization.Codec<BlockPositionSource> CODEC`
- `final BlockPos pos`

### Methods
- `public Optional<Vec3> getPosition(Level p_157708_)`
- `public PositionSourceType<?> getType()`

## BlockPositionSource.Type

*class* `net.minecraft.world.level.gameevent.BlockPositionSource.Type`

Enclosing class: BlockPositionSource

### Inherited fields
- from `net.minecraft.world.level.gameevent.PositionSourceType`: `BLOCK`, `ENTITY`

### Methods
- `public BlockPositionSource read(FriendlyByteBuf p_157716_)`
- `public void write(FriendlyByteBuf p_157718_,  BlockPositionSource p_157719_)`
- `public com.mojang.serialization.Codec<BlockPositionSource> codec()`

## Class GameEventListener.DeliveryMode

*enum* `net.minecraft.world.level.gameevent.Class GameEventListener.DeliveryMode`

Enclosing interface: GameEventListener

### Methods
- `public static GameEventListener.DeliveryMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GameEventListener.DeliveryMode valueOf(String name)`
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

## DynamicGameEventListener

*class* `net.minecraft.world.level.gameevent.DynamicGameEventListener`

### Fields
- `private final T extends GameEventListener listener`
- `@Nullable private SectionPos lastSection`

### Methods
- `public void add(ServerLevel p_223618_)`
- `public T getListener()`
- `public void remove(ServerLevel p_223635_)`
- `public void move(ServerLevel p_223642_)`
- `private static void ifChunkExists(LevelReader p_223623_,  @Nullable  SectionPos p_223624_,  Consumer<GameEventListenerRegistry> p_223625_)`

## EntityPositionSource

*class* `net.minecraft.world.level.gameevent.EntityPositionSource`

### Fields
- `public static final com.mojang.serialization.Codec<EntityPositionSource> CODEC`
- `private com.mojang.datafixers.util.Either<Entity,com.mojang.datafixers.util.Either<UUID,Integer>> entityOrUuidOrId`
- `final float yOffset`

### Methods
- `public Optional<Vec3> getPosition(Level p_157733_)`
- `private void resolveEntity(Level p_223678_)`
- `private UUID getUuid()`
- `int getId()`
- `public PositionSourceType<?> getType()`

## EntityPositionSource.Type

*class* `net.minecraft.world.level.gameevent.EntityPositionSource.Type`

Enclosing class: EntityPositionSource

### Inherited fields
- from `net.minecraft.world.level.gameevent.PositionSourceType`: `BLOCK`, `ENTITY`

### Methods
- `public EntityPositionSource read(FriendlyByteBuf p_157741_)`
- `public void write(FriendlyByteBuf p_157743_,  EntityPositionSource p_157744_)`
- `public com.mojang.serialization.Codec<EntityPositionSource> codec()`

## EuclideanGameEventListenerRegistry

*class* `net.minecraft.world.level.gameevent.EuclideanGameEventListenerRegistry`

### Fields
- `private final List<GameEventListener> listeners`
- `private final Set<GameEventListener> listenersToRemove`
- `private final List<GameEventListener> listenersToAdd`
- `private boolean processing`
- `private final ServerLevel level`
- `private final int sectionY`
- `private final EuclideanGameEventListenerRegistry.OnEmptyAction onEmptyAction`

### Inherited fields
- from `net.minecraft.world.level.gameevent.GameEventListenerRegistry`: `NOOP`

### Methods
- `public boolean isEmpty()`
- `public void register(GameEventListener p_248767_)`
- `public void unregister(GameEventListener p_250006_)`
- `public boolean visitInRangeListeners(GameEvent p_251377_,  Vec3 p_251445_,  GameEvent.Context p_252317_,  GameEventListenerRegistry.ListenerVisitor p_251422_)`
- `private static Optional<Vec3> getPostableListenerPosition(ServerLevel p_249585_,  Vec3 p_251333_,  GameEventListener p_251051_)`

## EuclideanGameEventListenerRegistry.OnEmptyAction

*interface* `net.minecraft.world.level.gameevent.EuclideanGameEventListenerRegistry.OnEmptyAction`

Enclosing class: EuclideanGameEventListenerRegistry

### Methods
- `void apply(int p_282867_)`

## GameEvent

*class* `net.minecraft.world.level.gameevent.GameEvent`

### Fields
- `public static final GameEvent BLOCK_ACTIVATE`
- `public static final GameEvent BLOCK_ATTACH`
- `public static final GameEvent BLOCK_CHANGE`
- `public static final GameEvent BLOCK_CLOSE`
- `public static final GameEvent BLOCK_DEACTIVATE`
- `public static final GameEvent BLOCK_DESTROY`
- `public static final GameEvent BLOCK_DETACH`
- `public static final GameEvent BLOCK_OPEN`
- `public static final GameEvent BLOCK_PLACE`
- `public static final GameEvent CONTAINER_CLOSE`
- `public static final GameEvent CONTAINER_OPEN`
- `public static final GameEvent DRINK`
- `public static final GameEvent EAT`
- `public static final GameEvent ELYTRA_GLIDE`
- `public static final GameEvent ENTITY_DAMAGE`
- `public static final GameEvent ENTITY_DIE`
- `public static final GameEvent ENTITY_DISMOUNT`
- `public static final GameEvent ENTITY_INTERACT`
- `public static final GameEvent ENTITY_MOUNT`
- `public static final GameEvent ENTITY_PLACE`
- `public static final GameEvent ENTITY_ACTION`
- `public static final GameEvent EQUIP`
- `public static final GameEvent EXPLODE`
- `public static final GameEvent FLAP`
- `public static final GameEvent FLUID_PICKUP`
- `public static final GameEvent FLUID_PLACE`
- `public static final GameEvent HIT_GROUND`
- `public static final GameEvent INSTRUMENT_PLAY`
- `public static final GameEvent ITEM_INTERACT_FINISH`
- `public static final GameEvent ITEM_INTERACT_START`
- `public static final GameEvent JUKEBOX_PLAY`
- `public static final GameEvent JUKEBOX_STOP_PLAY`
- `public static final GameEvent LIGHTNING_STRIKE`
- `public static final GameEvent NOTE_BLOCK_PLAY`
- `public static final GameEvent PRIME_FUSE`
- `public static final GameEvent PROJECTILE_LAND`
- `public static final GameEvent PROJECTILE_SHOOT`
- `public static final GameEvent SCULK_SENSOR_TENDRILS_CLICKING`
- `public static final GameEvent SHEAR`
- `public static final GameEvent SHRIEK`
- `public static final GameEvent SPLASH`
- `public static final GameEvent STEP`
- `public static final GameEvent SWIM`
- `public static final GameEvent TELEPORT`
- `public static final GameEvent UNEQUIP`
- `public static final GameEvent RESONATE_1`
- `public static final GameEvent RESONATE_2`
- `public static final GameEvent RESONATE_3`
- `public static final GameEvent RESONATE_4`
- `public static final GameEvent RESONATE_5`
- `public static final GameEvent RESONATE_6`
- `public static final GameEvent RESONATE_7`
- `public static final GameEvent RESONATE_8`
- `public static final GameEvent RESONATE_9`
- `public static final GameEvent RESONATE_10`
- `public static final GameEvent RESONATE_11`
- `public static final GameEvent RESONATE_12`
- `public static final GameEvent RESONATE_13`
- `public static final GameEvent RESONATE_14`
- `public static final GameEvent RESONATE_15`
- `public static final int DEFAULT_NOTIFICATION_RADIUS` (= 16)
- `private final int notificationRadius`
- `private final Holder.Reference<GameEvent> builtInRegistryHolder`

### Methods
- `public int getNotificationRadius()`
- `private static GameEvent register(String p_157823_)`
- `private static GameEvent register(String p_157825_,  int p_157826_)`
- `public String toString()`
- `@Deprecated public Holder.Reference<GameEvent> builtInRegistryHolder()` (deprecated)
- `public boolean is(TagKey<GameEvent> p_204529_)`

## GameEvent.Context

*record* `net.minecraft.world.level.gameevent.GameEvent.Context`

Enclosing class: GameEvent

### Fields
- `@Nullable private final Entity sourceEntity`
  The field for the sourceEntity record component.
- `@Nullable private final BlockState affectedState`
  The field for the affectedState record component.

### Methods
- `public static GameEvent.Context of(@Nullable  Entity p_223718_)`
- `public static GameEvent.Context of(@Nullable  BlockState p_223723_)`
- `public static GameEvent.Context of(@Nullable  Entity p_223720_,  @Nullable  BlockState p_223721_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `@Nullable public Entity sourceEntity()`
  Returns the value of the sourceEntity record component.
  - returns: the value of the sourceEntity record component
- `@Nullable public BlockState affectedState()`
  Returns the value of the affectedState record component.
  - returns: the value of the affectedState record component

## GameEvent.ListenerInfo

*class* `net.minecraft.world.level.gameevent.GameEvent.ListenerInfo`

Enclosing class: GameEvent

### Fields
- `private final GameEvent gameEvent`
- `private final Vec3 source`
- `private final GameEvent.Context context`
- `private final GameEventListener recipient`
- `private final double distanceToRecipient`

### Methods
- `public int compareTo(GameEvent.ListenerInfo p_249631_)`
- `public GameEvent gameEvent()`
- `public Vec3 source()`
- `public GameEvent.Context context()`
- `public GameEventListener recipient()`

## GameEventDispatcher

*class* `net.minecraft.world.level.gameevent.GameEventDispatcher`

### Fields
- `private final ServerLevel level`

### Methods
- `public void post(GameEvent p_251754_,  Vec3 p_250613_,  GameEvent.Context p_251777_)`
- `private void handleGameEventMessagesInQueue(List<GameEvent.ListenerInfo> p_251433_)`

## GameEventListener

*interface* `net.minecraft.world.level.gameevent.GameEventListener`

### Methods
- `PositionSource getListenerSource()`
- `int getListenerRadius()`
- `boolean handleGameEvent(ServerLevel p_223757_,  GameEvent p_251491_,  GameEvent.Context p_249681_,  Vec3 p_251048_)`
- `default GameEventListener.DeliveryMode getDeliveryMode()`

## GameEventListener.Holder

*interface* `net.minecraft.world.level.gameevent.GameEventListener.Holder`

Enclosing interface: GameEventListener

### Methods
- `T getListener()`

## GameEventListenerRegistry

*interface* `net.minecraft.world.level.gameevent.GameEventListenerRegistry`

### Fields
- `static final GameEventListenerRegistry NOOP`

### Methods
- `boolean isEmpty()`
- `void register(GameEventListener p_249257_)`
- `void unregister(GameEventListener p_248758_)`
- `boolean visitInRangeListeners(GameEvent p_251001_,  Vec3 p_249144_,  GameEvent.Context p_249328_,  GameEventListenerRegistry.ListenerVisitor p_250123_)`

## GameEventListenerRegistry.ListenerVisitor

*interface* `net.minecraft.world.level.gameevent.GameEventListenerRegistry.ListenerVisitor`

Enclosing interface: GameEventListenerRegistry

### Methods
- `void visit(GameEventListener p_250787_,  Vec3 p_251603_)`

## PositionSource

*interface* `net.minecraft.world.level.gameevent.PositionSource`

### Fields
- `static final com.mojang.serialization.Codec<PositionSource> CODEC`

### Methods
- `Optional<Vec3> getPosition(Level p_157870_)`
- `PositionSourceType<?> getType()`

## PositionSourceType

*interface* `net.minecraft.world.level.gameevent.PositionSourceType`

### Fields
- `static final PositionSourceType<BlockPositionSource> BLOCK`
- `static final PositionSourceType<EntityPositionSource> ENTITY`

### Methods
- `T read(FriendlyByteBuf p_157884_)`
- `void write(FriendlyByteBuf p_157880_,  T p_157881_)`
- `com.mojang.serialization.Codec<T> codec()`
- `static <S extends PositionSourceType<T>, T extends PositionSource> S register(String p_157878_,  S p_157879_)`
- `static PositionSource fromNetwork(FriendlyByteBuf p_157886_)`
- `static <T extends PositionSource> void toNetwork(T p_157875_,  FriendlyByteBuf p_157876_)`
