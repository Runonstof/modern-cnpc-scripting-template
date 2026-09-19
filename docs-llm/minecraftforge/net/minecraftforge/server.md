# net.minecraftforge.server

- [LanguageHook](#languagehook)
- [ServerLifecycleHooks](#serverlifecyclehooks)
## LanguageHook

*class* `net.minecraftforge.server.LanguageHook`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final com.google.gson.Gson GSON`
- `private static final Pattern PATTERN`
- `private static List<Map<String,String>> capturedTables`
- `private static Map<String,String> modTable`

### Methods
- `public static void captureLanguageMap(Map<String,String> table)`
  Loads lang files on the server
- `private static void loadLocaleData(List<Resource> allResources)`
- `private static void loadLocaleData(InputStream inputstream)`
- `private static void loadLanguage(String langName,  MinecraftServer server)`
- `public static void loadForgeAndMCLangs()`
- `static void loadLanguagesOnServer(MinecraftServer server)`

## ServerLifecycleHooks

*class* `net.minecraftforge.server.ServerLifecycleHooks`

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker SERVERHOOKS`
- `private static final LevelResource SERVERCONFIG`
- `private static final AtomicBoolean allowLogins`
- `private static volatile CountDownLatch exitLatch`
- `private static MinecraftServer currentServer`

### Methods
- `private static Path getServerConfigPath(MinecraftServer server)`
- `public static boolean handleServerAboutToStart(MinecraftServer server)`
- `public static boolean handleServerStarting(MinecraftServer server)`
- `public static void expectServerStopped()`
- `public static void handleServerStopped(MinecraftServer server)`
- `public static MinecraftServer getCurrentServer()`
- `@Internal public static RepositorySource buildPackFinder(Map<net.minecraftforge.forgespi.locating.IModFile,? extends PathPackResources> modResourcePacks)`
- `private static void serverPackFinder(Map<net.minecraftforge.forgespi.locating.IModFile,? extends PathPackResources> modResourcePacks,  Consumer<Pack> packAcceptor)`
- `private static void runModifiers(MinecraftServer server)`
- `public static void handleServerStarted(MinecraftServer server)`
- `public static void handleServerStopping(MinecraftServer server)`
- `public static boolean handleServerLogin(ClientIntentionPacket packet,  Connection connection)`
- `private static boolean rejectConnection(Connection connection,  ConnectionType type,  String message)`
