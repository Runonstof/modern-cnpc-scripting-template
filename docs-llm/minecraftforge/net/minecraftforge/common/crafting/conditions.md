# net.minecraftforge.common.crafting.conditions

- [AndCondition](#andcondition)
- [ConditionCodec](#conditioncodec)
- [ConditionCodec.OptionalConditionalDecoder](#conditioncodec.optionalconditionaldecoder)
- [ConditionCodec.UnwrapDecoder](#conditioncodec.unwrapdecoder)
- [ConditionContext](#conditioncontext)
- [FalseCondition](#falsecondition)
- [ICondition](#icondition)
- [ICondition.IContext](#icondition.icontext)
- [IConditionBuilder](#iconditionbuilder)
- [ItemExistsCondition](#itemexistscondition)
- [ModLoadedCondition](#modloadedcondition)
- [NotCondition](#notcondition)
- [OrCondition](#orcondition)
- [TagEmptyCondition](#tagemptycondition)
- [TrueCondition](#truecondition)
## AndCondition

*record* `net.minecraftforge.common.crafting.conditions.AndCondition`

### Fields
- `private final List<ICondition> children`
  The field for the children record component.
- `public static final com.mojang.serialization.Codec<AndCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<ICondition> children()`
  Returns the value of the children record component.
  - returns: the value of the children record component

## ConditionCodec

*class* `net.minecraftforge.common.crafting.conditions.ConditionCodec`

### Methods
- `public static <T> com.mojang.serialization.Codec<T> checkingDecode(com.mojang.serialization.Codec<T> normal,  Supplier<T> _default)`
- `public static <T> com.mojang.serialization.Codec<T> checkingDecode(com.mojang.serialization.Codec<T> normal,  Supplier<T> _default,  String key)`
- `public static <T> com.mojang.serialization.Decoder<Optional<T>> wrap(com.mojang.serialization.Decoder<T> normal)`
- `public static <T> com.mojang.serialization.Decoder<Optional<T>> wrap(com.mojang.serialization.Decoder<T> normal,  String key)`
- `public static <T> ICondition.IContext getContext(com.mojang.serialization.DynamicOps<T> ops)`

## ConditionCodec.OptionalConditionalDecoder

*record* `net.minecraftforge.common.crafting.conditions.ConditionCodec.OptionalConditionalDecoder`

Enclosing class: ConditionCodec

### Fields
- `private final com.mojang.serialization.Decoder<A> normal`
  The field for the normal record component.
- `private final String key`
  The field for the key record component.

### Methods
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<Optional<A>,T>> decode(com.mojang.serialization.DynamicOps<T> ops,  T input)`
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
- `public com.mojang.serialization.Decoder<A> normal()`
  Returns the value of the normal record component.
  - returns: the value of the normal record component
- `public String key()`
  Returns the value of the key record component.
  - returns: the value of the key record component

### Inherited methods
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `fieldOf`, `flatMap`, `map`, `parse`, `parse`, `promotePartial`, `simple`, `terminal`, `withLifecycle`

## ConditionCodec.UnwrapDecoder

*record* `net.minecraftforge.common.crafting.conditions.ConditionCodec.UnwrapDecoder`

Enclosing class: ConditionCodec

### Fields
- `private final com.mojang.serialization.Decoder<Optional<A>> normal`
  The field for the normal record component.
- `private final Supplier<A> _default`
  The field for the _default record component.

### Methods
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<A,T>> decode(com.mojang.serialization.DynamicOps<T> ops,  T input)`
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
- `public com.mojang.serialization.Decoder<Optional<A>> normal()`
  Returns the value of the normal record component.
  - returns: the value of the normal record component
- `public Supplier<A> _default()`
  Returns the value of the _default record component.
  - returns: the value of the _default record component

### Inherited methods
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `fieldOf`, `flatMap`, `map`, `parse`, `parse`, `promotePartial`, `simple`, `terminal`, `withLifecycle`

## ConditionContext

*class* `net.minecraftforge.common.crafting.conditions.ConditionContext`

### Fields
- `private final TagManager tagManager`
- `private Map<ResourceKey<?>,Map<ResourceLocation,Collection<Holder<?>>>> loadedTags`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition.IContext`: `EMPTY`, `KEY`, `TAGS_INVALID`

### Methods
- `public <T> Map<ResourceLocation,Collection<Holder<T>>> getAllTags(ResourceKey<? extends Registry<T>> registry)`
  Description copied from interface: ICondition.IContext
  Return all the loaded tags for the passed registry, or an empty map if none is available.
   Note that the map and the tags are unmodifiable.

### Inherited methods
- from `net.minecraftforge.common.crafting.conditions.ICondition.IContext`: `getTag`

## FalseCondition

*class* `net.minecraftforge.common.crafting.conditions.FalseCondition`

### Fields
- `public static final FalseCondition INSTANCE`
- `public static final com.mojang.serialization.Codec<FalseCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext condition)`
- `public String toString()`
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`

## ICondition

*interface* `net.minecraftforge.common.crafting.conditions.ICondition`

### Fields
- `static final com.mojang.serialization.Codec<ICondition> CODEC`
- `static final String DEFAULT_FIELD` (= "forge:condition")
- `static final com.mojang.serialization.MapCodec<Optional<ICondition>> OPTIONAL_FEILD_CODEC`
- `static final com.mojang.serialization.Codec<ICondition> SAFE_CODEC`

### Methods
- `boolean test(ICondition.IContext context)`
- `com.mojang.serialization.Codec<? extends ICondition> codec()`

## ICondition.IContext

*interface* `net.minecraftforge.common.crafting.conditions.ICondition.IContext`

Enclosing interface: ICondition

### Fields
- `@Internal static final ResourceLocation KEY`
- `static final ICondition.IContext EMPTY`
- `static final ICondition.IContext TAGS_INVALID`

### Methods
- `default <T> Collection<Holder<T>> getTag(TagKey<T> key)`
  Return the requested tag if available, or an empty tag otherwise.
- `<T> Map<ResourceLocation,Collection<Holder<T>>> getAllTags(ResourceKey<? extends Registry<T>> registry)`
  Return all the loaded tags for the passed registry, or an empty map if none is available.
   Note that the map and the tags are unmodifiable.

## IConditionBuilder

*interface* `net.minecraftforge.common.crafting.conditions.IConditionBuilder`

### Methods
- `default ICondition and(ICondition... values)`
- `default ICondition FALSE()`
- `default ICondition TRUE()`
- `default ICondition not(ICondition value)`
- `default ICondition or(ICondition... values)`
- `default ICondition itemExists(String namespace,  String path)`
- `default ICondition modLoaded(String modid)`
- `default ICondition tagEmpty(TagKey<Item> tag)`

## ItemExistsCondition

*record* `net.minecraftforge.common.crafting.conditions.ItemExistsCondition`

### Fields
- `private final ResourceLocation item`
  The field for the item record component.
- `public static final com.mojang.serialization.Codec<ItemExistsCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceLocation item()`
  Returns the value of the item record component.
  - returns: the value of the item record component

## ModLoadedCondition

*record* `net.minecraftforge.common.crafting.conditions.ModLoadedCondition`

### Fields
- `private final String modid`
  The field for the modid record component.
- `public static final com.mojang.serialization.Codec<ModLoadedCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String modid()`
  Returns the value of the modid record component.
  - returns: the value of the modid record component

## NotCondition

*record* `net.minecraftforge.common.crafting.conditions.NotCondition`

### Fields
- `private final ICondition child`
  The field for the child record component.
- `public static final com.mojang.serialization.Codec<NotCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ICondition child()`
  Returns the value of the child record component.
  - returns: the value of the child record component

## OrCondition

*record* `net.minecraftforge.common.crafting.conditions.OrCondition`

### Fields
- `private final List<ICondition> children`
  The field for the children record component.
- `public static final com.mojang.serialization.Codec<OrCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<ICondition> children()`
  Returns the value of the children record component.
  - returns: the value of the children record component

## TagEmptyCondition

*record* `net.minecraftforge.common.crafting.conditions.TagEmptyCondition`

### Fields
- `private final TagKey<Item> tag`
  The field for the tag record component.
- `public static final com.mojang.serialization.Codec<TagEmptyCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public TagKey<Item> tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component

## TrueCondition

*class* `net.minecraftforge.common.crafting.conditions.TrueCondition`

### Fields
- `public static final TrueCondition INSTANCE`
- `public static final com.mojang.serialization.Codec<TrueCondition> CODEC`

### Inherited fields
- from `net.minecraftforge.common.crafting.conditions.ICondition`: `DEFAULT_FIELD`, `OPTIONAL_FEILD_CODEC`, `SAFE_CODEC`

### Methods
- `public boolean test(ICondition.IContext context)`
- `public String toString()`
- `public com.mojang.serialization.Codec<? extends ICondition> codec()`
