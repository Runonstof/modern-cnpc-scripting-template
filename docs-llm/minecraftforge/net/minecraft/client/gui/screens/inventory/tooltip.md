# net.minecraft.client.gui.screens.inventory.tooltip

- [BelowOrAboveWidgetTooltipPositioner](#beloworabovewidgettooltippositioner)
- [Class ClientBundleTooltip.Texture](#class-clientbundletooltip.texture)
- [ClientBundleTooltip](#clientbundletooltip)
- [ClientTextTooltip](#clienttexttooltip)
- [ClientTooltipComponent](#clienttooltipcomponent)
- [ClientTooltipPositioner](#clienttooltippositioner)
- [DefaultTooltipPositioner](#defaulttooltippositioner)
- [MenuTooltipPositioner](#menutooltippositioner)
- [TooltipRenderUtil](#tooltiprenderutil)
## BelowOrAboveWidgetTooltipPositioner

*class* `net.minecraft.client.gui.screens.inventory.tooltip.BelowOrAboveWidgetTooltipPositioner`

### Fields
- `private final AbstractWidget widget`

### Methods
- `public org.joml.Vector2ic positionTooltip(int p_282513_,  int p_281649_,  int p_283308_,  int p_282740_,  int p_281398_,  int p_283404_)`

## Class ClientBundleTooltip.Texture

*enum* `net.minecraft.client.gui.screens.inventory.tooltip.Class ClientBundleTooltip.Texture`

Enclosing class: ClientBundleTooltip

### Fields
- `public final ResourceLocation sprite`
- `public final int w`
- `public final int h`

### Methods
- `public static ClientBundleTooltip.Texture[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientBundleTooltip.Texture valueOf(String name)`
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

## ClientBundleTooltip

*class* `net.minecraft.client.gui.screens.inventory.tooltip.ClientBundleTooltip`

### Fields
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `private static final int MARGIN_Y` (= 4)
- `private static final int BORDER_WIDTH` (= 1)
- `private static final int SLOT_SIZE_X` (= 18)
- `private static final int SLOT_SIZE_Y` (= 20)
- `private final NonNullList<ItemStack> items`
- `private final int weight`

### Methods
- `public int getHeight()`
- `public int getWidth(Font p_169901_)`
- `private int backgroundWidth()`
- `private int backgroundHeight()`
- `public void renderImage(Font p_194042_,  int p_194043_,  int p_194044_,  GuiGraphics p_282522_)`
- `private void renderSlot(int p_283180_,  int p_282972_,  int p_282547_,  boolean p_283053_,  GuiGraphics p_283625_,  Font p_281863_)`
- `private void blit(GuiGraphics p_281273_,  int p_282428_,  int p_281897_,  ClientBundleTooltip.Texture p_281917_)`
- `private int gridSizeX()`
- `private int gridSizeY()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent`: `renderText`

## ClientTextTooltip

*class* `net.minecraft.client.gui.screens.inventory.tooltip.ClientTextTooltip`

### Fields
- `private final FormattedCharSequence text`

### Methods
- `public int getWidth(Font p_169941_)`
- `public int getHeight()`
- `public void renderText(Font p_254285_,  int p_254192_,  int p_253697_,  org.joml.Matrix4f p_253880_,  MultiBufferSource.BufferSource p_254231_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent`: `renderImage`

## ClientTooltipComponent

*interface* `net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipComponent`

### Methods
- `static ClientTooltipComponent create(FormattedCharSequence p_169949_)`
- `static ClientTooltipComponent create(TooltipComponent p_169951_)`
- `int getHeight()`
- `int getWidth(Font p_169952_)`
- `default void renderText(Font p_169953_,  int p_169954_,  int p_169955_,  org.joml.Matrix4f p_253692_,  MultiBufferSource.BufferSource p_169957_)`
- `default void renderImage(Font p_194048_,  int p_194049_,  int p_194050_,  GuiGraphics p_283459_)`

## ClientTooltipPositioner

*interface* `net.minecraft.client.gui.screens.inventory.tooltip.ClientTooltipPositioner`

### Methods
- `org.joml.Vector2ic positionTooltip(int p_263026_,  int p_262969_,  int p_262971_,  int p_263058_,  int p_281643_,  int p_282590_)`

## DefaultTooltipPositioner

*class* `net.minecraft.client.gui.screens.inventory.tooltip.DefaultTooltipPositioner`

### Fields
- `public static final ClientTooltipPositioner INSTANCE`

### Methods
- `public org.joml.Vector2ic positionTooltip(int p_281867_,  int p_282915_,  int p_283108_,  int p_282881_,  int p_283243_,  int p_282104_)`
- `private void positionTooltip(int p_282431_,  int p_282309_,  org.joml.Vector2i p_282004_,  int p_283148_,  int p_281715_)`

## MenuTooltipPositioner

*class* `net.minecraft.client.gui.screens.inventory.tooltip.MenuTooltipPositioner`

### Fields
- `private static final int MARGIN` (= 5)
- `private static final int MOUSE_OFFSET_X` (= 12)
- `public static final int MAX_OVERLAP_WITH_WIDGET` (= 3)
- `public static final int MAX_DISTANCE_TO_WIDGET` (= 5)
- `private final AbstractWidget widget`

### Methods
- `public org.joml.Vector2ic positionTooltip(int p_283490_,  int p_282509_,  int p_282684_,  int p_281703_,  int p_281348_,  int p_283657_)`
- `private static int getOffset(int p_268188_,  int p_268026_,  int p_268015_)`

## TooltipRenderUtil

*class* `net.minecraft.client.gui.screens.inventory.tooltip.TooltipRenderUtil`

### Fields
- `public static final int MOUSE_OFFSET` (= 12)
- `private static final int PADDING` (= 3)
- `public static final int PADDING_LEFT` (= 3)
- `public static final int PADDING_RIGHT` (= 3)
- `public static final int PADDING_TOP` (= 3)
- `public static final int PADDING_BOTTOM` (= 3)
- `private static final int BACKGROUND_COLOR` (= -267386864)
- `private static final int BORDER_COLOR_TOP` (= 1347420415)
- `private static final int BORDER_COLOR_BOTTOM` (= 1344798847)

### Methods
- `public static void renderTooltipBackground(GuiGraphics p_282666_,  int p_281901_,  int p_281846_,  int p_281559_,  int p_283336_,  int p_283422_)`
- `public static void renderTooltipBackground(GuiGraphics p_282666_,  int p_281901_,  int p_281846_,  int p_281559_,  int p_283336_,  int p_283422_,  int backgroundTop,  int backgroundBottom,  int borderTop,  int borderBottom)`
- `private static void renderFrameGradient(GuiGraphics p_282000_,  int p_282055_,  int p_281580_,  int p_283284_,  int p_282599_,  int p_283432_,  int p_282907_,  int p_283153_)`
- `private static void renderVerticalLine(GuiGraphics p_281270_,  int p_281928_,  int p_281561_,  int p_283155_,  int p_282552_,  int p_282221_)`
- `private static void renderVerticalLineGradient(GuiGraphics p_282478_,  int p_282583_,  int p_283262_,  int p_283161_,  int p_283322_,  int p_282624_,  int p_282756_)`
- `private static void renderHorizontalLine(GuiGraphics p_282981_,  int p_282028_,  int p_282141_,  int p_281771_,  int p_282734_,  int p_281979_)`
- `@Deprecated private static void renderRectangle(GuiGraphics p_281392_,  int p_282294_,  int p_283353_,  int p_282640_,  int p_281964_,  int p_283211_,  int p_282349_)` (deprecated)
- `private static void renderRectangle(GuiGraphics p_281392_,  int p_282294_,  int p_283353_,  int p_282640_,  int p_281964_,  int p_283211_,  int p_282349_,  int colorTo)`
