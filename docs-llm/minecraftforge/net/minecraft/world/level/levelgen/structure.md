# net.minecraft.world.level.levelgen.structure

- [BoundingBox](#boundingbox)
- [BuiltinStructures](#builtinstructures)
- [BuiltinStructureSets](#builtinstructuresets)
- [Class StructureCheckResult](#class-structurecheckresult)
- [Class StructureSpawnOverride.BoundingBoxType](#class-structurespawnoverride.boundingboxtype)
- [Class TerrainAdjustment](#class-terrainadjustment)
- [LegacyStructureDataHandler](#legacystructuredatahandler)
- [PoolElementStructurePiece](#poolelementstructurepiece)
- [PostPlacementProcessor](#postplacementprocessor)
- [ScatteredFeaturePiece](#scatteredfeaturepiece)
- [SinglePieceStructure](#singlepiecestructure)
- [SinglePieceStructure.PieceConstructor](#singlepiecestructure.piececonstructor)
- [Structure](#structure)
- [Structure.GenerationContext](#structure.generationcontext)
- [Structure.GenerationStub](#structure.generationstub)
- [Structure.StructureSettings](#structure.structuresettings)
- [StructureCheck](#structurecheck)
- [StructureFeatureIndexSavedData](#structurefeatureindexsaveddata)
- [StructurePiece](#structurepiece)
- [StructurePiece.BlockSelector](#structurepiece.blockselector)
- [StructurePieceAccessor](#structurepieceaccessor)
- [StructureSet](#structureset)
- [StructureSet.StructureSelectionEntry](#structureset.structureselectionentry)
- [StructureSpawnOverride](#structurespawnoverride)
- [StructureStart](#structurestart)
- [StructureType](#structuretype)
- [TemplateStructurePiece](#templatestructurepiece)
## BoundingBox

*class* `net.minecraft.world.level.levelgen.structure.BoundingBox`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<BoundingBox> CODEC`
- `private int minX`
- `private int minY`
- `private int minZ`
- `private int maxX`
- `private int maxY`
- `private int maxZ`

### Methods
- `public static BoundingBox fromCorners(Vec3i p_162376_,  Vec3i p_162377_)`
- `public static BoundingBox infinite()`
- `public static BoundingBox orientBox(int p_71032_,  int p_71033_,  int p_71034_,  int p_71035_,  int p_71036_,  int p_71037_,  int p_71038_,  int p_71039_,  int p_71040_,  Direction p_71041_)`
- `public boolean intersects(BoundingBox p_71050_)`
- `public boolean intersects(int p_71020_,  int p_71021_,  int p_71022_,  int p_71023_)`
- `public static Optional<BoundingBox> encapsulatingPositions(Iterable<BlockPos> p_162379_)`
- `public static Optional<BoundingBox> encapsulatingBoxes(Iterable<BoundingBox> p_162389_)`
- `@Deprecated public BoundingBox encapsulate(BoundingBox p_162387_)` (deprecated)
- `@Deprecated public BoundingBox encapsulate(BlockPos p_162372_)` (deprecated)
- `@Deprecated public BoundingBox move(int p_162368_,  int p_162369_,  int p_162370_)` (deprecated)
- `@Deprecated public BoundingBox move(Vec3i p_162374_)` (deprecated)
- `public BoundingBox moved(int p_71046_,  int p_71047_,  int p_71048_)`
- `public BoundingBox inflatedBy(int p_191962_)`
- `public boolean isInside(Vec3i p_71052_)`
- `public boolean isInside(int p_261671_,  int p_261537_,  int p_261678_)`
- `public Vec3i getLength()`
- `public int getXSpan()`
- `public int getYSpan()`
- `public int getZSpan()`
- `public BlockPos getCenter()`
- `public void forAllCorners(Consumer<BlockPos> p_162381_)`
- `public String toString()`
- `public boolean equals(Object p_162393_)`
- `public int hashCode()`
- `public int minX()`
- `public int minY()`
- `public int minZ()`
- `public int maxX()`
- `public int maxY()`
- `public int maxZ()`

## BuiltinStructures

*interface* `net.minecraft.world.level.levelgen.structure.BuiltinStructures`

### Fields
- `static final ResourceKey<Structure> PILLAGER_OUTPOST`
- `static final ResourceKey<Structure> MINESHAFT`
- `static final ResourceKey<Structure> MINESHAFT_MESA`
- `static final ResourceKey<Structure> WOODLAND_MANSION`
- `static final ResourceKey<Structure> JUNGLE_TEMPLE`
- `static final ResourceKey<Structure> DESERT_PYRAMID`
- `static final ResourceKey<Structure> IGLOO`
- `static final ResourceKey<Structure> SHIPWRECK`
- `static final ResourceKey<Structure> SHIPWRECK_BEACHED`
- `static final ResourceKey<Structure> SWAMP_HUT`
- `static final ResourceKey<Structure> STRONGHOLD`
- `static final ResourceKey<Structure> OCEAN_MONUMENT`
- `static final ResourceKey<Structure> OCEAN_RUIN_COLD`
- `static final ResourceKey<Structure> OCEAN_RUIN_WARM`
- `static final ResourceKey<Structure> FORTRESS`
- `static final ResourceKey<Structure> NETHER_FOSSIL`
- `static final ResourceKey<Structure> END_CITY`
- `static final ResourceKey<Structure> BURIED_TREASURE`
- `static final ResourceKey<Structure> BASTION_REMNANT`
- `static final ResourceKey<Structure> VILLAGE_PLAINS`
- `static final ResourceKey<Structure> VILLAGE_DESERT`
- `static final ResourceKey<Structure> VILLAGE_SAVANNA`
- `static final ResourceKey<Structure> VILLAGE_SNOWY`
- `static final ResourceKey<Structure> VILLAGE_TAIGA`
- `static final ResourceKey<Structure> RUINED_PORTAL_STANDARD`
- `static final ResourceKey<Structure> RUINED_PORTAL_DESERT`
- `static final ResourceKey<Structure> RUINED_PORTAL_JUNGLE`
- `static final ResourceKey<Structure> RUINED_PORTAL_SWAMP`
- `static final ResourceKey<Structure> RUINED_PORTAL_MOUNTAIN`
- `static final ResourceKey<Structure> RUINED_PORTAL_OCEAN`
- `static final ResourceKey<Structure> RUINED_PORTAL_NETHER`
- `static final ResourceKey<Structure> ANCIENT_CITY`
- `static final ResourceKey<Structure> TRAIL_RUINS`

### Methods
- `private static ResourceKey<Structure> createKey(String p_209873_)`

## BuiltinStructureSets

*interface* `net.minecraft.world.level.levelgen.structure.BuiltinStructureSets`

### Fields
- `static final ResourceKey<StructureSet> VILLAGES`
- `static final ResourceKey<StructureSet> DESERT_PYRAMIDS`
- `static final ResourceKey<StructureSet> IGLOOS`
- `static final ResourceKey<StructureSet> JUNGLE_TEMPLES`
- `static final ResourceKey<StructureSet> SWAMP_HUTS`
- `static final ResourceKey<StructureSet> PILLAGER_OUTPOSTS`
- `static final ResourceKey<StructureSet> OCEAN_MONUMENTS`
- `static final ResourceKey<StructureSet> WOODLAND_MANSIONS`
- `static final ResourceKey<StructureSet> BURIED_TREASURES`
- `static final ResourceKey<StructureSet> MINESHAFTS`
- `static final ResourceKey<StructureSet> RUINED_PORTALS`
- `static final ResourceKey<StructureSet> SHIPWRECKS`
- `static final ResourceKey<StructureSet> OCEAN_RUINS`
- `static final ResourceKey<StructureSet> NETHER_COMPLEXES`
- `static final ResourceKey<StructureSet> NETHER_FOSSILS`
- `static final ResourceKey<StructureSet> END_CITIES`
- `static final ResourceKey<StructureSet> ANCIENT_CITIES`
- `static final ResourceKey<StructureSet> STRONGHOLDS`
- `static final ResourceKey<StructureSet> TRAIL_RUINS`

### Methods
- `private static ResourceKey<StructureSet> register(String p_209839_)`

## Class StructureCheckResult

*enum* `net.minecraft.world.level.levelgen.structure.Class StructureCheckResult`

### Methods
- `public static StructureCheckResult[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructureCheckResult valueOf(String name)`
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

## Class StructureSpawnOverride.BoundingBoxType

*enum* `net.minecraft.world.level.levelgen.structure.Class StructureSpawnOverride.BoundingBoxType`

Enclosing class: StructureSpawnOverride

### Fields
- `public static final com.mojang.serialization.Codec<StructureSpawnOverride.BoundingBoxType> CODEC`
- `private final String id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static StructureSpawnOverride.BoundingBoxType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructureSpawnOverride.BoundingBoxType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class TerrainAdjustment

*enum* `net.minecraft.world.level.levelgen.structure.Class TerrainAdjustment`

### Fields
- `public static final com.mojang.serialization.Codec<TerrainAdjustment> CODEC`
- `private final String id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static TerrainAdjustment[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TerrainAdjustment valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## LegacyStructureDataHandler

*class* `net.minecraft.world.level.levelgen.structure.LegacyStructureDataHandler`

### Fields
- `private static final Map<String,String> CURRENT_TO_LEGACY_MAP`
- `private static final Map<String,String> LEGACY_TO_CURRENT_MAP`
- `private static final Set<String> OLD_STRUCTURE_REGISTRY_KEYS`
- `private final boolean hasLegacyData`
- `private final Map<String,it.unimi.dsi.fastutil.longs.Long2ObjectMap<CompoundTag>> dataMap`
- `private final Map<String,StructureFeatureIndexSavedData> indexMap`
- `private final List<String> legacyKeys`
- `private final List<String> currentKeys`

### Methods
- `public void removeIndex(long p_71319_)`
- `public CompoundTag updateFromLegacy(CompoundTag p_71327_)`
- `private boolean hasLegacyStart(int p_71315_,  int p_71316_,  String p_71317_)`
- `private boolean isUnhandledStructureStart(int p_71312_,  int p_71313_)`
- `private CompoundTag updateStructureStart(CompoundTag p_71329_,  ChunkPos p_71330_)`
- `private void populateCaches(@Nullable  DimensionDataStorage p_71321_)`
- `public static LegacyStructureDataHandler getLegacyStructureHandler(ResourceKey<Level> p_71332_,  @Nullable  DimensionDataStorage p_71333_)`

## PoolElementStructurePiece

*class* `net.minecraft.world.level.levelgen.structure.PoolElementStructurePiece`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected final StructurePoolElement element`
- `protected BlockPos position`
- `private final int groundLevelDelta`
- `protected final Rotation rotation`
- `private final List<JigsawJunction> junctions`
- `private final StructureTemplateManager structureTemplateManager`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_192425_,  CompoundTag p_192426_)`
- `public void postProcess(WorldGenLevel p_226502_,  StructureManager p_226503_,  ChunkGenerator p_226504_,  RandomSource p_226505_,  BoundingBox p_226506_,  ChunkPos p_226507_,  BlockPos p_226508_)`
- `public void place(WorldGenLevel p_226510_,  StructureManager p_226511_,  ChunkGenerator p_226512_,  RandomSource p_226513_,  BoundingBox p_226514_,  BlockPos p_226515_,  boolean p_226516_)`
- `public void move(int p_72616_,  int p_72617_,  int p_72618_)`
- `public Rotation getRotation()`
- `public String toString()`
- `public StructurePoolElement getElement()`
- `public BlockPos getPosition()`
- `public int getGroundLevelDelta()`
- `public void addJunction(JigsawJunction p_209917_)`
- `public List<JigsawJunction> getJunctions()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## PostPlacementProcessor

*interface* `net.minecraft.world.level.levelgen.structure.PostPlacementProcessor`

### Fields
- `static final PostPlacementProcessor NONE`

### Methods
- `void afterPlace(WorldGenLevel p_226526_,  StructureManager p_226527_,  ChunkGenerator p_226528_,  RandomSource p_226529_,  BoundingBox p_226530_,  ChunkPos p_226531_,  PiecesContainer p_226532_)`

## ScatteredFeaturePiece

*class* `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`

### Fields
- `protected final int width`
- `protected final int height`
- `protected final int depth`
- `protected int heightPosition`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_192471_,  CompoundTag p_192472_)`
- `protected boolean updateAverageGroundHeight(LevelAccessor p_72804_,  BoundingBox p_72805_,  int p_72806_)`
- `protected boolean updateHeightPositionToLowestGroundHeight(LevelAccessor p_192468_,  int p_192469_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `postProcess`, `reorient`, `setGenDepth`, `setOrientation`

## SinglePieceStructure

*class* `net.minecraft.world.level.levelgen.structure.SinglePieceStructure`

### Fields
- `private final SinglePieceStructure.PieceConstructor constructor`
- `private final int width`
- `private final int depth`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `CODEC`, `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_226542_)`
- `private void generatePieces(StructurePiecesBuilder p_226547_,  Structure.GenerationContext p_226548_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`, `type`

## SinglePieceStructure.PieceConstructor

*interface* `net.minecraft.world.level.levelgen.structure.SinglePieceStructure.PieceConstructor`

Enclosing class: SinglePieceStructure

### Methods
- `StructurePiece construct(WorldgenRandom p_226550_,  int p_226551_,  int p_226552_)`

## Structure

*class* `net.minecraft.world.level.levelgen.structure.Structure`

### Fields
- `public static final com.mojang.serialization.Codec<Structure> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<Structure>> CODEC`
- `private final Structure.StructureSettings settings`
- `private final ModifiableStructureInfo modifiableStructureInfo`

### Methods
- `public static <S extends Structure> com.mojang.serialization.codecs.RecordCodecBuilder<S,Structure.StructureSettings> settingsCodec(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<S> p_226568_)`
- `public static <S extends Structure> com.mojang.serialization.Codec<S> simpleCodec(Function<Structure.StructureSettings,S> p_226608_)`
- `public HolderSet<Biome> biomes()`
- `public Map<MobCategory,StructureSpawnOverride> spawnOverrides()`
- `public GenerationStep.Decoration step()`
- `public TerrainAdjustment terrainAdaptation()`
- `public BoundingBox adjustBoundingBox(BoundingBox p_226570_)`
- `public StructureStart generate(RegistryAccess p_226597_,  ChunkGenerator p_226598_,  BiomeSource p_226599_,  RandomState p_226600_,  StructureTemplateManager p_226601_,  long p_226602_,  ChunkPos p_226603_,  int p_226604_,  LevelHeightAccessor p_226605_,  Predicate<Holder<Biome>> p_226606_)`
- `protected static Optional<Structure.GenerationStub> onTopOfChunkCenter(Structure.GenerationContext p_226586_,  Heightmap.Types p_226587_,  Consumer<StructurePiecesBuilder> p_226588_)`
- `private static boolean isValidBiome(Structure.GenerationStub p_263042_,  Structure.GenerationContext p_263005_)`
- `public void afterPlace(WorldGenLevel p_226560_,  StructureManager p_226561_,  ChunkGenerator p_226562_,  RandomSource p_226563_,  BoundingBox p_226564_,  ChunkPos p_226565_,  PiecesContainer p_226566_)`
- `private static int[] getCornerHeights(Structure.GenerationContext p_226614_,  int p_226615_,  int p_226616_,  int p_226617_,  int p_226618_)`
- `protected static int getLowestY(Structure.GenerationContext p_226573_,  int p_226574_,  int p_226575_)`
- `protected static int getLowestY(Structure.GenerationContext p_226577_,  int p_226578_,  int p_226579_,  int p_226580_,  int p_226581_)`
- `@Deprecated protected BlockPos getLowestYIn5by5BoxOffset7Blocks(Structure.GenerationContext p_226583_,  Rotation p_226584_)` (deprecated)
- `protected abstract Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_226571_)`
- `public Optional<Structure.GenerationStub> findValidGenerationPoint(Structure.GenerationContext p_263060_)`
- `public abstract StructureType<?> type()`
- `public ModifiableStructureInfo modifiableStructureInfo()`
  Returns Cache of original structure data and structure data modified by structure modifiers.
   Modified structure data is set by server after datapacks and serverconfigs load.
   Settings field reads are coremodded to redirect to this.
  - returns: Cache of original structure data and structure data modified by structure modifiers
- `public Structure.StructureSettings getModifiedStructureSettings()`
  Returns The structure's settings, with modifications if called after modifiers are applied in server init..
  - returns: The structure's settings, with modifications if called after modifiers are applied in server init.

## Structure.GenerationContext

*record* `net.minecraft.world.level.levelgen.structure.Structure.GenerationContext`

Enclosing class: Structure

### Fields
- `private final RegistryAccess registryAccess`
  The field for the registryAccess record component.
- `private final ChunkGenerator chunkGenerator`
  The field for the chunkGenerator record component.
- `private final BiomeSource biomeSource`
  The field for the biomeSource record component.
- `private final RandomState randomState`
  The field for the randomState record component.
- `private final StructureTemplateManager structureTemplateManager`
  The field for the structureTemplateManager record component.
- `private final WorldgenRandom random`
  The field for the random record component.
- `private final long seed`
  The field for the seed record component.
- `private final ChunkPos chunkPos`
  The field for the chunkPos record component.
- `private final LevelHeightAccessor heightAccessor`
  The field for the heightAccessor record component.
- `private final Predicate<Holder<Biome>> validBiome`
  The field for the validBiome record component.

### Methods
- `private static WorldgenRandom makeRandom(long p_226654_,  ChunkPos p_226655_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public RegistryAccess registryAccess()`
  Returns the value of the registryAccess record component.
  - returns: the value of the registryAccess record component
- `public ChunkGenerator chunkGenerator()`
  Returns the value of the chunkGenerator record component.
  - returns: the value of the chunkGenerator record component
- `public BiomeSource biomeSource()`
  Returns the value of the biomeSource record component.
  - returns: the value of the biomeSource record component
- `public RandomState randomState()`
  Returns the value of the randomState record component.
  - returns: the value of the randomState record component
- `public StructureTemplateManager structureTemplateManager()`
  Returns the value of the structureTemplateManager record component.
  - returns: the value of the structureTemplateManager record component
- `public WorldgenRandom random()`
  Returns the value of the random record component.
  - returns: the value of the random record component
- `public long seed()`
  Returns the value of the seed record component.
  - returns: the value of the seed record component
- `public ChunkPos chunkPos()`
  Returns the value of the chunkPos record component.
  - returns: the value of the chunkPos record component
- `public LevelHeightAccessor heightAccessor()`
  Returns the value of the heightAccessor record component.
  - returns: the value of the heightAccessor record component
- `public Predicate<Holder<Biome>> validBiome()`
  Returns the value of the validBiome record component.
  - returns: the value of the validBiome record component

## Structure.GenerationStub

*record* `net.minecraft.world.level.levelgen.structure.Structure.GenerationStub`

Enclosing class: Structure

### Fields
- `private final BlockPos position`
  The field for the position record component.
- `private final com.mojang.datafixers.util.Either<Consumer<StructurePiecesBuilder>,StructurePiecesBuilder> generator`
  The field for the generator record component.

### Methods
- `public StructurePiecesBuilder getPiecesBuilder()`
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
- `public BlockPos position()`
  Returns the value of the position record component.
  - returns: the value of the position record component
- `public com.mojang.datafixers.util.Either<Consumer<StructurePiecesBuilder>,StructurePiecesBuilder> generator()`
  Returns the value of the generator record component.
  - returns: the value of the generator record component

## Structure.StructureSettings

*record* `net.minecraft.world.level.levelgen.structure.Structure.StructureSettings`

Enclosing class: Structure

### Fields
- `private final HolderSet<Biome> biomes`
  The field for the biomes record component.
- `private final Map<MobCategory,StructureSpawnOverride> spawnOverrides`
  The field for the spawnOverrides record component.
- `private final GenerationStep.Decoration step`
  The field for the step record component.
- `private final TerrainAdjustment terrainAdaptation`
  The field for the terrainAdaptation record component.
- `public static final com.mojang.serialization.MapCodec<Structure.StructureSettings> CODEC`

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
- `public HolderSet<Biome> biomes()`
  Returns the value of the biomes record component.
  - returns: the value of the biomes record component
- `public Map<MobCategory,StructureSpawnOverride> spawnOverrides()`
  Returns the value of the spawnOverrides record component.
  - returns: the value of the spawnOverrides record component
- `public GenerationStep.Decoration step()`
  Returns the value of the step record component.
  - returns: the value of the step record component
- `public TerrainAdjustment terrainAdaptation()`
  Returns the value of the terrainAdaptation record component.
  - returns: the value of the terrainAdaptation record component

## StructureCheck

*class* `net.minecraft.world.level.levelgen.structure.StructureCheck`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int NO_STRUCTURE` (= -1)
- `private final ChunkScanAccess storageAccess`
- `private final RegistryAccess registryAccess`
- `private final Registry<Biome> biomes`
- `private final Registry<Structure> structureConfigs`
- `private final StructureTemplateManager structureTemplateManager`
- `private final ResourceKey<Level> dimension`
- `private final ChunkGenerator chunkGenerator`
- `private final RandomState randomState`
- `private final LevelHeightAccessor heightAccessor`
- `private final BiomeSource biomeSource`
- `private final long seed`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private final it.unimi.dsi.fastutil.longs.Long2ObjectMap<it.unimi.dsi.fastutil.objects.Object2IntMap<Structure>> loadedChunks`
- `private final Map<Structure,it.unimi.dsi.fastutil.longs.Long2BooleanMap> featureChecks`

### Methods
- `public StructureCheckResult checkStart(ChunkPos p_226730_,  Structure p_226731_,  boolean p_226732_)`
- `private boolean canCreateStructure(ChunkPos p_226756_,  Structure p_226757_)`
- `@Nullable private StructureCheckResult tryLoadFromStorage(ChunkPos p_226734_,  Structure p_226735_,  boolean p_226736_,  long p_226737_)`
- `@Nullable private it.unimi.dsi.fastutil.objects.Object2IntMap<Structure> loadStructures(CompoundTag p_197312_)`
- `private static it.unimi.dsi.fastutil.objects.Object2IntMap<Structure> deduplicateEmptyMap(it.unimi.dsi.fastutil.objects.Object2IntMap<Structure> p_197299_)`
- `private StructureCheckResult checkStructureInfo(it.unimi.dsi.fastutil.objects.Object2IntMap<Structure> p_226752_,  Structure p_226753_,  boolean p_226754_)`
- `public void onStructureLoad(ChunkPos p_197283_,  Map<Structure,StructureStart> p_197284_)`
- `private void storeFullResults(long p_197264_,  it.unimi.dsi.fastutil.objects.Object2IntMap<Structure> p_197265_)`
- `public void incrementReference(ChunkPos p_226723_,  Structure p_226724_)`

## StructureFeatureIndexSavedData

*class* `net.minecraft.world.level.levelgen.structure.StructureFeatureIndexSavedData`

### Fields
- `private static final String TAG_REMAINING_INDEXES` (= "Remaining")
- `private static final String TAG_All_INDEXES` (= "All")
- `private final it.unimi.dsi.fastutil.longs.LongSet all`
- `private final it.unimi.dsi.fastutil.longs.LongSet remaining`

### Methods
- `public static SavedData.Factory<StructureFeatureIndexSavedData> factory()`
- `public static StructureFeatureIndexSavedData load(CompoundTag p_163535_)`
- `public CompoundTag save(CompoundTag p_73372_)`
- `public void addIndex(long p_73366_)`
- `public boolean hasStartIndex(long p_73370_)`
- `public boolean hasUnhandledIndex(long p_73374_)`
- `public void removeIndex(long p_73376_)`
- `public it.unimi.dsi.fastutil.longs.LongSet getAll()`

### Inherited methods
- from `net.minecraft.world.level.saveddata.SavedData`: `isDirty`, `save`, `setDirty`, `setDirty`

## StructurePiece

*class* `net.minecraft.world.level.levelgen.structure.StructurePiece`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected static final BlockState CAVE_AIR`
- `protected BoundingBox boundingBox`
- `@Nullable private Direction orientation`
- `private Mirror mirror`
- `private Rotation rotation`
- `protected int genDepth`
- `private final StructurePieceType type`
- `private static final Set<Block> SHAPE_CHECK_BLOCKS`

### Methods
- `protected static BoundingBox makeBoundingBox(int p_163542_,  int p_163543_,  int p_163544_,  Direction p_163545_,  int p_163546_,  int p_163547_,  int p_163548_)`
- `protected static Direction getRandomHorizontalDirection(RandomSource p_226761_)`
- `public final CompoundTag createTag(StructurePieceSerializationContext p_192645_)`
- `protected abstract void addAdditionalSaveData(StructurePieceSerializationContext p_192646_,  CompoundTag p_192647_)`
- `public void addChildren(StructurePiece p_226835_,  StructurePieceAccessor p_226836_,  RandomSource p_226837_)`
- `public abstract void postProcess(WorldGenLevel p_226769_,  StructureManager p_226770_,  ChunkGenerator p_226771_,  RandomSource p_226772_,  BoundingBox p_226773_,  ChunkPos p_226774_,  BlockPos p_226775_)`
- `public BoundingBox getBoundingBox()`
- `public int getGenDepth()`
- `public void setGenDepth(int p_226759_)`
- `public boolean isCloseToChunk(ChunkPos p_73412_,  int p_73413_)`
- `public BlockPos getLocatorPosition()`
- `protected BlockPos.MutableBlockPos getWorldPos(int p_163583_,  int p_163584_,  int p_163585_)`
- `protected int getWorldX(int p_73393_,  int p_73394_)`
- `protected int getWorldY(int p_73545_)`
- `protected int getWorldZ(int p_73526_,  int p_73527_)`
- `protected void placeBlock(WorldGenLevel p_73435_,  BlockState p_73436_,  int p_73437_,  int p_73438_,  int p_73439_,  BoundingBox p_73440_)`
- `protected boolean canBeReplaced(LevelReader p_163553_,  int p_163554_,  int p_163555_,  int p_163556_,  BoundingBox p_163557_)`
- `protected BlockState getBlock(BlockGetter p_73399_,  int p_73400_,  int p_73401_,  int p_73402_,  BoundingBox p_73403_)`
- `protected boolean isInterior(LevelReader p_73415_,  int p_73416_,  int p_73417_,  int p_73418_,  BoundingBox p_73419_)`
- `protected void generateAirBox(WorldGenLevel p_73536_,  BoundingBox p_73537_,  int p_73538_,  int p_73539_,  int p_73540_,  int p_73541_,  int p_73542_,  int p_73543_)`
- `protected void generateBox(WorldGenLevel p_73442_,  BoundingBox p_73443_,  int p_73444_,  int p_73445_,  int p_73446_,  int p_73447_,  int p_73448_,  int p_73449_,  BlockState p_73450_,  BlockState p_73451_,  boolean p_73452_)`
- `protected void generateBox(WorldGenLevel p_163559_,  BoundingBox p_163560_,  BoundingBox p_163561_,  BlockState p_163562_,  BlockState p_163563_,  boolean p_163564_)`
- `protected void generateBox(WorldGenLevel p_226777_,  BoundingBox p_226778_,  int p_226779_,  int p_226780_,  int p_226781_,  int p_226782_,  int p_226783_,  int p_226784_,  boolean p_226785_,  RandomSource p_226786_,  StructurePiece.BlockSelector p_226787_)`
- `protected void generateBox(WorldGenLevel p_226829_,  BoundingBox p_226830_,  BoundingBox p_226831_,  boolean p_226832_,  RandomSource p_226833_,  StructurePiece.BlockSelector p_226834_)`
- `protected void generateMaybeBox(WorldGenLevel p_226789_,  BoundingBox p_226790_,  RandomSource p_226791_,  float p_226792_,  int p_226793_,  int p_226794_,  int p_226795_,  int p_226796_,  int p_226797_,  int p_226798_,  BlockState p_226799_,  BlockState p_226800_,  boolean p_226801_,  boolean p_226802_)`
- `protected void maybeGenerateBlock(WorldGenLevel p_226804_,  BoundingBox p_226805_,  RandomSource p_226806_,  float p_226807_,  int p_226808_,  int p_226809_,  int p_226810_,  BlockState p_226811_)`
- `protected void generateUpperHalfSphere(WorldGenLevel p_73454_,  BoundingBox p_73455_,  int p_73456_,  int p_73457_,  int p_73458_,  int p_73459_,  int p_73460_,  int p_73461_,  BlockState p_73462_,  boolean p_73463_)`
- `protected void fillColumnDown(WorldGenLevel p_73529_,  BlockState p_73530_,  int p_73531_,  int p_73532_,  int p_73533_,  BoundingBox p_73534_)`
- `protected boolean isReplaceableByStructures(BlockState p_163573_)`
- `protected boolean createChest(WorldGenLevel p_226812_,  BoundingBox p_226813_,  RandomSource p_226814_,  int p_226815_,  int p_226816_,  int p_226817_,  ResourceLocation p_226818_)`
- `public static BlockState reorient(BlockGetter p_73408_,  BlockPos p_73409_,  BlockState p_73410_)`
- `protected boolean createChest(ServerLevelAccessor p_226763_,  BoundingBox p_226764_,  RandomSource p_226765_,  BlockPos p_226766_,  ResourceLocation p_226767_,  @Nullable  BlockState p_226768_)`
- `protected boolean createDispenser(WorldGenLevel p_226820_,  BoundingBox p_226821_,  RandomSource p_226822_,  int p_226823_,  int p_226824_,  int p_226825_,  Direction p_226826_,  ResourceLocation p_226827_)`
- `public void move(int p_73395_,  int p_73396_,  int p_73397_)`
- `public static BoundingBox createBoundingBox(Stream<StructurePiece> p_192652_)`
- `@Nullable public static StructurePiece findCollisionPiece(List<StructurePiece> p_192649_,  BoundingBox p_192650_)`
- `@Nullable public Direction getOrientation()`
- `public void setOrientation(@Nullable  Direction p_73520_)`
- `public Rotation getRotation()`
- `public Mirror getMirror()`
- `public StructurePieceType getType()`

## StructurePiece.BlockSelector

*class* `net.minecraft.world.level.levelgen.structure.StructurePiece.BlockSelector`

Enclosing class: StructurePiece

### Fields
- `protected BlockState next`

### Methods
- `public abstract void next(RandomSource p_226838_,  int p_226839_,  int p_226840_,  int p_226841_,  boolean p_226842_)`
- `public BlockState getNext()`

## StructurePieceAccessor

*interface* `net.minecraft.world.level.levelgen.structure.StructurePieceAccessor`

### Methods
- `void addPiece(StructurePiece p_163589_)`
- `@Nullable StructurePiece findCollisionPiece(BoundingBox p_163588_)`

## StructureSet

*record* `net.minecraft.world.level.levelgen.structure.StructureSet`

### Fields
- `private final List<StructureSet.StructureSelectionEntry> structures`
  The field for the structures record component.
- `private final StructurePlacement placement`
  The field for the placement record component.
- `public static final com.mojang.serialization.Codec<StructureSet> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<StructureSet>> CODEC`

### Methods
- `public static StructureSet.StructureSelectionEntry entry(Holder<Structure> p_210018_,  int p_210019_)`
- `public static StructureSet.StructureSelectionEntry entry(Holder<Structure> p_210016_)`
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
- `public List<StructureSet.StructureSelectionEntry> structures()`
  Returns the value of the structures record component.
  - returns: the value of the structures record component
- `public StructurePlacement placement()`
  Returns the value of the placement record component.
  - returns: the value of the placement record component

## StructureSet.StructureSelectionEntry

*record* `net.minecraft.world.level.levelgen.structure.StructureSet.StructureSelectionEntry`

Enclosing class: StructureSet

### Fields
- `private final Holder<Structure> structure`
  The field for the structure record component.
- `private final int weight`
  The field for the weight record component.
- `public static final com.mojang.serialization.Codec<StructureSet.StructureSelectionEntry> CODEC`

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Holder<Structure> structure()`
  Returns the value of the structure record component.
  - returns: the value of the structure record component
- `public int weight()`
  Returns the value of the weight record component.
  - returns: the value of the weight record component

## StructureSpawnOverride

*record* `net.minecraft.world.level.levelgen.structure.StructureSpawnOverride`

### Fields
- `private final StructureSpawnOverride.BoundingBoxType boundingBox`
  The field for the boundingBox record component.
- `private final WeightedRandomList<MobSpawnSettings.SpawnerData> spawns`
  The field for the spawns record component.
- `public static final com.mojang.serialization.Codec<StructureSpawnOverride> CODEC`

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
- `public StructureSpawnOverride.BoundingBoxType boundingBox()`
  Returns the value of the boundingBox record component.
  - returns: the value of the boundingBox record component
- `public WeightedRandomList<MobSpawnSettings.SpawnerData> spawns()`
  Returns the value of the spawns record component.
  - returns: the value of the spawns record component

## StructureStart

*class* `net.minecraft.world.level.levelgen.structure.StructureStart`

### Fields
- `public static final String INVALID_START_ID` (= "INVALID")
- `public static final StructureStart INVALID_START`
- `private static final org.slf4j.Logger LOGGER`
- `private final Structure structure`
- `private final PiecesContainer pieceContainer`
- `private final ChunkPos chunkPos`
- `private int references`
- `@Nullable private volatile BoundingBox cachedBoundingBox`

### Methods
- `@Nullable public static StructureStart loadStaticStart(StructurePieceSerializationContext p_226858_,  CompoundTag p_226859_,  long p_226860_)`
- `public BoundingBox getBoundingBox()`
- `public void placeInChunk(WorldGenLevel p_226851_,  StructureManager p_226852_,  ChunkGenerator p_226853_,  RandomSource p_226854_,  BoundingBox p_226855_,  ChunkPos p_226856_)`
- `public CompoundTag createTag(StructurePieceSerializationContext p_192661_,  ChunkPos p_192662_)`
- `public boolean isValid()`
- `public ChunkPos getChunkPos()`
- `public boolean canBeReferenced()`
- `public void addReference()`
- `public int getReferences()`
- `protected int getMaxReferences()`
- `public Structure getStructure()`
- `public List<StructurePiece> getPieces()`

## StructureType

*interface* `net.minecraft.world.level.levelgen.structure.StructureType`

### Fields
- `static final StructureType<BuriedTreasureStructure> BURIED_TREASURE`
- `static final StructureType<DesertPyramidStructure> DESERT_PYRAMID`
- `static final StructureType<EndCityStructure> END_CITY`
- `static final StructureType<NetherFortressStructure> FORTRESS`
- `static final StructureType<IglooStructure> IGLOO`
- `static final StructureType<JigsawStructure> JIGSAW`
- `static final StructureType<JungleTempleStructure> JUNGLE_TEMPLE`
- `static final StructureType<MineshaftStructure> MINESHAFT`
- `static final StructureType<NetherFossilStructure> NETHER_FOSSIL`
- `static final StructureType<OceanMonumentStructure> OCEAN_MONUMENT`
- `static final StructureType<OceanRuinStructure> OCEAN_RUIN`
- `static final StructureType<RuinedPortalStructure> RUINED_PORTAL`
- `static final StructureType<ShipwreckStructure> SHIPWRECK`
- `static final StructureType<StrongholdStructure> STRONGHOLD`
- `static final StructureType<SwampHutStructure> SWAMP_HUT`
- `static final StructureType<WoodlandMansionStructure> WOODLAND_MANSION`

### Methods
- `com.mojang.serialization.Codec<S> codec()`
- `private static <S extends Structure> StructureType<S> register(String p_226882_,  com.mojang.serialization.Codec<S> p_226883_)`

## TemplateStructurePiece

*class* `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected final String templateName`
- `protected StructureTemplate template`
- `protected StructurePlaceSettings placeSettings`
- `protected BlockPos templatePosition`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected ResourceLocation makeTemplateLocation()`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_192690_,  CompoundTag p_192691_)`
- `public void postProcess(WorldGenLevel p_226899_,  StructureManager p_226900_,  ChunkGenerator p_226901_,  RandomSource p_226902_,  BoundingBox p_226903_,  ChunkPos p_226904_,  BlockPos p_226905_)`
- `protected abstract void handleDataMarker(String p_226906_,  BlockPos p_226907_,  ServerLevelAccessor p_226908_,  RandomSource p_226909_,  BoundingBox p_226910_)`
- `@Deprecated public void move(int p_73668_,  int p_73669_,  int p_73670_)` (deprecated)
- `public Rotation getRotation()`
- `public StructureTemplate template()`
- `public BlockPos templatePosition()`
- `public StructurePlaceSettings placeSettings()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`
