# net.minecraft.util.profiling.jfr.event

- [ChunkGenerationEvent](#chunkgenerationevent)
- [ChunkGenerationEvent.Fields](#chunkgenerationevent.fields)
- [NetworkSummaryEvent](#networksummaryevent)
- [NetworkSummaryEvent.Fields](#networksummaryevent.fields)
- [NetworkSummaryEvent.SumAggregation](#networksummaryevent.sumaggregation)
- [PacketEvent](#packetevent)
- [PacketEvent.Fields](#packetevent.fields)
- [PacketReceivedEvent](#packetreceivedevent)
- [PacketSentEvent](#packetsentevent)
- [ServerTickTimeEvent](#serverticktimeevent)
- [ServerTickTimeEvent.Fields](#serverticktimeevent.fields)
- [WorldLoadFinishedEvent](#worldloadfinishedevent)
## ChunkGenerationEvent

*class* `net.minecraft.util.profiling.jfr.event.ChunkGenerationEvent`

### Fields
- `public static final String EVENT_NAME` (= "minecraft.ChunkGeneration")
- `public static final EventType TYPE`
- `public final int worldPosX`
- `public final int worldPosZ`
- `public final int chunkPosX`
- `public final int chunkPosZ`
- `public final String targetStatus`
- `public final String level`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`

## ChunkGenerationEvent.Fields

*class* `net.minecraft.util.profiling.jfr.event.ChunkGenerationEvent.Fields`

Enclosing class: ChunkGenerationEvent

### Fields
- `public static final String WORLD_POS_X` (= "worldPosX")
- `public static final String WORLD_POS_Z` (= "worldPosZ")
- `public static final String CHUNK_POS_X` (= "chunkPosX")
- `public static final String CHUNK_POS_Z` (= "chunkPosZ")
- `public static final String STATUS` (= "status")
- `public static final String LEVEL` (= "level")

## NetworkSummaryEvent

*class* `net.minecraft.util.profiling.jfr.event.NetworkSummaryEvent`

### Fields
- `public static final String EVENT_NAME` (= "minecraft.NetworkSummary")
- `public static final EventType TYPE`
- `public final String remoteAddress`
- `public long sentBytes`
- `public int sentPackets`
- `public long receivedBytes`
- `public int receivedPackets`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`

## NetworkSummaryEvent.Fields

*class* `net.minecraft.util.profiling.jfr.event.NetworkSummaryEvent.Fields`

Enclosing class: NetworkSummaryEvent

### Fields
- `public static final String REMOTE_ADDRESS` (= "remoteAddress")
- `public static final String SENT_BYTES` (= "sentBytes")
- `private static final String SENT_PACKETS` (= "sentPackets")
- `public static final String RECEIVED_BYTES` (= "receivedBytes")
- `private static final String RECEIVED_PACKETS` (= "receivedPackets")

## NetworkSummaryEvent.SumAggregation

*class* `net.minecraft.util.profiling.jfr.event.NetworkSummaryEvent.SumAggregation`

Enclosing class: NetworkSummaryEvent

### Fields
- `private final AtomicLong sentBytes`
- `private final AtomicInteger sentPackets`
- `private final AtomicLong receivedBytes`
- `private final AtomicInteger receivedPackets`
- `private final NetworkSummaryEvent event`

### Methods
- `public void trackSentPacket(int p_195578_)`
- `public void trackReceivedPacket(int p_195580_)`
- `public void commitEvent()`

## PacketEvent

*class* `net.minecraft.util.profiling.jfr.event.PacketEvent`

### Fields
- `public final String protocolId`
- `public final int packetId`
- `public final String remoteAddress`
- `public final int bytes`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`

## PacketEvent.Fields

*class* `net.minecraft.util.profiling.jfr.event.PacketEvent.Fields`

Enclosing class: PacketEvent

### Fields
- `public static final String REMOTE_ADDRESS` (= "remoteAddress")
- `public static final String PROTOCOL_ID` (= "protocolId")
- `public static final String PACKET_ID` (= "packetId")
- `public static final String BYTES` (= "bytes")

## PacketReceivedEvent

*class* `net.minecraft.util.profiling.jfr.event.PacketReceivedEvent`

### Fields
- `public static final String NAME` (= "minecraft.PacketReceived")
- `public static final EventType TYPE`

### Inherited fields
- from `net.minecraft.util.profiling.jfr.event.PacketEvent`: `bytes`, `packetId`, `protocolId`, `remoteAddress`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`

## PacketSentEvent

*class* `net.minecraft.util.profiling.jfr.event.PacketSentEvent`

### Fields
- `public static final String NAME` (= "minecraft.PacketSent")
- `public static final EventType TYPE`

### Inherited fields
- from `net.minecraft.util.profiling.jfr.event.PacketEvent`: `bytes`, `packetId`, `protocolId`, `remoteAddress`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`

## ServerTickTimeEvent

*class* `net.minecraft.util.profiling.jfr.event.ServerTickTimeEvent`

### Fields
- `public static final String EVENT_NAME` (= "minecraft.ServerTickTime")
- `public static final EventType TYPE`
- `public final long averageTickDurationNanos`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`

## ServerTickTimeEvent.Fields

*class* `net.minecraft.util.profiling.jfr.event.ServerTickTimeEvent.Fields`

Enclosing class: ServerTickTimeEvent

### Fields
- `public static final String AVERAGE_TICK_DURATION` (= "averageTickDuration")

## WorldLoadFinishedEvent

*class* `net.minecraft.util.profiling.jfr.event.WorldLoadFinishedEvent`

### Fields
- `public static final String EVENT_NAME` (= "minecraft.LoadWorld")
- `public static final EventType TYPE`

### Inherited methods
- from `jdk.jfr.Event`: `begin`, `commit`, `end`, `isEnabled`, `set`, `shouldCommit`
