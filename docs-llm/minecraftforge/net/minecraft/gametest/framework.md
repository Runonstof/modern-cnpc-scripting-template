# net.minecraft.gametest.framework

- [AfterBatch](#afterbatch)
- [BeforeBatch](#beforebatch)
- [ExhaustedAttemptsException](#exhaustedattemptsexception)
- [GameTest](#gametest)
- [GameTestAssertException](#gametestassertexception)
- [GameTestAssertPosException](#gametestassertposexception)
- [GameTestBatch](#gametestbatch)
- [GameTestBatchRunner](#gametestbatchrunner)
- [GameTestEvent](#gametestevent)
- [GameTestGenerator](#gametestgenerator)
- [GameTestHelper](#gametesthelper)
- [GameTestInfo](#gametestinfo)
- [GameTestListener](#gametestlistener)
- [GameTestRegistry](#gametestregistry)
- [GameTestRunner](#gametestrunner)
- [GameTestSequence](#gametestsequence)
- [GameTestSequence.Condition](#gametestsequence.condition)
- [GameTestServer](#gametestserver)
- [GameTestTicker](#gametestticker)
- [GameTestTimeoutException](#gametesttimeoutexception)
- [GlobalTestReporter](#globaltestreporter)
- [JUnitLikeTestReporter](#junitliketestreporter)
- [LogTestReporter](#logtestreporter)
- [MultipleTestTracker](#multipletesttracker)
- [ReportGameListener](#reportgamelistener)
- [StructureUtils](#structureutils)
- [TeamcityTestReporter](#teamcitytestreporter)
- [TestClassNameArgument](#testclassnameargument)
- [TestCommand](#testcommand)
- [TestCommand.TestSummaryDisplayer](#testcommand.testsummarydisplayer)
- [TestFunction](#testfunction)
- [TestFunctionArgument](#testfunctionargument)
- [TestReporter](#testreporter)
## AfterBatch

*annotation interface* `net.minecraft.gametest.framework.AfterBatch`

## BeforeBatch

*annotation interface* `net.minecraft.gametest.framework.BeforeBatch`

## ExhaustedAttemptsException

*class* `net.minecraft.gametest.framework.ExhaustedAttemptsException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## GameTest

*annotation interface* `net.minecraft.gametest.framework.GameTest`

## GameTestAssertException

*class* `net.minecraft.gametest.framework.GameTestAssertException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## GameTestAssertPosException

*class* `net.minecraft.gametest.framework.GameTestAssertPosException`

### Fields
- `private final BlockPos absolutePos`
- `private final BlockPos relativePos`
- `private final long tick`

### Methods
- `public String getMessage()`
- `@Nullable public String getMessageToShowAtBlock()`
- `@Nullable public BlockPos getRelativePos()`
- `@Nullable public BlockPos getAbsolutePos()`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## GameTestBatch

*class* `net.minecraft.gametest.framework.GameTestBatch`

### Fields
- `public static final String DEFAULT_BATCH_NAME` (= "defaultBatch")
- `private final String name`
- `private final Collection<TestFunction> testFunctions`
- `@Nullable private final Consumer<ServerLevel> beforeBatchFunction`
- `@Nullable private final Consumer<ServerLevel> afterBatchFunction`

### Methods
- `public String getName()`
- `public Collection<TestFunction> getTestFunctions()`
- `public void runBeforeBatchFunction(ServerLevel p_127548_)`
- `public void runAfterBatchFunction(ServerLevel p_177064_)`

## GameTestBatchRunner

*class* `net.minecraft.gametest.framework.GameTestBatchRunner`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final BlockPos firstTestNorthWestCorner`
- `final ServerLevel level`
- `private final GameTestTicker testTicker`
- `private final int testsPerRow`
- `private final List<GameTestInfo> allTestInfos`
- `private final List<com.mojang.datafixers.util.Pair<GameTestBatch,Collection<GameTestInfo>>> batches`
- `private int count`
- `private AABB rowBounds`
- `private final BlockPos.MutableBlockPos nextTestNorthWestCorner`

### Methods
- `public List<GameTestInfo> getTestInfos()`
- `public void start()`
- `void runBatch(int p_127571_)`
- `private Map<GameTestInfo,BlockPos> createStructuresForBatch(Collection<GameTestInfo> p_177076_)`

## GameTestEvent

*class* `net.minecraft.gametest.framework.GameTestEvent`

### Fields
- `@Nullable public final Long expectedDelay`
- `public final Runnable assertion`

### Methods
- `static GameTestEvent create(Runnable p_177098_)`
- `static GameTestEvent create(long p_177095_,  Runnable p_177096_)`

## GameTestGenerator

*annotation interface* `net.minecraft.gametest.framework.GameTestGenerator`

## GameTestHelper

*class* `net.minecraft.gametest.framework.GameTestHelper`

### Fields
- `private final GameTestInfo testInfo`
- `private boolean finalCheckAdded`

### Methods
- `public ServerLevel getLevel()`
- `public BlockState getBlockState(BlockPos p_177233_)`
- `@Nullable public BlockEntity getBlockEntity(BlockPos p_177348_)`
- `public void killAllEntities()`
- `public void killAllEntitiesOfClass(Class p_289538_)`
- `public ItemEntity spawnItem(Item p_177190_,  float p_177191_,  float p_177192_,  float p_177193_)`
- `public ItemEntity spawnItem(Item p_251435_,  BlockPos p_250287_)`
- `public <E extends Entity> E spawn(EntityType<E> p_177177_,  BlockPos p_177178_)`
- `public <E extends Entity> E spawn(EntityType<E> p_177174_,  Vec3 p_177175_)`
- `public <E extends Entity> E spawn(EntityType<E> p_177169_,  int p_177170_,  int p_177171_,  int p_177172_)`
- `public <E extends Entity> E spawn(EntityType<E> p_177164_,  float p_177165_,  float p_177166_,  float p_177167_)`
- `public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177330_,  BlockPos p_177331_)`
- `public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177322_,  int p_177323_,  int p_177324_,  int p_177325_)`
- `public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177327_,  Vec3 p_177328_)`
- `public <E extends Mob> E spawnWithNoFreeWill(EntityType<E> p_177317_,  float p_177318_,  float p_177319_,  float p_177320_)`
- `public GameTestSequence walkTo(Mob p_177186_,  BlockPos p_177187_,  float p_177188_)`
- `public void pressButton(int p_177104_,  int p_177105_,  int p_177106_)`
- `public void pressButton(BlockPos p_177386_)`
- `public void useBlock(BlockPos p_177409_)`
- `public void useBlock(BlockPos p_250131_,  Player p_251507_)`
- `public void useBlock(BlockPos p_262023_,  Player p_261901_,  BlockHitResult p_262040_)`
- `public LivingEntity makeAboutToDrown(LivingEntity p_177184_)`
- `public Player makeMockSurvivalPlayer()`
- `public LivingEntity withLowHealth(LivingEntity p_286794_)`
- `public Player makeMockPlayer()`
- `@Deprecated(forRemoval=true) public ServerPlayer makeMockServerPlayerInLevel()` (deprecated)
- `public void pullLever(int p_177303_,  int p_177304_,  int p_177305_)`
- `public void pullLever(BlockPos p_177422_)`
- `public void pulseRedstone(BlockPos p_177235_,  long p_177236_)`
- `public void destroyBlock(BlockPos p_177435_)`
- `public void setBlock(int p_177108_,  int p_177109_,  int p_177110_,  Block p_177111_)`
- `public void setBlock(int p_177113_,  int p_177114_,  int p_177115_,  BlockState p_177116_)`
- `public void setBlock(BlockPos p_177246_,  Block p_177247_)`
- `public void setBlock(BlockPos p_177253_,  BlockState p_177254_)`
- `public void setNight()`
- `public void setDayTime(int p_177102_)`
- `public void assertBlockPresent(Block p_177204_,  int p_177205_,  int p_177206_,  int p_177207_)`
- `public void assertBlockPresent(Block p_177209_,  BlockPos p_177210_)`
- `public void assertBlockNotPresent(Block p_177337_,  int p_177338_,  int p_177339_,  int p_177340_)`
- `public void assertBlockNotPresent(Block p_177342_,  BlockPos p_177343_)`
- `public void succeedWhenBlockPresent(Block p_177378_,  int p_177379_,  int p_177380_,  int p_177381_)`
- `public void succeedWhenBlockPresent(Block p_177383_,  BlockPos p_177384_)`
- `public void assertBlock(BlockPos p_177272_,  Predicate<Block> p_177273_,  String p_177274_)`
- `public void assertBlock(BlockPos p_177276_,  Predicate<Block> p_177277_,  Supplier<String> p_177278_)`
- `public <T extends Comparable<T>> void assertBlockProperty(BlockPos p_177256_,  Property<T> p_177257_,  T p_177258_)`
- `public <T extends Comparable<T>> void assertBlockProperty(BlockPos p_177260_,  Property<T> p_177261_,  Predicate<T> p_177262_,  String p_177263_)`
- `public void assertBlockState(BlockPos p_177358_,  Predicate<BlockState> p_177359_,  Supplier<String> p_177360_)`
- `public void assertRedstoneSignal(BlockPos p_289644_,  Direction p_289642_,  IntPredicate p_289645_,  Supplier<String> p_289684_)`
- `public void assertEntityPresent(EntityType<?> p_177157_)`
- `public void assertEntityPresent(EntityType<?> p_177370_,  int p_177371_,  int p_177372_,  int p_177373_)`
- `public void assertEntityPresent(EntityType<?> p_177375_,  BlockPos p_177376_)`
- `public void assertEntityPresent(EntityType<?> p_252010_,  Vec3 p_249488_,  Vec3 p_251186_)`
- `public void assertEntitiesPresent(EntityType<?> p_239372_,  BlockPos p_239373_,  int p_239374_,  double p_239375_)`
- `public void assertEntityPresent(EntityType<?> p_177180_,  BlockPos p_177181_,  double p_177182_)`
- `public <T extends Entity> List<T> getEntities(EntityType<T> p_238400_,  BlockPos p_238401_,  double p_238402_)`
- `public void assertEntityInstancePresent(Entity p_177133_,  int p_177134_,  int p_177135_,  int p_177136_)`
- `public void assertEntityInstancePresent(Entity p_177141_,  BlockPos p_177142_)`
- `public void assertItemEntityCountIs(Item p_177199_,  BlockPos p_177200_,  double p_177201_,  int p_177202_)`
- `public void assertItemEntityPresent(Item p_177195_,  BlockPos p_177196_,  double p_177197_)`
- `public void assertItemEntityNotPresent(Item p_236779_,  BlockPos p_236780_,  double p_236781_)`
- `public void assertEntityNotPresent(EntityType<?> p_177310_)`
- `public void assertEntityNotPresent(EntityType<?> p_177398_,  int p_177399_,  int p_177400_,  int p_177401_)`
- `public void assertEntityNotPresent(EntityType<?> p_177403_,  BlockPos p_177404_)`
- `public void assertEntityTouching(EntityType<?> p_177159_,  double p_177160_,  double p_177161_,  double p_177162_)`
- `public void assertEntityNotTouching(EntityType<?> p_177312_,  double p_177313_,  double p_177314_,  double p_177315_)`
- `public <E extends Entity, T> void assertEntityData(BlockPos p_177238_,  EntityType<E> p_177239_,  Function<? super E,T> p_177240_,  @Nullable  T p_177241_)`
- `public <E extends LivingEntity> void assertEntityIsHolding(BlockPos p_263501_,  EntityType<E> p_263510_,  Item p_263517_)`
- `public <E extends Entity & InventoryCarrier> void assertEntityInventoryContains(BlockPos p_263495_,  EntityType<E> p_263521_,  Item p_263502_)`
- `public void assertContainerEmpty(BlockPos p_177441_)`
- `public void assertContainerContains(BlockPos p_177243_,  Item p_177244_)`
- `public void assertSameBlockStates(BoundingBox p_177225_,  BlockPos p_177226_)`
- `public void assertSameBlockState(BlockPos p_177269_,  BlockPos p_177270_)`
- `public void assertAtTickTimeContainerContains(long p_177124_,  BlockPos p_177125_,  Item p_177126_)`
- `public void assertAtTickTimeContainerEmpty(long p_177121_,  BlockPos p_177122_)`
- `public <E extends Entity, T> void succeedWhenEntityData(BlockPos p_177350_,  EntityType<E> p_177351_,  Function<E,T> p_177352_,  T p_177353_)`
- `public <E extends Entity> void assertEntityProperty(E p_177153_,  Predicate<E> p_177154_,  String p_177155_)`
- `public <E extends Entity, T> void assertEntityProperty(E p_177148_,  Function<E,T> p_177149_,  String p_177150_,  T p_177151_)`
- `public void assertLivingEntityHasMobEffect(LivingEntity p_300128_,  MobEffect p_298607_,  int p_298143_)`
- `public void succeedWhenEntityPresent(EntityType<?> p_177414_,  int p_177415_,  int p_177416_,  int p_177417_)`
- `public void succeedWhenEntityPresent(EntityType<?> p_177419_,  BlockPos p_177420_)`
- `public void succeedWhenEntityNotPresent(EntityType<?> p_177427_,  int p_177428_,  int p_177429_,  int p_177430_)`
- `public void succeedWhenEntityNotPresent(EntityType<?> p_177432_,  BlockPos p_177433_)`
- `public void succeed()`
- `private void ensureSingleFinalCheck()`
- `public void succeedIf(Runnable p_177280_)`
- `public void succeedWhen(Runnable p_177362_)`
- `public void succeedOnTickWhen(int p_177118_,  Runnable p_177119_)`
- `public void runAtTickTime(long p_177128_,  Runnable p_177129_)`
- `public void runAfterDelay(long p_177307_,  Runnable p_177308_)`
- `public void randomTick(BlockPos p_177447_)`
- `public int getHeight(Heightmap.Types p_236775_,  int p_236776_,  int p_236777_)`
- `public void fail(String p_177290_,  BlockPos p_177291_)`
- `public void fail(String p_177287_,  Entity p_177288_)`
- `public void fail(String p_177285_)`
- `public void failIf(Runnable p_177393_)`
- `public void failIfEver(Runnable p_177411_)`
- `public GameTestSequence startSequence()`
- `public BlockPos absolutePos(BlockPos p_177450_)`
- `public BlockPos relativePos(BlockPos p_177453_)`
- `public Vec3 absoluteVec(Vec3 p_177228_)`
- `public Vec3 relativeVec(Vec3 p_251543_)`
- `public void assertTrue(boolean p_249380_,  String p_248720_)`
- `public void assertFalse(boolean p_277974_,  String p_277933_)`
- `public long getTick()`
- `private AABB getBounds()`
- `private AABB getRelativeBounds()`
- `public void forEveryBlockInStructure(Consumer<BlockPos> p_177293_)`
- `public void onEachTick(Runnable p_177424_)`
- `public void placeAt(Player p_261595_,  ItemStack p_262007_,  BlockPos p_261973_,  Direction p_262008_)`

### Inherited methods
- from `net.minecraftforge.common.extensions.IForgeGameTestHelper`: `assertFalse`, `assertTrue`, `makeMockServerPlayer`

## GameTestInfo

*class* `net.minecraft.gametest.framework.GameTestInfo`

### Fields
- `private final TestFunction testFunction`
- `@Nullable private BlockPos structureBlockPos`
- `private final ServerLevel level`
- `private final Collection<GameTestListener> listeners`
- `private final int timeoutTicks`
- `private final Collection<GameTestSequence> sequences`
- `private final it.unimi.dsi.fastutil.objects.Object2LongMap<Runnable> runAtTickTimeMap`
- `private long startTick`
- `private long tickCount`
- `private boolean started`
- `private final com.google.common.base.Stopwatch timer`
- `private boolean done`
- `private final Rotation rotation`
- `@Nullable private Throwable error`
- `@Nullable private StructureBlockEntity structureBlockEntity`

### Methods
- `void setStructureBlockPos(BlockPos p_127618_)`
- `void startExecution()`
- `public void tick()`
- `private void tickInternal()`
- `private void startTest()`
- `public void setRunAtTickTime(long p_177473_,  Runnable p_177474_)`
- `public String getTestName()`
- `public BlockPos getStructureBlockPos()`
- `@Nullable public Vec3i getStructureSize()`
- `@Nullable public AABB getStructureBounds()`
- `@Nullable private StructureBlockEntity getStructureBlockEntity()`
- `public ServerLevel getLevel()`
- `public boolean hasSucceeded()`
- `public boolean hasFailed()`
- `public boolean hasStarted()`
- `public boolean isDone()`
- `public long getRunTime()`
- `private void finish()`
- `public void succeed()`
- `public void fail(Throwable p_127623_)`
- `@Nullable public Throwable getError()`
- `public String toString()`
- `public void addListener(GameTestListener p_127625_)`
- `public void spawnStructure(BlockPos p_127620_,  int p_127621_)`
- `public void clearStructure()`
- `long getTick()`
- `GameTestSequence createSequence()`
- `public boolean isRequired()`
- `public boolean isOptional()`
- `public String getStructureName()`
- `public Rotation getRotation()`
- `public TestFunction getTestFunction()`
- `public int getTimeoutTicks()`
- `public boolean isFlaky()`
- `public int maxAttempts()`
- `public int requiredSuccesses()`

## GameTestListener

*interface* `net.minecraft.gametest.framework.GameTestListener`

### Methods
- `void testStructureLoaded(GameTestInfo p_127651_)`
- `void testPassed(GameTestInfo p_177494_)`
- `void testFailed(GameTestInfo p_127652_)`

## GameTestRegistry

*class* `net.minecraft.gametest.framework.GameTestRegistry`

### Fields
- `private static final Collection<TestFunction> TEST_FUNCTIONS`
- `private static final Set<String> TEST_CLASS_NAMES`
- `private static final Map<String,Consumer<ServerLevel>> BEFORE_BATCH_FUNCTIONS`
- `private static final Map<String,Consumer<ServerLevel>> AFTER_BATCH_FUNCTIONS`
- `private static final Collection<TestFunction> LAST_FAILED_TESTS`

### Methods
- `@Deprecated public static void register(Class<?> p_177502_)` (deprecated)
- `@Deprecated public static void register(Method p_177504_)` (deprecated)
- `@Deprecated public static void register(Method p_177504_,  Set<String> allowed)` (deprecated)
- `private static <T extends Annotation> void registerBatchFunction(Method p_177506_,  Class<T> p_177507_,  Function<T,String> p_177508_,  Map<String,Consumer<ServerLevel>> p_177509_)`
- `public static Collection<TestFunction> getTestFunctionsForClassName(String p_127660_)`
- `public static Collection<TestFunction> getAllTestFunctions()`
- `public static Collection<String> getAllTestClassNames()`
- `public static boolean isTestClass(String p_127671_)`
- `@Nullable public static Consumer<ServerLevel> getBeforeBatchFunction(String p_127677_)`
- `@Nullable public static Consumer<ServerLevel> getAfterBatchFunction(String p_177518_)`
- `public static Optional<TestFunction> findTestFunction(String p_127680_)`
- `public static TestFunction getTestFunction(String p_127682_)`
- `private static Collection<TestFunction> useTestGeneratorMethod(Method p_177514_)`
- `private static TestFunction turnMethodIntoTestFunction(Method p_177516_)`
- `private static Consumer<?> turnMethodIntoConsumer(Method p_177520_)`
- `private static boolean isTestFunctionPartOfClass(TestFunction p_127667_,  String p_127668_)`
- `public static Collection<TestFunction> getLastFailedTests()`
- `public static void rememberFailedTest(TestFunction p_127665_)`
- `public static void forgetFailedTests()`

## GameTestRunner

*class* `net.minecraft.gametest.framework.GameTestRunner`

### Fields
- `private static final int MAX_TESTS_PER_BATCH` (= 100)
- `public static final int PADDING_AROUND_EACH_STRUCTURE` (= 2)
- `public static final int SPACE_BETWEEN_COLUMNS` (= 5)
- `public static final int SPACE_BETWEEN_ROWS` (= 6)
- `public static final int DEFAULT_TESTS_PER_ROW` (= 8)

### Methods
- `public static void runTest(GameTestInfo p_127743_,  BlockPos p_127744_,  GameTestTicker p_127745_)`
- `public static Collection<GameTestInfo> runTestBatches(Collection<GameTestBatch> p_127727_,  BlockPos p_127728_,  Rotation p_127729_,  ServerLevel p_127730_,  GameTestTicker p_127731_,  int p_127732_)`
- `public static Collection<GameTestInfo> runTests(Collection<TestFunction> p_127753_,  BlockPos p_127754_,  Rotation p_127755_,  ServerLevel p_127756_,  GameTestTicker p_127757_,  int p_127758_)`
- `public static Collection<GameTestBatch> groupTestsIntoBatches(Collection<TestFunction> p_127725_)`
- `public static void clearAllTests(ServerLevel p_127695_,  BlockPos p_127696_,  GameTestTicker p_127697_,  int p_127698_)`
- `public static void clearMarkers(ServerLevel p_127686_)`

## GameTestSequence

*class* `net.minecraft.gametest.framework.GameTestSequence`

### Fields
- `final GameTestInfo parent`
- `private final List<GameTestEvent> events`
- `private long lastTick`

### Methods
- `public GameTestSequence thenWaitUntil(Runnable p_177553_)`
- `public GameTestSequence thenWaitUntil(long p_177550_,  Runnable p_177551_)`
- `public GameTestSequence thenIdle(int p_177545_)`
- `public GameTestSequence thenExecute(Runnable p_177563_)`
- `public GameTestSequence thenExecuteAfter(int p_177547_,  Runnable p_177548_)`
- `public GameTestSequence thenExecuteFor(int p_177560_,  Runnable p_177561_)`
- `public void thenSucceed()`
- `public void thenFail(Supplier<Exception> p_177555_)`
- `public GameTestSequence.Condition thenTrigger()`
- `public void tickAndContinue(long p_127778_)`
- `public void tickAndFailIfNotComplete(long p_127780_)`
- `private void executeWithoutFail(Runnable p_177571_)`
- `private void tick(long p_127782_)`

## GameTestSequence.Condition

*class* `net.minecraft.gametest.framework.GameTestSequence.Condition`

Enclosing class: GameTestSequence

### Fields
- `private static final long NOT_TRIGGERED` (= -1L)
- `private long triggerTime`

### Methods
- `void trigger(long p_177584_)`
- `public void assertTriggeredThisTick()`

## GameTestServer

*class* `net.minecraft.gametest.framework.GameTestServer`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int PROGRESS_REPORT_INTERVAL` (= 20)
- `private static final Services NO_SERVICES`
- `private final List<GameTestBatch> testBatches`
- `private final BlockPos spawnPos`
- `private static final GameRules TEST_GAME_RULES`
- `private static final WorldOptions WORLD_OPTIONS`
- `@Nullable private MultipleTestTracker testTracker`

### Inherited fields
- from `net.minecraft.server.MinecraftServer`: `ABSOLUTE_MAX_WORLD_SIZE`, `ANONYMOUS_PLAYER_PROFILE`, `DEMO_SETTINGS`, `MS_PER_TICK`, `nextTickTime`, `playerDataStorage`, `proxy`, `services`, `START_CHUNK_RADIUS`, `storageSource`, `tickTimes`, `VANILLA_BRAND`, `worldData`
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public static GameTestServer create(Thread p_206607_,  LevelStorageSource.LevelStorageAccess p_206608_,  PackRepository p_206609_,  Collection<GameTestBatch> p_206610_,  BlockPos p_206611_)`
- `public boolean initServer()`
- `public void tickServer(BooleanSupplier p_177619_)`
- `public void waitUntilNextTick()`
- `public SystemReport fillServerSystemReport(SystemReport p_177613_)`
- `public void onServerExit()`
- `public void onServerCrash(CrashReport p_177623_)`
- `private void startTests(ServerLevel p_177625_)`
- `private boolean haveTestsStarted()`
- `public boolean isHardcore()`
- `public int getOperatorUserPermissionLevel()`
- `public int getFunctionCompilationLevel()`
- `public boolean shouldRconBroadcast()`
- `public boolean isDedicatedServer()`
- `public int getRateLimitPacketsPerSecond()`
- `public boolean isEpollEnabled()`
- `public boolean isCommandBlockEnabled()`
- `public boolean isPublished()`
- `public boolean shouldInformAdmins()`
- `public boolean isSingleplayerOwner(com.mojang.authlib.GameProfile p_177617_)`

### Inherited methods
- from `net.minecraft.server.MinecraftServer`: `acceptsFailure`, `acceptsSuccess`, `addTickable`, `areNpcsEnabled`, `cancelRecordingMetrics`, `close`, `configurePackRepository`, `createCommandSourceStack`, `createGameModeForPlayer`, `createLevels`, `createTextFilterForPlayer`, `doRunTask`, `dumpServerProperties`, `enforceSecureProfile`, `executeIfPossible`, `fillSystemReport`, `finishRecordingMetrics`, `forceDifficulty`, `forceSynchronousWrites`, `forceTimeSynchronization`, `forgeGetWorldMap`, `getAbsoluteMaxWorldSize`, `getAdvancements`, `getAllLevels`, `getAverageTickTime`, `getChatDecorator`, `getCommands`, `getCommandStorage`, `getCompressionThreshold`, `getConnection`, `getCustomBossEvents`, `getDefaultGameType`, `getFile`, `getFixerUpper`, `getForcedGameType`, `getFunctions`, `getGameRules`, `getKeyPair`, `getLevel`, `getLocalIp`, `getLootData`, `getMaxChainedNeighborUpdates`, `getMaxPlayers`, `getModdedStatus`, `getMotd`, `getNextTickTime`, `getPackRepository`, `getPlayerCount`, `getPlayerIdleTimeout`, `getPlayerList`, `getPlayerNames`, `getPort`, `getPreventProxyConnections`, `getProfileCache`, `getProfileKeySignatureValidator`, `getProfilePermissions`, `getProfiler`, `getProfileRepository`, `getProxy`, `getRecipeManager`, `getResourceManager`, `getRunningThread`, `getScaledTrackingDistance`, `getScoreboard`, `getServerDirectory`, `getServerModName`, `getServerResourcePack`, `getServerResources`, `getServerVersion`, `getSessionService`, `getSingleplayerProfile`, `getSpawnProtectionRadius`, `getSpawnRadius`, `getStatus`, `getStatusJson`, `getStructureManager`, `getTickCount`, `getTickTime`, `getWorldData`, `getWorldPath`, `getWorldScreenshotFile`, `halt`, `hasGui`, `hidesOnlinePlayers`, `initializeKeyPair`, `invalidateStatus`, `isCurrentlySaving`, `isDemo`, `isEnforceWhitelist`, `isFlightAllowed`, `isNetherEnabled`, `isPvpAllowed`, `isReady`, `isRecordingMetrics`, `isResourcePackRequired`, `isRunning`, `isShutdown`, `isSingleplayer`, `isSpawningAnimals`, `isSpawningMonsters`, `isStopped`, `isTimeProfilerRunning`, `isUnderSpawnProtection`, `kickUnlistedPlayers`, `levelKeys`, `loadLevel`, `logChatMessage`, `logIPs`, `logTickTime`, `markWorldsDirty`, `overworld`, `pollTask`, `publishServer`, `registries`, `registryAccess`, `reloadResources`, `repliesToStatus`, `runServer`, `saveAllChunks`, `saveEverything`, `scheduleExecutables`, `sendSystemMessage`, `setDefaultGameType`, `setDemo`, `setDifficulty`, `setDifficultyLocked`, `setEnforceWhitelist`, `setFlightAllowed`, `setId`, `setLocalIp`, `setMotd`, `setPlayerIdleTimeout`, `setPlayerList`, `setPort`, `setPreventProxyConnections`, `setPvpAllowed`, `setSingleplayerProfile`, `setUsesAuthentication`, `shouldRun`, `spin`, `startRecordingMetrics`, `startTimeProfiler`, `stopRecordingMetrics`, `stopServer`, `stopTimeProfiler`, `tickChildren`, `usesAuthentication`, `wrapRunnable`
- from `net.minecraft.util.thread.ReentrantBlockableEventLoop`: `runningTask`
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `profiledMetrics`, `runAllTasks`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`

## GameTestTicker

*class* `net.minecraft.gametest.framework.GameTestTicker`

### Fields
- `public static final GameTestTicker SINGLETON`
- `private final Collection<GameTestInfo> testInfos`

### Methods
- `public void add(GameTestInfo p_127789_)`
- `public void clear()`
- `public void tick()`

## GameTestTimeoutException

*class* `net.minecraft.gametest.framework.GameTestTimeoutException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## GlobalTestReporter

*class* `net.minecraft.gametest.framework.GlobalTestReporter`

### Fields
- `private static TestReporter DELEGATE`

### Methods
- `public static void replaceWith(TestReporter p_177656_)`
- `public static void onTestFailed(GameTestInfo p_177654_)`
- `public static void onTestSuccess(GameTestInfo p_177658_)`
- `public static void finish()`

## JUnitLikeTestReporter

*class* `net.minecraft.gametest.framework.JUnitLikeTestReporter`

### Fields
- `private final Document document`
- `private final Element testSuite`
- `private final com.google.common.base.Stopwatch stopwatch`
- `private final File destination`

### Methods
- `private Element createTestCase(GameTestInfo p_177671_,  String p_177672_)`
- `public void onTestFailed(GameTestInfo p_177669_)`
- `public void onTestSuccess(GameTestInfo p_177674_)`
- `public void finish()`
- `public void save(File p_177667_)  throws TransformerException`
  - throws: TransformerException

## LogTestReporter

*class* `net.minecraft.gametest.framework.LogTestReporter`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public void onTestFailed(GameTestInfo p_127797_)`
- `public void onTestSuccess(GameTestInfo p_177676_)`

### Inherited methods
- from `net.minecraft.gametest.framework.TestReporter`: `finish`

## MultipleTestTracker

*class* `net.minecraft.gametest.framework.MultipleTestTracker`

### Fields
- `private static final char NOT_STARTED_TEST_CHAR` (= ' ')
- `private static final char ONGOING_TEST_CHAR` (= '_')
- `private static final char SUCCESSFUL_TEST_CHAR` (= '+')
- `private static final char FAILED_OPTIONAL_TEST_CHAR` (= 'x')
- `private static final char FAILED_REQUIRED_TEST_CHAR` (= 'X')
- `private final Collection<GameTestInfo> tests`
- `@Nullable private final Collection<GameTestListener> listeners`

### Methods
- `public void addTestToTrack(GameTestInfo p_127810_)`
- `public void addListener(GameTestListener p_127812_)`
- `public void addFailureListener(Consumer<GameTestInfo> p_127808_)`
- `public int getFailedRequiredCount()`
- `public int getFailedOptionalCount()`
- `public int getDoneCount()`
- `public boolean hasFailedRequired()`
- `public boolean hasFailedOptional()`
- `public Collection<GameTestInfo> getFailedRequired()`
- `public Collection<GameTestInfo> getFailedOptional()`
- `public int getTotalCount()`
- `public boolean isDone()`
- `public String getProgressBar()`
- `public String toString()`

## ReportGameListener

*class* `net.minecraft.gametest.framework.ReportGameListener`

### Fields
- `private final GameTestInfo originalTestInfo`
- `private final GameTestTicker testTicker`
- `private final BlockPos structurePos`
- `int attempts`
- `int successes`

### Methods
- `public void testStructureLoaded(GameTestInfo p_177718_)`
- `public void testPassed(GameTestInfo p_177729_)`
- `public void testFailed(GameTestInfo p_177737_)`
- `public static void reportPassed(GameTestInfo p_177723_,  String p_177724_)`
- `private static void visualizePassedTest(GameTestInfo p_177731_,  String p_177732_)`
- `protected static void reportFailure(GameTestInfo p_177726_,  Throwable p_177727_)`
- `protected static void visualizeFailedTest(GameTestInfo p_177734_,  Throwable p_177735_)`
- `private void rerunTest()`
- `protected static void spawnBeacon(GameTestInfo p_177720_,  Block p_177721_)`
- `private static void spawnLectern(GameTestInfo p_177739_,  String p_177740_)`
- `private static ItemStack createBook(String p_177711_,  boolean p_177712_,  String p_177713_)`
- `protected static void say(ServerLevel p_177701_,  ChatFormatting p_177702_,  String p_177703_)`
- `private static void showRedBox(ServerLevel p_177697_,  BlockPos p_177698_,  String p_177699_)`

## StructureUtils

*class* `net.minecraft.gametest.framework.StructureUtils`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String DEFAULT_TEST_STRUCTURES_DIR` (= "gameteststructures")
- `public static String testStructuresDir`
- `private static final int HOW_MANY_CHUNKS_TO_LOAD_IN_EACH_DIRECTION_OF_STRUCTURE` (= 4)

### Methods
- `public static Rotation getRotationForRotationSteps(int p_127836_)`
- `public static int getRotationStepsForRotation(Rotation p_177752_)`
- `public static AABB getStructureBounds(StructureBlockEntity p_127848_)`
- `public static BoundingBox getStructureBoundingBox(StructureBlockEntity p_127905_)`
- `public static void addCommandBlockAndButtonToStartTest(BlockPos p_127876_,  BlockPos p_127877_,  Rotation p_127878_,  ServerLevel p_127879_)`
- `public static void createNewEmptyStructureBlock(String p_177765_,  BlockPos p_177766_,  Vec3i p_177767_,  Rotation p_177768_,  ServerLevel p_177769_)`
- `public static StructureBlockEntity spawnStructure(String p_127884_,  BlockPos p_127885_,  Rotation p_127886_,  int p_127887_,  ServerLevel p_127888_,  boolean p_127889_)`
- `private static void forceLoadChunks(BlockPos p_127858_,  ServerLevel p_127859_)`
- `public static void clearSpaceForStructure(BoundingBox p_127850_,  int p_127851_,  ServerLevel p_127852_)`
- `public static BoundingBox getStructureBoundingBox(BlockPos p_177761_,  Vec3i p_177762_,  Rotation p_177763_)`
- `public static Optional<BlockPos> findStructureBlockContainingPos(BlockPos p_127854_,  int p_127855_,  ServerLevel p_127856_)`
- `@Nullable public static BlockPos findNearestStructureBlock(BlockPos p_127907_,  int p_127908_,  ServerLevel p_127909_)`
- `public static Collection<BlockPos> findStructureBlocks(BlockPos p_127911_,  int p_127912_,  ServerLevel p_127913_)`
- `private static StructureTemplate getStructureTemplate(String p_127881_,  ServerLevel p_127882_)`
- `private static StructureBlockEntity createStructureBlock(String p_127891_,  BlockPos p_127892_,  Rotation p_127893_,  ServerLevel p_127894_,  boolean p_127895_)`
- `@Nullable private static CompoundTag tryLoadStructure(Path p_127903_)`
- `private static void clearBlock(int p_127842_,  BlockPos p_127843_,  ServerLevel p_127844_)`
- `private static boolean doesStructureContain(BlockPos p_127868_,  BlockPos p_127869_,  ServerLevel p_127870_)`

## TeamcityTestReporter

*class* `net.minecraft.gametest.framework.TeamcityTestReporter`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final com.google.common.escape.Escaper ESCAPER`

### Methods
- `public void onTestFailed(GameTestInfo p_177783_)`
- `public void onTestSuccess(GameTestInfo p_177785_)`

### Inherited methods
- from `net.minecraft.gametest.framework.TestReporter`: `finish`

## TestClassNameArgument

*class* `net.minecraft.gametest.framework.TestClassNameArgument`

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public String parse(com.mojang.brigadier.StringReader p_127919_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static TestClassNameArgument testClassName()`
- `public static String getTestClassName(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_127921_,  String p_127922_)`
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_127925_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_127926_)`
- `public Collection<String> getExamples()`

## TestCommand

*class* `net.minecraft.gametest.framework.TestCommand`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int DEFAULT_CLEAR_RADIUS` (= 200)
- `private static final int MAX_CLEAR_RADIUS` (= 1024)
- `private static final int STRUCTURE_BLOCK_NEARBY_SEARCH_RADIUS` (= 15)
- `private static final int STRUCTURE_BLOCK_FULL_SEARCH_RADIUS` (= 200)
- `private static final int TEST_POS_Z_OFFSET_FROM_PLAYER` (= 3)
- `private static final int SHOW_POS_DURATION_MS` (= 10000)
- `private static final int DEFAULT_X_SIZE` (= 5)
- `private static final int DEFAULT_Y_SIZE` (= 5)
- `private static final int DEFAULT_Z_SIZE` (= 5)

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_127947_)`
- `private static int createNewStructure(CommandSourceStack p_127968_,  String p_127969_,  int p_127970_,  int p_127971_,  int p_127972_)`
- `private static int showPos(CommandSourceStack p_127960_,  String p_127961_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int runNearbyTest(CommandSourceStack p_127951_)`
- `private static int runAllNearbyTests(CommandSourceStack p_128002_)`
- `private static void runTest(ServerLevel p_127930_,  BlockPos p_127931_,  @Nullable  MultipleTestTracker p_127932_)`
- `static void showTestSummaryIfAllDone(ServerLevel p_127997_,  MultipleTestTracker p_127998_)`
- `private static int clearAllTests(CommandSourceStack p_127953_,  int p_127954_)`
- `private static int runTest(CommandSourceStack p_127979_,  TestFunction p_127980_,  int p_127981_)`
- `private static void runTestPreparation(TestFunction p_127994_,  ServerLevel p_127995_)`
- `private static int runAllTests(CommandSourceStack p_127956_,  int p_127957_,  int p_127958_)`
- `private static int runAllTestsInClass(CommandSourceStack p_127963_,  String p_127964_,  int p_127965_,  int p_127966_)`
- `private static int runLastFailedTests(CommandSourceStack p_127983_,  boolean p_127984_,  int p_127985_,  int p_127986_)`
- `private static void runTests(CommandSourceStack p_127974_,  Collection<TestFunction> p_127975_,  int p_127976_,  int p_127977_)`
- `private static void say(CommandSourceStack p_128004_,  String p_128005_)`
- `private static int exportNearestTestStructure(CommandSourceStack p_128009_)`
- `private static int exportAllNearbyTests(CommandSourceStack p_298362_)`
- `private static int exportTestStructure(CommandSourceStack p_128011_,  String p_128012_)`
- `private static int importTestStructure(CommandSourceStack p_128016_,  String p_128017_)`
- `private static void say(ServerLevel p_127934_,  String p_127935_,  ChatFormatting p_127936_)`

## TestCommand.TestSummaryDisplayer

*class* `net.minecraft.gametest.framework.TestCommand.TestSummaryDisplayer`

Enclosing class: TestCommand

### Fields
- `private final ServerLevel level`
- `private final MultipleTestTracker tracker`

### Methods
- `public void testStructureLoaded(GameTestInfo p_128064_)`
- `public void testPassed(GameTestInfo p_177797_)`
- `public void testFailed(GameTestInfo p_128066_)`

## TestFunction

*class* `net.minecraft.gametest.framework.TestFunction`

### Fields
- `private final String batchName`
- `private final String testName`
- `private final String structureName`
- `private final boolean required`
- `private final int maxAttempts`
- `private final int requiredSuccesses`
- `private final Consumer<GameTestHelper> function`
- `private final int maxTicks`
- `private final long setupTicks`
- `private final Rotation rotation`

### Methods
- `public void run(GameTestHelper p_128077_)`
- `public String getTestName()`
- `public String getStructureName()`
- `public String toString()`
- `public int getMaxTicks()`
- `public boolean isRequired()`
- `public String getBatchName()`
- `public long getSetupTicks()`
- `public Rotation getRotation()`
- `public boolean isFlaky()`
- `public int getMaxAttempts()`
- `public int getRequiredSuccesses()`

## TestFunctionArgument

*class* `net.minecraft.gametest.framework.TestFunctionArgument`

### Fields
- `private static final Collection<String> EXAMPLES`

### Methods
- `public TestFunction parse(com.mojang.brigadier.StringReader p_128090_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static TestFunctionArgument testFunctionArgument()`
- `public static TestFunction getTestFunction(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_128092_,  String p_128093_)`
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_128096_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_128097_)`
- `public Collection<String> getExamples()`

## TestReporter

*interface* `net.minecraft.gametest.framework.TestReporter`

### Methods
- `void onTestFailed(GameTestInfo p_128100_)`
- `void onTestSuccess(GameTestInfo p_177831_)`
- `default void finish()`
