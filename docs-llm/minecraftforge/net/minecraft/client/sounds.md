# net.minecraft.client.sounds

- [AudioStream](#audiostream)
- [ChannelAccess](#channelaccess)
- [ChannelAccess.ChannelHandle](#channelaccess.channelhandle)
- [Class SoundEngine.DeviceCheckState](#class-soundengine.devicecheckstate)
- [LoopingAudioStream](#loopingaudiostream)
- [LoopingAudioStream.AudioStreamProvider](#loopingaudiostream.audiostreamprovider)
- [LoopingAudioStream.NoCloseBuffer](#loopingaudiostream.noclosebuffer)
- [MusicManager](#musicmanager)
- [SoundBufferLibrary](#soundbufferlibrary)
- [SoundEngine](#soundengine)
- [SoundEngineExecutor](#soundengineexecutor)
- [SoundEventListener](#soundeventlistener)
- [SoundManager](#soundmanager)
- [SoundManager.Preparations](#soundmanager.preparations)
- [WeighedSoundEvents](#weighedsoundevents)
- [Weighted](#weighted)
## AudioStream

*interface* `net.minecraft.client.sounds.AudioStream`

All Superinterfaces: AutoCloseable, Closeable

### Methods
- `AudioFormat getFormat()`
- `ByteBuffer read(int p_120120_)  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.io.Closeable`: `close`

## ChannelAccess

*class* `net.minecraft.client.sounds.ChannelAccess`

### Fields
- `private final Set<ChannelAccess.ChannelHandle> channels`
- `final Library library`
- `final Executor executor`

### Methods
- `public CompletableFuture<ChannelAccess.ChannelHandle> createHandle(Library.Pool p_120129_)`
- `public void executeOnChannels(Consumer<Stream<Channel>> p_120138_)`
- `public void scheduleTick()`
- `public void clear()`

## ChannelAccess.ChannelHandle

*class* `net.minecraft.client.sounds.ChannelAccess.ChannelHandle`

Enclosing class: ChannelAccess

### Fields
- `@Nullable Channel channel`
- `private boolean stopped`

### Methods
- `public boolean isStopped()`
- `public void execute(Consumer<Channel> p_120155_)`
- `public void release()`

## Class SoundEngine.DeviceCheckState

*enum* `net.minecraft.client.sounds.Class SoundEngine.DeviceCheckState`

Enclosing class: SoundEngine

### Methods
- `public static SoundEngine.DeviceCheckState[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SoundEngine.DeviceCheckState valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## LoopingAudioStream

*class* `net.minecraft.client.sounds.LoopingAudioStream`

### Fields
- `private final LoopingAudioStream.AudioStreamProvider provider`
- `private AudioStream stream`
- `private final BufferedInputStream bufferedInputStream`

### Methods
- `public AudioFormat getFormat()`
- `public ByteBuffer read(int p_120167_)  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException

## LoopingAudioStream.AudioStreamProvider

*interface* `net.minecraft.client.sounds.LoopingAudioStream.AudioStreamProvider`

Enclosing class: LoopingAudioStream

### Methods
- `AudioStream create(InputStream p_120170_)  throws IOException`
  - throws: IOException

## LoopingAudioStream.NoCloseBuffer

*class* `net.minecraft.client.sounds.LoopingAudioStream.NoCloseBuffer`

Enclosing class: LoopingAudioStream

### Inherited fields
- from `java.io.FilterInputStream`: `in`

### Methods
- `public void close()`

### Inherited methods
- from `java.io.FilterInputStream`: `available`, `mark`, `markSupported`, `read`, `read`, `read`, `reset`, `skip`
- from `java.io.InputStream`: `nullInputStream`, `readAllBytes`, `readNBytes`, `readNBytes`, `skipNBytes`, `transferTo`

## MusicManager

*class* `net.minecraft.client.sounds.MusicManager`

### Fields
- `private static final int STARTING_DELAY` (= 100)
- `private final RandomSource random`
- `private final Minecraft minecraft`
- `@Nullable private SoundInstance currentMusic`
- `private int nextSongDelay`

### Methods
- `public void tick()`
- `public void startPlaying(Music p_120185_)`
- `public void stopPlaying(Music p_278295_)`
- `public void stopPlaying()`
- `public boolean isPlayingMusic(Music p_120188_)`

## SoundBufferLibrary

*class* `net.minecraft.client.sounds.SoundBufferLibrary`

### Fields
- `private final ResourceProvider resourceManager`
- `private final Map<ResourceLocation,CompletableFuture<SoundBuffer>> cache`

### Methods
- `public CompletableFuture<SoundBuffer> getCompleteBuffer(ResourceLocation p_120203_)`
- `public CompletableFuture<AudioStream> getStream(ResourceLocation p_120205_,  boolean p_120206_)`
- `public void clear()`
- `public CompletableFuture<?> preload(Collection<Sound> p_120199_)`

## SoundEngine

*class* `net.minecraft.client.sounds.SoundEngine`

### Fields
- `private static final org.slf4j.Marker MARKER`
- `private static final org.slf4j.Logger LOGGER`
- `private static final float PITCH_MIN` (= 0.5f)
- `private static final float PITCH_MAX` (= 2.0f)
- `private static final float VOLUME_MIN` (= 0.0f)
- `private static final float VOLUME_MAX` (= 1.0f)
- `private static final int MIN_SOURCE_LIFETIME` (= 20)
- `private static final Set<ResourceLocation> ONLY_WARN_ONCE`
- `private static final long DEFAULT_DEVICE_CHECK_INTERVAL_MS` (= 1000L)
- `public static final String MISSING_SOUND` (= "FOR THE DEBUG!")
- `public static final String OPEN_AL_SOFT_PREFIX` (= "OpenAL Soft on ")
- `public static final int OPEN_AL_SOFT_PREFIX_LENGTH`
- `public final SoundManager soundManager`
- `private final Options options`
- `private boolean loaded`
- `private final Library library`
- `private final Listener listener`
- `private final SoundBufferLibrary soundBuffers`
- `private final SoundEngineExecutor executor`
- `private final ChannelAccess channelAccess`
- `private int tickCount`
- `private long lastDeviceCheckTime`
- `private final AtomicReference<SoundEngine.DeviceCheckState> devicePoolState`
- `private final Map<SoundInstance,ChannelAccess.ChannelHandle> instanceToChannel`
- `private final com.google.common.collect.Multimap<SoundSource,SoundInstance> instanceBySource`
- `private final List<TickableSoundInstance> tickingSounds`
- `private final Map<SoundInstance,Integer> queuedSounds`
- `private final Map<SoundInstance,Integer> soundDeleteTime`
- `private final List<SoundEventListener> listeners`
- `private final List<TickableSoundInstance> queuedTickableSounds`
- `private final List<Sound> preloadQueue`

### Methods
- `public void reload()`
- `private void loadLibrary()`
- `private float getVolume(@Nullable  SoundSource p_120259_)`
- `public void updateCategoryVolume(SoundSource p_120261_,  float p_120262_)`
- `public void destroy()`
- `public void stop(SoundInstance p_120275_)`
- `public void stopAll()`
- `public void addEventListener(SoundEventListener p_120296_)`
- `public void removeEventListener(SoundEventListener p_120308_)`
- `private boolean shouldChangeDevice()`
- `public void tick(boolean p_120303_)`
- `private void tickNonPaused()`
- `private static boolean requiresManualLooping(SoundInstance p_120316_)`
- `private static boolean shouldLoopManually(SoundInstance p_120319_)`
- `private static boolean shouldLoopAutomatically(SoundInstance p_120322_)`
- `public boolean isActive(SoundInstance p_120306_)`
- `public void play(SoundInstance p_120313_)`
- `public void queueTickingSound(TickableSoundInstance p_120283_)`
- `public void requestPreload(Sound p_120273_)`
- `private float calculatePitch(SoundInstance p_120325_)`
- `private float calculateVolume(SoundInstance p_120328_)`
- `private float calculateVolume(float p_235258_,  SoundSource p_235259_)`
- `public void pause()`
- `public void resume()`
- `public void playDelayed(SoundInstance p_120277_,  int p_120278_)`
- `public void updateSource(Camera p_120271_)`
- `public void stop(@Nullable  ResourceLocation p_120300_,  @Nullable  SoundSource p_120301_)`
- `public String getDebugString()`
- `public List<String> getAvailableSoundDevices()`

## SoundEngineExecutor

*class* `net.minecraft.client.sounds.SoundEngineExecutor`

### Fields
- `private Thread thread`
- `private volatile boolean shutdown`

### Methods
- `private Thread createThread()`
- `protected Runnable wrapRunnable(Runnable p_120341_)`
- `protected boolean shouldRun(Runnable p_120339_)`
- `protected Thread getRunningThread()`
- `private void run()`
- `protected void waitForTasks()`
- `public void flush()`

### Inherited methods
- from `net.minecraft.util.thread.BlockableEventLoop`: `doRunTask`, `dropAllTasks`, `execute`, `executeBlocking`, `executeIfPossible`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `pollTask`, `profiledMetrics`, `runAllTasks`, `scheduleExecutables`, `submit`, `submit`, `submitAsync`, `tell`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`, `close`

## SoundEventListener

*interface* `net.minecraft.client.sounds.SoundEventListener`

### Methods
- `void onPlaySound(SoundInstance p_120342_,  WeighedSoundEvents p_120343_)`

## SoundManager

*class* `net.minecraft.client.sounds.SoundManager`

### Fields
- `public static final Sound EMPTY_SOUND`
- `public static final ResourceLocation INTENTIONALLY_EMPTY_SOUND_LOCATION`
- `public static final WeighedSoundEvents INTENTIONALLY_EMPTY_SOUND_EVENT`
- `public static final Sound INTENTIONALLY_EMPTY_SOUND`
- `static final org.slf4j.Logger LOGGER`
- `private static final String SOUNDS_PATH` (= "sounds.json")
- `private static final com.google.gson.Gson GSON`
- `private static final com.google.gson.reflect.TypeToken<Map<String,SoundEventRegistration>> SOUND_EVENT_REGISTRATION_TYPE`
- `private final Map<ResourceLocation,WeighedSoundEvents> registry`
- `private final SoundEngine soundEngine`
- `private final Map<ResourceLocation,Resource> soundCache`

### Methods
- `protected SoundManager.Preparations prepare(ResourceManager p_120356_,  ProfilerFiller p_120357_)`
- `protected void apply(SoundManager.Preparations p_120377_,  ResourceManager p_120378_,  ProfilerFiller p_120379_)`
- `public List<String> getAvailableSoundDevices()`
- `static boolean validateSoundResource(Sound p_250396_,  ResourceLocation p_250879_,  ResourceProvider p_248737_)`
- `@Nullable public WeighedSoundEvents getSoundEvent(ResourceLocation p_120385_)`
- `public Collection<ResourceLocation> getAvailableSounds()`
- `public void queueTickingSound(TickableSoundInstance p_120373_)`
- `public void play(SoundInstance p_120368_)`
- `public void playDelayed(SoundInstance p_120370_,  int p_120371_)`
- `public void updateSource(Camera p_120362_)`
- `public void pause()`
- `public void stop()`
- `public void destroy()`
- `public void tick(boolean p_120390_)`
- `public void resume()`
- `public void updateSourceVolume(SoundSource p_120359_,  float p_120360_)`
- `public void stop(SoundInstance p_120400_)`
- `public boolean isActive(SoundInstance p_120404_)`
- `public void addListener(SoundEventListener p_120375_)`
- `public void removeListener(SoundEventListener p_120402_)`
- `public void stop(@Nullable  ResourceLocation p_120387_,  @Nullable  SoundSource p_120388_)`
- `public String getDebugString()`
- `public void reload()`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## SoundManager.Preparations

*class* `net.minecraft.client.sounds.SoundManager.Preparations`

Enclosing class: SoundManager

### Fields
- `final Map<ResourceLocation,WeighedSoundEvents> registry`
- `private Map<ResourceLocation,Resource> soundCache`

### Methods
- `void listResources(ResourceManager p_249271_)`
- `void handleRegistration(ResourceLocation p_250806_,  SoundEventRegistration p_249632_)`
- `public void apply(Map<ResourceLocation,WeighedSoundEvents> p_251229_,  Map<ResourceLocation,Resource> p_251045_,  SoundEngine p_250302_)`

## WeighedSoundEvents

*class* `net.minecraft.client.sounds.WeighedSoundEvents`

### Fields
- `private final List<Weighted<Sound>> list`
- `@Nullable private final Component subtitle`

### Methods
- `public int getWeight()`
- `public Sound getSound(RandomSource p_235265_)`
- `public void addSound(Weighted<Sound> p_120452_)`
- `@Nullable public Component getSubtitle()`
- `public void preloadIfRequired(SoundEngine p_120450_)`

## Weighted

*interface* `net.minecraft.client.sounds.Weighted`

### Methods
- `int getWeight()`
- `T getSound(RandomSource p_235268_)`
- `void preloadIfRequired(SoundEngine p_120456_)`
