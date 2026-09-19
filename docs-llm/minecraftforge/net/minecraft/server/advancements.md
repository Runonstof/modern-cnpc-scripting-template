# net.minecraft.server.advancements

- [AdvancementVisibilityEvaluator](#advancementvisibilityevaluator)
- [AdvancementVisibilityEvaluator.Output](#advancementvisibilityevaluator.output)
- [Class AdvancementVisibilityEvaluator.VisibilityRule](#class-advancementvisibilityevaluator.visibilityrule)
## AdvancementVisibilityEvaluator

*class* `net.minecraft.server.advancements.AdvancementVisibilityEvaluator`

### Fields
- `private static final int VISIBILITY_DEPTH` (= 2)

### Methods
- `private static AdvancementVisibilityEvaluator.VisibilityRule evaluateVisibilityRule(Advancement p_265736_,  boolean p_265426_)`
- `private static boolean evaluateVisiblityForUnfinishedNode(it.unimi.dsi.fastutil.Stack<AdvancementVisibilityEvaluator.VisibilityRule> p_265343_)`
- `private static boolean evaluateVisibility(AdvancementNode p_299221_,  it.unimi.dsi.fastutil.Stack<AdvancementVisibilityEvaluator.VisibilityRule> p_298849_,  Predicate<AdvancementNode> p_265359_,  AdvancementVisibilityEvaluator.Output p_265303_)`
- `public static void evaluateVisibility(AdvancementNode p_297454_,  Predicate<AdvancementNode> p_265561_,  AdvancementVisibilityEvaluator.Output p_265381_)`
- `public static boolean isVisible(AdvancementNode advancement,  Predicate<AdvancementNode> test)`

## AdvancementVisibilityEvaluator.Output

*interface* `net.minecraft.server.advancements.AdvancementVisibilityEvaluator.Output`

Enclosing class: AdvancementVisibilityEvaluator

### Methods
- `void accept(AdvancementNode p_298555_,  boolean p_265580_)`

## Class AdvancementVisibilityEvaluator.VisibilityRule

*enum* `net.minecraft.server.advancements.Class AdvancementVisibilityEvaluator.VisibilityRule`

Enclosing class: AdvancementVisibilityEvaluator

### Methods
- `public static AdvancementVisibilityEvaluator.VisibilityRule[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AdvancementVisibilityEvaluator.VisibilityRule valueOf(String name)`
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
