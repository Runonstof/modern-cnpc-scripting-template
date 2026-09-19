# net.minecraftforge.common.world

- [BiomeGenerationSettingsBuilder](#biomegenerationsettingsbuilder)
- [BiomeModifier](#biomemodifier)
- [BiomeSpecialEffectsBuilder](#biomespecialeffectsbuilder)
- [Class BiomeModifier.Phase](#class-biomemodifier.phase)
- [Class StructureModifier.Phase](#class-structuremodifier.phase)
- [ClimateSettingsBuilder](#climatesettingsbuilder)
- [ForgeBiomeModifiers](#forgebiomemodifiers)
- [ForgeBiomeModifiers.AddFeaturesBiomeModifier](#forgebiomemodifiers.addfeaturesbiomemodifier)
- [ForgeBiomeModifiers.AddSpawnsBiomeModifier](#forgebiomemodifiers.addspawnsbiomemodifier)
- [ForgeBiomeModifiers.RemoveFeaturesBiomeModifier](#forgebiomemodifiers.removefeaturesbiomemodifier)
- [ForgeBiomeModifiers.RemoveSpawnsBiomeModifier](#forgebiomemodifiers.removespawnsbiomemodifier)
- [ForgeChunkManager](#forgechunkmanager)
- [ForgeChunkManager.LoadingValidationCallback](#forgechunkmanager.loadingvalidationcallback)
- [ForgeChunkManager.TicketHelper](#forgechunkmanager.tickethelper)
- [ForgeChunkManager.TicketOwner>](#forgechunkmanager.ticketowner)
- [ForgeChunkManager.TicketTracker>](#forgechunkmanager.tickettracker)
- [MobSpawnSettingsBuilder](#mobspawnsettingsbuilder)
- [ModifiableBiomeInfo](#modifiablebiomeinfo)
- [ModifiableBiomeInfo.BiomeInfo](#modifiablebiomeinfo.biomeinfo)
- [ModifiableBiomeInfo.BiomeInfo.Builder](#modifiablebiomeinfo.biomeinfo.builder)
- [ModifiableStructureInfo](#modifiablestructureinfo)
- [ModifiableStructureInfo.StructureInfo](#modifiablestructureinfo.structureinfo)
- [ModifiableStructureInfo.StructureInfo.Builder](#modifiablestructureinfo.structureinfo.builder)
- [NoneBiomeModifier](#nonebiomemodifier)
- [NoneStructureModifier](#nonestructuremodifier)
- [PieceBeardifierModifier](#piecebeardifiermodifier)
- [StructureModifier](#structuremodifier)
- [StructureSettingsBuilder](#structuresettingsbuilder)
- [StructureSettingsBuilder.StructureSpawnOverrideBuilder](#structuresettingsbuilder.structurespawnoverridebuilder)
## BiomeGenerationSettingsBuilder

*class* `net.minecraftforge.common.world.BiomeGenerationSettingsBuilder`

### Inherited fields
- from `net.minecraft.world.level.biome.BiomeGenerationSettings.PlainBuilder`: `carvers`, `features`

### Methods
- `public List<Holder<PlacedFeature>> getFeatures(GenerationStep.Decoration stage)`
- `public List<Holder<ConfiguredWorldCarver<?>>> getCarvers(GenerationStep.Carving stage)`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeGenerationSettings.PlainBuilder`: `addCarver`, `addFeature`, `addFeature`, `addFeatureStepsUpTo`, `build`

## BiomeModifier

*interface* `net.minecraftforge.common.world.BiomeModifier`

JSON-serializable biome modifier.
 Requires a Codec to deserialize biome modifiers from biome modifier jsons.

 Biome modifier jsons have the following json format:
 {
 "type": "yourmod:yourserializer", // Indicates a registered biome modifier serializer
 // Additional fields can be specified here according to the codec
 }

 Datapacks can also disable a biome modifier by overriding the json and using "type": "forge:none".

### Fields
- `static final com.mojang.serialization.Codec<BiomeModifier> DIRECT_CODEC`
  Codec for (de)serializing biome modifiers inline.
   Mods can use this for data generation.
- `static final com.mojang.serialization.Codec<Holder<BiomeModifier>> REFERENCE_CODEC`
  Codec for referring to biome modifiers by id in other datapack registry files.
   Can only be used with RegistryOps.
- `static final com.mojang.serialization.Codec<HolderSet<BiomeModifier>> LIST_CODEC`
  Codec for referring to biome modifiers by id, list of id, or tags.
   Can only be used with RegistryOps.

### Methods
- `void modify(Holder<Biome> biome,  BiomeModifier.Phase phase,  ModifiableBiomeInfo.BiomeInfo.Builder builder)`
  Modifies the information via the provided biome builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: biome - the named biome being modified (with original data readable).
  - param: phase - biome modification phase. Biome modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable biome info builder. Apply changes to this.
- `com.mojang.serialization.Codec<? extends BiomeModifier> codec()`
  - returns: the codec which serializes and deserializes this biome modifier

## BiomeSpecialEffectsBuilder

*class* `net.minecraftforge.common.world.BiomeSpecialEffectsBuilder`

Extension of the vanilla builder but also provides read access and a copy-from-existing-data helper.
 Also, the base builder crashes if certain values aren't specified on build, so this enforces the setting of those.

### Inherited fields
- from `net.minecraft.world.level.biome.BiomeSpecialEffects.Builder`: `ambientAdditionsSettings`, `ambientLoopSoundEvent`, `ambientMoodSettings`, `ambientParticle`, `backgroundMusic`, `fogColor`, `foliageColorOverride`, `grassColorModifier`, `grassColorOverride`, `skyColor`, `waterColor`, `waterFogColor`

### Methods
- `public static BiomeSpecialEffectsBuilder copyOf(BiomeSpecialEffects baseEffects)`
- `public static BiomeSpecialEffectsBuilder create(int fogColor,  int waterColor,  int waterFogColor,  int skyColor)`
- `public int getFogColor()`
- `public int waterColor()`
- `public int getWaterFogColor()`
- `public int getSkyColor()`
- `public BiomeSpecialEffects.GrassColorModifier getGrassColorModifier()`
- `public Optional<Integer> getFoliageColorOverride()`
- `public Optional<Integer> getGrassColorOverride()`
- `public Optional<AmbientParticleSettings> getAmbientParticle()`
- `public Optional<Holder<SoundEvent>> getAmbientLoopSound()`
- `public Optional<AmbientMoodSettings> getAmbientMoodSound()`
- `public Optional<AmbientAdditionsSettings> getAmbientAdditionsSound()`
- `public Optional<Music> getBackgroundMusic()`

### Inherited methods
- from `net.minecraft.world.level.biome.BiomeSpecialEffects.Builder`: `ambientAdditionsSound`, `ambientLoopSound`, `ambientMoodSound`, `ambientParticle`, `backgroundMusic`, `build`, `fogColor`, `foliageColorOverride`, `grassColorModifier`, `grassColorOverride`, `skyColor`, `waterColor`, `waterFogColor`

## Class BiomeModifier.Phase

*enum* `net.minecraftforge.common.world.Class BiomeModifier.Phase`

Enclosing interface: BiomeModifier

### Methods
- `public static BiomeModifier.Phase[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static BiomeModifier.Phase valueOf(String name)`
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

## Class StructureModifier.Phase

*enum* `net.minecraftforge.common.world.Class StructureModifier.Phase`

Enclosing interface: StructureModifier

### Methods
- `public static StructureModifier.Phase[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StructureModifier.Phase valueOf(String name)`
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

## ClimateSettingsBuilder

*class* `net.minecraftforge.common.world.ClimateSettingsBuilder`

Builder for Biome.ClimateSettings.

### Fields
- `private boolean hasPrecipitation`
- `private float temperature`
- `private Biome.TemperatureModifier temperatureModifier`
- `private float downfall`

### Methods
- `public static ClimateSettingsBuilder copyOf(Biome.ClimateSettings settings)`
  - param: settings - Existing ClimateSettings.
  - returns: A new builder with a copy of that ClimateSettings's values.
- `public static ClimateSettingsBuilder create(boolean hasPrecipitation,  float temperature,  Biome.TemperatureModifier temperatureModifier,  float downfall)`
  - param: hasPrecipitation - Synced to clients, determines weather effects
  - param: temperature - Synced to clients, affects foliage color, freezing, and weather effects.
 Vanilla values are in the range [-0.5, 2.0]
  - param: temperatureModifier - Synced to clients, applies a positional modifier to temperature.
 Frozen Oceans use this to have occasional warm patches.
  - param: downfall - Synced to clients, affects foliage color.
 Biomes with downfall > 0.85 count as humid, inhibiting fire spread.
  - returns: a new builder with the given values
- `public Biome.ClimateSettings build()`
  - returns: A new ClimateSettings with the finalized values.
- `public boolean hasPrecipitation()`
  - returns: Synced to clients, determines weather effects.
- `public void setHasPrecipitation(boolean hasPrecipitation)`
  - param: hasPrecipitation - Synced to clients, determines weather effects.
- `public float getTemperature()`
  Returns Synced to clients, affects foliage color, freezing, and weather effects.
   Vanilla values are in the range [-0.5, 2.0].
  - returns: Synced to clients, affects foliage color, freezing, and weather effects
- `public void setTemperature(float temperature)`
  - param: temperature - Synced to clients, affects foliage color, freezing, and weather effects.
 Vanilla values are in the range [-0.5, 2.0].
- `public Biome.TemperatureModifier getTemperatureModifier()`
  Returns temperatureModifier Synced to clients, applies a positional modifier to temperature..
   Frozen Oceans use this to have occasional warm patches.
  - returns: temperatureModifier Synced to clients, applies a positional modifier to temperature.
- `public void setTemperatureModifier(Biome.TemperatureModifier temperatureModifier)`
  - param: temperatureModifier - Synced to clients, applies a positional modifier to temperature.
 Frozen Oceans use this to have occasional warm patches.
- `public float getDownfall()`
  Returns Synced to clients, affects foliage color..
   Biomes with downfall > 0.85 count as humid, inhibiting fire spread.
  - returns: Synced to clients, affects foliage color.
- `public void setDownfall(float downfall)`
  - param: downfall - Synced to clients, affects foliage color.
 Biomes with downfall > 0.85 count as humid, inhibiting fire spread.

## ForgeBiomeModifiers

*class* `net.minecraftforge.common.world.ForgeBiomeModifiers`

## ForgeBiomeModifiers.AddFeaturesBiomeModifier

*record* `net.minecraftforge.common.world.ForgeBiomeModifiers.AddFeaturesBiomeModifier`

Stock biome modifier that adds features to biomes. Has the following json format:
 {
 "type": "forge:add_features", // required
 "biomes": "#namespace:your_biome_tag" // accepts a biome id, [list of biome ids], or #namespace:biome_tag
 "features": "namespace:your_feature", // accepts a placed feature id, [list of placed feature ids], or #namespace:feature_tag
 "step": "underground_ores" // accepts a Decoration enum name
 }

 Be wary of using this to add vanilla PlacedFeatures to biomes, as doing so may cause a feature cycle violation.

Enclosing class: ForgeBiomeModifiers

### Fields
- `private final HolderSet<Biome> biomes`
  The field for the biomes record component.
- `private final HolderSet<PlacedFeature> features`
  The field for the features record component.
- `private final GenerationStep.Decoration step`
  The field for the step record component.
- `public static final com.mojang.serialization.Codec<ForgeBiomeModifiers.AddFeaturesBiomeModifier> CODEC`

### Inherited fields
- from `net.minecraftforge.common.world.BiomeModifier`: `DIRECT_CODEC`, `LIST_CODEC`, `REFERENCE_CODEC`

### Methods
- `public void modify(Holder<Biome> biome,  BiomeModifier.Phase phase,  ModifiableBiomeInfo.BiomeInfo.Builder builder)`
  Description copied from interface: BiomeModifier
  Modifies the information via the provided biome builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: biome - the named biome being modified (with original data readable).
  - param: phase - biome modification phase. Biome modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable biome info builder. Apply changes to this.
- `public com.mojang.serialization.Codec<? extends BiomeModifier> codec()`
  - returns: the codec which serializes and deserializes this biome modifier
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
- `public HolderSet<PlacedFeature> features()`
  Returns the value of the features record component.
  - returns: the value of the features record component
- `public GenerationStep.Decoration step()`
  Returns the value of the step record component.
  - returns: the value of the step record component

## ForgeBiomeModifiers.AddSpawnsBiomeModifier

*record* `net.minecraftforge.common.world.ForgeBiomeModifiers.AddSpawnsBiomeModifier`

Stock biome modifier that adds a mob spawn to a biome. Has the following json format:
 {
 "type": "forge:add_spawns", // Required
 "biomes": "#namespace:biome_tag", // Accepts a biome id, [list of biome ids], or #namespace:biome_tag
 "spawners":
 {
 "type": "namespace:entity_type", // Type of mob to spawn
 "weight": 100, // int, spawn weighting
 "minCount": 1, // int, minimum pack size
 "maxCount": 4, // int, maximum pack size
 }
 }

 Optionally accepts a list of spawner objects instead of a single spawner:
 {
 "type": "forge:add_spawns", // Required
 "biomes": "#namespace:biome_tag", // Accepts a biome id, [list of biome ids], or #namespace:biome_tag
 "spawners":
 [
 {
 "type": "namespace:entity_type", // Type of mob to spawn
 "weight": 100, // int, spawn weighting
 "minCount": 1, // int, minimum pack size
 "maxCount": 4, // int, maximum pack size
 },
 {
 // additional spawner object
 }
 ]
 }

Enclosing class: ForgeBiomeModifiers

### Fields
- `private final HolderSet<Biome> biomes`
  The field for the biomes record component.
- `private final List<MobSpawnSettings.SpawnerData> spawners`
  The field for the spawners record component.
- `public static final com.mojang.serialization.Codec<ForgeBiomeModifiers.AddSpawnsBiomeModifier> CODEC`

### Inherited fields
- from `net.minecraftforge.common.world.BiomeModifier`: `DIRECT_CODEC`, `LIST_CODEC`, `REFERENCE_CODEC`

### Methods
- `public static ForgeBiomeModifiers.AddSpawnsBiomeModifier singleSpawn(HolderSet<Biome> biomes,  MobSpawnSettings.SpawnerData spawner)`
  Convenience method for using a single spawn data.
  - param: biomes - Biomes to add mob spawns to.
  - param: spawner - SpawnerData specifying EntityTYpe, weight, and pack size.
  - returns: AddSpawnsBiomeModifier that adds a single spawn entry to the specified biomes.
- `public void modify(Holder<Biome> biome,  BiomeModifier.Phase phase,  ModifiableBiomeInfo.BiomeInfo.Builder builder)`
  Description copied from interface: BiomeModifier
  Modifies the information via the provided biome builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: biome - the named biome being modified (with original data readable).
  - param: phase - biome modification phase. Biome modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable biome info builder. Apply changes to this.
- `public com.mojang.serialization.Codec<? extends BiomeModifier> codec()`
  - returns: the codec which serializes and deserializes this biome modifier
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
- `public List<MobSpawnSettings.SpawnerData> spawners()`
  Returns the value of the spawners record component.
  - returns: the value of the spawners record component

## ForgeBiomeModifiers.RemoveFeaturesBiomeModifier

*record* `net.minecraftforge.common.world.ForgeBiomeModifiers.RemoveFeaturesBiomeModifier`

Stock biome modifier that removes features from biomes. Has the following json format:
 {
 "type": "forge:removefeatures", // required
 "biomes": "#namespace:your_biome_tag", // accepts a biome id, [list of biome ids], or #namespace:biome_tag
 "features": "namespace:your_feature", // accepts a placed feature id, [list of placed feature ids], or #namespace:feature_tag
 "steps": "underground_ores" OR ["underground_ores", "vegetal_decoration"] // one or more decoration steps; optional field, defaults to all steps if not specified
 }

Enclosing class: ForgeBiomeModifiers

### Fields
- `private final HolderSet<Biome> biomes`
  The field for the biomes record component.
- `private final HolderSet<PlacedFeature> features`
  The field for the features record component.
- `private final Set<GenerationStep.Decoration> steps`
  The field for the steps record component.
- `public static final com.mojang.serialization.Codec<ForgeBiomeModifiers.RemoveFeaturesBiomeModifier> CODEC`

### Inherited fields
- from `net.minecraftforge.common.world.BiomeModifier`: `DIRECT_CODEC`, `LIST_CODEC`, `REFERENCE_CODEC`

### Methods
- `public static ForgeBiomeModifiers.RemoveFeaturesBiomeModifier allSteps(HolderSet<Biome> biomes,  HolderSet<PlacedFeature> features)`
  Creates a modifier that removes the given features from all decoration steps in the given biomes.
  - param: biomes - Biomes to remove features from.
  - param: features - PlacedFeatures to remove from biomes.
- `public void modify(Holder<Biome> biome,  BiomeModifier.Phase phase,  ModifiableBiomeInfo.BiomeInfo.Builder builder)`
  Description copied from interface: BiomeModifier
  Modifies the information via the provided biome builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: biome - the named biome being modified (with original data readable).
  - param: phase - biome modification phase. Biome modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable biome info builder. Apply changes to this.
- `public com.mojang.serialization.Codec<? extends BiomeModifier> codec()`
  - returns: the codec which serializes and deserializes this biome modifier
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
- `public HolderSet<PlacedFeature> features()`
  Returns the value of the features record component.
  - returns: the value of the features record component
- `public Set<GenerationStep.Decoration> steps()`
  Returns the value of the steps record component.
  - returns: the value of the steps record component

## ForgeBiomeModifiers.RemoveSpawnsBiomeModifier

*record* `net.minecraftforge.common.world.ForgeBiomeModifiers.RemoveSpawnsBiomeModifier`

Stock biome modifier that removes mob spawns from a biome. Has the following json format:
 {
 "type": "forge:add_spawns", // Required
 "biomes": "#namespace:biome_tag", // Accepts a biome id, [list of biome ids], or #namespace:biome_tag
 "entity_types": #namespace:entitytype_tag // Accepts an entity type, [list of entity types], or #namespace:entitytype_tag
 }

Enclosing class: ForgeBiomeModifiers

### Fields
- `private final HolderSet<Biome> biomes`
  The field for the biomes record component.
- `private final HolderSet<EntityType<?>> entityTypes`
  The field for the entityTypes record component.
- `public static final com.mojang.serialization.Codec<ForgeBiomeModifiers.RemoveSpawnsBiomeModifier> CODEC`

### Inherited fields
- from `net.minecraftforge.common.world.BiomeModifier`: `DIRECT_CODEC`, `LIST_CODEC`, `REFERENCE_CODEC`

### Methods
- `public void modify(Holder<Biome> biome,  BiomeModifier.Phase phase,  ModifiableBiomeInfo.BiomeInfo.Builder builder)`
  Description copied from interface: BiomeModifier
  Modifies the information via the provided biome builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: biome - the named biome being modified (with original data readable).
  - param: phase - biome modification phase. Biome modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable biome info builder. Apply changes to this.
- `public com.mojang.serialization.Codec<? extends BiomeModifier> codec()`
  - returns: the codec which serializes and deserializes this biome modifier
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
- `public HolderSet<EntityType<?>> entityTypes()`
  Returns the value of the entityTypes record component.
  - returns: the value of the entityTypes record component

## ForgeChunkManager

*class* `net.minecraftforge.common.world.ForgeChunkManager`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final TicketType<ForgeChunkManager.TicketOwner<BlockPos>> BLOCK`
- `private static final TicketType<ForgeChunkManager.TicketOwner<BlockPos>> BLOCK_TICKING`
- `private static final TicketType<ForgeChunkManager.TicketOwner<UUID>> ENTITY`
- `private static final TicketType<ForgeChunkManager.TicketOwner<UUID>> ENTITY_TICKING`
- `private static final Map<String,ForgeChunkManager.LoadingValidationCallback> callbacks`

### Methods
- `public static void setForcedChunkLoadingCallback(String modId,  ForgeChunkManager.LoadingValidationCallback callback)`
  Sets the forced chunk loading validation callback for the given mod. This allows for validating and removing no longer valid tickets on level load.
- `public static boolean hasForcedChunks(ServerLevel level)`
  Checks if a level has any forced chunks. Mainly used for seeing if a level should continue ticking with no players in it.
- `public static boolean forceChunk(ServerLevel level,  String modId,  BlockPos owner,  int chunkX,  int chunkZ,  boolean add,  boolean ticking)`
  Forces a chunk to be loaded for the given mod with the "owner" of the ticket being a given block position.
  - param: add - true to force the chunk, false to unforce the chunk.
  - param: ticking - true to make the chunk receive full chunk ticks even if there is no player nearby.
- `public static boolean forceChunk(ServerLevel level,  String modId,  Entity owner,  int chunkX,  int chunkZ,  boolean add,  boolean ticking)`
  Forces a chunk to be loaded for the given mod with the "owner" of the ticket being the UUID of the given entity.
  - param: add - true to force the chunk, false to unforce the chunk.
  - param: ticking - true to make the chunk receive full chunk ticks even if there is no player nearby.
- `public static boolean forceChunk(ServerLevel level,  String modId,  UUID owner,  int chunkX,  int chunkZ,  boolean add,  boolean ticking)`
  Forces a chunk to be loaded for the given mod with the "owner" of the ticket being a given UUID.
  - param: add - true to force the chunk, false to unforce the chunk.
  - param: ticking - true to make the chunk receive full chunk ticks even if there is no player nearby.
- `private static <T extends Comparable<? super T>> boolean forceChunk(ServerLevel level,  String modId,  T owner,  int chunkX,  int chunkZ,  boolean add,  boolean ticking,  TicketType<ForgeChunkManager.TicketOwner<T>> type,  Function<ForcedChunksSavedData,ForgeChunkManager.TicketTracker<T>> ticketGetter)`
  Forces a chunk to be loaded for the given mod with the given "owner".
  - param: add - true to force the chunk, false to unforce the chunk.
- `private static <T extends Comparable<? super T>> void forceChunk(ServerLevel level,  ChunkPos pos,  TicketType<ForgeChunkManager.TicketOwner<T>> type,  ForgeChunkManager.TicketOwner<T> owner,  boolean add,  boolean ticking)`
  Adds/Removes a ticket from the level's chunk provider with the proper levels to match the forced chunks.
  - param: add - true to force the chunk, false to unforce the chunk.
  - param: ticking - true to make the chunk receive full chunk ticks even if there is no player nearby.
- `public static void reinstatePersistentChunks(ServerLevel level,  ForcedChunksSavedData saveData)`
  Reinstates forge's forced chunks when vanilla initially loads a level and reinstates their forced chunks. This method also will validate all of forge's forced
   chunks using and registered ForgeChunkManager.LoadingValidationCallback.
- `private static <T extends Comparable<? super T>> Map<String,Map<T,com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>>> gatherTicketsByModId(ForgeChunkManager.TicketTracker<T> tickets)`
  Gathers tickets into a mod filtered map for use in providing all tickets a mod has registered to its ForgeChunkManager.LoadingValidationCallback.
- `private static <T extends Comparable<? super T>> void gatherTicketsByModId(Map<ForgeChunkManager.TicketOwner<T>,it.unimi.dsi.fastutil.longs.LongSet> tickets,  Function<com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>,it.unimi.dsi.fastutil.longs.LongSet> typeGetter,  Map<String,Map<T,com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>>> modSortedOwnedChunks)`
  Gathers tickets into a mod filtered map for use in providing all tickets a mod has registered to its ForgeChunkManager.LoadingValidationCallback.
- `private static <T extends Comparable<? super T>> void reinstatePersistentChunks(ServerLevel level,  TicketType<ForgeChunkManager.TicketOwner<T>> type,  Map<ForgeChunkManager.TicketOwner<T>,it.unimi.dsi.fastutil.longs.LongSet> tickets,  boolean ticking)`
  Adds back any persistent forced chunks to the level's chunk provider.
- `public static void writeForgeForcedChunks(CompoundTag nbt,  ForgeChunkManager.TicketTracker<BlockPos> blockForcedChunks,  ForgeChunkManager.TicketTracker<UUID> entityForcedChunks)`
  Writes the forge forced chunks into the NBT compound. Format is List{modid, List{ChunkPos, List{BlockPos}, List{UUID}}}
- `private static <T extends Comparable<? super T>> void writeForcedChunkOwners(Map<String,it.unimi.dsi.fastutil.longs.Long2ObjectMap<CompoundTag>> forcedEntries,  ForgeChunkManager.TicketTracker<T> tracker,  String listKey,  int listType,  BiConsumer<T,ListTag> ownerWriter)`
- `private static <T extends Comparable<? super T>> void writeForcedChunkOwners(Map<String,it.unimi.dsi.fastutil.longs.Long2ObjectMap<CompoundTag>> forcedEntries,  Map<ForgeChunkManager.TicketOwner<T>,it.unimi.dsi.fastutil.longs.LongSet> forcedChunks,  String listKey,  int listType,  BiConsumer<T,ListTag> ownerWriter)`
- `public static void readForgeForcedChunks(CompoundTag nbt,  ForgeChunkManager.TicketTracker<BlockPos> blockForcedChunks,  ForgeChunkManager.TicketTracker<UUID> entityForcedChunks)`
  Reads the forge forced chunks from the NBT compound. Format is List{modid, List{ChunkPos, List{BlockPos}, List{UUID}}}
- `private static void readBlockForcedChunks(String modId,  long chunkPos,  CompoundTag modEntry,  String key,  Map<ForgeChunkManager.TicketOwner<BlockPos>,it.unimi.dsi.fastutil.longs.LongSet> blockForcedChunks)`
  Reads the forge block forced chunks.
- `private static void readEntityForcedChunks(String modId,  long chunkPos,  CompoundTag modEntry,  String key,  Map<ForgeChunkManager.TicketOwner<UUID>,it.unimi.dsi.fastutil.longs.LongSet> entityForcedChunks)`
  Reads the forge entity forced chunks.

## ForgeChunkManager.LoadingValidationCallback

*interface* `net.minecraftforge.common.world.ForgeChunkManager.LoadingValidationCallback`

Enclosing class: ForgeChunkManager

### Methods
- `void validateTickets(ServerLevel level,  ForgeChunkManager.TicketHelper ticketHelper)`
  Called back when tickets are about to be loaded and reinstated to allow mods to invalidate and remove specific tickets that may no longer be valid.
  - param: level - The level
  - param: ticketHelper - Ticket helper to remove any invalid tickets.

## ForgeChunkManager.TicketHelper

*class* `net.minecraftforge.common.world.ForgeChunkManager.TicketHelper`

Class to help mods remove no longer valid tickets.

Enclosing class: ForgeChunkManager

### Fields
- `private final Map<BlockPos,com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>> blockTickets`
- `private final Map<UUID,com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>> entityTickets`
- `private final ForcedChunksSavedData saveData`
- `private final String modId`

### Methods
- `public Map<BlockPos,com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>> getBlockTickets()`
  Gets all "BLOCK" tickets this mod had registered and which block positions are forcing which chunks. First element of the pair is the non-fully ticking
   tickets, second element is the fully ticking tickets.
- `public Map<UUID,com.mojang.datafixers.util.Pair<it.unimi.dsi.fastutil.longs.LongSet,it.unimi.dsi.fastutil.longs.LongSet>> getEntityTickets()`
  Gets all "ENTITY" tickets this mod had registered and which entity (UUID) is forcing which chunks. First element of the pair is the non-fully ticking
   tickets, second element is the fully ticking tickets.
- `public void removeAllTickets(BlockPos owner)`
  Removes all tickets that a given block was responsible for; both ticking and not ticking.
  - param: owner - Block that was responsible.
- `public void removeAllTickets(UUID owner)`
  Removes all tickets that a given entity (UUID) was responsible for; both ticking and not ticking.
  - param: owner - Entity (UUID) that was responsible.
- `private <T extends Comparable<? super T>> void removeAllTickets(ForgeChunkManager.TicketTracker<T> tickets,  T owner)`
  Removes all tickets that a given owner was responsible for; both ticking and not ticking.
- `public void removeTicket(BlockPos owner,  long chunk,  boolean ticking)`
  Removes the ticket for the given chunk that a given block was responsible for.
  - param: owner - Block that was responsible.
  - param: chunk - Chunk to remove ticket of.
  - param: ticking - Whether or not the ticket to remove represents a ticking set of tickets or not.
- `public void removeTicket(UUID owner,  long chunk,  boolean ticking)`
  Removes the ticket for the given chunk that a given entity (UUID) was responsible for.
  - param: owner - Entity (UUID) that was responsible.
  - param: chunk - Chunk to remove ticket of.
  - param: ticking - Whether or not the ticket to remove represents a ticking set of tickets or not.
- `private <T extends Comparable<? super T>> void removeTicket(ForgeChunkManager.TicketTracker<T> tickets,  T owner,  long chunk,  boolean ticking)`

## ForgeChunkManager.TicketOwner>

*class* `net.minecraftforge.common.world.ForgeChunkManager.TicketOwner>`

Helper class to keep track of a ticket owner by modid and owner object

Enclosing class: ForgeChunkManager

### Fields
- `private final String modId`
- `private final T extends Comparable<? super T> owner`

### Methods
- `public int compareTo(ForgeChunkManager.TicketOwner<T> other)`
- `public boolean equals(Object o)`
- `public int hashCode()`

## ForgeChunkManager.TicketTracker>

*class* `net.minecraftforge.common.world.ForgeChunkManager.TicketTracker>`

Helper class to manage tracking and handling loaded tickets.

Enclosing class: ForgeChunkManager

### Fields
- `private final Map<ForgeChunkManager.TicketOwner<T extends Comparable<? super T>>,it.unimi.dsi.fastutil.longs.LongSet> chunks`
- `private final Map<ForgeChunkManager.TicketOwner<T extends Comparable<? super T>>,it.unimi.dsi.fastutil.longs.LongSet> tickingChunks`

### Methods
- `public Map<ForgeChunkManager.TicketOwner<T>,it.unimi.dsi.fastutil.longs.LongSet> getChunks()`
  Gets an unmodifiable view of the tracked chunks.
- `public Map<ForgeChunkManager.TicketOwner<T>,it.unimi.dsi.fastutil.longs.LongSet> getTickingChunks()`
  Gets an unmodifiable view of the tracked fully ticking chunks.
- `public boolean isEmpty()`
  Checks if this tracker is empty.
  - returns: true if there are no chunks or ticking chunks being tracked.
- `private Map<ForgeChunkManager.TicketOwner<T>,it.unimi.dsi.fastutil.longs.LongSet> getTickets(boolean ticking)`
- `private boolean remove(ForgeChunkManager.TicketOwner<T> owner,  long chunk,  boolean ticking)`
  - returns: true if the state changed.
- `private boolean add(ForgeChunkManager.TicketOwner<T> owner,  long chunk,  boolean ticking)`
  - returns: true if the state changed.

## MobSpawnSettingsBuilder

*class* `net.minecraftforge.common.world.MobSpawnSettingsBuilder`

### Fields
- `private final Set<MobCategory> typesView`
- `private final Set<EntityType<?>> costView`

### Inherited fields
- from `net.minecraft.world.level.biome.MobSpawnSettings.Builder`: `creatureGenerationProbability`, `mobSpawnCosts`, `spawners`

### Methods
- `public Set<MobCategory> getSpawnerTypes()`
- `public List<MobSpawnSettings.SpawnerData> getSpawner(MobCategory type)`
- `public Set<EntityType<?>> getEntityTypes()`
- `@Nullable public MobSpawnSettings.MobSpawnCost getCost(EntityType<?> type)`
- `public float getProbability()`
- `public MobSpawnSettingsBuilder disablePlayerSpawn()`

### Inherited methods
- from `net.minecraft.world.level.biome.MobSpawnSettings.Builder`: `addMobCharge`, `addSpawn`, `build`, `creatureGenerationProbability`

## ModifiableBiomeInfo

*class* `net.minecraftforge.common.world.ModifiableBiomeInfo`

Holds lazy-evaluable modified biome info.
 Memoizers are not used because it's important to return null
 without evaluating the biome info if it's accessed outside of a server context.

### Fields
- `@NotNull private final @NotNull ModifiableBiomeInfo.BiomeInfo originalBiomeInfo`
- `@Nullable private @Nullable ModifiableBiomeInfo.BiomeInfo modifiedBiomeInfo`

### Methods
- `@NotNull public @NotNull ModifiableBiomeInfo.BiomeInfo get()`
  Returns The modified biome info if modified biome info has been generated, otherwise gets original biome info.
  - returns: The modified biome info if modified biome info has been generated, otherwise gets original biome info
- `@NotNull public @NotNull ModifiableBiomeInfo.BiomeInfo getOriginalBiomeInfo()`
  Returns The original biome info that the associated biome was created with.
  - returns: The original biome info that the associated biome was created with
- `@Nullable public @Nullable ModifiableBiomeInfo.BiomeInfo getModifiedBiomeInfo()`
  Returns Modified biome info; null if it hasn't been set yet.
  - returns: Modified biome info; null if it hasn't been set yet
- `@Internal public void applyBiomeModifiers(Holder<Biome> biome,  List<BiomeModifier> biomeModifiers)`
  Internal forge method; the game will crash if mods invoke this.
   Creates and caches the modified biome info.
  - param: biome - named biome with original data.
  - param: biomeModifiers - biome modifiers to apply.
  - throws: IllegalStateException - if invoked more than once.

## ModifiableBiomeInfo.BiomeInfo

*record* `net.minecraftforge.common.world.ModifiableBiomeInfo.BiomeInfo`

Record containing raw biome data.

Enclosing class: ModifiableBiomeInfo

### Fields
- `private final Biome.ClimateSettings climateSettings`
  The field for the climateSettings record component.
- `private final BiomeSpecialEffects effects`
  The field for the effects record component.
- `private final BiomeGenerationSettings generationSettings`
  The field for the generationSettings record component.
- `private final MobSpawnSettings mobSpawnSettings`
  The field for the mobSpawnSettings record component.

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
- `public Biome.ClimateSettings climateSettings()`
  Returns the value of the climateSettings record component.
  - returns: the value of the climateSettings record component
- `public BiomeSpecialEffects effects()`
  Returns the value of the effects record component.
  - returns: the value of the effects record component
- `public BiomeGenerationSettings generationSettings()`
  Returns the value of the generationSettings record component.
  - returns: the value of the generationSettings record component
- `public MobSpawnSettings mobSpawnSettings()`
  Returns the value of the mobSpawnSettings record component.
  - returns: the value of the mobSpawnSettings record component

## ModifiableBiomeInfo.BiomeInfo.Builder

*class* `net.minecraftforge.common.world.ModifiableBiomeInfo.BiomeInfo.Builder`

Enclosing class: ModifiableBiomeInfo.BiomeInfo

### Fields
- `private ClimateSettingsBuilder climateSettings`
- `private BiomeSpecialEffectsBuilder effects`
- `private BiomeGenerationSettingsBuilder generationSettings`
- `private MobSpawnSettingsBuilder mobSpawnSettings`

### Methods
- `public static ModifiableBiomeInfo.BiomeInfo.Builder copyOf(ModifiableBiomeInfo.BiomeInfo original)`
  - param: original - the biome to copy
  - returns: A ModifiedBiomeInfo.Builder with a copy of the biome's data
- `public ModifiableBiomeInfo.BiomeInfo build()`
- `public ClimateSettingsBuilder getClimateSettings()`
- `public BiomeSpecialEffectsBuilder getSpecialEffects()`
- `public BiomeGenerationSettingsBuilder getGenerationSettings()`
- `public MobSpawnSettingsBuilder getMobSpawnSettings()`

## ModifiableStructureInfo

*class* `net.minecraftforge.common.world.ModifiableStructureInfo`

Holds lazy-evaluable modified structure info.
 Memoizers are not used because it's important to return null
 without evaluating the structure info if it's accessed outside of a server context.

### Fields
- `@NotNull private final @NotNull ModifiableStructureInfo.StructureInfo originalStructureInfo`
- `@Nullable private @Nullable ModifiableStructureInfo.StructureInfo modifiedStructureInfo`

### Methods
- `@NotNull public @NotNull ModifiableStructureInfo.StructureInfo get()`
  Returns The modified structure info if modified structure info has been generated, otherwise gets original structure info.
  - returns: The modified structure info if modified structure info has been generated, otherwise gets original structure info
- `@NotNull public @NotNull ModifiableStructureInfo.StructureInfo getOriginalStructureInfo()`
  Returns The original structure info that the associated structure was created with.
  - returns: The original structure info that the associated structure was created with
- `@Nullable public @Nullable ModifiableStructureInfo.StructureInfo getModifiedStructureInfo()`
  Returns Modified structure info; null if it hasn't been set yet.
  - returns: Modified structure info; null if it hasn't been set yet
- `@Internal public void applyStructureModifiers(Holder<Structure> structure,  List<StructureModifier> structureModifiers)`
  Internal forge method; the game will crash if mods invoke this.
   Creates and caches the modified structure info.
  - param: structure - named structure with original data.
  - param: structureModifiers - structure modifiers to apply.
  - throws: IllegalStateException - if invoked more than once.

## ModifiableStructureInfo.StructureInfo

*record* `net.minecraftforge.common.world.ModifiableStructureInfo.StructureInfo`

Record containing raw structure data.

Enclosing class: ModifiableStructureInfo

### Fields
- `private final Structure.StructureSettings structureSettings`
  The field for the structureSettings record component.

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
- `public Structure.StructureSettings structureSettings()`
  Returns the value of the structureSettings record component.
  - returns: the value of the structureSettings record component

## ModifiableStructureInfo.StructureInfo.Builder

*class* `net.minecraftforge.common.world.ModifiableStructureInfo.StructureInfo.Builder`

Enclosing class: ModifiableStructureInfo.StructureInfo

### Fields
- `private StructureSettingsBuilder structureSettings`

### Methods
- `public static ModifiableStructureInfo.StructureInfo.Builder copyOf(ModifiableStructureInfo.StructureInfo original)`
  - param: original - Original structure information
  - returns: A ModifiedStructureInfo.StructureInfo.Builder with a copy of the structure's data
- `public ModifiableStructureInfo.StructureInfo build()`
- `public StructureSettingsBuilder getStructureSettings()`

## NoneBiomeModifier

*class* `net.minecraftforge.common.world.NoneBiomeModifier`

Noop biome modifier. Can be used in a biome modifier json with "type": "forge:none".

### Fields
- `public static final NoneBiomeModifier INSTANCE`
- `public static final com.mojang.serialization.Codec<NoneBiomeModifier> CODEC`

### Inherited fields
- from `net.minecraftforge.common.world.BiomeModifier`: `DIRECT_CODEC`, `LIST_CODEC`, `REFERENCE_CODEC`

### Methods
- `public void modify(Holder<Biome> biome,  BiomeModifier.Phase phase,  ModifiableBiomeInfo.BiomeInfo.Builder builder)`
  Description copied from interface: BiomeModifier
  Modifies the information via the provided biome builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: biome - the named biome being modified (with original data readable).
  - param: phase - biome modification phase. Biome modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable biome info builder. Apply changes to this.
- `public com.mojang.serialization.Codec<? extends BiomeModifier> codec()`
  - returns: the codec which serializes and deserializes this biome modifier

## NoneStructureModifier

*class* `net.minecraftforge.common.world.NoneStructureModifier`

Noop structure modifier. Can be used in a structure modifier json with "type": "forge:none".
 intended for datapack makers who want to disable a structure modifier

### Fields
- `public static final NoneStructureModifier INSTANCE`
- `public static final com.mojang.serialization.Codec<NoneStructureModifier> CODEC`

### Inherited fields
- from `net.minecraftforge.common.world.StructureModifier`: `DIRECT_CODEC`, `LIST_CODEC`, `REFERENCE_CODEC`

### Methods
- `public void modify(Holder<Structure> structure,  StructureModifier.Phase phase,  ModifiableStructureInfo.StructureInfo.Builder builder)`
  Description copied from interface: StructureModifier
  Modifies the information via the provided structure builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: structure - the named structure being modified (with original data readable).
  - param: phase - structure modification phase. Structure modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable structure info builder. Apply changes to this.
- `public com.mojang.serialization.Codec<? extends StructureModifier> codec()`
  - returns: the codec which serializes and deserializes this structure modifier

## PieceBeardifierModifier

*interface* `net.minecraftforge.common.world.PieceBeardifierModifier`

Implement this interface in a StructurePiece class extension to modify its Beardifier behavior.

### Methods
- `BoundingBox getBeardifierBox()`
- `TerrainAdjustment getTerrainAdjustment()`
- `int getGroundLevelDelta()`

## StructureModifier

*interface* `net.minecraftforge.common.world.StructureModifier`

JSON-serializable structure modifier.
 Requires a Codec to deserialize structure modifiers from structure modifier jsons.

 Structure modifier jsons have the following json format:
 {
 "type": "yourmod:yourserializer", // Indicates a registered structure modifier serializer
 // Additional fields can be specified here according to the codec
 }

 Datapacks can also disable a structure modifier by overriding the json and using "type": "forge:none".

### Fields
- `static final com.mojang.serialization.Codec<StructureModifier> DIRECT_CODEC`
  Codec for (de)serializing structure modifiers inline.
   Mods can use this for data generation.
- `static final com.mojang.serialization.Codec<Holder<StructureModifier>> REFERENCE_CODEC`
  Codec for referring to structure modifiers by id in other datapack registry files.
   Can only be used with RegistryOps.
- `static final com.mojang.serialization.Codec<HolderSet<StructureModifier>> LIST_CODEC`
  Codec for referring to structure modifiers by id, list of id, or tags.
   Can only be used with RegistryOps.

### Methods
- `void modify(Holder<Structure> structure,  StructureModifier.Phase phase,  ModifiableStructureInfo.StructureInfo.Builder builder)`
  Modifies the information via the provided structure builder.
   Allows mob spawns and world-gen features to be added or removed,
   and climate and client effects to be modified.
  - param: structure - the named structure being modified (with original data readable).
  - param: phase - structure modification phase. Structure modifiers apply in each phase in order of the enum constants.
  - param: builder - mutable structure info builder. Apply changes to this.
- `com.mojang.serialization.Codec<? extends StructureModifier> codec()`
  - returns: the codec which serializes and deserializes this structure modifier

## StructureSettingsBuilder

*class* `net.minecraftforge.common.world.StructureSettingsBuilder`

### Fields
- `private HolderSet<Biome> biomes`
- `private final Map<MobCategory,StructureSettingsBuilder.StructureSpawnOverrideBuilder> spawnOverrides`
- `private GenerationStep.Decoration step`
- `private TerrainAdjustment terrainAdaptation`

### Methods
- `public static StructureSettingsBuilder copyOf(Structure.StructureSettings settings)`
  - param: settings - Existing StructureSettings.
  - returns: A new builder with a copy of that StructureSettings's values.
- `public Structure.StructureSettings build()`
  - returns: A new StructureSettings with the finalized values.
- `public HolderSet<Biome> getBiomes()`
- `public void setBiomes(HolderSet<Biome> biomes)`
- `@Nullable public @Nullable StructureSettingsBuilder.StructureSpawnOverrideBuilder getSpawnOverrides(MobCategory category)`
  Gets a mutable builder for the spawn overrides of a given mob category or null if no overrides are defined for that category.
  - param: category - Mob category
- `public StructureSettingsBuilder.StructureSpawnOverrideBuilder getOrAddSpawnOverrides(MobCategory category)`
  Gets or creates a mutable builder for the spawn overrides of a given mob category. If the override needed to be created it will default to piece bounding.
  - param: category - Mob category
- `public void removeSpawnOverrides(MobCategory category)`
  Removes the spawn overrides for the given mob category.
  - param: category - Mob category
- `public GenerationStep.Decoration getDecorationStep()`
  Gets the world generation decoration step the structure spawns during.
- `public void setDecorationStep(GenerationStep.Decoration step)`
  Sets the world generation decoration step the structure spawns during.
- `public TerrainAdjustment getTerrainAdaptation()`
  Gets the way the structure adapts to the terrain during generation.
- `public void setTerrainAdaptation(TerrainAdjustment terrainAdaptation)`
  Sets the way the structure adapts to the terrain during generation.
  - param: terrainAdaptation - New terrain adjustment

## StructureSettingsBuilder.StructureSpawnOverrideBuilder

*class* `net.minecraftforge.common.world.StructureSettingsBuilder.StructureSpawnOverrideBuilder`

Enclosing class: StructureSettingsBuilder

### Fields
- `private StructureSpawnOverride.BoundingBoxType boundingBox`
- `private final List<MobSpawnSettings.SpawnerData> spawns`
- `private final List<MobSpawnSettings.SpawnerData> spawnsView`

### Methods
- `public static StructureSettingsBuilder.StructureSpawnOverrideBuilder copyOf(StructureSpawnOverride override)`
  - param: override - Existing spawn override data.
  - returns: A new builder with a copy of that StructureSpawnOverride's values.
- `public StructureSpawnOverride.BoundingBoxType getBoundingBox()`
  Gets the type of bounding box for this structures spawn overrides.
- `public void setBoundingBox(StructureSpawnOverride.BoundingBoxType boundingBox)`
  Sets the way the structure checks for spawn overrides. Whether it is on a piece by piece basis or within the bounds of the overall structure.
- `public List<MobSpawnSettings.SpawnerData> getSpawns()`
  Unmodifiable view of the possible spawns.
- `public void addSpawn(MobSpawnSettings.SpawnerData spawn)`
  Adds a spawn to the overrides.
- `public void removeSpawn(MobSpawnSettings.SpawnerData spawn)`
  Removes a given spawn from the list of overrides. Use getSpawns() to get instances of spawn data to remove.
- `public StructureSpawnOverride build()`
  - returns: A new StructureSpawnOverride with the finalized values.
