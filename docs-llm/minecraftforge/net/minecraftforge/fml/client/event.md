# net.minecraftforge.fml.client.event

- [ConfigChangedEvent](#configchangedevent)
- [ConfigChangedEvent.OnConfigChangedEvent](#configchangedevent.onconfigchangedevent)
- [ConfigChangedEvent.PostConfigChangedEvent](#configchangedevent.postconfigchangedevent)
## ConfigChangedEvent

*class* `net.minecraftforge.fml.client.event.ConfigChangedEvent`

These events are posted from the GuiConfig screen when the done button is pressed. The events are only posted
 if the parent screen is not an instance of GuiConfig or if the configID field has been set for
 the GuiConfig screen.

 Listeners for this event should use OnConfigChanged or PostConfigChanged and check for a specific mod ID.
 For best results the listener should refresh any objects/fields that are set based on the mod's config
 and should serialize the modified config.

### Methods
- `public java.lang.String getModID()`
  The Mod ID of the mod whose configuration just changed.
- `public boolean isWorldRunning()`
  Whether or not a world is currently running.
- `public boolean isRequiresMcRestart()`
  Will be set to true if any elements were changed that require a restart of Minecraft.
- `public java.lang.String getConfigID()`
  A String identifier for this ConfigChangedEvent.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ConfigChangedEvent.OnConfigChangedEvent

*class* `net.minecraftforge.fml.client.event.ConfigChangedEvent.OnConfigChangedEvent`

This event is intended to be consumed by the mod whose config has been changed. It fires when the Done button
 has been clicked on a GuiConfig screen and the following conditions are met:

 - at least one config element has been changed

 - one of these 2 conditions are met:

 1) the parent screen is null or is not an instance of GuiConfig

 2) the configID field has been set to a non-null value for the GuiConfig screen

 Modders should check the modID field of the event to ensure they are only acting on their own config screen's event!

Enclosing class: ConfigChangedEvent

### Inherited methods
- from `net.minecraftforge.fml.client.event.ConfigChangedEvent`: `getConfigID`, `getModID`, `isRequiresMcRestart`, `isWorldRunning`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ConfigChangedEvent.PostConfigChangedEvent

*class* `net.minecraftforge.fml.client.event.ConfigChangedEvent.PostConfigChangedEvent`

This event is provided for mods to consume if they want to be able to check if other mods' configs have been changed.
 This event only fires if the OnConfigChangedEvent result is not DENY.

Enclosing class: ConfigChangedEvent

### Inherited methods
- from `net.minecraftforge.fml.client.event.ConfigChangedEvent`: `getConfigID`, `getModID`, `isRequiresMcRestart`, `isWorldRunning`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
