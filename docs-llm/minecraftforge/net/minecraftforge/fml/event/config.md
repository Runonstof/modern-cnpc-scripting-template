# net.minecraftforge.fml.event.config

- [ModConfigEvent](#modconfigevent)
- [ModConfigEvent.Loading](#modconfigevent.loading)
- [ModConfigEvent.Reloading](#modconfigevent.reloading)
- [ModConfigEvent.Unloading](#modconfigevent.unloading)
## ModConfigEvent

*class* `net.minecraftforge.fml.event.config.ModConfigEvent`

### Fields
- `private final ModConfig config`

### Inherited fields
- from `net.minecraftforge.fml.config.IConfigEvent`: `CONFIGCONFIG`

### Methods
- `public ModConfig getConfig()`

### Inherited methods
- from `net.minecraftforge.fml.config.IConfigEvent`: `self`

## ModConfigEvent.Loading

*class* `net.minecraftforge.fml.event.config.ModConfigEvent.Loading`

Fired during mod and server loading, depending on ModConfig.Type of config file.
 Any Config objects associated with this will be valid and can be queried directly.

Enclosing class: ModConfigEvent

### Inherited fields
- from `net.minecraftforge.fml.config.IConfigEvent`: `CONFIGCONFIG`

### Inherited methods
- from `net.minecraftforge.fml.event.config.ModConfigEvent`: `getConfig`
- from `net.minecraftforge.fml.config.IConfigEvent`: `self`

## ModConfigEvent.Reloading

*class* `net.minecraftforge.fml.event.config.ModConfigEvent.Reloading`

Fired when the configuration is changed. This can be caused by a change to the config
 from a UI or from editing the file itself. IMPORTANT: this can fire at any time
 and may not even be on the server or client threads. Ensure you properly synchronize
 any resultant changes.

Enclosing class: ModConfigEvent

### Inherited fields
- from `net.minecraftforge.fml.config.IConfigEvent`: `CONFIGCONFIG`

### Inherited methods
- from `net.minecraftforge.fml.event.config.ModConfigEvent`: `getConfig`
- from `net.minecraftforge.fml.config.IConfigEvent`: `self`

## ModConfigEvent.Unloading

*class* `net.minecraftforge.fml.event.config.ModConfigEvent.Unloading`

Fired when a config is unloaded. This only happens when the server closes, which is
 probably only really relevant on the client, to reset internal mod state when the
 server goes away, though it will fire on the dedicated server as well.
 The config file will be saved after this event has fired.

Enclosing class: ModConfigEvent

### Inherited fields
- from `net.minecraftforge.fml.config.IConfigEvent`: `CONFIGCONFIG`

### Inherited methods
- from `net.minecraftforge.fml.event.config.ModConfigEvent`: `getConfig`
- from `net.minecraftforge.fml.config.IConfigEvent`: `self`
