# net.minecraft.network.chat

- [ChatDecorator](#chatdecorator)
- [ChatType](#chattype)
- [ChatType.Bound](#chattype.bound)
- [ChatType.BoundNetwork](#chattype.boundnetwork)
- [ChatTypeDecoration](#chattypedecoration)
- [ChatTypeDecoration.Parameter.Selector](#chattypedecoration.parameter.selector)
- [Class ChatTypeDecoration.Parameter](#class-chattypedecoration.parameter)
- [Class ClickEvent.Action](#class-clickevent.action)
- [Class FilterMask.Type](#class-filtermask.type)
- [ClickEvent](#clickevent)
- [CommonComponents](#commoncomponents)
- [Component](#component)
- [Component.Serializer](#component.serializer)
- [ComponentContents](#componentcontents)
- [ComponentUtils](#componentutils)
- [FilterMask](#filtermask)
- [FormattedText](#formattedtext)
- [FormattedText.ContentConsumer](#formattedtext.contentconsumer)
- [FormattedText.StyledContentConsumer](#formattedtext.styledcontentconsumer)
- [HoverEvent](#hoverevent)
- [HoverEvent.Action](#hoverevent.action)
- [HoverEvent.EntityTooltipInfo](#hoverevent.entitytooltipinfo)
- [HoverEvent.ItemStackInfo](#hoverevent.itemstackinfo)
- [LastSeenMessages](#lastseenmessages)
- [LastSeenMessages.Packed](#lastseenmessages.packed)
- [LastSeenMessages.Update](#lastseenmessages.update)
- [LastSeenMessagesTracker](#lastseenmessagestracker)
- [LastSeenMessagesTracker.Update](#lastseenmessagestracker.update)
- [LastSeenMessagesValidator](#lastseenmessagesvalidator)
- [LastSeenTrackedEntry](#lastseentrackedentry)
- [LocalChatSession](#localchatsession)
- [MessageSignature](#messagesignature)
- [MessageSignature.Packed](#messagesignature.packed)
- [MessageSignatureCache](#messagesignaturecache)
- [MutableComponent](#mutablecomponent)
- [OutgoingChatMessage](#outgoingchatmessage)
- [OutgoingChatMessage.Disguised](#outgoingchatmessage.disguised)
- [OutgoingChatMessage.Player](#outgoingchatmessage.player)
- [PlayerChatMessage](#playerchatmessage)
- [RemoteChatSession](#remotechatsession)
- [RemoteChatSession.Data](#remotechatsession.data)
- [SignableCommand](#signablecommand)
- [SignableCommand.Argument](#signablecommand.argument)
- [SignedMessageBody](#signedmessagebody)
- [SignedMessageBody.Packed](#signedmessagebody.packed)
- [SignedMessageChain](#signedmessagechain)
- [SignedMessageChain.DecodeException](#signedmessagechain.decodeexception)
- [SignedMessageChain.Decoder](#signedmessagechain.decoder)
- [SignedMessageChain.Encoder](#signedmessagechain.encoder)
- [SignedMessageLink](#signedmessagelink)
- [SignedMessageValidator](#signedmessagevalidator)
- [SignedMessageValidator.KeyBased](#signedmessagevalidator.keybased)
- [Style](#style)
- [Style.Serializer](#style.serializer)
- [SubStringSource](#substringsource)
- [TextColor](#textcolor)
- [ThrowingComponent](#throwingcomponent)
## ChatDecorator

*interface* `net.minecraft.network.chat.ChatDecorator`

### Fields
- `static final ChatDecorator PLAIN`

### Methods
- `Component decorate(@Nullable  ServerPlayer p_236962_,  Component p_236963_)`

## ChatType

*record* `net.minecraft.network.chat.ChatType`

### Fields
- `private final ChatTypeDecoration chat`
  The field for the chat record component.
- `private final ChatTypeDecoration narration`
  The field for the narration record component.
- `public static final com.mojang.serialization.Codec<ChatType> CODEC`
- `public static final ChatTypeDecoration DEFAULT_CHAT_DECORATION`
- `public static final ResourceKey<ChatType> CHAT`
- `public static final ResourceKey<ChatType> SAY_COMMAND`
- `public static final ResourceKey<ChatType> MSG_COMMAND_INCOMING`
- `public static final ResourceKey<ChatType> MSG_COMMAND_OUTGOING`
- `public static final ResourceKey<ChatType> TEAM_MSG_COMMAND_INCOMING`
- `public static final ResourceKey<ChatType> TEAM_MSG_COMMAND_OUTGOING`
- `public static final ResourceKey<ChatType> EMOTE_COMMAND`

### Methods
- `private static ResourceKey<ChatType> create(String p_237024_)`
- `public static void bootstrap(BootstapContext<ChatType> p_256390_)`
- `public static ChatType.Bound bind(ResourceKey<ChatType> p_241279_,  Entity p_241483_)`
- `public static ChatType.Bound bind(ResourceKey<ChatType> p_241345_,  CommandSourceStack p_241466_)`
- `public static ChatType.Bound bind(ResourceKey<ChatType> p_241284_,  RegistryAccess p_241373_,  Component p_241455_)`
- `public ChatType.Bound bind(Component p_241506_)`
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
- `public ChatTypeDecoration chat()`
  Returns the value of the chat record component.
  - returns: the value of the chat record component
- `public ChatTypeDecoration narration()`
  Returns the value of the narration record component.
  - returns: the value of the narration record component

## ChatType.Bound

*record* `net.minecraft.network.chat.ChatType.Bound`

Enclosing class: ChatType

### Fields
- `private final ChatType chatType`
  The field for the chatType record component.
- `private final Component name`
  The field for the name record component.
- `@Nullable private final Component targetName`
  The field for the targetName record component.

### Methods
- `public Component decorate(Component p_241411_)`
- `public Component decorateNarration(Component p_241354_)`
- `public ChatType.Bound withTargetName(Component p_241530_)`
- `public ChatType.BoundNetwork toNetwork(RegistryAccess p_241362_)`
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
- `public ChatType chatType()`
  Returns the value of the chatType record component.
  - returns: the value of the chatType record component
- `public Component name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `@Nullable public Component targetName()`
  Returns the value of the targetName record component.
  - returns: the value of the targetName record component

## ChatType.BoundNetwork

*record* `net.minecraft.network.chat.ChatType.BoundNetwork`

Enclosing class: ChatType

### Fields
- `private final int chatType`
  The field for the chatType record component.
- `private final Component name`
  The field for the name record component.
- `@Nullable private final Component targetName`
  The field for the targetName record component.

### Methods
- `public void write(FriendlyByteBuf p_241522_)`
- `public Optional<ChatType.Bound> resolve(RegistryAccess p_242936_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int chatType()`
  Returns the value of the chatType record component.
  - returns: the value of the chatType record component
- `public Component name()`
  Returns the value of the name record component.
  - returns: the value of the name record component
- `@Nullable public Component targetName()`
  Returns the value of the targetName record component.
  - returns: the value of the targetName record component

## ChatTypeDecoration

*record* `net.minecraft.network.chat.ChatTypeDecoration`

### Fields
- `private final String translationKey`
  The field for the translationKey record component.
- `private final List<ChatTypeDecoration.Parameter> parameters`
  The field for the parameters record component.
- `private final Style style`
  The field for the style record component.
- `public static final com.mojang.serialization.Codec<ChatTypeDecoration> CODEC`

### Methods
- `public static ChatTypeDecoration withSender(String p_239223_)`
- `public static ChatTypeDecoration incomingDirectMessage(String p_239425_)`
- `public static ChatTypeDecoration outgoingDirectMessage(String p_240772_)`
- `public static ChatTypeDecoration teamMessage(String p_239095_)`
- `public Component decorate(Component p_241301_,  ChatType.Bound p_241391_)`
- `private Component[] resolveParameters(Component p_241365_,  ChatType.Bound p_241559_)`
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
- `public String translationKey()`
  Returns the value of the translationKey record component.
  - returns: the value of the translationKey record component
- `public List<ChatTypeDecoration.Parameter> parameters()`
  Returns the value of the parameters record component.
  - returns: the value of the parameters record component
- `public Style style()`
  Returns the value of the style record component.
  - returns: the value of the style record component

## ChatTypeDecoration.Parameter.Selector

*interface* `net.minecraft.network.chat.ChatTypeDecoration.Parameter.Selector`

Enclosing class: ChatTypeDecoration.Parameter

### Methods
- `@Nullable Component select(Component p_239620_,  ChatType.Bound p_241499_)`

## Class ChatTypeDecoration.Parameter

*enum* `net.minecraft.network.chat.Class ChatTypeDecoration.Parameter`

Enclosing class: ChatTypeDecoration

### Fields
- `public static final com.mojang.serialization.Codec<ChatTypeDecoration.Parameter> CODEC`
- `private final String name`
- `private final ChatTypeDecoration.Parameter.Selector selector`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ChatTypeDecoration.Parameter[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ChatTypeDecoration.Parameter valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Component select(Component p_241369_,  ChatType.Bound p_241509_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ClickEvent.Action

*enum* `net.minecraft.network.chat.Class ClickEvent.Action`

Enclosing class: ClickEvent

### Fields
- `private static final Map<String,ClickEvent.Action> LOOKUP`
- `private final boolean allowFromServer`
- `private final String name`

### Methods
- `public static ClickEvent.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClickEvent.Action valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isAllowedFromServer()`
- `public String getName()`
- `public static ClickEvent.Action getByName(String p_130646_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class FilterMask.Type

*enum* `net.minecraft.network.chat.Class FilterMask.Type`

Enclosing class: FilterMask

### Fields
- `private final String serializedName`
- `private final Supplier<com.mojang.serialization.Codec<FilterMask>> codec`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static FilterMask.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static FilterMask.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `private com.mojang.serialization.Codec<FilterMask> codec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClickEvent

*class* `net.minecraft.network.chat.ClickEvent`

### Fields
- `private final ClickEvent.Action action`
- `private final String value`

### Methods
- `public ClickEvent.Action getAction()`
- `public String getValue()`
- `public boolean equals(Object p_130625_)`
- `public String toString()`
- `public int hashCode()`

## CommonComponents

*class* `net.minecraft.network.chat.CommonComponents`

### Fields
- `public static final Component EMPTY`
- `public static final Component OPTION_ON`
- `public static final Component OPTION_OFF`
- `public static final Component GUI_DONE`
- `public static final Component GUI_CANCEL`
- `public static final Component GUI_YES`
- `public static final Component GUI_NO`
- `public static final Component GUI_OK`
- `public static final Component GUI_PROCEED`
- `public static final Component GUI_CONTINUE`
- `public static final Component GUI_BACK`
- `public static final Component GUI_TO_TITLE`
- `public static final Component GUI_ACKNOWLEDGE`
- `public static final Component GUI_OPEN_IN_BROWSER`
- `public static final Component GUI_COPY_LINK_TO_CLIPBOARD`
- `public static final Component GUI_DISCONNECT`
- `public static final Component CONNECT_FAILED`
- `public static final Component NEW_LINE`
- `public static final Component NARRATION_SEPARATOR`
- `public static final Component ELLIPSIS`
- `public static final Component SPACE`

### Methods
- `public static MutableComponent space()`
- `public static MutableComponent days(long p_239423_)`
- `public static MutableComponent hours(long p_240042_)`
- `public static MutableComponent minutes(long p_239878_)`
- `public static Component optionStatus(boolean p_130667_)`
- `public static MutableComponent optionStatus(Component p_130664_,  boolean p_130665_)`
- `public static MutableComponent optionNameValue(Component p_178394_,  Component p_178395_)`
- `public static MutableComponent joinForNarration(Component... p_267948_)`
- `public static Component joinLines(Component... p_178397_)`
- `public static Component joinLines(Collection<? extends Component> p_178392_)`

## Component

*interface* `net.minecraft.network.chat.Component`

All Superinterfaces: FormattedText, com.mojang.brigadier.Message

### Inherited fields
- from `net.minecraft.network.chat.FormattedText`: `EMPTY`, `STOP_ITERATION`

### Methods
- `Style getStyle()`
- `ComponentContents getContents()`
- `default String getString()`
- `default String getString(int p_130669_)`
- `List<Component> getSiblings()`
- `default MutableComponent plainCopy()`
- `default MutableComponent copy()`
- `FormattedCharSequence getVisualOrderText()`
- `default <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130679_,  Style p_130680_)`
- `default <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130677_)`
- `default List<Component> toFlatList()`
- `default List<Component> toFlatList(Style p_178406_)`
- `default boolean contains(Component p_240571_)`
- `static Component nullToEmpty(@Nullable  String p_130675_)`
- `static MutableComponent literal(String p_237114_)`
- `static MutableComponent translatable(String p_237116_)`
- `static MutableComponent translatable(String p_237111_,  Object... p_237112_)`
- `static MutableComponent translatableWithFallback(String p_265747_,  @Nullable  String p_265287_)`
- `static MutableComponent translatableWithFallback(String p_265449_,  @Nullable  String p_265281_,  Object... p_265785_)`
- `static MutableComponent empty()`
- `static MutableComponent keybind(String p_237118_)`
- `static MutableComponent nbt(String p_237106_,  boolean p_237107_,  Optional<Component> p_237108_,  DataSource p_237109_)`
- `static MutableComponent score(String p_237100_,  String p_237101_)`
- `static MutableComponent selector(String p_237103_,  Optional<Component> p_237104_)`

## Component.Serializer

*class* `net.minecraft.network.chat.Component.Serializer`

Enclosing interface: Component

### Fields
- `private static final com.google.gson.Gson GSON`
- `private static final Field JSON_READER_POS`
- `private static final Field JSON_READER_LINESTART`

### Methods
- `public MutableComponent deserialize(com.google.gson.JsonElement p_130694_,  Type p_130695_,  com.google.gson.JsonDeserializationContext p_130696_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private static Object unwrapTextArgument(Object p_237121_)`
- `private Optional<Component> parseSeparator(Type p_178416_,  com.google.gson.JsonDeserializationContext p_178417_,  com.google.gson.JsonObject p_178418_)`
- `private void serializeStyle(Style p_130710_,  com.google.gson.JsonObject p_130711_,  com.google.gson.JsonSerializationContext p_130712_)`
- `public com.google.gson.JsonElement serialize(Component p_130706_,  Type p_130707_,  com.google.gson.JsonSerializationContext p_130708_)`
- `private void serializeSeparator(com.google.gson.JsonSerializationContext p_178412_,  com.google.gson.JsonObject p_178413_,  Optional<Component> p_178414_)`
- `public static String toJson(Component p_130704_)`
- `public static String toStableJson(Component p_237123_)`
- `public static com.google.gson.JsonElement toJsonTree(Component p_130717_)`
- `@Nullable public static MutableComponent fromJson(String p_130702_)`
- `@Nullable public static MutableComponent fromJson(com.google.gson.JsonElement p_130692_)`
- `@Nullable public static MutableComponent fromJsonLenient(String p_130715_)`
- `public static MutableComponent fromJson(com.mojang.brigadier.StringReader p_130700_)`
- `private static int getPos(com.google.gson.stream.JsonReader p_130698_)`

## ComponentContents

*interface* `net.minecraft.network.chat.ComponentContents`

### Fields
- `static final ComponentContents EMPTY`

### Methods
- `default <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_237130_,  Style p_237131_)`
- `default <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_237129_)`
- `default MutableComponent resolve(@Nullable  CommandSourceStack p_237126_,  @Nullable  Entity p_237127_,  int p_237128_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## ComponentUtils

*class* `net.minecraft.network.chat.ComponentUtils`

### Fields
- `public static final String DEFAULT_SEPARATOR_TEXT` (= ", ")
- `public static final Component DEFAULT_SEPARATOR`
- `public static final Component DEFAULT_NO_STYLE_SEPARATOR`

### Methods
- `public static MutableComponent mergeStyles(MutableComponent p_130751_,  Style p_130752_)`
- `public static Optional<MutableComponent> updateForEntity(@Nullable  CommandSourceStack p_178425_,  Optional<Component> p_178426_,  @Nullable  Entity p_178427_,  int p_178428_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static MutableComponent updateForEntity(@Nullable  CommandSourceStack p_130732_,  Component p_130733_,  @Nullable  Entity p_130734_,  int p_130735_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static Style resolveStyle(@Nullable  CommandSourceStack p_130737_,  Style p_130738_,  @Nullable  Entity p_130739_,  int p_130740_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Component formatList(Collection<String> p_130744_)`
- `public static <T extends Comparable<T>> Component formatAndSortList(Collection<T> p_130746_,  Function<T,Component> p_130747_)`
- `public static <T> Component formatList(Collection<? extends T> p_178441_,  Function<T,Component> p_178442_)`
- `public static <T> MutableComponent formatList(Collection<? extends T> p_178430_,  Optional<? extends Component> p_178431_,  Function<T,Component> p_178432_)`
- `public static Component formatList(Collection<? extends Component> p_178434_,  Component p_178435_)`
- `public static <T> MutableComponent formatList(Collection<? extends T> p_178437_,  Component p_178438_,  Function<T,Component> p_178439_)`
- `public static MutableComponent wrapInSquareBrackets(Component p_130749_)`
- `public static Component fromMessage(com.mojang.brigadier.Message p_130730_)`
- `public static boolean isTranslationResolvable(@Nullable  Component p_237135_)`
- `public static MutableComponent copyOnClickText(String p_260039_)`

## FilterMask

*class* `net.minecraft.network.chat.FilterMask`

### Fields
- `public static final com.mojang.serialization.Codec<FilterMask> CODEC`
- `public static final FilterMask FULLY_FILTERED`
- `public static final FilterMask PASS_THROUGH`
- `public static final Style FILTERED_STYLE`
- `static final com.mojang.serialization.Codec<FilterMask> PASS_THROUGH_CODEC`
- `static final com.mojang.serialization.Codec<FilterMask> FULLY_FILTERED_CODEC`
- `static final com.mojang.serialization.Codec<FilterMask> PARTIALLY_FILTERED_CODEC`
- `private static final char HASH` (= '#')
- `private final BitSet mask`
- `private final FilterMask.Type type`

### Methods
- `private FilterMask.Type type()`
- `private BitSet mask()`
- `public static FilterMask read(FriendlyByteBuf p_243205_)`
- `public static void write(FriendlyByteBuf p_243308_,  FilterMask p_243231_)`
- `public void setFiltered(int p_243202_)`
- `@Nullable public String apply(String p_243317_)`
- `@Nullable public Component applyWithFormatting(String p_251709_)`
- `public boolean isEmpty()`
- `public boolean isFullyFiltered()`
- `public boolean equals(Object p_254275_)`
- `public int hashCode()`

## FormattedText

*interface* `net.minecraft.network.chat.FormattedText`

### Fields
- `static final Optional<Unit> STOP_ITERATION`
- `static final FormattedText EMPTY`

### Methods
- `<T> Optional<T> visit(FormattedText.ContentConsumer<T> p_130770_)`
- `<T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_130771_,  Style p_130772_)`
- `static FormattedText of(String p_130776_)`
- `static FormattedText of(String p_130763_,  Style p_130764_)`
- `static FormattedText composite(FormattedText... p_130774_)`
- `static FormattedText composite(List<? extends FormattedText> p_130769_)`
- `default String getString()`

## FormattedText.ContentConsumer

*interface* `net.minecraft.network.chat.FormattedText.ContentConsumer`

Enclosing interface: FormattedText

### Methods
- `Optional<T> accept(String p_130810_)`

## FormattedText.StyledContentConsumer

*interface* `net.minecraft.network.chat.FormattedText.StyledContentConsumer`

Enclosing interface: FormattedText

### Methods
- `Optional<T> accept(Style p_130811_,  String p_130812_)`

## HoverEvent

*class* `net.minecraft.network.chat.HoverEvent`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final HoverEvent.Action<?> action`
- `private final Object value`

### Methods
- `public HoverEvent.Action<?> getAction()`
- `@Nullable public <T> T getValue(HoverEvent.Action<T> p_130824_)`
- `public boolean equals(Object p_130828_)`
- `public String toString()`
- `public int hashCode()`
- `@Nullable public static HoverEvent deserialize(com.google.gson.JsonObject p_130822_)`
- `public com.google.gson.JsonObject serialize()`

## HoverEvent.Action

*class* `net.minecraft.network.chat.HoverEvent.Action`

Enclosing class: HoverEvent

### Fields
- `public static final HoverEvent.Action<Component> SHOW_TEXT`
- `public static final HoverEvent.Action<HoverEvent.ItemStackInfo> SHOW_ITEM`
- `public static final HoverEvent.Action<HoverEvent.EntityTooltipInfo> SHOW_ENTITY`
- `private static final Map<String,HoverEvent.Action<?>> LOOKUP`
- `private final String name`
- `private final boolean allowFromServer`
- `private final Function<com.google.gson.JsonElement,T> argDeserializer`
- `private final Function<T,com.google.gson.JsonElement> argSerializer`
- `private final Function<Component,T> legacyArgDeserializer`

### Methods
- `public boolean isAllowedFromServer()`
- `public String getName()`
- `@Nullable public static HoverEvent.Action<?> getByName(String p_130853_)`
- `T cast(Object p_130865_)`
- `@Nullable public HoverEvent deserialize(com.google.gson.JsonElement p_130849_)`
- `@Nullable public HoverEvent deserializeFromLegacy(Component p_130855_)`
- `public com.google.gson.JsonElement serializeArg(Object p_130851_)`
- `public String toString()`

## HoverEvent.EntityTooltipInfo

*class* `net.minecraft.network.chat.HoverEvent.EntityTooltipInfo`

Enclosing class: HoverEvent

### Fields
- `public final EntityType<?> type`
- `public final UUID id`
- `@Nullable public final Component name`
- `@Nullable private List<Component> linesCache`

### Methods
- `@Nullable public static HoverEvent.EntityTooltipInfo create(com.google.gson.JsonElement p_130881_)`
- `@Nullable public static HoverEvent.EntityTooltipInfo create(Component p_130883_)`
- `public com.google.gson.JsonElement serialize()`
- `public List<Component> getTooltipLines()`
- `public boolean equals(Object p_130886_)`
- `public int hashCode()`

## HoverEvent.ItemStackInfo

*class* `net.minecraft.network.chat.HoverEvent.ItemStackInfo`

Enclosing class: HoverEvent

### Fields
- `private final Item item`
- `private final int count`
- `@Nullable private final CompoundTag tag`
- `@Nullable private ItemStack itemStack`

### Methods
- `public boolean equals(Object p_130911_)`
- `public int hashCode()`
- `public ItemStack getItemStack()`
- `private static HoverEvent.ItemStackInfo create(com.google.gson.JsonElement p_130907_)`
- `@Nullable private static HoverEvent.ItemStackInfo create(Component p_130909_)`
- `private com.google.gson.JsonElement serialize()`

## LastSeenMessages

*record* `net.minecraft.network.chat.LastSeenMessages`

### Fields
- `private final List<MessageSignature> entries`
  The field for the entries record component.
- `public static final com.mojang.serialization.Codec<LastSeenMessages> CODEC`
- `public static LastSeenMessages EMPTY`
- `public static final int LAST_SEEN_MESSAGES_MAX_LENGTH` (= 20)

### Methods
- `public void updateSignature(SignatureUpdater.Output p_251665_)  throws SignatureException`
  - throws: SignatureException
- `public LastSeenMessages.Packed pack(MessageSignatureCache p_253961_)`
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
- `public List<MessageSignature> entries()`
  Returns the value of the entries record component.
  - returns: the value of the entries record component

## LastSeenMessages.Packed

*record* `net.minecraft.network.chat.LastSeenMessages.Packed`

Enclosing class: LastSeenMessages

### Fields
- `private final List<MessageSignature.Packed> entries`
  The field for the entries record component.
- `public static final LastSeenMessages.Packed EMPTY`

### Methods
- `public void write(FriendlyByteBuf p_250725_)`
- `public Optional<LastSeenMessages> unpack(MessageSignatureCache p_253745_)`
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
- `public List<MessageSignature.Packed> entries()`
  Returns the value of the entries record component.
  - returns: the value of the entries record component

## LastSeenMessages.Update

*record* `net.minecraft.network.chat.LastSeenMessages.Update`

Enclosing class: LastSeenMessages

### Fields
- `private final int offset`
  The field for the offset record component.
- `private final BitSet acknowledged`
  The field for the acknowledged record component.

### Methods
- `public void write(FriendlyByteBuf p_242221_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component
- `public BitSet acknowledged()`
  Returns the value of the acknowledged record component.
  - returns: the value of the acknowledged record component

## LastSeenMessagesTracker

*class* `net.minecraft.network.chat.LastSeenMessagesTracker`

### Fields
- `private final LastSeenTrackedEntry[] trackedMessages`
- `private int tail`
- `private int offset`
- `@Nullable private MessageSignature lastTrackedMessage`

### Methods
- `public boolean addPending(MessageSignature p_248926_,  boolean p_250312_)`
- `private void addEntry(@Nullable  LastSeenTrackedEntry p_250255_)`
- `public void ignorePending(MessageSignature p_251020_)`
- `public int getAndClearOffset()`
- `public LastSeenMessagesTracker.Update generateAndApplyUpdate()`
- `public int offset()`

## LastSeenMessagesTracker.Update

*record* `net.minecraft.network.chat.LastSeenMessagesTracker.Update`

Enclosing class: LastSeenMessagesTracker

### Fields
- `private final LastSeenMessages lastSeen`
  The field for the lastSeen record component.
- `private final LastSeenMessages.Update update`
  The field for the update record component.

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
- `public LastSeenMessages lastSeen()`
  Returns the value of the lastSeen record component.
  - returns: the value of the lastSeen record component
- `public LastSeenMessages.Update update()`
  Returns the value of the update record component.
  - returns: the value of the update record component

## LastSeenMessagesValidator

*class* `net.minecraft.network.chat.LastSeenMessagesValidator`

### Fields
- `private final int lastSeenCount`
- `private final it.unimi.dsi.fastutil.objects.ObjectList<LastSeenTrackedEntry> trackedMessages`
- `@Nullable private MessageSignature lastPendingMessage`

### Methods
- `public void addPending(MessageSignature p_248841_)`
- `public int trackedMessagesCount()`
- `public boolean applyOffset(int p_251273_)`
- `public Optional<LastSeenMessages> applyUpdate(LastSeenMessages.Update p_248868_)`

## LastSeenTrackedEntry

*record* `net.minecraft.network.chat.LastSeenTrackedEntry`

### Fields
- `private final MessageSignature signature`
  The field for the signature record component.
- `private final boolean pending`
  The field for the pending record component.

### Methods
- `public LastSeenTrackedEntry acknowledge()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `public boolean pending()`
  Returns the value of the pending record component.
  - returns: the value of the pending record component

## LocalChatSession

*record* `net.minecraft.network.chat.LocalChatSession`

### Fields
- `private final UUID sessionId`
  The field for the sessionId record component.
- `private final ProfileKeyPair keyPair`
  The field for the keyPair record component.

### Methods
- `public static LocalChatSession create(ProfileKeyPair p_250798_)`
- `public SignedMessageChain.Encoder createMessageEncoder(UUID p_251085_)`
- `public RemoteChatSession asRemote()`
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
- `public UUID sessionId()`
  Returns the value of the sessionId record component.
  - returns: the value of the sessionId record component
- `public ProfileKeyPair keyPair()`
  Returns the value of the keyPair record component.
  - returns: the value of the keyPair record component

## MessageSignature

*record* `net.minecraft.network.chat.MessageSignature`

### Fields
- `private final byte[] bytes`
  The field for the bytes record component.
- `public static final com.mojang.serialization.Codec<MessageSignature> CODEC`
- `public static final int BYTES` (= 256)

### Methods
- `public static MessageSignature read(FriendlyByteBuf p_249837_)`
- `public static void write(FriendlyByteBuf p_250642_,  MessageSignature p_249714_)`
- `public boolean verify(SignatureValidator p_250998_,  SignatureUpdater p_249843_)`
- `public ByteBuffer asByteBuffer()`
- `public boolean equals(Object p_237166_)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: p_237166_ - the object with which to compare
  - returns: true if this object is the same as the p_237166_ argument; false otherwise.
- `public int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public MessageSignature.Packed pack(MessageSignatureCache p_253845_)`
- `public byte[] bytes()`
  Returns the value of the bytes record component.
  - returns: the value of the bytes record component

## MessageSignature.Packed

*record* `net.minecraft.network.chat.MessageSignature.Packed`

Enclosing class: MessageSignature

### Fields
- `private final int id`
  The field for the id record component.
- `@Nullable private final MessageSignature fullSignature`
  The field for the fullSignature record component.
- `public static final int FULL_SIGNATURE` (= -1)

### Methods
- `public static MessageSignature.Packed read(FriendlyByteBuf p_250810_)`
- `public static void write(FriendlyByteBuf p_251691_,  MessageSignature.Packed p_252193_)`
- `public Optional<MessageSignature> unpack(MessageSignatureCache p_254423_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `@Nullable public MessageSignature fullSignature()`
  Returns the value of the fullSignature record component.
  - returns: the value of the fullSignature record component

## MessageSignatureCache

*class* `net.minecraft.network.chat.MessageSignatureCache`

### Fields
- `public static final int NOT_FOUND` (= -1)
- `private static final int DEFAULT_CAPACITY` (= 128)
- `private final MessageSignature[] entries`

### Methods
- `public static MessageSignatureCache createDefault()`
- `public int pack(MessageSignature p_254157_)`
- `@Nullable public MessageSignature unpack(int p_253967_)`
- `public void push(PlayerChatMessage p_248938_)`
- `@VisibleForTesting void push(List<MessageSignature> p_248560_)`
- `private void push(ArrayDeque<MessageSignature> p_251419_)`

## MutableComponent

*class* `net.minecraft.network.chat.MutableComponent`

### Fields
- `private final ComponentContents contents`
- `private final List<Component> siblings`
- `private Style style`
- `private FormattedCharSequence visualOrderText`
- `@Nullable private Language decomposedWith`

### Inherited fields
- from `net.minecraft.network.chat.FormattedText`: `EMPTY`, `STOP_ITERATION`

### Methods
- `public static MutableComponent create(ComponentContents p_237205_)`
- `public ComponentContents getContents()`
- `public List<Component> getSiblings()`
- `public MutableComponent setStyle(Style p_130943_)`
- `public Style getStyle()`
- `public MutableComponent append(String p_130947_)`
- `public MutableComponent append(Component p_130942_)`
- `public MutableComponent withStyle(UnaryOperator<Style> p_130939_)`
- `public MutableComponent withStyle(Style p_130949_)`
- `public MutableComponent withStyle(ChatFormatting... p_130945_)`
- `public MutableComponent withStyle(ChatFormatting p_130941_)`
- `public FormattedCharSequence getVisualOrderText()`
- `public boolean equals(Object p_237209_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.network.chat.Component`: `contains`, `copy`, `getString`, `getString`, `plainCopy`, `toFlatList`, `toFlatList`, `visit`, `visit`

## OutgoingChatMessage

*interface* `net.minecraft.network.chat.OutgoingChatMessage`

### Methods
- `Component content()`
- `void sendToPlayer(ServerPlayer p_250979_,  boolean p_249307_,  ChatType.Bound p_252281_)`
- `static OutgoingChatMessage create(PlayerChatMessage p_249173_)`

## OutgoingChatMessage.Disguised

*record* `net.minecraft.network.chat.OutgoingChatMessage.Disguised`

Enclosing interface: OutgoingChatMessage

### Fields
- `private final Component content`
  The field for the content record component.

### Methods
- `public Component content()`
  Returns the value of the content record component.
  - returns: the value of the content record component
- `public void sendToPlayer(ServerPlayer p_249237_,  boolean p_249574_,  ChatType.Bound p_250880_)`
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

## OutgoingChatMessage.Player

*record* `net.minecraft.network.chat.OutgoingChatMessage.Player`

Enclosing interface: OutgoingChatMessage

### Fields
- `private final PlayerChatMessage message`
  The field for the message record component.

### Methods
- `public Component content()`
- `public void sendToPlayer(ServerPlayer p_249642_,  boolean p_251123_,  ChatType.Bound p_251482_)`
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
- `public PlayerChatMessage message()`
  Returns the value of the message record component.
  - returns: the value of the message record component

## PlayerChatMessage

*record* `net.minecraft.network.chat.PlayerChatMessage`

### Fields
- `private final SignedMessageLink link`
  The field for the link record component.
- `@Nullable private final MessageSignature signature`
  The field for the signature record component.
- `private final SignedMessageBody signedBody`
  The field for the signedBody record component.
- `@Nullable private final Component unsignedContent`
  The field for the unsignedContent record component.
- `private final FilterMask filterMask`
  The field for the filterMask record component.
- `public static final com.mojang.serialization.MapCodec<PlayerChatMessage> MAP_CODEC`
- `private static final UUID SYSTEM_SENDER`
- `public static final Duration MESSAGE_EXPIRES_AFTER_SERVER`
- `public static final Duration MESSAGE_EXPIRES_AFTER_CLIENT`

### Methods
- `public static PlayerChatMessage system(String p_249209_)`
- `public static PlayerChatMessage unsigned(UUID p_251783_,  String p_251615_)`
- `public PlayerChatMessage withUnsignedContent(Component p_242164_)`
- `public PlayerChatMessage removeUnsignedContent()`
- `public PlayerChatMessage filter(FilterMask p_243320_)`
- `public PlayerChatMessage filter(boolean p_243223_)`
- `public static void updateSignature(SignatureUpdater.Output p_250661_,  SignedMessageLink p_248621_,  SignedMessageBody p_248823_)  throws SignatureException`
  - throws: SignatureException
- `public boolean verify(SignatureValidator p_241442_)`
- `public String signedContent()`
- `public Component decoratedContent()`
- `public Instant timeStamp()`
- `public long salt()`
- `public boolean hasExpiredServer(Instant p_240573_)`
- `public boolean hasExpiredClient(Instant p_240629_)`
- `public UUID sender()`
- `public boolean isSystem()`
- `public boolean hasSignature()`
- `public boolean hasSignatureFrom(UUID p_243236_)`
- `public boolean isFullyFiltered()`
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
- `public SignedMessageLink link()`
  Returns the value of the link record component.
  - returns: the value of the link record component
- `@Nullable public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `public SignedMessageBody signedBody()`
  Returns the value of the signedBody record component.
  - returns: the value of the signedBody record component
- `@Nullable public Component unsignedContent()`
  Returns the value of the unsignedContent record component.
  - returns: the value of the unsignedContent record component
- `public FilterMask filterMask()`
  Returns the value of the filterMask record component.
  - returns: the value of the filterMask record component

## RemoteChatSession

*record* `net.minecraft.network.chat.RemoteChatSession`

### Fields
- `private final UUID sessionId`
  The field for the sessionId record component.
- `private final ProfilePublicKey profilePublicKey`
  The field for the profilePublicKey record component.

### Methods
- `public SignedMessageValidator createMessageValidator(Duration p_298140_)`
- `public SignedMessageChain.Decoder createMessageDecoder(UUID p_249107_)`
- `public RemoteChatSession.Data asData()`
- `public boolean hasExpired()`
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
- `public UUID sessionId()`
  Returns the value of the sessionId record component.
  - returns: the value of the sessionId record component
- `public ProfilePublicKey profilePublicKey()`
  Returns the value of the profilePublicKey record component.
  - returns: the value of the profilePublicKey record component

## RemoteChatSession.Data

*record* `net.minecraft.network.chat.RemoteChatSession.Data`

Enclosing class: RemoteChatSession

### Fields
- `private final UUID sessionId`
  The field for the sessionId record component.
- `private final ProfilePublicKey.Data profilePublicKey`
  The field for the profilePublicKey record component.

### Methods
- `public static RemoteChatSession.Data read(FriendlyByteBuf p_252181_)`
- `public static void write(FriendlyByteBuf p_248910_,  RemoteChatSession.Data p_250537_)`
- `public RemoteChatSession validate(com.mojang.authlib.GameProfile p_251231_,  SignatureValidator p_248970_)  throws ProfilePublicKey.ValidationException`
  - throws: ProfilePublicKey.ValidationException
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
- `public UUID sessionId()`
  Returns the value of the sessionId record component.
  - returns: the value of the sessionId record component
- `public ProfilePublicKey.Data profilePublicKey()`
  Returns the value of the profilePublicKey record component.
  - returns: the value of the profilePublicKey record component

## SignableCommand

*record* `net.minecraft.network.chat.SignableCommand`

### Fields
- `private final List<SignableCommand.Argument<S>> arguments`
  The field for the arguments record component.

### Methods
- `public static <S> SignableCommand<S> of(com.mojang.brigadier.ParseResults<S> p_250316_)`
- `private static <S> List<SignableCommand.Argument<S>> collectArguments(String p_252055_,  com.mojang.brigadier.context.CommandContextBuilder<S> p_251770_)`
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
- `public List<SignableCommand.Argument<S>> arguments()`
  Returns the value of the arguments record component.
  - returns: the value of the arguments record component

## SignableCommand.Argument

*record* `net.minecraft.network.chat.SignableCommand.Argument`

Enclosing class: SignableCommand<S>

### Fields
- `private final com.mojang.brigadier.tree.ArgumentCommandNode<S,?> node`
  The field for the node record component.
- `private final String value`
  The field for the value record component.

### Methods
- `public String name()`
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
- `public com.mojang.brigadier.tree.ArgumentCommandNode<S,?> node()`
  Returns the value of the node record component.
  - returns: the value of the node record component
- `public String value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

## SignedMessageBody

*record* `net.minecraft.network.chat.SignedMessageBody`

### Fields
- `private final String content`
  The field for the content record component.
- `private final Instant timeStamp`
  The field for the timeStamp record component.
- `private final long salt`
  The field for the salt record component.
- `private final LastSeenMessages lastSeen`
  The field for the lastSeen record component.
- `public static final com.mojang.serialization.MapCodec<SignedMessageBody> MAP_CODEC`

### Methods
- `public static SignedMessageBody unsigned(String p_249884_)`
- `public void updateSignature(SignatureUpdater.Output p_249654_)  throws SignatureException`
  - throws: SignatureException
- `public SignedMessageBody.Packed pack(MessageSignatureCache p_253671_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String content()`
  Returns the value of the content record component.
  - returns: the value of the content record component
- `public Instant timeStamp()`
  Returns the value of the timeStamp record component.
  - returns: the value of the timeStamp record component
- `public long salt()`
  Returns the value of the salt record component.
  - returns: the value of the salt record component
- `public LastSeenMessages lastSeen()`
  Returns the value of the lastSeen record component.
  - returns: the value of the lastSeen record component

## SignedMessageBody.Packed

*record* `net.minecraft.network.chat.SignedMessageBody.Packed`

Enclosing class: SignedMessageBody

### Fields
- `private final String content`
  The field for the content record component.
- `private final Instant timeStamp`
  The field for the timeStamp record component.
- `private final long salt`
  The field for the salt record component.
- `private final LastSeenMessages.Packed lastSeen`
  The field for the lastSeen record component.

### Methods
- `public void write(FriendlyByteBuf p_250247_)`
- `public Optional<SignedMessageBody> unpack(MessageSignatureCache p_253919_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String content()`
  Returns the value of the content record component.
  - returns: the value of the content record component
- `public Instant timeStamp()`
  Returns the value of the timeStamp record component.
  - returns: the value of the timeStamp record component
- `public long salt()`
  Returns the value of the salt record component.
  - returns: the value of the salt record component
- `public LastSeenMessages.Packed lastSeen()`
  Returns the value of the lastSeen record component.
  - returns: the value of the lastSeen record component

## SignedMessageChain

*class* `net.minecraft.network.chat.SignedMessageChain`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `@Nullable private SignedMessageLink nextLink`

### Methods
- `public SignedMessageChain.Encoder encoder(Signer p_248636_)`
- `public SignedMessageChain.Decoder decoder(ProfilePublicKey p_249122_)`
- `@Nullable private SignedMessageLink advanceLink()`

## SignedMessageChain.DecodeException

*class* `net.minecraft.network.chat.SignedMessageChain.DecodeException`

Enclosing class: SignedMessageChain

### Fields
- `private final boolean shouldDisconnect`

### Methods
- `public boolean shouldDisconnect()`

### Inherited methods
- from `net.minecraft.network.chat.ThrowingComponent`: `getComponent`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## SignedMessageChain.Decoder

*interface* `net.minecraft.network.chat.SignedMessageChain.Decoder`

Enclosing class: SignedMessageChain

### Fields
- `static final SignedMessageChain.Decoder REJECT_ALL`

### Methods
- `static SignedMessageChain.Decoder unsigned(UUID p_251747_)`
- `PlayerChatMessage unpack(@Nullable  MessageSignature p_249082_,  SignedMessageBody p_250981_)  throws SignedMessageChain.DecodeException`
  - throws: SignedMessageChain.DecodeException

## SignedMessageChain.Encoder

*interface* `net.minecraft.network.chat.SignedMessageChain.Encoder`

Enclosing class: SignedMessageChain

### Fields
- `static final SignedMessageChain.Encoder UNSIGNED`

### Methods
- `@Nullable MessageSignature pack(SignedMessageBody p_250628_)`

## SignedMessageLink

*record* `net.minecraft.network.chat.SignedMessageLink`

### Fields
- `private final int index`
  The field for the index record component.
- `private final UUID sender`
  The field for the sender record component.
- `private final UUID sessionId`
  The field for the sessionId record component.
- `public static final com.mojang.serialization.Codec<SignedMessageLink> CODEC`

### Methods
- `public static SignedMessageLink unsigned(UUID p_251496_)`
- `public static SignedMessageLink root(UUID p_249990_,  UUID p_248913_)`
- `public void updateSignature(SignatureUpdater.Output p_249261_)  throws SignatureException`
  - throws: SignatureException
- `public boolean isDescendantOf(SignedMessageLink p_250977_)`
- `@Nullable public SignedMessageLink advance()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int index()`
  Returns the value of the index record component.
  - returns: the value of the index record component
- `public UUID sender()`
  Returns the value of the sender record component.
  - returns: the value of the sender record component
- `public UUID sessionId()`
  Returns the value of the sessionId record component.
  - returns: the value of the sessionId record component

## SignedMessageValidator

*interface* `net.minecraft.network.chat.SignedMessageValidator`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final SignedMessageValidator ACCEPT_UNSIGNED`
- `static final SignedMessageValidator REJECT_ALL`

### Methods
- `boolean updateAndValidate(PlayerChatMessage p_251036_)`

## SignedMessageValidator.KeyBased

*class* `net.minecraft.network.chat.SignedMessageValidator.KeyBased`

Enclosing interface: SignedMessageValidator

### Fields
- `private final SignatureValidator validator`
- `private final BooleanSupplier expired`
- `@Nullable private PlayerChatMessage lastMessage`
- `private boolean isChainValid`

### Inherited fields
- from `net.minecraft.network.chat.SignedMessageValidator`: `ACCEPT_UNSIGNED`, `LOGGER`, `REJECT_ALL`

### Methods
- `private boolean validateChain(PlayerChatMessage p_250412_)`
- `private boolean validate(PlayerChatMessage p_297346_)`
- `public boolean updateAndValidate(PlayerChatMessage p_251182_)`

## Style

*class* `net.minecraft.network.chat.Style`

### Fields
- `public static final Style EMPTY`
- `public static final com.mojang.serialization.Codec<Style> FORMATTING_CODEC`
- `public static final ResourceLocation DEFAULT_FONT`
- `@Nullable final TextColor color`
- `@Nullable final Boolean bold`
- `@Nullable final Boolean italic`
- `@Nullable final Boolean underlined`
- `@Nullable final Boolean strikethrough`
- `@Nullable final Boolean obfuscated`
- `@Nullable final ClickEvent clickEvent`
- `@Nullable final HoverEvent hoverEvent`
- `@Nullable final String insertion`
- `@Nullable final ResourceLocation font`

### Methods
- `private static Style create(Optional<TextColor> p_237258_,  Optional<Boolean> p_237259_,  Optional<Boolean> p_237260_,  Optional<Boolean> p_237261_,  Optional<Boolean> p_237262_,  Optional<Boolean> p_237263_,  Optional<String> p_237264_,  Optional<ResourceLocation> p_237265_)`
- `@Nullable public TextColor getColor()`
- `public boolean isBold()`
- `public boolean isItalic()`
- `public boolean isStrikethrough()`
- `public boolean isUnderlined()`
- `public boolean isObfuscated()`
- `public boolean isEmpty()`
- `@Nullable public ClickEvent getClickEvent()`
- `@Nullable public HoverEvent getHoverEvent()`
- `@Nullable public String getInsertion()`
- `public ResourceLocation getFont()`
- `public Style withColor(@Nullable  TextColor p_131149_)`
- `public Style withColor(@Nullable  ChatFormatting p_131141_)`
- `public Style withColor(int p_178521_)`
- `public Style withBold(@Nullable  Boolean p_131137_)`
- `public Style withItalic(@Nullable  Boolean p_131156_)`
- `public Style withUnderlined(@Nullable  Boolean p_131163_)`
- `public Style withStrikethrough(@Nullable  Boolean p_178523_)`
- `public Style withObfuscated(@Nullable  Boolean p_178525_)`
- `public Style withClickEvent(@Nullable  ClickEvent p_131143_)`
- `public Style withHoverEvent(@Nullable  HoverEvent p_131145_)`
- `public Style withInsertion(@Nullable  String p_131139_)`
- `public Style withFont(@Nullable  ResourceLocation p_131151_)`
- `public Style applyFormat(ChatFormatting p_131158_)`
- `public Style applyLegacyFormat(ChatFormatting p_131165_)`
- `public Style applyFormats(ChatFormatting... p_131153_)`
- `public Style applyTo(Style p_131147_)`
- `public String toString()`
- `public boolean equals(Object p_131175_)`
- `public int hashCode()`

## Style.Serializer

*class* `net.minecraft.network.chat.Style.Serializer`

Enclosing class: Style

### Methods
- `@Nullable public Style deserialize(com.google.gson.JsonElement p_131200_,  Type p_131201_,  com.google.gson.JsonDeserializationContext p_131202_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `@Nullable private static ResourceLocation getFont(com.google.gson.JsonObject p_131204_)`
- `@Nullable private static HoverEvent getHoverEvent(com.google.gson.JsonObject p_131213_)`
- `@Nullable private static ClickEvent getClickEvent(com.google.gson.JsonObject p_131215_)`
- `@Nullable private static String getInsertion(com.google.gson.JsonObject p_131217_)`
- `@Nullable private static TextColor getTextColor(com.google.gson.JsonObject p_131223_)`
- `@Nullable private static Boolean getOptionalFlag(com.google.gson.JsonObject p_131206_,  String p_131207_)`
- `@Nullable public com.google.gson.JsonElement serialize(Style p_131209_,  Type p_131210_,  com.google.gson.JsonSerializationContext p_131211_)`

## SubStringSource

*class* `net.minecraft.network.chat.SubStringSource`

### Fields
- `private final String plainText`
- `private final List<Style> charStyles`
- `private final it.unimi.dsi.fastutil.ints.Int2IntFunction reverseCharModifier`

### Methods
- `public String getPlainText()`
- `public List<FormattedCharSequence> substring(int p_131237_,  int p_131238_,  boolean p_131239_)`
- `public static SubStringSource create(FormattedText p_178537_)`
- `public static SubStringSource create(FormattedText p_131252_,  it.unimi.dsi.fastutil.ints.Int2IntFunction p_131253_,  UnaryOperator<String> p_131254_)`

## TextColor

*class* `net.minecraft.network.chat.TextColor`

### Fields
- `private static final String CUSTOM_COLOR_PREFIX` (= "#")
- `public static final com.mojang.serialization.Codec<TextColor> CODEC`
- `private static final Map<ChatFormatting,TextColor> LEGACY_FORMAT_TO_COLOR`
- `private static final Map<String,TextColor> NAMED_COLORS`
- `private final int value`
- `@Nullable private final String name`

### Methods
- `public int getValue()`
- `public String serialize()`
- `private String formatValue()`
- `public boolean equals(Object p_131279_)`
- `public int hashCode()`
- `public String toString()`
- `@Nullable public static TextColor fromLegacyFormat(ChatFormatting p_131271_)`
- `public static TextColor fromRgb(int p_131267_)`
- `@Nullable public static TextColor parseColor(String p_131269_)`

## ThrowingComponent

*class* `net.minecraft.network.chat.ThrowingComponent`

### Fields
- `private final Component component`

### Methods
- `public Component getComponent()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`
