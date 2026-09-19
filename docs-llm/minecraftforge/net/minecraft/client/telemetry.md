# net.minecraft.client.telemetry

- [Class TelemetryProperty.GameMode](#class-telemetryproperty.gamemode)
- [Class TelemetryProperty.ServerType](#class-telemetryproperty.servertype)
- [ClientTelemetryManager](#clienttelemetrymanager)
- [TelemetryEventInstance](#telemetryeventinstance)
- [TelemetryEventLog](#telemetryeventlog)
- [TelemetryEventLogger](#telemetryeventlogger)
- [TelemetryEventSender](#telemetryeventsender)
- [TelemetryEventType](#telemetryeventtype)
- [TelemetryEventType.Builder](#telemetryeventtype.builder)
- [TelemetryLogManager](#telemetrylogmanager)
- [TelemetryProperty](#telemetryproperty)
- [TelemetryProperty.Exporter](#telemetryproperty.exporter)
- [TelemetryPropertyMap](#telemetrypropertymap)
- [TelemetryPropertyMap.Builder](#telemetrypropertymap.builder)
- [WorldSessionTelemetryManager](#worldsessiontelemetrymanager)
## Class TelemetryProperty.GameMode

*enum* `net.minecraft.client.telemetry.Class TelemetryProperty.GameMode`

Enclosing class: TelemetryProperty<T>

### Fields
- `public static final com.mojang.serialization.Codec<TelemetryProperty.GameMode> CODEC`
- `private final String key`
- `private final int id`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static TelemetryProperty.GameMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TelemetryProperty.GameMode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int id()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class TelemetryProperty.ServerType

*enum* `net.minecraft.client.telemetry.Class TelemetryProperty.ServerType`

Enclosing class: TelemetryProperty<T>

### Fields
- `public static final com.mojang.serialization.Codec<TelemetryProperty.ServerType> CODEC`
- `private final String key`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static TelemetryProperty.ServerType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TelemetryProperty.ServerType valueOf(String name)`
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

## ClientTelemetryManager

*class* `net.minecraft.client.telemetry.ClientTelemetryManager`

### Fields
- `private static final AtomicInteger THREAD_COUNT`
- `private static final Executor EXECUTOR`
- `private final com.mojang.authlib.minecraft.UserApiService userApiService`
- `private final TelemetryPropertyMap deviceSessionProperties`
- `private final Path logDirectory`
- `private final CompletableFuture<Optional<TelemetryLogManager>> logManager`
- `private final Supplier<TelemetryEventSender> outsideSessionSender`

### Methods
- `public WorldSessionTelemetryManager createWorldSessionManager(boolean p_286373_,  @Nullable  Duration p_286752_,  @Nullable  String p_286568_)`
- `public TelemetryEventSender getOutsideSessionSender()`
- `private TelemetryEventSender createEventSender()`
- `public Path getLogDirectory()`
- `public void close()`

## TelemetryEventInstance

*record* `net.minecraft.client.telemetry.TelemetryEventInstance`

### Fields
- `private final TelemetryEventType type`
  The field for the type record component.
- `private final TelemetryPropertyMap properties`
  The field for the properties record component.
- `public static final com.mojang.serialization.Codec<TelemetryEventInstance> CODEC`

### Methods
- `public com.mojang.authlib.minecraft.TelemetryEvent export(com.mojang.authlib.minecraft.TelemetrySession p_261645_)`
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
- `public TelemetryEventType type()`
  Returns the value of the type record component.
  - returns: the value of the type record component
- `public TelemetryPropertyMap properties()`
  Returns the value of the properties record component.
  - returns: the value of the properties record component

## TelemetryEventLog

*class* `net.minecraft.client.telemetry.TelemetryEventLog`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final JsonEventLog<TelemetryEventInstance> log`
- `private final ProcessorMailbox<Runnable> mailbox`

### Methods
- `public TelemetryEventLogger logger()`
- `public void close()`

## TelemetryEventLogger

*interface* `net.minecraft.client.telemetry.TelemetryEventLogger`

### Methods
- `void log(TelemetryEventInstance p_261961_)`

## TelemetryEventSender

*interface* `net.minecraft.client.telemetry.TelemetryEventSender`

### Fields
- `static final TelemetryEventSender DISABLED`

### Methods
- `default TelemetryEventSender decorate(Consumer<TelemetryPropertyMap.Builder> p_261897_)`
- `void send(TelemetryEventType p_261620_,  Consumer<TelemetryPropertyMap.Builder> p_262079_)`

## TelemetryEventType

*class* `net.minecraft.client.telemetry.TelemetryEventType`

### Fields
- `static final Map<String,TelemetryEventType> REGISTRY`
- `public static final com.mojang.serialization.Codec<TelemetryEventType> CODEC`
- `private static final List<TelemetryProperty<?>> GLOBAL_PROPERTIES`
- `private static final List<TelemetryProperty<?>> WORLD_SESSION_PROPERTIES`
- `public static final TelemetryEventType WORLD_LOADED`
- `public static final TelemetryEventType PERFORMANCE_METRICS`
- `public static final TelemetryEventType WORLD_LOAD_TIMES`
- `public static final TelemetryEventType WORLD_UNLOADED`
- `public static final TelemetryEventType ADVANCEMENT_MADE`
- `public static final TelemetryEventType GAME_LOAD_TIMES`
- `private final String id`
- `private final String exportKey`
- `private final List<TelemetryProperty<?>> properties`
- `private final boolean isOptIn`
- `private final com.mojang.serialization.Codec<TelemetryEventInstance> codec`

### Methods
- `public static TelemetryEventType.Builder builder(String p_261734_,  String p_261807_)`
- `public String id()`
- `public List<TelemetryProperty<?>> properties()`
- `public com.mojang.serialization.Codec<TelemetryEventInstance> codec()`
- `public boolean isOptIn()`
- `public com.mojang.authlib.minecraft.TelemetryEvent export(com.mojang.authlib.minecraft.TelemetrySession p_262179_,  TelemetryPropertyMap p_262018_)`
- `public <T> boolean contains(TelemetryProperty<T> p_262037_)`
- `public String toString()`
- `public MutableComponent title()`
- `public MutableComponent description()`
- `private MutableComponent makeTranslation(String p_261909_)`
- `public static List<TelemetryEventType> values()`

## TelemetryEventType.Builder

*class* `net.minecraft.client.telemetry.TelemetryEventType.Builder`

Enclosing class: TelemetryEventType

### Fields
- `private final String id`
- `private final String exportKey`
- `private final List<TelemetryProperty<?>> properties`
- `private boolean isOptIn`

### Methods
- `public TelemetryEventType.Builder defineAll(List<TelemetryProperty<?>> p_261497_)`
- `public <T> TelemetryEventType.Builder define(TelemetryProperty<T> p_261756_)`
- `public TelemetryEventType.Builder optIn()`
- `public TelemetryEventType register()`

## TelemetryLogManager

*class* `net.minecraft.client.telemetry.TelemetryLogManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String RAW_EXTENSION` (= ".json")
- `private static final int EXPIRY_DAYS` (= 7)
- `private final EventLogDirectory directory`
- `@Nullable private CompletableFuture<Optional<TelemetryEventLog>> sessionLog`

### Methods
- `public static CompletableFuture<Optional<TelemetryLogManager>> open(Path p_262078_)`
- `public CompletableFuture<Optional<TelemetryEventLogger>> openLogger()`
- `public void close()`

## TelemetryProperty

*record* `net.minecraft.client.telemetry.TelemetryProperty`

### Fields
- `private final String id`
  The field for the id record component.
- `private final String exportKey`
  The field for the exportKey record component.
- `private final com.mojang.serialization.Codec<T> codec`
  The field for the codec record component.
- `private final TelemetryProperty.Exporter<T> exporter`
  The field for the exporter record component.
- `private static final DateTimeFormatter TIMESTAMP_FORMATTER`
- `public static final TelemetryProperty<String> USER_ID`
- `public static final TelemetryProperty<String> CLIENT_ID`
- `public static final TelemetryProperty<UUID> MINECRAFT_SESSION_ID`
- `public static final TelemetryProperty<String> GAME_VERSION`
- `public static final TelemetryProperty<String> OPERATING_SYSTEM`
- `public static final TelemetryProperty<String> PLATFORM`
- `public static final TelemetryProperty<Boolean> CLIENT_MODDED`
- `public static final TelemetryProperty<String> LAUNCHER_NAME`
- `public static final TelemetryProperty<UUID> WORLD_SESSION_ID`
- `public static final TelemetryProperty<Boolean> SERVER_MODDED`
- `public static final TelemetryProperty<TelemetryProperty.ServerType> SERVER_TYPE`
- `public static final TelemetryProperty<Boolean> OPT_IN`
- `public static final TelemetryProperty<Instant> EVENT_TIMESTAMP_UTC`
- `public static final TelemetryProperty<TelemetryProperty.GameMode> GAME_MODE`
- `public static final TelemetryProperty<String> REALMS_MAP_CONTENT`
- `public static final TelemetryProperty<Integer> SECONDS_SINCE_LOAD`
- `public static final TelemetryProperty<Integer> TICKS_SINCE_LOAD`
- `public static final TelemetryProperty<it.unimi.dsi.fastutil.longs.LongList> FRAME_RATE_SAMPLES`
- `public static final TelemetryProperty<it.unimi.dsi.fastutil.longs.LongList> RENDER_TIME_SAMPLES`
- `public static final TelemetryProperty<it.unimi.dsi.fastutil.longs.LongList> USED_MEMORY_SAMPLES`
- `public static final TelemetryProperty<Integer> NUMBER_OF_SAMPLES`
- `public static final TelemetryProperty<Integer> RENDER_DISTANCE`
- `public static final TelemetryProperty<Integer> DEDICATED_MEMORY_KB`
- `public static final TelemetryProperty<Integer> WORLD_LOAD_TIME_MS`
- `public static final TelemetryProperty<Boolean> NEW_WORLD`
- `public static final TelemetryProperty<GameLoadTimesEvent.Measurement> LOAD_TIME_TOTAL_TIME_MS`
- `public static final TelemetryProperty<GameLoadTimesEvent.Measurement> LOAD_TIME_PRE_WINDOW_MS`
- `public static final TelemetryProperty<GameLoadTimesEvent.Measurement> LOAD_TIME_BOOTSTRAP_MS`
- `public static final TelemetryProperty<GameLoadTimesEvent.Measurement> LOAD_TIME_LOADING_OVERLAY_MS`
- `public static final TelemetryProperty<String> ADVANCEMENT_ID`
- `public static final TelemetryProperty<Long> ADVANCEMENT_GAME_TIME`

### Methods
- `public static <T> TelemetryProperty<T> create(String p_262052_,  String p_261851_,  com.mojang.serialization.Codec<T> p_261617_,  TelemetryProperty.Exporter<T> p_261478_)`
- `public static TelemetryProperty<Boolean> bool(String p_261605_,  String p_262064_)`
- `public static TelemetryProperty<String> string(String p_261570_,  String p_261611_)`
- `public static TelemetryProperty<Integer> integer(String p_262077_,  String p_261580_)`
- `public static TelemetryProperty<Long> makeLong(String p_286489_,  String p_286616_)`
- `public static TelemetryProperty<UUID> uuid(String p_261558_,  String p_261707_)`
- `public static TelemetryProperty<GameLoadTimesEvent.Measurement> gameLoadMeasurement(String p_286636_,  String p_286769_)`
- `public static TelemetryProperty<it.unimi.dsi.fastutil.longs.LongList> longSamples(String p_262055_,  String p_261726_)`
- `public void export(TelemetryPropertyMap p_262111_,  com.mojang.authlib.minecraft.TelemetryPropertyContainer p_262082_)`
- `public MutableComponent title()`
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
- `public String id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public String exportKey()`
  Returns the value of the exportKey record component.
  - returns: the value of the exportKey record component
- `public com.mojang.serialization.Codec<T> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component
- `public TelemetryProperty.Exporter<T> exporter()`
  Returns the value of the exporter record component.
  - returns: the value of the exporter record component

## TelemetryProperty.Exporter

*interface* `net.minecraft.client.telemetry.TelemetryProperty.Exporter`

Enclosing class: TelemetryProperty<T>

### Methods
- `void apply(com.mojang.authlib.minecraft.TelemetryPropertyContainer p_261934_,  String p_261962_,  T p_262012_)`

## TelemetryPropertyMap

*class* `net.minecraft.client.telemetry.TelemetryPropertyMap`

### Fields
- `final Map<TelemetryProperty<?>,Object> entries`

### Methods
- `public static TelemetryPropertyMap.Builder builder()`
- `public static com.mojang.serialization.Codec<TelemetryPropertyMap> createCodec(List<TelemetryProperty<?>> p_262139_)`
- `@Nullable public <T> T get(TelemetryProperty<T> p_261667_)`
- `public String toString()`
- `public Set<TelemetryProperty<?>> propertySet()`

## TelemetryPropertyMap.Builder

*class* `net.minecraft.client.telemetry.TelemetryPropertyMap.Builder`

Enclosing class: TelemetryPropertyMap

### Fields
- `private final Map<TelemetryProperty<?>,Object> entries`

### Methods
- `public <T> TelemetryPropertyMap.Builder put(TelemetryProperty<T> p_261681_,  T p_262093_)`
- `public <T> TelemetryPropertyMap.Builder putIfNotNull(TelemetryProperty<T> p_286534_,  @Nullable  T p_286699_)`
- `public TelemetryPropertyMap.Builder putAll(TelemetryPropertyMap p_261779_)`
- `public TelemetryPropertyMap build()`

## WorldSessionTelemetryManager

*class* `net.minecraft.client.telemetry.WorldSessionTelemetryManager`

### Fields
- `private final UUID worldSessionId`
- `private final TelemetryEventSender eventSender`
- `private final WorldLoadEvent worldLoadEvent`
- `private final WorldUnloadEvent worldUnloadEvent`
- `private final PerformanceMetricsEvent performanceMetricsEvent`
- `private final WorldLoadTimesEvent worldLoadTimesEvent`

### Methods
- `public void tick()`
- `public void onPlayerInfoReceived(GameType p_261768_,  boolean p_261669_)`
- `public void onServerBrandReceived(String p_261520_)`
- `public void setTime(long p_261878_)`
- `public void worldSessionStart()`
- `public void onDisconnect()`
- `public void onAdvancementDone(Level p_286825_,  AdvancementHolder p_298119_)`
