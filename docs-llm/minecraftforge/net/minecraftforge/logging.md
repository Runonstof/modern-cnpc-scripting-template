# net.minecraftforge.logging

- [CrashReportAnalyser](#crashreportanalyser)
- [CrashReportExtender](#crashreportextender)
## CrashReportAnalyser

*class* `net.minecraftforge.logging.CrashReportAnalyser`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Map<String,net.minecraftforge.forgespi.language.IModInfo> PACKAGE_MOD_CACHE`
- `private static final Map<net.minecraftforge.forgespi.language.IModInfo,String[]> SUSPECTED_MODS`

### Methods
- `public static String appendSuspectedMods(Throwable throwable,  StackTraceElement[] uncategorizedStackTrace)`
  Tries to cache, analyze and append the suspected mods for this crash to the crash report.
- `private static void analyseCrashReport(Throwable throwable,  StackTraceElement[] uncategorizedStackTrace)`
  Tries to analyze the given exception and uncategorized stacktrace of the crash report.
   It checks the stacktrace for any occurrence of the package names cached in the PACKAGE_MOD_CACHE,
   including mixin classes.
- `private static void buildSuspectedModsSection(StringBuilder stringBuilder)`
  Converts the suspected mod(s) for this crash to a String to be added to the crash report,
   including the mods name, its id, version and an issues link if available,
   as well as the position where the exception occurred (either the stacktrace element
   or the mixin class and its target(s))
- `private static void scanThrowable(Throwable throwable)`
  Checks the stacktrace of the given throwable and all its children for any occurrence of the package names cached in the PACKAGE_MOD_CACHE,
   including mixin classes.
- `private static void scanStacktrace(StackTraceElement[] stackTrace)`
  Checks the given stacktrace for any occurrence of the package names cached in the PACKAGE_MOD_CACHE,
   including mixin classes.
- `private static void cacheModList()`
  Iterates over all loaded mods, resolving and caching their package names with the corresponding IModInfo.
- `private static void identifyByClass(StackTraceElement stackTraceElement)`
- `private static void identifyByMixins(StackTraceElement stackTraceElement)`
- `private static void blameIfPresent(StackTraceElement stackTraceElement)`
- `private static void blameIfPresent(String className,  String... position)`
- `@Nullable private static String findMatchingPackage(String className)`
  Checks if the beginning of the given class name is contained in the PACKAGE_MOD_CACHE
  - returns: the package name of the class or null if it is not present in the cache
- `@Nullable private static org.spongepowered.asm.mixin.transformer.meta.MixinMerged findMixinMerged(StackTraceElement element)`
- `@Nullable private static org.spongepowered.asm.mixin.extensibility.IMixinInfo getMixinInfo(StackTraceElement element)`
  Tries to identify any applied mixin for the class and method provided by the stacktrace element.
  - param: element - the stacktrace element to check
  - returns: the IMixinInfo for the class and method or null if there is no mixin applied at this position

## CrashReportExtender

*class* `net.minecraftforge.logging.CrashReportExtender`

### Methods
- `public static void extendSystemReport(SystemReport systemReport)`
- `public static String generateEnhancedStackTrace(Throwable throwable)`
- `public static String generateEnhancedStackTrace(StackTraceElement[] stacktrace)`
- `public static String generateEnhancedStackTrace(Throwable throwable,  boolean header)`
- `public static File dumpModLoadingCrashReport(org.apache.logging.log4j.Logger logger,  LoadingFailedException error,  File topLevelDir)`
