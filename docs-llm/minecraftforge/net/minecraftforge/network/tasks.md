# net.minecraftforge.network.tasks

- [ChannelVersionsTask](#channelversionstask)
- [ForgeNetworkConfigurationHandler](#forgenetworkconfigurationhandler)
- [ModVersionsTask](#modversionstask)
- [RegisterChannelsTask](#registerchannelstask)
- [SyncConfigTask](#syncconfigtask)
- [SyncRegistriesTask](#syncregistriestask)
## ChannelVersionsTask

*class* `net.minecraftforge.network.tasks.ChannelVersionsTask`

Sends the list of known channels to the client as well as their specific versions.
 Allows the client to do compatibility checking.

### Fields
- `public static final ConfigurationTask.Type TYPE`

### Methods
- `public void start(ConfigurationTaskContext ctx)`
- `public void start(Consumer<Packet<?>> send)`
- `public ConfigurationTask.Type type()`

## ForgeNetworkConfigurationHandler

*class* `net.minecraftforge.network.tasks.ForgeNetworkConfigurationHandler`

### Methods
- `public void gatherInit(GatherLoginConfigurationTasksEvent event)`

## ModVersionsTask

*class* `net.minecraftforge.network.tasks.ModVersionsTask`

Sends the list of known channels to the client using the
 Plugin Channel
 register messages.

### Fields
- `public static final ConfigurationTask.Type TYPE`

### Methods
- `public void start(ConfigurationTaskContext ctx)`
- `public void start(Consumer<Packet<?>> send)`
- `public ConfigurationTask.Type type()`

## RegisterChannelsTask

*class* `net.minecraftforge.network.tasks.RegisterChannelsTask`

Sends the list of known channels to the client using the
 Plugin Channel
 register messages.

### Fields
- `private static final ConfigurationTask.Type TYPE`

### Methods
- `public void start(ConfigurationTaskContext ctx)`
- `public void start(Consumer<Packet<?>> send)`
- `public ConfigurationTask.Type type()`

## SyncConfigTask

*class* `net.minecraftforge.network.tasks.SyncConfigTask`

### Fields
- `static final ConfigurationTask.Type TYPE`
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker MARKER`

### Methods
- `private static void run(ConfigurationTaskContext ctx)`

### Inherited methods
- from `net.minecraftforge.network.config.SimpleConfigurationTask`: `start`, `start`, `type`

## SyncRegistriesTask

*class* `net.minecraftforge.network.tasks.SyncRegistriesTask`

Sends the list of known channels to the client as well as their specific versions.
 Allows the client to do compatibility checking.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final org.apache.logging.log4j.Marker MARKER`
- `public static final ConfigurationTask.Type TYPE`
- `private ConfigurationTaskContext taskCtx`
- `private Map<ResourceLocation,ForgeRegistry.Snapshot> snapshot`
- `private ForgePacketHandler handler`
- `private int expectedToken`

### Methods
- `public void start(ConfigurationTaskContext ctx)`
- `private void sendRegistries(Acknowledge msg,  CustomPayloadEvent.Context ctx)`
- `public void start(Consumer<Packet<?>> send)`
- `public ConfigurationTask.Type type()`
