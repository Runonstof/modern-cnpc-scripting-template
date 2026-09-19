# net.minecraft.client.gui.components.toasts

- [AdvancementToast](#advancementtoast)
- [Class SystemToast.SystemToastIds](#class-systemtoast.systemtoastids)
- [Class Toast.Visibility](#class-toast.visibility)
- [Class TutorialToast.Icons](#class-tutorialtoast.icons)
- [RecipeToast](#recipetoast)
- [SystemToast](#systemtoast)
- [Toast](#toast)
- [ToastComponent](#toastcomponent)
- [ToastComponent.ToastInstance](#toastcomponent.toastinstance)
- [TutorialToast](#tutorialtoast)
## AdvancementToast

*class* `net.minecraft.client.gui.components.toasts.AdvancementToast`

### Fields
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `public static final int DISPLAY_TIME` (= 5000)
- `private final AdvancementHolder advancement`
- `private boolean playedSound`

### Inherited fields
- from `net.minecraft.client.gui.components.toasts.Toast`: `NO_TOKEN`, `SLOT_HEIGHT`

### Methods
- `public Toast.Visibility render(GuiGraphics p_281813_,  ToastComponent p_282243_,  long p_282604_)`

### Inherited methods
- from `net.minecraft.client.gui.components.toasts.Toast`: `getToken`, `height`, `slotCount`, `width`

## Class SystemToast.SystemToastIds

*enum* `net.minecraft.client.gui.components.toasts.Class SystemToast.SystemToastIds`

Enclosing class: SystemToast

### Fields
- `final long displayTime`

### Methods
- `public static SystemToast.SystemToastIds[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static SystemToast.SystemToastIds valueOf(String name)`
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

## Class Toast.Visibility

*enum* `net.minecraft.client.gui.components.toasts.Class Toast.Visibility`

Enclosing interface: Toast

### Fields
- `private final SoundEvent soundEvent`

### Methods
- `public static Toast.Visibility[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Toast.Visibility valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public void playSound(SoundManager p_94910_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class TutorialToast.Icons

*enum* `net.minecraft.client.gui.components.toasts.Class TutorialToast.Icons`

Enclosing class: TutorialToast

### Fields
- `private final ResourceLocation sprite`

### Methods
- `public static TutorialToast.Icons[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TutorialToast.Icons valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public void render(GuiGraphics p_282818_,  int p_283064_,  int p_282765_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RecipeToast

*class* `net.minecraft.client.gui.components.toasts.RecipeToast`

### Fields
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `private static final long DISPLAY_TIME` (= 5000L)
- `private static final Component TITLE_TEXT`
- `private static final Component DESCRIPTION_TEXT`
- `private final List<RecipeHolder<?>> recipes`
- `private long lastChanged`
- `private boolean changed`

### Inherited fields
- from `net.minecraft.client.gui.components.toasts.Toast`: `NO_TOKEN`, `SLOT_HEIGHT`

### Methods
- `public Toast.Visibility render(GuiGraphics p_281667_,  ToastComponent p_281321_,  long p_281779_)`
- `private void addItem(RecipeHolder<?> p_297895_)`
- `public static void addOrUpdate(ToastComponent p_94818_,  RecipeHolder<?> p_300003_)`

### Inherited methods
- from `net.minecraft.client.gui.components.toasts.Toast`: `getToken`, `height`, `slotCount`, `width`

## SystemToast

*class* `net.minecraft.client.gui.components.toasts.SystemToast`

### Fields
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `private static final int MAX_LINE_SIZE` (= 200)
- `private static final int LINE_SPACING` (= 12)
- `private static final int MARGIN` (= 10)
- `private final SystemToast.SystemToastIds id`
- `private Component title`
- `private List<FormattedCharSequence> messageLines`
- `private long lastChanged`
- `private boolean changed`
- `private final int width`

### Inherited fields
- from `net.minecraft.client.gui.components.toasts.Toast`: `NO_TOKEN`, `SLOT_HEIGHT`

### Methods
- `public static SystemToast multiline(Minecraft p_94848_,  SystemToast.SystemToastIds p_94849_,  Component p_94850_,  Component p_94851_)`
- `private static com.google.common.collect.ImmutableList<FormattedCharSequence> nullToEmpty(@Nullable  Component p_94861_)`
- `public int width()`
- `public int height()`
- `public Toast.Visibility render(GuiGraphics p_281624_,  ToastComponent p_282333_,  long p_282762_)`
- `private void renderBackgroundRow(GuiGraphics p_281840_,  int p_281750_,  int p_282371_,  int p_283613_,  int p_282880_)`
- `public void reset(Component p_94863_,  @Nullable  Component p_94864_)`
- `public SystemToast.SystemToastIds getToken()`
- `public static void add(ToastComponent p_94856_,  SystemToast.SystemToastIds p_94857_,  Component p_94858_,  @Nullable  Component p_94859_)`
- `public static void addOrUpdate(ToastComponent p_94870_,  SystemToast.SystemToastIds p_94871_,  Component p_94872_,  @Nullable  Component p_94873_)`
- `public static void onWorldAccessFailure(Minecraft p_94853_,  String p_94854_)`
- `public static void onWorldDeleteFailure(Minecraft p_94867_,  String p_94868_)`
- `public static void onPackCopyFailure(Minecraft p_94876_,  String p_94877_)`

### Inherited methods
- from `net.minecraft.client.gui.components.toasts.Toast`: `slotCount`

## Toast

*interface* `net.minecraft.client.gui.components.toasts.Toast`

### Fields
- `static final Object NO_TOKEN`
- `static final int SLOT_HEIGHT` (= 32)

### Methods
- `Toast.Visibility render(GuiGraphics p_281969_,  ToastComponent p_94897_,  long p_94898_)`
- `default Object getToken()`
- `default int width()`
- `default int height()`
- `default int slotCount()`

## ToastComponent

*class* `net.minecraft.client.gui.components.toasts.ToastComponent`

### Fields
- `private static final int SLOT_COUNT` (= 5)
- `private static final int NO_SPACE` (= -1)
- `final Minecraft minecraft`
- `private final List<ToastComponent.ToastInstance<?>> visible`
- `private final BitSet occupiedSlots`
- `private final Deque<Toast> queued`

### Methods
- `public void render(GuiGraphics p_283249_)`
- `private int findFreeIndex(int p_243272_)`
- `private int freeSlots()`
- `@Nullable public <T extends Toast> T getToast(Class<? extends T> p_94927_,  Object p_94928_)`
- `public void clear()`
- `public void addToast(Toast p_94923_)`
- `public Minecraft getMinecraft()`
- `public double getNotificationDisplayTimeMultiplier()`

## ToastComponent.ToastInstance

*class* `net.minecraft.client.gui.components.toasts.ToastComponent.ToastInstance`

Enclosing class: ToastComponent

### Fields
- `private static final long ANIMATION_TIME` (= 600L)
- `private final T extends Toast toast`
- `final int index`
- `final int slotCount`
- `private long animationTime`
- `private long visibleTime`
- `private Toast.Visibility visibility`

### Methods
- `public T getToast()`
- `private float getVisibility(long p_94948_)`
- `public boolean render(int p_282887_,  GuiGraphics p_283668_)`

## TutorialToast

*class* `net.minecraft.client.gui.components.toasts.TutorialToast`

### Fields
- `private static final ResourceLocation BACKGROUND_SPRITE`
- `public static final int PROGRESS_BAR_WIDTH` (= 154)
- `public static final int PROGRESS_BAR_HEIGHT` (= 1)
- `public static final int PROGRESS_BAR_X` (= 3)
- `public static final int PROGRESS_BAR_Y` (= 28)
- `private final TutorialToast.Icons icon`
- `private final Component title`
- `@Nullable private final Component message`
- `private Toast.Visibility visibility`
- `private long lastProgressTime`
- `private float lastProgress`
- `private float progress`
- `private final boolean progressable`

### Inherited fields
- from `net.minecraft.client.gui.components.toasts.Toast`: `NO_TOKEN`, `SLOT_HEIGHT`

### Methods
- `public Toast.Visibility render(GuiGraphics p_283197_,  ToastComponent p_283009_,  long p_281902_)`
- `public void hide()`
- `public void updateProgress(float p_94963_)`

### Inherited methods
- from `net.minecraft.client.gui.components.toasts.Toast`: `getToken`, `height`, `slotCount`, `width`
