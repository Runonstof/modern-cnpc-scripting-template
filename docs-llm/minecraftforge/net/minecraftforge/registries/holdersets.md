# net.minecraftforge.registries.holdersets

- [AndHolderSet](#andholderset)
- [AnyHolderSet](#anyholderset)
- [CompositeHolderSet](#compositeholderset)
- [HolderSetType](#holdersettype)
- [ICustomHolderSet](#icustomholderset)
- [NotHolderSet](#notholderset)
- [OrHolderSet](#orholderset)
## AndHolderSet

*class* `net.minecraftforge.registries.holdersets.AndHolderSet`

Holderset that represents an intersection of other holdersets. Json format:
 {
 "type": "forge:and",
 "values":
 [
 // list of sub-holdersets (strings, lists, or objects)
 ]
 }

### Methods
- `public static <T> com.mojang.serialization.Codec<? extends ICustomHolderSet<T>> codec(ResourceKey<? extends Registry<T>> registryKey,  com.mojang.serialization.Codec<Holder<T>> holderCodec,  boolean forceList)`
- `public HolderSetType type()`
  Description copied from interface: ICustomHolderSet
  Returns HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES.
  - returns: HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES
- `protected Set<Holder<T>> createSet()`
  Description copied from class: CompositeHolderSet
  Returns immutable Set of Holders given this composite holderset's component holdersets.
  - returns: immutable Set of Holders given this composite holderset's component holdersets
- `public String toString()`

### Inherited methods
- from `net.minecraftforge.registries.holdersets.CompositeHolderSet`: `addInvalidationListener`, `canSerializeIn`, `contains`, `get`, `getComponents`, `getList`, `getRandomElement`, `getSet`, `homogenize`, `isHomogenous`, `iterator`, `size`, `stream`, `unwrap`, `unwrapKey`
- from `net.minecraftforge.registries.holdersets.ICustomHolderSet`: `serializationType`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## AnyHolderSet

*record* `net.minecraftforge.registries.holdersets.AnyHolderSet`

Holderset that represents all elements of a registry. Json format:
 {
 "type": "forge:any"
 }

### Fields
- `private final HolderLookup.RegistryLookup<T> registryLookup`
  The field for the registryLookup record component.

### Methods
- `public static <T> com.mojang.serialization.Codec<? extends ICustomHolderSet<T>> codec(ResourceKey<? extends Registry<T>> registryKey,  com.mojang.serialization.Codec<Holder<T>> holderCodec,  boolean forceList)`
- `public HolderSetType type()`
  Description copied from interface: ICustomHolderSet
  Returns HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES.
  - returns: HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES
- `public Iterator<Holder<T>> iterator()`
- `public Stream<Holder<T>> stream()`
- `public int size()`
- `public com.mojang.datafixers.util.Either<TagKey<T>,List<Holder<T>>> unwrap()`
- `public Optional<Holder<T>> getRandomElement(RandomSource random)`
- `public Holder<T> get(int i)`
- `public boolean contains(Holder<T> holder)`
- `public boolean canSerializeIn(HolderOwner<T> holderOwner)`
- `public Optional<TagKey<T>> unwrapKey()`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public HolderLookup.RegistryLookup<T> registryLookup()`
  Returns the value of the registryLookup record component.
  - returns: the value of the registryLookup record component

### Inherited methods
- from `net.minecraftforge.registries.holdersets.ICustomHolderSet`: `serializationType`
- from `net.minecraftforge.common.extensions.IForgeHolderSet`: `addInvalidationListener`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## CompositeHolderSet

*class* `net.minecraftforge.registries.holdersets.CompositeHolderSet`

Composite holdersets have component holdersets and possibly owner holdersets
 (which have this holderset as a component).
 When their component holderset(s) invalidate, they clear any cached data and then
 invalidate their owner holdersets.

### Fields
- `private final List<Runnable> owners`
- `private final List<HolderSet<T>> components`
- `@Nullable private @Nullable Set<Holder<T>> set`
- `@Nullable private @Nullable List<Holder<T>> list`

### Methods
- `protected abstract Set<Holder<T>> createSet()`
  Returns immutable Set of Holders given this composite holderset's component holdersets.
  - returns: immutable Set of Holders given this composite holderset's component holdersets
- `public List<HolderSet<T>> getComponents()`
- `public Set<Holder<T>> getSet()`
- `public List<Holder<T>> getList()`
- `public void addInvalidationListener(Runnable runnable)`
  Description copied from interface: IForgeHolderSet
  Adds a callback to run when this holderset's contents invalidate (i.e. because tags were rebound).
  
   The intended usage and use case is with composite holdersets that need to cache sets/list based on other
   holdersets, which may be mutable (because they are tag-based or themselves composite holdersets).
   Composite holdersets should use this to add callbacks to each of their component holdersets when constructed.
  - param: runnable - Runnable to invoke when this component holderset's contents are no longer valid.
 This runnable should only clear caches and allow them to be lazily reevaluated later,
 as not all tag holdersets may have been rebound when this is called.
 This runnable should also invalidate all of the caller's listeners.
- `private void invalidate()`
- `public Stream<Holder<T>> stream()`
- `public int size()`
- `public com.mojang.datafixers.util.Either<TagKey<T>,List<Holder<T>>> unwrap()`
- `public Optional<Holder<T>> getRandomElement(RandomSource rand)`
- `public Holder<T> get(int i)`
- `public boolean contains(Holder<T> holder)`
- `public boolean canSerializeIn(HolderOwner<T> holderOwner)`
- `public Optional<TagKey<T>> unwrapKey()`
- `public Iterator<Holder<T>> iterator()`
- `public List<HolderSet<T>> homogenize()`
  Maps the sub-holdersets of this composite such that,
   if the list contains more than one element, and is non-homogenous,
   each element of the list will serialize as an object.
   Prevents crashes from trying to serialize non-homogenous lists to NBT.
  
   Lists are considered non-homogenous if it contains more than one serialization type of holderset.
   Holdersets may be serialized as strings, lists, or maps.
  - returns: List of holdersets with homogenous serialization behavior.
 Returns a new List if size > 1 and serialization would be non-homogenous,
 otherwise returns the composite's existing List.
- `public boolean isHomogenous()`
  - returns: True if all of our sub-holdersets have the same IForgeHolderSet.SerializationType (string, list, or object).
 False if we have more than one holderset AND if either we have more than one serialization type among them,
 or any holderset is SerializationType.UNKNOWN.

### Inherited methods
- from `net.minecraftforge.registries.holdersets.ICustomHolderSet`: `serializationType`, `type`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## HolderSetType

*interface* `net.minecraftforge.registries.holdersets.HolderSetType`

### Methods
- `<T> com.mojang.serialization.Codec<? extends ICustomHolderSet<T>> makeCodec(ResourceKey<? extends Registry<T>> registryKey,  com.mojang.serialization.Codec<Holder<T>> holderCodec,  boolean forceList)`

## ICustomHolderSet

*interface* `net.minecraftforge.registries.holdersets.ICustomHolderSet`

Interface for mods' custom holderset types

All Superinterfaces: HolderSet<T>, IForgeHolderSet<T>, Iterable<Holder<T>>

### Methods
- `HolderSetType type()`
  Returns HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES.
  - returns: HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES
- `default IForgeHolderSet.SerializationType serializationType()`
  Description copied from interface: IForgeHolderSet
  What format this holderset serializes to in json/nbt/etc

### Inherited methods
- from `net.minecraft.core.HolderSet`: `canSerializeIn`, `contains`, `get`, `getRandomElement`, `size`, `stream`, `unwrap`, `unwrapKey`
- from `net.minecraftforge.common.extensions.IForgeHolderSet`: `addInvalidationListener`
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## NotHolderSet

*class* `net.minecraftforge.registries.holdersets.NotHolderSet`

Holderset that represents all elements of a registry not present in another holderset.
 forge:exclusion is preferable when the number of allowed elements is small relative to the size of the registry.
 Json format:
 {
 "type": "forge:not",
 "value": "not_this_holderset" // string, list, or object
 }

### Fields
- `private final List<Runnable> owners`
- `private final HolderLookup.RegistryLookup<T> registryLookup`
- `private final HolderSet<T> value`
- `@Nullable private @Nullable List<Holder<T>> list`

### Methods
- `public static <T> com.mojang.serialization.Codec<? extends ICustomHolderSet<T>> codec(ResourceKey<? extends Registry<T>> registryKey,  com.mojang.serialization.Codec<Holder<T>> holderCodec,  boolean forceList)`
- `public HolderLookup.RegistryLookup<T> registryLookup()`
- `public HolderSet<T> value()`
- `public HolderSetType type()`
  Description copied from interface: ICustomHolderSet
  Returns HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES.
  - returns: HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES
- `public void addInvalidationListener(Runnable runnable)`
  Description copied from interface: IForgeHolderSet
  Adds a callback to run when this holderset's contents invalidate (i.e. because tags were rebound).
  
   The intended usage and use case is with composite holdersets that need to cache sets/list based on other
   holdersets, which may be mutable (because they are tag-based or themselves composite holdersets).
   Composite holdersets should use this to add callbacks to each of their component holdersets when constructed.
  - param: runnable - Runnable to invoke when this component holderset's contents are no longer valid.
 This runnable should only clear caches and allow them to be lazily reevaluated later,
 as not all tag holdersets may have been rebound when this is called.
 This runnable should also invalidate all of the caller's listeners.
- `public Iterator<Holder<T>> iterator()`
- `public Stream<Holder<T>> stream()`
- `public int size()`
- `public com.mojang.datafixers.util.Either<TagKey<T>,List<Holder<T>>> unwrap()`
- `public Optional<Holder<T>> getRandomElement(RandomSource random)`
- `public Holder<T> get(int i)`
- `public boolean contains(Holder<T> holder)`
- `public boolean canSerializeIn(HolderOwner<T> holderOwner)`
- `public Optional<TagKey<T>> unwrapKey()`
- `public String toString()`
- `private List<Holder<T>> getList()`
- `private void invalidate()`

### Inherited methods
- from `net.minecraftforge.registries.holdersets.ICustomHolderSet`: `serializationType`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## OrHolderSet

*class* `net.minecraftforge.registries.holdersets.OrHolderSet`

Holderset that represents a union of other holdersets. Json format:
 {
 "type": "forge:or",
 "values":
 [
 // list of sub-holdersets (strings, lists, or objects)
 ]
 }

### Methods
- `public static <T> com.mojang.serialization.Codec<? extends ICustomHolderSet<T>> codec(ResourceKey<? extends Registry<T>> registryKey,  com.mojang.serialization.Codec<Holder<T>> holderCodec,  boolean forceList)`
- `public HolderSetType type()`
  Description copied from interface: ICustomHolderSet
  Returns HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES.
  - returns: HolderSetType registered to ForgeRegistries.HOLDER_SET_TYPES
- `protected Set<Holder<T>> createSet()`
  Description copied from class: CompositeHolderSet
  Returns immutable Set of Holders given this composite holderset's component holdersets.
  - returns: immutable Set of Holders given this composite holderset's component holdersets
- `public String toString()`

### Inherited methods
- from `net.minecraftforge.registries.holdersets.CompositeHolderSet`: `addInvalidationListener`, `canSerializeIn`, `contains`, `get`, `getComponents`, `getList`, `getRandomElement`, `getSet`, `homogenize`, `isHomogenous`, `iterator`, `size`, `stream`, `unwrap`, `unwrapKey`
- from `net.minecraftforge.registries.holdersets.ICustomHolderSet`: `serializationType`
- from `java.lang.Iterable`: `forEach`, `spliterator`
