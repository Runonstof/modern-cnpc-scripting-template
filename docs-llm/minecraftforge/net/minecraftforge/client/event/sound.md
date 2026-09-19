# net.minecraftforge.client.event.sound

- [PlaySoundEvent](#playsoundevent)
- [PlaySoundSourceEvent](#playsoundsourceevent)
- [PlayStreamingSourceEvent](#playstreamingsourceevent)
- [SoundEngineLoadEvent](#soundengineloadevent)
- [SoundEvent](#soundevent)
- [SoundEvent.SoundSourceEvent](#soundevent.soundsourceevent)
## PlaySoundEvent

*class* `net.minecraftforge.client.event.sound.PlaySoundEvent`

Fired when a sound is about to be played by the sound engine. This fires before the sound is played and before any
 checks on the sound (such as a zeroed volume, an empty Sound, and
 others). This can be used to change or prevent (by passing null) a sound from being played through
 setSound(SoundInstance)).

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final String name`
- `private final SoundInstance originalSound`
- `@Nullable private @Nullable SoundInstance sound`

### Methods
- `public String getName()`
  Returns the name of the original sound. This is equivalent to the path of the location of the original sound.
  - returns: the name of the original sound
- `public SoundInstance getOriginalSound()`
  Returns the original sound that was to be played.
  - returns: the original sound that was to be played
- `@Nullable public @Nullable SoundInstance getSound()`
  Returns the sound to be played, or null if no sound will be played.
  - returns: the sound to be played, or null if no sound will be played
- `public void setSound(@Nullable  @Nullable SoundInstance newSound)`
  Sets the sound to be played, which may be null to prevent any sound from being played.
  - param: newSound - the new sound to be played, or null for no sound

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getEngine`

## PlaySoundSourceEvent

*class* `net.minecraftforge.client.event.sound.PlaySoundSourceEvent`

Fired when a non-streaming sound is being played. A non-streaming sound is loaded fully into memory
 in a buffer before being played, and used for most sounds of short length such as sound effects for clicking
 buttons.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent.SoundSourceEvent`: `getChannel`, `getName`, `getSound`
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getEngine`

## PlayStreamingSourceEvent

*class* `net.minecraftforge.client.event.sound.PlayStreamingSourceEvent`

Fired when a streaming sound is being played. A streaming sound is streamed directly from its source
 (such as a file), and used for sounds of long length which are unsuitable to keep fully loaded in-memory in a buffer
 (as is done for regular non-streaming sounds), such as background music or music discs.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent.SoundSourceEvent`: `getChannel`, `getName`, `getSound`
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getEngine`

## SoundEngineLoadEvent

*class* `net.minecraftforge.client.event.sound.SoundEngineLoadEvent`

Fired when the SoundEngine is constructed or (re)loaded, such as during game initialization or when the sound
 output device is changed.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getEngine`

## SoundEvent

*class* `net.minecraftforge.client.event.sound.SoundEvent`

Superclass for sound related events.

 These events are fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final SoundEngine engine`

### Methods
- `public SoundEngine getEngine()`
  Returns the sound engine.
  - returns: the sound engine

## SoundEvent.SoundSourceEvent

*class* `net.minecraftforge.client.event.sound.SoundEvent.SoundSourceEvent`

Superclass for when a sound has started to play on an audio channel.

 These events are fired on the main Forge event bus,
 only on the logical client.

Enclosing class: SoundEvent

### Fields
- `private final SoundInstance sound`
- `private final Channel channel`
- `private final String name`

### Methods
- `public SoundInstance getSound()`
  Returns the sound being played.
  - returns: the sound being played
- `public Channel getChannel()`
  Returns the audio channel on which the sound is playing on.
  - returns: the audio channel on which the sound is playing on
- `public String getName()`
  Returns the name of the sound being played. This is equivalent to the path of the location of the original sound.
  - returns: the name of the sound being played

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getEngine`
