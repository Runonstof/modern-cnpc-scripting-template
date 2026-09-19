# net.minecraft.world.level.storage.loot.providers.nbt

- [ContextNbtProvider](#contextnbtprovider)
- [ContextNbtProvider.Getter](#contextnbtprovider.getter)
- [LootNbtProviderType](#lootnbtprovidertype)
- [NbtProvider](#nbtprovider)
- [NbtProviders](#nbtproviders)
- [StorageNbtProvider](#storagenbtprovider)
## ContextNbtProvider

*class* `net.minecraft.world.level.storage.loot.providers.nbt.ContextNbtProvider`

### Fields
- `private static final String BLOCK_ENTITY_ID` (= "block_entity")
- `private static final ContextNbtProvider.Getter BLOCK_ENTITY_PROVIDER`
- `public static final ContextNbtProvider BLOCK_ENTITY`
- `private static final com.mojang.serialization.Codec<ContextNbtProvider.Getter> GETTER_CODEC`
- `public static final com.mojang.serialization.Codec<ContextNbtProvider> CODEC`
- `public static final com.mojang.serialization.Codec<ContextNbtProvider> INLINE_CODEC`
- `private final ContextNbtProvider.Getter getter`

### Methods
- `private static ContextNbtProvider.Getter forEntity(LootContext.EntityTarget p_165578_)`
- `public LootNbtProviderType getType()`
- `@Nullable public Tag get(LootContext p_165573_)`
- `public Set<LootContextParam<?>> getReferencedContextParams()`
- `public static NbtProvider forContextEntity(LootContext.EntityTarget p_165571_)`

## ContextNbtProvider.Getter

*interface* `net.minecraft.world.level.storage.loot.providers.nbt.ContextNbtProvider.Getter`

Enclosing class: ContextNbtProvider

### Methods
- `@Nullable Tag get(LootContext p_165591_)`
- `String getId()`
- `Set<LootContextParam<?>> getReferencedContextParams()`

## LootNbtProviderType

*record* `net.minecraft.world.level.storage.loot.providers.nbt.LootNbtProviderType`

### Fields
- `private final com.mojang.serialization.Codec<? extends NbtProvider> codec`
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
- `public com.mojang.serialization.Codec<? extends NbtProvider> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## NbtProvider

*interface* `net.minecraft.world.level.storage.loot.providers.nbt.NbtProvider`

### Methods
- `@Nullable Tag get(LootContext p_165622_)`
- `Set<LootContextParam<?>> getReferencedContextParams()`
- `LootNbtProviderType getType()`

## NbtProviders

*class* `net.minecraft.world.level.storage.loot.providers.nbt.NbtProviders`

### Fields
- `private static final com.mojang.serialization.Codec<NbtProvider> TYPED_CODEC`
- `public static final com.mojang.serialization.Codec<NbtProvider> CODEC`
- `public static final LootNbtProviderType STORAGE`
- `public static final LootNbtProviderType CONTEXT`

### Methods
- `private static LootNbtProviderType register(String p_165629_,  com.mojang.serialization.Codec<? extends NbtProvider> p_300005_)`

## StorageNbtProvider

*record* `net.minecraft.world.level.storage.loot.providers.nbt.StorageNbtProvider`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `public static final com.mojang.serialization.Codec<StorageNbtProvider> CODEC`

### Methods
- `public LootNbtProviderType getType()`
- `@Nullable public Tag get(LootContext p_165636_)`
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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
