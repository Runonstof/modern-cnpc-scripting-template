# net.minecraft.client.gui.components.debugchart

- [AbstractDebugChart](#abstractdebugchart)
- [BandwidthDebugChart](#bandwidthdebugchart)
- [FpsDebugChart](#fpsdebugchart)
- [PingDebugChart](#pingdebugchart)
- [TpsDebugChart](#tpsdebugchart)
## AbstractDebugChart

*class* `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`

### Fields
- `protected static final int COLOR_GREY` (= 14737632)
- `protected static final int CHART_HEIGHT` (= 60)
- `protected static final int LINE_WIDTH` (= 1)
- `protected final Font font`
- `protected final SampleLogger logger`

### Methods
- `public int getWidth(int p_300792_)`
- `public void drawChart(GuiGraphics p_300681_,  int p_298472_,  int p_298870_)`
- `protected void renderAdditionalLinesAndLabels(GuiGraphics p_300007_,  int p_299062_,  int p_300355_,  int p_297248_)`
- `protected void drawStringWithShade(GuiGraphics p_300760_,  String p_299957_,  int p_301259_,  int p_298524_)`
- `protected abstract String toDisplayString(double p_299846_)`
- `protected abstract int getSampleHeight(double p_298917_)`
- `protected abstract int getSampleColor(long p_301058_)`
- `protected int getSampleColor(double p_300651_,  double p_300082_,  int p_298618_,  double p_299706_,  int p_300095_,  double p_298068_,  int p_299403_)`

## BandwidthDebugChart

*class* `net.minecraft.client.gui.components.debugchart.BandwidthDebugChart`

### Fields
- `private static final int MIN_COLOR` (= -16711681)
- `private static final int MID_COLOR` (= -6250241)
- `private static final int MAX_COLOR` (= -65536)
- `private static final int KILOBYTE` (= 1024)
- `private static final int MEGABYTE` (= 1048576)
- `private static final int CHART_TOP_VALUE` (= 1048576)

### Inherited fields
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `CHART_HEIGHT`, `COLOR_GREY`, `font`, `LINE_WIDTH`, `logger`

### Methods
- `protected void renderAdditionalLinesAndLabels(GuiGraphics p_298580_,  int p_298671_,  int p_301018_,  int p_300317_)`
- `private void drawLabeledLineAtValue(GuiGraphics p_297903_,  int p_297652_,  int p_298530_,  int p_300952_,  int p_298161_)`
- `private void drawLineWithLabel(GuiGraphics p_298208_,  int p_300180_,  int p_297727_,  int p_299631_,  String p_301319_)`
- `protected String toDisplayString(double p_299768_)`
- `private static String toDisplayStringInternal(double p_299142_)`
- `protected int getSampleHeight(double p_299298_)`
- `private static int getSampleHeightInternal(double p_298407_)`
- `protected int getSampleColor(long p_297628_)`
- `private static double toBytesPerSecond(double p_298688_)`

### Inherited methods
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `drawChart`, `drawStringWithShade`, `getSampleColor`, `getWidth`

## FpsDebugChart

*class* `net.minecraft.client.gui.components.debugchart.FpsDebugChart`

### Fields
- `private static final int RED` (= -65536)
- `private static final int YELLOW` (= -256)
- `private static final int GREEN` (= -16711936)
- `private static final int CHART_TOP_FPS` (= 30)
- `private static final double CHART_TOP_VALUE` (= 33.333333333333336)

### Inherited fields
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `CHART_HEIGHT`, `COLOR_GREY`, `font`, `LINE_WIDTH`, `logger`

### Methods
- `protected void renderAdditionalLinesAndLabels(GuiGraphics p_298449_,  int p_300333_,  int p_297224_,  int p_301297_)`
- `protected String toDisplayString(double p_299977_)`
- `protected int getSampleHeight(double p_301167_)`
- `protected int getSampleColor(long p_299478_)`
- `private static double toMilliseconds(double p_301228_)`

### Inherited methods
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `drawChart`, `drawStringWithShade`, `getSampleColor`, `getWidth`

## PingDebugChart

*class* `net.minecraft.client.gui.components.debugchart.PingDebugChart`

### Fields
- `private static final int RED` (= -65536)
- `private static final int YELLOW` (= -256)
- `private static final int GREEN` (= -16711936)
- `private static final int CHART_TOP_VALUE` (= 500)

### Inherited fields
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `CHART_HEIGHT`, `COLOR_GREY`, `font`, `LINE_WIDTH`, `logger`

### Methods
- `protected void renderAdditionalLinesAndLabels(GuiGraphics p_298086_,  int p_300322_,  int p_299063_,  int p_299018_)`
- `protected String toDisplayString(double p_297770_)`
- `protected int getSampleHeight(double p_301040_)`
- `protected int getSampleColor(long p_299219_)`

### Inherited methods
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `drawChart`, `drawStringWithShade`, `getSampleColor`, `getWidth`

## TpsDebugChart

*class* `net.minecraft.client.gui.components.debugchart.TpsDebugChart`

### Fields
- `private static final int RED` (= -65536)
- `private static final int YELLOW` (= -256)
- `private static final int GREEN` (= -16711936)
- `private static final int CHART_TOP_VALUE` (= 50)

### Inherited fields
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `CHART_HEIGHT`, `COLOR_GREY`, `font`, `LINE_WIDTH`, `logger`

### Methods
- `protected void renderAdditionalLinesAndLabels(GuiGraphics p_297354_,  int p_298051_,  int p_298343_,  int p_299488_)`
- `protected String toDisplayString(double p_301254_)`
- `protected int getSampleHeight(double p_299260_)`
- `protected int getSampleColor(long p_300761_)`
- `private static double toMilliseconds(double p_300655_)`

### Inherited methods
- from `net.minecraft.client.gui.components.debugchart.AbstractDebugChart`: `drawChart`, `drawStringWithShade`, `getSampleColor`, `getWidth`
