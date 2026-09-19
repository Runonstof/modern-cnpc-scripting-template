# net.minecraftforge.client.event.sound

- [PlaySoundEvent](#playsoundevent)
- [PlaySoundSourceEvent](#playsoundsourceevent)
- [PlayStreamingSourceEvent](#playstreamingsourceevent)
- [SoundEvent](#soundevent)
- [SoundEvent.SoundSourceEvent](#soundevent.soundsourceevent)
- [SoundLoadEvent](#soundloadevent)
- [SoundSetupEvent](#soundsetupevent)
## PlaySoundEvent

*class* `net.minecraftforge.client.event.sound.PlaySoundEvent`

Raised when the SoundManager tries to play a normal sound.

 If you return null from this function it will prevent the sound from being played,
 you can return a different entry if you want to change the sound being played.

### Methods
- `public java.lang.String getName()`
- `public ISound getSound()`
- `public ISound getResultSound()`
- `public void setResultSound(ISound result)`

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getManager`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlaySoundSourceEvent

*class* `net.minecraftforge.client.event.sound.PlaySoundSourceEvent`

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent.SoundSourceEvent`: `getName`, `getSound`, `getUuid`
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getManager`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayStreamingSourceEvent

*class* `net.minecraftforge.client.event.sound.PlayStreamingSourceEvent`

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent.SoundSourceEvent`: `getName`, `getSound`, `getUuid`
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getManager`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SoundEvent

*class* `net.minecraftforge.client.event.sound.SoundEvent`

### Methods
- `public SoundManager getManager()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SoundEvent.SoundSourceEvent

*class* `net.minecraftforge.client.event.sound.SoundEvent.SoundSourceEvent`

Enclosing class: SoundEvent

### Methods
- `public ISound getSound()`
- `public java.lang.String getUuid()`
- `public java.lang.String getName()`

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getManager`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SoundLoadEvent

*class* `net.minecraftforge.client.event.sound.SoundLoadEvent`

Raised by the SoundManager.loadSoundSettings, this would be a good place for
 adding your custom sounds to the SoundPool.

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getManager`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SoundSetupEvent

*class* `net.minecraftforge.client.event.sound.SoundSetupEvent`

This event is raised by the SoundManager when it does its first setup of the
 SoundSystemConfig's codecs, use this function to add your own codecs.

### Inherited methods
- from `net.minecraftforge.client.event.sound.SoundEvent`: `getManager`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
