# net.minecraft.client.gui.spectator.categories

- [SpectatorDetails](#spectatordetails)
- [TeleportToPlayer](#teleporttoplayer)
- [TeleportToTeam](#teleporttoteam)
## SpectatorDetails

*class* `net.minecraft.client.gui.spectator.categories.SpectatorDetails`

### Methods
- `public ISpectatorMenuObject getObject(int index)`
- `public int getSelectedSlot()`

## TeleportToPlayer

*class* `net.minecraft.client.gui.spectator.categories.TeleportToPlayer`

All Implemented Interfaces: ISpectatorMenuObject, ISpectatorMenuView

### Methods
- `public java.util.List<ISpectatorMenuObject> getItems()`
- `public ITextComponent getPrompt()`
- `public void selectItem(SpectatorMenu menu)`
- `public ITextComponent getSpectatorName()`
- `public void renderIcon(float brightness,  int alpha)`
- `public boolean isEnabled()`

## TeleportToTeam

*class* `net.minecraft.client.gui.spectator.categories.TeleportToTeam`

All Implemented Interfaces: ISpectatorMenuObject, ISpectatorMenuView

### Methods
- `public java.util.List<ISpectatorMenuObject> getItems()`
- `public ITextComponent getPrompt()`
- `public void selectItem(SpectatorMenu menu)`
- `public ITextComponent getSpectatorName()`
- `public void renderIcon(float brightness,  int alpha)`
- `public boolean isEnabled()`
