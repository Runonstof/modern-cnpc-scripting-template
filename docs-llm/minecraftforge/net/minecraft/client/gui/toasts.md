# net.minecraft.client.gui.toasts

- [AdvancementToast](#advancementtoast)
- [GuiToast](#guitoast)
- [IToast](#itoast)
- [IToast.Visibility](#itoast.visibility)
- [RecipeToast](#recipetoast)
- [SystemToast](#systemtoast)
- [SystemToast.Type](#systemtoast.type)
- [TutorialToast](#tutorialtoast)
- [TutorialToast.Icons](#tutorialtoast.icons)
## AdvancementToast

*class* `net.minecraft.client.gui.toasts.AdvancementToast`

All Implemented Interfaces: IToast

### Inherited fields
- from `net.minecraft.client.gui.toasts.IToast`: `NO_TOKEN`, `TEXTURE_TOASTS`

### Methods
- `public IToast.Visibility draw(GuiToast toastGui,  long delta)`

### Inherited methods
- from `net.minecraft.client.gui.toasts.IToast`: `getType`

## GuiToast

*class* `net.minecraft.client.gui.toasts.GuiToast`

### Inherited fields
- from `net.minecraft.client.gui.Gui`: `ICONS`, `OPTIONS_BACKGROUND`, `STAT_ICONS`, `zLevel`

### Methods
- `public void drawToast(ScaledResolution resolution)`
- `public <T extends IToast> T getToast(java.lang.Class<? extends T> p_192990_1_,  java.lang.Object p_192990_2_)`
- `public void clear()`
- `public void add(IToast toastIn)`
- `public Minecraft getMinecraft()`

### Inherited methods
- from `net.minecraft.client.gui.Gui`: `drawCenteredString`, `drawGradientRect`, `drawHorizontalLine`, `drawModalRectWithCustomSizedTexture`, `drawRect`, `drawScaledCustomSizeModalRect`, `drawString`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawTexturedModalRect`, `drawVerticalLine`

## IToast

*interface* `net.minecraft.client.gui.toasts.IToast`

### Fields
- `static final ResourceLocation TEXTURE_TOASTS`
- `static final java.lang.Object NO_TOKEN`

### Methods
- `IToast.Visibility draw(GuiToast toastGui,  long delta)`
- `default java.lang.Object getType()`

## IToast.Visibility

*enum* `net.minecraft.client.gui.toasts.IToast.Visibility`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<IToast.Visibility>

Enclosing interface: IToast

### Fields
- `public static final IToast.Visibility SHOW`
- `public static final IToast.Visibility HIDE`

### Methods
- `public static IToast.Visibility[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (IToast.Visibility c : IToast.Visibility.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static IToast.Visibility valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void playSound(SoundHandler handler)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RecipeToast

*class* `net.minecraft.client.gui.toasts.RecipeToast`

All Implemented Interfaces: IToast

### Inherited fields
- from `net.minecraft.client.gui.toasts.IToast`: `NO_TOKEN`, `TEXTURE_TOASTS`

### Methods
- `public IToast.Visibility draw(GuiToast toastGui,  long delta)`
- `public void addRecipeOutput(ItemStack output)`
- `public static void addOrUpdate(GuiToast p_193665_0_,  IRecipe p_193665_1_)`

### Inherited methods
- from `net.minecraft.client.gui.toasts.IToast`: `getType`

## SystemToast

*class* `net.minecraft.client.gui.toasts.SystemToast`

All Implemented Interfaces: IToast

### Inherited fields
- from `net.minecraft.client.gui.toasts.IToast`: `NO_TOKEN`, `TEXTURE_TOASTS`

### Methods
- `public IToast.Visibility draw(GuiToast toastGui,  long delta)`
- `public void setDisplayedText(ITextComponent titleComponent,  ITextComponent subtitleComponent)`
- `public SystemToast.Type getType()`
- `public static void addOrUpdate(GuiToast p_193657_0_,  SystemToast.Type p_193657_1_,  ITextComponent p_193657_2_,  ITextComponent p_193657_3_)`

## SystemToast.Type

*enum* `net.minecraft.client.gui.toasts.SystemToast.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SystemToast.Type>

Enclosing class: SystemToast

### Fields
- `public static final SystemToast.Type TUTORIAL_HINT`
- `public static final SystemToast.Type NARRATOR_TOGGLE`

### Methods
- `public static SystemToast.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SystemToast.Type c : SystemToast.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SystemToast.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## TutorialToast

*class* `net.minecraft.client.gui.toasts.TutorialToast`

All Implemented Interfaces: IToast

### Inherited fields
- from `net.minecraft.client.gui.toasts.IToast`: `NO_TOKEN`, `TEXTURE_TOASTS`

### Methods
- `public IToast.Visibility draw(GuiToast toastGui,  long delta)`
- `public void hide()`
- `public void setProgress(float progress)`

### Inherited methods
- from `net.minecraft.client.gui.toasts.IToast`: `getType`

## TutorialToast.Icons

*enum* `net.minecraft.client.gui.toasts.TutorialToast.Icons`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<TutorialToast.Icons>

Enclosing class: TutorialToast

### Fields
- `public static final TutorialToast.Icons MOVEMENT_KEYS`
- `public static final TutorialToast.Icons MOUSE`
- `public static final TutorialToast.Icons TREE`
- `public static final TutorialToast.Icons RECIPE_BOOK`
- `public static final TutorialToast.Icons WOODEN_PLANKS`

### Methods
- `public static TutorialToast.Icons[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (TutorialToast.Icons c : TutorialToast.Icons.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static TutorialToast.Icons valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public void draw(Gui guiIn,  int x,  int y)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
