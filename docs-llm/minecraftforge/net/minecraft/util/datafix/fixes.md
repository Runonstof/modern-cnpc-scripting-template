# net.minecraft.util.datafix.fixes

- [AbstractArrowPickupFix](#abstractarrowpickupfix)
- [AbstractPoiSectionFix](#abstractpoisectionfix)
- [AbstractUUIDFix](#abstractuuidfix)
- [AddFlagIfNotPresentFix](#addflagifnotpresentfix)
- [AddNewChoices](#addnewchoices)
- [AdvancementsFix](#advancementsfix)
- [AdvancementsRenameFix](#advancementsrenamefix)
- [AttributesRename](#attributesrename)
- [BedItemColorFix](#beditemcolorfix)
- [BiomeFix](#biomefix)
- [BitStorageAlignFix](#bitstoragealignfix)
- [BlendingDataFix](#blendingdatafix)
- [BlendingDataRemoveFromNetherEndFix](#blendingdataremovefromnetherendfix)
- [BlockEntityBannerColorFix](#blockentitybannercolorfix)
- [BlockEntityBlockStateFix](#blockentityblockstatefix)
- [BlockEntityCustomNameToComponentFix](#blockentitycustomnametocomponentfix)
- [BlockEntityIdFix](#blockentityidfix)
- [BlockEntityJukeboxFix](#blockentityjukeboxfix)
- [BlockEntityKeepPacked](#blockentitykeeppacked)
- [BlockEntityRenameFix](#blockentityrenamefix)
- [BlockEntityShulkerBoxColorFix](#blockentityshulkerboxcolorfix)
- [BlockEntitySignDoubleSidedEditableTextFix](#blockentitysigndoublesidededitabletextfix)
- [BlockEntitySignTextStrictJsonFix](#blockentitysigntextstrictjsonfix)
- [BlockEntityUUIDFix](#blockentityuuidfix)
- [BlockNameFlatteningFix](#blocknameflatteningfix)
- [BlockRenameFix](#blockrenamefix)
- [BlockRenameFixWithJigsaw](#blockrenamefixwithjigsaw)
- [BlockStateData](#blockstatedata)
- [BlockStateStructureTemplateFix](#blockstatestructuretemplatefix)
- [CatTypeFix](#cattypefix)
- [CauldronRenameFix](#cauldronrenamefix)
- [CavesAndCliffsRenames](#cavesandcliffsrenames)
- [ChunkBedBlockEntityInjecterFix](#chunkbedblockentityinjecterfix)
- [ChunkBiomeFix](#chunkbiomefix)
- [ChunkDeleteIgnoredLightDataFix](#chunkdeleteignoredlightdatafix)
- [ChunkDeleteLightFix](#chunkdeletelightfix)
- [ChunkHeightAndBiomeFix](#chunkheightandbiomefix)
- [ChunkLightRemoveFix](#chunklightremovefix)
- [ChunkPalettedStorageFix](#chunkpalettedstoragefix)
- [ChunkPalettedStorageFix.DataLayer](#chunkpalettedstoragefix.datalayer)
- [ChunkPalettedStorageFix.Section](#chunkpalettedstoragefix.section)
- [ChunkPalettedStorageFix.UpgradeChunk](#chunkpalettedstoragefix.upgradechunk)
- [ChunkProtoTickListFix](#chunkprototicklistfix)
- [ChunkProtoTickListFix.PoorMansPalettedContainer](#chunkprototicklistfix.poormanspalettedcontainer)
- [ChunkRenamesFix](#chunkrenamesfix)
- [ChunkStatusFix](#chunkstatusfix)
- [ChunkStatusFix2](#chunkstatusfix2)
- [ChunkStructuresTemplateRenameFix](#chunkstructurestemplaterenamefix)
- [ChunkToProtochunkFix](#chunktoprotochunkfix)
- [Class ChunkPalettedStorageFix.Direction](#class-chunkpalettedstoragefix.direction)
- [Class ChunkPalettedStorageFix.Direction.Axis](#class-chunkpalettedstoragefix.direction.axis)
- [Class ChunkPalettedStorageFix.Direction.AxisDirection](#class-chunkpalettedstoragefix.direction.axisdirection)
- [ColorlessShulkerEntityFix](#colorlessshulkerentityfix)
- [CriteriaRenameFix](#criteriarenamefix)
- [DecoratedPotFieldRenameFix](#decoratedpotfieldrenamefix)
- [DropInvalidSignDataFix](#dropinvalidsigndatafix)
- [DyeItemRenameFix](#dyeitemrenamefix)
- [EffectDurationFix](#effectdurationfix)
- [EntityArmorStandSilentFix](#entityarmorstandsilentfix)
- [EntityBlockStateFix](#entityblockstatefix)
- [EntityBrushableBlockFieldsRenameFix](#entitybrushableblockfieldsrenamefix)
- [EntityCatSplitFix](#entitycatsplitfix)
- [EntityCodSalmonFix](#entitycodsalmonfix)
- [EntityCustomNameToComponentFix](#entitycustomnametocomponentfix)
- [EntityElderGuardianSplitFix](#entityelderguardiansplitfix)
- [EntityEquipmentToArmorAndHandFix](#entityequipmenttoarmorandhandfix)
- [EntityGoatMissingStateFix](#entitygoatmissingstatefix)
- [EntityHealthFix](#entityhealthfix)
- [EntityHorseSaddleFix](#entityhorsesaddlefix)
- [EntityHorseSplitFix](#entityhorsesplitfix)
- [EntityIdFix](#entityidfix)
- [EntityItemFrameDirectionFix](#entityitemframedirectionfix)
- [EntityMinecartIdentifiersFix](#entityminecartidentifiersfix)
- [EntityPaintingFieldsRenameFix](#entitypaintingfieldsrenamefix)
- [EntityPaintingItemFrameDirectionFix](#entitypaintingitemframedirectionfix)
- [EntityPaintingMotiveFix](#entitypaintingmotivefix)
- [EntityProjectileOwnerFix](#entityprojectileownerfix)
- [EntityPufferfishRenameFix](#entitypufferfishrenamefix)
- [EntityRavagerRenameFix](#entityravagerrenamefix)
- [EntityRedundantChanceTagsFix](#entityredundantchancetagsfix)
- [EntityRenameFix](#entityrenamefix)
- [EntityRidingToPassengersFix](#entityridingtopassengersfix)
- [EntityShulkerColorFix](#entityshulkercolorfix)
- [EntityShulkerRotationFix](#entityshulkerrotationfix)
- [EntitySkeletonSplitFix](#entityskeletonsplitfix)
- [EntityStringUuidFix](#entitystringuuidfix)
- [EntityTheRenameningFix](#entitytherenameningfix)
- [EntityTippedArrowFix](#entitytippedarrowfix)
- [EntityUUIDFix](#entityuuidfix)
- [EntityVariantFix](#entityvariantfix)
- [EntityWolfColorFix](#entitywolfcolorfix)
- [EntityZombieSplitFix](#entityzombiesplitfix)
- [EntityZombieVillagerTypeFix](#entityzombievillagertypefix)
- [EntityZombifiedPiglinRenameFix](#entityzombifiedpiglinrenamefix)
- [FeatureFlagRemoveFix](#featureflagremovefix)
- [FilteredBooksFix](#filteredbooksfix)
- [FilteredSignsFix](#filteredsignsfix)
- [ForcePoiRebuild](#forcepoirebuild)
- [FurnaceRecipeFix](#furnacerecipefix)
- [GoatHornIdFix](#goathornidfix)
- [GossipUUIDFix](#gossipuuidfix)
- [HeightmapRenamingFix](#heightmaprenamingfix)
- [IglooMetadataRemovalFix](#igloometadataremovalfix)
- [ItemBannerColorFix](#itembannercolorfix)
- [ItemCustomNameToComponentFix](#itemcustomnametocomponentfix)
- [ItemIdFix](#itemidfix)
- [ItemLoreFix](#itemlorefix)
- [ItemPotionFix](#itempotionfix)
- [ItemRemoveBlockEntityTagFix](#itemremoveblockentitytagfix)
- [ItemRenameFix](#itemrenamefix)
- [ItemShulkerBoxColorFix](#itemshulkerboxcolorfix)
- [ItemSpawnEggFix](#itemspawneggfix)
- [ItemStackEnchantmentNamesFix](#itemstackenchantmentnamesfix)
- [ItemStackMapIdFix](#itemstackmapidfix)
- [ItemStackSpawnEggFix](#itemstackspawneggfix)
- [ItemStackTagFix](#itemstacktagfix)
- [ItemStackTheFlatteningFix](#itemstacktheflatteningfix)
- [ItemStackUUIDFix](#itemstackuuidfix)
- [ItemWaterPotionFix](#itemwaterpotionfix)
- [ItemWrittenBookPagesStrictJsonFix](#itemwrittenbookpagesstrictjsonfix)
- [JigsawPropertiesFix](#jigsawpropertiesfix)
- [JigsawRotationFix](#jigsawrotationfix)
- [LeavesFix](#leavesfix)
- [LeavesFix.LeavesSection](#leavesfix.leavessection)
- [LeavesFix.Section](#leavesfix.section)
- [LegacyDragonFightFix](#legacydragonfightfix)
- [LevelDataGeneratorOptionsFix](#leveldatageneratoroptionsfix)
- [LevelFlatGeneratorInfoFix](#levelflatgeneratorinfofix)
- [LevelUUIDFix](#leveluuidfix)
- [MapIdFix](#mapidfix)
- [MemoryExpiryDataFix](#memoryexpirydatafix)
- [MissingDimensionFix](#missingdimensionfix)
- [MobEffectIdFix](#mobeffectidfix)
- [MobSpawnerEntityIdentifiersFix](#mobspawnerentityidentifiersfix)
- [NamedEntityFix](#namedentityfix)
- [NamespacedTypeRenameFix](#namespacedtyperenamefix)
- [NewVillageFix](#newvillagefix)
- [ObjectiveDisplayNameFix](#objectivedisplaynamefix)
- [ObjectiveRenderTypeFix](#objectiverendertypefix)
- [OminousBannerBlockEntityRenameFix](#ominousbannerblockentityrenamefix)
- [OminousBannerRenameFix](#ominousbannerrenamefix)
- [OptionsAccessibilityOnboardFix](#optionsaccessibilityonboardfix)
- [OptionsAddTextBackgroundFix](#optionsaddtextbackgroundfix)
- [OptionsAmbientOcclusionFix](#optionsambientocclusionfix)
- [OptionsForceVBOFix](#optionsforcevbofix)
- [OptionsKeyLwjgl3Fix](#optionskeylwjgl3fix)
- [OptionsKeyTranslationFix](#optionskeytranslationfix)
- [OptionsLowerCaseLanguageFix](#optionslowercaselanguagefix)
- [OptionsProgrammerArtFix](#optionsprogrammerartfix)
- [OptionsRenameFieldFix](#optionsrenamefieldfix)
- [OverreachingTickFix](#overreachingtickfix)
- [PlayerUUIDFix](#playeruuidfix)
- [PoiTypeRemoveFix](#poityperemovefix)
- [PoiTypeRenameFix](#poityperenamefix)
- [RandomSequenceSettingsFix](#randomsequencesettingsfix)
- [RecipesFix](#recipesfix)
- [RecipesRenameningFix](#recipesrenameningfix)
- [RedstoneWireConnectionsFix](#redstonewireconnectionsfix)
- [References](#references)
- [RemapChunkStatusFix](#remapchunkstatusfix)
- [RemoveGolemGossipFix](#removegolemgossipfix)
- [RenamedCoralFansFix](#renamedcoralfansfix)
- [RenamedCoralFix](#renamedcoralfix)
- [ReorganizePoi](#reorganizepoi)
- [SavedDataFeaturePoolElementFix](#saveddatafeaturepoolelementfix)
- [SavedDataUUIDFix](#saveddatauuidfix)
- [ScoreboardDisplaySlotFix](#scoreboarddisplayslotfix)
- [SimpleEntityRenameFix](#simpleentityrenamefix)
- [SimplestEntityRenameFix](#simplestentityrenamefix)
- [SpawnerDataFix](#spawnerdatafix)
- [StatsCounterFix](#statscounterfix)
- [StatsCounterFix.StatType](#statscounterfix.stattype)
- [StatsRenameFix](#statsrenamefix)
- [StriderGravityFix](#stridergravityfix)
- [StructureReferenceCountFix](#structurereferencecountfix)
- [StructuresBecomeConfiguredFix](#structuresbecomeconfiguredfix)
- [StructuresBecomeConfiguredFix.Conversion](#structuresbecomeconfiguredfix.conversion)
- [StructureSettingsFlattenFix](#structuresettingsflattenfix)
- [TeamDisplayNameFix](#teamdisplaynamefix)
- [TrappedChestBlockEntityFix](#trappedchestblockentityfix)
- [TrappedChestBlockEntityFix.TrappedChestSection](#trappedchestblockentityfix.trappedchestsection)
- [VariantRenameFix](#variantrenamefix)
- [VillagerDataFix](#villagerdatafix)
- [VillagerFollowRangeFix](#villagerfollowrangefix)
- [VillagerRebuildLevelAndXpFix](#villagerrebuildlevelandxpfix)
- [VillagerTradeFix](#villagertradefix)
- [WallPropertyFix](#wallpropertyfix)
- [WeaponSmithChestLootTableFix](#weaponsmithchestloottablefix)
- [WorldGenSettingsDisallowOldCustomWorldsFix](#worldgensettingsdisallowoldcustomworldsfix)
- [WorldGenSettingsFix](#worldgensettingsfix)
- [WorldGenSettingsFix.StructureFeatureConfiguration](#worldgensettingsfix.structurefeatureconfiguration)
- [WorldGenSettingsHeightAndBiomeFix](#worldgensettingsheightandbiomefix)
- [WriteAndReadFix](#writeandreadfix)
- [ZombieVillagerRebuildXpFix](#zombievillagerrebuildxpfix)
## AbstractArrowPickupFix

*class* `net.minecraft.util.datafix.fixes.AbstractArrowPickupFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.datafixers.Typed<?> updateProjectiles(com.mojang.datafixers.Typed<?> p_145048_)`
- `private static com.mojang.serialization.Dynamic<?> updatePickup(com.mojang.serialization.Dynamic<?> p_145054_)`
- `private com.mojang.datafixers.Typed<?> updateEntity(com.mojang.datafixers.Typed<?> p_145050_,  String p_145051_,  Function<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_145052_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AbstractPoiSectionFix

*class* `net.minecraft.util.datafix.fixes.AbstractPoiSectionFix`

### Fields
- `private final String name`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <T> com.mojang.serialization.Dynamic<T> cap(com.mojang.serialization.Dynamic<T> p_216541_)`
- `private com.mojang.serialization.Dynamic<?> processSection(com.mojang.serialization.Dynamic<?> p_216551_)`
- `private <T> com.mojang.serialization.Dynamic<T> processSectionRecords(com.mojang.serialization.Dynamic<T> p_216553_)`
- `protected abstract <T> Stream<com.mojang.serialization.Dynamic<T>> processRecords(Stream<com.mojang.serialization.Dynamic<T>> p_216547_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AbstractUUIDFix

*class* `net.minecraft.util.datafix.fixes.AbstractUUIDFix`

### Fields
- `protected com.mojang.datafixers.DSL.TypeReference typeReference`

### Methods
- `protected com.mojang.datafixers.Typed<?> updateNamedChoice(com.mojang.datafixers.Typed<?> p_14575_,  String p_14576_,  Function<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_14577_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> replaceUUIDString(com.mojang.serialization.Dynamic<?> p_14591_,  String p_14592_,  String p_14593_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> replaceUUIDMLTag(com.mojang.serialization.Dynamic<?> p_14609_,  String p_14610_,  String p_14611_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> replaceUUIDLeastMost(com.mojang.serialization.Dynamic<?> p_14618_,  String p_14619_,  String p_14620_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> createUUIDFromString(com.mojang.serialization.Dynamic<?> p_14588_,  String p_14589_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> createUUIDFromML(com.mojang.serialization.Dynamic<?> p_14579_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> createUUIDFromLongs(com.mojang.serialization.Dynamic<?> p_14622_,  String p_14623_,  String p_14624_)`
- `protected static Optional<com.mojang.serialization.Dynamic<?>> createUUIDTag(com.mojang.serialization.Dynamic<?> p_14581_,  long p_14582_,  long p_14583_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `makeRule`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AddFlagIfNotPresentFix

*class* `net.minecraft.util.datafix.fixes.AddFlagIfNotPresentFix`

### Fields
- `private final String name`
- `private final boolean flagValue`
- `private final String flagKey`
- `private final com.mojang.datafixers.DSL.TypeReference typeReference`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AddNewChoices

*class* `net.minecraft.util.datafix.fixes.AddNewChoices`

### Fields
- `private final String name`
- `private final com.mojang.datafixers.DSL.TypeReference type`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected final <K> com.mojang.datafixers.TypeRewriteRule cap(String p_14638_,  com.mojang.datafixers.types.templates.TaggedChoice.TaggedChoiceType<K> p_14639_,  com.mojang.datafixers.types.templates.TaggedChoice.TaggedChoiceType<?> p_14640_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AdvancementsFix

*class* `net.minecraft.util.datafix.fixes.AdvancementsFix`

### Fields
- `private static final Map<String,String> RENAMES`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AdvancementsRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AdvancementsRenameFix

*class* `net.minecraft.util.datafix.fixes.AdvancementsRenameFix`

### Fields
- `private final String name`
- `private final Function<String,String> renamer`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## AttributesRename

*class* `net.minecraft.util.datafix.fixes.AttributesRename`

### Fields
- `private static final Map<String,String> RENAMES`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.serialization.Dynamic<?> fixName(com.mojang.serialization.Dynamic<?> p_14678_)`
- `private static com.mojang.datafixers.Typed<?> fixItemStackTag(com.mojang.datafixers.Typed<?> p_14676_)`
- `private static com.mojang.datafixers.Typed<?> fixEntity(com.mojang.datafixers.Typed<?> p_14684_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BedItemColorFix

*class* `net.minecraft.util.datafix.fixes.BedItemColorFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BiomeFix

*class* `net.minecraft.util.datafix.fixes.BiomeFix`

### Fields
- `public static final Map<String,String> BIOMES`

## BitStorageAlignFix

*class* `net.minecraft.util.datafix.fixes.BitStorageAlignFix`

### Fields
- `private static final int BIT_TO_LONG_SHIFT` (= 6)
- `private static final int SECTION_WIDTH` (= 16)
- `private static final int SECTION_HEIGHT` (= 16)
- `private static final int SECTION_SIZE` (= 4096)
- `private static final int HEIGHTMAP_BITS` (= 9)
- `private static final int HEIGHTMAP_SIZE` (= 256)

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.datafixers.Typed<?> updateHeightmaps(com.mojang.datafixers.Typed<?> p_14763_)`
- `private static com.mojang.datafixers.Typed<?> updateSections(com.mojang.datafixers.OpticFinder<?> p_14751_,  com.mojang.datafixers.OpticFinder<?> p_14752_,  com.mojang.datafixers.OpticFinder<List<com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>>>> p_14753_,  com.mojang.datafixers.Typed<?> p_14754_)`
- `private static com.mojang.serialization.Dynamic<?> updateBitStorage(com.mojang.serialization.Dynamic<?> p_14777_,  com.mojang.serialization.Dynamic<?> p_14778_,  int p_14779_,  int p_14780_)`
- `public static long[] addPadding(int p_14738_,  int p_14739_,  long[] p_14740_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlendingDataFix

*class* `net.minecraft.util.datafix.fixes.BlendingDataFix`

### Fields
- `private final String name`
- `private static final Set<String> STATUSES_TO_SKIP_BLENDING`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.serialization.Dynamic<?> updateChunkTag(com.mojang.serialization.Dynamic<?> p_240279_,  com.mojang.serialization.OptionalDynamic<?> p_240280_)`
- `private static com.mojang.serialization.Dynamic<?> updateBlendingData(com.mojang.serialization.Dynamic<?> p_216567_,  int p_216568_,  int p_216569_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlendingDataRemoveFromNetherEndFix

*class* `net.minecraft.util.datafix.fixes.BlendingDataRemoveFromNetherEndFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.serialization.Dynamic<?> updateChunkTag(com.mojang.serialization.Dynamic<?> p_240318_,  com.mojang.serialization.OptionalDynamic<?> p_240319_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityBannerColorFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityBannerColorFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_14798_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_14796_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityBlockStateFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityBlockStateFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_14814_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityCustomNameToComponentFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityCustomNameToComponentFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityIdFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityIdFix`

### Fields
- `private static final Map<String,String> ID_MAP`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityJukeboxFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityJukeboxFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_14846_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityKeepPacked

*class* `net.minecraft.util.datafix.fixes.BlockEntityKeepPacked`

### Methods
- `private static com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_14853_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_14851_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityRenameFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityRenameFix`

### Fields
- `private final String name`
- `private final UnaryOperator<String> nameChangeLookup`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `public static com.mojang.datafixers.DataFix create(com.mojang.datafixers.schemas.Schema p_278009_,  String p_277879_,  UnaryOperator<String> p_277753_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityShulkerBoxColorFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityShulkerBoxColorFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_14858_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntitySignDoubleSidedEditableTextFix

*class* `net.minecraft.util.datafix.fixes.BlockEntitySignDoubleSidedEditableTextFix`

### Fields
- `public static final String FILTERED_CORRECT` (= "_filtered_correct")
- `private static final String DEFAULT_COLOR` (= "black")
- `private static final String EMPTY_COMPONENT`

### Methods
- `private static <T> com.mojang.serialization.Dynamic<T> fixTag(com.mojang.serialization.Dynamic<T> p_278110_)`
- `private static <T> com.mojang.serialization.Dynamic<T> fixFrontTextTag(com.mojang.serialization.Dynamic<T> p_300654_)`
- `private static <T> Stream<Optional<com.mojang.serialization.Dynamic<T>>> getLines(com.mojang.serialization.Dynamic<T> p_298173_,  String p_299789_)`
- `private static <T> com.mojang.serialization.Dynamic<T> createDefaultText(com.mojang.serialization.Dynamic<T> p_299439_)`
- `private static <T> com.mojang.serialization.Dynamic<T> createEmptyLines(com.mojang.serialization.Dynamic<T> p_299579_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_277962_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntitySignTextStrictJsonFix

*class* `net.minecraft.util.datafix.fixes.BlockEntitySignTextStrictJsonFix`

### Fields
- `public static final com.google.gson.Gson GSON`

### Methods
- `private com.mojang.serialization.Dynamic<?> updateLine(com.mojang.serialization.Dynamic<?> p_14871_,  String p_14872_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_14867_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockEntityUUIDFix

*class* `net.minecraft.util.datafix.fixes.BlockEntityUUIDFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `typeReference`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> updateSkull(com.mojang.serialization.Dynamic<?> p_14890_)`
- `private com.mojang.serialization.Dynamic<?> updateConduit(com.mojang.serialization.Dynamic<?> p_14892_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `createUUIDFromLongs`, `createUUIDFromML`, `createUUIDFromString`, `createUUIDTag`, `replaceUUIDLeastMost`, `replaceUUIDMLTag`, `replaceUUIDString`, `updateNamedChoice`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockNameFlatteningFix

*class* `net.minecraft.util.datafix.fixes.BlockNameFlatteningFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockRenameFix

*class* `net.minecraft.util.datafix.fixes.BlockRenameFix`

### Fields
- `private final String name`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected abstract String fixBlock(String p_14924_)`
- `public static com.mojang.datafixers.DataFix create(com.mojang.datafixers.schemas.Schema p_14915_,  String p_14916_,  Function<String,String> p_14917_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockRenameFixWithJigsaw

*class* `net.minecraft.util.datafix.fixes.BlockRenameFixWithJigsaw`

### Fields
- `private final String name`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `public static com.mojang.datafixers.DataFix create(com.mojang.datafixers.schemas.Schema p_145164_,  String p_145165_,  Function<String,String> p_145166_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.BlockRenameFix`: `fixBlock`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## BlockStateData

*class* `net.minecraft.util.datafix.fixes.BlockStateData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.mojang.serialization.Dynamic<?>[] MAP`
- `private static final com.mojang.serialization.Dynamic<?>[] BLOCK_DEFAULTS`
- `private static final it.unimi.dsi.fastutil.objects.Object2IntMap<com.mojang.serialization.Dynamic<?>> ID_BY_OLD`
- `private static final it.unimi.dsi.fastutil.objects.Object2IntMap<String> ID_BY_OLD_NAME`
- `static final String FILTER_ME` (= "%%FILTER_ME%%")

### Methods
- `private static void register(int p_14943_,  String p_14944_,  String... p_14945_)`
- `private static void finalizeMaps()`
- `public static com.mojang.serialization.Dynamic<?> upgradeBlockStateTag(com.mojang.serialization.Dynamic<?> p_14947_)`
- `public static String upgradeBlock(String p_14951_)`
- `public static String upgradeBlock(int p_14941_)`
- `public static com.mojang.serialization.Dynamic<?> parse(String p_14957_)`
- `public static com.mojang.serialization.Dynamic<?> getTag(int p_14953_)`
- `static void bootstrap0()`
- `static void bootstrap1()`
- `static void bootstrap2()`
- `static void bootstrap3()`
- `static void bootstrap4()`
- `static void bootstrap5()`
- `static void bootstrap6()`
- `static void bootstrap7()`
- `static void bootstrap8()`
- `static void bootstrap9()`
- `static void bootstrap10()`
- `static void bootstrap11()`
- `static void bootstrap12()`
- `static void bootstrap13()`
- `static void bootstrap14()`
- `static void bootstrap15()`

## BlockStateStructureTemplateFix

*class* `net.minecraft.util.datafix.fixes.BlockStateStructureTemplateFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## CatTypeFix

*class* `net.minecraft.util.datafix.fixes.CatTypeFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15012_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15010_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## CauldronRenameFix

*class* `net.minecraft.util.datafix.fixes.CauldronRenameFix`

### Methods
- `private static com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_145201_)`
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## CavesAndCliffsRenames

*class* `net.minecraft.util.datafix.fixes.CavesAndCliffsRenames`

### Fields
- `public static final com.google.common.collect.ImmutableMap<String,String> RENAMES`

## ChunkBedBlockEntityInjecterFix

*class* `net.minecraft.util.datafix.fixes.ChunkBedBlockEntityInjecterFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <TE> com.mojang.datafixers.TypeRewriteRule cap(com.mojang.datafixers.types.Type<?> p_184834_,  com.mojang.datafixers.types.templates.List.ListType<TE> p_184835_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkBiomeFix

*class* `net.minecraft.util.datafix.fixes.ChunkBiomeFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkDeleteIgnoredLightDataFix

*class* `net.minecraft.util.datafix.fixes.ChunkDeleteIgnoredLightDataFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkDeleteLightFix

*class* `net.minecraft.util.datafix.fixes.ChunkDeleteLightFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkHeightAndBiomeFix

*class* `net.minecraft.util.datafix.fixes.ChunkHeightAndBiomeFix`

### Fields
- `public static final String DATAFIXER_CONTEXT_TAG` (= "__context")
- `private static final String NAME` (= "ChunkHeightAndBiomeFix")
- `private static final int OLD_SECTION_COUNT` (= 16)
- `private static final int NEW_SECTION_COUNT` (= 24)
- `private static final int NEW_MIN_SECTION_Y` (= -4)
- `public static final int BLOCKS_PER_SECTION` (= 4096)
- `private static final int LONGS_PER_SECTION` (= 64)
- `private static final int HEIGHTMAP_BITS` (= 9)
- `private static final long HEIGHTMAP_MASK` (= 511L)
- `private static final int HEIGHTMAP_OFFSET` (= 64)
- `private static final String[] HEIGHTMAP_TYPES`
- `private static final Set<String> STATUS_IS_OR_AFTER_SURFACE`
- `private static final Set<String> STATUS_IS_OR_AFTER_NOISE`
- `private static final Set<String> BLOCKS_BEFORE_FEATURE_STATUS`
- `private static final int BIOME_CONTAINER_LAYER_SIZE` (= 16)
- `private static final int BIOME_CONTAINER_SIZE` (= 64)
- `private static final int BIOME_CONTAINER_TOP_LAYER_OFFSET` (= 1008)
- `public static final String DEFAULT_BIOME` (= "minecraft:plains")
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<String> BIOMES_BY_ID`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> predictChunkStatusBeforeSurface(com.mojang.serialization.Dynamic<?> p_184904_,  Set<String> p_184905_)`
- `private static com.mojang.serialization.Dynamic<?>[] getBiomeContainers(com.mojang.serialization.Dynamic<?> p_184907_,  boolean p_184908_,  int p_184909_,  org.apache.commons.lang3.mutable.MutableBoolean p_184910_)`
- `private static int getOldBiome(int[] p_184949_,  int p_184950_)`
- `private static com.mojang.serialization.Dynamic<?> updateChunkTag(com.mojang.serialization.Dynamic<?> p_184912_,  boolean p_184913_,  boolean p_184914_,  boolean p_184915_,  Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer> p_184916_)`
- `private static <T> com.mojang.serialization.Dynamic<T> shiftUpgradeData(com.mojang.serialization.Dynamic<T> p_196591_)`
- `private static com.mojang.serialization.Dynamic<?> updateCarvingMasks(com.mojang.serialization.Dynamic<?> p_184888_,  int p_184889_,  int p_184890_)`
- `private static com.mojang.serialization.Dynamic<?> addPaddingEntries(com.mojang.serialization.Dynamic<?> p_184901_,  String p_184902_)`
- `private static com.mojang.serialization.Dynamic<?> updateHeightmaps(com.mojang.serialization.Dynamic<?> p_184886_)`
- `private static com.mojang.serialization.Dynamic<?> getFixedHeightmap(com.mojang.serialization.Dynamic<?> p_184957_)`
- `private static com.mojang.serialization.Dynamic<?> makeBiomeContainer(com.mojang.serialization.Dynamic<?> p_184895_,  it.unimi.dsi.fastutil.ints.Int2IntFunction p_184896_)`
- `private static com.mojang.serialization.Dynamic<?> makePalettedContainer(com.mojang.serialization.Dynamic<?> p_184970_)`
- `private static com.mojang.serialization.Dynamic<?> makePalettedContainer(com.mojang.serialization.Dynamic<?> p_184892_,  com.mojang.serialization.Dynamic<?> p_184893_)`
- `private static com.mojang.serialization.Dynamic<?> makeOptimizedPalettedContainer(com.mojang.serialization.Dynamic<?> p_184959_,  com.mojang.serialization.Dynamic<?> p_184960_)`
- `private static com.mojang.serialization.Dynamic<?> padPaletteEntries(com.mojang.serialization.Dynamic<?> p_196593_,  com.mojang.serialization.Dynamic<?> p_196594_,  List<com.mojang.serialization.Dynamic<?>> p_196595_)`
- `public static int ceillog2(int p_184866_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkLightRemoveFix

*class* `net.minecraft.util.datafix.fixes.ChunkLightRemoveFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkPalettedStorageFix

*class* `net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix`

### Fields
- `private static final int NORTH_WEST_MASK` (= 128)
- `private static final int WEST_MASK` (= 64)
- `private static final int SOUTH_WEST_MASK` (= 32)
- `private static final int SOUTH_MASK` (= 16)
- `private static final int SOUTH_EAST_MASK` (= 8)
- `private static final int EAST_MASK` (= 4)
- `private static final int NORTH_EAST_MASK` (= 2)
- `private static final int NORTH_MASK` (= 1)
- `static final org.slf4j.Logger LOGGER`
- `static final BitSet VIRTUAL`
- `static final BitSet FIX`
- `static final com.mojang.serialization.Dynamic<?> PUMPKIN`
- `static final com.mojang.serialization.Dynamic<?> SNOWY_PODZOL`
- `static final com.mojang.serialization.Dynamic<?> SNOWY_GRASS`
- `static final com.mojang.serialization.Dynamic<?> SNOWY_MYCELIUM`
- `static final com.mojang.serialization.Dynamic<?> UPPER_SUNFLOWER`
- `static final com.mojang.serialization.Dynamic<?> UPPER_LILAC`
- `static final com.mojang.serialization.Dynamic<?> UPPER_TALL_GRASS`
- `static final com.mojang.serialization.Dynamic<?> UPPER_LARGE_FERN`
- `static final com.mojang.serialization.Dynamic<?> UPPER_ROSE_BUSH`
- `static final com.mojang.serialization.Dynamic<?> UPPER_PEONY`
- `static final Map<String,com.mojang.serialization.Dynamic<?>> FLOWER_POT_MAP`
- `static final Map<String,com.mojang.serialization.Dynamic<?>> SKULL_MAP`
- `static final Map<String,com.mojang.serialization.Dynamic<?>> DOOR_MAP`
- `static final Map<String,com.mojang.serialization.Dynamic<?>> NOTE_BLOCK_MAP`
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<String> DYE_COLOR_MAP`
- `static final Map<String,com.mojang.serialization.Dynamic<?>> BED_BLOCK_MAP`
- `static final Map<String,com.mojang.serialization.Dynamic<?>> BANNER_BLOCK_MAP`
- `static final com.mojang.serialization.Dynamic<?> AIR`
- `private static final int SIZE` (= 4096)

### Methods
- `private static void mapSkull(Map<String,com.mojang.serialization.Dynamic<?>> p_15078_,  int p_15079_,  String p_15080_,  String p_15081_)`
- `private static void mapDoor(Map<String,com.mojang.serialization.Dynamic<?>> p_15083_,  String p_15084_,  int p_15085_)`
- `private static void addBeds(Map<String,com.mojang.serialization.Dynamic<?>> p_15074_,  int p_15075_,  String p_15076_)`
- `private static void addBanners(Map<String,com.mojang.serialization.Dynamic<?>> p_15097_,  int p_15098_,  String p_15099_)`
- `public static String getName(com.mojang.serialization.Dynamic<?> p_15065_)`
- `public static String getProperty(com.mojang.serialization.Dynamic<?> p_15067_,  String p_15068_)`
- `public static int idFor(CrudeIncrementalIntIdentityHashBiMap<com.mojang.serialization.Dynamic<?>> p_15062_,  com.mojang.serialization.Dynamic<?> p_15063_)`
- `private com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_15093_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `public static int getSideMask(boolean p_15087_,  boolean p_15088_,  boolean p_15089_,  boolean p_15090_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkPalettedStorageFix.DataLayer

*class* `net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix.DataLayer`

Enclosing class: ChunkPalettedStorageFix

### Fields
- `private static final int SIZE` (= 2048)
- `private static final int NIBBLE_SIZE` (= 4)
- `private final byte[] data`

### Methods
- `public int get(int p_15136_,  int p_15137_,  int p_15138_)`
- `private boolean isFirst(int p_15134_)`
- `private int getPosition(int p_15140_)`

## ChunkPalettedStorageFix.Section

*class* `net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix.Section`

Enclosing class: ChunkPalettedStorageFix

### Fields
- `private final CrudeIncrementalIntIdentityHashBiMap<com.mojang.serialization.Dynamic<?>> palette`
- `private final List<com.mojang.serialization.Dynamic<?>> listTag`
- `private final com.mojang.serialization.Dynamic<?> section`
- `private final boolean hasData`
- `final it.unimi.dsi.fastutil.ints.Int2ObjectMap<it.unimi.dsi.fastutil.ints.IntList> toFix`
- `final it.unimi.dsi.fastutil.ints.IntList update`
- `public final int y`
- `private final Set<com.mojang.serialization.Dynamic<?>> seen`
- `private final int[] buffer`

### Methods
- `public com.mojang.serialization.Dynamic<?> getBlock(int p_15198_)`
- `public void setBlock(int p_15203_,  com.mojang.serialization.Dynamic<?> p_15204_)`
- `public int upgrade(int p_15210_)`
- `private void addFix(int p_15200_,  int p_15201_)`
- `public com.mojang.serialization.Dynamic<?> write()`

## ChunkPalettedStorageFix.UpgradeChunk

*class* `net.minecraft.util.datafix.fixes.ChunkPalettedStorageFix.UpgradeChunk`

Enclosing class: ChunkPalettedStorageFix

### Fields
- `private int sides`
- `private final ChunkPalettedStorageFix.Section[] sections`
- `private final com.mojang.serialization.Dynamic<?> level`
- `private final int x`
- `private final int z`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<com.mojang.serialization.Dynamic<?>> blockEntities`

### Methods
- `@Nullable private com.mojang.serialization.Dynamic<?> getBlockEntity(int p_15237_)`
- `@Nullable private com.mojang.serialization.Dynamic<?> removeBlockEntity(int p_15243_)`
- `public static int relative(int p_15227_,  ChunkPalettedStorageFix.Direction p_15228_)`
- `private void setBlock(int p_15230_,  com.mojang.serialization.Dynamic<?> p_15231_)`
- `@Nullable private ChunkPalettedStorageFix.Section getSection(int p_15245_)`
- `public com.mojang.serialization.Dynamic<?> getBlock(int p_15225_)`
- `public com.mojang.serialization.Dynamic<?> write()`

## ChunkProtoTickListFix

*class* `net.minecraft.util.datafix.fixes.ChunkProtoTickListFix`

### Fields
- `private static final int SECTION_WIDTH` (= 16)
- `private static final com.google.common.collect.ImmutableSet<String> ALWAYS_WATERLOGGED`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> makeTickList(com.mojang.serialization.Dynamic<?> p_185037_,  it.unimi.dsi.fastutil.ints.Int2ObjectMap<Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer>> p_185038_,  byte p_185039_,  int p_185040_,  int p_185041_,  String p_185042_,  Function<com.mojang.serialization.Dynamic<?>,String> p_185043_)`
- `private static String getBlock(@Nullable  com.mojang.serialization.Dynamic<?> p_185032_)`
- `private static String getLiquid(@Nullable  com.mojang.serialization.Dynamic<?> p_185069_)`
- `private com.mojang.serialization.Dynamic<?> createTick(com.mojang.serialization.Dynamic<?> p_185045_,  @Nullable  Supplier<ChunkProtoTickListFix.PoorMansPalettedContainer> p_185046_,  int p_185047_,  int p_185048_,  int p_185049_,  int p_185050_,  Function<com.mojang.serialization.Dynamic<?>,String> p_185051_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkProtoTickListFix.PoorMansPalettedContainer

*class* `net.minecraft.util.datafix.fixes.ChunkProtoTickListFix.PoorMansPalettedContainer`

Enclosing class: ChunkProtoTickListFix

### Fields
- `private static final long SIZE_BITS` (= 4L)
- `private final List<? extends com.mojang.serialization.Dynamic<?>> palette`
- `private final long[] data`
- `private final int bits`
- `private final long mask`
- `private final int valuesPerLong`

### Methods
- `@Nullable public com.mojang.serialization.Dynamic<?> get(int p_185091_,  int p_185092_,  int p_185093_)`
- `private int getIndex(int p_185096_,  int p_185097_,  int p_185098_)`
- `public List<? extends com.mojang.serialization.Dynamic<?>> palette()`
- `public long[] data()`

## ChunkRenamesFix

*class* `net.minecraft.util.datafix.fixes.ChunkRenamesFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.datafixers.Typed<?> renameField(com.mojang.datafixers.Typed<?> p_185112_,  String p_185113_,  String p_185114_)`
- `private static <A> com.mojang.datafixers.Typed<?> renameFieldHelper(com.mojang.datafixers.Typed<?> p_185116_,  String p_185117_,  String p_185118_,  com.mojang.datafixers.types.Type<A> p_185119_)`
- `private static <A> com.mojang.datafixers.Typed<com.mojang.datafixers.util.Pair<String,A>> appendChunkName(com.mojang.datafixers.Typed<A> p_185107_)`
- `private static <T> com.mojang.serialization.Dynamic<T> mergeRemainders(com.mojang.datafixers.Typed<?> p_185109_,  com.mojang.serialization.Dynamic<T> p_185110_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkStatusFix

*class* `net.minecraft.util.datafix.fixes.ChunkStatusFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkStatusFix2

*class* `net.minecraft.util.datafix.fixes.ChunkStatusFix2`

### Fields
- `private static final Map<String,String> RENAMES_AND_DOWNGRADES`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkStructuresTemplateRenameFix

*class* `net.minecraft.util.datafix.fixes.ChunkStructuresTemplateRenameFix`

### Fields
- `private static final com.google.common.collect.ImmutableMap<String,com.mojang.datafixers.util.Pair<String,com.google.common.collect.ImmutableMap<String,String>>> RENAMES`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fixChildren(com.mojang.serialization.Dynamic<?> p_275363_)`
- `private com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15281_,  com.mojang.serialization.Dynamic<?> p_15282_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ChunkToProtochunkFix

*class* `net.minecraft.util.datafix.fixes.ChunkToProtochunkFix`

### Fields
- `private static final int NUM_SECTIONS` (= 16)

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> fixChunkData(com.mojang.serialization.Dynamic<T> p_199856_)`
- `private static <T> com.mojang.serialization.Dynamic<T> repackBiomes(com.mojang.serialization.Dynamic<T> p_199880_)`
- `private static <T> com.mojang.serialization.Dynamic<T> repackTicks(com.mojang.serialization.Dynamic<T> p_199882_)`
- `private static short packOffsetCoordinates(int p_15291_,  int p_15292_,  int p_15293_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## Class ChunkPalettedStorageFix.Direction

*enum* `net.minecraft.util.datafix.fixes.Class ChunkPalettedStorageFix.Direction`

Enclosing class: ChunkPalettedStorageFix

### Fields
- `private final ChunkPalettedStorageFix.Direction.Axis axis`
- `private final ChunkPalettedStorageFix.Direction.AxisDirection axisDirection`

### Methods
- `public static ChunkPalettedStorageFix.Direction[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChunkPalettedStorageFix.Direction valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ChunkPalettedStorageFix.Direction.AxisDirection getAxisDirection()`
- `public ChunkPalettedStorageFix.Direction.Axis getAxis()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ChunkPalettedStorageFix.Direction.Axis

*enum* `net.minecraft.util.datafix.fixes.Class ChunkPalettedStorageFix.Direction.Axis`

Enclosing class: ChunkPalettedStorageFix.Direction

### Methods
- `public static ChunkPalettedStorageFix.Direction.Axis[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChunkPalettedStorageFix.Direction.Axis valueOf(String name)`
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

## Class ChunkPalettedStorageFix.Direction.AxisDirection

*enum* `net.minecraft.util.datafix.fixes.Class ChunkPalettedStorageFix.Direction.AxisDirection`

Enclosing class: ChunkPalettedStorageFix.Direction

### Fields
- `private final int step`

### Methods
- `public static ChunkPalettedStorageFix.Direction.AxisDirection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChunkPalettedStorageFix.Direction.AxisDirection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getStep()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ColorlessShulkerEntityFix

*class* `net.minecraft.util.datafix.fixes.ColorlessShulkerEntityFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15318_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## CriteriaRenameFix

*class* `net.minecraft.util.datafix.fixes.CriteriaRenameFix`

### Fields
- `private final String name`
- `private final String advancementId`
- `private final UnaryOperator<String> conversions`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fixAdvancements(com.mojang.serialization.Dynamic<?> p_216594_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## DecoratedPotFieldRenameFix

*class* `net.minecraft.util.datafix.fixes.DecoratedPotFieldRenameFix`

### Fields
- `private static final String DECORATED_POT_ID` (= "minecraft:decorated_pot")

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## DropInvalidSignDataFix

*class* `net.minecraft.util.datafix.fixes.DropInvalidSignDataFix`

### Fields
- `private static final String EMPTY_COMPONENT`
- `private static final String[] FIELDS_TO_DROP`

### Methods
- `private static <T> com.mojang.serialization.Dynamic<T> fix(com.mojang.serialization.Dynamic<T> p_297398_)`
- `private static <T> com.mojang.serialization.Dynamic<T> fixText(com.mojang.serialization.Dynamic<T> p_299128_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_297432_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## DyeItemRenameFix

*class* `net.minecraft.util.datafix.fixes.DyeItemRenameFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`

## EffectDurationFix

*class* `net.minecraft.util.datafix.fixes.EffectDurationFix`

### Fields
- `private static final Set<String> ITEM_TYPES`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fixEffect(com.mojang.serialization.Dynamic<?> p_267989_)`
- `private com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_268201_)`
- `private com.mojang.serialization.Dynamic<?> updateEntity(com.mojang.serialization.Dynamic<?> p_268005_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityArmorStandSilentFix

*class* `net.minecraft.util.datafix.fixes.EntityArmorStandSilentFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15329_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15327_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityBlockStateFix

*class* `net.minecraft.util.datafix.fixes.EntityBlockStateFix`

### Fields
- `private static final Map<String,Integer> MAP`

### Methods
- `public static int getBlockId(String p_15366_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.datafixers.Typed<?> updateFallingBlock(com.mojang.datafixers.Typed<?> p_15336_)`
- `private com.mojang.datafixers.Typed<?> updateBlockToBlockState(com.mojang.datafixers.Typed<?> p_15338_,  String p_15339_,  String p_15340_,  String p_15341_)`
- `private com.mojang.datafixers.Typed<?> updateEntity(com.mojang.datafixers.Typed<?> p_15343_,  String p_15344_,  Function<com.mojang.datafixers.Typed<?>,com.mojang.datafixers.Typed<?>> p_15345_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityBrushableBlockFieldsRenameFix

*class* `net.minecraft.util.datafix.fixes.EntityBrushableBlockFieldsRenameFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_277830_)`
- `private com.mojang.serialization.Dynamic<?> renameField(com.mojang.serialization.Dynamic<?> p_277783_,  String p_277566_,  String p_277732_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_277791_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityCatSplitFix

*class* `net.minecraft.util.datafix.fixes.EntityCatSplitFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `name`

### Methods
- `protected com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>> getNewNameAndTag(String p_15387_,  com.mojang.serialization.Dynamic<?> p_15388_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimpleEntityRenameFix`: `fix`
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityCodSalmonFix

*class* `net.minecraft.util.datafix.fixes.EntityCodSalmonFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`
- `public static final Map<String,String> RENAMED_EGG_IDS`

### Methods
- `protected String rename(String p_15396_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityCustomNameToComponentFix

*class* `net.minecraft.util.datafix.fixes.EntityCustomNameToComponentFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `public static com.mojang.serialization.Dynamic<?> fixTagCustomName(com.mojang.serialization.Dynamic<?> p_15408_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityElderGuardianSplitFix

*class* `net.minecraft.util.datafix.fixes.EntityElderGuardianSplitFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `name`

### Methods
- `protected com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>> getNewNameAndTag(String p_15414_,  com.mojang.serialization.Dynamic<?> p_15415_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimpleEntityRenameFix`: `fix`
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityEquipmentToArmorAndHandFix

*class* `net.minecraft.util.datafix.fixes.EntityEquipmentToArmorAndHandFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <IS> com.mojang.datafixers.TypeRewriteRule cap(com.mojang.datafixers.types.Type<IS> p_15427_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityGoatMissingStateFix

*class* `net.minecraft.util.datafix.fixes.EntityGoatMissingStateFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_238295_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityHealthFix

*class* `net.minecraft.util.datafix.fixes.EntityHealthFix`

### Fields
- `private static final Set<String> ENTITIES`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15439_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityHorseSaddleFix

*class* `net.minecraft.util.datafix.fixes.EntityHorseSaddleFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15445_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityHorseSplitFix

*class* `net.minecraft.util.datafix.fixes.EntityHorseSplitFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `name`

### Methods
- `protected com.mojang.datafixers.util.Pair<String,com.mojang.datafixers.Typed<?>> fix(String p_15451_,  com.mojang.datafixers.Typed<?> p_15452_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityIdFix

*class* `net.minecraft.util.datafix.fixes.EntityIdFix`

### Fields
- `private static final Map<String,String> ID_MAP`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityItemFrameDirectionFix

*class* `net.minecraft.util.datafix.fixes.EntityItemFrameDirectionFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15475_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15473_)`
- `private static byte direction2dTo3d(byte p_15471_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityMinecartIdentifiersFix

*class* `net.minecraft.util.datafix.fixes.EntityMinecartIdentifiersFix`

### Fields
- `private static final List<String> MINECART_BY_ID`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityPaintingFieldsRenameFix

*class* `net.minecraft.util.datafix.fixes.EntityPaintingFieldsRenameFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_216610_)`
- `private com.mojang.serialization.Dynamic<?> renameField(com.mojang.serialization.Dynamic<?> p_216612_,  String p_216613_,  String p_216614_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_216608_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityPaintingItemFrameDirectionFix

*class* `net.minecraft.util.datafix.fixes.EntityPaintingItemFrameDirectionFix`

### Fields
- `private static final int[][] DIRECTIONS`

### Methods
- `private com.mojang.serialization.Dynamic<?> doFix(com.mojang.serialization.Dynamic<?> p_15510_,  boolean p_15511_,  boolean p_15512_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityPaintingMotiveFix

*class* `net.minecraft.util.datafix.fixes.EntityPaintingMotiveFix`

### Fields
- `private static final Map<String,String> MAP`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15530_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15528_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityProjectileOwnerFix

*class* `net.minecraft.util.datafix.fixes.EntityProjectileOwnerFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.datafixers.Typed<?> updateProjectiles(com.mojang.datafixers.Typed<?> p_15563_)`
- `private com.mojang.serialization.Dynamic<?> updateOwnerArrow(com.mojang.serialization.Dynamic<?> p_15569_)`
- `private com.mojang.serialization.Dynamic<?> updateOwnerLlamaSpit(com.mojang.serialization.Dynamic<?> p_15578_)`
- `private com.mojang.serialization.Dynamic<?> updateItemPotion(com.mojang.serialization.Dynamic<?> p_15580_)`
- `private com.mojang.serialization.Dynamic<?> updateOwnerThrowable(com.mojang.serialization.Dynamic<?> p_15582_)`
- `private com.mojang.serialization.Dynamic<?> setUUID(com.mojang.serialization.Dynamic<?> p_15571_,  long p_15572_,  long p_15573_)`
- `private static int[] createUUIDArray(long p_15560_,  long p_15561_)`
- `private com.mojang.datafixers.Typed<?> updateEntity(com.mojang.datafixers.Typed<?> p_15565_,  String p_15566_,  Function<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_15567_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityPufferfishRenameFix

*class* `net.minecraft.util.datafix.fixes.EntityPufferfishRenameFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`

### Methods
- `protected String rename(String p_15590_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityRavagerRenameFix

*class* `net.minecraft.util.datafix.fixes.EntityRavagerRenameFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`

### Methods
- `protected String rename(String p_15597_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityRedundantChanceTagsFix

*class* `net.minecraft.util.datafix.fixes.EntityRedundantChanceTagsFix`

### Fields
- `private static final com.mojang.serialization.Codec<List<Float>> FLOAT_LIST_CODEC`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static boolean isZeroList(com.mojang.serialization.OptionalDynamic<?> p_15611_,  int p_15612_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityRenameFix

*class* `net.minecraft.util.datafix.fixes.EntityRenameFix`

### Fields
- `protected final String name`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <A> com.mojang.datafixers.Typed<A> getEntity(Object p_15631_,  com.mojang.serialization.DynamicOps<?> p_15632_,  com.mojang.datafixers.types.Type<A> p_15633_)`
- `protected abstract com.mojang.datafixers.util.Pair<String,com.mojang.datafixers.Typed<?>> fix(String p_15634_,  com.mojang.datafixers.Typed<?> p_15635_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityRidingToPassengersFix

*class* `net.minecraft.util.datafix.fixes.EntityRidingToPassengersFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <OldEntityTree, NewEntityTree, Entity> com.mojang.datafixers.TypeRewriteRule cap(com.mojang.datafixers.schemas.Schema p_15642_,  com.mojang.datafixers.schemas.Schema p_15643_,  com.mojang.datafixers.types.Type<OldEntityTree> p_15644_,  com.mojang.datafixers.types.Type<NewEntityTree> p_15645_,  com.mojang.datafixers.types.Type<Entity> p_15646_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityShulkerColorFix

*class* `net.minecraft.util.datafix.fixes.EntityShulkerColorFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15678_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15676_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityShulkerRotationFix

*class* `net.minecraft.util.datafix.fixes.EntityShulkerRotationFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15684_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15682_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntitySkeletonSplitFix

*class* `net.minecraft.util.datafix.fixes.EntitySkeletonSplitFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `name`

### Methods
- `protected com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>> getNewNameAndTag(String p_15691_,  com.mojang.serialization.Dynamic<?> p_15692_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimpleEntityRenameFix`: `fix`
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityStringUuidFix

*class* `net.minecraft.util.datafix.fixes.EntityStringUuidFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityTheRenameningFix

*class* `net.minecraft.util.datafix.fixes.EntityTheRenameningFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`
- `public static final Map<String,String> RENAMED_BLOCKS`
- `public static final Map<String,String> RENAMED_ITEMS`
- `private static final String MINECRAFT_BRED` (= "minecraft:bred_")

### Methods
- `protected String rename(String p_15709_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityTippedArrowFix

*class* `net.minecraft.util.datafix.fixes.EntityTippedArrowFix`

### Methods
- `protected String rename(String p_15714_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityUUIDFix

*class* `net.minecraft.util.datafix.fixes.EntityUUIDFix`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Set<String> ABSTRACT_HORSES`
- `private static final Set<String> TAMEABLE_ANIMALS`
- `private static final Set<String> ANIMALS`
- `private static final Set<String> MOBS`
- `private static final Set<String> LIVING_ENTITIES`
- `private static final Set<String> PROJECTILES`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `typeReference`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.serialization.Dynamic<?> updatePiglin(com.mojang.serialization.Dynamic<?> p_15740_)`
- `private static com.mojang.serialization.Dynamic<?> updateEvokerFangs(com.mojang.serialization.Dynamic<?> p_15745_)`
- `private static com.mojang.serialization.Dynamic<?> updateZombieVillager(com.mojang.serialization.Dynamic<?> p_15750_)`
- `private static com.mojang.serialization.Dynamic<?> updateAreaEffectCloud(com.mojang.serialization.Dynamic<?> p_15752_)`
- `private static com.mojang.serialization.Dynamic<?> updateShulkerBullet(com.mojang.serialization.Dynamic<?> p_15754_)`
- `private static com.mojang.serialization.Dynamic<?> updateItem(com.mojang.serialization.Dynamic<?> p_15756_)`
- `private static com.mojang.serialization.Dynamic<?> updateFox(com.mojang.serialization.Dynamic<?> p_15758_)`
- `private static com.mojang.serialization.Dynamic<?> updateHurtBy(com.mojang.serialization.Dynamic<?> p_15760_)`
- `private static com.mojang.serialization.Dynamic<?> updateAnimalOwner(com.mojang.serialization.Dynamic<?> p_15762_)`
- `private static com.mojang.serialization.Dynamic<?> updateAnimal(com.mojang.serialization.Dynamic<?> p_15764_)`
- `private static com.mojang.serialization.Dynamic<?> updateMob(com.mojang.serialization.Dynamic<?> p_15767_)`
- `public static com.mojang.serialization.Dynamic<?> updateLivingEntity(com.mojang.serialization.Dynamic<?> p_15730_)`
- `private static com.mojang.serialization.Dynamic<?> updateProjectile(com.mojang.serialization.Dynamic<?> p_15769_)`
- `public static com.mojang.serialization.Dynamic<?> updateEntityUUID(com.mojang.serialization.Dynamic<?> p_15735_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `createUUIDFromLongs`, `createUUIDFromML`, `createUUIDFromString`, `createUUIDTag`, `replaceUUIDLeastMost`, `replaceUUIDMLTag`, `replaceUUIDString`, `updateNamedChoice`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityVariantFix

*class* `net.minecraft.util.datafix.fixes.EntityVariantFix`

### Fields
- `private final String fieldName`
- `private final IntFunction<String> idConversions`

### Methods
- `private static <T> com.mojang.serialization.Dynamic<T> updateAndRename(com.mojang.serialization.Dynamic<T> p_216637_,  String p_216638_,  String p_216639_,  Function<com.mojang.serialization.Dynamic<T>,com.mojang.serialization.Dynamic<T>> p_216640_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_216630_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityWolfColorFix

*class* `net.minecraft.util.datafix.fixes.EntityWolfColorFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15794_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15792_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityZombieSplitFix

*class* `net.minecraft.util.datafix.fixes.EntityZombieSplitFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `name`

### Methods
- `protected com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>> getNewNameAndTag(String p_15801_,  com.mojang.serialization.Dynamic<?> p_15802_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimpleEntityRenameFix`: `fix`
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityZombieVillagerTypeFix

*class* `net.minecraft.util.datafix.fixes.EntityZombieVillagerTypeFix`

### Fields
- `private static final int PROFESSION_MAX` (= 6)
- `private static final RandomSource RANDOM`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15813_)`
- `private int getVillagerProfession(int p_15809_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15811_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## EntityZombifiedPiglinRenameFix

*class* `net.minecraft.util.datafix.fixes.EntityZombifiedPiglinRenameFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`

### Methods
- `protected String rename(String p_15819_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## FeatureFlagRemoveFix

*class* `net.minecraft.util.datafix.fixes.FeatureFlagRemoveFix`

### Fields
- `private final String name`
- `private final Set<String> flagsToRemove`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <T> com.mojang.serialization.Dynamic<T> fixTag(com.mojang.serialization.Dynamic<T> p_277583_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## FilteredBooksFix

*class* `net.minecraft.util.datafix.fixes.FilteredBooksFix`

### Methods
- `protected <T> com.mojang.serialization.Dynamic<T> fixItemStackTag(com.mojang.serialization.Dynamic<T> p_216662_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.ItemStackTagFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## FilteredSignsFix

*class* `net.minecraft.util.datafix.fixes.FilteredSignsFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_216668_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ForcePoiRebuild

*class* `net.minecraft.util.datafix.fixes.ForcePoiRebuild`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> cap(com.mojang.serialization.Dynamic<T> p_15826_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## FurnaceRecipeFix

*class* `net.minecraft.util.datafix.fixes.FurnaceRecipeFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <R> com.mojang.datafixers.TypeRewriteRule cap(com.mojang.datafixers.types.Type<R> p_15850_)`
- `private <R> com.mojang.datafixers.Typed<?> updateFurnaceContents(com.mojang.datafixers.types.Type<R> p_15852_,  com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Either<com.mojang.datafixers.util.Pair<List<com.mojang.datafixers.util.Pair<R,Integer>>,com.mojang.serialization.Dynamic<?>>,com.mojang.datafixers.util.Unit>,com.mojang.serialization.Dynamic<?>>> p_15853_,  com.mojang.datafixers.Typed<?> p_15854_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## GoatHornIdFix

*class* `net.minecraft.util.datafix.fixes.GoatHornIdFix`

### Fields
- `private static final String[] INSTRUMENTS`

### Methods
- `protected <T> com.mojang.serialization.Dynamic<T> fixItemStackTag(com.mojang.serialization.Dynamic<T> p_216676_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.ItemStackTagFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## GossipUUIDFix

*class* `net.minecraft.util.datafix.fixes.GossipUUIDFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_15881_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## HeightmapRenamingFix

*class* `net.minecraft.util.datafix.fixes.HeightmapRenamingFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_15899_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## IglooMetadataRemovalFix

*class* `net.minecraft.util.datafix.fixes.IglooMetadataRemovalFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> fixTag(com.mojang.serialization.Dynamic<T> p_15905_)`
- `private static <T> com.mojang.serialization.Dynamic<T> removeIglooPieces(com.mojang.serialization.Dynamic<T> p_15909_)`
- `private static boolean isIglooPiece(com.mojang.serialization.Dynamic<?> p_15913_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemBannerColorFix

*class* `net.minecraft.util.datafix.fixes.ItemBannerColorFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemCustomNameToComponentFix

*class* `net.minecraft.util.datafix.fixes.ItemCustomNameToComponentFix`

### Methods
- `private com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_15935_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemIdFix

*class* `net.minecraft.util.datafix.fixes.ItemIdFix`

### Fields
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<String> ITEM_NAMES`

### Methods
- `public static String getItem(int p_15943_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemLoreFix

*class* `net.minecraft.util.datafix.fixes.ItemLoreFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> Stream<com.mojang.serialization.Dynamic<T>> fixLoreList(Stream<com.mojang.serialization.Dynamic<T>> p_15970_)`
- `private static String fixLoreEntry(String p_15968_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemPotionFix

*class* `net.minecraft.util.datafix.fixes.ItemPotionFix`

### Fields
- `private static final int SPLASH` (= 16384)
- `private static final String[] POTIONS`
- `public static final String DEFAULT` (= "minecraft:water")

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemRemoveBlockEntityTagFix

*class* `net.minecraft.util.datafix.fixes.ItemRemoveBlockEntityTagFix`

### Fields
- `private final Set<String> items`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemRenameFix

*class* `net.minecraft.util.datafix.fixes.ItemRenameFix`

### Fields
- `private final String name`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected abstract String fixItem(String p_16011_)`
- `public static com.mojang.datafixers.DataFix create(com.mojang.datafixers.schemas.Schema p_16004_,  String p_16005_,  Function<String,String> p_16006_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemShulkerBoxColorFix

*class* `net.minecraft.util.datafix.fixes.ItemShulkerBoxColorFix`

### Fields
- `public static final String[] NAMES_BY_COLOR`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemSpawnEggFix

*class* `net.minecraft.util.datafix.fixes.ItemSpawnEggFix`

### Fields
- `private static final String[] ID_TO_ENTITY`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemStackEnchantmentNamesFix

*class* `net.minecraft.util.datafix.fixes.ItemStackEnchantmentNamesFix`

### Fields
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<String> MAP`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_16073_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemStackMapIdFix

*class* `net.minecraft.util.datafix.fixes.ItemStackMapIdFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemStackSpawnEggFix

*class* `net.minecraft.util.datafix.fixes.ItemStackSpawnEggFix`

### Fields
- `private final String itemType`
- `private static final Map<String,String> MAP`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemStackTagFix

*class* `net.minecraft.util.datafix.fixes.ItemStackTagFix`

### Fields
- `private final String name`
- `private final Predicate<String> idFilter`

### Methods
- `public final com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected abstract <T> com.mojang.serialization.Dynamic<T> fixItemStackTag(com.mojang.serialization.Dynamic<T> p_216691_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemStackTheFlatteningFix

*class* `net.minecraft.util.datafix.fixes.ItemStackTheFlatteningFix`

### Fields
- `private static final Map<String,String> MAP`
- `private static final Set<String> IDS`
- `private static final Set<String> DAMAGE_IDS`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `@Nullable public static String updateItem(@Nullable  String p_16123_,  int p_16124_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemStackUUIDFix

*class* `net.minecraft.util.datafix.fixes.ItemStackUUIDFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `typeReference`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> updateAttributeModifiers(com.mojang.serialization.Dynamic<?> p_16147_)`
- `private com.mojang.serialization.Dynamic<?> updateSkullOwner(com.mojang.serialization.Dynamic<?> p_16149_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `createUUIDFromLongs`, `createUUIDFromML`, `createUUIDFromString`, `createUUIDTag`, `replaceUUIDLeastMost`, `replaceUUIDMLTag`, `replaceUUIDString`, `updateNamedChoice`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemWaterPotionFix

*class* `net.minecraft.util.datafix.fixes.ItemWaterPotionFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ItemWrittenBookPagesStrictJsonFix

*class* `net.minecraft.util.datafix.fixes.ItemWrittenBookPagesStrictJsonFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_16172_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## JigsawPropertiesFix

*class* `net.minecraft.util.datafix.fixes.JigsawPropertiesFix`

### Methods
- `private static com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_16187_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_16185_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## JigsawRotationFix

*class* `net.minecraft.util.datafix.fixes.JigsawRotationFix`

### Fields
- `private static final Map<String,String> RENAMES`

### Methods
- `private static com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_16196_)`
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## LeavesFix

*class* `net.minecraft.util.datafix.fixes.LeavesFix`

### Fields
- `private static final int NORTH_WEST_MASK` (= 128)
- `private static final int WEST_MASK` (= 64)
- `private static final int SOUTH_WEST_MASK` (= 32)
- `private static final int SOUTH_MASK` (= 16)
- `private static final int SOUTH_EAST_MASK` (= 8)
- `private static final int EAST_MASK` (= 4)
- `private static final int NORTH_EAST_MASK` (= 2)
- `private static final int NORTH_MASK` (= 1)
- `private static final int[][] DIRECTIONS`
- `private static final int DECAY_DISTANCE` (= 7)
- `private static final int SIZE_BITS` (= 12)
- `private static final int SIZE` (= 4096)
- `static final it.unimi.dsi.fastutil.objects.Object2IntMap<String> LEAVES`
- `static final Set<String> LOGS`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `public static int getIndex(int p_16211_,  int p_16212_,  int p_16213_)`
- `private int getX(int p_16209_)`
- `private int getY(int p_16246_)`
- `private int getZ(int p_16248_)`
- `public static int getSideMask(boolean p_16237_,  boolean p_16238_,  boolean p_16239_,  boolean p_16240_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## LeavesFix.LeavesSection

*class* `net.minecraft.util.datafix.fixes.LeavesFix.LeavesSection`

Enclosing class: LeavesFix

### Fields
- `private static final String PERSISTENT` (= "persistent")
- `private static final String DECAYABLE` (= "decayable")
- `private static final String DISTANCE` (= "distance")
- `@Nullable private it.unimi.dsi.fastutil.ints.IntSet leaveIds`
- `@Nullable private it.unimi.dsi.fastutil.ints.IntSet logIds`
- `@Nullable private it.unimi.dsi.fastutil.ints.Int2IntMap stateToIdMap`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.LeavesFix.Section`: `BLOCK_STATES_TAG`, `index`, `NAME_TAG`, `palette`, `paletteFinder`, `PROPERTIES_TAG`, `storage`

### Methods
- `protected boolean skippable()`
- `private com.mojang.serialization.Dynamic<?> makeLeafTag(com.mojang.serialization.Dynamic<?> p_16272_,  String p_16273_,  boolean p_16274_,  int p_16275_)`
- `public boolean isLog(int p_16258_)`
- `public boolean isLeaf(int p_16277_)`
- `int getDistance(int p_16279_)`
- `void setDistance(int p_16260_,  int p_16261_,  int p_16262_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.LeavesFix.Section`: `getBlock`, `getIndex`, `getStateId`, `isSkippable`, `readStorage`, `write`

## LeavesFix.Section

*class* `net.minecraft.util.datafix.fixes.LeavesFix.Section`

Enclosing class: LeavesFix

### Fields
- `protected static final String BLOCK_STATES_TAG` (= "BlockStates")
- `protected static final String NAME_TAG` (= "Name")
- `protected static final String PROPERTIES_TAG` (= "Properties")
- `private final com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>>> blockStateType`
- `protected final com.mojang.datafixers.OpticFinder<List<com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>>>> paletteFinder`
- `protected final List<com.mojang.serialization.Dynamic<?>> palette`
- `protected final int index`
- `@Nullable protected PackedBitStorage storage`

### Methods
- `protected void readStorage(com.mojang.serialization.Dynamic<?> p_16291_)`
- `public com.mojang.datafixers.Typed<?> write(com.mojang.datafixers.Typed<?> p_16289_)`
- `public boolean isSkippable()`
- `public int getBlock(int p_16303_)`
- `protected int getStateId(String p_16293_,  boolean p_16294_,  int p_16295_)`
- `int getIndex()`
- `protected abstract boolean skippable()`

## LegacyDragonFightFix

*class* `net.minecraft.util.datafix.fixes.LegacyDragonFightFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## LevelDataGeneratorOptionsFix

*class* `net.minecraft.util.datafix.fixes.LevelDataGeneratorOptionsFix`

### Fields
- `static final Map<String,String> MAP`
- `public static final String GENERATOR_OPTIONS` (= "generatorOptions")

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> convert(String p_16327_,  com.mojang.serialization.DynamicOps<T> p_16328_)`
- `@Nullable private static com.mojang.datafixers.util.Pair<Integer,String> getLayerInfoFromString(String p_16325_)`
- `private static List<com.mojang.datafixers.util.Pair<Integer,String>> getLayersInfoFromString(String p_16335_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## LevelFlatGeneratorInfoFix

*class* `net.minecraft.util.datafix.fixes.LevelFlatGeneratorInfoFix`

### Fields
- `private static final String GENERATOR_OPTIONS` (= "generatorOptions")
- `static final String DEFAULT` (= "minecraft:bedrock,2*minecraft:dirt,minecraft:grass_block;1;village")
- `private static final com.google.common.base.Splitter SPLITTER`
- `private static final com.google.common.base.Splitter LAYER_SPLITTER`
- `private static final com.google.common.base.Splitter OLD_AMOUNT_SPLITTER`
- `private static final com.google.common.base.Splitter AMOUNT_SPLITTER`
- `private static final com.google.common.base.Splitter BLOCK_SPLITTER`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_16353_)`
- `String fixString(String p_16355_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## LevelUUIDFix

*class* `net.minecraft.util.datafix.fixes.LevelUUIDFix`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `typeReference`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> updateWanderingTrader(com.mojang.serialization.Dynamic<?> p_16373_)`
- `private com.mojang.serialization.Dynamic<?> updateDragonFight(com.mojang.serialization.Dynamic<?> p_16375_)`
- `private com.mojang.serialization.Dynamic<?> updateCustomBossEvents(com.mojang.serialization.Dynamic<?> p_16377_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `createUUIDFromLongs`, `createUUIDFromML`, `createUUIDFromString`, `createUUIDTag`, `replaceUUIDLeastMost`, `replaceUUIDMLTag`, `replaceUUIDString`, `updateNamedChoice`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## MapIdFix

*class* `net.minecraft.util.datafix.fixes.MapIdFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## MemoryExpiryDataFix

*class* `net.minecraft.util.datafix.fixes.MemoryExpiryDataFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_16408_)`
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_16412_)`
- `private com.mojang.serialization.Dynamic<?> updateBrain(com.mojang.serialization.Dynamic<?> p_16414_)`
- `private com.mojang.serialization.Dynamic<?> updateMemories(com.mojang.serialization.Dynamic<?> p_16416_)`
- `private com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> updateMemoryEntry(com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_16410_)`
- `private com.mojang.serialization.Dynamic<?> wrapMemoryValue(com.mojang.serialization.Dynamic<?> p_16418_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## MissingDimensionFix

*class* `net.minecraft.util.datafix.fixes.MissingDimensionFix`

### Methods
- `protected static <A> com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<A,com.mojang.serialization.Dynamic<?>>> fields(String p_16439_,  com.mojang.datafixers.types.Type<A> p_16440_)`
- `protected static <A> com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Either<A,com.mojang.datafixers.util.Unit>,com.mojang.serialization.Dynamic<?>>> optionalFields(String p_16447_,  com.mojang.datafixers.types.Type<A> p_16448_)`
- `protected static <A1, A2> com.mojang.datafixers.types.Type<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Either<A1,com.mojang.datafixers.util.Unit>,com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Either<A2,com.mojang.datafixers.util.Unit>,com.mojang.serialization.Dynamic<?>>>> optionalFields(String p_16442_,  com.mojang.datafixers.types.Type<A1> p_16443_,  String p_16444_,  com.mojang.datafixers.types.Type<A2> p_16445_)`
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected static com.mojang.datafixers.types.Type<? extends com.mojang.datafixers.util.Pair<? extends com.mojang.datafixers.util.Either<? extends com.mojang.datafixers.util.Pair<? extends com.mojang.datafixers.util.Either<?,com.mojang.datafixers.util.Unit>,? extends com.mojang.datafixers.util.Pair<? extends com.mojang.datafixers.util.Either<? extends List<? extends com.mojang.datafixers.util.Pair<? extends com.mojang.datafixers.util.Either<?,com.mojang.datafixers.util.Unit>,com.mojang.serialization.Dynamic<?>>>,com.mojang.datafixers.util.Unit>,com.mojang.serialization.Dynamic<?>>>,com.mojang.datafixers.util.Unit>,com.mojang.serialization.Dynamic<?>>> flatType(com.mojang.datafixers.schemas.Schema p_185131_)`
- `private <T> com.mojang.serialization.Dynamic<T> recreateSettings(com.mojang.serialization.Dynamic<T> p_16437_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## MobEffectIdFix

*class* `net.minecraft.util.datafix.fixes.MobEffectIdFix`

### Fields
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<String> ID_MAP`
- `private static final Set<String> MOB_EFFECT_INSTANCE_CARRIER_ITEMS`

### Methods
- `private static <T> Optional<com.mojang.serialization.Dynamic<T>> getAndConvertMobEffectId(com.mojang.serialization.Dynamic<T> p_300040_,  String p_300405_)`
- `private static <T> com.mojang.serialization.Dynamic<T> setFieldIfPresent(com.mojang.serialization.Dynamic<T> p_298128_,  String p_297327_,  Optional<com.mojang.serialization.Dynamic<T>> p_297377_)`
- `private static <T> com.mojang.serialization.Dynamic<T> replaceField(com.mojang.serialization.Dynamic<T> p_297407_,  String p_298935_,  String p_297534_,  Optional<com.mojang.serialization.Dynamic<T>> p_299072_)`
- `private static <T> com.mojang.serialization.Dynamic<T> renameField(com.mojang.serialization.Dynamic<T> p_299698_,  String p_297388_,  String p_300782_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateMobEffectIdField(com.mojang.serialization.Dynamic<T> p_299189_,  String p_301147_,  com.mojang.serialization.Dynamic<T> p_297288_,  String p_297619_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateMobEffectIdField(com.mojang.serialization.Dynamic<T> p_299905_,  String p_299399_,  String p_301048_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateMobEffectInstance(com.mojang.serialization.Dynamic<T> p_297886_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateMobEffectInstanceList(com.mojang.serialization.Dynamic<T> p_298694_,  String p_298177_,  String p_300921_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateSuspiciousStewEntry(com.mojang.serialization.Dynamic<T> p_299220_,  com.mojang.serialization.Dynamic<T> p_300010_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateSuspiciousStewEntry(com.mojang.serialization.Dynamic<T> p_297367_)`
- `private com.mojang.datafixers.Typed<?> updateNamedChoice(com.mojang.datafixers.Typed<?> p_299605_,  com.mojang.datafixers.DSL.TypeReference p_299152_,  String p_300042_,  Function<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_300498_)`
- `private com.mojang.datafixers.TypeRewriteRule blockEntityFixer()`
- `private static <T> com.mojang.serialization.Dynamic<T> fixMooshroomTag(com.mojang.serialization.Dynamic<T> p_298884_)`
- `private static <T> com.mojang.serialization.Dynamic<T> fixArrowTag(com.mojang.serialization.Dynamic<T> p_298539_)`
- `private static <T> com.mojang.serialization.Dynamic<T> fixAreaEffectCloudTag(com.mojang.serialization.Dynamic<T> p_300392_)`
- `private static com.mojang.serialization.Dynamic<?> updateLivingEntityTag(com.mojang.serialization.Dynamic<?> p_299534_)`
- `private com.mojang.datafixers.TypeRewriteRule entityFixer()`
- `private com.mojang.datafixers.TypeRewriteRule playerFixer()`
- `private static <T> com.mojang.serialization.Dynamic<T> fixSuspiciousStewTag(com.mojang.serialization.Dynamic<T> p_301166_)`
- `private com.mojang.datafixers.TypeRewriteRule itemStackFixer()`
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## MobSpawnerEntityIdentifiersFix

*class* `net.minecraft.util.datafix.fixes.MobSpawnerEntityIdentifiersFix`

### Methods
- `private com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_16457_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## NamedEntityFix

*class* `net.minecraft.util.datafix.fixes.NamedEntityFix`

### Fields
- `private final String name`
- `private final String entityName`
- `private final com.mojang.datafixers.DSL.TypeReference type`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected abstract com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_16473_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## NamespacedTypeRenameFix

*class* `net.minecraft.util.datafix.fixes.NamespacedTypeRenameFix`

### Fields
- `private final String name`
- `private final com.mojang.datafixers.DSL.TypeReference type`
- `private final UnaryOperator<String> renamer`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## NewVillageFix

*class* `net.minecraft.util.datafix.fixes.NewVillageFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <SF> com.mojang.datafixers.TypeRewriteRule cap(com.mojang.datafixers.types.templates.CompoundList.CompoundListType<String,SF> p_16499_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ObjectiveDisplayNameFix

*class* `net.minecraft.util.datafix.fixes.ObjectiveDisplayNameFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ObjectiveRenderTypeFix

*class* `net.minecraft.util.datafix.fixes.ObjectiveRenderTypeFix`

### Methods
- `private static String getRenderType(String p_262957_)`
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OminousBannerBlockEntityRenameFix

*class* `net.minecraft.util.datafix.fixes.OminousBannerBlockEntityRenameFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_16551_)`
- `private com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_16553_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OminousBannerRenameFix

*class* `net.minecraft.util.datafix.fixes.OminousBannerRenameFix`

### Methods
- `protected <T> com.mojang.serialization.Dynamic<T> fixItemStackTag(com.mojang.serialization.Dynamic<T> p_216696_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.ItemStackTagFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsAccessibilityOnboardFix

*class* `net.minecraft.util.datafix.fixes.OptionsAccessibilityOnboardFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsAddTextBackgroundFix

*class* `net.minecraft.util.datafix.fixes.OptionsAddTextBackgroundFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private double calculateBackground(String p_16617_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsAmbientOcclusionFix

*class* `net.minecraft.util.datafix.fixes.OptionsAmbientOcclusionFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static String updateValue(String p_263541_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsForceVBOFix

*class* `net.minecraft.util.datafix.fixes.OptionsForceVBOFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsKeyLwjgl3Fix

*class* `net.minecraft.util.datafix.fixes.OptionsKeyLwjgl3Fix`

### Fields
- `public static final String KEY_UNKNOWN` (= "key.unknown")
- `private static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<String> MAP`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsKeyTranslationFix

*class* `net.minecraft.util.datafix.fixes.OptionsKeyTranslationFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsLowerCaseLanguageFix

*class* `net.minecraft.util.datafix.fixes.OptionsLowerCaseLanguageFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsProgrammerArtFix

*class* `net.minecraft.util.datafix.fixes.OptionsProgrammerArtFix`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <T> com.mojang.serialization.Dynamic<T> fixList(com.mojang.serialization.Dynamic<T> p_249761_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OptionsRenameFieldFix

*class* `net.minecraft.util.datafix.fixes.OptionsRenameFieldFix`

### Fields
- `private final String fixName`
- `private final String fieldFrom`
- `private final String fieldTo`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## OverreachingTickFix

*class* `net.minecraft.util.datafix.fixes.OverreachingTickFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.serialization.Dynamic<?> extractOverreachingTicks(com.mojang.serialization.Dynamic<?> p_207663_,  int p_207664_,  int p_207665_,  Optional<? extends com.mojang.serialization.Dynamic<?>> p_207666_,  String p_207667_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## PlayerUUIDFix

*class* `net.minecraft.util.datafix.fixes.PlayerUUIDFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `typeReference`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `createUUIDFromLongs`, `createUUIDFromML`, `createUUIDFromString`, `createUUIDTag`, `replaceUUIDLeastMost`, `replaceUUIDMLTag`, `replaceUUIDString`, `updateNamedChoice`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## PoiTypeRemoveFix

*class* `net.minecraft.util.datafix.fixes.PoiTypeRemoveFix`

### Fields
- `private final Predicate<String> typesToKeep`

### Methods
- `protected <T> Stream<com.mojang.serialization.Dynamic<T>> processRecords(Stream<com.mojang.serialization.Dynamic<T>> p_216707_)`
- `private <T> boolean shouldKeepRecord(com.mojang.serialization.Dynamic<T> p_216705_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractPoiSectionFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## PoiTypeRenameFix

*class* `net.minecraft.util.datafix.fixes.PoiTypeRenameFix`

### Fields
- `private final Function<String,String> renamer`

### Methods
- `protected <T> Stream<com.mojang.serialization.Dynamic<T>> processRecords(Stream<com.mojang.serialization.Dynamic<T>> p_216716_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractPoiSectionFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## RandomSequenceSettingsFix

*class* `net.minecraft.util.datafix.fixes.RandomSequenceSettingsFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## RecipesFix

*class* `net.minecraft.util.datafix.fixes.RecipesFix`

### Fields
- `public static final Map<String,String> RECIPES`

## RecipesRenameningFix

*class* `net.minecraft.util.datafix.fixes.RecipesRenameningFix`

### Fields
- `public static final Map<String,String> RECIPES`

## RedstoneWireConnectionsFix

*class* `net.minecraft.util.datafix.fixes.RedstoneWireConnectionsFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <T> com.mojang.serialization.Dynamic<T> updateRedstoneConnections(com.mojang.serialization.Dynamic<T> p_16753_)`
- `private static boolean isConnected(String p_16755_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## References

*class* `net.minecraft.util.datafix.fixes.References`

### Fields
- `public static final com.mojang.datafixers.DSL.TypeReference LEVEL`
- `public static final com.mojang.datafixers.DSL.TypeReference PLAYER`
- `public static final com.mojang.datafixers.DSL.TypeReference CHUNK`
- `public static final com.mojang.datafixers.DSL.TypeReference HOTBAR`
- `public static final com.mojang.datafixers.DSL.TypeReference OPTIONS`
- `public static final com.mojang.datafixers.DSL.TypeReference STRUCTURE`
- `public static final com.mojang.datafixers.DSL.TypeReference STATS`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_COMMAND_STORAGE`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_FORCED_CHUNKS`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_MAP_DATA`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_MAP_INDEX`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_RAIDS`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_RANDOM_SEQUENCES`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_STRUCTURE_FEATURE_INDICES`
- `public static final com.mojang.datafixers.DSL.TypeReference SAVED_DATA_SCOREBOARD`
- `public static final com.mojang.datafixers.DSL.TypeReference ADVANCEMENTS`
- `public static final com.mojang.datafixers.DSL.TypeReference POI_CHUNK`
- `public static final com.mojang.datafixers.DSL.TypeReference ENTITY_CHUNK`
- `public static final com.mojang.datafixers.DSL.TypeReference BLOCK_ENTITY`
- `public static final com.mojang.datafixers.DSL.TypeReference ITEM_STACK`
- `public static final com.mojang.datafixers.DSL.TypeReference BLOCK_STATE`
- `public static final com.mojang.datafixers.DSL.TypeReference ENTITY_NAME`
- `public static final com.mojang.datafixers.DSL.TypeReference ENTITY_TREE`
- `public static final com.mojang.datafixers.DSL.TypeReference ENTITY`
- `public static final com.mojang.datafixers.DSL.TypeReference BLOCK_NAME`
- `public static final com.mojang.datafixers.DSL.TypeReference ITEM_NAME`
- `public static final com.mojang.datafixers.DSL.TypeReference GAME_EVENT_NAME`
- `public static final com.mojang.datafixers.DSL.TypeReference UNTAGGED_SPAWNER`
- `public static final com.mojang.datafixers.DSL.TypeReference STRUCTURE_FEATURE`
- `public static final com.mojang.datafixers.DSL.TypeReference OBJECTIVE`
- `public static final com.mojang.datafixers.DSL.TypeReference TEAM`
- `public static final com.mojang.datafixers.DSL.TypeReference RECIPE`
- `public static final com.mojang.datafixers.DSL.TypeReference BIOME`
- `public static final com.mojang.datafixers.DSL.TypeReference MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST`
- `public static final com.mojang.datafixers.DSL.TypeReference WORLD_GEN_SETTINGS`

## RemapChunkStatusFix

*class* `net.minecraft.util.datafix.fixes.RemapChunkStatusFix`

### Fields
- `private final String name`
- `private final UnaryOperator<String> mapper`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <T> com.mojang.serialization.Dynamic<T> fixStatus(com.mojang.serialization.Dynamic<T> p_281410_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## RemoveGolemGossipFix

*class* `net.minecraft.util.datafix.fixes.RemoveGolemGossipFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_16826_)`
- `private static com.mojang.serialization.Dynamic<?> fixValue(com.mojang.serialization.Dynamic<?> p_16828_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## RenamedCoralFansFix

*class* `net.minecraft.util.datafix.fixes.RenamedCoralFansFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`

## RenamedCoralFix

*class* `net.minecraft.util.datafix.fixes.RenamedCoralFix`

### Fields
- `public static final Map<String,String> RENAMED_IDS`

## ReorganizePoi

*class* `net.minecraft.util.datafix.fixes.ReorganizePoi`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> cap(com.mojang.serialization.Dynamic<T> p_16858_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## SavedDataFeaturePoolElementFix

*class* `net.minecraft.util.datafix.fixes.SavedDataFeaturePoolElementFix`

### Fields
- `private static final Pattern INDEX_PATTERN`
- `private static final Set<String> PIECE_TYPE`
- `private static final Set<String> FEATURES`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> fixTag(com.mojang.serialization.Dynamic<T> p_145663_)`
- `private static <T> com.mojang.serialization.Dynamic<T> updateChildren(com.mojang.serialization.Dynamic<T> p_145665_)`
- `private static Stream<? extends com.mojang.serialization.Dynamic<?>> updateChildren(Stream<? extends com.mojang.serialization.Dynamic<?>> p_145661_)`
- `private static <T> com.mojang.serialization.OptionalDynamic<T> get(com.mojang.serialization.Dynamic<T> p_145650_,  String... p_145651_)`
- `protected static com.mojang.serialization.Dynamic<?> fixFeature(com.mojang.serialization.Dynamic<?> p_145648_)`
- `private static Optional<String> getReplacement(String p_145653_,  String p_145654_,  String p_145655_,  String p_145656_,  String p_145657_,  String p_145658_,  String p_145659_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## SavedDataUUIDFix

*class* `net.minecraft.util.datafix.fixes.SavedDataUUIDFix`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `typeReference`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.AbstractUUIDFix`: `createUUIDFromLongs`, `createUUIDFromML`, `createUUIDFromString`, `createUUIDTag`, `replaceUUIDLeastMost`, `replaceUUIDMLTag`, `replaceUUIDString`, `updateNamedChoice`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ScoreboardDisplaySlotFix

*class* `net.minecraft.util.datafix.fixes.ScoreboardDisplaySlotFix`

### Fields
- `private static final Map<String,String> SLOT_RENAMES`

### Methods
- `@Nullable private static String rename(String p_297960_)`
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## SimpleEntityRenameFix

*class* `net.minecraft.util.datafix.fixes.SimpleEntityRenameFix`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `name`

### Methods
- `protected com.mojang.datafixers.util.Pair<String,com.mojang.datafixers.Typed<?>> fix(String p_16905_,  com.mojang.datafixers.Typed<?> p_16906_)`
- `protected abstract com.mojang.datafixers.util.Pair<String,com.mojang.serialization.Dynamic<?>> getNewNameAndTag(String p_16907_,  com.mojang.serialization.Dynamic<?> p_16908_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.EntityRenameFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## SimplestEntityRenameFix

*class* `net.minecraft.util.datafix.fixes.SimplestEntityRenameFix`

### Fields
- `private final String name`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `protected abstract String rename(String p_16930_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## SpawnerDataFix

*class* `net.minecraft.util.datafix.fixes.SpawnerDataFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private <T> com.mojang.datafixers.Typed<T> wrapEntityToSpawnData(com.mojang.datafixers.types.Type<T> p_185141_,  com.mojang.datafixers.Typed<?> p_185142_)`
- `private <T> com.mojang.datafixers.Typed<T> wrapSpawnPotentialsToWeightedEntries(com.mojang.datafixers.types.Type<T> p_185147_,  com.mojang.datafixers.Typed<?> p_185148_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## StatsCounterFix

*class* `net.minecraft.util.datafix.fixes.StatsCounterFix`

### Fields
- `private static final Set<String> SPECIAL_OBJECTIVE_CRITERIA`
- `private static final Set<String> SKIP`
- `private static final Map<String,String> CUSTOM_MAP`
- `private static final String BLOCK_KEY` (= "stat.mineBlock")
- `private static final String NEW_BLOCK_KEY` (= "minecraft:mined")
- `private static final Map<String,String> ITEM_KEYS`
- `private static final Map<String,String> ENTITY_KEYS`
- `private static final Map<String,String> ENTITIES`
- `private static final String NEW_CUSTOM_KEY` (= "minecraft:custom")

### Methods
- `@Nullable private static StatsCounterFix.StatType unpackLegacyKey(String p_300248_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.datafixers.TypeRewriteRule makeStatFixer()`
- `private com.mojang.datafixers.TypeRewriteRule makeObjectiveFixer()`
- `@Nullable private static String upgradeItem(String p_16949_)`
- `private static String upgradeBlock(String p_16951_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## StatsCounterFix.StatType

*record* `net.minecraft.util.datafix.fixes.StatsCounterFix.StatType`

Enclosing class: StatsCounterFix

### Fields
- `private final String type`
  The field for the type record component.
- `private final String typeKey`
  The field for the typeKey record component.

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
- `public String type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public String typeKey()`
  Returns the value of the typeKey record component.
  - returns: the value of the typeKey record component

## StatsRenameFix

*class* `net.minecraft.util.datafix.fixes.StatsRenameFix`

### Fields
- `private final String name`
- `private final Map<String,String> renames`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.datafixers.TypeRewriteRule createCriteriaRule()`
- `private com.mojang.datafixers.TypeRewriteRule createStatRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## StriderGravityFix

*class* `net.minecraft.util.datafix.fixes.StriderGravityFix`

### Methods
- `public com.mojang.serialization.Dynamic<?> fixTag(com.mojang.serialization.Dynamic<?> p_16959_)`
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_16957_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## StructureReferenceCountFix

*class* `net.minecraft.util.datafix.fixes.StructureReferenceCountFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> setCountToAtLeastOne(com.mojang.serialization.Dynamic<T> p_16966_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## StructuresBecomeConfiguredFix

*class* `net.minecraft.util.datafix.fixes.StructuresBecomeConfiguredFix`

### Fields
- `private static final Map<String,StructuresBecomeConfiguredFix.Conversion> CONVERSION_MAP`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private com.mojang.serialization.Dynamic<?> fix(com.mojang.serialization.Dynamic<?> p_207692_)`
- `private com.mojang.serialization.Dynamic<?> updateStarts(com.mojang.serialization.Dynamic<?> p_207700_,  com.mojang.serialization.Dynamic<?> p_207701_)`
- `private com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> updateStart(com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_207685_,  com.mojang.serialization.Dynamic<?> p_207686_)`
- `private com.mojang.serialization.Dynamic<?> updateReferences(com.mojang.serialization.Dynamic<?> p_207717_,  com.mojang.serialization.Dynamic<?> p_207718_)`
- `private com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> updateReference(com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_207711_,  com.mojang.serialization.Dynamic<?> p_207712_)`
- `private com.mojang.serialization.Dynamic<?> findUpdatedStructureType(com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_207724_,  com.mojang.serialization.Dynamic<?> p_207725_)`
- `private Optional<String> guessConfiguration(com.mojang.serialization.Dynamic<?> p_207694_,  StructuresBecomeConfiguredFix.Conversion p_207695_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## StructuresBecomeConfiguredFix.Conversion

*record* `net.minecraft.util.datafix.fixes.StructuresBecomeConfiguredFix.Conversion`

Enclosing class: StructuresBecomeConfiguredFix

### Fields
- `private final Map<String,String> biomeMapping`
  The field for the biomeMapping record component.
- `private final String fallback`
  The field for the fallback record component.

### Methods
- `public static StructuresBecomeConfiguredFix.Conversion trivial(String p_207747_)`
- `public static StructuresBecomeConfiguredFix.Conversion biomeMapped(Map<List<String>,String> p_207751_,  String p_207752_)`
- `private static Map<String,String> unpack(Map<List<String>,String> p_207749_)`
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
- `public Map<String,String> biomeMapping()`
  Returns the value of the biomeMapping record component.
  - returns: the value of the biomeMapping record component
- `public String fallback()`
  Returns the value of the fallback record component.
  - returns: the value of the fallback record component

## StructureSettingsFlattenFix

*class* `net.minecraft.util.datafix.fixes.StructureSettingsFlattenFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> fixDimension(com.mojang.datafixers.util.Pair<com.mojang.serialization.Dynamic<?>,com.mojang.serialization.Dynamic<?>> p_204005_)`
- `private static com.mojang.serialization.Dynamic<?> fixStructures(com.mojang.serialization.Dynamic<?> p_204007_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## TeamDisplayNameFix

*class* `net.minecraft.util.datafix.fixes.TeamDisplayNameFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## TrappedChestBlockEntityFix

*class* `net.minecraft.util.datafix.fixes.TrappedChestBlockEntityFix`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int SIZE` (= 4096)
- `private static final short SIZE_BITS` (= 12)

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## TrappedChestBlockEntityFix.TrappedChestSection

*class* `net.minecraft.util.datafix.fixes.TrappedChestBlockEntityFix.TrappedChestSection`

Enclosing class: TrappedChestBlockEntityFix

### Fields
- `@Nullable private it.unimi.dsi.fastutil.ints.IntSet chestIds`

### Inherited fields
- from `net.minecraft.util.datafix.fixes.LeavesFix.Section`: `BLOCK_STATES_TAG`, `index`, `NAME_TAG`, `palette`, `paletteFinder`, `PROPERTIES_TAG`, `storage`

### Methods
- `protected boolean skippable()`
- `public boolean isTrappedChest(int p_17054_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.LeavesFix.Section`: `getBlock`, `getIndex`, `getStateId`, `isSkippable`, `readStorage`, `write`

## VariantRenameFix

*class* `net.minecraft.util.datafix.fixes.VariantRenameFix`

### Fields
- `private final Map<String,String> renames`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_216748_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## VillagerDataFix

*class* `net.minecraft.util.datafix.fixes.VillagerDataFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_17062_)`
- `private static String upgradeData(int p_17059_,  int p_17060_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## VillagerFollowRangeFix

*class* `net.minecraft.util.datafix.fixes.VillagerFollowRangeFix`

### Fields
- `private static final double ORIGINAL_VALUE` (= 16.0)
- `private static final double NEW_BASE_VALUE` (= 48.0)

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_17066_)`
- `private static com.mojang.serialization.Dynamic<?> fixValue(com.mojang.serialization.Dynamic<?> p_17068_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## VillagerRebuildLevelAndXpFix

*class* `net.minecraft.util.datafix.fixes.VillagerRebuildLevelAndXpFix`

### Fields
- `private static final int TRADES_PER_LEVEL` (= 2)
- `private static final int[] LEVEL_XP_THRESHOLDS`

### Methods
- `public static int getMinXpPerLevel(int p_17080_)`
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.datafixers.Typed<?> addLevel(com.mojang.datafixers.Typed<?> p_17100_,  int p_17101_)`
- `private static com.mojang.datafixers.Typed<?> addXpFromLevel(com.mojang.datafixers.Typed<?> p_17109_,  int p_17110_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## VillagerTradeFix

*class* `net.minecraft.util.datafix.fixes.VillagerTradeFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_17143_)`
- `private com.mojang.datafixers.Typed<?> updateItemStack(com.mojang.datafixers.OpticFinder<com.mojang.datafixers.util.Pair<String,String>> p_17134_,  com.mojang.datafixers.Typed<?> p_17135_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## WallPropertyFix

*class* `net.minecraft.util.datafix.fixes.WallPropertyFix`

### Fields
- `private static final Set<String> WALL_BLOCKS`

### Methods
- `public com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static String mapProperty(String p_17164_)`
- `private static <T> com.mojang.serialization.Dynamic<T> fixWallProperty(com.mojang.serialization.Dynamic<T> p_17161_,  String p_17162_)`
- `private static <T> com.mojang.serialization.Dynamic<T> upgradeBlockStateTag(com.mojang.serialization.Dynamic<T> p_17159_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## WeaponSmithChestLootTableFix

*class* `net.minecraft.util.datafix.fixes.WeaponSmithChestLootTableFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_203114_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## WorldGenSettingsDisallowOldCustomWorldsFix

*class* `net.minecraft.util.datafix.fixes.WorldGenSettingsDisallowOldCustomWorldsFix`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## WorldGenSettingsFix

*class* `net.minecraft.util.datafix.fixes.WorldGenSettingsFix`

### Fields
- `private static final String VILLAGE` (= "minecraft:village")
- `private static final String DESERT_PYRAMID` (= "minecraft:desert_pyramid")
- `private static final String IGLOO` (= "minecraft:igloo")
- `private static final String JUNGLE_TEMPLE` (= "minecraft:jungle_pyramid")
- `private static final String SWAMP_HUT` (= "minecraft:swamp_hut")
- `private static final String PILLAGER_OUTPOST` (= "minecraft:pillager_outpost")
- `private static final String END_CITY` (= "minecraft:endcity")
- `private static final String WOODLAND_MANSION` (= "minecraft:mansion")
- `private static final String OCEAN_MONUMENT` (= "minecraft:monument")
- `private static final com.google.common.collect.ImmutableMap<String,WorldGenSettingsFix.StructureFeatureConfiguration> DEFAULTS`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static <T> com.mojang.serialization.Dynamic<T> noise(long p_17175_,  com.mojang.serialization.DynamicLike<T> p_17176_,  com.mojang.serialization.Dynamic<T> p_17177_,  com.mojang.serialization.Dynamic<T> p_17178_)`
- `private static <T> com.mojang.serialization.Dynamic<T> vanillaBiomeSource(com.mojang.serialization.Dynamic<T> p_17196_,  long p_17197_,  boolean p_17198_,  boolean p_17199_)`
- `private static <T> com.mojang.serialization.Dynamic<T> fix(com.mojang.serialization.Dynamic<T> p_17186_)`
- `protected static <T> com.mojang.serialization.Dynamic<T> defaultOverworld(com.mojang.serialization.Dynamic<T> p_17188_,  long p_17189_)`
- `protected static <T> T vanillaLevels(com.mojang.serialization.Dynamic<T> p_17191_,  long p_17192_,  com.mojang.serialization.Dynamic<T> p_17193_,  boolean p_17194_)`
- `private static <T> Map<com.mojang.serialization.Dynamic<T>,com.mojang.serialization.Dynamic<T>> fixFlatStructures(com.mojang.serialization.DynamicOps<T> p_17218_,  com.mojang.serialization.OptionalDynamic<T> p_17219_)`
- `private static int getInt(String p_17229_,  int p_17230_)`
- `private static int getInt(String p_17232_,  int p_17233_,  int p_17234_)`
- `private static void setSpacing(Map<String,WorldGenSettingsFix.StructureFeatureConfiguration> p_17236_,  String p_17237_,  String p_17238_,  int p_17239_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## WorldGenSettingsFix.StructureFeatureConfiguration

*class* `net.minecraft.util.datafix.fixes.WorldGenSettingsFix.StructureFeatureConfiguration`

Enclosing class: WorldGenSettingsFix

### Fields
- `public static final com.mojang.serialization.Codec<WorldGenSettingsFix.StructureFeatureConfiguration> CODEC`
- `final int spacing`
- `final int separation`
- `final int salt`

### Methods
- `public <T> com.mojang.serialization.Dynamic<T> serialize(com.mojang.serialization.DynamicOps<T> p_17277_)`

## WorldGenSettingsHeightAndBiomeFix

*class* `net.minecraft.util.datafix.fixes.WorldGenSettingsHeightAndBiomeFix`

### Fields
- `private static final String NAME` (= "WorldGenSettingsHeightAndBiomeFix")
- `public static final String WAS_PREVIOUSLY_INCREASED_KEY` (= "has_increased_height_already")

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`
- `private static com.mojang.serialization.Dynamic<?> updateLayers(com.mojang.serialization.Dynamic<?> p_185181_)`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## WriteAndReadFix

*class* `net.minecraft.util.datafix.fixes.WriteAndReadFix`

### Fields
- `private final String name`
- `private final com.mojang.datafixers.DSL.TypeReference type`

### Methods
- `protected com.mojang.datafixers.TypeRewriteRule makeRule()`

### Inherited methods
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`

## ZombieVillagerRebuildXpFix

*class* `net.minecraft.util.datafix.fixes.ZombieVillagerRebuildXpFix`

### Methods
- `protected com.mojang.datafixers.Typed<?> fix(com.mojang.datafixers.Typed<?> p_17301_)`

### Inherited methods
- from `net.minecraft.util.datafix.fixes.NamedEntityFix`: `makeRule`
- from `com.mojang.datafixers.DataFix`: `checked`, `convertUnchecked`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhere`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `fixTypeEverywhereTyped`, `getInputSchema`, `getOutputSchema`, `getRule`, `getVersionKey`, `onFail`, `writeAndRead`, `writeFixAndRead`
