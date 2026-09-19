# net.minecraft.world.level.storage.loot.providers.number

- [BinomialDistributionGenerator](#binomialdistributiongenerator)
- [ConstantValue](#constantvalue)
- [LootNumberProviderType](#lootnumberprovidertype)
- [NumberProvider](#numberprovider)
- [NumberProviders](#numberproviders)
- [ScoreboardValue](#scoreboardvalue)
- [UniformGenerator](#uniformgenerator)
## BinomialDistributionGenerator

*record* `net.minecraft.world.level.storage.loot.providers.number.BinomialDistributionGenerator`

### Fields
- `private final NumberProvider n`
  The field for the n record component.
- `private final NumberProvider p`
  The field for the p record component.
- `public static final com.mojang.serialization.Codec<BinomialDistributionGenerator> CODEC`

### Methods
- `public LootNumberProviderType getType()`
- `public int getInt(LootContext p_165663_)`
- `public float getFloat(LootContext p_165666_)`
- `public static BinomialDistributionGenerator binomial(int p_165660_,  float p_165661_)`
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
- `public NumberProvider n()`
  Returns the value of the n record component.
  - returns: the value of the n record component
- `public NumberProvider p()`
  Returns the value of the p record component.
  - returns: the value of the p record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`

## ConstantValue

*record* `net.minecraft.world.level.storage.loot.providers.number.ConstantValue`

### Fields
- `private final float value`
  The field for the value record component.
- `public static final com.mojang.serialization.Codec<ConstantValue> CODEC`
- `public static final com.mojang.serialization.Codec<ConstantValue> INLINE_CODEC`

### Methods
- `public LootNumberProviderType getType()`
- `public float getFloat(LootContext p_165695_)`
- `public static ConstantValue exactly(float p_165693_)`
- `public boolean equals(Object p_165697_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: p_165697_ - the object with which to compare
  - returns: true if this object is the same as the p_165697_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public float value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`
- from `net.minecraft.world.level.storage.loot.providers.number.NumberProvider`: `getInt`

## LootNumberProviderType

*record* `net.minecraft.world.level.storage.loot.providers.number.LootNumberProviderType`

### Fields
- `private final com.mojang.serialization.Codec<? extends NumberProvider> codec`
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
- `public com.mojang.serialization.Codec<? extends NumberProvider> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## NumberProvider

*interface* `net.minecraft.world.level.storage.loot.providers.number.NumberProvider`

All Superinterfaces: LootContextUser

### Methods
- `float getFloat(LootContext p_165730_)`
- `default int getInt(LootContext p_165729_)`
- `LootNumberProviderType getType()`

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `getReferencedContextParams`, `validate`

## NumberProviders

*class* `net.minecraft.world.level.storage.loot.providers.number.NumberProviders`

### Fields
- `private static final com.mojang.serialization.Codec<NumberProvider> TYPED_CODEC`
- `public static final com.mojang.serialization.Codec<NumberProvider> CODEC`
- `public static final LootNumberProviderType CONSTANT`
- `public static final LootNumberProviderType UNIFORM`
- `public static final LootNumberProviderType BINOMIAL`
- `public static final LootNumberProviderType SCORE`

### Methods
- `private static LootNumberProviderType register(String p_165739_,  com.mojang.serialization.Codec<? extends NumberProvider> p_299836_)`

## ScoreboardValue

*record* `net.minecraft.world.level.storage.loot.providers.number.ScoreboardValue`

### Fields
- `private final ScoreboardNameProvider target`
  The field for the target record component.
- `private final String score`
  The field for the score record component.
- `private final float scale`
  The field for the scale record component.
- `public static final com.mojang.serialization.Codec<ScoreboardValue> CODEC`

### Methods
- `public LootNumberProviderType getType()`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public static ScoreboardValue fromScoreboard(LootContext.EntityTarget p_165750_,  String p_165751_)`
- `public static ScoreboardValue fromScoreboard(LootContext.EntityTarget p_165753_,  String p_165754_,  float p_165755_)`
- `public float getFloat(LootContext p_165758_)`
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
- `public ScoreboardNameProvider target()`
  Returns the value of the target record component.
  - returns: the value of the target record component
- `public String score()`
  Returns the value of the score record component.
  - returns: the value of the score record component
- `public float scale()`
  Returns the value of the scale record component.
  - returns: the value of the scale record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
- from `net.minecraft.world.level.storage.loot.providers.number.NumberProvider`: `getInt`

## UniformGenerator

*record* `net.minecraft.world.level.storage.loot.providers.number.UniformGenerator`

### Fields
- `private final NumberProvider min`
  The field for the min record component.
- `private final NumberProvider max`
  The field for the max record component.
- `public static final com.mojang.serialization.Codec<UniformGenerator> CODEC`

### Methods
- `public LootNumberProviderType getType()`
- `public static UniformGenerator between(float p_165781_,  float p_165782_)`
- `public int getInt(LootContext p_165784_)`
- `public float getFloat(LootContext p_165787_)`
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
- `public NumberProvider min()`
  Returns the value of the min record component.
  - returns: the value of the min record component
- `public NumberProvider max()`
  Returns the value of the max record component.
  - returns: the value of the max record component

### Inherited methods
- from `net.minecraft.world.level.storage.loot.LootContextUser`: `validate`
