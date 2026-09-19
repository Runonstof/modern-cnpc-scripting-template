# net.minecraft.client.gui.components.spectator

- [SpectatorGui](#spectatorgui)
## SpectatorGui

*class* `net.minecraft.client.gui.components.spectator.SpectatorGui`

### Fields
- `private static final ResourceLocation HOTBAR_SPRITE`
- `private static final ResourceLocation HOTBAR_SELECTION_SPRITE`
- `private static final long FADE_OUT_DELAY` (= 5000L)
- `private static final long FADE_OUT_TIME` (= 2000L)
- `private final Minecraft minecraft`
- `private long lastSelectionTime`
- `@Nullable private SpectatorMenu menu`

### Methods
- `public void onHotbarSelected(int p_94772_)`
- `private float getHotbarAlpha()`
- `public void renderHotbar(GuiGraphics p_281458_)`
- `protected void renderPage(GuiGraphics p_282945_,  float p_281688_,  int p_281726_,  int p_281730_,  SpectatorPage p_282361_)`
- `private void renderSlot(GuiGraphics p_281411_,  int p_283536_,  int p_281853_,  float p_282693_,  float p_281955_,  SpectatorMenuItem p_283370_)`
- `public void renderTooltip(GuiGraphics p_283107_)`
- `public void onSpectatorMenuClosed(SpectatorMenu p_94792_)`
- `public boolean isMenuActive()`
- `public void onMouseScrolled(int p_205381_)`
- `public void onMouseMiddleClick()`
