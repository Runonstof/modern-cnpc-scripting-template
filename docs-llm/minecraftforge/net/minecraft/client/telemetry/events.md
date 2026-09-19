# net.minecraft.client.telemetry.events

- [AggregatedTelemetryEvent](#aggregatedtelemetryevent)
- [GameLoadTimesEvent](#gameloadtimesevent)
- [GameLoadTimesEvent.Measurement](#gameloadtimesevent.measurement)
- [PerformanceMetricsEvent](#performancemetricsevent)
- [WorldLoadEvent](#worldloadevent)
- [WorldLoadTimesEvent](#worldloadtimesevent)
- [WorldUnloadEvent](#worldunloadevent)
## AggregatedTelemetryEvent

*class* `net.minecraft.client.telemetry.events.AggregatedTelemetryEvent`

### Fields
- `private static final int SAMPLE_INTERVAL_MS` (= 60000)
- `private static final int SAMPLES_PER_EVENT` (= 10)
- `private int sampleCount`
- `private boolean ticking`
- `@Nullable private Instant lastSampleTime`

### Methods
- `public void start()`
- `public void tick(TelemetryEventSender p_263410_)`
- `public boolean shouldTakeSample()`
- `public boolean shouldSentEvent()`
- `public void stop()`
- `protected int getSampleCount()`
- `public abstract void takeSample()`
- `public abstract void sendEvent(TelemetryEventSender p_263328_)`

## GameLoadTimesEvent

*class* `net.minecraft.client.telemetry.events.GameLoadTimesEvent`

### Fields
- `public static final GameLoadTimesEvent INSTANCE`
- `private static final org.slf4j.Logger LOGGER`
- `private final com.google.common.base.Ticker timeSource`
- `private final Map<TelemetryProperty<GameLoadTimesEvent.Measurement>,com.google.common.base.Stopwatch> measurements`
- `private OptionalLong bootstrapTime`

### Methods
- `public void beginStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286394_)`
- `public void beginStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286396_,  com.google.common.base.Stopwatch p_286822_)`
- `private void beginStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286311_,  Function<TelemetryProperty<GameLoadTimesEvent.Measurement>,com.google.common.base.Stopwatch> p_286454_)`
- `public void endStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286634_)`
- `public void send(TelemetryEventSender p_286524_)`
- `public void setBootstrapTime(long p_286847_)`

## GameLoadTimesEvent.Measurement

*record* `net.minecraft.client.telemetry.events.GameLoadTimesEvent.Measurement`

Enclosing class: GameLoadTimesEvent

### Fields
- `private final int millis`
  The field for the millis record component.
- `public static final com.mojang.serialization.Codec<GameLoadTimesEvent.Measurement> CODEC`

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int millis()`
  Returns the value of the millis record component.
  - returns: the value of the millis record component

## PerformanceMetricsEvent

*class* `net.minecraft.client.telemetry.events.PerformanceMetricsEvent`

### Fields
- `private static final long DEDICATED_MEMORY_KB`
- `private final it.unimi.dsi.fastutil.longs.LongList fpsSamples`
- `private final it.unimi.dsi.fastutil.longs.LongList frameTimeSamples`
- `private final it.unimi.dsi.fastutil.longs.LongList usedMemorySamples`

### Methods
- `public void tick(TelemetryEventSender p_263321_)`
- `private void resetValues()`
- `public void takeSample()`
- `private void takeUsedMemorySample()`
- `public void sendEvent(TelemetryEventSender p_261872_)`
- `private static long toKilobytes(long p_261471_)`

### Inherited methods
- from `net.minecraft.client.telemetry.events.AggregatedTelemetryEvent`: `getSampleCount`, `shouldSentEvent`, `shouldTakeSample`, `start`, `stop`

## WorldLoadEvent

*class* `net.minecraft.client.telemetry.events.WorldLoadEvent`

### Fields
- `private boolean eventSent`
- `@Nullable private TelemetryProperty.GameMode gameMode`
- `@Nullable private String serverBrand`
- `@Nullable private final String minigameName`

### Methods
- `public void addProperties(TelemetryPropertyMap.Builder p_261869_)`
- `private TelemetryProperty.ServerType getServerType()`
- `public boolean send(TelemetryEventSender p_263325_)`
- `public void setGameMode(GameType p_261852_,  boolean p_261831_)`
- `public void setServerBrand(String p_261964_)`

## WorldLoadTimesEvent

*class* `net.minecraft.client.telemetry.events.WorldLoadTimesEvent`

### Fields
- `private final boolean newWorld`
- `@Nullable private final Duration worldLoadDuration`

### Methods
- `public void send(TelemetryEventSender p_261879_)`

## WorldUnloadEvent

*class* `net.minecraft.client.telemetry.events.WorldUnloadEvent`

### Fields
- `private static final int NOT_TRACKING_TIME` (= -1)
- `private Optional<Instant> worldLoadedTime`
- `private long totalTicks`
- `private long lastGameTime`

### Methods
- `public void onPlayerInfoReceived()`
- `public void setTime(long p_261780_)`
- `private int getTimeInSecondsSinceLoad(Instant p_261735_)`
- `public void send(TelemetryEventSender p_262088_)`
