# net.minecraftforge.client.gui.overlay

- [Class VanillaGuiOverlay](#class-vanillaguioverlay)
- [ForgeGui](#forgegui)
- [ForgeGui.OverlayAccess](#forgegui.overlayaccess)
- [GuiOverlayManager](#guioverlaymanager)
- [IGuiOverlay](#iguioverlay)
- [NamedGuiOverlay](#namedguioverlay)
## Class VanillaGuiOverlay

*enum* `net.minecraftforge.client.gui.overlay.Class VanillaGuiOverlay`

All the vanilla HUD overlays in the order that they render.

### Fields
- `private final ResourceLocation id`
- `final IGuiOverlay overlay`
- `NamedGuiOverlay type`

### Methods
- `public static VanillaGuiOverlay[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static VanillaGuiOverlay valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@NotNull public @NotNull ResourceLocation id()`
- `public NamedGuiOverlay type()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ForgeGui

*class* `net.minecraftforge.client.gui.overlay.ForgeGui`

Forge wrapper around Gui to be able to render HUD overlays.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private static final int WHITE` (= 16777215)
- `public static double rayTraceDistance`
- `public int leftHeight`
- `public int rightHeight`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `AIR_BURSTING_SPRITE`, `AIR_SPRITE`, `animateOverlayMessageColor`, `ARMOR_EMPTY_SPRITE`, `ARMOR_FULL_SPRITE`, `ARMOR_HALF_SPRITE`, `AUTOSAVE_FADE_SPEED_FACTOR`, `autosaveIndicatorValue`, `bossOverlay`, `chat`, `chatDisabledByPlayerShown`, `COLOR_WHITE`, `CROSSHAIR_ATTACK_INDICATOR_BACKGROUND_SPRITE`, `CROSSHAIR_ATTACK_INDICATOR_FULL_SPRITE`, `CROSSHAIR_ATTACK_INDICATOR_PROGRESS_SPRITE`, `CROSSHAIR_SPRITE`, `debugOverlay`, `DEMO_EXPIRED_TEXT`, `displayHealth`, `EFFECT_BACKGROUND_AMBIENT_SPRITE`, `EFFECT_BACKGROUND_SPRITE`, `EXPERIENCE_BAR_BACKGROUND_SPRITE`, `EXPERIENCE_BAR_PROGRESS_SPRITE`, `FOOD_EMPTY_HUNGER_SPRITE`, `FOOD_EMPTY_SPRITE`, `FOOD_FULL_HUNGER_SPRITE`, `FOOD_FULL_SPRITE`, `FOOD_HALF_HUNGER_SPRITE`, `FOOD_HALF_SPRITE`, `healthBlinkTime`, `HEART_SEPARATION`, `HEART_SIZE`, `HEART_VEHICLE_CONTAINER_SPRITE`, `HEART_VEHICLE_FULL_SPRITE`, `HEART_VEHICLE_HALF_SPRITE`, `HOTBAR_ATTACK_INDICATOR_BACKGROUND_SPRITE`, `HOTBAR_ATTACK_INDICATOR_PROGRESS_SPRITE`, `HOTBAR_OFFHAND_LEFT_SPRITE`, `HOTBAR_OFFHAND_RIGHT_SPRITE`, `HOTBAR_SELECTION_SPRITE`, `HOTBAR_SPRITE`, `itemRenderer`, `JUMP_BAR_BACKGROUND_SPRITE`, `JUMP_BAR_COOLDOWN_SPRITE`, `JUMP_BAR_PROGRESS_SPRITE`, `lastAutosaveIndicatorValue`, `lastHealth`, `lastHealthTime`, `lastToolHighlight`, `LINE_HEIGHT`, `MIN_CROSSHAIR_ATTACK_SPEED`, `minecraft`, `NUM_HEARTS_PER_ROW`, `overlayMessageString`, `overlayMessageTime`, `PORTAL_OVERLAY_ALPHA_MIN`, `POWDER_SNOW_OUTLINE_LOCATION`, `PUMPKIN_BLUR_LOCATION`, `random`, `SAVING_TEXT`, `scopeScale`, `screenHeight`, `screenWidth`, `SPACER`, `spectatorGui`, `SPYGLASS_SCOPE_LOCATION`, `subtitle`, `subtitleOverlay`, `tabList`, `tickCount`, `title`, `titleFadeInTime`, `titleFadeOutTime`, `titleStayTime`, `titleTime`, `toolHighlightTimer`, `VIGNETTE_LOCATION`, `vignetteBrightness`

### Methods
- `public Minecraft getMinecraft()`
- `public void setupOverlayRenderState(boolean blend,  boolean depthTest)`
- `public void render(GuiGraphics guiGraphics,  float partialTick)`
- `public boolean shouldDrawSurvivalElements()`
- `protected void renderSubtitles(GuiGraphics guiGraphics)`
- `protected void renderBossHealth(GuiGraphics guiGraphics)`
- `void renderSpyglassOverlay(GuiGraphics guiGraphics)`
- `void renderHelmet(float partialTick,  GuiGraphics guiGraphics)`
- `void renderFrostbite(GuiGraphics guiGraphics)`
- `protected void renderArmor(GuiGraphics guiGraphics,  int width,  int height)`
- `protected void renderPortalOverlay(GuiGraphics guiGraphics,  float alpha)`
- `protected void renderAir(int width,  int height,  GuiGraphics guiGraphics)`
- `public void renderHealth(int width,  int height,  GuiGraphics guiGraphics)`
- `public void renderFood(int width,  int height,  GuiGraphics guiGraphics)`
- `protected void renderSleepFade(int width,  int height,  GuiGraphics guiGraphics)`
- `protected void renderExperience(int x,  GuiGraphics guiGraphics)`
- `public void renderJumpMeter(PlayerRideableJumping playerRideableJumping,  GuiGraphics guiGraphics,  int x)`
- `protected void renderHUDText(int width,  int height,  GuiGraphics guiGraphics)`
- `protected void renderFPSGraph(GuiGraphics guiGraphics)`
- `protected void renderNetworkGraph(GuiGraphics guiGraphics)`
- `protected void renderRecordOverlay(int width,  int height,  float partialTick,  GuiGraphics guiGraphics)`
- `protected void renderTitle(int width,  int height,  float partialTick,  GuiGraphics guiGraphics)`
- `protected void renderChat(int width,  int height,  GuiGraphics guiGraphics)`
- `protected void renderPlayerList(int width,  int height,  GuiGraphics guiGraphics)`
- `protected void renderHealthMount(int width,  int height,  GuiGraphics guiGraphics)`
- `private boolean pre(NamedGuiOverlay overlay,  GuiGraphics guiGraphics)`
- `private void post(NamedGuiOverlay overlay,  GuiGraphics guiGraphics)`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `clear`, `clearCache`, `displayScoreboardSidebar`, `drawBackdrop`, `getBossOverlay`, `getChat`, `getDebugOverlay`, `getFont`, `getGuiTicks`, `getSpectatorGui`, `getTabList`, `isShowingChatDisabledByPlayer`, `onDisconnected`, `renderCrosshair`, `renderDemoOverlay`, `renderEffects`, `renderExperienceBar`, `renderHearts`, `renderHotbar`, `renderSelectedItemName`, `renderSelectedItemName`, `renderSpyglassOverlay`, `renderTextureOverlay`, `renderVignette`, `resetTitleTimes`, `setChatDisabledByPlayerShown`, `setNowPlaying`, `setOverlayMessage`, `setSubtitle`, `setTimes`, `setTitle`, `tick`

## ForgeGui.OverlayAccess

*class* `net.minecraftforge.client.gui.overlay.ForgeGui.OverlayAccess`

Enclosing class: ForgeGui

### Inherited fields
- from `net.minecraft.client.gui.components.DebugScreenOverlay`: `block`, `liquid`, `renderFpsCharts`, `renderNetworkCharts`, `renderProfilerChart`

### Methods
- `protected void drawFPSCharts(GuiGraphics gfx)`
- `protected void drawNetworkCharts(GuiGraphics gfx)`
- `protected void update()`
- `protected List<String> getOverlayHelp()`
- `protected List<String> getGameInformation()`
- `protected List<String> getSystemInformation()`
- `protected void renderLines(GuiGraphics gfx,  List<String> lines,  boolean leftAlign)`

### Inherited methods
- from `net.minecraft.client.gui.components.DebugScreenOverlay`: `clearChunkCache`, `drawGameInformation`, `drawSystemInformation`, `drawText`, `getBandwidthLogger`, `getPingLogger`, `logFrameDuration`, `logTickDuration`, `render`, `reset`, `showDebugScreen`, `showNetworkCharts`, `showProfilerChart`, `toggleFpsCharts`, `toggleNetworkCharts`, `toggleOverlay`, `toggleProfilerChart`

## GuiOverlayManager

*class* `net.minecraftforge.client.gui.overlay.GuiOverlayManager`

Manager for HUD overlays.

 Provides a lookup by ID, as well as all registered overlays.

### Fields
- `private static com.google.common.collect.ImmutableList<NamedGuiOverlay> OVERLAYS`
- `private static com.google.common.collect.ImmutableMap<ResourceLocation,NamedGuiOverlay> OVERLAYS_BY_NAME`

### Methods
- `public static com.google.common.collect.ImmutableList<NamedGuiOverlay> getOverlays()`
  Retrieves an ordered list of all registered overlays.
- `@Nullable public static @Nullable NamedGuiOverlay findOverlay(ResourceLocation id)`
  Finds the overlay corresponding to a given ID.
   Do not call this before RegisterGuiOverlaysEvent has finished firing.
- `@Internal public static void init()`
- `private static void preRegisterVanillaOverlays(HashMap<ResourceLocation,IGuiOverlay> overlays,  ArrayList<ResourceLocation> orderedOverlays)`
  Pre-registers vanilla overlays so they are available for ordering.
- `private static void assignVanillaOverlayTypes()`

## IGuiOverlay

*interface* `net.minecraftforge.client.gui.overlay.IGuiOverlay`

A HUD overlay.

### Methods
- `void render(ForgeGui gui,  GuiGraphics guiGraphics,  float partialTick,  int screenWidth,  int screenHeight)`

## NamedGuiOverlay

*record* `net.minecraftforge.client.gui.overlay.NamedGuiOverlay`

An object representation of an overlay with a name.

 Useful to identify overlays in RenderGuiOverlayEvent.

 Users should not be instantiating this themselves. Retrieve from GuiOverlayManager.

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final IGuiOverlay overlay`
  The field for the overlay record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public IGuiOverlay overlay()`
  Returns the value of the overlay record component.
  - returns: the value of the overlay record component
