# net.minecraftforge.registries.tags

- [IReverseTag](#ireversetag)
- [ITag](#itag)
- [ITagManager](#itagmanager)
## IReverseTag

*interface* `net.minecraftforge.registries.tags.IReverseTag`

A reverse tag is an object aware of what tags it is contained in.
 Holders implement this interface.
 A reverse tag makes no guarantees about its persistence relative to a registry value.
 Modders should look up a reverse tag every time they need it from a ITagManager rather than storing it somewhere.

### Methods
- `Stream<TagKey<V>> getTagKeys()`
- `boolean containsTag(TagKey<V> key)`
- `default boolean containsTag(ITag<V> tag)`

## ITag

*interface* `net.minecraftforge.registries.tags.ITag`

A tag is a collection of elements with an identifying tag key.
 For Forge, these are bound on world load.
 Tags will always be empty until they are bound.
 A tag instance provided for a given TagKey from a given ITagManager will always return the same instance on future invocations.
 This means that the same tag instance will be rebound across reloads assuming the same registry instance is in use.
 It is safe to store instances of this class for long periods of time.

All Superinterfaces: Iterable<V>

### Methods
- `TagKey<V> getKey()`
- `Stream<V> stream()`
- `boolean isEmpty()`
- `int size()`
- `boolean contains(V value)`
- `Optional<V> getRandomElement(RandomSource random)`
- `boolean isBound()`
  - returns: true if this tag was loaded with a value (including empty),
 otherwise the tag is always empty and this returns false

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## ITagManager

*interface* `net.minecraftforge.registries.tags.ITagManager`

A tag manager holds information about all tags currently bound to a forge registry.
 This should be preferred to any Holder-related methods.

All Superinterfaces: Iterable<ITag<V>>

### Methods
- `@NotNull @NotNull ITag<V> getTag(@NotNull  @NotNull TagKey<V> name)`
  Queries this tag manager for a tag with the given tag key.
   If it does not exist, this will create an empty tag and return it.
- `@NotNull @NotNull Optional<IReverseTag<V>> getReverseTag(@NotNull  V value)`
  Queries a reverse tag for a given value from the forge registry linked to this tag manager.
   A reverse tag stores all tags that the given value is contained in.
  - param: value - A value currently registered to the forge registry linked to this tag manager
  - returns: A reverse tag for the given value, or an empty optional if the value is not registered
- `boolean isKnownTagName(@NotNull  @NotNull TagKey<V> name)`
  Checks whether the given tag key exists in this tag manager and is bound.
   Unlike getTag(TagKey), this method will not create the tag if it does not exist.
- `@NotNull @NotNull Stream<ITag<V>> stream()`
  - returns: A stream of all tags stored in this tag manager, bound or unbound.
- `@NotNull @NotNull Stream<TagKey<V>> getTagNames()`
  - returns: A stream of all tag keys stored in this tag manager, bound or unbound.
- `@NotNull @NotNull TagKey<V> createTagKey(@NotNull  @NotNull ResourceLocation location)`
  Creates a tag key based on the location and the forge registry linked to this tag manager.
   Custom registries can use DeferredRegister.createTagKey(ResourceLocation) to create tag keys before the tag manager is created.
- `@NotNull @NotNull TagKey<V> createOptionalTagKey(@NotNull  @NotNull ResourceLocation location,  @NotNull  @NotNull Set<? extends Supplier<V>> defaults)`
  Creates a tag key that will use the set of defaults if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
   Custom registries can use DeferredRegister.addOptionalTagDefaults(TagKey, Set) to create tag keys before the tag manager is created.
- `void addOptionalTagDefaults(@NotNull  @NotNull TagKey<V> name,  @NotNull  @NotNull Set<? extends Supplier<V>> defaults)`
  Adds defaults to an existing tag key.
   The set of defaults will be bound to the tag if the tag is not loaded from any datapacks.
   Useful on the client side when a server may not provide a specific tag.
   Custom registries can use DeferredRegister.addOptionalTagDefaults(TagKey, Set) to add defaults before the tag manager is created.

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`
