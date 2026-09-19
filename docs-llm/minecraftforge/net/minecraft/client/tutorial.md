# net.minecraft.client.tutorial

- [BundleTutorial](#bundletutorial)
- [Class TutorialSteps](#class-tutorialsteps)
- [CompletedTutorialStepInstance](#completedtutorialstepinstance)
- [CraftPlanksTutorialStep](#craftplankstutorialstep)
- [FindTreeTutorialStepInstance](#findtreetutorialstepinstance)
- [MovementTutorialStepInstance](#movementtutorialstepinstance)
- [OpenInventoryTutorialStep](#openinventorytutorialstep)
- [PunchTreeTutorialStepInstance](#punchtreetutorialstepinstance)
- [Tutorial](#tutorial)
- [Tutorial.TimedToast](#tutorial.timedtoast)
- [TutorialStepInstance](#tutorialstepinstance)
## BundleTutorial

*class* `net.minecraft.client.tutorial.BundleTutorial`

### Fields
- `private final Tutorial tutorial`
- `private final Options options`
- `@Nullable private TutorialToast toast`

### Methods
- `private void showToast()`
- `private void clearToast()`
- `public void onInventoryAction(ItemStack p_175007_,  ItemStack p_175008_,  ClickAction p_175009_)`

## Class TutorialSteps

*enum* `net.minecraft.client.tutorial.Class TutorialSteps`

### Fields
- `private final String name`
- `private final Function<Tutorial,? extends TutorialStepInstance> constructor`

### Methods
- `public static TutorialSteps[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TutorialSteps valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public TutorialStepInstance create(Tutorial p_120641_)`
- `public String getName()`
- `public static TutorialSteps getByName(String p_120643_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## CompletedTutorialStepInstance

*class* `net.minecraft.client.tutorial.CompletedTutorialStepInstance`

### Inherited methods
- from `net.minecraft.client.tutorial.TutorialStepInstance`: `clear`, `onDestroyBlock`, `onGetItem`, `onInput`, `onLookAt`, `onMouse`, `onOpenInventory`, `tick`

## CraftPlanksTutorialStep

*class* `net.minecraft.client.tutorial.CraftPlanksTutorialStep`

### Fields
- `private static final int HINT_DELAY` (= 1200)
- `private static final Component CRAFT_TITLE`
- `private static final Component CRAFT_DESCRIPTION`
- `private final Tutorial tutorial`
- `private TutorialToast toast`
- `private int timeWaiting`

### Methods
- `public void tick()`
- `public void clear()`
- `public void onGetItem(ItemStack p_120470_)`
- `public static boolean hasCraftedPlanksPreviously(LocalPlayer p_205663_,  TagKey<Item> p_205664_)`

### Inherited methods
- from `net.minecraft.client.tutorial.TutorialStepInstance`: `onDestroyBlock`, `onInput`, `onLookAt`, `onMouse`, `onOpenInventory`

## FindTreeTutorialStepInstance

*class* `net.minecraft.client.tutorial.FindTreeTutorialStepInstance`

### Fields
- `private static final int HINT_DELAY` (= 6000)
- `private static final Component TITLE`
- `private static final Component DESCRIPTION`
- `private final Tutorial tutorial`
- `private TutorialToast toast`
- `private int timeWaiting`

### Methods
- `public void tick()`
- `public void clear()`
- `public void onLookAt(ClientLevel p_120501_,  HitResult p_120502_)`
- `public void onGetItem(ItemStack p_120499_)`
- `private static boolean hasCollectedTreeItems(LocalPlayer p_235272_)`
- `public static boolean hasPunchedTreesPreviously(LocalPlayer p_120504_)`

### Inherited methods
- from `net.minecraft.client.tutorial.TutorialStepInstance`: `onDestroyBlock`, `onInput`, `onMouse`, `onOpenInventory`

## MovementTutorialStepInstance

*class* `net.minecraft.client.tutorial.MovementTutorialStepInstance`

### Fields
- `private static final int MINIMUM_TIME_MOVED` (= 40)
- `private static final int MINIMUM_TIME_LOOKED` (= 40)
- `private static final int MOVE_HINT_DELAY` (= 100)
- `private static final int LOOK_HINT_DELAY` (= 20)
- `private static final int INCOMPLETE` (= -1)
- `private static final Component MOVE_TITLE`
- `private static final Component MOVE_DESCRIPTION`
- `private static final Component LOOK_TITLE`
- `private static final Component LOOK_DESCRIPTION`
- `private final Tutorial tutorial`
- `private TutorialToast moveToast`
- `private TutorialToast lookToast`
- `private int timeWaiting`
- `private int timeMoved`
- `private int timeLooked`
- `private boolean moved`
- `private boolean turned`
- `private int moveCompleted`
- `private int lookCompleted`

### Methods
- `public void tick()`
- `public void clear()`
- `public void onInput(Input p_120528_)`
- `public void onMouse(double p_120525_,  double p_120526_)`

### Inherited methods
- from `net.minecraft.client.tutorial.TutorialStepInstance`: `onDestroyBlock`, `onGetItem`, `onLookAt`, `onOpenInventory`

## OpenInventoryTutorialStep

*class* `net.minecraft.client.tutorial.OpenInventoryTutorialStep`

### Fields
- `private static final int HINT_DELAY` (= 600)
- `private static final Component TITLE`
- `private static final Component DESCRIPTION`
- `private final Tutorial tutorial`
- `private TutorialToast toast`
- `private int timeWaiting`

### Methods
- `public void tick()`
- `public void clear()`
- `public void onOpenInventory()`

### Inherited methods
- from `net.minecraft.client.tutorial.TutorialStepInstance`: `onDestroyBlock`, `onGetItem`, `onInput`, `onLookAt`, `onMouse`

## PunchTreeTutorialStepInstance

*class* `net.minecraft.client.tutorial.PunchTreeTutorialStepInstance`

### Fields
- `private static final int HINT_DELAY` (= 600)
- `private static final Component TITLE`
- `private static final Component DESCRIPTION`
- `private final Tutorial tutorial`
- `private TutorialToast toast`
- `private int timeWaiting`
- `private int resetCount`

### Methods
- `public void tick()`
- `public void clear()`
- `public void onDestroyBlock(ClientLevel p_120554_,  BlockPos p_120555_,  BlockState p_120556_,  float p_120557_)`
- `public void onGetItem(ItemStack p_120552_)`

### Inherited methods
- from `net.minecraft.client.tutorial.TutorialStepInstance`: `onInput`, `onLookAt`, `onMouse`, `onOpenInventory`

## Tutorial

*class* `net.minecraft.client.tutorial.Tutorial`

### Fields
- `private final Minecraft minecraft`
- `@Nullable private TutorialStepInstance instance`
- `private final List<Tutorial.TimedToast> timedToasts`
- `private final BundleTutorial bundleTutorial`

### Methods
- `public void onInput(Input p_120587_)`
- `public void onMouse(double p_120566_,  double p_120567_)`
- `public void onLookAt(@Nullable  ClientLevel p_120579_,  @Nullable  HitResult p_120580_)`
- `public void onDestroyBlock(ClientLevel p_120582_,  BlockPos p_120583_,  BlockState p_120584_,  float p_120585_)`
- `public void onOpenInventory()`
- `public void onGetItem(ItemStack p_120569_)`
- `public void stop()`
- `public void start()`
- `public void addTimedToast(TutorialToast p_120573_,  int p_120574_)`
- `public void removeTimedToast(TutorialToast p_120571_)`
- `public void tick()`
- `public void setStep(TutorialSteps p_120589_)`
- `public Minecraft getMinecraft()`
- `public boolean isSurvival()`
- `public static Component key(String p_120593_)`
- `public void onInventoryAction(ItemStack p_175025_,  ItemStack p_175026_,  ClickAction p_175027_)`

## Tutorial.TimedToast

*class* `net.minecraft.client.tutorial.Tutorial.TimedToast`

Enclosing class: Tutorial

### Fields
- `final TutorialToast toast`
- `private final int durationTicks`
- `private int progress`

### Methods
- `private boolean updateProgress()`

## TutorialStepInstance

*interface* `net.minecraft.client.tutorial.TutorialStepInstance`

### Methods
- `default void clear()`
- `default void tick()`
- `default void onInput(Input p_120623_)`
- `default void onMouse(double p_120614_,  double p_120615_)`
- `default void onLookAt(ClientLevel p_120617_,  HitResult p_120618_)`
- `default void onDestroyBlock(ClientLevel p_120619_,  BlockPos p_120620_,  BlockState p_120621_,  float p_120622_)`
- `default void onOpenInventory()`
- `default void onGetItem(ItemStack p_120616_)`
