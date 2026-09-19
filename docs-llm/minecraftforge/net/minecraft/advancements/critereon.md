# net.minecraft.advancements.critereon

- [AbstractCriterionTriggerInstance](#abstractcriteriontriggerinstance)
- [BeeNestDestroyedTrigger](#beenestdestroyedtrigger)
- [BeeNestDestroyedTrigger.TriggerInstance](#beenestdestroyedtrigger.triggerinstance)
- [BlockPredicate](#blockpredicate)
- [BlockPredicate.Builder](#blockpredicate.builder)
- [BredAnimalsTrigger](#bredanimalstrigger)
- [BredAnimalsTrigger.TriggerInstance](#bredanimalstrigger.triggerinstance)
- [BrewedPotionTrigger](#brewedpotiontrigger)
- [BrewedPotionTrigger.TriggerInstance](#brewedpotiontrigger.triggerinstance)
- [ChangeDimensionTrigger](#changedimensiontrigger)
- [ChangeDimensionTrigger.TriggerInstance](#changedimensiontrigger.triggerinstance)
- [ChanneledLightningTrigger](#channeledlightningtrigger)
- [ChanneledLightningTrigger.TriggerInstance](#channeledlightningtrigger.triggerinstance)
- [ConstructBeaconTrigger](#constructbeacontrigger)
- [ConstructBeaconTrigger.TriggerInstance](#constructbeacontrigger.triggerinstance)
- [ConsumeItemTrigger](#consumeitemtrigger)
- [ConsumeItemTrigger.TriggerInstance](#consumeitemtrigger.triggerinstance)
- [ContextAwarePredicate](#contextawarepredicate)
- [CuredZombieVillagerTrigger](#curedzombievillagertrigger)
- [CuredZombieVillagerTrigger.TriggerInstance](#curedzombievillagertrigger.triggerinstance)
- [DamagePredicate](#damagepredicate)
- [DamagePredicate.Builder](#damagepredicate.builder)
- [DamageSourcePredicate](#damagesourcepredicate)
- [DamageSourcePredicate.Builder](#damagesourcepredicate.builder)
- [DeserializationContext](#deserializationcontext)
- [DistancePredicate](#distancepredicate)
- [DistanceTrigger](#distancetrigger)
- [DistanceTrigger.TriggerInstance](#distancetrigger.triggerinstance)
- [EffectsChangedTrigger](#effectschangedtrigger)
- [EffectsChangedTrigger.TriggerInstance](#effectschangedtrigger.triggerinstance)
- [EnchantedItemTrigger](#enchanteditemtrigger)
- [EnchantedItemTrigger.TriggerInstance](#enchanteditemtrigger.triggerinstance)
- [EnchantmentPredicate](#enchantmentpredicate)
- [EnterBlockTrigger](#enterblocktrigger)
- [EnterBlockTrigger.TriggerInstance](#enterblocktrigger.triggerinstance)
- [EntityEquipmentPredicate](#entityequipmentpredicate)
- [EntityEquipmentPredicate.Builder](#entityequipmentpredicate.builder)
- [EntityFlagsPredicate](#entityflagspredicate)
- [EntityFlagsPredicate.Builder](#entityflagspredicate.builder)
- [EntityHurtPlayerTrigger](#entityhurtplayertrigger)
- [EntityHurtPlayerTrigger.TriggerInstance](#entityhurtplayertrigger.triggerinstance)
- [EntityPredicate](#entitypredicate)
- [EntityPredicate.Builder](#entitypredicate.builder)
- [EntitySubPredicate](#entitysubpredicate)
- [EntitySubPredicate.Type](#entitysubpredicate.type)
- [EntitySubPredicate.Types](#entitysubpredicate.types)
- [EntityTypePredicate](#entitytypepredicate)
- [EntityVariantPredicate](#entityvariantpredicate)
- [EntityVariantPredicate.SubPredicate](#entityvariantpredicate.subpredicate)
- [FilledBucketTrigger](#filledbuckettrigger)
- [FilledBucketTrigger.TriggerInstance](#filledbuckettrigger.triggerinstance)
- [FishingHookPredicate](#fishinghookpredicate)
- [FishingRodHookedTrigger](#fishingrodhookedtrigger)
- [FishingRodHookedTrigger.TriggerInstance](#fishingrodhookedtrigger.triggerinstance)
- [FluidPredicate](#fluidpredicate)
- [FluidPredicate.Builder](#fluidpredicate.builder)
- [ImpossibleTrigger](#impossibletrigger)
- [ImpossibleTrigger.TriggerInstance](#impossibletrigger.triggerinstance)
- [InventoryChangeTrigger](#inventorychangetrigger)
- [InventoryChangeTrigger.TriggerInstance](#inventorychangetrigger.triggerinstance)
- [ItemDurabilityTrigger](#itemdurabilitytrigger)
- [ItemDurabilityTrigger.TriggerInstance](#itemdurabilitytrigger.triggerinstance)
- [ItemPredicate](#itempredicate)
- [ItemPredicate.Builder](#itempredicate.builder)
- [ItemUsedOnLocationTrigger](#itemusedonlocationtrigger)
- [ItemUsedOnLocationTrigger.TriggerInstance](#itemusedonlocationtrigger.triggerinstance)
- [KilledByCrossbowTrigger](#killedbycrossbowtrigger)
- [KilledByCrossbowTrigger.TriggerInstance](#killedbycrossbowtrigger.triggerinstance)
- [KilledTrigger](#killedtrigger)
- [KilledTrigger.TriggerInstance](#killedtrigger.triggerinstance)
- [LevitationTrigger](#levitationtrigger)
- [LevitationTrigger.TriggerInstance](#levitationtrigger.triggerinstance)
- [LightningBoltPredicate](#lightningboltpredicate)
- [LightningStrikeTrigger](#lightningstriketrigger)
- [LightningStrikeTrigger.TriggerInstance](#lightningstriketrigger.triggerinstance)
- [LightPredicate](#lightpredicate)
- [LightPredicate.Builder](#lightpredicate.builder)
- [LocationPredicate](#locationpredicate)
- [LocationPredicate.Builder](#locationpredicate.builder)
- [LocationPredicate.PositionPredicate](#locationpredicate.positionpredicate)
- [LootTableTrigger](#loottabletrigger)
- [LootTableTrigger.TriggerInstance](#loottabletrigger.triggerinstance)
- [MinMaxBounds](#minmaxbounds)
- [MinMaxBounds.BoundsFactory>](#minmaxbounds.boundsfactory)
- [MinMaxBounds.BoundsFromReaderFactory>](#minmaxbounds.boundsfromreaderfactory)
- [MinMaxBounds.Doubles](#minmaxbounds.doubles)
- [MinMaxBounds.Ints](#minmaxbounds.ints)
- [MobEffectsPredicate](#mobeffectspredicate)
- [MobEffectsPredicate.Builder](#mobeffectspredicate.builder)
- [MobEffectsPredicate.MobEffectInstancePredicate](#mobeffectspredicate.mobeffectinstancepredicate)
- [NbtPredicate](#nbtpredicate)
- [PickedUpItemTrigger](#pickedupitemtrigger)
- [PickedUpItemTrigger.TriggerInstance](#pickedupitemtrigger.triggerinstance)
- [PlayerHurtEntityTrigger](#playerhurtentitytrigger)
- [PlayerHurtEntityTrigger.TriggerInstance](#playerhurtentitytrigger.triggerinstance)
- [PlayerInteractTrigger](#playerinteracttrigger)
- [PlayerInteractTrigger.TriggerInstance](#playerinteracttrigger.triggerinstance)
- [PlayerPredicate](#playerpredicate)
- [PlayerPredicate.AdvancementCriterionsPredicate](#playerpredicate.advancementcriterionspredicate)
- [PlayerPredicate.AdvancementDonePredicate](#playerpredicate.advancementdonepredicate)
- [PlayerPredicate.AdvancementPredicate](#playerpredicate.advancementpredicate)
- [PlayerPredicate.Builder](#playerpredicate.builder)
- [PlayerPredicate.StatMatcher](#playerpredicate.statmatcher)
- [PlayerTrigger](#playertrigger)
- [PlayerTrigger.TriggerInstance](#playertrigger.triggerinstance)
- [RecipeCraftedTrigger](#recipecraftedtrigger)
- [RecipeCraftedTrigger.TriggerInstance](#recipecraftedtrigger.triggerinstance)
- [RecipeUnlockedTrigger](#recipeunlockedtrigger)
- [RecipeUnlockedTrigger.TriggerInstance](#recipeunlockedtrigger.triggerinstance)
- [ShotCrossbowTrigger](#shotcrossbowtrigger)
- [ShotCrossbowTrigger.TriggerInstance](#shotcrossbowtrigger.triggerinstance)
- [SimpleCriterionTrigger](#simplecriteriontrigger)
- [SimpleCriterionTrigger.SimpleInstance](#simplecriteriontrigger.simpleinstance)
- [SlideDownBlockTrigger](#slidedownblocktrigger)
- [SlideDownBlockTrigger.TriggerInstance](#slidedownblocktrigger.triggerinstance)
- [SlimePredicate](#slimepredicate)
- [StartRidingTrigger](#startridingtrigger)
- [StartRidingTrigger.TriggerInstance](#startridingtrigger.triggerinstance)
- [StatePropertiesPredicate](#statepropertiespredicate)
- [StatePropertiesPredicate.Builder](#statepropertiespredicate.builder)
- [StatePropertiesPredicate.ExactMatcher](#statepropertiespredicate.exactmatcher)
- [StatePropertiesPredicate.PropertyMatcher](#statepropertiespredicate.propertymatcher)
- [StatePropertiesPredicate.RangedMatcher](#statepropertiespredicate.rangedmatcher)
- [StatePropertiesPredicate.ValueMatcher](#statepropertiespredicate.valuematcher)
- [SummonedEntityTrigger](#summonedentitytrigger)
- [SummonedEntityTrigger.TriggerInstance](#summonedentitytrigger.triggerinstance)
- [TagPredicate](#tagpredicate)
- [TameAnimalTrigger](#tameanimaltrigger)
- [TameAnimalTrigger.TriggerInstance](#tameanimaltrigger.triggerinstance)
- [TargetBlockTrigger](#targetblocktrigger)
- [TargetBlockTrigger.TriggerInstance](#targetblocktrigger.triggerinstance)
- [TradeTrigger](#tradetrigger)
- [TradeTrigger.TriggerInstance](#tradetrigger.triggerinstance)
- [UsedEnderEyeTrigger](#usedendereyetrigger)
- [UsedEnderEyeTrigger.TriggerInstance](#usedendereyetrigger.triggerinstance)
- [UsedTotemTrigger](#usedtotemtrigger)
- [UsedTotemTrigger.TriggerInstance](#usedtotemtrigger.triggerinstance)
- [UsingItemTrigger](#usingitemtrigger)
- [UsingItemTrigger.TriggerInstance](#usingitemtrigger.triggerinstance)
- [WrappedMinMaxBounds](#wrappedminmaxbounds)
## AbstractCriterionTriggerInstance

*class* `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`

### Fields
- `private final Optional<ContextAwarePredicate> player`

### Methods
- `public Optional<ContextAwarePredicate> playerPredicate()`
- `public com.google.gson.JsonObject serializeToJson()`

## BeeNestDestroyedTrigger

*class* `net.minecraft.advancements.critereon.BeeNestDestroyedTrigger`

### Methods
- `public BeeNestDestroyedTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286717_,  Optional<ContextAwarePredicate> p_297471_,  DeserializationContext p_286840_)`
- `@Nullable private static Block deserializeBlock(com.google.gson.JsonObject p_17488_)`
- `public void trigger(ServerPlayer p_146652_,  BlockState p_146653_,  ItemStack p_146654_,  int p_146655_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## BeeNestDestroyedTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.BeeNestDestroyedTrigger.TriggerInstance`

Enclosing class: BeeNestDestroyedTrigger

### Fields
- `@Nullable private final Block block`
- `private final Optional<ItemPredicate> item`
- `private final MinMaxBounds.Ints numBees`

### Methods
- `public static Criterion<BeeNestDestroyedTrigger.TriggerInstance> destroyedBeeNest(Block p_17513_,  ItemPredicate.Builder p_17514_,  MinMaxBounds.Ints p_17515_)`
- `public boolean matches(BlockState p_146662_,  ItemStack p_146663_,  int p_146664_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## BlockPredicate

*record* `net.minecraft.advancements.critereon.BlockPredicate`

### Fields
- `private final Optional<TagKey<Block>> tag`
  The field for the tag record component.
- `private final Optional<HolderSet<Block>> blocks`
  The field for the blocks record component.
- `private final Optional<StatePropertiesPredicate> properties`
  The field for the properties record component.
- `private final Optional<NbtPredicate> nbt`
  The field for the nbt record component.
- `private static final com.mojang.serialization.Codec<HolderSet<Block>> BLOCKS_CODEC`
- `public static final com.mojang.serialization.Codec<BlockPredicate> CODEC`

### Methods
- `public boolean matches(ServerLevel p_17915_,  BlockPos p_17916_)`
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
- `public Optional<TagKey<Block>> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `public Optional<HolderSet<Block>> blocks()`
  Returns the value of the blocks record component.
  - returns: the value of the blocks record component
- `public Optional<StatePropertiesPredicate> properties()`
  Returns the value of the properties record component.
  - returns: the value of the properties record component
- `public Optional<NbtPredicate> nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component

## BlockPredicate.Builder

*class* `net.minecraft.advancements.critereon.BlockPredicate.Builder`

Enclosing class: BlockPredicate

### Fields
- `private Optional<HolderSet<Block>> blocks`
- `private Optional<TagKey<Block>> tag`
- `private Optional<StatePropertiesPredicate> properties`
- `private Optional<NbtPredicate> nbt`

### Methods
- `public static BlockPredicate.Builder block()`
- `public BlockPredicate.Builder of(Block... p_146727_)`
- `public BlockPredicate.Builder of(Collection<Block> p_298036_)`
- `public BlockPredicate.Builder of(TagKey<Block> p_204028_)`
- `public BlockPredicate.Builder hasNbt(CompoundTag p_146725_)`
- `public BlockPredicate.Builder setProperties(StatePropertiesPredicate.Builder p_299418_)`
- `public BlockPredicate build()`

## BredAnimalsTrigger

*class* `net.minecraft.advancements.critereon.BredAnimalsTrigger`

### Methods
- `public BredAnimalsTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286232_,  Optional<ContextAwarePredicate> p_297942_,  DeserializationContext p_286439_)`
- `public void trigger(ServerPlayer p_147279_,  Animal p_147280_,  Animal p_147281_,  @Nullable  AgeableMob p_147282_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## BredAnimalsTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.BredAnimalsTrigger.TriggerInstance`

Enclosing class: BredAnimalsTrigger

### Fields
- `private final Optional<ContextAwarePredicate> parent`
- `private final Optional<ContextAwarePredicate> partner`
- `private final Optional<ContextAwarePredicate> child`

### Methods
- `public static Criterion<BredAnimalsTrigger.TriggerInstance> bredAnimals()`
- `public static Criterion<BredAnimalsTrigger.TriggerInstance> bredAnimals(EntityPredicate.Builder p_18668_)`
- `public static Criterion<BredAnimalsTrigger.TriggerInstance> bredAnimals(Optional<EntityPredicate> p_298213_,  Optional<EntityPredicate> p_299258_,  Optional<EntityPredicate> p_297439_)`
- `public boolean matches(LootContext p_18676_,  LootContext p_18677_,  @Nullable  LootContext p_18678_)`
- `private static boolean matches(Optional<ContextAwarePredicate> p_300266_,  LootContext p_300903_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## BrewedPotionTrigger

*class* `net.minecraft.advancements.critereon.BrewedPotionTrigger`

### Methods
- `public BrewedPotionTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286714_,  Optional<ContextAwarePredicate> p_297940_,  DeserializationContext p_286329_)`
- `public void trigger(ServerPlayer p_19121_,  Potion p_19122_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## BrewedPotionTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.BrewedPotionTrigger.TriggerInstance`

Enclosing class: BrewedPotionTrigger

### Fields
- `@Nullable private final Potion potion`

### Methods
- `public static Criterion<BrewedPotionTrigger.TriggerInstance> brewedPotion()`
- `public boolean matches(Potion p_19142_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ChangeDimensionTrigger

*class* `net.minecraft.advancements.critereon.ChangeDimensionTrigger`

### Methods
- `public ChangeDimensionTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_19762_,  Optional<ContextAwarePredicate> p_299300_,  DeserializationContext p_19764_)`
- `public void trigger(ServerPlayer p_19758_,  ResourceKey<Level> p_19759_,  ResourceKey<Level> p_19760_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ChangeDimensionTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ChangeDimensionTrigger.TriggerInstance`

Enclosing class: ChangeDimensionTrigger

### Fields
- `@Nullable private final ResourceKey<Level> from`
- `@Nullable private final ResourceKey<Level> to`

### Methods
- `public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimension()`
- `public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimension(ResourceKey<Level> p_301176_,  ResourceKey<Level> p_298639_)`
- `public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimensionTo(ResourceKey<Level> p_19783_)`
- `public static Criterion<ChangeDimensionTrigger.TriggerInstance> changedDimensionFrom(ResourceKey<Level> p_147564_)`
- `public boolean matches(ResourceKey<Level> p_19785_,  ResourceKey<Level> p_19786_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ChanneledLightningTrigger

*class* `net.minecraft.advancements.critereon.ChanneledLightningTrigger`

### Methods
- `public ChanneledLightningTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286659_,  Optional<ContextAwarePredicate> p_298475_,  DeserializationContext p_286807_)`
- `public void trigger(ServerPlayer p_21722_,  Collection<? extends Entity> p_21723_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ChanneledLightningTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ChanneledLightningTrigger.TriggerInstance`

Enclosing class: ChanneledLightningTrigger

### Fields
- `private final List<ContextAwarePredicate> victims`

### Methods
- `public static Criterion<ChanneledLightningTrigger.TriggerInstance> channeledLightning(EntityPredicate.Builder... p_299370_)`
- `public boolean matches(Collection<? extends LootContext> p_21745_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ConstructBeaconTrigger

*class* `net.minecraft.advancements.critereon.ConstructBeaconTrigger`

### Methods
- `public ConstructBeaconTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286465_,  Optional<ContextAwarePredicate> p_300541_,  DeserializationContext p_286803_)`
- `public void trigger(ServerPlayer p_148030_,  int p_148031_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ConstructBeaconTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ConstructBeaconTrigger.TriggerInstance`

Enclosing class: ConstructBeaconTrigger

### Fields
- `private final MinMaxBounds.Ints level`

### Methods
- `public static Criterion<ConstructBeaconTrigger.TriggerInstance> constructedBeacon()`
- `public static Criterion<ConstructBeaconTrigger.TriggerInstance> constructedBeacon(MinMaxBounds.Ints p_22766_)`
- `public boolean matches(int p_148033_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ConsumeItemTrigger

*class* `net.minecraft.advancements.critereon.ConsumeItemTrigger`

### Methods
- `public ConsumeItemTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286664_,  Optional<ContextAwarePredicate> p_297606_,  DeserializationContext p_286347_)`
- `public void trigger(ServerPlayer p_23683_,  ItemStack p_23684_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ConsumeItemTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ConsumeItemTrigger.TriggerInstance`

Enclosing class: ConsumeItemTrigger

### Fields
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<ConsumeItemTrigger.TriggerInstance> usedItem()`
- `public static Criterion<ConsumeItemTrigger.TriggerInstance> usedItem(ItemLike p_299577_)`
- `public static Criterion<ConsumeItemTrigger.TriggerInstance> usedItem(ItemPredicate.Builder p_297282_)`
- `public boolean matches(ItemStack p_23702_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ContextAwarePredicate

*class* `net.minecraft.advancements.critereon.ContextAwarePredicate`

### Fields
- `private final List<LootItemCondition> conditions`
- `private final Predicate<LootContext> compositePredicates`

### Methods
- `public static ContextAwarePredicate create(LootItemCondition... p_286844_)`
- `public static Optional<Optional<ContextAwarePredicate>> fromElement(String p_286647_,  DeserializationContext p_286323_,  @Nullable  com.google.gson.JsonElement p_286520_,  LootContextParamSet p_286912_)`
- `public boolean matches(LootContext p_286260_)`
- `public com.google.gson.JsonElement toJson()`
- `public static com.google.gson.JsonElement toJson(List<ContextAwarePredicate> p_298375_)`

## CuredZombieVillagerTrigger

*class* `net.minecraft.advancements.critereon.CuredZombieVillagerTrigger`

### Methods
- `public CuredZombieVillagerTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286832_,  Optional<ContextAwarePredicate> p_298928_,  DeserializationContext p_286335_)`
- `public void trigger(ServerPlayer p_24275_,  Zombie p_24276_,  Villager p_24277_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## CuredZombieVillagerTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.CuredZombieVillagerTrigger.TriggerInstance`

Enclosing class: CuredZombieVillagerTrigger

### Fields
- `private final Optional<ContextAwarePredicate> zombie`
- `private final Optional<ContextAwarePredicate> villager`

### Methods
- `public static Criterion<CuredZombieVillagerTrigger.TriggerInstance> curedZombieVillager()`
- `public boolean matches(LootContext p_24300_,  LootContext p_24301_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## DamagePredicate

*record* `net.minecraft.advancements.critereon.DamagePredicate`

### Fields
- `private final MinMaxBounds.Doubles dealtDamage`
  The field for the dealtDamage record component.
- `private final MinMaxBounds.Doubles takenDamage`
  The field for the takenDamage record component.
- `private final Optional<EntityPredicate> sourceEntity`
  The field for the sourceEntity record component.
- `private final Optional<Boolean> blocked`
  The field for the blocked record component.
- `private final Optional<DamageSourcePredicate> type`
  The field for the type record component.

### Methods
- `public boolean matches(ServerPlayer p_24918_,  DamageSource p_24919_,  float p_24920_,  float p_24921_,  boolean p_24922_)`
- `public static Optional<DamagePredicate> fromJson(@Nullable  com.google.gson.JsonElement p_24924_)`
- `public com.google.gson.JsonElement serializeToJson()`
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
- `public MinMaxBounds.Doubles dealtDamage()`
  Returns the value of the dealtDamage record component.
  - returns: the value of the dealtDamage record component
- `public MinMaxBounds.Doubles takenDamage()`
  Returns the value of the takenDamage record component.
  - returns: the value of the takenDamage record component
- `public Optional<EntityPredicate> sourceEntity()`
  Returns the value of the sourceEntity record component.
  - returns: the value of the sourceEntity record component
- `public Optional<Boolean> blocked()`
  Returns the value of the blocked record component.
  - returns: the value of the blocked record component
- `public Optional<DamageSourcePredicate> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component

## DamagePredicate.Builder

*class* `net.minecraft.advancements.critereon.DamagePredicate.Builder`

Enclosing class: DamagePredicate

### Fields
- `private MinMaxBounds.Doubles dealtDamage`
- `private MinMaxBounds.Doubles takenDamage`
- `private Optional<EntityPredicate> sourceEntity`
- `private Optional<Boolean> blocked`
- `private Optional<DamageSourcePredicate> type`

### Methods
- `public static DamagePredicate.Builder damageInstance()`
- `public DamagePredicate.Builder dealtDamage(MinMaxBounds.Doubles p_148146_)`
- `public DamagePredicate.Builder takenDamage(MinMaxBounds.Doubles p_148148_)`
- `public DamagePredicate.Builder sourceEntity(EntityPredicate p_148144_)`
- `public DamagePredicate.Builder blocked(Boolean p_24935_)`
- `public DamagePredicate.Builder type(DamageSourcePredicate p_148142_)`
- `public DamagePredicate.Builder type(DamageSourcePredicate.Builder p_24933_)`
- `public DamagePredicate build()`

## DamageSourcePredicate

*record* `net.minecraft.advancements.critereon.DamageSourcePredicate`

### Fields
- `private final List<TagPredicate<DamageType>> tags`
  The field for the tags record component.
- `private final Optional<EntityPredicate> directEntity`
  The field for the directEntity record component.
- `private final Optional<EntityPredicate> sourceEntity`
  The field for the sourceEntity record component.
- `public static final com.mojang.serialization.Codec<DamageSourcePredicate> CODEC`

### Methods
- `public boolean matches(ServerPlayer p_25449_,  DamageSource p_25450_)`
- `public boolean matches(ServerLevel p_25445_,  Vec3 p_25446_,  DamageSource p_25447_)`
- `public static Optional<DamageSourcePredicate> fromJson(@Nullable  com.google.gson.JsonElement p_25452_)`
- `public com.google.gson.JsonElement serializeToJson()`
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
- `public List<TagPredicate<DamageType>> tags()`
  Returns the value of the tags record component.
  - returns: the value of the tags record component
- `public Optional<EntityPredicate> directEntity()`
  Returns the value of the directEntity record component.
  - returns: the value of the directEntity record component
- `public Optional<EntityPredicate> sourceEntity()`
  Returns the value of the sourceEntity record component.
  - returns: the value of the sourceEntity record component

## DamageSourcePredicate.Builder

*class* `net.minecraft.advancements.critereon.DamageSourcePredicate.Builder`

Enclosing class: DamageSourcePredicate

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<TagPredicate<DamageType>> tags`
- `private Optional<EntityPredicate> directEntity`
- `private Optional<EntityPredicate> sourceEntity`

### Methods
- `public static DamageSourcePredicate.Builder damageType()`
- `public DamageSourcePredicate.Builder tag(TagPredicate<DamageType> p_270455_)`
- `public DamageSourcePredicate.Builder direct(EntityPredicate.Builder p_25473_)`
- `public DamageSourcePredicate.Builder source(EntityPredicate.Builder p_148232_)`
- `public DamageSourcePredicate build()`

## DeserializationContext

*class* `net.minecraft.advancements.critereon.DeserializationContext`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ResourceLocation id`
- `private final LootDataManager lootData`

### Methods
- `public final List<LootItemCondition> deserializeConditions(com.google.gson.JsonArray p_25875_,  String p_25876_,  LootContextParamSet p_25877_)`
- `public ResourceLocation getAdvancementId()`

## DistancePredicate

*record* `net.minecraft.advancements.critereon.DistancePredicate`

### Fields
- `private final MinMaxBounds.Doubles x`
  The field for the x record component.
- `private final MinMaxBounds.Doubles y`
  The field for the y record component.
- `private final MinMaxBounds.Doubles z`
  The field for the z record component.
- `private final MinMaxBounds.Doubles horizontal`
  The field for the horizontal record component.
- `private final MinMaxBounds.Doubles absolute`
  The field for the absolute record component.
- `public static final com.mojang.serialization.Codec<DistancePredicate> CODEC`

### Methods
- `public static DistancePredicate horizontal(MinMaxBounds.Doubles p_148837_)`
- `public static DistancePredicate vertical(MinMaxBounds.Doubles p_148839_)`
- `public static DistancePredicate absolute(MinMaxBounds.Doubles p_148841_)`
- `public boolean matches(double p_26256_,  double p_26257_,  double p_26258_,  double p_26259_,  double p_26260_,  double p_26261_)`
- `public static Optional<DistancePredicate> fromJson(@Nullable  com.google.gson.JsonElement p_26265_)`
- `public com.google.gson.JsonElement serializeToJson()`
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
- `public MinMaxBounds.Doubles x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public MinMaxBounds.Doubles y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public MinMaxBounds.Doubles z()`
  Returns the value of the z record component.
  - returns: the value of the z record component
- `public MinMaxBounds.Doubles horizontal()`
  Returns the value of the horizontal record component.
  - returns: the value of the horizontal record component
- `public MinMaxBounds.Doubles absolute()`
  Returns the value of the absolute record component.
  - returns: the value of the absolute record component

## DistanceTrigger

*class* `net.minecraft.advancements.critereon.DistanceTrigger`

### Methods
- `public DistanceTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286885_,  Optional<ContextAwarePredicate> p_297431_,  DeserializationContext p_286678_)`
- `public void trigger(ServerPlayer p_186166_,  Vec3 p_186167_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## DistanceTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.DistanceTrigger.TriggerInstance`

Enclosing class: DistanceTrigger

### Fields
- `private final Optional<LocationPredicate> startPosition`
- `private final Optional<DistancePredicate> distance`

### Methods
- `public static Criterion<DistanceTrigger.TriggerInstance> fallFromHeight(EntityPredicate.Builder p_186198_,  DistancePredicate p_186199_,  LocationPredicate.Builder p_300400_)`
- `public static Criterion<DistanceTrigger.TriggerInstance> rideEntityInLava(EntityPredicate.Builder p_186195_,  DistancePredicate p_186196_)`
- `public static Criterion<DistanceTrigger.TriggerInstance> travelledThroughNether(DistancePredicate p_186193_)`
- `public com.google.gson.JsonObject serializeToJson()`
- `public boolean matches(ServerLevel p_186189_,  Vec3 p_186190_,  Vec3 p_186191_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## EffectsChangedTrigger

*class* `net.minecraft.advancements.critereon.EffectsChangedTrigger`

### Methods
- `public EffectsChangedTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286725_,  Optional<ContextAwarePredicate> p_299627_,  DeserializationContext p_286737_)`
- `public void trigger(ServerPlayer p_149263_,  @Nullable  Entity p_149264_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## EffectsChangedTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.EffectsChangedTrigger.TriggerInstance`

Enclosing class: EffectsChangedTrigger

### Fields
- `private final Optional<MobEffectsPredicate> effects`
- `private final Optional<ContextAwarePredicate> source`

### Methods
- `public static Criterion<EffectsChangedTrigger.TriggerInstance> hasEffects(MobEffectsPredicate.Builder p_300809_)`
- `public static Criterion<EffectsChangedTrigger.TriggerInstance> gotEffectsFrom(EntityPredicate.Builder p_298504_)`
- `public boolean matches(ServerPlayer p_149275_,  @Nullable  LootContext p_149276_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## EnchantedItemTrigger

*class* `net.minecraft.advancements.critereon.EnchantedItemTrigger`

### Methods
- `public EnchantedItemTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286360_,  Optional<ContextAwarePredicate> p_298290_,  DeserializationContext p_286441_)`
- `public void trigger(ServerPlayer p_27669_,  ItemStack p_27670_,  int p_27671_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## EnchantedItemTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.EnchantedItemTrigger.TriggerInstance`

Enclosing class: EnchantedItemTrigger

### Fields
- `private final Optional<ItemPredicate> item`
- `private final MinMaxBounds.Ints levels`

### Methods
- `public static Criterion<EnchantedItemTrigger.TriggerInstance> enchantedItem()`
- `public boolean matches(ItemStack p_27692_,  int p_27693_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## EnchantmentPredicate

*record* `net.minecraft.advancements.critereon.EnchantmentPredicate`

### Fields
- `private final Optional<Holder<Enchantment>> enchantment`
  The field for the enchantment record component.
- `private final MinMaxBounds.Ints level`
  The field for the level record component.
- `public static final com.mojang.serialization.Codec<EnchantmentPredicate> CODEC`

### Methods
- `public boolean containedIn(Map<Enchantment,Integer> p_30477_)`
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
- `public Optional<Holder<Enchantment>> enchantment()`
  Returns the value of the enchantment record component.
  - returns: the value of the enchantment record component
- `public MinMaxBounds.Ints level()`
  Returns the value of the level record component.
  - returns: the value of the level record component

## EnterBlockTrigger

*class* `net.minecraft.advancements.critereon.EnterBlockTrigger`

### Methods
- `public EnterBlockTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286490_,  Optional<ContextAwarePredicate> p_297383_,  DeserializationContext p_286764_)`
- `@Nullable private static Block deserializeBlock(com.google.gson.JsonObject p_31279_)`
- `public void trigger(ServerPlayer p_31270_,  BlockState p_31271_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## EnterBlockTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.EnterBlockTrigger.TriggerInstance`

Enclosing class: EnterBlockTrigger

### Fields
- `@Nullable private final Block block`
- `private final Optional<StatePropertiesPredicate> state`

### Methods
- `public static Criterion<EnterBlockTrigger.TriggerInstance> entersBlock(Block p_31298_)`
- `public com.google.gson.JsonObject serializeToJson()`
- `public boolean matches(BlockState p_31300_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## EntityEquipmentPredicate

*record* `net.minecraft.advancements.critereon.EntityEquipmentPredicate`

### Fields
- `private final Optional<ItemPredicate> head`
  The field for the head record component.
- `private final Optional<ItemPredicate> chest`
  The field for the chest record component.
- `private final Optional<ItemPredicate> legs`
  The field for the legs record component.
- `private final Optional<ItemPredicate> feet`
  The field for the feet record component.
- `private final Optional<ItemPredicate> mainhand`
  The field for the mainhand record component.
- `private final Optional<ItemPredicate> offhand`
  The field for the offhand record component.
- `public static final com.mojang.serialization.Codec<EntityEquipmentPredicate> CODEC`
- `public static final EntityEquipmentPredicate CAPTAIN`

### Methods
- `public boolean matches(@Nullable  Entity p_32194_)`
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
- `public Optional<ItemPredicate> head()`
  Returns the value of the head record component.
  - returns: the value of the head record component
- `public Optional<ItemPredicate> chest()`
  Returns the value of the chest record component.
  - returns: the value of the chest record component
- `public Optional<ItemPredicate> legs()`
  Returns the value of the legs record component.
  - returns: the value of the legs record component
- `public Optional<ItemPredicate> feet()`
  Returns the value of the feet record component.
  - returns: the value of the feet record component
- `public Optional<ItemPredicate> mainhand()`
  Returns the value of the mainhand record component.
  - returns: the value of the mainhand record component
- `public Optional<ItemPredicate> offhand()`
  Returns the value of the offhand record component.
  - returns: the value of the offhand record component

## EntityEquipmentPredicate.Builder

*class* `net.minecraft.advancements.critereon.EntityEquipmentPredicate.Builder`

Enclosing class: EntityEquipmentPredicate

### Fields
- `private Optional<ItemPredicate> head`
- `private Optional<ItemPredicate> chest`
- `private Optional<ItemPredicate> legs`
- `private Optional<ItemPredicate> feet`
- `private Optional<ItemPredicate> mainhand`
- `private Optional<ItemPredicate> offhand`

### Methods
- `public static EntityEquipmentPredicate.Builder equipment()`
- `public EntityEquipmentPredicate.Builder head(ItemPredicate.Builder p_298717_)`
- `public EntityEquipmentPredicate.Builder chest(ItemPredicate.Builder p_301149_)`
- `public EntityEquipmentPredicate.Builder legs(ItemPredicate.Builder p_300588_)`
- `public EntityEquipmentPredicate.Builder feet(ItemPredicate.Builder p_301104_)`
- `public EntityEquipmentPredicate.Builder mainhand(ItemPredicate.Builder p_299261_)`
- `public EntityEquipmentPredicate.Builder offhand(ItemPredicate.Builder p_297723_)`
- `public EntityEquipmentPredicate build()`

## EntityFlagsPredicate

*record* `net.minecraft.advancements.critereon.EntityFlagsPredicate`

### Fields
- `private final Optional<Boolean> isOnFire`
  The field for the isOnFire record component.
- `private final Optional<Boolean> isCrouching`
  The field for the isCrouching record component.
- `private final Optional<Boolean> isSprinting`
  The field for the isSprinting record component.
- `private final Optional<Boolean> isSwimming`
  The field for the isSwimming record component.
- `private final Optional<Boolean> isBaby`
  The field for the isBaby record component.
- `public static final com.mojang.serialization.Codec<EntityFlagsPredicate> CODEC`

### Methods
- `public boolean matches(Entity p_33697_)`
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
- `public Optional<Boolean> isOnFire()`
  Returns the value of the isOnFire record component.
  - returns: the value of the isOnFire record component
- `public Optional<Boolean> isCrouching()`
  Returns the value of the isCrouching record component.
  - returns: the value of the isCrouching record component
- `public Optional<Boolean> isSprinting()`
  Returns the value of the isSprinting record component.
  - returns: the value of the isSprinting record component
- `public Optional<Boolean> isSwimming()`
  Returns the value of the isSwimming record component.
  - returns: the value of the isSwimming record component
- `public Optional<Boolean> isBaby()`
  Returns the value of the isBaby record component.
  - returns: the value of the isBaby record component

## EntityFlagsPredicate.Builder

*class* `net.minecraft.advancements.critereon.EntityFlagsPredicate.Builder`

Enclosing class: EntityFlagsPredicate

### Fields
- `private Optional<Boolean> isOnFire`
- `private Optional<Boolean> isCrouching`
- `private Optional<Boolean> isSprinting`
- `private Optional<Boolean> isSwimming`
- `private Optional<Boolean> isBaby`

### Methods
- `public static EntityFlagsPredicate.Builder flags()`
- `public EntityFlagsPredicate.Builder setOnFire(Boolean p_33715_)`
- `public EntityFlagsPredicate.Builder setCrouching(Boolean p_150058_)`
- `public EntityFlagsPredicate.Builder setSprinting(Boolean p_150060_)`
- `public EntityFlagsPredicate.Builder setSwimming(Boolean p_150062_)`
- `public EntityFlagsPredicate.Builder setIsBaby(Boolean p_33718_)`
- `public EntityFlagsPredicate build()`

## EntityHurtPlayerTrigger

*class* `net.minecraft.advancements.critereon.EntityHurtPlayerTrigger`

### Methods
- `public EntityHurtPlayerTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286430_,  Optional<ContextAwarePredicate> p_299973_,  DeserializationContext p_286648_)`
- `public void trigger(ServerPlayer p_35175_,  DamageSource p_35176_,  float p_35177_,  float p_35178_,  boolean p_35179_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## EntityHurtPlayerTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.EntityHurtPlayerTrigger.TriggerInstance`

Enclosing class: EntityHurtPlayerTrigger

### Fields
- `private final Optional<DamagePredicate> damage`

### Methods
- `public static Criterion<EntityHurtPlayerTrigger.TriggerInstance> entityHurtPlayer()`
- `public static Criterion<EntityHurtPlayerTrigger.TriggerInstance> entityHurtPlayer(DamagePredicate p_150188_)`
- `public static Criterion<EntityHurtPlayerTrigger.TriggerInstance> entityHurtPlayer(DamagePredicate.Builder p_35207_)`
- `public boolean matches(ServerPlayer p_35201_,  DamageSource p_35202_,  float p_35203_,  float p_35204_,  boolean p_35205_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## EntityPredicate

*record* `net.minecraft.advancements.critereon.EntityPredicate`

### Fields
- `private final Optional<EntityTypePredicate> entityType`
  The field for the entityType record component.
- `private final Optional<DistancePredicate> distanceToPlayer`
  The field for the distanceToPlayer record component.
- `private final Optional<LocationPredicate> location`
  The field for the location record component.
- `private final Optional<LocationPredicate> steppingOnLocation`
  The field for the steppingOnLocation record component.
- `private final Optional<MobEffectsPredicate> effects`
  The field for the effects record component.
- `private final Optional<NbtPredicate> nbt`
  The field for the nbt record component.
- `private final Optional<EntityFlagsPredicate> flags`
  The field for the flags record component.
- `private final Optional<EntityEquipmentPredicate> equipment`
  The field for the equipment record component.
- `private final Optional<EntitySubPredicate> subPredicate`
  The field for the subPredicate record component.
- `private final Optional<EntityPredicate> vehicle`
  The field for the vehicle record component.
- `private final Optional<EntityPredicate> passenger`
  The field for the passenger record component.
- `private final Optional<EntityPredicate> targetedEntity`
  The field for the targetedEntity record component.
- `private final Optional<String> team`
  The field for the team record component.
- `public static final com.mojang.serialization.Codec<EntityPredicate> CODEC`

### Methods
- `public static Optional<ContextAwarePredicate> fromJson(com.google.gson.JsonObject p_300195_,  String p_297866_,  DeserializationContext p_301262_)`
- `public static List<ContextAwarePredicate> fromJsonArray(com.google.gson.JsonObject p_286850_,  String p_286682_,  DeserializationContext p_286876_)`
- `private static Optional<ContextAwarePredicate> fromElement(String p_286569_,  DeserializationContext p_286821_,  @Nullable  com.google.gson.JsonElement p_286582_)`
- `public static ContextAwarePredicate wrap(EntityPredicate.Builder p_298584_)`
- `public static Optional<ContextAwarePredicate> wrap(Optional<EntityPredicate> p_300980_)`
- `public static List<ContextAwarePredicate> wrap(EntityPredicate.Builder... p_299692_)`
- `public static ContextAwarePredicate wrap(EntityPredicate p_286570_)`
- `public boolean matches(ServerPlayer p_36612_,  @Nullable  Entity p_36613_)`
- `public boolean matches(ServerLevel p_36608_,  @Nullable  Vec3 p_36609_,  @Nullable  Entity p_36610_)`
- `public static Optional<EntityPredicate> fromJson(@Nullable  com.google.gson.JsonElement p_297667_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static LootContext createContext(ServerPlayer p_36617_,  Entity p_36618_)`
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
- `public Optional<EntityTypePredicate> entityType()`
  Returns the value of the entityType record component.
  - returns: the value of the entityType record component
- `public Optional<DistancePredicate> distanceToPlayer()`
  Returns the value of the distanceToPlayer record component.
  - returns: the value of the distanceToPlayer record component
- `public Optional<LocationPredicate> location()`
  Returns the value of the location record component.
  - returns: the value of the location record component
- `public Optional<LocationPredicate> steppingOnLocation()`
  Returns the value of the steppingOnLocation record component.
  - returns: the value of the steppingOnLocation record component
- `public Optional<MobEffectsPredicate> effects()`
  Returns the value of the effects record component.
  - returns: the value of the effects record component
- `public Optional<NbtPredicate> nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component
- `public Optional<EntityFlagsPredicate> flags()`
  Returns the value of the flags record component.
  - returns: the value of the flags record component
- `public Optional<EntityEquipmentPredicate> equipment()`
  Returns the value of the equipment record component.
  - returns: the value of the equipment record component
- `public Optional<EntitySubPredicate> subPredicate()`
  Returns the value of the subPredicate record component.
  - returns: the value of the subPredicate record component
- `public Optional<EntityPredicate> vehicle()`
  Returns the value of the vehicle record component.
  - returns: the value of the vehicle record component
- `public Optional<EntityPredicate> passenger()`
  Returns the value of the passenger record component.
  - returns: the value of the passenger record component
- `public Optional<EntityPredicate> targetedEntity()`
  Returns the value of the targetedEntity record component.
  - returns: the value of the targetedEntity record component
- `public Optional<String> team()`
  Returns the value of the team record component.
  - returns: the value of the team record component

## EntityPredicate.Builder

*class* `net.minecraft.advancements.critereon.EntityPredicate.Builder`

Enclosing class: EntityPredicate

### Fields
- `private Optional<EntityTypePredicate> entityType`
- `private Optional<DistancePredicate> distanceToPlayer`
- `private Optional<LocationPredicate> location`
- `private Optional<LocationPredicate> steppingOnLocation`
- `private Optional<MobEffectsPredicate> effects`
- `private Optional<NbtPredicate> nbt`
- `private Optional<EntityFlagsPredicate> flags`
- `private Optional<EntityEquipmentPredicate> equipment`
- `private Optional<EntitySubPredicate> subPredicate`
- `private Optional<EntityPredicate> vehicle`
- `private Optional<EntityPredicate> passenger`
- `private Optional<EntityPredicate> targetedEntity`
- `private Optional<String> team`

### Methods
- `public static EntityPredicate.Builder entity()`
- `public EntityPredicate.Builder of(EntityType<?> p_36637_)`
- `public EntityPredicate.Builder of(TagKey<EntityType<?>> p_204078_)`
- `public EntityPredicate.Builder entityType(EntityTypePredicate p_36647_)`
- `public EntityPredicate.Builder distance(DistancePredicate p_36639_)`
- `public EntityPredicate.Builder located(LocationPredicate.Builder p_297650_)`
- `public EntityPredicate.Builder steppingOn(LocationPredicate.Builder p_298486_)`
- `public EntityPredicate.Builder effects(MobEffectsPredicate.Builder p_300139_)`
- `public EntityPredicate.Builder nbt(NbtPredicate p_36655_)`
- `public EntityPredicate.Builder flags(EntityFlagsPredicate.Builder p_300535_)`
- `public EntityPredicate.Builder equipment(EntityEquipmentPredicate.Builder p_297462_)`
- `public EntityPredicate.Builder equipment(EntityEquipmentPredicate p_36641_)`
- `public EntityPredicate.Builder subPredicate(EntitySubPredicate p_218801_)`
- `public EntityPredicate.Builder vehicle(EntityPredicate.Builder p_300159_)`
- `public EntityPredicate.Builder passenger(EntityPredicate.Builder p_297891_)`
- `public EntityPredicate.Builder targetedEntity(EntityPredicate.Builder p_298127_)`
- `public EntityPredicate.Builder team(String p_36659_)`
- `public EntityPredicate build()`

## EntitySubPredicate

*interface* `net.minecraft.advancements.critereon.EntitySubPredicate`

### Fields
- `static final com.mojang.serialization.Codec<EntitySubPredicate> CODEC`

### Methods
- `boolean matches(Entity p_218828_,  ServerLevel p_218829_,  @Nullable  Vec3 p_218830_)`
- `EntitySubPredicate.Type type()`
- `static EntitySubPredicate variant(CatVariant p_218832_)`
- `static EntitySubPredicate variant(FrogVariant p_218834_)`

## EntitySubPredicate.Type

*record* `net.minecraft.advancements.critereon.EntitySubPredicate.Type`

Enclosing interface: EntitySubPredicate

### Fields
- `private final com.mojang.serialization.MapCodec<? extends EntitySubPredicate> codec`
  The field for the codec record component.

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
- `public com.mojang.serialization.MapCodec<? extends EntitySubPredicate> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## EntitySubPredicate.Types

*class* `net.minecraft.advancements.critereon.EntitySubPredicate.Types`

Enclosing interface: EntitySubPredicate

### Fields
- `public static final EntitySubPredicate.Type ANY`
- `public static final EntitySubPredicate.Type LIGHTNING`
- `public static final EntitySubPredicate.Type FISHING_HOOK`
- `public static final EntitySubPredicate.Type PLAYER`
- `public static final EntitySubPredicate.Type SLIME`
- `public static final EntityVariantPredicate<CatVariant> CAT`
- `public static final EntityVariantPredicate<FrogVariant> FROG`
- `public static final EntityVariantPredicate<Axolotl.Variant> AXOLOTL`
- `public static final EntityVariantPredicate<Boat.Type> BOAT`
- `public static final EntityVariantPredicate<Fox.Type> FOX`
- `public static final EntityVariantPredicate<MushroomCow.MushroomType> MOOSHROOM`
- `public static final EntityVariantPredicate<Holder<PaintingVariant>> PAINTING`
- `public static final EntityVariantPredicate<Rabbit.Variant> RABBIT`
- `public static final EntityVariantPredicate<Variant> HORSE`
- `public static final EntityVariantPredicate<Llama.Variant> LLAMA`
- `public static final EntityVariantPredicate<VillagerType> VILLAGER`
- `public static final EntityVariantPredicate<Parrot.Variant> PARROT`
- `public static final EntityVariantPredicate<TropicalFish.Pattern> TROPICAL_FISH`
- `public static final com.google.common.collect.BiMap<String,EntitySubPredicate.Type> TYPES`
- `public static final com.mojang.serialization.Codec<EntitySubPredicate.Type> TYPE_CODEC`

## EntityTypePredicate

*record* `net.minecraft.advancements.critereon.EntityTypePredicate`

### Fields
- `private final HolderSet<EntityType<?>> types`
  The field for the types record component.
- `public static final com.mojang.serialization.Codec<EntityTypePredicate> CODEC`

### Methods
- `public static EntityTypePredicate of(EntityType<?> p_37648_)`
- `public static EntityTypePredicate of(TagKey<EntityType<?>> p_204082_)`
- `public boolean matches(EntityType<?> p_37642_)`
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
- `public HolderSet<EntityType<?>> types()`
  Returns the value of the types record component.
  - returns: the value of the types record component

## EntityVariantPredicate

*class* `net.minecraft.advancements.critereon.EntityVariantPredicate`

### Fields
- `private final Function<Entity,Optional<V>> getter`
- `private final EntitySubPredicate.Type type`

### Methods
- `public static <V> EntityVariantPredicate<V> create(Registry<V> p_219094_,  Function<Entity,Optional<V>> p_219095_)`
- `public static <V> EntityVariantPredicate<V> create(com.mojang.serialization.Codec<V> p_262671_,  Function<Entity,Optional<V>> p_262652_)`
- `public EntitySubPredicate.Type type()`
- `public EntityVariantPredicate.SubPredicate<V> createPredicate(V p_219097_)`

## EntityVariantPredicate.SubPredicate

*record* `net.minecraft.advancements.critereon.EntityVariantPredicate.SubPredicate`

Enclosing class: EntityVariantPredicate<V>

### Fields
- `private final EntitySubPredicate.Type type`
  The field for the type record component.
- `private final Function<Entity,Optional<V>> getter`
  The field for the getter record component.
- `private final V variant`
  The field for the variant record component.

### Inherited fields
- from `net.minecraft.advancements.critereon.EntitySubPredicate`: `CODEC`

### Methods
- `public boolean matches(Entity p_298600_,  ServerLevel p_297848_,  @Nullable  Vec3 p_298842_)`
- `public EntitySubPredicate.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
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
- `public Function<Entity,Optional<V>> getter()`
  Returns the value of the getter record component.
  - returns: the value of the getter record component
- `public V variant()`
  Returns the value of the variant record component.
  - returns: the value of the variant record component

## FilledBucketTrigger

*class* `net.minecraft.advancements.critereon.FilledBucketTrigger`

### Methods
- `public FilledBucketTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286377_,  Optional<ContextAwarePredicate> p_298249_,  DeserializationContext p_286801_)`
- `public void trigger(ServerPlayer p_38773_,  ItemStack p_38774_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## FilledBucketTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.FilledBucketTrigger.TriggerInstance`

Enclosing class: FilledBucketTrigger

### Fields
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<FilledBucketTrigger.TriggerInstance> filledBucket(ItemPredicate.Builder p_297424_)`
- `public boolean matches(ItemStack p_38792_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## FishingHookPredicate

*record* `net.minecraft.advancements.critereon.FishingHookPredicate`

### Fields
- `private final Optional<Boolean> inOpenWater`
  The field for the inOpenWater record component.
- `public static final FishingHookPredicate ANY`
- `public static final com.mojang.serialization.MapCodec<FishingHookPredicate> CODEC`

### Methods
- `public static FishingHookPredicate inOpenWater(boolean p_39767_)`
- `public EntitySubPredicate.Type type()`
- `public boolean matches(Entity p_219716_,  ServerLevel p_219717_,  @Nullable  Vec3 p_219718_)`
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
- `public Optional<Boolean> inOpenWater()`
  Returns the value of the inOpenWater record component.
  - returns: the value of the inOpenWater record component

## FishingRodHookedTrigger

*class* `net.minecraft.advancements.critereon.FishingRodHookedTrigger`

### Methods
- `public FishingRodHookedTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286600_,  Optional<ContextAwarePredicate> p_299123_,  DeserializationContext p_286299_)`
- `public void trigger(ServerPlayer p_40417_,  ItemStack p_40418_,  FishingHook p_40419_,  Collection<ItemStack> p_40420_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## FishingRodHookedTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.FishingRodHookedTrigger.TriggerInstance`

Enclosing class: FishingRodHookedTrigger

### Fields
- `private final Optional<ItemPredicate> rod`
- `private final Optional<ContextAwarePredicate> entity`
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<FishingRodHookedTrigger.TriggerInstance> fishedItem(Optional<ItemPredicate> p_300012_,  Optional<EntityPredicate> p_297455_,  Optional<ItemPredicate> p_297238_)`
- `public boolean matches(ItemStack p_40444_,  LootContext p_40445_,  Collection<ItemStack> p_40446_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## FluidPredicate

*record* `net.minecraft.advancements.critereon.FluidPredicate`

### Fields
- `private final Optional<TagKey<Fluid>> tag`
  The field for the tag record component.
- `private final Optional<Holder<Fluid>> fluid`
  The field for the fluid record component.
- `private final Optional<StatePropertiesPredicate> properties`
  The field for the properties record component.
- `public static final com.mojang.serialization.Codec<FluidPredicate> CODEC`

### Methods
- `public boolean matches(ServerLevel p_41105_,  BlockPos p_41106_)`
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
- `public Optional<TagKey<Fluid>> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `public Optional<Holder<Fluid>> fluid()`
  Returns the value of the fluid record component.
  - returns: the value of the fluid record component
- `public Optional<StatePropertiesPredicate> properties()`
  Returns the value of the properties record component.
  - returns: the value of the properties record component

## FluidPredicate.Builder

*class* `net.minecraft.advancements.critereon.FluidPredicate.Builder`

Enclosing class: FluidPredicate

### Fields
- `private Optional<Holder<Fluid>> fluid`
- `private Optional<TagKey<Fluid>> fluids`
- `private Optional<StatePropertiesPredicate> properties`

### Methods
- `public static FluidPredicate.Builder fluid()`
- `public FluidPredicate.Builder of(Fluid p_151172_)`
- `public FluidPredicate.Builder of(TagKey<Fluid> p_204106_)`
- `public FluidPredicate.Builder setProperties(StatePropertiesPredicate p_151170_)`
- `public FluidPredicate build()`

## ImpossibleTrigger

*class* `net.minecraft.advancements.critereon.ImpossibleTrigger`

### Methods
- `public void addPlayerListener(PlayerAdvancements p_41565_,  CriterionTrigger.Listener<ImpossibleTrigger.TriggerInstance> p_41566_)`
- `public void removePlayerListener(PlayerAdvancements p_41572_,  CriterionTrigger.Listener<ImpossibleTrigger.TriggerInstance> p_41573_)`
- `public void removePlayerListeners(PlayerAdvancements p_41563_)`
- `public ImpossibleTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_41569_,  DeserializationContext p_41570_)`

### Inherited methods
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ImpossibleTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ImpossibleTrigger.TriggerInstance`

Enclosing class: ImpossibleTrigger

### Methods
- `public com.google.gson.JsonObject serializeToJson()`

## InventoryChangeTrigger

*class* `net.minecraft.advancements.critereon.InventoryChangeTrigger`

### Methods
- `public InventoryChangeTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286735_,  Optional<ContextAwarePredicate> p_300177_,  DeserializationContext p_286698_)`
- `public void trigger(ServerPlayer p_43150_,  Inventory p_43151_,  ItemStack p_43152_)`
- `private void trigger(ServerPlayer p_43154_,  Inventory p_43155_,  ItemStack p_43156_,  int p_43157_,  int p_43158_,  int p_43159_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## InventoryChangeTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.InventoryChangeTrigger.TriggerInstance`

Enclosing class: InventoryChangeTrigger

### Fields
- `private final MinMaxBounds.Ints slotsOccupied`
- `private final MinMaxBounds.Ints slotsFull`
- `private final MinMaxBounds.Ints slotsEmpty`
- `private final List<ItemPredicate> predicates`

### Methods
- `public static Criterion<InventoryChangeTrigger.TriggerInstance> hasItems(ItemPredicate.Builder... p_297239_)`
- `public static Criterion<InventoryChangeTrigger.TriggerInstance> hasItems(ItemPredicate... p_43198_)`
- `public static Criterion<InventoryChangeTrigger.TriggerInstance> hasItems(ItemLike... p_298202_)`
- `public com.google.gson.JsonObject serializeToJson()`
- `public boolean matches(Inventory p_43187_,  ItemStack p_43188_,  int p_43189_,  int p_43190_,  int p_43191_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ItemDurabilityTrigger

*class* `net.minecraft.advancements.critereon.ItemDurabilityTrigger`

### Methods
- `public ItemDurabilityTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286693_,  Optional<ContextAwarePredicate> p_299057_,  DeserializationContext p_286352_)`
- `public void trigger(ServerPlayer p_43670_,  ItemStack p_43671_,  int p_43672_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ItemDurabilityTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ItemDurabilityTrigger.TriggerInstance`

Enclosing class: ItemDurabilityTrigger

### Fields
- `private final Optional<ItemPredicate> item`
- `private final MinMaxBounds.Ints durability`
- `private final MinMaxBounds.Ints delta`

### Methods
- `public static Criterion<ItemDurabilityTrigger.TriggerInstance> changedDurability(Optional<ItemPredicate> p_300870_,  MinMaxBounds.Ints p_151288_)`
- `public static Criterion<ItemDurabilityTrigger.TriggerInstance> changedDurability(Optional<ContextAwarePredicate> p_299530_,  Optional<ItemPredicate> p_300893_,  MinMaxBounds.Ints p_286730_)`
- `public boolean matches(ItemStack p_43699_,  int p_43700_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ItemPredicate

*record* `net.minecraft.advancements.critereon.ItemPredicate`

### Fields
- `private final Optional<TagKey<Item>> tag`
  The field for the tag record component.
- `private final Optional<HolderSet<Item>> items`
  The field for the items record component.
- `private final MinMaxBounds.Ints count`
  The field for the count record component.
- `private final MinMaxBounds.Ints durability`
  The field for the durability record component.
- `private final List<EnchantmentPredicate> enchantments`
  The field for the enchantments record component.
- `private final List<EnchantmentPredicate> storedEnchantments`
  The field for the storedEnchantments record component.
- `private final Optional<Holder<Potion>> potion`
  The field for the potion record component.
- `private final Optional<NbtPredicate> nbt`
  The field for the nbt record component.
- `private static final com.mojang.serialization.Codec<HolderSet<Item>> ITEMS_CODEC`
- `public static final com.mojang.serialization.Codec<ItemPredicate> CODEC`

### Methods
- `public boolean matches(ItemStack p_45050_)`
- `public static Optional<ItemPredicate> fromJson(@Nullable  com.google.gson.JsonElement p_45052_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static com.google.gson.JsonElement serializeToJsonArray(List<ItemPredicate> p_298997_)`
- `public static List<ItemPredicate> fromJsonArray(@Nullable  com.google.gson.JsonElement p_45056_)`
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
- `public Optional<TagKey<Item>> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `public Optional<HolderSet<Item>> items()`
  Returns the value of the items record component.
  - returns: the value of the items record component
- `public MinMaxBounds.Ints count()`
  Returns the value of the count record component.
  - returns: the value of the count record component
- `public MinMaxBounds.Ints durability()`
  Returns the value of the durability record component.
  - returns: the value of the durability record component
- `public List<EnchantmentPredicate> enchantments()`
  Returns the value of the enchantments record component.
  - returns: the value of the enchantments record component
- `public List<EnchantmentPredicate> storedEnchantments()`
  Returns the value of the storedEnchantments record component.
  - returns: the value of the storedEnchantments record component
- `public Optional<Holder<Potion>> potion()`
  Returns the value of the potion record component.
  - returns: the value of the potion record component
- `public Optional<NbtPredicate> nbt()`
  Returns the value of the nbt record component.
  - returns: the value of the nbt record component

## ItemPredicate.Builder

*class* `net.minecraft.advancements.critereon.ItemPredicate.Builder`

Enclosing class: ItemPredicate

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<EnchantmentPredicate> enchantments`
- `private final com.google.common.collect.ImmutableList.Builder<EnchantmentPredicate> storedEnchantments`
- `private Optional<HolderSet<Item>> items`
- `private Optional<TagKey<Item>> tag`
- `private MinMaxBounds.Ints count`
- `private MinMaxBounds.Ints durability`
- `private Optional<Holder<Potion>> potion`
- `private Optional<NbtPredicate> nbt`

### Methods
- `public static ItemPredicate.Builder item()`
- `public ItemPredicate.Builder of(ItemLike... p_151446_)`
- `public ItemPredicate.Builder of(TagKey<Item> p_204146_)`
- `public ItemPredicate.Builder withCount(MinMaxBounds.Ints p_151444_)`
- `public ItemPredicate.Builder hasDurability(MinMaxBounds.Ints p_151450_)`
- `public ItemPredicate.Builder isPotion(Potion p_151442_)`
- `public ItemPredicate.Builder hasNbt(CompoundTag p_45076_)`
- `public ItemPredicate.Builder hasEnchantment(EnchantmentPredicate p_45072_)`
- `public ItemPredicate.Builder hasStoredEnchantment(EnchantmentPredicate p_151448_)`
- `public ItemPredicate build()`

## ItemUsedOnLocationTrigger

*class* `net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger`

### Methods
- `public ItemUsedOnLocationTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286237_,  Optional<ContextAwarePredicate> p_299215_,  DeserializationContext p_286513_)`
- `public void trigger(ServerPlayer p_286813_,  BlockPos p_286625_,  ItemStack p_286620_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ItemUsedOnLocationTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ItemUsedOnLocationTrigger.TriggerInstance`

Enclosing class: ItemUsedOnLocationTrigger

### Fields
- `private final Optional<ContextAwarePredicate> location`

### Methods
- `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedBlock(Block p_286530_)`
- `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedBlock(LootItemCondition.Builder... p_286365_)`
- `private static ItemUsedOnLocationTrigger.TriggerInstance itemUsedOnLocation(LocationPredicate.Builder p_286740_,  ItemPredicate.Builder p_286777_)`
- `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> itemUsedOnBlock(LocationPredicate.Builder p_286808_,  ItemPredicate.Builder p_286486_)`
- `public static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> allayDropItemOnBlock(LocationPredicate.Builder p_286325_,  ItemPredicate.Builder p_286531_)`
- `public boolean matches(LootContext p_286800_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## KilledByCrossbowTrigger

*class* `net.minecraft.advancements.critereon.KilledByCrossbowTrigger`

### Methods
- `public KilledByCrossbowTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286674_,  Optional<ContextAwarePredicate> p_299181_,  DeserializationContext p_286778_)`
- `public void trigger(ServerPlayer p_46872_,  Collection<Entity> p_46873_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## KilledByCrossbowTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.KilledByCrossbowTrigger.TriggerInstance`

Enclosing class: KilledByCrossbowTrigger

### Fields
- `private final List<ContextAwarePredicate> victims`
- `private final MinMaxBounds.Ints uniqueEntityTypes`

### Methods
- `public static Criterion<KilledByCrossbowTrigger.TriggerInstance> crossbowKilled(EntityPredicate.Builder... p_46901_)`
- `public static Criterion<KilledByCrossbowTrigger.TriggerInstance> crossbowKilled(MinMaxBounds.Ints p_46894_)`
- `public boolean matches(Collection<LootContext> p_46898_,  int p_46899_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## KilledTrigger

*class* `net.minecraft.advancements.critereon.KilledTrigger`

### Methods
- `public KilledTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286846_,  Optional<ContextAwarePredicate> p_298055_,  DeserializationContext p_286257_)`
- `public void trigger(ServerPlayer p_48105_,  Entity p_48106_,  DamageSource p_48107_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## KilledTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.KilledTrigger.TriggerInstance`

Enclosing class: KilledTrigger

### Fields
- `private final Optional<ContextAwarePredicate> entityPredicate`
- `private final Optional<DamageSourcePredicate> killingBlow`

### Methods
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(Optional<EntityPredicate> p_299523_)`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(EntityPredicate.Builder p_48137_)`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity()`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(Optional<EntityPredicate> p_299572_,  Optional<DamageSourcePredicate> p_297245_)`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(EntityPredicate.Builder p_152106_,  Optional<DamageSourcePredicate> p_297683_)`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(Optional<EntityPredicate> p_300641_,  DamageSourcePredicate.Builder p_300954_)`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(EntityPredicate.Builder p_300999_,  DamageSourcePredicate.Builder p_298768_)`
- `public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntityNearSculkCatalyst()`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(Optional<EntityPredicate> p_300543_)`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(EntityPredicate.Builder p_300131_)`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer()`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(Optional<EntityPredicate> p_297719_,  Optional<DamageSourcePredicate> p_298112_)`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(EntityPredicate.Builder p_298074_,  Optional<DamageSourcePredicate> p_300879_)`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(Optional<EntityPredicate> p_297520_,  DamageSourcePredicate.Builder p_299317_)`
- `public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(EntityPredicate.Builder p_152122_,  DamageSourcePredicate.Builder p_299947_)`
- `public boolean matches(ServerPlayer p_48131_,  LootContext p_48132_,  DamageSource p_48133_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## LevitationTrigger

*class* `net.minecraft.advancements.critereon.LevitationTrigger`

### Methods
- `public LevitationTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286359_,  Optional<ContextAwarePredicate> p_301100_,  DeserializationContext p_286241_)`
- `public void trigger(ServerPlayer p_49117_,  Vec3 p_49118_,  int p_49119_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## LevitationTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.LevitationTrigger.TriggerInstance`

Enclosing class: LevitationTrigger

### Fields
- `private final Optional<DistancePredicate> distance`
- `private final MinMaxBounds.Ints duration`

### Methods
- `public static Criterion<LevitationTrigger.TriggerInstance> levitated(DistancePredicate p_49145_)`
- `public boolean matches(ServerPlayer p_49141_,  Vec3 p_49142_,  int p_49143_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## LightningBoltPredicate

*record* `net.minecraft.advancements.critereon.LightningBoltPredicate`

### Fields
- `private final MinMaxBounds.Ints blocksSetOnFire`
  The field for the blocksSetOnFire record component.
- `private final Optional<EntityPredicate> entityStruck`
  The field for the entityStruck record component.
- `public static final com.mojang.serialization.MapCodec<LightningBoltPredicate> CODEC`

### Methods
- `public static LightningBoltPredicate blockSetOnFire(MinMaxBounds.Ints p_297323_)`
- `public EntitySubPredicate.Type type()`
- `public boolean matches(Entity p_300332_,  ServerLevel p_297594_,  @Nullable  Vec3 p_298602_)`
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
- `public MinMaxBounds.Ints blocksSetOnFire()`
  Returns the value of the blocksSetOnFire record component.
  - returns: the value of the blocksSetOnFire record component
- `public Optional<EntityPredicate> entityStruck()`
  Returns the value of the entityStruck record component.
  - returns: the value of the entityStruck record component

## LightningStrikeTrigger

*class* `net.minecraft.advancements.critereon.LightningStrikeTrigger`

### Methods
- `public LightningStrikeTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286889_,  Optional<ContextAwarePredicate> p_301355_,  DeserializationContext p_286384_)`
- `public void trigger(ServerPlayer p_153392_,  LightningBolt p_153393_,  List<Entity> p_153394_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## LightningStrikeTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.LightningStrikeTrigger.TriggerInstance`

Enclosing class: LightningStrikeTrigger

### Fields
- `private final Optional<ContextAwarePredicate> lightning`
- `private final Optional<ContextAwarePredicate> bystander`

### Methods
- `public static Criterion<LightningStrikeTrigger.TriggerInstance> lightningStrike(Optional<EntityPredicate> p_301310_,  Optional<EntityPredicate> p_299336_)`
- `public boolean matches(LootContext p_153419_,  List<LootContext> p_153420_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## LightPredicate

*record* `net.minecraft.advancements.critereon.LightPredicate`

### Fields
- `private final MinMaxBounds.Ints composite`
  The field for the composite record component.
- `public static final com.mojang.serialization.Codec<LightPredicate> CODEC`

### Methods
- `public boolean matches(ServerLevel p_51342_,  BlockPos p_51343_)`
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
- `public MinMaxBounds.Ints composite()`
  Returns the value of the composite record component.
  - returns: the value of the composite record component

## LightPredicate.Builder

*class* `net.minecraft.advancements.critereon.LightPredicate.Builder`

Enclosing class: LightPredicate

### Fields
- `private MinMaxBounds.Ints composite`

### Methods
- `public static LightPredicate.Builder light()`
- `public LightPredicate.Builder setComposite(MinMaxBounds.Ints p_153105_)`
- `public LightPredicate build()`

## LocationPredicate

*record* `net.minecraft.advancements.critereon.LocationPredicate`

### Fields
- `private final Optional<LocationPredicate.PositionPredicate> position`
  The field for the position record component.
- `private final Optional<ResourceKey<Biome>> biome`
  The field for the biome record component.
- `private final Optional<ResourceKey<Structure>> structure`
  The field for the structure record component.
- `private final Optional<ResourceKey<Level>> dimension`
  The field for the dimension record component.
- `private final Optional<Boolean> smokey`
  The field for the smokey record component.
- `private final Optional<LightPredicate> light`
  The field for the light record component.
- `private final Optional<BlockPredicate> block`
  The field for the block record component.
- `private final Optional<FluidPredicate> fluid`
  The field for the fluid record component.
- `public static final com.mojang.serialization.Codec<LocationPredicate> CODEC`

### Methods
- `private static Optional<LocationPredicate> of(Optional<LocationPredicate.PositionPredicate> p_298583_,  Optional<ResourceKey<Biome>> p_299235_,  Optional<ResourceKey<Structure>> p_300788_,  Optional<ResourceKey<Level>> p_299843_,  Optional<Boolean> p_299039_,  Optional<LightPredicate> p_297467_,  Optional<BlockPredicate> p_298254_,  Optional<FluidPredicate> p_297912_)`
- `public boolean matches(ServerLevel p_52618_,  double p_52619_,  double p_52620_,  double p_52621_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static Optional<LocationPredicate> fromJson(@Nullable  com.google.gson.JsonElement p_52630_)`
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
- `public Optional<LocationPredicate.PositionPredicate> position()`
  Returns the value of the position record component.
  - returns: the value of the position record component
- `public Optional<ResourceKey<Biome>> biome()`
  Returns the value of the biome record component.
  - returns: the value of the biome record component
- `public Optional<ResourceKey<Structure>> structure()`
  Returns the value of the structure record component.
  - returns: the value of the structure record component
- `public Optional<ResourceKey<Level>> dimension()`
  Returns the value of the dimension record component.
  - returns: the value of the dimension record component
- `public Optional<Boolean> smokey()`
  Returns the value of the smokey record component.
  - returns: the value of the smokey record component
- `public Optional<LightPredicate> light()`
  Returns the value of the light record component.
  - returns: the value of the light record component
- `public Optional<BlockPredicate> block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public Optional<FluidPredicate> fluid()`
  Returns the value of the fluid record component.
  - returns: the value of the fluid record component

## LocationPredicate.Builder

*class* `net.minecraft.advancements.critereon.LocationPredicate.Builder`

Enclosing class: LocationPredicate

### Fields
- `private MinMaxBounds.Doubles x`
- `private MinMaxBounds.Doubles y`
- `private MinMaxBounds.Doubles z`
- `private Optional<ResourceKey<Biome>> biome`
- `private Optional<ResourceKey<Structure>> structure`
- `private Optional<ResourceKey<Level>> dimension`
- `private Optional<Boolean> smokey`
- `private Optional<LightPredicate> light`
- `private Optional<BlockPredicate> block`
- `private Optional<FluidPredicate> fluid`

### Methods
- `public static LocationPredicate.Builder location()`
- `public static LocationPredicate.Builder inBiome(ResourceKey<Biome> p_300086_)`
- `public static LocationPredicate.Builder inDimension(ResourceKey<Level> p_300753_)`
- `public static LocationPredicate.Builder inStructure(ResourceKey<Structure> p_301072_)`
- `public static LocationPredicate.Builder atYLocation(MinMaxBounds.Doubles p_297662_)`
- `public LocationPredicate.Builder setX(MinMaxBounds.Doubles p_153971_)`
- `public LocationPredicate.Builder setY(MinMaxBounds.Doubles p_153975_)`
- `public LocationPredicate.Builder setZ(MinMaxBounds.Doubles p_153979_)`
- `public LocationPredicate.Builder setBiome(ResourceKey<Biome> p_52657_)`
- `public LocationPredicate.Builder setStructure(ResourceKey<Structure> p_220593_)`
- `public LocationPredicate.Builder setDimension(ResourceKey<Level> p_153977_)`
- `public LocationPredicate.Builder setLight(LightPredicate.Builder p_298990_)`
- `public LocationPredicate.Builder setBlock(BlockPredicate.Builder p_298525_)`
- `public LocationPredicate.Builder setFluid(FluidPredicate.Builder p_298614_)`
- `public LocationPredicate.Builder setSmokey(boolean p_299005_)`
- `public LocationPredicate build()`

## LocationPredicate.PositionPredicate

*record* `net.minecraft.advancements.critereon.LocationPredicate.PositionPredicate`

Enclosing class: LocationPredicate

### Fields
- `private final MinMaxBounds.Doubles x`
  The field for the x record component.
- `private final MinMaxBounds.Doubles y`
  The field for the y record component.
- `private final MinMaxBounds.Doubles z`
  The field for the z record component.
- `public static final com.mojang.serialization.Codec<LocationPredicate.PositionPredicate> CODEC`

### Methods
- `static Optional<LocationPredicate.PositionPredicate> of(MinMaxBounds.Doubles p_300563_,  MinMaxBounds.Doubles p_301250_,  MinMaxBounds.Doubles p_299764_)`
- `public boolean matches(double p_299909_,  double p_298621_,  double p_299854_)`
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
- `public MinMaxBounds.Doubles x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public MinMaxBounds.Doubles y()`
  Returns the value of the y record component.
  - returns: the value of the y record component
- `public MinMaxBounds.Doubles z()`
  Returns the value of the z record component.
  - returns: the value of the z record component

## LootTableTrigger

*class* `net.minecraft.advancements.critereon.LootTableTrigger`

### Methods
- `protected LootTableTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286915_,  Optional<ContextAwarePredicate> p_301229_,  DeserializationContext p_286891_)`
- `public void trigger(ServerPlayer p_54598_,  ResourceLocation p_54599_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## LootTableTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.LootTableTrigger.TriggerInstance`

Enclosing class: LootTableTrigger

### Fields
- `private final ResourceLocation lootTable`

### Methods
- `public static Criterion<LootTableTrigger.TriggerInstance> lootTableUsed(ResourceLocation p_54619_)`
- `public boolean matches(ResourceLocation p_54621_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## MinMaxBounds

*interface* `net.minecraft.advancements.critereon.MinMaxBounds`

### Fields
- `static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_EMPTY`
- `static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_SWAPPED`

### Methods
- `Optional<T> min()`
- `Optional<T> max()`
- `default boolean isAny()`
- `default Optional<T> unwrapPoint()`
- `static <T extends Number, R extends MinMaxBounds<T>> com.mojang.serialization.Codec<R> createCodec(com.mojang.serialization.Codec<T> p_297837_,  MinMaxBounds.BoundsFactory<T,R> p_298619_)`
- `static <T extends Number, R extends MinMaxBounds<T>> R fromReader(com.mojang.brigadier.StringReader p_55314_,  MinMaxBounds.BoundsFromReaderFactory<T,R> p_55315_,  Function<String,T> p_55316_,  Supplier<com.mojang.brigadier.exceptions.DynamicCommandExceptionType> p_55317_,  Function<T,T> p_55318_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static <T extends Number> Optional<T> readNumber(com.mojang.brigadier.StringReader p_55320_,  Function<String,T> p_55321_,  Supplier<com.mojang.brigadier.exceptions.DynamicCommandExceptionType> p_55322_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean isAllowedInputChat(com.mojang.brigadier.StringReader p_55312_)`

## MinMaxBounds.BoundsFactory>

*interface* `net.minecraft.advancements.critereon.MinMaxBounds.BoundsFactory>`

Enclosing interface: MinMaxBounds<T extends Number>

### Methods
- `R create(Optional<T> p_300137_,  Optional<T> p_298711_)`

## MinMaxBounds.BoundsFromReaderFactory>

*interface* `net.minecraft.advancements.critereon.MinMaxBounds.BoundsFromReaderFactory>`

Enclosing interface: MinMaxBounds<T extends Number>

### Methods
- `R create(com.mojang.brigadier.StringReader p_55333_,  Optional<T> p_297501_,  Optional<T> p_300423_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## MinMaxBounds.Doubles

*record* `net.minecraft.advancements.critereon.MinMaxBounds.Doubles`

Enclosing interface: MinMaxBounds<T extends Number>

### Fields
- `private final Optional<Double> min`
  The field for the min record component.
- `private final Optional<Double> max`
  The field for the max record component.
- `private final Optional<Double> minSq`
  The field for the minSq record component.
- `private final Optional<Double> maxSq`
  The field for the maxSq record component.
- `public static final MinMaxBounds.Doubles ANY`
- `public static final com.mojang.serialization.Codec<MinMaxBounds.Doubles> CODEC`

### Inherited fields
- from `net.minecraft.advancements.critereon.MinMaxBounds`: `ERROR_EMPTY`, `ERROR_SWAPPED`

### Methods
- `private static MinMaxBounds.Doubles create(com.mojang.brigadier.StringReader p_154796_,  Optional<Double> p_299495_,  Optional<Double> p_301206_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static Optional<Double> squareOpt(Optional<Double> p_299805_)`
- `public static MinMaxBounds.Doubles exactly(double p_154787_)`
- `public static MinMaxBounds.Doubles between(double p_154789_,  double p_154790_)`
- `public static MinMaxBounds.Doubles atLeast(double p_154805_)`
- `public static MinMaxBounds.Doubles atMost(double p_154809_)`
- `public boolean matches(double p_154811_)`
- `public boolean matchesSqr(double p_154813_)`
- `public static MinMaxBounds.Doubles fromJson(@Nullable  com.google.gson.JsonElement p_154792_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static MinMaxBounds.Doubles fromReader(com.mojang.brigadier.StringReader p_154794_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static MinMaxBounds.Doubles fromReader(com.mojang.brigadier.StringReader p_154800_,  Function<Double,Double> p_154801_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Optional<Double> min()`
  Returns the value of the min record component.
  - returns: the value of the min record component
- `public Optional<Double> max()`
  Returns the value of the max record component.
  - returns: the value of the max record component
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
- `public Optional<Double> minSq()`
  Returns the value of the minSq record component.
  - returns: the value of the minSq record component
- `public Optional<Double> maxSq()`
  Returns the value of the maxSq record component.
  - returns: the value of the maxSq record component

### Inherited methods
- from `net.minecraft.advancements.critereon.MinMaxBounds`: `isAny`, `unwrapPoint`

## MinMaxBounds.Ints

*record* `net.minecraft.advancements.critereon.MinMaxBounds.Ints`

Enclosing interface: MinMaxBounds<T extends Number>

### Fields
- `private final Optional<Integer> min`
  The field for the min record component.
- `private final Optional<Integer> max`
  The field for the max record component.
- `private final Optional<Long> minSq`
  The field for the minSq record component.
- `private final Optional<Long> maxSq`
  The field for the maxSq record component.
- `public static final MinMaxBounds.Ints ANY`
- `public static final com.mojang.serialization.Codec<MinMaxBounds.Ints> CODEC`

### Inherited fields
- from `net.minecraft.advancements.critereon.MinMaxBounds`: `ERROR_EMPTY`, `ERROR_SWAPPED`

### Methods
- `private static MinMaxBounds.Ints create(com.mojang.brigadier.StringReader p_55378_,  Optional<Integer> p_297316_,  Optional<Integer> p_300359_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static Optional<Long> squareOpt(Optional<Integer> p_300285_)`
- `public static MinMaxBounds.Ints exactly(int p_55372_)`
- `public static MinMaxBounds.Ints between(int p_154815_,  int p_154816_)`
- `public static MinMaxBounds.Ints atLeast(int p_55387_)`
- `public static MinMaxBounds.Ints atMost(int p_154820_)`
- `public boolean matches(int p_55391_)`
- `public boolean matchesSqr(long p_154818_)`
- `public static MinMaxBounds.Ints fromJson(@Nullable  com.google.gson.JsonElement p_55374_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static MinMaxBounds.Ints fromReader(com.mojang.brigadier.StringReader p_55376_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static MinMaxBounds.Ints fromReader(com.mojang.brigadier.StringReader p_55382_,  Function<Integer,Integer> p_55383_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Optional<Integer> min()`
  Returns the value of the min record component.
  - returns: the value of the min record component
- `public Optional<Integer> max()`
  Returns the value of the max record component.
  - returns: the value of the max record component
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
- `public Optional<Long> minSq()`
  Returns the value of the minSq record component.
  - returns: the value of the minSq record component
- `public Optional<Long> maxSq()`
  Returns the value of the maxSq record component.
  - returns: the value of the maxSq record component

### Inherited methods
- from `net.minecraft.advancements.critereon.MinMaxBounds`: `isAny`, `unwrapPoint`

## MobEffectsPredicate

*record* `net.minecraft.advancements.critereon.MobEffectsPredicate`

### Fields
- `private final Map<Holder<MobEffect>,MobEffectsPredicate.MobEffectInstancePredicate> effectMap`
  The field for the effectMap record component.
- `public static final com.mojang.serialization.Codec<MobEffectsPredicate> CODEC`

### Methods
- `public boolean matches(Entity p_56556_)`
- `public boolean matches(LivingEntity p_56558_)`
- `public boolean matches(Map<MobEffect,MobEffectInstance> p_56562_)`
- `public static Optional<MobEffectsPredicate> fromJson(@Nullable  com.google.gson.JsonElement p_56560_)`
- `public com.google.gson.JsonElement serializeToJson()`
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
- `public Map<Holder<MobEffect>,MobEffectsPredicate.MobEffectInstancePredicate> effectMap()`
  Returns the value of the effectMap record component.
  - returns: the value of the effectMap record component

## MobEffectsPredicate.Builder

*class* `net.minecraft.advancements.critereon.MobEffectsPredicate.Builder`

Enclosing class: MobEffectsPredicate

### Fields
- `private final com.google.common.collect.ImmutableMap.Builder<Holder<MobEffect>,MobEffectsPredicate.MobEffectInstancePredicate> effectMap`

### Methods
- `public static MobEffectsPredicate.Builder effects()`
- `public MobEffectsPredicate.Builder and(MobEffect p_300625_)`
- `public MobEffectsPredicate.Builder and(MobEffect p_299972_,  MobEffectsPredicate.MobEffectInstancePredicate p_300885_)`
- `public Optional<MobEffectsPredicate> build()`

## MobEffectsPredicate.MobEffectInstancePredicate

*record* `net.minecraft.advancements.critereon.MobEffectsPredicate.MobEffectInstancePredicate`

Enclosing class: MobEffectsPredicate

### Fields
- `private final MinMaxBounds.Ints amplifier`
  The field for the amplifier record component.
- `private final MinMaxBounds.Ints duration`
  The field for the duration record component.
- `private final Optional<Boolean> ambient`
  The field for the ambient record component.
- `private final Optional<Boolean> visible`
  The field for the visible record component.
- `public static final com.mojang.serialization.Codec<MobEffectsPredicate.MobEffectInstancePredicate> CODEC`

### Methods
- `public boolean matches(@Nullable  MobEffectInstance p_56578_)`
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
- `public MinMaxBounds.Ints amplifier()`
  Returns the value of the amplifier record component.
  - returns: the value of the amplifier record component
- `public MinMaxBounds.Ints duration()`
  Returns the value of the duration record component.
  - returns: the value of the duration record component
- `public Optional<Boolean> ambient()`
  Returns the value of the ambient record component.
  - returns: the value of the ambient record component
- `public Optional<Boolean> visible()`
  Returns the value of the visible record component.
  - returns: the value of the visible record component

## NbtPredicate

*record* `net.minecraft.advancements.critereon.NbtPredicate`

### Fields
- `private final CompoundTag tag`
  The field for the tag record component.
- `public static final com.mojang.serialization.Codec<NbtPredicate> CODEC`

### Methods
- `public boolean matches(ItemStack p_57480_)`
- `public boolean matches(Entity p_57478_)`
- `public boolean matches(@Nullable  Tag p_57484_)`
- `public static CompoundTag getEntityTagToCompare(Entity p_57486_)`
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
- `public CompoundTag tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component

## PickedUpItemTrigger

*class* `net.minecraft.advancements.critereon.PickedUpItemTrigger`

### Methods
- `protected PickedUpItemTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286503_,  Optional<ContextAwarePredicate> p_299166_,  DeserializationContext p_286658_)`
- `public void trigger(ServerPlayer p_221299_,  ItemStack p_221300_,  @Nullable  Entity p_221301_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## PickedUpItemTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.PickedUpItemTrigger.TriggerInstance`

Enclosing class: PickedUpItemTrigger

### Fields
- `private final Optional<ItemPredicate> item`
- `private final Optional<ContextAwarePredicate> entity`

### Methods
- `public static Criterion<PickedUpItemTrigger.TriggerInstance> thrownItemPickedUpByEntity(ContextAwarePredicate p_286865_,  Optional<ItemPredicate> p_297283_,  Optional<ContextAwarePredicate> p_300033_)`
- `public static Criterion<PickedUpItemTrigger.TriggerInstance> thrownItemPickedUpByPlayer(Optional<ContextAwarePredicate> p_299013_,  Optional<ItemPredicate> p_299788_,  Optional<ContextAwarePredicate> p_299814_)`
- `public boolean matches(ServerPlayer p_221323_,  ItemStack p_221324_,  LootContext p_221325_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## PlayerHurtEntityTrigger

*class* `net.minecraft.advancements.critereon.PlayerHurtEntityTrigger`

### Methods
- `public PlayerHurtEntityTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286442_,  Optional<ContextAwarePredicate> p_300807_,  DeserializationContext p_286750_)`
- `public void trigger(ServerPlayer p_60113_,  Entity p_60114_,  DamageSource p_60115_,  float p_60116_,  float p_60117_,  boolean p_60118_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## PlayerHurtEntityTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.PlayerHurtEntityTrigger.TriggerInstance`

Enclosing class: PlayerHurtEntityTrigger

### Fields
- `private final Optional<DamagePredicate> damage`
- `private final Optional<ContextAwarePredicate> entity`

### Methods
- `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity()`
- `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntityWithDamage(Optional<DamagePredicate> p_297888_)`
- `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntityWithDamage(DamagePredicate.Builder p_297478_)`
- `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity(Optional<EntityPredicate> p_297304_)`
- `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity(Optional<DamagePredicate> p_299532_,  Optional<EntityPredicate> p_298332_)`
- `public static Criterion<PlayerHurtEntityTrigger.TriggerInstance> playerHurtEntity(DamagePredicate.Builder p_300965_,  Optional<EntityPredicate> p_298699_)`
- `public boolean matches(ServerPlayer p_60143_,  LootContext p_60144_,  DamageSource p_60145_,  float p_60146_,  float p_60147_,  boolean p_60148_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## PlayerInteractTrigger

*class* `net.minecraft.advancements.critereon.PlayerInteractTrigger`

### Methods
- `protected PlayerInteractTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286758_,  Optional<ContextAwarePredicate> p_299829_,  DeserializationContext p_286859_)`
- `public void trigger(ServerPlayer p_61495_,  ItemStack p_61496_,  Entity p_61497_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## PlayerInteractTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.PlayerInteractTrigger.TriggerInstance`

Enclosing class: PlayerInteractTrigger

### Fields
- `private final Optional<ItemPredicate> item`
- `private final Optional<ContextAwarePredicate> entity`

### Methods
- `public static Criterion<PlayerInteractTrigger.TriggerInstance> itemUsedOnEntity(Optional<ContextAwarePredicate> p_297673_,  ItemPredicate.Builder p_286235_,  Optional<ContextAwarePredicate> p_301321_)`
- `public static Criterion<PlayerInteractTrigger.TriggerInstance> itemUsedOnEntity(ItemPredicate.Builder p_286289_,  Optional<ContextAwarePredicate> p_297754_)`
- `public boolean matches(ItemStack p_61522_,  LootContext p_61523_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## PlayerPredicate

*record* `net.minecraft.advancements.critereon.PlayerPredicate`

### Fields
- `private final MinMaxBounds.Ints level`
  The field for the level record component.
- `private final Optional<GameType> gameType`
  The field for the gameType record component.
- `private final List<PlayerPredicate.StatMatcher<?>> stats`
  The field for the stats record component.
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanMap<ResourceLocation> recipes`
  The field for the recipes record component.
- `private final Map<ResourceLocation,PlayerPredicate.AdvancementPredicate> advancements`
  The field for the advancements record component.
- `private final Optional<EntityPredicate> lookingAt`
  The field for the lookingAt record component.
- `public static final int LOOKING_AT_RANGE` (= 100)
- `public static final com.mojang.serialization.MapCodec<PlayerPredicate> CODEC`

### Methods
- `public boolean matches(Entity p_222484_,  ServerLevel p_222485_,  @Nullable  Vec3 p_222486_)`
- `public EntitySubPredicate.Type type()`
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
- `public MinMaxBounds.Ints level()`
  Returns the value of the level record component.
  - returns: the value of the level record component
- `public Optional<GameType> gameType()`
  Returns the value of the gameType record component.
  - returns: the value of the gameType record component
- `public List<PlayerPredicate.StatMatcher<?>> stats()`
  Returns the value of the stats record component.
  - returns: the value of the stats record component
- `public it.unimi.dsi.fastutil.objects.Object2BooleanMap<ResourceLocation> recipes()`
  Returns the value of the recipes record component.
  - returns: the value of the recipes record component
- `public Map<ResourceLocation,PlayerPredicate.AdvancementPredicate> advancements()`
  Returns the value of the advancements record component.
  - returns: the value of the advancements record component
- `public Optional<EntityPredicate> lookingAt()`
  Returns the value of the lookingAt record component.
  - returns: the value of the lookingAt record component

## PlayerPredicate.AdvancementCriterionsPredicate

*record* `net.minecraft.advancements.critereon.PlayerPredicate.AdvancementCriterionsPredicate`

Enclosing class: PlayerPredicate

### Fields
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanMap<String> criterions`
  The field for the criterions record component.
- `public static final com.mojang.serialization.Codec<PlayerPredicate.AdvancementCriterionsPredicate> CODEC`

### Methods
- `public boolean test(AdvancementProgress p_62296_)`
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
- `public it.unimi.dsi.fastutil.objects.Object2BooleanMap<String> criterions()`
  Returns the value of the criterions record component.
  - returns: the value of the criterions record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## PlayerPredicate.AdvancementDonePredicate

*record* `net.minecraft.advancements.critereon.PlayerPredicate.AdvancementDonePredicate`

Enclosing class: PlayerPredicate

### Fields
- `private final boolean state`
  The field for the state record component.
- `public static final com.mojang.serialization.Codec<PlayerPredicate.AdvancementDonePredicate> CODEC`

### Methods
- `public boolean test(AdvancementProgress p_62304_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public boolean state()`
  Returns the value of the state record component.
  - returns: the value of the state record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## PlayerPredicate.AdvancementPredicate

*interface* `net.minecraft.advancements.critereon.PlayerPredicate.AdvancementPredicate`

All Superinterfaces: Predicate<AdvancementProgress>

Enclosing class: PlayerPredicate

### Fields
- `static final com.mojang.serialization.Codec<PlayerPredicate.AdvancementPredicate> CODEC`

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`, `test`

## PlayerPredicate.Builder

*class* `net.minecraft.advancements.critereon.PlayerPredicate.Builder`

Enclosing class: PlayerPredicate

### Fields
- `private MinMaxBounds.Ints level`
- `private Optional<GameType> gameType`
- `private final com.google.common.collect.ImmutableList.Builder<PlayerPredicate.StatMatcher<?>> stats`
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanMap<ResourceLocation> recipes`
- `private final Map<ResourceLocation,PlayerPredicate.AdvancementPredicate> advancements`
- `private Optional<EntityPredicate> lookingAt`

### Methods
- `public static PlayerPredicate.Builder player()`
- `public PlayerPredicate.Builder setLevel(MinMaxBounds.Ints p_156776_)`
- `public <T> PlayerPredicate.Builder addStat(StatType<T> p_300081_,  Holder.Reference<T> p_298048_,  MinMaxBounds.Ints p_156770_)`
- `public PlayerPredicate.Builder addRecipe(ResourceLocation p_156781_,  boolean p_156782_)`
- `public PlayerPredicate.Builder setGameType(GameType p_156774_)`
- `public PlayerPredicate.Builder setLookingAt(EntityPredicate.Builder p_299861_)`
- `public PlayerPredicate.Builder checkAdvancementDone(ResourceLocation p_156784_,  boolean p_156785_)`
- `public PlayerPredicate.Builder checkAdvancementCriterions(ResourceLocation p_156778_,  Map<String,Boolean> p_156779_)`
- `public PlayerPredicate build()`

## PlayerPredicate.StatMatcher

*record* `net.minecraft.advancements.critereon.PlayerPredicate.StatMatcher`

Enclosing class: PlayerPredicate

### Fields
- `private final StatType<T> type`
  The field for the type record component.
- `private final Holder<T> value`
  The field for the value record component.
- `private final MinMaxBounds.Ints range`
  The field for the range record component.
- `private final Supplier<Stat<T>> stat`
  The field for the stat record component.
- `public static final com.mojang.serialization.Codec<PlayerPredicate.StatMatcher<?>> CODEC`

### Methods
- `private static <T> com.mojang.serialization.Codec<PlayerPredicate.StatMatcher<T>> createTypedCodec(StatType<T> p_297243_)`
- `public boolean matches(StatsCounter p_300296_)`
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
- `public StatType<T> type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public Holder<T> value()`
  Returns the value of the value record component.
  - returns: the value of the value record component
- `public MinMaxBounds.Ints range()`
  Returns the value of the range record component.
  - returns: the value of the range record component
- `public Supplier<Stat<T>> stat()`
  Returns the value of the stat record component.
  - returns: the value of the stat record component

## PlayerTrigger

*class* `net.minecraft.advancements.critereon.PlayerTrigger`

### Methods
- `public PlayerTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286911_,  Optional<ContextAwarePredicate> p_301362_,  DeserializationContext p_286261_)`
- `public void trigger(ServerPlayer p_222619_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## PlayerTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.PlayerTrigger.TriggerInstance`

Enclosing class: PlayerTrigger

### Methods
- `public static Criterion<PlayerTrigger.TriggerInstance> located(LocationPredicate.Builder p_297421_)`
- `public static Criterion<PlayerTrigger.TriggerInstance> located(EntityPredicate.Builder p_299982_)`
- `public static Criterion<PlayerTrigger.TriggerInstance> located(Optional<EntityPredicate> p_301210_)`
- `public static Criterion<PlayerTrigger.TriggerInstance> sleptInBed()`
- `public static Criterion<PlayerTrigger.TriggerInstance> raidWon()`
- `public static Criterion<PlayerTrigger.TriggerInstance> avoidVibration()`
- `public static Criterion<PlayerTrigger.TriggerInstance> tick()`
- `public static Criterion<PlayerTrigger.TriggerInstance> walkOnBlockWithEquipment(Block p_222638_,  Item p_222639_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`, `serializeToJson`

## RecipeCraftedTrigger

*class* `net.minecraft.advancements.critereon.RecipeCraftedTrigger`

### Methods
- `protected RecipeCraftedTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286751_,  Optional<ContextAwarePredicate> p_298511_,  DeserializationContext p_286668_)`
- `public void trigger(ServerPlayer p_281468_,  ResourceLocation p_282903_,  List<ItemStack> p_282070_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## RecipeCraftedTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.RecipeCraftedTrigger.TriggerInstance`

Enclosing class: RecipeCraftedTrigger

### Fields
- `private final ResourceLocation recipeId`
- `private final List<ItemPredicate> predicates`

### Methods
- `public static Criterion<RecipeCraftedTrigger.TriggerInstance> craftedItem(ResourceLocation p_283538_,  List<ItemPredicate.Builder> p_299678_)`
- `public static Criterion<RecipeCraftedTrigger.TriggerInstance> craftedItem(ResourceLocation p_282794_)`
- `boolean matches(ResourceLocation p_283528_,  List<ItemStack> p_283698_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## RecipeUnlockedTrigger

*class* `net.minecraft.advancements.critereon.RecipeUnlockedTrigger`

### Methods
- `public RecipeUnlockedTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286387_,  Optional<ContextAwarePredicate> p_297944_,  DeserializationContext p_286649_)`
- `public void trigger(ServerPlayer p_63719_,  RecipeHolder<?> p_300165_)`
- `public static Criterion<RecipeUnlockedTrigger.TriggerInstance> unlocked(ResourceLocation p_63729_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## RecipeUnlockedTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.RecipeUnlockedTrigger.TriggerInstance`

Enclosing class: RecipeUnlockedTrigger

### Fields
- `private final ResourceLocation recipe`

### Methods
- `public com.google.gson.JsonObject serializeToJson()`
- `public boolean matches(RecipeHolder<?> p_299959_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## ShotCrossbowTrigger

*class* `net.minecraft.advancements.critereon.ShotCrossbowTrigger`

### Methods
- `public ShotCrossbowTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286726_,  Optional<ContextAwarePredicate> p_300212_,  DeserializationContext p_286701_)`
- `public void trigger(ServerPlayer p_65463_,  ItemStack p_65464_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## ShotCrossbowTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.ShotCrossbowTrigger.TriggerInstance`

Enclosing class: ShotCrossbowTrigger

### Fields
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<ShotCrossbowTrigger.TriggerInstance> shotCrossbow(Optional<ItemPredicate> p_299474_)`
- `public static Criterion<ShotCrossbowTrigger.TriggerInstance> shotCrossbow(ItemLike p_65484_)`
- `public boolean matches(ItemStack p_65482_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## SimpleCriterionTrigger

*class* `net.minecraft.advancements.critereon.SimpleCriterionTrigger`

### Fields
- `private final Map<PlayerAdvancements,Set<CriterionTrigger.Listener<T extends SimpleCriterionTrigger.SimpleInstance>>> players`

### Methods
- `public final void addPlayerListener(PlayerAdvancements p_66243_,  CriterionTrigger.Listener<T> p_66244_)`
- `public final void removePlayerListener(PlayerAdvancements p_66254_,  CriterionTrigger.Listener<T> p_66255_)`
- `public final void removePlayerListeners(PlayerAdvancements p_66241_)`
- `protected abstract T createInstance(com.google.gson.JsonObject p_66248_,  Optional<ContextAwarePredicate> p_297533_,  DeserializationContext p_66250_)`
- `public final T createInstance(com.google.gson.JsonObject p_66246_,  DeserializationContext p_66247_)`
- `protected void trigger(ServerPlayer p_66235_,  Predicate<T> p_66236_)`

### Inherited methods
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## SimpleCriterionTrigger.SimpleInstance

*interface* `net.minecraft.advancements.critereon.SimpleCriterionTrigger.SimpleInstance`

All Superinterfaces: CriterionTriggerInstance

Enclosing class: SimpleCriterionTrigger<T extends SimpleCriterionTrigger.SimpleInstance>

### Methods
- `Optional<ContextAwarePredicate> playerPredicate()`

### Inherited methods
- from `net.minecraft.advancements.CriterionTriggerInstance`: `serializeToJson`

## SlideDownBlockTrigger

*class* `net.minecraft.advancements.critereon.SlideDownBlockTrigger`

### Methods
- `public SlideDownBlockTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286879_,  Optional<ContextAwarePredicate> p_299674_,  DeserializationContext p_286581_)`
- `@Nullable private static Block deserializeBlock(com.google.gson.JsonObject p_66988_)`
- `public void trigger(ServerPlayer p_66979_,  BlockState p_66980_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## SlideDownBlockTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.SlideDownBlockTrigger.TriggerInstance`

Enclosing class: SlideDownBlockTrigger

### Fields
- `@Nullable private final Block block`
- `private final Optional<StatePropertiesPredicate> state`

### Methods
- `public static Criterion<SlideDownBlockTrigger.TriggerInstance> slidesDownBlock(Block p_67007_)`
- `public com.google.gson.JsonObject serializeToJson()`
- `public boolean matches(BlockState p_67009_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## SlimePredicate

*record* `net.minecraft.advancements.critereon.SlimePredicate`

### Fields
- `private final MinMaxBounds.Ints size`
  The field for the size record component.
- `public static final com.mojang.serialization.MapCodec<SlimePredicate> CODEC`

### Methods
- `public static SlimePredicate sized(MinMaxBounds.Ints p_223427_)`
- `public boolean matches(Entity p_223423_,  ServerLevel p_223424_,  @Nullable  Vec3 p_223425_)`
- `public EntitySubPredicate.Type type()`
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
- `public MinMaxBounds.Ints size()`
  Returns the value of the size record component.
  - returns: the value of the size record component

## StartRidingTrigger

*class* `net.minecraft.advancements.critereon.StartRidingTrigger`

### Methods
- `public StartRidingTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286869_,  Optional<ContextAwarePredicate> p_297674_,  DeserializationContext p_286559_)`
- `public void trigger(ServerPlayer p_160388_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## StartRidingTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.StartRidingTrigger.TriggerInstance`

Enclosing class: StartRidingTrigger

### Methods
- `public static Criterion<StartRidingTrigger.TriggerInstance> playerStartsRiding(EntityPredicate.Builder p_160402_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`, `serializeToJson`

## StatePropertiesPredicate

*record* `net.minecraft.advancements.critereon.StatePropertiesPredicate`

### Fields
- `private final List<StatePropertiesPredicate.PropertyMatcher> properties`
  The field for the properties record component.
- `private static final com.mojang.serialization.Codec<List<StatePropertiesPredicate.PropertyMatcher>> PROPERTIES_CODEC`
- `public static final com.mojang.serialization.Codec<StatePropertiesPredicate> CODEC`

### Methods
- `public <S extends StateHolder<?, S>> boolean matches(StateDefinition<?,S> p_67670_,  S p_67671_)`
- `public boolean matches(BlockState p_67668_)`
- `public boolean matches(FluidState p_67685_)`
- `public Optional<String> checkState(StateDefinition<?,?> p_299112_)`
- `public void checkState(StateDefinition<?,?> p_67673_,  Consumer<String> p_67674_)`
- `public static Optional<StatePropertiesPredicate> fromJson(@Nullable  com.google.gson.JsonElement p_67680_)`
- `public com.google.gson.JsonElement serializeToJson()`
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
- `public List<StatePropertiesPredicate.PropertyMatcher> properties()`
  Returns the value of the properties record component.
  - returns: the value of the properties record component

## StatePropertiesPredicate.Builder

*class* `net.minecraft.advancements.critereon.StatePropertiesPredicate.Builder`

Enclosing class: StatePropertiesPredicate

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<StatePropertiesPredicate.PropertyMatcher> matchers`

### Methods
- `public static StatePropertiesPredicate.Builder properties()`
- `public StatePropertiesPredicate.Builder hasProperty(Property<?> p_67701_,  String p_67702_)`
- `public StatePropertiesPredicate.Builder hasProperty(Property<Integer> p_67695_,  int p_67696_)`
- `public StatePropertiesPredicate.Builder hasProperty(Property<Boolean> p_67704_,  boolean p_67705_)`
- `public <T extends Comparable<T> & StringRepresentable> StatePropertiesPredicate.Builder hasProperty(Property<T> p_67698_,  T p_67699_)`
- `public Optional<StatePropertiesPredicate> build()`

## StatePropertiesPredicate.ExactMatcher

*record* `net.minecraft.advancements.critereon.StatePropertiesPredicate.ExactMatcher`

Enclosing class: StatePropertiesPredicate

### Fields
- `private final String value`
  The field for the value record component.
- `public static final com.mojang.serialization.Codec<StatePropertiesPredicate.ExactMatcher> CODEC`

### Methods
- `public <T extends Comparable<T>> boolean match(StateHolder<?,?> p_301115_,  Property<T> p_299705_)`
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
- `public String value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## StatePropertiesPredicate.PropertyMatcher

*record* `net.minecraft.advancements.critereon.StatePropertiesPredicate.PropertyMatcher`

Enclosing class: StatePropertiesPredicate

### Fields
- `private final String name`
  The field for the name record component.
- `private final StatePropertiesPredicate.ValueMatcher valueMatcher`
  The field for the valueMatcher record component.

### Methods
- `public <S extends StateHolder<?, S>> boolean match(StateDefinition<?,S> p_67719_,  S p_67720_)`
- `public Optional<String> checkState(StateDefinition<?,?> p_67722_)`
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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public StatePropertiesPredicate.ValueMatcher valueMatcher()`
  Returns the value of the valueMatcher record component.
  - returns: the value of the valueMatcher record component

## StatePropertiesPredicate.RangedMatcher

*record* `net.minecraft.advancements.critereon.StatePropertiesPredicate.RangedMatcher`

Enclosing class: StatePropertiesPredicate

### Fields
- `private final Optional<String> minValue`
  The field for the minValue record component.
- `private final Optional<String> maxValue`
  The field for the maxValue record component.
- `public static final com.mojang.serialization.Codec<StatePropertiesPredicate.RangedMatcher> CODEC`

### Methods
- `public <T extends Comparable<T>> boolean match(StateHolder<?,?> p_299120_,  Property<T> p_300783_)`
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
- `public Optional<String> minValue()`
  Returns the value of the minValue record component.
  - returns: the value of the minValue record component
- `public Optional<String> maxValue()`
  Returns the value of the maxValue record component.
  - returns: the value of the maxValue record component

## StatePropertiesPredicate.ValueMatcher

*interface* `net.minecraft.advancements.critereon.StatePropertiesPredicate.ValueMatcher`

Enclosing class: StatePropertiesPredicate

### Fields
- `static final com.mojang.serialization.Codec<StatePropertiesPredicate.ValueMatcher> CODEC`

### Methods
- `<T extends Comparable<T>> boolean match(StateHolder<?,?> p_301268_,  Property<T> p_300938_)`

## SummonedEntityTrigger

*class* `net.minecraft.advancements.critereon.SummonedEntityTrigger`

### Methods
- `public SummonedEntityTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286898_,  Optional<ContextAwarePredicate> p_301005_,  DeserializationContext p_286829_)`
- `public void trigger(ServerPlayer p_68257_,  Entity p_68258_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## SummonedEntityTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.SummonedEntityTrigger.TriggerInstance`

Enclosing class: SummonedEntityTrigger

### Fields
- `private final Optional<ContextAwarePredicate> entity`

### Methods
- `public static Criterion<SummonedEntityTrigger.TriggerInstance> summonedEntity(EntityPredicate.Builder p_68276_)`
- `public boolean matches(LootContext p_68280_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## TagPredicate

*record* `net.minecraft.advancements.critereon.TagPredicate`

### Fields
- `private final TagKey<T> tag`
  The field for the tag record component.
- `private final boolean expected`
  The field for the expected record component.

### Methods
- `public static <T> com.mojang.serialization.Codec<TagPredicate<T>> codec(ResourceKey<? extends Registry<T>> p_301303_)`
- `public static <T> TagPredicate<T> is(TagKey<T> p_270668_)`
- `public static <T> TagPredicate<T> isNot(TagKey<T> p_270264_)`
- `public boolean matches(Holder<T> p_270125_)`
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
- `public TagKey<T> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `public boolean expected()`
  Returns the value of the expected record component.
  - returns: the value of the expected record component

## TameAnimalTrigger

*class* `net.minecraft.advancements.critereon.TameAnimalTrigger`

### Methods
- `public TameAnimalTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286910_,  Optional<ContextAwarePredicate> p_300230_,  DeserializationContext p_286732_)`
- `public void trigger(ServerPlayer p_68830_,  Animal p_68831_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## TameAnimalTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.TameAnimalTrigger.TriggerInstance`

Enclosing class: TameAnimalTrigger

### Fields
- `private final Optional<ContextAwarePredicate> entity`

### Methods
- `public static Criterion<TameAnimalTrigger.TriggerInstance> tamedAnimal()`
- `public static Criterion<TameAnimalTrigger.TriggerInstance> tamedAnimal(EntityPredicate.Builder p_299185_)`
- `public boolean matches(LootContext p_68853_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## TargetBlockTrigger

*class* `net.minecraft.advancements.critereon.TargetBlockTrigger`

### Methods
- `public TargetBlockTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286796_,  Optional<ContextAwarePredicate> p_301053_,  DeserializationContext p_286418_)`
- `public void trigger(ServerPlayer p_70212_,  Entity p_70213_,  Vec3 p_70214_,  int p_70215_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## TargetBlockTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.TargetBlockTrigger.TriggerInstance`

Enclosing class: TargetBlockTrigger

### Fields
- `private final MinMaxBounds.Ints signalStrength`
- `private final Optional<ContextAwarePredicate> projectile`

### Methods
- `public static Criterion<TargetBlockTrigger.TriggerInstance> targetHit(MinMaxBounds.Ints p_286700_,  Optional<ContextAwarePredicate> p_299065_)`
- `public com.google.gson.JsonObject serializeToJson()`
- `public boolean matches(LootContext p_70242_,  Vec3 p_70243_,  int p_70244_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## TradeTrigger

*class* `net.minecraft.advancements.critereon.TradeTrigger`

### Methods
- `public TradeTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286654_,  Optional<ContextAwarePredicate> p_298851_,  DeserializationContext p_286772_)`
- `public void trigger(ServerPlayer p_70960_,  AbstractVillager p_70961_,  ItemStack p_70962_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## TradeTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.TradeTrigger.TriggerInstance`

Enclosing class: TradeTrigger

### Fields
- `private final Optional<ContextAwarePredicate> villager`
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<TradeTrigger.TriggerInstance> tradedWithVillager()`
- `public static Criterion<TradeTrigger.TriggerInstance> tradedWithVillager(EntityPredicate.Builder p_191437_)`
- `public boolean matches(LootContext p_70985_,  ItemStack p_70986_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## UsedEnderEyeTrigger

*class* `net.minecraft.advancements.critereon.UsedEnderEyeTrigger`

### Methods
- `public UsedEnderEyeTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286861_,  Optional<ContextAwarePredicate> p_300695_,  DeserializationContext p_286916_)`
- `public void trigger(ServerPlayer p_73936_,  BlockPos p_73937_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## UsedEnderEyeTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.UsedEnderEyeTrigger.TriggerInstance`

Enclosing class: UsedEnderEyeTrigger

### Fields
- `private final MinMaxBounds.Doubles level`

### Methods
- `public boolean matches(double p_73952_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`, `serializeToJson`

## UsedTotemTrigger

*class* `net.minecraft.advancements.critereon.UsedTotemTrigger`

### Methods
- `public UsedTotemTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286841_,  Optional<ContextAwarePredicate> p_299653_,  DeserializationContext p_286414_)`
- `public void trigger(ServerPlayer p_74432_,  ItemStack p_74433_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## UsedTotemTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.UsedTotemTrigger.TriggerInstance`

Enclosing class: UsedTotemTrigger

### Fields
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<UsedTotemTrigger.TriggerInstance> usedTotem(ItemPredicate p_298404_)`
- `public static Criterion<UsedTotemTrigger.TriggerInstance> usedTotem(ItemLike p_300178_)`
- `public boolean matches(ItemStack p_74451_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## UsingItemTrigger

*class* `net.minecraft.advancements.critereon.UsingItemTrigger`

### Methods
- `public UsingItemTrigger.TriggerInstance createInstance(com.google.gson.JsonObject p_286642_,  Optional<ContextAwarePredicate> p_300027_,  DeserializationContext p_286897_)`
- `public void trigger(ServerPlayer p_163866_,  ItemStack p_163867_)`

### Inherited methods
- from `net.minecraft.advancements.critereon.SimpleCriterionTrigger`: `addPlayerListener`, `createInstance`, `removePlayerListener`, `removePlayerListeners`, `trigger`
- from `net.minecraft.advancements.CriterionTrigger`: `createCriterion`

## UsingItemTrigger.TriggerInstance

*class* `net.minecraft.advancements.critereon.UsingItemTrigger.TriggerInstance`

Enclosing class: UsingItemTrigger

### Fields
- `private final Optional<ItemPredicate> item`

### Methods
- `public static Criterion<UsingItemTrigger.TriggerInstance> lookingAt(EntityPredicate.Builder p_163884_,  ItemPredicate.Builder p_163885_)`
- `public boolean matches(ItemStack p_163887_)`
- `public com.google.gson.JsonObject serializeToJson()`

### Inherited methods
- from `net.minecraft.advancements.critereon.AbstractCriterionTriggerInstance`: `playerPredicate`

## WrappedMinMaxBounds

*record* `net.minecraft.advancements.critereon.WrappedMinMaxBounds`

### Fields
- `@Nullable private final Float min`
  The field for the min record component.
- `@Nullable private final Float max`
  The field for the max record component.
- `public static final WrappedMinMaxBounds ANY`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INTS_ONLY`

### Methods
- `public static WrappedMinMaxBounds exactly(float p_164403_)`
- `public static WrappedMinMaxBounds between(float p_164405_,  float p_164406_)`
- `public static WrappedMinMaxBounds atLeast(float p_164415_)`
- `public static WrappedMinMaxBounds atMost(float p_164418_)`
- `public boolean matches(float p_164420_)`
- `public boolean matchesSqr(double p_164401_)`
- `public com.google.gson.JsonElement serializeToJson()`
- `public static WrappedMinMaxBounds fromJson(@Nullable  com.google.gson.JsonElement p_164408_)`
- `public static WrappedMinMaxBounds fromReader(com.mojang.brigadier.StringReader p_164410_,  boolean p_164411_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static WrappedMinMaxBounds fromReader(com.mojang.brigadier.StringReader p_75360_,  boolean p_75361_,  Function<Float,Float> p_75362_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `@Nullable private static Float readNumber(com.mojang.brigadier.StringReader p_75368_,  boolean p_75369_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static boolean isAllowedNumber(com.mojang.brigadier.StringReader p_75371_,  boolean p_75372_)`
- `@Nullable private static Float optionallyFormat(@Nullable  Float p_75364_,  Function<Float,Float> p_75365_)`
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
- `@Nullable public Float min()`
  Returns the value of the min record component.
  - returns: the value of the min record component
- `@Nullable public Float max()`
  Returns the value of the max record component.
  - returns: the value of the max record component
