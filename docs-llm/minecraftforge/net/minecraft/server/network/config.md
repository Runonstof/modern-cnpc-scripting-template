# net.minecraft.server.network.config

- [JoinWorldTask](#joinworldtask)
- [ServerResourcePackConfigurationTask](#serverresourcepackconfigurationtask)
## JoinWorldTask

*class* `net.minecraft.server.network.config.JoinWorldTask`

### Fields
- `public static final ConfigurationTask.Type TYPE`

### Methods
- `public void start(Consumer<Packet<?>> p_299501_)`
- `public ConfigurationTask.Type type()`

### Inherited methods
- from `net.minecraft.server.network.ConfigurationTask`: `start`

## ServerResourcePackConfigurationTask

*class* `net.minecraft.server.network.config.ServerResourcePackConfigurationTask`

### Fields
- `public static final ConfigurationTask.Type TYPE`
- `private final MinecraftServer.ServerResourcePackInfo info`

### Methods
- `public void start(Consumer<Packet<?>> p_298660_)`
- `public ConfigurationTask.Type type()`

### Inherited methods
- from `net.minecraft.server.network.ConfigurationTask`: `start`
