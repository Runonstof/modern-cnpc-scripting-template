# com.mojang.blaze3d.audio

- [Channel](#channel)
- [Class Library.Pool](#class-library.pool)
- [Library](#library)
- [Library.ChannelPool](#library.channelpool)
- [Library.CountingChannelPool](#library.countingchannelpool)
- [Listener](#listener)
- [OggAudioStream](#oggaudiostream)
- [OggAudioStream.OutputConcat](#oggaudiostream.outputconcat)
- [OpenAlUtil](#openalutil)
- [SoundBuffer](#soundbuffer)
## Channel

*class* `com.mojang.blaze3d.audio.Channel`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int QUEUED_BUFFER_COUNT` (= 4)
- `public static final int BUFFER_DURATION_SECONDS` (= 1)
- `private final int source`
- `private final AtomicBoolean initialized`
- `private int streamingBufferSize`
- `@Nullable private AudioStream stream`

### Methods
- `@Nullable static Channel create()`
- `public void destroy()`
- `public void play()`
- `private int getState()`
- `public void pause()`
- `public void unpause()`
- `public void stop()`
- `public boolean playing()`
- `public boolean stopped()`
- `public void setSelfPosition(Vec3 p_83655_)`
- `public void setPitch(float p_83651_)`
- `public void setLooping(boolean p_83664_)`
- `public void setVolume(float p_83667_)`
- `public void disableAttenuation()`
- `public void linearAttenuation(float p_83674_)`
- `public void setRelative(boolean p_83671_)`
- `public void attachStaticBuffer(SoundBuffer p_83657_)`
- `public void attachBufferStream(AudioStream p_83659_)`
- `private static int calculateBufferSize(AudioFormat p_83661_,  int p_83662_)`
- `private void pumpBuffers(int p_83653_)`
- `public void updateStream()`
- `private int removeProcessedBuffers()`

## Class Library.Pool

*enum* `com.mojang.blaze3d.audio.Class Library.Pool`

Enclosing class: Library

### Methods
- `public static Library.Pool[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Library.Pool valueOf(String name)`
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

## Library

*class* `com.mojang.blaze3d.audio.Library`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int NO_DEVICE` (= 0)
- `private static final int DEFAULT_CHANNEL_COUNT` (= 30)
- `private long currentDevice`
- `private long context`
- `private boolean supportsDisconnections`
- `@Nullable private String defaultDeviceName`
- `private static final Library.ChannelPool EMPTY`
- `private Library.ChannelPool staticChannels`
- `private Library.ChannelPool streamingChannels`
- `private final Listener listener`

### Methods
- `public void init(@Nullable  String p_231085_,  boolean p_231086_)`
- `private void setHrtf(boolean p_242278_)`
- `private int getChannelCount()`
- `@Nullable public static String getDefaultDeviceName()`
- `public String getCurrentDeviceName()`
- `public boolean hasDefaultDeviceChanged()`
- `private static long openDeviceOrFallback(@Nullable  String p_193473_)`
- `private static OptionalLong tryOpenDevice(@Nullable  String p_193476_)`
- `public void cleanup()`
- `public Listener getListener()`
- `@Nullable public Channel acquireChannel(Library.Pool p_83698_)`
- `public void releaseChannel(Channel p_83696_)`
- `public String getDebugString()`
- `public List<String> getAvailableSoundDevices()`
- `public boolean isCurrentDeviceDisconnected()`

## Library.ChannelPool

*interface* `com.mojang.blaze3d.audio.Library.ChannelPool`

Enclosing class: Library

### Methods
- `@Nullable Channel acquire()`
- `boolean release(Channel p_83712_)`
- `void cleanup()`
- `int getMaxCount()`
- `int getUsedCount()`

## Library.CountingChannelPool

*class* `com.mojang.blaze3d.audio.Library.CountingChannelPool`

Enclosing class: Library

### Fields
- `private final int limit`
- `private final Set<Channel> activeChannels`

### Methods
- `@Nullable public Channel acquire()`
- `public boolean release(Channel p_83719_)`
- `public void cleanup()`
- `public int getMaxCount()`
- `public int getUsedCount()`

## Listener

*class* `com.mojang.blaze3d.audio.Listener`

### Fields
- `private float gain`
- `private Vec3 position`

### Methods
- `public void setListenerPosition(Vec3 p_83740_)`
- `public Vec3 getListenerPosition()`
- `public void setListenerOrientation(org.joml.Vector3f p_254324_,  org.joml.Vector3f p_253810_)`
- `public void setGain(float p_83738_)`
- `public float getGain()`
- `public void reset()`

## OggAudioStream

*class* `com.mojang.blaze3d.audio.OggAudioStream`

### Fields
- `private static final int EXPECTED_MAX_FRAME_SIZE` (= 8192)
- `private long handle`
- `private final AudioFormat audioFormat`
- `private final InputStream input`
- `private ByteBuffer buffer`

### Methods
- `private boolean refillFromStream()  throws IOException`
  - throws: IOException
- `private void forwardBuffer()`
- `private boolean readFrame(OggAudioStream.OutputConcat p_83756_)  throws IOException`
  - throws: IOException
- `private void convertMono(FloatBuffer p_83758_,  OggAudioStream.OutputConcat p_83759_)`
- `private void convertStereo(FloatBuffer p_83761_,  FloatBuffer p_83762_,  OggAudioStream.OutputConcat p_83763_)`
- `public void close()  throws IOException`
  - throws: IOException
- `public AudioFormat getFormat()`
- `public ByteBuffer read(int p_83754_)  throws IOException`
  - throws: IOException
- `public ByteBuffer readAll()  throws IOException`
  - throws: IOException

## OggAudioStream.OutputConcat

*class* `com.mojang.blaze3d.audio.OggAudioStream.OutputConcat`

Enclosing class: OggAudioStream

### Fields
- `private final List<ByteBuffer> buffers`
- `private final int bufferSize`
- `int byteCount`
- `private ByteBuffer currentBuffer`

### Methods
- `private void createNewBuffer()`
- `public void put(float p_83776_)`
- `public ByteBuffer get()`

## OpenAlUtil

*class* `com.mojang.blaze3d.audio.OpenAlUtil`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `private static String alErrorToString(int p_83783_)`
- `static boolean checkALError(String p_83788_)`
- `private static String alcErrorToString(int p_83792_)`
- `static boolean checkALCError(long p_83785_,  String p_83786_)`
- `static int audioFormatToOpenAl(AudioFormat p_83790_)`

## SoundBuffer

*class* `com.mojang.blaze3d.audio.SoundBuffer`

### Fields
- `@Nullable private ByteBuffer data`
- `private final AudioFormat format`
- `private boolean hasAlBuffer`
- `private int alBuffer`

### Methods
- `OptionalInt getAlBuffer()`
- `public void discardAlBuffer()`
- `public OptionalInt releaseAlBuffer()`
