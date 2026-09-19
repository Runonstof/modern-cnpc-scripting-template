# net.minecraft.world.level.dimension

- [BuiltinDimensionTypes](#builtindimensiontypes)
- [DimensionDefaults](#dimensiondefaults)
- [DimensionType](#dimensiontype)
- [DimensionType.MonsterSettings](#dimensiontype.monstersettings)
- [LevelStem](#levelstem)
## BuiltinDimensionTypes

*class* `net.minecraft.world.level.dimension.BuiltinDimensionTypes`

### Fields
- `public static final ResourceKey<DimensionType> OVERWORLD`
- `public static final ResourceKey<DimensionType> NETHER`
- `public static final ResourceKey<DimensionType> END`
- `public static final ResourceKey<DimensionType> OVERWORLD_CAVES`
- `public static final ResourceLocation OVERWORLD_EFFECTS`
- `public static final ResourceLocation NETHER_EFFECTS`
- `public static final ResourceLocation END_EFFECTS`

### Methods
- `private static ResourceKey<DimensionType> register(String p_223548_)`

## DimensionDefaults

*class* `net.minecraft.world.level.dimension.DimensionDefaults`

### Fields
- `public static final int OVERWORLD_MIN_Y` (= -64)
- `public static final int OVERWORLD_LEVEL_HEIGHT` (= 384)
- `public static final int OVERWORLD_GENERATION_HEIGHT` (= 384)
- `public static final int OVERWORLD_LOGICAL_HEIGHT` (= 384)
- `public static final int NETHER_MIN_Y` (= 0)
- `public static final int NETHER_LEVEL_HEIGHT` (= 256)
- `public static final int NETHER_GENERATION_HEIGHT` (= 128)
- `public static final int NETHER_LOGICAL_HEIGHT` (= 128)
- `public static final int END_MIN_Y` (= 0)
- `public static final int END_LEVEL_HEIGHT` (= 256)
- `public static final int END_GENERATION_HEIGHT` (= 128)
- `public static final int END_LOGICAL_HEIGHT` (= 256)

## DimensionType

*record* `net.minecraft.world.level.dimension.DimensionType`

### Fields
- `private final OptionalLong fixedTime`
  The field for the fixedTime record component.
- `private final boolean hasSkyLight`
  The field for the hasSkyLight record component.
- `private final boolean hasCeiling`
  The field for the hasCeiling record component.
- `private final boolean ultraWarm`
  The field for the ultraWarm record component.
- `private final boolean natural`
  The field for the natural record component.
- `private final double coordinateScale`
  The field for the coordinateScale record component.
- `private final boolean bedWorks`
  The field for the bedWorks record component.
- `private final boolean respawnAnchorWorks`
  The field for the respawnAnchorWorks record component.
- `private final int minY`
  The field for the minY record component.
- `private final int height`
  The field for the height record component.
- `private final int logicalHeight`
  The field for the logicalHeight record component.
- `private final TagKey<Block> infiniburn`
  The field for the infiniburn record component.
- `private final ResourceLocation effectsLocation`
  The field for the effectsLocation record component.
- `private final float ambientLight`
  The field for the ambientLight record component.
- `private final DimensionType.MonsterSettings monsterSettings`
  The field for the monsterSettings record component.
- `public static final int BITS_FOR_Y`
- `public static final int MIN_HEIGHT` (= 16)
- `public static final int Y_SIZE`
- `public static final int MAX_Y`
- `public static final int MIN_Y`
- `public static final int WAY_ABOVE_MAX_Y`
- `public static final int WAY_BELOW_MIN_Y`
- `public static final com.mojang.serialization.Codec<DimensionType> DIRECT_CODEC`
- `private static final int MOON_PHASES` (= 8)
- `public static final float[] MOON_BRIGHTNESS_PER_PHASE`
- `public static final com.mojang.serialization.Codec<Holder<DimensionType>> CODEC`

### Methods
- `@Deprecated public static com.mojang.serialization.DataResult<ResourceKey<Level>> parseLegacy(com.mojang.serialization.Dynamic<?> p_63912_)` (deprecated)
- `public static double getTeleportationScale(DimensionType p_63909_,  DimensionType p_63910_)`
- `public static Path getStorageFolder(ResourceKey<Level> p_196976_,  Path p_196977_)`
- `public boolean hasFixedTime()`
- `public float timeOfDay(long p_63905_)`
- `public int moonPhase(long p_63937_)`
- `public boolean piglinSafe()`
- `public boolean hasRaids()`
- `public IntProvider monsterSpawnLightTest()`
- `public int monsterSpawnBlockLightLimit()`
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
- `public OptionalLong fixedTime()`
  Returns the value of the fixedTime record component.
  - returns: the value of the fixedTime record component
- `public boolean hasSkyLight()`
  Returns the value of the hasSkyLight record component.
  - returns: the value of the hasSkyLight record component
- `public boolean hasCeiling()`
  Returns the value of the hasCeiling record component.
  - returns: the value of the hasCeiling record component
- `public boolean ultraWarm()`
  Returns the value of the ultraWarm record component.
  - returns: the value of the ultraWarm record component
- `public boolean natural()`
  Returns the value of the natural record component.
  - returns: the value of the natural record component
- `public double coordinateScale()`
  Returns the value of the coordinateScale record component.
  - returns: the value of the coordinateScale record component
- `public boolean bedWorks()`
  Returns the value of the bedWorks record component.
  - returns: the value of the bedWorks record component
- `public boolean respawnAnchorWorks()`
  Returns the value of the respawnAnchorWorks record component.
  - returns: the value of the respawnAnchorWorks record component
- `public int minY()`
  Returns the value of the minY record component.
  - returns: the value of the minY record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
- `public int logicalHeight()`
  Returns the value of the logicalHeight record component.
  - returns: the value of the logicalHeight record component
- `public TagKey<Block> infiniburn()`
  Returns the value of the infiniburn record component.
  - returns: the value of the infiniburn record component
- `public ResourceLocation effectsLocation()`
  Returns the value of the effectsLocation record component.
  - returns: the value of the effectsLocation record component
- `public float ambientLight()`
  Returns the value of the ambientLight record component.
  - returns: the value of the ambientLight record component
- `public DimensionType.MonsterSettings monsterSettings()`
  Returns the value of the monsterSettings record component.
  - returns: the value of the monsterSettings record component

## DimensionType.MonsterSettings

*record* `net.minecraft.world.level.dimension.DimensionType.MonsterSettings`

Enclosing class: DimensionType

### Fields
- `private final boolean piglinSafe`
  The field for the piglinSafe record component.
- `private final boolean hasRaids`
  The field for the hasRaids record component.
- `private final IntProvider monsterSpawnLightTest`
  The field for the monsterSpawnLightTest record component.
- `private final int monsterSpawnBlockLightLimit`
  The field for the monsterSpawnBlockLightLimit record component.
- `public static final com.mojang.serialization.MapCodec<DimensionType.MonsterSettings> CODEC`

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
- `public boolean piglinSafe()`
  Returns the value of the piglinSafe record component.
  - returns: the value of the piglinSafe record component
- `public boolean hasRaids()`
  Returns the value of the hasRaids record component.
  - returns: the value of the hasRaids record component
- `public IntProvider monsterSpawnLightTest()`
  Returns the value of the monsterSpawnLightTest record component.
  - returns: the value of the monsterSpawnLightTest record component
- `public int monsterSpawnBlockLightLimit()`
  Returns the value of the monsterSpawnBlockLightLimit record component.
  - returns: the value of the monsterSpawnBlockLightLimit record component

## LevelStem

*record* `net.minecraft.world.level.dimension.LevelStem`

### Fields
- `private final Holder<DimensionType> type`
  The field for the type record component.
- `private final ChunkGenerator generator`
  The field for the generator record component.
- `public static final com.mojang.serialization.Codec<LevelStem> CODEC`
- `public static final ResourceKey<LevelStem> OVERWORLD`
- `public static final ResourceKey<LevelStem> NETHER`
- `public static final ResourceKey<LevelStem> END`

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
- `public Holder<DimensionType> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public ChunkGenerator generator()`
  Returns the value of the generator record component.
  - returns: the value of the generator record component
