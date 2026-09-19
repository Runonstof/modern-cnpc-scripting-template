# net.minecraftforge.common

- [BasicItemListing](#basicitemlisting)
- [BiomeManager](#biomemanager)
- [BiomeManager.BiomeEntry](#biomemanager.biomeentry)
- [BiomeManager.TrackedList](#biomemanager.trackedlist)
- [Class BiomeManager.BiomeType](#class-biomemanager.biometype)
- [CreativeModeTabRegistry](#creativemodetabregistry)
- [DungeonHooks](#dungeonhooks)
- [DungeonHooks.DungeonMob](#dungeonhooks.dungeonmob)
- [FarmlandWaterManager](#farmlandwatermanager)
- [ForgeConfig](#forgeconfig)
- [ForgeConfig.Client](#forgeconfig.client)
- [ForgeConfig.Common](#forgeconfig.common)
- [ForgeConfig.Server](#forgeconfig.server)
- [ForgeConfigSpec](#forgeconfigspec)
- [ForgeConfigSpec.BooleanValue](#forgeconfigspec.booleanvalue)
- [ForgeConfigSpec.Builder](#forgeconfigspec.builder)
- [ForgeConfigSpec.Builder.BuilderConsumer](#forgeconfigspec.builder.builderconsumer)
- [ForgeConfigSpec.BuilderContext](#forgeconfigspec.buildercontext)
- [ForgeConfigSpec.ConfigValue](#forgeconfigspec.configvalue)
- [ForgeConfigSpec.DoubleValue](#forgeconfigspec.doublevalue)
- [ForgeConfigSpec.EnumValue>](#forgeconfigspec.enumvalue)
- [ForgeConfigSpec.IntValue](#forgeconfigspec.intvalue)
- [ForgeConfigSpec.LongValue](#forgeconfigspec.longvalue)
- [ForgeConfigSpec.Range>](#forgeconfigspec.range)
- [ForgeConfigSpec.ValueSpec](#forgeconfigspec.valuespec)
- [ForgeHooks](#forgehooks)
- [ForgeHooks.BiomeCallbackFunction](#forgehooks.biomecallbackfunction)
- [ForgeI18n](#forgei18n)
- [ForgeI18n.CustomReadOnlyFormat](#forgei18n.customreadonlyformat)
- [ForgeInternalHandler](#forgeinternalhandler)
- [ForgeMod](#forgemod)
- [ForgeSpawnEggItem](#forgespawneggitem)
- [ForgeSpawnEggItem.ColorRegisterHandler](#forgespawneggitem.colorregisterhandler)
- [ForgeSpawnEggItem.CommonHandler](#forgespawneggitem.commonhandler)
- [ForgeStatesProvider](#forgestatesprovider)
- [ForgeTier](#forgetier)
- [IExtensibleEnum](#iextensibleenum)
- [IForgeShearable](#iforgeshearable)
- [IMinecartCollisionHandler](#iminecartcollisionhandler)
- [IPlantable](#iplantable)
- [LenientUnboundedMapCodec](#lenientunboundedmapcodec)
- [MinecraftForge](#minecraftforge)
- [PlantType](#planttype)
- [SoundAction](#soundaction)
- [SoundActions](#soundactions)
- [Tags](#tags)
- [Tags.Biomes](#tags.biomes)
- [Tags.Blocks](#tags.blocks)
- [Tags.EntityTypes](#tags.entitytypes)
- [Tags.Fluids](#tags.fluids)
- [Tags.Items](#tags.items)
- [TierSortingRegistry](#tiersortingregistry)
- [TierSortingRegistry.ClientEvents](#tiersortingregistry.clientevents)
- [TierSortingRegistry.SyncPacket](#tiersortingregistry.syncpacket)
- [ToolAction](#toolaction)
- [ToolActions](#toolactions)
- [UsernameCache](#usernamecache)
- [UsernameCache.SaveThread](#usernamecache.savethread)
- [VillagerTradingManager](#villagertradingmanager)
- [WorldWorkerManager](#worldworkermanager)
- [WorldWorkerManager.IWorker](#worldworkermanager.iworker)
## BasicItemListing

*class* `net.minecraftforge.common.BasicItemListing`

A default, exposed implementation of ITrade. All of the other implementations of ITrade (in VillagerTrades) are not public.
 This class contains everything needed to make a MerchantOffer, the actual "trade" object shown in trading guis.

### Fields
- `protected final ItemStack price`
- `protected final ItemStack price2`
- `protected final ItemStack forSale`
- `protected final int maxTrades`
- `protected final int xp`
- `protected final float priceMult`

### Methods
- `@Nullable public @Nullable MerchantOffer getOffer(Entity p_219693_,  RandomSource p_219694_)`

## BiomeManager

*class* `net.minecraftforge.common.BiomeManager`

### Fields
- `private static BiomeManager.TrackedList<BiomeManager.BiomeEntry>[] biomes`
- `private static final List<ResourceKey<Biome>> additionalOverworldBiomes`
- `private static final List<ResourceKey<Biome>> additionalOverworldBiomesView`

### Methods
- `private static BiomeManager.TrackedList<BiomeManager.BiomeEntry>[] setupBiomes()`
- `public static void addAdditionalOverworldBiomes(ResourceKey<Biome> biome)`
  Add biomes that you add to the overworld without using addBiome(BiomeType, BiomeEntry)
- `public static boolean addBiome(BiomeManager.BiomeType type,  BiomeManager.BiomeEntry entry)`
- `public static boolean removeBiome(BiomeManager.BiomeType type,  BiomeManager.BiomeEntry entry)`
- `public static List<ResourceKey<Biome>> getAdditionalOverworldBiomes()`
  - returns: list of biomes that might be generated in the overworld in addition to the vanilla biomes
- `public static com.google.common.collect.ImmutableList<BiomeManager.BiomeEntry> getBiomes(BiomeManager.BiomeType type)`
- `public static boolean isTypeListModded(BiomeManager.BiomeType type)`

## BiomeManager.BiomeEntry

*class* `net.minecraftforge.common.BiomeManager.BiomeEntry`

Enclosing class: BiomeManager

### Fields
- `private final ResourceKey<Biome> key`

### Methods
- `public ResourceKey<Biome> getKey()`

## BiomeManager.TrackedList

*class* `net.minecraftforge.common.BiomeManager.TrackedList`

Enclosing class: BiomeManager

### Fields
- `private static final long serialVersionUID` (= 1L)
- `private boolean isModded`

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public E set(int index,  E element)`
- `public boolean add(E e)`
- `public void add(int index,  E element)`
- `public E remove(int index)`
- `public boolean remove(Object o)`
- `public void clear()`
- `public boolean addAll(Collection<? extends E> c)`
- `public boolean addAll(int index,  Collection<? extends E> c)`
- `public boolean removeAll(Collection<?> c)`
- `public boolean retainAll(Collection<?> c)`
- `public boolean isModded()`

### Inherited methods
- from `java.util.ArrayList`: `clone`, `contains`, `ensureCapacity`, `equals`, `forEach`, `get`, `hashCode`, `indexOf`, `isEmpty`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeIf`, `removeRange`, `replaceAll`, `size`, `sort`, `spliterator`, `subList`, `toArray`, `toArray`, `trimToSize`
- from `java.util.AbstractCollection`: `containsAll`, `toString`
- from `java.util.Collection`: `parallelStream`, `stream`, `toArray`
- from `java.util.List`: `containsAll`

## Class BiomeManager.BiomeType

*enum* `net.minecraftforge.common.Class BiomeManager.BiomeType`

Enclosing class: BiomeManager

### Methods
- `public static BiomeManager.BiomeType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BiomeManager.BiomeType valueOf(String name)`
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

## CreativeModeTabRegistry

*class* `net.minecraftforge.common.CreativeModeTabRegistry`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation CREATIVE_MODE_TAB_ORDERING_JSON`
- `private static final List<CreativeModeTab> SORTED_TABS`
- `private static final List<CreativeModeTab> SORTED_TABS_VIEW`
- `private static final List<CreativeModeTab> DEFAULT_TABS`
- `private static final com.google.common.collect.Multimap<ResourceLocation,ResourceLocation> edges`

### Methods
- `public static List<CreativeModeTab> getSortedCreativeModeTabs()`
  Returns an unmodifiable view of the sorted list of creative mode tabs in ascending order.
  - returns: an unmodifiable view of the sorted list of creative mode tabs in ascending order
- `public static List<CreativeModeTab> getDefaultTabs()`
- `@Nullable public static @Nullable CreativeModeTab getTab(ResourceLocation name)`
  Returns the CreativeModeTab with the given name, or null.
  - param: name - the name to look up
  - returns: the CreativeModeTab with the given name, or null
- `@Nullable public static @Nullable ResourceLocation getName(CreativeModeTab tab)`
  Returns the name of the given CreativeModeTab, or null.
  - param: tab - the tab to look up
  - returns: the name of the given CreativeModeTab, or null
- `static PreparableReloadListener getReloadListener()`
- `private static void recalculateItemCreativeModeTabs()`
- `private static void setCreativeModeTabOrder(List<CreativeModeTab> tierList)`
- `private static void runInServerThreadIfPossible(it.unimi.dsi.fastutil.booleans.BooleanConsumer runnable)`
- `@Internal public static void sortTabs()`
- `private static void addTabOrder(CreativeModeTab tab,  ResourceLocation name)`

## DungeonHooks

*class* `net.minecraftforge.common.DungeonHooks`

### Fields
- `private static ArrayList<DungeonHooks.DungeonMob> dungeonMobs`

### Methods
- `public static float addDungeonMob(EntityType<?> type,  int rarity)`
  Adds a mob to the possible list of creatures the spawner will create.
   If the mob is already in the spawn list, the rarity will be added to the existing one,
   causing the mob to be more common.
  - param: type - Monster type
  - param: rarity - The rarity of selecting this mob over others. Must be greater then 0.
 Vanilla Minecraft has the following mobs:
 Spider 100
 Skeleton 100
 Zombie 200
 Meaning, Zombies are twice as common as spiders or skeletons.
  - returns: The new rarity of the monster,
- `public static int removeDungeonMob(EntityType<?> name)`
  Will completely remove a Mob from the dungeon spawn list.
  - param: name - The name of the mob to remove
  - returns: The rarity of the removed mob, prior to being removed.
- `public static EntityType<?> getRandomDungeonMob(RandomSource rand)`
  Gets a random mob name from the list.
  - param: rand - World generation random number generator
  - returns: The mob name

## DungeonHooks.DungeonMob

*class* `net.minecraftforge.common.DungeonHooks.DungeonMob`

Enclosing class: DungeonHooks

### Fields
- `public final EntityType<?> type`

### Methods
- `public boolean equals(Object target)`

### Inherited methods
- from `net.minecraft.util.random.WeightedEntry.IntrusiveBase`: `getWeight`

## FarmlandWaterManager

*class* `net.minecraftforge.common.FarmlandWaterManager`

### Fields
- `private static final boolean DEBUG`
- `private static final Map<LevelReader,Map<ChunkPos,ChunkTicketManager<Vec3>>> customWaterHandler`
- `private static final org.apache.logging.log4j.Logger LOGGER`

### Methods
- `public static <T extends SimpleTicket<Vec3>> T addCustomTicket(Level level,  T ticket,  ChunkPos masterChunk,  ChunkPos... additionalChunks)`
  Adds a custom ticket.
   Use addAABBTicket(Level, AABB) if you just need a ticket that can water a certain area.
  
   If you don't want to water the region anymore, call SimpleTicket.invalidate(). Also call this
   when the region this is unloaded (e.g. your TE is unloaded or the block is removed), and validate once it is loaded
  - param: level - The level where the region should be marked. Only server-side worlds are allowed
  - param: ticket - Your ticket you want to have registered
  - param: masterChunk - The chunk pos that is controls when the ticket may be unloaded. The ticket should originate from here.
  - param: additionalChunks - The chunks in that this ticket wants to operate as well.
  - returns: The ticket for your requested region.
- `public static AABBTicket addAABBTicket(Level level,  AABB aabb)`
  Convenience method to add a ticket that is backed by an AABB.
  
   If you don't want to water the region anymore, call SimpleTicket.invalidate(). Also call this
   when the region this is unloaded (e.g. your TE is unloaded or the block is removed), and validate once it is loaded
  
   The AABB in the ticket is immutable
  - param: level - The level where the region should be marked. Only server-side worlds are allowed
  - param: aabb - The region where blocks should be watered
  - returns: The ticket for your requested region.
- `private static double getDistanceSq(ChunkPos pos,  Vec3 vec3d)`
- `public static boolean hasBlockWaterTicket(LevelReader level,  BlockPos pos)`
  Tests if a block is in a region that is watered by blocks. This does not check vanilla water, see net.minecraft.level.level.block.FarmBlock#isNearWater(LevelReader, BlockPos)
  - returns: true if there is a ticket with an AABB that includes your block
- `static void removeTickets(ChunkAccess chunk)`
- `private static ChunkTicketManager<Vec3> getTicketManager(ChunkPos pos,  LevelReader level)`

## ForgeConfig

*class* `net.minecraftforge.common.ForgeConfig`

### Fields
- `static final ForgeConfigSpec clientSpec`
- `public static final ForgeConfig.Client CLIENT`
- `static final ForgeConfigSpec commonSpec`
- `public static final ForgeConfig.Common COMMON`
- `static final ForgeConfigSpec serverSpec`
- `public static final ForgeConfig.Server SERVER`

### Methods
- `public static void onLoad(ModConfigEvent.Loading configEvent)`
- `public static void onFileChange(ModConfigEvent.Reloading configEvent)`

## ForgeConfig.Client

*class* `net.minecraftforge.common.ForgeConfig.Client`

Client specific configuration - only loaded clientside from forge-client.toml

Enclosing class: ForgeConfig

### Fields
- `public final ForgeConfigSpec.BooleanValue alwaysSetupTerrainOffThread`
- `public final ForgeConfigSpec.BooleanValue experimentalForgeLightPipelineEnabled`
- `public final ForgeConfigSpec.BooleanValue showLoadWarnings`
- `public final ForgeConfigSpec.BooleanValue useCombinedDepthStencilAttachment`
- `@Deprecated(since="1.20.1",  forRemoval=true) public final ForgeConfigSpec.BooleanValue compressLanIPv6Addresses` (deprecated)
- `public final ForgeConfigSpec.BooleanValue calculateAllNormals`
- `public final ForgeConfigSpec.BooleanValue stabilizeDirectionGetNearest`

## ForgeConfig.Common

*class* `net.minecraftforge.common.ForgeConfig.Common`

General configuration that doesn't need to be synchronized but needs to be available before server startup

Enclosing class: ForgeConfig

## ForgeConfig.Server

*class* `net.minecraftforge.common.ForgeConfig.Server`

Enclosing class: ForgeConfig

### Fields
- `public final ForgeConfigSpec.BooleanValue removeErroringBlockEntities`
- `public final ForgeConfigSpec.BooleanValue removeErroringEntities`
- `public final ForgeConfigSpec.BooleanValue fullBoundingBoxLadders`
- `public final ForgeConfigSpec.DoubleValue zombieBaseSummonChance`
- `public final ForgeConfigSpec.DoubleValue zombieBabyChance`
- `public final ForgeConfigSpec.ConfigValue<String> permissionHandler`
- `public final ForgeConfigSpec.BooleanValue advertiseDedicatedServerToLan`

## ForgeConfigSpec

*class* `net.minecraftforge.common.ForgeConfigSpec`

### Fields
- `private Map<List<String>,String> levelComments`
- `private Map<List<String>,String> levelTranslationKeys`
- `private com.electronwill.nightconfig.core.UnmodifiableConfig values`
- `private com.electronwill.nightconfig.core.Config childConfig`
- `private boolean isCorrecting`
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final com.google.common.base.Joiner LINE_JOINER`
- `private static final com.google.common.base.Joiner DOT_JOINER`
- `private static final com.google.common.base.Splitter DOT_SPLITTER`

### Inherited fields
- from `com.electronwill.nightconfig.core.utils.UnmodifiableConfigWrapper`: `config`

### Methods
- `public String getLevelComment(List<String> path)`
- `public String getLevelTranslationKey(List<String> path)`
- `public void setConfig(com.electronwill.nightconfig.core.CommentedConfig config)`
- `public void acceptConfig(com.electronwill.nightconfig.core.CommentedConfig data)`
- `public boolean isCorrecting()`
- `public boolean isLoaded()`
- `public com.electronwill.nightconfig.core.UnmodifiableConfig getSpec()`
- `public com.electronwill.nightconfig.core.UnmodifiableConfig getValues()`
- `public void afterReload()`
- `private void resetCaches(Iterable<Object> configValues)`
- `public void save()`
- `public boolean isCorrect(com.electronwill.nightconfig.core.CommentedConfig config)`
- `public int correct(com.electronwill.nightconfig.core.CommentedConfig config)`
- `public int correct(com.electronwill.nightconfig.core.CommentedConfig config,  com.electronwill.nightconfig.core.ConfigSpec.CorrectionListener listener)`
- `public int correct(com.electronwill.nightconfig.core.CommentedConfig config,  com.electronwill.nightconfig.core.ConfigSpec.CorrectionListener listener,  com.electronwill.nightconfig.core.ConfigSpec.CorrectionListener commentListener)`
- `private int correct(com.electronwill.nightconfig.core.UnmodifiableConfig spec,  com.electronwill.nightconfig.core.CommentedConfig config,  LinkedList<String> parentPath,  List<String> parentPathUnmodifiable,  com.electronwill.nightconfig.core.ConfigSpec.CorrectionListener listener,  com.electronwill.nightconfig.core.ConfigSpec.CorrectionListener commentListener,  boolean dryRun)`
- `private boolean stringsMatchIgnoringNewlines(@Nullable  @Nullable Object obj1,  @Nullable  @Nullable Object obj2)`
- `private static List<String> split(String path)`

### Inherited methods
- from `com.electronwill.nightconfig.core.utils.UnmodifiableConfigWrapper`: `configFormat`, `contains`, `entrySet`, `equals`, `getRaw`, `hashCode`, `isEmpty`, `size`, `valueMap`
- from `net.minecraftforge.fml.config.IConfigSpec`: `self`
- from `com.electronwill.nightconfig.core.UnmodifiableConfig`: `apply`, `apply`, `configFormat`, `contains`, `contains`, `entrySet`, `get`, `get`, `getByte`, `getByte`, `getByteOrElse`, `getByteOrElse`, `getChar`, `getChar`, `getCharOrElse`, `getCharOrElse`, `getEnum`, `getEnum`, `getEnum`, `getEnum`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getEnumOrElse`, `getInt`, `getInt`, `getIntOrElse`, `getIntOrElse`, `getIntOrElse`, `getIntOrElse`, `getLong`, `getLong`, `getLongOrElse`, `getLongOrElse`, `getLongOrElse`, `getLongOrElse`, `getOptional`, `getOptional`, `getOptionalEnum`, `getOptionalEnum`, `getOptionalEnum`, `getOptionalEnum`, `getOptionalInt`, `getOptionalInt`, `getOptionalLong`, `getOptionalLong`, `getOrElse`, `getOrElse`, `getOrElse`, `getOrElse`, `getRaw`, `getRaw`, `getShort`, `getShort`, `getShortOrElse`, `getShortOrElse`, `isEmpty`, `isNull`, `isNull`, `size`, `valueMap`

## ForgeConfigSpec.BooleanValue

*class* `net.minecraftforge.common.ForgeConfigSpec.BooleanValue`

Enclosing class: ForgeConfigSpec

### Inherited methods
- from `net.minecraftforge.common.ForgeConfigSpec.ConfigValue`: `clearCache`, `get`, `getDefault`, `getPath`, `getRaw`, `next`, `save`, `set`

## ForgeConfigSpec.Builder

*class* `net.minecraftforge.common.ForgeConfigSpec.Builder`

Enclosing class: ForgeConfigSpec

### Fields
- `private final com.electronwill.nightconfig.core.Config storage`
- `private ForgeConfigSpec.BuilderContext context`
- `private Map<List<String>,String> levelComments`
- `private Map<List<String>,String> levelTranslationKeys`
- `private List<String> currentPath`
- `private List<ForgeConfigSpec.ConfigValue<?>> values`

### Methods
- `public <T> ForgeConfigSpec.ConfigValue<T> define(String path,  T defaultValue)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(List<String> path,  T defaultValue)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(String path,  T defaultValue,  Predicate<Object> validator)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(List<String> path,  T defaultValue,  Predicate<Object> validator)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(String path,  Supplier<T> defaultSupplier,  Predicate<Object> validator)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(List<String> path,  Supplier<T> defaultSupplier,  Predicate<Object> validator)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(List<String> path,  Supplier<T> defaultSupplier,  Predicate<Object> validator,  Class<?> clazz)`
- `public <T> ForgeConfigSpec.ConfigValue<T> define(List<String> path,  ForgeConfigSpec.ValueSpec value,  Supplier<T> defaultSupplier)`
- `public <V extends Comparable<? super V>> ForgeConfigSpec.ConfigValue<V> defineInRange(String path,  V defaultValue,  V min,  V max,  Class<V> clazz)`
- `public <V extends Comparable<? super V>> ForgeConfigSpec.ConfigValue<V> defineInRange(List<String> path,  V defaultValue,  V min,  V max,  Class<V> clazz)`
- `public <V extends Comparable<? super V>> ForgeConfigSpec.ConfigValue<V> defineInRange(String path,  Supplier<V> defaultSupplier,  V min,  V max,  Class<V> clazz)`
- `public <V extends Comparable<? super V>> ForgeConfigSpec.ConfigValue<V> defineInRange(List<String> path,  Supplier<V> defaultSupplier,  V min,  V max,  Class<V> clazz)`
- `public <T> ForgeConfigSpec.ConfigValue<T> defineInList(String path,  T defaultValue,  Collection<? extends T> acceptableValues)`
- `public <T> ForgeConfigSpec.ConfigValue<T> defineInList(String path,  Supplier<T> defaultSupplier,  Collection<? extends T> acceptableValues)`
- `public <T> ForgeConfigSpec.ConfigValue<T> defineInList(List<String> path,  T defaultValue,  Collection<? extends T> acceptableValues)`
- `public <T> ForgeConfigSpec.ConfigValue<T> defineInList(List<String> path,  Supplier<T> defaultSupplier,  Collection<? extends T> acceptableValues)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineList(String path,  List<? extends T> defaultValue,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineList(String path,  Supplier<List<? extends T>> defaultSupplier,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineList(List<String> path,  List<? extends T> defaultValue,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineList(List<String> path,  Supplier<List<? extends T>> defaultSupplier,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineListAllowEmpty(String path,  List<? extends T> defaultValue,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineListAllowEmpty(String path,  Supplier<List<? extends T>> defaultSupplier,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineListAllowEmpty(List<String> path,  List<? extends T> defaultValue,  Predicate<Object> elementValidator)`
- `public <T> ForgeConfigSpec.ConfigValue<List<? extends T>> defineListAllowEmpty(List<String> path,  Supplier<List<? extends T>> defaultSupplier,  Predicate<Object> elementValidator)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  V... acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter,  V... acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  V... acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter,  V... acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  Collection<V> acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter,  Collection<V> acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  Collection<V> acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter,  Collection<V> acceptableValues)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  Predicate<Object> validator)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter,  Predicate<Object> validator)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  Predicate<Object> validator)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  V defaultValue,  com.electronwill.nightconfig.core.EnumGetMethod converter,  Predicate<Object> validator)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  Supplier<V> defaultSupplier,  Predicate<Object> validator,  Class<V> clazz)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(String path,  Supplier<V> defaultSupplier,  com.electronwill.nightconfig.core.EnumGetMethod converter,  Predicate<Object> validator,  Class<V> clazz)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  Supplier<V> defaultSupplier,  Predicate<Object> validator,  Class<V> clazz)`
- `public <V extends Enum<V>> ForgeConfigSpec.EnumValue<V> defineEnum(List<String> path,  Supplier<V> defaultSupplier,  com.electronwill.nightconfig.core.EnumGetMethod converter,  Predicate<Object> validator,  Class<V> clazz)`
- `public ForgeConfigSpec.BooleanValue define(String path,  boolean defaultValue)`
- `public ForgeConfigSpec.BooleanValue define(List<String> path,  boolean defaultValue)`
- `public ForgeConfigSpec.BooleanValue define(String path,  Supplier<Boolean> defaultSupplier)`
- `public ForgeConfigSpec.BooleanValue define(List<String> path,  Supplier<Boolean> defaultSupplier)`
- `public ForgeConfigSpec.DoubleValue defineInRange(String path,  double defaultValue,  double min,  double max)`
- `public ForgeConfigSpec.DoubleValue defineInRange(List<String> path,  double defaultValue,  double min,  double max)`
- `public ForgeConfigSpec.DoubleValue defineInRange(String path,  Supplier<Double> defaultSupplier,  double min,  double max)`
- `public ForgeConfigSpec.DoubleValue defineInRange(List<String> path,  Supplier<Double> defaultSupplier,  double min,  double max)`
- `public ForgeConfigSpec.IntValue defineInRange(String path,  int defaultValue,  int min,  int max)`
- `public ForgeConfigSpec.IntValue defineInRange(List<String> path,  int defaultValue,  int min,  int max)`
- `public ForgeConfigSpec.IntValue defineInRange(String path,  Supplier<Integer> defaultSupplier,  int min,  int max)`
- `public ForgeConfigSpec.IntValue defineInRange(List<String> path,  Supplier<Integer> defaultSupplier,  int min,  int max)`
- `public ForgeConfigSpec.LongValue defineInRange(String path,  long defaultValue,  long min,  long max)`
- `public ForgeConfigSpec.LongValue defineInRange(List<String> path,  long defaultValue,  long min,  long max)`
- `public ForgeConfigSpec.LongValue defineInRange(String path,  Supplier<Long> defaultSupplier,  long min,  long max)`
- `public ForgeConfigSpec.LongValue defineInRange(List<String> path,  Supplier<Long> defaultSupplier,  long min,  long max)`
- `public ForgeConfigSpec.Builder comment(String comment)`
- `public ForgeConfigSpec.Builder comment(String... comment)`
- `public ForgeConfigSpec.Builder translation(String translationKey)`
- `public ForgeConfigSpec.Builder worldRestart()`
- `public ForgeConfigSpec.Builder push(String path)`
- `public ForgeConfigSpec.Builder push(List<String> path)`
- `public ForgeConfigSpec.Builder pop()`
- `public ForgeConfigSpec.Builder pop(int count)`
- `public <T> org.apache.commons.lang3.tuple.Pair<T,ForgeConfigSpec> configure(Function<ForgeConfigSpec.Builder,T> consumer)`
- `public ForgeConfigSpec build()`

## ForgeConfigSpec.Builder.BuilderConsumer

*interface* `net.minecraftforge.common.ForgeConfigSpec.Builder.BuilderConsumer`

Enclosing class: ForgeConfigSpec.Builder

### Methods
- `void accept(ForgeConfigSpec.Builder builder)`

## ForgeConfigSpec.BuilderContext

*class* `net.minecraftforge.common.ForgeConfigSpec.BuilderContext`

Enclosing class: ForgeConfigSpec

### Fields
- `private final List<String> comment`
- `private String langKey`
- `private ForgeConfigSpec.Range<?> range`
- `private boolean worldRestart`
- `private Class<?> clazz`

### Methods
- `public void addComment(String value)`
- `public void clearComment()`
- `public boolean hasComment()`
- `public String buildComment()`
- `public String buildComment(List<String> path)`
- `public void setTranslationKey(String value)`
- `public String getTranslationKey()`
- `public <V extends Comparable<? super V>> void setRange(ForgeConfigSpec.Range<V> value)`
- `public <V extends Comparable<? super V>> ForgeConfigSpec.Range<V> getRange()`
- `public void worldRestart()`
- `public boolean needsWorldRestart()`
- `public void setClazz(Class<?> clazz)`
- `public Class<?> getClazz()`
- `public void ensureEmpty()`
- `private void validate(Object value,  String message)`
- `private void validate(boolean value,  String message)`

## ForgeConfigSpec.ConfigValue

*class* `net.minecraftforge.common.ForgeConfigSpec.ConfigValue`

Enclosing class: ForgeConfigSpec

### Fields
- `private static boolean USE_CACHES`
- `private final ForgeConfigSpec.Builder parent`
- `private final List<String> path`
- `private final Supplier<T> defaultSupplier`
- `private T cachedValue`
- `private ForgeConfigSpec spec`

### Methods
- `public List<String> getPath()`
- `public T get()`
  Returns the actual value for the configuration setting, throwing if the config has not yet been loaded.
  - returns: the actual value for the setting
  - throws: NullPointerException - if the config spec object that will contain this has
 not yet been built
  - throws: IllegalStateException - if the associated config has not yet been loaded
- `protected T getRaw(com.electronwill.nightconfig.core.Config config,  List<String> path,  Supplier<T> defaultSupplier)`
- `public T getDefault()`
  Returns the default value for the configuration setting.
  - returns: the default value for the configuration setting
- `public ForgeConfigSpec.Builder next()`
- `public void save()`
- `public void set(T value)`
- `public void clearCache()`

## ForgeConfigSpec.DoubleValue

*class* `net.minecraftforge.common.ForgeConfigSpec.DoubleValue`

Enclosing class: ForgeConfigSpec

### Methods
- `protected Double getRaw(com.electronwill.nightconfig.core.Config config,  List<String> path,  Supplier<Double> defaultSupplier)`

### Inherited methods
- from `net.minecraftforge.common.ForgeConfigSpec.ConfigValue`: `clearCache`, `get`, `getDefault`, `getPath`, `next`, `save`, `set`

## ForgeConfigSpec.EnumValue>

*class* `net.minecraftforge.common.ForgeConfigSpec.EnumValue>`

Enclosing class: ForgeConfigSpec

### Fields
- `private final com.electronwill.nightconfig.core.EnumGetMethod converter`
- `private final Class<T extends Enum<T>> clazz`

### Methods
- `protected T getRaw(com.electronwill.nightconfig.core.Config config,  List<String> path,  Supplier<T> defaultSupplier)`

### Inherited methods
- from `net.minecraftforge.common.ForgeConfigSpec.ConfigValue`: `clearCache`, `get`, `getDefault`, `getPath`, `next`, `save`, `set`

## ForgeConfigSpec.IntValue

*class* `net.minecraftforge.common.ForgeConfigSpec.IntValue`

Enclosing class: ForgeConfigSpec

### Methods
- `protected Integer getRaw(com.electronwill.nightconfig.core.Config config,  List<String> path,  Supplier<Integer> defaultSupplier)`

### Inherited methods
- from `net.minecraftforge.common.ForgeConfigSpec.ConfigValue`: `clearCache`, `get`, `getDefault`, `getPath`, `next`, `save`, `set`

## ForgeConfigSpec.LongValue

*class* `net.minecraftforge.common.ForgeConfigSpec.LongValue`

Enclosing class: ForgeConfigSpec

### Methods
- `protected Long getRaw(com.electronwill.nightconfig.core.Config config,  List<String> path,  Supplier<Long> defaultSupplier)`

### Inherited methods
- from `net.minecraftforge.common.ForgeConfigSpec.ConfigValue`: `clearCache`, `get`, `getDefault`, `getPath`, `next`, `save`, `set`

## ForgeConfigSpec.Range>

*class* `net.minecraftforge.common.ForgeConfigSpec.Range>`

Enclosing class: ForgeConfigSpec

### Fields
- `private final Class<? extends V extends Comparable<? super V>> clazz`
- `private final V extends Comparable<? super V> min`
- `private final V extends Comparable<? super V> max`

### Methods
- `public Class<? extends V> getClazz()`
- `public V getMin()`
- `public V getMax()`
- `private boolean isNumber(Object other)`
- `public boolean test(Object t)`
- `public Object correct(Object value,  Object def)`
- `public String toString()`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ForgeConfigSpec.ValueSpec

*class* `net.minecraftforge.common.ForgeConfigSpec.ValueSpec`

Enclosing class: ForgeConfigSpec

### Fields
- `private final String comment`
- `private final String langKey`
- `private final ForgeConfigSpec.Range<?> range`
- `private final boolean worldRestart`
- `private final Class<?> clazz`
- `private final Supplier<?> supplier`
- `private final Predicate<Object> validator`

### Methods
- `public String getComment()`
- `public String getTranslationKey()`
- `public <V extends Comparable<? super V>> ForgeConfigSpec.Range<V> getRange()`
- `public boolean needsWorldRestart()`
- `public Class<?> getClazz()`
- `public boolean test(Object value)`
- `public Object correct(Object value)`
- `public Object getDefault()`

## ForgeHooks

*class* `net.minecraftforge.common.ForgeHooks`

FOR INTERNAL USE ONLY, DO NOT CALL DIRECTLY

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker FORGEHOOKS`
- `private static final org.apache.logging.log4j.Marker WORLDPERSISTENCE`
- `static final Pattern URL_PATTERN`
- `private static ThreadLocal<Player> craftingPlayer`
- `private static final Map<Holder.Reference<Item>,Integer> VANILLA_BURNS`
- `private static final Map<EntityType<? extends LivingEntity>,AttributeSupplier> FORGE_ATTRIBUTES`
- `private static final Lazy<Map<String,StructuresBecomeConfiguredFix.Conversion>> FORGE_CONVERSION_MAP`

### Methods
- `public static boolean canContinueUsing(@NotNull  @NotNull ItemStack from,  @NotNull  @NotNull ItemStack to)`
- `public static boolean isCorrectToolForDrops(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull Player player)`
- `public static boolean onItemStackedOn(ItemStack carriedItem,  ItemStack stackedOnItem,  Slot slot,  ClickAction action,  Player player,  SlotAccess carriedSlotAccess)`
- `public static void onDifficultyChange(Difficulty difficulty,  Difficulty oldDifficulty)`
- `public static LivingChangeTargetEvent onLivingChangeTarget(LivingEntity entity,  LivingEntity originalTarget,  LivingChangeTargetEvent.ILivingTargetType targetType)`
- `public static Brain<?> onLivingMakeBrain(LivingEntity entity,  Brain<?> originalBrain,  com.mojang.serialization.Dynamic<?> dynamic)`
- `public static boolean onLivingTick(LivingEntity entity)`
- `public static boolean onLivingAttack(LivingEntity entity,  DamageSource src,  float amount)`
- `public static boolean onPlayerAttack(LivingEntity entity,  DamageSource src,  float amount)`
- `public static LivingKnockBackEvent onLivingKnockBack(LivingEntity target,  float strength,  double ratioX,  double ratioZ)`
- `public static boolean onLivingUseTotem(LivingEntity entity,  DamageSource damageSource,  ItemStack totem,  InteractionHand hand)`
- `public static float onLivingHurt(LivingEntity entity,  DamageSource src,  float amount)`
- `public static float onLivingDamage(LivingEntity entity,  DamageSource src,  float amount)`
- `public static boolean onLivingDeath(LivingEntity entity,  DamageSource src)`
- `public static boolean onLivingDrops(LivingEntity entity,  DamageSource source,  Collection<ItemEntity> drops,  int lootingLevel,  boolean recentlyHit)`
- `public static int getLootingLevel(Entity target,  @Nullable  @Nullable Entity killer,  @Nullable  @Nullable DamageSource cause)`
- `public static int getLootingLevel(LivingEntity target,  @Nullable  @Nullable DamageSource cause,  int level)`
- `public static double getEntityVisibilityMultiplier(LivingEntity entity,  Entity lookingEntity,  double originalMultiplier)`
- `public static Optional<BlockPos> isLivingOnLadder(@NotNull  @NotNull BlockState state,  @NotNull  @NotNull Level level,  @NotNull  @NotNull BlockPos pos,  @NotNull  @NotNull LivingEntity entity)`
- `public static void onLivingJump(LivingEntity entity)`
- `@Nullable public static @Nullable ItemEntity onPlayerTossEvent(@NotNull  @NotNull Player player,  @NotNull  @NotNull ItemStack item,  boolean includeName)`
- `public static boolean onVanillaGameEvent(Level level,  GameEvent vanillaEvent,  Vec3 pos,  GameEvent.Context context)`
- `@Nullable public static @Nullable Component onServerChatSubmittedEvent(ServerPlayer player,  Component message)`
- `public static Component newChatWithLinks(String string)`
- `public static Component newChatWithLinks(String string,  boolean allowMissingHeader)`
- `public static void dropXpForBlock(BlockState state,  ServerLevel level,  BlockPos pos,  ItemStack stack)`
- `public static int onBlockBreakEvent(Level level,  GameType gameType,  ServerPlayer entityPlayer,  BlockPos pos)`
- `public static InteractionResult onPlaceItemIntoWorld(@NotNull  @NotNull UseOnContext context)`
- `public static boolean onAnvilChange(AnvilMenu container,  @NotNull  @NotNull ItemStack left,  @NotNull  @NotNull ItemStack right,  Container outputSlot,  String name,  int baseCost,  Player player)`
- `public static float onAnvilRepair(Player player,  @NotNull  @NotNull ItemStack output,  @NotNull  @NotNull ItemStack left,  @NotNull  @NotNull ItemStack right)`
- `public static int onGrindstoneChange(@NotNull  @NotNull ItemStack top,  @NotNull  @NotNull ItemStack bottom,  Container outputSlot,  int xp)`
- `public static boolean onGrindstoneTake(Container inputSlots,  ContainerLevelAccess access,  Function<Level,Integer> xpFunction)`
- `public static void setCraftingPlayer(Player player)`
- `public static Player getCraftingPlayer()`
- `@NotNull public static @NotNull ItemStack getCraftingRemainingItem(@NotNull  @NotNull ItemStack stack)`
- `public static boolean onPlayerAttackTarget(Player player,  Entity target)`
- `public static InteractionResult onInteractEntityAt(Player player,  Entity entity,  HitResult ray,  InteractionHand hand)`
- `public static InteractionResult onInteractEntityAt(Player player,  Entity entity,  Vec3 vec3d,  InteractionHand hand)`
- `public static InteractionResult onInteractEntity(Player player,  Entity entity,  InteractionHand hand)`
- `public static InteractionResult onItemRightClick(Player player,  InteractionHand hand)`
- `public static PlayerInteractEvent.LeftClickBlock onLeftClickBlock(Player player,  BlockPos pos,  Direction face,  ServerboundPlayerActionPacket.Action action)`
- `public static PlayerInteractEvent.LeftClickBlock onClientMineHold(Player player,  BlockPos pos,  Direction face)`
- `public static PlayerInteractEvent.RightClickBlock onRightClickBlock(Player player,  InteractionHand hand,  BlockPos pos,  BlockHitResult hitVec)`
- `public static void onEmptyClick(Player player,  InteractionHand hand)`
- `public static void onEmptyLeftClick(Player player)`
- `public static GameType onChangeGameType(Player player,  GameType currentGameType,  GameType newGameType)`
- `public static <E extends LootPool> com.mojang.serialization.Codec<List<E>> createLootTablePoolCodec(com.mojang.serialization.Codec<E> vanilla)`
- `public static FluidType getVanillaFluidType(Fluid fluid)`
  Returns a vanilla fluid type for the given fluid.
  - param: fluid - the fluid looking for its type
  - returns: the type of the fluid if vanilla
  - throws: RuntimeException - if the fluid is not a vanilla one
- `public static TagKey<Block> getTagFromVanillaTier(Tiers tier)`
- `public static boolean onCropsGrowPre(Level level,  BlockPos pos,  BlockState state,  boolean def)`
- `public static void onCropsGrowPost(Level level,  BlockPos pos,  BlockState state)`
- `@Nullable public static @Nullable CriticalHitEvent getCriticalHit(Player player,  Entity target,  boolean vanillaCritical,  float damageModifier)`
- `public static com.google.common.collect.Multimap<Attribute,AttributeModifier> getAttributeModifiers(ItemStack stack,  EquipmentSlot equipmentSlot,  com.google.common.collect.Multimap<Attribute,AttributeModifier> attributes)`
  Hook to fire ItemAttributeModifierEvent. Modders should use ItemStack.getAttributeModifiers(EquipmentSlot) instead.
- `public static ItemStack getProjectile(LivingEntity entity,  ItemStack projectileWeaponItem,  ItemStack projectile)`
  Hook to fire LivingGetProjectileEvent. Returns the ammo to be used.
- `@Nullable public static @Nullable String getDefaultCreatorModId(@NotNull  @NotNull ItemStack itemStack)`
  Used as the default implementation of IForgeItem.getCreatorModId(net.minecraft.world.item.ItemStack). Call that method instead.
- `public static boolean onFarmlandTrample(Level level,  BlockPos pos,  BlockState state,  float fallDistance,  Entity entity)`
- `public static int onNoteChange(Level level,  BlockPos pos,  BlockState state,  int old,  int _new)`
- `public static boolean hasNoElements(Ingredient ingredient)`
- `@Nullable public static @Nullable EntityDataSerializer<?> getSerializer(int id,  CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>> vanilla)`
- `public static int getSerializerId(EntityDataSerializer<?> serializer,  CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>> vanilla)`
- `public static boolean canEntityDestroy(Level level,  BlockPos pos,  LivingEntity entity)`
- `public static int getBurnTime(ItemStack stack,  @Nullable  @Nullable RecipeType<?> recipeType)`
  Gets the burn time of this itemstack.
- `public static void updateBurns()`
- `public static it.unimi.dsi.fastutil.objects.ObjectArrayList<ItemStack> modifyLoot(ResourceLocation lootTableId,  it.unimi.dsi.fastutil.objects.ObjectArrayList<ItemStack> generatedLoot,  LootContext context)`
  Handles the modification of loot table drops via the registered Global Loot Modifiers,
   so that custom effects can be processed.
  
   All loot-table generated loot should be passed to this function.
  - param: lootTableId - The ID of the loot table currently being queried
  - param: generatedLoot - The loot generated by the loot table
  - param: context - The loot context that generated the loot, unmodified
  - returns: The modified list of drops
- `public static List<String> getModPacks()`
- `public static List<String> getModPacksWithVanilla()`
- `@Deprecated public static Map<EntityType<? extends LivingEntity>,AttributeSupplier> getAttributesView()` (deprecated)
- `@Deprecated public static void modifyAttributes()` (deprecated)
- `public static void writeAdditionalLevelSaveData(WorldData worldData,  CompoundTag levelTag)`
- `@Internal public static void readAdditionalLevelSaveData(CompoundTag rootTag,  LevelStorageSource.LevelDirectory levelDirectory)`
- `public static String encodeLifecycle(com.mojang.serialization.Lifecycle lifecycle)`
- `public static com.mojang.serialization.Lifecycle parseLifecycle(String lifecycle)`
- `public static boolean shouldSuppressEnderManAnger(EnderMan enderMan,  Player player,  ItemStack mask)`
- `public static String prefixNamespace(ResourceLocation registryKey)`
  This method is used to prefix the path, where elements of the associated registry are stored, with their namespace, if it is not minecraft
  
   This rules conflicts with equal paths out. If for example the mod fancy_cheese adds a registry named cheeses,
   but the mod awesome_cheese also adds a registry called cheeses,
   they are going to have the same path cheeses, just with different namespaces.
   If additional_cheese wants to add additional cheese to awesome_cheese, but not fancy_cheese,
   it can not differentiate both. Both paths will look like data/additional_cheese/cheeses.
  
   The fix, which is applied here prefixes the path of the registry with the namespace,
   so fancy_cheese's registry stores its elements in data/<namespace>/fancy_cheese/cheeses
   and awesome_cheese's registry stores its elements in data/namespace/awesome_cheese/cheeses
  - param: registryKey - key of the registry
  - returns: path of the registry key. Prefixed with the namespace if it is not "minecraft"
- `public static boolean canUseEntitySelectors(SharedSuggestionProvider provider)`
- `@Internal public static <T> HolderLookup.RegistryLookup<T> wrapRegistryLookup(HolderLookup.RegistryLookup<T> lookup)`
- `public static void onLivingBreathe(LivingEntity entity,  int consumeAirAmount,  int refillAirAmount)`
  Handles living entities being under water. This fires the LivingBreatheEvent and if the entity's air supply
   is less than or equal to zero also the LivingDrownEvent. Additionally when the entity is under water it will
   dismount if IForgeEntity#canBeRiddenUnderFluidType(FluidType, Entity) returns false.
  - param: entity - The living entity which is currently updated
  - param: consumeAirAmount - The amount of air to consume when the entity is unable to breathe
  - param: refillAirAmount - The amount of air to refill when the entity is able to breathe
- `public static void onCreativeModeTabBuildContents(CreativeModeTab tab,  ResourceKey<CreativeModeTab> tabKey,  CreativeModeTab.DisplayItemsGenerator originalGenerator,  CreativeModeTab.ItemDisplayParameters params,  CreativeModeTab.Output output)`
- `@Internal public static boolean onCustomPayload(ICustomPacket<?> packet,  Connection connection)`
- `@Internal public static boolean onCustomPayload(CustomPayloadEvent event)`
- `@Internal public static void handleClientConfigurationComplete(Connection connection)`
- `@Internal public static Packet<ClientGamePacketListener> getEntitySpawnPacket(Entity entity)`
- `@Internal public static boolean readAndTestCondition(ICondition.IContext context,  com.google.gson.JsonObject json)`
- `@Internal public static void writeCondition(ICondition condition,  com.google.gson.JsonObject out)`
- `@Nullable @Internal public static @Nullable com.google.gson.JsonObject readConditionalAdvancement(ICondition.IContext context,  com.google.gson.JsonObject json)`
- `@Internal public static com.mojang.serialization.Codec<Ingredient> enhanceIngredientCodec(com.mojang.serialization.Codec<Ingredient> vanilla)`
- `@Internal public static <T extends Ingredient> boolean ingredientToNetwork(FriendlyByteBuf buffer,  T ingredient)`
- `public static Ingredient ingredientFromNetwork(FriendlyByteBuf buffer)`

## ForgeHooks.BiomeCallbackFunction

*interface* `net.minecraftforge.common.ForgeHooks.BiomeCallbackFunction`

Enclosing class: ForgeHooks

### Methods
- `Biome apply(Biome.ClimateSettings climate,  BiomeSpecialEffects effects,  BiomeGenerationSettings gen,  MobSpawnSettings spawns)`

## ForgeI18n

*class* `net.minecraftforge.common.ForgeI18n`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final String ALLOWED_CHARS` (= "\u00c0\u00c1\u00c2\u00c8\u00ca\u00cb\u00cd\u00d3\u00d4\u00d5\u00da\u00df\u00e3\u00f5\u011f\u0130\u0131\u0152\u0153\u015e\u015f\u0174\u0175\u017e\u0207\u0000\u0000\u0000\u0000\u0000\u0000\u0000 !\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u0000\u00c7\u00fc\u00e9\u00e2\u00e4\u00e0\u00e5\u00e7\u00ea\u00eb\u00e8\u00ef\u00ee\u00ec\u00c4\u00c5\u00c9\u00e6\u00c6\u00f4\u00f6\u00f2\u00fb\u00f9\u00ff\u00d6\u00dc\u00f8\u00a3\u00d8\u00d7\u0192\u00e1\u00ed\u00f3\u00fa\u00f1\u00d1\u00aa\u00ba\u00bf\u00ae\u00ac\u00bd\u00bc\u00a1\u00ab\u00bb\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255d\u255c\u255b\u2510\u2514\u2534\u252c\u251c\u2500\u253c\u255e\u255f\u255a\u2554\u2569\u2566\u2560\u2550\u256c\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256b\u256a\u2518\u250c\u2588\u2584\u258c\u2590\u2580\u03b1\u03b2\u0393\u03c0\u03a3\u03c3\u03bc\u03c4\u03a6\u0398\u03a9\u03b4\u221e\u2205\u2208\u2229\u2261\u00b1\u2265\u2264\u2320\u2321\u00f7\u2248\u00b0\u2219\u00b7\u221a\u207f\u00b2\u25a0\u0000")
- `private static final com.google.common.base.CharMatcher DISALLOWED_CHAR_MATCHER`
- `private static Map<String,String> i18n`
- `private static Map<String,org.apache.commons.lang3.text.FormatFactory> customFactories`
- `private static final Pattern PATTERN_CONTROL_CODE`

### Methods
- `private static void parseException(String formatString,  StringBuffer stringBuffer,  Object objectToParse)`
- `private static void parseModInfo(String formatString,  StringBuffer stringBuffer,  Object modInfo)`
- `public static String getPattern(String patternName)`
- `public static void loadLanguageData(Map<String,String> properties)`
- `public static String parseMessage(String i18nMessage,  Object... args)`
- `public static String parseFormat(String format,  Object... args)`
- `public static String stripSpecialChars(String message)`
- `public static String stripControlCodes(String text)`

## ForgeI18n.CustomReadOnlyFormat

*class* `net.minecraftforge.common.ForgeI18n.CustomReadOnlyFormat`

Enclosing class: ForgeI18n

### Fields
- `private final BiConsumer<StringBuffer,Object> formatter`

### Methods
- `public StringBuffer format(Object obj,  StringBuffer toAppendTo,  FieldPosition pos)`
- `public Object parseObject(String source,  ParsePosition pos)`

### Inherited methods
- from `java.text.Format`: `clone`, `format`, `formatToCharacterIterator`, `parseObject`

## ForgeInternalHandler

*class* `net.minecraftforge.common.ForgeInternalHandler`

### Fields
- `private static LootModifierManager INSTANCE`

### Methods
- `public void onEntityJoinWorld(EntityJoinLevelEvent event)`
- `public void onServerTick(TickEvent.ServerTickEvent event)`
- `public void checkSettings(TickEvent.ClientTickEvent event)`
- `public void onChunkUnload(ChunkEvent.Unload event)`
- `public void playerLogin(PlayerEvent.PlayerLoggedInEvent event)`
- `public void tagsUpdated(TagsUpdatedEvent event)`
- `public void onCommandsRegister(RegisterCommandsEvent event)`
- `public void onResourceReload(AddReloadListenerEvent event)`
- `static LootModifierManager getLootModifierManager()`
- `public void resourceReloadListeners(AddReloadListenerEvent event)`
- `public void builtinMobSpawnBlocker(EntityJoinLevelEvent event)`
- `public void onConnectionStart(ConnectionStartEvent event)`

## ForgeMod

*class* `net.minecraftforge.common.ForgeMod`

### Fields
- `public static final String VERSION_CHECK_CAT` (= "version_checking")
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker FORGEMOD`
- `private static final List<DeferredRegister<?>> registries`
- `private static final DeferredRegister<ArgumentTypeInfo<?,?>> COMMAND_ARGUMENT_TYPES`
- `private static final DeferredRegister<Attribute> ATTRIBUTES`
- `public static final RegistryObject<Attribute> SWIM_SPEED`
- `public static final RegistryObject<Attribute> NAMETAG_DISTANCE`
- `public static final RegistryObject<Attribute> ENTITY_GRAVITY`
- `public static final RegistryObject<Attribute> BLOCK_REACH`
  Reach Distance represents the distance at which a player may interact with the world. The default is 4.5 blocks. Players in creative mode have an additional 0.5 blocks of block reach.
- `public static final RegistryObject<Attribute> ENTITY_REACH`
  Attack Range represents the distance at which a player may attack an entity. The default is 3 blocks. Players in creative mode have an additional 3 blocks of entity reach.
   The default of 3.0 is technically considered a bug by Mojang - see MC-172289 and MC-92484. However, updating this value would allow for longer-range attacks on vanilla servers, which makes some people mad.
- `public static final RegistryObject<Attribute> STEP_HEIGHT_ADDITION`
  Step Height Addition modifies the amount of blocks an entity may walk up without jumping.
- `private static final DeferredRegister<com.mojang.serialization.Codec<? extends BiomeModifier>> BIOME_MODIFIER_SERIALIZERS`
- `private static final DeferredRegister<com.mojang.serialization.Codec<? extends StructureModifier>> STRUCTURE_MODIFIER_SERIALIZERS`
- `private static final DeferredRegister<HolderSetType> HOLDER_SET_TYPES`
- `public static final RegistryObject<HolderSetType> ANY_HOLDER_SET`
  Stock holder set type that represents any/all values in a registry. Can be used in a holderset object with { "type": "forge:any" }
- `public static final RegistryObject<HolderSetType> AND_HOLDER_SET`
  Stock holder set type that represents an intersection of other holdersets. Can be used in a holderset object with { "type": "forge:and", "values": [list of holdersets] }
- `public static final RegistryObject<HolderSetType> OR_HOLDER_SET`
  Stock holder set type that represents a union of other holdersets. Can be used in a holderset object with { "type": "forge:or", "values": [list of holdersets] }
- `public static final RegistryObject<HolderSetType> NOT_HOLDER_SET`
  Stock holder set type that represents all values in a registry except those in another given set.
   Can be used in a holderset object with { "type": "forge:not", "value": holderset }
- `private static final DeferredRegister<FluidType> VANILLA_FLUID_TYPES`
- `public static final RegistryObject<FluidType> EMPTY_TYPE`
- `public static final RegistryObject<FluidType> WATER_TYPE`
- `public static final RegistryObject<FluidType> LAVA_TYPE`
- `private static final DeferredRegister<LootItemConditionType> LOOT_CONDITION_TYPES`
- `private static final DeferredRegister<com.mojang.serialization.Codec<? extends ICondition>> CONDITION_SERIALIZERS`
- `private static final DeferredRegister<RecipeSerializer<?>> RECIPE_SERIALIZERS`
- `private static final DeferredRegister<IIngredientSerializer<?>> INGREDIENT_SERIALIZERS`
- `private static boolean enableMilkFluid`
- `public static final RegistryObject<SoundEvent> BUCKET_EMPTY_MILK`
- `public static final RegistryObject<SoundEvent> BUCKET_FILL_MILK`
- `public static final RegistryObject<FluidType> MILK_TYPE`
- `public static final RegistryObject<Fluid> MILK`
- `public static final RegistryObject<Fluid> FLOWING_MILK`
- `private static ForgeMod INSTANCE`
- `public static final PermissionNode<Boolean> USE_SELECTORS_PERMISSION`

### Methods
- `private static <T> DeferredRegister<T> deferred(ResourceKey<Registry<T>> key)`
- `private static <T> DeferredRegister<T> deferred(ResourceKey<Registry<T>> key,  String modid)`
- `public static ForgeMod getInstance()`
- `public static void enableMilkFluid()`
  Run this method during mod constructor to enable milk and add it to the Minecraft milk bucket
- `public void preInit(FMLCommonSetupEvent evt)`
- `public void loadComplete(FMLLoadCompleteEvent event)`
- `public void serverStopping(ServerStoppingEvent evt)`
- `public void mappingChanged(IdMappingEvent evt)`
- `public void tagsUpdated(TagsUpdatedEvent evt)`
- `public void gatherData(GatherDataEvent event)`
- `public void registerFluids(RegisterEvent event)`
- `public void registerVanillaDisplayContexts(RegisterEvent event)`
- `public void registerPermissionNodes(PermissionGatherEvent.Nodes event)`
- `@Deprecated(forRemoval=true,  since="1.20") private static <T> void addAlias(IForgeRegistry<T> registry,  ResourceLocation from,  ResourceLocation to)` (deprecated)
  TODO: Remove when ForgeRegistry.addAlias(ResourceLocation, ResourceLocation) is elevated to IForgeRegistry.

## ForgeSpawnEggItem

*class* `net.minecraftforge.common.ForgeSpawnEggItem`

### Fields
- `private static final List<ForgeSpawnEggItem> MOD_EGGS`
- `private static final Map<EntityType<? extends Mob>,ForgeSpawnEggItem> TYPE_MAP`
- `private final Supplier<? extends EntityType<? extends Mob>> typeSupplier`
- `private static final DispenseItemBehavior DEFAULT_DISPENSE_BEHAVIOR`

### Inherited fields
- from `net.minecraft.world.item.Item`: `BASE_ATTACK_DAMAGE_UUID`, `BASE_ATTACK_SPEED_UUID`, `BY_BLOCK`, `canRepair`, `EAT_DURATION`, `MAX_BAR_WIDTH`, `MAX_STACK_SIZE`
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `public EntityType<?> getType(@Nullable  @Nullable CompoundTag tag)`
- `@Nullable protected @Nullable DispenseItemBehavior createDispenseBehavior()`
- `@Nullable public static @Nullable SpawnEggItem fromEntityType(@Nullable  @Nullable EntityType<?> type)`
- `protected EntityType<?> getDefaultType()`

### Inherited methods
- from `net.minecraft.world.item.SpawnEggItem`: `byId`, `eggs`, `getColor`, `requiredFeatures`, `spawnOffspringFromSpawnEgg`, `spawnsEntity`, `use`, `useOn`
- from `net.minecraft.world.item.Item`: `appendHoverText`, `asItem`, `builtInRegistryHolder`, `byBlock`, `byId`, `canAttackBlock`, `canBeDepleted`, `canBeHurtBy`, `canFitInsideContainerItems`, `finishUsingItem`, `getBarColor`, `getBarWidth`, `getCraftingRemainingItem`, `getDefaultAttributeModifiers`, `getDefaultInstance`, `getDescription`, `getDescriptionId`, `getDescriptionId`, `getDestroySpeed`, `getDrinkingSound`, `getEatingSound`, `getEnchantmentValue`, `getFoodProperties`, `getId`, `getMaxDamage`, `getMaxStackSize`, `getName`, `getOrCreateDescriptionId`, `getPlayerPOVHitResult`, `getRarity`, `getRenderPropertiesInternal`, `getTooltipImage`, `getUseAnimation`, `getUseDuration`, `hasCraftingRemainingItem`, `hurtEnemy`, `initializeClient`, `interactLivingEntity`, `inventoryTick`, `isBarVisible`, `isComplex`, `isCorrectToolForDrops`, `isEdible`, `isEnchantable`, `isFireResistant`, `isFoil`, `isRepairable`, `isValidRepairItem`, `mineBlock`, `onCraftedBy`, `onDestroyed`, `onUseTick`, `overrideOtherStackedOnMe`, `overrideStackedOnOther`, `releaseUsing`, `shouldOverrideMultiplayerNbt`, `toString`, `useOnRelease`, `verifyTagAfterLoad`
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`
- from `net.minecraftforge.common.extensions.IForgeItem`: `canApplyAtEnchantingTable`, `canContinueUsing`, `canDisableShield`, `canElytraFly`, `canEquip`, `canGrindstoneRepair`, `canPerformAction`, `canWalkOnPowderedSnow`, `createEntity`, `damageItem`, `doesSneakBypassUse`, `elytraFlightTick`, `getAllEnchantments`, `getArmorTexture`, `getAttributeModifiers`, `getBurnTime`, `getCraftingRemainingItem`, `getCreatorModId`, `getDamage`, `getDefaultTooltipHideFlags`, `getEnchantmentLevel`, `getEnchantmentValue`, `getEntityLifespan`, `getEquipmentSlot`, `getFoodProperties`, `getHighlightTip`, `getMaxDamage`, `getMaxStackSize`, `getShareTag`, `getSweepHitBox`, `getXpRepairRatio`, `hasCraftingRemainingItem`, `hasCustomEntity`, `initCapabilities`, `isBookEnchantable`, `isCorrectToolForDrops`, `isDamageable`, `isDamaged`, `isEnderMask`, `isNotReplaceableByPickAction`, `isPiglinCurrency`, `makesPiglinsNeutral`, `onArmorTick`, `onBlockStartBreak`, `onDestroyed`, `onDroppedByPlayer`, `onEntityItemUpdate`, `onEntitySwing`, `onHorseArmorTick`, `onInventoryTick`, `onItemUseFirst`, `onLeftClickEntity`, `onStopUsing`, `readShareTag`, `setDamage`, `shouldCauseBlockBreakReset`, `shouldCauseReequipAnimation`

## ForgeSpawnEggItem.ColorRegisterHandler

*class* `net.minecraftforge.common.ForgeSpawnEggItem.ColorRegisterHandler`

Enclosing class: ForgeSpawnEggItem

### Methods
- `public static void registerSpawnEggColors(RegisterColorHandlersEvent.Item event)`

## ForgeSpawnEggItem.CommonHandler

*class* `net.minecraftforge.common.ForgeSpawnEggItem.CommonHandler`

Enclosing class: ForgeSpawnEggItem

### Methods
- `public static void onCommonSetup(FMLCommonSetupEvent event)`

## ForgeStatesProvider

*class* `net.minecraftforge.common.ForgeStatesProvider`

### Fields
- `final ModLoadingState CREATE_REGISTRIES`
- `final ModLoadingState OBJECT_HOLDERS`
- `final ModLoadingState INJECT_CAPABILITIES`
- `final ModLoadingState UNFREEZE`
- `final ModLoadingState LOAD_REGISTRIES`
- `final ModLoadingState FREEZE`
- `final ModLoadingState NETLOCK`

### Methods
- `public List<IModLoadingState> getAllStates()`
  Description copied from interface: IModStateProvider
  Returns the list of mod loading states known to this provider.
  - returns: the list of mod loading states known to this provider

## ForgeTier

*class* `net.minecraftforge.common.ForgeTier`

Helper class to define a custom tier

### Fields
- `private final int level`
- `private final int uses`
- `private final float speed`
- `private final float attackDamageBonus`
- `private final int enchantmentValue`
- `@NotNull private final @NotNull TagKey<Block> tag`
- `@NotNull private final @NotNull Supplier<Ingredient> repairIngredient`

### Methods
- `public int getUses()`
- `public float getSpeed()`
- `public float getAttackDamageBonus()`
- `public int getLevel()`
- `public int getEnchantmentValue()`
- `@NotNull public @NotNull TagKey<Block> getTag()`
- `@NotNull public @NotNull Ingredient getRepairIngredient()`
- `public String toString()`

## IExtensibleEnum

*interface* `net.minecraftforge.common.IExtensibleEnum`

To be implemented on vanilla enums that should be enhanced with ASM to be
 extensible. If this is implemented on a class, the class must define a static
 method called "create" which takes a String (enum name), and the rest of the
 parameters matching a constructor.

 For example, an enum with the constructor MyEnum(Object foo) would
 require the method:

 public static MyEnum create(String name, Object foo)
 {
 throw new IllegalStateException("Enum not extended");
 }

 The method contents will be replaced with ASM at runtime. Multiple
 create methods can be defined as long as each
 matches a constructor.

### Methods
- `@Deprecated default void init()` (deprecated)
  Called by generated factory code to do any post-constructor setup required by
   the enum. Should not be called manually.
- `static <E extends Enum<E> & StringRepresentable> com.mojang.serialization.Codec<E> createCodecForExtensibleEnum(Supplier<E[]> valuesSupplier,  Function<? super String,? extends E> enumValueFromNameFunction)`
  Use this instead of StringRepresentable.fromEnum(Supplier) for extensible enums because this not cache the enum values on construction

## IForgeShearable

*interface* `net.minecraftforge.common.IForgeShearable`

This allows for mods to create there own Shear-like items
 and have them interact with Blocks/Entities without extra work.
 Also, if your block/entity supports the Shears, this allows you
 to support mod-shears as well.

### Methods
- `default boolean isShearable(@NotNull  @NotNull ItemStack item,  Level level,  BlockPos pos)`
  Checks if the object is currently shearable
   Example: Sheep return false when they have no wool
  - param: item - The ItemStack that is being used, may be empty.
  - param: level - The current level.
  - param: pos - Block's position in level.
  - returns: If this is shearable, and onSheared should be called.
- `@NotNull default @NotNull List<ItemStack> onSheared(@Nullable  @Nullable Player player,  @NotNull  @NotNull ItemStack item,  Level level,  BlockPos pos,  int fortune)`
  Performs the shear function on this object.
   This is called for both client, and server.
   The object should perform all actions related to being sheared,
   except for dropping of the items, and removal of the block.
   As those are handled by ItemShears itself.
  
   Returns a list of items that resulted from the shearing process.
  
   For entities, they should trust there internal location information
   over the values passed into this function.
  - param: item - The ItemStack that is being used, may be empty.
  - param: level - The current level.
  - param: pos - If this is a block, the block's position in level.
  - param: fortune - The fortune level of the shears being used.
  - returns: A List containing all items from this shearing. May be empty.

## IMinecartCollisionHandler

*interface* `net.minecraftforge.common.IMinecartCollisionHandler`

This class defines a replacement for the default minecart collision code.
 Only one handler can be registered at a time. It it registered with AbstractMinecartEntity.registerCollisionHandler().
 If you use this, make it a configuration option.

### Methods
- `void onEntityCollision(AbstractMinecart cart,  Entity other)`
  This basically replaces the function of the same name in EntityMinecart.
   Code in IMinecartHooks.applyEntityCollisionHook is still run.
  - param: cart - The cart that called the collision.
  - param: other - The object it collided with.
- `AABB getCollisionBox(AbstractMinecart cart,  Entity other)`
  This function replaced the function of the same name in EntityMinecart.
   It is used to define whether minecarts collide with specific entities,
   for example items.
  - param: cart - The cart for which the collision box was requested.
  - param: other - The entity requesting the collision box.
  - returns: The collision box or null.
- `AABB getMinecartCollisionBox(AbstractMinecart cart)`
  This function is used to define the box used for detecting minecart collisions.
   It is generally bigger that the normal collision box.
  - param: cart - The cart for which the collision box was requested.
  - returns: The collision box, cannot be null.
- `AABB getBoundingBox(AbstractMinecart cart)`
  This function replaces the function of the same name in EntityMinecart.
   It defines whether minecarts are solid to the player.
  - param: cart - The cart for which the bounding box was requested.
  - returns: The bounding box or null.

## IPlantable

*interface* `net.minecraftforge.common.IPlantable`

### Methods
- `default PlantType getPlantType(BlockGetter level,  BlockPos pos)`
- `BlockState getPlant(BlockGetter level,  BlockPos pos)`

## LenientUnboundedMapCodec

*class* `net.minecraftforge.common.LenientUnboundedMapCodec`

Key and value decoded independently, unknown set of keys

### Fields
- `private final com.mojang.serialization.Codec<K> keyCodec`
- `private final com.mojang.serialization.Codec<V> elementCodec`

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public com.mojang.serialization.Codec<K> keyCodec()`
- `public com.mojang.serialization.Codec<V> elementCodec()`
- `public <T> com.mojang.serialization.DataResult<Map<K,V>> decode(com.mojang.serialization.DynamicOps<T> ops,  com.mojang.serialization.MapLike<T> input)`
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<Map<K,V>,T>> decode(com.mojang.serialization.DynamicOps<T> ops,  T input)`
- `public <T> com.mojang.serialization.DataResult<T> encode(Map<K,V> input,  com.mojang.serialization.DynamicOps<T> ops,  T prefix)`
- `public boolean equals(Object o)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `com.mojang.serialization.codecs.BaseMapCodec`: `encode`
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## MinecraftForge

*class* `net.minecraftforge.common.MinecraftForge`

### Fields
- `public static final net.minecraftforge.eventbus.api.IEventBus EVENT_BUS`
  The core Forge EventBusses, all events for Forge will be fired on these,
   you should use this to register all your listeners.
   This replaces every register*Handler() function in the old version of Forge.
   TERRAIN_GEN_BUS for terrain gen events
   ORE_GEN_BUS for ore gen events
   EVENT_BUS for everything else
- `static final ForgeInternalHandler INTERNAL_HANDLER`
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker FORGE`

### Methods
- `public static void initialize()`
  Method invoked by FML before any other mods are loaded.

## PlantType

*class* `net.minecraftforge.common.PlantType`

### Fields
- `private static final Pattern INVALID_CHARACTERS`
- `private static final Map<String,PlantType> VALUES`
- `public static final PlantType PLAINS`
- `public static final PlantType DESERT`
- `public static final PlantType BEACH`
- `public static final PlantType CAVE`
- `public static final PlantType WATER`
- `public static final PlantType NETHER`
- `public static final PlantType CROP`
- `private final String name`

### Methods
- `public static PlantType get(String name)`
  Getting a custom PlantType, or an existing one if it has the same name as that one. Your plant should implement IPlantable
   and return this custom type in IPlantable.getPlantType(BlockGetter, BlockPos).
  
   If your new plant grows on blocks like any one of them above, never create a new PlantType.
   This Type is only functioning in
   Block.canSustainPlant(BlockState, BlockGetter, BlockPos, Direction, IPlantable),
   which you are supposed to override this function in your new block and create a new plant type to grow on that block.
  
   This method can be called during parallel loading
  - param: name - the name of the type of plant, you had better follow the style above
  - returns: the acquired PlantType, a new one if not found.
- `public String getName()`

## SoundAction

*class* `net.minecraftforge.common.SoundAction`

Defines an action which produces a sound.

### Fields
- `private static final Map<String,SoundAction> ACTIONS`
- `private final String name`

### Methods
- `public static SoundAction get(String name)`
  Gets or creates a new SoundAction for the given name.
  - param: name - the name of the action
  - returns: the existing SoundAction, or a new one if not present
- `public String name()`
  Returns the name of the action.
  - returns: the name of the action
- `public String toString()`

## SoundActions

*class* `net.minecraftforge.common.SoundActions`

A utility holding common sound actions.

### Fields
- `public static final SoundAction BUCKET_FILL`
  When a bucket is being filled by a fluid.
- `public static final SoundAction BUCKET_EMPTY`
  When a bucket is emptying a fluid.
- `public static final SoundAction FLUID_VAPORIZE`
  When the fluid is being vaporized.

## Tags

*class* `net.minecraftforge.common.Tags`

### Methods
- `public static void init()`

## Tags.Biomes

*class* `net.minecraftforge.common.Tags.Biomes`

Enclosing class: Tags

### Fields
- `public static final TagKey<Biome> IS_HOT`
- `public static final TagKey<Biome> IS_HOT_OVERWORLD`
- `public static final TagKey<Biome> IS_HOT_NETHER`
- `public static final TagKey<Biome> IS_HOT_END`
- `public static final TagKey<Biome> IS_COLD`
- `public static final TagKey<Biome> IS_COLD_OVERWORLD`
- `public static final TagKey<Biome> IS_COLD_NETHER`
- `public static final TagKey<Biome> IS_COLD_END`
- `public static final TagKey<Biome> IS_SPARSE`
- `public static final TagKey<Biome> IS_SPARSE_OVERWORLD`
- `public static final TagKey<Biome> IS_SPARSE_NETHER`
- `public static final TagKey<Biome> IS_SPARSE_END`
- `public static final TagKey<Biome> IS_DENSE`
- `public static final TagKey<Biome> IS_DENSE_OVERWORLD`
- `public static final TagKey<Biome> IS_DENSE_NETHER`
- `public static final TagKey<Biome> IS_DENSE_END`
- `public static final TagKey<Biome> IS_WET`
- `public static final TagKey<Biome> IS_WET_OVERWORLD`
- `public static final TagKey<Biome> IS_WET_NETHER`
- `public static final TagKey<Biome> IS_WET_END`
- `public static final TagKey<Biome> IS_DRY`
- `public static final TagKey<Biome> IS_DRY_OVERWORLD`
- `public static final TagKey<Biome> IS_DRY_NETHER`
- `public static final TagKey<Biome> IS_DRY_END`
- `public static final TagKey<Biome> IS_CONIFEROUS`
- `public static final TagKey<Biome> IS_SPOOKY`
- `public static final TagKey<Biome> IS_DEAD`
- `public static final TagKey<Biome> IS_LUSH`
- `public static final TagKey<Biome> IS_MUSHROOM`
- `public static final TagKey<Biome> IS_MAGICAL`
- `public static final TagKey<Biome> IS_RARE`
- `public static final TagKey<Biome> IS_PLATEAU`
- `public static final TagKey<Biome> IS_MODIFIED`
- `public static final TagKey<Biome> IS_WATER`
- `public static final TagKey<Biome> IS_DESERT`
- `public static final TagKey<Biome> IS_PLAINS`
- `public static final TagKey<Biome> IS_SWAMP`
- `public static final TagKey<Biome> IS_SANDY`
- `public static final TagKey<Biome> IS_SNOWY`
- `public static final TagKey<Biome> IS_WASTELAND`
- `public static final TagKey<Biome> IS_VOID`
- `public static final TagKey<Biome> IS_UNDERGROUND`
- `public static final TagKey<Biome> IS_CAVE`
- `public static final TagKey<Biome> IS_PEAK`
- `public static final TagKey<Biome> IS_SLOPE`
- `public static final TagKey<Biome> IS_MOUNTAIN`

### Methods
- `private static void init()`
- `private static TagKey<Biome> tag(String name)`

## Tags.Blocks

*class* `net.minecraftforge.common.Tags.Blocks`

Enclosing class: Tags

### Fields
- `public static final TagKey<Block> BARRELS`
- `public static final TagKey<Block> BARRELS_WOODEN`
- `public static final TagKey<Block> BOOKSHELVES`
- `public static final TagKey<Block> CHESTS`
- `public static final TagKey<Block> CHESTS_ENDER`
- `public static final TagKey<Block> CHESTS_TRAPPED`
- `public static final TagKey<Block> CHESTS_WOODEN`
- `public static final TagKey<Block> COBBLESTONE`
- `public static final TagKey<Block> COBBLESTONE_NORMAL`
- `public static final TagKey<Block> COBBLESTONE_INFESTED`
- `public static final TagKey<Block> COBBLESTONE_MOSSY`
- `public static final TagKey<Block> COBBLESTONE_DEEPSLATE`
- `public static final TagKey<Block> END_STONES`
- `public static final TagKey<Block> ENDERMAN_PLACE_ON_BLACKLIST`
- `public static final TagKey<Block> FENCE_GATES`
- `public static final TagKey<Block> FENCE_GATES_WOODEN`
- `public static final TagKey<Block> FENCES`
- `public static final TagKey<Block> FENCES_NETHER_BRICK`
- `public static final TagKey<Block> FENCES_WOODEN`
- `public static final TagKey<Block> GLASS`
- `public static final TagKey<Block> GLASS_BLACK`
- `public static final TagKey<Block> GLASS_BLUE`
- `public static final TagKey<Block> GLASS_BROWN`
- `public static final TagKey<Block> GLASS_COLORLESS`
- `public static final TagKey<Block> GLASS_CYAN`
- `public static final TagKey<Block> GLASS_GRAY`
- `public static final TagKey<Block> GLASS_GREEN`
- `public static final TagKey<Block> GLASS_LIGHT_BLUE`
- `public static final TagKey<Block> GLASS_LIGHT_GRAY`
- `public static final TagKey<Block> GLASS_LIME`
- `public static final TagKey<Block> GLASS_MAGENTA`
- `public static final TagKey<Block> GLASS_ORANGE`
- `public static final TagKey<Block> GLASS_PINK`
- `public static final TagKey<Block> GLASS_PURPLE`
- `public static final TagKey<Block> GLASS_RED`
- `public static final TagKey<Block> GLASS_SILICA`
  Glass which is made from sand and only minor additional ingredients like dyes
- `public static final TagKey<Block> GLASS_TINTED`
- `public static final TagKey<Block> GLASS_WHITE`
- `public static final TagKey<Block> GLASS_YELLOW`
- `public static final TagKey<Block> GLASS_PANES`
- `public static final TagKey<Block> GLASS_PANES_BLACK`
- `public static final TagKey<Block> GLASS_PANES_BLUE`
- `public static final TagKey<Block> GLASS_PANES_BROWN`
- `public static final TagKey<Block> GLASS_PANES_COLORLESS`
- `public static final TagKey<Block> GLASS_PANES_CYAN`
- `public static final TagKey<Block> GLASS_PANES_GRAY`
- `public static final TagKey<Block> GLASS_PANES_GREEN`
- `public static final TagKey<Block> GLASS_PANES_LIGHT_BLUE`
- `public static final TagKey<Block> GLASS_PANES_LIGHT_GRAY`
- `public static final TagKey<Block> GLASS_PANES_LIME`
- `public static final TagKey<Block> GLASS_PANES_MAGENTA`
- `public static final TagKey<Block> GLASS_PANES_ORANGE`
- `public static final TagKey<Block> GLASS_PANES_PINK`
- `public static final TagKey<Block> GLASS_PANES_PURPLE`
- `public static final TagKey<Block> GLASS_PANES_RED`
- `public static final TagKey<Block> GLASS_PANES_WHITE`
- `public static final TagKey<Block> GLASS_PANES_YELLOW`
- `public static final TagKey<Block> GRAVEL`
- `public static final TagKey<Block> NETHERRACK`
- `public static final TagKey<Block> OBSIDIAN`
- `public static final TagKey<Block> ORE_BEARING_GROUND_DEEPSLATE`
  Blocks which are often replaced by deepslate ores, i.e. the ores in the tag ORES_IN_GROUND_DEEPSLATE, during world generation
- `public static final TagKey<Block> ORE_BEARING_GROUND_NETHERRACK`
  Blocks which are often replaced by netherrack ores, i.e. the ores in the tag ORES_IN_GROUND_NETHERRACK, during world generation
- `public static final TagKey<Block> ORE_BEARING_GROUND_STONE`
  Blocks which are often replaced by stone ores, i.e. the ores in the tag ORES_IN_GROUND_STONE, during world generation
- `public static final TagKey<Block> ORE_RATES_DENSE`
  Ores which on average result in more than one resource worth of materials
- `public static final TagKey<Block> ORE_RATES_SINGULAR`
  Ores which on average result in one resource worth of materials
- `public static final TagKey<Block> ORE_RATES_SPARSE`
  Ores which on average result in less than one resource worth of materials
- `public static final TagKey<Block> ORES`
- `public static final TagKey<Block> ORES_COAL`
- `public static final TagKey<Block> ORES_COPPER`
- `public static final TagKey<Block> ORES_DIAMOND`
- `public static final TagKey<Block> ORES_EMERALD`
- `public static final TagKey<Block> ORES_GOLD`
- `public static final TagKey<Block> ORES_IRON`
- `public static final TagKey<Block> ORES_LAPIS`
- `public static final TagKey<Block> ORES_NETHERITE_SCRAP`
- `public static final TagKey<Block> ORES_QUARTZ`
- `public static final TagKey<Block> ORES_REDSTONE`
- `public static final TagKey<Block> ORES_IN_GROUND_DEEPSLATE`
  Ores in deepslate (or in equivalent blocks in the tag ORE_BEARING_GROUND_DEEPSLATE) which could logically use deepslate as recipe input or output
- `public static final TagKey<Block> ORES_IN_GROUND_NETHERRACK`
  Ores in netherrack (or in equivalent blocks in the tag ORE_BEARING_GROUND_NETHERRACK) which could logically use netherrack as recipe input or output
- `public static final TagKey<Block> ORES_IN_GROUND_STONE`
  Ores in stone (or in equivalent blocks in the tag ORE_BEARING_GROUND_STONE) which could logically use stone as recipe input or output
- `public static final TagKey<Block> SAND`
- `public static final TagKey<Block> SAND_COLORLESS`
- `public static final TagKey<Block> SAND_RED`
- `public static final TagKey<Block> SANDSTONE`
- `public static final TagKey<Block> STAINED_GLASS`
- `public static final TagKey<Block> STAINED_GLASS_PANES`
- `public static final TagKey<Block> STONE`
- `public static final TagKey<Block> STORAGE_BLOCKS`
- `public static final TagKey<Block> STORAGE_BLOCKS_AMETHYST`
- `public static final TagKey<Block> STORAGE_BLOCKS_COAL`
- `public static final TagKey<Block> STORAGE_BLOCKS_COPPER`
- `public static final TagKey<Block> STORAGE_BLOCKS_DIAMOND`
- `public static final TagKey<Block> STORAGE_BLOCKS_EMERALD`
- `public static final TagKey<Block> STORAGE_BLOCKS_GOLD`
- `public static final TagKey<Block> STORAGE_BLOCKS_IRON`
- `public static final TagKey<Block> STORAGE_BLOCKS_LAPIS`
- `public static final TagKey<Block> STORAGE_BLOCKS_NETHERITE`
- `public static final TagKey<Block> STORAGE_BLOCKS_QUARTZ`
- `public static final TagKey<Block> STORAGE_BLOCKS_RAW_COPPER`
- `public static final TagKey<Block> STORAGE_BLOCKS_RAW_GOLD`
- `public static final TagKey<Block> STORAGE_BLOCKS_RAW_IRON`
- `public static final TagKey<Block> STORAGE_BLOCKS_REDSTONE`
- `public static final TagKey<Block> NEEDS_WOOD_TOOL`
- `public static final TagKey<Block> NEEDS_GOLD_TOOL`
- `public static final TagKey<Block> NEEDS_NETHERITE_TOOL`

### Methods
- `private static void init()`
- `private static TagKey<Block> tag(String name)`

## Tags.EntityTypes

*class* `net.minecraftforge.common.Tags.EntityTypes`

Enclosing class: Tags

### Fields
- `public static final TagKey<EntityType<?>> BOSSES`

### Methods
- `private static void init()`
- `private static TagKey<EntityType<?>> tag(String name)`

## Tags.Fluids

*class* `net.minecraftforge.common.Tags.Fluids`

Enclosing class: Tags

### Fields
- `public static final TagKey<Fluid> MILK`
  Holds all fluids related to milk.
- `public static final TagKey<Fluid> GASEOUS`
  Holds all fluids that are gaseous at room temperature.

### Methods
- `private static void init()`
- `private static TagKey<Fluid> tag(String name)`

## Tags.Items

*class* `net.minecraftforge.common.Tags.Items`

Enclosing class: Tags

### Fields
- `public static final TagKey<Item> BARRELS`
- `public static final TagKey<Item> BARRELS_WOODEN`
- `public static final TagKey<Item> BONES`
- `public static final TagKey<Item> BOOKSHELVES`
- `public static final TagKey<Item> CHESTS`
- `public static final TagKey<Item> CHESTS_ENDER`
- `public static final TagKey<Item> CHESTS_TRAPPED`
- `public static final TagKey<Item> CHESTS_WOODEN`
- `public static final TagKey<Item> COBBLESTONE`
- `public static final TagKey<Item> COBBLESTONE_NORMAL`
- `public static final TagKey<Item> COBBLESTONE_INFESTED`
- `public static final TagKey<Item> COBBLESTONE_MOSSY`
- `public static final TagKey<Item> COBBLESTONE_DEEPSLATE`
- `public static final TagKey<Item> CROPS`
- `public static final TagKey<Item> CROPS_BEETROOT`
- `public static final TagKey<Item> CROPS_CARROT`
- `public static final TagKey<Item> CROPS_NETHER_WART`
- `public static final TagKey<Item> CROPS_POTATO`
- `public static final TagKey<Item> CROPS_WHEAT`
- `public static final TagKey<Item> DUSTS`
- `public static final TagKey<Item> DUSTS_PRISMARINE`
- `public static final TagKey<Item> DUSTS_REDSTONE`
- `public static final TagKey<Item> DUSTS_GLOWSTONE`
- `public static final TagKey<Item> DYES`
- `public static final TagKey<Item> DYES_BLACK`
- `public static final TagKey<Item> DYES_RED`
- `public static final TagKey<Item> DYES_GREEN`
- `public static final TagKey<Item> DYES_BROWN`
- `public static final TagKey<Item> DYES_BLUE`
- `public static final TagKey<Item> DYES_PURPLE`
- `public static final TagKey<Item> DYES_CYAN`
- `public static final TagKey<Item> DYES_LIGHT_GRAY`
- `public static final TagKey<Item> DYES_GRAY`
- `public static final TagKey<Item> DYES_PINK`
- `public static final TagKey<Item> DYES_LIME`
- `public static final TagKey<Item> DYES_YELLOW`
- `public static final TagKey<Item> DYES_LIGHT_BLUE`
- `public static final TagKey<Item> DYES_MAGENTA`
- `public static final TagKey<Item> DYES_ORANGE`
- `public static final TagKey<Item> DYES_WHITE`
- `public static final TagKey<Item> EGGS`
- `public static final TagKey<Item> ENCHANTING_FUELS`
  This tag defaults to Items.LAPIS_LAZULI when not present in any datapacks, including forge client on vanilla server
- `public static final TagKey<Item> END_STONES`
- `public static final TagKey<Item> ENDER_PEARLS`
- `public static final TagKey<Item> FEATHERS`
- `public static final TagKey<Item> FENCE_GATES`
- `public static final TagKey<Item> FENCE_GATES_WOODEN`
- `public static final TagKey<Item> FENCES`
- `public static final TagKey<Item> FENCES_NETHER_BRICK`
- `public static final TagKey<Item> FENCES_WOODEN`
- `public static final TagKey<Item> GEMS`
- `public static final TagKey<Item> GEMS_DIAMOND`
- `public static final TagKey<Item> GEMS_EMERALD`
- `public static final TagKey<Item> GEMS_AMETHYST`
- `public static final TagKey<Item> GEMS_LAPIS`
- `public static final TagKey<Item> GEMS_PRISMARINE`
- `public static final TagKey<Item> GEMS_QUARTZ`
- `public static final TagKey<Item> GLASS`
- `public static final TagKey<Item> GLASS_BLACK`
- `public static final TagKey<Item> GLASS_BLUE`
- `public static final TagKey<Item> GLASS_BROWN`
- `public static final TagKey<Item> GLASS_COLORLESS`
- `public static final TagKey<Item> GLASS_CYAN`
- `public static final TagKey<Item> GLASS_GRAY`
- `public static final TagKey<Item> GLASS_GREEN`
- `public static final TagKey<Item> GLASS_LIGHT_BLUE`
- `public static final TagKey<Item> GLASS_LIGHT_GRAY`
- `public static final TagKey<Item> GLASS_LIME`
- `public static final TagKey<Item> GLASS_MAGENTA`
- `public static final TagKey<Item> GLASS_ORANGE`
- `public static final TagKey<Item> GLASS_PINK`
- `public static final TagKey<Item> GLASS_PURPLE`
- `public static final TagKey<Item> GLASS_RED`
- `public static final TagKey<Item> GLASS_SILICA`
  Glass which is made from sand and only minor additional ingredients like dyes
- `public static final TagKey<Item> GLASS_TINTED`
- `public static final TagKey<Item> GLASS_WHITE`
- `public static final TagKey<Item> GLASS_YELLOW`
- `public static final TagKey<Item> GLASS_PANES`
- `public static final TagKey<Item> GLASS_PANES_BLACK`
- `public static final TagKey<Item> GLASS_PANES_BLUE`
- `public static final TagKey<Item> GLASS_PANES_BROWN`
- `public static final TagKey<Item> GLASS_PANES_COLORLESS`
- `public static final TagKey<Item> GLASS_PANES_CYAN`
- `public static final TagKey<Item> GLASS_PANES_GRAY`
- `public static final TagKey<Item> GLASS_PANES_GREEN`
- `public static final TagKey<Item> GLASS_PANES_LIGHT_BLUE`
- `public static final TagKey<Item> GLASS_PANES_LIGHT_GRAY`
- `public static final TagKey<Item> GLASS_PANES_LIME`
- `public static final TagKey<Item> GLASS_PANES_MAGENTA`
- `public static final TagKey<Item> GLASS_PANES_ORANGE`
- `public static final TagKey<Item> GLASS_PANES_PINK`
- `public static final TagKey<Item> GLASS_PANES_PURPLE`
- `public static final TagKey<Item> GLASS_PANES_RED`
- `public static final TagKey<Item> GLASS_PANES_WHITE`
- `public static final TagKey<Item> GLASS_PANES_YELLOW`
- `public static final TagKey<Item> GRAVEL`
- `public static final TagKey<Item> GUNPOWDER`
- `public static final TagKey<Item> HEADS`
- `public static final TagKey<Item> INGOTS`
- `public static final TagKey<Item> INGOTS_BRICK`
- `public static final TagKey<Item> INGOTS_COPPER`
- `public static final TagKey<Item> INGOTS_GOLD`
- `public static final TagKey<Item> INGOTS_IRON`
- `public static final TagKey<Item> INGOTS_NETHERITE`
- `public static final TagKey<Item> INGOTS_NETHER_BRICK`
- `public static final TagKey<Item> LEATHER`
- `public static final TagKey<Item> MUSHROOMS`
- `public static final TagKey<Item> NETHER_STARS`
- `public static final TagKey<Item> NETHERRACK`
- `public static final TagKey<Item> NUGGETS`
- `public static final TagKey<Item> NUGGETS_GOLD`
- `public static final TagKey<Item> NUGGETS_IRON`
- `public static final TagKey<Item> OBSIDIAN`
- `public static final TagKey<Item> ORE_BEARING_GROUND_DEEPSLATE`
  Blocks which are often replaced by deepslate ores, i.e. the ores in the tag ORES_IN_GROUND_DEEPSLATE, during world generation
- `public static final TagKey<Item> ORE_BEARING_GROUND_NETHERRACK`
  Blocks which are often replaced by netherrack ores, i.e. the ores in the tag ORES_IN_GROUND_NETHERRACK, during world generation
- `public static final TagKey<Item> ORE_BEARING_GROUND_STONE`
  Blocks which are often replaced by stone ores, i.e. the ores in the tag ORES_IN_GROUND_STONE, during world generation
- `public static final TagKey<Item> ORE_RATES_DENSE`
  Ores which on average result in more than one resource worth of materials
- `public static final TagKey<Item> ORE_RATES_SINGULAR`
  Ores which on average result in one resource worth of materials
- `public static final TagKey<Item> ORE_RATES_SPARSE`
  Ores which on average result in less than one resource worth of materials
- `public static final TagKey<Item> ORES`
- `public static final TagKey<Item> ORES_COAL`
- `public static final TagKey<Item> ORES_COPPER`
- `public static final TagKey<Item> ORES_DIAMOND`
- `public static final TagKey<Item> ORES_EMERALD`
- `public static final TagKey<Item> ORES_GOLD`
- `public static final TagKey<Item> ORES_IRON`
- `public static final TagKey<Item> ORES_LAPIS`
- `public static final TagKey<Item> ORES_NETHERITE_SCRAP`
- `public static final TagKey<Item> ORES_QUARTZ`
- `public static final TagKey<Item> ORES_REDSTONE`
- `public static final TagKey<Item> ORES_IN_GROUND_DEEPSLATE`
  Ores in deepslate (or in equivalent blocks in the tag ORE_BEARING_GROUND_DEEPSLATE) which could logically use deepslate as recipe input or output
- `public static final TagKey<Item> ORES_IN_GROUND_NETHERRACK`
  Ores in netherrack (or in equivalent blocks in the tag ORE_BEARING_GROUND_NETHERRACK) which could logically use netherrack as recipe input or output
- `public static final TagKey<Item> ORES_IN_GROUND_STONE`
  Ores in stone (or in equivalent blocks in the tag ORE_BEARING_GROUND_STONE) which could logically use stone as recipe input or output
- `public static final TagKey<Item> RAW_MATERIALS`
- `public static final TagKey<Item> RAW_MATERIALS_COPPER`
- `public static final TagKey<Item> RAW_MATERIALS_GOLD`
- `public static final TagKey<Item> RAW_MATERIALS_IRON`
- `public static final TagKey<Item> RODS`
- `public static final TagKey<Item> RODS_BLAZE`
- `public static final TagKey<Item> RODS_WOODEN`
- `public static final TagKey<Item> SAND`
- `public static final TagKey<Item> SAND_COLORLESS`
- `public static final TagKey<Item> SAND_RED`
- `public static final TagKey<Item> SANDSTONE`
- `public static final TagKey<Item> SEEDS`
- `public static final TagKey<Item> SEEDS_BEETROOT`
- `public static final TagKey<Item> SEEDS_MELON`
- `public static final TagKey<Item> SEEDS_PUMPKIN`
- `public static final TagKey<Item> SEEDS_WHEAT`
- `public static final TagKey<Item> SHEARS`
- `public static final TagKey<Item> SLIMEBALLS`
- `public static final TagKey<Item> STAINED_GLASS`
- `public static final TagKey<Item> STAINED_GLASS_PANES`
- `public static final TagKey<Item> STONE`
- `public static final TagKey<Item> STORAGE_BLOCKS`
- `public static final TagKey<Item> STORAGE_BLOCKS_AMETHYST`
- `public static final TagKey<Item> STORAGE_BLOCKS_COAL`
- `public static final TagKey<Item> STORAGE_BLOCKS_COPPER`
- `public static final TagKey<Item> STORAGE_BLOCKS_DIAMOND`
- `public static final TagKey<Item> STORAGE_BLOCKS_EMERALD`
- `public static final TagKey<Item> STORAGE_BLOCKS_GOLD`
- `public static final TagKey<Item> STORAGE_BLOCKS_IRON`
- `public static final TagKey<Item> STORAGE_BLOCKS_LAPIS`
- `public static final TagKey<Item> STORAGE_BLOCKS_NETHERITE`
- `public static final TagKey<Item> STORAGE_BLOCKS_QUARTZ`
- `public static final TagKey<Item> STORAGE_BLOCKS_RAW_COPPER`
- `public static final TagKey<Item> STORAGE_BLOCKS_RAW_GOLD`
- `public static final TagKey<Item> STORAGE_BLOCKS_RAW_IRON`
- `public static final TagKey<Item> STORAGE_BLOCKS_REDSTONE`
- `public static final TagKey<Item> STRING`
- `public static final TagKey<Item> TOOLS`
  A tag containing all existing tools.
  
   Note: This tag is not an alternative or a substitute to ToolActions.
- `public static final TagKey<Item> TOOLS_SHIELDS`
  A tag containing all existing shields.
  
   Note: This tag is not an alternative or a substitute to ToolActions.
- `public static final TagKey<Item> TOOLS_BOWS`
  A tag containing all existing bows.
  
   Note: This tag is not an alternative or a substitute to ToolActions.
- `public static final TagKey<Item> TOOLS_CROSSBOWS`
  A tag containing all existing crossbows.
  
   Note: This tag is not an alternative or a substitute to ToolActions.
- `public static final TagKey<Item> TOOLS_FISHING_RODS`
  A tag containing all existing fishing rods.
  
   Note: This tag is not an alternative or a substitute to ToolActions.
- `public static final TagKey<Item> TOOLS_TRIDENTS`
  A tag containing all existing tridents.
  
   Note: This tag is not an alternative or a substitute to ToolActions.
- `public static final TagKey<Item> ARMORS`
  A tag containing all existing armors.
- `public static final TagKey<Item> ARMORS_HELMETS`
  A tag containing all existing helmets.
- `public static final TagKey<Item> ARMORS_CHESTPLATES`
  A tag containing all chestplates.
- `public static final TagKey<Item> ARMORS_LEGGINGS`
  A tag containing all existing leggings.
- `public static final TagKey<Item> ARMORS_BOOTS`
  A tag containing all existing boots.

### Methods
- `private static void init()`
- `private static TagKey<Item> tag(String name)`

## TierSortingRegistry

*class* `net.minecraftforge.common.TierSortingRegistry`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final ResourceLocation ITEM_TIER_ORDERING_JSON`
- `private static boolean hasCustomTiers`
- `private static final com.google.common.collect.BiMap<ResourceLocation,Tier> tiers`
- `private static final com.google.common.collect.Multimap<ResourceLocation,ResourceLocation> edges`
- `private static final com.google.common.collect.Multimap<ResourceLocation,ResourceLocation> vanillaEdges`
- `private static final List<Tier> sortedTiers`
- `private static final List<Tier> sortedTiersUnmodifiable`
- `private static final ResourceLocation CHANNEL_NAME`
- `private static final SimpleChannel SYNC_CHANNEL`

### Methods
- `public static Tier registerTier(Tier tier,  ResourceLocation name,  List<Object> after,  List<Object> before)`
  Registers a tier into the tier sorting registry.
  - param: tier - The tier to register
  - param: name - The name to use internally for dependency resolution
  - param: after - List of tiers to place this tier after (the tiers in the list will be considered lesser tiers)
  - param: before - List of tiers to place this tier before (the tiers in the list will be considered better tiers)
- `public static List<Tier> getSortedTiers()`
  Returns the list of tiers in the order defined by the dependencies.
   This list will remain valid
  - returns: An unmodifiable list of tiers ordered lesser to greater
- `@Nullable public static @Nullable Tier byName(ResourceLocation name)`
  Returns the tier associated with a name, if registered into the sorting system.
  - param: name - The name to look up
  - returns: The tier, or null if not registered
- `@Nullable public static @Nullable ResourceLocation getName(Tier tier)`
  Returns the name associated with a tier, if the tier is registered into the sorting system.
  - param: tier - The tier to look up
  - returns: The name for the tier, or null if not registered
- `public static boolean isTierSorted(Tier tier)`
  Queries if a tier should be evaluated using the sorting system, by calling isCorrectTierForDrops
  - param: tier - The tier to query
  - returns: True if isCorrectTierForDrops should be called for the tier
- `public static boolean isCorrectTierForDrops(Tier tier,  BlockState state)`
  Queries if a tier is high enough to be able to get drops for the given blockstate.
  - param: tier - The tier to look up
  - param: state - The state to test against
  - returns: True if the tier is good enough
- `public static List<Tier> getTiersLowerThan(Tier tier)`
  Helper to query all tiers that are lower than the given tier
  - param: tier - The tier
  - returns: All the lower tiers
- `private static boolean isCorrectTierVanilla(Tier tier,  BlockState state)`
  Fallback for when a tier isn't in the registry, copy of the logic in DiggerItem.isCorrectToolForDrops(net.minecraft.world.level.block.state.BlockState)
- `private static void processTier(Tier tier,  ResourceLocation name,  List<Object> afters,  List<Object> befores)`
- `private static ResourceLocation getTierName(Object entry)`
- `static boolean allowVanilla()`
- `static void init()`
- `static PreparableReloadListener getReloadListener()`
- `private static void recalculateItemTiers()`
- `private static void setTierOrder(List<Tier> tierList)`
- `private static void runInServerThreadIfPossible(it.unimi.dsi.fastutil.booleans.BooleanConsumer runnable)`
- `private static void syncToAll()`
- `private static void playerLoggedIn(PlayerEvent.PlayerLoggedInEvent event)`
- `private static void syncToPlayer(ServerPlayer serverPlayer)`
- `private static TierSortingRegistry.SyncPacket receive(FriendlyByteBuf buffer)`
- `private static void handle(TierSortingRegistry.SyncPacket packet,  CustomPayloadEvent.Context context)`

## TierSortingRegistry.ClientEvents

*class* `net.minecraftforge.common.TierSortingRegistry.ClientEvents`

Enclosing class: TierSortingRegistry

### Methods
- `public static void init()`
- `private static void clientLogInToServer(ClientPlayerNetworkEvent.LoggingIn event)`

## TierSortingRegistry.SyncPacket

*record* `net.minecraftforge.common.TierSortingRegistry.SyncPacket`

Enclosing class: TierSortingRegistry

### Fields
- `private final List<ResourceLocation> tiers`
  The field for the tiers record component.

### Methods
- `private void encode(FriendlyByteBuf buffer)`
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
- `public List<ResourceLocation> tiers()`
  Returns the value of the tiers record component.
  - returns: the value of the tiers record component

## ToolAction

*class* `net.minecraftforge.common.ToolAction`

### Fields
- `public static final com.mojang.serialization.Codec<ToolAction> CODEC`
- `private static final Map<String,ToolAction> actions`
- `private final String name`

### Methods
- `public static Collection<ToolAction> getActions()`
  Returns all registered actions.
   This collection can be kept around, and will update itself in response to changes to the map.
   See ConcurrentHashMap.values() for details.
- `public static ToolAction get(String name)`
  Gets or creates a new ToolAction for the given name.
- `public String name()`
  Returns the name of this tool action
- `public String toString()`

## ToolActions

*class* `net.minecraftforge.common.ToolActions`

### Fields
- `public static final ToolAction AXE_DIG`
  Exposed by axes to allow querying tool behaviours
- `public static final ToolAction PICKAXE_DIG`
  Exposed by pickaxes to allow querying tool behaviours
- `public static final ToolAction SHOVEL_DIG`
  Exposed by shovels to allow querying tool behaviours
- `public static final ToolAction HOE_DIG`
  Exposed by hoes to allow querying tool behaviours
- `public static final ToolAction SWORD_DIG`
  Exposed by swords to allow querying tool behaviours
- `public static final ToolAction SHEARS_DIG`
  Exposed by shears to allow querying tool behaviours
- `public static final ToolAction AXE_STRIP`
  Passed onto IForgeBlock.getToolModifiedState(net.minecraft.world.level.block.state.BlockState, net.minecraft.world.item.context.UseOnContext, net.minecraftforge.common.ToolAction, boolean) when an axe wants to strip a log
- `public static final ToolAction AXE_SCRAPE`
  Passed onto IForgeBlock.getToolModifiedState(net.minecraft.world.level.block.state.BlockState, net.minecraft.world.item.context.UseOnContext, net.minecraftforge.common.ToolAction, boolean) when an axe wants to scrape oxidization off copper
- `public static final ToolAction AXE_WAX_OFF`
  Passed onto IForgeBlock.getToolModifiedState(net.minecraft.world.level.block.state.BlockState, net.minecraft.world.item.context.UseOnContext, net.minecraftforge.common.ToolAction, boolean) when an axe wants to remove wax out of copper
- `public static final ToolAction SHOVEL_FLATTEN`
  Passed onto IForgeBlock.getToolModifiedState(net.minecraft.world.level.block.state.BlockState, net.minecraft.world.item.context.UseOnContext, net.minecraftforge.common.ToolAction, boolean) when a shovel wants to turn dirt into path
- `public static final ToolAction SWORD_SWEEP`
  Used during player attack to figure out if a sweep attack should be performed
- `public static final ToolAction SHEARS_HARVEST`
  This action is exposed by shears and corresponds to a harvest action that is triggered with a right click on a block that supports such behaviour.
   Example: Right click with shears on a beehive with honey level 5 to harvest it
- `public static final ToolAction SHEARS_CARVE`
  This action is exposed by shears and corresponds to a carve action that is triggered with a right click on a block that supports such behaviour.
   Example: Right click with shears o a pumpkin to carve it
- `public static final ToolAction SHEARS_DISARM`
  This action is exposed by shears and corresponds to a disarm action that is triggered by breaking a block that supports such behaviour.
   Example: Breaking a trip wire with shears to disarm it.
- `public static final ToolAction HOE_TILL`
  Passed onto IForgeBlock.getToolModifiedState(net.minecraft.world.level.block.state.BlockState, net.minecraft.world.item.context.UseOnContext, net.minecraftforge.common.ToolAction, boolean) when a hoe wants to turn dirt into soil
- `public static final ToolAction SHIELD_BLOCK`
  A tool action corresponding to the 'block' action of shields.
- `public static final ToolAction FISHING_ROD_CAST`
  This action corresponds to right-clicking the fishing rod.
- `public static final Set<ToolAction> DEFAULT_AXE_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_HOE_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_SHOVEL_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_PICKAXE_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_SWORD_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_SHEARS_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_SHIELD_ACTIONS`
- `public static final Set<ToolAction> DEFAULT_FISHING_ROD_ACTIONS`

### Methods
- `private static Set<ToolAction> of(ToolAction... actions)`

## UsernameCache

*class* `net.minecraftforge.common.UsernameCache`

Caches player's last known usernames

 Modders should use getLastKnownUsername(UUID) to determine a players
 last known username.

 For convenience, getMap() is provided to get an immutable copy of
 the caches underlying map.

### Fields
- `private static Map<UUID,String> map`
- `private static final Path saveFile`
- `private static final com.google.gson.Gson gson`
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker USRCACHE`

### Methods
- `protected static void setUsername(UUID uuid,  String username)`
  Set a player's current usernamee
  - param: uuid - the player's UUID
  - param: username - the player's username
- `protected static boolean removeUsername(UUID uuid)`
  Remove a player's username from the cache
  - param: uuid - the player's UUID
  - returns: if the cache contained the user
- `@Nullable public static @Nullable String getLastKnownUsername(UUID uuid)`
  Get the player's last known username
  
   May be null
  - param: uuid - the player's UUID
  - returns: the player's last known username, or null if the
 cache doesn't have a record of the last username
- `public static boolean containsUUID(UUID uuid)`
  Check if the cache contains the given player's username
  - param: uuid - the player's UUID
  - returns: if the cache contains a username for the given player
- `public static Map<UUID,String> getMap()`
  Get an immutable copy of the cache's underlying map
  - returns: the map
- `protected static void save()`
  Save the cache to file
- `protected static void load()`
  Load the cache from file

## UsernameCache.SaveThread

*class* `net.minecraftforge.common.UsernameCache.SaveThread`

Used for saving the Gson
 representation of the cache to disk

Enclosing class: UsernameCache

### Fields
- `private final String data`
  The data that will be saved to disk

### Inherited fields
- from `java.lang.Thread`: `MAX_PRIORITY`, `MIN_PRIORITY`, `NORM_PRIORITY`

### Methods
- `public void run()`

### Inherited methods
- from `java.lang.Thread`: `activeCount`, `checkAccess`, `clone`, `countStackFrames`, `currentThread`, `dumpStack`, `enumerate`, `getAllStackTraces`, `getContextClassLoader`, `getDefaultUncaughtExceptionHandler`, `getId`, `getName`, `getPriority`, `getStackTrace`, `getState`, `getThreadGroup`, `getUncaughtExceptionHandler`, `holdsLock`, `interrupt`, `interrupted`, `isAlive`, `isDaemon`, `isInterrupted`, `join`, `join`, `join`, `onSpinWait`, `resume`, `setContextClassLoader`, `setDaemon`, `setDefaultUncaughtExceptionHandler`, `setName`, `setPriority`, `setUncaughtExceptionHandler`, `sleep`, `sleep`, `start`, `stop`, `suspend`, `toString`, `yield`

## VillagerTradingManager

*class* `net.minecraftforge.common.VillagerTradingManager`

### Fields
- `private static final Map<VillagerProfession,it.unimi.dsi.fastutil.ints.Int2ObjectMap<VillagerTrades.ItemListing[]>> VANILLA_TRADES`
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<VillagerTrades.ItemListing[]> WANDERER_TRADES`

### Methods
- `static void loadTrades(ServerAboutToStartEvent e)`
- `private static void postWandererEvent()`
  Posts the WandererTradesEvent.
- `private static void postVillagerEvents()`
  Posts a VillagerTradesEvent for each registered profession.

## WorldWorkerManager

*class* `net.minecraftforge.common.WorldWorkerManager`

### Fields
- `private static List<WorldWorkerManager.IWorker> workers`
- `private static long startTime`
- `private static int index`

### Methods
- `public static void tick(boolean start)`
- `public static void addWorker(WorldWorkerManager.IWorker worker)`
- `private static WorldWorkerManager.IWorker getNext()`
- `private static void remove(WorldWorkerManager.IWorker worker)`
- `public static void clear()`

## WorldWorkerManager.IWorker

*interface* `net.minecraftforge.common.WorldWorkerManager.IWorker`

Enclosing class: WorldWorkerManager

### Methods
- `boolean hasWork()`
- `boolean doWork()`
  Perform a task, returning true from this will have the manager call this function again this tick if there is time left.
   Returning false will skip calling this worker until next tick.
