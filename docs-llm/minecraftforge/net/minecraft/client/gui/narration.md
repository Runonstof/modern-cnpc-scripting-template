# net.minecraft.client.gui.narration

- [Class NarratableEntry.NarrationPriority](#class-narratableentry.narrationpriority)
- [Class NarratedElementType](#class-narratedelementtype)
- [NarratableEntry](#narratableentry)
- [NarrationElementOutput](#narrationelementoutput)
- [NarrationSupplier](#narrationsupplier)
- [NarrationThunk](#narrationthunk)
- [ScreenNarrationCollector](#screennarrationcollector)
- [ScreenNarrationCollector.EntryKey](#screennarrationcollector.entrykey)
- [ScreenNarrationCollector.NarrationEntry](#screennarrationcollector.narrationentry)
- [ScreenNarrationCollector.Output](#screennarrationcollector.output)
## Class NarratableEntry.NarrationPriority

*enum* `net.minecraft.client.gui.narration.Class NarratableEntry.NarrationPriority`

Enclosing interface: NarratableEntry

### Methods
- `public static NarratableEntry.NarrationPriority[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NarratableEntry.NarrationPriority valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isTerminal()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class NarratedElementType

*enum* `net.minecraft.client.gui.narration.Class NarratedElementType`

### Methods
- `public static NarratedElementType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NarratedElementType valueOf(String name)`
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

## NarratableEntry

*interface* `net.minecraft.client.gui.narration.NarratableEntry`

All Superinterfaces: NarrationSupplier, TabOrderedElement

### Methods
- `NarratableEntry.NarrationPriority narrationPriority()`
- `default boolean isActive()`

### Inherited methods
- from `net.minecraft.client.gui.narration.NarrationSupplier`: `updateNarration`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## NarrationElementOutput

*interface* `net.minecraft.client.gui.narration.NarrationElementOutput`

### Methods
- `default void add(NarratedElementType p_169147_,  Component p_169148_)`
- `default void add(NarratedElementType p_169144_,  String p_169145_)`
- `default void add(NarratedElementType p_169150_,  Component... p_169151_)`
- `void add(NarratedElementType p_169141_,  NarrationThunk<?> p_169142_)`
- `NarrationElementOutput nest()`

## NarrationSupplier

*interface* `net.minecraft.client.gui.narration.NarrationSupplier`

### Methods
- `void updateNarration(NarrationElementOutput p_169152_)`

## NarrationThunk

*class* `net.minecraft.client.gui.narration.NarrationThunk`

### Fields
- `private final T contents`
- `private final BiConsumer<Consumer<String>,T> converter`
- `public static final NarrationThunk<?> EMPTY`

### Methods
- `public static NarrationThunk<?> from(String p_169161_)`
- `public static NarrationThunk<?> from(Component p_169177_)`
- `public static NarrationThunk<?> from(List<Component> p_169163_)`
- `public void getText(Consumer<String> p_169169_)`
- `public boolean equals(Object p_169179_)`
- `public int hashCode()`

## ScreenNarrationCollector

*class* `net.minecraft.client.gui.narration.ScreenNarrationCollector`

### Fields
- `int generation`
- `final Map<ScreenNarrationCollector.EntryKey,ScreenNarrationCollector.NarrationEntry> entries`

### Methods
- `public void update(Consumer<NarrationElementOutput> p_169187_)`
- `public String collectNarrationText(boolean p_169189_)`

## ScreenNarrationCollector.EntryKey

*class* `net.minecraft.client.gui.narration.ScreenNarrationCollector.EntryKey`

Enclosing class: ScreenNarrationCollector

### Fields
- `final NarratedElementType type`
- `final int depth`

## ScreenNarrationCollector.NarrationEntry

*class* `net.minecraft.client.gui.narration.ScreenNarrationCollector.NarrationEntry`

Enclosing class: ScreenNarrationCollector

### Fields
- `NarrationThunk<?> contents`
- `int generation`
- `boolean alreadyNarrated`

### Methods
- `public ScreenNarrationCollector.NarrationEntry update(int p_169217_,  NarrationThunk<?> p_169218_)`

## ScreenNarrationCollector.Output

*class* `net.minecraft.client.gui.narration.ScreenNarrationCollector.Output`

Enclosing class: ScreenNarrationCollector

### Fields
- `private final int depth`

### Methods
- `public void add(NarratedElementType p_169226_,  NarrationThunk<?> p_169227_)`
- `public NarrationElementOutput nest()`

### Inherited methods
- from `net.minecraft.client.gui.narration.NarrationElementOutput`: `add`, `add`, `add`
