# net.minecraft.stats

- [IStatType](#istattype)
- [RecipeBook](#recipebook)
- [RecipeBookServer](#recipebookserver)
- [StatBase](#statbase)
- [StatBasic](#statbasic)
- [StatCrafting](#statcrafting)
- [StatisticsManager](#statisticsmanager)
- [StatisticsManagerServer](#statisticsmanagerserver)
- [StatList](#statlist)
## IStatType

*interface* `net.minecraft.stats.IStatType`

### Methods
- `java.lang.String format(int number)`

## RecipeBook

*class* `net.minecraft.stats.RecipeBook`

### Fields
- `protected final java.util.BitSet recipes`
- `protected final java.util.BitSet newRecipes`
- `protected boolean isGuiOpen`
- `protected boolean isFilteringCraftable`

### Methods
- `public void copyFrom(RecipeBook that)`
- `public void unlock(IRecipe recipe)`
- `public boolean isUnlocked(IRecipe recipe)`
- `public void lock(IRecipe recipe)`
- `@Deprecated protected static int getRecipeId(IRecipe recipe)` (deprecated)
  Deprecated.
- `public boolean isNew(IRecipe recipe)`
- `public void markSeen(IRecipe recipe)`
- `public void markNew(IRecipe recipe)`
- `public boolean isGuiOpen()`
- `public void setGuiOpen(boolean open)`
- `public boolean isFilteringCraftable()`
- `public void setFilteringCraftable(boolean shouldFilter)`

## RecipeBookServer

*class* `net.minecraft.stats.RecipeBookServer`

### Inherited fields
- from `net.minecraft.stats.RecipeBook`: `isFilteringCraftable`, `isGuiOpen`, `newRecipes`, `recipes`

### Methods
- `public void add(java.util.List<IRecipe> recipesIn,  EntityPlayerMP player)`
- `public void remove(java.util.List<IRecipe> recipesIn,  EntityPlayerMP player)`
- `public NBTTagCompound write()`
- `public void read(NBTTagCompound tag)`
- `public void init(EntityPlayerMP player)`

### Inherited methods
- from `net.minecraft.stats.RecipeBook`: `copyFrom`, `getRecipeId`, `isFilteringCraftable`, `isGuiOpen`, `isNew`, `isUnlocked`, `lock`, `markNew`, `markSeen`, `setFilteringCraftable`, `setGuiOpen`, `unlock`

## StatBase

*class* `net.minecraft.stats.StatBase`

### Fields
- `public final java.lang.String statId`
- `public boolean isIndependent`
- `public static IStatType simpleStatType`
- `public static IStatType timeStatType`
- `public static IStatType distanceStatType`
- `public static IStatType divideByTen`

### Methods
- `public StatBase initIndependentStat()`
- `public StatBase registerStat()`
- `public java.lang.String format(int number)`
- `public ITextComponent getStatName()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`
- `public IScoreCriteria getCriteria()`
- `public java.lang.Class<? extends IJsonSerializable> getSerializableClazz()`

## StatBasic

*class* `net.minecraft.stats.StatBasic`

### Inherited fields
- from `net.minecraft.stats.StatBase`: `distanceStatType`, `divideByTen`, `isIndependent`, `simpleStatType`, `statId`, `timeStatType`

### Methods
- `public StatBase registerStat()`

### Inherited methods
- from `net.minecraft.stats.StatBase`: `equals`, `format`, `getCriteria`, `getSerializableClazz`, `getStatName`, `hashCode`, `initIndependentStat`, `toString`

## StatCrafting

*class* `net.minecraft.stats.StatCrafting`

### Inherited fields
- from `net.minecraft.stats.StatBase`: `distanceStatType`, `divideByTen`, `isIndependent`, `simpleStatType`, `statId`, `timeStatType`

### Methods
- `public Item getItem()`

### Inherited methods
- from `net.minecraft.stats.StatBase`: `equals`, `format`, `getCriteria`, `getSerializableClazz`, `getStatName`, `hashCode`, `initIndependentStat`, `registerStat`, `toString`

## StatisticsManager

*class* `net.minecraft.stats.StatisticsManager`

### Fields
- `protected final java.util.Map<StatBase,TupleIntJsonSerializable> statsData`

### Methods
- `public void increaseStat(EntityPlayer player,  StatBase stat,  int amount)`
- `public void unlockAchievement(EntityPlayer playerIn,  StatBase statIn,  int p_150873_3_)`
- `public int readStat(StatBase stat)`

## StatisticsManagerServer

*class* `net.minecraft.stats.StatisticsManagerServer`

### Inherited fields
- from `net.minecraft.stats.StatisticsManager`: `statsData`

### Methods
- `public void readStatFile()`
- `public void saveStatFile()`
- `public void unlockAchievement(EntityPlayer playerIn,  StatBase statIn,  int p_150873_3_)`
- `public java.util.Map<StatBase,TupleIntJsonSerializable> parseJson(java.lang.String p_150881_1_)`
- `public static java.lang.String dumpJson(java.util.Map<StatBase,TupleIntJsonSerializable> p_150880_0_)`
- `public void markAllDirty()`
- `public void sendStats(EntityPlayerMP player)`

### Inherited methods
- from `net.minecraft.stats.StatisticsManager`: `increaseStat`, `readStat`

## StatList

*class* `net.minecraft.stats.StatList`

### Fields
- `protected static final java.util.Map<java.lang.String,StatBase> ID_TO_STAT_MAP`
- `public static final java.util.List<StatBase> ALL_STATS`
- `public static final java.util.List<StatBase> BASIC_STATS`
- `public static final java.util.List<StatCrafting> USE_ITEM_STATS`
- `public static final java.util.List<StatCrafting> MINE_BLOCK_STATS`
- `public static final StatBase LEAVE_GAME`
- `public static final StatBase PLAY_ONE_MINUTE`
- `public static final StatBase TIME_SINCE_DEATH`
- `public static final StatBase SNEAK_TIME`
- `public static final StatBase WALK_ONE_CM`
- `public static final StatBase CROUCH_ONE_CM`
- `public static final StatBase SPRINT_ONE_CM`
- `public static final StatBase SWIM_ONE_CM`
- `public static final StatBase FALL_ONE_CM`
- `public static final StatBase CLIMB_ONE_CM`
- `public static final StatBase FLY_ONE_CM`
- `public static final StatBase DIVE_ONE_CM`
- `public static final StatBase MINECART_ONE_CM`
- `public static final StatBase BOAT_ONE_CM`
- `public static final StatBase PIG_ONE_CM`
- `public static final StatBase HORSE_ONE_CM`
- `public static final StatBase AVIATE_ONE_CM`
- `public static final StatBase JUMP`
- `public static final StatBase DROP`
- `public static final StatBase DAMAGE_DEALT`
- `public static final StatBase DAMAGE_TAKEN`
- `public static final StatBase DEATHS`
- `public static final StatBase MOB_KILLS`
- `public static final StatBase ANIMALS_BRED`
- `public static final StatBase PLAYER_KILLS`
- `public static final StatBase FISH_CAUGHT`
- `public static final StatBase TALKED_TO_VILLAGER`
- `public static final StatBase TRADED_WITH_VILLAGER`
- `public static final StatBase CAKE_SLICES_EATEN`
- `public static final StatBase CAULDRON_FILLED`
- `public static final StatBase CAULDRON_USED`
- `public static final StatBase ARMOR_CLEANED`
- `public static final StatBase BANNER_CLEANED`
- `public static final StatBase BREWINGSTAND_INTERACTION`
- `public static final StatBase BEACON_INTERACTION`
- `public static final StatBase DROPPER_INSPECTED`
- `public static final StatBase HOPPER_INSPECTED`
- `public static final StatBase DISPENSER_INSPECTED`
- `public static final StatBase NOTEBLOCK_PLAYED`
- `public static final StatBase NOTEBLOCK_TUNED`
- `public static final StatBase FLOWER_POTTED`
- `public static final StatBase TRAPPED_CHEST_TRIGGERED`
- `public static final StatBase ENDERCHEST_OPENED`
- `public static final StatBase ITEM_ENCHANTED`
- `public static final StatBase RECORD_PLAYED`
- `public static final StatBase FURNACE_INTERACTION`
- `public static final StatBase CRAFTING_TABLE_INTERACTION`
- `public static final StatBase CHEST_OPENED`
- `public static final StatBase SLEEP_IN_BED`
- `public static final StatBase OPEN_SHULKER_BOX`

### Methods
- `public static StatBase getBlockStats(Block blockIn)`
- `public static StatBase getCraftStats(Item itemIn)`
- `public static StatBase getObjectUseStats(Item itemIn)`
- `public static StatBase getObjectBreakStats(Item itemIn)`
- `public static StatBase getObjectsPickedUpStats(Item itemIn)`
- `public static StatBase getDroppedObjectStats(Item itemIn)`
- `public static void init()`
- `public static StatBase getStatKillEntity(EntityList.EntityEggInfo eggInfo)`
- `public static StatBase getStatEntityKilledBy(EntityList.EntityEggInfo eggInfo)`
- `public static StatBase getOneShotStat(java.lang.String statName)`
- `@Deprecated public static void reinit()` (deprecated)
  Deprecated.
