# net.minecraft.world.level.storage.loot.functions

- [ApplyBonusCount](#applybonuscount)
- [ApplyBonusCount.BinomialWithBonusCount](#applybonuscount.binomialwithbonuscount)
- [ApplyBonusCount.Formula](#applybonuscount.formula)
- [ApplyBonusCount.FormulaType](#applybonuscount.formulatype)
- [ApplyBonusCount.OreDrops](#applybonuscount.oredrops)
- [ApplyBonusCount.UniformBonusCount](#applybonuscount.uniformbonuscount)
- [ApplyExplosionDecay](#applyexplosiondecay)
- [Class CopyNameFunction.NameSource](#class-copynamefunction.namesource)
- [Class CopyNbtFunction.MergeStrategy](#class-copynbtfunction.mergestrategy)
- [CopyBlockState](#copyblockstate)
- [CopyBlockState.Builder](#copyblockstate.builder)
- [CopyNameFunction](#copynamefunction)
- [CopyNbtFunction](#copynbtfunction)
- [CopyNbtFunction.Builder](#copynbtfunction.builder)
- [CopyNbtFunction.CopyOperation](#copynbtfunction.copyoperation)
- [CopyNbtFunction.Path](#copynbtfunction.path)
- [EnchantRandomlyFunction](#enchantrandomlyfunction)
- [EnchantRandomlyFunction.Builder](#enchantrandomlyfunction.builder)
- [EnchantWithLevelsFunction](#enchantwithlevelsfunction)
- [EnchantWithLevelsFunction.Builder](#enchantwithlevelsfunction.builder)
- [ExplorationMapFunction](#explorationmapfunction)
- [ExplorationMapFunction.Builder](#explorationmapfunction.builder)
- [FillPlayerHead](#fillplayerhead)
- [FunctionReference](#functionreference)
- [FunctionUserBuilder>](#functionuserbuilder)
- [LimitCount](#limitcount)
- [LootingEnchantFunction](#lootingenchantfunction)
- [LootingEnchantFunction.Builder](#lootingenchantfunction.builder)
- [LootItemConditionalFunction](#lootitemconditionalfunction)
- [LootItemConditionalFunction.Builder>](#lootitemconditionalfunction.builder)
- [LootItemConditionalFunction.DummyBuilder](#lootitemconditionalfunction.dummybuilder)
- [LootItemFunction](#lootitemfunction)
- [LootItemFunction.Builder](#lootitemfunction.builder)
- [LootItemFunctions](#lootitemfunctions)
- [LootItemFunctionType](#lootitemfunctiontype)
- [SequenceFunction](#sequencefunction)
- [SetAttributesFunction](#setattributesfunction)
- [SetAttributesFunction.Builder](#setattributesfunction.builder)
- [SetAttributesFunction.Modifier](#setattributesfunction.modifier)
- [SetAttributesFunction.ModifierBuilder](#setattributesfunction.modifierbuilder)
- [SetBannerPatternFunction](#setbannerpatternfunction)
- [SetBannerPatternFunction.Builder](#setbannerpatternfunction.builder)
- [SetContainerContents](#setcontainercontents)
- [SetContainerContents.Builder](#setcontainercontents.builder)
- [SetContainerLootTable](#setcontainerloottable)
- [SetEnchantmentsFunction](#setenchantmentsfunction)
- [SetEnchantmentsFunction.Builder](#setenchantmentsfunction.builder)
- [SetInstrumentFunction](#setinstrumentfunction)
- [SetItemCountFunction](#setitemcountfunction)
- [SetItemDamageFunction](#setitemdamagefunction)
- [SetLoreFunction](#setlorefunction)
- [SetLoreFunction.Builder](#setlorefunction.builder)
- [SetNameFunction](#setnamefunction)
- [SetNbtFunction](#setnbtfunction)
- [SetPotionFunction](#setpotionfunction)
- [SetStewEffectFunction](#setsteweffectfunction)
- [SetStewEffectFunction.Builder](#setsteweffectfunction.builder)
- [SetStewEffectFunction.EffectEntry](#setsteweffectfunction.effectentry)
- [SmeltItemFunction](#smeltitemfunction)
## ApplyBonusCount

*class* `net.minecraft.world.level.storage.loot.functions.ApplyBonusCount`

### Fields
- `private static final Map<ResourceLocation,ApplyBonusCount.FormulaType> FORMULAS`
- `static final com.mojang.serialization.Codec<ApplyBonusCount.FormulaType> FORMULA_TYPE_CODEC`
- `private static final com.mojang.serialization.MapCodec<ApplyBonusCount.Formula> FORMULA_CODEC`
- `public static final com.mojang.serialization.Codec<ApplyBonusCount> CODEC`
- `private final Holder<Enchantment> enchantment`
- `private final ApplyBonusCount.Formula formula`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_79913_,  LootContext p_79914_)`
- `public static LootItemConditionalFunction.Builder<?> addBonusBinomialDistributionCount(Enchantment p_79918_,  float p_79919_,  int p_79920_)`
- `public static LootItemConditionalFunction.Builder<?> addOreBonusCount(Enchantment p_79916_)`
- `public static LootItemConditionalFunction.Builder<?> addUniformBonusCount(Enchantment p_79940_)`
- `public static LootItemConditionalFunction.Builder<?> addUniformBonusCount(Enchantment p_79922_,  int p_79923_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## ApplyBonusCount.BinomialWithBonusCount

*record* `net.minecraft.world.level.storage.loot.functions.ApplyBonusCount.BinomialWithBonusCount`

Enclosing class: ApplyBonusCount

### Fields
- `private final int extraRounds`
  The field for the extraRounds record component.
- `private final float probability`
  The field for the probability record component.
- `private static final com.mojang.serialization.Codec<ApplyBonusCount.BinomialWithBonusCount> CODEC`
- `public static final ApplyBonusCount.FormulaType TYPE`

### Methods
- `public int calculateNewCount(RandomSource p_230965_,  int p_230966_,  int p_230967_)`
- `public ApplyBonusCount.FormulaType getType()`
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
- `public int extraRounds()`
  Returns the value of the extraRounds record component.
  - returns: the value of the extraRounds record component
- `public float probability()`
  Returns the value of the probability record component.
  - returns: the value of the probability record component

## ApplyBonusCount.Formula

*interface* `net.minecraft.world.level.storage.loot.functions.ApplyBonusCount.Formula`

Enclosing class: ApplyBonusCount

### Methods
- `int calculateNewCount(RandomSource p_230968_,  int p_230969_,  int p_230970_)`
- `ApplyBonusCount.FormulaType getType()`

## ApplyBonusCount.FormulaType

*record* `net.minecraft.world.level.storage.loot.functions.ApplyBonusCount.FormulaType`

Enclosing class: ApplyBonusCount

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final com.mojang.serialization.Codec<? extends ApplyBonusCount.Formula> codec`
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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public com.mojang.serialization.Codec<? extends ApplyBonusCount.Formula> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## ApplyBonusCount.OreDrops

*record* `net.minecraft.world.level.storage.loot.functions.ApplyBonusCount.OreDrops`

Enclosing class: ApplyBonusCount

### Fields
- `public static final com.mojang.serialization.Codec<ApplyBonusCount.OreDrops> CODEC`
- `public static final ApplyBonusCount.FormulaType TYPE`

### Methods
- `public int calculateNewCount(RandomSource p_230972_,  int p_230973_,  int p_230974_)`
- `public ApplyBonusCount.FormulaType getType()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

## ApplyBonusCount.UniformBonusCount

*record* `net.minecraft.world.level.storage.loot.functions.ApplyBonusCount.UniformBonusCount`

Enclosing class: ApplyBonusCount

### Fields
- `private final int bonusMultiplier`
  The field for the bonusMultiplier record component.
- `public static final com.mojang.serialization.Codec<ApplyBonusCount.UniformBonusCount> CODEC`
- `public static final ApplyBonusCount.FormulaType TYPE`

### Methods
- `public int calculateNewCount(RandomSource p_230976_,  int p_230977_,  int p_230978_)`
- `public ApplyBonusCount.FormulaType getType()`
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
- `public int bonusMultiplier()`
  Returns the value of the bonusMultiplier record component.
  - returns: the value of the bonusMultiplier record component

## ApplyExplosionDecay

*class* `net.minecraft.world.level.storage.loot.functions.ApplyExplosionDecay`

### Fields
- `public static final com.mojang.serialization.Codec<ApplyExplosionDecay> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_80034_,  LootContext p_80035_)`
- `public static LootItemConditionalFunction.Builder<?> explosionDecay()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## Class CopyNameFunction.NameSource

*enum* `net.minecraft.world.level.storage.loot.functions.Class CopyNameFunction.NameSource`

Enclosing class: CopyNameFunction

### Fields
- `public static final com.mojang.serialization.Codec<CopyNameFunction.NameSource> CODEC`
- `private final String name`
- `final LootContextParam<?> param`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static CopyNameFunction.NameSource[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CopyNameFunction.NameSource valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class CopyNbtFunction.MergeStrategy

*enum* `net.minecraft.world.level.storage.loot.functions.Class CopyNbtFunction.MergeStrategy`

Enclosing class: CopyNbtFunction

### Fields
- `public static final com.mojang.serialization.Codec<CopyNbtFunction.MergeStrategy> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static CopyNbtFunction.MergeStrategy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CopyNbtFunction.MergeStrategy valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public abstract void merge(Tag p_80351_,  NbtPathArgument.NbtPath p_80352_,  List<Tag> p_80353_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CopyBlockState

*class* `net.minecraft.world.level.storage.loot.functions.CopyBlockState`

### Fields
- `public static final com.mojang.serialization.Codec<CopyBlockState> CODEC`
- `private final Holder<Block> block`
- `private final Set<Property<?>> properties`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `protected ItemStack run(ItemStack p_80060_,  LootContext p_80061_)`
- `public static CopyBlockState.Builder copyState(Block p_80063_)`
- `private static <T extends Comparable<T>> String serialize(BlockState p_80065_,  Property<T> p_80066_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## CopyBlockState.Builder

*class* `net.minecraft.world.level.storage.loot.functions.CopyBlockState.Builder`

Enclosing class: CopyBlockState

### Fields
- `private final Holder<Block> block`
- `private final com.google.common.collect.ImmutableSet.Builder<Property<?>> properties`

### Methods
- `public CopyBlockState.Builder copy(Property<?> p_80085_)`
- `protected CopyBlockState.Builder getThis()`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## CopyNameFunction

*class* `net.minecraft.world.level.storage.loot.functions.CopyNameFunction`

### Fields
- `public static final com.mojang.serialization.Codec<CopyNameFunction> CODEC`
- `private final CopyNameFunction.NameSource source`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80185_,  LootContext p_80186_)`
- `public static LootItemConditionalFunction.Builder<?> copyName(CopyNameFunction.NameSource p_80188_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## CopyNbtFunction

*class* `net.minecraft.world.level.storage.loot.functions.CopyNbtFunction`

### Fields
- `public static final com.mojang.serialization.Codec<CopyNbtFunction> CODEC`
- `private final NbtProvider source`
- `private final List<CopyNbtFunction.CopyOperation> operations`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80250_,  LootContext p_80251_)`
- `public static CopyNbtFunction.Builder copyData(NbtProvider p_165181_)`
- `public static CopyNbtFunction.Builder copyData(LootContext.EntityTarget p_165179_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## CopyNbtFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.CopyNbtFunction.Builder`

Enclosing class: CopyNbtFunction

### Fields
- `private final NbtProvider source`
- `private final List<CopyNbtFunction.CopyOperation> ops`

### Methods
- `public CopyNbtFunction.Builder copy(String p_80283_,  String p_80284_,  CopyNbtFunction.MergeStrategy p_80285_)`
- `public CopyNbtFunction.Builder copy(String p_80280_,  String p_80281_)`
- `protected CopyNbtFunction.Builder getThis()`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## CopyNbtFunction.CopyOperation

*record* `net.minecraft.world.level.storage.loot.functions.CopyNbtFunction.CopyOperation`

Enclosing class: CopyNbtFunction

### Fields
- `private final CopyNbtFunction.Path sourcePath`
  The field for the sourcePath record component.
- `private final CopyNbtFunction.Path targetPath`
  The field for the targetPath record component.
- `private final CopyNbtFunction.MergeStrategy op`
  The field for the op record component.
- `public static final com.mojang.serialization.Codec<CopyNbtFunction.CopyOperation> CODEC`

### Methods
- `public void apply(Supplier<Tag> p_80306_,  Tag p_80307_)`
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
- `public CopyNbtFunction.Path sourcePath()`
  Returns the value of the sourcePath record component.
  - returns: the value of the sourcePath record component
- `public CopyNbtFunction.Path targetPath()`
  Returns the value of the targetPath record component.
  - returns: the value of the targetPath record component
- `public CopyNbtFunction.MergeStrategy op()`
  Returns the value of the op record component.
  - returns: the value of the op record component

## CopyNbtFunction.Path

*record* `net.minecraft.world.level.storage.loot.functions.CopyNbtFunction.Path`

Enclosing class: CopyNbtFunction

### Fields
- `private final String string`
  The field for the string record component.
- `private final NbtPathArgument.NbtPath path`
  The field for the path record component.
- `public static final com.mojang.serialization.Codec<CopyNbtFunction.Path> CODEC`

### Methods
- `public static CopyNbtFunction.Path of(String p_297516_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
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
- `public String string()`
  Returns the value of the string record component.
  - returns: the value of the string record component
- `public NbtPathArgument.NbtPath path()`
  Returns the value of the path record component.
  - returns: the value of the path record component

## EnchantRandomlyFunction

*class* `net.minecraft.world.level.storage.loot.functions.EnchantRandomlyFunction`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.mojang.serialization.Codec<HolderSet<Enchantment>> ENCHANTMENT_SET_CODEC`
- `public static final com.mojang.serialization.Codec<EnchantRandomlyFunction> CODEC`
- `private final Optional<HolderSet<Enchantment>> enchantments`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_80429_,  LootContext p_80430_)`
- `private static ItemStack enchantItem(ItemStack p_230980_,  Enchantment p_230981_,  RandomSource p_230982_)`
- `public static EnchantRandomlyFunction.Builder randomEnchantment()`
- `public static LootItemConditionalFunction.Builder<?> randomApplicableEnchantment()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## EnchantRandomlyFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.EnchantRandomlyFunction.Builder`

Enclosing class: EnchantRandomlyFunction

### Fields
- `private final List<Holder<Enchantment>> enchantments`

### Methods
- `protected EnchantRandomlyFunction.Builder getThis()`
- `public EnchantRandomlyFunction.Builder withEnchantment(Enchantment p_80445_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## EnchantWithLevelsFunction

*class* `net.minecraft.world.level.storage.loot.functions.EnchantWithLevelsFunction`

### Fields
- `public static final com.mojang.serialization.Codec<EnchantWithLevelsFunction> CODEC`
- `private final NumberProvider levels`
- `private final boolean treasure`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80483_,  LootContext p_80484_)`
- `public static EnchantWithLevelsFunction.Builder enchantWithLevels(NumberProvider p_165197_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## EnchantWithLevelsFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.EnchantWithLevelsFunction.Builder`

Enclosing class: EnchantWithLevelsFunction

### Fields
- `private final NumberProvider levels`
- `private boolean treasure`

### Methods
- `protected EnchantWithLevelsFunction.Builder getThis()`
- `public EnchantWithLevelsFunction.Builder allowTreasure()`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## ExplorationMapFunction

*class* `net.minecraft.world.level.storage.loot.functions.ExplorationMapFunction`

### Fields
- `public static final TagKey<Structure> DEFAULT_DESTINATION`
- `public static final MapDecoration.Type DEFAULT_DECORATION`
- `public static final byte DEFAULT_ZOOM` (= 0x2)
- `public static final int DEFAULT_SEARCH_RADIUS` (= 50)
- `public static final boolean DEFAULT_SKIP_EXISTING` (= true)
- `public static final com.mojang.serialization.Codec<ExplorationMapFunction> CODEC`
- `private final TagKey<Structure> destination`
- `private final MapDecoration.Type mapDecoration`
- `private final byte zoom`
- `private final int searchRadius`
- `private final boolean skipKnownStructures`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80547_,  LootContext p_80548_)`
- `public static ExplorationMapFunction.Builder makeExplorationMap()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## ExplorationMapFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.ExplorationMapFunction.Builder`

Enclosing class: ExplorationMapFunction

### Fields
- `private TagKey<Structure> destination`
- `private MapDecoration.Type mapDecoration`
- `private byte zoom`
- `private int searchRadius`
- `private boolean skipKnownStructures`

### Methods
- `protected ExplorationMapFunction.Builder getThis()`
- `public ExplorationMapFunction.Builder setDestination(TagKey<Structure> p_210659_)`
- `public ExplorationMapFunction.Builder setMapDecoration(MapDecoration.Type p_80574_)`
- `public ExplorationMapFunction.Builder setZoom(byte p_80570_)`
- `public ExplorationMapFunction.Builder setSearchRadius(int p_165206_)`
- `public ExplorationMapFunction.Builder setSkipKnownStructures(boolean p_80576_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## FillPlayerHead

*class* `net.minecraft.world.level.storage.loot.functions.FillPlayerHead`

### Fields
- `public static final com.mojang.serialization.Codec<FillPlayerHead> CODEC`
- `private final LootContext.EntityTarget entityTarget`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80608_,  LootContext p_80609_)`
- `public static LootItemConditionalFunction.Builder<?> fillPlayerHead(LootContext.EntityTarget p_165208_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## FunctionReference

*class* `net.minecraft.world.level.storage.loot.functions.FunctionReference`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<FunctionReference> CODEC`
- `private final ResourceLocation name`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public void validate(ValidationContext p_279281_)`
- `protected ItemStack run(ItemStack p_279458_,  LootContext p_279370_)`
- `public static LootItemConditionalFunction.Builder<?> functionReference(ResourceLocation p_279115_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## FunctionUserBuilder>

*interface* `net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder>`

### Methods
- `T apply(LootItemFunction.Builder p_230990_)`
- `default <E> T apply(Iterable<E> p_230985_,  Function<E,LootItemFunction.Builder> p_230986_)`
- `default <E> T apply(E[] p_230988_,  Function<E,LootItemFunction.Builder> p_230989_)`
- `T unwrap()`

## LimitCount

*class* `net.minecraft.world.level.storage.loot.functions.LimitCount`

### Fields
- `public static final com.mojang.serialization.Codec<LimitCount> CODEC`
- `private final IntRange limiter`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80644_,  LootContext p_80645_)`
- `public static LootItemConditionalFunction.Builder<?> limitCount(IntRange p_165216_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## LootingEnchantFunction

*class* `net.minecraft.world.level.storage.loot.functions.LootingEnchantFunction`

### Fields
- `public static final int NO_LIMIT` (= 0)
- `public static final com.mojang.serialization.Codec<LootingEnchantFunction> CODEC`
- `private final NumberProvider value`
- `private final int limit`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `private boolean hasLimit()`
- `public ItemStack run(ItemStack p_80789_,  LootContext p_80790_)`
- `public static LootingEnchantFunction.Builder lootingMultiplier(NumberProvider p_165230_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## LootingEnchantFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.LootingEnchantFunction.Builder`

Enclosing class: LootingEnchantFunction

### Fields
- `private final NumberProvider count`
- `private int limit`

### Methods
- `protected LootingEnchantFunction.Builder getThis()`
- `public LootingEnchantFunction.Builder setLimit(int p_80807_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## LootItemConditionalFunction

*class* `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`

### Fields
- `protected final List<LootItemCondition> predicates`
- `private final Predicate<LootContext> compositePredicates`

### Methods
- `protected static <T extends LootItemConditionalFunction> com.mojang.datafixers.Products.P1<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<T>,List<LootItemCondition>> commonFields(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<T> p_298596_)`
- `public final ItemStack apply(ItemStack p_80689_,  LootContext p_80690_)`
- `protected abstract ItemStack run(ItemStack p_80679_,  LootContext p_80680_)`
- `public void validate(ValidationContext p_80682_)`
- `protected static LootItemConditionalFunction.Builder<?> simpleBuilder(Function<List<LootItemCondition>,LootItemFunction> p_80684_)`

### Inherited methods
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`
- from `net.minecraft.world.level.storage.loot.functions.LootItemFunction`: `getType`

## LootItemConditionalFunction.Builder>

*class* `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder>`

Enclosing class: LootItemConditionalFunction

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootItemCondition> conditions`

### Methods
- `public T when(LootItemCondition.Builder p_80694_)`
- `public final T unwrap()`
- `protected abstract T getThis()`
- `protected List<LootItemCondition> getConditions()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`
- from `net.minecraft.world.level.storage.loot.functions.LootItemFunction.Builder`: `build`

## LootItemConditionalFunction.DummyBuilder

*class* `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.DummyBuilder`

Enclosing class: LootItemConditionalFunction

### Fields
- `private final Function<List<LootItemCondition>,LootItemFunction> constructor`

### Methods
- `protected LootItemConditionalFunction.DummyBuilder getThis()`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## LootItemFunction

*interface* `net.minecraft.world.level.storage.loot.functions.LootItemFunction`

All Superinterfaces: BiFunction<ItemStack, LootContext, ItemStack>, LootContextUser

### Methods
- `LootItemFunctionType getType()`
- `static Consumer<ItemStack> decorate(BiFunction<ItemStack,LootContext,ItemStack> p_80725_,  Consumer<ItemStack> p_80726_,  LootContext p_80727_)`

### Inherited methods
- from `java.util.function.BiFunction`: `andThen`, `apply`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`

## LootItemFunction.Builder

*interface* `net.minecraft.world.level.storage.loot.functions.LootItemFunction.Builder`

Enclosing interface: LootItemFunction

### Methods
- `LootItemFunction build()`

## LootItemFunctions

*class* `net.minecraft.world.level.storage.loot.functions.LootItemFunctions`

### Fields
- `public static final BiFunction<ItemStack,LootContext,ItemStack> IDENTITY`
- `private static final com.mojang.serialization.Codec<LootItemFunction> TYPED_CODEC`
- `public static final com.mojang.serialization.Codec<LootItemFunction> CODEC`
- `public static final LootItemFunctionType SET_COUNT`
- `public static final LootItemFunctionType ENCHANT_WITH_LEVELS`
- `public static final LootItemFunctionType ENCHANT_RANDOMLY`
- `public static final LootItemFunctionType SET_ENCHANTMENTS`
- `public static final LootItemFunctionType SET_NBT`
- `public static final LootItemFunctionType FURNACE_SMELT`
- `public static final LootItemFunctionType LOOTING_ENCHANT`
- `public static final LootItemFunctionType SET_DAMAGE`
- `public static final LootItemFunctionType SET_ATTRIBUTES`
- `public static final LootItemFunctionType SET_NAME`
- `public static final LootItemFunctionType EXPLORATION_MAP`
- `public static final LootItemFunctionType SET_STEW_EFFECT`
- `public static final LootItemFunctionType COPY_NAME`
- `public static final LootItemFunctionType SET_CONTENTS`
- `public static final LootItemFunctionType LIMIT_COUNT`
- `public static final LootItemFunctionType APPLY_BONUS`
- `public static final LootItemFunctionType SET_LOOT_TABLE`
- `public static final LootItemFunctionType EXPLOSION_DECAY`
- `public static final LootItemFunctionType SET_LORE`
- `public static final LootItemFunctionType FILL_PLAYER_HEAD`
- `public static final LootItemFunctionType COPY_NBT`
- `public static final LootItemFunctionType COPY_STATE`
- `public static final LootItemFunctionType SET_BANNER_PATTERN`
- `public static final LootItemFunctionType SET_POTION`
- `public static final LootItemFunctionType SET_INSTRUMENT`
- `public static final LootItemFunctionType REFERENCE`
- `public static final LootItemFunctionType SEQUENCE`

### Methods
- `private static LootItemFunctionType register(String p_80763_,  com.mojang.serialization.Codec<? extends LootItemFunction> p_300110_)`
- `public static BiFunction<ItemStack,LootContext,ItemStack> compose(List<? extends BiFunction<ItemStack,LootContext,ItemStack>> p_298840_)`

## LootItemFunctionType

*record* `net.minecraft.world.level.storage.loot.functions.LootItemFunctionType`

### Fields
- `private final com.mojang.serialization.Codec<? extends LootItemFunction> codec`
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
- `public com.mojang.serialization.Codec<? extends LootItemFunction> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## SequenceFunction

*class* `net.minecraft.world.level.storage.loot.functions.SequenceFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SequenceFunction> CODEC`
- `public static final com.mojang.serialization.Codec<SequenceFunction> INLINE_CODEC`
- `private final List<LootItemFunction> functions`
- `private final BiFunction<ItemStack,LootContext,ItemStack> compositeFunction`

### Methods
- `public static SequenceFunction of(List<LootItemFunction> p_299752_)`
- `public ItemStack apply(ItemStack p_300658_,  LootContext p_298148_)`
- `public void validate(ValidationContext p_297477_)`
- `public LootItemFunctionType getType()`

### Inherited methods
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetAttributesFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetAttributesFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetAttributesFunction> CODEC`
- `private final List<SetAttributesFunction.Modifier> modifiers`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_80840_,  LootContext p_80841_)`
- `public static SetAttributesFunction.ModifierBuilder modifier(String p_165236_,  Holder<Attribute> p_300622_,  AttributeModifier.Operation p_165238_,  NumberProvider p_165239_)`
- `public static SetAttributesFunction.Builder setAttributes()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetAttributesFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.SetAttributesFunction.Builder`

Enclosing class: SetAttributesFunction

### Fields
- `private final List<SetAttributesFunction.Modifier> modifiers`

### Methods
- `protected SetAttributesFunction.Builder getThis()`
- `public SetAttributesFunction.Builder withModifier(SetAttributesFunction.ModifierBuilder p_165246_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## SetAttributesFunction.Modifier

*record* `net.minecraft.world.level.storage.loot.functions.SetAttributesFunction.Modifier`

Enclosing class: SetAttributesFunction

### Fields
- `private final String name`
  The field for the name record component.
- `private final Holder<Attribute> attribute`
  The field for the attribute record component.
- `private final AttributeModifier.Operation operation`
  The field for the operation record component.
- `private final NumberProvider amount`
  The field for the amount record component.
- `private final List<EquipmentSlot> slots`
  The field for the slots record component.
- `private final Optional<UUID> id`
  The field for the id record component.
- `private static final com.mojang.serialization.Codec<List<EquipmentSlot>> SLOTS_CODEC`
- `public static final com.mojang.serialization.Codec<SetAttributesFunction.Modifier> CODEC`

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
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `public Holder<Attribute> attribute()`
  Returns the value of the attribute record component.
  - returns: the value of the attribute record component
- `public AttributeModifier.Operation operation()`
  Returns the value of the operation record component.
  - returns: the value of the operation record component
- `public NumberProvider amount()`
  Returns the value of the amount record component.
  - returns: the value of the amount record component
- `public List<EquipmentSlot> slots()`
  Returns the value of the slots record component.
  - returns: the value of the slots record component
- `public Optional<UUID> id()`
  Returns the value of the id record component.
  - returns: the value of the id record component

## SetAttributesFunction.ModifierBuilder

*class* `net.minecraft.world.level.storage.loot.functions.SetAttributesFunction.ModifierBuilder`

Enclosing class: SetAttributesFunction

### Fields
- `private final String name`
- `private final Holder<Attribute> attribute`
- `private final AttributeModifier.Operation operation`
- `private final NumberProvider amount`
- `private Optional<UUID> id`
- `private final Set<EquipmentSlot> slots`

### Methods
- `public SetAttributesFunction.ModifierBuilder forSlot(EquipmentSlot p_165269_)`
- `public SetAttributesFunction.ModifierBuilder withUuid(UUID p_165271_)`
- `public SetAttributesFunction.Modifier build()`

## SetBannerPatternFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetBannerPatternFunction`

### Fields
- `private static final com.mojang.serialization.Codec<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> PATTERN_CODEC`
- `public static final com.mojang.serialization.Codec<SetBannerPatternFunction> CODEC`
- `private final List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> patterns`
- `private final boolean append`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `protected ItemStack run(ItemStack p_165280_,  LootContext p_165281_)`
- `public LootItemFunctionType getType()`
- `public static SetBannerPatternFunction.Builder setBannerPattern(boolean p_165283_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetBannerPatternFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.SetBannerPatternFunction.Builder`

Enclosing class: SetBannerPatternFunction

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> patterns`
- `private final boolean append`

### Methods
- `protected SetBannerPatternFunction.Builder getThis()`
- `public LootItemFunction build()`
- `public SetBannerPatternFunction.Builder addPattern(ResourceKey<BannerPattern> p_230996_,  DyeColor p_230997_)`
- `public SetBannerPatternFunction.Builder addPattern(Holder<BannerPattern> p_230999_,  DyeColor p_231000_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## SetContainerContents

*class* `net.minecraft.world.level.storage.loot.functions.SetContainerContents`

### Fields
- `public static final com.mojang.serialization.Codec<SetContainerContents> CODEC`
- `private final Holder<BlockEntityType<?>> type`
- `private final List<LootPoolEntryContainer> entries`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_80911_,  LootContext p_80912_)`
- `public void validate(ValidationContext p_80918_)`
- `public static SetContainerContents.Builder setContents(BlockEntityType<?> p_193037_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetContainerContents.Builder

*class* `net.minecraft.world.level.storage.loot.functions.SetContainerContents.Builder`

Enclosing class: SetContainerContents

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootPoolEntryContainer> entries`
- `private final BlockEntityType<?> type`

### Methods
- `protected SetContainerContents.Builder getThis()`
- `public SetContainerContents.Builder withEntry(LootPoolEntryContainer.Builder<?> p_80931_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## SetContainerLootTable

*class* `net.minecraft.world.level.storage.loot.functions.SetContainerLootTable`

### Fields
- `public static final com.mojang.serialization.Codec<SetContainerLootTable> CODEC`
- `private final ResourceLocation name`
- `private final long seed`
- `private final Holder<BlockEntityType<?>> type`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_80967_,  LootContext p_80968_)`
- `public void validate(ValidationContext p_80970_)`
- `public static LootItemConditionalFunction.Builder<?> withLootTable(BlockEntityType<?> p_193050_,  ResourceLocation p_193051_)`
- `public static LootItemConditionalFunction.Builder<?> withLootTable(BlockEntityType<?> p_193053_,  ResourceLocation p_193054_,  long p_193055_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetEnchantmentsFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetEnchantmentsFunction> CODEC`
- `private final Map<Holder<Enchantment>,NumberProvider> enchantments`
- `private final boolean add`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_165346_,  LootContext p_165347_)`
- `private static void updateEnchantment(Map<Enchantment,Integer> p_165356_,  Enchantment p_165357_,  int p_165358_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetEnchantmentsFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.SetEnchantmentsFunction.Builder`

Enclosing class: SetEnchantmentsFunction

### Fields
- `private final com.google.common.collect.ImmutableMap.Builder<Holder<Enchantment>,NumberProvider> enchantments`
- `private final boolean add`

### Methods
- `protected SetEnchantmentsFunction.Builder getThis()`
- `public SetEnchantmentsFunction.Builder withEnchantment(Enchantment p_165375_,  NumberProvider p_165376_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## SetInstrumentFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetInstrumentFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetInstrumentFunction> CODEC`
- `private final TagKey<Instrument> options`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_231017_,  LootContext p_231018_)`
- `public static LootItemConditionalFunction.Builder<?> setInstrumentOptions(TagKey<Instrument> p_231012_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetItemCountFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetItemCountFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetItemCountFunction> CODEC`
- `private final NumberProvider value`
- `private final boolean add`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_81006_,  LootContext p_81007_)`
- `public static LootItemConditionalFunction.Builder<?> setCount(NumberProvider p_165413_)`
- `public static LootItemConditionalFunction.Builder<?> setCount(NumberProvider p_165415_,  boolean p_165416_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetItemDamageFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetItemDamageFunction`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<SetItemDamageFunction> CODEC`
- `private final NumberProvider damage`
- `private final boolean add`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_81048_,  LootContext p_81049_)`
- `public static LootItemConditionalFunction.Builder<?> setDamage(NumberProvider p_165431_)`
- `public static LootItemConditionalFunction.Builder<?> setDamage(NumberProvider p_165433_,  boolean p_165434_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetLoreFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetLoreFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetLoreFunction> CODEC`
- `private final boolean replace`
- `private final List<Component> lore`
- `private final Optional<LootContext.EntityTarget> resolutionContext`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_81089_,  LootContext p_81090_)`
- `@Nullable private ListTag getLoreTag(ItemStack p_81092_,  boolean p_81093_)`
- `public static SetLoreFunction.Builder setLore()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetLoreFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.SetLoreFunction.Builder`

Enclosing class: SetLoreFunction

### Fields
- `private boolean replace`
- `private Optional<LootContext.EntityTarget> resolutionContext`
- `private final com.google.common.collect.ImmutableList.Builder<Component> lore`

### Methods
- `public SetLoreFunction.Builder setReplace(boolean p_165454_)`
- `public SetLoreFunction.Builder setResolutionContext(LootContext.EntityTarget p_165450_)`
- `public SetLoreFunction.Builder addLine(Component p_165452_)`
- `protected SetLoreFunction.Builder getThis()`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## SetNameFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetNameFunction`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<SetNameFunction> CODEC`
- `private final Optional<Component> name`
- `private final Optional<LootContext.EntityTarget> resolutionContext`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public static UnaryOperator<Component> createResolver(LootContext p_81140_,  @Nullable  LootContext.EntityTarget p_81141_)`
- `public ItemStack run(ItemStack p_81137_,  LootContext p_81138_)`
- `public static LootItemConditionalFunction.Builder<?> setName(Component p_165458_)`
- `public static LootItemConditionalFunction.Builder<?> setName(Component p_165460_,  LootContext.EntityTarget p_165461_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetNbtFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetNbtFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetNbtFunction> CODEC`
- `private final CompoundTag tag`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_81183_,  LootContext p_81184_)`
- `@Deprecated public static LootItemConditionalFunction.Builder<?> setTag(CompoundTag p_81188_)` (deprecated)

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetPotionFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetPotionFunction`

### Fields
- `public static final com.mojang.serialization.Codec<SetPotionFunction> CODEC`
- `private final Holder<Potion> potion`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_193073_,  LootContext p_193074_)`
- `public static LootItemConditionalFunction.Builder<?> setPotion(Potion p_193076_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`

## SetStewEffectFunction

*class* `net.minecraft.world.level.storage.loot.functions.SetStewEffectFunction`

### Fields
- `private static final com.mojang.serialization.Codec<List<SetStewEffectFunction.EffectEntry>> EFFECTS_LIST`
- `public static final com.mojang.serialization.Codec<SetStewEffectFunction> CODEC`
- `private final List<SetStewEffectFunction.EffectEntry> effects`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public ItemStack run(ItemStack p_81223_,  LootContext p_81224_)`
- `public static SetStewEffectFunction.Builder stewEffect()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`

## SetStewEffectFunction.Builder

*class* `net.minecraft.world.level.storage.loot.functions.SetStewEffectFunction.Builder`

Enclosing class: SetStewEffectFunction

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<SetStewEffectFunction.EffectEntry> effects`

### Methods
- `protected SetStewEffectFunction.Builder getThis()`
- `public SetStewEffectFunction.Builder withEffect(MobEffect p_165473_,  NumberProvider p_165474_)`
- `public LootItemFunction build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction.Builder`: `getConditions`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## SetStewEffectFunction.EffectEntry

*record* `net.minecraft.world.level.storage.loot.functions.SetStewEffectFunction.EffectEntry`

Enclosing class: SetStewEffectFunction

### Fields
- `private final Holder<MobEffect> effect`
  The field for the effect record component.
- `private final NumberProvider duration`
  The field for the duration record component.
- `public static final com.mojang.serialization.Codec<SetStewEffectFunction.EffectEntry> CODEC`

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
- `public Holder<MobEffect> effect()`
  Returns the value of the effect record component.
  - returns: the value of the effect record component
- `public NumberProvider duration()`
  Returns the value of the duration record component.
  - returns: the value of the duration record component

## SmeltItemFunction

*class* `net.minecraft.world.level.storage.loot.functions.SmeltItemFunction`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<SmeltItemFunction> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `predicates`

### Methods
- `public LootItemFunctionType getType()`
- `public ItemStack run(ItemStack p_81268_,  LootContext p_81269_)`
- `public static LootItemConditionalFunction.Builder<?> smelted()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.functions.LootItemConditionalFunction`: `apply`, `commonFields`, `simpleBuilder`, `validate`
- from `java.util.function.BiFunction`: `andThen`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`
