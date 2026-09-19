# net.minecraft.client.gui.advancements

- [AdvancementState](#advancementstate)
- [GuiAdvancement](#guiadvancement)
- [GuiAdvancementTab](#guiadvancementtab)
- [GuiScreenAdvancements](#guiscreenadvancements)
## AdvancementState

*enum* `net.minecraft.client.gui.advancements.AdvancementState`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<AdvancementState>

### Fields
- `public static final AdvancementState OBTAINED`
- `public static final AdvancementState UNOBTAINED`

### Methods
- `public static AdvancementState[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (AdvancementState c : AdvancementState.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static AdvancementState valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public int getId()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## GuiAdvancement

*class* `net.minecraft.client.gui.advancements.GuiAdvancement`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawConnectivity(int p_191819_1_,  int p_191819_2_,  boolean p_191819_3_)`
- `public void draw(int p_191817_1_,  int p_191817_2_)`
- `public void getAdvancementProgress(AdvancementProgress advancementProgressIn)`
- `public void addGuiAdvancement(GuiAdvancement guiAdvancementIn)`
- `public void drawHover(int p_191821_1_,  int p_191821_2_,  float p_191821_3_,  int p_191821_4_,  int p_191821_5_)`
- `protected void render9Sprite(int p_192994_1_,  int p_192994_2_,  int p_192994_3_,  int p_192994_4_,  int p_192994_5_,  int p_192994_6_,  int p_192994_7_,  int p_192994_8_,  int p_192994_9_)`
- `protected void renderRepeating(int p_192993_1_,  int p_192993_2_,  int p_192993_3_,  int p_192993_4_,  int p_192993_5_,  int p_192993_6_,  int p_192993_7_,  int p_192993_8_)`
- `public boolean isMouseOver(int p_191816_1_,  int p_191816_2_,  int p_191816_3_,  int p_191816_4_)`
- `public void attachToParent()`
- `public int getY()`
- `public int getX()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiAdvancementTab

*class* `net.minecraft.client.gui.advancements.GuiAdvancementTab`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public Advancement getAdvancement()`
- `public java.lang.String getTitle()`
- `public void drawTab(int p_191798_1_,  int p_191798_2_,  boolean p_191798_3_)`
- `public void drawIcon(int p_191796_1_,  int p_191796_2_,  RenderItem p_191796_3_)`
- `public void drawContents()`
- `public void drawToolTips(int p_192991_1_,  int p_192991_2_,  int p_192991_3_,  int p_192991_4_)`
- `public boolean isMouseOver(int p_191793_1_,  int p_191793_2_,  int p_191793_3_,  int p_191793_4_)`
- `public static GuiAdvancementTab create(Minecraft p_193936_0_,  GuiScreenAdvancements p_193936_1_,  int p_193936_2_,  Advancement p_193936_3_)`
- `public void scroll(int p_191797_1_,  int p_191797_2_)`
- `public void addAdvancement(Advancement p_191800_1_)`
- `public GuiAdvancement getAdvancementGui(Advancement p_191794_1_)`
- `public GuiScreenAdvancements getScreen()`
- `public int getPage()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## GuiScreenAdvancements

*class* `net.minecraft.client.gui.advancements.GuiScreenAdvancements`

All Implemented Interfaces: AdvancementList.Listener, GuiYesNoCallback, ClientAdvancementManager.IListener

### Inherited fields
- from `net.minecraft.client.gui.GuiScreen`: `allowUserInput`, `buttonList`, `fontRenderer`, `height`, `itemRender`, `keyHandled`, `labelList`, `mc`, `mouseHandled`, `selectedButton`, `width`
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void initGui()`
- `public void onGuiClosed()`
- `protected void mouseClicked(int mouseX,  int mouseY,  int mouseButton)  throws java.io.IOException`
  - throws: java.io.IOException
- `protected void keyTyped(char typedChar,  int keyCode)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void drawScreen(int mouseX,  int mouseY,  float partialTicks)`
- `public void renderWindow(int p_191934_1_,  int p_191934_2_)`
- `public void rootAdvancementAdded(Advancement advancementIn)`
- `public void rootAdvancementRemoved(Advancement advancementIn)`
- `public void nonRootAdvancementAdded(Advancement advancementIn)`
- `public void nonRootAdvancementRemoved(Advancement advancementIn)`
- `public void onUpdateAdvancementProgress(Advancement p_191933_1_,  AdvancementProgress p_191933_2_)`
- `public void setSelectedTab(Advancement p_193982_1_)`
- `public void advancementsCleared()`
- `public GuiAdvancement getAdvancementGui(Advancement p_191938_1_)`
- `protected void actionPerformed(GuiButton button)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.client.gui.GuiScreen`: `addButton`, `confirmClicked`, `doesGuiPauseGame`, `drawBackground`, `drawDefaultBackground`, `drawHoveringText`, `drawHoveringText`, `drawHoveringText`, `drawWorldBackground`, `getClipboardString`, `getItemToolTip`, `handleComponentClick`, `handleComponentHover`, `handleInput`, `handleKeyboardInput`, `handleMouseInput`, `isAltKeyDown`, `isCtrlKeyDown`, `isFocused`, `isKeyComboCtrlA`, `isKeyComboCtrlC`, `isKeyComboCtrlV`, `isKeyComboCtrlX`, `isShiftKeyDown`, `mouseClickMove`, `mouseReleased`, `onResize`, `renderToolTip`, `sendChatMessage`, `sendChatMessage`, `setClipboardString`, `setFocused`, `setGuiSize`, `setText`, `setWorldAndResolution`, `updateScreen`
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`
