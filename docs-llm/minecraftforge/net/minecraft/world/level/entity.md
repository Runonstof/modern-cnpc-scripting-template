# net.minecraft.world.level.entity

- [ChunkEntities](#chunkentities)
- [ChunkStatusUpdateListener](#chunkstatusupdatelistener)
- [Class PersistentEntitySectionManager.ChunkLoadStatus](#class-persistententitysectionmanager.chunkloadstatus)
- [Class Visibility](#class-visibility)
- [EntityAccess](#entityaccess)
- [EntityInLevelCallback](#entityinlevelcallback)
- [EntityLookup](#entitylookup)
- [EntityPersistentStorage](#entitypersistentstorage)
- [EntitySection](#entitysection)
- [EntitySectionStorage](#entitysectionstorage)
- [EntityTickList](#entityticklist)
- [EntityTypeTest](#entitytypetest)
- [LevelCallback](#levelcallback)
- [LevelEntityGetter](#levelentitygetter)
- [LevelEntityGetterAdapter](#levelentitygetteradapter)
- [PersistentEntitySectionManager](#persistententitysectionmanager)
- [PersistentEntitySectionManager.Callback](#persistententitysectionmanager.callback)
- [TransientEntitySectionManager](#transiententitysectionmanager)
- [TransientEntitySectionManager.Callback](#transiententitysectionmanager.callback)
## ChunkEntities

*class* `net.minecraft.world.level.entity.ChunkEntities`

### Fields
- `private final ChunkPos pos`
- `private final List<T> entities`

### Methods
- `public ChunkPos getPos()`
- `public Stream<T> getEntities()`
- `public boolean isEmpty()`

## ChunkStatusUpdateListener

*interface* `net.minecraft.world.level.entity.ChunkStatusUpdateListener`

### Methods
- `void onChunkStatusChange(ChunkPos p_156795_,  FullChunkStatus p_287725_)`

## Class PersistentEntitySectionManager.ChunkLoadStatus

*enum* `net.minecraft.world.level.entity.Class PersistentEntitySectionManager.ChunkLoadStatus`

Enclosing class: PersistentEntitySectionManager<T extends EntityAccess>

### Methods
- `public static PersistentEntitySectionManager.ChunkLoadStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PersistentEntitySectionManager.ChunkLoadStatus valueOf(String name)`
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

## Class Visibility

*enum* `net.minecraft.world.level.entity.Class Visibility`

### Fields
- `private final boolean accessible`
- `private final boolean ticking`

### Methods
- `public static Visibility[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Visibility valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isTicking()`
- `public boolean isAccessible()`
- `public static Visibility fromFullChunkStatus(FullChunkStatus p_287651_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EntityAccess

*interface* `net.minecraft.world.level.entity.EntityAccess`

### Methods
- `int getId()`
- `UUID getUUID()`
- `BlockPos blockPosition()`
- `AABB getBoundingBox()`
- `void setLevelCallback(EntityInLevelCallback p_156797_)`
- `Stream<? extends EntityAccess> getSelfAndPassengers()`
- `Stream<? extends EntityAccess> getPassengersAndSelf()`
- `void setRemoved(Entity.RemovalReason p_156798_)`
- `boolean shouldBeSaved()`
- `boolean isAlwaysTicking()`

## EntityInLevelCallback

*interface* `net.minecraft.world.level.entity.EntityInLevelCallback`

### Fields
- `static final EntityInLevelCallback NULL`

### Methods
- `void onMove()`
- `void onRemove(Entity.RemovalReason p_156801_)`

## EntityLookup

*class* `net.minecraft.world.level.entity.EntityLookup`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<T extends EntityAccess> byId`
- `private final Map<UUID,T extends EntityAccess> byUuid`

### Methods
- `public <U extends T> void getEntities(EntityTypeTest<T,U> p_261575_,  AbortableIterationConsumer<U> p_261925_)`
- `public Iterable<T> getAllEntities()`
- `public void add(T p_156815_)`
- `public void remove(T p_156823_)`
- `@Nullable public T getEntity(int p_156813_)`
- `@Nullable public T getEntity(UUID p_156820_)`
- `public int count()`

## EntityPersistentStorage

*interface* `net.minecraft.world.level.entity.EntityPersistentStorage`

All Superinterfaces: AutoCloseable

### Methods
- `CompletableFuture<ChunkEntities<T>> loadEntities(ChunkPos p_156824_)`
- `void storeEntities(ChunkEntities<T> p_156825_)`
- `void flush(boolean p_182503_)`
- `default void close()  throws IOException`
  - throws: IOException

## EntitySection

*class* `net.minecraft.world.level.entity.EntitySection`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ClassInstanceMultiMap<T extends EntityAccess> storage`
- `private Visibility chunkStatus`

### Methods
- `public void add(T p_188347_)`
- `public boolean remove(T p_188356_)`
- `public AbortableIterationConsumer.Continuation getEntities(AABB p_262016_,  AbortableIterationConsumer<T> p_261863_)`
- `public <U extends T> AbortableIterationConsumer.Continuation getEntities(EntityTypeTest<T,U> p_188349_,  AABB p_188350_,  AbortableIterationConsumer<? super U> p_261535_)`
- `public boolean isEmpty()`
- `public Stream<T> getEntities()`
- `public Visibility getStatus()`
- `public Visibility updateChunkStatus(Visibility p_156839_)`
- `public int size()`

## EntitySectionStorage

*class* `net.minecraft.world.level.entity.EntitySectionStorage`

### Fields
- `private final Class<T extends EntityAccess> entityClass`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectFunction<Visibility> intialSectionVisibility`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<EntitySection<T extends EntityAccess>> sections`
- `private final it.unimi.dsi.fastutil.longs.LongSortedSet sectionIds`

### Methods
- `public void forEachAccessibleNonEmptySection(AABB p_188363_,  AbortableIterationConsumer<EntitySection<T>> p_261588_)`
- `public LongStream getExistingSectionPositionsInChunk(long p_156862_)`
- `private it.unimi.dsi.fastutil.longs.LongSortedSet getChunkSections(int p_156859_,  int p_156860_)`
- `public Stream<EntitySection<T>> getExistingSectionsInChunk(long p_156889_)`
- `private static long getChunkKeyFromSectionKey(long p_156900_)`
- `public EntitySection<T> getOrCreateSection(long p_156894_)`
- `@Nullable public EntitySection<T> getSection(long p_156896_)`
- `private EntitySection<T> createSection(long p_156902_)`
- `public it.unimi.dsi.fastutil.longs.LongSet getAllChunksWithExistingSections()`
- `public void getEntities(AABB p_261820_,  AbortableIterationConsumer<T> p_261992_)`
- `public <U extends T> void getEntities(EntityTypeTest<T,U> p_261630_,  AABB p_261843_,  AbortableIterationConsumer<U> p_261742_)`
- `public void remove(long p_156898_)`
- `public int count()`

## EntityTickList

*class* `net.minecraft.world.level.entity.EntityTickList`

### Fields
- `private it.unimi.dsi.fastutil.ints.Int2ObjectMap<Entity> active`
- `private it.unimi.dsi.fastutil.ints.Int2ObjectMap<Entity> passive`
- `@Nullable private it.unimi.dsi.fastutil.ints.Int2ObjectMap<Entity> iterated`

### Methods
- `private void ensureActiveIsNotIterated()`
- `public void add(Entity p_156909_)`
- `public void remove(Entity p_156913_)`
- `public boolean contains(Entity p_156915_)`
- `public void forEach(Consumer<Entity> p_156911_)`

## EntityTypeTest

*interface* `net.minecraft.world.level.entity.EntityTypeTest`

### Methods
- `static <B, T extends B> EntityTypeTest<B,T> forClass(Class<T> p_156917_)`
- `@Nullable T tryCast(B p_156918_)`
- `Class<? extends B> getBaseClass()`

## LevelCallback

*interface* `net.minecraft.world.level.entity.LevelCallback`

### Methods
- `void onCreated(T p_156930_)`
- `void onDestroyed(T p_156929_)`
- `void onTickingStart(T p_156928_)`
- `void onTickingEnd(T p_156927_)`
- `void onTrackingStart(T p_156926_)`
- `void onTrackingEnd(T p_156925_)`
- `void onSectionChange(T p_223609_)`

## LevelEntityGetter

*interface* `net.minecraft.world.level.entity.LevelEntityGetter`

### Methods
- `@Nullable T get(int p_156931_)`
- `@Nullable T get(UUID p_156939_)`
- `Iterable<T> getAll()`
- `<U extends T> void get(EntityTypeTest<T,U> p_156935_,  AbortableIterationConsumer<U> p_261602_)`
- `void get(AABB p_156937_,  Consumer<T> p_156938_)`
- `<U extends T> void get(EntityTypeTest<T,U> p_156932_,  AABB p_156933_,  AbortableIterationConsumer<U> p_261542_)`

## LevelEntityGetterAdapter

*class* `net.minecraft.world.level.entity.LevelEntityGetterAdapter`

### Fields
- `private final EntityLookup<T extends EntityAccess> visibleEntities`
- `private final EntitySectionStorage<T extends EntityAccess> sectionStorage`

### Methods
- `@Nullable public T get(int p_156947_)`
- `@Nullable public T get(UUID p_156959_)`
- `public Iterable<T> getAll()`
- `public <U extends T> void get(EntityTypeTest<T,U> p_261718_,  AbortableIterationConsumer<U> p_262009_)`
- `public void get(AABB p_156956_,  Consumer<T> p_156957_)`
- `public <U extends T> void get(EntityTypeTest<T,U> p_261696_,  AABB p_261693_,  AbortableIterationConsumer<U> p_261719_)`

## PersistentEntitySectionManager

*class* `net.minecraft.world.level.entity.PersistentEntitySectionManager`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `final Set<UUID> knownUuids`
- `final LevelCallback<T extends EntityAccess> callbacks`
- `private final EntityPersistentStorage<T extends EntityAccess> permanentStorage`
- `private final EntityLookup<T extends EntityAccess> visibleEntityStorage`
- `final EntitySectionStorage<T extends EntityAccess> sectionStorage`
- `private final LevelEntityGetter<T extends EntityAccess> entityGetter`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<Visibility> chunkVisibility`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<PersistentEntitySectionManager.ChunkLoadStatus> chunkLoadStatuses`
- `private final it.unimi.dsi.fastutil.longs.LongSet chunksToUnload`
- `private final Queue<ChunkEntities<T extends EntityAccess>> loadingInbox`

### Methods
- `void removeSectionIfEmpty(long p_157510_,  EntitySection<T> p_157511_)`
- `private boolean addEntityUuid(T p_157558_)`
- `public boolean addNewEntity(T p_157534_)`
- `public boolean addNewEntityWithoutEvent(T entity)`
- `private boolean addEntity(T p_157539_,  boolean p_157540_)`
- `private boolean addEntityWithoutEvent(T p_157539_,  boolean p_157540_)`
- `static <T extends EntityAccess> Visibility getEffectiveStatus(T p_157536_,  Visibility p_157537_)`
- `public void addLegacyChunkEntities(Stream<T> p_157553_)`
- `public void addWorldGenChunkEntities(Stream<T> p_157560_)`
- `void startTicking(T p_157565_)`
- `void stopTicking(T p_157571_)`
- `void startTracking(T p_157576_)`
- `void stopTracking(T p_157581_)`
- `public void updateChunkStatus(ChunkPos p_287590_,  FullChunkStatus p_287623_)`
- `public void updateChunkStatus(ChunkPos p_157528_,  Visibility p_157529_)`
- `private void ensureChunkQueuedForLoad(long p_157556_)`
- `private boolean storeChunkSections(long p_157513_,  Consumer<T> p_157514_)`
- `private void requestChunkLoad(long p_157563_)`
- `private boolean processChunkUnload(long p_157569_)`
- `private void unloadEntity(EntityAccess p_157586_)`
- `private void processUnloads()`
- `private void processPendingLoads()`
- `public void tick()`
- `private it.unimi.dsi.fastutil.longs.LongSet getAllChunksToSave()`
- `public void autoSave()`
- `public void saveAll()`
- `public void close()  throws IOException`
  - throws: IOException
- `public boolean isLoaded(UUID p_157551_)`
- `public LevelEntityGetter<T> getEntityGetter()`
- `public boolean canPositionTick(BlockPos p_202168_)`
- `public boolean canPositionTick(ChunkPos p_202166_)`
- `public boolean areEntitiesLoaded(long p_157508_)`
- `public void dumpSections(Writer p_157549_)  throws IOException`
  - throws: IOException
- `public String gatherStats()`

## PersistentEntitySectionManager.Callback

*class* `net.minecraft.world.level.entity.PersistentEntitySectionManager.Callback`

Enclosing class: PersistentEntitySectionManager<T extends EntityAccess>

### Fields
- `private final T extends EntityAccess entity`
- `private final Entity realEntity`
- `private long currentSectionKey`
- `private EntitySection<T extends EntityAccess> currentSection`

### Inherited fields
- from `net.minecraft.world.level.entity.EntityInLevelCallback`: `NULL`

### Methods
- `public void onMove()`
- `private void updateStatus(Visibility p_157621_,  Visibility p_157622_)`
- `public void onRemove(Entity.RemovalReason p_157619_)`

## TransientEntitySectionManager

*class* `net.minecraft.world.level.entity.TransientEntitySectionManager`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `final LevelCallback<T extends EntityAccess> callbacks`
- `final EntityLookup<T extends EntityAccess> entityStorage`
- `final EntitySectionStorage<T extends EntityAccess> sectionStorage`
- `private final it.unimi.dsi.fastutil.longs.LongSet tickingChunks`
- `private final LevelEntityGetter<T extends EntityAccess> entityGetter`

### Methods
- `public void startTicking(ChunkPos p_157652_)`
- `public void stopTicking(ChunkPos p_157659_)`
- `public LevelEntityGetter<T> getEntityGetter()`
- `public void addEntity(T p_157654_)`
- `public int count()`
- `void removeSectionIfEmpty(long p_157649_,  EntitySection<T> p_157650_)`
- `public String gatherStats()`

## TransientEntitySectionManager.Callback

*class* `net.minecraft.world.level.entity.TransientEntitySectionManager.Callback`

Enclosing class: TransientEntitySectionManager<T extends EntityAccess>

### Fields
- `private final T extends EntityAccess entity`
- `private final Entity realEntity`
- `private long currentSectionKey`
- `private EntitySection<T extends EntityAccess> currentSection`

### Inherited fields
- from `net.minecraft.world.level.entity.EntityInLevelCallback`: `NULL`

### Methods
- `public void onMove()`
- `public void onRemove(Entity.RemovalReason p_157678_)`
