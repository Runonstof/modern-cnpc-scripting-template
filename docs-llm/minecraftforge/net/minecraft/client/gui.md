# net.minecraft.client.gui

- [Class Font.DisplayMode](#class-font.displaymode)
- [Class Gui.HeartType](#class-gui.hearttype)
- [ComponentPath](#componentpath)
- [ComponentPath.Leaf](#componentpath.leaf)
- [ComponentPath.Path](#componentpath.path)
- [Font](#font)
- [Font.StringRenderOutput](#font.stringrenderoutput)
- [Gui](#gui)
- [GuiGraphics](#guigraphics)
- [GuiGraphics.ScissorStack](#guigraphics.scissorstack)
- [GuiSpriteManager](#guispritemanager)
- [MapRenderer](#maprenderer)
- [MapRenderer.MapInstance](#maprenderer.mapinstance)
## Class Font.DisplayMode

*enum* `net.minecraft.client.gui.Class Font.DisplayMode`

Enclosing class: Font

### Methods
- `public static Font.DisplayMode[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Font.DisplayMode valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Gui.HeartType

*enum* `net.minecraft.client.gui.Class Gui.HeartType`

Enclosing class: Gui

### Fields
- `private final ResourceLocation full`
- `private final ResourceLocation fullBlinking`
- `private final ResourceLocation half`
- `private final ResourceLocation halfBlinking`
- `private final ResourceLocation hardcoreFull`
- `private final ResourceLocation hardcoreFullBlinking`
- `private final ResourceLocation hardcoreHalf`
- `private final ResourceLocation hardcoreHalfBlinking`

### Methods
- `public static Gui.HeartType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Gui.HeartType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public ResourceLocation getSprite(boolean p_297692_,  boolean p_299675_,  boolean p_299889_)`
- `static Gui.HeartType forPlayer(Player p_168733_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ComponentPath

*interface* `net.minecraft.client.gui.ComponentPath`

### Methods
- `static ComponentPath leaf(GuiEventListener p_265344_)`
- `@Nullable static ComponentPath path(ContainerEventHandler p_265254_,  @Nullable  ComponentPath p_265405_)`
- `static ComponentPath path(GuiEventListener p_265555_,  ContainerEventHandler... p_265487_)`
- `GuiEventListener component()`
- `void applyFocus(boolean p_265077_)`

## ComponentPath.Leaf

*record* `net.minecraft.client.gui.ComponentPath.Leaf`

Enclosing interface: ComponentPath

### Fields
- `private final GuiEventListener component`
  The field for the component record component.

### Methods
- `public void applyFocus(boolean p_265248_)`
- `public GuiEventListener component()`
  Returns the value of the component record component.
  - returns: the value of the component record component
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

## ComponentPath.Path

*record* `net.minecraft.client.gui.ComponentPath.Path`

Enclosing interface: ComponentPath

### Fields
- `private final ContainerEventHandler component`
  The field for the component record component.
- `private final ComponentPath childPath`
  The field for the childPath record component.

### Methods
- `public void applyFocus(boolean p_265230_)`
- `public ContainerEventHandler component()`
  Returns the value of the component record component.
  - returns: the value of the component record component
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
- `public ComponentPath childPath()`
  Returns the value of the childPath record component.
  - returns: the value of the childPath record component

## Font

*class* `net.minecraft.client.gui.Font`

### Fields
- `private static final float EFFECT_DEPTH` (= 0.009999999776482582f)
- `private static final org.joml.Vector3f SHADOW_OFFSET`
- `public static final int ALPHA_CUTOFF` (= 8)
- `public final int lineHeight` (= 9)
- `public final RandomSource random`
- `private final Function<ResourceLocation,FontSet> fonts`
- `final boolean filterFishyGlyphs`
- `private final StringSplitter splitter`

### Inherited fields
- from `net.minecraftforge.client.extensions.IForgeFont`: `ELLIPSIS`

### Methods
- `FontSet getFontSet(ResourceLocation p_92864_)`
- `public String bidirectionalShaping(String p_92802_)`
- `public int drawInBatch(String p_272751_,  float p_272661_,  float p_273129_,  int p_273272_,  boolean p_273209_,  org.joml.Matrix4f p_272940_,  MultiBufferSource p_273017_,  Font.DisplayMode p_272608_,  int p_273365_,  int p_272755_)`
- `public int drawInBatch(String p_272780_,  float p_272811_,  float p_272610_,  int p_273422_,  boolean p_273016_,  org.joml.Matrix4f p_273443_,  MultiBufferSource p_273387_,  Font.DisplayMode p_273551_,  int p_272706_,  int p_273114_,  boolean p_273022_)`
- `public int drawInBatch(Component p_273032_,  float p_273249_,  float p_273594_,  int p_273714_,  boolean p_273050_,  org.joml.Matrix4f p_272974_,  MultiBufferSource p_273695_,  Font.DisplayMode p_272782_,  int p_272603_,  int p_273632_)`
- `public int drawInBatch(FormattedCharSequence p_273262_,  float p_273006_,  float p_273254_,  int p_273375_,  boolean p_273674_,  org.joml.Matrix4f p_273525_,  MultiBufferSource p_272624_,  Font.DisplayMode p_273418_,  int p_273330_,  int p_272981_)`
- `public void drawInBatch8xOutline(FormattedCharSequence p_168646_,  float p_168647_,  float p_168648_,  int p_168649_,  int p_168650_,  org.joml.Matrix4f p_254170_,  MultiBufferSource p_168652_,  int p_168653_)`
- `private static int adjustColor(int p_92720_)`
- `private int drawInternal(String p_273658_,  float p_273086_,  float p_272883_,  int p_273547_,  boolean p_272778_,  org.joml.Matrix4f p_272662_,  MultiBufferSource p_273012_,  Font.DisplayMode p_273381_,  int p_272855_,  int p_272745_,  boolean p_272785_)`
- `private int drawInternal(FormattedCharSequence p_273025_,  float p_273121_,  float p_272717_,  int p_273653_,  boolean p_273531_,  org.joml.Matrix4f p_273265_,  MultiBufferSource p_273560_,  Font.DisplayMode p_273342_,  int p_273373_,  int p_273266_)`
- `private float renderText(String p_273765_,  float p_273532_,  float p_272783_,  int p_273217_,  boolean p_273583_,  org.joml.Matrix4f p_272734_,  MultiBufferSource p_272595_,  Font.DisplayMode p_273610_,  int p_273727_,  int p_273199_)`
- `private float renderText(FormattedCharSequence p_273322_,  float p_272632_,  float p_273541_,  int p_273200_,  boolean p_273312_,  org.joml.Matrix4f p_273276_,  MultiBufferSource p_273392_,  Font.DisplayMode p_272625_,  int p_273774_,  int p_273371_)`
- `void renderChar(BakedGlyph p_254105_,  boolean p_254001_,  boolean p_254262_,  float p_254256_,  float p_253753_,  float p_253629_,  org.joml.Matrix4f p_254014_,  VertexConsumer p_253852_,  float p_254317_,  float p_253809_,  float p_253870_,  float p_254287_,  int p_253905_)`
- `public int width(String p_92896_)`
- `public int width(FormattedText p_92853_)`
- `public int width(FormattedCharSequence p_92725_)`
- `public String plainSubstrByWidth(String p_92838_,  int p_92839_,  boolean p_92840_)`
- `public String plainSubstrByWidth(String p_92835_,  int p_92836_)`
- `public FormattedText substrByWidth(FormattedText p_92855_,  int p_92856_)`
- `public int wordWrapHeight(String p_92921_,  int p_92922_)`
- `public int wordWrapHeight(FormattedText p_239134_,  int p_239135_)`
- `public List<FormattedCharSequence> split(FormattedText p_92924_,  int p_92925_)`
- `public boolean isBidirectional()`
- `public StringSplitter getSplitter()`
- `public Font self()`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeFont`: `ellipsize`

## Font.StringRenderOutput

*class* `net.minecraft.client.gui.Font.StringRenderOutput`

Enclosing class: Font

### Fields
- `final MultiBufferSource bufferSource`
- `private final boolean dropShadow`
- `private final float dimFactor`
- `private final float r`
- `private final float g`
- `private final float b`
- `private final float a`
- `private final org.joml.Matrix4f pose`
- `private final Font.DisplayMode mode`
- `private final int packedLightCoords`
- `float x`
- `float y`
- `@Nullable private List<BakedGlyph.Effect> effects`

### Methods
- `private void addEffect(BakedGlyph.Effect p_92965_)`
- `public boolean accept(int p_92967_,  Style p_92968_,  int p_92969_)`
- `public float finish(int p_92962_,  float p_92963_)`

## Gui

*class* `net.minecraft.client.gui.Gui`

### Fields
- `protected static final ResourceLocation CROSSHAIR_SPRITE`
- `protected static final ResourceLocation CROSSHAIR_ATTACK_INDICATOR_FULL_SPRITE`
- `protected static final ResourceLocation CROSSHAIR_ATTACK_INDICATOR_BACKGROUND_SPRITE`
- `protected static final ResourceLocation CROSSHAIR_ATTACK_INDICATOR_PROGRESS_SPRITE`
- `protected static final ResourceLocation EFFECT_BACKGROUND_AMBIENT_SPRITE`
- `protected static final ResourceLocation EFFECT_BACKGROUND_SPRITE`
- `protected static final ResourceLocation HOTBAR_SPRITE`
- `protected static final ResourceLocation HOTBAR_SELECTION_SPRITE`
- `protected static final ResourceLocation HOTBAR_OFFHAND_LEFT_SPRITE`
- `protected static final ResourceLocation HOTBAR_OFFHAND_RIGHT_SPRITE`
- `protected static final ResourceLocation HOTBAR_ATTACK_INDICATOR_BACKGROUND_SPRITE`
- `protected static final ResourceLocation HOTBAR_ATTACK_INDICATOR_PROGRESS_SPRITE`
- `protected static final ResourceLocation JUMP_BAR_BACKGROUND_SPRITE`
- `protected static final ResourceLocation JUMP_BAR_COOLDOWN_SPRITE`
- `protected static final ResourceLocation JUMP_BAR_PROGRESS_SPRITE`
- `protected static final ResourceLocation EXPERIENCE_BAR_BACKGROUND_SPRITE`
- `protected static final ResourceLocation EXPERIENCE_BAR_PROGRESS_SPRITE`
- `protected static final ResourceLocation ARMOR_EMPTY_SPRITE`
- `protected static final ResourceLocation ARMOR_HALF_SPRITE`
- `protected static final ResourceLocation ARMOR_FULL_SPRITE`
- `protected static final ResourceLocation FOOD_EMPTY_HUNGER_SPRITE`
- `protected static final ResourceLocation FOOD_HALF_HUNGER_SPRITE`
- `protected static final ResourceLocation FOOD_FULL_HUNGER_SPRITE`
- `protected static final ResourceLocation FOOD_EMPTY_SPRITE`
- `protected static final ResourceLocation FOOD_HALF_SPRITE`
- `protected static final ResourceLocation FOOD_FULL_SPRITE`
- `protected static final ResourceLocation AIR_SPRITE`
- `protected static final ResourceLocation AIR_BURSTING_SPRITE`
- `protected static final ResourceLocation HEART_VEHICLE_CONTAINER_SPRITE`
- `protected static final ResourceLocation HEART_VEHICLE_FULL_SPRITE`
- `protected static final ResourceLocation HEART_VEHICLE_HALF_SPRITE`
- `protected static final ResourceLocation VIGNETTE_LOCATION`
- `protected static final ResourceLocation PUMPKIN_BLUR_LOCATION`
- `protected static final ResourceLocation SPYGLASS_SCOPE_LOCATION`
- `protected static final ResourceLocation POWDER_SNOW_OUTLINE_LOCATION`
- `protected static final Component DEMO_EXPIRED_TEXT`
- `protected static final Component SAVING_TEXT`
- `protected static final int COLOR_WHITE` (= 16777215)
- `protected static final float MIN_CROSSHAIR_ATTACK_SPEED` (= 5.0f)
- `protected static final int NUM_HEARTS_PER_ROW` (= 10)
- `protected static final int LINE_HEIGHT` (= 10)
- `protected static final String SPACER` (= ": ")
- `protected static final float PORTAL_OVERLAY_ALPHA_MIN` (= 0.20000000298023224f)
- `protected static final int HEART_SIZE` (= 9)
- `protected static final int HEART_SEPARATION` (= 8)
- `protected static final float AUTOSAVE_FADE_SPEED_FACTOR` (= 0.20000000298023224f)
- `protected final RandomSource random`
- `protected final Minecraft minecraft`
- `protected final ItemRenderer itemRenderer`
- `protected final ChatComponent chat`
- `protected int tickCount`
- `@Nullable protected Component overlayMessageString`
- `protected int overlayMessageTime`
- `protected boolean animateOverlayMessageColor`
- `protected boolean chatDisabledByPlayerShown`
- `public float vignetteBrightness`
- `protected int toolHighlightTimer`
- `protected ItemStack lastToolHighlight`
- `protected DebugScreenOverlay debugOverlay`
- `protected final SubtitleOverlay subtitleOverlay`
- `protected final SpectatorGui spectatorGui`
- `protected final PlayerTabOverlay tabList`
- `protected final BossHealthOverlay bossOverlay`
- `protected int titleTime`
- `@Nullable protected Component title`
- `@Nullable protected Component subtitle`
- `protected int titleFadeInTime`
- `protected int titleStayTime`
- `protected int titleFadeOutTime`
- `protected int lastHealth`
- `protected int displayHealth`
- `protected long lastHealthTime`
- `protected long healthBlinkTime`
- `protected int screenWidth`
- `protected int screenHeight`
- `protected float autosaveIndicatorValue`
- `protected float lastAutosaveIndicatorValue`
- `protected float scopeScale`

### Methods
- `public void resetTitleTimes()`
- `public void render(GuiGraphics p_282884_,  float p_282611_)`
- `protected void drawBackdrop(GuiGraphics p_282548_,  Font p_93041_,  int p_93042_,  int p_93043_,  int p_93044_)`
- `public void renderCrosshair(GuiGraphics p_282828_)`
- `private boolean canRenderCrosshairForSpectator(HitResult p_93025_)`
- `public void renderEffects(GuiGraphics p_282812_)`
- `public void renderHotbar(float p_283031_,  GuiGraphics p_282108_)`
- `public void renderJumpMeter(PlayerRideableJumping p_282774_,  GuiGraphics p_282939_,  int p_283351_)`
- `public void renderExperienceBar(GuiGraphics p_281906_,  int p_282731_)`
- `public void renderSelectedItemName(GuiGraphics p_283501_)`
- `public void renderSelectedItemName(GuiGraphics p_283501_,  int yShift)`
- `public void renderDemoOverlay(GuiGraphics p_281825_)`
- `public void displayScoreboardSidebar(GuiGraphics p_282008_,  Objective p_283455_)`
- `private Player getCameraPlayer()`
- `private LivingEntity getPlayerVehicleWithHealth()`
- `private int getVehicleMaxHearts(LivingEntity p_93023_)`
- `private int getVisibleVehicleHeartRows(int p_93013_)`
- `private void renderPlayerHealth(GuiGraphics p_283143_)`
- `protected void renderHearts(GuiGraphics p_282497_,  Player p_168690_,  int p_168691_,  int p_168692_,  int p_168693_,  int p_168694_,  float p_168695_,  int p_168696_,  int p_168697_,  int p_168698_,  boolean p_168699_)`
- `private void renderHeart(GuiGraphics p_283024_,  Gui.HeartType p_281393_,  int p_283636_,  int p_283279_,  boolean p_283440_,  boolean p_282496_,  boolean p_301416_)`
- `private void renderVehicleHealth(GuiGraphics p_283368_)`
- `protected void renderTextureOverlay(GuiGraphics p_282304_,  ResourceLocation p_281622_,  float p_281504_)`
- `public void renderSpyglassOverlay(GuiGraphics p_282069_,  float p_283442_)`
- `private void updateVignetteBrightness(Entity p_93021_)`
- `public void renderVignette(GuiGraphics p_283063_,  Entity p_283439_)`
- `protected void renderPortalOverlay(GuiGraphics p_283375_,  float p_283296_)`
- `private void renderSlot(GuiGraphics p_283283_,  int p_283213_,  int p_281301_,  float p_281885_,  Player p_283644_,  ItemStack p_283317_,  int p_283261_)`
- `public void tick(boolean p_193833_)`
- `private void tick()`
- `private void tickAutosaveIndicator()`
- `public void setNowPlaying(Component p_93056_)`
- `public void setOverlayMessage(Component p_93064_,  boolean p_93065_)`
- `public void setChatDisabledByPlayerShown(boolean p_238398_)`
- `public boolean isShowingChatDisabledByPlayer()`
- `public void setTimes(int p_168685_,  int p_168686_,  int p_168687_)`
- `public void setSubtitle(Component p_168712_)`
- `public void setTitle(Component p_168715_)`
- `public void clear()`
- `public ChatComponent getChat()`
- `public int getGuiTicks()`
- `public Font getFont()`
- `public SpectatorGui getSpectatorGui()`
- `public PlayerTabOverlay getTabList()`
- `public void onDisconnected()`
- `public BossHealthOverlay getBossOverlay()`
- `public DebugScreenOverlay getDebugOverlay()`
- `public void clearCache()`
- `private void renderSavingIndicator(GuiGraphics p_282761_)`

## GuiGraphics

*class* `net.minecraft.client.gui.GuiGraphics`

### Fields
- `public static final float MAX_GUI_Z` (= 10000.0f)
- `public static final float MIN_GUI_Z` (= -10000.0f)
- `private static final int EXTRA_SPACE_AFTER_FIRST_TOOLTIP_LINE` (= 2)
- `private final Minecraft minecraft`
- `private final PoseStack pose`
- `private final MultiBufferSource.BufferSource bufferSource`
- `private final GuiGraphics.ScissorStack scissorStack`
- `private final GuiSpriteManager sprites`
- `private boolean managed`
- `private ItemStack tooltipStack`

### Inherited fields
- from `net.minecraftforge.client.extensions.IForgeGuiGraphics`: `DEFAULT_BACKGROUND_COLOR`, `DEFAULT_BORDER_COLOR_END`, `DEFAULT_BORDER_COLOR_START`, `INVALID`, `RESET_CHAR`, `TEXT_COLOR_CODES`, `UNDO_CHAR`, `VALID`

### Methods
- `@Deprecated public void drawManaged(Runnable p_286277_)` (deprecated)
- `@Deprecated private void flushIfUnmanaged()` (deprecated)
- `@Deprecated private void flushIfManaged()` (deprecated)
- `public int guiWidth()`
- `public int guiHeight()`
- `public PoseStack pose()`
- `public MultiBufferSource.BufferSource bufferSource()`
- `public void flush()`
- `public void hLine(int p_283318_,  int p_281662_,  int p_281346_,  int p_281672_)`
- `public void hLine(RenderType p_286630_,  int p_286453_,  int p_286247_,  int p_286814_,  int p_286623_)`
- `public void vLine(int p_282951_,  int p_281591_,  int p_281568_,  int p_282718_)`
- `public void vLine(RenderType p_286607_,  int p_286309_,  int p_286480_,  int p_286707_,  int p_286855_)`
- `public void enableScissor(int p_281479_,  int p_282788_,  int p_282924_,  int p_282826_)`
- `public void disableScissor()`
- `private void applyScissor(@Nullable  ScreenRectangle p_281569_)`
- `public void setColor(float p_281272_,  float p_281734_,  float p_282022_,  float p_281752_)`
- `public void fill(int p_282988_,  int p_282861_,  int p_281278_,  int p_281710_,  int p_281470_)`
- `public void fill(int p_281437_,  int p_283660_,  int p_282606_,  int p_283413_,  int p_283428_,  int p_283253_)`
- `public void fill(RenderType p_286602_,  int p_286738_,  int p_286614_,  int p_286741_,  int p_286610_,  int p_286560_)`
- `public void fill(RenderType p_286711_,  int p_286234_,  int p_286444_,  int p_286244_,  int p_286411_,  int p_286671_,  int p_286599_)`
- `public void fillGradient(int p_283290_,  int p_283278_,  int p_282670_,  int p_281698_,  int p_283374_,  int p_283076_)`
- `public void fillGradient(int p_282702_,  int p_282331_,  int p_281415_,  int p_283118_,  int p_282419_,  int p_281954_,  int p_282607_)`
- `public void fillGradient(RenderType p_286522_,  int p_286535_,  int p_286839_,  int p_286242_,  int p_286856_,  int p_286809_,  int p_286833_,  int p_286706_)`
- `private void fillGradient(VertexConsumer p_286862_,  int p_283414_,  int p_281397_,  int p_283587_,  int p_281521_,  int p_283505_,  int p_283131_,  int p_282949_)`
- `public void drawCenteredString(Font p_282122_,  String p_282898_,  int p_281490_,  int p_282853_,  int p_281258_)`
- `public void drawCenteredString(Font p_282901_,  Component p_282456_,  int p_283083_,  int p_282276_,  int p_281457_)`
- `public void drawCenteredString(Font p_282592_,  FormattedCharSequence p_281854_,  int p_281573_,  int p_283511_,  int p_282577_)`
- `public int drawString(Font p_282003_,  @Nullable  String p_281403_,  int p_282714_,  int p_282041_,  int p_281908_)`
- `public int drawString(Font p_283343_,  @Nullable  String p_281896_,  int p_283569_,  int p_283418_,  int p_281560_,  boolean p_282130_)`
- `public int drawString(Font p_283343_,  @Nullable  String p_281896_,  float p_283569_,  float p_283418_,  int p_281560_,  boolean p_282130_)`
- `public int drawString(Font p_283019_,  FormattedCharSequence p_283376_,  int p_283379_,  int p_283346_,  int p_282119_)`
- `public int drawString(Font p_282636_,  FormattedCharSequence p_281596_,  int p_281586_,  int p_282816_,  int p_281743_,  boolean p_282394_)`
- `public int drawString(Font p_282636_,  FormattedCharSequence p_281596_,  float p_281586_,  float p_282816_,  int p_281743_,  boolean p_282394_)`
- `public int drawString(Font p_281653_,  Component p_283140_,  int p_283102_,  int p_282347_,  int p_281429_)`
- `public int drawString(Font p_281547_,  Component p_282131_,  int p_282857_,  int p_281250_,  int p_282195_,  boolean p_282791_)`
- `public void drawWordWrap(Font p_281494_,  FormattedText p_283463_,  int p_282183_,  int p_283250_,  int p_282564_,  int p_282629_)`
- `public void blit(int p_282225_,  int p_281487_,  int p_281985_,  int p_281329_,  int p_283035_,  TextureAtlasSprite p_281614_)`
- `public void blit(int p_282416_,  int p_282989_,  int p_282618_,  int p_282755_,  int p_281717_,  TextureAtlasSprite p_281874_,  float p_283559_,  float p_282730_,  float p_283530_,  float p_282246_)`
- `public void renderOutline(int p_281496_,  int p_282076_,  int p_281334_,  int p_283576_,  int p_283618_)`
- `public void blitSprite(ResourceLocation p_300860_,  int p_298718_,  int p_298541_,  int p_300996_,  int p_298426_)`
- `public void blitSprite(ResourceLocation p_299503_,  int p_297264_,  int p_301178_,  int p_297744_,  int p_299331_,  int p_300334_)`
- `public void blitSprite(ResourceLocation p_298820_,  int p_300417_,  int p_298256_,  int p_299965_,  int p_300008_,  int p_299688_,  int p_300153_,  int p_299047_,  int p_298424_)`
- `public void blitSprite(ResourceLocation p_300222_,  int p_301241_,  int p_298760_,  int p_299400_,  int p_299966_,  int p_298806_,  int p_298412_,  int p_300874_,  int p_297763_,  int p_300904_)`
- `private void blitSprite(TextureAtlasSprite p_299198_,  int p_300402_,  int p_300310_,  int p_300994_,  int p_297577_,  int p_299466_,  int p_301260_,  int p_298369_,  int p_300819_,  int p_299583_)`
- `private void blitSprite(TextureAtlasSprite p_299484_,  int p_297573_,  int p_300435_,  int p_299725_,  int p_300673_,  int p_301130_)`
- `public void blit(ResourceLocation p_283377_,  int p_281970_,  int p_282111_,  int p_283134_,  int p_282778_,  int p_281478_,  int p_281821_)`
- `public void blit(ResourceLocation p_283573_,  int p_283574_,  int p_283670_,  int p_283545_,  float p_283029_,  float p_283061_,  int p_282845_,  int p_282558_,  int p_282832_,  int p_281851_)`
- `public void blit(ResourceLocation p_282034_,  int p_283671_,  int p_282377_,  int p_282058_,  int p_281939_,  float p_282285_,  float p_283199_,  int p_282186_,  int p_282322_,  int p_282481_,  int p_281887_)`
- `public void blit(ResourceLocation p_283272_,  int p_283605_,  int p_281879_,  float p_282809_,  float p_282942_,  int p_281922_,  int p_282385_,  int p_282596_,  int p_281699_)`
- `void blit(ResourceLocation p_282639_,  int p_282732_,  int p_283541_,  int p_281760_,  int p_283298_,  int p_283429_,  int p_282193_,  int p_281980_,  float p_282660_,  float p_281522_,  int p_282315_,  int p_281436_)`
- `void innerBlit(ResourceLocation p_283461_,  int p_281399_,  int p_283222_,  int p_283615_,  int p_283430_,  int p_281729_,  float p_283247_,  float p_282598_,  float p_282883_,  float p_283017_)`
- `void innerBlit(ResourceLocation p_283254_,  int p_283092_,  int p_281930_,  int p_282113_,  int p_281388_,  int p_283583_,  float p_281327_,  float p_281676_,  float p_283166_,  float p_282630_,  float p_282800_,  float p_282850_,  float p_282375_,  float p_282754_)`
- `private void blitNineSlicedSprite(TextureAtlasSprite p_300154_,  GuiSpriteScaling.NineSlice p_300599_,  int p_297486_,  int p_298301_,  int p_299602_,  int p_299587_,  int p_299827_)`
- `private void blitTiledSprite(TextureAtlasSprite p_298835_,  int p_297456_,  int p_300732_,  int p_297241_,  int p_300646_,  int p_299561_,  int p_298797_,  int p_299557_,  int p_297684_,  int p_299756_,  int p_297303_,  int p_299619_)`
- `public void renderItem(ItemStack p_281978_,  int p_282647_,  int p_281944_)`
- `public void renderItem(ItemStack p_282262_,  int p_283221_,  int p_283496_,  int p_283435_)`
- `public void renderItem(ItemStack p_282786_,  int p_282502_,  int p_282976_,  int p_281592_,  int p_282314_)`
- `public void renderFakeItem(ItemStack p_281946_,  int p_283299_,  int p_283674_)`
- `public void renderItem(LivingEntity p_282154_,  ItemStack p_282777_,  int p_282110_,  int p_281371_,  int p_283572_)`
- `private void renderItem(@Nullable  LivingEntity p_283524_,  @Nullable  Level p_282461_,  ItemStack p_283653_,  int p_283141_,  int p_282560_,  int p_282425_)`
- `private void renderItem(@Nullable  LivingEntity p_282619_,  @Nullable  Level p_281754_,  ItemStack p_281675_,  int p_281271_,  int p_282210_,  int p_283260_,  int p_281995_)`
- `public void renderItemDecorations(Font p_281721_,  ItemStack p_281514_,  int p_282056_,  int p_282683_)`
- `public void renderItemDecorations(Font p_282005_,  ItemStack p_283349_,  int p_282641_,  int p_282146_,  @Nullable  String p_282803_)`
- `public void renderTooltip(Font p_282308_,  ItemStack p_282781_,  int p_282687_,  int p_282292_)`
- `public void renderTooltip(Font font,  List<Component> textComponents,  Optional<TooltipComponent> tooltipComponent,  ItemStack stack,  int mouseX,  int mouseY)`
- `public void renderTooltip(Font p_283128_,  List<Component> p_282716_,  Optional<TooltipComponent> p_281682_,  int p_283678_,  int p_281696_)`
- `public void renderTooltip(Font p_282269_,  Component p_282572_,  int p_282044_,  int p_282545_)`
- `public void renderComponentTooltip(Font p_282739_,  List<Component> p_281832_,  int p_282191_,  int p_282446_)`
- `public void renderComponentTooltip(Font font,  List<? extends FormattedText> tooltips,  int mouseX,  int mouseY,  ItemStack stack)`
- `public void renderTooltip(Font p_282192_,  List<? extends FormattedCharSequence> p_282297_,  int p_281680_,  int p_283325_)`
- `public void renderTooltip(Font p_281627_,  List<FormattedCharSequence> p_283313_,  ClientTooltipPositioner p_283571_,  int p_282367_,  int p_282806_)`
- `private void renderTooltipInternal(Font p_282675_,  List<ClientTooltipComponent> p_282615_,  int p_283230_,  int p_283417_,  ClientTooltipPositioner p_282442_)`
- `public void renderComponentHoverEffect(Font p_282584_,  @Nullable  Style p_282156_,  int p_283623_,  int p_282114_)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeGuiGraphics`: `blitInscribed`, `blitInscribed`, `blitWithBorder`, `blitWithBorder`, `getColorFromFormattingCharacter`

## GuiGraphics.ScissorStack

*class* `net.minecraft.client.gui.GuiGraphics.ScissorStack`

Enclosing class: GuiGraphics

### Fields
- `private final Deque<ScreenRectangle> stack`

### Methods
- `public ScreenRectangle push(ScreenRectangle p_281812_)`
- `@Nullable public ScreenRectangle pop()`

## GuiSpriteManager

*class* `net.minecraft.client.gui.GuiSpriteManager`

### Fields
- `private static final Set<MetadataSectionSerializer<?>> METADATA_SECTIONS`

### Inherited fields
- from `net.minecraft.client.resources.TextureAtlasHolder`: `textureAtlas`

### Methods
- `public TextureAtlasSprite getSprite(ResourceLocation p_298308_)`
- `public GuiSpriteScaling getSpriteScaling(TextureAtlasSprite p_298924_)`
- `private GuiMetadataSection getMetadata(TextureAtlasSprite p_299594_)`

### Inherited methods
- from `net.minecraft.client.resources.TextureAtlasHolder`: `close`, `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## MapRenderer

*class* `net.minecraft.client.gui.MapRenderer`

### Fields
- `private static final ResourceLocation MAP_ICONS_LOCATION`
- `static final RenderType MAP_ICONS`
- `private static final int WIDTH` (= 128)
- `private static final int HEIGHT` (= 128)
- `final TextureManager textureManager`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<MapRenderer.MapInstance> maps`

### Methods
- `public void update(int p_168766_,  MapItemSavedData p_168767_)`
- `public void render(PoseStack p_168772_,  MultiBufferSource p_168773_,  int p_168774_,  MapItemSavedData p_168775_,  boolean p_168776_,  int p_168777_)`
- `private MapRenderer.MapInstance getOrCreateMapInstance(int p_168779_,  MapItemSavedData p_168780_)`
- `public void resetData()`
- `public void close()`

## MapRenderer.MapInstance

*class* `net.minecraft.client.gui.MapRenderer.MapInstance`

Enclosing class: MapRenderer

### Fields
- `private MapItemSavedData data`
- `private final DynamicTexture texture`
- `private final RenderType renderType`
- `private boolean requiresUpload`

### Methods
- `void replaceMapData(MapItemSavedData p_182568_)`
- `public void forceUpload()`
- `private void updateTexture()`
- `void draw(PoseStack p_93292_,  MultiBufferSource p_93293_,  boolean p_93294_,  int p_93295_)`
- `public void close()`
