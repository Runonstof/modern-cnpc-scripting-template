# net.minecraftforge.server.timings

- [ForgeTimings](#forgetimings)
- [TimeTracker](#timetracker)
## ForgeTimings

*class* `net.minecraftforge.server.timings.ForgeTimings`

ForgeTimings aggregates timings data collected by TimeTracker for an Object
 and performs operations for interpretation of the data.

### Fields
- `private WeakReference<T> object`
- `private int[] rawTimingData`

### Methods
- `public WeakReference<T> getObject()`
  Retrieves the object that the timings are for
  - returns: The object
- `public double getAverageTimings()`
  Averages the raw timings data collected
  - returns: An average of the raw timing data

## TimeTracker

*class* `net.minecraftforge.server.timings.TimeTracker`

A class to assist in the collection of data to measure the update times of ticking objects {currently Tile Entities and Entities}

### Fields
- `public static final TimeTracker<BlockEntity> BLOCK_ENTITY_UPDATE`
  A tracker for timing tile entity update
- `public static final TimeTracker<Entity> ENTITY_UPDATE`
  A tracker for timing entity updates
- `private boolean enabled`
- `private int trackingDuration`
- `private Map<T,int[]> timings`
- `private WeakReference<T> currentlyTracking`
- `private long trackTime`
- `private long timing`

### Methods
- `public com.google.common.collect.ImmutableList<ForgeTimings<T>> getTimingData()`
  Returns the timings data recorded by the tracker
  - returns: An immutable list of timings data collected by this tracker
- `public void reset()`
  Resets the tracker (clears timings and stops any in-progress timings)
- `public void trackEnd(T tracking)`
  Ends the timing of the currently tracking object
  - param: tracking - The object to stop timing
- `public void enable(int duration)`
  Starts recording tracking data for the given duration in seconds
  - param: duration - The duration for the time to track
- `public void trackStart(T toTrack)`
  Starts timing of the provided object
  - param: toTrack - The object to start timing
- `private void trackEnd(T object,  long nanoTime)`
- `private void trackStart(T toTrack,  long nanoTime)`
