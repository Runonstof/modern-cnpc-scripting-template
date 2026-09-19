# net.minecraft.data.loot.packs

- [TradeRebalanceChestLoot](#traderebalancechestloot)
- [TradeRebalanceLootTableProvider](#traderebalanceloottableprovider)
- [VanillaArchaeologyLoot](#vanillaarchaeologyloot)
- [VanillaBlockLoot](#vanillablockloot)
- [VanillaChestLoot](#vanillachestloot)
- [VanillaEntityLoot](#vanillaentityloot)
- [VanillaFishingLoot](#vanillafishingloot)
- [VanillaGiftLoot](#vanillagiftloot)
- [VanillaLootTableProvider](#vanillaloottableprovider)
- [VanillaPiglinBarterLoot](#vanillapiglinbarterloot)
## TradeRebalanceChestLoot

*class* `net.minecraft.data.loot.packs.TradeRebalanceChestLoot`

### Methods
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_301336_)`
- `public static LootTable.Builder pillagerOutpostLootTable()`
- `public static LootTable.Builder desertPyramidLootTable()`
- `public static LootTable.Builder ancientCityLootTable()`
- `public static LootTable.Builder jungleTempleLootTable()`

## TradeRebalanceLootTableProvider

*class* `net.minecraft.data.loot.packs.TradeRebalanceLootTableProvider`

### Methods
- `public static LootTableProvider create(PackOutput p_299647_)`

## VanillaArchaeologyLoot

*class* `net.minecraft.data.loot.packs.VanillaArchaeologyLoot`

### Methods
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_278066_)`

## VanillaBlockLoot

*class* `net.minecraft.data.loot.packs.VanillaBlockLoot`

### Fields
- `private static final float[] JUNGLE_LEAVES_SAPLING_CHANGES`
- `private static final Set<Item> EXPLOSION_RESISTANT`

### Inherited fields
- from `net.minecraft.data.loot.BlockLootSubProvider`: `enabledFeatures`, `explosionResistant`, `HAS_NO_SILK_TOUCH`, `HAS_SHEARS`, `HAS_SILK_TOUCH`, `map`, `NORMAL_LEAVES_SAPLING_CHANCES`

### Methods
- `protected void generate()`
- `private LootTable.Builder createDecoratedPotTable(Block p_277929_)`
- `private LootTable.Builder createPitcherCropLoot()`

### Inherited methods
- from `net.minecraft.data.loot.BlockLootSubProvider`: `add`, `add`, `addNetherVinesDropTable`, `applyExplosionCondition`, `applyExplosionDecay`, `createAttachedStemDrops`, `createBannerDrop`, `createBeeHiveDrop`, `createBeeNestDrop`, `createCandleCakeDrops`, `createCandleDrops`, `createCaveVinesDrop`, `createCopperOreDrops`, `createCropDrops`, `createDoorTable`, `createDoublePlantShearsDrop`, `createDoublePlantWithSeedDrops`, `createGrassDrops`, `createLapisOreDrops`, `createLeavesDrops`, `createMangroveLeavesDrops`, `createMultifaceBlockDrops`, `createMushroomBlockDrop`, `createNameableBlockEntityTable`, `createOakLeavesDrops`, `createOreDrop`, `createPetalsDrops`, `createPotFlowerItemTable`, `createRedstoneOreDrops`, `createSelfDropDispatchTable`, `createShearsDispatchTable`, `createShearsOnlyDrop`, `createShulkerBoxDrop`, `createSilkTouchDispatchTable`, `createSilkTouchOnlyTable`, `createSilkTouchOrShearsDispatchTable`, `createSingleItemTable`, `createSingleItemTable`, `createSingleItemTableWithSilkTouch`, `createSingleItemTableWithSilkTouch`, `createSinglePropConditionTable`, `createSlabItemTable`, `createStemDrops`, `dropOther`, `dropPottedContents`, `dropSelf`, `dropWhenSilkTouch`, `generate`, `getKnownBlocks`, `noDrop`, `otherWhenSilkTouch`

## VanillaChestLoot

*class* `net.minecraft.data.loot.packs.VanillaChestLoot`

### Methods
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_250931_)`
- `public static LootTable.Builder shipwreckSupplyLootTable()`
- `public static LootTable.Builder shipwreckMapLootTable()`
- `public static LootTable.Builder bastionHoglinStableLootTable()`
- `public static LootTable.Builder bastionBridgeLootTable()`
- `public static LootTable.Builder endCityTreasureLootTable()`
- `public static LootTable.Builder netherBridgeLootTable()`
- `public static LootTable.Builder bastionTreasureLootTable()`
- `public static LootTable.Builder bastionOtherLootTable()`
- `public static LootTable.Builder woodlandMansionLootTable()`
- `public static LootTable.Builder strongholdLibraryLootTable()`
- `public static LootTable.Builder strongholdCorridorLootTable()`
- `public static LootTable.Builder ancientCityLootTable()`
- `public static LootTable.Builder jungleTempleLootTable()`
- `public static LootTable.Builder shipwreckTreasureLootTable()`
- `public static LootTable.Builder pillagerOutpostLootTable()`
- `public static LootTable.Builder desertPyramidLootTable()`

## VanillaEntityLoot

*class* `net.minecraft.data.loot.packs.VanillaEntityLoot`

### Inherited fields
- from `net.minecraft.data.loot.EntityLootSubProvider`: `ENTITY_ON_FIRE`

### Methods
- `public void generate()`
- `public static LootTable.Builder elderGuardianLootTable()`

### Inherited methods
- from `net.minecraft.data.loot.EntityLootSubProvider`: `add`, `add`, `canHaveLootTable`, `createSheepTable`, `generate`, `getKnownEntityTypes`, `killedByFrog`, `killedByFrogVariant`

## VanillaFishingLoot

*class* `net.minecraft.data.loot.packs.VanillaFishingLoot`

### Fields
- `public static final LootItemCondition.Builder IN_JUNGLE`
- `public static final LootItemCondition.Builder IN_SPARSE_JUNGLE`
- `public static final LootItemCondition.Builder IN_BAMBOO_JUNGLE`

### Methods
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_249559_)`
- `public static LootTable.Builder fishingFishLootTable()`

## VanillaGiftLoot

*class* `net.minecraft.data.loot.packs.VanillaGiftLoot`

### Methods
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_250831_)`

## VanillaLootTableProvider

*class* `net.minecraft.data.loot.packs.VanillaLootTableProvider`

### Methods
- `public static LootTableProvider create(PackOutput p_250807_)`

## VanillaPiglinBarterLoot

*class* `net.minecraft.data.loot.packs.VanillaPiglinBarterLoot`

### Methods
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_250176_)`
