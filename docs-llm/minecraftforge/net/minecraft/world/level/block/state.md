# net.minecraft.world.level.block.state

- [BlockBehaviour](#blockbehaviour)
- [BlockBehaviour.BlockStateBase](#blockbehaviour.blockstatebase)
- [BlockBehaviour.BlockStateBase.Cache](#blockbehaviour.blockstatebase.cache)
- [BlockBehaviour.OffsetFunction](#blockbehaviour.offsetfunction)
- [BlockBehaviour.Properties](#blockbehaviour.properties)
- [BlockBehaviour.StateArgumentPredicate](#blockbehaviour.stateargumentpredicate)
- [BlockBehaviour.StatePredicate](#blockbehaviour.statepredicate)
- [BlockState](#blockstate)
- [Class BlockBehaviour.OffsetType](#class-blockbehaviour.offsettype)
- [StateDefinition.Builder>](#statedefinition.builder)
- [StateDefinition.Factory](#statedefinition.factory)
- [StateDefinition>](#statedefinition)
- [StateHolder](#stateholder)
## BlockBehaviour

*class* `net.minecraft.world.level.block.state.BlockBehaviour`

### Fields
- `protected static final Direction[] UPDATE_SHAPE_ORDER`
- `protected final boolean hasCollision`
- `protected final float explosionResistance`
- `protected final boolean isRandomlyTicking`
- `protected final SoundType soundType`
- `protected final float friction`
- `protected final float speedFactor`
- `protected final float jumpFactor`
- `protected final boolean dynamicShape`
- `protected final FeatureFlagSet requiredFeatures`
- `protected final BlockBehaviour.Properties properties`
- `@Nullable protected ResourceLocation drops`
- `private final Supplier<ResourceLocation> lootTableSupplier`

### Inherited fields
- from `net.minecraft.world.flag.FeatureElement`: `FILTERED_REGISTRIES`

### Methods
- `@Deprecated public void updateIndirectNeighbourShapes(BlockState p_60520_,  LevelAccessor p_60521_,  BlockPos p_60522_,  int p_60523_,  int p_60524_)` (deprecated)
- `@Deprecated public boolean isPathfindable(BlockState p_60475_,  BlockGetter p_60476_,  BlockPos p_60477_,  PathComputationType p_60478_)` (deprecated)
- `@Deprecated public BlockState updateShape(BlockState p_60541_,  Direction p_60542_,  BlockState p_60543_,  LevelAccessor p_60544_,  BlockPos p_60545_,  BlockPos p_60546_)` (deprecated)
- `@Deprecated public boolean skipRendering(BlockState p_60532_,  BlockState p_60533_,  Direction p_60534_)` (deprecated)
- `@Deprecated public void neighborChanged(BlockState p_60509_,  Level p_60510_,  BlockPos p_60511_,  Block p_60512_,  BlockPos p_60513_,  boolean p_60514_)` (deprecated)
- `@Deprecated public void onPlace(BlockState p_60566_,  Level p_60567_,  BlockPos p_60568_,  BlockState p_60569_,  boolean p_60570_)` (deprecated)
- `@Deprecated public void onRemove(BlockState p_60515_,  Level p_60516_,  BlockPos p_60517_,  BlockState p_60518_,  boolean p_60519_)` (deprecated)
- `@Deprecated public InteractionResult use(BlockState p_60503_,  Level p_60504_,  BlockPos p_60505_,  Player p_60506_,  InteractionHand p_60507_,  BlockHitResult p_60508_)` (deprecated)
- `@Deprecated public boolean triggerEvent(BlockState p_60490_,  Level p_60491_,  BlockPos p_60492_,  int p_60493_,  int p_60494_)` (deprecated)
- `@Deprecated public RenderShape getRenderShape(BlockState p_60550_)` (deprecated)
- `@Deprecated public boolean useShapeForLightOcclusion(BlockState p_60576_)` (deprecated)
- `@Deprecated public boolean isSignalSource(BlockState p_60571_)` (deprecated)
- `@Deprecated public FluidState getFluidState(BlockState p_60577_)` (deprecated)
- `@Deprecated public boolean hasAnalogOutputSignal(BlockState p_60457_)` (deprecated)
- `public float getMaxHorizontalOffset()`
- `public float getMaxVerticalOffset()`
- `public FeatureFlagSet requiredFeatures()`
- `@Deprecated public BlockState rotate(BlockState p_60530_,  Rotation p_60531_)` (deprecated)
- `@Deprecated public BlockState mirror(BlockState p_60528_,  Mirror p_60529_)` (deprecated)
- `@Deprecated public boolean canBeReplaced(BlockState p_60470_,  BlockPlaceContext p_60471_)` (deprecated)
- `@Deprecated public boolean canBeReplaced(BlockState p_60535_,  Fluid p_60536_)` (deprecated)
- `@Deprecated public List<ItemStack> getDrops(BlockState p_287732_,  LootParams.Builder p_287596_)` (deprecated)
- `@Deprecated public long getSeed(BlockState p_60539_,  BlockPos p_60540_)` (deprecated)
- `@Deprecated public VoxelShape getOcclusionShape(BlockState p_60578_,  BlockGetter p_60579_,  BlockPos p_60580_)` (deprecated)
- `@Deprecated public VoxelShape getBlockSupportShape(BlockState p_60581_,  BlockGetter p_60582_,  BlockPos p_60583_)` (deprecated)
- `@Deprecated public VoxelShape getInteractionShape(BlockState p_60547_,  BlockGetter p_60548_,  BlockPos p_60549_)` (deprecated)
- `@Deprecated public int getLightBlock(BlockState p_60585_,  BlockGetter p_60586_,  BlockPos p_60587_)` (deprecated)
- `@Nullable @Deprecated public MenuProvider getMenuProvider(BlockState p_60563_,  Level p_60564_,  BlockPos p_60565_)` (deprecated)
- `@Deprecated public boolean canSurvive(BlockState p_60525_,  LevelReader p_60526_,  BlockPos p_60527_)` (deprecated)
- `@Deprecated public float getShadeBrightness(BlockState p_60472_,  BlockGetter p_60473_,  BlockPos p_60474_)` (deprecated)
- `@Deprecated public int getAnalogOutputSignal(BlockState p_60487_,  Level p_60488_,  BlockPos p_60489_)` (deprecated)
- `@Deprecated public VoxelShape getShape(BlockState p_60555_,  BlockGetter p_60556_,  BlockPos p_60557_,  CollisionContext p_60558_)` (deprecated)
- `@Deprecated public VoxelShape getCollisionShape(BlockState p_60572_,  BlockGetter p_60573_,  BlockPos p_60574_,  CollisionContext p_60575_)` (deprecated)
- `@Deprecated public boolean isCollisionShapeFullBlock(BlockState p_181242_,  BlockGetter p_181243_,  BlockPos p_181244_)` (deprecated)
- `@Deprecated public boolean isOcclusionShapeFullBlock(BlockState p_222959_,  BlockGetter p_222960_,  BlockPos p_222961_)` (deprecated)
- `@Deprecated public VoxelShape getVisualShape(BlockState p_60479_,  BlockGetter p_60480_,  BlockPos p_60481_,  CollisionContext p_60482_)` (deprecated)
- `@Deprecated public void randomTick(BlockState p_222954_,  ServerLevel p_222955_,  BlockPos p_222956_,  RandomSource p_222957_)` (deprecated)
- `@Deprecated public void tick(BlockState p_222945_,  ServerLevel p_222946_,  BlockPos p_222947_,  RandomSource p_222948_)` (deprecated)
- `@Deprecated public float getDestroyProgress(BlockState p_60466_,  Player p_60467_,  BlockGetter p_60468_,  BlockPos p_60469_)` (deprecated)
- `@Deprecated public void spawnAfterBreak(BlockState p_222949_,  ServerLevel p_222950_,  BlockPos p_222951_,  ItemStack p_222952_,  boolean p_222953_)` (deprecated)
- `@Deprecated public void attack(BlockState p_60499_,  Level p_60500_,  BlockPos p_60501_,  Player p_60502_)` (deprecated)
- `@Deprecated public int getSignal(BlockState p_60483_,  BlockGetter p_60484_,  BlockPos p_60485_,  Direction p_60486_)` (deprecated)
- `@Deprecated public void entityInside(BlockState p_60495_,  Level p_60496_,  BlockPos p_60497_,  Entity p_60498_)` (deprecated)
- `@Deprecated public int getDirectSignal(BlockState p_60559_,  BlockGetter p_60560_,  BlockPos p_60561_,  Direction p_60562_)` (deprecated)
- `public final ResourceLocation getLootTable()`
- `@Deprecated public void onProjectileHit(Level p_60453_,  BlockState p_60454_,  BlockHitResult p_60455_,  Projectile p_60456_)` (deprecated)
- `public abstract Item asItem()`
- `protected abstract Block asBlock()`
- `public MapColor defaultMapColor()`
- `public float defaultDestroyTime()`
- `protected boolean isAir(BlockState state)`

### Inherited methods
- from `net.minecraft.world.flag.FeatureElement`: `isEnabled`

## BlockBehaviour.BlockStateBase

*class* `net.minecraft.world.level.block.state.BlockBehaviour.BlockStateBase`

Enclosing class: BlockBehaviour

### Fields
- `private final int lightEmission`
- `private final boolean useShapeForLightOcclusion`
- `private final boolean isAir`
- `private final boolean ignitedByLava`
- `@Deprecated private final boolean liquid` (deprecated)
- `@Deprecated private boolean legacySolid` (deprecated)
- `private final PushReaction pushReaction`
- `private final MapColor mapColor`
- `private final float destroySpeed`
- `private final boolean requiresCorrectToolForDrops`
- `private final boolean canOcclude`
- `private final BlockBehaviour.StatePredicate isRedstoneConductor`
- `private final BlockBehaviour.StatePredicate isSuffocating`
- `private final BlockBehaviour.StatePredicate isViewBlocking`
- `private final BlockBehaviour.StatePredicate hasPostProcess`
- `private final BlockBehaviour.StatePredicate emissiveRendering`
- `private final Optional<BlockBehaviour.OffsetFunction> offsetFunction`
- `private final boolean spawnTerrainParticles`
- `private final NoteBlockInstrument instrument`
- `private final boolean replaceable`
- `@Nullable protected BlockBehaviour.BlockStateBase.Cache cache`
- `private FluidState fluidState`
- `private boolean isRandomlyTicking`

### Inherited fields
- from `net.minecraft.world.level.block.state.StateHolder`: `NAME_TAG`, `owner`, `PROPERTIES_TAG`, `propertiesCodec`

### Methods
- `private boolean calculateSolid()`
- `public void initCache()`
- `public Block getBlock()`
- `public Holder<Block> getBlockHolder()`
- `@Deprecated public boolean blocksMotion()` (deprecated)
- `@Deprecated public boolean isSolid()` (deprecated)
- `public boolean isValidSpawn(BlockGetter p_60644_,  BlockPos p_60645_,  EntityType<?> p_60646_)`
- `public boolean propagatesSkylightDown(BlockGetter p_60632_,  BlockPos p_60633_)`
- `public int getLightBlock(BlockGetter p_60740_,  BlockPos p_60741_)`
- `public VoxelShape getFaceOcclusionShape(BlockGetter p_60656_,  BlockPos p_60657_,  Direction p_60658_)`
- `public VoxelShape getOcclusionShape(BlockGetter p_60769_,  BlockPos p_60770_)`
- `public boolean hasLargeCollisionShape()`
- `public boolean useShapeForLightOcclusion()`
- `@Deprecated public int getLightEmission()` (deprecated)
- `public boolean isAir()`
- `public boolean ignitedByLava()`
- `@Deprecated public boolean liquid()` (deprecated)
- `public MapColor getMapColor(BlockGetter p_285002_,  BlockPos p_285293_)`
- `@Deprecated public BlockState rotate(Rotation p_60718_)` (deprecated)
- `public BlockState mirror(Mirror p_60716_)`
- `public RenderShape getRenderShape()`
- `public boolean emissiveRendering(BlockGetter p_60789_,  BlockPos p_60790_)`
- `public float getShadeBrightness(BlockGetter p_60793_,  BlockPos p_60794_)`
- `public boolean isRedstoneConductor(BlockGetter p_60797_,  BlockPos p_60798_)`
- `public boolean isSignalSource()`
- `public int getSignal(BlockGetter p_60747_,  BlockPos p_60748_,  Direction p_60749_)`
- `public boolean hasAnalogOutputSignal()`
- `public int getAnalogOutputSignal(Level p_60675_,  BlockPos p_60676_)`
- `public float getDestroySpeed(BlockGetter p_60801_,  BlockPos p_60802_)`
- `public float getDestroyProgress(Player p_60626_,  BlockGetter p_60627_,  BlockPos p_60628_)`
- `public int getDirectSignal(BlockGetter p_60776_,  BlockPos p_60777_,  Direction p_60778_)`
- `public PushReaction getPistonPushReaction()`
- `public boolean isSolidRender(BlockGetter p_60805_,  BlockPos p_60806_)`
- `public boolean canOcclude()`
- `public boolean skipRendering(BlockState p_60720_,  Direction p_60721_)`
- `public VoxelShape getShape(BlockGetter p_60809_,  BlockPos p_60810_)`
- `public VoxelShape getShape(BlockGetter p_60652_,  BlockPos p_60653_,  CollisionContext p_60654_)`
- `public VoxelShape getCollisionShape(BlockGetter p_60813_,  BlockPos p_60814_)`
- `public VoxelShape getCollisionShape(BlockGetter p_60743_,  BlockPos p_60744_,  CollisionContext p_60745_)`
- `public VoxelShape getBlockSupportShape(BlockGetter p_60817_,  BlockPos p_60818_)`
- `public VoxelShape getVisualShape(BlockGetter p_60772_,  BlockPos p_60773_,  CollisionContext p_60774_)`
- `public VoxelShape getInteractionShape(BlockGetter p_60821_,  BlockPos p_60822_)`
- `public final boolean entityCanStandOn(BlockGetter p_60635_,  BlockPos p_60636_,  Entity p_60637_)`
- `public final boolean entityCanStandOnFace(BlockGetter p_60639_,  BlockPos p_60640_,  Entity p_60641_,  Direction p_60642_)`
- `public Vec3 getOffset(BlockGetter p_60825_,  BlockPos p_60826_)`
- `public boolean hasOffsetFunction()`
- `public boolean triggerEvent(Level p_60678_,  BlockPos p_60679_,  int p_60680_,  int p_60681_)`
- `@Deprecated public void neighborChanged(Level p_60691_,  BlockPos p_60692_,  Block p_60693_,  BlockPos p_60694_,  boolean p_60695_)` (deprecated)
- `public final void updateNeighbourShapes(LevelAccessor p_60702_,  BlockPos p_60703_,  int p_60704_)`
- `public final void updateNeighbourShapes(LevelAccessor p_60706_,  BlockPos p_60707_,  int p_60708_,  int p_60709_)`
- `public final void updateIndirectNeighbourShapes(LevelAccessor p_60759_,  BlockPos p_60760_,  int p_60761_)`
- `public void updateIndirectNeighbourShapes(LevelAccessor p_60763_,  BlockPos p_60764_,  int p_60765_,  int p_60766_)`
- `public void onPlace(Level p_60697_,  BlockPos p_60698_,  BlockState p_60699_,  boolean p_60700_)`
- `public void onRemove(Level p_60754_,  BlockPos p_60755_,  BlockState p_60756_,  boolean p_60757_)`
- `public void tick(ServerLevel p_222964_,  BlockPos p_222965_,  RandomSource p_222966_)`
- `public void randomTick(ServerLevel p_222973_,  BlockPos p_222974_,  RandomSource p_222975_)`
- `public void entityInside(Level p_60683_,  BlockPos p_60684_,  Entity p_60685_)`
- `public void spawnAfterBreak(ServerLevel p_222968_,  BlockPos p_222969_,  ItemStack p_222970_,  boolean p_222971_)`
- `public List<ItemStack> getDrops(LootParams.Builder p_287688_)`
- `public InteractionResult use(Level p_60665_,  Player p_60666_,  InteractionHand p_60667_,  BlockHitResult p_60668_)`
- `public void attack(Level p_60687_,  BlockPos p_60688_,  Player p_60689_)`
- `public boolean isSuffocating(BlockGetter p_60829_,  BlockPos p_60830_)`
- `public boolean isViewBlocking(BlockGetter p_60832_,  BlockPos p_60833_)`
- `public BlockState updateShape(Direction p_60729_,  BlockState p_60730_,  LevelAccessor p_60731_,  BlockPos p_60732_,  BlockPos p_60733_)`
- `public boolean isPathfindable(BlockGetter p_60648_,  BlockPos p_60649_,  PathComputationType p_60650_)`
- `public boolean canBeReplaced(BlockPlaceContext p_60630_)`
- `public boolean canBeReplaced(Fluid p_60723_)`
- `public boolean canBeReplaced()`
- `public boolean canSurvive(LevelReader p_60711_,  BlockPos p_60712_)`
- `public boolean hasPostProcess(BlockGetter p_60836_,  BlockPos p_60837_)`
- `@Nullable public MenuProvider getMenuProvider(Level p_60751_,  BlockPos p_60752_)`
- `public boolean is(TagKey<Block> p_204337_)`
- `public boolean is(TagKey<Block> p_204339_,  Predicate<BlockBehaviour.BlockStateBase> p_204340_)`
- `public boolean is(HolderSet<Block> p_204342_)`
- `public boolean is(Holder<Block> p_300456_)`
- `public Stream<TagKey<Block>> getTags()`
- `public boolean hasBlockEntity()`
- `@Nullable public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_155945_,  BlockEntityType<T> p_155946_)`
- `public boolean is(Block p_60714_)`
- `public FluidState getFluidState()`
- `public boolean isRandomlyTicking()`
- `public long getSeed(BlockPos p_60727_)`
- `public SoundType getSoundType()`
- `public void onProjectileHit(Level p_60670_,  BlockState p_60671_,  BlockHitResult p_60672_,  Projectile p_60673_)`
- `public boolean isFaceSturdy(BlockGetter p_60784_,  BlockPos p_60785_,  Direction p_60786_)`
- `public boolean isFaceSturdy(BlockGetter p_60660_,  BlockPos p_60661_,  Direction p_60662_,  SupportType p_60663_)`
- `public boolean isCollisionShapeFullBlock(BlockGetter p_60839_,  BlockPos p_60840_)`
- `protected abstract BlockState asState()`
- `public boolean requiresCorrectToolForDrops()`
- `public boolean shouldSpawnTerrainParticles()`
- `public NoteBlockInstrument instrument()`

### Inherited methods
- from `net.minecraft.world.level.block.state.StateHolder`: `codec`, `cycle`, `findNextInCollection`, `getOptionalValue`, `getProperties`, `getValue`, `getValues`, `hasProperty`, `populateNeighbours`, `setValue`, `toString`, `trySetValue`

## BlockBehaviour.BlockStateBase.Cache

*class* `net.minecraft.world.level.block.state.BlockBehaviour.BlockStateBase.Cache`

Enclosing class: BlockBehaviour.BlockStateBase

### Fields
- `private static final Direction[] DIRECTIONS`
- `private static final int SUPPORT_TYPE_COUNT`
- `protected final boolean solidRender`
- `final boolean propagatesSkylightDown`
- `final int lightBlock`
- `@Nullable final VoxelShape[] occlusionShapes`
- `protected final VoxelShape collisionShape`
- `protected final boolean largeCollisionShape`
- `private final boolean[] faceSturdy`
- `protected final boolean isCollisionShapeFullBlock`

### Methods
- `public boolean isFaceSturdy(Direction p_60862_,  SupportType p_60863_)`
- `private static int getFaceSupportIndex(Direction p_60867_,  SupportType p_60868_)`

## BlockBehaviour.OffsetFunction

*interface* `net.minecraft.world.level.block.state.BlockBehaviour.OffsetFunction`

Enclosing class: BlockBehaviour

### Methods
- `Vec3 evaluate(BlockState p_273639_,  BlockGetter p_273732_,  BlockPos p_273779_)`

## BlockBehaviour.Properties

*class* `net.minecraft.world.level.block.state.BlockBehaviour.Properties`

Enclosing class: BlockBehaviour

### Fields
- `Function<BlockState,MapColor> mapColor`
- `boolean hasCollision`
- `SoundType soundType`
- `ToIntFunction<BlockState> lightEmission`
- `float explosionResistance`
- `float destroyTime`
- `boolean requiresCorrectToolForDrops`
- `boolean isRandomlyTicking`
- `float friction`
- `float speedFactor`
- `float jumpFactor`
- `ResourceLocation drops`
- `boolean canOcclude`
- `boolean isAir`
- `boolean ignitedByLava`
- `@Deprecated boolean liquid` (deprecated)
- `@Deprecated boolean forceSolidOff` (deprecated)
- `boolean forceSolidOn`
- `PushReaction pushReaction`
- `boolean spawnTerrainParticles`
- `NoteBlockInstrument instrument`
- `boolean replaceable`
- `private Supplier<ResourceLocation> lootTableSupplier`
- `BlockBehaviour.StateArgumentPredicate<EntityType<?>> isValidSpawn`
- `BlockBehaviour.StatePredicate isRedstoneConductor`
- `BlockBehaviour.StatePredicate isSuffocating`
- `BlockBehaviour.StatePredicate isViewBlocking`
- `BlockBehaviour.StatePredicate hasPostProcess`
- `BlockBehaviour.StatePredicate emissiveRendering`
- `boolean dynamicShape`
- `FeatureFlagSet requiredFeatures`
- `Optional<BlockBehaviour.OffsetFunction> offsetFunction`

### Methods
- `public static BlockBehaviour.Properties of()`
- `public static BlockBehaviour.Properties copy(BlockBehaviour p_60927_)`
- `public BlockBehaviour.Properties mapColor(DyeColor p_285331_)`
- `public BlockBehaviour.Properties mapColor(MapColor p_285137_)`
- `public BlockBehaviour.Properties mapColor(Function<BlockState,MapColor> p_285406_)`
- `public BlockBehaviour.Properties noCollission()`
- `public BlockBehaviour.Properties noOcclusion()`
- `public BlockBehaviour.Properties friction(float p_60912_)`
- `public BlockBehaviour.Properties speedFactor(float p_60957_)`
- `public BlockBehaviour.Properties jumpFactor(float p_60968_)`
- `public BlockBehaviour.Properties sound(SoundType p_60919_)`
- `public BlockBehaviour.Properties lightLevel(ToIntFunction<BlockState> p_60954_)`
- `public BlockBehaviour.Properties strength(float p_60914_,  float p_60915_)`
- `public BlockBehaviour.Properties instabreak()`
- `public BlockBehaviour.Properties strength(float p_60979_)`
- `public BlockBehaviour.Properties randomTicks()`
- `public BlockBehaviour.Properties dynamicShape()`
- `public BlockBehaviour.Properties noLootTable()`
- `@Deprecated public BlockBehaviour.Properties dropsLike(Block p_60917_)` (deprecated)
- `public BlockBehaviour.Properties lootFrom(Supplier<? extends Block> blockIn)`
- `public BlockBehaviour.Properties ignitedByLava()`
- `public BlockBehaviour.Properties liquid()`
- `public BlockBehaviour.Properties forceSolidOn()`
- `@Deprecated public BlockBehaviour.Properties forceSolidOff()` (deprecated)
- `public BlockBehaviour.Properties pushReaction(PushReaction p_278265_)`
- `public BlockBehaviour.Properties air()`
- `public BlockBehaviour.Properties isValidSpawn(BlockBehaviour.StateArgumentPredicate<EntityType<?>> p_60923_)`
- `public BlockBehaviour.Properties isRedstoneConductor(BlockBehaviour.StatePredicate p_60925_)`
- `public BlockBehaviour.Properties isSuffocating(BlockBehaviour.StatePredicate p_60961_)`
- `public BlockBehaviour.Properties isViewBlocking(BlockBehaviour.StatePredicate p_60972_)`
- `public BlockBehaviour.Properties hasPostProcess(BlockBehaviour.StatePredicate p_60983_)`
- `public BlockBehaviour.Properties emissiveRendering(BlockBehaviour.StatePredicate p_60992_)`
- `public BlockBehaviour.Properties requiresCorrectToolForDrops()`
- `public BlockBehaviour.Properties destroyTime(float p_155955_)`
- `public BlockBehaviour.Properties explosionResistance(float p_155957_)`
- `public BlockBehaviour.Properties offsetType(BlockBehaviour.OffsetType p_222980_)`
- `public BlockBehaviour.Properties noTerrainParticles()`
- `public BlockBehaviour.Properties requiredFeatures(FeatureFlag... p_248792_)`
- `public BlockBehaviour.Properties instrument(NoteBlockInstrument p_282170_)`
- `public BlockBehaviour.Properties replaceable()`

## BlockBehaviour.StateArgumentPredicate

*interface* `net.minecraft.world.level.block.state.BlockBehaviour.StateArgumentPredicate`

Enclosing class: BlockBehaviour

### Methods
- `boolean test(BlockState p_61031_,  BlockGetter p_61032_,  BlockPos p_61033_,  A p_61034_)`

## BlockBehaviour.StatePredicate

*interface* `net.minecraft.world.level.block.state.BlockBehaviour.StatePredicate`

Enclosing class: BlockBehaviour

### Methods
- `boolean test(BlockState p_61036_,  BlockGetter p_61037_,  BlockPos p_61038_)`

## BlockState

*class* `net.minecraft.world.level.block.state.BlockState`

### Fields
- `public static final com.mojang.serialization.Codec<BlockState> CODEC`

### Inherited fields
- from `net.minecraft.world.level.block.state.BlockBehaviour.BlockStateBase`: `cache`
- from `net.minecraft.world.level.block.state.StateHolder`: `NAME_TAG`, `owner`, `PROPERTIES_TAG`, `propertiesCodec`

### Methods
- `protected BlockState asState()`

### Inherited methods
- from `net.minecraft.world.level.block.state.BlockBehaviour.BlockStateBase`: `attack`, `blocksMotion`, `canBeReplaced`, `canBeReplaced`, `canBeReplaced`, `canOcclude`, `canSurvive`, `emissiveRendering`, `entityCanStandOn`, `entityCanStandOnFace`, `entityInside`, `getAnalogOutputSignal`, `getBlock`, `getBlockHolder`, `getBlockSupportShape`, `getCollisionShape`, `getCollisionShape`, `getDestroyProgress`, `getDestroySpeed`, `getDirectSignal`, `getDrops`, `getFaceOcclusionShape`, `getFluidState`, `getInteractionShape`, `getLightBlock`, `getLightEmission`, `getMapColor`, `getMenuProvider`, `getOcclusionShape`, `getOffset`, `getPistonPushReaction`, `getRenderShape`, `getSeed`, `getShadeBrightness`, `getShape`, `getShape`, `getSignal`, `getSoundType`, `getTags`, `getTicker`, `getVisualShape`, `hasAnalogOutputSignal`, `hasBlockEntity`, `hasLargeCollisionShape`, `hasOffsetFunction`, `hasPostProcess`, `ignitedByLava`, `initCache`, `instrument`, `is`, `is`, `is`, `is`, `is`, `isAir`, `isCollisionShapeFullBlock`, `isFaceSturdy`, `isFaceSturdy`, `isPathfindable`, `isRandomlyTicking`, `isRedstoneConductor`, `isSignalSource`, `isSolid`, `isSolidRender`, `isSuffocating`, `isValidSpawn`, `isViewBlocking`, `liquid`, `mirror`, `neighborChanged`, `onPlace`, `onProjectileHit`, `onRemove`, `propagatesSkylightDown`, `randomTick`, `requiresCorrectToolForDrops`, `rotate`, `shouldSpawnTerrainParticles`, `skipRendering`, `spawnAfterBreak`, `tick`, `triggerEvent`, `updateIndirectNeighbourShapes`, `updateIndirectNeighbourShapes`, `updateNeighbourShapes`, `updateNeighbourShapes`, `updateShape`, `use`, `useShapeForLightOcclusion`
- from `net.minecraft.world.level.block.state.StateHolder`: `codec`, `cycle`, `findNextInCollection`, `getOptionalValue`, `getProperties`, `getValue`, `getValues`, `hasProperty`, `populateNeighbours`, `setValue`, `toString`, `trySetValue`
- from `net.minecraftforge.common.extensions.IForgeBlockState`: `addLandingEffects`, `addRunningEffects`, `canBeHydrated`, `canDropFromExplosion`, `canEntityDestroy`, `canHarvestBlock`, `canRedstoneConnectTo`, `canStickTo`, `canSustainPlant`, `collisionExtendsVertically`, `getAdjacentBlockPathType`, `getAppearance`, `getBeaconColorMultiplier`, `getBedDirection`, `getBlockPathType`, `getCloneItemStack`, `getEnchantPowerBonus`, `getExpDrop`, `getExplosionResistance`, `getFireSpreadSpeed`, `getFlammability`, `getFriction`, `getLightEmission`, `getRespawnPosition`, `getSoundType`, `getStateAtViewpoint`, `getToolModifiedState`, `getWeakChanges`, `hidesNeighborFace`, `isBed`, `isBurning`, `isConduitFrame`, `isFertile`, `isFireSource`, `isFlammable`, `isLadder`, `isPortalFrame`, `isScaffolding`, `isSlimeBlock`, `isStickyBlock`, `isValidSpawn`, `onBlockExploded`, `onBlockStateChange`, `onCaughtFire`, `onDestroyedByPlayer`, `onNeighborChange`, `onTreeGrow`, `rotate`, `setBedOccupied`, `shouldCheckWeakPower`, `shouldDisplayFluidOverlay`, `supportsExternalFaceHiding`

## Class BlockBehaviour.OffsetType

*enum* `net.minecraft.world.level.block.state.Class BlockBehaviour.OffsetType`

Enclosing class: BlockBehaviour

### Methods
- `public static BlockBehaviour.OffsetType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BlockBehaviour.OffsetType valueOf(String name)`
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

## StateDefinition.Builder>

*class* `net.minecraft.world.level.block.state.StateDefinition.Builder>`

Enclosing class: StateDefinition<O, S extends StateHolder<O, S>>

### Fields
- `private final O owner`
- `private final Map<String,Property<?>> properties`

### Methods
- `public StateDefinition.Builder<O,S> add(Property<?>... p_61105_)`
- `private <T extends Comparable<T>> void validateProperty(Property<T> p_61100_)`
- `public StateDefinition<O,S> create(Function<O,S> p_61102_,  StateDefinition.Factory<O,S> p_61103_)`

## StateDefinition.Factory

*interface* `net.minecraft.world.level.block.state.StateDefinition.Factory`

Enclosing class: StateDefinition<O, S extends StateHolder<O, S>>

### Methods
- `S create(O p_61107_,  com.google.common.collect.ImmutableMap<Property<?>,Comparable<?>> p_61108_,  com.mojang.serialization.MapCodec<S> p_61109_)`

## StateDefinition>

*class* `net.minecraft.world.level.block.state.StateDefinition>`

### Fields
- `static final Pattern NAME_PATTERN`
- `private final O owner`
- `private final com.google.common.collect.ImmutableSortedMap<String,Property<?>> propertiesByName`
- `private final com.google.common.collect.ImmutableList<S extends StateHolder<O,S>> states`

### Methods
- `private static <S extends StateHolder<?, S>, T extends Comparable<T>> com.mojang.serialization.MapCodec<S> appendPropertyCodec(com.mojang.serialization.MapCodec<S> p_61077_,  Supplier<S> p_61078_,  String p_61079_,  Property<T> p_61080_)`
- `public com.google.common.collect.ImmutableList<S> getPossibleStates()`
- `public S any()`
- `public O getOwner()`
- `public Collection<Property<?>> getProperties()`
- `public String toString()`
- `@Nullable public Property<?> getProperty(String p_61082_)`

## StateHolder

*class* `net.minecraft.world.level.block.state.StateHolder`

### Fields
- `public static final String NAME_TAG` (= "Name")
- `public static final String PROPERTIES_TAG` (= "Properties")
- `private static final Function<Map.Entry<Property<?>,Comparable<?>>,String> PROPERTY_ENTRY_TO_STRING_FUNCTION`
- `protected final O owner`
- `private final com.google.common.collect.ImmutableMap<Property<?>,Comparable<?>> values`
- `private com.google.common.collect.Table<Property<?>,Comparable<?>,S> neighbours`
- `protected final com.mojang.serialization.MapCodec<S> propertiesCodec`

### Methods
- `public <T extends Comparable<T>> S cycle(Property<T> p_61123_)`
- `protected static <T> T findNextInCollection(Collection<T> p_61131_,  T p_61132_)`
- `public String toString()`
- `public Collection<Property<?>> getProperties()`
- `public <T extends Comparable<T>> boolean hasProperty(Property<T> p_61139_)`
- `public <T extends Comparable<T>> T getValue(Property<T> p_61144_)`
- `public <T extends Comparable<T>> Optional<T> getOptionalValue(Property<T> p_61146_)`
- `public <T extends Comparable<T>, V extends T> S setValue(Property<T> p_61125_,  V p_61126_)`
- `public <T extends Comparable<T>, V extends T> S trySetValue(Property<T> p_263324_,  V p_263334_)`
- `public void populateNeighbours(Map<Map<Property<?>,Comparable<?>>,S> p_61134_)`
- `private Map<Property<?>,Comparable<?>> makeNeighbourValues(Property<?> p_61141_,  Comparable<?> p_61142_)`
- `public com.google.common.collect.ImmutableMap<Property<?>,Comparable<?>> getValues()`
- `protected static <O, S extends StateHolder<O, S>> com.mojang.serialization.Codec<S> codec(com.mojang.serialization.Codec<O> p_61128_,  Function<O,S> p_61129_)`
