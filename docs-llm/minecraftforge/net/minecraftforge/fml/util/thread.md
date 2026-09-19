# net.minecraftforge.fml.util.thread

- [EffectiveSide](#effectiveside)
- [SidedThreadGroup](#sidedthreadgroup)
- [SidedThreadGroups](#sidedthreadgroups)
## EffectiveSide

*class* `net.minecraftforge.fml.util.thread.EffectiveSide`

### Methods
- `public static LogicalSide get()`

## SidedThreadGroup

*class* `net.minecraftforge.fml.util.thread.SidedThreadGroup`

A thread group and factory combination which belongs to a LogicalSide.

### Fields
- `private final LogicalSide side`

### Methods
- `public LogicalSide getSide()`
  Gets the side this sided thread group belongs to.
  - returns: the side
- `public Thread newThread(@NotNull  @NotNull Runnable runnable)`

### Inherited methods
- from `java.lang.ThreadGroup`: `activeCount`, `activeGroupCount`, `allowThreadSuspension`, `checkAccess`, `destroy`, `enumerate`, `enumerate`, `enumerate`, `enumerate`, `getMaxPriority`, `getName`, `getParent`, `interrupt`, `isDaemon`, `isDestroyed`, `list`, `parentOf`, `resume`, `setDaemon`, `setMaxPriority`, `stop`, `suspend`, `toString`, `uncaughtException`

## SidedThreadGroups

*class* `net.minecraftforge.fml.util.thread.SidedThreadGroups`

### Fields
- `public static final SidedThreadGroup CLIENT`
- `public static final SidedThreadGroup SERVER`
