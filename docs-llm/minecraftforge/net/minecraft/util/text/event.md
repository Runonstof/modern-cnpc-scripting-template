# net.minecraft.util.text.event

- [ClickEvent](#clickevent)
- [ClickEvent.Action](#clickevent.action)
- [HoverEvent](#hoverevent)
- [HoverEvent.Action](#hoverevent.action)
## ClickEvent

*class* `net.minecraft.util.text.event.ClickEvent`

### Methods
- `public ClickEvent.Action getAction()`
- `public java.lang.String getValue()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`
- `public int hashCode()`

## ClickEvent.Action

*enum* `net.minecraft.util.text.event.ClickEvent.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<ClickEvent.Action>

Enclosing class: ClickEvent

### Fields
- `public static final ClickEvent.Action OPEN_URL`
- `public static final ClickEvent.Action OPEN_FILE`
- `public static final ClickEvent.Action RUN_COMMAND`
- `public static final ClickEvent.Action SUGGEST_COMMAND`
- `public static final ClickEvent.Action CHANGE_PAGE`

### Methods
- `public static ClickEvent.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (ClickEvent.Action c : ClickEvent.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static ClickEvent.Action valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean shouldAllowInChat()`
- `public java.lang.String getCanonicalName()`
- `public static ClickEvent.Action getValueByCanonicalName(java.lang.String canonicalNameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## HoverEvent

*class* `net.minecraft.util.text.event.HoverEvent`

### Methods
- `public HoverEvent.Action getAction()`
- `public ITextComponent getValue()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`
- `public int hashCode()`

## HoverEvent.Action

*enum* `net.minecraft.util.text.event.HoverEvent.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<HoverEvent.Action>

Enclosing class: HoverEvent

### Fields
- `public static final HoverEvent.Action SHOW_TEXT`
- `public static final HoverEvent.Action SHOW_ITEM`
- `public static final HoverEvent.Action SHOW_ENTITY`

### Methods
- `public static HoverEvent.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (HoverEvent.Action c : HoverEvent.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static HoverEvent.Action valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public boolean shouldAllowInChat()`
- `public java.lang.String getCanonicalName()`
- `public static HoverEvent.Action getValueByCanonicalName(java.lang.String canonicalNameIn)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
