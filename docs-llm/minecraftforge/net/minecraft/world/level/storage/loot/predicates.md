# net.minecraft.world.level.storage.loot.predicates

- [AllOfCondition](#allofcondition)
- [AllOfCondition.Builder](#allofcondition.builder)
- [AnyOfCondition](#anyofcondition)
- [AnyOfCondition.Builder](#anyofcondition.builder)
- [BonusLevelTableCondition](#bonusleveltablecondition)
- [CompositeLootItemCondition](#compositelootitemcondition)
- [CompositeLootItemCondition.Builder](#compositelootitemcondition.builder)
- [ConditionReference](#conditionreference)
- [ConditionUserBuilder>](#conditionuserbuilder)
- [DamageSourceCondition](#damagesourcecondition)
- [EntityHasScoreCondition](#entityhasscorecondition)
- [EntityHasScoreCondition.Builder](#entityhasscorecondition.builder)
- [ExplosionCondition](#explosioncondition)
- [InvertedLootItemCondition](#invertedlootitemcondition)
- [LocationCheck](#locationcheck)
- [LootItemBlockStatePropertyCondition](#lootitemblockstatepropertycondition)
- [LootItemBlockStatePropertyCondition.Builder](#lootitemblockstatepropertycondition.builder)
- [LootItemCondition](#lootitemcondition)
- [LootItemCondition.Builder](#lootitemcondition.builder)
- [LootItemConditions](#lootitemconditions)
- [LootItemConditionType](#lootitemconditiontype)
- [LootItemEntityPropertyCondition](#lootitementitypropertycondition)
- [LootItemKilledByPlayerCondition](#lootitemkilledbyplayercondition)
- [LootItemRandomChanceCondition](#lootitemrandomchancecondition)
- [LootItemRandomChanceWithLootingCondition](#lootitemrandomchancewithlootingcondition)
- [MatchTool](#matchtool)
- [TimeCheck](#timecheck)
- [TimeCheck.Builder](#timecheck.builder)
- [ValueCheckCondition](#valuecheckcondition)
- [WeatherCheck](#weathercheck)
- [WeatherCheck.Builder](#weathercheck.builder)
## AllOfCondition

*class* `net.minecraft.world.level.storage.loot.predicates.AllOfCondition`

### Fields
- `public static final com.mojang.serialization.Codec<AllOfCondition> CODEC`
- `public static final com.mojang.serialization.Codec<AllOfCondition> INLINE_CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition`: `terms`

### Methods
- `public static AllOfCondition allOf(List<LootItemCondition> p_300418_)`
- `public LootItemConditionType getType()`
- `public static AllOfCondition.Builder allOf(LootItemCondition.Builder... p_286873_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition`: `createCodec`, `createInlineCodec`, `test`, `validate`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## AllOfCondition.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.AllOfCondition.Builder`

Enclosing class: AllOfCondition

### Methods
- `public AllOfCondition.Builder and(LootItemCondition.Builder p_286760_)`
- `protected LootItemCondition create(List<LootItemCondition> p_299819_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition.Builder`: `addTerm`, `build`
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `invert`, `or`

## AnyOfCondition

*class* `net.minecraft.world.level.storage.loot.predicates.AnyOfCondition`

### Fields
- `public static final com.mojang.serialization.Codec<AnyOfCondition> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition`: `terms`

### Methods
- `public LootItemConditionType getType()`
- `public static AnyOfCondition.Builder anyOf(LootItemCondition.Builder... p_286239_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition`: `createCodec`, `createInlineCodec`, `test`, `validate`
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## AnyOfCondition.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.AnyOfCondition.Builder`

Enclosing class: AnyOfCondition

### Methods
- `public AnyOfCondition.Builder or(LootItemCondition.Builder p_286344_)`
- `protected LootItemCondition create(List<LootItemCondition> p_297863_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition.Builder`: `addTerm`, `build`
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `and`, `invert`

## BonusLevelTableCondition

*record* `net.minecraft.world.level.storage.loot.predicates.BonusLevelTableCondition`

### Fields
- `private final Holder<Enchantment> enchantment`
  The field for the enchantment record component.
- `private final List<Float> values`
  The field for the values record component.
- `public static final com.mojang.serialization.Codec<BonusLevelTableCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81521_)`
- `public static LootItemCondition.Builder bonusLevelFlatChance(Enchantment p_81518_,  float... p_81519_)`
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
- `public Holder<Enchantment> enchantment()`
  Returns the value of the enchantment record component.
  - returns: the value of the enchantment record component
- `public List<Float> values()`
  Returns the value of the values record component.
  - returns: the value of the values record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## CompositeLootItemCondition

*class* `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition`

### Fields
- `protected final List<LootItemCondition> terms`
- `private final Predicate<LootContext> composedPredicate`

### Methods
- `protected static <T extends CompositeLootItemCondition> com.mojang.serialization.Codec<T> createCodec(Function<List<LootItemCondition>,T> p_297590_)`
- `protected static <T extends CompositeLootItemCondition> com.mojang.serialization.Codec<T> createInlineCodec(Function<List<LootItemCondition>,T> p_298800_)`
- `public final boolean test(LootContext p_286298_)`
- `public void validate(ValidationContext p_286819_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition`: `getType`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## CompositeLootItemCondition.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.CompositeLootItemCondition.Builder`

Enclosing class: CompositeLootItemCondition

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootItemCondition> terms`

### Methods
- `public void addTerm(LootItemCondition.Builder p_286677_)`
- `public LootItemCondition build()`
- `protected abstract LootItemCondition create(List<LootItemCondition> p_300168_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `and`, `invert`, `or`

## ConditionReference

*record* `net.minecraft.world.level.storage.loot.predicates.ConditionReference`

### Fields
- `private final ResourceLocation name`
  The field for the name record component.
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.mojang.serialization.Codec<ConditionReference> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public void validate(ValidationContext p_81560_)`
- `public boolean test(LootContext p_81558_)`
- `public static LootItemCondition.Builder conditionReference(ResourceLocation p_165481_)`
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
- `public ResourceLocation name()`
  Returns the value of the name record component.
  - returns: the value of the name record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## ConditionUserBuilder>

*interface* `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder>`

### Methods
- `T when(LootItemCondition.Builder p_231043_)`
- `default <E> T when(Iterable<E> p_231041_,  Function<E,LootItemCondition.Builder> p_231042_)`
- `T unwrap()`

## DamageSourceCondition

*record* `net.minecraft.world.level.storage.loot.predicates.DamageSourceCondition`

### Fields
- `private final Optional<DamageSourcePredicate> predicate`
  The field for the predicate record component.
- `public static final com.mojang.serialization.Codec<DamageSourceCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81592_)`
- `public static LootItemCondition.Builder hasDamageSource(DamageSourcePredicate.Builder p_81590_)`
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
- `public Optional<DamageSourcePredicate> predicate()`
  Returns the value of the predicate record component.
  - returns: the value of the predicate record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## EntityHasScoreCondition

*record* `net.minecraft.world.level.storage.loot.predicates.EntityHasScoreCondition`

### Fields
- `private final Map<String,IntRange> scores`
  The field for the scores record component.
- `private final LootContext.EntityTarget entityTarget`
  The field for the entityTarget record component.
- `public static final com.mojang.serialization.Codec<EntityHasScoreCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81631_)`
- `protected boolean hasScore(LootContext p_165491_,  Entity p_165492_,  Scoreboard p_165493_,  String p_165494_,  IntRange p_165495_)`
- `public static EntityHasScoreCondition.Builder hasScores(LootContext.EntityTarget p_165489_)`
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
- `public Map<String,IntRange> scores()`
  Returns the value of the scores record component.
  - returns: the value of the scores record component
- `public LootContext.EntityTarget entityTarget()`
  Returns the value of the entityTarget record component.
  - returns: the value of the entityTarget record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## EntityHasScoreCondition.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.EntityHasScoreCondition.Builder`

Enclosing class: EntityHasScoreCondition

### Fields
- `private final com.google.common.collect.ImmutableMap.Builder<String,IntRange> scores`
- `private final LootContext.EntityTarget entityTarget`

### Methods
- `public EntityHasScoreCondition.Builder withScore(String p_165501_,  IntRange p_165502_)`
- `public LootItemCondition build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `and`, `invert`, `or`

## ExplosionCondition

*class* `net.minecraft.world.level.storage.loot.predicates.ExplosionCondition`

### Fields
- `private static final ExplosionCondition INSTANCE`
- `public static final com.mojang.serialization.Codec<ExplosionCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81659_)`
- `public static LootItemCondition.Builder survivesExplosion()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## InvertedLootItemCondition

*record* `net.minecraft.world.level.storage.loot.predicates.InvertedLootItemCondition`

### Fields
- `private final LootItemCondition term`
  The field for the term record component.
- `public static final com.mojang.serialization.Codec<InvertedLootItemCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public boolean test(LootContext p_81689_)`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public void validate(ValidationContext p_81691_)`
- `public static LootItemCondition.Builder invert(LootItemCondition.Builder p_81695_)`
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
- `public LootItemCondition term()`
  Returns the value of the term record component.
  - returns: the value of the term record component

### Inherited methods
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## LocationCheck

*record* `net.minecraft.world.level.storage.loot.predicates.LocationCheck`

### Fields
- `private final Optional<LocationPredicate> predicate`
  The field for the predicate record component.
- `private final BlockPos offset`
  The field for the offset record component.
- `private static final com.mojang.serialization.MapCodec<BlockPos> OFFSET_CODEC`
- `public static final com.mojang.serialization.Codec<LocationCheck> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public boolean test(LootContext p_81731_)`
- `public static LootItemCondition.Builder checkLocation(LocationPredicate.Builder p_81726_)`
- `public static LootItemCondition.Builder checkLocation(LocationPredicate.Builder p_81728_,  BlockPos p_81729_)`
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
- `public Optional<LocationPredicate> predicate()`
  Returns the value of the predicate record component.
  - returns: the value of the predicate record component
- `public BlockPos offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## LootItemBlockStatePropertyCondition

*record* `net.minecraft.world.level.storage.loot.predicates.LootItemBlockStatePropertyCondition`

### Fields
- `private final Holder<Block> block`
  The field for the block record component.
- `private final Optional<StatePropertiesPredicate> properties`
  The field for the properties record component.
- `public static final com.mojang.serialization.Codec<LootItemBlockStatePropertyCondition> CODEC`

### Methods
- `private static com.mojang.serialization.DataResult<LootItemBlockStatePropertyCondition> validate(LootItemBlockStatePropertyCondition p_298673_)`
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81772_)`
- `public static LootItemBlockStatePropertyCondition.Builder hasBlockStateProperties(Block p_81770_)`
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
- `public Holder<Block> block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public Optional<StatePropertiesPredicate> properties()`
  Returns the value of the properties record component.
  - returns: the value of the properties record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## LootItemBlockStatePropertyCondition.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.LootItemBlockStatePropertyCondition.Builder`

Enclosing class: LootItemBlockStatePropertyCondition

### Fields
- `private final Holder<Block> block`
- `private Optional<StatePropertiesPredicate> properties`

### Methods
- `public LootItemBlockStatePropertyCondition.Builder setProperties(StatePropertiesPredicate.Builder p_81785_)`
- `public LootItemCondition build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `and`, `invert`, `or`

## LootItemCondition

*interface* `net.minecraft.world.level.storage.loot.predicates.LootItemCondition`

All Superinterfaces: LootContextUser, Predicate<LootContext>

### Methods
- `LootItemConditionType getType()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`, `test`

## LootItemCondition.Builder

*interface* `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`

Enclosing interface: LootItemCondition

### Methods
- `LootItemCondition build()`
- `default LootItemCondition.Builder invert()`
- `default AnyOfCondition.Builder or(LootItemCondition.Builder p_286316_)`
- `default AllOfCondition.Builder and(LootItemCondition.Builder p_286363_)`

## LootItemConditions

*class* `net.minecraft.world.level.storage.loot.predicates.LootItemConditions`

### Fields
- `private static final com.mojang.serialization.Codec<LootItemCondition> TYPED_CODEC`
- `public static final com.mojang.serialization.Codec<LootItemCondition> CODEC`
- `public static final LootItemConditionType INVERTED`
- `public static final LootItemConditionType ANY_OF`
- `public static final LootItemConditionType ALL_OF`
- `public static final LootItemConditionType RANDOM_CHANCE`
- `public static final LootItemConditionType RANDOM_CHANCE_WITH_LOOTING`
- `public static final LootItemConditionType ENTITY_PROPERTIES`
- `public static final LootItemConditionType KILLED_BY_PLAYER`
- `public static final LootItemConditionType ENTITY_SCORES`
- `public static final LootItemConditionType BLOCK_STATE_PROPERTY`
- `public static final LootItemConditionType MATCH_TOOL`
- `public static final LootItemConditionType TABLE_BONUS`
- `public static final LootItemConditionType SURVIVES_EXPLOSION`
- `public static final LootItemConditionType DAMAGE_SOURCE_PROPERTIES`
- `public static final LootItemConditionType LOCATION_CHECK`
- `public static final LootItemConditionType WEATHER_CHECK`
- `public static final LootItemConditionType REFERENCE`
- `public static final LootItemConditionType TIME_CHECK`
- `public static final LootItemConditionType VALUE_CHECK`

### Methods
- `private static LootItemConditionType register(String p_81832_,  com.mojang.serialization.Codec<? extends LootItemCondition> p_300489_)`
- `public static <T> Predicate<T> andConditions(List<? extends Predicate<T>> p_300844_)`
- `public static <T> Predicate<T> orConditions(List<? extends Predicate<T>> p_298478_)`

## LootItemConditionType

*record* `net.minecraft.world.level.storage.loot.predicates.LootItemConditionType`

### Fields
- `private final com.mojang.serialization.Codec<? extends LootItemCondition> codec`
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
- `public com.mojang.serialization.Codec<? extends LootItemCondition> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## LootItemEntityPropertyCondition

*record* `net.minecraft.world.level.storage.loot.predicates.LootItemEntityPropertyCondition`

### Fields
- `private final Optional<EntityPredicate> predicate`
  The field for the predicate record component.
- `private final LootContext.EntityTarget entityTarget`
  The field for the entityTarget record component.
- `public static final com.mojang.serialization.Codec<LootItemEntityPropertyCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81871_)`
- `public static LootItemCondition.Builder entityPresent(LootContext.EntityTarget p_81863_)`
- `public static LootItemCondition.Builder hasProperties(LootContext.EntityTarget p_81865_,  EntityPredicate.Builder p_81866_)`
- `public static LootItemCondition.Builder hasProperties(LootContext.EntityTarget p_81868_,  EntityPredicate p_81869_)`
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
- `public Optional<EntityPredicate> predicate()`
  Returns the value of the predicate record component.
  - returns: the value of the predicate record component
- `public LootContext.EntityTarget entityTarget()`
  Returns the value of the entityTarget record component.
  - returns: the value of the entityTarget record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## LootItemKilledByPlayerCondition

*class* `net.minecraft.world.level.storage.loot.predicates.LootItemKilledByPlayerCondition`

### Fields
- `private static final LootItemKilledByPlayerCondition INSTANCE`
- `public static final com.mojang.serialization.Codec<LootItemKilledByPlayerCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81899_)`
- `public static LootItemCondition.Builder killedByPlayer()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## LootItemRandomChanceCondition

*record* `net.minecraft.world.level.storage.loot.predicates.LootItemRandomChanceCondition`

### Fields
- `private final float probability`
  The field for the probability record component.
- `public static final com.mojang.serialization.Codec<LootItemRandomChanceCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public boolean test(LootContext p_81930_)`
- `public static LootItemCondition.Builder randomChance(float p_81928_)`
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
- `public float probability()`
  Returns the value of the probability record component.
  - returns: the value of the probability record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## LootItemRandomChanceWithLootingCondition

*record* `net.minecraft.world.level.storage.loot.predicates.LootItemRandomChanceWithLootingCondition`

### Fields
- `private final float percent`
  The field for the percent record component.
- `private final float lootingMultiplier`
  The field for the lootingMultiplier record component.
- `public static final com.mojang.serialization.Codec<LootItemRandomChanceWithLootingCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_81967_)`
- `public static LootItemCondition.Builder randomChanceAndLootingBoost(float p_81964_,  float p_81965_)`
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
- `public float percent()`
  Returns the value of the percent record component.
  - returns: the value of the percent record component
- `public float lootingMultiplier()`
  Returns the value of the lootingMultiplier record component.
  - returns: the value of the lootingMultiplier record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## MatchTool

*record* `net.minecraft.world.level.storage.loot.predicates.MatchTool`

### Fields
- `private final Optional<ItemPredicate> predicate`
  The field for the predicate record component.
- `public static final com.mojang.serialization.Codec<MatchTool> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_82000_)`
- `public static LootItemCondition.Builder toolMatches(ItemPredicate.Builder p_81998_)`
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
- `public Optional<ItemPredicate> predicate()`
  Returns the value of the predicate record component.
  - returns: the value of the predicate record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## TimeCheck

*record* `net.minecraft.world.level.storage.loot.predicates.TimeCheck`

### Fields
- `private final Optional<Long> period`
  The field for the period record component.
- `private final IntRange value`
  The field for the value record component.
- `public static final com.mojang.serialization.Codec<TimeCheck> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_82033_)`
- `public static TimeCheck.Builder time(IntRange p_165510_)`
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
- `public Optional<Long> period()`
  Returns the value of the period record component.
  - returns: the value of the period record component
- `public IntRange value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## TimeCheck.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.TimeCheck.Builder`

Enclosing class: TimeCheck

### Fields
- `private Optional<Long> period`
- `private final IntRange value`

### Methods
- `public TimeCheck.Builder setPeriod(long p_165517_)`
- `public TimeCheck build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `and`, `invert`, `or`

## ValueCheckCondition

*record* `net.minecraft.world.level.storage.loot.predicates.ValueCheckCondition`

### Fields
- `private final NumberProvider provider`
  The field for the provider record component.
- `private final IntRange range`
  The field for the range record component.
- `public static final com.mojang.serialization.Codec<ValueCheckCondition> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public boolean test(LootContext p_165527_)`
- `public static LootItemCondition.Builder hasValue(NumberProvider p_165529_,  IntRange p_165530_)`
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
- `public NumberProvider provider()`
  Returns the value of the provider record component.
  - returns: the value of the provider record component
- `public IntRange range()`
  Returns the value of the range record component.
  - returns: the value of the range record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## WeatherCheck

*record* `net.minecraft.world.level.storage.loot.predicates.WeatherCheck`

### Fields
- `private final Optional<Boolean> isRaining`
  The field for the isRaining record component.
- `private final Optional<Boolean> isThundering`
  The field for the isThundering record component.
- `public static final com.mojang.serialization.Codec<WeatherCheck> CODEC`

### Methods
- `public LootItemConditionType getType()`
- `public boolean test(LootContext p_82066_)`
- `public static WeatherCheck.Builder weather()`
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
- `public Optional<Boolean> isRaining()`
  Returns the value of the isRaining record component.
  - returns: the value of the isRaining record component
- `public Optional<Boolean> isThundering()`
  Returns the value of the isThundering record component.
  - returns: the value of the isThundering record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`
- from `java.util.function.Predicate`: `and`, `negate`, `or`

## WeatherCheck.Builder

*class* `net.minecraft.world.level.storage.loot.predicates.WeatherCheck.Builder`

Enclosing class: WeatherCheck

### Fields
- `private Optional<Boolean> isRaining`
- `private Optional<Boolean> isThundering`

### Methods
- `public WeatherCheck.Builder setRaining(boolean p_298370_)`
- `public WeatherCheck.Builder setThundering(boolean p_299917_)`
- `public WeatherCheck build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.LootItemCondition.Builder`: `and`, `invert`, `or`
