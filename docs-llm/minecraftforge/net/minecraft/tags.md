# net.minecraft.tags

- [BannerPatternTags](#bannerpatterntags)
- [BiomeTags](#biometags)
- [BlockTags](#blocktags)
- [CatVariantTags](#catvarianttags)
- [DamageTypeTags](#damagetypetags)
- [EntityTypeTags](#entitytypetags)
- [FlatLevelGeneratorPresetTags](#flatlevelgeneratorpresettags)
- [FluidTags](#fluidtags)
- [GameEventTags](#gameeventtags)
- [InstrumentTags](#instrumenttags)
- [ItemTags](#itemtags)
- [PaintingVariantTags](#paintingvarianttags)
- [PoiTypeTags](#poitypetags)
- [StructureTags](#structuretags)
- [TagBuilder](#tagbuilder)
- [TagEntry](#tagentry)
- [TagEntry.Lookup](#tagentry.lookup)
- [TagFile](#tagfile)
- [TagKey](#tagkey)
- [TagLoader](#tagloader)
- [TagLoader.EntryWithSource](#tagloader.entrywithsource)
- [TagLoader.SortingEntry](#tagloader.sortingentry)
- [TagManager](#tagmanager)
- [TagManager.LoadResult](#tagmanager.loadresult)
- [TagNetworkSerialization](#tagnetworkserialization)
- [TagNetworkSerialization.NetworkPayload](#tagnetworkserialization.networkpayload)
- [TagNetworkSerialization.TagOutput](#tagnetworkserialization.tagoutput)
- [WorldPresetTags](#worldpresettags)
## BannerPatternTags

*class* `net.minecraft.tags.BannerPatternTags`

### Fields
- `public static final TagKey<BannerPattern> NO_ITEM_REQUIRED`
- `public static final TagKey<BannerPattern> PATTERN_ITEM_FLOWER`
- `public static final TagKey<BannerPattern> PATTERN_ITEM_CREEPER`
- `public static final TagKey<BannerPattern> PATTERN_ITEM_SKULL`
- `public static final TagKey<BannerPattern> PATTERN_ITEM_MOJANG`
- `public static final TagKey<BannerPattern> PATTERN_ITEM_GLOBE`
- `public static final TagKey<BannerPattern> PATTERN_ITEM_PIGLIN`

### Methods
- `private static TagKey<BannerPattern> create(String p_215798_)`

## BiomeTags

*class* `net.minecraft.tags.BiomeTags`

### Fields
- `public static final TagKey<Biome> IS_DEEP_OCEAN`
- `public static final TagKey<Biome> IS_OCEAN`
- `public static final TagKey<Biome> IS_BEACH`
- `public static final TagKey<Biome> IS_RIVER`
- `public static final TagKey<Biome> IS_MOUNTAIN`
- `public static final TagKey<Biome> IS_BADLANDS`
- `public static final TagKey<Biome> IS_HILL`
- `public static final TagKey<Biome> IS_TAIGA`
- `public static final TagKey<Biome> IS_JUNGLE`
- `public static final TagKey<Biome> IS_FOREST`
- `public static final TagKey<Biome> IS_SAVANNA`
- `public static final TagKey<Biome> IS_OVERWORLD`
- `public static final TagKey<Biome> IS_NETHER`
- `public static final TagKey<Biome> IS_END`
- `public static final TagKey<Biome> STRONGHOLD_BIASED_TO`
- `public static final TagKey<Biome> HAS_BURIED_TREASURE`
- `public static final TagKey<Biome> HAS_DESERT_PYRAMID`
- `public static final TagKey<Biome> HAS_IGLOO`
- `public static final TagKey<Biome> HAS_JUNGLE_TEMPLE`
- `public static final TagKey<Biome> HAS_MINESHAFT`
- `public static final TagKey<Biome> HAS_MINESHAFT_MESA`
- `public static final TagKey<Biome> HAS_OCEAN_MONUMENT`
- `public static final TagKey<Biome> HAS_OCEAN_RUIN_COLD`
- `public static final TagKey<Biome> HAS_OCEAN_RUIN_WARM`
- `public static final TagKey<Biome> HAS_PILLAGER_OUTPOST`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_DESERT`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_JUNGLE`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_OCEAN`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_SWAMP`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_MOUNTAIN`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_STANDARD`
- `public static final TagKey<Biome> HAS_SHIPWRECK_BEACHED`
- `public static final TagKey<Biome> HAS_SHIPWRECK`
- `public static final TagKey<Biome> HAS_STRONGHOLD`
- `public static final TagKey<Biome> HAS_SWAMP_HUT`
- `public static final TagKey<Biome> HAS_VILLAGE_DESERT`
- `public static final TagKey<Biome> HAS_VILLAGE_PLAINS`
- `public static final TagKey<Biome> HAS_VILLAGE_SAVANNA`
- `public static final TagKey<Biome> HAS_VILLAGE_SNOWY`
- `public static final TagKey<Biome> HAS_VILLAGE_TAIGA`
- `public static final TagKey<Biome> HAS_TRAIL_RUINS`
- `public static final TagKey<Biome> HAS_WOODLAND_MANSION`
- `public static final TagKey<Biome> HAS_NETHER_FORTRESS`
- `public static final TagKey<Biome> HAS_NETHER_FOSSIL`
- `public static final TagKey<Biome> HAS_BASTION_REMNANT`
- `public static final TagKey<Biome> HAS_ANCIENT_CITY`
- `public static final TagKey<Biome> HAS_RUINED_PORTAL_NETHER`
- `public static final TagKey<Biome> HAS_END_CITY`
- `public static final TagKey<Biome> REQUIRED_OCEAN_MONUMENT_SURROUNDING`
- `public static final TagKey<Biome> MINESHAFT_BLOCKING`
- `public static final TagKey<Biome> PLAYS_UNDERWATER_MUSIC`
- `public static final TagKey<Biome> HAS_CLOSER_WATER_FOG`
- `public static final TagKey<Biome> WATER_ON_MAP_OUTLINES`
- `public static final TagKey<Biome> PRODUCES_CORALS_FROM_BONEMEAL`
- `public static final TagKey<Biome> INCREASED_FIRE_BURNOUT`
- `public static final TagKey<Biome> SNOW_GOLEM_MELTS`
- `public static final TagKey<Biome> WITHOUT_ZOMBIE_SIEGES`
- `public static final TagKey<Biome> WITHOUT_PATROL_SPAWNS`
- `public static final TagKey<Biome> WITHOUT_WANDERING_TRADER_SPAWNS`
- `public static final TagKey<Biome> SPAWNS_COLD_VARIANT_FROGS`
- `public static final TagKey<Biome> SPAWNS_WARM_VARIANT_FROGS`
- `public static final TagKey<Biome> SPAWNS_GOLD_RABBITS`
- `public static final TagKey<Biome> SPAWNS_WHITE_RABBITS`
- `public static final TagKey<Biome> REDUCED_WATER_AMBIENT_SPAWNS`
- `public static final TagKey<Biome> ALLOWS_TROPICAL_FISH_SPAWNS_AT_ANY_HEIGHT`
- `public static final TagKey<Biome> POLAR_BEARS_SPAWN_ON_ALTERNATE_BLOCKS`
- `public static final TagKey<Biome> MORE_FREQUENT_DROWNED_SPAWNS`
- `public static final TagKey<Biome> ALLOWS_SURFACE_SLIME_SPAWNS`
- `public static final TagKey<Biome> SPAWNS_SNOW_FOXES`

### Methods
- `private static TagKey<Biome> create(String p_207631_)`

## BlockTags

*class* `net.minecraft.tags.BlockTags`

### Fields
- `public static final TagKey<Block> WOOL`
- `public static final TagKey<Block> PLANKS`
- `public static final TagKey<Block> STONE_BRICKS`
- `public static final TagKey<Block> WOODEN_BUTTONS`
- `public static final TagKey<Block> STONE_BUTTONS`
- `public static final TagKey<Block> BUTTONS`
- `public static final TagKey<Block> WOOL_CARPETS`
- `public static final TagKey<Block> WOODEN_DOORS`
- `public static final TagKey<Block> WOODEN_STAIRS`
- `public static final TagKey<Block> WOODEN_SLABS`
- `public static final TagKey<Block> WOODEN_FENCES`
- `public static final TagKey<Block> PRESSURE_PLATES`
- `public static final TagKey<Block> WOODEN_PRESSURE_PLATES`
- `public static final TagKey<Block> STONE_PRESSURE_PLATES`
- `public static final TagKey<Block> WOODEN_TRAPDOORS`
- `public static final TagKey<Block> DOORS`
- `public static final TagKey<Block> SAPLINGS`
- `public static final TagKey<Block> LOGS_THAT_BURN`
- `public static final TagKey<Block> OVERWORLD_NATURAL_LOGS`
- `public static final TagKey<Block> LOGS`
- `public static final TagKey<Block> DARK_OAK_LOGS`
- `public static final TagKey<Block> OAK_LOGS`
- `public static final TagKey<Block> BIRCH_LOGS`
- `public static final TagKey<Block> ACACIA_LOGS`
- `public static final TagKey<Block> CHERRY_LOGS`
- `public static final TagKey<Block> JUNGLE_LOGS`
- `public static final TagKey<Block> SPRUCE_LOGS`
- `public static final TagKey<Block> MANGROVE_LOGS`
- `public static final TagKey<Block> CRIMSON_STEMS`
- `public static final TagKey<Block> WARPED_STEMS`
- `public static final TagKey<Block> BAMBOO_BLOCKS`
- `public static final TagKey<Block> WART_BLOCKS`
- `public static final TagKey<Block> BANNERS`
- `public static final TagKey<Block> SAND`
- `public static final TagKey<Block> SMELTS_TO_GLASS`
- `public static final TagKey<Block> STAIRS`
- `public static final TagKey<Block> SLABS`
- `public static final TagKey<Block> WALLS`
- `public static final TagKey<Block> ANVIL`
- `public static final TagKey<Block> RAILS`
- `public static final TagKey<Block> LEAVES`
- `public static final TagKey<Block> TRAPDOORS`
- `public static final TagKey<Block> SMALL_FLOWERS`
- `public static final TagKey<Block> BEDS`
- `public static final TagKey<Block> FENCES`
- `public static final TagKey<Block> TALL_FLOWERS`
- `public static final TagKey<Block> FLOWERS`
- `public static final TagKey<Block> PIGLIN_REPELLENTS`
- `public static final TagKey<Block> GOLD_ORES`
- `public static final TagKey<Block> IRON_ORES`
- `public static final TagKey<Block> DIAMOND_ORES`
- `public static final TagKey<Block> REDSTONE_ORES`
- `public static final TagKey<Block> LAPIS_ORES`
- `public static final TagKey<Block> COAL_ORES`
- `public static final TagKey<Block> EMERALD_ORES`
- `public static final TagKey<Block> COPPER_ORES`
- `public static final TagKey<Block> CANDLES`
- `public static final TagKey<Block> DIRT`
- `public static final TagKey<Block> TERRACOTTA`
- `public static final TagKey<Block> CONCRETE_POWDER`
- `public static final TagKey<Block> COMPLETES_FIND_TREE_TUTORIAL`
- `public static final TagKey<Block> FLOWER_POTS`
- `public static final TagKey<Block> ENDERMAN_HOLDABLE`
- `public static final TagKey<Block> ICE`
- `public static final TagKey<Block> VALID_SPAWN`
- `public static final TagKey<Block> IMPERMEABLE`
- `public static final TagKey<Block> UNDERWATER_BONEMEALS`
- `public static final TagKey<Block> CORAL_BLOCKS`
- `public static final TagKey<Block> WALL_CORALS`
- `public static final TagKey<Block> CORAL_PLANTS`
- `public static final TagKey<Block> CORALS`
- `public static final TagKey<Block> BAMBOO_PLANTABLE_ON`
- `public static final TagKey<Block> STANDING_SIGNS`
- `public static final TagKey<Block> WALL_SIGNS`
- `public static final TagKey<Block> SIGNS`
- `public static final TagKey<Block> CEILING_HANGING_SIGNS`
- `public static final TagKey<Block> WALL_HANGING_SIGNS`
- `public static final TagKey<Block> ALL_HANGING_SIGNS`
- `public static final TagKey<Block> ALL_SIGNS`
- `public static final TagKey<Block> DRAGON_IMMUNE`
- `public static final TagKey<Block> DRAGON_TRANSPARENT`
- `public static final TagKey<Block> WITHER_IMMUNE`
- `public static final TagKey<Block> WITHER_SUMMON_BASE_BLOCKS`
- `public static final TagKey<Block> BEEHIVES`
- `public static final TagKey<Block> CROPS`
- `public static final TagKey<Block> BEE_GROWABLES`
- `public static final TagKey<Block> PORTALS`
- `public static final TagKey<Block> FIRE`
- `public static final TagKey<Block> NYLIUM`
- `public static final TagKey<Block> BEACON_BASE_BLOCKS`
- `public static final TagKey<Block> SOUL_SPEED_BLOCKS`
- `public static final TagKey<Block> WALL_POST_OVERRIDE`
- `public static final TagKey<Block> CLIMBABLE`
- `public static final TagKey<Block> FALL_DAMAGE_RESETTING`
- `public static final TagKey<Block> SHULKER_BOXES`
- `public static final TagKey<Block> HOGLIN_REPELLENTS`
- `public static final TagKey<Block> SOUL_FIRE_BASE_BLOCKS`
- `public static final TagKey<Block> STRIDER_WARM_BLOCKS`
- `public static final TagKey<Block> CAMPFIRES`
- `public static final TagKey<Block> GUARDED_BY_PIGLINS`
- `public static final TagKey<Block> PREVENT_MOB_SPAWNING_INSIDE`
- `public static final TagKey<Block> FENCE_GATES`
- `public static final TagKey<Block> UNSTABLE_BOTTOM_CENTER`
- `public static final TagKey<Block> MUSHROOM_GROW_BLOCK`
- `public static final TagKey<Block> INFINIBURN_OVERWORLD`
- `public static final TagKey<Block> INFINIBURN_NETHER`
- `public static final TagKey<Block> INFINIBURN_END`
- `public static final TagKey<Block> BASE_STONE_OVERWORLD`
- `public static final TagKey<Block> STONE_ORE_REPLACEABLES`
- `public static final TagKey<Block> DEEPSLATE_ORE_REPLACEABLES`
- `public static final TagKey<Block> BASE_STONE_NETHER`
- `public static final TagKey<Block> OVERWORLD_CARVER_REPLACEABLES`
- `public static final TagKey<Block> NETHER_CARVER_REPLACEABLES`
- `public static final TagKey<Block> CANDLE_CAKES`
- `public static final TagKey<Block> CAULDRONS`
- `public static final TagKey<Block> CRYSTAL_SOUND_BLOCKS`
- `public static final TagKey<Block> INSIDE_STEP_SOUND_BLOCKS`
- `public static final TagKey<Block> COMBINATION_STEP_SOUND_BLOCKS`
- `public static final TagKey<Block> CAMEL_SAND_STEP_SOUND_BLOCKS`
- `public static final TagKey<Block> OCCLUDES_VIBRATION_SIGNALS`
- `public static final TagKey<Block> DAMPENS_VIBRATIONS`
- `public static final TagKey<Block> DRIPSTONE_REPLACEABLE`
- `public static final TagKey<Block> CAVE_VINES`
- `public static final TagKey<Block> MOSS_REPLACEABLE`
- `public static final TagKey<Block> LUSH_GROUND_REPLACEABLE`
- `public static final TagKey<Block> AZALEA_ROOT_REPLACEABLE`
- `public static final TagKey<Block> SMALL_DRIPLEAF_PLACEABLE`
- `public static final TagKey<Block> BIG_DRIPLEAF_PLACEABLE`
- `public static final TagKey<Block> SNOW`
- `public static final TagKey<Block> MINEABLE_WITH_AXE`
- `public static final TagKey<Block> MINEABLE_WITH_HOE`
- `public static final TagKey<Block> MINEABLE_WITH_PICKAXE`
- `public static final TagKey<Block> MINEABLE_WITH_SHOVEL`
- `public static final TagKey<Block> SWORD_EFFICIENT`
- `public static final TagKey<Block> NEEDS_DIAMOND_TOOL`
- `public static final TagKey<Block> NEEDS_IRON_TOOL`
- `public static final TagKey<Block> NEEDS_STONE_TOOL`
- `public static final TagKey<Block> FEATURES_CANNOT_REPLACE`
- `public static final TagKey<Block> LAVA_POOL_STONE_CANNOT_REPLACE`
- `public static final TagKey<Block> GEODE_INVALID_BLOCKS`
- `public static final TagKey<Block> FROG_PREFER_JUMP_TO`
- `public static final TagKey<Block> SCULK_REPLACEABLE`
- `public static final TagKey<Block> SCULK_REPLACEABLE_WORLD_GEN`
- `public static final TagKey<Block> ANCIENT_CITY_REPLACEABLE`
- `public static final TagKey<Block> VIBRATION_RESONATORS`
- `public static final TagKey<Block> ANIMALS_SPAWNABLE_ON`
- `public static final TagKey<Block> AXOLOTLS_SPAWNABLE_ON`
- `public static final TagKey<Block> GOATS_SPAWNABLE_ON`
- `public static final TagKey<Block> MOOSHROOMS_SPAWNABLE_ON`
- `public static final TagKey<Block> PARROTS_SPAWNABLE_ON`
- `public static final TagKey<Block> POLAR_BEARS_SPAWNABLE_ON_ALTERNATE`
- `public static final TagKey<Block> RABBITS_SPAWNABLE_ON`
- `public static final TagKey<Block> FOXES_SPAWNABLE_ON`
- `public static final TagKey<Block> WOLVES_SPAWNABLE_ON`
- `public static final TagKey<Block> FROGS_SPAWNABLE_ON`
- `public static final TagKey<Block> AZALEA_GROWS_ON`
- `public static final TagKey<Block> CONVERTABLE_TO_MUD`
- `public static final TagKey<Block> MANGROVE_LOGS_CAN_GROW_THROUGH`
- `public static final TagKey<Block> MANGROVE_ROOTS_CAN_GROW_THROUGH`
- `public static final TagKey<Block> DEAD_BUSH_MAY_PLACE_ON`
- `public static final TagKey<Block> SNAPS_GOAT_HORN`
- `public static final TagKey<Block> REPLACEABLE_BY_TREES`
- `public static final TagKey<Block> SNOW_LAYER_CANNOT_SURVIVE_ON`
- `public static final TagKey<Block> SNOW_LAYER_CAN_SURVIVE_ON`
- `public static final TagKey<Block> INVALID_SPAWN_INSIDE`
- `public static final TagKey<Block> SNIFFER_DIGGABLE_BLOCK`
- `public static final TagKey<Block> SNIFFER_EGG_HATCH_BOOST`
- `public static final TagKey<Block> TRAIL_RUINS_REPLACEABLE`
- `public static final TagKey<Block> REPLACEABLE`
- `public static final TagKey<Block> ENCHANTMENT_POWER_PROVIDER`
- `public static final TagKey<Block> ENCHANTMENT_POWER_TRANSMITTER`
- `public static final TagKey<Block> MAINTAINS_FARMLAND`

### Methods
- `private static TagKey<Block> create(String p_203847_)`
- `public static TagKey<Block> create(ResourceLocation name)`

## CatVariantTags

*class* `net.minecraft.tags.CatVariantTags`

### Fields
- `public static final TagKey<CatVariant> DEFAULT_SPAWNS`
- `public static final TagKey<CatVariant> FULL_MOON_SPAWNS`

### Methods
- `private static TagKey<CatVariant> create(String p_215846_)`

## DamageTypeTags

*interface* `net.minecraft.tags.DamageTypeTags`

### Fields
- `static final TagKey<DamageType> DAMAGES_HELMET`
- `static final TagKey<DamageType> BYPASSES_ARMOR`
- `static final TagKey<DamageType> BYPASSES_SHIELD`
- `static final TagKey<DamageType> BYPASSES_INVULNERABILITY`
- `static final TagKey<DamageType> BYPASSES_COOLDOWN`
- `static final TagKey<DamageType> BYPASSES_EFFECTS`
- `static final TagKey<DamageType> BYPASSES_RESISTANCE`
- `static final TagKey<DamageType> BYPASSES_ENCHANTMENTS`
- `static final TagKey<DamageType> IS_FIRE`
- `static final TagKey<DamageType> IS_PROJECTILE`
- `static final TagKey<DamageType> WITCH_RESISTANT_TO`
- `static final TagKey<DamageType> IS_EXPLOSION`
- `static final TagKey<DamageType> IS_FALL`
- `static final TagKey<DamageType> IS_DROWNING`
- `static final TagKey<DamageType> IS_FREEZING`
- `static final TagKey<DamageType> IS_LIGHTNING`
- `static final TagKey<DamageType> NO_ANGER`
- `static final TagKey<DamageType> NO_IMPACT`
- `static final TagKey<DamageType> ALWAYS_MOST_SIGNIFICANT_FALL`
- `static final TagKey<DamageType> WITHER_IMMUNE_TO`
- `static final TagKey<DamageType> IGNITES_ARMOR_STANDS`
- `static final TagKey<DamageType> BURNS_ARMOR_STANDS`
- `static final TagKey<DamageType> AVOIDS_GUARDIAN_THORNS`
- `static final TagKey<DamageType> ALWAYS_TRIGGERS_SILVERFISH`
- `static final TagKey<DamageType> ALWAYS_HURTS_ENDER_DRAGONS`
- `static final TagKey<DamageType> NO_KNOCKBACK`
- `static final TagKey<DamageType> ALWAYS_KILLS_ARMOR_STANDS`

### Methods
- `private static TagKey<DamageType> create(String p_270635_)`

## EntityTypeTags

*class* `net.minecraft.tags.EntityTypeTags`

### Fields
- `public static final TagKey<EntityType<?>> SKELETONS`
- `public static final TagKey<EntityType<?>> RAIDERS`
- `public static final TagKey<EntityType<?>> BEEHIVE_INHABITORS`
- `public static final TagKey<EntityType<?>> ARROWS`
- `public static final TagKey<EntityType<?>> IMPACT_PROJECTILES`
- `public static final TagKey<EntityType<?>> POWDER_SNOW_WALKABLE_MOBS`
- `public static final TagKey<EntityType<?>> AXOLOTL_ALWAYS_HOSTILES`
- `public static final TagKey<EntityType<?>> AXOLOTL_HUNT_TARGETS`
- `public static final TagKey<EntityType<?>> FREEZE_IMMUNE_ENTITY_TYPES`
- `public static final TagKey<EntityType<?>> FREEZE_HURTS_EXTRA_TYPES`
- `public static final TagKey<EntityType<?>> FROG_FOOD`
- `public static final TagKey<EntityType<?>> FALL_DAMAGE_IMMUNE`
- `public static final TagKey<EntityType<?>> DISMOUNTS_UNDERWATER`
- `public static final TagKey<EntityType<?>> NON_CONTROLLING_RIDER`

### Methods
- `private static TagKey<EntityType<?>> create(String p_203849_)`

## FlatLevelGeneratorPresetTags

*class* `net.minecraft.tags.FlatLevelGeneratorPresetTags`

### Fields
- `public static final TagKey<FlatLevelGeneratorPreset> VISIBLE`

### Methods
- `private static TagKey<FlatLevelGeneratorPreset> create(String p_215852_)`

## FluidTags

*class* `net.minecraft.tags.FluidTags`

### Fields
- `public static final TagKey<Fluid> WATER`
- `public static final TagKey<Fluid> LAVA`

### Methods
- `private static TagKey<Fluid> create(String p_203851_)`
- `public static TagKey<Fluid> create(ResourceLocation name)`

## GameEventTags

*class* `net.minecraft.tags.GameEventTags`

### Fields
- `public static final TagKey<GameEvent> VIBRATIONS`
- `public static final TagKey<GameEvent> WARDEN_CAN_LISTEN`
- `public static final TagKey<GameEvent> SHRIEKER_CAN_LISTEN`
- `public static final TagKey<GameEvent> IGNORE_VIBRATIONS_SNEAKING`
- `public static final TagKey<GameEvent> ALLAY_CAN_LISTEN`

### Methods
- `private static TagKey<GameEvent> create(String p_203853_)`

## InstrumentTags

*interface* `net.minecraft.tags.InstrumentTags`

### Fields
- `static final TagKey<Instrument> REGULAR_GOAT_HORNS`
- `static final TagKey<Instrument> SCREAMING_GOAT_HORNS`
- `static final TagKey<Instrument> GOAT_HORNS`

### Methods
- `private static TagKey<Instrument> create(String p_215861_)`

## ItemTags

*class* `net.minecraft.tags.ItemTags`

### Fields
- `public static final TagKey<Item> WOOL`
- `public static final TagKey<Item> PLANKS`
- `public static final TagKey<Item> STONE_BRICKS`
- `public static final TagKey<Item> WOODEN_BUTTONS`
- `public static final TagKey<Item> STONE_BUTTONS`
- `public static final TagKey<Item> BUTTONS`
- `public static final TagKey<Item> WOOL_CARPETS`
- `public static final TagKey<Item> WOODEN_DOORS`
- `public static final TagKey<Item> WOODEN_STAIRS`
- `public static final TagKey<Item> WOODEN_SLABS`
- `public static final TagKey<Item> WOODEN_FENCES`
- `public static final TagKey<Item> FENCE_GATES`
- `public static final TagKey<Item> WOODEN_PRESSURE_PLATES`
- `public static final TagKey<Item> WOODEN_TRAPDOORS`
- `public static final TagKey<Item> DOORS`
- `public static final TagKey<Item> SAPLINGS`
- `public static final TagKey<Item> LOGS_THAT_BURN`
- `public static final TagKey<Item> LOGS`
- `public static final TagKey<Item> DARK_OAK_LOGS`
- `public static final TagKey<Item> OAK_LOGS`
- `public static final TagKey<Item> BIRCH_LOGS`
- `public static final TagKey<Item> ACACIA_LOGS`
- `public static final TagKey<Item> CHERRY_LOGS`
- `public static final TagKey<Item> JUNGLE_LOGS`
- `public static final TagKey<Item> SPRUCE_LOGS`
- `public static final TagKey<Item> MANGROVE_LOGS`
- `public static final TagKey<Item> CRIMSON_STEMS`
- `public static final TagKey<Item> WARPED_STEMS`
- `public static final TagKey<Item> BAMBOO_BLOCKS`
- `public static final TagKey<Item> WART_BLOCKS`
- `public static final TagKey<Item> BANNERS`
- `public static final TagKey<Item> SAND`
- `public static final TagKey<Item> SMELTS_TO_GLASS`
- `public static final TagKey<Item> STAIRS`
- `public static final TagKey<Item> SLABS`
- `public static final TagKey<Item> WALLS`
- `public static final TagKey<Item> ANVIL`
- `public static final TagKey<Item> RAILS`
- `public static final TagKey<Item> LEAVES`
- `public static final TagKey<Item> TRAPDOORS`
- `public static final TagKey<Item> SMALL_FLOWERS`
- `public static final TagKey<Item> BEDS`
- `public static final TagKey<Item> FENCES`
- `public static final TagKey<Item> TALL_FLOWERS`
- `public static final TagKey<Item> FLOWERS`
- `public static final TagKey<Item> PIGLIN_REPELLENTS`
- `public static final TagKey<Item> PIGLIN_LOVED`
- `public static final TagKey<Item> IGNORED_BY_PIGLIN_BABIES`
- `public static final TagKey<Item> PIGLIN_FOOD`
- `public static final TagKey<Item> FOX_FOOD`
- `public static final TagKey<Item> GOLD_ORES`
- `public static final TagKey<Item> IRON_ORES`
- `public static final TagKey<Item> DIAMOND_ORES`
- `public static final TagKey<Item> REDSTONE_ORES`
- `public static final TagKey<Item> LAPIS_ORES`
- `public static final TagKey<Item> COAL_ORES`
- `public static final TagKey<Item> EMERALD_ORES`
- `public static final TagKey<Item> COPPER_ORES`
- `public static final TagKey<Item> NON_FLAMMABLE_WOOD`
- `public static final TagKey<Item> SOUL_FIRE_BASE_BLOCKS`
- `public static final TagKey<Item> CANDLES`
- `public static final TagKey<Item> DIRT`
- `public static final TagKey<Item> TERRACOTTA`
- `public static final TagKey<Item> COMPLETES_FIND_TREE_TUTORIAL`
- `public static final TagKey<Item> BOATS`
- `public static final TagKey<Item> CHEST_BOATS`
- `public static final TagKey<Item> FISHES`
- `public static final TagKey<Item> SIGNS`
- `public static final TagKey<Item> MUSIC_DISCS`
- `public static final TagKey<Item> CREEPER_DROP_MUSIC_DISCS`
- `public static final TagKey<Item> COALS`
- `public static final TagKey<Item> ARROWS`
- `public static final TagKey<Item> LECTERN_BOOKS`
- `public static final TagKey<Item> BOOKSHELF_BOOKS`
- `public static final TagKey<Item> BEACON_PAYMENT_ITEMS`
- `public static final TagKey<Item> STONE_TOOL_MATERIALS`
- `public static final TagKey<Item> STONE_CRAFTING_MATERIALS`
- `public static final TagKey<Item> FREEZE_IMMUNE_WEARABLES`
- `public static final TagKey<Item> AXOLOTL_TEMPT_ITEMS`
- `public static final TagKey<Item> DAMPENS_VIBRATIONS`
- `public static final TagKey<Item> CLUSTER_MAX_HARVESTABLES`
- `public static final TagKey<Item> COMPASSES`
- `public static final TagKey<Item> HANGING_SIGNS`
- `public static final TagKey<Item> CREEPER_IGNITERS`
- `public static final TagKey<Item> NOTE_BLOCK_TOP_INSTRUMENTS`
- `public static final TagKey<Item> TRIMMABLE_ARMOR`
- `public static final TagKey<Item> TRIM_MATERIALS`
- `public static final TagKey<Item> TRIM_TEMPLATES`
- `public static final TagKey<Item> SNIFFER_FOOD`
- `public static final TagKey<Item> DECORATED_POT_SHERDS`
- `public static final TagKey<Item> DECORATED_POT_INGREDIENTS`
- `public static final TagKey<Item> SWORDS`
- `public static final TagKey<Item> AXES`
- `public static final TagKey<Item> HOES`
- `public static final TagKey<Item> PICKAXES`
- `public static final TagKey<Item> SHOVELS`
- `public static final TagKey<Item> TOOLS`
- `public static final TagKey<Item> BREAKS_DECORATED_POTS`
- `public static final TagKey<Item> VILLAGER_PLANTABLE_SEEDS`

### Methods
- `private static TagKey<Item> bind(String p_203855_)`
- `public static TagKey<Item> create(ResourceLocation name)`

## PaintingVariantTags

*class* `net.minecraft.tags.PaintingVariantTags`

### Fields
- `public static final TagKey<PaintingVariant> PLACEABLE`

### Methods
- `private static TagKey<PaintingVariant> create(String p_215874_)`

## PoiTypeTags

*class* `net.minecraft.tags.PoiTypeTags`

### Fields
- `public static final TagKey<PoiType> ACQUIRABLE_JOB_SITE`
- `public static final TagKey<PoiType> VILLAGE`
- `public static final TagKey<PoiType> BEE_HOME`

### Methods
- `private static TagKey<PoiType> create(String p_215881_)`

## StructureTags

*interface* `net.minecraft.tags.StructureTags`

### Fields
- `static final TagKey<Structure> EYE_OF_ENDER_LOCATED`
- `static final TagKey<Structure> DOLPHIN_LOCATED`
- `static final TagKey<Structure> ON_WOODLAND_EXPLORER_MAPS`
- `static final TagKey<Structure> ON_OCEAN_EXPLORER_MAPS`
- `static final TagKey<Structure> ON_SAVANNA_VILLAGE_MAPS`
- `static final TagKey<Structure> ON_DESERT_VILLAGE_MAPS`
- `static final TagKey<Structure> ON_PLAINS_VILLAGE_MAPS`
- `static final TagKey<Structure> ON_TAIGA_VILLAGE_MAPS`
- `static final TagKey<Structure> ON_SNOWY_VILLAGE_MAPS`
- `static final TagKey<Structure> ON_JUNGLE_EXPLORER_MAPS`
- `static final TagKey<Structure> ON_SWAMP_EXPLORER_MAPS`
- `static final TagKey<Structure> ON_TREASURE_MAPS`
- `static final TagKey<Structure> CATS_SPAWN_IN`
- `static final TagKey<Structure> CATS_SPAWN_AS_BLACK`
- `static final TagKey<Structure> VILLAGE`
- `static final TagKey<Structure> MINESHAFT`
- `static final TagKey<Structure> SHIPWRECK`
- `static final TagKey<Structure> RUINED_PORTAL`
- `static final TagKey<Structure> OCEAN_RUIN`

### Methods
- `private static TagKey<Structure> create(String p_215896_)`

## TagBuilder

*class* `net.minecraft.tags.TagBuilder`

### Fields
- `private final List<TagEntry> removeEntries`
- `private boolean replace`
- `private final List<TagEntry> entries`

### Methods
- `public Stream<TagEntry> getRemoveEntries()`
- `public TagBuilder remove(TagEntry entry)`
- `public static TagBuilder create()`
- `public List<TagEntry> build()`
- `public TagBuilder add(TagEntry p_215903_)`
- `public TagBuilder addElement(ResourceLocation p_215901_)`
- `public TagBuilder addOptionalElement(ResourceLocation p_215906_)`
- `public TagBuilder addTag(ResourceLocation p_215908_)`
- `public TagBuilder addOptionalTag(ResourceLocation p_215910_)`
- `public TagBuilder replace(boolean value)`
- `public TagBuilder replace()`
- `public boolean isReplace()`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeRawTagBuilder`: `getRawBuilder`, `remove`, `removeElement`, `removeTag`, `serializeTagAdditions`

## TagEntry

*class* `net.minecraft.tags.TagEntry`

### Fields
- `private static final com.mojang.serialization.Codec<TagEntry> FULL_CODEC`
- `public static final com.mojang.serialization.Codec<TagEntry> CODEC`
- `private final ResourceLocation id`
- `private final boolean tag`
- `private final boolean required`

### Methods
- `private ExtraCodecs.TagOrElementLocation elementOrTag()`
- `public static TagEntry element(ResourceLocation p_215926_)`
- `public static TagEntry optionalElement(ResourceLocation p_215944_)`
- `public static TagEntry tag(ResourceLocation p_215950_)`
- `public static TagEntry optionalTag(ResourceLocation p_215954_)`
- `public <T> boolean build(TagEntry.Lookup<T> p_215928_,  Consumer<T> p_215929_)`
- `public void visitRequiredDependencies(Consumer<ResourceLocation> p_215939_)`
- `public void visitOptionalDependencies(Consumer<ResourceLocation> p_215948_)`
- `public boolean verifyIfPresent(Predicate<ResourceLocation> p_215941_,  Predicate<ResourceLocation> p_215942_)`
- `public String toString()`
- `public ResourceLocation getId()`
- `public boolean isRequired()`
- `public boolean isTag()`

## TagEntry.Lookup

*interface* `net.minecraft.tags.TagEntry.Lookup`

Enclosing class: TagEntry

### Methods
- `@Nullable T element(ResourceLocation p_215956_)`
- `@Nullable Collection<T> tag(ResourceLocation p_215957_)`

## TagFile

*record* `net.minecraft.tags.TagFile`

### Fields
- `private final List<TagEntry> entries`
  The field for the entries record component.
- `private final boolean replace`
  The field for the replace record component.
- `private final List<TagEntry> remove`
  The field for the remove record component.
- `public static final com.mojang.serialization.Codec<TagFile> CODEC`

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
- `public List<TagEntry> entries()`
  Returns the value of the entries record component.
  - returns: the value of the entries record component
- `public boolean replace()`
  Returns the value of the replace record component.
  - returns: the value of the replace record component
- `public List<TagEntry> remove()`
  Returns the value of the remove record component.
  - returns: the value of the remove record component

## TagKey

*record* `net.minecraft.tags.TagKey`

### Fields
- `private final ResourceKey<? extends Registry<T>> registry`
  The field for the registry record component.
- `private final ResourceLocation location`
  The field for the location record component.
- `private static final com.google.common.collect.Interner<TagKey<?>> VALUES`

### Methods
- `public static <T> com.mojang.serialization.Codec<TagKey<T>> codec(ResourceKey<? extends Registry<T>> p_203878_)`
- `public static <T> com.mojang.serialization.Codec<TagKey<T>> hashedCodec(ResourceKey<? extends Registry<T>> p_203887_)`
- `public static <T> TagKey<T> create(ResourceKey<? extends Registry<T>> p_203883_,  ResourceLocation p_203884_)`
- `public boolean isFor(ResourceKey<? extends Registry<?>> p_207646_)`
- `public <E> Optional<TagKey<E>> cast(ResourceKey<? extends Registry<E>> p_207648_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceKey<? extends Registry<T>> registry()`
  Returns the value of the registry record component.
  - returns: the value of the registry record component
- `public ResourceLocation location()`
  Returns the value of the location record component.
  - returns: the value of the location record component

## TagLoader

*class* `net.minecraft.tags.TagLoader`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `final Function<ResourceLocation,Optional<? extends T>> idToValue`
- `private final String directory`

### Methods
- `public Map<ResourceLocation,List<TagLoader.EntryWithSource>> load(ResourceManager p_144496_)`
- `private com.mojang.datafixers.util.Either<Collection<TagLoader.EntryWithSource>,Collection<T>> build(TagEntry.Lookup<T> p_215979_,  List<TagLoader.EntryWithSource> p_215980_)`
- `public Map<ResourceLocation,Collection<T>> build(Map<ResourceLocation,List<TagLoader.EntryWithSource>> p_203899_)`
- `public Map<ResourceLocation,Collection<T>> loadAndBuild(ResourceManager p_203901_)`

## TagLoader.EntryWithSource

*record* `net.minecraft.tags.TagLoader.EntryWithSource`

Enclosing class: TagLoader<T>

### Fields
- `private final TagEntry entry`
  The field for the entry record component.
- `private final String source`
  The field for the source record component.
- `private final boolean remove`
  The field for the remove record component.

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public TagEntry entry()`
  Returns the value of the entry record component.
  - returns: the value of the entry record component
- `public String source()`
  Returns the value of the source record component.
  - returns: the value of the source record component
- `public boolean remove()`
  Returns the value of the remove record component.
  - returns: the value of the remove record component

## TagLoader.SortingEntry

*record* `net.minecraft.tags.TagLoader.SortingEntry`

Enclosing class: TagLoader<T>

### Fields
- `private final List<TagLoader.EntryWithSource> entries`
  The field for the entries record component.

### Methods
- `public void visitRequiredDependencies(Consumer<ResourceLocation> p_285529_)`
- `public void visitOptionalDependencies(Consumer<ResourceLocation> p_285469_)`
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
- `public List<TagLoader.EntryWithSource> entries()`
  Returns the value of the entries record component.
  - returns: the value of the entries record component

## TagManager

*class* `net.minecraft.tags.TagManager`

### Fields
- `private static final Map<ResourceKey<? extends Registry<?>>,String> CUSTOM_REGISTRY_DIRECTORIES`
- `private final RegistryAccess registryAccess`
- `private List<TagManager.LoadResult<?>> results`

### Methods
- `public List<TagManager.LoadResult<?>> getResult()`
- `public static String getTagDir(ResourceKey<? extends Registry<?>> p_203919_)`
- `public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_13482_,  ResourceManager p_13483_,  ProfilerFiller p_13484_,  ProfilerFiller p_13485_,  Executor p_13486_,  Executor p_13487_)`
- `private <T> CompletableFuture<TagManager.LoadResult<T>> createLoader(ResourceManager p_203908_,  Executor p_203909_,  RegistryAccess.RegistryEntry<T> p_203910_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## TagManager.LoadResult

*record* `net.minecraft.tags.TagManager.LoadResult`

Enclosing class: TagManager

### Fields
- `private final ResourceKey<? extends Registry<T>> key`
  The field for the key record component.
- `private final Map<ResourceLocation,Collection<Holder<T>>> tags`
  The field for the tags record component.

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
- `public ResourceKey<? extends Registry<T>> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public Map<ResourceLocation,Collection<Holder<T>>> tags()`
  Returns the value of the tags record component.
  - returns: the value of the tags record component

## TagNetworkSerialization

*class* `net.minecraft.tags.TagNetworkSerialization`

### Methods
- `public static Map<ResourceKey<? extends Registry<?>>,TagNetworkSerialization.NetworkPayload> serializeTagsToNetwork(LayeredRegistryAccess<RegistryLayer> p_251774_)`
- `private static <T> TagNetworkSerialization.NetworkPayload serializeToNetwork(Registry<T> p_203943_)`
- `public static <T> void deserializeTagsFromNetwork(ResourceKey<? extends Registry<T>> p_203953_,  Registry<T> p_203954_,  TagNetworkSerialization.NetworkPayload p_203955_,  TagNetworkSerialization.TagOutput<T> p_203956_)`

## TagNetworkSerialization.NetworkPayload

*class* `net.minecraft.tags.TagNetworkSerialization.NetworkPayload`

Enclosing class: TagNetworkSerialization

### Fields
- `final Map<ResourceLocation,it.unimi.dsi.fastutil.ints.IntList> tags`

### Methods
- `public void write(FriendlyByteBuf p_203968_)`
- `public static TagNetworkSerialization.NetworkPayload read(FriendlyByteBuf p_203970_)`
- `public boolean isEmpty()`

## TagNetworkSerialization.TagOutput

*interface* `net.minecraft.tags.TagNetworkSerialization.TagOutput`

Enclosing class: TagNetworkSerialization

### Methods
- `void accept(TagKey<T> p_203972_,  List<Holder<T>> p_203973_)`

## WorldPresetTags

*class* `net.minecraft.tags.WorldPresetTags`

### Fields
- `public static final TagKey<WorldPreset> NORMAL`
- `public static final TagKey<WorldPreset> EXTENDED`

### Methods
- `private static TagKey<WorldPreset> create(String p_216058_)`
