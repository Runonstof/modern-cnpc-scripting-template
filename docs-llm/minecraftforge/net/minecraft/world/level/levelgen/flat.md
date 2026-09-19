# net.minecraft.world.level.levelgen.flat

- [FlatLayerInfo](#flatlayerinfo)
- [FlatLevelGeneratorPreset](#flatlevelgeneratorpreset)
- [FlatLevelGeneratorPresets](#flatlevelgeneratorpresets)
- [FlatLevelGeneratorPresets.Bootstrap](#flatlevelgeneratorpresets.bootstrap)
- [FlatLevelGeneratorSettings](#flatlevelgeneratorsettings)
## FlatLayerInfo

*class* `net.minecraft.world.level.levelgen.flat.FlatLayerInfo`

### Fields
- `public static final com.mojang.serialization.Codec<FlatLayerInfo> CODEC`
- `private final Block block`
- `private final int height`

### Methods
- `public int getHeight()`
- `public BlockState getBlockState()`
- `public String toString()`

## FlatLevelGeneratorPreset

*record* `net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorPreset`

### Fields
- `private final Holder<Item> displayItem`
  The field for the displayItem record component.
- `private final FlatLevelGeneratorSettings settings`
  The field for the settings record component.
- `public static final com.mojang.serialization.Codec<FlatLevelGeneratorPreset> DIRECT_CODEC`
- `public static final com.mojang.serialization.Codec<Holder<FlatLevelGeneratorPreset>> CODEC`

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
- `public Holder<Item> displayItem()`
  Returns the value of the displayItem record component.
  - returns: the value of the displayItem record component
- `public FlatLevelGeneratorSettings settings()`
  Returns the value of the settings record component.
  - returns: the value of the settings record component

## FlatLevelGeneratorPresets

*class* `net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorPresets`

### Fields
- `public static final ResourceKey<FlatLevelGeneratorPreset> CLASSIC_FLAT`
- `public static final ResourceKey<FlatLevelGeneratorPreset> TUNNELERS_DREAM`
- `public static final ResourceKey<FlatLevelGeneratorPreset> WATER_WORLD`
- `public static final ResourceKey<FlatLevelGeneratorPreset> OVERWORLD`
- `public static final ResourceKey<FlatLevelGeneratorPreset> SNOWY_KINGDOM`
- `public static final ResourceKey<FlatLevelGeneratorPreset> BOTTOMLESS_PIT`
- `public static final ResourceKey<FlatLevelGeneratorPreset> DESERT`
- `public static final ResourceKey<FlatLevelGeneratorPreset> REDSTONE_READY`
- `public static final ResourceKey<FlatLevelGeneratorPreset> THE_VOID`

### Methods
- `public static void bootstrap(BootstapContext<FlatLevelGeneratorPreset> p_256023_)`
- `private static ResourceKey<FlatLevelGeneratorPreset> register(String p_226277_)`

## FlatLevelGeneratorPresets.Bootstrap

*class* `net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorPresets.Bootstrap`

Enclosing class: FlatLevelGeneratorPresets

### Fields
- `private final BootstapContext<FlatLevelGeneratorPreset> context`

### Methods
- `private void register(ResourceKey<FlatLevelGeneratorPreset> p_256174_,  ItemLike p_255748_,  ResourceKey<Biome> p_256483_,  Set<ResourceKey<StructureSet>> p_255807_,  boolean p_256642_,  boolean p_256006_,  FlatLayerInfo... p_255913_)`
- `public void run()`

## FlatLevelGeneratorSettings

*class* `net.minecraft.world.level.levelgen.flat.FlatLevelGeneratorSettings`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<FlatLevelGeneratorSettings> CODEC`
- `private final Optional<HolderSet<StructureSet>> structureOverrides`
- `private final List<FlatLayerInfo> layersInfo`
- `private final Holder<Biome> biome`
- `private final List<BlockState> layers`
- `private boolean voidGen`
- `private boolean decoration`
- `private boolean addLakes`
- `private final List<Holder<PlacedFeature>> lakes`

### Methods
- `private static com.mojang.serialization.DataResult<FlatLevelGeneratorSettings> validateHeight(FlatLevelGeneratorSettings p_161906_)`
- `private static Holder<Biome> getBiome(Optional<? extends Holder<Biome>> p_256142_,  Holder<Biome> p_256475_)`
- `public FlatLevelGeneratorSettings withBiomeAndLayers(List<FlatLayerInfo> p_256587_,  Optional<HolderSet<StructureSet>> p_256500_,  Holder<Biome> p_256598_)`
- `public void setDecoration()`
- `public void setAddLakes()`
- `public BiomeGenerationSettings adjustGenerationSettings(Holder<Biome> p_226295_)`
- `public Optional<HolderSet<StructureSet>> structureOverrides()`
- `public Holder<Biome> getBiome()`
- `public List<FlatLayerInfo> getLayersInfo()`
- `public List<BlockState> getLayers()`
- `public void updateLayers()`
- `public static FlatLevelGeneratorSettings getDefault(HolderGetter<Biome> p_256175_,  HolderGetter<StructureSet> p_256081_,  HolderGetter<PlacedFeature> p_256484_)`
- `public static Holder<Biome> getDefaultBiome(HolderGetter<Biome> p_256645_)`
- `public static List<Holder<PlacedFeature>> createLakesList(HolderGetter<PlacedFeature> p_256282_)`
