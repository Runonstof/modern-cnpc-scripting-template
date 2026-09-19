# net.minecraft.commands.arguments.selector.options

- [EntitySelectorOptions](#entityselectoroptions)
- [EntitySelectorOptions.Modifier](#entityselectoroptions.modifier)
- [EntitySelectorOptions.Option](#entityselectoroptions.option)
## EntitySelectorOptions

*class* `net.minecraft.commands.arguments.selector.options.EntitySelectorOptions`

### Fields
- `private static final Map<String,EntitySelectorOptions.Option> OPTIONS`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_UNKNOWN_OPTION`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_INAPPLICABLE_OPTION`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_RANGE_NEGATIVE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_LEVEL_NEGATIVE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_LIMIT_TOO_SMALL`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_SORT_UNKNOWN`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_GAME_MODE_INVALID`
- `public static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_ENTITY_TYPE_INVALID`

### Methods
- `public static void register(String p_121454_,  EntitySelectorOptions.Modifier p_121455_,  Predicate<EntitySelectorParser> p_121456_,  Component p_121457_)`
- `public static void bootStrap()`
- `public static EntitySelectorOptions.Modifier get(EntitySelectorParser p_121448_,  String p_121449_,  int p_121450_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static void suggestNames(EntitySelectorParser p_121441_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_121442_)`

## EntitySelectorOptions.Modifier

*interface* `net.minecraft.commands.arguments.selector.options.EntitySelectorOptions.Modifier`

Enclosing class: EntitySelectorOptions

### Methods
- `void handle(EntitySelectorParser p_121564_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EntitySelectorOptions.Option

*record* `net.minecraft.commands.arguments.selector.options.EntitySelectorOptions.Option`

Enclosing class: EntitySelectorOptions

### Fields
- `private final EntitySelectorOptions.Modifier modifier`
  The field for the modifier record component.
- `private final Predicate<EntitySelectorParser> canUse`
  The field for the canUse record component.
- `private final Component description`
  The field for the description record component.

### Methods
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
- `public EntitySelectorOptions.Modifier modifier()`
  Returns the value of the modifier record component.
  - returns: the value of the modifier record component
- `public Predicate<EntitySelectorParser> canUse()`
  Returns the value of the canUse record component.
  - returns: the value of the canUse record component
- `public Component description()`
  Returns the value of the description record component.
  - returns: the value of the description record component
