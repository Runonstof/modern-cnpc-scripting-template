# net.minecraft.crash

- [CrashReport](#crashreport)
- [CrashReportCategory](#crashreportcategory)
- [ICrashReportDetail](#icrashreportdetail)
## CrashReport

*class* `net.minecraft.crash.CrashReport`

### Methods
- `public java.lang.String getDescription()`
- `public java.lang.Throwable getCrashCause()`
- `public void getSectionsInStringBuilder(java.lang.StringBuilder builder)`
- `public java.lang.String getCauseStackTraceOrString()`
- `public java.lang.String getCompleteReport()`
- `public java.io.File getFile()`
- `public boolean saveToFile(java.io.File toFile)`
- `public CrashReportCategory getCategory()`
- `public CrashReportCategory makeCategory(java.lang.String name)`
- `public CrashReportCategory makeCategoryDepth(java.lang.String categoryName,  int stacktraceLength)`
- `public static CrashReport makeCrashReport(java.lang.Throwable causeIn,  java.lang.String descriptionIn)`

## CrashReportCategory

*class* `net.minecraft.crash.CrashReportCategory`

### Methods
- `public static java.lang.String getCoordinateInfo(double x,  double y,  double z)`
- `public static java.lang.String getCoordinateInfo(BlockPos pos)`
- `public static java.lang.String getCoordinateInfo(int x,  int y,  int z)`
- `public void addDetail(java.lang.String nameIn,  ICrashReportDetail<java.lang.String> detail)`
- `public void addCrashSection(java.lang.String sectionName,  java.lang.Object value)`
- `public void addCrashSectionThrowable(java.lang.String sectionName,  java.lang.Throwable throwable)`
- `public int getPrunedStackTrace(int size)`
- `public boolean firstTwoElementsOfStackTraceMatch(java.lang.StackTraceElement s1,  java.lang.StackTraceElement s2)`
- `public void trimStackTraceEntriesFromBottom(int amount)`
- `public void appendToStringBuilder(java.lang.StringBuilder builder)`
- `public java.lang.StackTraceElement[] getStackTrace()`
- `public static void addBlockInfo(CrashReportCategory category,  BlockPos pos,  Block blockIn,  int blockData)`
- `public static void addBlockInfo(CrashReportCategory category,  BlockPos pos,  IBlockState state)`

## ICrashReportDetail

*interface* `net.minecraft.crash.ICrashReportDetail`

All Superinterfaces: java.util.concurrent.Callable<V>

### Inherited methods
- from `java.util.concurrent.Callable`: `call`
