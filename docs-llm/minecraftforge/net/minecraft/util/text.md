# net.minecraft.util.text

- [ChatType](#chattype)
- [ITextComponent](#itextcomponent)
- [ITextComponent.Serializer](#itextcomponent.serializer)
- [Style](#style)
- [Style.Serializer](#style.serializer)
- [TextComponentBase](#textcomponentbase)
- [TextComponentKeybind](#textcomponentkeybind)
- [TextComponentScore](#textcomponentscore)
- [TextComponentSelector](#textcomponentselector)
- [TextComponentString](#textcomponentstring)
- [TextComponentTranslation](#textcomponenttranslation)
- [TextComponentTranslationFormatException](#textcomponenttranslationformatexception)
- [TextComponentUtils](#textcomponentutils)
- [TextFormatting](#textformatting)
## ChatType

*enum* `net.minecraft.util.text.ChatType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ChatType>

### Fields
- `public static final ChatType CHAT`
- `public static final ChatType SYSTEM`
- `public static final ChatType GAME_INFO`

### Methods
- `public static ChatType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ChatType c : ChatType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ChatType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public byte getId()`
- `public static ChatType byId(byte idIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ITextComponent

*interface* `net.minecraft.util.text.ITextComponent`

All Superinterfaces: java.lang.Iterable<ITextComponent>

### Methods
- `ITextComponent setStyle(Style style)`
- `Style getStyle()`
- `ITextComponent appendText(java.lang.String text)`
- `ITextComponent appendSibling(ITextComponent component)`
- `java.lang.String getUnformattedComponentText()`
- `java.lang.String getUnformattedText()`
- `java.lang.String getFormattedText()`
- `java.util.List<ITextComponent> getSiblings()`
- `ITextComponent createCopy()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `iterator`, `spliterator`

## ITextComponent.Serializer

*class* `net.minecraft.util.text.ITextComponent.Serializer`

Enclosing interface: ITextComponent

### Methods
- `public ITextComponent deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(ITextComponent p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`
- `public static java.lang.String componentToJson(ITextComponent component)`
- `public static ITextComponent jsonToComponent(java.lang.String json)`
- `public static ITextComponent fromJsonLenient(java.lang.String json)`

## Style

*class* `net.minecraft.util.text.Style`

### Methods
- `public TextFormatting getColor()`
- `public boolean getBold()`
- `public boolean getItalic()`
- `public boolean getStrikethrough()`
- `public boolean getUnderlined()`
- `public boolean getObfuscated()`
- `public boolean isEmpty()`
- `public ClickEvent getClickEvent()`
- `public HoverEvent getHoverEvent()`
- `public java.lang.String getInsertion()`
- `public Style setColor(TextFormatting color)`
- `public Style setBold(java.lang.Boolean boldIn)`
- `public Style setItalic(java.lang.Boolean italic)`
- `public Style setStrikethrough(java.lang.Boolean strikethrough)`
- `public Style setUnderlined(java.lang.Boolean underlined)`
- `public Style setObfuscated(java.lang.Boolean obfuscated)`
- `public Style setClickEvent(ClickEvent event)`
- `public Style setHoverEvent(HoverEvent event)`
- `public Style setInsertion(java.lang.String insertion)`
- `public Style setParentStyle(Style parent)`
- `public java.lang.String getFormattingCode()`
- `public java.lang.String toString()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public Style createShallowCopy()`
- `public Style createDeepCopy()`

## Style.Serializer

*class* `net.minecraft.util.text.Style.Serializer`

Enclosing class: Style

### Methods
- `public Style deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException
- `public JsonElement serialize(Style p_serialize_1_,  java.lang.reflect.Type p_serialize_2_,  JsonSerializationContext p_serialize_3_)`

## TextComponentBase

*class* `net.minecraft.util.text.TextComponentBase`

All Implemented Interfaces: java.lang.Iterable<ITextComponent>, ITextComponent

### Fields
- `protected java.util.List<ITextComponent> siblings`

### Methods
- `public ITextComponent appendSibling(ITextComponent component)`
- `public java.util.List<ITextComponent> getSiblings()`
- `public ITextComponent appendText(java.lang.String text)`
- `public ITextComponent setStyle(Style style)`
- `public Style getStyle()`
- `public java.util.Iterator<ITextComponent> iterator()`
- `public final java.lang.String getUnformattedText()`
- `public final java.lang.String getFormattedText()`
- `public static java.util.Iterator<ITextComponent> createDeepCopyIterator(java.lang.Iterable<ITextComponent> components)`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`

### Inherited methods
- from `net.minecraft.util.text.ITextComponent`: `createCopy`, `getUnformattedComponentText`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## TextComponentKeybind

*class* `net.minecraft.util.text.TextComponentKeybind`

All Implemented Interfaces: java.lang.Iterable<ITextComponent>, ITextComponent

### Fields
- `public static java.util.function.Function<java.lang.String,java.util.function.Supplier<java.lang.String>> displaySupplierFunction`

### Inherited fields
- from `net.minecraft.util.text.TextComponentBase`: `siblings`

### Methods
- `public java.lang.String getUnformattedComponentText()`
- `public TextComponentKeybind createCopy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`
- `public java.lang.String getKeybind()`

### Inherited methods
- from `net.minecraft.util.text.TextComponentBase`: `appendSibling`, `appendText`, `createDeepCopyIterator`, `getFormattedText`, `getSiblings`, `getStyle`, `getUnformattedText`, `hashCode`, `iterator`, `setStyle`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## TextComponentScore

*class* `net.minecraft.util.text.TextComponentScore`

All Implemented Interfaces: java.lang.Iterable<ITextComponent>, ITextComponent

### Inherited fields
- from `net.minecraft.util.text.TextComponentBase`: `siblings`

### Methods
- `public java.lang.String getName()`
- `public java.lang.String getObjective()`
- `public void setValue(java.lang.String valueIn)`
- `public java.lang.String getUnformattedComponentText()`
- `public void resolve(ICommandSender sender)`
- `public TextComponentScore createCopy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`

### Inherited methods
- from `net.minecraft.util.text.TextComponentBase`: `appendSibling`, `appendText`, `createDeepCopyIterator`, `getFormattedText`, `getSiblings`, `getStyle`, `getUnformattedText`, `hashCode`, `iterator`, `setStyle`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## TextComponentSelector

*class* `net.minecraft.util.text.TextComponentSelector`

All Implemented Interfaces: java.lang.Iterable<ITextComponent>, ITextComponent

### Inherited fields
- from `net.minecraft.util.text.TextComponentBase`: `siblings`

### Methods
- `public java.lang.String getSelector()`
- `public java.lang.String getUnformattedComponentText()`
- `public TextComponentSelector createCopy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`

### Inherited methods
- from `net.minecraft.util.text.TextComponentBase`: `appendSibling`, `appendText`, `createDeepCopyIterator`, `getFormattedText`, `getSiblings`, `getStyle`, `getUnformattedText`, `hashCode`, `iterator`, `setStyle`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## TextComponentString

*class* `net.minecraft.util.text.TextComponentString`

All Implemented Interfaces: java.lang.Iterable<ITextComponent>, ITextComponent

### Inherited fields
- from `net.minecraft.util.text.TextComponentBase`: `siblings`

### Methods
- `public java.lang.String getText()`
- `public java.lang.String getUnformattedComponentText()`
- `public TextComponentString createCopy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`

### Inherited methods
- from `net.minecraft.util.text.TextComponentBase`: `appendSibling`, `appendText`, `createDeepCopyIterator`, `getFormattedText`, `getSiblings`, `getStyle`, `getUnformattedText`, `hashCode`, `iterator`, `setStyle`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## TextComponentTranslation

*class* `net.minecraft.util.text.TextComponentTranslation`

All Implemented Interfaces: java.lang.Iterable<ITextComponent>, ITextComponent

### Fields
- `public static final java.util.regex.Pattern STRING_VARIABLE_PATTERN`

### Inherited fields
- from `net.minecraft.util.text.TextComponentBase`: `siblings`

### Methods
- `protected void initializeFromFormat(java.lang.String format)`
- `public ITextComponent setStyle(Style style)`
- `public java.util.Iterator<ITextComponent> iterator()`
- `public java.lang.String getUnformattedComponentText()`
- `public TextComponentTranslation createCopy()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`
- `public java.lang.String getKey()`
- `public java.lang.Object[] getFormatArgs()`

### Inherited methods
- from `net.minecraft.util.text.TextComponentBase`: `appendSibling`, `appendText`, `createDeepCopyIterator`, `getFormattedText`, `getSiblings`, `getStyle`, `getUnformattedText`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## TextComponentTranslationFormatException

*class* `net.minecraft.util.text.TextComponentTranslationFormatException`

All Implemented Interfaces: java.io.Serializable

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## TextComponentUtils

*class* `net.minecraft.util.text.TextComponentUtils`

### Methods
- `public static ITextComponent processComponent(ICommandSender commandSender,  ITextComponent component,  Entity entityIn)  throws CommandException`
  - throws: CommandException

## TextFormatting

*enum* `net.minecraft.util.text.TextFormatting`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TextFormatting>

### Fields
- `public static final TextFormatting BLACK`
- `public static final TextFormatting DARK_BLUE`
- `public static final TextFormatting DARK_GREEN`
- `public static final TextFormatting DARK_AQUA`
- `public static final TextFormatting DARK_RED`
- `public static final TextFormatting DARK_PURPLE`
- `public static final TextFormatting GOLD`
- `public static final TextFormatting GRAY`
- `public static final TextFormatting DARK_GRAY`
- `public static final TextFormatting BLUE`
- `public static final TextFormatting GREEN`
- `public static final TextFormatting AQUA`
- `public static final TextFormatting RED`
- `public static final TextFormatting LIGHT_PURPLE`
- `public static final TextFormatting YELLOW`
- `public static final TextFormatting WHITE`
- `public static final TextFormatting OBFUSCATED`
- `public static final TextFormatting BOLD`
- `public static final TextFormatting STRIKETHROUGH`
- `public static final TextFormatting UNDERLINE`
- `public static final TextFormatting ITALIC`
- `public static final TextFormatting RESET`

### Methods
- `public static TextFormatting[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TextFormatting c : TextFormatting.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TextFormatting valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getColorIndex()`
- `public boolean isFancyStyling()`
- `public boolean isColor()`
- `public java.lang.String getFriendlyName()`
- `public java.lang.String toString()`
- `public static java.lang.String getTextWithoutFormattingCodes(java.lang.String text)`
- `public static TextFormatting getValueByName(java.lang.String friendlyName)`
- `public static TextFormatting fromColorIndex(int index)`
- `public static java.util.Collection<java.lang.String> getValidValues(boolean p_96296_0_,  boolean p_96296_1_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`
