# net.minecraftforge.common.command

- [SelectorHandler](#selectorhandler)
- [SelectorHandlerManager](#selectorhandlermanager)
## SelectorHandler

*interface* `net.minecraftforge.common.command.SelectorHandler`

Handler for custom types of selectors registered with SelectorHandlerManager

### Methods
- `<T extends Entity> java.util.List<T> matchEntities(ICommandSender sender,  java.lang.String token,  java.lang.Class<? extends T> targetClass)  throws CommandException`
  Returns a List of Entities of class targetClass (T) represented by token
  
   Note: If token does not match the overall syntax defined by isSelector(java.lang.String), this method should return an empty list.
   For any other error, an exception should be thrown
  - param: sender - The ICommandSender that initiated the query
  - throws: CommandException
- `boolean matchesMultiplePlayers(java.lang.String selectorStr)  throws CommandException`
  Returns whether the selector string potentially matches multiple entities
  - throws: CommandException
- `boolean isSelector(java.lang.String selectorStr)`
  Returns whether the string matches the overall syntax of the selector
  
   Note: If this returns false, matchEntities(net.minecraft.command.ICommandSender, java.lang.String, java.lang.Class<? extends T>) should return an empty list

## SelectorHandlerManager

*class* `net.minecraftforge.common.command.SelectorHandlerManager`

Allows registration of custom selector types by assigning a SelectorHandler to a prefix
 This class handles calls to the EntitySelector methods matchEntities,
 matchesMultiplePlayers and isSelector.

 The calls are delegated to the handler with the longest matching prefix.

 Note: If you register a SelectorHandler to a broader domain (not just a single selector), you should take care of possible shadowing conflicts yourself.
 For this you can use the information provided by selectorHandlers and registeringMods.

### Fields
- `public static final java.util.NavigableMap<java.lang.String,SelectorHandler> selectorHandlers`
- `public static final java.util.NavigableMap<java.lang.String,java.lang.String> registeringMods`

### Methods
- `public static void register(java.lang.String prefix,  SelectorHandler handler)`
  Registers a new SelectorHandler for prefix.
  - param: prefix - The domain the specified handler is registered for.
 If you want to register just a single selector, prefix has the form '@{selectorName}'
- `public static SelectorHandler getHandler(java.lang.String selectorStr)`
  Returns the best matching handler for the given string. Defaults to the vanilla handler if no prefix applies
- `public static <T extends Entity> java.util.List<T> matchEntities(ICommandSender sender,  java.lang.String token,  java.lang.Class<? extends T> targetClass)  throws CommandException`
  - throws: CommandException
- `public static boolean matchesMultiplePlayers(java.lang.String selectorStr)  throws CommandException`
  - throws: CommandException
- `public static boolean isSelector(java.lang.String selectorStr)`
