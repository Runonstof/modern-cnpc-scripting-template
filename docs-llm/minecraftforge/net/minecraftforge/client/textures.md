# net.minecraftforge.client.textures

- [ForgeTextureMetadata](#forgetexturemetadata)
- [ForgeTextureMetadata.Serializer](#forgetexturemetadata.serializer)
- [ITextureAtlasSpriteLoader](#itextureatlasspriteloader)
- [TextureAtlasSpriteLoaderManager](#textureatlasspriteloadermanager)
- [UnitTextureAtlasSprite](#unittextureatlassprite)
## ForgeTextureMetadata

*class* `net.minecraftforge.client.textures.ForgeTextureMetadata`

The "forge" section of texture metadata files (.mcmeta). Currently used only to specify custom
 TextureAtlasSprite loaders.

### Fields
- `public static final ForgeTextureMetadata EMPTY`
- `public static final MetadataSectionSerializer<ForgeTextureMetadata> SERIALIZER`
- `@Nullable private final @Nullable ITextureAtlasSpriteLoader loader`

### Methods
- `public static ForgeTextureMetadata forResource(Resource resource)  throws IOException`
  - throws: IOException
- `@Nullable public @Nullable ITextureAtlasSpriteLoader getLoader()`

## ForgeTextureMetadata.Serializer

*class* `net.minecraftforge.client.textures.ForgeTextureMetadata.Serializer`

Enclosing class: ForgeTextureMetadata

### Methods
- `@NotNull public @NotNull String getMetadataSectionName()`
- `@NotNull public @NotNull ForgeTextureMetadata fromJson(com.google.gson.JsonObject json)`

## ITextureAtlasSpriteLoader

*interface* `net.minecraftforge.client.textures.ITextureAtlasSpriteLoader`

A loader for custom texture atlas sprites.

 The loader can be specified in the corresponding .mcmeta file for a texture as follows:
 {
 "forge": {
 "loader": "examplemod:example_tas_loader"
 }
 }

### Methods
- `SpriteContents loadContents(ResourceLocation name,  Resource resource,  FrameSize frameSize,  NativeImage image,  ResourceMetadata animationMeta,  ForgeTextureMetadata forgeMeta)`
- `@NotNull @NotNull TextureAtlasSprite makeSprite(ResourceLocation atlasName,  SpriteContents contents,  int atlasWidth,  int atlasHeight,  int spriteX,  int spriteY,  int mipmapLevel)`
  Creates a TextureAtlasSprite from the given SpriteContents.

## TextureAtlasSpriteLoaderManager

*class* `net.minecraftforge.client.textures.TextureAtlasSpriteLoaderManager`

Manager for ITextureAtlasSpriteLoader instances.

 Provides a lookup.

### Fields
- `private static com.google.common.collect.ImmutableMap<ResourceLocation,ITextureAtlasSpriteLoader> LOADERS`

### Methods
- `@Nullable public static @Nullable ITextureAtlasSpriteLoader get(ResourceLocation name)`
  Finds the loader with the given name, or null if none is registered.
- `@Internal public static void init()`

## UnitTextureAtlasSprite

*class* `net.minecraftforge.client.textures.UnitTextureAtlasSprite`

A helper sprite with UVs spanning the entire texture.

 Useful for baking quads that won't be used with an atlas.

### Fields
- `public static final ResourceLocation LOCATION`
- `public static final UnitTextureAtlasSprite INSTANCE`

### Methods
- `public float getU(float u)`
- `public float getV(float v)`

### Inherited methods
- from `net.minecraft.client.renderer.texture.TextureAtlasSprite`: `atlasLocation`, `contents`, `createTicker`, `getPixelRGBA`, `getU0`, `getU1`, `getUOffset`, `getV0`, `getV1`, `getVOffset`, `getX`, `getY`, `toString`, `uploadFirstFrame`, `uvShrinkRatio`, `wrap`
