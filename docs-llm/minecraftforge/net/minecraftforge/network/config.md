# net.minecraftforge.network.config

- [ConfigurationTaskContext](#configurationtaskcontext)
- [SimpleConfigurationTask](#simpleconfigurationtask)
## ConfigurationTaskContext

*class* `net.minecraftforge.network.config.ConfigurationTaskContext`

### Fields
- `private final Connection connection`
- `private final Consumer<Packet<?>> send`
- `private final Consumer<ConfigurationTask.Type> finish`

### Methods
- `public Connection getConnection()`
- `public void send(Packet<?> packet)`
- `public void finish(ConfigurationTask.Type task)`

## SimpleConfigurationTask

*class* `net.minecraftforge.network.config.SimpleConfigurationTask`

A simple ConfigurationTask that will run a block of code and then mark itself as finished.

### Fields
- `private final ConfigurationTask.Type type`
- `private final Consumer<ConfigurationTaskContext> task`

### Methods
- `public void start(ConfigurationTaskContext ctx)`
- `public void start(Consumer<Packet<?>> send)`
- `public ConfigurationTask.Type type()`
