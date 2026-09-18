# noppes.npcs.api.handler

- [ICloneHandler](#iclonehandler)
- [IDialogHandler](#idialoghandler)
- [IFactionHandler](#ifactionhandler)
- [IQuestHandler](#iquesthandler)
- [IRecipeHandler](#irecipehandler)
## ICloneHandler

*interface* `noppes.npcs.api.handler.ICloneHandler`

### Methods
- `IEntity spawn(double x,  double y,  double z,  int tab,  String name,  IWorld world)`
- `IEntity get(int tab,  String name,  IWorld world)`
- `void set(int tab,  String name,  IEntity entity)`
- `void remove(int tab,  String name)`

## IDialogHandler

*interface* `noppes.npcs.api.handler.IDialogHandler`

### Methods
- `List<IDialogCategory> categories()`
- `IDialog get(int id)`

## IFactionHandler

*interface* `noppes.npcs.api.handler.IFactionHandler`

### Methods
- `List<IFaction> list()`
- `IFaction delete(int id)`
- `IFaction create(String name,  int color)`
  Example: create("Bandits", 0xFF0000)
- `IFaction get(int id)`

## IQuestHandler

*interface* `noppes.npcs.api.handler.IQuestHandler`

### Methods
- `List<IQuestCategory> categories()`
- `IQuest get(int id)`

## IRecipeHandler

*interface* `noppes.npcs.api.handler.IRecipeHandler`

### Methods
- `List<IRecipe> getGlobalList()`
- `List<IRecipe> getCarpentryList()`
- `IRecipe addRecipe(String name,  boolean global,  net.minecraft.world.item.ItemStack result,  Object... objects)`
- `IRecipe addRecipe(String name,  boolean global,  net.minecraft.world.item.ItemStack result,  int width,  int height,  net.minecraft.world.item.ItemStack... recipe)`
- `IRecipe delete(int id)`
