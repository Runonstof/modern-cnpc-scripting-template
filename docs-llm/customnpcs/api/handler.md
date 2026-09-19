# noppes.npcs.api.handler

- [ICloneHandler](#iclonehandler)
- [IDialogHandler](#idialoghandler)
- [IFactionHandler](#ifactionhandler)
- [IQuestHandler](#iquesthandler)
- [IRecipeHandler](#irecipehandler)
## ICloneHandler

*interface* `noppes.npcs.api.handler.ICloneHandler`

### Methods
- `IEntity spawn​(double x, double y, double z, int tab, java.lang.String name, IWorld world)`
- `IEntity get​(int tab, java.lang.String name, IWorld world)`
- `void set​(int tab, java.lang.String name, IEntity entity)`
- `void remove​(int tab, java.lang.String name)`

## IDialogHandler

*interface* `noppes.npcs.api.handler.IDialogHandler`

### Methods
- `java.util.List<IDialogCategory> categories()`
- `IDialog get​(int id)`

## IFactionHandler

*interface* `noppes.npcs.api.handler.IFactionHandler`

### Methods
- `java.util.List<IFaction> list()`
- `IFaction delete​(int id)`
- `IFaction create​(java.lang.String name, int color)`
  Example: create("Bandits", 0xFF0000)
- `IFaction get​(int id)`

## IQuestHandler

*interface* `noppes.npcs.api.handler.IQuestHandler`

### Methods
- `java.util.List<IQuestCategory> categories()`
- `IQuest get​(int id)`

## IRecipeHandler

*interface* `noppes.npcs.api.handler.IRecipeHandler`

### Methods
- `java.util.List<IRecipe> getGlobalList()`
- `java.util.List<IRecipe> getCarpentryList()`
- `IRecipe addRecipe​(java.lang.String name, boolean global, net.minecraft.item.ItemStack result, java.lang.Object... objects)`
- `IRecipe addRecipe​(java.lang.String name, boolean global, net.minecraft.item.ItemStack result, int width, int height, net.minecraft.item.ItemStack... recipe)`
- `IRecipe delete​(int id)`
