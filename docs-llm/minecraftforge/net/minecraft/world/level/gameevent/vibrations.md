# net.minecraft.world.level.gameevent.vibrations

- [VibrationInfo](#vibrationinfo)
- [VibrationSelector](#vibrationselector)
- [VibrationSystem](#vibrationsystem)
- [VibrationSystem.Data](#vibrationsystem.data)
- [VibrationSystem.Listener](#vibrationsystem.listener)
- [VibrationSystem.Ticker](#vibrationsystem.ticker)
- [VibrationSystem.User](#vibrationsystem.user)
## VibrationInfo

*record* `net.minecraft.world.level.gameevent.vibrations.VibrationInfo`

### Fields
- `private final GameEvent gameEvent`
  The field for the gameEvent record component.
- `private final float distance`
  The field for the distance record component.
- `private final Vec3 pos`
  The field for the pos record component.
- `@Nullable private final UUID uuid`
  The field for the uuid record component.
- `@Nullable private final UUID projectileOwnerUuid`
  The field for the projectileOwnerUuid record component.
- `@Nullable private final Entity entity`
  The field for the entity record component.
- `public static final com.mojang.serialization.Codec<VibrationInfo> CODEC`

### Methods
- `@Nullable private static UUID getProjectileOwner(@Nullable  Entity p_251531_)`
- `public Optional<Entity> getEntity(ServerLevel p_249184_)`
- `public Optional<Entity> getProjectileOwner(ServerLevel p_249217_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public GameEvent gameEvent()`
  Returns the value of the gameEvent record component.
  - returns: the value of the gameEvent record component
- `public float distance()`
  Returns the value of the distance record component.
  - returns: the value of the distance record component
- `public Vec3 pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `@Nullable public UUID uuid()`
  Returns the value of the uuid record component.
  - returns: the value of the uuid record component
- `@Nullable public UUID projectileOwnerUuid()`
  Returns the value of the projectileOwnerUuid record component.
  - returns: the value of the projectileOwnerUuid record component
- `@Nullable public Entity entity()`
  Returns the value of the entity record component.
  - returns: the value of the entity record component

## VibrationSelector

*class* `net.minecraft.world.level.gameevent.vibrations.VibrationSelector`

### Fields
- `public static final com.mojang.serialization.Codec<VibrationSelector> CODEC`
- `private Optional<org.apache.commons.lang3.tuple.Pair<VibrationInfo,Long>> currentVibrationData`

### Methods
- `public void addCandidate(VibrationInfo p_250149_,  long p_249749_)`
- `private boolean shouldReplaceVibration(VibrationInfo p_248697_,  long p_249040_)`
- `public Optional<VibrationInfo> chosenCandidate(long p_250251_)`
- `public void startOver()`

## VibrationSystem

*interface* `net.minecraft.world.level.gameevent.vibrations.VibrationSystem`

### Fields
- `static final GameEvent[] RESONANCE_EVENTS`
- `static final ToIntFunction<GameEvent> VIBRATION_FREQUENCY_FOR_EVENT`

### Methods
- `VibrationSystem.Data getVibrationData()`
- `VibrationSystem.User getVibrationUser()`
- `static int getGameEventFrequency(GameEvent p_281355_)`
- `static GameEvent getResonanceEventByFrequency(int p_282105_)`
- `static int getRedstoneStrengthForDistance(float p_282483_,  int p_282722_)`

## VibrationSystem.Data

*class* `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.Data`

Enclosing interface: VibrationSystem

### Fields
- `public static com.mojang.serialization.Codec<VibrationSystem.Data> CODEC`
- `public static final String NBT_TAG_KEY` (= "listener")
- `@Nullable VibrationInfo currentVibration`
- `private int travelTimeInTicks`
- `final VibrationSelector selectionStrategy`
- `private boolean reloadVibrationParticle`

### Methods
- `public VibrationSelector getSelectionStrategy()`
- `@Nullable public VibrationInfo getCurrentVibration()`
- `public void setCurrentVibration(@Nullable  VibrationInfo p_282049_)`
- `public int getTravelTimeInTicks()`
- `public void setTravelTimeInTicks(int p_282973_)`
- `public void decrementTravelTime()`
- `public boolean shouldReloadVibrationParticle()`
- `public void setReloadVibrationParticle(boolean p_281702_)`

## VibrationSystem.Listener

*class* `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.Listener`

Enclosing interface: VibrationSystem

### Fields
- `private final VibrationSystem system`

### Methods
- `public PositionSource getListenerSource()`
- `public int getListenerRadius()`
- `public boolean handleGameEvent(ServerLevel p_282254_,  GameEvent p_283599_,  GameEvent.Context p_283664_,  Vec3 p_282426_)`
- `public void forceScheduleVibration(ServerLevel p_282808_,  GameEvent p_281875_,  GameEvent.Context p_281652_,  Vec3 p_281530_)`
- `private void scheduleVibration(ServerLevel p_282037_,  VibrationSystem.Data p_283229_,  GameEvent p_281778_,  GameEvent.Context p_283344_,  Vec3 p_281758_,  Vec3 p_282990_)`
- `public static float distanceBetweenInBlocks(BlockPos p_282413_,  BlockPos p_281960_)`
- `private static boolean isOccluded(Level p_283225_,  Vec3 p_283328_,  Vec3 p_283163_)`

### Inherited methods
- from `net.minecraft.world.level.gameevent.GameEventListener`: `getDeliveryMode`

## VibrationSystem.Ticker

*interface* `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.Ticker`

Enclosing interface: VibrationSystem

### Methods
- `static void tick(Level p_281704_,  VibrationSystem.Data p_282633_,  VibrationSystem.User p_281564_)`
- `private static void trySelectAndScheduleVibration(ServerLevel p_282775_,  VibrationSystem.Data p_282792_,  VibrationSystem.User p_281845_)`
- `private static void tryReloadVibrationParticle(ServerLevel p_282010_,  VibrationSystem.Data p_282354_,  VibrationSystem.User p_282958_)`
- `private static boolean receiveVibration(ServerLevel p_282967_,  VibrationSystem.Data p_283447_,  VibrationSystem.User p_282301_,  VibrationInfo p_281498_)`
- `private static boolean areAdjacentChunksTicking(Level p_282735_,  BlockPos p_281722_)`

## VibrationSystem.User

*interface* `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.User`

Enclosing interface: VibrationSystem

### Methods
- `int getListenerRadius()`
- `PositionSource getPositionSource()`
- `boolean canReceiveVibration(ServerLevel p_282960_,  BlockPos p_282488_,  GameEvent p_282865_,  GameEvent.Context p_283577_)`
- `void onReceiveVibration(ServerLevel p_282148_,  BlockPos p_282090_,  GameEvent p_283663_,  @Nullable  Entity p_281578_,  @Nullable  Entity p_281308_,  float p_281707_)`
- `default TagKey<GameEvent> getListenableEvents()`
- `default boolean canTriggerAvoidVibration()`
- `default boolean requiresAdjacentChunksToBeTicking()`
- `default int calculateTravelTimeInTicks(float p_281658_)`
- `default boolean isValidVibration(GameEvent p_282750_,  GameEvent.Context p_283373_)`
- `default void onDataChanged()`
