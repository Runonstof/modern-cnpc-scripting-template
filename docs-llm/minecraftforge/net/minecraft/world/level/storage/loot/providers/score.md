# net.minecraft.world.level.storage.loot.providers.score

- [ContextScoreboardNameProvider](#contextscoreboardnameprovider)
- [FixedScoreboardNameProvider](#fixedscoreboardnameprovider)
- [LootScoreProviderType](#lootscoreprovidertype)
- [ScoreboardNameProvider](#scoreboardnameprovider)
- [ScoreboardNameProviders](#scoreboardnameproviders)
## ContextScoreboardNameProvider

*record* `net.minecraft.world.level.storage.loot.providers.score.ContextScoreboardNameProvider`

### Fields
- `private final LootContext.EntityTarget target`
  The field for the target record component.
- `public static final com.mojang.serialization.Codec<ContextScoreboardNameProvider> CODEC`
- `public static final com.mojang.serialization.Codec<ContextScoreboardNameProvider> INLINE_CODEC`

### Methods
- `public static ScoreboardNameProvider forTarget(LootContext.EntityTarget p_165808_)`
- `public LootScoreProviderType getType()`
- `@Nullable public String getScoreboardName(LootContext p_165810_)`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
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
- `public LootContext.EntityTarget target()`
  Returns the value of the target record component.
  - returns: the value of the target record component

## FixedScoreboardNameProvider

*record* `net.minecraft.world.level.storage.loot.providers.score.FixedScoreboardNameProvider`

### Fields
- `private final String name`
  The field for the name record component.
- `public static final com.mojang.serialization.Codec<FixedScoreboardNameProvider> CODEC`

### Methods
- `public static ScoreboardNameProvider forName(String p_165847_)`
- `public LootScoreProviderType getType()`
- `@Nullable public String getScoreboardName(LootContext p_165845_)`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
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

## LootScoreProviderType

*record* `net.minecraft.world.level.storage.loot.providers.score.LootScoreProviderType`

### Fields
- `private final com.mojang.serialization.Codec<? extends ScoreboardNameProvider> codec`
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
- `public com.mojang.serialization.Codec<? extends ScoreboardNameProvider> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## ScoreboardNameProvider

*interface* `net.minecraft.world.level.storage.loot.providers.score.ScoreboardNameProvider`

### Methods
- `@Nullable String getScoreboardName(LootContext p_165867_)`
- `LootScoreProviderType getType()`
- `Set<LootContextParam<?>> getReferencedContextParams()`

## ScoreboardNameProviders

*class* `net.minecraft.world.level.storage.loot.providers.score.ScoreboardNameProviders`

### Fields
- `private static final com.mojang.serialization.Codec<ScoreboardNameProvider> TYPED_CODEC`
- `public static final com.mojang.serialization.Codec<ScoreboardNameProvider> CODEC`
- `public static final LootScoreProviderType FIXED`
- `public static final LootScoreProviderType CONTEXT`

### Methods
- `private static LootScoreProviderType register(String p_165874_,  com.mojang.serialization.Codec<? extends ScoreboardNameProvider> p_298416_)`
