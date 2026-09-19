# net.minecraft.world.scores.criteria

- [Class ObjectiveCriteria.RenderType](#class-objectivecriteria.rendertype)
- [ObjectiveCriteria](#objectivecriteria)
## Class ObjectiveCriteria.RenderType

*enum* `net.minecraft.world.scores.criteria.Class ObjectiveCriteria.RenderType`

Enclosing class: ObjectiveCriteria

### Fields
- `private final String id`
- `public static final StringRepresentable.EnumCodec<ObjectiveCriteria.RenderType> CODEC`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static ObjectiveCriteria.RenderType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ObjectiveCriteria.RenderType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getId()`
- `public String getSerializedName()`
- `public static ObjectiveCriteria.RenderType byId(String p_83635_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ObjectiveCriteria

*class* `net.minecraft.world.scores.criteria.ObjectiveCriteria`

### Fields
- `private static final Map<String,ObjectiveCriteria> CUSTOM_CRITERIA`
- `private static final Map<String,ObjectiveCriteria> CRITERIA_CACHE`
- `public static final ObjectiveCriteria DUMMY`
- `public static final ObjectiveCriteria TRIGGER`
- `public static final ObjectiveCriteria DEATH_COUNT`
- `public static final ObjectiveCriteria KILL_COUNT_PLAYERS`
- `public static final ObjectiveCriteria KILL_COUNT_ALL`
- `public static final ObjectiveCriteria HEALTH`
- `public static final ObjectiveCriteria FOOD`
- `public static final ObjectiveCriteria AIR`
- `public static final ObjectiveCriteria ARMOR`
- `public static final ObjectiveCriteria EXPERIENCE`
- `public static final ObjectiveCriteria LEVEL`
- `public static final ObjectiveCriteria[] TEAM_KILL`
- `public static final ObjectiveCriteria[] KILLED_BY_TEAM`
- `private final String name`
- `private final boolean readOnly`
- `private final ObjectiveCriteria.RenderType renderType`

### Methods
- `private static ObjectiveCriteria registerCustom(String p_166110_,  boolean p_166111_,  ObjectiveCriteria.RenderType p_166112_)`
- `private static ObjectiveCriteria registerCustom(String p_166114_)`
- `public static Set<String> getCustomCriteriaNames()`
- `public static Optional<ObjectiveCriteria> byName(String p_83615_)`
- `private static <T> Optional<ObjectiveCriteria> getStat(StatType<T> p_83612_,  ResourceLocation p_83613_)`
- `public String getName()`
- `public boolean isReadOnly()`
- `public ObjectiveCriteria.RenderType getDefaultRenderType()`
