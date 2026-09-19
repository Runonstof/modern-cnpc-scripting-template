# net.minecraftforge.client.settings

- [IKeyConflictContext](#ikeyconflictcontext)
- [KeyBindingMap](#keybindingmap)
- [KeyConflictContext](#keyconflictcontext)
- [KeyModifier](#keymodifier)
## IKeyConflictContext

*interface* `net.minecraftforge.client.settings.IKeyConflictContext`

Defines the context that a KeyBinding is used.
 Key conflicts occur when a KeyBinding has the same IKeyConflictContext and has conflicting modifiers and keyCodes.

### Methods
- `boolean isActive()`
  - returns: true if conditions are met to activate KeyBindings with this context
- `boolean conflicts(IKeyConflictContext other)`
  - returns: true if the other context can have KeyBinding conflicts with this one.
 This will be called on both contexts to check for conflicts.

## KeyBindingMap

*class* `net.minecraftforge.client.settings.KeyBindingMap`

### Methods
- `public KeyBinding lookupActive(int keyCode)`
- `public java.util.List<KeyBinding> lookupAll(int keyCode)`
- `public void addKey(int keyCode,  KeyBinding keyBinding)`
- `public void removeKey(KeyBinding keyBinding)`
- `public void clearMap()`

## KeyConflictContext

*enum* `net.minecraftforge.client.settings.KeyConflictContext`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<KeyConflictContext>, IKeyConflictContext

### Fields
- `public static final KeyConflictContext UNIVERSAL`
  Universal key bindings are used in every context and will conflict with any other context.
   Key Bindings are universal by default.
- `public static final KeyConflictContext GUI`
  Gui key bindings are only used when a GuiScreen is open.
- `public static final KeyConflictContext IN_GAME`
  In-game key bindings are only used when a GuiScreen is not open.

### Methods
- `public static KeyConflictContext[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (KeyConflictContext c : KeyConflictContext.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static KeyConflictContext valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.client.settings.IKeyConflictContext`: `conflicts`, `isActive`

## KeyModifier

*enum* `net.minecraftforge.client.settings.KeyModifier`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<KeyModifier>

### Fields
- `public static final KeyModifier[] MODIFIER_VALUES`
- `public static final KeyModifier CONTROL`
- `public static final KeyModifier SHIFT`
- `public static final KeyModifier ALT`
- `public static final KeyModifier NONE`

### Methods
- `public static KeyModifier[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (KeyModifier c : KeyModifier.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static KeyModifier valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static KeyModifier getActiveModifier()`
- `public static boolean isKeyCodeModifier(int keyCode)`
- `public static KeyModifier valueFromString(java.lang.String stringValue)`
- `public abstract boolean matches(int keyCode)`
- `@Deprecated public abstract boolean isActive()` (deprecated)
  Deprecated. use isActive(IKeyConflictContext)
- `public abstract boolean isActive(IKeyConflictContext conflictContext)`
- `public abstract java.lang.String getLocalizedComboName(int keyCode)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
