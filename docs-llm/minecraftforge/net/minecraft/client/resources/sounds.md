# net.minecraft.client.resources.sounds

- [AbstractSoundInstance](#abstractsoundinstance)
- [AbstractTickableSoundInstance](#abstracttickablesoundinstance)
- [AmbientSoundHandler](#ambientsoundhandler)
- [BeeAggressiveSoundInstance](#beeaggressivesoundinstance)
- [BeeFlyingSoundInstance](#beeflyingsoundinstance)
- [BeeSoundInstance](#beesoundinstance)
- [BiomeAmbientSoundsHandler](#biomeambientsoundshandler)
- [BiomeAmbientSoundsHandler.LoopSoundInstance](#biomeambientsoundshandler.loopsoundinstance)
- [BubbleColumnAmbientSoundHandler](#bubblecolumnambientsoundhandler)
- [Class Sound.Type](#class-sound.type)
- [Class SoundInstance.Attenuation](#class-soundinstance.attenuation)
- [ElytraOnPlayerSoundInstance](#elytraonplayersoundinstance)
- [EntityBoundSoundInstance](#entityboundsoundinstance)
- [GuardianAttackSoundInstance](#guardianattacksoundinstance)
- [MinecartSoundInstance](#minecartsoundinstance)
- [RidingMinecartSoundInstance](#ridingminecartsoundinstance)
- [SimpleSoundInstance](#simplesoundinstance)
- [SnifferSoundInstance](#sniffersoundinstance)
- [Sound](#sound)
- [SoundEventRegistration](#soundeventregistration)
- [SoundEventRegistrationSerializer](#soundeventregistrationserializer)
- [SoundInstance](#soundinstance)
- [TickableSoundInstance](#tickablesoundinstance)
- [UnderwaterAmbientSoundHandler](#underwaterambientsoundhandler)
- [UnderwaterAmbientSoundInstances](#underwaterambientsoundinstances)
- [UnderwaterAmbientSoundInstances.SubSound](#underwaterambientsoundinstances.subsound)
- [UnderwaterAmbientSoundInstances.UnderwaterAmbientSoundInstance](#underwaterambientsoundinstances.underwaterambientsoundinstance)
## AbstractSoundInstance

*class* `net.minecraft.client.resources.sounds.AbstractSoundInstance`

### Fields
- `protected Sound sound`
- `protected final SoundSource source`
- `protected final ResourceLocation location`
- `protected float volume`
- `protected float pitch`
- `protected double x`
- `protected double y`
- `protected double z`
- `protected boolean looping`
- `protected int delay`
- `protected SoundInstance.Attenuation attenuation`
- `protected boolean relative`
- `protected RandomSource random`

### Methods
- `public ResourceLocation getLocation()`
- `public WeighedSoundEvents resolve(SoundManager p_119591_)`
- `public Sound getSound()`
- `public SoundSource getSource()`
- `public boolean isLooping()`
- `public int getDelay()`
- `public float getVolume()`
- `public float getPitch()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public SoundInstance.Attenuation getAttenuation()`
- `public boolean isRelative()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getStream`

## AbstractTickableSoundInstance

*class* `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`

### Fields
- `private boolean stopped`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public boolean isStopped()`
- `protected final void stop()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`
- from `net.minecraft.client.resources.sounds.TickableSoundInstance`: `tick`

## AmbientSoundHandler

*interface* `net.minecraft.client.resources.sounds.AmbientSoundHandler`

### Methods
- `void tick()`

## BeeAggressiveSoundInstance

*class* `net.minecraft.client.resources.sounds.BeeAggressiveSoundInstance`

### Inherited fields
- from `net.minecraft.client.resources.sounds.BeeSoundInstance`: `bee`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `protected AbstractTickableSoundInstance getAlternativeSoundInstance()`
- `protected boolean shouldSwitchSounds()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.BeeSoundInstance`: `canPlaySound`, `canStartSilent`, `tick`
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## BeeFlyingSoundInstance

*class* `net.minecraft.client.resources.sounds.BeeFlyingSoundInstance`

### Inherited fields
- from `net.minecraft.client.resources.sounds.BeeSoundInstance`: `bee`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `protected AbstractTickableSoundInstance getAlternativeSoundInstance()`
- `protected boolean shouldSwitchSounds()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.BeeSoundInstance`: `canPlaySound`, `canStartSilent`, `tick`
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## BeeSoundInstance

*class* `net.minecraft.client.resources.sounds.BeeSoundInstance`

### Fields
- `private static final float VOLUME_MIN` (= 0.0f)
- `private static final float VOLUME_MAX` (= 1.2000000476837158f)
- `private static final float PITCH_MIN` (= 0.0f)
- `protected final Bee bee`
- `private boolean hasSwitched`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public void tick()`
- `private float getMinPitch()`
- `private float getMaxPitch()`
- `public boolean canStartSilent()`
- `public boolean canPlaySound()`
- `protected abstract AbstractTickableSoundInstance getAlternativeSoundInstance()`
- `protected abstract boolean shouldSwitchSounds()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## BiomeAmbientSoundsHandler

*class* `net.minecraft.client.resources.sounds.BiomeAmbientSoundsHandler`

### Fields
- `private static final int LOOP_SOUND_CROSS_FADE_TIME` (= 40)
- `private static final float SKY_MOOD_RECOVERY_RATE` (= 0.0010000000474974513f)
- `private final LocalPlayer player`
- `private final SoundManager soundManager`
- `private final BiomeManager biomeManager`
- `private final RandomSource random`
- `private final it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap<Biome,BiomeAmbientSoundsHandler.LoopSoundInstance> loopSounds`
- `private Optional<AmbientMoodSettings> moodSettings`
- `private Optional<AmbientAdditionsSettings> additionsSettings`
- `private float moodiness`
- `@Nullable private Biome previousBiome`

### Methods
- `public float getMoodiness()`
- `public void tick()`

## BiomeAmbientSoundsHandler.LoopSoundInstance

*class* `net.minecraft.client.resources.sounds.BiomeAmbientSoundsHandler.LoopSoundInstance`

Enclosing class: BiomeAmbientSoundsHandler

### Fields
- `private int fadeDirection`
- `private int fade`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public void tick()`
- `public void fadeOut()`
- `public void fadeIn()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## BubbleColumnAmbientSoundHandler

*class* `net.minecraft.client.resources.sounds.BubbleColumnAmbientSoundHandler`

### Fields
- `private final LocalPlayer player`
- `private boolean wasInBubbleColumn`
- `private boolean firstTick`

### Methods
- `public void tick()`

## Class Sound.Type

*enum* `net.minecraft.client.resources.sounds.Class Sound.Type`

Enclosing class: Sound

### Fields
- `private final String name`

### Methods
- `public static Sound.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Sound.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public static Sound.Type getByName(String p_119811_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class SoundInstance.Attenuation

*enum* `net.minecraft.client.resources.sounds.Class SoundInstance.Attenuation`

Enclosing interface: SoundInstance

### Methods
- `public static SoundInstance.Attenuation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SoundInstance.Attenuation valueOf(String name)`
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

## ElytraOnPlayerSoundInstance

*class* `net.minecraft.client.resources.sounds.ElytraOnPlayerSoundInstance`

### Fields
- `public static final int DELAY` (= 20)
- `private final LocalPlayer player`
- `private int time`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## EntityBoundSoundInstance

*class* `net.minecraft.client.resources.sounds.EntityBoundSoundInstance`

### Fields
- `private final Entity entity`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public boolean canPlaySound()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## GuardianAttackSoundInstance

*class* `net.minecraft.client.resources.sounds.GuardianAttackSoundInstance`

### Fields
- `private static final float VOLUME_MIN` (= 0.0f)
- `private static final float VOLUME_SCALE` (= 1.0f)
- `private static final float PITCH_MIN` (= 0.699999988079071f)
- `private static final float PITCH_SCALE` (= 0.5f)
- `private final Guardian guardian`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public boolean canPlaySound()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## MinecartSoundInstance

*class* `net.minecraft.client.resources.sounds.MinecartSoundInstance`

### Fields
- `private static final float VOLUME_MIN` (= 0.0f)
- `private static final float VOLUME_MAX` (= 0.699999988079071f)
- `private static final float PITCH_MIN` (= 0.0f)
- `private static final float PITCH_MAX` (= 1.0f)
- `private static final float PITCH_DELTA` (= 0.0024999999441206455f)
- `private final AbstractMinecart minecart`
- `private float pitch`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public boolean canPlaySound()`
- `public boolean canStartSilent()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## RidingMinecartSoundInstance

*class* `net.minecraft.client.resources.sounds.RidingMinecartSoundInstance`

### Fields
- `private static final float VOLUME_MIN` (= 0.0f)
- `private static final float VOLUME_MAX` (= 0.75f)
- `private final Player player`
- `private final AbstractMinecart minecart`
- `private final boolean underwaterSound`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public boolean canPlaySound()`
- `public boolean canStartSilent()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## SimpleSoundInstance

*class* `net.minecraft.client.resources.sounds.SimpleSoundInstance`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public static SimpleSoundInstance forUI(SoundEvent p_119753_,  float p_119754_)`
- `public static SimpleSoundInstance forUI(Holder<SoundEvent> p_263418_,  float p_263405_)`
- `public static SimpleSoundInstance forUI(SoundEvent p_119756_,  float p_119757_,  float p_119758_)`
- `public static SimpleSoundInstance forMusic(SoundEvent p_119746_)`
- `public static SimpleSoundInstance forRecord(SoundEvent p_249575_,  Vec3 p_249600_)`
- `public static SimpleSoundInstance forLocalAmbience(SoundEvent p_119767_,  float p_119768_,  float p_119769_)`
- `public static SimpleSoundInstance forAmbientAddition(SoundEvent p_119760_)`
- `public static SimpleSoundInstance forAmbientMood(SoundEvent p_235128_,  RandomSource p_235129_,  double p_235130_,  double p_235131_,  double p_235132_)`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getStream`

## SnifferSoundInstance

*class* `net.minecraft.client.resources.sounds.SnifferSoundInstance`

### Fields
- `private static final float VOLUME` (= 1.0f)
- `private static final float PITCH` (= 1.0f)
- `private final Sniffer sniffer`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public boolean canPlaySound()`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## Sound

*class* `net.minecraft.client.resources.sounds.Sound`

### Fields
- `public static final FileToIdConverter SOUND_LISTER`
- `private final ResourceLocation location`
- `private final SampledFloat volume`
- `private final SampledFloat pitch`
- `private final int weight`
- `private final Sound.Type type`
- `private final boolean stream`
- `private final boolean preload`
- `private final int attenuationDistance`

### Methods
- `public ResourceLocation getLocation()`
- `public ResourceLocation getPath()`
- `public SampledFloat getVolume()`
- `public SampledFloat getPitch()`
- `public int getWeight()`
- `public Sound getSound(RandomSource p_235143_)`
- `public void preloadIfRequired(SoundEngine p_119789_)`
- `public Sound.Type getType()`
- `public boolean shouldStream()`
- `public boolean shouldPreload()`
- `public int getAttenuationDistance()`
- `public String toString()`

## SoundEventRegistration

*class* `net.minecraft.client.resources.sounds.SoundEventRegistration`

### Fields
- `private final List<Sound> sounds`
- `private final boolean replace`
- `@Nullable private final String subtitle`

### Methods
- `public List<Sound> getSounds()`
- `public boolean isReplace()`
- `@Nullable public String getSubtitle()`

## SoundEventRegistrationSerializer

*class* `net.minecraft.client.resources.sounds.SoundEventRegistrationSerializer`

### Fields
- `private static final FloatProvider DEFAULT_FLOAT`

### Methods
- `public SoundEventRegistration deserialize(com.google.gson.JsonElement p_119827_,  Type p_119828_,  com.google.gson.JsonDeserializationContext p_119829_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `private List<Sound> getSounds(com.google.gson.JsonObject p_119831_)`
- `private Sound getSound(com.google.gson.JsonObject p_119836_)`
- `private Sound.Type getType(com.google.gson.JsonObject p_119833_,  Sound.Type p_119834_)`

## SoundInstance

*interface* `net.minecraft.client.resources.sounds.SoundInstance`

### Methods
- `ResourceLocation getLocation()`
- `@Nullable WeighedSoundEvents resolve(SoundManager p_119841_)`
- `Sound getSound()`
- `SoundSource getSource()`
- `boolean isLooping()`
- `boolean isRelative()`
- `int getDelay()`
- `float getVolume()`
- `float getPitch()`
- `double getX()`
- `double getY()`
- `double getZ()`
- `SoundInstance.Attenuation getAttenuation()`
- `default boolean canStartSilent()`
- `default boolean canPlaySound()`
- `static RandomSource createUnseededRandom()`
- `default CompletableFuture<AudioStream> getStream(SoundBufferLibrary soundBuffers,  Sound sound,  boolean looping)`

## TickableSoundInstance

*interface* `net.minecraft.client.resources.sounds.TickableSoundInstance`

All Superinterfaces: SoundInstance

### Methods
- `boolean isStopped()`
- `void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## UnderwaterAmbientSoundHandler

*class* `net.minecraft.client.resources.sounds.UnderwaterAmbientSoundHandler`

### Fields
- `public static final float CHANCE_PER_TICK` (= 0.009999999776482582f)
- `public static final float RARE_CHANCE_PER_TICK` (= 0.0010000000474974513f)
- `public static final float ULTRA_RARE_CHANCE_PER_TICK` (= 9.999999747378752E-5f)
- `private static final int MINIMUM_TICK_DELAY` (= 0)
- `private final LocalPlayer player`
- `private final SoundManager soundManager`
- `private int tickDelay`

### Methods
- `public void tick()`

## UnderwaterAmbientSoundInstances

*class* `net.minecraft.client.resources.sounds.UnderwaterAmbientSoundInstances`

## UnderwaterAmbientSoundInstances.SubSound

*class* `net.minecraft.client.resources.sounds.UnderwaterAmbientSoundInstances.SubSound`

Enclosing class: UnderwaterAmbientSoundInstances

### Fields
- `private final LocalPlayer player`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`

## UnderwaterAmbientSoundInstances.UnderwaterAmbientSoundInstance

*class* `net.minecraft.client.resources.sounds.UnderwaterAmbientSoundInstances.UnderwaterAmbientSoundInstance`

Enclosing class: UnderwaterAmbientSoundInstances

### Fields
- `public static final int FADE_DURATION` (= 40)
- `private final LocalPlayer player`
- `private int fade`

### Inherited fields
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `attenuation`, `delay`, `location`, `looping`, `pitch`, `random`, `relative`, `sound`, `source`, `volume`, `x`, `y`, `z`

### Methods
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.resources.sounds.AbstractTickableSoundInstance`: `isStopped`, `stop`
- from `net.minecraft.client.resources.sounds.AbstractSoundInstance`: `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`, `toString`
- from `net.minecraft.client.resources.sounds.SoundInstance`: `canPlaySound`, `canStartSilent`, `getAttenuation`, `getDelay`, `getLocation`, `getPitch`, `getSound`, `getSource`, `getStream`, `getVolume`, `getX`, `getY`, `getZ`, `isLooping`, `isRelative`, `resolve`
