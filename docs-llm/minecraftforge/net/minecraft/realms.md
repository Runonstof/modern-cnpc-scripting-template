# net.minecraft.realms

- [DisconnectedRealmsScreen](#disconnectedrealmsscreen)
- [Realms](#realms)
- [RealmsAnvilLevelStorageSource](#realmsanvillevelstoragesource)
- [RealmsBridge](#realmsbridge)
- [RealmsBufferBuilder](#realmsbufferbuilder)
- [RealmsButton](#realmsbutton)
- [RealmsClickableScrolledSelectionList](#realmsclickablescrolledselectionlist)
- [RealmsConnect](#realmsconnect)
- [RealmsDefaultVertexFormat](#realmsdefaultvertexformat)
- [RealmsEditBox](#realmseditbox)
- [RealmsLevelSummary](#realmslevelsummary)
- [RealmsMth](#realmsmth)
- [RealmsScreen](#realmsscreen)
- [RealmsScrolledSelectionList](#realmsscrolledselectionlist)
- [RealmsServerAddress](#realmsserveraddress)
- [RealmsSharedConstants](#realmssharedconstants)
- [RealmsSimpleScrolledSelectionList](#realmssimplescrolledselectionlist)
- [RealmsSliderButton](#realmssliderbutton)
- [RealmsVertexFormat](#realmsvertexformat)
- [RealmsVertexFormatElement](#realmsvertexformatelement)
- [Tezzelator](#tezzelator)
## DisconnectedRealmsScreen

*class* `net.minecraft.realms.DisconnectedRealmsScreen`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `height`, `minecraft`, `SKIN_HAT_HEIGHT`, `SKIN_HAT_U`, `SKIN_HAT_V`, `SKIN_HAT_WIDTH`, `SKIN_HEAD_HEIGHT`, `SKIN_HEAD_U`, `SKIN_HEAD_V`, `SKIN_HEAD_WIDTH`, `SKIN_TEX_HEIGHT`, `SKIN_TEX_WIDTH`, `width`

### Methods
- `public void init()`
- `public void keyPressed(char p_keyPressed_1_,  int p_keyPressed_2_)`
- `public void buttonClicked(RealmsButton p_buttonClicked_1_)`
- `public void render(int p_render_1_,  int p_render_2_,  float p_render_3_)`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `bind`, `bindFace`, `blit`, `blit`, `blit`, `buttons`, `buttonsAdd`, `buttonsClear`, `buttonsRemove`, `confirmResult`, `drawCenteredString`, `drawString`, `drawString`, `fillGradient`, `fontDrawShadow`, `fontLineHeight`, `fontSplit`, `fontWidth`, `getLevelStorageSource`, `getLocalizedString`, `getLocalizedString`, `getProxy`, `height`, `init`, `isPauseScreen`, `keyboardEvent`, `mouseClicked`, `mouseDragged`, `mouseEvent`, `mouseReleased`, `newButton`, `newButton`, `newEditBox`, `removed`, `renderBackground`, `renderBackground`, `renderTooltip`, `renderTooltip`, `renderTooltip`, `tick`, `width`

## Realms

*class* `net.minecraft.realms.Realms`

### Methods
- `public static boolean isTouchScreen()`
- `public static java.net.Proxy getProxy()`
- `public static java.lang.String sessionId()`
- `public static java.lang.String userName()`
- `public static long currentTimeMillis()`
- `public static java.lang.String getSessionId()`
- `public static java.lang.String getUUID()`
- `public static java.lang.String getName()`
- `public static java.lang.String uuidToName(java.lang.String p_uuidToName_0_)`
- `public static void setScreen(RealmsScreen p_setScreen_0_)`
- `public static java.lang.String getGameDirectoryPath()`
- `public static int survivalId()`
- `public static int creativeId()`
- `public static int adventureId()`
- `public static int spectatorId()`
- `public static void setConnectedToRealms(boolean p_setConnectedToRealms_0_)`
- `public static <any> downloadResourcePack(java.lang.String p_downloadResourcePack_0_,  java.lang.String p_downloadResourcePack_1_)`
- `public static void clearResourcePack()`
- `public static boolean getRealmsNotificationsEnabled()`
- `public static boolean inTitleScreen()`
- `public static void deletePlayerTag(java.io.File p_deletePlayerTag_0_)`

## RealmsAnvilLevelStorageSource

*class* `net.minecraft.realms.RealmsAnvilLevelStorageSource`

### Methods
- `public java.lang.String getName()`
- `public boolean levelExists(java.lang.String p_levelExists_1_)`
- `public boolean convertLevel(java.lang.String p_convertLevel_1_,  IProgressUpdate p_convertLevel_2_)`
- `public boolean requiresConversion(java.lang.String p_requiresConversion_1_)`
- `public boolean isNewLevelIdAcceptable(java.lang.String p_isNewLevelIdAcceptable_1_)`
- `public boolean deleteLevel(java.lang.String p_deleteLevel_1_)`
- `public boolean isConvertible(java.lang.String p_isConvertible_1_)`
- `public void renameLevel(java.lang.String p_renameLevel_1_,  java.lang.String p_renameLevel_2_)`
- `public void clearAll()`
- `public java.util.List<RealmsLevelSummary> getLevelList()  throws AnvilConverterException`
  - throws: AnvilConverterException

## RealmsBridge

*class* `net.minecraft.realms.RealmsBridge`

### Inherited fields
- from `net.minecraft.realms.RealmsScreen`: `height`, `minecraft`, `SKIN_HAT_HEIGHT`, `SKIN_HAT_U`, `SKIN_HAT_V`, `SKIN_HAT_WIDTH`, `SKIN_HEAD_HEIGHT`, `SKIN_HEAD_U`, `SKIN_HEAD_V`, `SKIN_HEAD_WIDTH`, `SKIN_TEX_HEIGHT`, `SKIN_TEX_WIDTH`, `width`

### Methods
- `public void switchToRealms(GuiScreen p_switchToRealms_1_)`
- `public GuiScreenRealmsProxy getNotificationScreen(GuiScreen p_getNotificationScreen_1_)`
- `public void init()`

### Inherited methods
- from `net.minecraft.realms.RealmsScreen`: `bind`, `bindFace`, `blit`, `blit`, `blit`, `buttonClicked`, `buttons`, `buttonsAdd`, `buttonsClear`, `buttonsRemove`, `confirmResult`, `drawCenteredString`, `drawString`, `drawString`, `fillGradient`, `fontDrawShadow`, `fontLineHeight`, `fontSplit`, `fontWidth`, `getLevelStorageSource`, `getLocalizedString`, `getLocalizedString`, `getProxy`, `height`, `init`, `isPauseScreen`, `keyboardEvent`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseEvent`, `mouseReleased`, `newButton`, `newButton`, `newEditBox`, `removed`, `render`, `renderBackground`, `renderBackground`, `renderTooltip`, `renderTooltip`, `renderTooltip`, `tick`, `width`

## RealmsBufferBuilder

*class* `net.minecraft.realms.RealmsBufferBuilder`

### Methods
- `public RealmsBufferBuilder from(BufferBuilder p_from_1_)`
- `public void sortQuads(float p_sortQuads_1_,  float p_sortQuads_2_,  float p_sortQuads_3_)`
- `public void fixupQuadColor(int p_fixupQuadColor_1_)`
- `public java.nio.ByteBuffer getBuffer()`
- `public void postNormal(float p_postNormal_1_,  float p_postNormal_2_,  float p_postNormal_3_)`
- `public int getDrawMode()`
- `public void offset(double p_offset_1_,  double p_offset_3_,  double p_offset_5_)`
- `public void restoreState(BufferBuilder.State p_restoreState_1_)`
- `public void endVertex()`
- `public RealmsBufferBuilder normal(float p_normal_1_,  float p_normal_2_,  float p_normal_3_)`
- `public void end()`
- `public void begin(int p_begin_1_,  VertexFormat p_begin_2_)`
- `public RealmsBufferBuilder color(int p_color_1_,  int p_color_2_,  int p_color_3_,  int p_color_4_)`
- `public void faceTex2(int p_faceTex2_1_,  int p_faceTex2_2_,  int p_faceTex2_3_,  int p_faceTex2_4_)`
- `public void postProcessFacePosition(double p_postProcessFacePosition_1_,  double p_postProcessFacePosition_3_,  double p_postProcessFacePosition_5_)`
- `public void fixupVertexColor(float p_fixupVertexColor_1_,  float p_fixupVertexColor_2_,  float p_fixupVertexColor_3_,  int p_fixupVertexColor_4_)`
- `public RealmsBufferBuilder color(float p_color_1_,  float p_color_2_,  float p_color_3_,  float p_color_4_)`
- `public RealmsVertexFormat getVertexFormat()`
- `public void faceTint(float p_faceTint_1_,  float p_faceTint_2_,  float p_faceTint_3_,  int p_faceTint_4_)`
- `public RealmsBufferBuilder tex2(int p_tex2_1_,  int p_tex2_2_)`
- `public void putBulkData(int[] p_putBulkData_1_)`
- `public RealmsBufferBuilder tex(double p_tex_1_,  double p_tex_3_)`
- `public int getVertexCount()`
- `public void clear()`
- `public RealmsBufferBuilder vertex(double p_vertex_1_,  double p_vertex_3_,  double p_vertex_5_)`
- `public void fixupQuadColor(float p_fixupQuadColor_1_,  float p_fixupQuadColor_2_,  float p_fixupQuadColor_3_)`
- `public void noColor()`

## RealmsButton

*class* `net.minecraft.realms.RealmsButton`

### Fields
- `protected static final ResourceLocation WIDGETS_LOCATION`

### Methods
- `public GuiButton getProxy()`
- `public int id()`
- `public boolean active()`
- `public void active(boolean p_active_1_)`
- `public void msg(java.lang.String p_msg_1_)`
- `public int getWidth()`
- `public int getHeight()`
- `public int y()`
- `public void render(int p_render_1_,  int p_render_2_,  float p_render_3_)`
- `public void clicked(int p_clicked_1_,  int p_clicked_2_)`
- `public void released(int p_released_1_,  int p_released_2_)`
- `public void blit(int p_blit_1_,  int p_blit_2_,  int p_blit_3_,  int p_blit_4_,  int p_blit_5_,  int p_blit_6_)`
- `public void renderBg(int p_renderBg_1_,  int p_renderBg_2_)`
- `public int getYImage(boolean p_getYImage_1_)`

## RealmsClickableScrolledSelectionList

*class* `net.minecraft.realms.RealmsClickableScrolledSelectionList`

### Methods
- `public void render(int p_render_1_,  int p_render_2_,  float p_render_3_)`
- `public int width()`
- `public int ym()`
- `public int xm()`
- `protected void renderItem(int p_renderItem_1_,  int p_renderItem_2_,  int p_renderItem_3_,  int p_renderItem_4_,  Tezzelator p_renderItem_5_,  int p_renderItem_6_,  int p_renderItem_7_)`
- `public void renderItem(int p_renderItem_1_,  int p_renderItem_2_,  int p_renderItem_3_,  int p_renderItem_4_,  int p_renderItem_5_,  int p_renderItem_6_)`
- `public int getItemCount()`
- `public void selectItem(int p_selectItem_1_,  boolean p_selectItem_2_,  int p_selectItem_3_,  int p_selectItem_4_)`
- `public boolean isSelectedItem(int p_isSelectedItem_1_)`
- `public void renderBackground()`
- `public int getMaxPosition()`
- `public int getScrollbarPosition()`
- `public void mouseEvent()`
- `public void customMouseEvent(int p_customMouseEvent_1_,  int p_customMouseEvent_2_,  int p_customMouseEvent_3_,  float p_customMouseEvent_4_,  int p_customMouseEvent_5_)`
- `public void scroll(int p_scroll_1_)`
- `public int getScroll()`
- `protected void renderList(int p_renderList_1_,  int p_renderList_2_,  int p_renderList_3_,  int p_renderList_4_)`
- `public void itemClicked(int p_itemClicked_1_,  int p_itemClicked_2_,  int p_itemClicked_3_,  int p_itemClicked_4_,  int p_itemClicked_5_)`
- `public void renderSelected(int p_renderSelected_1_,  int p_renderSelected_2_,  int p_renderSelected_3_,  Tezzelator p_renderSelected_4_)`
- `public void setLeftPos(int p_setLeftPos_1_)`

## RealmsConnect

*class* `net.minecraft.realms.RealmsConnect`

### Methods
- `public void connect(java.lang.String p_connect_1_,  int p_connect_2_)`
- `public void abort()`
- `public void tick()`

## RealmsDefaultVertexFormat

*class* `net.minecraft.realms.RealmsDefaultVertexFormat`

### Fields
- `public static final RealmsVertexFormat BLOCK`
- `public static final RealmsVertexFormat BLOCK_NORMALS`
- `public static final RealmsVertexFormat ENTITY`
- `public static final RealmsVertexFormat PARTICLE`
- `public static final RealmsVertexFormat POSITION`
- `public static final RealmsVertexFormat POSITION_COLOR`
- `public static final RealmsVertexFormat POSITION_TEX`
- `public static final RealmsVertexFormat POSITION_NORMAL`
- `public static final RealmsVertexFormat POSITION_TEX_COLOR`
- `public static final RealmsVertexFormat POSITION_TEX_NORMAL`
- `public static final RealmsVertexFormat POSITION_TEX2_COLOR`
- `public static final RealmsVertexFormat POSITION_TEX_COLOR_NORMAL`
- `public static final RealmsVertexFormatElement ELEMENT_POSITION`
- `public static final RealmsVertexFormatElement ELEMENT_COLOR`
- `public static final RealmsVertexFormatElement ELEMENT_UV0`
- `public static final RealmsVertexFormatElement ELEMENT_UV1`
- `public static final RealmsVertexFormatElement ELEMENT_NORMAL`
- `public static final RealmsVertexFormatElement ELEMENT_PADDING`

## RealmsEditBox

*class* `net.minecraft.realms.RealmsEditBox`

### Methods
- `public java.lang.String getValue()`
- `public void tick()`
- `public void setFocus(boolean p_setFocus_1_)`
- `public void setValue(java.lang.String p_setValue_1_)`
- `public void keyPressed(char p_keyPressed_1_,  int p_keyPressed_2_)`
- `public boolean isFocused()`
- `public void mouseClicked(int p_mouseClicked_1_,  int p_mouseClicked_2_,  int p_mouseClicked_3_)`
- `public void render()`
- `public void setMaxLength(int p_setMaxLength_1_)`
- `public void setIsEditable(boolean p_setIsEditable_1_)`

## RealmsLevelSummary

*class* `net.minecraft.realms.RealmsLevelSummary`

All Implemented Interfaces: java.lang.Comparable<RealmsLevelSummary>

### Methods
- `public int getGameMode()`
- `public java.lang.String getLevelId()`
- `public boolean hasCheats()`
- `public boolean isHardcore()`
- `public boolean isRequiresConversion()`
- `public java.lang.String getLevelName()`
- `public long getLastPlayed()`
- `public int compareTo(WorldSummary p_compareTo_1_)`
- `public long getSizeOnDisk()`
- `public int compareTo(RealmsLevelSummary p_compareTo_1_)`

## RealmsMth

*class* `net.minecraft.realms.RealmsMth`

### Methods
- `public static float sin(float p_sin_0_)`
- `public static double nextDouble(java.util.Random p_nextDouble_0_,  double p_nextDouble_1_,  double p_nextDouble_3_)`
- `public static int ceil(float p_ceil_0_)`
- `public static int floor(double p_floor_0_)`
- `public static int intFloorDiv(int p_intFloorDiv_0_,  int p_intFloorDiv_1_)`
- `public static float abs(float p_abs_0_)`
- `public static int clamp(int p_clamp_0_,  int p_clamp_1_,  int p_clamp_2_)`
- `public static double clampedLerp(double p_clampedLerp_0_,  double p_clampedLerp_2_,  double p_clampedLerp_4_)`
- `public static int ceil(double p_ceil_0_)`
- `public static boolean isEmpty(java.lang.String p_isEmpty_0_)`
- `public static long lfloor(double p_lfloor_0_)`
- `public static float sqrt(double p_sqrt_0_)`
- `public static double clamp(double p_clamp_0_,  double p_clamp_2_,  double p_clamp_4_)`
- `public static int getInt(java.lang.String p_getInt_0_,  int p_getInt_1_)`
- `public static double getDouble(java.lang.String p_getDouble_0_,  double p_getDouble_1_)`
- `public static int log2(int p_log2_0_)`
- `public static int absFloor(double p_absFloor_0_)`
- `public static int smallestEncompassingPowerOfTwo(int p_smallestEncompassingPowerOfTwo_0_)`
- `public static float sqrt(float p_sqrt_0_)`
- `public static float cos(float p_cos_0_)`
- `public static int getInt(java.lang.String p_getInt_0_,  int p_getInt_1_,  int p_getInt_2_)`
- `public static int fastFloor(double p_fastFloor_0_)`
- `public static double absMax(double p_absMax_0_,  double p_absMax_2_)`
- `public static float nextFloat(java.util.Random p_nextFloat_0_,  float p_nextFloat_1_,  float p_nextFloat_2_)`
- `public static double wrapDegrees(double p_wrapDegrees_0_)`
- `public static float wrapDegrees(float p_wrapDegrees_0_)`
- `public static float clamp(float p_clamp_0_,  float p_clamp_1_,  float p_clamp_2_)`
- `public static double getDouble(java.lang.String p_getDouble_0_,  double p_getDouble_1_,  double p_getDouble_3_)`
- `public static int roundUp(int p_roundUp_0_,  int p_roundUp_1_)`
- `public static double average(long[] p_average_0_)`
- `public static int floor(float p_floor_0_)`
- `public static int abs(int p_abs_0_)`
- `public static int nextInt(java.util.Random p_nextInt_0_,  int p_nextInt_1_,  int p_nextInt_2_)`

## RealmsScreen

*class* `net.minecraft.realms.RealmsScreen`

### Fields
- `public static final int SKIN_HEAD_U` (= 8)
- `public static final int SKIN_HEAD_V` (= 8)
- `public static final int SKIN_HEAD_WIDTH` (= 8)
- `public static final int SKIN_HEAD_HEIGHT` (= 8)
- `public static final int SKIN_HAT_U` (= 40)
- `public static final int SKIN_HAT_V` (= 8)
- `public static final int SKIN_HAT_WIDTH` (= 8)
- `public static final int SKIN_HAT_HEIGHT` (= 8)
- `public static final int SKIN_TEX_WIDTH` (= 64)
- `public static final int SKIN_TEX_HEIGHT` (= 64)
- `protected Minecraft minecraft`
- `public int width`
- `public int height`

### Methods
- `public GuiScreenRealmsProxy getProxy()`
- `public void init()`
- `public void init(Minecraft p_init_1_,  int p_init_2_,  int p_init_3_)`
- `public void drawCenteredString(java.lang.String p_drawCenteredString_1_,  int p_drawCenteredString_2_,  int p_drawCenteredString_3_,  int p_drawCenteredString_4_)`
- `public void drawString(java.lang.String p_drawString_1_,  int p_drawString_2_,  int p_drawString_3_,  int p_drawString_4_)`
- `public void drawString(java.lang.String p_drawString_1_,  int p_drawString_2_,  int p_drawString_3_,  int p_drawString_4_,  boolean p_drawString_5_)`
- `public void blit(int p_blit_1_,  int p_blit_2_,  int p_blit_3_,  int p_blit_4_,  int p_blit_5_,  int p_blit_6_)`
- `public static void blit(int p_blit_0_,  int p_blit_1_,  float p_blit_2_,  float p_blit_3_,  int p_blit_4_,  int p_blit_5_,  int p_blit_6_,  int p_blit_7_,  float p_blit_8_,  float p_blit_9_)`
- `public static void blit(int p_blit_0_,  int p_blit_1_,  float p_blit_2_,  float p_blit_3_,  int p_blit_4_,  int p_blit_5_,  float p_blit_6_,  float p_blit_7_)`
- `public void fillGradient(int p_fillGradient_1_,  int p_fillGradient_2_,  int p_fillGradient_3_,  int p_fillGradient_4_,  int p_fillGradient_5_,  int p_fillGradient_6_)`
- `public void renderBackground()`
- `public boolean isPauseScreen()`
- `public void renderBackground(int p_renderBackground_1_)`
- `public void render(int p_render_1_,  int p_render_2_,  float p_render_3_)`
- `public void renderTooltip(ItemStack p_renderTooltip_1_,  int p_renderTooltip_2_,  int p_renderTooltip_3_)`
- `public void renderTooltip(java.lang.String p_renderTooltip_1_,  int p_renderTooltip_2_,  int p_renderTooltip_3_)`
- `public void renderTooltip(java.util.List<java.lang.String> p_renderTooltip_1_,  int p_renderTooltip_2_,  int p_renderTooltip_3_)`
- `public static void bindFace(java.lang.String p_bindFace_0_,  java.lang.String p_bindFace_1_)`
- `public static void bind(java.lang.String p_bind_0_)`
- `public void tick()`
- `public int width()`
- `public int height()`
- `public int fontLineHeight()`
- `public int fontWidth(java.lang.String p_fontWidth_1_)`
- `public void fontDrawShadow(java.lang.String p_fontDrawShadow_1_,  int p_fontDrawShadow_2_,  int p_fontDrawShadow_3_,  int p_fontDrawShadow_4_)`
- `public java.util.List<java.lang.String> fontSplit(java.lang.String p_fontSplit_1_,  int p_fontSplit_2_)`
- `public void buttonClicked(RealmsButton p_buttonClicked_1_)`
- `public static RealmsButton newButton(int p_newButton_0_,  int p_newButton_1_,  int p_newButton_2_,  java.lang.String p_newButton_3_)`
- `public static RealmsButton newButton(int p_newButton_0_,  int p_newButton_1_,  int p_newButton_2_,  int p_newButton_3_,  int p_newButton_4_,  java.lang.String p_newButton_5_)`
- `public void buttonsClear()`
- `public void buttonsAdd(RealmsButton p_buttonsAdd_1_)`
- `public java.util.List<RealmsButton> buttons()`
- `public void buttonsRemove(RealmsButton p_buttonsRemove_1_)`
- `public RealmsEditBox newEditBox(int p_newEditBox_1_,  int p_newEditBox_2_,  int p_newEditBox_3_,  int p_newEditBox_4_,  int p_newEditBox_5_)`
- `public void mouseClicked(int p_mouseClicked_1_,  int p_mouseClicked_2_,  int p_mouseClicked_3_)`
- `public void mouseEvent()`
- `public void keyboardEvent()`
- `public void mouseReleased(int p_mouseReleased_1_,  int p_mouseReleased_2_,  int p_mouseReleased_3_)`
- `public void mouseDragged(int p_mouseDragged_1_,  int p_mouseDragged_2_,  int p_mouseDragged_3_,  long p_mouseDragged_4_)`
- `public void keyPressed(char p_keyPressed_1_,  int p_keyPressed_2_)`
- `public void confirmResult(boolean p_confirmResult_1_,  int p_confirmResult_2_)`
- `public static java.lang.String getLocalizedString(java.lang.String p_getLocalizedString_0_)`
- `public static java.lang.String getLocalizedString(java.lang.String p_getLocalizedString_0_,  java.lang.Object... p_getLocalizedString_1_)`
- `public RealmsAnvilLevelStorageSource getLevelStorageSource()`
- `public void removed()`

## RealmsScrolledSelectionList

*class* `net.minecraft.realms.RealmsScrolledSelectionList`

### Methods
- `public void render(int p_render_1_,  int p_render_2_,  float p_render_3_)`
- `public int width()`
- `public int ym()`
- `public int xm()`
- `protected void renderItem(int p_renderItem_1_,  int p_renderItem_2_,  int p_renderItem_3_,  int p_renderItem_4_,  Tezzelator p_renderItem_5_,  int p_renderItem_6_,  int p_renderItem_7_)`
- `public void renderItem(int p_renderItem_1_,  int p_renderItem_2_,  int p_renderItem_3_,  int p_renderItem_4_,  int p_renderItem_5_,  int p_renderItem_6_)`
- `public int getItemCount()`
- `public void selectItem(int p_selectItem_1_,  boolean p_selectItem_2_,  int p_selectItem_3_,  int p_selectItem_4_)`
- `public boolean isSelectedItem(int p_isSelectedItem_1_)`
- `public void renderBackground()`
- `public int getMaxPosition()`
- `public int getScrollbarPosition()`
- `public void mouseEvent()`
- `public void scroll(int p_scroll_1_)`
- `public int getScroll()`
- `protected void renderList(int p_renderList_1_,  int p_renderList_2_,  int p_renderList_3_,  int p_renderList_4_)`

## RealmsServerAddress

*class* `net.minecraft.realms.RealmsServerAddress`

### Methods
- `public java.lang.String getHost()`
- `public int getPort()`
- `public static RealmsServerAddress parseString(java.lang.String p_parseString_0_)`

## RealmsSharedConstants

*class* `net.minecraft.realms.RealmsSharedConstants`

### Fields
- `public static int NETWORK_PROTOCOL_VERSION`
- `public static int TICKS_PER_SECOND`
- `public static java.lang.String VERSION_STRING`
- `public static char[] ILLEGAL_FILE_CHARACTERS`

## RealmsSimpleScrolledSelectionList

*class* `net.minecraft.realms.RealmsSimpleScrolledSelectionList`

### Methods
- `public void render(int p_render_1_,  int p_render_2_,  float p_render_3_)`
- `public int width()`
- `public int ym()`
- `public int xm()`
- `protected void renderItem(int p_renderItem_1_,  int p_renderItem_2_,  int p_renderItem_3_,  int p_renderItem_4_,  Tezzelator p_renderItem_5_,  int p_renderItem_6_,  int p_renderItem_7_)`
- `public void renderItem(int p_renderItem_1_,  int p_renderItem_2_,  int p_renderItem_3_,  int p_renderItem_4_,  int p_renderItem_5_,  int p_renderItem_6_)`
- `public int getItemCount()`
- `public void selectItem(int p_selectItem_1_,  boolean p_selectItem_2_,  int p_selectItem_3_,  int p_selectItem_4_)`
- `public boolean isSelectedItem(int p_isSelectedItem_1_)`
- `public void renderBackground()`
- `public int getMaxPosition()`
- `public int getScrollbarPosition()`
- `public void mouseEvent()`
- `public void scroll(int p_scroll_1_)`
- `public int getScroll()`
- `protected void renderList(int p_renderList_1_,  int p_renderList_2_,  int p_renderList_3_,  int p_renderList_4_)`

## RealmsSliderButton

*class* `net.minecraft.realms.RealmsSliderButton`

### Fields
- `public float value`
- `public boolean sliding`

### Inherited fields
- from `net.minecraft.realms.RealmsButton`: `WIDGETS_LOCATION`

### Methods
- `public java.lang.String getMessage()`
- `public float toPct(float p_toPct_1_)`
- `public float toValue(float p_toValue_1_)`
- `public float clamp(float p_clamp_1_)`
- `protected float clampSteps(float p_clampSteps_1_)`
- `public int getYImage(boolean p_getYImage_1_)`
- `public void renderBg(int p_renderBg_1_,  int p_renderBg_2_)`
- `public void clicked(int p_clicked_1_,  int p_clicked_2_)`
- `public void clicked(float p_clicked_1_)`
- `public void released(int p_released_1_,  int p_released_2_)`

### Inherited methods
- from `net.minecraft.realms.RealmsButton`: `active`, `active`, `blit`, `getHeight`, `getProxy`, `getWidth`, `id`, `msg`, `render`, `y`

## RealmsVertexFormat

*class* `net.minecraft.realms.RealmsVertexFormat`

### Methods
- `public RealmsVertexFormat from(VertexFormat p_from_1_)`
- `public VertexFormat getVertexFormat()`
- `public void clear()`
- `public int getUvOffset(int p_getUvOffset_1_)`
- `public int getElementCount()`
- `public boolean hasColor()`
- `public boolean hasUv(int p_hasUv_1_)`
- `public RealmsVertexFormatElement getElement(int p_getElement_1_)`
- `public RealmsVertexFormat addElement(RealmsVertexFormatElement p_addElement_1_)`
- `public int getColorOffset()`
- `public java.util.List<RealmsVertexFormatElement> getElements()`
- `public boolean hasNormal()`
- `public int getVertexSize()`
- `public int getOffset(int p_getOffset_1_)`
- `public int getNormalOffset()`
- `public int getIntegerSize()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public int hashCode()`
- `public java.lang.String toString()`

## RealmsVertexFormatElement

*class* `net.minecraft.realms.RealmsVertexFormatElement`

### Methods
- `public VertexFormatElement getVertexFormatElement()`
- `public boolean isPosition()`
- `public int getIndex()`
- `public int getByteSize()`
- `public int getCount()`
- `public int hashCode()`
- `public boolean equals(java.lang.Object p_equals_1_)`
- `public java.lang.String toString()`

## Tezzelator

*class* `net.minecraft.realms.Tezzelator`

### Fields
- `public static Tessellator t`
- `public static final Tezzelator instance`

### Methods
- `public void end()`
- `public Tezzelator vertex(double p_vertex_1_,  double p_vertex_3_,  double p_vertex_5_)`
- `public void color(float p_color_1_,  float p_color_2_,  float p_color_3_,  float p_color_4_)`
- `public void tex2(short p_tex2_1_,  short p_tex2_2_)`
- `public void normal(float p_normal_1_,  float p_normal_2_,  float p_normal_3_)`
- `public void begin(int p_begin_1_,  RealmsVertexFormat p_begin_2_)`
- `public void endVertex()`
- `public void offset(double p_offset_1_,  double p_offset_3_,  double p_offset_5_)`
- `public RealmsBufferBuilder color(int p_color_1_,  int p_color_2_,  int p_color_3_,  int p_color_4_)`
- `public Tezzelator tex(double p_tex_1_,  double p_tex_3_)`
