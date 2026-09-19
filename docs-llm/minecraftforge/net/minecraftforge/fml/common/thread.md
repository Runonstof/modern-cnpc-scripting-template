# net.minecraftforge.fml.common.thread

- [SidedThreadGroup](#sidedthreadgroup)
- [SidedThreadGroups](#sidedthreadgroups)
## SidedThreadGroup

*class* `net.minecraftforge.fml.common.thread.SidedThreadGroup`

A thread group and factory combination which belongs to a Side.

All Implemented Interfaces: java.lang.Thread.UncaughtExceptionHandler, java.util.concurrent.ThreadFactory

### Methods
- `public Side getSide()`
  Gets the side this sided thread group belongs to.
  - returns: the side
- `public java.lang.Thread newThread(java.lang.Runnable runnable)`

### Inherited methods
- from `java.lang.ThreadGroup`: `activeCount`, `activeGroupCount`, `allowThreadSuspension`, `checkAccess`, `destroy`, `enumerate`, `enumerate`, `enumerate`, `enumerate`, `getMaxPriority`, `getName`, `getParent`, `interrupt`, `isDaemon`, `isDestroyed`, `list`, `parentOf`, `resume`, `setDaemon`, `setMaxPriority`, `stop`, `suspend`, `toString`, `uncaughtException`

## SidedThreadGroups

*class* `net.minecraftforge.fml.common.thread.SidedThreadGroups`

### Fields
- `public static final SidedThreadGroup CLIENT`
- `public static final SidedThreadGroup SERVER`
