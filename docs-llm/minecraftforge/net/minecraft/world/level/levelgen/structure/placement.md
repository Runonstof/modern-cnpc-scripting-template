# net.minecraft.world.level.levelgen.structure.placement

- [Class RandomSpreadType](#class-randomspreadtype)
- [Class StructurePlacement.FrequencyReductionMethod](#class-structureplacement.frequencyreductionmethod)
- [ConcentricRingsStructurePlacement](#concentricringsstructureplacement)
- [RandomSpreadStructurePlacement](#randomspreadstructureplacement)
- [StructurePlacement](#structureplacement)
- [StructurePlacement.ExclusionZone](#structureplacement.exclusionzone)
- [StructurePlacement.FrequencyReducer](#structureplacement.frequencyreducer)
- [StructurePlacementType](#structureplacementtype)
## Class RandomSpreadType

*enum* `net.minecraft.world.level.levelgen.structure.placement.Class RandomSpreadType`

### Fields
- `public static final com.mojang.serialization.Codec<RandomSpreadType> CODEC`
- `private final String id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static RandomSpreadType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RandomSpreadType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public int evaluate(RandomSource p_227019_,  int p_227020_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class StructurePlacement.FrequencyReductionMethod

*enum* `net.minecraft.world.level.levelgen.structure.placement.Class StructurePlacement.FrequencyReductionMethod`

Enclosing class: StructurePlacement

### Fields
- `public static final com.mojang.serialization.Codec<StructurePlacement.FrequencyReductionMethod> CODEC`
- `private final String name`
- `private final StructurePlacement.FrequencyReducer reducer`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static StructurePlacement.FrequencyReductionMethod[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructurePlacement.FrequencyReductionMethod valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean shouldGenerate(long p_227120_,  int p_227121_,  int p_227122_,  int p_227123_,  float p_227124_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ConcentricRingsStructurePlacement

*class* `net.minecraft.world.level.levelgen.structure.placement.ConcentricRingsStructurePlacement`

### Fields
- `public static final com.mojang.serialization.Codec<ConcentricRingsStructurePlacement> CODEC`
- `private final int distance`
- `private final int spread`
- `private final int count`
- `private final HolderSet<Biome> preferredBiomes`

### Methods
- `private static com.mojang.datafixers.Products.P9<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<ConcentricRingsStructurePlacement>,Vec3i,StructurePlacement.FrequencyReductionMethod,Float,Integer,Optional<StructurePlacement.ExclusionZone>,Integer,Integer,Integer,HolderSet<Biome>> codec(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<ConcentricRingsStructurePlacement> p_226997_)`
- `public int distance()`
- `public int spread()`
- `public int count()`
- `public HolderSet<Biome> preferredBiomes()`
- `protected boolean isPlacementChunk(ChunkGeneratorStructureState p_256631_,  int p_256202_,  int p_255915_)`
- `public StructurePlacementType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.placement.StructurePlacement`: `exclusionZone`, `frequency`, `frequencyReductionMethod`, `getLocatePos`, `isStructureChunk`, `locateOffset`, `placementCodec`, `salt`

## RandomSpreadStructurePlacement

*class* `net.minecraft.world.level.levelgen.structure.placement.RandomSpreadStructurePlacement`

### Fields
- `public static final com.mojang.serialization.Codec<RandomSpreadStructurePlacement> CODEC`
- `private final int spacing`
- `private final int separation`
- `private final RandomSpreadType spreadType`

### Methods
- `private static com.mojang.serialization.DataResult<RandomSpreadStructurePlacement> validate(RandomSpreadStructurePlacement p_286361_)`
- `public int spacing()`
- `public int separation()`
- `public RandomSpreadType spreadType()`
- `public ChunkPos getPotentialStructureChunk(long p_227009_,  int p_227010_,  int p_227011_)`
- `protected boolean isPlacementChunk(ChunkGeneratorStructureState p_256267_,  int p_256050_,  int p_255975_)`
- `public StructurePlacementType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.placement.StructurePlacement`: `exclusionZone`, `frequency`, `frequencyReductionMethod`, `getLocatePos`, `isStructureChunk`, `locateOffset`, `placementCodec`, `salt`

## StructurePlacement

*class* `net.minecraft.world.level.levelgen.structure.placement.StructurePlacement`

### Fields
- `public static final com.mojang.serialization.Codec<StructurePlacement> CODEC`
- `private static final int HIGHLY_ARBITRARY_RANDOM_SALT` (= 10387320)
- `private final Vec3i locateOffset`
- `private final StructurePlacement.FrequencyReductionMethod frequencyReductionMethod`
- `private final float frequency`
- `private final int salt`
- `private final Optional<StructurePlacement.ExclusionZone> exclusionZone`

### Methods
- `protected static <S extends StructurePlacement> com.mojang.datafixers.Products.P5<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<S>,Vec3i,StructurePlacement.FrequencyReductionMethod,Float,Integer,Optional<StructurePlacement.ExclusionZone>> placementCodec(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<S> p_227042_)`
- `protected Vec3i locateOffset()`
- `protected StructurePlacement.FrequencyReductionMethod frequencyReductionMethod()`
- `protected float frequency()`
- `protected int salt()`
- `protected Optional<StructurePlacement.ExclusionZone> exclusionZone()`
- `public boolean isStructureChunk(ChunkGeneratorStructureState p_256635_,  int p_255959_,  int p_256065_)`
- `protected abstract boolean isPlacementChunk(ChunkGeneratorStructureState p_256034_,  int p_227046_,  int p_227047_)`
- `public BlockPos getLocatePos(ChunkPos p_227040_)`
- `public abstract StructurePlacementType<?> type()`
- `private static boolean probabilityReducer(long p_227034_,  int p_227035_,  int p_227036_,  int p_227037_,  float p_227038_)`
- `private static boolean legacyProbabilityReducerWithDouble(long p_227049_,  int p_227050_,  int p_227051_,  int p_227052_,  float p_227053_)`
- `private static boolean legacyArbitrarySaltProbabilityReducer(long p_227061_,  int p_227062_,  int p_227063_,  int p_227064_,  float p_227065_)`
- `private static boolean legacyPillagerOutpostReducer(long p_227067_,  int p_227068_,  int p_227069_,  int p_227070_,  float p_227071_)`

## StructurePlacement.ExclusionZone

*record* `net.minecraft.world.level.levelgen.structure.placement.StructurePlacement.ExclusionZone`

Enclosing class: StructurePlacement

### Fields
- `private final Holder<StructureSet> otherSet` (deprecated)
  The field for the otherSet record component.
- `private final int chunkCount` (deprecated)
  The field for the chunkCount record component.
- `public static final com.mojang.serialization.Codec<StructurePlacement.ExclusionZone> CODEC` (deprecated)

### Methods
- `boolean isPlacementForbidden(ChunkGeneratorStructureState p_255745_,  int p_255634_,  int p_255892_)` (deprecated)
- `public final String toString()` (deprecated)
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()` (deprecated)
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)` (deprecated)
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Holder<StructureSet> otherSet()` (deprecated)
  Returns the value of the otherSet record component.
  - returns: the value of the otherSet record component
- `public int chunkCount()` (deprecated)
  Returns the value of the chunkCount record component.
  - returns: the value of the chunkCount record component

## StructurePlacement.FrequencyReducer

*interface* `net.minecraft.world.level.levelgen.structure.placement.StructurePlacement.FrequencyReducer`

Enclosing class: StructurePlacement

### Methods
- `boolean shouldGenerate(long p_227099_,  int p_227100_,  int p_227101_,  int p_227102_,  float p_227103_)`

## StructurePlacementType

*interface* `net.minecraft.world.level.levelgen.structure.placement.StructurePlacementType`

### Fields
- `static final StructurePlacementType<RandomSpreadStructurePlacement> RANDOM_SPREAD`
- `static final StructurePlacementType<ConcentricRingsStructurePlacement> CONCENTRIC_RINGS`

### Methods
- `com.mojang.serialization.Codec<SP> codec()`
- `private static <SP extends StructurePlacement> StructurePlacementType<SP> register(String p_205047_,  com.mojang.serialization.Codec<SP> p_205048_)`
