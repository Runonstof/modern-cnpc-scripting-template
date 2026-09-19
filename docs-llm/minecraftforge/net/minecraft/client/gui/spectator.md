# net.minecraft.client.gui.spectator

- [PlayerMenuItem](#playermenuitem)
- [RootSpectatorMenuCategory](#rootspectatormenucategory)
- [SpectatorMenu](#spectatormenu)
- [SpectatorMenu.CloseSpectatorItem](#spectatormenu.closespectatoritem)
- [SpectatorMenu.ScrollMenuItem](#spectatormenu.scrollmenuitem)
- [SpectatorMenuCategory](#spectatormenucategory)
- [SpectatorMenuItem](#spectatormenuitem)
- [SpectatorMenuListener](#spectatormenulistener)
## PlayerMenuItem

*class* `net.minecraft.client.gui.spectator.PlayerMenuItem`

### Fields
- `private final com.mojang.authlib.GameProfile profile`
- `private final Supplier<PlayerSkin> skin`
- `private final Component name`

### Methods
- `public void selectItem(SpectatorMenu p_101762_)`
- `public Component getName()`
- `public void renderIcon(GuiGraphics p_282282_,  float p_282686_,  int p_282849_)`
- `public boolean isEnabled()`

## RootSpectatorMenuCategory

*class* `net.minecraft.client.gui.spectator.RootSpectatorMenuCategory`

### Fields
- `private static final Component PROMPT_TEXT`
- `private final List<SpectatorMenuItem> items`

### Methods
- `public List<SpectatorMenuItem> getItems()`
- `public Component getPrompt()`

## SpectatorMenu

*class* `net.minecraft.client.gui.spectator.SpectatorMenu`

### Fields
- `static final ResourceLocation CLOSE_SPRITE`
- `static final ResourceLocation SCROLL_LEFT_SPRITE`
- `static final ResourceLocation SCROLL_RIGHT_SPRITE`
- `private static final SpectatorMenuItem CLOSE_ITEM`
- `private static final SpectatorMenuItem SCROLL_LEFT`
- `private static final SpectatorMenuItem SCROLL_RIGHT_ENABLED`
- `private static final SpectatorMenuItem SCROLL_RIGHT_DISABLED`
- `private static final int MAX_PER_PAGE` (= 8)
- `static final Component CLOSE_MENU_TEXT`
- `static final Component PREVIOUS_PAGE_TEXT`
- `static final Component NEXT_PAGE_TEXT`
- `public static final SpectatorMenuItem EMPTY_SLOT`
- `private final SpectatorMenuListener listener`
- `private SpectatorMenuCategory category`
- `private int selectedSlot`
- `int page`

### Methods
- `public SpectatorMenuItem getItem(int p_101788_)`
- `public List<SpectatorMenuItem> getItems()`
- `public SpectatorMenuItem getSelectedItem()`
- `public SpectatorMenuCategory getSelectedCategory()`
- `public void selectSlot(int p_101798_)`
- `public void exit()`
- `public int getSelectedSlot()`
- `public void selectCategory(SpectatorMenuCategory p_101795_)`
- `public SpectatorPage getCurrentPage()`

## SpectatorMenu.CloseSpectatorItem

*class* `net.minecraft.client.gui.spectator.SpectatorMenu.CloseSpectatorItem`

Enclosing class: SpectatorMenu

### Methods
- `public void selectItem(SpectatorMenu p_101823_)`
- `public Component getName()`
- `public void renderIcon(GuiGraphics p_283113_,  float p_282295_,  int p_282511_)`
- `public boolean isEnabled()`

## SpectatorMenu.ScrollMenuItem

*class* `net.minecraft.client.gui.spectator.SpectatorMenu.ScrollMenuItem`

Enclosing class: SpectatorMenu

### Fields
- `private final int direction`
- `private final boolean enabled`

### Methods
- `public void selectItem(SpectatorMenu p_101836_)`
- `public Component getName()`
- `public void renderIcon(GuiGraphics p_281376_,  float p_282065_,  int p_282653_)`
- `public boolean isEnabled()`

## SpectatorMenuCategory

*interface* `net.minecraft.client.gui.spectator.SpectatorMenuCategory`

### Methods
- `List<SpectatorMenuItem> getItems()`
- `Component getPrompt()`

## SpectatorMenuItem

*interface* `net.minecraft.client.gui.spectator.SpectatorMenuItem`

### Methods
- `void selectItem(SpectatorMenu p_101842_)`
- `Component getName()`
- `void renderIcon(GuiGraphics p_282591_,  float p_101840_,  int p_101841_)`
- `boolean isEnabled()`

## SpectatorMenuListener

*interface* `net.minecraft.client.gui.spectator.SpectatorMenuListener`

### Methods
- `void onSpectatorMenuClosed(SpectatorMenu p_101843_)`
