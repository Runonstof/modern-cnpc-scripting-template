# net.minecraft.world.level.material

- [Class FogType](#class-fogtype)
- [Class MapColor.Brightness](#class-mapcolor.brightness)
- [Class PushReaction](#class-pushreaction)
- [EmptyFluid](#emptyfluid)
- [FlowingFluid](#flowingfluid)
- [Fluid](#fluid)
- [Fluids](#fluids)
- [FluidState](#fluidstate)
- [LavaFluid](#lavafluid)
- [LavaFluid.Flowing](#lavafluid.flowing)
- [LavaFluid.Source](#lavafluid.source)
- [MapColor](#mapcolor)
- [WaterFluid](#waterfluid)
- [WaterFluid.Flowing](#waterfluid.flowing)
- [WaterFluid.Source](#waterfluid.source)
## Class FogType

*enum* `net.minecraft.world.level.material.Class FogType`

### Methods
- `public static FogType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FogType valueOf(String name)`
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

## Class MapColor.Brightness

*enum* `net.minecraft.world.level.material.Class MapColor.Brightness`

Enclosing class: MapColor

### Fields
- `private static final MapColor.Brightness[] VALUES`
- `public final int id`
- `public final int modifier`

### Methods
- `public static MapColor.Brightness[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MapColor.Brightness valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static MapColor.Brightness byId(int p_284960_)`
- `static MapColor.Brightness byIdUnsafe(int p_285089_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class PushReaction

*enum* `net.minecraft.world.level.material.Class PushReaction`

### Methods
- `public static PushReaction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PushReaction valueOf(String name)`
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

## EmptyFluid

*class* `net.minecraft.world.level.material.EmptyFluid`

### Inherited fields
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public Item getBucket()`
- `public boolean canBeReplacedWith(FluidState p_75930_,  BlockGetter p_75931_,  BlockPos p_75932_,  Fluid p_75933_,  Direction p_75934_)`
- `public Vec3 getFlow(BlockGetter p_75918_,  BlockPos p_75919_,  FluidState p_75920_)`
- `public int getTickDelay(LevelReader p_75922_)`
- `protected boolean isEmpty()`
- `protected float getExplosionResistance()`
- `public float getHeight(FluidState p_75926_,  BlockGetter p_75927_,  BlockPos p_75928_)`
- `public float getOwnHeight(FluidState p_75924_)`
- `protected BlockState createLegacyBlock(FluidState p_75937_)`
- `public boolean isSource(FluidState p_75944_)`
- `public int getAmount(FluidState p_75946_)`
- `public VoxelShape getShape(FluidState p_75939_,  BlockGetter p_75940_,  BlockPos p_75941_)`

### Inherited methods
- from `net.minecraft.world.level.material.Fluid`: `animateTick`, `builtInRegistryHolder`, `createFluidStateDefinition`, `defaultFluidState`, `getDripParticle`, `getFluidType`, `getPickupSound`, `getStateDefinition`, `is`, `isRandomlyTicking`, `isSame`, `randomTick`, `registerDefaultState`, `tick`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canConvertToSource`, `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## FlowingFluid

*class* `net.minecraft.world.level.material.FlowingFluid`

### Fields
- `public static final BooleanProperty FALLING`
- `public static final IntegerProperty LEVEL`
- `private static final int CACHE_SIZE` (= 200)
- `private static final ThreadLocal<it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap<Block.BlockStatePairKey>> OCCLUSION_CACHE`
- `private final Map<FluidState,VoxelShape> shapes`

### Inherited fields
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `protected void createFluidStateDefinition(StateDefinition.Builder<Fluid,FluidState> p_76046_)`
- `public Vec3 getFlow(BlockGetter p_75987_,  BlockPos p_75988_,  FluidState p_75989_)`
- `private boolean affectsFlow(FluidState p_76095_)`
- `protected boolean isSolidFace(BlockGetter p_75991_,  BlockPos p_75992_,  Direction p_75993_)`
- `protected void spread(Level p_255851_,  BlockPos p_76012_,  FluidState p_76013_)`
- `private void spreadToSides(Level p_256644_,  BlockPos p_76016_,  FluidState p_76017_,  BlockState p_76018_)`
- `protected FluidState getNewLiquid(Level p_256464_,  BlockPos p_76037_,  BlockState p_76038_)`
- `private boolean canPassThroughWall(Direction p_76062_,  BlockGetter p_76063_,  BlockPos p_76064_,  BlockState p_76065_,  BlockPos p_76066_,  BlockState p_76067_)`
- `public abstract Fluid getFlowing()`
- `public FluidState getFlowing(int p_75954_,  boolean p_75955_)`
- `public abstract Fluid getSource()`
- `public FluidState getSource(boolean p_76069_)`
- `public boolean canConvertToSource(FluidState state,  Level level,  BlockPos pos)`
  Description copied from interface: IForgeFluid
  Returns whether the fluid can create a source.
  - param: state - the state of the fluid
  - param: level - the level that can get the fluid
  - param: pos - the location of the fluid
  - returns: true if the fluid can create a source, false otherwise
- `@Deprecated protected abstract boolean canConvertToSource(Level p_256009_)` (deprecated)
- `protected void spreadTo(LevelAccessor p_76005_,  BlockPos p_76006_,  BlockState p_76007_,  Direction p_76008_,  FluidState p_76009_)`
- `protected abstract void beforeDestroyingBlock(LevelAccessor p_76002_,  BlockPos p_76003_,  BlockState p_76004_)`
- `private static short getCacheKey(BlockPos p_76059_,  BlockPos p_76060_)`
- `protected int getSlopeDistance(LevelReader p_76027_,  BlockPos p_76028_,  int p_76029_,  Direction p_76030_,  BlockState p_76031_,  BlockPos p_76032_,  it.unimi.dsi.fastutil.shorts.Short2ObjectMap<com.mojang.datafixers.util.Pair<BlockState,FluidState>> p_76033_,  it.unimi.dsi.fastutil.shorts.Short2BooleanMap p_76034_)`
- `private boolean isWaterHole(BlockGetter p_75957_,  Fluid p_75958_,  BlockPos p_75959_,  BlockState p_75960_,  BlockPos p_75961_,  BlockState p_75962_)`
- `private boolean canPassThrough(BlockGetter p_75964_,  Fluid p_75965_,  BlockPos p_75966_,  BlockState p_75967_,  Direction p_75968_,  BlockPos p_75969_,  BlockState p_75970_,  FluidState p_75971_)`
- `private boolean isSourceBlockOfThisType(FluidState p_76097_)`
- `protected abstract int getSlopeFindDistance(LevelReader p_76074_)`
- `private int sourceNeighborCount(LevelReader p_76020_,  BlockPos p_76021_)`
- `protected Map<Direction,FluidState> getSpread(Level p_256191_,  BlockPos p_76081_,  BlockState p_76082_)`
- `private boolean canHoldFluid(BlockGetter p_75973_,  BlockPos p_75974_,  BlockState p_75975_,  Fluid p_75976_)`
- `protected boolean canSpreadTo(BlockGetter p_75978_,  BlockPos p_75979_,  BlockState p_75980_,  Direction p_75981_,  BlockPos p_75982_,  BlockState p_75983_,  FluidState p_75984_,  Fluid p_75985_)`
- `protected abstract int getDropOff(LevelReader p_76087_)`
- `protected int getSpreadDelay(Level p_75998_,  BlockPos p_75999_,  FluidState p_76000_,  FluidState p_76001_)`
- `public void tick(Level p_75995_,  BlockPos p_75996_,  FluidState p_75997_)`
- `protected static int getLegacyLevel(FluidState p_76093_)`
- `private static boolean hasSameAbove(FluidState p_76089_,  BlockGetter p_76090_,  BlockPos p_76091_)`
- `public float getHeight(FluidState p_76050_,  BlockGetter p_76051_,  BlockPos p_76052_)`
- `public float getOwnHeight(FluidState p_76048_)`
- `public abstract int getAmount(FluidState p_164509_)`
- `public VoxelShape getShape(FluidState p_76084_,  BlockGetter p_76085_,  BlockPos p_76086_)`

### Inherited methods
- from `net.minecraft.world.level.material.Fluid`: `animateTick`, `builtInRegistryHolder`, `canBeReplacedWith`, `createLegacyBlock`, `defaultFluidState`, `getBucket`, `getDripParticle`, `getExplosionResistance`, `getFluidType`, `getPickupSound`, `getStateDefinition`, `getTickDelay`, `is`, `isEmpty`, `isRandomlyTicking`, `isSame`, `isSource`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## Fluid

*class* `net.minecraft.world.level.material.Fluid`

### Fields
- `public static final IdMapper<FluidState> FLUID_STATE_REGISTRY`
- `protected final StateDefinition<Fluid,FluidState> stateDefinition`
- `private FluidState defaultFluidState`
- `private final Holder.Reference<Fluid> builtInRegistryHolder`
- `private FluidType forgeFluidType`

### Methods
- `protected void createFluidStateDefinition(StateDefinition.Builder<Fluid,FluidState> p_76121_)`
- `public StateDefinition<Fluid,FluidState> getStateDefinition()`
- `protected final void registerDefaultState(FluidState p_76143_)`
- `public final FluidState defaultFluidState()`
- `public abstract Item getBucket()`
- `protected void animateTick(Level p_230550_,  BlockPos p_230551_,  FluidState p_230552_,  RandomSource p_230553_)`
- `protected void tick(Level p_76113_,  BlockPos p_76114_,  FluidState p_76115_)`
- `protected void randomTick(Level p_230554_,  BlockPos p_230555_,  FluidState p_230556_,  RandomSource p_230557_)`
- `@Nullable protected ParticleOptions getDripParticle()`
- `protected abstract boolean canBeReplacedWith(FluidState p_76127_,  BlockGetter p_76128_,  BlockPos p_76129_,  Fluid p_76130_,  Direction p_76131_)`
- `protected abstract Vec3 getFlow(BlockGetter p_76110_,  BlockPos p_76111_,  FluidState p_76112_)`
- `public abstract int getTickDelay(LevelReader p_76120_)`
- `protected boolean isRandomlyTicking()`
- `protected boolean isEmpty()`
- `protected abstract float getExplosionResistance()`
- `public abstract float getHeight(FluidState p_76124_,  BlockGetter p_76125_,  BlockPos p_76126_)`
- `public abstract float getOwnHeight(FluidState p_76123_)`
- `protected abstract BlockState createLegacyBlock(FluidState p_76136_)`
- `public abstract boolean isSource(FluidState p_76140_)`
- `public abstract int getAmount(FluidState p_76141_)`
- `public boolean isSame(Fluid p_76122_)`
- `@Deprecated public boolean is(TagKey<Fluid> p_205068_)` (deprecated)
- `public abstract VoxelShape getShape(FluidState p_76137_,  BlockGetter p_76138_,  BlockPos p_76139_)`
- `public FluidType getFluidType()`
  Description copied from interface: IForgeFluid
  Returns the type of this fluid.
  
   Important: This MUST be overridden on your fluid, otherwise an
   error will be thrown.
  - returns: the type of this fluid
- `public Optional<SoundEvent> getPickupSound()`
- `@Deprecated public Holder.Reference<Fluid> builtInRegistryHolder()` (deprecated)

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canConvertToSource`, `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## Fluids

*class* `net.minecraft.world.level.material.Fluids`

### Fields
- `public static final Fluid EMPTY`
- `public static final FlowingFluid FLOWING_WATER`
- `public static final FlowingFluid WATER`
- `public static final FlowingFluid FLOWING_LAVA`
- `public static final FlowingFluid LAVA`

### Methods
- `private static <T extends Fluid> T register(String p_76198_,  T p_76199_)`

## FluidState

*class* `net.minecraft.world.level.material.FluidState`

### Fields
- `public static final com.mojang.serialization.Codec<FluidState> CODEC`
- `public static final int AMOUNT_MAX` (= 9)
- `public static final int AMOUNT_FULL` (= 8)

### Inherited fields
- from `net.minecraft.world.level.block.state.StateHolder`: `NAME_TAG`, `owner`, `PROPERTIES_TAG`, `propertiesCodec`

### Methods
- `public Fluid getType()`
- `public boolean isSource()`
- `public boolean isSourceOfType(Fluid p_164513_)`
- `public boolean isEmpty()`
- `public float getHeight(BlockGetter p_76156_,  BlockPos p_76157_)`
- `public float getOwnHeight()`
- `public int getAmount()`
- `public boolean shouldRenderBackwardUpFace(BlockGetter p_76172_,  BlockPos p_76173_)`
- `public void tick(Level p_76164_,  BlockPos p_76165_)`
- `public void animateTick(Level p_230559_,  BlockPos p_230560_,  RandomSource p_230561_)`
- `public boolean isRandomlyTicking()`
- `public void randomTick(Level p_230563_,  BlockPos p_230564_,  RandomSource p_230565_)`
- `public Vec3 getFlow(BlockGetter p_76180_,  BlockPos p_76181_)`
- `public BlockState createLegacyBlock()`
- `@Nullable public ParticleOptions getDripParticle()`
- `public boolean is(TagKey<Fluid> p_205071_)`
- `public boolean is(HolderSet<Fluid> p_205073_)`
- `public boolean is(Fluid p_192918_)`
- `@Deprecated public float getExplosionResistance()` (deprecated)
- `public boolean canBeReplacedWith(BlockGetter p_76159_,  BlockPos p_76160_,  Fluid p_76161_,  Direction p_76162_)`
- `public VoxelShape getShape(BlockGetter p_76184_,  BlockPos p_76185_)`
- `public Holder<Fluid> holder()`
- `public Stream<TagKey<Fluid>> getTags()`

### Inherited methods
- from `net.minecraft.world.level.block.state.StateHolder`: `codec`, `cycle`, `findNextInCollection`, `getOptionalValue`, `getProperties`, `getValue`, `getValues`, `hasProperty`, `populateNeighbours`, `setValue`, `toString`, `trySetValue`
- from `net.minecraftforge.common.extensions.IForgeFluidState`: `canConvertToSource`, `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `getFluidType`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## LavaFluid

*class* `net.minecraft.world.level.material.LavaFluid`

### Fields
- `public static final float MIN_LEVEL_CUTOFF` (= 0.4444444477558136f)

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public Fluid getFlowing()`
- `public Fluid getSource()`
- `public Item getBucket()`
- `public void animateTick(Level p_230567_,  BlockPos p_230568_,  FluidState p_230569_,  RandomSource p_230570_)`
- `public void randomTick(Level p_230572_,  BlockPos p_230573_,  FluidState p_230574_,  RandomSource p_230575_)`
- `private boolean hasFlammableNeighbours(LevelReader p_76228_,  BlockPos p_76229_)`
- `@Deprecated private boolean isFlammable(LevelReader p_76246_,  BlockPos p_76247_)` (deprecated)
- `private boolean isFlammable(LevelReader level,  BlockPos pos,  Direction face)`
- `@Nullable public ParticleOptions getDripParticle()`
- `protected void beforeDestroyingBlock(LevelAccessor p_76216_,  BlockPos p_76217_,  BlockState p_76218_)`
- `public int getSlopeFindDistance(LevelReader p_76244_)`
- `public BlockState createLegacyBlock(FluidState p_76249_)`
- `public boolean isSame(Fluid p_76231_)`
- `public int getDropOff(LevelReader p_76252_)`
- `public boolean canBeReplacedWith(FluidState p_76233_,  BlockGetter p_76234_,  BlockPos p_76235_,  Fluid p_76236_,  Direction p_76237_)`
- `public int getTickDelay(LevelReader p_76226_)`
- `public int getSpreadDelay(Level p_76203_,  BlockPos p_76204_,  FluidState p_76205_,  FluidState p_76206_)`
- `private void fizz(LevelAccessor p_76213_,  BlockPos p_76214_)`
- `protected boolean canConvertToSource(Level p_256295_)`
- `protected void spreadTo(LevelAccessor p_76220_,  BlockPos p_76221_,  BlockState p_76222_,  Direction p_76223_,  FluidState p_76224_)`
- `protected boolean isRandomlyTicking()`
- `protected float getExplosionResistance()`
- `public Optional<SoundEvent> getPickupSound()`

### Inherited methods
- from `net.minecraft.world.level.material.FlowingFluid`: `canConvertToSource`, `canSpreadTo`, `createFluidStateDefinition`, `getAmount`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `isSolidFace`, `spread`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `builtInRegistryHolder`, `defaultFluidState`, `getFluidType`, `getStateDefinition`, `is`, `isEmpty`, `isSource`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## LavaFluid.Flowing

*class* `net.minecraft.world.level.material.LavaFluid.Flowing`

Enclosing class: LavaFluid

### Inherited fields
- from `net.minecraft.world.level.material.LavaFluid`: `MIN_LEVEL_CUTOFF`
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `protected void createFluidStateDefinition(StateDefinition.Builder<Fluid,FluidState> p_76260_)`
- `public int getAmount(FluidState p_76264_)`
- `public boolean isSource(FluidState p_76262_)`

### Inherited methods
- from `net.minecraft.world.level.material.LavaFluid`: `animateTick`, `beforeDestroyingBlock`, `canBeReplacedWith`, `canConvertToSource`, `createLegacyBlock`, `getBucket`, `getDripParticle`, `getDropOff`, `getExplosionResistance`, `getFlowing`, `getPickupSound`, `getSlopeFindDistance`, `getSource`, `getSpreadDelay`, `getTickDelay`, `isRandomlyTicking`, `isSame`, `randomTick`, `spreadTo`
- from `net.minecraft.world.level.material.FlowingFluid`: `canConvertToSource`, `canSpreadTo`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `isSolidFace`, `spread`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `builtInRegistryHolder`, `defaultFluidState`, `getFluidType`, `getStateDefinition`, `is`, `isEmpty`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## LavaFluid.Source

*class* `net.minecraft.world.level.material.LavaFluid.Source`

Enclosing class: LavaFluid

### Inherited fields
- from `net.minecraft.world.level.material.LavaFluid`: `MIN_LEVEL_CUTOFF`
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public int getAmount(FluidState p_76269_)`
- `public boolean isSource(FluidState p_76267_)`

### Inherited methods
- from `net.minecraft.world.level.material.LavaFluid`: `animateTick`, `beforeDestroyingBlock`, `canBeReplacedWith`, `canConvertToSource`, `createLegacyBlock`, `getBucket`, `getDripParticle`, `getDropOff`, `getExplosionResistance`, `getFlowing`, `getPickupSound`, `getSlopeFindDistance`, `getSource`, `getSpreadDelay`, `getTickDelay`, `isRandomlyTicking`, `isSame`, `randomTick`, `spreadTo`
- from `net.minecraft.world.level.material.FlowingFluid`: `canConvertToSource`, `canSpreadTo`, `createFluidStateDefinition`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `isSolidFace`, `spread`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `builtInRegistryHolder`, `defaultFluidState`, `getFluidType`, `getStateDefinition`, `is`, `isEmpty`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## MapColor

*class* `net.minecraft.world.level.material.MapColor`

### Fields
- `private static final MapColor[] MATERIAL_COLORS`
- `public static final MapColor NONE`
- `public static final MapColor GRASS`
- `public static final MapColor SAND`
- `public static final MapColor WOOL`
- `public static final MapColor FIRE`
- `public static final MapColor ICE`
- `public static final MapColor METAL`
- `public static final MapColor PLANT`
- `public static final MapColor SNOW`
- `public static final MapColor CLAY`
- `public static final MapColor DIRT`
- `public static final MapColor STONE`
- `public static final MapColor WATER`
- `public static final MapColor WOOD`
- `public static final MapColor QUARTZ`
- `public static final MapColor COLOR_ORANGE`
- `public static final MapColor COLOR_MAGENTA`
- `public static final MapColor COLOR_LIGHT_BLUE`
- `public static final MapColor COLOR_YELLOW`
- `public static final MapColor COLOR_LIGHT_GREEN`
- `public static final MapColor COLOR_PINK`
- `public static final MapColor COLOR_GRAY`
- `public static final MapColor COLOR_LIGHT_GRAY`
- `public static final MapColor COLOR_CYAN`
- `public static final MapColor COLOR_PURPLE`
- `public static final MapColor COLOR_BLUE`
- `public static final MapColor COLOR_BROWN`
- `public static final MapColor COLOR_GREEN`
- `public static final MapColor COLOR_RED`
- `public static final MapColor COLOR_BLACK`
- `public static final MapColor GOLD`
- `public static final MapColor DIAMOND`
- `public static final MapColor LAPIS`
- `public static final MapColor EMERALD`
- `public static final MapColor PODZOL`
- `public static final MapColor NETHER`
- `public static final MapColor TERRACOTTA_WHITE`
- `public static final MapColor TERRACOTTA_ORANGE`
- `public static final MapColor TERRACOTTA_MAGENTA`
- `public static final MapColor TERRACOTTA_LIGHT_BLUE`
- `public static final MapColor TERRACOTTA_YELLOW`
- `public static final MapColor TERRACOTTA_LIGHT_GREEN`
- `public static final MapColor TERRACOTTA_PINK`
- `public static final MapColor TERRACOTTA_GRAY`
- `public static final MapColor TERRACOTTA_LIGHT_GRAY`
- `public static final MapColor TERRACOTTA_CYAN`
- `public static final MapColor TERRACOTTA_PURPLE`
- `public static final MapColor TERRACOTTA_BLUE`
- `public static final MapColor TERRACOTTA_BROWN`
- `public static final MapColor TERRACOTTA_GREEN`
- `public static final MapColor TERRACOTTA_RED`
- `public static final MapColor TERRACOTTA_BLACK`
- `public static final MapColor CRIMSON_NYLIUM`
- `public static final MapColor CRIMSON_STEM`
- `public static final MapColor CRIMSON_HYPHAE`
- `public static final MapColor WARPED_NYLIUM`
- `public static final MapColor WARPED_STEM`
- `public static final MapColor WARPED_HYPHAE`
- `public static final MapColor WARPED_WART_BLOCK`
- `public static final MapColor DEEPSLATE`
- `public static final MapColor RAW_IRON`
- `public static final MapColor GLOW_LICHEN`
- `public final int col`
- `public final int id`

### Methods
- `public int calculateRGBColor(MapColor.Brightness p_285401_)`
- `public static MapColor byId(int p_285273_)`
- `private static MapColor byIdUnsafe(int p_285180_)`
- `public static int getColorFromPackedId(int p_285190_)`
- `public byte getPackedId(MapColor.Brightness p_285070_)`

## WaterFluid

*class* `net.minecraft.world.level.material.WaterFluid`

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public Fluid getFlowing()`
- `public Fluid getSource()`
- `public Item getBucket()`
- `public void animateTick(Level p_230606_,  BlockPos p_230607_,  FluidState p_230608_,  RandomSource p_230609_)`
- `@Nullable public ParticleOptions getDripParticle()`
- `protected boolean canConvertToSource(Level p_256670_)`
- `protected void beforeDestroyingBlock(LevelAccessor p_76450_,  BlockPos p_76451_,  BlockState p_76452_)`
- `public int getSlopeFindDistance(LevelReader p_76464_)`
- `public BlockState createLegacyBlock(FluidState p_76466_)`
- `public boolean isSame(Fluid p_76456_)`
- `public int getDropOff(LevelReader p_76469_)`
- `public int getTickDelay(LevelReader p_76454_)`
- `public boolean canBeReplacedWith(FluidState p_76458_,  BlockGetter p_76459_,  BlockPos p_76460_,  Fluid p_76461_,  Direction p_76462_)`
- `protected float getExplosionResistance()`
- `public Optional<SoundEvent> getPickupSound()`

### Inherited methods
- from `net.minecraft.world.level.material.FlowingFluid`: `canConvertToSource`, `canSpreadTo`, `createFluidStateDefinition`, `getAmount`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `getSpreadDelay`, `isSolidFace`, `spread`, `spreadTo`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `builtInRegistryHolder`, `defaultFluidState`, `getFluidType`, `getStateDefinition`, `is`, `isEmpty`, `isRandomlyTicking`, `isSource`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## WaterFluid.Flowing

*class* `net.minecraft.world.level.material.WaterFluid.Flowing`

Enclosing class: WaterFluid

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `protected void createFluidStateDefinition(StateDefinition.Builder<Fluid,FluidState> p_76476_)`
- `public int getAmount(FluidState p_76480_)`
- `public boolean isSource(FluidState p_76478_)`

### Inherited methods
- from `net.minecraft.world.level.material.WaterFluid`: `animateTick`, `beforeDestroyingBlock`, `canBeReplacedWith`, `canConvertToSource`, `createLegacyBlock`, `getBucket`, `getDripParticle`, `getDropOff`, `getExplosionResistance`, `getFlowing`, `getPickupSound`, `getSlopeFindDistance`, `getSource`, `getTickDelay`, `isSame`
- from `net.minecraft.world.level.material.FlowingFluid`: `canConvertToSource`, `canSpreadTo`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `getSpreadDelay`, `isSolidFace`, `spread`, `spreadTo`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `builtInRegistryHolder`, `defaultFluidState`, `getFluidType`, `getStateDefinition`, `is`, `isEmpty`, `isRandomlyTicking`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## WaterFluid.Source

*class* `net.minecraft.world.level.material.WaterFluid.Source`

Enclosing class: WaterFluid

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public int getAmount(FluidState p_76485_)`
- `public boolean isSource(FluidState p_76483_)`

### Inherited methods
- from `net.minecraft.world.level.material.WaterFluid`: `animateTick`, `beforeDestroyingBlock`, `canBeReplacedWith`, `canConvertToSource`, `createLegacyBlock`, `getBucket`, `getDripParticle`, `getDropOff`, `getExplosionResistance`, `getFlowing`, `getPickupSound`, `getSlopeFindDistance`, `getSource`, `getTickDelay`, `isSame`
- from `net.minecraft.world.level.material.FlowingFluid`: `canConvertToSource`, `canSpreadTo`, `createFluidStateDefinition`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `getSpreadDelay`, `isSolidFace`, `spread`, `spreadTo`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `builtInRegistryHolder`, `defaultFluidState`, `getFluidType`, `getStateDefinition`, `is`, `isEmpty`, `isRandomlyTicking`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`
