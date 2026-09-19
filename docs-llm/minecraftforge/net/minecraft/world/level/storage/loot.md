# net.minecraft.world.level.storage.loot

- [BuiltInLootTables](#builtinloottables)
- [Class LootContext.EntityTarget](#class-lootcontext.entitytarget)
- [IntRange](#intrange)
- [IntRange.IntChecker](#intrange.intchecker)
- [IntRange.IntLimiter](#intrange.intlimiter)
- [LootContext](#lootcontext)
- [LootContext.Builder](#lootcontext.builder)
- [LootContext.VisitedEntry](#lootcontext.visitedentry)
- [LootContextUser](#lootcontextuser)
- [LootDataId](#lootdataid)
- [LootDataManager](#lootdatamanager)
- [LootDataResolver](#lootdataresolver)
- [LootDataType](#lootdatatype)
- [LootDataType.Validator](#lootdatatype.validator)
- [LootParams](#lootparams)
- [LootParams.Builder](#lootparams.builder)
- [LootParams.DynamicDrop](#lootparams.dynamicdrop)
- [LootPool](#lootpool)
- [LootPool.Builder](#lootpool.builder)
- [LootTable](#loottable)
- [LootTable.Builder](#loottable.builder)
- [ValidationContext](#validationcontext)
## BuiltInLootTables

*class* `net.minecraft.world.level.storage.loot.BuiltInLootTables`

### Fields
- `private static final Set<ResourceLocation> LOCATIONS`
- `private static final Set<ResourceLocation> IMMUTABLE_LOCATIONS`
- `public static final ResourceLocation EMPTY`
- `public static final ResourceLocation SPAWN_BONUS_CHEST`
- `public static final ResourceLocation END_CITY_TREASURE`
- `public static final ResourceLocation SIMPLE_DUNGEON`
- `public static final ResourceLocation VILLAGE_WEAPONSMITH`
- `public static final ResourceLocation VILLAGE_TOOLSMITH`
- `public static final ResourceLocation VILLAGE_ARMORER`
- `public static final ResourceLocation VILLAGE_CARTOGRAPHER`
- `public static final ResourceLocation VILLAGE_MASON`
- `public static final ResourceLocation VILLAGE_SHEPHERD`
- `public static final ResourceLocation VILLAGE_BUTCHER`
- `public static final ResourceLocation VILLAGE_FLETCHER`
- `public static final ResourceLocation VILLAGE_FISHER`
- `public static final ResourceLocation VILLAGE_TANNERY`
- `public static final ResourceLocation VILLAGE_TEMPLE`
- `public static final ResourceLocation VILLAGE_DESERT_HOUSE`
- `public static final ResourceLocation VILLAGE_PLAINS_HOUSE`
- `public static final ResourceLocation VILLAGE_TAIGA_HOUSE`
- `public static final ResourceLocation VILLAGE_SNOWY_HOUSE`
- `public static final ResourceLocation VILLAGE_SAVANNA_HOUSE`
- `public static final ResourceLocation ABANDONED_MINESHAFT`
- `public static final ResourceLocation NETHER_BRIDGE`
- `public static final ResourceLocation STRONGHOLD_LIBRARY`
- `public static final ResourceLocation STRONGHOLD_CROSSING`
- `public static final ResourceLocation STRONGHOLD_CORRIDOR`
- `public static final ResourceLocation DESERT_PYRAMID`
- `public static final ResourceLocation JUNGLE_TEMPLE`
- `public static final ResourceLocation JUNGLE_TEMPLE_DISPENSER`
- `public static final ResourceLocation IGLOO_CHEST`
- `public static final ResourceLocation WOODLAND_MANSION`
- `public static final ResourceLocation UNDERWATER_RUIN_SMALL`
- `public static final ResourceLocation UNDERWATER_RUIN_BIG`
- `public static final ResourceLocation BURIED_TREASURE`
- `public static final ResourceLocation SHIPWRECK_MAP`
- `public static final ResourceLocation SHIPWRECK_SUPPLY`
- `public static final ResourceLocation SHIPWRECK_TREASURE`
- `public static final ResourceLocation PILLAGER_OUTPOST`
- `public static final ResourceLocation BASTION_TREASURE`
- `public static final ResourceLocation BASTION_OTHER`
- `public static final ResourceLocation BASTION_BRIDGE`
- `public static final ResourceLocation BASTION_HOGLIN_STABLE`
- `public static final ResourceLocation ANCIENT_CITY`
- `public static final ResourceLocation ANCIENT_CITY_ICE_BOX`
- `public static final ResourceLocation RUINED_PORTAL`
- `public static final ResourceLocation SHEEP_WHITE`
- `public static final ResourceLocation SHEEP_ORANGE`
- `public static final ResourceLocation SHEEP_MAGENTA`
- `public static final ResourceLocation SHEEP_LIGHT_BLUE`
- `public static final ResourceLocation SHEEP_YELLOW`
- `public static final ResourceLocation SHEEP_LIME`
- `public static final ResourceLocation SHEEP_PINK`
- `public static final ResourceLocation SHEEP_GRAY`
- `public static final ResourceLocation SHEEP_LIGHT_GRAY`
- `public static final ResourceLocation SHEEP_CYAN`
- `public static final ResourceLocation SHEEP_PURPLE`
- `public static final ResourceLocation SHEEP_BLUE`
- `public static final ResourceLocation SHEEP_BROWN`
- `public static final ResourceLocation SHEEP_GREEN`
- `public static final ResourceLocation SHEEP_RED`
- `public static final ResourceLocation SHEEP_BLACK`
- `public static final ResourceLocation FISHING`
- `public static final ResourceLocation FISHING_JUNK`
- `public static final ResourceLocation FISHING_TREASURE`
- `public static final ResourceLocation FISHING_FISH`
- `public static final ResourceLocation CAT_MORNING_GIFT`
- `public static final ResourceLocation ARMORER_GIFT`
- `public static final ResourceLocation BUTCHER_GIFT`
- `public static final ResourceLocation CARTOGRAPHER_GIFT`
- `public static final ResourceLocation CLERIC_GIFT`
- `public static final ResourceLocation FARMER_GIFT`
- `public static final ResourceLocation FISHERMAN_GIFT`
- `public static final ResourceLocation FLETCHER_GIFT`
- `public static final ResourceLocation LEATHERWORKER_GIFT`
- `public static final ResourceLocation LIBRARIAN_GIFT`
- `public static final ResourceLocation MASON_GIFT`
- `public static final ResourceLocation SHEPHERD_GIFT`
- `public static final ResourceLocation TOOLSMITH_GIFT`
- `public static final ResourceLocation WEAPONSMITH_GIFT`
- `public static final ResourceLocation SNIFFER_DIGGING`
- `public static final ResourceLocation PIGLIN_BARTERING`
- `public static final ResourceLocation DESERT_WELL_ARCHAEOLOGY`
- `public static final ResourceLocation DESERT_PYRAMID_ARCHAEOLOGY`
- `public static final ResourceLocation TRAIL_RUINS_ARCHAEOLOGY_COMMON`
- `public static final ResourceLocation TRAIL_RUINS_ARCHAEOLOGY_RARE`
- `public static final ResourceLocation OCEAN_RUIN_WARM_ARCHAEOLOGY`
- `public static final ResourceLocation OCEAN_RUIN_COLD_ARCHAEOLOGY`

### Methods
- `private static ResourceLocation register(String p_78768_)`
- `private static ResourceLocation register(ResourceLocation p_78770_)`
- `public static Set<ResourceLocation> all()`

## Class LootContext.EntityTarget

*enum* `net.minecraft.world.level.storage.loot.Class LootContext.EntityTarget`

Enclosing class: LootContext

### Fields
- `public static final StringRepresentable.EnumCodec<LootContext.EntityTarget> CODEC`
- `private final String name`
- `private final LootContextParam<? extends Entity> param`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static LootContext.EntityTarget[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LootContext.EntityTarget valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public LootContextParam<? extends Entity> getParam()`
- `public String getName()`
- `public static LootContext.EntityTarget getByName(String p_79007_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IntRange

*class* `net.minecraft.world.level.storage.loot.IntRange`

### Fields
- `private static final com.mojang.serialization.Codec<IntRange> RECORD_CODEC`
- `public static final com.mojang.serialization.Codec<IntRange> CODEC`
- `@Nullable private final NumberProvider min`
- `@Nullable private final NumberProvider max`
- `private final IntRange.IntLimiter limiter`
- `private final IntRange.IntChecker predicate`

### Methods
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public static IntRange exact(int p_165010_)`
- `public static IntRange range(int p_165012_,  int p_165013_)`
- `public static IntRange lowerBound(int p_165027_)`
- `public static IntRange upperBound(int p_165041_)`
- `public int clamp(LootContext p_165015_,  int p_165016_)`
- `public boolean test(LootContext p_165029_,  int p_165030_)`
- `private OptionalInt unpackExact()`

## IntRange.IntChecker

*interface* `net.minecraft.world.level.storage.loot.IntRange.IntChecker`

Enclosing class: IntRange

### Methods
- `boolean test(LootContext p_165057_,  int p_165058_)`

## IntRange.IntLimiter

*interface* `net.minecraft.world.level.storage.loot.IntRange.IntLimiter`

Enclosing class: IntRange

### Methods
- `int apply(LootContext p_165060_,  int p_165061_)`

## LootContext

*class* `net.minecraft.world.level.storage.loot.LootContext`

### Fields
- `private final LootParams params`
- `private final RandomSource random`
- `private final LootDataResolver lootDataResolver`
- `private final Set<LootContext.VisitedEntry<?>> visitedElements`
- `private ResourceLocation queriedLootTableId`

### Methods
- `public boolean hasParam(LootContextParam<?> p_78937_)`
- `public <T> T getParam(LootContextParam<T> p_165125_)`
- `public void addDynamicDrops(ResourceLocation p_78943_,  Consumer<ItemStack> p_78944_)`
- `@Nullable public <T> T getParamOrNull(LootContextParam<T> p_78954_)`
- `public boolean hasVisitedElement(LootContext.VisitedEntry<?> p_279182_)`
- `public boolean pushVisitedElement(LootContext.VisitedEntry<?> p_279152_)`
- `public void popVisitedElement(LootContext.VisitedEntry<?> p_279198_)`
- `public LootDataResolver getResolver()`
- `public RandomSource getRandom()`
- `public float getLuck()`
- `public ServerLevel getLevel()`
- `public static LootContext.VisitedEntry<LootTable> createVisitedEntry(LootTable p_279327_)`
- `public static LootContext.VisitedEntry<LootItemCondition> createVisitedEntry(LootItemCondition p_279250_)`
- `public static LootContext.VisitedEntry<LootItemFunction> createVisitedEntry(LootItemFunction p_279163_)`
- `public int getLootingModifier()`
- `public void setQueriedLootTableId(ResourceLocation queriedLootTableId)`
- `public ResourceLocation getQueriedLootTableId()`

## LootContext.Builder

*class* `net.minecraft.world.level.storage.loot.LootContext.Builder`

Enclosing class: LootContext

### Fields
- `private final LootParams params`
- `@Nullable private RandomSource random`
- `private ResourceLocation queriedLootTableId`

### Methods
- `public LootContext.Builder withOptionalRandomSeed(long p_78966_)`
- `public LootContext.Builder withQueriedLootTableId(ResourceLocation queriedLootTableId)`
- `public ServerLevel getLevel()`
- `public LootContext create(Optional<ResourceLocation> p_299315_)`

## LootContext.VisitedEntry

*record* `net.minecraft.world.level.storage.loot.LootContext.VisitedEntry`

Enclosing class: LootContext

### Fields
- `private final LootDataType<T> type`
  The field for the type record component.
- `private final T value`
  The field for the value record component.

### Methods
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
- `public LootDataType<T> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public T value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## LootContextUser

*interface* `net.minecraft.world.level.storage.loot.LootContextUser`

### Methods
- `default Set<LootContextParam<?>> getReferencedContextParams()`
- `default void validate(ValidationContext p_79022_)`

## LootDataId

*record* `net.minecraft.world.level.storage.loot.LootDataId`

### Fields
- `private final LootDataType<T> type`
  The field for the type record component.
- `private final ResourceLocation location`
  The field for the location record component.

### Methods
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
- `public LootDataType<T> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public ResourceLocation location()`
  Returns the value of the location record component.
  - returns: the value of the location record component

## LootDataManager

*class* `net.minecraft.world.level.storage.loot.LootDataManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `public static final LootDataId<LootTable> EMPTY_LOOT_TABLE_KEY`
- `private Map<LootDataId<?>,?> elements`
- `private com.google.common.collect.Multimap<LootDataType<?>,ResourceLocation> typeKeys`

### Methods
- `public final CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_279240_,  ResourceManager p_279377_,  ProfilerFiller p_279135_,  ProfilerFiller p_279088_,  Executor p_279148_,  Executor p_279169_)`
- `private static <T> CompletableFuture<?> scheduleElementParse(LootDataType<T> p_279205_,  ResourceManager p_279441_,  Executor p_279233_,  Map<LootDataType<?>,Map<ResourceLocation,?>> p_279241_)`
- `private void apply(Map<LootDataType<?>,Map<ResourceLocation,?>> p_279426_)`
- `private static <T> void castAndValidate(ValidationContext p_279270_,  LootDataId<T> p_279249_,  Object p_279342_)`
- `@Nullable public <T> T getElement(LootDataId<T> p_279467_)`
- `public Collection<ResourceLocation> getKeys(LootDataType<?> p_279455_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootDataResolver`: `getElement`, `getElementOptional`, `getElementOptional`, `getLootTable`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## LootDataResolver

*interface* `net.minecraft.world.level.storage.loot.LootDataResolver`

### Methods
- `@Nullable <T> T getElement(LootDataId<T> p_279309_)`
- `@Nullable default <T> T getElement(LootDataType<T> p_279423_,  ResourceLocation p_279277_)`
- `default <T> Optional<T> getElementOptional(LootDataId<T> p_279486_)`
- `default <T> Optional<T> getElementOptional(LootDataType<T> p_279350_,  ResourceLocation p_279323_)`
- `default LootTable getLootTable(ResourceLocation p_279456_)`

## LootDataType

*class* `net.minecraft.world.level.storage.loot.LootDataType`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final LootDataType<LootItemCondition> PREDICATE`
- `public static final LootDataType<LootItemFunction> MODIFIER`
- `public static final LootDataType<LootTable> TABLE`
- `private final com.mojang.serialization.Codec<T> codec`
- `private final String directory`
- `private final LootDataType.Validator<T> validator`

### Methods
- `public String directory()`
- `public void runValidation(ValidationContext p_279366_,  LootDataId<T> p_279106_,  T p_279124_)`
- `public Optional<T> deserialize(ResourceLocation p_279253_,  com.google.gson.JsonElement p_279330_)`
- `public static Stream<LootDataType<?>> values()`
- `private static <T extends LootContextUser> LootDataType.Validator<T> createSimpleValidator()`
- `private static LootDataType.Validator<LootTable> createLootTableValidator()`

## LootDataType.Validator

*interface* `net.minecraft.world.level.storage.loot.LootDataType.Validator`

Enclosing class: LootDataType<T>

### Methods
- `void run(ValidationContext p_279419_,  LootDataId<T> p_279145_,  T p_279326_)`

## LootParams

*class* `net.minecraft.world.level.storage.loot.LootParams`

### Fields
- `private final ServerLevel level`
- `private final Map<LootContextParam<?>,Object> params`
- `private final Map<ResourceLocation,LootParams.DynamicDrop> dynamicDrops`
- `private final float luck`

### Methods
- `public ServerLevel getLevel()`
- `public boolean hasParam(LootContextParam<?> p_287749_)`
- `public <T> T getParameter(LootContextParam<T> p_287670_)`
- `@Nullable public <T> T getOptionalParameter(LootContextParam<T> p_287644_)`
- `@Nullable public <T> T getParamOrNull(LootContextParam<T> p_287769_)`
- `public void addDynamicDrops(ResourceLocation p_287768_,  Consumer<ItemStack> p_287711_)`
- `public float getLuck()`

## LootParams.Builder

*class* `net.minecraft.world.level.storage.loot.LootParams.Builder`

Enclosing class: LootParams

### Fields
- `private final ServerLevel level`
- `private final Map<LootContextParam<?>,Object> params`
- `private final Map<ResourceLocation,LootParams.DynamicDrop> dynamicDrops`
- `private float luck`

### Methods
- `public ServerLevel getLevel()`
- `public <T> LootParams.Builder withParameter(LootContextParam<T> p_287706_,  T p_287606_)`
- `public <T> LootParams.Builder withOptionalParameter(LootContextParam<T> p_287680_,  @Nullable  T p_287630_)`
- `public <T> T getParameter(LootContextParam<T> p_287646_)`
- `@Nullable public <T> T getOptionalParameter(LootContextParam<T> p_287759_)`
- `public LootParams.Builder withDynamicDrop(ResourceLocation p_287734_,  LootParams.DynamicDrop p_287724_)`
- `public LootParams.Builder withLuck(float p_287703_)`
- `public LootParams create(LootContextParamSet p_287701_)`

## LootParams.DynamicDrop

*interface* `net.minecraft.world.level.storage.loot.LootParams.DynamicDrop`

Enclosing class: LootParams

### Methods
- `void add(Consumer<ItemStack> p_287584_)`

## LootPool

*class* `net.minecraft.world.level.storage.loot.LootPool`

### Fields
- `public static final com.mojang.serialization.Codec<LootPool> CODEC`
- `public static final com.mojang.serialization.Codec<LootPool> CONDITIONAL_CODEC`
- `private final List<LootPoolEntryContainer> entries`
- `private final List<LootItemCondition> conditions`
- `private final Predicate<LootContext> compositeCondition`
- `private final List<LootItemFunction> functions`
- `private final BiFunction<ItemStack,LootContext,ItemStack> compositeFunction`
- `private NumberProvider rolls`
- `private NumberProvider bonusRolls`
- `private Optional<String> name`
- `private Optional<ICondition> forge_condition`
- `private boolean isFrozen`

### Methods
- `private void addRandomItem(Consumer<ItemStack> p_79059_,  LootContext p_79060_)`
- `public void addRandomItems(Consumer<ItemStack> p_79054_,  LootContext p_79055_)`
- `public void validate(ValidationContext p_79052_)`
- `public static LootPool.Builder lootPool()`
- `public void freeze()`
- `public boolean isFrozen()`
- `private void checkFrozen()`
- `@Nullable public @Nullable String getName()`
- `void setName(String name)`
- `public NumberProvider getRolls()`
- `public NumberProvider getBonusRolls()`
- `public void setRolls(NumberProvider v)`
- `public void setBonusRolls(NumberProvider v)`

## LootPool.Builder

*class* `net.minecraft.world.level.storage.loot.LootPool.Builder`

Enclosing class: LootPool

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootPoolEntryContainer> entries`
- `private final com.google.common.collect.ImmutableList.Builder<LootItemCondition> conditions`
- `private final com.google.common.collect.ImmutableList.Builder<LootItemFunction> functions`
- `private NumberProvider rolls`
- `private NumberProvider bonusRolls`
- `@Nullable private @Nullable String name`
- `@Nullable private ICondition forge_condition`

### Methods
- `public LootPool.Builder setRolls(NumberProvider p_165134_)`
- `public LootPool.Builder unwrap()`
- `public LootPool.Builder setBonusRolls(NumberProvider p_165136_)`
- `public LootPool.Builder add(LootPoolEntryContainer.Builder<?> p_79077_)`
- `public LootPool.Builder when(LootItemCondition.Builder p_79081_)`
- `public LootPool.Builder apply(LootItemFunction.Builder p_79079_)`
- `public LootPool.Builder name(String name)`
- `public LootPool.Builder when(ICondition value)`
- `public LootPool build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`
- from `net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder`: `apply`, `apply`

## LootTable

*class* `net.minecraft.world.level.storage.loot.LootTable`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final LootTable EMPTY`
- `public static final LootContextParamSet DEFAULT_PARAM_SET`
- `public static final com.mojang.serialization.Codec<LootTable> CODEC`
- `private final LootContextParamSet paramSet`
- `private final Optional<ResourceLocation> randomSequence`
- `private final List<LootPool> pools`
- `private final List<LootItemFunction> functions`
- `private final BiFunction<ItemStack,LootContext,ItemStack> compositeFunction`
- `private ResourceLocation lootTableId`
- `private boolean isFrozen`

### Methods
- `public static Consumer<ItemStack> createStackSplitter(ServerLevel p_287765_,  Consumer<ItemStack> p_251308_)`
- `@Deprecated public void getRandomItemsRaw(LootParams p_287669_,  Consumer<ItemStack> p_287781_)` (deprecated)
- `@Deprecated public void getRandomItemsRaw(LootContext p_79132_,  Consumer<ItemStack> p_79133_)` (deprecated)
- `public void getRandomItems(LootParams p_287748_,  long p_287729_,  Consumer<ItemStack> p_287583_)`
- `public void getRandomItems(LootParams p_287704_,  Consumer<ItemStack> p_287617_)`
- `public void getRandomItems(LootContext p_79149_,  Consumer<ItemStack> p_79150_)`
- `public it.unimi.dsi.fastutil.objects.ObjectArrayList<ItemStack> getRandomItems(LootParams p_287574_,  long p_287773_)`
- `public it.unimi.dsi.fastutil.objects.ObjectArrayList<ItemStack> getRandomItems(LootParams p_287616_)`
- `private it.unimi.dsi.fastutil.objects.ObjectArrayList<ItemStack> getRandomItems(LootContext p_230923_)`
- `public LootContextParamSet getParamSet()`
- `public void validate(ValidationContext p_79137_)`
- `public void fill(Container p_287662_,  LootParams p_287743_,  long p_287585_)`
- `private void shuffleAndSplitItems(it.unimi.dsi.fastutil.objects.ObjectArrayList<ItemStack> p_230925_,  int p_230926_,  RandomSource p_230927_)`
- `private List<Integer> getAvailableSlots(Container p_230920_,  RandomSource p_230921_)`
- `public static LootTable.Builder lootTable()`
- `public void setLootTableId(ResourceLocation id)`
- `public ResourceLocation getLootTableId()`
- `@Nullable public @Nullable LootPool removePool(String name)`
- `public void addPool(LootPool pool)`
- `public void freeze()`
- `public boolean isFrozen()`
- `private void checkFrozen()`

## LootTable.Builder

*class* `net.minecraft.world.level.storage.loot.LootTable.Builder`

Enclosing class: LootTable

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootPool> pools`
- `private final com.google.common.collect.ImmutableList.Builder<LootItemFunction> functions`
- `private LootContextParamSet paramSet`
- `private Optional<ResourceLocation> randomSequence`

### Methods
- `public LootTable.Builder withPool(LootPool.Builder p_79162_)`
- `public LootTable.Builder setParamSet(LootContextParamSet p_79166_)`
- `public LootTable.Builder setRandomSequence(ResourceLocation p_287667_)`
- `public LootTable.Builder apply(LootItemFunction.Builder p_79164_)`
- `public LootTable.Builder unwrap()`
- `public LootTable build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder`: `apply`, `apply`

## ValidationContext

*class* `net.minecraft.world.level.storage.loot.ValidationContext`

### Fields
- `private final com.google.common.collect.Multimap<String,String> problems`
- `private final Supplier<String> context`
- `private final LootContextParamSet params`
- `private final LootDataResolver resolver`
- `private final Set<LootDataId<?>> visitedElements`
- `@Nullable private String contextCache`

### Methods
- `private String getContext()`
- `public void reportProblem(String p_79358_)`
- `public ValidationContext forChild(String p_79366_)`
- `public ValidationContext enterElement(String p_279180_,  LootDataId<?> p_279438_)`
- `public boolean hasVisitedElement(LootDataId<?> p_279178_)`
- `public com.google.common.collect.Multimap<String,String> getProblems()`
- `public void validateUser(LootContextUser p_79354_)`
- `public LootDataResolver resolver()`
- `public ValidationContext setParams(LootContextParamSet p_79356_)`
