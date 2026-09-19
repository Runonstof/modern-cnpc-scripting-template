# net.minecraft.network.chat.contents

- [BlockDataSource](#blockdatasource)
- [DataSource](#datasource)
- [EntityDataSource](#entitydatasource)
- [KeybindContents](#keybindcontents)
- [KeybindResolver](#keybindresolver)
- [LiteralContents](#literalcontents)
- [NbtContents](#nbtcontents)
- [ScoreContents](#scorecontents)
- [SelectorContents](#selectorcontents)
- [StorageDataSource](#storagedatasource)
- [TranslatableContents](#translatablecontents)
- [TranslatableFormatException](#translatableformatexception)
## BlockDataSource

*record* `net.minecraft.network.chat.contents.BlockDataSource`

### Fields
- `private final String posPattern`
  The field for the posPattern record component.
- `@Nullable private final Coordinates compiledPos`
  The field for the compiledPos record component.

### Methods
- `@Nullable private static Coordinates compilePos(String p_237318_)`
- `public Stream<CompoundTag> getData(CommandSourceStack p_237323_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public boolean equals(Object p_237321_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_237321_ - the object with which to compare
  - returns: true if this object is the same as the p_237321_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public String posPattern()`
  Returns the value of the posPattern record component.
  - returns: the value of the posPattern record component
- `@Nullable public Coordinates compiledPos()`
  Returns the value of the compiledPos record component.
  - returns: the value of the compiledPos record component

## DataSource

*interface* `net.minecraft.network.chat.contents.DataSource`

### Methods
- `Stream<CompoundTag> getData(CommandSourceStack p_237326_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EntityDataSource

*record* `net.minecraft.network.chat.contents.EntityDataSource`

### Fields
- `private final String selectorPattern`
  The field for the selectorPattern record component.
- `@Nullable private final EntitySelector compiledSelector`
  The field for the compiledSelector record component.

### Methods
- `@Nullable private static EntitySelector compileSelector(String p_237336_)`
- `public Stream<CompoundTag> getData(CommandSourceStack p_237341_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public boolean equals(Object p_237339_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_237339_ - the object with which to compare
  - returns: true if this object is the same as the p_237339_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public String selectorPattern()`
  Returns the value of the selectorPattern record component.
  - returns: the value of the selectorPattern record component
- `@Nullable public EntitySelector compiledSelector()`
  Returns the value of the compiledSelector record component.
  - returns: the value of the compiledSelector record component

## KeybindContents

*class* `net.minecraft.network.chat.contents.KeybindContents`

### Fields
- `private final String name`
- `@Nullable private Supplier<Component> nameResolver`

### Inherited fields
- from `net.minecraft.network.chat.ComponentContents`: `EMPTY`

### Methods
- `private Component getNestedComponent()`
- `public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237350_)`
- `public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237352_,  Style p_237353_)`
- `public boolean equals(Object p_237356_)`
- `public int hashCode()`
- `public String toString()`
- `public String getName()`

### Inherited methods
- from `net.minecraft.network.chat.ComponentContents`: `resolve`

## KeybindResolver

*class* `net.minecraft.network.chat.contents.KeybindResolver`

### Fields
- `static Function<String,Supplier<Component>> keyResolver`

### Methods
- `public static void setKeyResolver(Function<String,Supplier<Component>> p_237365_)`

## LiteralContents

*record* `net.minecraft.network.chat.contents.LiteralContents`

### Fields
- `private final String text`
  The field for the text record component.

### Inherited fields
- from `net.minecraft.network.chat.ComponentContents`: `EMPTY`

### Methods
- `public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237373_)`
- `public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237375_,  Style p_237376_)`
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
- `public String text()`
  Returns the value of the text record component.
  - returns: the value of the text record component

### Inherited methods
- from `net.minecraft.network.chat.ComponentContents`: `resolve`

## NbtContents

*class* `net.minecraft.network.chat.contents.NbtContents`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final boolean interpreting`
- `private final Optional<Component> separator`
- `private final String nbtPathPattern`
- `private final DataSource dataSource`
- `@Nullable protected final NbtPathArgument.NbtPath compiledNbtPath`

### Inherited fields
- from `net.minecraft.network.chat.ComponentContents`: `EMPTY`

### Methods
- `@Nullable private static NbtPathArgument.NbtPath compileNbtPath(String p_237410_)`
- `public String getNbtPath()`
- `public boolean isInterpreting()`
- `public Optional<Component> getSeparator()`
- `public DataSource getDataSource()`
- `public boolean equals(Object p_237430_)`
- `public int hashCode()`
- `public String toString()`
- `public MutableComponent resolve(@Nullable  CommandSourceStack p_237401_,  @Nullable  Entity p_237402_,  int p_237403_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

### Inherited methods
- from `net.minecraft.network.chat.ComponentContents`: `visit`, `visit`

## ScoreContents

*class* `net.minecraft.network.chat.contents.ScoreContents`

### Fields
- `private static final String SCORER_PLACEHOLDER` (= "*")
- `private final String name`
- `@Nullable private final EntitySelector selector`
- `private final String objective`

### Inherited fields
- from `net.minecraft.network.chat.ComponentContents`: `EMPTY`

### Methods
- `@Nullable private static EntitySelector parseSelector(String p_237448_)`
- `public String getName()`
- `@Nullable public EntitySelector getSelector()`
- `public String getObjective()`
- `private String findTargetName(CommandSourceStack p_237442_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private String getScore(String p_237450_,  CommandSourceStack p_237451_)`
- `public MutableComponent resolve(@Nullable  CommandSourceStack p_237444_,  @Nullable  Entity p_237445_,  int p_237446_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public boolean equals(Object p_237455_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.network.chat.ComponentContents`: `visit`, `visit`

## SelectorContents

*class* `net.minecraft.network.chat.contents.SelectorContents`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final String pattern`
- `@Nullable private final EntitySelector selector`
- `protected final Optional<Component> separator`

### Inherited fields
- from `net.minecraft.network.chat.ComponentContents`: `EMPTY`

### Methods
- `@Nullable private static EntitySelector parseSelector(String p_237472_)`
- `public String getPattern()`
- `@Nullable public EntitySelector getSelector()`
- `public Optional<Component> getSeparator()`
- `public MutableComponent resolve(@Nullable  CommandSourceStack p_237468_,  @Nullable  Entity p_237469_,  int p_237470_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237476_,  Style p_237477_)`
- `public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237474_)`
- `public boolean equals(Object p_237481_)`
- `public int hashCode()`
- `public String toString()`

## StorageDataSource

*record* `net.minecraft.network.chat.contents.StorageDataSource`

### Fields
- `private final ResourceLocation id`
  The field for the id record component.

### Methods
- `public Stream<CompoundTag> getData(CommandSourceStack p_237491_)`
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
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component

## TranslatableContents

*class* `net.minecraft.network.chat.contents.TranslatableContents`

### Fields
- `public static final Object[] NO_ARGS`
- `private static final FormattedText TEXT_PERCENT`
- `private static final FormattedText TEXT_NULL`
- `private final String key`
- `@Nullable private final String fallback`
- `private final Object[] args`
- `@Nullable private Language decomposedWith`
- `private List<FormattedText> decomposedParts`
- `private static final Pattern FORMAT_PATTERN`

### Inherited fields
- from `net.minecraft.network.chat.ComponentContents`: `EMPTY`

### Methods
- `private void decompose()`
- `private void decomposeTemplate(String p_237516_,  Consumer<FormattedText> p_237517_)`
- `private FormattedText getArgument(int p_237510_)`
- `public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237521_,  Style p_237522_)`
- `public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237519_)`
- `public MutableComponent resolve(@Nullable  CommandSourceStack p_237512_,  @Nullable  Entity p_237513_,  int p_237514_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public boolean equals(Object p_237526_)`
- `public int hashCode()`
- `public String toString()`
- `public String getKey()`
- `@Nullable public String getFallback()`
- `public Object[] getArgs()`

## TranslatableFormatException

*class* `net.minecraft.network.chat.contents.TranslatableFormatException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
