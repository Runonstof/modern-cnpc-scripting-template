# net.minecraft.client.tutorial

- [CompletedTutorialStep](#completedtutorialstep)
- [CraftPlanksStep](#craftplanksstep)
- [FindTreeStep](#findtreestep)
- [ITutorialStep](#itutorialstep)
- [MovementStep](#movementstep)
- [OpenInventoryStep](#openinventorystep)
- [PunchTreeStep](#punchtreestep)
- [Tutorial](#tutorial)
- [TutorialSteps](#tutorialsteps)
## CompletedTutorialStep

*class* `net.minecraft.client.tutorial.CompletedTutorialStep`

All Implemented Interfaces: ITutorialStep

### Inherited methods
- from `net.minecraft.client.tutorial.ITutorialStep`: `handleMouse`, `handleMovement`, `handleSetSlot`, `onHitBlock`, `onMouseHover`, `onStop`, `openInventory`, `update`

## CraftPlanksStep

*class* `net.minecraft.client.tutorial.CraftPlanksStep`

All Implemented Interfaces: ITutorialStep

### Methods
- `public void update()`
- `public void onStop()`
- `public void handleSetSlot(ItemStack stack)`
- `public static boolean didPlayerCraftedPlanks(EntityPlayerSP player)`

### Inherited methods
- from `net.minecraft.client.tutorial.ITutorialStep`: `handleMouse`, `handleMovement`, `onHitBlock`, `onMouseHover`, `openInventory`

## FindTreeStep

*class* `net.minecraft.client.tutorial.FindTreeStep`

All Implemented Interfaces: ITutorialStep

### Methods
- `public void update()`
- `public void onStop()`
- `public void onMouseHover(WorldClient worldIn,  RayTraceResult result)`
- `public void handleSetSlot(ItemStack stack)`
- `public static boolean hasPunchedTreesPreviously(EntityPlayerSP p_194070_0_)`

### Inherited methods
- from `net.minecraft.client.tutorial.ITutorialStep`: `handleMouse`, `handleMovement`, `onHitBlock`, `openInventory`

## ITutorialStep

*interface* `net.minecraft.client.tutorial.ITutorialStep`

### Methods
- `default void onStop()`
- `default void update()`
- `default void handleMovement(MovementInput input)`
- `default void handleMouse(MouseHelper mouseHelperIn)`
- `default void onMouseHover(WorldClient worldIn,  RayTraceResult result)`
- `default void onHitBlock(WorldClient worldIn,  BlockPos pos,  IBlockState state,  float diggingStage)`
- `default void openInventory()`
- `default void handleSetSlot(ItemStack stack)`

## MovementStep

*class* `net.minecraft.client.tutorial.MovementStep`

All Implemented Interfaces: ITutorialStep

### Methods
- `public void update()`
- `public void onStop()`
- `public void handleMovement(MovementInput input)`
- `public void handleMouse(MouseHelper mouseHelperIn)`

### Inherited methods
- from `net.minecraft.client.tutorial.ITutorialStep`: `handleSetSlot`, `onHitBlock`, `onMouseHover`, `openInventory`

## OpenInventoryStep

*class* `net.minecraft.client.tutorial.OpenInventoryStep`

All Implemented Interfaces: ITutorialStep

### Methods
- `public void update()`
- `public void onStop()`
- `public void openInventory()`

### Inherited methods
- from `net.minecraft.client.tutorial.ITutorialStep`: `handleMouse`, `handleMovement`, `handleSetSlot`, `onHitBlock`, `onMouseHover`

## PunchTreeStep

*class* `net.minecraft.client.tutorial.PunchTreeStep`

All Implemented Interfaces: ITutorialStep

### Methods
- `public void update()`
- `public void onStop()`
- `public void onHitBlock(WorldClient worldIn,  BlockPos pos,  IBlockState state,  float diggingStage)`
- `public void handleSetSlot(ItemStack stack)`

### Inherited methods
- from `net.minecraft.client.tutorial.ITutorialStep`: `handleMouse`, `handleMovement`, `onMouseHover`, `openInventory`

## Tutorial

*class* `net.minecraft.client.tutorial.Tutorial`

### Methods
- `public void handleMovement(MovementInput p_193293_1_)`
- `public void handleMouse(MouseHelper p_193299_1_)`
- `public void onMouseHover(WorldClient worldIn,  RayTraceResult result)`
- `public void onHitBlock(WorldClient worldIn,  BlockPos pos,  IBlockState state,  float diggingStage)`
- `public void openInventory()`
- `public void handleSetSlot(ItemStack stack)`
- `public void stop()`
- `public void reload()`
- `public void update()`
- `public void setStep(TutorialSteps step)`
- `public Minecraft getMinecraft()`
- `public GameType getGameType()`
- `public static ITextComponent createKeybindComponent(java.lang.String keybind)`

## TutorialSteps

*enum* `net.minecraft.client.tutorial.TutorialSteps`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TutorialSteps>

### Fields
- `public static final TutorialSteps MOVEMENT`
- `public static final TutorialSteps FIND_TREE`
- `public static final TutorialSteps PUNCH_TREE`
- `public static final TutorialSteps OPEN_INVENTORY`
- `public static final TutorialSteps CRAFT_PLANKS`
- `public static final TutorialSteps NONE`

### Methods
- `public static TutorialSteps[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TutorialSteps c : TutorialSteps.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TutorialSteps valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public ITutorialStep create(Tutorial tutorial)`
- `public java.lang.String getName()`
- `public static TutorialSteps getTutorial(java.lang.String tutorialName)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
