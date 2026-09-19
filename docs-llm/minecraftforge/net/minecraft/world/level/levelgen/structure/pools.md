# net.minecraft.world.level.levelgen.structure.pools

- [Class StructureTemplatePool.Projection](#class-structuretemplatepool.projection)
- [EmptyPoolElement](#emptypoolelement)
- [FeaturePoolElement](#featurepoolelement)
- [JigsawJunction](#jigsawjunction)
- [JigsawPlacement](#jigsawplacement)
- [JigsawPlacement.PieceState](#jigsawplacement.piecestate)
- [JigsawPlacement.Placer](#jigsawplacement.placer)
- [LegacySinglePoolElement](#legacysinglepoolelement)
- [ListPoolElement](#listpoolelement)
- [SinglePoolElement](#singlepoolelement)
- [StructurePoolElement](#structurepoolelement)
- [StructurePoolElementType](#structurepoolelementtype)
- [StructureTemplatePool](#structuretemplatepool)
## Class StructureTemplatePool.Projection

*enum* `net.minecraft.world.level.levelgen.structure.pools.Class StructureTemplatePool.Projection`

Enclosing class: StructureTemplatePool

### Fields
- `public static final StringRepresentable.EnumCodec<StructureTemplatePool.Projection> CODEC`
- `private final String name`
- `private final com.google.common.collect.ImmutableList<StructureProcessor> processors`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static StructureTemplatePool.Projection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructureTemplatePool.Projection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public static StructureTemplatePool.Projection byName(String p_210608_)`
- `public com.google.common.collect.ImmutableList<StructureProcessor> getProcessors()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## EmptyPoolElement

*class* `net.minecraft.world.level.levelgen.structure.pools.EmptyPoolElement`

### Fields
- `public static final com.mojang.serialization.Codec<EmptyPoolElement> CODEC`
- `public static final EmptyPoolElement INSTANCE`

### Methods
- `public Vec3i getSize(StructureTemplateManager p_227169_,  Rotation p_227170_)`
- `public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227176_,  BlockPos p_227177_,  Rotation p_227178_,  RandomSource p_227179_)`
- `public BoundingBox getBoundingBox(StructureTemplateManager p_227172_,  BlockPos p_227173_,  Rotation p_227174_)`
- `public boolean place(StructureTemplateManager p_227158_,  WorldGenLevel p_227159_,  StructureManager p_227160_,  ChunkGenerator p_227161_,  BlockPos p_227162_,  BlockPos p_227163_,  Rotation p_227164_,  BoundingBox p_227165_,  RandomSource p_227166_,  boolean p_227167_)`
- `public StructurePoolElementType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement`: `empty`, `feature`, `getGroundLevelDelta`, `getProjection`, `handleDataMarker`, `legacy`, `legacy`, `list`, `projectionCodec`, `setProjection`, `single`, `single`

## FeaturePoolElement

*class* `net.minecraft.world.level.levelgen.structure.pools.FeaturePoolElement`

### Fields
- `public static final com.mojang.serialization.Codec<FeaturePoolElement> CODEC`
- `private final Holder<PlacedFeature> feature`
- `private final CompoundTag defaultJigsawNBT`

### Methods
- `private CompoundTag fillDefaultJigsawNBT()`
- `public Vec3i getSize(StructureTemplateManager p_227192_,  Rotation p_227193_)`
- `public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227199_,  BlockPos p_227200_,  Rotation p_227201_,  RandomSource p_227202_)`
- `public BoundingBox getBoundingBox(StructureTemplateManager p_227195_,  BlockPos p_227196_,  Rotation p_227197_)`
- `public boolean place(StructureTemplateManager p_227181_,  WorldGenLevel p_227182_,  StructureManager p_227183_,  ChunkGenerator p_227184_,  BlockPos p_227185_,  BlockPos p_227186_,  Rotation p_227187_,  BoundingBox p_227188_,  RandomSource p_227189_,  boolean p_227190_)`
- `public StructurePoolElementType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement`: `empty`, `feature`, `getGroundLevelDelta`, `getProjection`, `handleDataMarker`, `legacy`, `legacy`, `list`, `projectionCodec`, `setProjection`, `single`, `single`

## JigsawJunction

*class* `net.minecraft.world.level.levelgen.structure.pools.JigsawJunction`

### Fields
- `private final int sourceX`
- `private final int sourceGroundY`
- `private final int sourceZ`
- `private final int deltaY`
- `private final StructureTemplatePool.Projection destProjection`

### Methods
- `public int getSourceX()`
- `public int getSourceGroundY()`
- `public int getSourceZ()`
- `public int getDeltaY()`
- `public StructureTemplatePool.Projection getDestProjection()`
- `public <T> com.mojang.serialization.Dynamic<T> serialize(com.mojang.serialization.DynamicOps<T> p_210256_)`
- `public static <T> JigsawJunction deserialize(com.mojang.serialization.Dynamic<T> p_210254_)`
- `public boolean equals(Object p_210262_)`
- `public int hashCode()`
- `public String toString()`

## JigsawPlacement

*class* `net.minecraft.world.level.levelgen.structure.pools.JigsawPlacement`

### Fields
- `static final org.slf4j.Logger LOGGER`

### Methods
- `public static Optional<Structure.GenerationStub> addPieces(Structure.GenerationContext p_227239_,  Holder<StructureTemplatePool> p_227240_,  Optional<ResourceLocation> p_227241_,  int p_227242_,  BlockPos p_227243_,  boolean p_227244_,  Optional<Heightmap.Types> p_227245_,  int p_227246_)`
- `private static Optional<BlockPos> getRandomNamedJigsaw(StructurePoolElement p_227248_,  ResourceLocation p_227249_,  BlockPos p_227250_,  Rotation p_227251_,  StructureTemplateManager p_227252_,  WorldgenRandom p_227253_)`
- `private static void addPieces(RandomState p_227211_,  int p_227212_,  boolean p_227213_,  ChunkGenerator p_227214_,  StructureTemplateManager p_227215_,  LevelHeightAccessor p_227216_,  RandomSource p_227217_,  Registry<StructureTemplatePool> p_227218_,  PoolElementStructurePiece p_227219_,  List<PoolElementStructurePiece> p_227220_,  VoxelShape p_227221_)`
- `public static boolean generateJigsaw(ServerLevel p_227204_,  Holder<StructureTemplatePool> p_227205_,  ResourceLocation p_227206_,  int p_227207_,  BlockPos p_227208_,  boolean p_227209_)`

## JigsawPlacement.PieceState

*class* `net.minecraft.world.level.levelgen.structure.pools.JigsawPlacement.PieceState`

Enclosing class: JigsawPlacement

### Fields
- `final PoolElementStructurePiece piece`
- `final org.apache.commons.lang3.mutable.MutableObject<VoxelShape> free`
- `final int depth`

## JigsawPlacement.Placer

*class* `net.minecraft.world.level.levelgen.structure.pools.JigsawPlacement.Placer`

Enclosing class: JigsawPlacement

### Fields
- `private final Registry<StructureTemplatePool> pools`
- `private final int maxDepth`
- `private final ChunkGenerator chunkGenerator`
- `private final StructureTemplateManager structureTemplateManager`
- `private final List<? super PoolElementStructurePiece> pieces`
- `private final RandomSource random`
- `final Deque<JigsawPlacement.PieceState> placing`

### Methods
- `void tryPlacingChildren(PoolElementStructurePiece p_227265_,  org.apache.commons.lang3.mutable.MutableObject<VoxelShape> p_227266_,  int p_227267_,  boolean p_227268_,  LevelHeightAccessor p_227269_,  RandomState p_227270_)`
- `private static ResourceKey<StructureTemplatePool> readPoolName(StructureTemplate.StructureBlockInfo p_256491_)`

## LegacySinglePoolElement

*class* `net.minecraft.world.level.levelgen.structure.pools.LegacySinglePoolElement`

### Fields
- `public static final com.mojang.serialization.Codec<LegacySinglePoolElement> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement`: `processors`, `template`

### Methods
- `protected StructurePlaceSettings getSettings(Rotation p_210353_,  BoundingBox p_210354_,  boolean p_210355_)`
- `public StructurePoolElementType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement`: `getBoundingBox`, `getDataMarkers`, `getShuffledJigsawBlocks`, `getSize`, `place`, `processorsCodec`, `templateCodec`
- from `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement`: `empty`, `feature`, `getGroundLevelDelta`, `getProjection`, `handleDataMarker`, `legacy`, `legacy`, `list`, `projectionCodec`, `setProjection`, `single`, `single`

## ListPoolElement

*class* `net.minecraft.world.level.levelgen.structure.pools.ListPoolElement`

### Fields
- `public static final com.mojang.serialization.Codec<ListPoolElement> CODEC`
- `private final List<StructurePoolElement> elements`

### Methods
- `public Vec3i getSize(StructureTemplateManager p_227283_,  Rotation p_227284_)`
- `public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227290_,  BlockPos p_227291_,  Rotation p_227292_,  RandomSource p_227293_)`
- `public BoundingBox getBoundingBox(StructureTemplateManager p_227286_,  BlockPos p_227287_,  Rotation p_227288_)`
- `public boolean place(StructureTemplateManager p_227272_,  WorldGenLevel p_227273_,  StructureManager p_227274_,  ChunkGenerator p_227275_,  BlockPos p_227276_,  BlockPos p_227277_,  Rotation p_227278_,  BoundingBox p_227279_,  RandomSource p_227280_,  boolean p_227281_)`
- `public StructurePoolElementType<?> getType()`
- `public StructurePoolElement setProjection(StructureTemplatePool.Projection p_210373_)`
- `public String toString()`
- `private void setProjectionOnEachElement(StructureTemplatePool.Projection p_210407_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement`: `empty`, `feature`, `getGroundLevelDelta`, `getProjection`, `handleDataMarker`, `legacy`, `legacy`, `list`, `projectionCodec`, `single`, `single`

## SinglePoolElement

*class* `net.minecraft.world.level.levelgen.structure.pools.SinglePoolElement`

### Fields
- `private static final com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<ResourceLocation,StructureTemplate>> TEMPLATE_CODEC`
- `public static final com.mojang.serialization.Codec<SinglePoolElement> CODEC`
- `protected final com.mojang.datafixers.util.Either<ResourceLocation,StructureTemplate> template`
- `protected final Holder<StructureProcessorList> processors`

### Methods
- `private static <T> com.mojang.serialization.DataResult<T> encodeTemplate(com.mojang.datafixers.util.Either<ResourceLocation,StructureTemplate> p_210425_,  com.mojang.serialization.DynamicOps<T> p_210426_,  T p_210427_)`
- `protected static <E extends SinglePoolElement> com.mojang.serialization.codecs.RecordCodecBuilder<E,Holder<StructureProcessorList>> processorsCodec()`
- `protected static <E extends SinglePoolElement> com.mojang.serialization.codecs.RecordCodecBuilder<E,com.mojang.datafixers.util.Either<ResourceLocation,StructureTemplate>> templateCodec()`
- `public Vec3i getSize(StructureTemplateManager p_227313_,  Rotation p_227314_)`
- `private StructureTemplate getTemplate(StructureTemplateManager p_227300_)`
- `public List<StructureTemplate.StructureBlockInfo> getDataMarkers(StructureTemplateManager p_227325_,  BlockPos p_227326_,  Rotation p_227327_,  boolean p_227328_)`
- `public List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227320_,  BlockPos p_227321_,  Rotation p_227322_,  RandomSource p_227323_)`
- `public BoundingBox getBoundingBox(StructureTemplateManager p_227316_,  BlockPos p_227317_,  Rotation p_227318_)`
- `public boolean place(StructureTemplateManager p_227302_,  WorldGenLevel p_227303_,  StructureManager p_227304_,  ChunkGenerator p_227305_,  BlockPos p_227306_,  BlockPos p_227307_,  Rotation p_227308_,  BoundingBox p_227309_,  RandomSource p_227310_,  boolean p_227311_)`
- `protected StructurePlaceSettings getSettings(Rotation p_210421_,  BoundingBox p_210422_,  boolean p_210423_)`
- `public StructurePoolElementType<?> getType()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement`: `empty`, `feature`, `getGroundLevelDelta`, `getProjection`, `handleDataMarker`, `legacy`, `legacy`, `list`, `projectionCodec`, `setProjection`, `single`, `single`

## StructurePoolElement

*class* `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement`

### Fields
- `public static final com.mojang.serialization.Codec<StructurePoolElement> CODEC`
- `private static final Holder<StructureProcessorList> EMPTY`
- `@Nullable private volatile StructureTemplatePool.Projection projection`

### Methods
- `protected static <E extends StructurePoolElement> com.mojang.serialization.codecs.RecordCodecBuilder<E,StructureTemplatePool.Projection> projectionCodec()`
- `public abstract Vec3i getSize(StructureTemplateManager p_227346_,  Rotation p_227347_)`
- `public abstract List<StructureTemplate.StructureBlockInfo> getShuffledJigsawBlocks(StructureTemplateManager p_227351_,  BlockPos p_227352_,  Rotation p_227353_,  RandomSource p_227354_)`
- `public abstract BoundingBox getBoundingBox(StructureTemplateManager p_227348_,  BlockPos p_227349_,  Rotation p_227350_)`
- `public abstract boolean place(StructureTemplateManager p_227336_,  WorldGenLevel p_227337_,  StructureManager p_227338_,  ChunkGenerator p_227339_,  BlockPos p_227340_,  BlockPos p_227341_,  Rotation p_227342_,  BoundingBox p_227343_,  RandomSource p_227344_,  boolean p_227345_)`
- `public abstract StructurePoolElementType<?> getType()`
- `public void handleDataMarker(LevelAccessor p_227330_,  StructureTemplate.StructureBlockInfo p_227331_,  BlockPos p_227332_,  Rotation p_227333_,  RandomSource p_227334_,  BoundingBox p_227335_)`
- `public StructurePoolElement setProjection(StructureTemplatePool.Projection p_210479_)`
- `public StructureTemplatePool.Projection getProjection()`
- `public int getGroundLevelDelta()`
- `public static Function<StructureTemplatePool.Projection,EmptyPoolElement> empty()`
- `public static Function<StructureTemplatePool.Projection,LegacySinglePoolElement> legacy(String p_210508_)`
- `public static Function<StructureTemplatePool.Projection,LegacySinglePoolElement> legacy(String p_210513_,  Holder<StructureProcessorList> p_210514_)`
- `public static Function<StructureTemplatePool.Projection,SinglePoolElement> single(String p_210527_)`
- `public static Function<StructureTemplatePool.Projection,SinglePoolElement> single(String p_210532_,  Holder<StructureProcessorList> p_210533_)`
- `public static Function<StructureTemplatePool.Projection,FeaturePoolElement> feature(Holder<PlacedFeature> p_210503_)`
- `public static Function<StructureTemplatePool.Projection,ListPoolElement> list(List<Function<StructureTemplatePool.Projection,? extends StructurePoolElement>> p_210520_)`

## StructurePoolElementType

*interface* `net.minecraft.world.level.levelgen.structure.pools.StructurePoolElementType`

### Fields
- `static final StructurePoolElementType<SinglePoolElement> SINGLE`
- `static final StructurePoolElementType<ListPoolElement> LIST`
- `static final StructurePoolElementType<FeaturePoolElement> FEATURE`
- `static final StructurePoolElementType<EmptyPoolElement> EMPTY`
- `static final StructurePoolElementType<LegacySinglePoolElement> LEGACY`

### Methods
- `com.mojang.serialization.Codec<P> codec()`
- `static <P extends StructurePoolElement> StructurePoolElementType<P> register(String p_210551_,  com.mojang.serialization.Codec<P> p_210552_)`

## StructureTemplatePool

*class* `net.minecraft.world.level.levelgen.structure.pools.StructureTemplatePool`

### Fields
- `private static final int SIZE_UNSET` (= -2147483648)
- `private static final org.apache.commons.lang3.mutable.MutableObject<com.mojang.serialization.Codec<Holder<StructureTemplatePool>>> CODEC_REFERENCE`
- `public static final com.mojang.serialization.Codec<StructureTemplatePool> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<StructureTemplatePool>> CODEC`
- `private final List<com.mojang.datafixers.util.Pair<StructurePoolElement,Integer>> rawTemplates`
- `private final it.unimi.dsi.fastutil.objects.ObjectArrayList<StructurePoolElement> templates`
- `private final Holder<StructureTemplatePool> fallback`
- `private int maxSize`

### Methods
- `public int getMaxSize(StructureTemplateManager p_227358_)`
- `public Holder<StructureTemplatePool> getFallback()`
- `public StructurePoolElement getRandomTemplate(RandomSource p_227356_)`
- `public List<StructurePoolElement> getShuffledTemplates(RandomSource p_227363_)`
- `public int size()`
