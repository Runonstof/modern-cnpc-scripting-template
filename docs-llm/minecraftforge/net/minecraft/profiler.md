# net.minecraft.profiler

- [ISnooperInfo](#isnooperinfo)
- [Profiler](#profiler)
- [Profiler.Result](#profiler.result)
- [Snooper](#snooper)
## ISnooperInfo

*interface* `net.minecraft.profiler.ISnooperInfo`

### Methods
- `void addServerStatsToSnooper(Snooper playerSnooper)`
- `void addServerTypeToSnooper(Snooper playerSnooper)`
- `boolean isSnooperEnabled()`

## Profiler

*class* `net.minecraft.profiler.Profiler`

### Fields
- `public boolean profilingEnabled`

### Methods
- `public void clearProfiling()`
- `public void startSection(java.lang.String name)`
- `public void func_194340_a(java.util.function.Supplier<java.lang.String> p_194340_1_)`
- `public void endSection()`
- `public java.util.List<Profiler.Result> getProfilingData(java.lang.String profilerName)`
- `public void endStartSection(java.lang.String name)`
- `public java.lang.String getNameOfLastSection()`
- `public void func_194339_b(java.util.function.Supplier<java.lang.String> p_194339_1_)`
- `@Deprecated public void startSection(java.lang.Class<?> profiledClass)` (deprecated)
  Deprecated.
  Forge: Fix for MC-117087, World.updateEntities is wasting time calling Class.getSimpleName() when the profiler is not active

## Profiler.Result

*class* `net.minecraft.profiler.Profiler.Result`

All Implemented Interfaces: java.lang.Comparable<Profiler.Result>

Enclosing class: Profiler

### Fields
- `public double usePercentage`
- `public double totalUsePercentage`
- `public java.lang.String profilerName`

### Methods
- `public int compareTo(Profiler.Result p_compareTo_1_)`
- `public int getColor()`

## Snooper

*class* `net.minecraft.profiler.Snooper`

### Methods
- `public void startSnooper()`
- `public void addMemoryStatsToSnooper()`
- `public void addClientStat(java.lang.String statName,  java.lang.Object statValue)`
- `public void addStatToSnooper(java.lang.String statName,  java.lang.Object statValue)`
- `public java.util.Map<java.lang.String,java.lang.String> getCurrentStats()`
- `public boolean isSnooperRunning()`
- `public void stopSnooper()`
- `public java.lang.String getUniqueID()`
- `public long getMinecraftStartTimeMillis()`
