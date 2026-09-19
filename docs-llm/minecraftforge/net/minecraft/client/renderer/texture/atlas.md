# net.minecraft.client.renderer.texture.atlas

- [SpriteResourceLoader](#spriteresourceloader)
- [SpriteSource](#spritesource)
- [SpriteSource.Output](#spritesource.output)
- [SpriteSource.SpriteSupplier](#spritesource.spritesupplier)
- [SpriteSourceList](#spritesourcelist)
- [SpriteSources](#spritesources)
- [SpriteSourceType](#spritesourcetype)
## SpriteResourceLoader

*interface* `net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader`

### Fields
- `static final org.slf4j.Logger LOGGER`

### Methods
- `static SpriteResourceLoader create(Collection<MetadataSectionSerializer<?>> p_299052_)`
- `@Nullable SpriteContents loadSprite(ResourceLocation p_301190_,  Resource p_298142_)`

## SpriteSource

*interface* `net.minecraft.client.renderer.texture.atlas.SpriteSource`

### Fields
- `static final FileToIdConverter TEXTURE_ID_CONVERTER`

### Methods
- `void run(ResourceManager p_261770_,  SpriteSource.Output p_261757_)`
- `SpriteSourceType type()`

## SpriteSource.Output

*interface* `net.minecraft.client.renderer.texture.atlas.SpriteSource.Output`

Enclosing interface: SpriteSource

### Methods
- `default void add(ResourceLocation p_261841_,  Resource p_261651_)`
- `void add(ResourceLocation p_261821_,  SpriteSource.SpriteSupplier p_261760_)`
- `void removeAll(Predicate<ResourceLocation> p_261532_)`

## SpriteSource.SpriteSupplier

*interface* `net.minecraft.client.renderer.texture.atlas.SpriteSource.SpriteSupplier`

All Superinterfaces: Function<SpriteResourceLoader, SpriteContents>

Enclosing interface: SpriteSource

### Methods
- `default void discard()`

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## SpriteSourceList

*class* `net.minecraft.client.renderer.texture.atlas.SpriteSourceList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final FileToIdConverter ATLAS_INFO_CONVERTER`
- `private final List<SpriteSource> sources`

### Methods
- `public List<Function<SpriteResourceLoader,SpriteContents>> list(ResourceManager p_298985_)`
- `public static SpriteSourceList load(ResourceManager p_300689_,  ResourceLocation p_300572_)`

## SpriteSources

*class* `net.minecraft.client.renderer.texture.atlas.SpriteSources`

### Fields
- `private static final com.google.common.collect.BiMap<ResourceLocation,SpriteSourceType> TYPES`
- `public static final SpriteSourceType SINGLE_FILE`
- `public static final SpriteSourceType DIRECTORY`
- `public static final SpriteSourceType FILTER`
- `public static final SpriteSourceType UNSTITCHER`
- `public static final SpriteSourceType PALETTED_PERMUTATIONS`
- `public static com.mojang.serialization.Codec<SpriteSourceType> TYPE_CODEC`
- `public static com.mojang.serialization.Codec<SpriteSource> CODEC`
- `public static com.mojang.serialization.Codec<List<SpriteSource>> FILE_CODEC`

### Methods
- `private static SpriteSourceType register(String p_262175_,  com.mojang.serialization.Codec<? extends SpriteSource> p_261464_)`

## SpriteSourceType

*record* `net.minecraft.client.renderer.texture.atlas.SpriteSourceType`

### Fields
- `private final com.mojang.serialization.Codec<? extends SpriteSource> codec`
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
- `public com.mojang.serialization.Codec<? extends SpriteSource> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component
