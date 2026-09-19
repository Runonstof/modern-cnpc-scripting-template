# net.minecraftforge.gametest

- [BlockPosValueConverter](#blockposvalueconverter)
- [ForgeGameTestHooks](#forgegametesthooks)
- [GameTestDontPrefix](#gametestdontprefix)
- [GameTestHolder](#gametestholder)
- [GameTestMain](#gametestmain)
- [GameTestPrefix](#gametestprefix)
## BlockPosValueConverter

*class* `net.minecraftforge.gametest.BlockPosValueConverter`

### Methods
- `public BlockPos convert(String value)`
- `public Class<BlockPos> valueType()`
- `public String valuePattern()`

## ForgeGameTestHooks

*class* `net.minecraftforge.gametest.ForgeGameTestHooks`

Internal class used to glue mods into the game test framework.
 Modders should use the supplied annotations and RegisterGameTestsEvent

### Fields
- `private static boolean registeredGametests`
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.objectweb.asm.Type GAME_TEST_HOLDER`
- `private static final String DEFAULT_BATCH`

### Methods
- `public static boolean isGametestEnabled()`
- `public static boolean isGametestServer()`
- `public static void registerGametests()`
- `private static Set<String> getEnabledNamespaces()`
- `private static void addGameTestMethods(net.minecraftforge.forgespi.language.ModFileScanData.AnnotationData annotationData,  Set<Method> gameTestMethods)`
- `public static String getTestName(Method method,  GameTest meta)`
- `private static String getPrefixed(Method method,  String name)`
- `@Nullable private static @Nullable String getPrefix(Method method)`
- `public static String getTestTemplate(Method method,  GameTest meta,  String testName)`
- `private static String getDefaultBatch()`
- `public static String getTestBatch(Method method,  GameTest gametest)`
- `public static void addTest(Collection<TestFunction> functions,  Set<String> classes,  Set<String> filters,  TestFunction func)`

## GameTestDontPrefix

*annotation interface* `net.minecraftforge.gametest.GameTestDontPrefix`

When used on a class, this disables the prefix for all contained tests.

 When used on a method, this disables it for the single test.

## GameTestHolder

*annotation interface* `net.minecraftforge.gametest.GameTestHolder`

Marks a class as containing game tests that should be registered automatically.
 All methods annotated with GameTest or GameTestGenerator will be registered.

## GameTestMain

*class* `net.minecraftforge.gametest.GameTestMain`

### Methods
- `public static void main(String[] args)`

## GameTestPrefix

*annotation interface* `net.minecraftforge.gametest.GameTestPrefix`

This sets the prefix to prepend to test names and templates.

 If this annotation cannot be found the default behavior is to
 look for the {@ Mod @Mod} annotation and use the mod id. If that is
 not found the simple class name is used.
