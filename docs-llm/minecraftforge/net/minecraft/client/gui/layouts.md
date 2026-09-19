# net.minecraft.client.gui.layouts

- [AbstractLayout](#abstractlayout)
- [AbstractLayout.AbstractChildWrapper](#abstractlayout.abstractchildwrapper)
- [Class EqualSpacingLayout.Orientation](#class-equalspacinglayout.orientation)
- [Class LinearLayout.Orientation](#class-linearlayout.orientation)
- [CommonLayouts](#commonlayouts)
- [EqualSpacingLayout](#equalspacinglayout)
- [EqualSpacingLayout.ChildContainer](#equalspacinglayout.childcontainer)
- [FrameLayout](#framelayout)
- [FrameLayout.ChildContainer](#framelayout.childcontainer)
- [GridLayout](#gridlayout)
- [GridLayout.CellInhabitant](#gridlayout.cellinhabitant)
- [GridLayout.RowHelper](#gridlayout.rowhelper)
- [HeaderAndFooterLayout](#headerandfooterlayout)
- [Layout](#layout)
- [LayoutElement](#layoutelement)
- [LayoutSettings](#layoutsettings)
- [LayoutSettings.LayoutSettingsImpl](#layoutsettings.layoutsettingsimpl)
- [LinearLayout](#linearlayout)
- [SpacerElement](#spacerelement)
## AbstractLayout

*class* `net.minecraft.client.gui.layouts.AbstractLayout`

### Fields
- `private int x`
- `private int y`
- `protected int width`
- `protected int height`

### Methods
- `public void setX(int p_265701_)`
- `public void setY(int p_265155_)`
- `public int getX()`
- `public int getY()`
- `public int getWidth()`
- `public int getHeight()`

### Inherited methods
- from `net.minecraft.client.gui.layouts.Layout`: `arrangeElements`, `visitChildren`, `visitWidgets`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`

## AbstractLayout.AbstractChildWrapper

*class* `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`

Enclosing class: AbstractLayout

### Fields
- `public final LayoutElement child`
- `public final LayoutSettings.LayoutSettingsImpl layoutSettings`

### Methods
- `public int getHeight()`
- `public int getWidth()`
- `public void setX(int p_265766_,  int p_265689_)`
- `public void setY(int p_265384_,  int p_265375_)`

## Class EqualSpacingLayout.Orientation

*enum* `net.minecraft.client.gui.layouts.Class EqualSpacingLayout.Orientation`

Enclosing class: EqualSpacingLayout

### Methods
- `public static EqualSpacingLayout.Orientation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static EqualSpacingLayout.Orientation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `int getPrimaryLength(LayoutElement p_299718_)`
- `int getPrimaryLength(EqualSpacingLayout.ChildContainer p_298044_)`
- `int getSecondaryLength(LayoutElement p_301361_)`
- `int getSecondaryLength(EqualSpacingLayout.ChildContainer p_297317_)`
- `void setPrimaryPosition(EqualSpacingLayout.ChildContainer p_298745_,  int p_300763_)`
- `void setSecondaryPosition(EqualSpacingLayout.ChildContainer p_299676_,  int p_297698_,  int p_297461_)`
- `int getPrimaryPosition(LayoutElement p_299240_)`
- `int getSecondaryPosition(LayoutElement p_299036_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class LinearLayout.Orientation

*enum* `net.minecraft.client.gui.layouts.Class LinearLayout.Orientation`

Enclosing class: LinearLayout

### Methods
- `public static LinearLayout.Orientation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static LinearLayout.Orientation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `void setSpacing(GridLayout p_299858_,  int p_299775_)`
- `public <T extends LayoutElement> T addChild(GridLayout p_298633_,  T p_297548_,  int p_300692_,  LayoutSettings p_298693_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CommonLayouts

*class* `net.minecraft.client.gui.layouts.CommonLayouts`

### Fields
- `private static final int LABEL_SPACING` (= 4)

### Methods
- `public static Layout labeledElement(Font p_300569_,  LayoutElement p_299110_,  Component p_297847_)`
- `public static Layout labeledElement(Font p_298072_,  LayoutElement p_300669_,  Component p_298837_,  Consumer<LayoutSettings> p_301252_)`

## EqualSpacingLayout

*class* `net.minecraft.client.gui.layouts.EqualSpacingLayout`

### Fields
- `private final EqualSpacingLayout.Orientation orientation`
- `private final List<EqualSpacingLayout.ChildContainer> children`
- `private final LayoutSettings defaultChildLayoutSettings`

### Inherited fields
- from `net.minecraft.client.gui.layouts.AbstractLayout`: `height`, `width`

### Methods
- `public void arrangeElements()`
- `public void visitChildren(Consumer<LayoutElement> p_299750_)`
- `public LayoutSettings newChildLayoutSettings()`
- `public LayoutSettings defaultChildLayoutSetting()`
- `public <T extends LayoutElement> T addChild(T p_301351_)`
- `public <T extends LayoutElement> T addChild(T p_299596_,  LayoutSettings p_301383_)`
- `public <T extends LayoutElement> T addChild(T p_298517_,  Consumer<LayoutSettings> p_297917_)`

### Inherited methods
- from `net.minecraft.client.gui.layouts.AbstractLayout`: `getHeight`, `getWidth`, `getX`, `getY`, `setX`, `setY`
- from `net.minecraft.client.gui.layouts.Layout`: `visitWidgets`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`

## EqualSpacingLayout.ChildContainer

*class* `net.minecraft.client.gui.layouts.EqualSpacingLayout.ChildContainer`

Enclosing class: EqualSpacingLayout

### Inherited fields
- from `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`: `child`, `layoutSettings`

### Inherited methods
- from `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`: `getHeight`, `getWidth`, `setX`, `setY`

## FrameLayout

*class* `net.minecraft.client.gui.layouts.FrameLayout`

### Fields
- `private final List<FrameLayout.ChildContainer> children`
- `private int minWidth`
- `private int minHeight`
- `private final LayoutSettings defaultChildLayoutSettings`

### Inherited fields
- from `net.minecraft.client.gui.layouts.AbstractLayout`: `height`, `width`

### Methods
- `public FrameLayout setMinDimensions(int p_265169_,  int p_265616_)`
- `public FrameLayout setMinHeight(int p_265646_)`
- `public FrameLayout setMinWidth(int p_265764_)`
- `public LayoutSettings newChildLayoutSettings()`
- `public LayoutSettings defaultChildLayoutSetting()`
- `public void arrangeElements()`
- `public <T extends LayoutElement> T addChild(T p_265071_)`
- `public <T extends LayoutElement> T addChild(T p_265386_,  LayoutSettings p_265532_)`
- `public <T extends LayoutElement> T addChild(T p_298612_,  Consumer<LayoutSettings> p_301357_)`
- `public void visitChildren(Consumer<LayoutElement> p_265070_)`
- `public static void centerInRectangle(LayoutElement p_265197_,  int p_265518_,  int p_265334_,  int p_265540_,  int p_265632_)`
- `public static void centerInRectangle(LayoutElement p_268229_,  ScreenRectangle p_268113_)`
- `public static void alignInRectangle(LayoutElement p_275320_,  ScreenRectangle p_275389_,  float p_275607_,  float p_275662_)`
- `public static void alignInRectangle(LayoutElement p_265662_,  int p_265497_,  int p_265030_,  int p_265535_,  int p_265427_,  float p_265271_,  float p_265365_)`
- `public static void alignInDimension(int p_265164_,  int p_265100_,  int p_265351_,  Consumer<Integer> p_265614_,  float p_265428_)`

### Inherited methods
- from `net.minecraft.client.gui.layouts.AbstractLayout`: `getHeight`, `getWidth`, `getX`, `getY`, `setX`, `setY`
- from `net.minecraft.client.gui.layouts.Layout`: `visitWidgets`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`

## FrameLayout.ChildContainer

*class* `net.minecraft.client.gui.layouts.FrameLayout.ChildContainer`

Enclosing class: FrameLayout

### Inherited fields
- from `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`: `child`, `layoutSettings`

### Inherited methods
- from `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`: `getHeight`, `getWidth`, `setX`, `setY`

## GridLayout

*class* `net.minecraft.client.gui.layouts.GridLayout`

### Fields
- `private final List<LayoutElement> children`
- `private final List<GridLayout.CellInhabitant> cellInhabitants`
- `private final LayoutSettings defaultCellSettings`
- `private int rowSpacing`
- `private int columnSpacing`

### Inherited fields
- from `net.minecraft.client.gui.layouts.AbstractLayout`: `height`, `width`

### Methods
- `public void arrangeElements()`
- `public <T extends LayoutElement> T addChild(T p_265485_,  int p_265720_,  int p_265679_)`
- `public <T extends LayoutElement> T addChild(T p_265061_,  int p_265080_,  int p_265105_,  LayoutSettings p_265057_)`
- `public <T extends LayoutElement> T addChild(T p_297804_,  int p_298357_,  int p_300223_,  Consumer<LayoutSettings> p_299636_)`
- `public <T extends LayoutElement> T addChild(T p_265590_,  int p_265556_,  int p_265323_,  int p_265531_,  int p_265352_)`
- `public <T extends LayoutElement> T addChild(T p_265031_,  int p_265582_,  int p_265782_,  int p_265612_,  int p_265448_,  LayoutSettings p_265579_)`
- `public <T extends LayoutElement> T addChild(T p_299753_,  int p_298560_,  int p_297873_,  int p_297702_,  int p_298330_,  Consumer<LayoutSettings> p_301225_)`
- `public GridLayout columnSpacing(int p_268135_)`
- `public GridLayout rowSpacing(int p_268237_)`
- `public GridLayout spacing(int p_268351_)`
- `public void visitChildren(Consumer<LayoutElement> p_265389_)`
- `public LayoutSettings newCellSettings()`
- `public LayoutSettings defaultCellSetting()`
- `public GridLayout.RowHelper createRowHelper(int p_265327_)`

### Inherited methods
- from `net.minecraft.client.gui.layouts.AbstractLayout`: `getHeight`, `getWidth`, `getX`, `getY`, `setX`, `setY`
- from `net.minecraft.client.gui.layouts.Layout`: `visitWidgets`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`

## GridLayout.CellInhabitant

*class* `net.minecraft.client.gui.layouts.GridLayout.CellInhabitant`

Enclosing class: GridLayout

### Fields
- `final int row`
- `final int column`
- `final int occupiedRows`
- `final int occupiedColumns`

### Inherited fields
- from `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`: `child`, `layoutSettings`

### Methods
- `public int getLastOccupiedRow()`
- `public int getLastOccupiedColumn()`

### Inherited methods
- from `net.minecraft.client.gui.layouts.AbstractLayout.AbstractChildWrapper`: `getHeight`, `getWidth`, `setX`, `setY`

## GridLayout.RowHelper

*class* `net.minecraft.client.gui.layouts.GridLayout.RowHelper`

Enclosing class: GridLayout

### Fields
- `private final int columns`
- `private int index`

### Methods
- `public <T extends LayoutElement> T addChild(T p_265455_)`
- `public <T extends LayoutElement> T addChild(T p_265413_,  int p_265491_)`
- `public <T extends LayoutElement> T addChild(T p_265411_,  LayoutSettings p_265755_)`
- `public <T extends LayoutElement> T addChild(T p_265200_,  int p_265044_,  LayoutSettings p_265797_)`
- `public GridLayout getGrid()`
- `public LayoutSettings newCellSettings()`
- `public LayoutSettings defaultCellSetting()`

## HeaderAndFooterLayout

*class* `net.minecraft.client.gui.layouts.HeaderAndFooterLayout`

### Fields
- `public static final int DEFAULT_HEADER_AND_FOOTER_HEIGHT` (= 36)
- `private static final int CONTENT_MARGIN_TOP` (= 30)
- `private final FrameLayout headerFrame`
- `private final FrameLayout footerFrame`
- `private final FrameLayout contentsFrame`
- `private final Screen screen`
- `private int headerHeight`
- `private int footerHeight`

### Methods
- `public void setX(int p_270309_)`
- `public void setY(int p_270318_)`
- `public int getX()`
- `public int getY()`
- `public int getWidth()`
- `public int getHeight()`
- `public int getFooterHeight()`
- `public void setFooterHeight(int p_270260_)`
- `public void setHeaderHeight(int p_270135_)`
- `public int getHeaderHeight()`
- `public void visitChildren(Consumer<LayoutElement> p_270213_)`
- `public void arrangeElements()`
- `public <T extends LayoutElement> T addToHeader(T p_270636_)`
- `public <T extends LayoutElement> T addToHeader(T p_270870_,  Consumer<LayoutSettings> p_300314_)`
- `public <T extends LayoutElement> T addToFooter(T p_270951_)`
- `public <T extends LayoutElement> T addToFooter(T p_270362_,  Consumer<LayoutSettings> p_301265_)`
- `public <T extends LayoutElement> T addToContents(T p_270895_)`
- `public <T extends LayoutElement> T addToContents(T p_270611_,  Consumer<LayoutSettings> p_299569_)`

### Inherited methods
- from `net.minecraft.client.gui.layouts.Layout`: `visitWidgets`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`

## Layout

*interface* `net.minecraft.client.gui.layouts.Layout`

All Superinterfaces: LayoutElement

### Methods
- `void visitChildren(Consumer<LayoutElement> p_270255_)`
- `default void visitWidgets(Consumer<AbstractWidget> p_270962_)`
- `default void arrangeElements()`

### Inherited methods
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getHeight`, `getRectangle`, `getWidth`, `getX`, `getY`, `setPosition`, `setX`, `setY`

## LayoutElement

*interface* `net.minecraft.client.gui.layouts.LayoutElement`

### Methods
- `void setX(int p_265236_)`
- `void setY(int p_265404_)`
- `int getX()`
- `int getY()`
- `int getWidth()`
- `int getHeight()`
- `default ScreenRectangle getRectangle()`
- `default void setPosition(int p_265617_,  int p_265577_)`
- `void visitWidgets(Consumer<AbstractWidget> p_265082_)`

## LayoutSettings

*interface* `net.minecraft.client.gui.layouts.LayoutSettings`

### Methods
- `LayoutSettings padding(int p_265143_)`
- `LayoutSettings padding(int p_265473_,  int p_265776_)`
- `LayoutSettings padding(int p_265186_,  int p_265177_,  int p_265631_,  int p_265369_)`
- `LayoutSettings paddingLeft(int p_265709_)`
- `LayoutSettings paddingTop(int p_265644_)`
- `LayoutSettings paddingRight(int p_265608_)`
- `LayoutSettings paddingBottom(int p_265758_)`
- `LayoutSettings paddingHorizontal(int p_265366_)`
- `LayoutSettings paddingVertical(int p_265142_)`
- `LayoutSettings align(float p_265408_,  float p_265269_)`
- `LayoutSettings alignHorizontally(float p_265729_)`
- `LayoutSettings alignVertically(float p_265557_)`
- `default LayoutSettings alignHorizontallyLeft()`
- `default LayoutSettings alignHorizontallyCenter()`
- `default LayoutSettings alignHorizontallyRight()`
- `default LayoutSettings alignVerticallyTop()`
- `default LayoutSettings alignVerticallyMiddle()`
- `default LayoutSettings alignVerticallyBottom()`
- `LayoutSettings copy()`
- `LayoutSettings.LayoutSettingsImpl getExposed()`
- `static LayoutSettings defaults()`

## LayoutSettings.LayoutSettingsImpl

*class* `net.minecraft.client.gui.layouts.LayoutSettings.LayoutSettingsImpl`

Enclosing interface: LayoutSettings

### Fields
- `public int paddingLeft`
- `public int paddingTop`
- `public int paddingRight`
- `public int paddingBottom`
- `public float xAlignment`
- `public float yAlignment`

### Methods
- `public LayoutSettings.LayoutSettingsImpl padding(int p_265467_)`
- `public LayoutSettings.LayoutSettingsImpl padding(int p_265284_,  int p_265730_)`
- `public LayoutSettings.LayoutSettingsImpl padding(int p_265241_,  int p_265325_,  int p_265634_,  int p_265174_)`
- `public LayoutSettings.LayoutSettingsImpl paddingLeft(int p_265137_)`
- `public LayoutSettings.LayoutSettingsImpl paddingTop(int p_265512_)`
- `public LayoutSettings.LayoutSettingsImpl paddingRight(int p_265595_)`
- `public LayoutSettings.LayoutSettingsImpl paddingBottom(int p_265336_)`
- `public LayoutSettings.LayoutSettingsImpl paddingHorizontal(int p_265592_)`
- `public LayoutSettings.LayoutSettingsImpl paddingVertical(int p_265151_)`
- `public LayoutSettings.LayoutSettingsImpl align(float p_265459_,  float p_265051_)`
- `public LayoutSettings.LayoutSettingsImpl alignHorizontally(float p_265331_)`
- `public LayoutSettings.LayoutSettingsImpl alignVertically(float p_265657_)`
- `public LayoutSettings.LayoutSettingsImpl copy()`
- `public LayoutSettings.LayoutSettingsImpl getExposed()`

### Inherited methods
- from `net.minecraft.client.gui.layouts.LayoutSettings`: `alignHorizontallyCenter`, `alignHorizontallyLeft`, `alignHorizontallyRight`, `alignVerticallyBottom`, `alignVerticallyMiddle`, `alignVerticallyTop`

## LinearLayout

*class* `net.minecraft.client.gui.layouts.LinearLayout`

### Fields
- `private final GridLayout wrapped`
- `private final LinearLayout.Orientation orientation`
- `private int nextChildIndex`

### Methods
- `public LinearLayout spacing(int p_298391_)`
- `public LayoutSettings newCellSettings()`
- `public LayoutSettings defaultCellSetting()`
- `public <T extends LayoutElement> T addChild(T p_265475_,  LayoutSettings p_265684_)`
- `public <T extends LayoutElement> T addChild(T p_265140_)`
- `public <T extends LayoutElement> T addChild(T p_300762_,  Consumer<LayoutSettings> p_300497_)`
- `public void visitChildren(Consumer<LayoutElement> p_265508_)`
- `public void arrangeElements()`
- `public int getWidth()`
- `public int getHeight()`
- `public void setX(int p_297321_)`
- `public void setY(int p_299381_)`
- `public int getX()`
- `public int getY()`
- `public static LinearLayout vertical()`
- `public static LinearLayout horizontal()`

### Inherited methods
- from `net.minecraft.client.gui.layouts.Layout`: `visitWidgets`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`

## SpacerElement

*class* `net.minecraft.client.gui.layouts.SpacerElement`

### Fields
- `private int x`
- `private int y`
- `private final int width`
- `private final int height`

### Methods
- `public static SpacerElement width(int p_265056_)`
- `public static SpacerElement height(int p_265087_)`
- `public void setX(int p_265605_)`
- `public void setY(int p_265406_)`
- `public int getX()`
- `public int getY()`
- `public int getWidth()`
- `public int getHeight()`
- `public void visitWidgets(Consumer<AbstractWidget> p_265477_)`

### Inherited methods
- from `net.minecraft.client.gui.layouts.LayoutElement`: `getRectangle`, `setPosition`
