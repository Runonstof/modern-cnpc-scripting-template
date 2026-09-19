# net.minecraft.world.level.levelgen.feature.rootplacers

- [AboveRootPlacement](#aboverootplacement)
- [MangroveRootPlacement](#mangroverootplacement)
- [MangroveRootPlacer](#mangroverootplacer)
- [RootPlacer](#rootplacer)
- [RootPlacerType](#rootplacertype)
## AboveRootPlacement

*record* `net.minecraft.world.level.levelgen.feature.rootplacers.AboveRootPlacement`

### Fields
- `private final BlockStateProvider aboveRootProvider`
  The field for the aboveRootProvider record component.
- `private final float aboveRootPlacementChance`
  The field for the aboveRootPlacementChance record component.
- `public static final com.mojang.serialization.Codec<AboveRootPlacement> CODEC`

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
- `public BlockStateProvider aboveRootProvider()`
  Returns the value of the aboveRootProvider record component.
  - returns: the value of the aboveRootProvider record component
- `public float aboveRootPlacementChance()`
  Returns the value of the aboveRootPlacementChance record component.
  - returns: the value of the aboveRootPlacementChance record component

## MangroveRootPlacement

*record* `net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacement`

### Fields
- `private final HolderSet<Block> canGrowThrough`
  The field for the canGrowThrough record component.
- `private final HolderSet<Block> muddyRootsIn`
  The field for the muddyRootsIn record component.
- `private final BlockStateProvider muddyRootsProvider`
  The field for the muddyRootsProvider record component.
- `private final int maxRootWidth`
  The field for the maxRootWidth record component.
- `private final int maxRootLength`
  The field for the maxRootLength record component.
- `private final float randomSkewChance`
  The field for the randomSkewChance record component.
- `public static final com.mojang.serialization.Codec<MangroveRootPlacement> CODEC`

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
- `public HolderSet<Block> canGrowThrough()`
  Returns the value of the canGrowThrough record component.
  - returns: the value of the canGrowThrough record component
- `public HolderSet<Block> muddyRootsIn()`
  Returns the value of the muddyRootsIn record component.
  - returns: the value of the muddyRootsIn record component
- `public BlockStateProvider muddyRootsProvider()`
  Returns the value of the muddyRootsProvider record component.
  - returns: the value of the muddyRootsProvider record component
- `public int maxRootWidth()`
  Returns the value of the maxRootWidth record component.
  - returns: the value of the maxRootWidth record component
- `public int maxRootLength()`
  Returns the value of the maxRootLength record component.
  - returns: the value of the maxRootLength record component
- `public float randomSkewChance()`
  Returns the value of the randomSkewChance record component.
  - returns: the value of the randomSkewChance record component

## MangroveRootPlacer

*class* `net.minecraft.world.level.levelgen.feature.rootplacers.MangroveRootPlacer`

### Fields
- `public static final int ROOT_WIDTH_LIMIT` (= 8)
- `public static final int ROOT_LENGTH_LIMIT` (= 15)
- `public static final com.mojang.serialization.Codec<MangroveRootPlacer> CODEC`
- `private final MangroveRootPlacement mangroveRootPlacement`

### Inherited fields
- from `net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer`: `aboveRootPlacement`, `rootProvider`, `trunkOffsetY`

### Methods
- `public boolean placeRoots(LevelSimulatedReader p_225840_,  BiConsumer<BlockPos,BlockState> p_225841_,  RandomSource p_225842_,  BlockPos p_225843_,  BlockPos p_225844_,  TreeConfiguration p_225845_)`
- `private boolean simulateRoots(LevelSimulatedReader p_225823_,  RandomSource p_225824_,  BlockPos p_225825_,  Direction p_225826_,  BlockPos p_225827_,  List<BlockPos> p_225828_,  int p_225829_)`
- `protected List<BlockPos> potentialRootPositions(BlockPos p_225851_,  Direction p_225852_,  RandomSource p_225853_,  BlockPos p_225854_)`
- `protected boolean canPlaceRoot(LevelSimulatedReader p_225831_,  BlockPos p_225832_)`
- `protected void placeRoot(LevelSimulatedReader p_225834_,  BiConsumer<BlockPos,BlockState> p_225835_,  RandomSource p_225836_,  BlockPos p_225837_,  TreeConfiguration p_225838_)`
- `protected RootPlacerType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer`: `getPotentiallyWaterloggedState`, `getTrunkOrigin`, `rootPlacerParts`

## RootPlacer

*class* `net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacer`

### Fields
- `public static final com.mojang.serialization.Codec<RootPlacer> CODEC`
- `protected final IntProvider trunkOffsetY`
- `protected final BlockStateProvider rootProvider`
- `protected final Optional<AboveRootPlacement> aboveRootPlacement`

### Methods
- `protected static <P extends RootPlacer> com.mojang.datafixers.Products.P3<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<P>,IntProvider,BlockStateProvider,Optional<AboveRootPlacement>> rootPlacerParts(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<P> p_225886_)`
- `protected abstract RootPlacerType<?> type()`
- `public abstract boolean placeRoots(LevelSimulatedReader p_225879_,  BiConsumer<BlockPos,BlockState> p_225880_,  RandomSource p_225881_,  BlockPos p_225882_,  BlockPos p_225883_,  TreeConfiguration p_225884_)`
- `protected boolean canPlaceRoot(LevelSimulatedReader p_225868_,  BlockPos p_225869_)`
- `protected void placeRoot(LevelSimulatedReader p_225874_,  BiConsumer<BlockPos,BlockState> p_225875_,  RandomSource p_225876_,  BlockPos p_225877_,  TreeConfiguration p_225878_)`
- `protected BlockState getPotentiallyWaterloggedState(LevelSimulatedReader p_225871_,  BlockPos p_225872_,  BlockState p_225873_)`
- `public BlockPos getTrunkOrigin(BlockPos p_225892_,  RandomSource p_225893_)`

## RootPlacerType

*class* `net.minecraft.world.level.levelgen.feature.rootplacers.RootPlacerType`

### Fields
- `public static final RootPlacerType<MangroveRootPlacer> MANGROVE_ROOT_PLACER`
- `private final com.mojang.serialization.Codec<P extends RootPlacer> codec`

### Methods
- `private static <P extends RootPlacer> RootPlacerType<P> register(String p_225905_,  com.mojang.serialization.Codec<P> p_225906_)`
- `public com.mojang.serialization.Codec<P> codec()`
