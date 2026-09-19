# net.minecraft.client.gui.navigation

- [Class ScreenAxis](#class-screenaxis)
- [Class ScreenDirection](#class-screendirection)
- [CommonInputs](#commoninputs)
- [FocusNavigationEvent](#focusnavigationevent)
- [FocusNavigationEvent.ArrowNavigation](#focusnavigationevent.arrownavigation)
- [FocusNavigationEvent.InitialFocus](#focusnavigationevent.initialfocus)
- [FocusNavigationEvent.TabNavigation](#focusnavigationevent.tabnavigation)
- [ScreenPosition](#screenposition)
- [ScreenRectangle](#screenrectangle)
## Class ScreenAxis

*enum* `net.minecraft.client.gui.navigation.Class ScreenAxis`

### Methods
- `public static ScreenAxis[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ScreenAxis valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ScreenAxis orthogonal()`
- `public ScreenDirection getPositive()`
- `public ScreenDirection getNegative()`
- `public ScreenDirection getDirection(boolean p_265698_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ScreenDirection

*enum* `net.minecraft.client.gui.navigation.Class ScreenDirection`

### Fields
- `private final it.unimi.dsi.fastutil.ints.IntComparator coordinateValueComparator`

### Methods
- `public static ScreenDirection[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ScreenDirection valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ScreenAxis getAxis()`
- `public ScreenDirection getOpposite()`
- `public boolean isPositive()`
- `public boolean isAfter(int p_265461_,  int p_265553_)`
- `public boolean isBefore(int p_265215_,  int p_265040_)`
- `public it.unimi.dsi.fastutil.ints.IntComparator coordinateValueComparator()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CommonInputs

*class* `net.minecraft.client.gui.navigation.CommonInputs`

### Methods
- `public static boolean selected(int p_279282_)`

## FocusNavigationEvent

*interface* `net.minecraft.client.gui.navigation.FocusNavigationEvent`

### Methods
- `ScreenDirection getVerticalDirectionForInitialFocus()`

## FocusNavigationEvent.ArrowNavigation

*record* `net.minecraft.client.gui.navigation.FocusNavigationEvent.ArrowNavigation`

Enclosing interface: FocusNavigationEvent

### Fields
- `private final ScreenDirection direction`
  The field for the direction record component.

### Methods
- `public ScreenDirection getVerticalDirectionForInitialFocus()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ScreenDirection direction()`
  Returns the value of the direction record component.
  - returns: the value of the direction record component

## FocusNavigationEvent.InitialFocus

*class* `net.minecraft.client.gui.navigation.FocusNavigationEvent.InitialFocus`

Enclosing interface: FocusNavigationEvent

### Methods
- `public ScreenDirection getVerticalDirectionForInitialFocus()`

## FocusNavigationEvent.TabNavigation

*record* `net.minecraft.client.gui.navigation.FocusNavigationEvent.TabNavigation`

Enclosing interface: FocusNavigationEvent

### Fields
- `private final boolean forward`
  The field for the forward record component.

### Methods
- `public ScreenDirection getVerticalDirectionForInitialFocus()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public boolean forward()`
  Returns the value of the forward record component.
  - returns: the value of the forward record component

## ScreenPosition

*record* `net.minecraft.client.gui.navigation.ScreenPosition`

### Fields
- `private final int x`
  The field for the x record component.
- `private final int y`
  The field for the y record component.

### Methods
- `public static ScreenPosition of(ScreenAxis p_265175_,  int p_265751_,  int p_265120_)`
- `public ScreenPosition step(ScreenDirection p_265084_)`
- `public int getCoordinate(ScreenAxis p_265656_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int x()`
  Returns the value of the x record component.
  - returns: the value of the x record component
- `public int y()`
  Returns the value of the y record component.
  - returns: the value of the y record component

## ScreenRectangle

*record* `net.minecraft.client.gui.navigation.ScreenRectangle`

### Fields
- `private final ScreenPosition position`
  The field for the position record component.
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `private static final ScreenRectangle EMPTY`

### Methods
- `public static ScreenRectangle empty()`
- `public static ScreenRectangle of(ScreenAxis p_265648_,  int p_265317_,  int p_265685_,  int p_265218_,  int p_265226_)`
- `public ScreenRectangle step(ScreenDirection p_265714_)`
- `public int getLength(ScreenAxis p_265463_)`
- `public int getBoundInDirection(ScreenDirection p_265778_)`
- `public ScreenRectangle getBorder(ScreenDirection p_265704_)`
- `public boolean overlaps(ScreenRectangle p_265652_)`
- `public boolean overlapsInAxis(ScreenRectangle p_265306_,  ScreenAxis p_265340_)`
- `public int getCenterInAxis(ScreenAxis p_265694_)`
- `@Nullable public ScreenRectangle intersection(ScreenRectangle p_276058_)`
- `public int top()`
- `public int bottom()`
- `public int left()`
- `public int right()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ScreenPosition position()`
  Returns the value of the position record component.
  - returns: the value of the position record component
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component
