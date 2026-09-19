# net.minecraftforge.common.command

- [EntitySelectorManager](#entityselectormanager)
- [IEntitySelectorType](#ientityselectortype)
## EntitySelectorManager

*class* `net.minecraftforge.common.command.EntitySelectorManager`

Allows modders to register custom entity selectors by assigning an IEntitySelectorType to a String token.

 The token "test", for example, corresponds to @test[...] in a command.

### Fields
- `private static final HashMap<String,IEntitySelectorType> REGISTRY`

### Methods
- `public static void register(String token,  IEntitySelectorType type)`
  Registers a new IEntitySelectorType for the given token.
  - param: token - Defines the name of the selector
- `public static EntitySelector parseSelector(EntitySelectorParser parser)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  This method is called in EntitySelectorParser.parse()
  
   If the REGISTRY does not contain a custom selector for the command being parsed,
   this method returns null and the vanilla logic in EntitySelectorParser#parseSelector() is used.
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static void fillSelectorSuggestions(com.mojang.brigadier.suggestion.SuggestionsBuilder suggestionBuilder)`
  This method is called in EntitySelectorParser#fillSelectorSuggestions(SuggestionsBuilder)

## IEntitySelectorType

*interface* `net.minecraftforge.common.command.IEntitySelectorType`

Implementations of this interface can be registered using EntitySelectorManager.register(java.lang.String, net.minecraftforge.common.command.IEntitySelectorType)

### Methods
- `EntitySelector build(EntitySelectorParser parser)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  Returns an EntitySelector based on the given EntitySelectorParser.
  
   Use EntitySelectorParser.getReader() to read extra arguments and EntitySelectorParser.addPredicate(Predicate) to add the corresponding filters.
  
   If the token being parsed does not match the syntax of this selector, this method should throw an appropriate CommandSyntaxException.
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `Component getSuggestionTooltip()`
  Returns an Component containing a short description for this selector type.
