# net.minecraft.util.profiling.jfr.parse

- [JfrStatsParser](#jfrstatsparser)
- [JfrStatsParser.MutableCountAndSize](#jfrstatsparser.mutablecountandsize)
- [JfrStatsResult](#jfrstatsresult)
## JfrStatsParser

*class* `net.minecraft.util.profiling.jfr.parse.JfrStatsParser`

### Fields
- `private Instant recordingStarted`
- `private Instant recordingEnded`
- `private final List<ChunkGenStat> chunkGenStats`
- `private final List<CpuLoadStat> cpuLoadStat`
- `private final Map<NetworkPacketSummary.PacketIdentification,JfrStatsParser.MutableCountAndSize> receivedPackets`
- `private final Map<NetworkPacketSummary.PacketIdentification,JfrStatsParser.MutableCountAndSize> sentPackets`
- `private final List<FileIOStat> fileWrites`
- `private final List<FileIOStat> fileReads`
- `private int garbageCollections`
- `private Duration gcTotalDuration`
- `private final List<GcHeapStat> gcHeapStats`
- `private final List<ThreadAllocationStat> threadAllocationStats`
- `private final List<TickTimeStat> tickTimes`
- `@Nullable private Duration worldCreationDuration`

### Methods
- `public static JfrStatsResult parse(Path p_185448_)`
- `private JfrStatsResult results()`
- `private void capture(Stream<RecordedEvent> p_185455_)`
- `private void incrementPacket(RecordedEvent p_185459_,  int p_185460_,  Map<NetworkPacketSummary.PacketIdentification,JfrStatsParser.MutableCountAndSize> p_185461_)`
- `private void appendFileIO(RecordedEvent p_185463_,  List<FileIOStat> p_185464_,  String p_185465_)`
- `private static NetworkPacketSummary collectPacketStats(Duration p_185450_,  Map<NetworkPacketSummary.PacketIdentification,JfrStatsParser.MutableCountAndSize> p_185451_)`

## JfrStatsParser.MutableCountAndSize

*class* `net.minecraft.util.profiling.jfr.parse.JfrStatsParser.MutableCountAndSize`

Enclosing class: JfrStatsParser

### Fields
- `private long count`
- `private long totalSize`

### Methods
- `public void increment(int p_185477_)`
- `public NetworkPacketSummary.PacketCountAndSize toCountAndSize()`

## JfrStatsResult

*record* `net.minecraft.util.profiling.jfr.parse.JfrStatsResult`

### Fields
- `private final Instant recordingStarted`
  The field for the recordingStarted record component.
- `private final Instant recordingEnded`
  The field for the recordingEnded record component.
- `private final Duration recordingDuration`
  The field for the recordingDuration record component.
- `@Nullable private final Duration worldCreationDuration`
  The field for the worldCreationDuration record component.
- `private final List<TickTimeStat> tickTimes`
  The field for the tickTimes record component.
- `private final List<CpuLoadStat> cpuLoadStats`
  The field for the cpuLoadStats record component.
- `private final GcHeapStat.Summary heapSummary`
  The field for the heapSummary record component.
- `private final ThreadAllocationStat.Summary threadAllocationSummary`
  The field for the threadAllocationSummary record component.
- `private final NetworkPacketSummary receivedPacketsSummary`
  The field for the receivedPacketsSummary record component.
- `private final NetworkPacketSummary sentPacketsSummary`
  The field for the sentPacketsSummary record component.
- `private final FileIOStat.Summary fileWrites`
  The field for the fileWrites record component.
- `private final FileIOStat.Summary fileReads`
  The field for the fileReads record component.
- `private final List<ChunkGenStat> chunkGenStats`
  The field for the chunkGenStats record component.

### Methods
- `public List<com.mojang.datafixers.util.Pair<ChunkStatus,TimedStatSummary<ChunkGenStat>>> chunkGenSummary()`
- `public String asJson()`
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
- `public Instant recordingStarted()`
  Returns the value of the recordingStarted record component.
  - returns: the value of the recordingStarted record component
- `public Instant recordingEnded()`
  Returns the value of the recordingEnded record component.
  - returns: the value of the recordingEnded record component
- `public Duration recordingDuration()`
  Returns the value of the recordingDuration record component.
  - returns: the value of the recordingDuration record component
- `@Nullable public Duration worldCreationDuration()`
  Returns the value of the worldCreationDuration record component.
  - returns: the value of the worldCreationDuration record component
- `public List<TickTimeStat> tickTimes()`
  Returns the value of the tickTimes record component.
  - returns: the value of the tickTimes record component
- `public List<CpuLoadStat> cpuLoadStats()`
  Returns the value of the cpuLoadStats record component.
  - returns: the value of the cpuLoadStats record component
- `public GcHeapStat.Summary heapSummary()`
  Returns the value of the heapSummary record component.
  - returns: the value of the heapSummary record component
- `public ThreadAllocationStat.Summary threadAllocationSummary()`
  Returns the value of the threadAllocationSummary record component.
  - returns: the value of the threadAllocationSummary record component
- `public NetworkPacketSummary receivedPacketsSummary()`
  Returns the value of the receivedPacketsSummary record component.
  - returns: the value of the receivedPacketsSummary record component
- `public NetworkPacketSummary sentPacketsSummary()`
  Returns the value of the sentPacketsSummary record component.
  - returns: the value of the sentPacketsSummary record component
- `public FileIOStat.Summary fileWrites()`
  Returns the value of the fileWrites record component.
  - returns: the value of the fileWrites record component
- `public FileIOStat.Summary fileReads()`
  Returns the value of the fileReads record component.
  - returns: the value of the fileReads record component
- `public List<ChunkGenStat> chunkGenStats()`
  Returns the value of the chunkGenStats record component.
  - returns: the value of the chunkGenStats record component
