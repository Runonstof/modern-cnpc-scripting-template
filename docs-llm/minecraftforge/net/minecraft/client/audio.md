# net.minecraft.client.audio

- [ElytraSound](#elytrasound)
- [GuardianSound](#guardiansound)
- [ISound](#isound)
- [ISound.AttenuationType](#isound.attenuationtype)
- [ISoundEventAccessor](#isoundeventaccessor)
- [ISoundEventListener](#isoundeventlistener)
- [ITickableSound](#itickablesound)
- [MovingSound](#movingsound)
- [MovingSoundMinecart](#movingsoundminecart)
- [MovingSoundMinecartRiding](#movingsoundminecartriding)
- [MusicTicker](#musicticker)
- [MusicTicker.MusicType](#musicticker.musictype)
- [PositionedSound](#positionedsound)
- [PositionedSoundRecord](#positionedsoundrecord)
- [Sound](#sound)
- [Sound.Type](#sound.type)
- [SoundEventAccessor](#soundeventaccessor)
- [SoundHandler](#soundhandler)
- [SoundList](#soundlist)
- [SoundListSerializer](#soundlistserializer)
- [SoundManager](#soundmanager)
- [SoundRegistry](#soundregistry)
## ElytraSound

*class* `net.minecraft.client.audio.ElytraSound`

All Implemented Interfaces: ISound, ITickableSound, ITickable

### Inherited fields
- from `net.minecraft.client.audio.MovingSound`: `donePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `attenuationType`, `category`, `pitch`, `positionedSoundLocation`, `repeat`, `repeatDelay`, `sound`, `volume`, `xPosF`, `yPosF`, `zPosF`

### Methods
- `public void update()`

### Inherited methods
- from `net.minecraft.client.audio.MovingSound`: `isDonePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.client.audio.ISound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`

## GuardianSound

*class* `net.minecraft.client.audio.GuardianSound`

All Implemented Interfaces: ISound, ITickableSound, ITickable

### Inherited fields
- from `net.minecraft.client.audio.MovingSound`: `donePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `attenuationType`, `category`, `pitch`, `positionedSoundLocation`, `repeat`, `repeatDelay`, `sound`, `volume`, `xPosF`, `yPosF`, `zPosF`

### Methods
- `public void update()`

### Inherited methods
- from `net.minecraft.client.audio.MovingSound`: `isDonePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.client.audio.ISound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`

## ISound

*interface* `net.minecraft.client.audio.ISound`

### Methods
- `ResourceLocation getSoundLocation()`
- `SoundEventAccessor createAccessor(SoundHandler handler)`
- `Sound getSound()`
- `SoundCategory getCategory()`
- `boolean canRepeat()`
- `int getRepeatDelay()`
- `float getVolume()`
- `float getPitch()`
- `float getXPosF()`
- `float getYPosF()`
- `float getZPosF()`
- `ISound.AttenuationType getAttenuationType()`

## ISound.AttenuationType

*enum* `net.minecraft.client.audio.ISound.AttenuationType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ISound.AttenuationType>

Enclosing interface: ISound

### Fields
- `public static final ISound.AttenuationType NONE`
- `public static final ISound.AttenuationType LINEAR`

### Methods
- `public static ISound.AttenuationType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ISound.AttenuationType c : ISound.AttenuationType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ISound.AttenuationType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getTypeInt()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ISoundEventAccessor

*interface* `net.minecraft.client.audio.ISoundEventAccessor`

### Methods
- `int getWeight()`
- `T cloneEntry()`

## ISoundEventListener

*interface* `net.minecraft.client.audio.ISoundEventListener`

### Methods
- `void soundPlay(ISound soundIn,  SoundEventAccessor accessor)`

## ITickableSound

*interface* `net.minecraft.client.audio.ITickableSound`

All Superinterfaces: ISound, ITickable

### Methods
- `boolean isDonePlaying()`

### Inherited methods
- from `net.minecraft.client.audio.ISound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.util.ITickable`: `update`

## MovingSound

*class* `net.minecraft.client.audio.MovingSound`

All Implemented Interfaces: ISound, ITickableSound, ITickable

### Fields
- `protected boolean donePlaying`

### Inherited fields
- from `net.minecraft.client.audio.PositionedSound`: `attenuationType`, `category`, `pitch`, `positionedSoundLocation`, `repeat`, `repeatDelay`, `sound`, `volume`, `xPosF`, `yPosF`, `zPosF`

### Methods
- `public boolean isDonePlaying()`

### Inherited methods
- from `net.minecraft.client.audio.PositionedSound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.client.audio.ISound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.util.ITickable`: `update`

## MovingSoundMinecart

*class* `net.minecraft.client.audio.MovingSoundMinecart`

All Implemented Interfaces: ISound, ITickableSound, ITickable

### Inherited fields
- from `net.minecraft.client.audio.MovingSound`: `donePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `attenuationType`, `category`, `pitch`, `positionedSoundLocation`, `repeat`, `repeatDelay`, `sound`, `volume`, `xPosF`, `yPosF`, `zPosF`

### Methods
- `public void update()`

### Inherited methods
- from `net.minecraft.client.audio.MovingSound`: `isDonePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.client.audio.ISound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`

## MovingSoundMinecartRiding

*class* `net.minecraft.client.audio.MovingSoundMinecartRiding`

All Implemented Interfaces: ISound, ITickableSound, ITickable

### Inherited fields
- from `net.minecraft.client.audio.MovingSound`: `donePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `attenuationType`, `category`, `pitch`, `positionedSoundLocation`, `repeat`, `repeatDelay`, `sound`, `volume`, `xPosF`, `yPosF`, `zPosF`

### Methods
- `public void update()`

### Inherited methods
- from `net.minecraft.client.audio.MovingSound`: `isDonePlaying`
- from `net.minecraft.client.audio.PositionedSound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`
- from `net.minecraft.client.audio.ISound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`

## MusicTicker

*class* `net.minecraft.client.audio.MusicTicker`

All Implemented Interfaces: ITickable

### Methods
- `public void update()`
- `public void playMusic(MusicTicker.MusicType requestedMusicType)`

## MusicTicker.MusicType

*enum* `net.minecraft.client.audio.MusicTicker.MusicType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<MusicTicker.MusicType>

Enclosing class: MusicTicker

### Fields
- `public static final MusicTicker.MusicType MENU`
- `public static final MusicTicker.MusicType GAME`
- `public static final MusicTicker.MusicType CREATIVE`
- `public static final MusicTicker.MusicType CREDITS`
- `public static final MusicTicker.MusicType NETHER`
- `public static final MusicTicker.MusicType END_BOSS`
- `public static final MusicTicker.MusicType END`

### Methods
- `public static MusicTicker.MusicType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (MusicTicker.MusicType c : MusicTicker.MusicType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static MusicTicker.MusicType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public SoundEvent getMusicLocation()`
- `public int getMinDelay()`
- `public int getMaxDelay()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## PositionedSound

*class* `net.minecraft.client.audio.PositionedSound`

All Implemented Interfaces: ISound

### Fields
- `protected Sound sound`
- `protected SoundCategory category`
- `protected ResourceLocation positionedSoundLocation`
- `protected float volume`
- `protected float pitch`
- `protected float xPosF`
- `protected float yPosF`
- `protected float zPosF`
- `protected boolean repeat`
- `protected int repeatDelay`
- `protected ISound.AttenuationType attenuationType`

### Methods
- `public ResourceLocation getSoundLocation()`
- `public SoundEventAccessor createAccessor(SoundHandler handler)`
- `public Sound getSound()`
- `public SoundCategory getCategory()`
- `public boolean canRepeat()`
- `public int getRepeatDelay()`
- `public float getVolume()`
- `public float getPitch()`
- `public float getXPosF()`
- `public float getYPosF()`
- `public float getZPosF()`
- `public ISound.AttenuationType getAttenuationType()`

## PositionedSoundRecord

*class* `net.minecraft.client.audio.PositionedSoundRecord`

All Implemented Interfaces: ISound

### Inherited fields
- from `net.minecraft.client.audio.PositionedSound`: `attenuationType`, `category`, `pitch`, `positionedSoundLocation`, `repeat`, `repeatDelay`, `sound`, `volume`, `xPosF`, `yPosF`, `zPosF`

### Methods
- `public static PositionedSoundRecord getMasterRecord(SoundEvent soundIn,  float pitchIn)`
- `public static PositionedSoundRecord getRecord(SoundEvent soundIn,  float pitchIn,  float volumeIn)`
- `public static PositionedSoundRecord getMusicRecord(SoundEvent soundIn)`
- `public static PositionedSoundRecord getRecordSoundRecord(SoundEvent soundIn,  float xIn,  float yIn,  float zIn)`

### Inherited methods
- from `net.minecraft.client.audio.PositionedSound`: `canRepeat`, `createAccessor`, `getAttenuationType`, `getCategory`, `getPitch`, `getRepeatDelay`, `getSound`, `getSoundLocation`, `getVolume`, `getXPosF`, `getYPosF`, `getZPosF`

## Sound

*class* `net.minecraft.client.audio.Sound`

All Implemented Interfaces: ISoundEventAccessor<Sound>

### Methods
- `public ResourceLocation getSoundLocation()`
- `public ResourceLocation getSoundAsOggLocation()`
- `public float getVolume()`
- `public float getPitch()`
- `public int getWeight()`
- `public Sound cloneEntry()`
- `public Sound.Type getType()`
- `public boolean isStreaming()`

## Sound.Type

*enum* `net.minecraft.client.audio.Sound.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<Sound.Type>

Enclosing class: Sound

### Fields
- `public static final Sound.Type FILE`
- `public static final Sound.Type SOUND_EVENT`

### Methods
- `public static Sound.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (Sound.Type c : Sound.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static Sound.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static Sound.Type getByName(java.lang.String nameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## SoundEventAccessor

*class* `net.minecraft.client.audio.SoundEventAccessor`

All Implemented Interfaces: ISoundEventAccessor<Sound>

### Methods
- `public int getWeight()`
- `public Sound cloneEntry()`
- `public void addSound(ISoundEventAccessor<Sound> p_188715_1_)`
- `public ResourceLocation getLocation()`
- `public ITextComponent getSubtitle()`

## SoundHandler

*class* `net.minecraft.client.audio.SoundHandler`

All Implemented Interfaces: IResourceManagerReloadListener, ITickable

### Fields
- `public static final Sound MISSING_SOUND`

### Methods
- `public void onResourceManagerReload(IResourceManager resourceManager)`
- `protected java.util.Map<java.lang.String,SoundList> getSoundMap(java.io.InputStream stream)`
- `public SoundEventAccessor getAccessor(ResourceLocation location)`
- `public void playSound(ISound sound)`
- `public void playDelayedSound(ISound sound,  int delay)`
- `public void setListener(EntityPlayer player,  float p_147691_2_)`
- `public void setListener(Entity entity,  float partialTicks)`
- `public void pauseSounds()`
- `public void stopSounds()`
- `public void unloadSounds()`
- `public void update()`
- `public void resumeSounds()`
- `public void setSoundLevel(SoundCategory category,  float volume)`
- `public void stopSound(ISound soundIn)`
- `public boolean isSoundPlaying(ISound sound)`
- `public void addListener(ISoundEventListener listener)`
- `public void removeListener(ISoundEventListener listener)`
- `public void stop(java.lang.String p_189520_1_,  SoundCategory p_189520_2_)`

## SoundList

*class* `net.minecraft.client.audio.SoundList`

### Methods
- `public java.util.List<Sound> getSounds()`
- `public boolean canReplaceExisting()`
- `public java.lang.String getSubtitle()`

## SoundListSerializer

*class* `net.minecraft.client.audio.SoundListSerializer`

### Methods
- `public SoundList deserialize(JsonElement p_deserialize_1_,  java.lang.reflect.Type p_deserialize_2_,  JsonDeserializationContext p_deserialize_3_)  throws JsonParseException`
  - throws: JsonParseException

## SoundManager

*class* `net.minecraft.client.audio.SoundManager`

### Fields
- `public final SoundHandler sndHandler`

### Methods
- `public void reloadSoundSystem()`
- `public void setVolume(SoundCategory category,  float volume)`
- `public void unloadSoundSystem()`
- `public void stopAllSounds()`
- `public void addListener(ISoundEventListener listener)`
- `public void removeListener(ISoundEventListener listener)`
- `public void updateAllSounds()`
- `public boolean isSoundPlaying(ISound sound)`
- `public void stopSound(ISound sound)`
- `public void playSound(ISound p_sound)`
- `public void pauseAllSounds()`
- `public void resumeAllSounds()`
- `public void playDelayedSound(ISound sound,  int delay)`
- `public void setListener(EntityPlayer player,  float p_148615_2_)`
- `public void setListener(Entity player,  float p_148615_2_)`
- `public void stop(java.lang.String p_189567_1_,  SoundCategory p_189567_2_)`

## SoundRegistry

*class* `net.minecraft.client.audio.SoundRegistry`

All Implemented Interfaces: java.lang.Iterable<SoundEventAccessor>, IRegistry<ResourceLocation, SoundEventAccessor>

### Inherited fields
- from `net.minecraft.util.registry.RegistrySimple`: `registryObjects`

### Methods
- `protected java.util.Map<ResourceLocation,SoundEventAccessor> createUnderlyingMap()`
- `public void add(SoundEventAccessor accessor)`
- `public void clearMap()`

### Inherited methods
- from `net.minecraft.util.registry.RegistrySimple`: `containsKey`, `getKeys`, `getObject`, `getRandomObject`, `iterator`, `putObject`
- from `java.lang.Iterable`: `forEach`, `spliterator`
