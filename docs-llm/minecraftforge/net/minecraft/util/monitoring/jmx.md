# net.minecraft.util.monitoring.jmx

- [MinecraftServerStatistics](#minecraftserverstatistics)
- [MinecraftServerStatistics.AttributeDescription](#minecraftserverstatistics.attributedescription)
## MinecraftServerStatistics

*class* `net.minecraft.util.monitoring.jmx.MinecraftServerStatistics`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final MinecraftServer server`
- `private final MBeanInfo mBeanInfo`
- `private final Map<String,MinecraftServerStatistics.AttributeDescription> attributeDescriptionByName`

### Methods
- `public static void registerJmxMonitoring(MinecraftServer p_18329_)`
- `private float getAverageTickTime()`
- `private long[] getTickTimes()`
- `@Nullable public Object getAttribute(String p_18334_)`
- `public void setAttribute(Attribute p_18343_)`
- `public AttributeList getAttributes(String[] p_18336_)`
- `public AttributeList setAttributes(AttributeList p_18345_)`
- `@Nullable public Object invoke(String p_18339_,  Object[] p_18340_,  String[] p_18341_)`
- `public MBeanInfo getMBeanInfo()`

## MinecraftServerStatistics.AttributeDescription

*class* `net.minecraft.util.monitoring.jmx.MinecraftServerStatistics.AttributeDescription`

Enclosing class: MinecraftServerStatistics

### Fields
- `final String name`
- `final Supplier<Object> getter`
- `private final String description`
- `private final Class<?> type`

### Methods
- `private MBeanAttributeInfo asMBeanAttributeInfo()`
