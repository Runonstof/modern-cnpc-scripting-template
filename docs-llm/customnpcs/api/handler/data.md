# noppes.npcs.api.handler.data

- [IAvailability](#iavailability)
- [IDialog](#idialog)
- [IDialogCategory](#idialogcategory)
- [IDialogOption](#idialogoption)
- [IFaction](#ifaction)
- [IQuest](#iquest)
- [IQuestCategory](#iquestcategory)
- [IQuestObjective](#iquestobjective)
- [IRecipe](#irecipe)
## IAvailability

*interface* `noppes.npcs.api.handler.data.IAvailability`

### Methods
- `boolean isAvailable​(IPlayer player)`
- `int getDaytime()`
  - returns: 0:Always, 1:Night, 2:Day
- `void setDaytime​(int type)`
  - param: type - 0:Always, 1:Night, 2:Day
- `int getMinPlayerLevel()`
- `void setMinPlayerLevel​(int level)`
- `int getDialog​(int i)`
  - param: i - (0-3)
  - returns: Returns dialog id, -1 if no dialog was set
- `void setDialog​(int i, int id, int type)`
  - param: i - (0-3)
  - param: id - Dialog id
  - param: type - 0:Always, 1:After, 2:Before
- `void removeDialog​(int i)`
  - param: i - (0-3)
- `int getQuest​(int i)`
  - param: i - (0-3)
  - returns: Returns quest id, -1 if no quest was set
- `void setQuest​(int i, int id, int type)`
  - param: i - (0-3)
  - param: id - Quest id
  - param: type - 0:Always, 1:After, 2:Before, 3:Active, 4:NotActive, 5:Completed
- `void removeQuest​(int i)`
  - param: i - (0-1)
- `void setFaction​(int i, int id, int type, int stance)`
  - param: i - (0-1)
  - param: id - Faction id
  - param: type - 0:Always, 1:Is, 2:IsNot
  - param: stance - 0:Friendly, 1:Neutral, 2:Hostile
- `void removeFaction​(int i)`
  - param: i - (0-1)
- `void setScoreboard​(int i, java.lang.String objective, int type, int value)`
  - param: i - (0-1)
  - param: objective - Scoreboard Objective
  - param: type - 0:Smalle, 1:Equals, 2:Bigger
  - param: value - Scoreboard score value

## IDialog

*interface* `noppes.npcs.api.handler.data.IDialog`

### Methods
- `int getId()`
- `java.lang.String getName()`
- `void setName​(java.lang.String name)`
- `java.lang.String getText()`
- `void setText​(java.lang.String text)`
- `IQuest getQuest()`
- `void setQuest​(IQuest quest)`
- `java.lang.String getCommand()`
- `void setCommand​(java.lang.String command)`
- `java.util.List<IDialogOption> getOptions()`
- `IDialogOption getOption​(int slot)`
  - param: slot - (0-5)
- `IAvailability getAvailability()`
- `IDialogCategory getCategory()`
- `void save()`

## IDialogCategory

*interface* `noppes.npcs.api.handler.data.IDialogCategory`

### Methods
- `java.util.List<IDialog> dialogs()`
- `java.lang.String getName()`
- `IDialog create()`

## IDialogOption

*interface* `noppes.npcs.api.handler.data.IDialogOption`

### Methods
- `int getSlot()`
- `java.lang.String getName()`
- `int getType()`

## IFaction

*interface* `noppes.npcs.api.handler.data.IFaction`

### Methods
- `int getId()`
- `java.lang.String getName()`
- `int getDefaultPoints()`
- `void setDefaultPoints​(int points)`
- `int getColor()`
- `int playerStatus​(IPlayer player)`
  - returns: Returns -1:Unfriendly, 0:Neutral, 1:Friendly
- `boolean hostileToNpc​(ICustomNpc npc)`
- `boolean hostileToFaction​(int factionId)`
- `int[] getHostileList()`
- `void addHostile​(int id)`
- `void removeHostile​(int id)`
- `boolean hasHostile​(int id)`
- `boolean getIsHidden()`
- `void setIsHidden​(boolean bo)`
- `boolean getAttackedByMobs()`
- `void setAttackedByMobs​(boolean bo)`
- `void save()`

## IQuest

*interface* `noppes.npcs.api.handler.data.IQuest`

### Methods
- `int getId()`
- `java.lang.String getName()`
- `void setName​(java.lang.String name)`
- `int getType()`
- `void setType​(int type)`
- `java.lang.String getLogText()`
- `void setLogText​(java.lang.String text)`
- `java.lang.String getCompleteText()`
- `void setCompleteText​(java.lang.String text)`
- `IQuest getNextQuest()`
- `void setNextQuest​(IQuest quest)`
- `IQuestObjective[] getObjectives​(IPlayer player)`
- `IQuestCategory getCategory()`
- `IContainer getRewards()`
- `java.lang.String getNpcName()`
  - returns: The npcs name where this quest can be completed
- `void setNpcName​(java.lang.String name)`
  - param: name - The npcs name where this quest can be completed
- `void save()`
- `boolean getIsRepeatable()`

## IQuestCategory

*interface* `noppes.npcs.api.handler.data.IQuestCategory`

### Methods
- `java.util.List<IQuest> quests()`
- `java.lang.String getName()`
- `IQuest create()`

## IQuestObjective

*interface* `noppes.npcs.api.handler.data.IQuestObjective`

### Methods
- `int getProgress()`
- `void setProgress​(int progress)`
  Does not work for Item or Dialog quests
  - param: progress - Progress of the objective
- `int getMaxProgress()`
- `boolean isCompleted()`
- `java.lang.String getText()`

## IRecipe

*interface* `noppes.npcs.api.handler.data.IRecipe`

### Methods
- `java.lang.String getName()`
- `boolean isGlobal()`
- `void setIsGlobal​(boolean bo)`
- `boolean getIgnoreNBT()`
- `void setIgnoreNBT​(boolean bo)`
- `boolean getIgnoreDamage()`
- `void setIgnoreDamage​(boolean bo)`
- `int getWidth()`
- `int getHeight()`
- `net.minecraft.item.ItemStack getResult()`
- `net.minecraft.item.ItemStack[] getRecipe()`
- `void saves​(boolean bo)`
  - param: bo - Whether or not the recipe saves with customnpcs recipes
- `boolean saves()`
- `void save()`
- `void delete()`
- `int getId()`
