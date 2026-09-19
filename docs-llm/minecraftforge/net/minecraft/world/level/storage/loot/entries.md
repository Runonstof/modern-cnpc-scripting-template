# net.minecraft.world.level.storage.loot.entries

- [AlternativesEntry](#alternativesentry)
- [AlternativesEntry.Builder](#alternativesentry.builder)
- [ComposableEntryContainer](#composableentrycontainer)
- [CompositeEntryBase](#compositeentrybase)
- [CompositeEntryBase.CompositeEntryConstructor](#compositeentrybase.compositeentryconstructor)
- [DynamicLoot](#dynamicloot)
- [EmptyLootItem](#emptylootitem)
- [EntryGroup](#entrygroup)
- [EntryGroup.Builder](#entrygroup.builder)
- [LootItem](#lootitem)
- [LootPoolEntries](#lootpoolentries)
- [LootPoolEntry](#lootpoolentry)
- [LootPoolEntryContainer](#lootpoolentrycontainer)
- [LootPoolEntryContainer.Builder>](#lootpoolentrycontainer.builder)
- [LootPoolEntryType](#lootpoolentrytype)
- [LootPoolSingletonContainer](#lootpoolsingletoncontainer)
- [LootPoolSingletonContainer.Builder>](#lootpoolsingletoncontainer.builder)
- [LootPoolSingletonContainer.DummyBuilder](#lootpoolsingletoncontainer.dummybuilder)
- [LootPoolSingletonContainer.EntryBase](#lootpoolsingletoncontainer.entrybase)
- [LootPoolSingletonContainer.EntryConstructor](#lootpoolsingletoncontainer.entryconstructor)
- [LootTableReference](#loottablereference)
- [SequentialEntry](#sequentialentry)
- [SequentialEntry.Builder](#sequentialentry.builder)
- [TagEntry](#tagentry)
## AlternativesEntry

*class* `net.minecraft.world.level.storage.loot.entries.AlternativesEntry`

### Fields
- `public static final com.mojang.serialization.Codec<AlternativesEntry> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`: `children`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `protected ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_298385_)`
- `public void validate(ValidationContext p_79388_)`
- `public static AlternativesEntry.Builder alternatives(LootPoolEntryContainer.Builder<?>... p_79396_)`
- `public static <E> AlternativesEntry.Builder alternatives(Collection<E> p_230934_,  Function<E,LootPoolEntryContainer.Builder<?>> p_230935_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`: `createCodec`, `expand`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## AlternativesEntry.Builder

*class* `net.minecraft.world.level.storage.loot.entries.AlternativesEntry.Builder`

Enclosing class: AlternativesEntry

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootPoolEntryContainer> entries`

### Methods
- `protected AlternativesEntry.Builder getThis()`
- `public AlternativesEntry.Builder otherwise(LootPoolEntryContainer.Builder<?> p_79402_)`
- `public LootPoolEntryContainer build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer.Builder`: `append`, `getConditions`, `then`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## ComposableEntryContainer

*interface* `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`

### Fields
- `static final ComposableEntryContainer ALWAYS_FALSE`
- `static final ComposableEntryContainer ALWAYS_TRUE`

### Methods
- `boolean expand(LootContext p_79426_,  Consumer<LootPoolEntry> p_79427_)`
- `default ComposableEntryContainer and(ComposableEntryContainer p_79412_)`
- `default ComposableEntryContainer or(ComposableEntryContainer p_79421_)`

## CompositeEntryBase

*class* `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`

### Fields
- `protected final List<LootPoolEntryContainer> children`
- `private final ComposableEntryContainer composedChildren`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public void validate(ValidationContext p_79434_)`
- `protected abstract ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_298994_)`
- `public final boolean expand(LootContext p_79439_,  Consumer<LootPoolEntry> p_79440_)`
- `public static <T extends CompositeEntryBase> com.mojang.serialization.Codec<T> createCodec(CompositeEntryBase.CompositeEntryConstructor<T> p_300261_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`, `getType`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## CompositeEntryBase.CompositeEntryConstructor

*interface* `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase.CompositeEntryConstructor`

Enclosing class: CompositeEntryBase

### Methods
- `T create(List<LootPoolEntryContainer> p_297889_,  List<LootItemCondition> p_300348_)`

## DynamicLoot

*class* `net.minecraft.world.level.storage.loot.entries.DynamicLoot`

### Fields
- `public static final com.mojang.serialization.Codec<DynamicLoot> CODEC`
- `private final ResourceLocation name`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `compositeFunction`, `DEFAULT_QUALITY`, `DEFAULT_WEIGHT`, `functions`, `quality`, `weight`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `public void createItemStack(Consumer<ItemStack> p_79481_,  LootContext p_79482_)`
- `public static LootPoolSingletonContainer.Builder<?> dynamicEntry(ResourceLocation p_79484_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `expand`, `simpleBuilder`, `singletonFields`, `validate`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## EmptyLootItem

*class* `net.minecraft.world.level.storage.loot.entries.EmptyLootItem`

### Fields
- `public static final com.mojang.serialization.Codec<EmptyLootItem> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `compositeFunction`, `DEFAULT_QUALITY`, `DEFAULT_WEIGHT`, `functions`, `quality`, `weight`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `public void createItemStack(Consumer<ItemStack> p_79531_,  LootContext p_79532_)`
- `public static LootPoolSingletonContainer.Builder<?> emptyItem()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `expand`, `simpleBuilder`, `singletonFields`, `validate`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## EntryGroup

*class* `net.minecraft.world.level.storage.loot.entries.EntryGroup`

### Fields
- `public static final com.mojang.serialization.Codec<EntryGroup> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`: `children`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `protected ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_300505_)`
- `public static EntryGroup.Builder list(LootPoolEntryContainer.Builder<?>... p_165138_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`: `createCodec`, `expand`, `validate`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## EntryGroup.Builder

*class* `net.minecraft.world.level.storage.loot.entries.EntryGroup.Builder`

Enclosing class: EntryGroup

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootPoolEntryContainer> entries`

### Methods
- `protected EntryGroup.Builder getThis()`
- `public EntryGroup.Builder append(LootPoolEntryContainer.Builder<?> p_165145_)`
- `public LootPoolEntryContainer build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer.Builder`: `getConditions`, `otherwise`, `then`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## LootItem

*class* `net.minecraft.world.level.storage.loot.entries.LootItem`

### Fields
- `public static final com.mojang.serialization.Codec<LootItem> CODEC`
- `private final Holder<Item> item`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `compositeFunction`, `DEFAULT_QUALITY`, `DEFAULT_WEIGHT`, `functions`, `quality`, `weight`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `public void createItemStack(Consumer<ItemStack> p_79590_,  LootContext p_79591_)`
- `public static LootPoolSingletonContainer.Builder<?> lootTableItem(ItemLike p_79580_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `expand`, `simpleBuilder`, `singletonFields`, `validate`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## LootPoolEntries

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolEntries`

### Fields
- `public static final com.mojang.serialization.Codec<LootPoolEntryContainer> CODEC`
- `public static final LootPoolEntryType EMPTY`
- `public static final LootPoolEntryType ITEM`
- `public static final LootPoolEntryType REFERENCE`
- `public static final LootPoolEntryType DYNAMIC`
- `public static final LootPoolEntryType TAG`
- `public static final LootPoolEntryType ALTERNATIVES`
- `public static final LootPoolEntryType SEQUENCE`
- `public static final LootPoolEntryType GROUP`

### Methods
- `private static LootPoolEntryType register(String p_79630_,  com.mojang.serialization.Codec<? extends LootPoolEntryContainer> p_300087_)`

## LootPoolEntry

*interface* `net.minecraft.world.level.storage.loot.entries.LootPoolEntry`

### Methods
- `int getWeight(float p_79632_)`
- `void createItemStack(Consumer<ItemStack> p_79633_,  LootContext p_79634_)`

## LootPoolEntryContainer

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`

### Fields
- `protected final List<LootItemCondition> conditions`
- `private final Predicate<LootContext> compositeCondition`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `protected static <T extends LootPoolEntryContainer> com.mojang.datafixers.Products.P1<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<T>,List<LootItemCondition>> commonFields(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<T> p_297717_)`
- `public void validate(ValidationContext p_79641_)`
- `protected final boolean canRun(LootContext p_79640_)`
- `public abstract LootPoolEntryType getType()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `expand`, `or`

## LootPoolEntryContainer.Builder>

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer.Builder>`

Enclosing class: LootPoolEntryContainer

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootItemCondition> conditions`

### Methods
- `protected abstract T getThis()`
- `public T when(LootItemCondition.Builder p_79646_)`
- `public final T unwrap()`
- `protected List<LootItemCondition> getConditions()`
- `public AlternativesEntry.Builder otherwise(LootPoolEntryContainer.Builder<?> p_79644_)`
- `public EntryGroup.Builder append(LootPoolEntryContainer.Builder<?> p_165148_)`
- `public SequentialEntry.Builder then(LootPoolEntryContainer.Builder<?> p_165149_)`
- `public abstract LootPoolEntryContainer build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## LootPoolEntryType

*record* `net.minecraft.world.level.storage.loot.entries.LootPoolEntryType`

### Fields
- `private final com.mojang.serialization.Codec<? extends LootPoolEntryContainer> codec`
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
- `public com.mojang.serialization.Codec<? extends LootPoolEntryContainer> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## LootPoolSingletonContainer

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`

### Fields
- `public static final int DEFAULT_WEIGHT` (= 1)
- `public static final int DEFAULT_QUALITY` (= 0)
- `protected final int weight`
- `protected final int quality`
- `protected final List<LootItemFunction> functions`
- `final BiFunction<ItemStack,LootContext,ItemStack> compositeFunction`
- `private final LootPoolEntry entry`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `protected static <T extends LootPoolSingletonContainer> com.mojang.datafixers.Products.P4<com.mojang.serialization.codecs.RecordCodecBuilder.Mu<T>,Integer,Integer,List<LootItemCondition>,List<LootItemFunction>> singletonFields(com.mojang.serialization.codecs.RecordCodecBuilder.Instance<T> p_299133_)`
- `public void validate(ValidationContext p_79686_)`
- `protected abstract void createItemStack(Consumer<ItemStack> p_79691_,  LootContext p_79692_)`
- `public boolean expand(LootContext p_79694_,  Consumer<LootPoolEntry> p_79695_)`
- `public static LootPoolSingletonContainer.Builder<?> simpleBuilder(LootPoolSingletonContainer.EntryConstructor p_79688_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`, `getType`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## LootPoolSingletonContainer.Builder>

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer.Builder>`

Enclosing class: LootPoolSingletonContainer

### Fields
- `protected int weight`
- `protected int quality`
- `private final com.google.common.collect.ImmutableList.Builder<LootItemFunction> functions`

### Methods
- `public T apply(LootItemFunction.Builder p_79710_)`
- `protected List<LootItemFunction> getFunctions()`
- `public T setWeight(int p_79708_)`
- `public T setQuality(int p_79712_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer.Builder`: `append`, `build`, `getConditions`, `getThis`, `otherwise`, `then`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`
- from `net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder`: `apply`, `apply`, `unwrap`

## LootPoolSingletonContainer.DummyBuilder

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer.DummyBuilder`

Enclosing class: LootPoolSingletonContainer

### Fields
- `private final LootPoolSingletonContainer.EntryConstructor constructor`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer.Builder`: `quality`, `weight`

### Methods
- `protected LootPoolSingletonContainer.DummyBuilder getThis()`
- `public LootPoolEntryContainer build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer.Builder`: `apply`, `getFunctions`, `setQuality`, `setWeight`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer.Builder`: `append`, `getConditions`, `otherwise`, `then`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`
- from `net.minecraft.world.level.storage.loot.functions.FunctionUserBuilder`: `apply`, `apply`, `unwrap`

## LootPoolSingletonContainer.EntryBase

*class* `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer.EntryBase`

Enclosing class: LootPoolSingletonContainer

### Methods
- `public int getWeight(float p_79725_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntry`: `createItemStack`

## LootPoolSingletonContainer.EntryConstructor

*interface* `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer.EntryConstructor`

Enclosing class: LootPoolSingletonContainer

### Methods
- `LootPoolSingletonContainer build(int p_79727_,  int p_79728_,  List<LootItemCondition> p_300517_,  List<LootItemFunction> p_297979_)`

## LootTableReference

*class* `net.minecraft.world.level.storage.loot.entries.LootTableReference`

### Fields
- `public static final com.mojang.serialization.Codec<LootTableReference> CODEC`
- `private final ResourceLocation name`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `compositeFunction`, `DEFAULT_QUALITY`, `DEFAULT_WEIGHT`, `functions`, `quality`, `weight`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `public void createItemStack(Consumer<ItemStack> p_79774_,  LootContext p_79775_)`
- `public void validate(ValidationContext p_79770_)`
- `public static LootPoolSingletonContainer.Builder<?> lootTableReference(ResourceLocation p_79777_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `expand`, `simpleBuilder`, `singletonFields`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## SequentialEntry

*class* `net.minecraft.world.level.storage.loot.entries.SequentialEntry`

### Fields
- `public static final com.mojang.serialization.Codec<SequentialEntry> CODEC`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`: `children`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `protected ComposableEntryContainer compose(List<? extends ComposableEntryContainer> p_297417_)`
- `public static SequentialEntry.Builder sequential(LootPoolEntryContainer.Builder<?>... p_165153_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.CompositeEntryBase`: `createCodec`, `expand`, `validate`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`

## SequentialEntry.Builder

*class* `net.minecraft.world.level.storage.loot.entries.SequentialEntry.Builder`

Enclosing class: SequentialEntry

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<LootPoolEntryContainer> entries`

### Methods
- `protected SequentialEntry.Builder getThis()`
- `public SequentialEntry.Builder then(LootPoolEntryContainer.Builder<?> p_165160_)`
- `public LootPoolEntryContainer build()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer.Builder`: `append`, `getConditions`, `otherwise`, `unwrap`, `when`
- from `net.minecraft.world.level.storage.loot.predicates.ConditionUserBuilder`: `when`

## TagEntry

*class* `net.minecraft.world.level.storage.loot.entries.TagEntry`

### Fields
- `public static final com.mojang.serialization.Codec<TagEntry> CODEC`
- `private final TagKey<Item> tag`
- `private final boolean expand`

### Inherited fields
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `compositeFunction`, `DEFAULT_QUALITY`, `DEFAULT_WEIGHT`, `functions`, `quality`, `weight`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `conditions`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `ALWAYS_FALSE`, `ALWAYS_TRUE`

### Methods
- `public LootPoolEntryType getType()`
- `public void createItemStack(Consumer<ItemStack> p_79854_,  LootContext p_79855_)`
- `private boolean expandTag(LootContext p_79846_,  Consumer<LootPoolEntry> p_79847_)`
- `public boolean expand(LootContext p_79861_,  Consumer<LootPoolEntry> p_79862_)`
- `public static LootPoolSingletonContainer.Builder<?> tagContents(TagKey<Item> p_205085_)`
- `public static LootPoolSingletonContainer.Builder<?> expandTag(TagKey<Item> p_205096_)`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.entries.LootPoolSingletonContainer`: `simpleBuilder`, `singletonFields`, `validate`
- from `net.minecraft.world.level.storage.loot.entries.LootPoolEntryContainer`: `canRun`, `commonFields`
- from `net.minecraft.world.level.storage.loot.entries.ComposableEntryContainer`: `and`, `or`
