# net.minecraft.core.registries

- [BuiltInRegistries](#builtinregistries)
- [BuiltInRegistries.RegistryBootstrap](#builtinregistries.registrybootstrap)
- [Registries](#registries)
## BuiltInRegistries

*class* `net.minecraft.core.registries.BuiltInRegistries`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Map<ResourceLocation,Supplier<?>> LOADERS`
- `public static final ResourceLocation ROOT_REGISTRY_NAME`
- `private static final WritableRegistry<WritableRegistry<?>> WRITABLE_REGISTRY`
- `public static final DefaultedRegistry<GameEvent> GAME_EVENT`
- `@Deprecated public static final Registry<SoundEvent> SOUND_EVENT` (deprecated)
- `@Deprecated public static final DefaultedRegistry<Fluid> FLUID` (deprecated)
- `@Deprecated public static final Registry<MobEffect> MOB_EFFECT` (deprecated)
- `@Deprecated public static final DefaultedRegistry<Block> BLOCK` (deprecated)
- `@Deprecated public static final Registry<Enchantment> ENCHANTMENT` (deprecated)
- `@Deprecated public static final DefaultedRegistry<EntityType<?>> ENTITY_TYPE` (deprecated)
- `@Deprecated public static final DefaultedRegistry<Item> ITEM` (deprecated)
- `@Deprecated public static final DefaultedRegistry<Potion> POTION` (deprecated)
- `@Deprecated public static final Registry<ParticleType<?>> PARTICLE_TYPE` (deprecated)
- `@Deprecated public static final Registry<BlockEntityType<?>> BLOCK_ENTITY_TYPE` (deprecated)
- `@Deprecated public static final DefaultedRegistry<PaintingVariant> PAINTING_VARIANT` (deprecated)
- `public static final Registry<ResourceLocation> CUSTOM_STAT`
- `@Deprecated public static final DefaultedRegistry<ChunkStatus> CHUNK_STATUS` (deprecated)
- `public static final Registry<RuleTestType<?>> RULE_TEST`
- `public static final Registry<RuleBlockEntityModifierType<?>> RULE_BLOCK_ENTITY_MODIFIER`
- `public static final Registry<PosRuleTestType<?>> POS_RULE_TEST`
- `@Deprecated public static final Registry<MenuType<?>> MENU` (deprecated)
- `@Deprecated public static final Registry<RecipeType<?>> RECIPE_TYPE` (deprecated)
- `@Deprecated public static final Registry<RecipeSerializer<?>> RECIPE_SERIALIZER` (deprecated)
- `@Deprecated public static final Registry<Attribute> ATTRIBUTE` (deprecated)
- `public static final Registry<PositionSourceType<?>> POSITION_SOURCE_TYPE`
- `@Deprecated public static final Registry<ArgumentTypeInfo<?,?>> COMMAND_ARGUMENT_TYPE` (deprecated)
- `@Deprecated public static final Registry<StatType<?>> STAT_TYPE` (deprecated)
- `public static final DefaultedRegistry<VillagerType> VILLAGER_TYPE`
- `@Deprecated public static final DefaultedRegistry<VillagerProfession> VILLAGER_PROFESSION` (deprecated)
- `@Deprecated public static final Registry<PoiType> POINT_OF_INTEREST_TYPE` (deprecated)
- `@Deprecated public static final DefaultedRegistry<MemoryModuleType<?>> MEMORY_MODULE_TYPE` (deprecated)
- `@Deprecated public static final DefaultedRegistry<SensorType<?>> SENSOR_TYPE` (deprecated)
- `@Deprecated public static final Registry<Schedule> SCHEDULE` (deprecated)
- `@Deprecated public static final Registry<Activity> ACTIVITY` (deprecated)
- `public static final Registry<LootPoolEntryType> LOOT_POOL_ENTRY_TYPE`
- `public static final Registry<LootItemFunctionType> LOOT_FUNCTION_TYPE`
- `public static final Registry<LootItemConditionType> LOOT_CONDITION_TYPE`
- `public static final Registry<LootNumberProviderType> LOOT_NUMBER_PROVIDER_TYPE`
- `public static final Registry<LootNbtProviderType> LOOT_NBT_PROVIDER_TYPE`
- `public static final Registry<LootScoreProviderType> LOOT_SCORE_PROVIDER_TYPE`
- `public static final Registry<FloatProviderType<?>> FLOAT_PROVIDER_TYPE`
- `public static final Registry<IntProviderType<?>> INT_PROVIDER_TYPE`
- `public static final Registry<HeightProviderType<?>> HEIGHT_PROVIDER_TYPE`
- `public static final Registry<BlockPredicateType<?>> BLOCK_PREDICATE_TYPE`
- `@Deprecated public static final Registry<WorldCarver<?>> CARVER` (deprecated)
- `@Deprecated public static final Registry<Feature<?>> FEATURE` (deprecated)
- `public static final Registry<StructurePlacementType<?>> STRUCTURE_PLACEMENT`
- `public static final Registry<StructurePieceType> STRUCTURE_PIECE`
- `public static final Registry<StructureType<?>> STRUCTURE_TYPE`
- `public static final Registry<PlacementModifierType<?>> PLACEMENT_MODIFIER_TYPE`
- `@Deprecated public static final Registry<BlockStateProviderType<?>> BLOCKSTATE_PROVIDER_TYPE` (deprecated)
- `@Deprecated public static final Registry<FoliagePlacerType<?>> FOLIAGE_PLACER_TYPE` (deprecated)
- `public static final Registry<TrunkPlacerType<?>> TRUNK_PLACER_TYPE`
- `public static final Registry<RootPlacerType<?>> ROOT_PLACER_TYPE`
- `@Deprecated public static final Registry<TreeDecoratorType<?>> TREE_DECORATOR_TYPE` (deprecated)
- `public static final Registry<FeatureSizeType<?>> FEATURE_SIZE_TYPE`
- `public static final Registry<com.mojang.serialization.Codec<? extends BiomeSource>> BIOME_SOURCE`
- `public static final Registry<com.mojang.serialization.Codec<? extends ChunkGenerator>> CHUNK_GENERATOR`
- `public static final Registry<com.mojang.serialization.Codec<? extends SurfaceRules.ConditionSource>> MATERIAL_CONDITION`
- `public static final Registry<com.mojang.serialization.Codec<? extends SurfaceRules.RuleSource>> MATERIAL_RULE`
- `public static final Registry<com.mojang.serialization.Codec<? extends DensityFunction>> DENSITY_FUNCTION_TYPE`
- `public static final Registry<StructureProcessorType<?>> STRUCTURE_PROCESSOR`
- `public static final Registry<StructurePoolElementType<?>> STRUCTURE_POOL_ELEMENT`
- `public static final Registry<CatVariant> CAT_VARIANT`
- `public static final Registry<FrogVariant> FROG_VARIANT`
- `public static final Registry<BannerPattern> BANNER_PATTERN`
- `public static final Registry<Instrument> INSTRUMENT`
- `public static final Registry<String> DECORATED_POT_PATTERNS`
- `public static final Registry<CreativeModeTab> CREATIVE_MODE_TAB`
- `public static final Registry<? extends Registry<?>> REGISTRY`

### Methods
- `private static <T> Registry<T> registerSimple(ResourceKey<? extends Registry<T>> p_260095_,  BuiltInRegistries.RegistryBootstrap<T> p_259057_)`
- `private static <T> Registry<T> registerSimpleWithIntrusiveHolders(ResourceKey<? extends Registry<T>> p_297531_,  BuiltInRegistries.RegistryBootstrap<T> p_298446_)`
- `private static <T> Registry<T> forge(ResourceKey<? extends Registry<T>> key,  BuiltInRegistries.RegistryBootstrap<T> def)`
- `private static <T> DefaultedRegistry<T> registerDefaulted(ResourceKey<? extends Registry<T>> p_259887_,  String p_259325_,  BuiltInRegistries.RegistryBootstrap<T> p_259759_)`
- `private static <T> DefaultedRegistry<T> forge(ResourceKey<? extends Registry<T>> key,  String defKey,  BuiltInRegistries.RegistryBootstrap<T> def)`
- `private static <T> DefaultedRegistry<T> registerDefaultedWithIntrusiveHolders(ResourceKey<? extends Registry<T>> p_259296_,  String p_259101_,  BuiltInRegistries.RegistryBootstrap<T> p_259485_)`
- `private static <T> Registry<T> registerSimple(ResourceKey<? extends Registry<T>> p_259121_,  com.mojang.serialization.Lifecycle p_259977_,  BuiltInRegistries.RegistryBootstrap<T> p_259874_)`
- `private static <T> Registry<T> forge(ResourceKey<? extends Registry<T>> key,  com.mojang.serialization.Lifecycle cycle,  BuiltInRegistries.RegistryBootstrap<T> def)`
- `private static <T> DefaultedRegistry<T> registerDefaulted(ResourceKey<? extends Registry<T>> p_259400_,  String p_259678_,  com.mojang.serialization.Lifecycle p_259157_,  BuiltInRegistries.RegistryBootstrap<T> p_259806_)`
- `private static <T> DefaultedRegistry<T> forge(ResourceKey<? extends Registry<T>> key,  String defKey,  com.mojang.serialization.Lifecycle cycle,  BuiltInRegistries.RegistryBootstrap<T> def)`
- `private static <T> DefaultedRegistry<T> registerDefaultedWithIntrusiveHolders(ResourceKey<? extends Registry<T>> p_260010_,  String p_260220_,  com.mojang.serialization.Lifecycle p_260139_,  BuiltInRegistries.RegistryBootstrap<T> p_260185_)`
- `private static <T, R extends WritableRegistry<T>> R internalRegister(ResourceKey<? extends Registry<T>> p_259230_,  R p_260327_,  BuiltInRegistries.RegistryBootstrap<T> p_259210_,  com.mojang.serialization.Lifecycle p_259258_)`
- `public static void bootStrap()`
- `private static void createContents()`
- `private static void freeze()`
- `private static <T extends Registry<?>> void validate(Registry<T> p_260209_)`

## BuiltInRegistries.RegistryBootstrap

*interface* `net.minecraft.core.registries.BuiltInRegistries.RegistryBootstrap`

Enclosing class: BuiltInRegistries

### Methods
- `T run(Registry<T> p_260128_)`

## Registries

*class* `net.minecraft.core.registries.Registries`

### Fields
- `public static final ResourceKey<Registry<Activity>> ACTIVITY`
- `public static final ResourceKey<Registry<Attribute>> ATTRIBUTE`
- `public static final ResourceKey<Registry<BannerPattern>> BANNER_PATTERN`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends BiomeSource>>> BIOME_SOURCE`
- `public static final ResourceKey<Registry<Block>> BLOCK`
- `public static final ResourceKey<Registry<BlockEntityType<?>>> BLOCK_ENTITY_TYPE`
- `public static final ResourceKey<Registry<BlockPredicateType<?>>> BLOCK_PREDICATE_TYPE`
- `public static final ResourceKey<Registry<BlockStateProviderType<?>>> BLOCK_STATE_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<WorldCarver<?>>> CARVER`
- `public static final ResourceKey<Registry<CatVariant>> CAT_VARIANT`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends ChunkGenerator>>> CHUNK_GENERATOR`
- `public static final ResourceKey<Registry<ChunkStatus>> CHUNK_STATUS`
- `public static final ResourceKey<Registry<ArgumentTypeInfo<?,?>>> COMMAND_ARGUMENT_TYPE`
- `public static final ResourceKey<Registry<CreativeModeTab>> CREATIVE_MODE_TAB`
- `public static final ResourceKey<Registry<ResourceLocation>> CUSTOM_STAT`
- `public static final ResourceKey<Registry<DamageType>> DAMAGE_TYPE`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends DensityFunction>>> DENSITY_FUNCTION_TYPE`
- `public static final ResourceKey<Registry<Enchantment>> ENCHANTMENT`
- `public static final ResourceKey<Registry<EntityType<?>>> ENTITY_TYPE`
- `public static final ResourceKey<Registry<Feature<?>>> FEATURE`
- `public static final ResourceKey<Registry<FeatureSizeType<?>>> FEATURE_SIZE_TYPE`
- `public static final ResourceKey<Registry<FloatProviderType<?>>> FLOAT_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<Fluid>> FLUID`
- `public static final ResourceKey<Registry<FoliagePlacerType<?>>> FOLIAGE_PLACER_TYPE`
- `public static final ResourceKey<Registry<FrogVariant>> FROG_VARIANT`
- `public static final ResourceKey<Registry<GameEvent>> GAME_EVENT`
- `public static final ResourceKey<Registry<HeightProviderType<?>>> HEIGHT_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<Instrument>> INSTRUMENT`
- `public static final ResourceKey<Registry<IntProviderType<?>>> INT_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<Item>> ITEM`
- `public static final ResourceKey<Registry<LootItemConditionType>> LOOT_CONDITION_TYPE`
- `public static final ResourceKey<Registry<LootItemFunctionType>> LOOT_FUNCTION_TYPE`
- `public static final ResourceKey<Registry<LootNbtProviderType>> LOOT_NBT_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<LootNumberProviderType>> LOOT_NUMBER_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<LootPoolEntryType>> LOOT_POOL_ENTRY_TYPE`
- `public static final ResourceKey<Registry<LootScoreProviderType>> LOOT_SCORE_PROVIDER_TYPE`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends SurfaceRules.ConditionSource>>> MATERIAL_CONDITION`
- `public static final ResourceKey<Registry<com.mojang.serialization.Codec<? extends SurfaceRules.RuleSource>>> MATERIAL_RULE`
- `public static final ResourceKey<Registry<MemoryModuleType<?>>> MEMORY_MODULE_TYPE`
- `public static final ResourceKey<Registry<MenuType<?>>> MENU`
- `public static final ResourceKey<Registry<MobEffect>> MOB_EFFECT`
- `public static final ResourceKey<Registry<PaintingVariant>> PAINTING_VARIANT`
- `public static final ResourceKey<Registry<ParticleType<?>>> PARTICLE_TYPE`
- `public static final ResourceKey<Registry<PlacementModifierType<?>>> PLACEMENT_MODIFIER_TYPE`
- `public static final ResourceKey<Registry<PoiType>> POINT_OF_INTEREST_TYPE`
- `public static final ResourceKey<Registry<PositionSourceType<?>>> POSITION_SOURCE_TYPE`
- `public static final ResourceKey<Registry<PosRuleTestType<?>>> POS_RULE_TEST`
- `public static final ResourceKey<Registry<Potion>> POTION`
- `public static final ResourceKey<Registry<RecipeSerializer<?>>> RECIPE_SERIALIZER`
- `public static final ResourceKey<Registry<RecipeType<?>>> RECIPE_TYPE`
- `public static final ResourceKey<Registry<RootPlacerType<?>>> ROOT_PLACER_TYPE`
- `public static final ResourceKey<Registry<RuleTestType<?>>> RULE_TEST`
- `public static final ResourceKey<Registry<RuleBlockEntityModifierType<?>>> RULE_BLOCK_ENTITY_MODIFIER`
- `public static final ResourceKey<Registry<Schedule>> SCHEDULE`
- `public static final ResourceKey<Registry<SensorType<?>>> SENSOR_TYPE`
- `public static final ResourceKey<Registry<SoundEvent>> SOUND_EVENT`
- `public static final ResourceKey<Registry<StatType<?>>> STAT_TYPE`
- `public static final ResourceKey<Registry<StructurePieceType>> STRUCTURE_PIECE`
- `public static final ResourceKey<Registry<StructurePlacementType<?>>> STRUCTURE_PLACEMENT`
- `public static final ResourceKey<Registry<StructurePoolElementType<?>>> STRUCTURE_POOL_ELEMENT`
- `public static final ResourceKey<Registry<StructureProcessorType<?>>> STRUCTURE_PROCESSOR`
- `public static final ResourceKey<Registry<StructureType<?>>> STRUCTURE_TYPE`
- `public static final ResourceKey<Registry<TreeDecoratorType<?>>> TREE_DECORATOR_TYPE`
- `public static final ResourceKey<Registry<TrunkPlacerType<?>>> TRUNK_PLACER_TYPE`
- `public static final ResourceKey<Registry<VillagerProfession>> VILLAGER_PROFESSION`
- `public static final ResourceKey<Registry<VillagerType>> VILLAGER_TYPE`
- `public static final ResourceKey<Registry<String>> DECORATED_POT_PATTERNS`
- `public static final ResourceKey<Registry<Biome>> BIOME`
- `public static final ResourceKey<Registry<ChatType>> CHAT_TYPE`
- `public static final ResourceKey<Registry<ConfiguredWorldCarver<?>>> CONFIGURED_CARVER`
- `public static final ResourceKey<Registry<ConfiguredFeature<?,?>>> CONFIGURED_FEATURE`
- `public static final ResourceKey<Registry<DensityFunction>> DENSITY_FUNCTION`
- `public static final ResourceKey<Registry<DimensionType>> DIMENSION_TYPE`
- `public static final ResourceKey<Registry<FlatLevelGeneratorPreset>> FLAT_LEVEL_GENERATOR_PRESET`
- `public static final ResourceKey<Registry<NoiseGeneratorSettings>> NOISE_SETTINGS`
- `public static final ResourceKey<Registry<NormalNoise.NoiseParameters>> NOISE`
- `public static final ResourceKey<Registry<PlacedFeature>> PLACED_FEATURE`
- `public static final ResourceKey<Registry<Structure>> STRUCTURE`
- `public static final ResourceKey<Registry<StructureProcessorList>> PROCESSOR_LIST`
- `public static final ResourceKey<Registry<StructureSet>> STRUCTURE_SET`
- `public static final ResourceKey<Registry<StructureTemplatePool>> TEMPLATE_POOL`
- `public static final ResourceKey<Registry<TrimMaterial>> TRIM_MATERIAL`
- `public static final ResourceKey<Registry<TrimPattern>> TRIM_PATTERN`
- `public static final ResourceKey<Registry<WorldPreset>> WORLD_PRESET`
- `public static final ResourceKey<Registry<MultiNoiseBiomeSourceParameterList>> MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST`
- `public static final ResourceKey<Registry<Level>> DIMENSION`
- `public static final ResourceKey<Registry<LevelStem>> LEVEL_STEM`

### Methods
- `public static ResourceKey<Level> levelStemToLevel(ResourceKey<LevelStem> p_259475_)`
- `public static ResourceKey<LevelStem> levelToLevelStem(ResourceKey<Level> p_260225_)`
- `private static <T> ResourceKey<Registry<T>> createRegistryKey(String p_259572_)`
