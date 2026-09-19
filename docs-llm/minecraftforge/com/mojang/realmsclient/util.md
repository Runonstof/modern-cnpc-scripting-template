# com.mojang.realmsclient.util

- [Class LevelType](#class-leveltype)
- [JsonUtils](#jsonutils)
- [RealmsPersistence](#realmspersistence)
- [RealmsPersistence.RealmsPersistenceData](#realmspersistence.realmspersistencedata)
- [RealmsTextureManager](#realmstexturemanager)
- [RealmsTextureManager.RealmsTexture](#realmstexturemanager.realmstexture)
- [RealmsUtil](#realmsutil)
- [TextRenderingUtils](#textrenderingutils)
- [TextRenderingUtils.Line](#textrenderingutils.line)
- [TextRenderingUtils.LineSegment](#textrenderingutils.linesegment)
- [UploadTokenCache](#uploadtokencache)
- [WorldGenerationInfo](#worldgenerationinfo)
## Class LevelType

*enum* `com.mojang.realmsclient.util.Class LevelType`

### Fields
- `private final int index`
- `private final Component name`

### Methods
- `public static LevelType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LevelType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Component getName()`
- `public int getDtoIndex()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## JsonUtils

*class* `com.mojang.realmsclient.util.JsonUtils`

### Methods
- `public static <T> T getRequired(String p_275573_,  com.google.gson.JsonObject p_275650_,  Function<com.google.gson.JsonObject,T> p_275655_)`
- `public static String getRequiredString(String p_275692_,  com.google.gson.JsonObject p_275706_)`
- `@Nullable public static String getStringOr(String p_90162_,  com.google.gson.JsonObject p_90163_,  @Nullable  String p_90164_)`
- `@Nullable public static UUID getUuidOr(String p_275342_,  com.google.gson.JsonObject p_275515_,  @Nullable  UUID p_275232_)`
- `public static int getIntOr(String p_90154_,  com.google.gson.JsonObject p_90155_,  int p_90156_)`
- `public static long getLongOr(String p_90158_,  com.google.gson.JsonObject p_90159_,  long p_90160_)`
- `public static boolean getBooleanOr(String p_90166_,  com.google.gson.JsonObject p_90167_,  boolean p_90168_)`
- `public static Date getDateOr(String p_90151_,  com.google.gson.JsonObject p_90152_)`

## RealmsPersistence

*class* `com.mojang.realmsclient.util.RealmsPersistence`

### Fields
- `private static final String FILE_NAME` (= "realms_persistence.json")
- `private static final GuardedSerializer GSON`
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public RealmsPersistence.RealmsPersistenceData read()`
- `public void save(RealmsPersistence.RealmsPersistenceData p_167617_)`
- `public static RealmsPersistence.RealmsPersistenceData readFile()`
- `public static void writeFile(RealmsPersistence.RealmsPersistenceData p_90173_)`
- `private static Path getPathToData()`

## RealmsPersistence.RealmsPersistenceData

*class* `com.mojang.realmsclient.util.RealmsPersistence.RealmsPersistenceData`

Enclosing class: RealmsPersistence

### Fields
- `@SerializedName("newsLink") public String newsLink`
- `@SerializedName("hasUnreadNews") public boolean hasUnreadNews`

## RealmsTextureManager

*class* `com.mojang.realmsclient.util.RealmsTextureManager`

### Fields
- `private static final Map<String,RealmsTextureManager.RealmsTexture> TEXTURES`
- `private static final org.slf4j.Logger LOGGER`
- `private static final ResourceLocation TEMPLATE_ICON_LOCATION`

### Methods
- `public static ResourceLocation worldTemplate(String p_270945_,  @Nullable  String p_270612_)`
- `private static ResourceLocation getTexture(String p_90197_,  String p_90198_)`
- `@Nullable private static NativeImage loadImage(String p_270725_)`

## RealmsTextureManager.RealmsTexture

*record* `com.mojang.realmsclient.util.RealmsTextureManager.RealmsTexture`

Enclosing class: RealmsTextureManager

### Fields
- `private final String image`
  The field for the image record component.
- `private final ResourceLocation textureId`
  The field for the textureId record component.

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
- `public String image()`
  Returns the value of the image record component.
  - returns: the value of the image record component
- `public ResourceLocation textureId()`
  Returns the value of the textureId record component.
  - returns: the value of the textureId record component

## RealmsUtil

*class* `com.mojang.realmsclient.util.RealmsUtil`

### Fields
- `private static final Component RIGHT_NOW`
- `private static final int MINUTES` (= 60)
- `private static final int HOURS` (= 3600)
- `private static final int DAYS` (= 86400)

### Methods
- `public static Component convertToAgePresentation(long p_287679_)`
- `public static Component convertToAgePresentationFromInstant(Date p_287698_)`
- `public static void renderPlayerFace(GuiGraphics p_281255_,  int p_281818_,  int p_281791_,  int p_282088_,  UUID p_298294_)`

## TextRenderingUtils

*class* `com.mojang.realmsclient.util.TextRenderingUtils`

### Methods
- `protected static List<String> lineBreak(String p_90249_)`
- `public static List<TextRenderingUtils.Line> decompose(String p_90257_,  TextRenderingUtils.LineSegment... p_90258_)`
- `private static List<TextRenderingUtils.Line> decompose(String p_90254_,  List<TextRenderingUtils.LineSegment> p_90255_)`
- `private static List<TextRenderingUtils.Line> insertLinks(List<String> p_90260_,  List<TextRenderingUtils.LineSegment> p_90261_)`
- `public static List<String> split(String p_90251_,  String p_90252_)`

## TextRenderingUtils.Line

*class* `com.mojang.realmsclient.util.TextRenderingUtils.Line`

Enclosing class: TextRenderingUtils

### Fields
- `public final List<TextRenderingUtils.LineSegment> segments`

### Methods
- `public String toString()`
- `public boolean equals(Object p_90266_)`
- `public int hashCode()`

## TextRenderingUtils.LineSegment

*class* `com.mojang.realmsclient.util.TextRenderingUtils.LineSegment`

Enclosing class: TextRenderingUtils

### Fields
- `private final String fullText`
- `@Nullable private final String linkTitle`
- `@Nullable private final String linkUrl`

### Methods
- `public boolean equals(Object p_90287_)`
- `public int hashCode()`
- `public String toString()`
- `public String renderedText()`
- `public boolean isLink()`
- `public String getLinkUrl()`
- `public static TextRenderingUtils.LineSegment link(String p_90282_,  String p_90283_)`
- `protected static TextRenderingUtils.LineSegment text(String p_90280_)`

## UploadTokenCache

*class* `com.mojang.realmsclient.util.UploadTokenCache`

### Fields
- `private static final it.unimi.dsi.fastutil.longs.Long2ObjectMap<String> TOKEN_CACHE`

### Methods
- `public static String get(long p_90293_)`
- `public static void invalidate(long p_90298_)`
- `public static void put(long p_90295_,  String p_90296_)`

## WorldGenerationInfo

*class* `com.mojang.realmsclient.util.WorldGenerationInfo`

### Fields
- `private final String seed`
- `private final LevelType levelType`
- `private final boolean generateStructures`

### Methods
- `public String getSeed()`
- `public LevelType getLevelType()`
- `public boolean shouldGenerateStructures()`
