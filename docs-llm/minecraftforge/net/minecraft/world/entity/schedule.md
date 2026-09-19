# net.minecraft.world.entity.schedule

- [Activity](#activity)
- [Keyframe](#keyframe)
- [Schedule](#schedule)
- [ScheduleBuilder](#schedulebuilder)
- [ScheduleBuilder.ActivityTransition](#schedulebuilder.activitytransition)
- [Timeline](#timeline)
## Activity

*class* `net.minecraft.world.entity.schedule.Activity`

### Fields
- `public static final Activity CORE`
- `public static final Activity IDLE`
- `public static final Activity WORK`
- `public static final Activity PLAY`
- `public static final Activity REST`
- `public static final Activity MEET`
- `public static final Activity PANIC`
- `public static final Activity RAID`
- `public static final Activity PRE_RAID`
- `public static final Activity HIDE`
- `public static final Activity FIGHT`
- `public static final Activity CELEBRATE`
- `public static final Activity ADMIRE_ITEM`
- `public static final Activity AVOID`
- `public static final Activity RIDE`
- `public static final Activity PLAY_DEAD`
- `public static final Activity LONG_JUMP`
- `public static final Activity RAM`
- `public static final Activity TONGUE`
- `public static final Activity SWIM`
- `public static final Activity LAY_SPAWN`
- `public static final Activity SNIFF`
- `public static final Activity INVESTIGATE`
- `public static final Activity ROAR`
- `public static final Activity EMERGE`
- `public static final Activity DIG`
- `private final String name`
- `private final int hashCode`

### Methods
- `public String getName()`
- `private static Activity register(String p_38000_)`
- `public boolean equals(Object p_38002_)`
- `public int hashCode()`
- `public String toString()`

## Keyframe

*class* `net.minecraft.world.entity.schedule.Keyframe`

### Fields
- `private final int timeStamp`
- `private final float value`

### Methods
- `public int getTimeStamp()`
- `public float getValue()`

## Schedule

*class* `net.minecraft.world.entity.schedule.Schedule`

### Fields
- `public static final int WORK_START_TIME` (= 2000)
- `public static final int TOTAL_WORK_TIME` (= 7000)
- `public static final Schedule EMPTY`
- `public static final Schedule SIMPLE`
- `public static final Schedule VILLAGER_BABY`
- `public static final Schedule VILLAGER_DEFAULT`
- `private final Map<Activity,Timeline> timelines`

### Methods
- `protected static ScheduleBuilder register(String p_38030_)`
- `protected void ensureTimelineExistsFor(Activity p_38025_)`
- `protected Timeline getTimelineFor(Activity p_38032_)`
- `protected List<Timeline> getAllTimelinesExceptFor(Activity p_38034_)`
- `public Activity getActivityAt(int p_38020_)`

## ScheduleBuilder

*class* `net.minecraft.world.entity.schedule.ScheduleBuilder`

### Fields
- `private final Schedule schedule`
- `private final List<ScheduleBuilder.ActivityTransition> transitions`

### Methods
- `public ScheduleBuilder changeActivityAt(int p_38041_,  Activity p_38042_)`
- `public Schedule build()`

## ScheduleBuilder.ActivityTransition

*class* `net.minecraft.world.entity.schedule.ScheduleBuilder.ActivityTransition`

Enclosing class: ScheduleBuilder

### Fields
- `private final int time`
- `private final Activity activity`

### Methods
- `public int getTime()`
- `public Activity getActivity()`

## Timeline

*class* `net.minecraft.world.entity.schedule.Timeline`

### Fields
- `private final List<Keyframe> keyframes`
- `private int previousIndex`

### Methods
- `public com.google.common.collect.ImmutableList<Keyframe> getKeyframes()`
- `public Timeline addKeyframe(int p_38061_,  float p_38062_)`
- `public Timeline addKeyframes(Collection<Keyframe> p_150248_)`
- `private void sortAndDeduplicateKeyframes()`
- `public float getValueAt(int p_38059_)`
