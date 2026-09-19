# net.minecraftforge.client.settings

- [Class KeyConflictContext](#class-keyconflictcontext)
- [Class KeyModifier](#class-keymodifier)
- [IKeyConflictContext](#ikeyconflictcontext)
- [KeyMappingLookup](#keymappinglookup)
## Class KeyConflictContext

*enum* `net.minecraftforge.client.settings.Class KeyConflictContext`

### Methods
- `public static KeyConflictContext[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static KeyConflictContext valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.settings.IKeyConflictContext`: `conflicts`, `isActive`

## Class KeyModifier

*enum* `net.minecraftforge.client.settings.Class KeyModifier`

### Fields
- `@Deprecated(forRemoval=true,  since="1.20.2") public static final KeyModifier[] MODIFIER_VALUES` (deprecated)
- `private static final KeyModifier[] VALUES`
- `private static final List<KeyModifier> VALUES_LIST`
- `private static final List<KeyModifier> ALL`

### Methods
- `public static KeyModifier[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static KeyModifier valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Deprecated(forRemoval=true,  since="1.20.2") public static KeyModifier getActiveModifier()` (deprecated)
- `public static final List<KeyModifier> getValues(boolean includeNone)`
- `@Nullable public static @Nullable KeyModifier getModifier(InputConstants.Key key)`
- `public static boolean isKeyCodeModifier(InputConstants.Key key)`
- `public static KeyModifier valueFromString(String stringValue)`
- `public abstract boolean matches(InputConstants.Key key)`
- `public abstract boolean isActive(@Nullable  @Nullable IKeyConflictContext conflictContext)`
- `public abstract Component getCombinedName(InputConstants.Key key,  Supplier<Component> defaultLogic)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## IKeyConflictContext

*interface* `net.minecraftforge.client.settings.IKeyConflictContext`

Defines the context that a KeyMapping is used.
 Key conflicts occur when a KeyMapping has the same IKeyConflictContext and has conflicting modifiers and keyCodes.

### Methods
- `boolean isActive()`
  - returns: true if conditions are met to activate KeyMappings with this context
- `boolean conflicts(IKeyConflictContext other)`
  - returns: true if the other context can have KeyMapping conflicts with this one.
 This will be called on both contexts to check for conflicts.

## KeyMappingLookup

*class* `net.minecraftforge.client.settings.KeyMappingLookup`

### Fields
- `private static final EnumMap<KeyModifier,Map<InputConstants.Key,List<KeyMapping>>> map`

### Methods
- `@Deprecated(forRemoval=true,  since="1.20.1") @Nullable public @Nullable KeyMapping get(InputConstants.Key keyCode)` (deprecated)
  Replaced by getAll
- `@Nullable @Deprecated(forRemoval=true,  since="1.20.1") private @Nullable KeyMapping get(InputConstants.Key keyCode,  KeyModifier keyModifier)` (deprecated)
- `public List<KeyMapping> getAll(InputConstants.Key keyCode)`
  Returns all active keys associated with the given key code and the active
   modifiers and conflict context.
  - param: keyCode - the key being pressed
  - returns: the list of key mappings
- `private List<KeyMapping> get(KeyModifier modifier,  InputConstants.Key keyCode)`
- `public void put(InputConstants.Key keyCode,  KeyMapping keyBinding)`
- `public void remove(KeyMapping keyBinding)`
- `public void clear()`
