# net.minecraft.world.level.block.entity

- [AbstractFurnaceBlockEntity](#abstractfurnaceblockentity)
- [BannerBlockEntity](#bannerblockentity)
- [BannerPattern](#bannerpattern)
- [BannerPattern.Builder](#bannerpattern.builder)
- [BannerPatterns](#bannerpatterns)
- [BarrelBlockEntity](#barrelblockentity)
- [BaseContainerBlockEntity](#basecontainerblockentity)
- [BeaconBlockEntity](#beaconblockentity)
- [BeaconBlockEntity.BeaconBeamSection](#beaconblockentity.beaconbeamsection)
- [BedBlockEntity](#bedblockentity)
- [BeehiveBlockEntity](#beehiveblockentity)
- [BeehiveBlockEntity.BeeData](#beehiveblockentity.beedata)
- [BellBlockEntity](#bellblockentity)
- [BellBlockEntity.ResonationEndAction](#bellblockentity.resonationendaction)
- [BlastFurnaceBlockEntity](#blastfurnaceblockentity)
- [BlockEntity](#blockentity)
- [BlockEntityTicker](#blockentityticker)
- [BlockEntityType](#blockentitytype)
- [BlockEntityType.BlockEntitySupplier](#blockentitytype.blockentitysupplier)
- [BlockEntityType.Builder](#blockentitytype.builder)
- [BrewingStandBlockEntity](#brewingstandblockentity)
- [BrushableBlockEntity](#brushableblockentity)
- [CalibratedSculkSensorBlockEntity](#calibratedsculksensorblockentity)
- [CalibratedSculkSensorBlockEntity.VibrationUser](#calibratedsculksensorblockentity.vibrationuser)
- [CampfireBlockEntity](#campfireblockentity)
- [ChestBlockEntity](#chestblockentity)
- [ChestLidController](#chestlidcontroller)
- [ChiseledBookShelfBlockEntity](#chiseledbookshelfblockentity)
- [Class BeehiveBlockEntity.BeeReleaseStatus](#class-beehiveblockentity.beereleasestatus)
- [Class CommandBlockEntity.Mode](#class-commandblockentity.mode)
- [Class JigsawBlockEntity.JointType](#class-jigsawblockentity.jointtype)
- [Class ShulkerBoxBlockEntity.AnimationStatus](#class-shulkerboxblockentity.animationstatus)
- [Class StructureBlockEntity.UpdateType](#class-structureblockentity.updatetype)
- [CommandBlockEntity](#commandblockentity)
- [ComparatorBlockEntity](#comparatorblockentity)
- [ConduitBlockEntity](#conduitblockentity)
- [ContainerOpenersCounter](#containeropenerscounter)
- [DaylightDetectorBlockEntity](#daylightdetectorblockentity)
- [DecoratedPotBlockEntity](#decoratedpotblockentity)
- [DecoratedPotBlockEntity.Decorations](#decoratedpotblockentity.decorations)
- [DecoratedPotPatterns](#decoratedpotpatterns)
- [DispenserBlockEntity](#dispenserblockentity)
- [DropperBlockEntity](#dropperblockentity)
- [EnchantmentTableBlockEntity](#enchantmenttableblockentity)
- [EnderChestBlockEntity](#enderchestblockentity)
- [FurnaceBlockEntity](#furnaceblockentity)
- [HangingSignBlockEntity](#hangingsignblockentity)
- [Hopper](#hopper)
- [HopperBlockEntity](#hopperblockentity)
- [JigsawBlockEntity](#jigsawblockentity)
- [JukeboxBlockEntity](#jukeboxblockentity)
- [LecternBlockEntity](#lecternblockentity)
- [LidBlockEntity](#lidblockentity)
- [RandomizableContainerBlockEntity](#randomizablecontainerblockentity)
- [SculkCatalystBlockEntity](#sculkcatalystblockentity)
- [SculkCatalystBlockEntity.CatalystListener](#sculkcatalystblockentity.catalystlistener)
- [SculkSensorBlockEntity](#sculksensorblockentity)
- [SculkSensorBlockEntity.VibrationUser](#sculksensorblockentity.vibrationuser)
- [SculkShriekerBlockEntity](#sculkshriekerblockentity)
- [SculkShriekerBlockEntity.VibrationUser](#sculkshriekerblockentity.vibrationuser)
- [ShulkerBoxBlockEntity](#shulkerboxblockentity)
- [SignBlockEntity](#signblockentity)
- [SignText](#signtext)
- [SkullBlockEntity](#skullblockentity)
- [SmokerBlockEntity](#smokerblockentity)
- [SpawnerBlockEntity](#spawnerblockentity)
- [StructureBlockEntity](#structureblockentity)
- [TheEndGatewayBlockEntity](#theendgatewayblockentity)
- [TheEndPortalBlockEntity](#theendportalblockentity)
- [TickingBlockEntity](#tickingblockentity)
- [TrappedChestBlockEntity](#trappedchestblockentity)
## AbstractFurnaceBlockEntity

*class* `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`

### Fields
- `protected static final int SLOT_INPUT` (= 0)
- `protected static final int SLOT_FUEL` (= 1)
- `protected static final int SLOT_RESULT` (= 2)
- `public static final int DATA_LIT_TIME` (= 0)
- `private static final int[] SLOTS_FOR_UP`
- `private static final int[] SLOTS_FOR_DOWN`
- `private static final int[] SLOTS_FOR_SIDES`
- `public static final int DATA_LIT_DURATION` (= 1)
- `public static final int DATA_COOKING_PROGRESS` (= 2)
- `public static final int DATA_COOKING_TOTAL_TIME` (= 3)
- `public static final int NUM_DATA_VALUES` (= 4)
- `public static final int BURN_TIME_STANDARD` (= 200)
- `public static final int BURN_COOL_SPEED` (= 2)
- `private final RecipeType<? extends AbstractCookingRecipe> recipeType`
- `protected NonNullList<ItemStack> items`
- `int litTime`
- `int litDuration`
- `int cookingProgress`
- `int cookingTotalTime`
- `protected final ContainerData dataAccess`
- `private final it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap<ResourceLocation> recipesUsed`
- `private final RecipeManager.CachedCheck<Container,? extends AbstractCookingRecipe> quickCheck`
- `LazyOptional<? extends IItemHandler>[] handlers`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `@Deprecated public static Map<Item,Integer> getFuel()` (deprecated)
- `private static boolean isNeverAFurnaceFuel(Item p_58398_)`
- `private static void add(Map<Item,Integer> p_204303_,  TagKey<Item> p_204304_,  int p_204305_)`
- `private static void add(Map<Item,Integer> p_58375_,  ItemLike p_58376_,  int p_58377_)`
- `private boolean isLit()`
- `public void load(CompoundTag p_155025_)`
- `protected void saveAdditional(CompoundTag p_187452_)`
- `public static void serverTick(Level p_155014_,  BlockPos p_155015_,  BlockState p_155016_,  AbstractFurnaceBlockEntity p_155017_)`
- `private boolean canBurn(RegistryAccess p_266924_,  @Nullable  RecipeHolder<?> p_299207_,  NonNullList<ItemStack> p_155007_,  int p_155008_)`
- `private boolean burn(RegistryAccess p_266740_,  @Nullable  RecipeHolder<?> p_299450_,  NonNullList<ItemStack> p_267073_,  int p_267157_)`
- `protected int getBurnDuration(ItemStack p_58343_)`
- `private static int getTotalCookTime(Level p_222693_,  AbstractFurnaceBlockEntity p_222694_)`
- `public static boolean isFuel(ItemStack p_58400_)`
- `public int[] getSlotsForFace(Direction p_58363_)`
- `public boolean canPlaceItemThroughFace(int p_58336_,  ItemStack p_58337_,  @Nullable  Direction p_58338_)`
- `public boolean canTakeItemThroughFace(int p_58392_,  ItemStack p_58393_,  Direction p_58394_)`
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_58328_)`
- `public ItemStack removeItem(int p_58330_,  int p_58331_)`
- `public ItemStack removeItemNoUpdate(int p_58387_)`
- `public void setItem(int p_58333_,  ItemStack p_58334_)`
- `public boolean stillValid(Player p_58340_)`
- `public boolean canPlaceItem(int p_58389_,  ItemStack p_58390_)`
- `public void clearContent()`
- `public void setRecipeUsed(@Nullable  RecipeHolder<?> p_297739_)`
- `@Nullable public RecipeHolder<?> getRecipeUsed()`
- `public void awardUsedRecipes(Player p_58396_,  List<ItemStack> p_282202_)`
- `public void awardUsedRecipesAndPopExperience(ServerPlayer p_155004_)`
- `public List<RecipeHolder<?>> getRecipesToAwardAndPopExperience(ServerLevel p_154996_,  Vec3 p_154997_)`
- `private static void createExperience(ServerLevel p_154999_,  Vec3 p_155000_,  int p_155001_,  float p_155002_)`
- `public void fillStackedContents(StackedContents p_58342_)`
- `public <T> LazyOptional<T> getCapability(Capability<T> capability,  @Nullable  Direction facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public void invalidateCaps()`
- `public void reviveCaps()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canOpen`, `canUnlock`, `createMenu`, `createMenu`, `createUnSidedHandler`, `getCustomName`, `getDefaultName`, `getDisplayName`, `getName`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`
- from `net.minecraft.world.inventory.RecipeCraftingHolder`: `setRecipeUsed`

## BannerBlockEntity

*class* `net.minecraft.world.level.block.entity.BannerBlockEntity`

### Fields
- `public static final int MAX_PATTERNS` (= 6)
- `public static final String TAG_PATTERNS` (= "Patterns")
- `public static final String TAG_PATTERN` (= "Pattern")
- `public static final String TAG_COLOR` (= "Color")
- `@Nullable private Component name`
- `private DyeColor baseColor`
- `@Nullable private ListTag itemPatterns`
- `@Nullable private List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> patterns`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `@Nullable public static ListTag getItemPatterns(ItemStack p_58488_)`
- `public void fromItem(ItemStack p_58490_,  DyeColor p_58491_)`
- `public void fromItem(ItemStack p_187454_)`
- `public Component getName()`
- `@Nullable public Component getCustomName()`
- `public void setCustomName(Component p_58502_)`
- `protected void saveAdditional(CompoundTag p_187456_)`
- `public void load(CompoundTag p_155042_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public static int getPatternCount(ItemStack p_58505_)`
- `public List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> getPatterns()`
- `public static List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> createPatterns(DyeColor p_58485_,  @Nullable  ListTag p_58486_)`
- `public static void removeLastPattern(ItemStack p_58510_)`
- `public ItemStack getItem()`
- `public DyeColor getBaseColor()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `getDisplayName`, `hasCustomName`

## BannerPattern

*class* `net.minecraft.world.level.block.entity.BannerPattern`

### Fields
- `final String hashname`

### Methods
- `public static ResourceLocation location(ResourceKey<BannerPattern> p_222698_,  boolean p_222699_)`
- `public String getHashname()`
- `@Nullable public static Holder<BannerPattern> byHash(String p_222701_)`

## BannerPattern.Builder

*class* `net.minecraft.world.level.block.entity.BannerPattern.Builder`

Enclosing class: BannerPattern

### Fields
- `private final List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> patterns`

### Methods
- `public BannerPattern.Builder addPattern(ResourceKey<BannerPattern> p_222706_,  DyeColor p_222707_)`
- `public BannerPattern.Builder addPattern(Holder<BannerPattern> p_222709_,  DyeColor p_222710_)`
- `public BannerPattern.Builder addPattern(com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor> p_155049_)`
- `public ListTag toListTag()`

## BannerPatterns

*class* `net.minecraft.world.level.block.entity.BannerPatterns`

### Fields
- `public static final ResourceKey<BannerPattern> BASE`
- `public static final ResourceKey<BannerPattern> SQUARE_BOTTOM_LEFT`
- `public static final ResourceKey<BannerPattern> SQUARE_BOTTOM_RIGHT`
- `public static final ResourceKey<BannerPattern> SQUARE_TOP_LEFT`
- `public static final ResourceKey<BannerPattern> SQUARE_TOP_RIGHT`
- `public static final ResourceKey<BannerPattern> STRIPE_BOTTOM`
- `public static final ResourceKey<BannerPattern> STRIPE_TOP`
- `public static final ResourceKey<BannerPattern> STRIPE_LEFT`
- `public static final ResourceKey<BannerPattern> STRIPE_RIGHT`
- `public static final ResourceKey<BannerPattern> STRIPE_CENTER`
- `public static final ResourceKey<BannerPattern> STRIPE_MIDDLE`
- `public static final ResourceKey<BannerPattern> STRIPE_DOWNRIGHT`
- `public static final ResourceKey<BannerPattern> STRIPE_DOWNLEFT`
- `public static final ResourceKey<BannerPattern> STRIPE_SMALL`
- `public static final ResourceKey<BannerPattern> CROSS`
- `public static final ResourceKey<BannerPattern> STRAIGHT_CROSS`
- `public static final ResourceKey<BannerPattern> TRIANGLE_BOTTOM`
- `public static final ResourceKey<BannerPattern> TRIANGLE_TOP`
- `public static final ResourceKey<BannerPattern> TRIANGLES_BOTTOM`
- `public static final ResourceKey<BannerPattern> TRIANGLES_TOP`
- `public static final ResourceKey<BannerPattern> DIAGONAL_LEFT`
- `public static final ResourceKey<BannerPattern> DIAGONAL_RIGHT`
- `public static final ResourceKey<BannerPattern> DIAGONAL_LEFT_MIRROR`
- `public static final ResourceKey<BannerPattern> DIAGONAL_RIGHT_MIRROR`
- `public static final ResourceKey<BannerPattern> CIRCLE_MIDDLE`
- `public static final ResourceKey<BannerPattern> RHOMBUS_MIDDLE`
- `public static final ResourceKey<BannerPattern> HALF_VERTICAL`
- `public static final ResourceKey<BannerPattern> HALF_HORIZONTAL`
- `public static final ResourceKey<BannerPattern> HALF_VERTICAL_MIRROR`
- `public static final ResourceKey<BannerPattern> HALF_HORIZONTAL_MIRROR`
- `public static final ResourceKey<BannerPattern> BORDER`
- `public static final ResourceKey<BannerPattern> CURLY_BORDER`
- `public static final ResourceKey<BannerPattern> GRADIENT`
- `public static final ResourceKey<BannerPattern> GRADIENT_UP`
- `public static final ResourceKey<BannerPattern> BRICKS`
- `public static final ResourceKey<BannerPattern> GLOBE`
- `public static final ResourceKey<BannerPattern> CREEPER`
- `public static final ResourceKey<BannerPattern> SKULL`
- `public static final ResourceKey<BannerPattern> FLOWER`
- `public static final ResourceKey<BannerPattern> MOJANG`
- `public static final ResourceKey<BannerPattern> PIGLIN`

### Methods
- `private static ResourceKey<BannerPattern> create(String p_222757_)`
- `public static BannerPattern bootstrap(Registry<BannerPattern> p_222755_)`

## BarrelBlockEntity

*class* `net.minecraft.world.level.block.entity.BarrelBlockEntity`

### Fields
- `private NonNullList<ItemStack> items`
- `private final ContainerOpenersCounter openersCounter`

### Inherited fields
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_187459_)`
- `public void load(CompoundTag p_155055_)`
- `public int getContainerSize()`
- `protected NonNullList<ItemStack> getItems()`
- `protected void setItems(NonNullList<ItemStack> p_58610_)`
- `protected Component getDefaultName()`
- `protected AbstractContainerMenu createMenu(int p_58598_,  Inventory p_58599_)`
- `public void startOpen(Player p_58616_)`
- `public void stopOpen(Player p_58614_)`
- `public void recheckOpen()`
- `void updateBlockState(BlockState p_58607_,  boolean p_58608_)`
- `void playSound(BlockState p_58601_,  SoundEvent p_58602_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setItem`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `createUnSidedHandler`, `getCapability`, `getCustomName`, `getDisplayName`, `getName`, `invalidateCaps`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## BaseContainerBlockEntity

*class* `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`

### Fields
- `private LockCode lockKey`
- `@Nullable private Component name`
- `private LazyOptional<?> itemHandler`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void load(CompoundTag p_155080_)`
- `protected void saveAdditional(CompoundTag p_187461_)`
- `public void setCustomName(Component p_58639_)`
- `public Component getName()`
- `public Component getDisplayName()`
- `@Nullable public Component getCustomName()`
- `protected abstract Component getDefaultName()`
- `public boolean canOpen(Player p_58645_)`
- `public static boolean canUnlock(Player p_58630_,  LockCode p_58631_,  Component p_58632_)`
- `@Nullable public AbstractContainerMenu createMenu(int p_58641_,  Inventory p_58642_,  Player p_58643_)`
- `protected abstract AbstractContainerMenu createMenu(int p_58627_,  Inventory p_58628_)`
- `protected IItemHandler createUnSidedHandler()`
- `public <T> LazyOptional<T> getCapability(Capability<T> cap,  @Nullable  Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public void invalidateCaps()`
- `public void reviveCaps()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## BeaconBlockEntity

*class* `net.minecraft.world.level.block.entity.BeaconBlockEntity`

### Fields
- `private static final int MAX_LEVELS` (= 4)
- `public static final MobEffect[][] BEACON_EFFECTS`
- `private static final Set<MobEffect> VALID_EFFECTS`
- `public static final int DATA_LEVELS` (= 0)
- `public static final int DATA_PRIMARY` (= 1)
- `public static final int DATA_SECONDARY` (= 2)
- `public static final int NUM_DATA_VALUES` (= 3)
- `private static final int BLOCKS_CHECK_PER_TICK` (= 10)
- `private static final Component DEFAULT_NAME`
- `private static final String TAG_PRIMARY` (= "primary_effect")
- `private static final String TAG_SECONDARY` (= "secondary_effect")
- `List<BeaconBlockEntity.BeaconBeamSection> beamSections`
- `private List<BeaconBlockEntity.BeaconBeamSection> checkingBeamSections`
- `int levels`
- `private int lastCheckY`
- `@Nullable MobEffect primaryPower`
- `@Nullable MobEffect secondaryPower`
- `@Nullable private Component name`
- `private LockCode lockKey`
- `private final ContainerData dataAccess`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `@Nullable static MobEffect filterEffect(@Nullable  MobEffect p_300420_)`
- `public static void tick(Level p_155108_,  BlockPos p_155109_,  BlockState p_155110_,  BeaconBlockEntity p_155111_)`
- `private static int updateBase(Level p_155093_,  int p_155094_,  int p_155095_,  int p_155096_)`
- `public void setRemoved()`
- `private static void applyEffects(Level p_155098_,  BlockPos p_155099_,  int p_155100_,  @Nullable  MobEffect p_155101_,  @Nullable  MobEffect p_155102_)`
- `public static void playSound(Level p_155104_,  BlockPos p_155105_,  SoundEvent p_155106_)`
- `public List<BeaconBlockEntity.BeaconBeamSection> getBeamSections()`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `private static void storeEffect(CompoundTag p_299457_,  String p_297212_,  @Nullable  MobEffect p_297266_)`
- `@Nullable private static MobEffect loadEffect(CompoundTag p_298536_,  String p_301201_)`
- `public void load(CompoundTag p_155113_)`
- `protected void saveAdditional(CompoundTag p_187463_)`
- `public void setCustomName(@Nullable  Component p_58682_)`
- `@Nullable public Component getCustomName()`
- `@Nullable public AbstractContainerMenu createMenu(int p_58696_,  Inventory p_58697_,  Player p_58698_)`
- `public Component getDisplayName()`
- `public Component getName()`
- `public void setLevel(Level p_155091_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## BeaconBlockEntity.BeaconBeamSection

*class* `net.minecraft.world.level.block.entity.BeaconBlockEntity.BeaconBeamSection`

Enclosing class: BeaconBlockEntity

### Fields
- `final float[] color`
- `private int height`

### Methods
- `protected void increaseHeight()`
- `public float[] getColor()`
- `public int getHeight()`

## BedBlockEntity

*class* `net.minecraft.world.level.block.entity.BedBlockEntity`

### Fields
- `private DyeColor color`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public DyeColor getColor()`
- `public void setColor(DyeColor p_58730_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdateTag`, `hasLevel`, `isRemoved`, `load`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveAdditional`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## BeehiveBlockEntity

*class* `net.minecraft.world.level.block.entity.BeehiveBlockEntity`

### Fields
- `public static final String TAG_FLOWER_POS` (= "FlowerPos")
- `public static final String MIN_OCCUPATION_TICKS` (= "MinOccupationTicks")
- `public static final String ENTITY_DATA` (= "EntityData")
- `public static final String TICKS_IN_HIVE` (= "TicksInHive")
- `public static final String HAS_NECTAR` (= "HasNectar")
- `public static final String BEES` (= "Bees")
- `private static final List<String> IGNORED_BEE_TAGS`
- `public static final int MAX_OCCUPANTS` (= 3)
- `private static final int MIN_TICKS_BEFORE_REENTERING_HIVE` (= 400)
- `private static final int MIN_OCCUPATION_TICKS_NECTAR` (= 2400)
- `public static final int MIN_OCCUPATION_TICKS_NECTARLESS` (= 600)
- `private final List<BeehiveBlockEntity.BeeData> stored`
- `@Nullable private BlockPos savedFlowerPos`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void setChanged()`
- `public boolean isFireNearby()`
- `public boolean isEmpty()`
- `public boolean isFull()`
- `public void emptyAllLivingFromHive(@Nullable  Player p_58749_,  BlockState p_58750_,  BeehiveBlockEntity.BeeReleaseStatus p_58751_)`
- `private List<Entity> releaseAllOccupants(BlockState p_58760_,  BeehiveBlockEntity.BeeReleaseStatus p_58761_)`
- `public void addOccupant(Entity p_58742_,  boolean p_58743_)`
- `public int getOccupantCount()`
- `public static int getHoneyLevel(BlockState p_58753_)`
- `public boolean isSedated()`
- `public void addOccupantWithPresetTicks(Entity p_58745_,  boolean p_58746_,  int p_58747_)`
- `public void storeBee(CompoundTag p_155158_,  int p_155159_,  boolean p_155160_)`
- `private static boolean releaseOccupant(Level p_155137_,  BlockPos p_155138_,  BlockState p_155139_,  BeehiveBlockEntity.BeeData p_155140_,  @Nullable  List<Entity> p_155141_,  BeehiveBlockEntity.BeeReleaseStatus p_155142_,  @Nullable  BlockPos p_155143_)`
- `static void removeIgnoredBeeTags(CompoundTag p_155162_)`
- `private static void setBeeReleaseData(int p_58737_,  Bee p_58738_)`
- `private boolean hasSavedFlowerPos()`
- `private static void tickOccupants(Level p_155150_,  BlockPos p_155151_,  BlockState p_155152_,  List<BeehiveBlockEntity.BeeData> p_155153_,  @Nullable  BlockPos p_155154_)`
- `public static void serverTick(Level p_155145_,  BlockPos p_155146_,  BlockState p_155147_,  BeehiveBlockEntity p_155148_)`
- `public void load(CompoundTag p_155156_)`
- `protected void saveAdditional(CompoundTag p_187467_)`
- `public ListTag writeBees()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## BeehiveBlockEntity.BeeData

*class* `net.minecraft.world.level.block.entity.BeehiveBlockEntity.BeeData`

Enclosing class: BeehiveBlockEntity

### Fields
- `final CompoundTag entityData`
- `int ticksInHive`
- `final int minOccupationTicks`

## BellBlockEntity

*class* `net.minecraft.world.level.block.entity.BellBlockEntity`

### Fields
- `private static final int DURATION` (= 50)
- `private static final int GLOW_DURATION` (= 60)
- `private static final int MIN_TICKS_BETWEEN_SEARCHES` (= 60)
- `private static final int MAX_RESONATION_TICKS` (= 40)
- `private static final int TICKS_BEFORE_RESONATION` (= 5)
- `private static final int SEARCH_RADIUS` (= 48)
- `private static final int HEAR_BELL_RADIUS` (= 32)
- `private static final int HIGHLIGHT_RAIDERS_RADIUS` (= 48)
- `private long lastRingTimestamp`
- `public int ticks`
- `public boolean shaking`
- `public Direction clickDirection`
- `private List<LivingEntity> nearbyEntities`
- `private boolean resonating`
- `private int resonationTicks`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public boolean triggerEvent(int p_58837_,  int p_58838_)`
- `private static void tick(Level p_155181_,  BlockPos p_155182_,  BlockState p_155183_,  BellBlockEntity p_155184_,  BellBlockEntity.ResonationEndAction p_155185_)`
- `public static void clientTick(Level p_155176_,  BlockPos p_155177_,  BlockState p_155178_,  BellBlockEntity p_155179_)`
- `public static void serverTick(Level p_155203_,  BlockPos p_155204_,  BlockState p_155205_,  BellBlockEntity p_155206_)`
- `public void onHit(Direction p_58835_)`
- `private void updateEntities()`
- `private static boolean areRaidersNearby(BlockPos p_155200_,  List<LivingEntity> p_155201_)`
- `private static void makeRaidersGlow(Level p_155187_,  BlockPos p_155188_,  List<LivingEntity> p_155189_)`
- `private static void showBellParticles(Level p_155208_,  BlockPos p_155209_,  List<LivingEntity> p_155210_)`
- `private static boolean isRaiderWithinRange(BlockPos p_155197_,  LivingEntity p_155198_)`
- `private static void glow(LivingEntity p_58841_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `load`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveAdditional`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## BellBlockEntity.ResonationEndAction

*interface* `net.minecraft.world.level.block.entity.BellBlockEntity.ResonationEndAction`

Enclosing class: BellBlockEntity

### Methods
- `void run(Level p_155221_,  BlockPos p_155222_,  List<LivingEntity> p_155223_)`

## BlastFurnaceBlockEntity

*class* `net.minecraft.world.level.block.entity.BlastFurnaceBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`: `BURN_COOL_SPEED`, `BURN_TIME_STANDARD`, `cookingProgress`, `cookingTotalTime`, `DATA_COOKING_PROGRESS`, `DATA_COOKING_TOTAL_TIME`, `DATA_LIT_DURATION`, `DATA_LIT_TIME`, `dataAccess`, `handlers`, `items`, `litDuration`, `litTime`, `NUM_DATA_VALUES`, `SLOT_FUEL`, `SLOT_INPUT`, `SLOT_RESULT`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected Component getDefaultName()`
- `protected int getBurnDuration(ItemStack p_58852_)`
- `protected AbstractContainerMenu createMenu(int p_58849_,  Inventory p_58850_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`: `awardUsedRecipes`, `awardUsedRecipesAndPopExperience`, `canPlaceItem`, `canPlaceItemThroughFace`, `canTakeItemThroughFace`, `clearContent`, `fillStackedContents`, `getCapability`, `getContainerSize`, `getFuel`, `getItem`, `getRecipesToAwardAndPopExperience`, `getRecipeUsed`, `getSlotsForFace`, `invalidateCaps`, `isEmpty`, `isFuel`, `load`, `removeItem`, `removeItemNoUpdate`, `reviveCaps`, `saveAdditional`, `serverTick`, `setItem`, `setRecipeUsed`, `stillValid`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canOpen`, `canUnlock`, `createMenu`, `createUnSidedHandler`, `getCustomName`, `getDisplayName`, `getName`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`
- from `net.minecraft.world.inventory.RecipeCraftingHolder`: `setRecipeUsed`

## BlockEntity

*class* `net.minecraft.world.level.block.entity.BlockEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final BlockEntityType<?> type`
- `@Nullable protected Level level`
- `protected final BlockPos worldPosition`
- `protected boolean remove`
- `private BlockState blockState`
- `private CompoundTag customPersistentData`

### Inherited fields
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static BlockPos getPosFromTag(CompoundTag p_187473_)`
- `@Nullable public Level getLevel()`
- `public void setLevel(Level p_155231_)`
- `public boolean hasLevel()`
- `public void load(CompoundTag p_155245_)`
- `protected void saveAdditional(CompoundTag p_187471_)`
- `public final CompoundTag saveWithFullMetadata()`
- `public final CompoundTag saveWithId()`
- `public final CompoundTag saveWithoutMetadata()`
- `private void saveId(CompoundTag p_187475_)`
- `public static void addEntityType(CompoundTag p_187469_,  BlockEntityType<?> p_187470_)`
- `public void saveToItem(ItemStack p_187477_)`
- `private void saveMetadata(CompoundTag p_187479_)`
- `@Nullable public static BlockEntity loadStatic(BlockPos p_155242_,  BlockState p_155243_,  CompoundTag p_155244_)`
- `public void setChanged()`
- `protected static void setChanged(Level p_155233_,  BlockPos p_155234_,  BlockState p_155235_)`
- `public BlockPos getBlockPos()`
- `public BlockState getBlockState()`
- `@Nullable public Packet<ClientGamePacketListener> getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public boolean isRemoved()`
- `public void setRemoved()`
- `public void onChunkUnloaded()`
- `public void clearRemoved()`
- `public boolean triggerEvent(int p_58889_,  int p_58890_)`
- `public void fillCrashReportCategory(CrashReportCategory p_58887_)`
- `public boolean onlyOpCanSetNbt()`
- `public BlockEntityType<?> getType()`
- `public CompoundTag getPersistentData()`
  Description copied from interface: IForgeBlockEntity
  Gets a CompoundTag that can be used to store custom data for this block entity.
   It will be written, and read from disc, so it persists over world saves.
  - returns: A compound tag for custom persistent data
- `@Deprecated public void setBlockState(BlockState p_155251_)` (deprecated)

### Inherited methods
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## BlockEntityTicker

*interface* `net.minecraft.world.level.block.entity.BlockEntityTicker`

### Methods
- `void tick(Level p_155253_,  BlockPos p_155254_,  BlockState p_155255_,  T p_155256_)`

## BlockEntityType

*class* `net.minecraft.world.level.block.entity.BlockEntityType`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final BlockEntityType<FurnaceBlockEntity> FURNACE`
- `public static final BlockEntityType<ChestBlockEntity> CHEST`
- `public static final BlockEntityType<TrappedChestBlockEntity> TRAPPED_CHEST`
- `public static final BlockEntityType<EnderChestBlockEntity> ENDER_CHEST`
- `public static final BlockEntityType<JukeboxBlockEntity> JUKEBOX`
- `public static final BlockEntityType<DispenserBlockEntity> DISPENSER`
- `public static final BlockEntityType<DropperBlockEntity> DROPPER`
- `public static final BlockEntityType<SignBlockEntity> SIGN`
- `public static final BlockEntityType<HangingSignBlockEntity> HANGING_SIGN`
- `public static final BlockEntityType<SpawnerBlockEntity> MOB_SPAWNER`
- `public static final BlockEntityType<PistonMovingBlockEntity> PISTON`
- `public static final BlockEntityType<BrewingStandBlockEntity> BREWING_STAND`
- `public static final BlockEntityType<EnchantmentTableBlockEntity> ENCHANTING_TABLE`
- `public static final BlockEntityType<TheEndPortalBlockEntity> END_PORTAL`
- `public static final BlockEntityType<BeaconBlockEntity> BEACON`
- `public static final BlockEntityType<SkullBlockEntity> SKULL`
- `public static final BlockEntityType<DaylightDetectorBlockEntity> DAYLIGHT_DETECTOR`
- `public static final BlockEntityType<HopperBlockEntity> HOPPER`
- `public static final BlockEntityType<ComparatorBlockEntity> COMPARATOR`
- `public static final BlockEntityType<BannerBlockEntity> BANNER`
- `public static final BlockEntityType<StructureBlockEntity> STRUCTURE_BLOCK`
- `public static final BlockEntityType<TheEndGatewayBlockEntity> END_GATEWAY`
- `public static final BlockEntityType<CommandBlockEntity> COMMAND_BLOCK`
- `public static final BlockEntityType<ShulkerBoxBlockEntity> SHULKER_BOX`
- `public static final BlockEntityType<BedBlockEntity> BED`
- `public static final BlockEntityType<ConduitBlockEntity> CONDUIT`
- `public static final BlockEntityType<BarrelBlockEntity> BARREL`
- `public static final BlockEntityType<SmokerBlockEntity> SMOKER`
- `public static final BlockEntityType<BlastFurnaceBlockEntity> BLAST_FURNACE`
- `public static final BlockEntityType<LecternBlockEntity> LECTERN`
- `public static final BlockEntityType<BellBlockEntity> BELL`
- `public static final BlockEntityType<JigsawBlockEntity> JIGSAW`
- `public static final BlockEntityType<CampfireBlockEntity> CAMPFIRE`
- `public static final BlockEntityType<BeehiveBlockEntity> BEEHIVE`
- `public static final BlockEntityType<SculkSensorBlockEntity> SCULK_SENSOR`
- `public static final BlockEntityType<CalibratedSculkSensorBlockEntity> CALIBRATED_SCULK_SENSOR`
- `public static final BlockEntityType<SculkCatalystBlockEntity> SCULK_CATALYST`
- `public static final BlockEntityType<SculkShriekerBlockEntity> SCULK_SHRIEKER`
- `public static final BlockEntityType<ChiseledBookShelfBlockEntity> CHISELED_BOOKSHELF`
- `public static final BlockEntityType<BrushableBlockEntity> BRUSHABLE_BLOCK`
- `public static final BlockEntityType<DecoratedPotBlockEntity> DECORATED_POT`
- `private final BlockEntityType.BlockEntitySupplier<? extends T extends BlockEntity> factory`
- `private final Set<Block> validBlocks`
- `private final com.mojang.datafixers.types.Type<?> dataType`
- `private final Holder.Reference<BlockEntityType<?>> builtInRegistryHolder`

### Methods
- `@Nullable public static ResourceLocation getKey(BlockEntityType<?> p_58955_)`
- `private static <T extends BlockEntity> BlockEntityType<T> register(String p_58957_,  BlockEntityType.Builder<T> p_58958_)`
- `@Nullable public T create(BlockPos p_155265_,  BlockState p_155266_)`
- `public boolean isValid(BlockState p_155263_)`
- `@Nullable public Holder.Reference<BlockEntityType<?>> builtInRegistryHolder()`
- `@Nullable public T getBlockEntity(BlockGetter p_58950_,  BlockPos p_58951_)`

## BlockEntityType.BlockEntitySupplier

*interface* `net.minecraft.world.level.block.entity.BlockEntityType.BlockEntitySupplier`

Enclosing class: BlockEntityType<T extends BlockEntity>

### Methods
- `T create(BlockPos p_155268_,  BlockState p_155269_)`

## BlockEntityType.Builder

*class* `net.minecraft.world.level.block.entity.BlockEntityType.Builder`

Enclosing class: BlockEntityType<T extends BlockEntity>

### Fields
- `private final BlockEntityType.BlockEntitySupplier<? extends T extends BlockEntity> factory`
- `final Set<Block> validBlocks`

### Methods
- `public static <T extends BlockEntity> BlockEntityType.Builder<T> of(BlockEntityType.BlockEntitySupplier<? extends T> p_155274_,  Block... p_155275_)`
- `public BlockEntityType<T> build(com.mojang.datafixers.types.Type<?> p_58967_)`

## BrewingStandBlockEntity

*class* `net.minecraft.world.level.block.entity.BrewingStandBlockEntity`

### Fields
- `private static final int INGREDIENT_SLOT` (= 3)
- `private static final int FUEL_SLOT` (= 4)
- `private static final int[] SLOTS_FOR_UP`
- `private static final int[] SLOTS_FOR_DOWN`
- `private static final int[] SLOTS_FOR_SIDES`
- `public static final int FUEL_USES` (= 20)
- `public static final int DATA_BREW_TIME` (= 0)
- `public static final int DATA_FUEL_USES` (= 1)
- `public static final int NUM_DATA_VALUES` (= 2)
- `private NonNullList<ItemStack> items`
- `int brewTime`
- `private boolean[] lastPotionCount`
- `private Item ingredient`
- `int fuel`
- `protected final ContainerData dataAccess`
- `LazyOptional<? extends IItemHandler>[] handlers`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected Component getDefaultName()`
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public static void serverTick(Level p_155286_,  BlockPos p_155287_,  BlockState p_155288_,  BrewingStandBlockEntity p_155289_)`
- `private boolean[] getPotionBits()`
- `private static boolean isBrewable(NonNullList<ItemStack> p_155295_)`
- `private static void doBrew(Level p_155291_,  BlockPos p_155292_,  NonNullList<ItemStack> p_155293_)`
- `public void load(CompoundTag p_155297_)`
- `protected void saveAdditional(CompoundTag p_187484_)`
- `public ItemStack getItem(int p_58985_)`
- `public ItemStack removeItem(int p_58987_,  int p_58988_)`
- `public ItemStack removeItemNoUpdate(int p_59015_)`
- `public void setItem(int p_58993_,  ItemStack p_58994_)`
- `public boolean stillValid(Player p_59000_)`
- `public boolean canPlaceItem(int p_59017_,  ItemStack p_59018_)`
- `public int[] getSlotsForFace(Direction p_59010_)`
- `public boolean canPlaceItemThroughFace(int p_58996_,  ItemStack p_58997_,  @Nullable  Direction p_58998_)`
- `public boolean canTakeItemThroughFace(int p_59020_,  ItemStack p_59021_,  Direction p_59022_)`
- `public void clearContent()`
- `protected AbstractContainerMenu createMenu(int p_58990_,  Inventory p_58991_)`
- `public <T> LazyOptional<T> getCapability(Capability<T> capability,  @Nullable  Direction facing)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: capability - The capability to check
  - param: facing - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public void invalidateCaps()`
- `public void reviveCaps()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canOpen`, `canUnlock`, `createMenu`, `createUnSidedHandler`, `getCustomName`, `getDisplayName`, `getName`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## BrushableBlockEntity

*class* `net.minecraft.world.level.block.entity.BrushableBlockEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String LOOT_TABLE_TAG` (= "LootTable")
- `private static final String LOOT_TABLE_SEED_TAG` (= "LootTableSeed")
- `private static final String HIT_DIRECTION_TAG` (= "hit_direction")
- `private static final String ITEM_TAG` (= "item")
- `private static final int BRUSH_COOLDOWN_TICKS` (= 10)
- `private static final int BRUSH_RESET_TICKS` (= 40)
- `private static final int REQUIRED_BRUSHES_TO_BREAK` (= 10)
- `private int brushCount`
- `private long brushCountResetsAtTick`
- `private long coolDownEndsAtTick`
- `private ItemStack item`
- `@Nullable private Direction hitDirection`
- `@Nullable private ResourceLocation lootTable`
- `private long lootTableSeed`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public boolean brush(long p_277786_,  Player p_277520_,  Direction p_277424_)`
- `public void unpackLootTable(Player p_277940_)`
- `private void brushingCompleted(Player p_277549_)`
- `private void dropContent(Player p_278006_)`
- `public void checkReset()`
- `private boolean tryLoadLootTable(CompoundTag p_277740_)`
- `private boolean trySaveLootTable(CompoundTag p_277591_)`
- `public CompoundTag getUpdateTag()`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public void load(CompoundTag p_277597_)`
- `protected void saveAdditional(CompoundTag p_277339_)`
- `public void setLootTable(ResourceLocation p_277611_,  long p_277991_)`
- `private int getCompletionState()`
- `@Nullable public Direction getHitDirection()`
- `public ItemStack getItem()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## CalibratedSculkSensorBlockEntity

*class* `net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem`: `RESONANCE_EVENTS`, `VIBRATION_FREQUENCY_FOR_EVENT`

### Methods
- `public VibrationSystem.User createVibrationUser()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.SculkSensorBlockEntity`: `getLastVibrationFrequency`, `getListener`, `getVibrationData`, `getVibrationUser`, `load`, `saveAdditional`, `setLastVibrationFrequency`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## CalibratedSculkSensorBlockEntity.VibrationUser

*class* `net.minecraft.world.level.block.entity.CalibratedSculkSensorBlockEntity.VibrationUser`

Enclosing class: CalibratedSculkSensorBlockEntity

### Inherited fields
- from `net.minecraft.world.level.block.entity.SculkSensorBlockEntity.VibrationUser`: `blockPos`, `LISTENER_RANGE`

### Methods
- `public int getListenerRadius()`
- `public boolean canReceiveVibration(ServerLevel p_282061_,  BlockPos p_282550_,  GameEvent p_281789_,  @Nullable  GameEvent.Context p_281456_)`
- `private int getBackSignal(Level p_282204_,  BlockPos p_282397_,  BlockState p_282240_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.SculkSensorBlockEntity.VibrationUser`: `canTriggerAvoidVibration`, `getPositionSource`, `onDataChanged`, `onReceiveVibration`, `requiresAdjacentChunksToBeTicking`
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.User`: `calculateTravelTimeInTicks`, `getListenableEvents`, `isValidVibration`

## CampfireBlockEntity

*class* `net.minecraft.world.level.block.entity.CampfireBlockEntity`

### Fields
- `private static final int BURN_COOL_SPEED` (= 2)
- `private static final int NUM_SLOTS` (= 4)
- `private final NonNullList<ItemStack> items`
- `private final int[] cookingProgress`
- `private final int[] cookingTime`
- `private final RecipeManager.CachedCheck<Container,CampfireCookingRecipe> quickCheck`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static void cookTick(Level p_155307_,  BlockPos p_155308_,  BlockState p_155309_,  CampfireBlockEntity p_155310_)`
- `public static void cooldownTick(Level p_155314_,  BlockPos p_155315_,  BlockState p_155316_,  CampfireBlockEntity p_155317_)`
- `public static void particleTick(Level p_155319_,  BlockPos p_155320_,  BlockState p_155321_,  CampfireBlockEntity p_155322_)`
- `public NonNullList<ItemStack> getItems()`
- `public void load(CompoundTag p_155312_)`
- `protected void saveAdditional(CompoundTag p_187486_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public Optional<RecipeHolder<CampfireCookingRecipe>> getCookableRecipe(ItemStack p_59052_)`
- `public boolean placeFood(@Nullable  Entity p_238285_,  ItemStack p_238286_,  int p_238287_)`
- `private void markUpdated()`
- `public void clearContent()`
- `public void dowse()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## ChestBlockEntity

*class* `net.minecraft.world.level.block.entity.ChestBlockEntity`

### Fields
- `private static final int EVENT_SET_OPEN_COUNT` (= 1)
- `private NonNullList<ItemStack> items`
- `private final ContainerOpenersCounter openersCounter`
- `private final ChestLidController chestLidController`
- `private LazyOptional<IItemHandlerModifiable> chestHandler`

### Inherited fields
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public int getContainerSize()`
- `protected Component getDefaultName()`
- `public void load(CompoundTag p_155349_)`
- `protected void saveAdditional(CompoundTag p_187489_)`
- `public static void lidAnimateTick(Level p_155344_,  BlockPos p_155345_,  BlockState p_155346_,  ChestBlockEntity p_155347_)`
- `static void playSound(Level p_155339_,  BlockPos p_155340_,  BlockState p_155341_,  SoundEvent p_155342_)`
- `public boolean triggerEvent(int p_59114_,  int p_59115_)`
- `public void startOpen(Player p_59120_)`
- `public void stopOpen(Player p_59118_)`
- `protected NonNullList<ItemStack> getItems()`
- `protected void setItems(NonNullList<ItemStack> p_59110_)`
- `public float getOpenNess(float p_59080_)`
- `public static int getOpenCount(BlockGetter p_59087_,  BlockPos p_59088_)`
- `public static void swapContents(ChestBlockEntity p_59104_,  ChestBlockEntity p_59105_)`
- `protected AbstractContainerMenu createMenu(int p_59082_,  Inventory p_59083_)`
- `public void setBlockState(BlockState p_155251_)`
- `public <T> LazyOptional<T> getCapability(Capability<T> cap,  Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `private IItemHandlerModifiable createHandler()`
- `public void invalidateCaps()`
- `public void recheckOpen()`
- `protected void signalOpenCount(Level p_155333_,  BlockPos p_155334_,  BlockState p_155335_,  int p_155336_,  int p_155337_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setItem`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `createUnSidedHandler`, `getCustomName`, `getDisplayName`, `getName`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## ChestLidController

*class* `net.minecraft.world.level.block.entity.ChestLidController`

### Fields
- `private boolean shouldBeOpen`
- `private float openness`
- `private float oOpenness`

### Methods
- `public void tickLid()`
- `public float getOpenness(float p_155376_)`
- `public void shouldBeOpen(boolean p_155378_)`

## ChiseledBookShelfBlockEntity

*class* `net.minecraft.world.level.block.entity.ChiseledBookShelfBlockEntity`

### Fields
- `public static final int MAX_BOOKS_IN_STORAGE` (= 6)
- `private static final org.slf4j.Logger LOGGER`
- `private final NonNullList<ItemStack> items`
- `private int lastInteractedSlot`
- `private LazyOptional<?> itemHandler`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `private void updateState(int p_261806_)`
- `public void load(CompoundTag p_249911_)`
- `protected void saveAdditional(CompoundTag p_251872_)`
- `public int count()`
- `public void clearContent()`
- `public int getContainerSize()`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_256203_)`
- `public ItemStack removeItem(int p_255828_,  int p_255673_)`
- `public ItemStack removeItemNoUpdate(int p_255874_)`
- `public void setItem(int p_256610_,  ItemStack p_255789_)`
- `public boolean canTakeItem(Container p_282172_,  int p_281387_,  ItemStack p_283257_)`
- `public int getMaxStackSize()`
- `public boolean stillValid(Player p_256481_)`
- `public boolean canPlaceItem(int p_256567_,  ItemStack p_255922_)`
- `public int getLastInteractedSlot()`
- `protected IItemHandler createUnSidedHandler()`
- `public <T> LazyOptional<T> getCapability(Capability<T> cap,  @Nullable  Direction side)`
  Description copied from interface: ICapabilityProvider
  Retrieves the Optional handler for the capability requested on the specific side.
   The return value CAN be the same for multiple faces.
   Modders are encouraged to cache this value, using the listener capabilities of the Optional to
   be notified if the requested capability get lost.
  - param: cap - The capability to check
  - param: side - The Side to check from,
 CAN BE NULL. Null is defined to represent 'internal' or 'self'
  - returns: The requested an optional holding the requested capability.
- `public void invalidateCaps()`
- `public void reviveCaps()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `countItem`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## Class BeehiveBlockEntity.BeeReleaseStatus

*enum* `net.minecraft.world.level.block.entity.Class BeehiveBlockEntity.BeeReleaseStatus`

Enclosing class: BeehiveBlockEntity

### Methods
- `public static BeehiveBlockEntity.BeeReleaseStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BeehiveBlockEntity.BeeReleaseStatus valueOf(String name)`
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

## Class CommandBlockEntity.Mode

*enum* `net.minecraft.world.level.block.entity.Class CommandBlockEntity.Mode`

Enclosing class: CommandBlockEntity

### Methods
- `public static CommandBlockEntity.Mode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CommandBlockEntity.Mode valueOf(String name)`
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

## Class JigsawBlockEntity.JointType

*enum* `net.minecraft.world.level.block.entity.Class JigsawBlockEntity.JointType`

Enclosing class: JigsawBlockEntity

### Fields
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static JigsawBlockEntity.JointType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static JigsawBlockEntity.JointType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public static Optional<JigsawBlockEntity.JointType> byName(String p_59458_)`
- `public Component getTranslatedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ShulkerBoxBlockEntity.AnimationStatus

*enum* `net.minecraft.world.level.block.entity.Class ShulkerBoxBlockEntity.AnimationStatus`

Enclosing class: ShulkerBoxBlockEntity

### Methods
- `public static ShulkerBoxBlockEntity.AnimationStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ShulkerBoxBlockEntity.AnimationStatus valueOf(String name)`
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

## Class StructureBlockEntity.UpdateType

*enum* `net.minecraft.world.level.block.entity.Class StructureBlockEntity.UpdateType`

Enclosing class: StructureBlockEntity

### Methods
- `public static StructureBlockEntity.UpdateType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructureBlockEntity.UpdateType valueOf(String name)`
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

## CommandBlockEntity

*class* `net.minecraft.world.level.block.entity.CommandBlockEntity`

### Fields
- `private boolean powered`
- `private boolean auto`
- `private boolean conditionMet`
- `private final BaseCommandBlock commandBlock`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_187491_)`
- `public void load(CompoundTag p_155383_)`
- `public boolean onlyOpCanSetNbt()`
- `public BaseCommandBlock getCommandBlock()`
- `public void setPowered(boolean p_59136_)`
- `public boolean isPowered()`
- `public boolean isAutomatic()`
- `public void setAutomatic(boolean p_59138_)`
- `public void onModeSwitch()`
- `private void scheduleTick()`
- `public boolean wasConditionMet()`
- `public boolean markConditionMet()`
- `public CommandBlockEntity.Mode getMode()`
- `public boolean isConditional()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## ComparatorBlockEntity

*class* `net.minecraft.world.level.block.entity.ComparatorBlockEntity`

### Fields
- `private int output`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_187493_)`
- `public void load(CompoundTag p_155389_)`
- `public int getOutputSignal()`
- `public void setOutputSignal(int p_59176_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## ConduitBlockEntity

*class* `net.minecraft.world.level.block.entity.ConduitBlockEntity`

### Fields
- `private static final int BLOCK_REFRESH_RATE` (= 2)
- `private static final int EFFECT_DURATION` (= 13)
- `private static final float ROTATION_SPEED` (= -0.03750000149011612f)
- `private static final int MIN_ACTIVE_SIZE` (= 16)
- `private static final int MIN_KILL_SIZE` (= 42)
- `private static final int KILL_RANGE` (= 8)
- `private static final Block[] VALID_BLOCKS`
- `public int tickCount`
- `private float activeRotation`
- `private boolean isActive`
- `private boolean isHunting`
- `private final List<BlockPos> effectBlocks`
- `@Nullable private LivingEntity destroyTarget`
- `@Nullable private UUID destroyTargetUUID`
- `private long nextAmbientSoundActivation`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void load(CompoundTag p_155437_)`
- `protected void saveAdditional(CompoundTag p_187495_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public static void clientTick(Level p_155404_,  BlockPos p_155405_,  BlockState p_155406_,  ConduitBlockEntity p_155407_)`
- `public static void serverTick(Level p_155439_,  BlockPos p_155440_,  BlockState p_155441_,  ConduitBlockEntity p_155442_)`
- `private static void updateHunting(ConduitBlockEntity p_155429_,  List<BlockPos> p_155430_)`
- `private static boolean updateShape(Level p_155415_,  BlockPos p_155416_,  List<BlockPos> p_155417_)`
- `private static void applyEffects(Level p_155444_,  BlockPos p_155445_,  List<BlockPos> p_155446_)`
- `private static void updateDestroyTarget(Level p_155409_,  BlockPos p_155410_,  BlockState p_155411_,  List<BlockPos> p_155412_,  ConduitBlockEntity p_155413_)`
- `private static void updateClientTarget(Level p_155400_,  BlockPos p_155401_,  ConduitBlockEntity p_155402_)`
- `private static AABB getDestroyRangeAABB(BlockPos p_155432_)`
- `@Nullable private static LivingEntity findDestroyTarget(Level p_155425_,  BlockPos p_155426_,  UUID p_155427_)`
- `private static void animationTick(Level p_155419_,  BlockPos p_155420_,  List<BlockPos> p_155421_,  @Nullable  Entity p_155422_,  int p_155423_)`
- `public boolean isActive()`
- `public boolean isHunting()`
- `private void setHunting(boolean p_59215_)`
- `public float getActiveRotation(float p_59198_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## ContainerOpenersCounter

*class* `net.minecraft.world.level.block.entity.ContainerOpenersCounter`

### Fields
- `private static final int CHECK_TICK_DELAY` (= 5)
- `private int openCount`

### Methods
- `protected abstract void onOpen(Level p_155460_,  BlockPos p_155461_,  BlockState p_155462_)`
- `protected abstract void onClose(Level p_155473_,  BlockPos p_155474_,  BlockState p_155475_)`
- `protected abstract void openerCountChanged(Level p_155463_,  BlockPos p_155464_,  BlockState p_155465_,  int p_155466_,  int p_155467_)`
- `protected abstract boolean isOwnContainer(Player p_155451_)`
- `public void incrementOpeners(Player p_155453_,  Level p_155454_,  BlockPos p_155455_,  BlockState p_155456_)`
- `public void decrementOpeners(Player p_155469_,  Level p_155470_,  BlockPos p_155471_,  BlockState p_155472_)`
- `private int getOpenCount(Level p_155458_,  BlockPos p_155459_)`
- `public void recheckOpeners(Level p_155477_,  BlockPos p_155478_,  BlockState p_155479_)`
- `public int getOpenerCount()`
- `private static void scheduleRecheck(Level p_155481_,  BlockPos p_155482_,  BlockState p_155483_)`

## DaylightDetectorBlockEntity

*class* `net.minecraft.world.level.block.entity.DaylightDetectorBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `load`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveAdditional`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## DecoratedPotBlockEntity

*class* `net.minecraft.world.level.block.entity.DecoratedPotBlockEntity`

### Fields
- `public static final String TAG_SHERDS` (= "sherds")
- `private DecoratedPotBlockEntity.Decorations decorations`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_272957_)`
- `public void load(CompoundTag p_272924_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public Direction getDirection()`
- `public DecoratedPotBlockEntity.Decorations getDecorations()`
- `public void setFromItem(ItemStack p_273109_)`
- `public ItemStack getItem()`
- `public static ItemStack createDecoratedPotItem(DecoratedPotBlockEntity.Decorations p_301328_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## DecoratedPotBlockEntity.Decorations

*record* `net.minecraft.world.level.block.entity.DecoratedPotBlockEntity.Decorations`

Enclosing class: DecoratedPotBlockEntity

### Fields
- `private final Item back`
  The field for the back record component.
- `private final Item left`
  The field for the left record component.
- `private final Item right`
  The field for the right record component.
- `private final Item front`
  The field for the front record component.
- `public static final DecoratedPotBlockEntity.Decorations EMPTY`

### Methods
- `public CompoundTag save(CompoundTag p_285011_)`
- `public Stream<Item> sorted()`
- `public static DecoratedPotBlockEntity.Decorations load(@Nullable  CompoundTag p_284959_)`
- `private static Item itemFromTag(ListTag p_285179_,  int p_285060_)`
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
- `public Item back()`
  Returns the value of the back record component.
  - returns: the value of the back record component
- `public Item left()`
  Returns the value of the left record component.
  - returns: the value of the left record component
- `public Item right()`
  Returns the value of the right record component.
  - returns: the value of the right record component
- `public Item front()`
  Returns the value of the front record component.
  - returns: the value of the front record component

## DecoratedPotPatterns

*class* `net.minecraft.world.level.block.entity.DecoratedPotPatterns`

### Fields
- `private static final String BASE_NAME` (= "decorated_pot_base")
- `public static final ResourceKey<String> BASE`
- `private static final String BRICK_NAME` (= "decorated_pot_side")
- `private static final String ANGLER_NAME` (= "angler_pottery_pattern")
- `private static final String ARCHER_NAME` (= "archer_pottery_pattern")
- `private static final String ARMS_UP_NAME` (= "arms_up_pottery_pattern")
- `private static final String BLADE_NAME` (= "blade_pottery_pattern")
- `private static final String BREWER_NAME` (= "brewer_pottery_pattern")
- `private static final String BURN_NAME` (= "burn_pottery_pattern")
- `private static final String DANGER_NAME` (= "danger_pottery_pattern")
- `private static final String EXPLORER_NAME` (= "explorer_pottery_pattern")
- `private static final String FRIEND_NAME` (= "friend_pottery_pattern")
- `private static final String HEART_NAME` (= "heart_pottery_pattern")
- `private static final String HEARTBREAK_NAME` (= "heartbreak_pottery_pattern")
- `private static final String HOWL_NAME` (= "howl_pottery_pattern")
- `private static final String MINER_NAME` (= "miner_pottery_pattern")
- `private static final String MOURNER_NAME` (= "mourner_pottery_pattern")
- `private static final String PLENTY_NAME` (= "plenty_pottery_pattern")
- `private static final String PRIZE_NAME` (= "prize_pottery_pattern")
- `private static final String SHEAF_NAME` (= "sheaf_pottery_pattern")
- `private static final String SHELTER_NAME` (= "shelter_pottery_pattern")
- `private static final String SKULL_NAME` (= "skull_pottery_pattern")
- `private static final String SNORT_NAME` (= "snort_pottery_pattern")
- `private static final ResourceKey<String> BRICK`
- `private static final ResourceKey<String> ANGLER`
- `private static final ResourceKey<String> ARCHER`
- `private static final ResourceKey<String> ARMS_UP`
- `private static final ResourceKey<String> BLADE`
- `private static final ResourceKey<String> BREWER`
- `private static final ResourceKey<String> BURN`
- `private static final ResourceKey<String> DANGER`
- `private static final ResourceKey<String> EXPLORER`
- `private static final ResourceKey<String> FRIEND`
- `private static final ResourceKey<String> HEART`
- `private static final ResourceKey<String> HEARTBREAK`
- `private static final ResourceKey<String> HOWL`
- `private static final ResourceKey<String> MINER`
- `private static final ResourceKey<String> MOURNER`
- `private static final ResourceKey<String> PLENTY`
- `private static final ResourceKey<String> PRIZE`
- `private static final ResourceKey<String> SHEAF`
- `private static final ResourceKey<String> SHELTER`
- `private static final ResourceKey<String> SKULL`
- `private static final ResourceKey<String> SNORT`
- `private static final Map<Item,ResourceKey<String>> ITEM_TO_POT_TEXTURE`

### Methods
- `private static ResourceKey<String> create(String p_272919_)`
- `public static ResourceLocation location(ResourceKey<String> p_273198_)`
- `@Nullable public static ResourceKey<String> getResourceKey(Item p_273094_)`
- `public static String bootstrap(Registry<String> p_273479_)`

## DispenserBlockEntity

*class* `net.minecraft.world.level.block.entity.DispenserBlockEntity`

### Fields
- `public static final int CONTAINER_SIZE` (= 9)
- `private NonNullList<ItemStack> items`

### Inherited fields
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public int getContainerSize()`
- `public int getRandomSlot(RandomSource p_222762_)`
- `public int addItem(ItemStack p_59238_)`
- `protected Component getDefaultName()`
- `public void load(CompoundTag p_155496_)`
- `protected void saveAdditional(CompoundTag p_187498_)`
- `protected NonNullList<ItemStack> getItems()`
- `protected void setItems(NonNullList<ItemStack> p_59243_)`
- `protected AbstractContainerMenu createMenu(int p_59235_,  Inventory p_59236_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setItem`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `createUnSidedHandler`, `getCapability`, `getCustomName`, `getDisplayName`, `getName`, `invalidateCaps`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## DropperBlockEntity

*class* `net.minecraft.world.level.block.entity.DropperBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.DispenserBlockEntity`: `CONTAINER_SIZE`
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected Component getDefaultName()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.DispenserBlockEntity`: `addItem`, `createMenu`, `getContainerSize`, `getItems`, `getRandomSlot`, `load`, `saveAdditional`, `setItems`
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setItem`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `createUnSidedHandler`, `getCapability`, `getCustomName`, `getDisplayName`, `getName`, `invalidateCaps`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## EnchantmentTableBlockEntity

*class* `net.minecraft.world.level.block.entity.EnchantmentTableBlockEntity`

### Fields
- `public int time`
- `public float flip`
- `public float oFlip`
- `public float flipT`
- `public float flipA`
- `public float open`
- `public float oOpen`
- `public float rot`
- `public float oRot`
- `public float tRot`
- `private static final RandomSource RANDOM`
- `private Component name`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_187500_)`
- `public void load(CompoundTag p_155509_)`
- `public static void bookAnimationTick(Level p_155504_,  BlockPos p_155505_,  BlockState p_155506_,  EnchantmentTableBlockEntity p_155507_)`
- `public Component getName()`
- `public void setCustomName(@Nullable  Component p_59273_)`
- `@Nullable public Component getCustomName()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `getDisplayName`, `hasCustomName`

## EnderChestBlockEntity

*class* `net.minecraft.world.level.block.entity.EnderChestBlockEntity`

### Fields
- `private final ChestLidController chestLidController`
- `private final ContainerOpenersCounter openersCounter`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static void lidAnimateTick(Level p_155518_,  BlockPos p_155519_,  BlockState p_155520_,  EnderChestBlockEntity p_155521_)`
- `public boolean triggerEvent(int p_59285_,  int p_59286_)`
- `public void startOpen(Player p_155516_)`
- `public void stopOpen(Player p_155523_)`
- `public boolean stillValid(Player p_59283_)`
- `public void recheckOpen()`
- `public float getOpenNess(float p_59281_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `load`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveAdditional`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## FurnaceBlockEntity

*class* `net.minecraft.world.level.block.entity.FurnaceBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`: `BURN_COOL_SPEED`, `BURN_TIME_STANDARD`, `cookingProgress`, `cookingTotalTime`, `DATA_COOKING_PROGRESS`, `DATA_COOKING_TOTAL_TIME`, `DATA_LIT_DURATION`, `DATA_LIT_TIME`, `dataAccess`, `handlers`, `items`, `litDuration`, `litTime`, `NUM_DATA_VALUES`, `SLOT_FUEL`, `SLOT_INPUT`, `SLOT_RESULT`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected Component getDefaultName()`
- `protected AbstractContainerMenu createMenu(int p_59293_,  Inventory p_59294_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`: `awardUsedRecipes`, `awardUsedRecipesAndPopExperience`, `canPlaceItem`, `canPlaceItemThroughFace`, `canTakeItemThroughFace`, `clearContent`, `fillStackedContents`, `getBurnDuration`, `getCapability`, `getContainerSize`, `getFuel`, `getItem`, `getRecipesToAwardAndPopExperience`, `getRecipeUsed`, `getSlotsForFace`, `invalidateCaps`, `isEmpty`, `isFuel`, `load`, `removeItem`, `removeItemNoUpdate`, `reviveCaps`, `saveAdditional`, `serverTick`, `setItem`, `setRecipeUsed`, `stillValid`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canOpen`, `canUnlock`, `createMenu`, `createUnSidedHandler`, `getCustomName`, `getDisplayName`, `getName`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`
- from `net.minecraft.world.inventory.RecipeCraftingHolder`: `setRecipeUsed`

## HangingSignBlockEntity

*class* `net.minecraft.world.level.block.entity.HangingSignBlockEntity`

### Fields
- `private static final int MAX_TEXT_LINE_WIDTH` (= 60)
- `private static final int TEXT_LINE_HEIGHT` (= 9)

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public int getTextLineHeight()`
- `public int getMaxTextLineWidth()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.SignBlockEntity`: `canExecuteClickCommands`, `createDefaultSignText`, `executeClickCommandsIfPresent`, `getBackText`, `getFrontText`, `getPlayerWhoMayEdit`, `getRenderBoundingBox`, `getText`, `getTextFacingPlayer`, `getUpdatePacket`, `getUpdateTag`, `isFacingFrontText`, `isWaxed`, `load`, `onlyOpCanSetNbt`, `playerIsTooFarAwayToEdit`, `saveAdditional`, `setAllowedPlayerEditor`, `setText`, `setWaxed`, `tick`, `updateSignText`, `updateText`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## Hopper

*interface* `net.minecraft.world.level.block.entity.Hopper`

All Superinterfaces: Clearable, Container

### Fields
- `static final VoxelShape INSIDE`
- `static final VoxelShape ABOVE`
- `static final VoxelShape SUCK`

### Inherited fields
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`

### Methods
- `default VoxelShape getSuckShape()`
- `double getLevelX()`
- `double getLevelY()`
- `double getLevelZ()`

### Inherited methods
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `startOpen`, `stillValid`, `stopOpen`

## HopperBlockEntity

*class* `net.minecraft.world.level.block.entity.HopperBlockEntity`

### Fields
- `public static final int MOVE_ITEM_SPEED` (= 8)
- `public static final int HOPPER_CONTAINER_SIZE` (= 5)
- `private NonNullList<ItemStack> items`
- `private int cooldownTime`
- `private long tickedGameTime`

### Inherited fields
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraft.world.level.block.entity.Hopper`: `ABOVE`, `INSIDE`, `SUCK`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void load(CompoundTag p_155588_)`
- `protected void saveAdditional(CompoundTag p_187502_)`
- `public int getContainerSize()`
- `public ItemStack removeItem(int p_59309_,  int p_59310_)`
- `public void setItem(int p_59315_,  ItemStack p_59316_)`
- `protected Component getDefaultName()`
- `public static void pushItemsTick(Level p_155574_,  BlockPos p_155575_,  BlockState p_155576_,  HopperBlockEntity p_155577_)`
- `private static boolean tryMoveItems(Level p_155579_,  BlockPos p_155580_,  BlockState p_155581_,  HopperBlockEntity p_155582_,  BooleanSupplier p_155583_)`
- `private boolean inventoryFull()`
- `private static boolean ejectItems(Level p_155563_,  BlockPos p_155564_,  BlockState p_155565_,  HopperBlockEntity p_155566_)`
- `private static IntStream getSlots(Container p_59340_,  Direction p_59341_)`
- `private static boolean isFullContainer(Container p_59386_,  Direction p_59387_)`
- `private static boolean isEmptyContainer(Container p_59398_,  Direction p_59399_)`
- `public static boolean suckInItems(Level p_155553_,  Hopper p_155554_)`
- `private static boolean tryTakeInItemFromSlot(Hopper p_59355_,  Container p_59356_,  int p_59357_,  Direction p_59358_)`
- `public static boolean addItem(Container p_59332_,  ItemEntity p_59333_)`
- `public static ItemStack addItem(@Nullable  Container p_59327_,  Container p_59328_,  ItemStack p_59329_,  @Nullable  Direction p_59330_)`
- `private static boolean canPlaceItemInContainer(Container p_59335_,  ItemStack p_59336_,  int p_59337_,  @Nullable  Direction p_59338_)`
- `private static boolean canTakeItemFromContainer(Container p_273433_,  Container p_273542_,  ItemStack p_273400_,  int p_273519_,  Direction p_273088_)`
- `private static ItemStack tryMoveInItem(@Nullable  Container p_59321_,  Container p_59322_,  ItemStack p_59323_,  int p_59324_,  @Nullable  Direction p_59325_)`
- `@Nullable private static Container getAttachedContainer(Level p_155593_,  BlockPos p_155594_,  BlockState p_155595_)`
- `@Nullable private static Container getSourceContainer(Level p_155597_,  Hopper p_155598_)`
- `public static List<ItemEntity> getItemsAtAndAbove(Level p_155590_,  Hopper p_155591_)`
- `@Nullable public static Container getContainerAt(Level p_59391_,  BlockPos p_59392_)`
- `@Nullable private static Container getContainerAt(Level p_59348_,  double p_59349_,  double p_59350_,  double p_59351_)`
- `private static boolean canMergeItems(ItemStack p_59345_,  ItemStack p_59346_)`
- `public double getLevelX()`
- `public double getLevelY()`
- `public double getLevelZ()`
- `public void setCooldown(int p_59396_)`
- `private boolean isOnCooldown()`
- `public boolean isOnCustomCooldown()`
- `protected NonNullList<ItemStack> getItems()`
- `protected void setItems(NonNullList<ItemStack> p_59371_)`
- `public static void entityInside(Level p_155568_,  BlockPos p_155569_,  BlockState p_155570_,  Entity p_155571_,  HopperBlockEntity p_155572_)`
- `protected AbstractContainerMenu createMenu(int p_59312_,  Inventory p_59313_)`
- `protected IItemHandler createUnSidedHandler()`
- `public long getLastUpdateTime()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItemNoUpdate`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `getCapability`, `getCustomName`, `getDisplayName`, `getName`, `invalidateCaps`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `isEmpty`, `removeItemNoUpdate`, `setChanged`, `startOpen`, `stillValid`, `stopOpen`
- from `net.minecraft.world.level.block.entity.Hopper`: `getSuckShape`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## JigsawBlockEntity

*class* `net.minecraft.world.level.block.entity.JigsawBlockEntity`

### Fields
- `public static final String TARGET` (= "target")
- `public static final String POOL` (= "pool")
- `public static final String JOINT` (= "joint")
- `public static final String NAME` (= "name")
- `public static final String FINAL_STATE` (= "final_state")
- `private ResourceLocation name`
- `private ResourceLocation target`
- `private ResourceKey<StructureTemplatePool> pool`
- `private JigsawBlockEntity.JointType joint`
- `private String finalState`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public ResourceLocation getName()`
- `public ResourceLocation getTarget()`
- `public ResourceKey<StructureTemplatePool> getPool()`
- `public String getFinalState()`
- `public JigsawBlockEntity.JointType getJoint()`
- `public void setName(ResourceLocation p_59436_)`
- `public void setTarget(ResourceLocation p_59439_)`
- `public void setPool(ResourceKey<StructureTemplatePool> p_222764_)`
- `public void setFinalState(String p_59432_)`
- `public void setJoint(JigsawBlockEntity.JointType p_59425_)`
- `protected void saveAdditional(CompoundTag p_187504_)`
- `public void load(CompoundTag p_155608_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public void generate(ServerLevel p_59421_,  int p_59422_,  boolean p_59423_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## JukeboxBlockEntity

*class* `net.minecraft.world.level.block.entity.JukeboxBlockEntity`

### Fields
- `private static final int SONG_END_PADDING` (= 20)
- `private final NonNullList<ItemStack> items`
- `private int ticksSinceLastEvent`
- `private long tickCount`
- `private long recordStartedTick`
- `private boolean isPlaying`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void load(CompoundTag p_155616_)`
- `protected void saveAdditional(CompoundTag p_187507_)`
- `public boolean isRecordPlaying()`
- `private void setHasRecordBlockState(@Nullable  Entity p_273308_,  boolean p_273038_)`
- `public void startPlaying()`
- `private void stopPlaying()`
- `private void tick(Level p_273615_,  BlockPos p_273143_,  BlockState p_273372_)`
- `private boolean shouldRecordStopPlaying(RecordItem p_273267_)`
- `private boolean shouldSendJukeboxPlayingEvent()`
- `public ItemStack getItem(int p_273280_)`
- `public ItemStack removeItem(int p_273514_,  int p_273414_)`
- `public void setItem(int p_273461_,  ItemStack p_273584_)`
- `public int getMaxStackSize()`
- `public boolean stillValid(Player p_273466_)`
- `public boolean canPlaceItem(int p_273369_,  ItemStack p_273689_)`
- `public boolean canTakeItem(Container p_273497_,  int p_273168_,  ItemStack p_273785_)`
- `private void spawnMusicParticles(Level p_270782_,  BlockPos p_270940_)`
- `public void popOutRecord()`
- `public static void playRecordTick(Level p_239938_,  BlockPos p_239939_,  BlockState p_239940_,  JukeboxBlockEntity p_239941_)`
- `public void setRecordWithoutPlaying(ItemStack p_272693_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.world.Container`: `countItem`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraft.world.ticks.ContainerSingleItem`: `clearContent`, `getContainerSize`, `getFirstItem`, `isEmpty`, `removeFirstItem`, `removeItemNoUpdate`, `setFirstItem`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## LecternBlockEntity

*class* `net.minecraft.world.level.block.entity.LecternBlockEntity`

### Fields
- `public static final int DATA_PAGE` (= 0)
- `public static final int NUM_DATA` (= 1)
- `public static final int SLOT_BOOK` (= 0)
- `public static final int NUM_SLOTS` (= 1)
- `private final Container bookAccess`
- `private final ContainerData dataAccess`
- `ItemStack book`
- `int page`
- `private int pageCount`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public ItemStack getBook()`
- `public boolean hasBook()`
- `public void setBook(ItemStack p_59537_)`
- `void onBookItemRemove()`
- `public void setBook(ItemStack p_59539_,  @Nullable  Player p_59540_)`
- `void setPage(int p_59533_)`
- `public int getPage()`
- `public int getRedstoneSignal()`
- `private ItemStack resolveBook(ItemStack p_59555_,  @Nullable  Player p_59556_)`
- `private CommandSourceStack createCommandSourceStack(@Nullable  Player p_59535_)`
- `public boolean onlyOpCanSetNbt()`
- `public void load(CompoundTag p_155625_)`
- `protected void saveAdditional(CompoundTag p_187509_)`
- `public void clearContent()`
- `public AbstractContainerMenu createMenu(int p_59562_,  Inventory p_59563_,  Player p_59564_)`
- `public Component getDisplayName()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## LidBlockEntity

*interface* `net.minecraft.world.level.block.entity.LidBlockEntity`

### Methods
- `float getOpenNess(float p_59604_)`

## RandomizableContainerBlockEntity

*class* `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`

### Fields
- `public static final String LOOT_TABLE_TAG` (= "LootTable")
- `public static final String LOOT_TABLE_SEED_TAG` (= "LootTableSeed")
- `@Nullable protected ResourceLocation lootTable`
- `protected long lootTableSeed`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static void setLootTable(BlockGetter p_222767_,  RandomSource p_222768_,  BlockPos p_222769_,  ResourceLocation p_222770_)`
- `protected boolean tryLoadLootTable(CompoundTag p_59632_)`
- `protected boolean trySaveLootTable(CompoundTag p_59635_)`
- `public void unpackLootTable(@Nullable  Player p_59641_)`
- `public void setLootTable(ResourceLocation p_59627_,  long p_59628_)`
- `public boolean isEmpty()`
- `public ItemStack getItem(int p_59611_)`
- `public ItemStack removeItem(int p_59613_,  int p_59614_)`
- `public ItemStack removeItemNoUpdate(int p_59630_)`
- `public void setItem(int p_59616_,  ItemStack p_59617_)`
- `public boolean stillValid(Player p_59619_)`
- `public void clearContent()`
- `protected abstract NonNullList<ItemStack> getItems()`
- `protected abstract void setItems(NonNullList<ItemStack> p_59625_)`
- `public boolean canOpen(Player p_59643_)`
- `@Nullable public AbstractContainerMenu createMenu(int p_59637_,  Inventory p_59638_,  Player p_59639_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `createMenu`, `createUnSidedHandler`, `getCapability`, `getCustomName`, `getDefaultName`, `getDisplayName`, `getName`, `invalidateCaps`, `load`, `reviveCaps`, `saveAdditional`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getContainerSize`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## SculkCatalystBlockEntity

*class* `net.minecraft.world.level.block.entity.SculkCatalystBlockEntity`

### Fields
- `private final SculkCatalystBlockEntity.CatalystListener catalystListener`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static void serverTick(Level p_222780_,  BlockPos p_222781_,  BlockState p_222782_,  SculkCatalystBlockEntity p_222783_)`
- `public void load(CompoundTag p_222787_)`
- `protected void saveAdditional(CompoundTag p_222789_)`
- `public SculkCatalystBlockEntity.CatalystListener getListener()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## SculkCatalystBlockEntity.CatalystListener

*class* `net.minecraft.world.level.block.entity.SculkCatalystBlockEntity.CatalystListener`

Enclosing class: SculkCatalystBlockEntity

### Fields
- `public static final int PULSE_TICKS` (= 8)
- `final SculkSpreader sculkSpreader`
- `private final BlockState blockState`
- `private final PositionSource positionSource`

### Methods
- `public PositionSource getListenerSource()`
- `public int getListenerRadius()`
- `public GameEventListener.DeliveryMode getDeliveryMode()`
- `public boolean handleGameEvent(ServerLevel p_283470_,  GameEvent p_282184_,  GameEvent.Context p_283014_,  Vec3 p_282350_)`
- `public SculkSpreader getSculkSpreader()`
- `private void bloom(ServerLevel p_281501_,  BlockPos p_281448_,  BlockState p_281966_,  RandomSource p_283606_)`
- `private void tryAwardItSpreadsAdvancement(Level p_281279_,  LivingEntity p_281378_)`

## SculkSensorBlockEntity

*class* `net.minecraft.world.level.block.entity.SculkSensorBlockEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private VibrationSystem.Data vibrationData`
- `private final VibrationSystem.Listener vibrationListener`
- `private final VibrationSystem.User vibrationUser`
- `private int lastVibrationFrequency`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem`: `RESONANCE_EVENTS`, `VIBRATION_FREQUENCY_FOR_EVENT`

### Methods
- `public VibrationSystem.User createVibrationUser()`
- `public void load(CompoundTag p_155649_)`
- `protected void saveAdditional(CompoundTag p_187511_)`
- `public VibrationSystem.Data getVibrationData()`
- `public VibrationSystem.User getVibrationUser()`
- `public int getLastVibrationFrequency()`
- `public void setLastVibrationFrequency(int p_222801_)`
- `public VibrationSystem.Listener getListener()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## SculkSensorBlockEntity.VibrationUser

*class* `net.minecraft.world.level.block.entity.SculkSensorBlockEntity.VibrationUser`

Enclosing class: SculkSensorBlockEntity

### Fields
- `public static final int LISTENER_RANGE` (= 8)
- `protected final BlockPos blockPos`
- `private final PositionSource positionSource`

### Methods
- `public int getListenerRadius()`
- `public PositionSource getPositionSource()`
- `public boolean canTriggerAvoidVibration()`
- `public boolean canReceiveVibration(ServerLevel p_282127_,  BlockPos p_283268_,  GameEvent p_282187_,  @Nullable  GameEvent.Context p_282856_)`
- `public void onReceiveVibration(ServerLevel p_282851_,  BlockPos p_281608_,  GameEvent p_282979_,  @Nullable  Entity p_282123_,  @Nullable  Entity p_283090_,  float p_283130_)`
- `public void onDataChanged()`
- `public boolean requiresAdjacentChunksToBeTicking()`

### Inherited methods
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.User`: `calculateTravelTimeInTicks`, `getListenableEvents`, `isValidVibration`

## SculkShriekerBlockEntity

*class* `net.minecraft.world.level.block.entity.SculkShriekerBlockEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int WARNING_SOUND_RADIUS` (= 10)
- `private static final int WARDEN_SPAWN_ATTEMPTS` (= 20)
- `private static final int WARDEN_SPAWN_RANGE_XZ` (= 5)
- `private static final int WARDEN_SPAWN_RANGE_Y` (= 6)
- `private static final int DARKNESS_RADIUS` (= 40)
- `private static final int SHRIEKING_TICKS` (= 90)
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<SoundEvent> SOUND_BY_LEVEL`
- `private int warningLevel`
- `private final VibrationSystem.User vibrationUser`
- `private VibrationSystem.Data vibrationData`
- `private final VibrationSystem.Listener vibrationListener`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem`: `RESONANCE_EVENTS`, `VIBRATION_FREQUENCY_FOR_EVENT`

### Methods
- `public VibrationSystem.Data getVibrationData()`
- `public VibrationSystem.User getVibrationUser()`
- `public void load(CompoundTag p_222868_)`
- `protected void saveAdditional(CompoundTag p_222878_)`
- `@Nullable public static ServerPlayer tryGetPlayer(@Nullable  Entity p_222862_)`
- `public void tryShriek(ServerLevel p_222842_,  @Nullable  ServerPlayer p_222843_)`
- `private boolean tryToWarn(ServerLevel p_222875_,  ServerPlayer p_222876_)`
- `private void shriek(ServerLevel p_222845_,  @Nullable  Entity p_222846_)`
- `private boolean canRespond(ServerLevel p_222873_)`
- `public void tryRespond(ServerLevel p_222840_)`
- `private void playWardenReplySound(Level p_281300_)`
- `private boolean trySummonWarden(ServerLevel p_222881_)`
- `public VibrationSystem.Listener getListener()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## SculkShriekerBlockEntity.VibrationUser

*class* `net.minecraft.world.level.block.entity.SculkShriekerBlockEntity.VibrationUser`

Enclosing class: SculkShriekerBlockEntity

### Fields
- `private static final int LISTENER_RADIUS` (= 8)
- `private final PositionSource positionSource`

### Methods
- `public int getListenerRadius()`
- `public PositionSource getPositionSource()`
- `public TagKey<GameEvent> getListenableEvents()`
- `public boolean canReceiveVibration(ServerLevel p_281256_,  BlockPos p_281528_,  GameEvent p_282632_,  GameEvent.Context p_282914_)`
- `public void onReceiveVibration(ServerLevel p_283372_,  BlockPos p_281679_,  GameEvent p_282474_,  @Nullable  Entity p_282286_,  @Nullable  Entity p_281384_,  float p_283119_)`
- `public void onDataChanged()`
- `public boolean requiresAdjacentChunksToBeTicking()`

### Inherited methods
- from `net.minecraft.world.level.gameevent.vibrations.VibrationSystem.User`: `calculateTravelTimeInTicks`, `canTriggerAvoidVibration`, `isValidVibration`

## ShulkerBoxBlockEntity

*class* `net.minecraft.world.level.block.entity.ShulkerBoxBlockEntity`

### Fields
- `public static final int COLUMNS` (= 9)
- `public static final int ROWS` (= 3)
- `public static final int CONTAINER_SIZE` (= 27)
- `public static final int EVENT_SET_OPEN_COUNT` (= 1)
- `public static final int OPENING_TICK_LENGTH` (= 10)
- `public static final float MAX_LID_HEIGHT` (= 0.5f)
- `public static final float MAX_LID_ROTATION` (= 270.0f)
- `public static final String ITEMS_TAG` (= "Items")
- `private static final int[] SLOTS`
- `private NonNullList<ItemStack> itemStacks`
- `private int openCount`
- `private ShulkerBoxBlockEntity.AnimationStatus animationStatus`
- `private float progress`
- `private float progressOld`
- `@Nullable private final DyeColor color`

### Inherited fields
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static void tick(Level p_155673_,  BlockPos p_155674_,  BlockState p_155675_,  ShulkerBoxBlockEntity p_155676_)`
- `private void updateAnimation(Level p_155680_,  BlockPos p_155681_,  BlockState p_155682_)`
- `public ShulkerBoxBlockEntity.AnimationStatus getAnimationStatus()`
- `public AABB getBoundingBox(BlockState p_59667_)`
- `private void moveCollidedEntities(Level p_155684_,  BlockPos p_155685_,  BlockState p_155686_)`
- `public int getContainerSize()`
- `public boolean triggerEvent(int p_59678_,  int p_59679_)`
- `private static void doNeighborUpdates(Level p_155688_,  BlockPos p_155689_,  BlockState p_155690_)`
- `public void startOpen(Player p_59692_)`
- `public void stopOpen(Player p_59688_)`
- `protected Component getDefaultName()`
- `public void load(CompoundTag p_155678_)`
- `protected void saveAdditional(CompoundTag p_187513_)`
- `public void loadFromTag(CompoundTag p_59694_)`
- `protected NonNullList<ItemStack> getItems()`
- `protected void setItems(NonNullList<ItemStack> p_59674_)`
- `public int[] getSlotsForFace(Direction p_59672_)`
- `public boolean canPlaceItemThroughFace(int p_59663_,  ItemStack p_59664_,  @Nullable  Direction p_59665_)`
- `public boolean canTakeItemThroughFace(int p_59682_,  ItemStack p_59683_,  Direction p_59684_)`
- `public float getProgress(float p_59658_)`
- `@Nullable public DyeColor getColor()`
- `protected AbstractContainerMenu createMenu(int p_59660_,  Inventory p_59661_)`
- `public boolean isClosed()`
- `protected IItemHandler createUnSidedHandler()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setItem`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `getCapability`, `getCustomName`, `getDisplayName`, `getName`, `invalidateCaps`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Clearable`: `clearContent`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setChanged`, `setItem`, `stillValid`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`

## SignBlockEntity

*class* `net.minecraft.world.level.block.entity.SignBlockEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_TEXT_LINE_WIDTH` (= 90)
- `private static final int TEXT_LINE_HEIGHT` (= 10)
- `@Nullable private UUID playerWhoMayEdit`
- `private SignText frontText`
- `private SignText backText`
- `private boolean isWaxed`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected SignText createDefaultSignText()`
- `public boolean isFacingFrontText(Player p_277382_)`
- `public SignText getTextFacingPlayer(Player p_277444_)`
- `public SignText getText(boolean p_277918_)`
- `public SignText getFrontText()`
- `public SignText getBackText()`
- `public int getTextLineHeight()`
- `public int getMaxTextLineWidth()`
- `protected void saveAdditional(CompoundTag p_187515_)`
- `public void load(CompoundTag p_155716_)`
- `private SignText loadLines(SignText p_278305_)`
- `private Component loadLine(Component p_278307_)`
- `public void updateSignText(Player p_278048_,  boolean p_278103_,  List<FilteredText> p_277990_)`
- `public boolean updateText(UnaryOperator<SignText> p_277877_,  boolean p_277426_)`
- `private SignText setMessages(Player p_277396_,  List<FilteredText> p_277744_,  SignText p_277359_)`
- `public boolean setText(SignText p_277733_,  boolean p_277720_)`
- `private boolean setBackText(SignText p_277777_)`
- `private boolean setFrontText(SignText p_278038_)`
- `public boolean canExecuteClickCommands(boolean p_278276_,  Player p_278240_)`
- `public boolean executeClickCommandsIfPresent(Player p_279304_,  Level p_279201_,  BlockPos p_278282_,  boolean p_278254_)`
- `private static CommandSourceStack createCommandSourceStack(@Nullable  Player p_279428_,  Level p_279359_,  BlockPos p_279430_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public boolean onlyOpCanSetNbt()`
- `public void setAllowedPlayerEditor(@Nullable  UUID p_155714_)`
- `@Nullable public UUID getPlayerWhoMayEdit()`
- `private void markUpdated()`
- `public boolean isWaxed()`
- `public boolean setWaxed(boolean p_277344_)`
- `public boolean playerIsTooFarAwayToEdit(UUID p_277978_)`
- `public static void tick(Level p_277662_,  BlockPos p_278050_,  BlockState p_277927_,  SignBlockEntity p_277928_)`
- `private void clearInvalidPlayerWhoMayEdit(SignBlockEntity p_277656_,  Level p_277853_,  UUID p_277849_)`
- `public AABB getRenderBoundingBox()`
  Description copied from interface: IForgeBlockEntity
  Return an AABB that controls the visible scope of a BlockEntityWithoutLevelRenderer associated with this BlockEntity
   Defaults to the collision bounding box BlockBehaviour.BlockStateBase.getCollisionShape(BlockGetter, BlockPos) associated with the block
   at this location.
  - returns: an appropriately size AABB for the BlockEntity

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## SignText

*class* `net.minecraft.world.level.block.entity.SignText`

### Fields
- `private static final com.mojang.serialization.Codec<Component[]> LINES_CODEC`
- `public static final com.mojang.serialization.Codec<SignText> DIRECT_CODEC`
- `public static final int LINES` (= 4)
- `private final Component[] messages`
- `private final Component[] filteredMessages`
- `private final DyeColor color`
- `private final boolean hasGlowingText`
- `@Nullable private FormattedCharSequence[] renderMessages`
- `private boolean renderMessagedFiltered`

### Methods
- `private static Component[] emptyMessages()`
- `private static SignText load(Component[] p_277661_,  Optional<Component[]> p_277768_,  DyeColor p_277345_,  boolean p_278008_)`
- `public boolean hasGlowingText()`
- `public SignText setHasGlowingText(boolean p_277953_)`
- `public DyeColor getColor()`
- `public SignText setColor(DyeColor p_277507_)`
- `public Component getMessage(int p_277404_,  boolean p_278108_)`
- `public SignText setMessage(int p_277878_,  Component p_277360_)`
- `public SignText setMessage(int p_277690_,  Component p_277852_,  Component p_277564_)`
- `public boolean hasMessage(Player p_277764_)`
- `public Component[] getMessages(boolean p_277992_)`
- `public FormattedCharSequence[] getRenderMessages(boolean p_277336_,  Function<Component,FormattedCharSequence> p_277538_)`
- `private Optional<Component[]> filteredMessages()`
- `public boolean hasAnyClickCommands(Player p_277865_)`

## SkullBlockEntity

*class* `net.minecraft.world.level.block.entity.SkullBlockEntity`

### Fields
- `public static final String TAG_SKULL_OWNER` (= "SkullOwner")
- `public static final String TAG_NOTE_BLOCK_SOUND` (= "note_block_sound")
- `@Nullable private static GameProfileCache profileCache`
- `@Nullable private static com.mojang.authlib.minecraft.MinecraftSessionService sessionService`
- `@Nullable private static Executor mainThreadExecutor`
- `private static final Executor CHECKED_MAIN_THREAD_EXECUTOR`
- `@Nullable private com.mojang.authlib.GameProfile owner`
- `@Nullable private ResourceLocation noteBlockSound`
- `private int animationTickCount`
- `private boolean isAnimating`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public static void setup(Services p_222886_,  Executor p_222887_)`
- `public static void clear()`
- `protected void saveAdditional(CompoundTag p_187518_)`
- `public void load(CompoundTag p_155745_)`
- `public static void animation(Level p_261710_,  BlockPos p_262153_,  BlockState p_262021_,  SkullBlockEntity p_261594_)`
- `public float getAnimation(float p_262053_)`
- `@Nullable public com.mojang.authlib.GameProfile getOwnerProfile()`
- `@Nullable public ResourceLocation getNoteBlockSound()`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public void setOwner(@Nullable  com.mojang.authlib.GameProfile p_59770_)`
- `private void updateOwnerProfile()`
- `@Nullable public static com.mojang.authlib.GameProfile getOrResolveGameProfile(CompoundTag p_298431_)`
- `public static void resolveGameProfile(CompoundTag p_301404_)`
- `private static void resolveGameProfile(CompoundTag p_299473_,  String p_300818_)`
- `private static CompletableFuture<Optional<com.mojang.authlib.GameProfile>> fetchGameProfile(String p_298654_)`
- `private static CompletableFuture<Optional<com.mojang.authlib.GameProfile>> fillProfileTextures(com.mojang.authlib.GameProfile p_299217_)`
- `private static boolean hasTextures(com.mojang.authlib.GameProfile p_300715_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## SmokerBlockEntity

*class* `net.minecraft.world.level.block.entity.SmokerBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`: `BURN_COOL_SPEED`, `BURN_TIME_STANDARD`, `cookingProgress`, `cookingTotalTime`, `DATA_COOKING_PROGRESS`, `DATA_COOKING_TOTAL_TIME`, `DATA_LIT_DURATION`, `DATA_LIT_TIME`, `dataAccess`, `handlers`, `items`, `litDuration`, `litTime`, `NUM_DATA_VALUES`, `SLOT_FUEL`, `SLOT_INPUT`, `SLOT_RESULT`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected Component getDefaultName()`
- `protected int getBurnDuration(ItemStack p_59786_)`
- `protected AbstractContainerMenu createMenu(int p_59783_,  Inventory p_59784_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.AbstractFurnaceBlockEntity`: `awardUsedRecipes`, `awardUsedRecipesAndPopExperience`, `canPlaceItem`, `canPlaceItemThroughFace`, `canTakeItemThroughFace`, `clearContent`, `fillStackedContents`, `getCapability`, `getContainerSize`, `getFuel`, `getItem`, `getRecipesToAwardAndPopExperience`, `getRecipeUsed`, `getSlotsForFace`, `invalidateCaps`, `isEmpty`, `isFuel`, `load`, `removeItem`, `removeItemNoUpdate`, `reviveCaps`, `saveAdditional`, `serverTick`, `setItem`, `setRecipeUsed`, `stillValid`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canOpen`, `canUnlock`, `createMenu`, `createUnSidedHandler`, `getCustomName`, `getDisplayName`, `getName`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`, `startOpen`, `stopOpen`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`
- from `net.minecraft.world.inventory.RecipeCraftingHolder`: `setRecipeUsed`

## SpawnerBlockEntity

*class* `net.minecraft.world.level.block.entity.SpawnerBlockEntity`

### Fields
- `private final BaseSpawner spawner`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public void load(CompoundTag p_155760_)`
- `protected void saveAdditional(CompoundTag p_187521_)`
- `public static void clientTick(Level p_155755_,  BlockPos p_155756_,  BlockState p_155757_,  SpawnerBlockEntity p_155758_)`
- `public static void serverTick(Level p_155762_,  BlockPos p_155763_,  BlockState p_155764_,  SpawnerBlockEntity p_155765_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public boolean triggerEvent(int p_59797_,  int p_59798_)`
- `public boolean onlyOpCanSetNbt()`
- `public void setEntityId(EntityType<?> p_254530_,  RandomSource p_253719_)`
- `public BaseSpawner getSpawner()`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## StructureBlockEntity

*class* `net.minecraft.world.level.block.entity.StructureBlockEntity`

### Fields
- `private static final int SCAN_CORNER_BLOCKS_RANGE` (= 5)
- `public static final int MAX_OFFSET_PER_AXIS` (= 48)
- `public static final int MAX_SIZE_PER_AXIS` (= 48)
- `public static final String AUTHOR_TAG` (= "author")
- `private ResourceLocation structureName`
- `private String author`
- `private String metaData`
- `private BlockPos structurePos`
- `private Vec3i structureSize`
- `private Mirror mirror`
- `private Rotation rotation`
- `private StructureMode mode`
- `private boolean ignoreEntities`
- `private boolean powered`
- `private boolean showAir`
- `private boolean showBoundingBox`
- `private float integrity`
- `private long seed`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_187524_)`
- `public void load(CompoundTag p_155800_)`
- `private void updateBlockState()`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `public boolean usedBy(Player p_59854_)`
- `public String getStructureName()`
- `public String getStructurePath()`
- `public boolean hasStructureName()`
- `public void setStructureName(@Nullable  String p_59869_)`
- `public void setStructureName(@Nullable  ResourceLocation p_59875_)`
- `public void createdBy(LivingEntity p_59852_)`
- `public BlockPos getStructurePos()`
- `public void setStructurePos(BlockPos p_59886_)`
- `public Vec3i getStructureSize()`
- `public void setStructureSize(Vec3i p_155798_)`
- `public Mirror getMirror()`
- `public void setMirror(Mirror p_59882_)`
- `public Rotation getRotation()`
- `public void setRotation(Rotation p_59884_)`
- `public String getMetaData()`
- `public void setMetaData(String p_59888_)`
- `public StructureMode getMode()`
- `public void setMode(StructureMode p_59861_)`
- `public boolean isIgnoreEntities()`
- `public void setIgnoreEntities(boolean p_59877_)`
- `public float getIntegrity()`
- `public void setIntegrity(float p_59839_)`
- `public long getSeed()`
- `public void setSeed(long p_59841_)`
- `public boolean detectSize()`
- `private Stream<BlockPos> getRelatedCorners(BlockPos p_155792_,  BlockPos p_155793_)`
- `private static Optional<BoundingBox> calculateEnclosingBoundingBox(BlockPos p_155795_,  Stream<BlockPos> p_155796_)`
- `public boolean saveStructure()`
- `public boolean saveStructure(boolean p_59890_)`
- `public boolean loadStructure(ServerLevel p_59843_)`
- `public static RandomSource createRandom(long p_222889_)`
- `public boolean loadStructure(ServerLevel p_59845_,  boolean p_59846_)`
- `public boolean loadStructure(ServerLevel p_59848_,  boolean p_59849_,  StructureTemplate p_59850_)`
- `public void unloadStructure()`
- `public boolean isStructureLoadable()`
- `public boolean isPowered()`
- `public void setPowered(boolean p_59894_)`
- `public boolean getShowAir()`
- `public void setShowAir(boolean p_59897_)`
- `public boolean getShowBoundingBox()`
- `public void setShowBoundingBox(boolean p_59899_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## TheEndGatewayBlockEntity

*class* `net.minecraft.world.level.block.entity.TheEndGatewayBlockEntity`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int SPAWN_TIME` (= 200)
- `private static final int COOLDOWN_TIME` (= 40)
- `private static final int ATTENTION_INTERVAL` (= 2400)
- `private static final int EVENT_COOLDOWN` (= 1)
- `private static final int GATEWAY_HEIGHT_ABOVE_SURFACE` (= 10)
- `private long age`
- `private int teleportCooldown`
- `@Nullable private BlockPos exitPortal`
- `private boolean exactTeleport`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void saveAdditional(CompoundTag p_187527_)`
- `public void load(CompoundTag p_155840_)`
- `public static void beamAnimationTick(Level p_155835_,  BlockPos p_155836_,  BlockState p_155837_,  TheEndGatewayBlockEntity p_155838_)`
- `public static void teleportTick(Level p_155845_,  BlockPos p_155846_,  BlockState p_155847_,  TheEndGatewayBlockEntity p_155848_)`
- `public static boolean canEntityTeleport(Entity p_59941_)`
- `public boolean isSpawning()`
- `public boolean isCoolingDown()`
- `public float getSpawnPercent(float p_59934_)`
- `public float getCooldownPercent(float p_59968_)`
- `public ClientboundBlockEntityDataPacket getUpdatePacket()`
- `public CompoundTag getUpdateTag()`
- `private static void triggerCooldown(Level p_155850_,  BlockPos p_155851_,  BlockState p_155852_,  TheEndGatewayBlockEntity p_155853_)`
- `public boolean triggerEvent(int p_59963_,  int p_59964_)`
- `public static void teleportEntity(Level p_155829_,  BlockPos p_155830_,  BlockState p_155831_,  Entity p_155832_,  TheEndGatewayBlockEntity p_155833_)`
- `private static BlockPos findExitPosition(Level p_155826_,  BlockPos p_155827_)`
- `private static BlockPos findOrCreateValidTeleportPos(ServerLevel p_155819_,  BlockPos p_155820_)`
- `private static Vec3 findExitPortalXZPosTentative(ServerLevel p_155842_,  BlockPos p_155843_)`
- `private static boolean isChunkEmpty(ServerLevel p_155816_,  Vec3 p_155817_)`
- `private static BlockPos findTallestBlock(BlockGetter p_59943_,  BlockPos p_59944_,  int p_59945_,  boolean p_59946_)`
- `private static LevelChunk getChunk(Level p_59948_,  Vec3 p_59949_)`
- `@Nullable private static BlockPos findValidSpawnInChunk(LevelChunk p_59954_)`
- `private static void spawnGatewayPortal(ServerLevel p_155822_,  BlockPos p_155823_,  EndGatewayConfiguration p_155824_)`
- `public boolean shouldRenderFace(Direction p_59959_)`
- `public int getParticleAmount()`
- `public void setExitPosition(BlockPos p_59956_,  boolean p_59957_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## TheEndPortalBlockEntity

*class* `net.minecraft.world.level.block.entity.TheEndPortalBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `public boolean shouldRenderFace(Direction p_59980_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `load`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveAdditional`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setBlockState`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`, `triggerEvent`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`

## TickingBlockEntity

*interface* `net.minecraft.world.level.block.entity.TickingBlockEntity`

### Methods
- `void tick()`
- `boolean isRemoved()`
- `BlockPos getPos()`
- `String getType()`

## TrappedChestBlockEntity

*class* `net.minecraft.world.level.block.entity.TrappedChestBlockEntity`

### Inherited fields
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `LOOT_TABLE_SEED_TAG`, `LOOT_TABLE_TAG`, `lootTable`, `lootTableSeed`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `level`, `remove`, `worldPosition`
- from `net.minecraft.world.Container`: `DEFAULT_DISTANCE_LIMIT`, `LARGE_MAX_STACK_SIZE`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `INFINITE_EXTENT_AABB`

### Methods
- `protected void signalOpenCount(Level p_155865_,  BlockPos p_155866_,  BlockState p_155867_,  int p_155868_,  int p_155869_)`

### Inherited methods
- from `net.minecraft.world.level.block.entity.ChestBlockEntity`: `createMenu`, `getCapability`, `getContainerSize`, `getDefaultName`, `getItems`, `getOpenCount`, `getOpenNess`, `invalidateCaps`, `lidAnimateTick`, `load`, `playSound`, `recheckOpen`, `saveAdditional`, `setBlockState`, `setItems`, `startOpen`, `stopOpen`, `swapContents`, `triggerEvent`
- from `net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity`: `canOpen`, `clearContent`, `createMenu`, `getItem`, `isEmpty`, `removeItem`, `removeItemNoUpdate`, `setItem`, `setLootTable`, `setLootTable`, `stillValid`, `tryLoadLootTable`, `trySaveLootTable`, `unpackLootTable`
- from `net.minecraft.world.level.block.entity.BaseContainerBlockEntity`: `canUnlock`, `createUnSidedHandler`, `getCustomName`, `getDisplayName`, `getName`, `reviveCaps`, `setCustomName`
- from `net.minecraft.world.level.block.entity.BlockEntity`: `addEntityType`, `clearRemoved`, `fillCrashReportCategory`, `getBlockPos`, `getBlockState`, `getLevel`, `getPersistentData`, `getPosFromTag`, `getType`, `getUpdatePacket`, `getUpdateTag`, `hasLevel`, `isRemoved`, `loadStatic`, `onChunkUnloaded`, `onlyOpCanSetNbt`, `saveToItem`, `saveWithFullMetadata`, `saveWithId`, `saveWithoutMetadata`, `setChanged`, `setChanged`, `setLevel`, `setRemoved`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `serializeCaps`
- from `net.minecraft.world.Container`: `canPlaceItem`, `canTakeItem`, `countItem`, `getMaxStackSize`, `hasAnyMatching`, `hasAnyOf`, `setChanged`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockEntity`: `deserializeNBT`, `getModelData`, `getRenderBoundingBox`, `handleUpdateTag`, `hasCustomOutlineRendering`, `onDataPacket`, `onLoad`, `requestModelDataUpdate`, `serializeNBT`
- from `net.minecraft.world.Nameable`: `hasCustomName`
