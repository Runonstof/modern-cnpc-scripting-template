# net.minecraft.client.gui.spectator

- [BaseSpectatorGroup](#basespectatorgroup)
- [ISpectatorMenuObject](#ispectatormenuobject)
- [ISpectatorMenuRecipient](#ispectatormenurecipient)
- [ISpectatorMenuView](#ispectatormenuview)
- [PlayerMenuObject](#playermenuobject)
- [SpectatorMenu](#spectatormenu)
## BaseSpectatorGroup

*class* `net.minecraft.client.gui.spectator.BaseSpectatorGroup`

All Implemented Interfaces: ISpectatorMenuView

### Methods
- `public java.util.List<ISpectatorMenuObject> getItems()`
- `public ITextComponent getPrompt()`

## ISpectatorMenuObject

*interface* `net.minecraft.client.gui.spectator.ISpectatorMenuObject`

### Methods
- `void selectItem(SpectatorMenu menu)`
- `ITextComponent getSpectatorName()`
- `void renderIcon(float brightness,  int alpha)`
- `boolean isEnabled()`

## ISpectatorMenuRecipient

*interface* `net.minecraft.client.gui.spectator.ISpectatorMenuRecipient`

### Methods
- `void onSpectatorMenuClosed(SpectatorMenu menu)`

## ISpectatorMenuView

*interface* `net.minecraft.client.gui.spectator.ISpectatorMenuView`

### Methods
- `java.util.List<ISpectatorMenuObject> getItems()`
- `ITextComponent getPrompt()`

## PlayerMenuObject

*class* `net.minecraft.client.gui.spectator.PlayerMenuObject`

All Implemented Interfaces: ISpectatorMenuObject

### Methods
- `public void selectItem(SpectatorMenu menu)`
- `public ITextComponent getSpectatorName()`
- `public void renderIcon(float brightness,  int alpha)`
- `public boolean isEnabled()`

## SpectatorMenu

*class* `net.minecraft.client.gui.spectator.SpectatorMenu`

### Fields
- `public static final ISpectatorMenuObject EMPTY_SLOT`

### Methods
- `public ISpectatorMenuObject getItem(int index)`
- `public java.util.List<ISpectatorMenuObject> getItems()`
- `public ISpectatorMenuObject getSelectedItem()`
- `public ISpectatorMenuView getSelectedCategory()`
- `public void selectSlot(int slotIn)`
- `public void exit()`
- `public int getSelectedSlot()`
- `public void selectCategory(ISpectatorMenuView menuView)`
- `public SpectatorDetails getCurrentPage()`
