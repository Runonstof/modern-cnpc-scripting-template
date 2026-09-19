# net.minecraft.data.loot

- [BlockLootSubProvider](#blocklootsubprovider)
- [EntityLootSubProvider](#entitylootsubprovider)
- [LootTableProvider](#loottableprovider)
- [LootTableProvider.SubProviderEntry](#loottableprovider.subproviderentry)
- [LootTableSubProvider](#loottablesubprovider)
## BlockLootSubProvider

*class* `net.minecraft.data.loot.BlockLootSubProvider`

### Fields
- `protected static final LootItemCondition.Builder HAS_SILK_TOUCH`
- `protected static final LootItemCondition.Builder HAS_NO_SILK_TOUCH`
- `protected static final LootItemCondition.Builder HAS_SHEARS`
- `private static final LootItemCondition.Builder HAS_SHEARS_OR_SILK_TOUCH`
- `private static final LootItemCondition.Builder HAS_NO_SHEARS_OR_SILK_TOUCH`
- `protected final Set<Item> explosionResistant`
- `protected final FeatureFlagSet enabledFeatures`
- `protected final Map<ResourceLocation,LootTable.Builder> map`
- `protected static final float[] NORMAL_LEAVES_SAPLING_CHANCES`
- `private static final float[] NORMAL_LEAVES_STICK_CHANCES`

### Methods
- `protected <T extends FunctionUserBuilder<T>> T applyExplosionDecay(ItemLike p_248695_,  FunctionUserBuilder<T> p_248548_)`
- `protected <T extends ConditionUserBuilder<T>> T applyExplosionCondition(ItemLike p_249717_,  ConditionUserBuilder<T> p_248851_)`
- `public LootTable.Builder createSingleItemTable(ItemLike p_251912_)`
- `protected static LootTable.Builder createSelfDropDispatchTable(Block p_252253_,  LootItemCondition.Builder p_248764_,  LootPoolEntryContainer.Builder<?> p_249146_)`
- `protected static LootTable.Builder createSilkTouchDispatchTable(Block p_250203_,  LootPoolEntryContainer.Builder<?> p_252089_)`
- `protected static LootTable.Builder createShearsDispatchTable(Block p_252195_,  LootPoolEntryContainer.Builder<?> p_250102_)`
- `protected static LootTable.Builder createSilkTouchOrShearsDispatchTable(Block p_250539_,  LootPoolEntryContainer.Builder<?> p_251459_)`
- `protected LootTable.Builder createSingleItemTableWithSilkTouch(Block p_249305_,  ItemLike p_251905_)`
- `protected LootTable.Builder createSingleItemTable(ItemLike p_251584_,  NumberProvider p_249865_)`
- `protected LootTable.Builder createSingleItemTableWithSilkTouch(Block p_251449_,  ItemLike p_248558_,  NumberProvider p_250047_)`
- `protected static LootTable.Builder createSilkTouchOnlyTable(ItemLike p_252216_)`
- `protected LootTable.Builder createPotFlowerItemTable(ItemLike p_249395_)`
- `protected LootTable.Builder createSlabItemTable(Block p_251313_)`
- `protected <T extends Comparable<T> & StringRepresentable> LootTable.Builder createSinglePropConditionTable(Block p_252154_,  Property<T> p_250272_,  T p_250292_)`
- `protected LootTable.Builder createNameableBlockEntityTable(Block p_252291_)`
- `protected LootTable.Builder createShulkerBoxDrop(Block p_252164_)`
- `protected LootTable.Builder createCopperOreDrops(Block p_251306_)`
- `protected LootTable.Builder createLapisOreDrops(Block p_251511_)`
- `protected LootTable.Builder createRedstoneOreDrops(Block p_251906_)`
- `protected LootTable.Builder createBannerDrop(Block p_249810_)`
- `protected static LootTable.Builder createBeeNestDrop(Block p_250988_)`
- `protected static LootTable.Builder createBeeHiveDrop(Block p_248770_)`
- `protected static LootTable.Builder createCaveVinesDrop(Block p_251070_)`
- `protected LootTable.Builder createOreDrop(Block p_250450_,  Item p_249745_)`
- `protected LootTable.Builder createMushroomBlockDrop(Block p_249959_,  ItemLike p_249315_)`
- `protected LootTable.Builder createGrassDrops(Block p_252139_)`
- `public LootTable.Builder createStemDrops(Block p_250957_,  Item p_249098_)`
- `public LootTable.Builder createAttachedStemDrops(Block p_249778_,  Item p_250678_)`
- `protected static LootTable.Builder createShearsOnlyDrop(ItemLike p_250684_)`
- `protected LootTable.Builder createMultifaceBlockDrops(Block p_249088_,  LootItemCondition.Builder p_251535_)`
- `protected LootTable.Builder createLeavesDrops(Block p_250088_,  Block p_250731_,  float... p_248949_)`
- `protected LootTable.Builder createOakLeavesDrops(Block p_249535_,  Block p_251505_,  float... p_250753_)`
- `protected LootTable.Builder createMangroveLeavesDrops(Block p_251103_)`
- `protected LootTable.Builder createCropDrops(Block p_249457_,  Item p_248599_,  Item p_251915_,  LootItemCondition.Builder p_252202_)`
- `protected static LootTable.Builder createDoublePlantShearsDrop(Block p_248678_)`
- `protected LootTable.Builder createDoublePlantWithSeedDrops(Block p_248590_,  Block p_248735_)`
- `protected LootTable.Builder createCandleDrops(Block p_250896_)`
- `protected LootTable.Builder createPetalsDrops(Block p_273240_)`
- `protected static LootTable.Builder createCandleCakeDrops(Block p_250280_)`
- `public static LootTable.Builder noDrop()`
- `protected abstract void generate()`
- `protected Iterable<Block> getKnownBlocks()`
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_249322_)`
- `protected void addNetherVinesDropTable(Block p_252269_,  Block p_250696_)`
- `protected LootTable.Builder createDoorTable(Block p_252166_)`
- `protected void dropPottedContents(Block p_251064_)`
- `protected void otherWhenSilkTouch(Block p_249932_,  Block p_252053_)`
- `protected void dropOther(Block p_248885_,  ItemLike p_251883_)`
- `protected void dropWhenSilkTouch(Block p_250855_)`
- `protected void dropSelf(Block p_249181_)`
- `protected void add(Block p_251966_,  Function<Block,LootTable.Builder> p_251699_)`
- `protected void add(Block p_250610_,  LootTable.Builder p_249817_)`

## EntityLootSubProvider

*class* `net.minecraft.data.loot.EntityLootSubProvider`

### Fields
- `protected static final EntityPredicate.Builder ENTITY_ON_FIRE`
- `private static final Set<EntityType<?>> SPECIAL_LOOT_TABLE_TYPES`
- `private final FeatureFlagSet allowed`
- `private final FeatureFlagSet required`
- `private final Map<EntityType<?>,Map<ResourceLocation,LootTable.Builder>> map`

### Methods
- `protected static LootTable.Builder createSheepTable(ItemLike p_249422_)`
- `public abstract void generate()`
- `protected Stream<EntityType<?>> getKnownEntityTypes()`
- `public void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_251751_)`
- `protected boolean canHaveLootTable(EntityType<?> p_249029_)`
- `protected LootItemCondition.Builder killedByFrog()`
- `protected LootItemCondition.Builder killedByFrogVariant(FrogVariant p_249403_)`
- `protected void add(EntityType<?> p_248740_,  LootTable.Builder p_249440_)`
- `protected void add(EntityType<?> p_252130_,  ResourceLocation p_251706_,  LootTable.Builder p_249357_)`

## LootTableProvider

*class* `net.minecraft.data.loot.LootTableProvider`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final PackOutput.PathProvider pathProvider`
- `private final Set<ResourceLocation> requiredTables`
- `private final List<LootTableProvider.SubProviderEntry> subProviders`

### Inherited fields
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_254060_)`
- `public List<LootTableProvider.SubProviderEntry> getTables()`
- `protected void validate(Map<ResourceLocation,LootTable> map,  ValidationContext validationcontext)`
- `public final String getName()`

## LootTableProvider.SubProviderEntry

*record* `net.minecraft.data.loot.LootTableProvider.SubProviderEntry`

Enclosing class: LootTableProvider

### Fields
- `private final Supplier<LootTableSubProvider> provider`
  The field for the provider record component.
- `private final LootContextParamSet paramSet`
  The field for the paramSet record component.

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
- `public Supplier<LootTableSubProvider> provider()`
  Returns the value of the provider record component.
  - returns: the value of the provider record component
- `public LootContextParamSet paramSet()`
  Returns the value of the paramSet record component.
  - returns: the value of the paramSet record component

## LootTableSubProvider

*interface* `net.minecraft.data.loot.LootTableSubProvider`

### Methods
- `void generate(BiConsumer<ResourceLocation,LootTable.Builder> p_249643_)`
