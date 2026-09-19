# net.minecraft.world.level.levelgen.structure.pieces

- [PieceGenerator](#piecegenerator)
- [PieceGenerator.Context](#piecegenerator.context)
- [PieceGeneratorSupplier](#piecegeneratorsupplier)
- [PieceGeneratorSupplier.Context](#piecegeneratorsupplier.context)
- [PiecesContainer](#piecescontainer)
- [StructurePiecesBuilder](#structurepiecesbuilder)
- [StructurePieceSerializationContext](#structurepieceserializationcontext)
- [StructurePieceType](#structurepiecetype)
- [StructurePieceType.ContextlessType](#structurepiecetype.contextlesstype)
- [StructurePieceType.StructureTemplateType](#structurepiecetype.structuretemplatetype)
## PieceGenerator

*interface* `net.minecraft.world.level.levelgen.structure.pieces.PieceGenerator`

### Methods
- `void generatePieces(StructurePiecesBuilder p_197326_,  PieceGenerator.Context<C> p_197327_)`

## PieceGenerator.Context

*record* `net.minecraft.world.level.levelgen.structure.pieces.PieceGenerator.Context`

Enclosing interface: PieceGenerator<C extends FeatureConfiguration>

### Fields
- `private final C extends FeatureConfiguration config`
  The field for the config record component.
- `private final ChunkGenerator chunkGenerator`
  The field for the chunkGenerator record component.
- `private final StructureTemplateManager structureTemplateManager`
  The field for the structureTemplateManager record component.
- `private final ChunkPos chunkPos`
  The field for the chunkPos record component.
- `private final LevelHeightAccessor heightAccessor`
  The field for the heightAccessor record component.
- `private final WorldgenRandom random`
  The field for the random record component.
- `private final long seed`
  The field for the seed record component.

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
- `public C config()`
  Returns the value of the config record component.
  - returns: the value of the config record component
- `public ChunkGenerator chunkGenerator()`
  Returns the value of the chunkGenerator record component.
  - returns: the value of the chunkGenerator record component
- `public StructureTemplateManager structureTemplateManager()`
  Returns the value of the structureTemplateManager record component.
  - returns: the value of the structureTemplateManager record component
- `public ChunkPos chunkPos()`
  Returns the value of the chunkPos record component.
  - returns: the value of the chunkPos record component
- `public LevelHeightAccessor heightAccessor()`
  Returns the value of the heightAccessor record component.
  - returns: the value of the heightAccessor record component
- `public WorldgenRandom random()`
  Returns the value of the random record component.
  - returns: the value of the random record component
- `public long seed()`
  Returns the value of the seed record component.
  - returns: the value of the seed record component

## PieceGeneratorSupplier

*interface* `net.minecraft.world.level.levelgen.structure.pieces.PieceGeneratorSupplier`

### Methods
- `Optional<PieceGenerator<C>> createGenerator(PieceGeneratorSupplier.Context<C> p_197348_)`
- `static <C extends FeatureConfiguration> PieceGeneratorSupplier<C> simple(Predicate<PieceGeneratorSupplier.Context<C>> p_197350_,  PieceGenerator<C> p_197351_)`
- `static <C extends FeatureConfiguration> Predicate<PieceGeneratorSupplier.Context<C>> checkForBiomeOnTop(Heightmap.Types p_197346_)`

## PieceGeneratorSupplier.Context

*record* `net.minecraft.world.level.levelgen.structure.pieces.PieceGeneratorSupplier.Context`

Enclosing interface: PieceGeneratorSupplier<C extends FeatureConfiguration>

### Fields
- `private final ChunkGenerator chunkGenerator`
  The field for the chunkGenerator record component.
- `private final BiomeSource biomeSource`
  The field for the biomeSource record component.
- `private final RandomState randomState`
  The field for the randomState record component.
- `private final long seed`
  The field for the seed record component.
- `private final ChunkPos chunkPos`
  The field for the chunkPos record component.
- `private final C extends FeatureConfiguration config`
  The field for the config record component.
- `private final LevelHeightAccessor heightAccessor`
  The field for the heightAccessor record component.
- `private final Predicate<Holder<Biome>> validBiome`
  The field for the validBiome record component.
- `private final StructureTemplateManager structureTemplateManager`
  The field for the structureTemplateManager record component.
- `private final RegistryAccess registryAccess`
  The field for the registryAccess record component.

### Methods
- `public boolean validBiomeOnTop(Heightmap.Types p_197381_)`
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
- `public ChunkGenerator chunkGenerator()`
  Returns the value of the chunkGenerator record component.
  - returns: the value of the chunkGenerator record component
- `public BiomeSource biomeSource()`
  Returns the value of the biomeSource record component.
  - returns: the value of the biomeSource record component
- `public RandomState randomState()`
  Returns the value of the randomState record component.
  - returns: the value of the randomState record component
- `public long seed()`
  Returns the value of the seed record component.
  - returns: the value of the seed record component
- `public ChunkPos chunkPos()`
  Returns the value of the chunkPos record component.
  - returns: the value of the chunkPos record component
- `public C config()`
  Returns the value of the config record component.
  - returns: the value of the config record component
- `public LevelHeightAccessor heightAccessor()`
  Returns the value of the heightAccessor record component.
  - returns: the value of the heightAccessor record component
- `public Predicate<Holder<Biome>> validBiome()`
  Returns the value of the validBiome record component.
  - returns: the value of the validBiome record component
- `public StructureTemplateManager structureTemplateManager()`
  Returns the value of the structureTemplateManager record component.
  - returns: the value of the structureTemplateManager record component
- `public RegistryAccess registryAccess()`
  Returns the value of the registryAccess record component.
  - returns: the value of the registryAccess record component

## PiecesContainer

*record* `net.minecraft.world.level.levelgen.structure.pieces.PiecesContainer`

### Fields
- `private final List<StructurePiece> pieces`
  The field for the pieces record component.
- `private static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation JIGSAW_RENAME`
- `private static final Map<ResourceLocation,ResourceLocation> RENAMES`

### Methods
- `public boolean isEmpty()`
- `public boolean isInsidePiece(BlockPos p_192752_)`
- `public Tag save(StructurePieceSerializationContext p_192750_)`
- `public static PiecesContainer load(ListTag p_192754_,  StructurePieceSerializationContext p_192755_)`
- `public BoundingBox calculateBoundingBox()`
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
- `public List<StructurePiece> pieces()`
  Returns the value of the pieces record component.
  - returns: the value of the pieces record component

## StructurePiecesBuilder

*class* `net.minecraft.world.level.levelgen.structure.pieces.StructurePiecesBuilder`

### Fields
- `private final List<StructurePiece> pieces`

### Methods
- `public void addPiece(StructurePiece p_192791_)`
- `@Nullable public StructurePiece findCollisionPiece(BoundingBox p_192789_)`
- `@Deprecated public void offsetPiecesVertically(int p_192782_)` (deprecated)
- `@Deprecated public int moveBelowSeaLevel(int p_226966_,  int p_226967_,  RandomSource p_226968_,  int p_226969_)` (deprecated)
- `public void moveInsideHeights(RandomSource p_226971_,  int p_226972_,  int p_226973_)` (deprecated)
- `public PiecesContainer build()`
- `public void clear()`
- `public boolean isEmpty()`
- `public BoundingBox getBoundingBox()`

## StructurePieceSerializationContext

*record* `net.minecraft.world.level.levelgen.structure.pieces.StructurePieceSerializationContext`

### Fields
- `private final ResourceManager resourceManager`
  The field for the resourceManager record component.
- `private final RegistryAccess registryAccess`
  The field for the registryAccess record component.
- `private final StructureTemplateManager structureTemplateManager`
  The field for the structureTemplateManager record component.

### Methods
- `public static StructurePieceSerializationContext fromLevel(ServerLevel p_192771_)`
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
- `public ResourceManager resourceManager()`
  Returns the value of the resourceManager record component.
  - returns: the value of the resourceManager record component
- `public RegistryAccess registryAccess()`
  Returns the value of the registryAccess record component.
  - returns: the value of the registryAccess record component
- `public StructureTemplateManager structureTemplateManager()`
  Returns the value of the structureTemplateManager record component.
  - returns: the value of the structureTemplateManager record component

## StructurePieceType

*interface* `net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType`

### Fields
- `static final StructurePieceType MINE_SHAFT_CORRIDOR`
- `static final StructurePieceType MINE_SHAFT_CROSSING`
- `static final StructurePieceType MINE_SHAFT_ROOM`
- `static final StructurePieceType MINE_SHAFT_STAIRS`
- `static final StructurePieceType NETHER_FORTRESS_BRIDGE_CROSSING`
- `static final StructurePieceType NETHER_FORTRESS_BRIDGE_END_FILLER`
- `static final StructurePieceType NETHER_FORTRESS_BRIDGE_STRAIGHT`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_ENTRANCE`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN`
- `static final StructurePieceType NETHER_FORTRESS_CASTLE_STALK_ROOM`
- `static final StructurePieceType NETHER_FORTRESS_MONSTER_THRONE`
- `static final StructurePieceType NETHER_FORTRESS_ROOM_CROSSING`
- `static final StructurePieceType NETHER_FORTRESS_STAIRS_ROOM`
- `static final StructurePieceType NETHER_FORTRESS_START`
- `static final StructurePieceType STRONGHOLD_CHEST_CORRIDOR`
- `static final StructurePieceType STRONGHOLD_FILLER_CORRIDOR`
- `static final StructurePieceType STRONGHOLD_FIVE_CROSSING`
- `static final StructurePieceType STRONGHOLD_LEFT_TURN`
- `static final StructurePieceType STRONGHOLD_LIBRARY`
- `static final StructurePieceType STRONGHOLD_PORTAL_ROOM`
- `static final StructurePieceType STRONGHOLD_PRISON_HALL`
- `static final StructurePieceType STRONGHOLD_RIGHT_TURN`
- `static final StructurePieceType STRONGHOLD_ROOM_CROSSING`
- `static final StructurePieceType STRONGHOLD_STAIRS_DOWN`
- `static final StructurePieceType STRONGHOLD_START`
- `static final StructurePieceType STRONGHOLD_STRAIGHT`
- `static final StructurePieceType STRONGHOLD_STRAIGHT_STAIRS_DOWN`
- `static final StructurePieceType JUNGLE_PYRAMID_PIECE`
- `static final StructurePieceType OCEAN_RUIN`
- `static final StructurePieceType IGLOO`
- `static final StructurePieceType RUINED_PORTAL`
- `static final StructurePieceType SWAMPLAND_HUT`
- `static final StructurePieceType DESERT_PYRAMID_PIECE`
- `static final StructurePieceType OCEAN_MONUMENT_BUILDING`
- `static final StructurePieceType OCEAN_MONUMENT_CORE_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_DOUBLE_X_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_DOUBLE_XY_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_DOUBLE_Y_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_DOUBLE_YZ_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_DOUBLE_Z_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_ENTRY_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_PENTHOUSE`
- `static final StructurePieceType OCEAN_MONUMENT_SIMPLE_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_SIMPLE_TOP_ROOM`
- `static final StructurePieceType OCEAN_MONUMENT_WING_ROOM`
- `static final StructurePieceType END_CITY_PIECE`
- `static final StructurePieceType WOODLAND_MANSION_PIECE`
- `static final StructurePieceType BURIED_TREASURE_PIECE`
- `static final StructurePieceType SHIPWRECK_PIECE`
- `static final StructurePieceType NETHER_FOSSIL`
- `static final StructurePieceType JIGSAW`

### Methods
- `StructurePiece load(StructurePieceSerializationContext p_210161_,  CompoundTag p_210162_)`
- `private static StructurePieceType setFullContextPieceId(StructurePieceType p_210159_,  String p_210160_)`
- `private static StructurePieceType setPieceId(StructurePieceType.ContextlessType p_210153_,  String p_210154_)`
- `private static StructurePieceType setTemplatePieceId(StructurePieceType.StructureTemplateType p_210156_,  String p_210157_)`

## StructurePieceType.ContextlessType

*interface* `net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType.ContextlessType`

All Superinterfaces: StructurePieceType

Enclosing interface: StructurePieceType

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType`: `BURIED_TREASURE_PIECE`, `DESERT_PYRAMID_PIECE`, `END_CITY_PIECE`, `IGLOO`, `JIGSAW`, `JUNGLE_PYRAMID_PIECE`, `MINE_SHAFT_CORRIDOR`, `MINE_SHAFT_CROSSING`, `MINE_SHAFT_ROOM`, `MINE_SHAFT_STAIRS`, `NETHER_FORTRESS_BRIDGE_CROSSING`, `NETHER_FORTRESS_BRIDGE_END_FILLER`, `NETHER_FORTRESS_BRIDGE_STRAIGHT`, `NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS`, `NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY`, `NETHER_FORTRESS_CASTLE_ENTRANCE`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN`, `NETHER_FORTRESS_CASTLE_STALK_ROOM`, `NETHER_FORTRESS_MONSTER_THRONE`, `NETHER_FORTRESS_ROOM_CROSSING`, `NETHER_FORTRESS_STAIRS_ROOM`, `NETHER_FORTRESS_START`, `NETHER_FOSSIL`, `OCEAN_MONUMENT_BUILDING`, `OCEAN_MONUMENT_CORE_ROOM`, `OCEAN_MONUMENT_DOUBLE_X_ROOM`, `OCEAN_MONUMENT_DOUBLE_XY_ROOM`, `OCEAN_MONUMENT_DOUBLE_Y_ROOM`, `OCEAN_MONUMENT_DOUBLE_YZ_ROOM`, `OCEAN_MONUMENT_DOUBLE_Z_ROOM`, `OCEAN_MONUMENT_ENTRY_ROOM`, `OCEAN_MONUMENT_PENTHOUSE`, `OCEAN_MONUMENT_SIMPLE_ROOM`, `OCEAN_MONUMENT_SIMPLE_TOP_ROOM`, `OCEAN_MONUMENT_WING_ROOM`, `OCEAN_RUIN`, `RUINED_PORTAL`, `SHIPWRECK_PIECE`, `STRONGHOLD_CHEST_CORRIDOR`, `STRONGHOLD_FILLER_CORRIDOR`, `STRONGHOLD_FIVE_CROSSING`, `STRONGHOLD_LEFT_TURN`, `STRONGHOLD_LIBRARY`, `STRONGHOLD_PORTAL_ROOM`, `STRONGHOLD_PRISON_HALL`, `STRONGHOLD_RIGHT_TURN`, `STRONGHOLD_ROOM_CROSSING`, `STRONGHOLD_STAIRS_DOWN`, `STRONGHOLD_START`, `STRONGHOLD_STRAIGHT`, `STRONGHOLD_STRAIGHT_STAIRS_DOWN`, `SWAMPLAND_HUT`, `WOODLAND_MANSION_PIECE`

### Methods
- `StructurePiece load(CompoundTag p_210167_)`
- `default StructurePiece load(StructurePieceSerializationContext p_210164_,  CompoundTag p_210165_)`

## StructurePieceType.StructureTemplateType

*interface* `net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType.StructureTemplateType`

All Superinterfaces: StructurePieceType

Enclosing interface: StructurePieceType

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.pieces.StructurePieceType`: `BURIED_TREASURE_PIECE`, `DESERT_PYRAMID_PIECE`, `END_CITY_PIECE`, `IGLOO`, `JIGSAW`, `JUNGLE_PYRAMID_PIECE`, `MINE_SHAFT_CORRIDOR`, `MINE_SHAFT_CROSSING`, `MINE_SHAFT_ROOM`, `MINE_SHAFT_STAIRS`, `NETHER_FORTRESS_BRIDGE_CROSSING`, `NETHER_FORTRESS_BRIDGE_END_FILLER`, `NETHER_FORTRESS_BRIDGE_STRAIGHT`, `NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS`, `NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY`, `NETHER_FORTRESS_CASTLE_ENTRANCE`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN`, `NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN`, `NETHER_FORTRESS_CASTLE_STALK_ROOM`, `NETHER_FORTRESS_MONSTER_THRONE`, `NETHER_FORTRESS_ROOM_CROSSING`, `NETHER_FORTRESS_STAIRS_ROOM`, `NETHER_FORTRESS_START`, `NETHER_FOSSIL`, `OCEAN_MONUMENT_BUILDING`, `OCEAN_MONUMENT_CORE_ROOM`, `OCEAN_MONUMENT_DOUBLE_X_ROOM`, `OCEAN_MONUMENT_DOUBLE_XY_ROOM`, `OCEAN_MONUMENT_DOUBLE_Y_ROOM`, `OCEAN_MONUMENT_DOUBLE_YZ_ROOM`, `OCEAN_MONUMENT_DOUBLE_Z_ROOM`, `OCEAN_MONUMENT_ENTRY_ROOM`, `OCEAN_MONUMENT_PENTHOUSE`, `OCEAN_MONUMENT_SIMPLE_ROOM`, `OCEAN_MONUMENT_SIMPLE_TOP_ROOM`, `OCEAN_MONUMENT_WING_ROOM`, `OCEAN_RUIN`, `RUINED_PORTAL`, `SHIPWRECK_PIECE`, `STRONGHOLD_CHEST_CORRIDOR`, `STRONGHOLD_FILLER_CORRIDOR`, `STRONGHOLD_FIVE_CROSSING`, `STRONGHOLD_LEFT_TURN`, `STRONGHOLD_LIBRARY`, `STRONGHOLD_PORTAL_ROOM`, `STRONGHOLD_PRISON_HALL`, `STRONGHOLD_RIGHT_TURN`, `STRONGHOLD_ROOM_CROSSING`, `STRONGHOLD_STAIRS_DOWN`, `STRONGHOLD_START`, `STRONGHOLD_STRAIGHT`, `STRONGHOLD_STRAIGHT_STAIRS_DOWN`, `SWAMPLAND_HUT`, `WOODLAND_MANSION_PIECE`

### Methods
- `StructurePiece load(StructureTemplateManager p_226963_,  CompoundTag p_226964_)`
- `default StructurePiece load(StructurePieceSerializationContext p_210169_,  CompoundTag p_210170_)`
