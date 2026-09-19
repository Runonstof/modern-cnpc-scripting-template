# net.minecraft.world

- [BossEvent](#bossevent)
- [Class BossEvent.BossBarColor](#class-bossevent.bossbarcolor)
- [Class BossEvent.BossBarOverlay](#class-bossevent.bossbaroverlay)
- [Class Difficulty](#class-difficulty)
- [Class InteractionHand](#class-interactionhand)
- [Class InteractionResult](#class-interactionresult)
- [Clearable](#clearable)
- [CompoundContainer](#compoundcontainer)
- [Container](#container)
- [ContainerHelper](#containerhelper)
- [ContainerListener](#containerlistener)
- [Containers](#containers)
- [DifficultyInstance](#difficultyinstance)
- [InteractionResultHolder](#interactionresultholder)
- [LockCode](#lockcode)
- [MenuProvider](#menuprovider)
- [Nameable](#nameable)
- [RandomSequence](#randomsequence)
- [RandomSequences](#randomsequences)
- [RandomSequences.DirtyMarkingRandomSource](#randomsequences.dirtymarkingrandomsource)
- [SimpleContainer](#simplecontainer)
- [SimpleMenuProvider](#simplemenuprovider)
- [WorldlyContainer](#worldlycontainer)
- [WorldlyContainerHolder](#worldlycontainerholder)
## BossEvent

*class* `net.minecraft.world.BossEvent`

### Fields
- `private final UUID id`
- `protected Component name`
- `protected float progress`
- `protected BossEvent.BossBarColor color`
- `protected BossEvent.BossBarOverlay overlay`
- `protected boolean darkenScreen`
- `protected boolean playBossMusic`
- `protected boolean createWorldFog`

### Methods
- `public UUID getId()`
- `public Component getName()`
- `public void setName(Component p_18856_)`
- `public float getProgress()`
- `public void setProgress(float p_146639_)`
- `public BossEvent.BossBarColor getColor()`
- `public void setColor(BossEvent.BossBarColor p_18854_)`
- `public BossEvent.BossBarOverlay getOverlay()`
- `public void setOverlay(BossEvent.BossBarOverlay p_18855_)`
- `public boolean shouldDarkenScreen()`
- `public BossEvent setDarkenScreen(boolean p_18857_)`
- `public boolean shouldPlayBossMusic()`
- `public BossEvent setPlayBossMusic(boolean p_18858_)`
- `public BossEvent setCreateWorldFog(boolean p_18859_)`
- `public boolean shouldCreateWorldFog()`

## Class BossEvent.BossBarColor

*enum* `net.minecraft.world.Class BossEvent.BossBarColor`

Enclosing class: BossEvent

### Fields
- `private final String name`
- `private final ChatFormatting formatting`

### Methods
- `public static BossEvent.BossBarColor[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BossEvent.BossBarColor valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ChatFormatting getFormatting()`
- `public String getName()`
- `public static BossEvent.BossBarColor byName(String p_18885_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class BossEvent.BossBarOverlay

*enum* `net.minecraft.world.Class BossEvent.BossBarOverlay`

Enclosing class: BossEvent

### Fields
- `private final String name`

### Methods
- `public static BossEvent.BossBarOverlay[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BossEvent.BossBarOverlay valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public static BossEvent.BossBarOverlay byName(String p_18904_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Difficulty

*enum* `net.minecraft.world.Class Difficulty`

### Fields
- `public static final StringRepresentable.EnumCodec<Difficulty> CODEC`
- `private static final IntFunction<Difficulty> BY_ID`
- `private final int id`
- `private final String key`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static Difficulty[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Difficulty valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public Component getDisplayName()`
- `public Component getInfo()`
- `public static Difficulty byId(int p_19030_)`
- `@Nullable public static Difficulty byName(String p_19032_)`
- `public String getKey()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class InteractionHand

*enum* `net.minecraft.world.Class InteractionHand`

### Methods
- `public static InteractionHand[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static InteractionHand valueOf(String name)`
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

## Class InteractionResult

*enum* `net.minecraft.world.Class InteractionResult`

### Methods
- `public static InteractionResult[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static InteractionResult valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean consumesAction()`
- `public boolean shouldSwing()`
- `public boolean shouldAwardStats()`
- `public static InteractionResult sidedSuccess(boolean p_19079_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Clearable

*interface* `net.minecraft.world.Clearable`

### Methods
- `void clearContent()`
- `static void tryClear(@Nullable  Object p_18909_)`

## CompoundContainer

*class* `net.minecraft.world.CompoundContainer`

### Fields
- `private final Container container1`
- `private final Container container2`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public boolean contains(Container p_18928_)`
- `public ItemStack getItem(int p_18920_)`
- `public ItemStack removeItem(int p_18922_,  int p_18923_)`
- `public ItemStack removeItemNoUpdate(int p_18932_)`
- `public void setItem(int p_18925_,  ItemStack p_18926_)`
- `public int getMaxStackSize()`
- `public void setChanged()`
- `public boolean stillValid(Player p_18930_)`
- `public void startOpen(Player p_18940_)`
- `public void stopOpen(Player p_18937_)`
- `public boolean canPlaceItem(int p_18934_,  ItemStack p_18935_)`
- `public void clearContent()`

### Inherited methods
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `hasAnyMatching`, `hasAnyOf`

## Container

*interface* `net.minecraft.world.Container`

All Superinterfaces: Clearable

### Fields
- `static final int LARGE_MAX_STACK_SIZE` (= 64)
- `static final int DEFAULT_DISTANCE_LIMIT` (= 8)

### Methods
- `int getContainerSize()`
- `boolean isEmpty()`
- `ItemStack getItem(int p_18941_)`
- `ItemStack removeItem(int p_18942_,  int p_18943_)`
- `ItemStack removeItemNoUpdate(int p_18951_)`
- `void setItem(int p_18944_,  ItemStack p_18945_)`
- `default int getMaxStackSize()`
- `void setChanged()`
- `boolean stillValid(Player p_18946_)`
- `default void startOpen(Player p_18955_)`
- `default void stopOpen(Player p_18954_)`
- `default boolean canPlaceItem(int p_18952_,  ItemStack p_18953_)`
- `default boolean canTakeItem(Container p_273520_,  int p_272681_,  ItemStack p_273702_)`
- `default int countItem(Item p_18948_)`
- `default boolean hasAnyOf(Set<Item> p_18950_)`
- `default boolean hasAnyMatching(Predicate<ItemStack> p_216875_)`
- `static boolean stillValidBlockEntity(BlockEntity p_273154_,  Player p_273222_)`
- `static boolean stillValidBlockEntity(BlockEntity p_272877_,  Player p_272670_,  int p_273411_)`

### Inherited methods
- from `net.minecraft.world.Clearable`: `clearContent`

## ContainerHelper

*class* `net.minecraft.world.ContainerHelper`

### Methods
- `public static ItemStack removeItem(List<ItemStack> p_18970_,  int p_18971_,  int p_18972_)`
- `public static ItemStack takeItem(List<ItemStack> p_18967_,  int p_18968_)`
- `public static CompoundTag saveAllItems(CompoundTag p_18974_,  NonNullList<ItemStack> p_18975_)`
- `public static CompoundTag saveAllItems(CompoundTag p_18977_,  NonNullList<ItemStack> p_18978_,  boolean p_18979_)`
- `public static void loadAllItems(CompoundTag p_18981_,  NonNullList<ItemStack> p_18982_)`
- `public static int clearOrCountMatchingItems(Container p_18957_,  Predicate<ItemStack> p_18958_,  int p_18959_,  boolean p_18960_)`
- `public static int clearOrCountMatchingItems(ItemStack p_18962_,  Predicate<ItemStack> p_18963_,  int p_18964_,  boolean p_18965_)`

## ContainerListener

*interface* `net.minecraft.world.ContainerListener`

### Methods
- `void containerChanged(Container p_18983_)`

## Containers

*class* `net.minecraft.world.Containers`

### Methods
- `public static void dropContents(Level p_19003_,  BlockPos p_19004_,  Container p_19005_)`
- `public static void dropContents(Level p_18999_,  Entity p_19000_,  Container p_19001_)`
- `private static void dropContents(Level p_18987_,  double p_18988_,  double p_18989_,  double p_18990_,  Container p_18991_)`
- `public static void dropContents(Level p_19011_,  BlockPos p_19012_,  NonNullList<ItemStack> p_19013_)`
- `public static void dropItemStack(Level p_18993_,  double p_18994_,  double p_18995_,  double p_18996_,  ItemStack p_18997_)`

## DifficultyInstance

*class* `net.minecraft.world.DifficultyInstance`

### Fields
- `private static final float DIFFICULTY_TIME_GLOBAL_OFFSET` (= -72000.0f)
- `private static final float MAX_DIFFICULTY_TIME_GLOBAL` (= 1440000.0f)
- `private static final float MAX_DIFFICULTY_TIME_LOCAL` (= 3600000.0f)
- `private final Difficulty base`
- `private final float effectiveDifficulty`

### Methods
- `public Difficulty getDifficulty()`
- `public float getEffectiveDifficulty()`
- `public boolean isHard()`
- `public boolean isHarderThan(float p_19050_)`
- `public float getSpecialMultiplier()`
- `private float calculateDifficulty(Difficulty p_19052_,  long p_19053_,  long p_19054_,  float p_19055_)`

## InteractionResultHolder

*class* `net.minecraft.world.InteractionResultHolder`

### Fields
- `private final InteractionResult result`
- `private final T object`

### Methods
- `public InteractionResult getResult()`
- `public T getObject()`
- `public static <T> InteractionResultHolder<T> success(T p_19091_)`
- `public static <T> InteractionResultHolder<T> consume(T p_19097_)`
- `public static <T> InteractionResultHolder<T> pass(T p_19099_)`
- `public static <T> InteractionResultHolder<T> fail(T p_19101_)`
- `public static <T> InteractionResultHolder<T> sidedSuccess(T p_19093_,  boolean p_19094_)`

## LockCode

*class* `net.minecraft.world.LockCode`

### Fields
- `public static final LockCode NO_LOCK`
- `public static final String TAG_LOCK` (= "Lock")
- `private final String key`

### Methods
- `public boolean unlocksWith(ItemStack p_19108_)`
- `public void addToTag(CompoundTag p_19110_)`
- `public static LockCode fromTag(CompoundTag p_19112_)`

## MenuProvider

*interface* `net.minecraft.world.MenuProvider`

All Superinterfaces: MenuConstructor

### Methods
- `Component getDisplayName()`

### Inherited methods
- from `net.minecraft.world.inventory.MenuConstructor`: `createMenu`

## Nameable

*interface* `net.minecraft.world.Nameable`

### Methods
- `Component getName()`
- `default boolean hasCustomName()`
- `default Component getDisplayName()`
- `@Nullable default Component getCustomName()`

## RandomSequence

*class* `net.minecraft.world.RandomSequence`

### Fields
- `public static final com.mojang.serialization.Codec<RandomSequence> CODEC`
- `private final XoroshiroRandomSource source`

### Methods
- `private static XoroshiroRandomSource createSequence(long p_289567_,  Optional<ResourceLocation> p_300474_)`
- `public static RandomSupport.Seed128bit seedForKey(ResourceLocation p_288989_)`
- `public RandomSource random()`

## RandomSequences

*class* `net.minecraft.world.RandomSequences`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final long worldSeed`
- `private int salt`
- `private boolean includeWorldSeed`
- `private boolean includeSequenceId`
- `private final Map<ResourceLocation,RandomSequence> sequences`

### Methods
- `public static SavedData.Factory<RandomSequences> factory(long p_297402_)`
- `public RandomSource get(ResourceLocation p_287751_)`
- `private RandomSequence createSequence(ResourceLocation p_299723_)`
- `private RandomSequence createSequence(ResourceLocation p_299881_,  int p_299267_,  boolean p_300525_,  boolean p_297272_)`
- `public void forAllSequences(BiConsumer<ResourceLocation,RandomSequence> p_299883_)`
- `public void setSeedDefaults(int p_299968_,  boolean p_298395_,  boolean p_298518_)`
- `public CompoundTag save(CompoundTag p_287658_)`
- `private static boolean getBooleanWithDefault(CompoundTag p_297418_,  String p_298953_,  boolean p_297237_)`
- `public static RandomSequences load(long p_287756_,  CompoundTag p_287587_)`
- `public int clear()`
- `public void reset(ResourceLocation p_298741_)`
- `public void reset(ResourceLocation p_301350_,  int p_298554_,  boolean p_298049_,  boolean p_301283_)`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## RandomSequences.DirtyMarkingRandomSource

*class* `net.minecraft.world.RandomSequences.DirtyMarkingRandomSource`

Enclosing class: RandomSequences

### Fields
- `private final RandomSource random`

### Inherited fields
- from `net.minecraft.util.RandomSource`: `GAUSSIAN_SPREAD_FACTOR`

### Methods
- `public RandomSource fork()`
- `public PositionalRandomFactory forkPositional()`
- `public void setSeed(long p_300098_)`
- `public int nextInt()`
- `public int nextInt(int p_301106_)`
- `public long nextLong()`
- `public boolean nextBoolean()`
- `public float nextFloat()`
- `public double nextDouble()`
- `public double nextGaussian()`
- `public boolean equals(Object p_299603_)`

### Inherited methods
- from `net.minecraft.util.RandomSource`: `consumeCount`, `nextInt`, `nextIntBetweenInclusive`, `triangle`

## SimpleContainer

*class* `net.minecraft.world.SimpleContainer`

### Fields
- `private final int size`
- `private final NonNullList<ItemStack> items`
- `@Nullable private List<ContainerListener> listeners`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `public void addListener(ContainerListener p_19165_)`
- `public void removeListener(ContainerListener p_19182_)`
- `public ItemStack getItem(int p_19157_)`
- `public List<ItemStack> removeAllItems()`
- `public ItemStack removeItem(int p_19159_,  int p_19160_)`
- `public ItemStack removeItemType(Item p_19171_,  int p_19172_)`
- `public ItemStack addItem(ItemStack p_19174_)`
- `public boolean canAddItem(ItemStack p_19184_)`
- `public ItemStack removeItemNoUpdate(int p_19180_)`
- `public void setItem(int p_19162_,  ItemStack p_19163_)`
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public void setChanged()`
- `public boolean stillValid(Player p_19167_)`
- `public void clearContent()`
- `public void fillStackedContents(StackedContents p_19169_)`
- `public String toString()`
- `private void moveItemToEmptySlots(ItemStack p_19190_)`
- `private void moveItemToOccupiedSlotsWithSameType(ItemStack p_19192_)`
- `private void moveItemsBetweenStacks(ItemStack p_19186_,  ItemStack p_19187_)`
- `public void fromTag(ListTag p_19178_)`
- `public ListTag createTag()`

### Inherited methods
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `startOpen`, `stopOpen`

## SimpleMenuProvider

*class* `net.minecraft.world.SimpleMenuProvider`

### Fields
- `private final Component title`
- `private final MenuConstructor menuConstructor`

### Methods
- `public Component getDisplayName()`
- `public AbstractContainerMenu createMenu(int p_19205_,  Inventory p_19206_,  Player p_19207_)`

## WorldlyContainer

*interface* `net.minecraft.world.WorldlyContainer`

All Superinterfaces: Clearable, Container

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `int[] getSlotsForFace(Direction p_19238_)`
- `boolean canPlaceItemThroughFace(int p_19235_,  ItemStack p_19236_,  @Nullable  Direction p_19237_)`
- `boolean canTakeItemThroughFace(int p_19239_,  ItemStack p_19240_,  Direction p_19241_)`

### Inherited methods
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`

## WorldlyContainerHolder

*interface* `net.minecraft.world.WorldlyContainerHolder`

### Methods
- `WorldlyContainer getContainer(BlockState p_19242_,  LevelAccessor p_19243_,  BlockPos p_19244_)`
