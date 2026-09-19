# com.mojang.realmsclient.util.task

- [CloseServerTask](#closeservertask)
- [ConnectTask](#connecttask)
- [DownloadTask](#downloadtask)
- [GetServerDetailsTask](#getserverdetailstask)
- [LongRunningTask](#longrunningtask)
- [OpenServerTask](#openservertask)
- [ResettingGeneratedWorldTask](#resettinggeneratedworldtask)
- [ResettingTemplateWorldTask](#resettingtemplateworldtask)
- [ResettingWorldTask](#resettingworldtask)
- [RestoreTask](#restoretask)
- [SwitchMinigameTask](#switchminigametask)
- [SwitchSlotTask](#switchslottask)
- [WorldCreationTask](#worldcreationtask)
## CloseServerTask

*class* `com.mojang.realmsclient.util.task.CloseServerTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final RealmsServer serverData`
- `private final RealmsConfigureWorldScreen configureScreen`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## ConnectTask

*class* `com.mojang.realmsclient.util.task.ConnectTask`

### Fields
- `private static final Component TITLE`
- `private final RealmsConnect realmsConnect`
- `private final RealmsServer server`
- `private final RealmsServerAddress address`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public void abortTask()`
- `public void tick()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `error`, `error`, `error`, `init`, `pause`, `setScreen`

## DownloadTask

*class* `com.mojang.realmsclient.util.task.DownloadTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final long worldId`
- `private final int slot`
- `private final Screen lastScreen`
- `private final String downloadName`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## GetServerDetailsTask

*class* `com.mojang.realmsclient.util.task.GetServerDetailsTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final RealmsServer server`
- `private final Screen lastScreen`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`
- `private RealmsServerAddress fetchServerAddress()  throws RealmsServiceException, TimeoutException, CancellationException`
  - throws: RealmsServiceException
  - throws: TimeoutException
  - throws: CancellationException
- `public RealmsLongRunningMcoTaskScreen connectScreen(RealmsServerAddress p_167638_)`
- `private RealmsLongConfirmationScreen resourcePackDownloadConfirmationScreen(RealmsServerAddress p_167640_,  Function<RealmsServerAddress,Screen> p_167641_)`
- `private CompletableFuture<?> scheduleResourcePackDownload(RealmsServerAddress p_167652_)`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## LongRunningTask

*class* `com.mojang.realmsclient.util.task.LongRunningTask`

### Fields
- `protected static final int NUMBER_OF_RETRIES` (= 25)
- `private static final org.slf4j.Logger LOGGER`
- `private boolean aborted`

### Methods
- `protected static void pause(long p_167656_)`
- `public static void setScreen(Screen p_90406_)`
- `protected void error(Component p_90408_)`
- `protected void error(Exception p_299436_)`
- `protected void error(RealmsServiceException p_298264_)`
- `public abstract Component getTitle()`
- `public boolean aborted()`
- `public void tick()`
- `public void init()`
- `public void abortTask()`

### Inherited methods
- from `java.lang.Runnable`: `run`

## OpenServerTask

*class* `com.mojang.realmsclient.util.task.OpenServerTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final RealmsServer serverData`
- `private final Screen returnScreen`
- `private final boolean join`
- `private final Minecraft minecraft`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## ResettingGeneratedWorldTask

*class* `com.mojang.realmsclient.util.task.ResettingGeneratedWorldTask`

### Fields
- `private final WorldGenerationInfo generationInfo`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `protected void sendResetRequest(RealmsClient p_167664_,  long p_167665_)  throws RealmsServiceException`
  - throws: RealmsServiceException

### Inherited methods
- from `com.mojang.realmsclient.util.task.ResettingWorldTask`: `getTitle`, `run`
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## ResettingTemplateWorldTask

*class* `com.mojang.realmsclient.util.task.ResettingTemplateWorldTask`

### Fields
- `private final WorldTemplate template`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `protected void sendResetRequest(RealmsClient p_167673_,  long p_167674_)  throws RealmsServiceException`
  - throws: RealmsServiceException

### Inherited methods
- from `com.mojang.realmsclient.util.task.ResettingWorldTask`: `getTitle`, `run`
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## ResettingWorldTask

*class* `com.mojang.realmsclient.util.task.ResettingWorldTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final long serverId`
- `private final Component title`
- `private final Runnable callback`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `protected abstract void sendResetRequest(RealmsClient p_167679_,  long p_167680_)  throws RealmsServiceException`
  - throws: RealmsServiceException
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## RestoreTask

*class* `com.mojang.realmsclient.util.task.RestoreTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final Backup backup`
- `private final long worldId`
- `private final RealmsConfigureWorldScreen lastScreen`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## SwitchMinigameTask

*class* `com.mojang.realmsclient.util.task.SwitchMinigameTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final long worldId`
- `private final WorldTemplate worldTemplate`
- `private final RealmsConfigureWorldScreen lastScreen`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## SwitchSlotTask

*class* `com.mojang.realmsclient.util.task.SwitchSlotTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final long worldId`
- `private final int slot`
- `private final Runnable callback`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`

## WorldCreationTask

*class* `com.mojang.realmsclient.util.task.WorldCreationTask`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component TITLE`
- `private final String name`
- `private final String motd`
- `private final long worldId`
- `private final Screen lastScreen`

### Inherited fields
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `NUMBER_OF_RETRIES`

### Methods
- `public void run()`
- `public Component getTitle()`

### Inherited methods
- from `com.mojang.realmsclient.util.task.LongRunningTask`: `aborted`, `abortTask`, `error`, `error`, `error`, `init`, `pause`, `setScreen`, `tick`
