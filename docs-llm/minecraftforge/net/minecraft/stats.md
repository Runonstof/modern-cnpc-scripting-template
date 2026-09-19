# net.minecraft.stats

- [RecipeBook](#recipebook)
- [RecipeBookSettings](#recipebooksettings)
- [RecipeBookSettings.TypeSettings](#recipebooksettings.typesettings)
- [ServerRecipeBook](#serverrecipebook)
- [ServerStatsCounter](#serverstatscounter)
- [Stat](#stat)
- [StatFormatter](#statformatter)
- [Stats](#stats)
- [StatsCounter](#statscounter)
- [StatType](#stattype)
## RecipeBook

*class* `net.minecraft.stats.RecipeBook`

### Fields
- `protected final Set<ResourceLocation> known`
- `protected final Set<ResourceLocation> highlight`
- `private final RecipeBookSettings bookSettings`

### Methods
- `public void copyOverData(RecipeBook p_12686_)`
- `public void add(RecipeHolder<?> p_301033_)`
- `protected void add(ResourceLocation p_12703_)`
- `public boolean contains(@Nullable  RecipeHolder<?> p_298018_)`
- `public boolean contains(ResourceLocation p_12712_)`
- `public void remove(RecipeHolder<?> p_301343_)`
- `protected void remove(ResourceLocation p_12716_)`
- `public boolean willHighlight(RecipeHolder<?> p_300661_)`
- `public void removeHighlight(RecipeHolder<?> p_298729_)`
- `public void addHighlight(RecipeHolder<?> p_300059_)`
- `protected void addHighlight(ResourceLocation p_12720_)`
- `public boolean isOpen(RecipeBookType p_12692_)`
- `public void setOpen(RecipeBookType p_12694_,  boolean p_12695_)`
- `public boolean isFiltering(RecipeBookMenu<?> p_12690_)`
- `public boolean isFiltering(RecipeBookType p_12705_)`
- `public void setFiltering(RecipeBookType p_12707_,  boolean p_12708_)`
- `public void setBookSettings(RecipeBookSettings p_12688_)`
- `public RecipeBookSettings getBookSettings()`
- `public void setBookSetting(RecipeBookType p_12697_,  boolean p_12698_,  boolean p_12699_)`

## RecipeBookSettings

*class* `net.minecraft.stats.RecipeBookSettings`

### Fields
- `private static final Map<RecipeBookType,com.mojang.datafixers.util.Pair<String,String>> TAG_FIELDS`
- `private final Map<RecipeBookType,RecipeBookSettings.TypeSettings> states`

### Methods
- `public boolean isOpen(RecipeBookType p_12735_)`
- `public void setOpen(RecipeBookType p_12737_,  boolean p_12738_)`
- `public boolean isFiltering(RecipeBookType p_12755_)`
- `public void setFiltering(RecipeBookType p_12757_,  boolean p_12758_)`
- `public static RecipeBookSettings read(FriendlyByteBuf p_12753_)`
- `public void write(FriendlyByteBuf p_12762_)`
- `public static RecipeBookSettings read(CompoundTag p_12742_)`
- `public void write(CompoundTag p_12760_)`
- `public RecipeBookSettings copy()`
- `public void replaceFrom(RecipeBookSettings p_12733_)`
- `public boolean equals(Object p_12764_)`
- `public int hashCode()`
- `public static void addTagsForType(RecipeBookType type,  String openTag,  String filteringTag)`

## RecipeBookSettings.TypeSettings

*class* `net.minecraft.stats.RecipeBookSettings.TypeSettings`

Enclosing class: RecipeBookSettings

### Fields
- `boolean open`
- `boolean filtering`

### Methods
- `public RecipeBookSettings.TypeSettings copy()`
- `public boolean equals(Object p_12783_)`
- `public int hashCode()`
- `public String toString()`

## ServerRecipeBook

*class* `net.minecraft.stats.ServerRecipeBook`

### Fields
- `public static final String RECIPE_BOOK_TAG` (= "recipeBook")
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.stats.RecipeBook`: `highlight`, `known`

### Methods
- `public int addRecipes(Collection<RecipeHolder<?>> p_12792_,  ServerPlayer p_12793_)`
- `public int removeRecipes(Collection<RecipeHolder<?>> p_12807_,  ServerPlayer p_12808_)`
- `private void sendRecipes(ClientboundRecipePacket.State p_12802_,  ServerPlayer p_12803_,  List<ResourceLocation> p_12804_)`
- `public CompoundTag toNbt()`
- `public void fromNbt(CompoundTag p_12795_,  RecipeManager p_12796_)`
- `private void loadRecipes(ListTag p_12798_,  Consumer<RecipeHolder<?>> p_12799_,  RecipeManager p_12800_)`
- `public void sendInitialRecipeBook(ServerPlayer p_12790_)`

### Inherited methods
- from `net.minecraft.stats.RecipeBook`: `add`, `add`, `addHighlight`, `addHighlight`, `contains`, `contains`, `copyOverData`, `getBookSettings`, `isFiltering`, `isFiltering`, `isOpen`, `remove`, `remove`, `removeHighlight`, `setBookSetting`, `setBookSettings`, `setFiltering`, `setOpen`, `willHighlight`

## ServerStatsCounter

*class* `net.minecraft.stats.ServerStatsCounter`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final MinecraftServer server`
- `private final File file`
- `private final Set<Stat<?>> dirty`

### Inherited fields
- from `net.minecraft.stats.StatsCounter`: `stats`

### Methods
- `public void save()`
- `public void setValue(Player p_12827_,  Stat<?> p_12828_,  int p_12829_)`
- `private Set<Stat<?>> getDirty()`
- `public void parseLocal(com.mojang.datafixers.DataFixer p_12833_,  String p_12834_)`
- `private <T> Optional<Stat<T>> getStat(StatType<T> p_12824_,  String p_12825_)`
- `private static CompoundTag fromJson(com.google.gson.JsonObject p_12831_)`
- `protected String toJson()`
- `private static <T> ResourceLocation getKey(Stat<T> p_12847_)`
- `public void markAllDirty()`
- `public void sendStats(ServerPlayer p_12820_)`

### Inherited methods
- from `net.minecraft.stats.StatsCounter`: `getValue`, `getValue`, `increment`

## Stat

*class* `net.minecraft.stats.Stat`

### Fields
- `private final StatFormatter formatter`
- `private final T value`
- `private final StatType<T> type`

### Inherited fields
- from `net.minecraft.world.scores.criteria.ObjectiveCriteria`: `AIR`, `ARMOR`, `DEATH_COUNT`, `DUMMY`, `EXPERIENCE`, `FOOD`, `HEALTH`, `KILL_COUNT_ALL`, `KILL_COUNT_PLAYERS`, `KILLED_BY_TEAM`, `LEVEL`, `TEAM_KILL`, `TRIGGER`

### Methods
- `public static <T> String buildName(StatType<T> p_12863_,  T p_12864_)`
- `private static <T> String locationToKey(@Nullable  ResourceLocation p_12866_)`
- `public StatType<T> getType()`
- `public T getValue()`
- `public String format(int p_12861_)`
- `public boolean equals(Object p_12869_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.scores.criteria.ObjectiveCriteria`: `byName`, `getCustomCriteriaNames`, `getDefaultRenderType`, `getName`, `isReadOnly`

## StatFormatter

*interface* `net.minecraft.stats.StatFormatter`

### Fields
- `static final DecimalFormat DECIMAL_FORMAT`
- `static final StatFormatter DEFAULT`
- `static final StatFormatter DIVIDE_BY_TEN`
- `static final StatFormatter DISTANCE`
- `static final StatFormatter TIME`

### Methods
- `String format(int p_12887_)`

## Stats

*class* `net.minecraft.stats.Stats`

### Fields
- `public static final StatType<Block> BLOCK_MINED`
- `public static final StatType<Item> ITEM_CRAFTED`
- `public static final StatType<Item> ITEM_USED`
- `public static final StatType<Item> ITEM_BROKEN`
- `public static final StatType<Item> ITEM_PICKED_UP`
- `public static final StatType<Item> ITEM_DROPPED`
- `public static final StatType<EntityType<?>> ENTITY_KILLED`
- `public static final StatType<EntityType<?>> ENTITY_KILLED_BY`
- `public static final StatType<ResourceLocation> CUSTOM`
- `public static final ResourceLocation LEAVE_GAME`
- `public static final ResourceLocation PLAY_TIME`
- `public static final ResourceLocation TOTAL_WORLD_TIME`
- `public static final ResourceLocation TIME_SINCE_DEATH`
- `public static final ResourceLocation TIME_SINCE_REST`
- `public static final ResourceLocation CROUCH_TIME`
- `public static final ResourceLocation WALK_ONE_CM`
- `public static final ResourceLocation CROUCH_ONE_CM`
- `public static final ResourceLocation SPRINT_ONE_CM`
- `public static final ResourceLocation WALK_ON_WATER_ONE_CM`
- `public static final ResourceLocation FALL_ONE_CM`
- `public static final ResourceLocation CLIMB_ONE_CM`
- `public static final ResourceLocation FLY_ONE_CM`
- `public static final ResourceLocation WALK_UNDER_WATER_ONE_CM`
- `public static final ResourceLocation MINECART_ONE_CM`
- `public static final ResourceLocation BOAT_ONE_CM`
- `public static final ResourceLocation PIG_ONE_CM`
- `public static final ResourceLocation HORSE_ONE_CM`
- `public static final ResourceLocation AVIATE_ONE_CM`
- `public static final ResourceLocation SWIM_ONE_CM`
- `public static final ResourceLocation STRIDER_ONE_CM`
- `public static final ResourceLocation JUMP`
- `public static final ResourceLocation DROP`
- `public static final ResourceLocation DAMAGE_DEALT`
- `public static final ResourceLocation DAMAGE_DEALT_ABSORBED`
- `public static final ResourceLocation DAMAGE_DEALT_RESISTED`
- `public static final ResourceLocation DAMAGE_TAKEN`
- `public static final ResourceLocation DAMAGE_BLOCKED_BY_SHIELD`
- `public static final ResourceLocation DAMAGE_ABSORBED`
- `public static final ResourceLocation DAMAGE_RESISTED`
- `public static final ResourceLocation DEATHS`
- `public static final ResourceLocation MOB_KILLS`
- `public static final ResourceLocation ANIMALS_BRED`
- `public static final ResourceLocation PLAYER_KILLS`
- `public static final ResourceLocation FISH_CAUGHT`
- `public static final ResourceLocation TALKED_TO_VILLAGER`
- `public static final ResourceLocation TRADED_WITH_VILLAGER`
- `public static final ResourceLocation EAT_CAKE_SLICE`
- `public static final ResourceLocation FILL_CAULDRON`
- `public static final ResourceLocation USE_CAULDRON`
- `public static final ResourceLocation CLEAN_ARMOR`
- `public static final ResourceLocation CLEAN_BANNER`
- `public static final ResourceLocation CLEAN_SHULKER_BOX`
- `public static final ResourceLocation INTERACT_WITH_BREWINGSTAND`
- `public static final ResourceLocation INTERACT_WITH_BEACON`
- `public static final ResourceLocation INSPECT_DROPPER`
- `public static final ResourceLocation INSPECT_HOPPER`
- `public static final ResourceLocation INSPECT_DISPENSER`
- `public static final ResourceLocation PLAY_NOTEBLOCK`
- `public static final ResourceLocation TUNE_NOTEBLOCK`
- `public static final ResourceLocation POT_FLOWER`
- `public static final ResourceLocation TRIGGER_TRAPPED_CHEST`
- `public static final ResourceLocation OPEN_ENDERCHEST`
- `public static final ResourceLocation ENCHANT_ITEM`
- `public static final ResourceLocation PLAY_RECORD`
- `public static final ResourceLocation INTERACT_WITH_FURNACE`
- `public static final ResourceLocation INTERACT_WITH_CRAFTING_TABLE`
- `public static final ResourceLocation OPEN_CHEST`
- `public static final ResourceLocation SLEEP_IN_BED`
- `public static final ResourceLocation OPEN_SHULKER_BOX`
- `public static final ResourceLocation OPEN_BARREL`
- `public static final ResourceLocation INTERACT_WITH_BLAST_FURNACE`
- `public static final ResourceLocation INTERACT_WITH_SMOKER`
- `public static final ResourceLocation INTERACT_WITH_LECTERN`
- `public static final ResourceLocation INTERACT_WITH_CAMPFIRE`
- `public static final ResourceLocation INTERACT_WITH_CARTOGRAPHY_TABLE`
- `public static final ResourceLocation INTERACT_WITH_LOOM`
- `public static final ResourceLocation INTERACT_WITH_STONECUTTER`
- `public static final ResourceLocation BELL_RING`
- `public static final ResourceLocation RAID_TRIGGER`
- `public static final ResourceLocation RAID_WIN`
- `public static final ResourceLocation INTERACT_WITH_ANVIL`
- `public static final ResourceLocation INTERACT_WITH_GRINDSTONE`
- `public static final ResourceLocation TARGET_HIT`
- `public static final ResourceLocation INTERACT_WITH_SMITHING_TABLE`

### Methods
- `private static ResourceLocation makeCustomStat(String p_13008_,  StatFormatter p_13009_)`
- `private static <T> StatType<T> makeRegistryStatType(String p_13011_,  Registry<T> p_13012_)`

## StatsCounter

*class* `net.minecraft.stats.StatsCounter`

### Fields
- `protected final it.unimi.dsi.fastutil.objects.Object2IntMap<Stat<?>> stats`

### Methods
- `public void increment(Player p_13024_,  Stat<?> p_13025_,  int p_13026_)`
- `public void setValue(Player p_13020_,  Stat<?> p_13021_,  int p_13022_)`
- `public <T> int getValue(StatType<T> p_13018_,  T p_13019_)`
- `public int getValue(Stat<?> p_13016_)`

## StatType

*class* `net.minecraft.stats.StatType`

### Fields
- `private final Registry<T> registry`
- `private final Map<T,Stat<T>> map`
- `private final Component displayName`

### Methods
- `public boolean contains(T p_12898_)`
- `public Stat<T> get(T p_12900_,  StatFormatter p_12901_)`
- `public Registry<T> getRegistry()`
- `public Iterator<Stat<T>> iterator()`
- `public Stat<T> get(T p_12903_)`
- `public Component getDisplayName()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`
