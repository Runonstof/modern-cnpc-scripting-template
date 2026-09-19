# net.minecraft.util.profiling.jfr.stats

- [ChunkGenStat](#chunkgenstat)
- [Class GcHeapStat.Timing](#class-gcheapstat.timing)
- [CpuLoadStat](#cpuloadstat)
- [FileIOStat](#fileiostat)
- [FileIOStat.Summary](#fileiostat.summary)
- [GcHeapStat](#gcheapstat)
- [GcHeapStat.Summary](#gcheapstat.summary)
- [NetworkPacketSummary](#networkpacketsummary)
- [NetworkPacketSummary.PacketCountAndSize](#networkpacketsummary.packetcountandsize)
- [NetworkPacketSummary.PacketIdentification](#networkpacketsummary.packetidentification)
- [ThreadAllocationStat](#threadallocationstat)
- [ThreadAllocationStat.Summary](#threadallocationstat.summary)
- [TickTimeStat](#ticktimestat)
- [TimedStat](#timedstat)
- [TimedStatSummary](#timedstatsummary)
## ChunkGenStat

*record* `net.minecraft.util.profiling.jfr.stats.ChunkGenStat`

### Fields
- `private final Duration duration`
  The field for the duration record component.
- `private final ChunkPos chunkPos`
  The field for the chunkPos record component.
- `private final ColumnPos worldPos`
  The field for the worldPos record component.
- `private final ChunkStatus status`
  The field for the status record component.
- `private final String level`
  The field for the level record component.

### Methods
- `public static ChunkGenStat from(RecordedEvent p_185605_)`
- `public Duration duration()`
  Returns the value of the duration record component.
  - returns: the value of the duration record component
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
- `public ChunkPos chunkPos()`
  Returns the value of the chunkPos record component.
  - returns: the value of the chunkPos record component
- `public ColumnPos worldPos()`
  Returns the value of the worldPos record component.
  - returns: the value of the worldPos record component
- `public ChunkStatus status()`
  Returns the value of the status record component.
  - returns: the value of the status record component
- `public String level()`
  Returns the value of the level record component.
  - returns: the value of the level record component

## Class GcHeapStat.Timing

*enum* `net.minecraft.util.profiling.jfr.stats.Class GcHeapStat.Timing`

Enclosing class: GcHeapStat

### Methods
- `public static GcHeapStat.Timing[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GcHeapStat.Timing valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CpuLoadStat

*record* `net.minecraft.util.profiling.jfr.stats.CpuLoadStat`

### Fields
- `private final double jvm`
  The field for the jvm record component.
- `private final double userJvm`
  The field for the userJvm record component.
- `private final double system`
  The field for the system record component.

### Methods
- `public static CpuLoadStat from(RecordedEvent p_185623_)`
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
- `public double jvm()`
  Returns the value of the jvm record component.
  - returns: the value of the jvm record component
- `public double userJvm()`
  Returns the value of the userJvm record component.
  - returns: the value of the userJvm record component
- `public double system()`
  Returns the value of the system record component.
  - returns: the value of the system record component

## FileIOStat

*record* `net.minecraft.util.profiling.jfr.stats.FileIOStat`

### Fields
- `private final Duration duration`
  The field for the duration record component.
- `@Nullable private final String path`
  The field for the path record component.
- `private final long bytes`
  The field for the bytes record component.

### Methods
- `public static FileIOStat.Summary summary(Duration p_185641_,  List<FileIOStat> p_185642_)`
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
- `public Duration duration()`
  Returns the value of the duration record component.
  - returns: the value of the duration record component
- `@Nullable public String path()`
  Returns the value of the path record component.
  - returns: the value of the path record component
- `public long bytes()`
  Returns the value of the bytes record component.
  - returns: the value of the bytes record component

## FileIOStat.Summary

*record* `net.minecraft.util.profiling.jfr.stats.FileIOStat.Summary`

Enclosing class: FileIOStat

### Fields
- `private final long totalBytes`
  The field for the totalBytes record component.
- `private final double bytesPerSecond`
  The field for the bytesPerSecond record component.
- `private final long counts`
  The field for the counts record component.
- `private final double countsPerSecond`
  The field for the countsPerSecond record component.
- `private final Duration timeSpentInIO`
  The field for the timeSpentInIO record component.
- `private final List<com.mojang.datafixers.util.Pair<String,Long>> topTenContributorsByTotalBytes`
  The field for the topTenContributorsByTotalBytes record component.

### Methods
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
- `public long totalBytes()`
  Returns the value of the totalBytes record component.
  - returns: the value of the totalBytes record component
- `public double bytesPerSecond()`
  Returns the value of the bytesPerSecond record component.
  - returns: the value of the bytesPerSecond record component
- `public long counts()`
  Returns the value of the counts record component.
  - returns: the value of the counts record component
- `public double countsPerSecond()`
  Returns the value of the countsPerSecond record component.
  - returns: the value of the countsPerSecond record component
- `public Duration timeSpentInIO()`
  Returns the value of the timeSpentInIO record component.
  - returns: the value of the timeSpentInIO record component
- `public List<com.mojang.datafixers.util.Pair<String,Long>> topTenContributorsByTotalBytes()`
  Returns the value of the topTenContributorsByTotalBytes record component.
  - returns: the value of the topTenContributorsByTotalBytes record component

## GcHeapStat

*record* `net.minecraft.util.profiling.jfr.stats.GcHeapStat`

### Fields
- `private final Instant timestamp`
  The field for the timestamp record component.
- `private final long heapUsed`
  The field for the heapUsed record component.
- `private final GcHeapStat.Timing timing`
  The field for the timing record component.

### Methods
- `public static GcHeapStat from(RecordedEvent p_185698_)`
- `public static GcHeapStat.Summary summary(Duration p_185691_,  List<GcHeapStat> p_185692_,  Duration p_185693_,  int p_185694_)`
- `private static double calculateAllocationRatePerSecond(List<GcHeapStat> p_185696_)`
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
- `public Instant timestamp()`
  Returns the value of the timestamp record component.
  - returns: the value of the timestamp record component
- `public long heapUsed()`
  Returns the value of the heapUsed record component.
  - returns: the value of the heapUsed record component
- `public GcHeapStat.Timing timing()`
  Returns the value of the timing record component.
  - returns: the value of the timing record component

## GcHeapStat.Summary

*record* `net.minecraft.util.profiling.jfr.stats.GcHeapStat.Summary`

Enclosing class: GcHeapStat

### Fields
- `private final Duration duration`
  The field for the duration record component.
- `private final Duration gcTotalDuration`
  The field for the gcTotalDuration record component.
- `private final int totalGCs`
  The field for the totalGCs record component.
- `private final double allocationRateBytesPerSecond`
  The field for the allocationRateBytesPerSecond record component.

### Methods
- `public float gcOverHead()`
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
- `public Duration duration()`
  Returns the value of the duration record component.
  - returns: the value of the duration record component
- `public Duration gcTotalDuration()`
  Returns the value of the gcTotalDuration record component.
  - returns: the value of the gcTotalDuration record component
- `public int totalGCs()`
  Returns the value of the totalGCs record component.
  - returns: the value of the totalGCs record component
- `public double allocationRateBytesPerSecond()`
  Returns the value of the allocationRateBytesPerSecond record component.
  - returns: the value of the allocationRateBytesPerSecond record component

## NetworkPacketSummary

*class* `net.minecraft.util.profiling.jfr.stats.NetworkPacketSummary`

### Fields
- `private final NetworkPacketSummary.PacketCountAndSize totalPacketCountAndSize`
- `private final List<com.mojang.datafixers.util.Pair<NetworkPacketSummary.PacketIdentification,NetworkPacketSummary.PacketCountAndSize>> largestSizeContributors`
- `private final Duration recordingDuration`

### Methods
- `public double getCountsPerSecond()`
- `public double getSizePerSecond()`
- `public long getTotalCount()`
- `public long getTotalSize()`
- `public List<com.mojang.datafixers.util.Pair<NetworkPacketSummary.PacketIdentification,NetworkPacketSummary.PacketCountAndSize>> largestSizeContributors()`

## NetworkPacketSummary.PacketCountAndSize

*record* `net.minecraft.util.profiling.jfr.stats.NetworkPacketSummary.PacketCountAndSize`

Enclosing class: NetworkPacketSummary

### Fields
- `private final long totalCount`
  The field for the totalCount record component.
- `private final long totalSize`
  The field for the totalSize record component.
- `static final Comparator<NetworkPacketSummary.PacketCountAndSize> SIZE_THEN_COUNT`

### Methods
- `NetworkPacketSummary.PacketCountAndSize add(NetworkPacketSummary.PacketCountAndSize p_185755_)`
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
- `public long totalCount()`
  Returns the value of the totalCount record component.
  - returns: the value of the totalCount record component
- `public long totalSize()`
  Returns the value of the totalSize record component.
  - returns: the value of the totalSize record component

## NetworkPacketSummary.PacketIdentification

*record* `net.minecraft.util.profiling.jfr.stats.NetworkPacketSummary.PacketIdentification`

Enclosing class: NetworkPacketSummary

### Fields
- `private final PacketFlow direction`
  The field for the direction record component.
- `private final String protocolId`
  The field for the protocolId record component.
- `private final int packetId`
  The field for the packetId record component.
- `private static final Map<NetworkPacketSummary.PacketIdentification,String> PACKET_NAME_BY_ID`

### Methods
- `public String packetName()`
- `public static NetworkPacketSummary.PacketIdentification from(RecordedEvent p_185778_)`
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
- `public PacketFlow direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component
- `public String protocolId()`
  Returns the value of the protocolId record component.
  - returns: the value of the protocolId record component
- `public int packetId()`
  Returns the value of the packetId record component.
  - returns: the value of the packetId record component

## ThreadAllocationStat

*record* `net.minecraft.util.profiling.jfr.stats.ThreadAllocationStat`

### Fields
- `private final Instant timestamp`
  The field for the timestamp record component.
- `private final String threadName`
  The field for the threadName record component.
- `private final long totalBytes`
  The field for the totalBytes record component.
- `private static final String UNKNOWN_THREAD` (= "unknown")

### Methods
- `public static ThreadAllocationStat from(RecordedEvent p_185804_)`
- `public static ThreadAllocationStat.Summary summary(List<ThreadAllocationStat> p_185798_)`
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
- `public Instant timestamp()`
  Returns the value of the timestamp record component.
  - returns: the value of the timestamp record component
- `public String threadName()`
  Returns the value of the threadName record component.
  - returns: the value of the threadName record component
- `public long totalBytes()`
  Returns the value of the totalBytes record component.
  - returns: the value of the totalBytes record component

## ThreadAllocationStat.Summary

*record* `net.minecraft.util.profiling.jfr.stats.ThreadAllocationStat.Summary`

Enclosing class: ThreadAllocationStat

### Fields
- `private final Map<String,Double> allocationsPerSecondByThread`
  The field for the allocationsPerSecondByThread record component.

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
- `public Map<String,Double> allocationsPerSecondByThread()`
  Returns the value of the allocationsPerSecondByThread record component.
  - returns: the value of the allocationsPerSecondByThread record component

## TickTimeStat

*record* `net.minecraft.util.profiling.jfr.stats.TickTimeStat`

### Fields
- `private final Instant timestamp`
  The field for the timestamp record component.
- `private final Duration currentAverage`
  The field for the currentAverage record component.

### Methods
- `public static TickTimeStat from(RecordedEvent p_185826_)`
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
- `public Instant timestamp()`
  Returns the value of the timestamp record component.
  - returns: the value of the timestamp record component
- `public Duration currentAverage()`
  Returns the value of the currentAverage record component.
  - returns: the value of the currentAverage record component

## TimedStat

*interface* `net.minecraft.util.profiling.jfr.stats.TimedStat`

### Methods
- `Duration duration()`

## TimedStatSummary

*record* `net.minecraft.util.profiling.jfr.stats.TimedStatSummary`

### Fields
- `private final T extends TimedStat fastest`
  The field for the fastest record component.
- `private final T extends TimedStat slowest`
  The field for the slowest record component.
- `@Nullable private final T extends TimedStat secondSlowest`
  The field for the secondSlowest record component.
- `private final int count`
  The field for the count record component.
- `private final Map<Integer,Double> percentilesNanos`
  The field for the percentilesNanos record component.
- `private final Duration totalDuration`
  The field for the totalDuration record component.

### Methods
- `public static <T extends TimedStat> TimedStatSummary<T> summary(List<T> p_185850_)`
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
- `public T fastest()`
  Returns the value of the fastest record component.
  - returns: the value of the fastest record component
- `public T slowest()`
  Returns the value of the slowest record component.
  - returns: the value of the slowest record component
- `@Nullable public T secondSlowest()`
  Returns the value of the secondSlowest record component.
  - returns: the value of the secondSlowest record component
- `public int count()`
  Returns the value of the count record component.
  - returns: the value of the count record component
- `public Map<Integer,Double> percentilesNanos()`
  Returns the value of the percentilesNanos record component.
  - returns: the value of the percentilesNanos record component
- `public Duration totalDuration()`
  Returns the value of the totalDuration record component.
  - returns: the value of the totalDuration record component
