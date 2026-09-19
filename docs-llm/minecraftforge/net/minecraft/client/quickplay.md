# net.minecraft.client.quickplay

- [Class QuickPlayLog.Type](#class-quickplaylog.type)
- [QuickPlay](#quickplay)
- [QuickPlayLog](#quickplaylog)
- [QuickPlayLog.QuickPlayEntry](#quickplaylog.quickplayentry)
- [QuickPlayLog.QuickPlayWorld](#quickplaylog.quickplayworld)
## Class QuickPlayLog.Type

*enum* `net.minecraft.client.quickplay.Class QuickPlayLog.Type`

Enclosing class: QuickPlayLog

### Fields
- `static final com.mojang.serialization.Codec<QuickPlayLog.Type> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static QuickPlayLog.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static QuickPlayLog.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## QuickPlay

*class* `net.minecraft.client.quickplay.QuickPlay`

### Fields
- `public static final Component ERROR_TITLE`
- `private static final Component INVALID_IDENTIFIER`
- `private static final Component REALM_CONNECT`
- `private static final Component REALM_PERMISSION`
- `private static final Component TO_TITLE`
- `private static final Component TO_WORLD_LIST`
- `private static final Component TO_REALMS_LIST`

### Methods
- `public static void connect(Minecraft p_279319_,  GameConfig.QuickPlayData p_279291_,  RealmsClient p_279322_)`
- `private static void joinSingleplayerWorld(Minecraft p_279420_,  String p_279459_)`
- `private static void joinMultiplayerWorld(Minecraft p_279276_,  String p_279128_)`
- `private static void joinRealmsWorld(Minecraft p_279320_,  RealmsClient p_279468_,  String p_279371_)`

## QuickPlayLog

*class* `net.minecraft.client.quickplay.QuickPlayLog`

### Fields
- `private static final QuickPlayLog INACTIVE`
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `private final Path path`
- `@Nullable private QuickPlayLog.QuickPlayWorld worldData`

### Methods
- `public static QuickPlayLog of(@Nullable  String p_279275_)`
- `public void setWorldData(QuickPlayLog.Type p_279380_,  String p_279427_,  String p_279470_)`
- `public void log(Minecraft p_279258_)`

## QuickPlayLog.QuickPlayEntry

*record* `net.minecraft.client.quickplay.QuickPlayLog.QuickPlayEntry`

Enclosing class: QuickPlayLog

### Fields
- `private final QuickPlayLog.QuickPlayWorld quickPlayWorld`
  The field for the quickPlayWorld record component.
- `private final Instant lastPlayedTime`
  The field for the lastPlayedTime record component.
- `private final GameType gamemode`
  The field for the gamemode record component.
- `public static final com.mojang.serialization.Codec<QuickPlayLog.QuickPlayEntry> CODEC`

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
- `public QuickPlayLog.QuickPlayWorld quickPlayWorld()`
  Returns the value of the quickPlayWorld record component.
  - returns: the value of the quickPlayWorld record component
- `public Instant lastPlayedTime()`
  Returns the value of the lastPlayedTime record component.
  - returns: the value of the lastPlayedTime record component
- `public GameType gamemode()`
  Returns the value of the gamemode record component.
  - returns: the value of the gamemode record component

## QuickPlayLog.QuickPlayWorld

*record* `net.minecraft.client.quickplay.QuickPlayLog.QuickPlayWorld`

Enclosing class: QuickPlayLog

### Fields
- `private final QuickPlayLog.Type type`
  The field for the type record component.
- `private final String id`
  The field for the id record component.
- `private final String name`
  The field for the name record component.
- `public static final com.mojang.serialization.MapCodec<QuickPlayLog.QuickPlayWorld> MAP_CODEC`

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
- `public QuickPlayLog.Type type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public String id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public String name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
