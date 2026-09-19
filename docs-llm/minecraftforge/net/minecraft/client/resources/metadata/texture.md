# net.minecraft.client.resources.metadata.texture

- [TextureMetadataSection](#texturemetadatasection)
- [TextureMetadataSectionSerializer](#texturemetadatasectionserializer)
## TextureMetadataSection

*class* `net.minecraft.client.resources.metadata.texture.TextureMetadataSection`

### Fields
- `public static final TextureMetadataSectionSerializer SERIALIZER`
- `public static final boolean DEFAULT_BLUR` (= false)
- `public static final boolean DEFAULT_CLAMP` (= false)
- `private final boolean blur`
- `private final boolean clamp`

### Methods
- `public boolean isBlur()`
- `public boolean isClamp()`

## TextureMetadataSectionSerializer

*class* `net.minecraft.client.resources.metadata.texture.TextureMetadataSectionSerializer`

### Methods
- `public TextureMetadataSection fromJson(com.google.gson.JsonObject p_119122_)`
- `public String getMetadataSectionName()`
