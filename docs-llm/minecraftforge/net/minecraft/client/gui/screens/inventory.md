# net.minecraft.client.gui.screens.inventory

- [AbstractCommandBlockEditScreen](#abstractcommandblockeditscreen)
- [AbstractContainerScreen](#abstractcontainerscreen)
- [AbstractFurnaceScreen](#abstractfurnacescreen)
- [AbstractSignEditScreen](#abstractsigneditscreen)
- [AnvilScreen](#anvilscreen)
- [BeaconScreen](#beaconscreen)
- [BeaconScreen.BeaconButton](#beaconscreen.beaconbutton)
- [BeaconScreen.BeaconCancelButton](#beaconscreen.beaconcancelbutton)
- [BeaconScreen.BeaconConfirmButton](#beaconscreen.beaconconfirmbutton)
- [BeaconScreen.BeaconPowerButton](#beaconscreen.beaconpowerbutton)
- [BeaconScreen.BeaconScreenButton](#beaconscreen.beaconscreenbutton)
- [BeaconScreen.BeaconSpriteScreenButton](#beaconscreen.beaconspritescreenbutton)
- [BeaconScreen.BeaconUpgradePowerButton](#beaconscreen.beaconupgradepowerbutton)
- [BlastFurnaceScreen](#blastfurnacescreen)
- [BookEditScreen](#bookeditscreen)
- [BookEditScreen.DisplayCache](#bookeditscreen.displaycache)
- [BookEditScreen.LineInfo](#bookeditscreen.lineinfo)
- [BookEditScreen.Pos2i](#bookeditscreen.pos2i)
- [BookViewScreen](#bookviewscreen)
- [BookViewScreen.BookAccess](#bookviewscreen.bookaccess)
- [BookViewScreen.WritableBookAccess](#bookviewscreen.writablebookaccess)
- [BookViewScreen.WrittenBookAccess](#bookviewscreen.writtenbookaccess)
- [BrewingStandScreen](#brewingstandscreen)
- [CartographyTableScreen](#cartographytablescreen)
- [CommandBlockEditScreen](#commandblockeditscreen)
- [ContainerScreen](#containerscreen)
- [CraftingScreen](#craftingscreen)
- [CreativeInventoryListener](#creativeinventorylistener)
- [CreativeModeInventoryScreen](#creativemodeinventoryscreen)
- [CreativeModeInventoryScreen.CustomCreativeSlot](#creativemodeinventoryscreen.customcreativeslot)
- [CreativeModeInventoryScreen.ItemPickerMenu](#creativemodeinventoryscreen.itempickermenu)
- [CreativeModeInventoryScreen.SlotWrapper](#creativemodeinventoryscreen.slotwrapper)
- [CyclingSlotBackground](#cyclingslotbackground)
- [DispenserScreen](#dispenserscreen)
- [EffectRenderingInventoryScreen](#effectrenderinginventoryscreen)
- [EnchantmentNames](#enchantmentnames)
- [EnchantmentScreen](#enchantmentscreen)
- [FurnaceScreen](#furnacescreen)
- [GrindstoneScreen](#grindstonescreen)
- [HangingSignEditScreen](#hangingsigneditscreen)
- [HopperScreen](#hopperscreen)
- [HorseInventoryScreen](#horseinventoryscreen)
- [InventoryScreen](#inventoryscreen)
- [ItemCombinerScreen](#itemcombinerscreen)
- [JigsawBlockEditScreen](#jigsawblockeditscreen)
- [LecternScreen](#lecternscreen)
- [LoomScreen](#loomscreen)
- [MenuAccess](#menuaccess)
- [MerchantScreen](#merchantscreen)
- [MerchantScreen.TradeOfferButton](#merchantscreen.tradeofferbutton)
- [MinecartCommandBlockEditScreen](#minecartcommandblockeditscreen)
- [PageButton](#pagebutton)
- [ShulkerBoxScreen](#shulkerboxscreen)
- [SignEditScreen](#signeditscreen)
- [SmithingScreen](#smithingscreen)
- [SmokerScreen](#smokerscreen)
- [StonecutterScreen](#stonecutterscreen)
- [StructureBlockEditScreen](#structureblockeditscreen)
## AbstractCommandBlockEditScreen

*class* `net.minecraft.client.gui.screens.inventory.AbstractCommandBlockEditScreen`

### Fields
- `private static final Component SET_COMMAND_LABEL`
- `private static final Component COMMAND_LABEL`
- `private static final Component PREVIOUS_OUTPUT_LABEL`
- `protected EditBox commandEdit`
- `protected EditBox previousEdit`
- `protected Button doneButton`
- `protected Button cancelButton`
- `protected CycleButton<Boolean> outputButton`
- `CommandSuggestions commandSuggestions`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void tick()`
- `abstract BaseCommandBlock getCommandBlock()`
- `abstract int getPreviousY()`
- `protected void init()`
- `protected Component getUsageNarration()`
- `public void resize(Minecraft p_97677_,  int p_97678_,  int p_97679_)`
- `protected void updatePreviousOutput(boolean p_169599_)`
- `protected void onDone()`
- `protected abstract void populateAndSendPacket(BaseCommandBlock p_97670_)`
- `private void onEdited(String p_97689_)`
- `public boolean keyPressed(int p_97667_,  int p_97668_,  int p_97669_)`
- `public boolean mouseScrolled(double p_97659_,  double p_97660_,  double p_97661_,  double p_299742_)`
- `public boolean mouseClicked(double p_97663_,  double p_97664_,  int p_97665_)`
- `public void render(GuiGraphics p_283074_,  int p_97673_,  int p_97674_,  float p_97675_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractContainerScreen

*class* `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`

### Fields
- `public static final ResourceLocation INVENTORY_LOCATION`
- `private static final float SNAPBACK_SPEED` (= 100.0f)
- `private static final int QUICKDROP_DELAY` (= 500)
- `public static final int SLOT_ITEM_BLIT_OFFSET` (= 100)
- `private static final int HOVER_ITEM_BLIT_OFFSET` (= 200)
- `protected int imageWidth`
- `protected int imageHeight`
- `protected int titleLabelX`
- `protected int titleLabelY`
- `protected int inventoryLabelX`
- `protected int inventoryLabelY`
- `protected final T extends AbstractContainerMenu menu`
- `protected final Component playerInventoryTitle`
- `@Nullable protected Slot hoveredSlot`
- `@Nullable private Slot clickedSlot`
- `@Nullable private Slot snapbackEnd`
- `@Nullable private Slot quickdropSlot`
- `@Nullable private Slot lastClickSlot`
- `protected int leftPos`
- `protected int topPos`
- `private boolean isSplittingStack`
- `private ItemStack draggingItem`
- `private int snapbackStartX`
- `private int snapbackStartY`
- `private long snapbackTime`
- `private ItemStack snapbackItem`
- `private long quickdropTime`
- `protected final Set<Slot> quickCraftSlots`
- `protected boolean isQuickCrafting`
- `private int quickCraftingType`
- `private int quickCraftingButton`
- `private boolean skipNextRelease`
- `private int quickCraftingRemainder`
- `private long lastClickTime`
- `private int lastClickButton`
- `private boolean doubleclick`
- `private ItemStack lastQuickMoved`
- `protected int slotColor`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_283479_,  int p_283661_,  int p_281248_,  float p_281886_)`
- `public void renderBackground(GuiGraphics p_300197_,  int p_297538_,  int p_300104_,  float p_298759_)`
- `public static void renderSlotHighlight(GuiGraphics p_283692_,  int p_281453_,  int p_281915_,  int p_283504_)`
- `public static void renderSlotHighlight(GuiGraphics p_283692_,  int p_281453_,  int p_281915_,  int p_283504_,  int color)`
- `protected void renderTooltip(GuiGraphics p_283594_,  int p_282171_,  int p_281909_)`
- `protected List<Component> getTooltipFromContainerItem(ItemStack p_283689_)`
- `private void renderFloatingItem(GuiGraphics p_282567_,  ItemStack p_281330_,  int p_281772_,  int p_281689_,  String p_282568_)`
- `protected void renderLabels(GuiGraphics p_281635_,  int p_282681_,  int p_283686_)`
- `protected abstract void renderBg(GuiGraphics p_283065_,  float p_97788_,  int p_97789_,  int p_97790_)`
- `private void renderSlot(GuiGraphics p_281607_,  Slot p_282613_)`
- `private void recalculateQuickCraftRemaining()`
- `@Nullable private Slot findSlot(double p_97745_,  double p_97746_)`
- `public boolean mouseClicked(double p_97748_,  double p_97749_,  int p_97750_)`
- `private void checkHotbarMouseClicked(int p_97763_)`
- `protected boolean hasClickedOutside(double p_97757_,  double p_97758_,  int p_97759_,  int p_97760_,  int p_97761_)`
- `public boolean mouseDragged(double p_97752_,  double p_97753_,  int p_97754_,  double p_97755_,  double p_97756_)`
- `public boolean mouseReleased(double p_97812_,  double p_97813_,  int p_97814_)`
- `public void clearDraggingState()`
- `private boolean isHovering(Slot p_97775_,  double p_97776_,  double p_97777_)`
- `protected boolean isHovering(int p_97768_,  int p_97769_,  int p_97770_,  int p_97771_,  double p_97772_,  double p_97773_)`
- `protected void slotClicked(Slot p_97778_,  int p_97779_,  int p_97780_,  ClickType p_97781_)`
- `public boolean keyPressed(int p_97765_,  int p_97766_,  int p_97767_)`
- `protected boolean checkHotbarKeyPressed(int p_97806_,  int p_97807_)`
- `public void removed()`
- `public boolean isPauseScreen()`
- `public final void tick()`
- `protected void containerTick()`
- `public T getMenu()`
- `@Nullable public @Nullable Slot getSlotUnderMouse()`
- `public int getGuiLeft()`
- `public int getGuiTop()`
- `public int getXSize()`
- `public int getYSize()`
- `public int getSlotColor(int index)`
- `public void onClose()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractFurnaceScreen

*class* `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`

### Fields
- `public final AbstractFurnaceRecipeBookComponent recipeBookComponent`
- `private boolean widthTooNarrow`
- `private final ResourceLocation texture`
- `private final ResourceLocation litProgressSprite`
- `private final ResourceLocation burnProgressSprite`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void init()`
- `public void containerTick()`
- `public void render(GuiGraphics p_282573_,  int p_97859_,  int p_97860_,  float p_97861_)`
- `protected void renderBg(GuiGraphics p_282928_,  float p_281631_,  int p_281252_,  int p_281891_)`
- `public boolean mouseClicked(double p_97834_,  double p_97835_,  int p_97836_)`
- `protected void slotClicked(Slot p_97848_,  int p_97849_,  int p_97850_,  ClickType p_97851_)`
- `public boolean keyPressed(int p_97844_,  int p_97845_,  int p_97846_)`
- `protected boolean hasClickedOutside(double p_97838_,  double p_97839_,  int p_97840_,  int p_97841_,  int p_97842_)`
- `public boolean charTyped(char p_97831_,  int p_97832_)`
- `public void recipesUpdated()`
- `public RecipeBookComponent getRecipeBookComponent()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isHovering`, `isPauseScreen`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AbstractSignEditScreen

*class* `net.minecraft.client.gui.screens.inventory.AbstractSignEditScreen`

### Fields
- `private final SignBlockEntity sign`
- `private SignText text`
- `private final String[] messages`
- `private final boolean isFrontText`
- `protected final WoodType woodType`
- `private int frame`
- `private int line`
- `@Nullable private TextFieldHelper signField`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void tick()`
- `private boolean isValid()`
- `public boolean keyPressed(int p_252300_,  int p_250424_,  int p_250697_)`
- `public boolean charTyped(char p_252008_,  int p_251178_)`
- `public void render(GuiGraphics p_282418_,  int p_281700_,  int p_283040_,  float p_282799_)`
- `public void onClose()`
- `public void removed()`
- `public boolean isPauseScreen()`
- `protected abstract void renderSignBackground(GuiGraphics p_281459_,  BlockState p_250054_)`
- `protected abstract org.joml.Vector3f getSignTextScale()`
- `protected void offsetSign(GuiGraphics p_282672_,  BlockState p_283056_)`
- `private void renderSign(GuiGraphics p_282006_)`
- `private void renderSignText(GuiGraphics p_282366_)`
- `private void setMessage(String p_277913_)`
- `private void onDone()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## AnvilScreen

*class* `net.minecraft.client.gui.screens.inventory.AnvilScreen`

### Fields
- `private static final ResourceLocation TEXT_FIELD_SPRITE`
- `private static final ResourceLocation TEXT_FIELD_DISABLED_SPRITE`
- `private static final ResourceLocation ERROR_SPRITE`
- `private static final ResourceLocation ANVIL_LOCATION`
- `private static final Component TOO_EXPENSIVE_TEXT`
- `private EditBox name`
- `private final Player player`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void subInit()`
- `public void resize(Minecraft p_97886_,  int p_97887_,  int p_97888_)`
- `public boolean keyPressed(int p_97878_,  int p_97879_,  int p_97880_)`
- `private void onNameChanged(String p_97899_)`
- `protected void renderLabels(GuiGraphics p_281442_,  int p_282417_,  int p_283022_)`
- `protected void renderBg(GuiGraphics p_283345_,  float p_283412_,  int p_282871_,  int p_281306_)`
- `public void renderFg(GuiGraphics p_283449_,  int p_283263_,  int p_281526_,  float p_282957_)`
- `protected void renderErrorIcon(GuiGraphics p_282905_,  int p_283237_,  int p_282237_)`
- `public void slotChanged(AbstractContainerMenu p_97882_,  int p_97883_,  ItemStack p_97884_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.ItemCombinerScreen`: `dataChanged`, `init`, `removed`, `render`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `renderBackground`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BeaconScreen

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen`

### Fields
- `private static final ResourceLocation BEACON_LOCATION`
- `static final ResourceLocation BUTTON_DISABLED_SPRITE`
- `static final ResourceLocation BUTTON_SELECTED_SPRITE`
- `static final ResourceLocation BUTTON_HIGHLIGHTED_SPRITE`
- `static final ResourceLocation BUTTON_SPRITE`
- `static final ResourceLocation CONFIRM_SPRITE`
- `static final ResourceLocation CANCEL_SPRITE`
- `private static final Component PRIMARY_EFFECT_LABEL`
- `private static final Component SECONDARY_EFFECT_LABEL`
- `private final List<BeaconScreen.BeaconButton> beaconButtons`
- `@Nullable MobEffect primary`
- `@Nullable MobEffect secondary`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private <T extends AbstractWidget & BeaconScreen.BeaconButton> void addBeaconButton(T p_169617_)`
- `protected void init()`
- `public void containerTick()`
- `void updateButtons()`
- `protected void renderLabels(GuiGraphics p_283369_,  int p_282699_,  int p_281296_)`
- `protected void renderBg(GuiGraphics p_282454_,  float p_282185_,  int p_282362_,  int p_282987_)`
- `public void render(GuiGraphics p_283062_,  int p_282876_,  int p_282015_,  float p_281395_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BeaconScreen.BeaconButton

*interface* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconButton`

Enclosing class: BeaconScreen

### Methods
- `void updateStatus(int p_169631_)`

## BeaconScreen.BeaconCancelButton

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconCancelButton`

Enclosing class: BeaconScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onPress()`
- `public void updateStatus(int p_169636_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconSpriteScreenButton`: `renderIcon`
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconScreenButton`: `isSelected`, `renderWidget`, `setSelected`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BeaconScreen.BeaconConfirmButton

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconConfirmButton`

Enclosing class: BeaconScreen

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void onPress()`
- `public void updateStatus(int p_169638_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconSpriteScreenButton`: `renderIcon`
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconScreenButton`: `isSelected`, `renderWidget`, `setSelected`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BeaconScreen.BeaconPowerButton

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconPowerButton`

Enclosing class: BeaconScreen

### Fields
- `private final boolean isPrimary`
- `protected final int tier`
- `private MobEffect effect`
- `private TextureAtlasSprite sprite`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void setEffect(MobEffect p_169650_)`
- `protected MutableComponent createEffectDescription(MobEffect p_169652_)`
- `public void onPress()`
- `protected void renderIcon(GuiGraphics p_282265_)`
- `public void updateStatus(int p_169648_)`
- `protected MutableComponent createNarrationMessage()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconScreenButton`: `isSelected`, `renderWidget`, `setSelected`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BeaconScreen.BeaconScreenButton

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconScreenButton`

Enclosing class: BeaconScreen

### Fields
- `private boolean selected`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_281837_,  int p_281780_,  int p_283603_,  float p_283562_)`
- `protected abstract void renderIcon(GuiGraphics p_283292_)`
- `public boolean isSelected()`
- `public void setSelected(boolean p_98032_)`
- `public void updateWidgetNarration(NarrationElementOutput p_259705_)`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `onPress`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconButton`: `updateStatus`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BeaconScreen.BeaconSpriteScreenButton

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconSpriteScreenButton`

Enclosing class: BeaconScreen

### Fields
- `private final ResourceLocation sprite`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderIcon(GuiGraphics p_283624_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconScreenButton`: `isSelected`, `renderWidget`, `setSelected`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `onPress`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createNarrationMessage`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconButton`: `updateStatus`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BeaconScreen.BeaconUpgradePowerButton

*class* `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconUpgradePowerButton`

Enclosing class: BeaconScreen

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconPowerButton`: `tier`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected MutableComponent createEffectDescription(MobEffect p_169681_)`
- `public void updateStatus(int p_169679_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconPowerButton`: `createNarrationMessage`, `onPress`, `renderIcon`, `setEffect`
- from `net.minecraft.client.gui.screens.inventory.BeaconScreen.BeaconScreenButton`: `isSelected`, `renderWidget`, `setSelected`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## BlastFurnaceScreen

*class* `net.minecraft.client.gui.screens.inventory.BlastFurnaceScreen`

### Fields
- `private static final ResourceLocation LIT_PROGRESS_SPRITE`
- `private static final ResourceLocation BURN_PROGRESS_SPRITE`
- `private static final ResourceLocation TEXTURE`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`: `recipeBookComponent`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`: `charTyped`, `containerTick`, `getRecipeBookComponent`, `hasClickedOutside`, `init`, `keyPressed`, `mouseClicked`, `recipesUpdated`, `render`, `renderBg`, `slotClicked`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isHovering`, `isPauseScreen`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BookEditScreen

*class* `net.minecraft.client.gui.screens.inventory.BookEditScreen`

### Fields
- `private static final int TEXT_WIDTH` (= 114)
- `private static final int TEXT_HEIGHT` (= 128)
- `private static final int IMAGE_WIDTH` (= 192)
- `private static final int IMAGE_HEIGHT` (= 192)
- `private static final Component EDIT_TITLE_LABEL`
- `private static final Component FINALIZE_WARNING_LABEL`
- `private static final FormattedCharSequence BLACK_CURSOR`
- `private static final FormattedCharSequence GRAY_CURSOR`
- `private final Player owner`
- `private final ItemStack book`
- `private boolean isModified`
- `private boolean isSigning`
- `private int frameTick`
- `private int currentPage`
- `private final List<String> pages`
- `private String title`
- `private final TextFieldHelper pageEdit`
- `private final TextFieldHelper titleEdit`
- `private long lastClickTime`
- `private int lastIndex`
- `private PageButton forwardButton`
- `private PageButton backButton`
- `private Button doneButton`
- `private Button signButton`
- `private Button finalizeButton`
- `private Button cancelButton`
- `private final InteractionHand hand`
- `@Nullable private BookEditScreen.DisplayCache displayCache`
- `private Component pageMsg`
- `private final Component ownerText`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void setClipboard(String p_98148_)`
- `private String getClipboard()`
- `private int getNumPages()`
- `public void tick()`
- `protected void init()`
- `private void pageBack()`
- `private void pageForward()`
- `private void updateButtonVisibility()`
- `private void eraseEmptyTrailingPages()`
- `private void saveChanges(boolean p_98161_)`
- `private void updateLocalCopy(boolean p_182575_)`
- `private void appendPageToBook()`
- `public boolean keyPressed(int p_98100_,  int p_98101_,  int p_98102_)`
- `public boolean charTyped(char p_98085_,  int p_98086_)`
- `private boolean bookKeyPressed(int p_98153_,  int p_98154_,  int p_98155_)`
- `private void keyUp()`
- `private void keyDown()`
- `private void changeLine(int p_98098_)`
- `private void keyHome()`
- `private void keyEnd()`
- `private boolean titleKeyPressed(int p_98164_,  int p_98165_,  int p_98166_)`
- `private String getCurrentPageText()`
- `private void setCurrentPageText(String p_98159_)`
- `public void render(GuiGraphics p_281724_,  int p_282965_,  int p_283294_,  float p_281293_)`
- `public void renderBackground(GuiGraphics p_298379_,  int p_298216_,  int p_301014_,  float p_300512_)`
- `private void renderCursor(GuiGraphics p_281833_,  BookEditScreen.Pos2i p_282190_,  boolean p_282412_)`
- `private void renderHighlight(GuiGraphics p_282188_,  Rect2i[] p_265482_)`
- `private BookEditScreen.Pos2i convertScreenToLocal(BookEditScreen.Pos2i p_98115_)`
- `private BookEditScreen.Pos2i convertLocalToScreen(BookEditScreen.Pos2i p_98146_)`
- `public boolean mouseClicked(double p_98088_,  double p_98089_,  int p_98090_)`
- `private void selectWord(int p_98142_)`
- `public boolean mouseDragged(double p_98092_,  double p_98093_,  int p_98094_,  double p_98095_,  double p_98096_)`
- `private BookEditScreen.DisplayCache getDisplayCache()`
- `private void clearDisplayCache()`
- `private void clearDisplayCacheAfterPageChange()`
- `private BookEditScreen.DisplayCache rebuildDisplayCache()`
- `static int findLineFromPos(int[] p_98150_,  int p_98151_)`
- `private Rect2i createPartialLineSelection(String p_98120_,  StringSplitter p_98121_,  int p_98122_,  int p_98123_,  int p_98124_,  int p_98125_)`
- `private Rect2i createSelection(BookEditScreen.Pos2i p_98117_,  BookEditScreen.Pos2i p_98118_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BookEditScreen.DisplayCache

*class* `net.minecraft.client.gui.screens.inventory.BookEditScreen.DisplayCache`

Enclosing class: BookEditScreen

### Fields
- `static final BookEditScreen.DisplayCache EMPTY`
- `private final String fullText`
- `final BookEditScreen.Pos2i cursor`
- `final boolean cursorAtEnd`
- `private final int[] lineStarts`
- `final BookEditScreen.LineInfo[] lines`
- `final Rect2i[] selection`

### Methods
- `public int getIndexAtPosition(Font p_98214_,  BookEditScreen.Pos2i p_98215_)`
- `public int changeLine(int p_98211_,  int p_98212_)`
- `public int findLineStart(int p_98209_)`
- `public int findLineEnd(int p_98219_)`

## BookEditScreen.LineInfo

*class* `net.minecraft.client.gui.screens.inventory.BookEditScreen.LineInfo`

Enclosing class: BookEditScreen

### Fields
- `final Style style`
- `final String contents`
- `final Component asComponent`
- `final int x`
- `final int y`

## BookEditScreen.Pos2i

*class* `net.minecraft.client.gui.screens.inventory.BookEditScreen.Pos2i`

Enclosing class: BookEditScreen

### Fields
- `public final int x`
- `public final int y`

## BookViewScreen

*class* `net.minecraft.client.gui.screens.inventory.BookViewScreen`

### Fields
- `public static final int PAGE_INDICATOR_TEXT_Y_OFFSET` (= 16)
- `public static final int PAGE_TEXT_X_OFFSET` (= 36)
- `public static final int PAGE_TEXT_Y_OFFSET` (= 30)
- `public static final BookViewScreen.BookAccess EMPTY_ACCESS`
- `public static final ResourceLocation BOOK_LOCATION`
- `protected static final int TEXT_WIDTH` (= 114)
- `protected static final int TEXT_HEIGHT` (= 128)
- `protected static final int IMAGE_WIDTH` (= 192)
- `protected static final int IMAGE_HEIGHT` (= 192)
- `private BookViewScreen.BookAccess bookAccess`
- `private int currentPage`
- `private List<FormattedCharSequence> cachedPageComponents`
- `private int cachedPage`
- `private Component pageMsg`
- `private PageButton forwardButton`
- `private PageButton backButton`
- `private final boolean playTurnSound`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void setBookAccess(BookViewScreen.BookAccess p_98289_)`
- `public boolean setPage(int p_98276_)`
- `protected boolean forcePage(int p_98295_)`
- `protected void init()`
- `protected void createMenuControls()`
- `protected void createPageControlButtons()`
- `private int getNumPages()`
- `protected void pageBack()`
- `protected void pageForward()`
- `private void updateButtonVisibility()`
- `public boolean keyPressed(int p_98278_,  int p_98279_,  int p_98280_)`
- `public void render(GuiGraphics p_281997_,  int p_281262_,  int p_283321_,  float p_282251_)`
- `public void renderBackground(GuiGraphics p_301081_,  int p_297765_,  int p_300192_,  float p_297977_)`
- `public boolean mouseClicked(double p_98272_,  double p_98273_,  int p_98274_)`
- `public boolean handleComponentClicked(Style p_98293_)`
- `protected void closeScreen()`
- `@Nullable public Style getClickedComponentStyleAt(double p_98269_,  double p_98270_)`
- `static List<String> loadPages(CompoundTag p_169695_)`
- `public static void loadPages(CompoundTag p_169697_,  Consumer<String> p_169698_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## BookViewScreen.BookAccess

*interface* `net.minecraft.client.gui.screens.inventory.BookViewScreen.BookAccess`

Enclosing class: BookViewScreen

### Methods
- `int getPageCount()`
- `FormattedText getPageRaw(int p_98307_)`
- `default FormattedText getPage(int p_98311_)`
- `static BookViewScreen.BookAccess fromItem(ItemStack p_98309_)`

## BookViewScreen.WritableBookAccess

*class* `net.minecraft.client.gui.screens.inventory.BookViewScreen.WritableBookAccess`

Enclosing class: BookViewScreen

### Fields
- `private final List<String> pages`

### Methods
- `private static List<String> readPages(ItemStack p_98319_)`
- `public int getPageCount()`
- `public FormattedText getPageRaw(int p_98317_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BookViewScreen.BookAccess`: `getPage`

## BookViewScreen.WrittenBookAccess

*class* `net.minecraft.client.gui.screens.inventory.BookViewScreen.WrittenBookAccess`

Enclosing class: BookViewScreen

### Fields
- `private final List<String> pages`

### Methods
- `private static List<String> readPages(ItemStack p_98327_)`
- `public int getPageCount()`
- `public FormattedText getPageRaw(int p_98325_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BookViewScreen.BookAccess`: `getPage`

## BrewingStandScreen

*class* `net.minecraft.client.gui.screens.inventory.BrewingStandScreen`

### Fields
- `private static final ResourceLocation FUEL_LENGTH_SPRITE`
- `private static final ResourceLocation BREW_PROGRESS_SPRITE`
- `private static final ResourceLocation BUBBLES_SPRITE`
- `private static final ResourceLocation BREWING_STAND_LOCATION`
- `private static final int[] BUBBLELENGTHS`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_283297_,  int p_283600_,  int p_282033_,  float p_283410_)`
- `protected void renderBg(GuiGraphics p_282963_,  float p_282080_,  int p_283365_,  int p_283150_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CartographyTableScreen

*class* `net.minecraft.client.gui.screens.inventory.CartographyTableScreen`

### Fields
- `private static final ResourceLocation ERROR_SPRITE`
- `private static final ResourceLocation SCALED_MAP_SPRITE`
- `private static final ResourceLocation DUPLICATED_MAP_SPRITE`
- `private static final ResourceLocation MAP_SPRITE`
- `private static final ResourceLocation LOCKED_SPRITE`
- `private static final ResourceLocation BG_LOCATION`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281331_,  int p_281706_,  int p_282996_,  float p_283037_)`
- `protected void renderBg(GuiGraphics p_282101_,  float p_282697_,  int p_282380_,  int p_282327_)`
- `private void renderResultingMap(GuiGraphics p_282167_,  @Nullable  Integer p_282064_,  @Nullable  MapItemSavedData p_282045_,  boolean p_282086_,  boolean p_283531_,  boolean p_282645_,  boolean p_281646_)`
- `private void renderMap(GuiGraphics p_282298_,  @Nullable  Integer p_281648_,  @Nullable  MapItemSavedData p_282897_,  int p_281632_,  int p_282115_,  float p_283388_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CommandBlockEditScreen

*class* `net.minecraft.client.gui.screens.inventory.CommandBlockEditScreen`

### Fields
- `private final CommandBlockEntity autoCommandBlock`
- `private CycleButton<CommandBlockEntity.Mode> modeButton`
- `private CycleButton<Boolean> conditionalButton`
- `private CycleButton<Boolean> autoexecButton`
- `private CommandBlockEntity.Mode mode`
- `private boolean conditional`
- `private boolean autoexec`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractCommandBlockEditScreen`: `cancelButton`, `commandEdit`, `commandSuggestions`, `doneButton`, `outputButton`, `previousEdit`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `BaseCommandBlock getCommandBlock()`
- `int getPreviousY()`
- `protected void init()`
- `private void enableControls(boolean p_169730_)`
- `public void updateGui()`
- `public void resize(Minecraft p_98386_,  int p_98387_,  int p_98388_)`
- `protected void populateAndSendPacket(BaseCommandBlock p_98384_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractCommandBlockEditScreen`: `getUsageNarration`, `keyPressed`, `mouseClicked`, `mouseScrolled`, `onDone`, `render`, `tick`, `updatePreviousOutput`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ContainerScreen

*class* `net.minecraft.client.gui.screens.inventory.ContainerScreen`

### Fields
- `private static final ResourceLocation CONTAINER_BACKGROUND`
- `private final int containerRows`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282060_,  int p_282533_,  int p_281661_,  float p_281873_)`
- `protected void renderBg(GuiGraphics p_283694_,  float p_282334_,  int p_282603_,  int p_282158_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.screens.inventory.MenuAccess`: `getMenu`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CraftingScreen

*class* `net.minecraft.client.gui.screens.inventory.CraftingScreen`

### Fields
- `private static final ResourceLocation CRAFTING_TABLE_LOCATION`
- `private final RecipeBookComponent recipeBookComponent`
- `private boolean widthTooNarrow`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void containerTick()`
- `public void render(GuiGraphics p_282508_,  int p_98480_,  int p_98481_,  float p_98482_)`
- `protected void renderBg(GuiGraphics p_283540_,  float p_282132_,  int p_283078_,  int p_283647_)`
- `protected boolean isHovering(int p_98462_,  int p_98463_,  int p_98464_,  int p_98465_,  double p_98466_,  double p_98467_)`
- `public boolean mouseClicked(double p_98452_,  double p_98453_,  int p_98454_)`
- `protected boolean hasClickedOutside(double p_98456_,  double p_98457_,  int p_98458_,  int p_98459_,  int p_98460_)`
- `protected void slotClicked(Slot p_98469_,  int p_98470_,  int p_98471_,  ClickType p_98472_)`
- `public void recipesUpdated()`
- `public RecipeBookComponent getRecipeBookComponent()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isPauseScreen`, `keyPressed`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreativeInventoryListener

*class* `net.minecraft.client.gui.screens.inventory.CreativeInventoryListener`

### Fields
- `private final Minecraft minecraft`

### Methods
- `public void slotChanged(AbstractContainerMenu p_98498_,  int p_98499_,  ItemStack p_98500_)`
- `public void dataChanged(AbstractContainerMenu p_169732_,  int p_169733_,  int p_169734_)`

## CreativeModeInventoryScreen

*class* `net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen`

### Fields
- `private static final ResourceLocation SCROLLER_SPRITE`
- `private static final ResourceLocation SCROLLER_DISABLED_SPRITE`
- `private static final ResourceLocation[] UNSELECTED_TOP_TABS`
- `private static final ResourceLocation[] SELECTED_TOP_TABS`
- `private static final ResourceLocation[] UNSELECTED_BOTTOM_TABS`
- `private static final ResourceLocation[] SELECTED_BOTTOM_TABS`
- `private static final String GUI_CREATIVE_TAB_PREFIX` (= "textures/gui/container/creative_inventory/tab_")
- `private static final String CUSTOM_SLOT_LOCK` (= "CustomCreativeLock")
- `private static final int NUM_ROWS` (= 5)
- `private static final int NUM_COLS` (= 9)
- `private static final int TAB_WIDTH` (= 26)
- `private static final int TAB_HEIGHT` (= 32)
- `private static final int SCROLLER_WIDTH` (= 12)
- `private static final int SCROLLER_HEIGHT` (= 15)
- `static final SimpleContainer CONTAINER`
- `private static final Component TRASH_SLOT_TOOLTIP`
- `private static final int TEXT_COLOR` (= 16777215)
- `private static CreativeModeTab selectedTab`
- `private float scrollOffs`
- `private boolean scrolling`
- `private EditBox searchBox`
- `@Nullable private List<Slot> originalSlots`
- `@Nullable private Slot destroyItemSlot`
- `private CreativeInventoryListener listener`
- `private boolean ignoreTextInput`
- `private boolean hasClickedOutside`
- `private final Set<TagKey<Item>> visibleTags`
- `private final boolean displayOperatorCreativeTab`
- `private final List<CreativeTabsScreenPage> pages`
- `private CreativeTabsScreenPage currentPage`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private boolean hasPermissions(Player p_259959_)`
- `private void tryRefreshInvalidatedTabs(FeatureFlagSet p_259501_,  boolean p_259713_,  HolderLookup.Provider p_270898_)`
- `private void refreshCurrentTabContents(Collection<ItemStack> p_261591_)`
- `public void containerTick()`
- `protected void slotClicked(@Nullable  Slot p_98556_,  int p_98557_,  int p_98558_,  ClickType p_98559_)`
- `private boolean isCreativeSlot(@Nullable  Slot p_98554_)`
- `protected void init()`
- `public void resize(Minecraft p_98595_,  int p_98596_,  int p_98597_)`
- `public void removed()`
- `public boolean charTyped(char p_98521_,  int p_98522_)`
- `public boolean keyPressed(int p_98547_,  int p_98548_,  int p_98549_)`
- `public boolean keyReleased(int p_98612_,  int p_98613_,  int p_98614_)`
- `private void refreshSearchResults()`
- `private void updateVisibleTags(String p_98620_)`
- `protected void renderLabels(GuiGraphics p_283168_,  int p_281774_,  int p_281466_)`
- `public boolean mouseClicked(double p_98531_,  double p_98532_,  int p_98533_)`
- `public boolean mouseReleased(double p_98622_,  double p_98623_,  int p_98624_)`
- `private boolean canScroll()`
- `private void selectTab(CreativeModeTab p_98561_)`
- `public boolean mouseScrolled(double p_98527_,  double p_98528_,  double p_98529_,  double p_301127_)`
- `protected boolean hasClickedOutside(double p_98541_,  double p_98542_,  int p_98543_,  int p_98544_,  int p_98545_)`
- `protected boolean insideScrollbar(double p_98524_,  double p_98525_)`
- `public boolean mouseDragged(double p_98535_,  double p_98536_,  int p_98537_,  double p_98538_,  double p_98539_)`
- `public void render(GuiGraphics p_283000_,  int p_281317_,  int p_282770_,  float p_281295_)`
- `public List<Component> getTooltipFromContainerItem(ItemStack p_281769_)`
- `protected void renderBg(GuiGraphics p_282663_,  float p_282504_,  int p_282089_,  int p_282249_)`
- `private int getTabX(CreativeModeTab p_260136_)`
- `private int getTabY(CreativeModeTab p_260181_)`
- `protected boolean checkTabClicked(CreativeModeTab p_98563_,  double p_98564_,  double p_98565_)`
- `protected boolean checkTabHovering(GuiGraphics p_282317_,  CreativeModeTab p_282244_,  int p_283469_,  int p_283411_)`
- `protected void renderTabButton(GuiGraphics p_283590_,  CreativeModeTab p_283489_)`
- `public boolean isInventoryOpen()`
- `public static void handleHotbarLoadOrSave(Minecraft p_98599_,  int p_98600_,  boolean p_98601_,  boolean p_98602_)`
- `public CreativeTabsScreenPage getCurrentPage()`
- `public void setCurrentPage(CreativeTabsScreenPage currentPage)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen`: `canSeeEffects`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getXSize`, `getYSize`, `isHovering`, `isPauseScreen`, `onClose`, `renderBackground`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## CreativeModeInventoryScreen.CustomCreativeSlot

*class* `net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen.CustomCreativeSlot`

Enclosing class: CreativeModeInventoryScreen

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public boolean mayPickup(Player p_98638_)`

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `getItem`, `getMaxStackSize`, `getMaxStackSize`, `getNoItemIcon`, `getSlotIndex`, `hasItem`, `isActive`, `isHighlightable`, `isSameInventory`, `mayPlace`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `onTake`, `remove`, `safeInsert`, `safeInsert`, `safeTake`, `set`, `setBackground`, `setByPlayer`, `setByPlayer`, `setChanged`, `tryRemove`

## CreativeModeInventoryScreen.ItemPickerMenu

*class* `net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen.ItemPickerMenu`

Enclosing class: CreativeModeInventoryScreen

### Fields
- `public final NonNullList<ItemStack> items`
- `private final AbstractContainerMenu inventoryMenu`

### Inherited fields
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `CARRIED_SLOT_SIZE`, `containerId`, `QUICKCRAFT_HEADER_CONTINUE`, `QUICKCRAFT_HEADER_END`, `QUICKCRAFT_HEADER_START`, `QUICKCRAFT_TYPE_CHARITABLE`, `QUICKCRAFT_TYPE_CLONE`, `QUICKCRAFT_TYPE_GREEDY`, `SLOT_CLICKED_OUTSIDE`, `slots`

### Methods
- `public boolean stillValid(Player p_98645_)`
- `protected int calculateRowCount()`
- `protected int getRowIndexForScroll(float p_259664_)`
- `protected float getScrollForRowIndex(int p_259315_)`
- `protected float subtractInputFromScroll(float p_259841_,  double p_260358_)`
- `public void scrollTo(float p_98643_)`
- `public boolean canScroll()`
- `public ItemStack quickMoveStack(Player p_98650_,  int p_98651_)`
- `public boolean canTakeItemForPickAll(ItemStack p_98647_,  Slot p_98648_)`
- `public boolean canDragTo(Slot p_98653_)`
- `public ItemStack getCarried()`
- `public void setCarried(ItemStack p_169751_)`

### Inherited methods
- from `net.minecraft.world.inventory.AbstractContainerMenu`: `addDataSlot`, `addDataSlots`, `addSlot`, `addSlotListener`, `broadcastChanges`, `broadcastFullState`, `canItemQuickReplace`, `checkContainerDataCount`, `checkContainerSize`, `clearContainer`, `clicked`, `clickMenuButton`, `findSlot`, `getItems`, `getQuickcraftHeader`, `getQuickcraftMask`, `getQuickCraftPlaceCount`, `getQuickcraftType`, `getRedstoneSignalFromBlockEntity`, `getRedstoneSignalFromContainer`, `getSlot`, `getStateId`, `getType`, `incrementStateId`, `initializeContents`, `isValidQuickcraftType`, `isValidSlotIndex`, `moveItemStackTo`, `removed`, `removeSlotListener`, `resetQuickCraft`, `resumeRemoteUpdates`, `sendAllDataToRemote`, `setData`, `setItem`, `setRemoteCarried`, `setRemoteSlot`, `setRemoteSlotNoCopy`, `setSynchronizer`, `slotsChanged`, `stillValid`, `suppressRemoteUpdates`, `transferState`

## CreativeModeInventoryScreen.SlotWrapper

*class* `net.minecraft.client.gui.screens.inventory.CreativeModeInventoryScreen.SlotWrapper`

Enclosing class: CreativeModeInventoryScreen

### Fields
- `final Slot target`

### Inherited fields
- from `net.minecraft.world.inventory.Slot`: `container`, `index`, `x`, `y`

### Methods
- `public void onTake(Player p_169754_,  ItemStack p_169755_)`
- `public boolean mayPlace(ItemStack p_98670_)`
- `public ItemStack getItem()`
- `public boolean hasItem()`
- `public void setByPlayer(ItemStack p_271008_,  ItemStack p_299458_)`
- `public void set(ItemStack p_98679_)`
- `public void setChanged()`
- `public int getMaxStackSize()`
- `public int getMaxStackSize(ItemStack p_98675_)`
- `@Nullable public com.mojang.datafixers.util.Pair<ResourceLocation,ResourceLocation> getNoItemIcon()`
- `public ItemStack remove(int p_98663_)`
- `public boolean isActive()`
- `public boolean mayPickup(Player p_98665_)`
- `public int getSlotIndex()`
  Description copied from class: Slot
  Retrieves the index in the inventory for this slot, this value should typically not
   be used, but can be useful for some occasions.
  - returns: Index in associated inventory for this slot.
- `public boolean isSameInventory(Slot other)`
  Description copied from class: Slot
  Checks if the other slot is in the same inventory, by comparing the inventory reference.
  - returns: true if the other slot is in the same inventory
- `public Slot setBackground(ResourceLocation atlas,  ResourceLocation sprite)`
  Description copied from class: Slot
  Sets the background atlas and sprite location.
  - param: atlas - The atlas name
  - param: sprite - The sprite located on that atlas.
  - returns: this, to allow chaining.

### Inherited methods
- from `net.minecraft.world.inventory.Slot`: `allowModification`, `checkTakeAchievements`, `getContainerSlot`, `isHighlightable`, `onQuickCraft`, `onQuickCraft`, `onSwapCraft`, `safeInsert`, `safeInsert`, `safeTake`, `setByPlayer`, `tryRemove`

## CyclingSlotBackground

*class* `net.minecraft.client.gui.screens.inventory.CyclingSlotBackground`

### Fields
- `private static final int ICON_CHANGE_TICK_RATE` (= 30)
- `private static final int ICON_SIZE` (= 16)
- `private static final int ICON_TRANSITION_TICK_DURATION` (= 4)
- `private final int slotIndex`
- `private List<ResourceLocation> icons`
- `private int tick`
- `private int iconIndex`

### Methods
- `public void tick(List<ResourceLocation> p_267074_)`
- `public void render(AbstractContainerMenu p_267293_,  GuiGraphics p_282894_,  float p_266785_,  int p_266711_,  int p_266841_)`
- `private void renderIcon(Slot p_283532_,  ResourceLocation p_283004_,  float p_282627_,  GuiGraphics p_282825_,  int p_281375_,  int p_283041_)`
- `private float getIconTransitionTransparency(float p_266904_)`

## DispenserScreen

*class* `net.minecraft.client.gui.screens.inventory.DispenserScreen`

### Fields
- `private static final ResourceLocation CONTAINER_LOCATION`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_283282_,  int p_282467_,  int p_282129_,  float p_281965_)`
- `protected void renderBg(GuiGraphics p_283137_,  float p_282476_,  int p_281600_,  int p_283194_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EffectRenderingInventoryScreen

*class* `net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen`

### Fields
- `private static final ResourceLocation EFFECT_BACKGROUND_LARGE_SPRITE`
- `private static final ResourceLocation EFFECT_BACKGROUND_SMALL_SPRITE`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283027_,  int p_281444_,  int p_282953_,  float p_281666_)`
- `public boolean canSeeEffects()`
- `private void renderEffects(GuiGraphics p_281945_,  int p_282601_,  int p_282335_)`
- `private void renderBackgrounds(GuiGraphics p_281540_,  int p_282479_,  int p_283680_,  Iterable<MobEffectInstance> p_282013_,  boolean p_283630_)`
- `private void renderIcons(GuiGraphics p_282745_,  int p_282521_,  int p_282291_,  Iterable<MobEffectInstance> p_282642_,  boolean p_281536_)`
- `private void renderLabels(GuiGraphics p_281462_,  int p_283484_,  int p_282057_,  Iterable<MobEffectInstance> p_281986_)`
- `private Component getEffectName(MobEffectInstance p_194001_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderBg`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## EnchantmentNames

*class* `net.minecraft.client.gui.screens.inventory.EnchantmentNames`

### Fields
- `private static final ResourceLocation ALT_FONT`
- `private static final Style ROOT_STYLE`
- `private static final EnchantmentNames INSTANCE`
- `private final RandomSource random`
- `private final String[] words`

### Methods
- `public static EnchantmentNames getInstance()`
- `public FormattedText getRandomName(Font p_98738_,  int p_98739_)`
- `public void initSeed(long p_98736_)`

## EnchantmentScreen

*class* `net.minecraft.client.gui.screens.inventory.EnchantmentScreen`

### Fields
- `private static final ResourceLocation[] ENABLED_LEVEL_SPRITES`
- `private static final ResourceLocation[] DISABLED_LEVEL_SPRITES`
- `private static final ResourceLocation ENCHANTMENT_SLOT_DISABLED_SPRITE`
- `private static final ResourceLocation ENCHANTMENT_SLOT_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation ENCHANTMENT_SLOT_SPRITE`
- `private static final ResourceLocation ENCHANTING_TABLE_LOCATION`
- `private static final ResourceLocation ENCHANTING_BOOK_LOCATION`
- `private final RandomSource random`
- `private BookModel bookModel`
- `public int time`
- `public float flip`
- `public float oFlip`
- `public float flipT`
- `public float flipA`
- `public float open`
- `public float oOpen`
- `private ItemStack last`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void containerTick()`
- `public boolean mouseClicked(double p_98758_,  double p_98759_,  int p_98760_)`
- `protected void renderBg(GuiGraphics p_282430_,  float p_282530_,  int p_281621_,  int p_283333_)`
- `private void renderBook(GuiGraphics p_289697_,  int p_289667_,  int p_289669_,  float p_289670_)`
- `public void render(GuiGraphics p_283462_,  int p_282491_,  int p_281953_,  float p_282182_)`
- `public void tickBook()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## FurnaceScreen

*class* `net.minecraft.client.gui.screens.inventory.FurnaceScreen`

### Fields
- `private static final ResourceLocation LIT_PROGRESS_SPRITE`
- `private static final ResourceLocation BURN_PROGRESS_SPRITE`
- `private static final ResourceLocation TEXTURE`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`: `recipeBookComponent`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`: `charTyped`, `containerTick`, `getRecipeBookComponent`, `hasClickedOutside`, `init`, `keyPressed`, `mouseClicked`, `recipesUpdated`, `render`, `renderBg`, `slotClicked`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isHovering`, `isPauseScreen`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## GrindstoneScreen

*class* `net.minecraft.client.gui.screens.inventory.GrindstoneScreen`

### Fields
- `private static final ResourceLocation ERROR_SPRITE`
- `private static final ResourceLocation GRINDSTONE_LOCATION`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_283326_,  int p_281847_,  int p_283310_,  float p_283486_)`
- `protected void renderBg(GuiGraphics p_281991_,  float p_282138_,  int p_282937_,  int p_281956_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## HangingSignEditScreen

*class* `net.minecraft.client.gui.screens.inventory.HangingSignEditScreen`

### Fields
- `public static final float MAGIC_BACKGROUND_SCALE` (= 4.5f)
- `private static final org.joml.Vector3f TEXT_SCALE`
- `private static final int TEXTURE_WIDTH` (= 16)
- `private static final int TEXTURE_HEIGHT` (= 16)
- `private final ResourceLocation texture`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractSignEditScreen`: `woodType`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void offsetSign(GuiGraphics p_282472_,  BlockState p_282359_)`
- `protected void renderSignBackground(GuiGraphics p_282580_,  BlockState p_283648_)`
- `protected org.joml.Vector3f getSignTextScale()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractSignEditScreen`: `charTyped`, `init`, `isPauseScreen`, `keyPressed`, `onClose`, `removed`, `render`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## HopperScreen

*class* `net.minecraft.client.gui.screens.inventory.HopperScreen`

### Fields
- `private static final ResourceLocation HOPPER_LOCATION`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_282918_,  int p_282102_,  int p_282423_,  float p_282621_)`
- `protected void renderBg(GuiGraphics p_281616_,  float p_282737_,  int p_281678_,  int p_281465_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## HorseInventoryScreen

*class* `net.minecraft.client.gui.screens.inventory.HorseInventoryScreen`

### Fields
- `private static final ResourceLocation CHEST_SLOTS_SPRITE`
- `private static final ResourceLocation SADDLE_SLOT_SPRITE`
- `private static final ResourceLocation LLAMA_ARMOR_SLOT_SPRITE`
- `private static final ResourceLocation ARMOR_SLOT_SPRITE`
- `private static final ResourceLocation HORSE_INVENTORY_LOCATION`
- `private final AbstractHorse horse`
- `private float xMouse`
- `private float yMouse`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void renderBg(GuiGraphics p_282553_,  float p_282998_,  int p_282929_,  int p_283133_)`
- `public void render(GuiGraphics p_281697_,  int p_282103_,  int p_283529_,  float p_283079_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## InventoryScreen

*class* `net.minecraft.client.gui.screens.inventory.InventoryScreen`

### Fields
- `private float xMouse`
- `private float yMouse`
- `private final RecipeBookComponent recipeBookComponent`
- `private boolean widthTooNarrow`
- `private boolean buttonClicked`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void containerTick()`
- `protected void init()`
- `protected void renderLabels(GuiGraphics p_281654_,  int p_283517_,  int p_283464_)`
- `public void render(GuiGraphics p_283246_,  int p_98876_,  int p_98877_,  float p_98878_)`
- `protected void renderBg(GuiGraphics p_281500_,  float p_281299_,  int p_283481_,  int p_281831_)`
- `public static void renderEntityInInventoryFollowsMouse(GuiGraphics p_282802_,  int p_275688_,  int p_275245_,  int p_275535_,  int p_301381_,  int p_299741_,  float p_275604_,  float p_275546_,  float p_300682_,  LivingEntity p_275689_)`
- `public static void renderEntityInInventory(GuiGraphics p_282665_,  float p_300023_,  float p_301239_,  int p_283622_,  org.joml.Vector3f p_298037_,  org.joml.Quaternionf p_281880_,  @Nullable  org.joml.Quaternionf p_282882_,  LivingEntity p_282466_)`
- `protected boolean isHovering(int p_98858_,  int p_98859_,  int p_98860_,  int p_98861_,  double p_98862_,  double p_98863_)`
- `public boolean mouseClicked(double p_98841_,  double p_98842_,  int p_98843_)`
- `public boolean mouseReleased(double p_98893_,  double p_98894_,  int p_98895_)`
- `protected boolean hasClickedOutside(double p_98845_,  double p_98846_,  int p_98847_,  int p_98848_,  int p_98849_)`
- `protected void slotClicked(Slot p_98865_,  int p_98866_,  int p_98867_,  ClickType p_98868_)`
- `public void recipesUpdated()`
- `public RecipeBookComponent getRecipeBookComponent()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.EffectRenderingInventoryScreen`: `canSeeEffects`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isPauseScreen`, `keyPressed`, `mouseDragged`, `onClose`, `removed`, `renderBackground`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## ItemCombinerScreen

*class* `net.minecraft.client.gui.screens.inventory.ItemCombinerScreen`

### Fields
- `private final ResourceLocation menuResource`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void subInit()`
- `protected void init()`
- `public void removed()`
- `public void render(GuiGraphics p_281810_,  int p_283312_,  int p_283420_,  float p_282956_)`
- `protected void renderFg(GuiGraphics p_283399_,  int p_98928_,  int p_98929_,  float p_98930_)`
- `protected void renderBg(GuiGraphics p_282749_,  float p_283494_,  int p_283098_,  int p_282054_)`
- `protected abstract void renderErrorIcon(GuiGraphics p_281990_,  int p_266822_,  int p_267045_)`
- `public void dataChanged(AbstractContainerMenu p_169759_,  int p_169760_,  int p_169761_)`
- `public void slotChanged(AbstractContainerMenu p_98910_,  int p_98911_,  ItemStack p_98912_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## JigsawBlockEditScreen

*class* `net.minecraft.client.gui.screens.inventory.JigsawBlockEditScreen`

### Fields
- `private static final int MAX_LEVELS` (= 7)
- `private static final Component JOINT_LABEL`
- `private static final Component POOL_LABEL`
- `private static final Component NAME_LABEL`
- `private static final Component TARGET_LABEL`
- `private static final Component FINAL_STATE_LABEL`
- `private final JigsawBlockEntity jigsawEntity`
- `private EditBox nameEdit`
- `private EditBox targetEdit`
- `private EditBox poolEdit`
- `private EditBox finalStateEdit`
- `int levels`
- `private boolean keepJigsaws`
- `private CycleButton<JigsawBlockEntity.JointType> jointButton`
- `private Button doneButton`
- `private Button generateButton`
- `private JigsawBlockEntity.JointType joint`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void onDone()`
- `private void onCancel()`
- `private void sendToServer()`
- `private void sendGenerate()`
- `public void onClose()`
- `protected void init()`
- `private void updateValidity()`
- `public void resize(Minecraft p_98960_,  int p_98961_,  int p_98962_)`
- `public boolean keyPressed(int p_98951_,  int p_98952_,  int p_98953_)`
- `public void render(GuiGraphics p_282514_,  int p_98956_,  int p_98957_,  float p_98958_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LecternScreen

*class* `net.minecraft.client.gui.screens.inventory.LecternScreen`

### Fields
- `private final LecternMenu menu`
- `private final ContainerListener listener`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.BookViewScreen`: `BOOK_LOCATION`, `EMPTY_ACCESS`, `IMAGE_HEIGHT`, `IMAGE_WIDTH`, `PAGE_INDICATOR_TEXT_Y_OFFSET`, `PAGE_TEXT_X_OFFSET`, `PAGE_TEXT_Y_OFFSET`, `TEXT_HEIGHT`, `TEXT_WIDTH`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public LecternMenu getMenu()`
- `protected void init()`
- `public void onClose()`
- `public void removed()`
- `protected void createMenuControls()`
- `protected void pageBack()`
- `protected void pageForward()`
- `protected boolean forcePage(int p_99031_)`
- `private void sendButtonClick(int p_99037_)`
- `public boolean isPauseScreen()`
- `void bookChanged()`
- `void pageChanged()`
- `protected void closeScreen()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.BookViewScreen`: `createPageControlButtons`, `getClickedComponentStyleAt`, `handleComponentClicked`, `keyPressed`, `loadPages`, `loadPages`, `mouseClicked`, `render`, `renderBackground`, `setBookAccess`, `setPage`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## LoomScreen

*class* `net.minecraft.client.gui.screens.inventory.LoomScreen`

### Fields
- `private static final ResourceLocation BANNER_SLOT_SPRITE`
- `private static final ResourceLocation DYE_SLOT_SPRITE`
- `private static final ResourceLocation PATTERN_SLOT_SPRITE`
- `private static final ResourceLocation SCROLLER_SPRITE`
- `private static final ResourceLocation SCROLLER_DISABLED_SPRITE`
- `private static final ResourceLocation PATTERN_SELECTED_SPRITE`
- `private static final ResourceLocation PATTERN_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation PATTERN_SPRITE`
- `private static final ResourceLocation ERROR_SPRITE`
- `private static final ResourceLocation BG_LOCATION`
- `private static final int PATTERN_COLUMNS` (= 4)
- `private static final int PATTERN_ROWS` (= 4)
- `private static final int SCROLLER_WIDTH` (= 12)
- `private static final int SCROLLER_HEIGHT` (= 15)
- `private static final int PATTERN_IMAGE_SIZE` (= 14)
- `private static final int SCROLLER_FULL_HEIGHT` (= 56)
- `private static final int PATTERNS_X` (= 60)
- `private static final int PATTERNS_Y` (= 13)
- `private ModelPart flag`
- `@Nullable private List<com.mojang.datafixers.util.Pair<Holder<BannerPattern>,DyeColor>> resultBannerPatterns`
- `private ItemStack bannerStack`
- `private ItemStack dyeStack`
- `private ItemStack patternStack`
- `private boolean displayPatterns`
- `private boolean hasMaxPatterns`
- `private float scrollOffs`
- `private boolean scrolling`
- `private int startRow`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `public void render(GuiGraphics p_283513_,  int p_282700_,  int p_282637_,  float p_281433_)`
- `private int totalRowCount()`
- `protected void renderBg(GuiGraphics p_282870_,  float p_281777_,  int p_283331_,  int p_283087_)`
- `private void renderPattern(GuiGraphics p_282452_,  Holder<BannerPattern> p_281940_,  int p_281872_,  int p_282995_)`
- `public boolean mouseClicked(double p_99083_,  double p_99084_,  int p_99085_)`
- `public boolean mouseDragged(double p_99087_,  double p_99088_,  int p_99089_,  double p_99090_,  double p_99091_)`
- `public boolean mouseScrolled(double p_99079_,  double p_99080_,  double p_99081_,  double p_298992_)`
- `protected boolean hasClickedOutside(double p_99093_,  double p_99094_,  int p_99095_,  int p_99096_,  int p_99097_)`
- `private void containerChanged()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## MenuAccess

*interface* `net.minecraft.client.gui.screens.inventory.MenuAccess`

### Methods
- `T getMenu()`

## MerchantScreen

*class* `net.minecraft.client.gui.screens.inventory.MerchantScreen`

### Fields
- `private static final ResourceLocation OUT_OF_STOCK_SPRITE`
- `private static final ResourceLocation EXPERIENCE_BAR_BACKGROUND_SPRITE`
- `private static final ResourceLocation EXPERIENCE_BAR_CURRENT_SPRITE`
- `private static final ResourceLocation EXPERIENCE_BAR_RESULT_SPRITE`
- `private static final ResourceLocation SCROLLER_SPRITE`
- `private static final ResourceLocation SCROLLER_DISABLED_SPRITE`
- `private static final ResourceLocation TRADE_ARROW_OUT_OF_STOCK_SPRITE`
- `private static final ResourceLocation TRADE_ARROW_SPRITE`
- `private static final ResourceLocation DISCOUNT_STRIKETHRUOGH_SPRITE`
- `private static final ResourceLocation VILLAGER_LOCATION`
- `private static final int TEXTURE_WIDTH` (= 512)
- `private static final int TEXTURE_HEIGHT` (= 256)
- `private static final int MERCHANT_MENU_PART_X` (= 99)
- `private static final int PROGRESS_BAR_X` (= 136)
- `private static final int PROGRESS_BAR_Y` (= 16)
- `private static final int SELL_ITEM_1_X` (= 5)
- `private static final int SELL_ITEM_2_X` (= 35)
- `private static final int BUY_ITEM_X` (= 68)
- `private static final int LABEL_Y` (= 6)
- `private static final int NUMBER_OF_OFFER_BUTTONS` (= 7)
- `private static final int TRADE_BUTTON_X` (= 5)
- `private static final int TRADE_BUTTON_HEIGHT` (= 20)
- `private static final int TRADE_BUTTON_WIDTH` (= 88)
- `private static final int SCROLLER_HEIGHT` (= 27)
- `private static final int SCROLLER_WIDTH` (= 6)
- `private static final int SCROLL_BAR_HEIGHT` (= 139)
- `private static final int SCROLL_BAR_TOP_POS_Y` (= 18)
- `private static final int SCROLL_BAR_START_X` (= 94)
- `private static final Component TRADES_LABEL`
- `private static final Component DEPRECATED_TOOLTIP`
- `private int shopItem`
- `private final MerchantScreen.TradeOfferButton[] tradeOfferButtons`
- `int scrollOff`
- `private boolean isDragging`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void postButtonClick()`
- `protected void init()`
- `protected void renderLabels(GuiGraphics p_283337_,  int p_282009_,  int p_283691_)`
- `protected void renderBg(GuiGraphics p_283072_,  float p_281275_,  int p_282312_,  int p_282984_)`
- `private void renderProgressBar(GuiGraphics p_281426_,  int p_283008_,  int p_283085_,  MerchantOffer p_282094_)`
- `private void renderScroller(GuiGraphics p_283030_,  int p_283154_,  int p_281664_,  MerchantOffers p_282877_)`
- `public void render(GuiGraphics p_283487_,  int p_281994_,  int p_282099_,  float p_281815_)`
- `private void renderButtonArrows(GuiGraphics p_283020_,  MerchantOffer p_281926_,  int p_282752_,  int p_282179_)`
- `private void renderAndDecorateCostA(GuiGraphics p_281357_,  ItemStack p_283466_,  ItemStack p_282046_,  int p_282403_,  int p_283601_)`
- `private boolean canScroll(int p_99141_)`
- `public boolean mouseScrolled(double p_99127_,  double p_99128_,  double p_99129_,  double p_298933_)`
- `public boolean mouseDragged(double p_99135_,  double p_99136_,  int p_99137_,  double p_99138_,  double p_99139_)`
- `public boolean mouseClicked(double p_99131_,  double p_99132_,  int p_99133_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## MerchantScreen.TradeOfferButton

*class* `net.minecraft.client.gui.screens.inventory.MerchantScreen.TradeOfferButton`

Enclosing class: MerchantScreen

### Fields
- `final int index`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public int getIndex()`
- `public void renderToolTip(GuiGraphics p_281313_,  int p_283342_,  int p_283060_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`, `renderWidget`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `playDownSound`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## MinecartCommandBlockEditScreen

*class* `net.minecraft.client.gui.screens.inventory.MinecartCommandBlockEditScreen`

### Fields
- `private final BaseCommandBlock commandBlock`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractCommandBlockEditScreen`: `cancelButton`, `commandEdit`, `commandSuggestions`, `doneButton`, `outputButton`, `previousEdit`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public BaseCommandBlock getCommandBlock()`
- `int getPreviousY()`
- `protected void init()`
- `protected void populateAndSendPacket(BaseCommandBlock p_99218_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractCommandBlockEditScreen`: `getUsageNarration`, `keyPressed`, `mouseClicked`, `mouseScrolled`, `onDone`, `render`, `resize`, `tick`, `updatePreviousOutput`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isPauseScreen`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onClose`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseDragged`, `mouseReleased`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## PageButton

*class* `net.minecraft.client.gui.screens.inventory.PageButton`

### Fields
- `private static final ResourceLocation PAGE_FORWARD_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation PAGE_FORWARD_SPRITE`
- `private static final ResourceLocation PAGE_BACKWARD_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation PAGE_BACKWARD_SPRITE`
- `private final boolean isForward`
- `private final boolean playTurnSound`

### Inherited fields
- from `net.minecraft.client.gui.components.Button`: `createNarration`, `DEFAULT_HEIGHT`, `DEFAULT_NARRATION`, `DEFAULT_WIDTH`, `onPress`, `SMALL_WIDTH`
- from `net.minecraft.client.gui.components.AbstractButton`: `SPRITES`, `TEXT_MARGIN`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void renderWidget(GuiGraphics p_283468_,  int p_282922_,  int p_283637_,  float p_282459_)`
- `public void playDownSound(SoundManager p_99231_)`

### Inherited methods
- from `net.minecraft.client.gui.components.Button`: `builder`, `createNarrationMessage`, `onPress`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractButton`: `keyPressed`, `onClick`, `renderString`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `onDrag`, `onRelease`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setFocused`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## ShulkerBoxScreen

*class* `net.minecraft.client.gui.screens.inventory.ShulkerBoxScreen`

### Fields
- `private static final ResourceLocation CONTAINER_TEXTURE`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281745_,  int p_282145_,  int p_282358_,  float p_283566_)`
- `protected void renderBg(GuiGraphics p_281362_,  float p_283080_,  int p_281303_,  int p_283275_)`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SignEditScreen

*class* `net.minecraft.client.gui.screens.inventory.SignEditScreen`

### Fields
- `public static final float MAGIC_SCALE_NUMBER` (= 62.500003814697266f)
- `public static final float MAGIC_TEXT_SCALE` (= 0.9765627980232239f)
- `private static final org.joml.Vector3f TEXT_SCALE`
- `@Nullable private SignRenderer.SignModel signModel`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractSignEditScreen`: `woodType`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void init()`
- `protected void offsetSign(GuiGraphics p_282503_,  BlockState p_282571_)`
- `protected void renderSignBackground(GuiGraphics p_281440_,  BlockState p_282401_)`
- `protected org.joml.Vector3f getSignTextScale()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractSignEditScreen`: `charTyped`, `isPauseScreen`, `keyPressed`, `onClose`, `removed`, `render`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SmithingScreen

*class* `net.minecraft.client.gui.screens.inventory.SmithingScreen`

### Fields
- `private static final ResourceLocation ERROR_SPRITE`
- `private static final ResourceLocation EMPTY_SLOT_SMITHING_TEMPLATE_ARMOR_TRIM`
- `private static final ResourceLocation EMPTY_SLOT_SMITHING_TEMPLATE_NETHERITE_UPGRADE`
- `private static final Component MISSING_TEMPLATE_TOOLTIP`
- `private static final Component ERROR_TOOLTIP`
- `private static final List<ResourceLocation> EMPTY_SLOT_SMITHING_TEMPLATES`
- `private static final int TITLE_LABEL_X` (= 44)
- `private static final int TITLE_LABEL_Y` (= 15)
- `private static final int ERROR_ICON_WIDTH` (= 28)
- `private static final int ERROR_ICON_HEIGHT` (= 21)
- `private static final int ERROR_ICON_X` (= 65)
- `private static final int ERROR_ICON_Y` (= 46)
- `private static final int TOOLTIP_WIDTH` (= 115)
- `private static final int ARMOR_STAND_Y_ROT` (= 210)
- `private static final int ARMOR_STAND_X_ROT` (= 25)
- `private static final org.joml.Vector3f ARMOR_STAND_TRANSLATION`
- `private static final org.joml.Quaternionf ARMOR_STAND_ANGLE`
- `private static final int ARMOR_STAND_SCALE` (= 25)
- `private static final int ARMOR_STAND_OFFSET_Y` (= 75)
- `private static final int ARMOR_STAND_OFFSET_X` (= 141)
- `private final CyclingSlotBackground templateIcon`
- `private final CyclingSlotBackground baseIcon`
- `private final CyclingSlotBackground additionalIcon`
- `@Nullable private ArmorStand armorStandPreview`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void subInit()`
- `public void containerTick()`
- `private Optional<SmithingTemplateItem> getTemplateItem()`
- `public void render(GuiGraphics p_281961_,  int p_282410_,  int p_283013_,  float p_282408_)`
- `protected void renderBg(GuiGraphics p_283264_,  float p_267158_,  int p_267266_,  int p_266722_)`
- `public void slotChanged(AbstractContainerMenu p_267217_,  int p_266842_,  ItemStack p_267208_)`
- `private void updateArmorStandPreview(ItemStack p_268225_)`
- `protected void renderErrorIcon(GuiGraphics p_281835_,  int p_283389_,  int p_282634_)`
- `private void renderOnboardingTooltips(GuiGraphics p_281668_,  int p_267192_,  int p_266859_)`
- `private boolean hasRecipeError()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.ItemCombinerScreen`: `dataChanged`, `init`, `removed`, `renderFg`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `onClose`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## SmokerScreen

*class* `net.minecraft.client.gui.screens.inventory.SmokerScreen`

### Fields
- `private static final ResourceLocation LIT_PROGRESS_SPRITE`
- `private static final ResourceLocation BURN_PROGRESS_SPRITE`
- `private static final ResourceLocation TEXTURE`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`: `recipeBookComponent`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractFurnaceScreen`: `charTyped`, `containerTick`, `getRecipeBookComponent`, `hasClickedOutside`, `init`, `keyPressed`, `mouseClicked`, `recipesUpdated`, `render`, `renderBg`, `slotClicked`
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `isHovering`, `isPauseScreen`, `mouseDragged`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `renderTooltip`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StonecutterScreen

*class* `net.minecraft.client.gui.screens.inventory.StonecutterScreen`

### Fields
- `private static final ResourceLocation SCROLLER_SPRITE`
- `private static final ResourceLocation SCROLLER_DISABLED_SPRITE`
- `private static final ResourceLocation RECIPE_SELECTED_SPRITE`
- `private static final ResourceLocation RECIPE_HIGHLIGHTED_SPRITE`
- `private static final ResourceLocation RECIPE_SPRITE`
- `private static final ResourceLocation BG_LOCATION`
- `private static final int SCROLLER_WIDTH` (= 12)
- `private static final int SCROLLER_HEIGHT` (= 15)
- `private static final int RECIPES_COLUMNS` (= 4)
- `private static final int RECIPES_ROWS` (= 3)
- `private static final int RECIPES_IMAGE_SIZE_WIDTH` (= 16)
- `private static final int RECIPES_IMAGE_SIZE_HEIGHT` (= 18)
- `private static final int SCROLLER_FULL_HEIGHT` (= 54)
- `private static final int RECIPES_X` (= 52)
- `private static final int RECIPES_Y` (= 14)
- `private float scrollOffs`
- `private boolean scrolling`
- `private int startIndex`
- `private boolean displayRecipes`

### Inherited fields
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `hoveredSlot`, `imageHeight`, `imageWidth`, `INVENTORY_LOCATION`, `inventoryLabelX`, `inventoryLabelY`, `isQuickCrafting`, `leftPos`, `menu`, `playerInventoryTitle`, `quickCraftSlots`, `SLOT_ITEM_BLIT_OFFSET`, `slotColor`, `titleLabelX`, `titleLabelY`, `topPos`
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `public void render(GuiGraphics p_281735_,  int p_282517_,  int p_282840_,  float p_282389_)`
- `protected void renderBg(GuiGraphics p_283115_,  float p_282453_,  int p_282940_,  int p_282328_)`
- `protected void renderTooltip(GuiGraphics p_282396_,  int p_283157_,  int p_282258_)`
- `private void renderButtons(GuiGraphics p_282733_,  int p_282136_,  int p_282147_,  int p_281987_,  int p_281276_,  int p_282688_)`
- `private void renderRecipes(GuiGraphics p_281999_,  int p_282658_,  int p_282563_,  int p_283352_)`
- `public boolean mouseClicked(double p_99318_,  double p_99319_,  int p_99320_)`
- `public boolean mouseDragged(double p_99322_,  double p_99323_,  int p_99324_,  double p_99325_,  double p_99326_)`
- `public boolean mouseScrolled(double p_99314_,  double p_99315_,  double p_99316_,  double p_297300_)`
- `private boolean isScrollBarActive()`
- `protected int getOffscreenRows()`
- `private void containerChanged()`

### Inherited methods
- from `net.minecraft.client.gui.screens.inventory.AbstractContainerScreen`: `checkHotbarKeyPressed`, `clearDraggingState`, `containerTick`, `getGuiLeft`, `getGuiTop`, `getMenu`, `getSlotColor`, `getSlotUnderMouse`, `getTooltipFromContainerItem`, `getXSize`, `getYSize`, `hasClickedOutside`, `init`, `isHovering`, `isPauseScreen`, `keyPressed`, `mouseReleased`, `onClose`, `removed`, `renderBackground`, `renderLabels`, `renderSlotHighlight`, `renderSlotHighlight`, `slotClicked`, `tick`
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removeWidget`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `resize`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`

## StructureBlockEditScreen

*class* `net.minecraft.client.gui.screens.inventory.StructureBlockEditScreen`

### Fields
- `private static final Component NAME_LABEL`
- `private static final Component POSITION_LABEL`
- `private static final Component SIZE_LABEL`
- `private static final Component INTEGRITY_LABEL`
- `private static final Component CUSTOM_DATA_LABEL`
- `private static final Component INCLUDE_ENTITIES_LABEL`
- `private static final Component DETECT_SIZE_LABEL`
- `private static final Component SHOW_AIR_LABEL`
- `private static final Component SHOW_BOUNDING_BOX_LABEL`
- `private static final com.google.common.collect.ImmutableList<StructureMode> ALL_MODES`
- `private static final com.google.common.collect.ImmutableList<StructureMode> DEFAULT_MODES`
- `private final StructureBlockEntity structure`
- `private Mirror initialMirror`
- `private Rotation initialRotation`
- `private StructureMode initialMode`
- `private boolean initialEntityIgnoring`
- `private boolean initialShowAir`
- `private boolean initialShowBoundingBox`
- `private EditBox nameEdit`
- `private EditBox posXEdit`
- `private EditBox posYEdit`
- `private EditBox posZEdit`
- `private EditBox sizeXEdit`
- `private EditBox sizeYEdit`
- `private EditBox sizeZEdit`
- `private EditBox integrityEdit`
- `private EditBox seedEdit`
- `private EditBox dataEdit`
- `private Button saveButton`
- `private Button loadButton`
- `private Button rot0Button`
- `private Button rot90Button`
- `private Button rot180Button`
- `private Button rot270Button`
- `private Button detectButton`
- `private CycleButton<Boolean> includeEntitiesButton`
- `private CycleButton<Mirror> mirrorButton`
- `private CycleButton<Boolean> toggleAirButton`
- `private CycleButton<Boolean> toggleBoundingBox`
- `private final DecimalFormat decimalFormat`

### Inherited fields
- from `net.minecraft.client.gui.screens.Screen`: `BACKGROUND_LOCATION`, `font`, `height`, `minecraft`, `renderables`, `screenExecutor`, `title`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `private void onDone()`
- `private void onCancel()`
- `protected void init()`
- `public void resize(Minecraft p_99411_,  int p_99412_,  int p_99413_)`
- `private void updateDirectionButtons()`
- `private void updateMode(StructureMode p_169839_)`
- `private boolean sendToServer(StructureBlockEntity.UpdateType p_99404_)`
- `private long parseSeed(String p_99427_)`
- `private float parseIntegrity(String p_99431_)`
- `private int parseCoordinate(String p_99436_)`
- `public void onClose()`
- `public boolean keyPressed(int p_99400_,  int p_99401_,  int p_99402_)`
- `public void render(GuiGraphics p_281951_,  int p_99407_,  int p_99408_,  float p_99409_)`
- `public boolean isPauseScreen()`

### Inherited methods
- from `net.minecraft.client.gui.screens.Screen`: `added`, `addRenderableOnly`, `addRenderableWidget`, `addWidget`, `afterKeyboardAction`, `afterMouseAction`, `afterMouseMove`, `changeFocus`, `children`, `clearWidgets`, `findNarratableWidget`, `getBackgroundMusic`, `getMinecraft`, `getNarrationMessage`, `getRectangle`, `getTitle`, `getTooltipFromItem`, `getUsageNarration`, `handleComponentClicked`, `handleDelayedNarration`, `hasAltDown`, `hasControlDown`, `hasShiftDown`, `hideWidgets`, `init`, `insertText`, `isCopy`, `isCut`, `isMouseOver`, `isPaste`, `isSelectAll`, `isValidCharacterForName`, `narrationEnabled`, `onFilesDrop`, `rebuildWidgets`, `removed`, `removeWidget`, `renderBackground`, `renderDirtBackground`, `renderTransparentBackground`, `renderWithTooltip`, `repositionElements`, `setInitialFocus`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `setTooltipForNextRenderPass`, `shouldCloseOnEsc`, `shouldNarrateNavigation`, `tick`, `triggerImmediateNarration`, `updateNarratedWidget`, `updateNarrationState`, `wrapScreenError`
- from `net.minecraft.client.gui.components.events.AbstractContainerEventHandler`: `getFocused`, `isDragging`, `setDragging`, `setFocused`
- from `net.minecraft.client.gui.components.events.ContainerEventHandler`: `charTyped`, `getChildAt`, `getCurrentFocusPath`, `isFocused`, `keyReleased`, `magicalSpecialHackyFocus`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `mouseScrolled`, `nextFocusPath`, `setFocused`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `mouseMoved`
- from `net.minecraft.client.gui.components.TabOrderedElement`: `getTabOrderGroup`
