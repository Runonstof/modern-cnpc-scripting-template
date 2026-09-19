# net.minecraft.client.gui.spectator.categories

- [SpectatorPage](#spectatorpage)
- [TeleportToPlayerMenuCategory](#teleporttoplayermenucategory)
- [TeleportToTeamMenuCategory](#teleporttoteammenucategory)
- [TeleportToTeamMenuCategory.TeamSelectionItem](#teleporttoteammenucategory.teamselectionitem)
## SpectatorPage

*class* `net.minecraft.client.gui.spectator.categories.SpectatorPage`

### Fields
- `public static final int NO_SELECTION` (= -1)
- `private final List<SpectatorMenuItem> items`
- `private final int selection`

### Methods
- `public SpectatorMenuItem getItem(int p_101852_)`
- `public int getSelectedSlot()`

## TeleportToPlayerMenuCategory

*class* `net.minecraft.client.gui.spectator.categories.TeleportToPlayerMenuCategory`

### Fields
- `private static final ResourceLocation TELEPORT_TO_PLAYER_SPRITE`
- `private static final Comparator<PlayerInfo> PROFILE_ORDER`
- `private static final Component TELEPORT_TEXT`
- `private static final Component TELEPORT_PROMPT`
- `private final List<SpectatorMenuItem> items`

### Methods
- `public List<SpectatorMenuItem> getItems()`
- `public Component getPrompt()`
- `public void selectItem(SpectatorMenu p_101868_)`
- `public Component getName()`
- `public void renderIcon(GuiGraphics p_281992_,  float p_281684_,  int p_281889_)`
- `public boolean isEnabled()`

## TeleportToTeamMenuCategory

*class* `net.minecraft.client.gui.spectator.categories.TeleportToTeamMenuCategory`

### Fields
- `private static final ResourceLocation TELEPORT_TO_TEAM_SPRITE`
- `private static final Component TELEPORT_TEXT`
- `private static final Component TELEPORT_PROMPT`
- `private final List<SpectatorMenuItem> items`

### Methods
- `private static List<SpectatorMenuItem> createTeamEntries(Minecraft p_260258_,  Scoreboard p_259249_)`
- `public List<SpectatorMenuItem> getItems()`
- `public Component getPrompt()`
- `public void selectItem(SpectatorMenu p_101886_)`
- `public Component getName()`
- `public void renderIcon(GuiGraphics p_282933_,  float p_283568_,  int p_281803_)`
- `public boolean isEnabled()`

## TeleportToTeamMenuCategory.TeamSelectionItem

*class* `net.minecraft.client.gui.spectator.categories.TeleportToTeamMenuCategory.TeamSelectionItem`

Enclosing class: TeleportToTeamMenuCategory

### Fields
- `private final PlayerTeam team`
- `private final Supplier<PlayerSkin> iconSkin`
- `private final List<PlayerInfo> players`

### Methods
- `public static Optional<SpectatorMenuItem> create(Minecraft p_260048_,  PlayerTeam p_259058_)`
- `public void selectItem(SpectatorMenu p_101902_)`
- `public Component getName()`
- `public void renderIcon(GuiGraphics p_283215_,  float p_282946_,  int p_283438_)`
- `public boolean isEnabled()`
