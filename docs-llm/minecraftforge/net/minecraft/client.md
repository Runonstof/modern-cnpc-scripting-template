# net.minecraft.client

- [Camera](#camera)
- [Camera.NearPlane](#camera.nearplane)
- [Class AttackIndicatorStatus](#class-attackindicatorstatus)
- [Class CameraType](#class-cameratype)
- [Class CloudStatus](#class-cloudstatus)
- [Class GraphicsStatus](#class-graphicsstatus)
- [Class GuiMessageTag.Icon](#class-guimessagetag.icon)
- [Class InputType](#class-inputtype)
- [Class Minecraft.ChatStatus](#class-minecraft.chatstatus)
- [Class NarratorStatus](#class-narratorstatus)
- [Class OptionInstance.UnitDouble](#class-optioninstance.unitdouble)
- [Class ParticleStatus](#class-particlestatus)
- [Class PrioritizeChunkUpdates](#class-prioritizechunkupdates)
- [Class RecipeBookCategories](#class-recipebookcategories)
- [Class ResourceLoadStateTracker.ReloadReason](#class-resourceloadstatetracker.reloadreason)
- [Class User.Type](#class-user.type)
- [ClientBrandRetriever](#clientbrandretriever)
- [ClientRecipeBook](#clientrecipebook)
- [CommandHistory](#commandhistory)
- [ComponentCollector](#componentcollector)
- [DebugQueryHandler](#debugqueryhandler)
- [GameNarrator](#gamenarrator)
- [GameNarrator.NarratorInitException](#gamenarrator.narratorinitexception)
- [GuiMessage](#guimessage)
- [GuiMessage.Line](#guimessage.line)
- [GuiMessageTag](#guimessagetag)
- [HotbarManager](#hotbarmanager)
- [KeyboardHandler](#keyboardhandler)
- [KeyMapping](#keymapping)
- [Minecraft](#minecraft)
- [Minecraft.GameLoadCookie](#minecraft.gameloadcookie)
- [MouseHandler](#mousehandler)
- [OptionInstance](#optioninstance)
- [OptionInstance.AltEnum](#optioninstance.altenum)
- [OptionInstance.CaptionBasedToString](#optioninstance.captionbasedtostring)
- [OptionInstance.ClampingLazyMaxIntRange](#optioninstance.clampinglazymaxintrange)
- [OptionInstance.CycleableValueSet](#optioninstance.cycleablevalueset)
- [OptionInstance.CycleableValueSet.ValueSetter](#optioninstance.cycleablevalueset.valuesetter)
- [OptionInstance.Enum](#optioninstance.enum)
- [OptionInstance.IntRange](#optioninstance.intrange)
- [OptionInstance.IntRangeBase](#optioninstance.intrangebase)
- [OptionInstance.LazyEnum](#optioninstance.lazyenum)
- [OptionInstance.OptionInstanceSliderButton](#optioninstance.optioninstancesliderbutton)
- [OptionInstance.SliderableOrCyclableValueSet](#optioninstance.sliderableorcyclablevalueset)
- [OptionInstance.SliderableValueSet](#optioninstance.sliderablevalueset)
- [OptionInstance.TooltipSupplier](#optioninstance.tooltipsupplier)
- [OptionInstance.ValueSet](#optioninstance.valueset)
- [Options](#options)
- [Options.FieldAccess](#options.fieldaccess)
- [PeriodicNotificationManager](#periodicnotificationmanager)
- [PeriodicNotificationManager.Notification](#periodicnotificationmanager.notification)
- [PeriodicNotificationManager.NotificationTask](#periodicnotificationmanager.notificationtask)
- [Realms32BitWarningStatus](#realms32bitwarningstatus)
- [ResourceLoadStateTracker](#resourceloadstatetracker)
- [ResourceLoadStateTracker.RecoveryInfo](#resourceloadstatetracker.recoveryinfo)
- [ResourceLoadStateTracker.ReloadState](#resourceloadstatetracker.reloadstate)
- [Screenshot](#screenshot)
- [StringSplitter](#stringsplitter)
- [StringSplitter.FlatComponents](#stringsplitter.flatcomponents)
- [StringSplitter.LineBreakFinder](#stringsplitter.linebreakfinder)
- [StringSplitter.LineComponent](#stringsplitter.linecomponent)
- [StringSplitter.LinePosConsumer](#stringsplitter.lineposconsumer)
- [StringSplitter.WidthLimitedCharSink](#stringsplitter.widthlimitedcharsink)
- [StringSplitter.WidthProvider](#stringsplitter.widthprovider)
- [Timer](#timer)
- [ToggleKeyMapping](#togglekeymapping)
- [User](#user)
## Camera

*class* `net.minecraft.client.Camera`

### Fields
- `private boolean initialized`
- `private BlockGetter level`
- `private Entity entity`
- `private Vec3 position`
- `private final BlockPos.MutableBlockPos blockPosition`
- `private final org.joml.Vector3f forwards`
- `private final org.joml.Vector3f up`
- `private final org.joml.Vector3f left`
- `private float xRot`
- `private float yRot`
- `private final org.joml.Quaternionf rotation`
- `private boolean detached`
- `private float eyeHeight`
- `private float eyeHeightOld`
- `public static final float FOG_DISTANCE_SCALE` (= 0.0833333358168602f)

### Methods
- `public void setup(BlockGetter p_90576_,  Entity p_90577_,  boolean p_90578_,  boolean p_90579_,  float p_90580_)`
- `public void tick()`
- `private double getMaxZoom(double p_90567_)`
- `protected void move(double p_90569_,  double p_90570_,  double p_90571_)`
- `protected void setRotation(float p_90573_,  float p_90574_)`
- `protected void setPosition(double p_90585_,  double p_90586_,  double p_90587_)`
- `protected void setPosition(Vec3 p_90582_)`
- `public Vec3 getPosition()`
- `public BlockPos getBlockPosition()`
- `public float getXRot()`
- `public float getYRot()`
- `public org.joml.Quaternionf rotation()`
- `public Entity getEntity()`
- `public boolean isInitialized()`
- `public boolean isDetached()`
- `public Camera.NearPlane getNearPlane()`
- `public FogType getFluidInCamera()`
- `public final org.joml.Vector3f getLookVector()`
- `public final org.joml.Vector3f getUpVector()`
- `public final org.joml.Vector3f getLeftVector()`
- `public void reset()`
- `public void setAnglesInternal(float yaw,  float pitch)`
- `public BlockState getBlockAtCamera()`

## Camera.NearPlane

*class* `net.minecraft.client.Camera.NearPlane`

Enclosing class: Camera

### Fields
- `final Vec3 forward`
- `private final Vec3 left`
- `private final Vec3 up`

### Methods
- `public Vec3 getTopLeft()`
- `public Vec3 getTopRight()`
- `public Vec3 getBottomLeft()`
- `public Vec3 getBottomRight()`
- `public Vec3 getPointOnPlane(float p_167696_,  float p_167697_)`

## Class AttackIndicatorStatus

*enum* `net.minecraft.client.Class AttackIndicatorStatus`

### Fields
- `private static final IntFunction<AttackIndicatorStatus> BY_ID`
- `private final int id`
- `private final String key`

### Methods
- `public static AttackIndicatorStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AttackIndicatorStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getKey()`
- `public static AttackIndicatorStatus byId(int p_90510_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class CameraType

*enum* `net.minecraft.client.Class CameraType`

### Fields
- `private static final CameraType[] VALUES`
- `private final boolean firstPerson`
- `private final boolean mirrored`

### Methods
- `public static CameraType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CameraType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isFirstPerson()`
- `public boolean isMirrored()`
- `public CameraType cycle()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class CloudStatus

*enum* `net.minecraft.client.Class CloudStatus`

### Fields
- `public static final com.mojang.serialization.Codec<CloudStatus> CODEC`
- `private final int id`
- `private final String legacyName`
- `private final String key`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static CloudStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static CloudStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getSerializedName()`
- `public int getId()`
- `public String getKey()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class GraphicsStatus

*enum* `net.minecraft.client.Class GraphicsStatus`

### Fields
- `private static final IntFunction<GraphicsStatus> BY_ID`
- `private final int id`
- `private final String key`

### Methods
- `public static GraphicsStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GraphicsStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getKey()`
- `public String toString()`
- `public static GraphicsStatus byId(int p_90775_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class GuiMessageTag.Icon

*enum* `net.minecraft.client.Class GuiMessageTag.Icon`

Enclosing class: GuiMessageTag

### Fields
- `public final ResourceLocation sprite`
- `public final int width`
- `public final int height`

### Methods
- `public static GuiMessageTag.Icon[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static GuiMessageTag.Icon valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public void draw(GuiGraphics p_282284_,  int p_282597_,  int p_283579_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class InputType

*enum* `net.minecraft.client.Class InputType`

### Methods
- `public static InputType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static InputType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean isMouse()`
- `public boolean isKeyboard()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class Minecraft.ChatStatus

*enum* `net.minecraft.client.Class Minecraft.ChatStatus`

Enclosing class: Minecraft

### Fields
- `static final Component INFO_DISABLED_BY_PROFILE`
- `private final Component message`

### Methods
- `public static Minecraft.ChatStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Minecraft.ChatStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Component getMessage()`
- `public abstract boolean isChatAllowed(boolean p_168035_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class NarratorStatus

*enum* `net.minecraft.client.Class NarratorStatus`

### Fields
- `private static final IntFunction<NarratorStatus> BY_ID`
- `private final int id`
- `private final Component name`

### Methods
- `public static NarratorStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static NarratorStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public Component getName()`
- `public static NarratorStatus byId(int p_91620_)`
- `public boolean shouldNarrateChat()`
- `public boolean shouldNarrateSystem()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class OptionInstance.UnitDouble

*enum* `net.minecraft.client.Class OptionInstance.UnitDouble`

Enclosing class: OptionInstance<T>

### Methods
- `public static OptionInstance.UnitDouble[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static OptionInstance.UnitDouble valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Optional<Double> validateValue(Double p_231747_)`
- `public double toSliderValue(Double p_231756_)`
- `public Double fromSliderValue(double p_231741_)`
- `public <R> OptionInstance.SliderableValueSet<R> xmap(DoubleFunction<? extends R> p_231751_,  ToDoubleFunction<? super R> p_231752_)`
- `public com.mojang.serialization.Codec<Double> codec()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.client.OptionInstance.SliderableValueSet`: `createButton`

## Class ParticleStatus

*enum* `net.minecraft.client.Class ParticleStatus`

### Fields
- `private static final IntFunction<ParticleStatus> BY_ID`
- `private final int id`
- `private final String key`

### Methods
- `public static ParticleStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ParticleStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getKey()`
- `public int getId()`
- `public static ParticleStatus byId(int p_92197_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class PrioritizeChunkUpdates

*enum* `net.minecraft.client.Class PrioritizeChunkUpdates`

### Fields
- `private static final IntFunction<PrioritizeChunkUpdates> BY_ID`
- `private final int id`
- `private final String key`

### Methods
- `public static PrioritizeChunkUpdates[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PrioritizeChunkUpdates valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public int getId()`
- `public String getKey()`
- `public static PrioritizeChunkUpdates byId(int p_193788_)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraft.util.OptionEnum`: `getCaption`

## Class RecipeBookCategories

*enum* `net.minecraft.client.Class RecipeBookCategories`

### Fields
- `public static final List<RecipeBookCategories> SMOKER_CATEGORIES`
- `public static final List<RecipeBookCategories> BLAST_FURNACE_CATEGORIES`
- `public static final List<RecipeBookCategories> FURNACE_CATEGORIES`
- `public static final List<RecipeBookCategories> CRAFTING_CATEGORIES`
- `public static final Map<RecipeBookCategories,List<RecipeBookCategories>> AGGREGATE_CATEGORIES`
- `private final List<ItemStack> itemIcons`

### Methods
- `public static RecipeBookCategories[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RecipeBookCategories valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static List<RecipeBookCategories> getCategories(RecipeBookType p_92270_)`
- `public List<ItemStack> getIconItems()`
- `public static RecipeBookCategories create(String name,  ItemStack... icons)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`
- from `net.minecraftforge.common.IExtensibleEnum`: `init`

## Class ResourceLoadStateTracker.ReloadReason

*enum* `net.minecraft.client.Class ResourceLoadStateTracker.ReloadReason`

Enclosing class: ResourceLoadStateTracker

### Fields
- `final String name`

### Methods
- `public static ResourceLoadStateTracker.ReloadReason[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ResourceLoadStateTracker.ReloadReason valueOf(String name)`
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

## Class User.Type

*enum* `net.minecraft.client.Class User.Type`

Enclosing class: User

### Fields
- `private static final Map<String,User.Type> BY_NAME`
- `private final String name`

### Methods
- `public static User.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static User.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `@Nullable public static User.Type byName(String p_92562_)`
- `public String getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClientBrandRetriever

*class* `net.minecraft.client.ClientBrandRetriever`

### Fields
- `public static final String VANILLA_NAME` (= "vanilla")

### Methods
- `public static String getClientModName()`

## ClientRecipeBook

*class* `net.minecraft.client.ClientRecipeBook`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private Map<RecipeBookCategories,List<RecipeCollection>> collectionsByTab`
- `private List<RecipeCollection> allCollections`

### Inherited fields
- from `net.minecraft.stats.RecipeBook`: `highlight`, `known`

### Methods
- `public void setupCollections(Iterable<RecipeHolder<?>> p_266814_,  RegistryAccess p_266878_)`
- `private static Map<RecipeBookCategories,List<List<RecipeHolder<?>>>> categorizeAndGroupRecipes(Iterable<RecipeHolder<?>> p_90643_)`
- `private static RecipeBookCategories getCategory(RecipeHolder<?> p_299041_)`
- `public List<RecipeCollection> getCollections()`
- `public List<RecipeCollection> getCollection(RecipeBookCategories p_90624_)`

### Inherited methods
- from `net.minecraft.stats.RecipeBook`: `add`, `add`, `addHighlight`, `addHighlight`, `contains`, `contains`, `copyOverData`, `getBookSettings`, `isFiltering`, `isFiltering`, `isOpen`, `remove`, `remove`, `removeHighlight`, `setBookSetting`, `setBookSettings`, `setFiltering`, `setOpen`, `willHighlight`

## CommandHistory

*class* `net.minecraft.client.CommandHistory`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_PERSISTED_COMMAND_HISTORY` (= 50)
- `private static final String PERSISTED_COMMANDS_FILE_NAME` (= "command_history.txt")
- `private final Path commandsPath`
- `private final ArrayListDeque<String> lastCommands`

### Methods
- `public void addCommand(String p_298813_)`
- `private void save()`
- `public Collection<String> history()`

## ComponentCollector

*class* `net.minecraft.client.ComponentCollector`

### Fields
- `private final List<FormattedText> parts`

### Methods
- `public void append(FormattedText p_90676_)`
- `@Nullable public FormattedText getResult()`
- `public FormattedText getResultOrEmpty()`
- `public void reset()`

## DebugQueryHandler

*class* `net.minecraft.client.DebugQueryHandler`

### Fields
- `private final ClientPacketListener connection`
- `private int transactionId`
- `@Nullable private Consumer<CompoundTag> callback`

### Methods
- `public boolean handleResponse(int p_90706_,  @Nullable  CompoundTag p_90707_)`
- `private int startTransaction(Consumer<CompoundTag> p_90712_)`
- `public void queryEntityTag(int p_90703_,  Consumer<CompoundTag> p_90704_)`
- `public void queryBlockEntityTag(BlockPos p_90709_,  Consumer<CompoundTag> p_90710_)`

## GameNarrator

*class* `net.minecraft.client.GameNarrator`

### Fields
- `public static final Component NO_TITLE`
- `private static final org.slf4j.Logger LOGGER`
- `private final Minecraft minecraft`
- `private final com.mojang.text2speech.Narrator narrator`

### Methods
- `public void sayChat(Component p_263413_)`
- `public void say(Component p_263389_)`
- `public void sayNow(Component p_168786_)`
- `public void sayNow(String p_93320_)`
- `private NarratorStatus getStatus()`
- `private void logNarratedMessage(String p_168788_)`
- `public void updateNarratorStatus(NarratorStatus p_93318_)`
- `public boolean isActive()`
- `public void clear()`
- `public void destroy()`
- `public void checkStatus(boolean p_289016_)`

## GameNarrator.NarratorInitException

*class* `net.minecraft.client.GameNarrator.NarratorInitException`

Enclosing class: GameNarrator

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## GuiMessage

*record* `net.minecraft.client.GuiMessage`

### Fields
- `private final int addedTime`
  The field for the addedTime record component.
- `private final Component content`
  The field for the content record component.
- `@Nullable private final MessageSignature signature`
  The field for the signature record component.
- `@Nullable private final GuiMessageTag tag`
  The field for the tag record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int addedTime()`
  Returns the value of the addedTime record component.
  - returns: the value of the addedTime record component
- `public Component content()`
  Returns the value of the content record component.
  - returns: the value of the content record component
- `@Nullable public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `@Nullable public GuiMessageTag tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component

## GuiMessage.Line

*record* `net.minecraft.client.GuiMessage.Line`

Enclosing class: GuiMessage

### Fields
- `private final int addedTime`
  The field for the addedTime record component.
- `private final FormattedCharSequence content`
  The field for the content record component.
- `@Nullable private final GuiMessageTag tag`
  The field for the tag record component.
- `private final boolean endOfEntry`
  The field for the endOfEntry record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int addedTime()`
  Returns the value of the addedTime record component.
  - returns: the value of the addedTime record component
- `public FormattedCharSequence content()`
  Returns the value of the content record component.
  - returns: the value of the content record component
- `@Nullable public GuiMessageTag tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component
- `public boolean endOfEntry()`
  Returns the value of the endOfEntry record component.
  - returns: the value of the endOfEntry record component

## GuiMessageTag

*record* `net.minecraft.client.GuiMessageTag`

### Fields
- `private final int indicatorColor`
  The field for the indicatorColor record component.
- `@Nullable private final GuiMessageTag.Icon icon`
  The field for the icon record component.
- `@Nullable private final Component text`
  The field for the text record component.
- `@Nullable private final String logTag`
  The field for the logTag record component.
- `private static final Component SYSTEM_TEXT`
- `private static final Component SYSTEM_TEXT_SINGLE_PLAYER`
- `private static final Component CHAT_NOT_SECURE_TEXT`
- `private static final Component CHAT_MODIFIED_TEXT`
- `private static final Component CHAT_ERROR_TEXT`
- `private static final int CHAT_NOT_SECURE_INDICATOR_COLOR` (= 13684944)
- `private static final int CHAT_MODIFIED_INDICATOR_COLOR` (= 6316128)
- `private static final GuiMessageTag SYSTEM`
- `private static final GuiMessageTag SYSTEM_SINGLE_PLAYER`
- `private static final GuiMessageTag CHAT_NOT_SECURE`
- `private static final GuiMessageTag CHAT_ERROR`

### Methods
- `public static GuiMessageTag system()`
- `public static GuiMessageTag systemSinglePlayer()`
- `public static GuiMessageTag chatNotSecure()`
- `public static GuiMessageTag chatModified(String p_242878_)`
- `public static GuiMessageTag chatError()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int indicatorColor()`
  Returns the value of the indicatorColor record component.
  - returns: the value of the indicatorColor record component
- `@Nullable public GuiMessageTag.Icon icon()`
  Returns the value of the icon record component.
  - returns: the value of the icon record component
- `@Nullable public Component text()`
  Returns the value of the text record component.
  - returns: the value of the text record component
- `@Nullable public String logTag()`
  Returns the value of the logTag record component.
  - returns: the value of the logTag record component

## HotbarManager

*class* `net.minecraft.client.HotbarManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final int NUM_HOTBAR_GROUPS` (= 9)
- `private final File optionsFile`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private final Hotbar[] hotbars`
- `private boolean loaded`

### Methods
- `private void load()`
- `public void save()`
- `public Hotbar get(int p_90807_)`

## KeyboardHandler

*class* `net.minecraft.client.KeyboardHandler`

### Fields
- `public static final int DEBUG_CRASH_TIME` (= 10000)
- `private final Minecraft minecraft`
- `private final ClipboardManager clipboardManager`
- `private long debugCrashKeyTime`
- `private long debugCrashKeyReportedTime`
- `private long debugCrashKeyReportedCount`
- `private boolean handledDebugKey`

### Methods
- `private boolean handleChunkDebugKeys(int p_167814_)`
- `private void debugComponent(ChatFormatting p_167825_,  Component p_167826_)`
- `private void debugFeedbackComponent(Component p_167823_)`
- `private void debugFeedbackTranslated(String p_90914_,  Object... p_90915_)`
- `private void debugWarningTranslated(String p_90949_,  Object... p_90950_)`
- `private void debugFeedback(String p_167838_,  Object... p_167839_)`
- `private boolean handleDebugKeys(int p_90933_)`
- `private void copyRecreateCommand(boolean p_90929_,  boolean p_90930_)`
- `private void copyCreateBlockCommand(BlockState p_90900_,  BlockPos p_90901_,  @Nullable  CompoundTag p_90902_)`
- `private void copyCreateEntityCommand(ResourceLocation p_90923_,  Vec3 p_90924_,  @Nullable  CompoundTag p_90925_)`
- `public void keyPress(long p_90894_,  int p_90895_,  int p_90896_,  int p_90897_,  int p_90898_)`
- `private void charTyped(long p_90890_,  int p_90891_,  int p_90892_)`
- `public void setup(long p_90888_)`
- `public String getClipboard()`
- `public void setClipboard(String p_90912_)`
- `public void tick()`

## KeyMapping

*class* `net.minecraft.client.KeyMapping`

### Fields
- `private static final Map<String,KeyMapping> ALL`
- `private static final KeyMappingLookup MAP`
- `private static final Set<String> CATEGORIES`
- `public static final String CATEGORY_MOVEMENT` (= "key.categories.movement")
- `public static final String CATEGORY_MISC` (= "key.categories.misc")
- `public static final String CATEGORY_MULTIPLAYER` (= "key.categories.multiplayer")
- `public static final String CATEGORY_GAMEPLAY` (= "key.categories.gameplay")
- `public static final String CATEGORY_INVENTORY` (= "key.categories.inventory")
- `public static final String CATEGORY_INTERFACE` (= "key.categories.ui")
- `public static final String CATEGORY_CREATIVE` (= "key.categories.creative")
- `private static final Map<String,Integer> CATEGORY_SORT_ORDER`
- `private final String name`
- `private final InputConstants.Key defaultKey`
- `private final String category`
- `private InputConstants.Key key`
- `boolean isDown`
- `private int clickCount`
- `private KeyModifier keyModifierDefault`
  Forge Start
- `private KeyModifier keyModifier`
- `private IKeyConflictContext keyConflictContext`

### Methods
- `public static void click(InputConstants.Key p_90836_)`
- `public static void set(InputConstants.Key p_90838_,  boolean p_90839_)`
- `public static void setAll()`
- `public static void releaseAll()`
- `public static void resetToggleKeys()`
- `public static void resetMapping()`
- `public boolean isDown()`
- `public String getCategory()`
- `public boolean consumeClick()`
- `private void release()`
- `public String getName()`
- `public InputConstants.Key getDefaultKey()`
- `public void setKey(InputConstants.Key p_90849_)`
- `public int compareTo(KeyMapping p_90841_)`
- `public static Supplier<Component> createNameSupplier(String p_90843_)`
- `public boolean same(KeyMapping p_90851_)`
- `public boolean isUnbound()`
- `public boolean matches(int p_90833_,  int p_90834_)`
- `public boolean matchesMouse(int p_90831_)`
- `public Component getTranslatedKeyMessage()`
- `public boolean isDefault()`
- `public String saveString()`
- `public void setDown(boolean p_90846_)`
- `public InputConstants.Key getKey()`
- `public void setKeyConflictContext(IKeyConflictContext keyConflictContext)`
- `public IKeyConflictContext getKeyConflictContext()`
- `public KeyModifier getDefaultKeyModifier()`
- `public KeyModifier getKeyModifier()`
- `public void setKeyModifierAndCode(@Nullable  KeyModifier keyModifier,  InputConstants.Key keyCode)`

### Inherited methods
- from `net.minecraftforge.client.extensions.IForgeKeyMapping`: `hasKeyModifierConflict`, `isActiveAndMatches`, `isConflictContextAndModifierActive`, `setToDefault`

## Minecraft

*class* `net.minecraft.client.Minecraft`

### Fields
- `static Minecraft instance`
- `private static final org.slf4j.Logger LOGGER`
- `public static final boolean ON_OSX`
- `private static final int MAX_TICKS_PER_UPDATE` (= 10)
- `public static final ResourceLocation DEFAULT_FONT`
- `public static final ResourceLocation UNIFORM_FONT`
- `public static final ResourceLocation ALT_FONT`
- `private static final ResourceLocation REGIONAL_COMPLIANCIES`
- `private static final CompletableFuture<Unit> RESOURCE_RELOAD_INITIAL_TASK`
- `private static final Component SOCIAL_INTERACTIONS_NOT_AVAILABLE`
- `public static final String UPDATE_DRIVERS_ADVICE` (= "Please make sure you have up-to-date drivers (see aka.ms/mcdriver for instructions).")
- `private final Path resourcePackDirectory`
- `private final CompletableFuture<com.mojang.authlib.yggdrasil.ProfileResult> profileFuture`
- `public final TextureManager textureManager`
- `private final com.mojang.datafixers.DataFixer fixerUpper`
- `private final VirtualScreen virtualScreen`
- `private final Window window`
- `private final Timer timer`
- `private final RenderBuffers renderBuffers`
- `public final LevelRenderer levelRenderer`
- `private final EntityRenderDispatcher entityRenderDispatcher`
- `private final ItemRenderer itemRenderer`
- `public final ParticleEngine particleEngine`
- `private final SearchRegistry searchRegistry`
- `private final User user`
- `public final Font font`
- `public final Font fontFilterFishy`
- `public final GameRenderer gameRenderer`
- `public final DebugRenderer debugRenderer`
- `private final AtomicReference<StoringChunkProgressListener> progressListener`
- `public final Gui gui`
- `public final Options options`
- `private final HotbarManager hotbarManager`
- `public final MouseHandler mouseHandler`
- `public final KeyboardHandler keyboardHandler`
- `private InputType lastInputType`
- `public final File gameDirectory`
- `private final String launchedVersion`
- `private final String versionType`
- `private final Proxy proxy`
- `private final LevelStorageSource levelSource`
- `private final boolean is64bit`
- `private final boolean demo`
- `private final boolean allowsMultiplayer`
- `private final boolean allowsChat`
- `private final ReloadableResourceManager resourceManager`
- `private final VanillaPackResources vanillaPackResources`
- `private final DownloadedPackSource downloadedPackSource`
- `private final PackRepository resourcePackRepository`
- `private final LanguageManager languageManager`
- `private final BlockColors blockColors`
- `private final ItemColors itemColors`
- `private final RenderTarget mainRenderTarget`
- `private final SoundManager soundManager`
- `private final MusicManager musicManager`
- `private final FontManager fontManager`
- `private final SplashManager splashManager`
- `private final GpuWarnlistManager gpuWarnlistManager`
- `private final PeriodicNotificationManager regionalCompliancies`
- `private final com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService authenticationService`
- `private final com.mojang.authlib.minecraft.MinecraftSessionService minecraftSessionService`
- `private final com.mojang.authlib.minecraft.UserApiService userApiService`
- `private final SkinManager skinManager`
- `private final ModelManager modelManager`
- `private final BlockRenderDispatcher blockRenderer`
- `private final PaintingTextureManager paintingTextures`
- `private final MobEffectTextureManager mobEffectTextures`
- `private final GuiSpriteManager guiSprites`
- `private final ToastComponent toast`
- `private final Tutorial tutorial`
- `private final PlayerSocialManager playerSocialManager`
- `private final EntityModelSet entityModels`
- `private final BlockEntityRenderDispatcher blockEntityRenderDispatcher`
- `private final ClientTelemetryManager telemetryManager`
- `private final ProfileKeyPairManager profileKeyPairManager`
- `private final RealmsDataFetcher realmsDataFetcher`
- `private final QuickPlayLog quickPlayLog`
- `@Nullable public MultiPlayerGameMode gameMode`
- `@Nullable public ClientLevel level`
- `@Nullable public LocalPlayer player`
- `@Nullable private IntegratedServer singleplayerServer`
- `@Nullable private Connection pendingConnection`
- `private boolean isLocalServer`
- `@Nullable public Entity cameraEntity`
- `@Nullable public Entity crosshairPickEntity`
- `@Nullable public HitResult hitResult`
- `private int rightClickDelay`
- `protected int missTime`
- `private volatile boolean pause`
- `private float pausePartialTick`
- `private long lastNanoTime`
- `private long lastTime`
- `private int frames`
- `public boolean noRender`
- `@Nullable public Screen screen`
- `@Nullable private Overlay overlay`
- `private Thread gameThread`
- `private volatile boolean running`
- `@Nullable private Supplier<CrashReport> delayedCrash`
- `private static int fps`
- `public String fpsString`
- `private long frameTimeNs`
- `public boolean wireframe`
- `public boolean sectionPath`
- `public boolean sectionVisibility`
- `public boolean smartCull`
- `private boolean windowActive`
- `private final Queue<Runnable> progressTasks`
- `@Nullable private CompletableFuture<Void> pendingReload`
- `@Nullable private TutorialToast socialInteractionsToast`
- `private ProfilerFiller profiler`
- `private int fpsPieRenderTicks`
- `private final ContinuousProfiler fpsPieProfiler`
- `@Nullable private ProfileResults fpsPieResults`
- `private MetricsRecorder metricsRecorder`
- `private final ResourceLoadStateTracker reloadStateTracker`
- `private long savedCpuDuration`
- `private double gpuUtilization`
- `@Nullable private TimerQuery.FrameProfile currentFrameProfile`
- `private final Realms32BitWarningStatus realms32BitWarningStatus`
- `private final GameNarrator narrator`
- `private final ChatListener chatListener`
- `private ReportingContext reportingContext`
- `private final CommandHistory commandHistory`
- `private final DirectoryValidator directoryValidator`
- `private boolean gameLoadFinished`
- `private String debugPath`
- `private float realPartialTick`

### Methods
- `private void onResourceLoadFinished(@Nullable  Minecraft.GameLoadCookie p_299693_)`
- `private void onGameLoadFinished(@Nullable  Minecraft.GameLoadCookie p_300808_)`
- `public boolean isGameLoadFinished()`
- `private Runnable buildInitialScreens(@Nullable  Minecraft.GameLoadCookie p_299870_)`
- `private void addInitialScreens(List<Function<Runnable,Screen>> p_297818_)`
- `private static boolean countryEqualsISO3(Object p_210783_)`
- `public void updateTitle()`
- `private String createTitle()`
- `private com.mojang.authlib.minecraft.UserApiService createUserApiService(com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService p_193586_,  GameConfig p_193587_)`
- `public static ModCheck checkModStatus()`
- `private void rollbackResourcePacks(Throwable p_91240_,  @Nullable  Minecraft.GameLoadCookie p_299515_)`
- `public void clearResourcePacksOnError(Throwable p_91242_,  @Nullable  Component p_91243_,  @Nullable  Minecraft.GameLoadCookie p_299857_)`
- `private void abortResourcePackRecovery()`
- `private void addResourcePackLoadFailToast(@Nullable  Component p_273566_)`
- `public void run()`
- `void selectMainFont(boolean p_91337_)`
- `public void createSearchTrees()`
- `private void onFullscreenError(int p_91114_,  long p_91115_)`
- `private static boolean checkIs64Bit()`
- `public RenderTarget getMainRenderTarget()`
- `public String getLaunchedVersion()`
- `public String getVersionType()`
- `public void delayCrash(CrashReport p_231413_)`
- `public void delayCrashRaw(CrashReport p_231440_)`
- `public static void crash(CrashReport p_91333_)`
- `public boolean isEnforceUnicode()`
- `public CompletableFuture<Void> reloadResourcePacks()`
- `private CompletableFuture<Void> reloadResourcePacks(boolean p_168020_,  @Nullable  Minecraft.GameLoadCookie p_300647_)`
- `private void selfTest()`
- `public LevelStorageSource getLevelSource()`
- `private void openChatScreen(String p_91327_)`
- `public void setScreen(@Nullable  Screen p_91153_)`
- `public void setOverlay(@Nullable  Overlay p_91151_)`
- `public void destroy()`
- `public void close()`
- `private void runTick(boolean p_91384_)`
- `private ProfilerFiller constructProfiler(boolean p_167971_,  @Nullable  SingleTickProfiler p_167972_)`
- `private void finishProfilers(boolean p_91339_,  @Nullable  SingleTickProfiler p_91340_)`
- `public void resizeDisplay()`
- `public void cursorEntered()`
- `public int getFps()`
- `public long getFrameTimeNs()`
- `private int getFramerateLimit()`
- `public void emergencySave()`
- `public boolean debugClientMetricsStart(Consumer<Component> p_167947_)`
- `private void debugClientMetricsStop()`
- `private void debugClientMetricsCancel()`
- `private Path archiveProfilingReport(SystemReport p_167857_,  List<Path> p_167858_)`
- `public void debugFpsMeterKeyPress(int p_91112_)`
- `private void renderFpsMeter(GuiGraphics p_281277_,  ProfileResults p_281574_)`
- `public void stop()`
- `public boolean isRunning()`
- `public void pauseGame(boolean p_91359_)`
- `private void continueAttack(boolean p_91387_)`
- `private boolean startAttack()`
- `private void startUseItem()`
- `public MusicManager getMusicManager()`
- `public void tick()`
- `private boolean isMultiplayerServer()`
- `private void handleKeybinds()`
- `public ClientTelemetryManager getTelemetryManager()`
- `public double getGpuUtilization()`
- `public ProfileKeyPairManager getProfileKeyPairManager()`
- `public WorldOpenFlows createWorldOpenFlows()`
- `public void doWorldLoad(String p_261891_,  LevelStorageSource.LevelStorageAccess p_261564_,  PackRepository p_261826_,  WorldStem p_261470_,  boolean p_261465_)`
- `public void setLevel(ClientLevel p_91157_)`
- `public void disconnect()`
- `public void disconnect(Screen p_91321_)`
- `public void clearClientLevel(Screen p_297406_)`
- `private void updateScreenAndTick(Screen p_91363_)`
- `public void forceSetScreen(Screen p_91347_)`
- `private void updateLevelInEngines(@Nullable  ClientLevel p_91325_)`
- `public boolean telemetryOptInExtra()`
- `public boolean extraTelemetryAvailable()`
- `public boolean allowsTelemetry()`
- `public boolean allowsMultiplayer()`
- `public boolean allowsRealms()`
- `@Nullable public com.mojang.authlib.minecraft.BanDetails multiplayerBan()`
- `public boolean isNameBanned()`
- `public boolean isBlocked(UUID p_91247_)`
- `public Minecraft.ChatStatus getChatStatus()`
- `public final boolean isDemo()`
- `@Nullable public ClientPacketListener getConnection()`
- `public static boolean renderNames()`
- `public static boolean useFancyGraphics()`
- `public static boolean useShaderTransparency()`
- `public static boolean useAmbientOcclusion()`
- `private void pickBlock()`
- `private void addCustomNbtData(ItemStack p_263370_,  BlockEntity p_263368_)`
- `public CrashReport fillReport(CrashReport p_91355_)`
- `public static void fillReport(@Nullable  Minecraft p_167873_,  @Nullable  LanguageManager p_167874_,  String p_167875_,  @Nullable  Options p_167876_,  CrashReport p_167877_)`
- `private static SystemReport fillSystemReport(SystemReport p_167851_,  @Nullable  Minecraft p_167852_,  @Nullable  LanguageManager p_167853_,  String p_167854_,  Options p_167855_)`
- `public static Minecraft getInstance()`
- `public CompletableFuture<Void> delayTextureReload()`
- `public void updateReportEnvironment(ReportEnvironment p_239477_)`
- `@Nullable public ServerData getCurrentServer()`
- `public boolean isLocalServer()`
- `public boolean hasSingleplayerServer()`
- `@Nullable public IntegratedServer getSingleplayerServer()`
- `public boolean isSingleplayer()`
- `public boolean isLocalPlayer(UUID p_298914_)`
- `public User getUser()`
- `public com.mojang.authlib.GameProfile getGameProfile()`
- `public Proxy getProxy()`
- `public TextureManager getTextureManager()`
- `public ResourceManager getResourceManager()`
- `public PackRepository getResourcePackRepository()`
- `public VanillaPackResources getVanillaPackResources()`
- `public DownloadedPackSource getDownloadedPackSource()`
- `public Path getResourcePackDirectory()`
- `public LanguageManager getLanguageManager()`
- `public Function<ResourceLocation,TextureAtlasSprite> getTextureAtlas(ResourceLocation p_91259_)`
- `public boolean is64Bit()`
- `public boolean isPaused()`
- `public GpuWarnlistManager getGpuWarnlistManager()`
- `public SoundManager getSoundManager()`
- `public Music getSituationalMusic()`
- `public com.mojang.authlib.minecraft.MinecraftSessionService getMinecraftSessionService()`
- `public SkinManager getSkinManager()`
- `@Nullable public Entity getCameraEntity()`
- `public void setCameraEntity(Entity p_91119_)`
- `public boolean shouldEntityAppearGlowing(Entity p_91315_)`
- `protected Thread getRunningThread()`
- `protected Runnable wrapRunnable(Runnable p_91376_)`
- `protected boolean shouldRun(Runnable p_91365_)`
- `public BlockRenderDispatcher getBlockRenderer()`
- `public EntityRenderDispatcher getEntityRenderDispatcher()`
- `public BlockEntityRenderDispatcher getBlockEntityRenderDispatcher()`
- `public ItemRenderer getItemRenderer()`
- `public <T> SearchTree<T> getSearchTree(SearchRegistry.Key<T> p_231373_)`
- `public <T> void populateSearchTree(SearchRegistry.Key<T> p_231375_,  List<T> p_231376_)`
- `public com.mojang.datafixers.DataFixer getFixerUpper()`
- `public float getFrameTime()`
- `public float getDeltaFrameTime()`
- `public BlockColors getBlockColors()`
- `public boolean showOnlyReducedInfo()`
- `public ToastComponent getToasts()`
- `public Tutorial getTutorial()`
- `public boolean isWindowActive()`
- `public HotbarManager getHotbarManager()`
- `public ModelManager getModelManager()`
- `public PaintingTextureManager getPaintingTextures()`
- `public MobEffectTextureManager getMobEffectTextures()`
- `public GuiSpriteManager getGuiSprites()`
- `public void setWindowActive(boolean p_91261_)`
- `public Component grabPanoramixScreenshot(File p_167900_,  int p_167901_,  int p_167902_)`
- `private Component grabHugeScreenshot(File p_167904_,  int p_167905_,  int p_167906_,  int p_167907_,  int p_167908_)`
- `public ProfilerFiller getProfiler()`
- `@Nullable public StoringChunkProgressListener getProgressListener()`
- `public SplashManager getSplashManager()`
- `@Nullable public Overlay getOverlay()`
- `public PlayerSocialManager getPlayerSocialManager()`
- `public boolean renderOnThread()`
- `public Window getWindow()`
- `public DebugScreenOverlay getDebugOverlay()`
- `public RenderBuffers renderBuffers()`
- `public void updateMaxMipLevel(int p_91313_)`
- `public ItemColors getItemColors()`
- `public SearchRegistry getSearchTreeManager()`
- `public float getPartialTick()`
- `public EntityModelSet getEntityModels()`
- `public boolean isTextFilteringEnabled()`
- `public void prepareForMultiplayer()`
- `public Realms32BitWarningStatus getRealms32BitWarningStatus()`
- `@Nullable public SignatureValidator getProfileKeySignatureValidator()`
- `public InputType getLastInputType()`
- `public void setLastInputType(InputType p_265509_)`
- `public GameNarrator getNarrator()`
- `public ChatListener getChatListener()`
- `public ReportingContext getReportingContext()`
- `public RealmsDataFetcher realmsDataFetcher()`
- `public QuickPlayLog quickPlayLog()`
- `public CommandHistory commandHistory()`
- `public DirectoryValidator directoryValidator()`

### Inherited methods
- from `net.minecraft.util.thread.ReentrantBlockableEventLoop`: `doRunTask`, `runningTask`, `scheduleExecutables`
- from `net.minecraft.util.thread.BlockableEventLoop`: `dropAllTasks`, `execute`, `executeBlocking`, `executeIfPossible`, `getPendingTasksCount`, `isSameThread`, `managedBlock`, `name`, `pollTask`, `profiledMetrics`, `runAllTasks`, `submit`, `submit`, `submitAsync`, `tell`, `waitForTasks`
- from `net.minecraftforge.client.extensions.IForgeMinecraft`: `getLocale`, `popGuiLayer`, `pushGuiLayer`
- from `net.minecraft.util.thread.ProcessorHandle`: `ask`, `askEither`

## Minecraft.GameLoadCookie

*record* `net.minecraft.client.Minecraft.GameLoadCookie`

Enclosing class: Minecraft

### Fields
- `private final RealmsClient realmsClient`
  The field for the realmsClient record component.
- `private final GameConfig.QuickPlayData quickPlayData`
  The field for the quickPlayData record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public RealmsClient realmsClient()`
  Returns the value of the realmsClient record component.
  - returns: the value of the realmsClient record component
- `public GameConfig.QuickPlayData quickPlayData()`
  Returns the value of the quickPlayData record component.
  - returns: the value of the quickPlayData record component

## MouseHandler

*class* `net.minecraft.client.MouseHandler`

### Fields
- `private final Minecraft minecraft`
- `private boolean isLeftPressed`
- `private boolean isMiddlePressed`
- `private boolean isRightPressed`
- `private double xpos`
- `private double ypos`
- `private int fakeRightMouse`
- `private int activeButton`
- `private boolean ignoreFirstMove`
- `private int clickDepth`
- `private double mousePressedTime`
- `private final SmoothDouble smoothTurnX`
- `private final SmoothDouble smoothTurnY`
- `private double accumulatedDX`
- `private double accumulatedDY`
- `private double accumulatedScrollX`
- `private double accumulatedScrollY`
- `private double lastMouseEventTime`
- `private boolean mouseGrabbed`

### Methods
- `private void onPress(long p_91531_,  int p_91532_,  int p_91533_,  int p_91534_)`
- `private void onScroll(long p_91527_,  double p_91528_,  double p_91529_)`
- `private void onDrop(long p_91540_,  List<Path> p_91541_)`
- `public void setup(long p_91525_)`
- `private void onMove(long p_91562_,  double p_91563_,  double p_91564_)`
- `public void turnPlayer()`
- `public boolean isLeftPressed()`
- `public boolean isMiddlePressed()`
- `public boolean isRightPressed()`
- `public double xpos()`
- `public double ypos()`
- `public double getXVelocity()`
- `public double getYVelocity()`
- `public void setIgnoreFirstMove()`
- `public boolean isMouseGrabbed()`
- `public void grabMouse()`
- `public void releaseMouse()`
- `public void cursorEntered()`

## OptionInstance

*class* `net.minecraft.client.OptionInstance`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final OptionInstance.Enum<Boolean> BOOLEAN_VALUES`
- `public static final OptionInstance.CaptionBasedToString<Boolean> BOOLEAN_TO_STRING`
- `private final OptionInstance.TooltipSupplier<T> tooltip`
- `final Function<T,Component> toString`
- `private final OptionInstance.ValueSet<T> values`
- `private final com.mojang.serialization.Codec<T> codec`
- `private final T initialValue`
- `private final Consumer<T> onValueUpdate`
- `final Component caption`
- `T value`

### Methods
- `public static OptionInstance<Boolean> createBoolean(String p_231529_,  boolean p_231530_,  Consumer<Boolean> p_231531_)`
- `public static OptionInstance<Boolean> createBoolean(String p_231526_,  boolean p_231527_)`
- `public static OptionInstance<Boolean> createBoolean(String p_259291_,  OptionInstance.TooltipSupplier<Boolean> p_260306_,  boolean p_259985_)`
- `public static OptionInstance<Boolean> createBoolean(String p_259289_,  OptionInstance.TooltipSupplier<Boolean> p_260210_,  boolean p_259359_,  Consumer<Boolean> p_259975_)`
- `public static OptionInstance<Boolean> createBoolean(String p_262002_,  OptionInstance.TooltipSupplier<Boolean> p_261507_,  OptionInstance.CaptionBasedToString<Boolean> p_262099_,  boolean p_262136_,  Consumer<Boolean> p_261984_)`
- `public static <T> OptionInstance.TooltipSupplier<T> noTooltip()`
- `public static <T> OptionInstance.TooltipSupplier<T> cachedConstantTooltip(Component p_231536_)`
- `public static <T extends OptionEnum> OptionInstance.CaptionBasedToString<T> forOptionEnum()`
- `public AbstractWidget createButton(Options p_231508_,  int p_231509_,  int p_231510_,  int p_231511_)`
- `public AbstractWidget createButton(Options p_261971_,  int p_261486_,  int p_261569_,  int p_261677_,  Consumer<T> p_261912_)`
- `public T get()`
- `public com.mojang.serialization.Codec<T> codec()`
- `public String toString()`
- `public void set(T p_231515_)`
- `public OptionInstance.ValueSet<T> values()`

## OptionInstance.AltEnum

*record* `net.minecraft.client.OptionInstance.AltEnum`

Enclosing class: OptionInstance<T>

### Fields
- `private final List<T> values`
  The field for the values record component.
- `private final List<T> altValues`
  The field for the altValues record component.
- `private final BooleanSupplier altCondition`
  The field for the altCondition record component.
- `private final OptionInstance.CycleableValueSet.ValueSetter<T> valueSetter`
  The field for the valueSetter record component.
- `private final com.mojang.serialization.Codec<T> codec`
  The field for the codec record component.

### Methods
- `public CycleButton.ValueListSupplier<T> valueListSupplier()`
- `public Optional<T> validateValue(T p_231570_)`
- `public OptionInstance.CycleableValueSet.ValueSetter<T> valueSetter()`
  Returns the value of the valueSetter record component.
  - returns: the value of the valueSetter record component
- `public com.mojang.serialization.Codec<T> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<T> values()`
  Returns the value of the values record component.
  - returns: the value of the values record component
- `public List<T> altValues()`
  Returns the value of the altValues record component.
  - returns: the value of the altValues record component
- `public BooleanSupplier altCondition()`
  Returns the value of the altCondition record component.
  - returns: the value of the altCondition record component

### Inherited methods
- from `net.minecraft.client.OptionInstance.CycleableValueSet`: `createButton`

## OptionInstance.CaptionBasedToString

*interface* `net.minecraft.client.OptionInstance.CaptionBasedToString`

Enclosing class: OptionInstance<T>

### Methods
- `Component toString(Component p_231581_,  T p_231582_)`

## OptionInstance.ClampingLazyMaxIntRange

*record* `net.minecraft.client.OptionInstance.ClampingLazyMaxIntRange`

Enclosing class: OptionInstance<T>

### Fields
- `private final int minInclusive`
  The field for the minInclusive record component.
- `private final IntSupplier maxSupplier`
  The field for the maxSupplier record component.
- `private final int encodableMaxInclusive`
  The field for the encodableMaxInclusive record component.

### Methods
- `public Optional<Integer> validateValue(Integer p_231590_)`
- `public int maxInclusive()`
- `public com.mojang.serialization.Codec<Integer> codec()`
- `public boolean createCycleButton()`
- `public CycleButton.ValueListSupplier<Integer> valueListSupplier()`
- `public int minInclusive()`
  Returns the value of the minInclusive record component.
  - returns: the value of the minInclusive record component
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public IntSupplier maxSupplier()`
  Returns the value of the maxSupplier record component.
  - returns: the value of the maxSupplier record component
- `public int encodableMaxInclusive()`
  Returns the value of the encodableMaxInclusive record component.
  - returns: the value of the encodableMaxInclusive record component

### Inherited methods
- from `net.minecraft.client.OptionInstance.CycleableValueSet`: `valueSetter`
- from `net.minecraft.client.OptionInstance.IntRangeBase`: `fromSliderValue`, `toSliderValue`, `xmap`
- from `net.minecraft.client.OptionInstance.SliderableOrCyclableValueSet`: `createButton`
- from `net.minecraft.client.OptionInstance.SliderableValueSet`: `createButton`

## OptionInstance.CycleableValueSet

*interface* `net.minecraft.client.OptionInstance.CycleableValueSet`

All Superinterfaces: OptionInstance.ValueSet<T>

Enclosing class: OptionInstance<T>

### Methods
- `CycleButton.ValueListSupplier<T> valueListSupplier()`
- `default OptionInstance.CycleableValueSet.ValueSetter<T> valueSetter()`
- `default Function<OptionInstance<T>,AbstractWidget> createButton(OptionInstance.TooltipSupplier<T> p_261801_,  Options p_261824_,  int p_261649_,  int p_262114_,  int p_261536_,  Consumer<T> p_261642_)`

### Inherited methods
- from `net.minecraft.client.OptionInstance.ValueSet`: `codec`, `validateValue`

## OptionInstance.CycleableValueSet.ValueSetter

*interface* `net.minecraft.client.OptionInstance.CycleableValueSet.ValueSetter`

Enclosing interface: OptionInstance.CycleableValueSet<T>

### Methods
- `void set(OptionInstance<T> p_231623_,  T p_231624_)`

## OptionInstance.Enum

*record* `net.minecraft.client.OptionInstance.Enum`

Enclosing class: OptionInstance<T>

### Fields
- `private final List<T> values`
  The field for the values record component.
- `private final com.mojang.serialization.Codec<T> codec`
  The field for the codec record component.

### Methods
- `public Optional<T> validateValue(T p_231632_)`
- `public CycleButton.ValueListSupplier<T> valueListSupplier()`
- `public com.mojang.serialization.Codec<T> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<T> values()`
  Returns the value of the values record component.
  - returns: the value of the values record component

### Inherited methods
- from `net.minecraft.client.OptionInstance.CycleableValueSet`: `createButton`, `valueSetter`

## OptionInstance.IntRange

*record* `net.minecraft.client.OptionInstance.IntRange`

Enclosing class: OptionInstance<T>

### Fields
- `private final int minInclusive`
  The field for the minInclusive record component.
- `private final int maxInclusive`
  The field for the maxInclusive record component.

### Methods
- `public Optional<Integer> validateValue(Integer p_231645_)`
- `public com.mojang.serialization.Codec<Integer> codec()`
- `public int minInclusive()`
  Returns the value of the minInclusive record component.
  - returns: the value of the minInclusive record component
- `public int maxInclusive()`
  Returns the value of the maxInclusive record component.
  - returns: the value of the maxInclusive record component
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `net.minecraft.client.OptionInstance.IntRangeBase`: `fromSliderValue`, `toSliderValue`, `xmap`
- from `net.minecraft.client.OptionInstance.SliderableValueSet`: `createButton`

## OptionInstance.IntRangeBase

*interface* `net.minecraft.client.OptionInstance.IntRangeBase`

All Superinterfaces: OptionInstance.SliderableValueSet<Integer>, OptionInstance.ValueSet<Integer>

Enclosing class: OptionInstance<T>

### Methods
- `int minInclusive()`
- `int maxInclusive()`
- `default double toSliderValue(Integer p_231663_)`
- `default Integer fromSliderValue(double p_231656_)`
- `default <R> OptionInstance.SliderableValueSet<R> xmap(IntFunction<? extends R> p_231658_,  ToIntFunction<? super R> p_231659_)`

### Inherited methods
- from `net.minecraft.client.OptionInstance.SliderableValueSet`: `createButton`
- from `net.minecraft.client.OptionInstance.ValueSet`: `codec`, `validateValue`

## OptionInstance.LazyEnum

*record* `net.minecraft.client.OptionInstance.LazyEnum`

Enclosing class: OptionInstance<T>

### Fields
- `private final Supplier<List<T>> values`
  The field for the values record component.
- `private final Function<T,Optional<T>> validateValue`
  The field for the validateValue record component.
- `private final com.mojang.serialization.Codec<T> codec`
  The field for the codec record component.

### Methods
- `public Optional<T> validateValue(T p_231689_)`
- `public CycleButton.ValueListSupplier<T> valueListSupplier()`
- `public com.mojang.serialization.Codec<T> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Supplier<List<T>> values()`
  Returns the value of the values record component.
  - returns: the value of the values record component
- `public Function<T,Optional<T>> validateValue()`
  Returns the value of the validateValue record component.
  - returns: the value of the validateValue record component

### Inherited methods
- from `net.minecraft.client.OptionInstance.CycleableValueSet`: `createButton`, `valueSetter`

## OptionInstance.OptionInstanceSliderButton

*class* `net.minecraft.client.OptionInstance.OptionInstanceSliderButton`

Enclosing class: OptionInstance<T>

### Fields
- `private final OptionInstance<N> instance`
- `private final OptionInstance.SliderableValueSet<N> values`
- `private final OptionInstance.TooltipSupplier<N> tooltipSupplier`
- `private final Consumer<N> onValueChanged`

### Inherited fields
- from `net.minecraft.client.gui.components.AbstractOptionSliderButton`: `options`
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `TEXT_MARGIN`, `value`
- from `net.minecraft.client.gui.components.AbstractWidget`: `active`, `alpha`, `height`, `isHovered`, `packedFGColor`, `UNSET_FG_COLOR`, `visible`, `width`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `DOUBLE_CLICK_THRESHOLD_MS`

### Methods
- `protected void updateMessage()`
- `protected void applyValue()`

### Inherited methods
- from `net.minecraft.client.gui.components.AbstractSliderButton`: `createNarrationMessage`, `getHandleSprite`, `getSprite`, `keyPressed`, `onClick`, `onDrag`, `onRelease`, `playDownSound`, `renderWidget`, `setFocused`, `updateWidgetNarration`
- from `net.minecraft.client.gui.components.AbstractWidget`: `clearFGColor`, `clicked`, `createTooltipPositioner`, `defaultButtonNarrationText`, `getFGColor`, `getHeight`, `getMessage`, `getRectangle`, `getTabOrderGroup`, `getTooltip`, `getWidth`, `getX`, `getY`, `isActive`, `isFocused`, `isHovered`, `isHoveredOrFocused`, `isMouseOver`, `isValidClickButton`, `mouseClicked`, `mouseDragged`, `mouseReleased`, `narrationPriority`, `nextFocusPath`, `render`, `renderScrollingString`, `renderScrollingString`, `renderScrollingString`, `setAlpha`, `setFGColor`, `setHeight`, `setMessage`, `setTabOrderGroup`, `setTooltip`, `setTooltipDelay`, `setWidth`, `setX`, `setY`, `updateNarration`, `visitWidgets`, `wrapDefaultNarrationMessage`
- from `net.minecraft.client.gui.components.events.GuiEventListener`: `charTyped`, `getCurrentFocusPath`, `keyReleased`, `mouseMoved`, `mouseScrolled`
- from `net.minecraft.client.gui.layouts.LayoutElement`: `setPosition`

## OptionInstance.SliderableOrCyclableValueSet

*interface* `net.minecraft.client.OptionInstance.SliderableOrCyclableValueSet`

All Superinterfaces: OptionInstance.CycleableValueSet<T>, OptionInstance.SliderableValueSet<T>, OptionInstance.ValueSet<T>

Enclosing class: OptionInstance<T>

### Methods
- `boolean createCycleButton()`
- `default Function<OptionInstance<T>,AbstractWidget> createButton(OptionInstance.TooltipSupplier<T> p_261786_,  Options p_262030_,  int p_261940_,  int p_262149_,  int p_261495_,  Consumer<T> p_261881_)`

### Inherited methods
- from `net.minecraft.client.OptionInstance.CycleableValueSet`: `valueListSupplier`, `valueSetter`
- from `net.minecraft.client.OptionInstance.SliderableValueSet`: `fromSliderValue`, `toSliderValue`
- from `net.minecraft.client.OptionInstance.ValueSet`: `codec`, `validateValue`

## OptionInstance.SliderableValueSet

*interface* `net.minecraft.client.OptionInstance.SliderableValueSet`

All Superinterfaces: OptionInstance.ValueSet<T>

Enclosing class: OptionInstance<T>

### Methods
- `double toSliderValue(T p_231732_)`
- `T fromSliderValue(double p_231731_)`
- `default Function<OptionInstance<T>,AbstractWidget> createButton(OptionInstance.TooltipSupplier<T> p_261993_,  Options p_262177_,  int p_261706_,  int p_261683_,  int p_261573_,  Consumer<T> p_261969_)`

### Inherited methods
- from `net.minecraft.client.OptionInstance.ValueSet`: `codec`, `validateValue`

## OptionInstance.TooltipSupplier

*interface* `net.minecraft.client.OptionInstance.TooltipSupplier`

Enclosing class: OptionInstance<T>

### Methods
- `@Nullable Tooltip apply(T p_259319_)`

## OptionInstance.ValueSet

*interface* `net.minecraft.client.OptionInstance.ValueSet`

Enclosing class: OptionInstance<T>

### Methods
- `Function<OptionInstance<T>,AbstractWidget> createButton(OptionInstance.TooltipSupplier<T> p_231779_,  Options p_231780_,  int p_231781_,  int p_231782_,  int p_231783_,  Consumer<T> p_261976_)`
- `Optional<T> validateValue(T p_231784_)`
- `com.mojang.serialization.Codec<T> codec()`

## Options

*class* `net.minecraft.client.Options`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final com.google.gson.Gson GSON`
- `private static final com.google.gson.reflect.TypeToken<List<String>> LIST_OF_STRINGS_TYPE`
- `public static final int RENDER_DISTANCE_TINY` (= 2)
- `public static final int RENDER_DISTANCE_SHORT` (= 4)
- `public static final int RENDER_DISTANCE_NORMAL` (= 8)
- `public static final int RENDER_DISTANCE_FAR` (= 12)
- `public static final int RENDER_DISTANCE_REALLY_FAR` (= 16)
- `public static final int RENDER_DISTANCE_EXTREME` (= 32)
- `private static final com.google.common.base.Splitter OPTION_SPLITTER`
- `private static final float DEFAULT_VOLUME` (= 1.0f)
- `public static final String DEFAULT_SOUND_DEVICE` (= "")
- `private static final Component ACCESSIBILITY_TOOLTIP_DARK_MOJANG_BACKGROUND`
- `private final OptionInstance<Boolean> darkMojangStudiosBackground`
- `private static final Component ACCESSIBILITY_TOOLTIP_HIDE_LIGHTNING_FLASHES`
- `private final OptionInstance<Boolean> hideLightningFlash`
- `private final OptionInstance<Double> sensitivity`
- `private final OptionInstance<Integer> renderDistance`
- `private final OptionInstance<Integer> simulationDistance`
- `private int serverRenderDistance`
- `private final OptionInstance<Double> entityDistanceScaling`
- `public static final int UNLIMITED_FRAMERATE_CUTOFF` (= 260)
- `private final OptionInstance<Integer> framerateLimit`
- `private final OptionInstance<CloudStatus> cloudStatus`
- `private static final Component GRAPHICS_TOOLTIP_FAST`
- `private static final Component GRAPHICS_TOOLTIP_FABULOUS`
- `private static final Component GRAPHICS_TOOLTIP_FANCY`
- `private final OptionInstance<GraphicsStatus> graphicsMode`
- `private final OptionInstance<Boolean> ambientOcclusion`
- `private static final Component PRIORITIZE_CHUNK_TOOLTIP_NONE`
- `private static final Component PRIORITIZE_CHUNK_TOOLTIP_PLAYER_AFFECTED`
- `private static final Component PRIORITIZE_CHUNK_TOOLTIP_NEARBY`
- `private final OptionInstance<PrioritizeChunkUpdates> prioritizeChunkUpdates`
- `public List<String> resourcePacks`
- `public List<String> incompatibleResourcePacks`
- `private final OptionInstance<ChatVisiblity> chatVisibility`
- `private final OptionInstance<Double> chatOpacity`
- `private final OptionInstance<Double> chatLineSpacing`
- `private final OptionInstance<Double> textBackgroundOpacity`
- `private final OptionInstance<Double> panoramaSpeed`
- `private static final Component ACCESSIBILITY_TOOLTIP_CONTRAST_MODE`
- `private final OptionInstance<Boolean> highContrast`
- `private final OptionInstance<Boolean> narratorHotkey`
- `@Nullable public String fullscreenVideoModeString`
- `public boolean hideServerAddress`
- `public boolean advancedItemTooltips`
- `public boolean pauseOnLostFocus`
- `private final Set<PlayerModelPart> modelParts`
- `private final OptionInstance<HumanoidArm> mainHand`
- `public int overrideWidth`
- `public int overrideHeight`
- `private final OptionInstance<Double> chatScale`
- `private final OptionInstance<Double> chatWidth`
- `private final OptionInstance<Double> chatHeightUnfocused`
- `private final OptionInstance<Double> chatHeightFocused`
- `private final OptionInstance<Double> chatDelay`
- `private static final Component ACCESSIBILITY_TOOLTIP_NOTIFICATION_DISPLAY_TIME`
- `private final OptionInstance<Double> notificationDisplayTime`
- `private final OptionInstance<Integer> mipmapLevels`
- `public boolean useNativeTransport`
- `private final OptionInstance<AttackIndicatorStatus> attackIndicator`
- `public TutorialSteps tutorialStep`
- `public boolean joinedFirstServer`
- `public boolean hideBundleTutorial`
- `private final OptionInstance<Integer> biomeBlendRadius`
- `private final OptionInstance<Double> mouseWheelSensitivity`
- `private final OptionInstance<Boolean> rawMouseInput`
- `public int glDebugVerbosity`
- `private final OptionInstance<Boolean> autoJump`
- `private final OptionInstance<Boolean> operatorItemsTab`
- `private final OptionInstance<Boolean> autoSuggestions`
- `private final OptionInstance<Boolean> chatColors`
- `private final OptionInstance<Boolean> chatLinks`
- `private final OptionInstance<Boolean> chatLinksPrompt`
- `private final OptionInstance<Boolean> enableVsync`
- `private final OptionInstance<Boolean> entityShadows`
- `private final OptionInstance<Boolean> forceUnicodeFont`
- `private final OptionInstance<Boolean> invertYMouse`
- `private final OptionInstance<Boolean> discreteMouseScroll`
- `private final OptionInstance<Boolean> realmsNotifications`
- `private static final Component ALLOW_SERVER_LISTING_TOOLTIP`
- `private final OptionInstance<Boolean> allowServerListing`
- `private final OptionInstance<Boolean> reducedDebugInfo`
- `private final Map<SoundSource,OptionInstance<Double>> soundSourceVolumes`
- `private final OptionInstance<Boolean> showSubtitles`
- `private static final Component DIRECTIONAL_AUDIO_TOOLTIP_ON`
- `private static final Component DIRECTIONAL_AUDIO_TOOLTIP_OFF`
- `private final OptionInstance<Boolean> directionalAudio`
- `private final OptionInstance<Boolean> backgroundForChatOnly`
- `private final OptionInstance<Boolean> touchscreen`
- `private final OptionInstance<Boolean> fullscreen`
- `private final OptionInstance<Boolean> bobView`
- `private static final Component MOVEMENT_TOGGLE`
- `private static final Component MOVEMENT_HOLD`
- `private final OptionInstance<Boolean> toggleCrouch`
- `private final OptionInstance<Boolean> toggleSprint`
- `public boolean skipMultiplayerWarning`
- `public boolean skipRealms32bitWarning`
- `private static final Component CHAT_TOOLTIP_HIDE_MATCHED_NAMES`
- `private final OptionInstance<Boolean> hideMatchedNames`
- `private final OptionInstance<Boolean> showAutosaveIndicator`
- `private static final Component CHAT_TOOLTIP_ONLY_SHOW_SECURE`
- `private final OptionInstance<Boolean> onlyShowSecureChat`
- `public final KeyMapping keyUp`
- `public final KeyMapping keyLeft`
- `public final KeyMapping keyDown`
- `public final KeyMapping keyRight`
- `public final KeyMapping keyJump`
- `public final KeyMapping keyShift`
- `public final KeyMapping keySprint`
- `public final KeyMapping keyInventory`
- `public final KeyMapping keySwapOffhand`
- `public final KeyMapping keyDrop`
- `public final KeyMapping keyUse`
- `public final KeyMapping keyAttack`
- `public final KeyMapping keyPickItem`
- `public final KeyMapping keyChat`
- `public final KeyMapping keyPlayerList`
- `public final KeyMapping keyCommand`
- `public final KeyMapping keySocialInteractions`
- `public final KeyMapping keyScreenshot`
- `public final KeyMapping keyTogglePerspective`
- `public final KeyMapping keySmoothCamera`
- `public final KeyMapping keyFullscreen`
- `public final KeyMapping keySpectatorOutlines`
- `public final KeyMapping keyAdvancements`
- `public final KeyMapping[] keyHotbarSlots`
- `public final KeyMapping keySaveHotbarActivator`
- `public final KeyMapping keyLoadHotbarActivator`
- `public KeyMapping[] keyMappings`
- `protected Minecraft minecraft`
- `private final File optionsFile`
- `public boolean hideGui`
- `private CameraType cameraType`
- `public String lastMpIp`
- `public boolean smoothCamera`
- `private final OptionInstance<Integer> fov`
- `private static final Component TELEMETRY_TOOLTIP`
- `private final OptionInstance<Boolean> telemetryOptInExtra`
- `private static final Component ACCESSIBILITY_TOOLTIP_SCREEN_EFFECT`
- `private final OptionInstance<Double> screenEffectScale`
- `private static final Component ACCESSIBILITY_TOOLTIP_FOV_EFFECT`
- `private final OptionInstance<Double> fovEffectScale`
- `private static final Component ACCESSIBILITY_TOOLTIP_DARKNESS_EFFECT`
- `private final OptionInstance<Double> darknessEffectScale`
- `private static final Component ACCESSIBILITY_TOOLTIP_GLINT_SPEED`
- `private final OptionInstance<Double> glintSpeed`
- `private static final Component ACCESSIBILITY_TOOLTIP_GLINT_STRENGTH`
- `private final OptionInstance<Double> glintStrength`
- `private static final Component ACCESSIBILITY_TOOLTIP_DAMAGE_TILT_STRENGTH`
- `private final OptionInstance<Double> damageTiltStrength`
- `private final OptionInstance<Double> gamma`
- `public static final int AUTO_GUI_SCALE` (= 0)
- `private static final int MAX_GUI_SCALE_INCLUSIVE` (= 2147483646)
- `private final OptionInstance<Integer> guiScale`
- `private final OptionInstance<ParticleStatus> particles`
- `private final OptionInstance<NarratorStatus> narrator`
- `public String languageCode`
- `private final OptionInstance<String> soundDevice`
- `public boolean onboardAccessibility`
- `public boolean syncWrites`

### Methods
- `public OptionInstance<Boolean> darkMojangStudiosBackground()`
- `public OptionInstance<Boolean> hideLightningFlash()`
- `public OptionInstance<Double> sensitivity()`
- `public OptionInstance<Integer> renderDistance()`
- `public OptionInstance<Integer> simulationDistance()`
- `public OptionInstance<Double> entityDistanceScaling()`
- `public OptionInstance<Integer> framerateLimit()`
- `public OptionInstance<CloudStatus> cloudStatus()`
- `public OptionInstance<GraphicsStatus> graphicsMode()`
- `public OptionInstance<Boolean> ambientOcclusion()`
- `public OptionInstance<PrioritizeChunkUpdates> prioritizeChunkUpdates()`
- `public void updateResourcePacks(PackRepository p_275268_)`
- `public OptionInstance<ChatVisiblity> chatVisibility()`
- `public OptionInstance<Double> chatOpacity()`
- `public OptionInstance<Double> chatLineSpacing()`
- `public OptionInstance<Double> textBackgroundOpacity()`
- `public OptionInstance<Double> panoramaSpeed()`
- `public OptionInstance<Boolean> highContrast()`
- `public OptionInstance<Boolean> narratorHotkey()`
- `public OptionInstance<HumanoidArm> mainHand()`
- `public OptionInstance<Double> chatScale()`
- `public OptionInstance<Double> chatWidth()`
- `public OptionInstance<Double> chatHeightUnfocused()`
- `public OptionInstance<Double> chatHeightFocused()`
- `public OptionInstance<Double> chatDelay()`
- `public OptionInstance<Double> notificationDisplayTime()`
- `public OptionInstance<Integer> mipmapLevels()`
- `public OptionInstance<AttackIndicatorStatus> attackIndicator()`
- `public OptionInstance<Integer> biomeBlendRadius()`
- `private static double logMouse(int p_231966_)`
- `private static int unlogMouse(double p_231840_)`
- `public OptionInstance<Double> mouseWheelSensitivity()`
- `public OptionInstance<Boolean> rawMouseInput()`
- `public OptionInstance<Boolean> autoJump()`
- `public OptionInstance<Boolean> operatorItemsTab()`
- `public OptionInstance<Boolean> autoSuggestions()`
- `public OptionInstance<Boolean> chatColors()`
- `public OptionInstance<Boolean> chatLinks()`
- `public OptionInstance<Boolean> chatLinksPrompt()`
- `public OptionInstance<Boolean> enableVsync()`
- `public OptionInstance<Boolean> entityShadows()`
- `public OptionInstance<Boolean> forceUnicodeFont()`
- `public OptionInstance<Boolean> invertYMouse()`
- `public OptionInstance<Boolean> discreteMouseScroll()`
- `public OptionInstance<Boolean> realmsNotifications()`
- `public OptionInstance<Boolean> allowServerListing()`
- `public OptionInstance<Boolean> reducedDebugInfo()`
- `public final float getSoundSourceVolume(SoundSource p_92148_)`
- `public final OptionInstance<Double> getSoundSourceOptionInstance(SoundSource p_251574_)`
- `private OptionInstance<Double> createSoundSliderOptionInstance(String p_250353_,  SoundSource p_249262_)`
- `public OptionInstance<Boolean> showSubtitles()`
- `public OptionInstance<Boolean> directionalAudio()`
- `public OptionInstance<Boolean> backgroundForChatOnly()`
- `public OptionInstance<Boolean> touchscreen()`
- `public OptionInstance<Boolean> fullscreen()`
- `public OptionInstance<Boolean> bobView()`
- `public OptionInstance<Boolean> toggleCrouch()`
- `public OptionInstance<Boolean> toggleSprint()`
- `public OptionInstance<Boolean> hideMatchedNames()`
- `public OptionInstance<Boolean> showAutosaveIndicator()`
- `public OptionInstance<Boolean> onlyShowSecureChat()`
- `public OptionInstance<Integer> fov()`
- `public OptionInstance<Boolean> telemetryOptInExtra()`
- `public OptionInstance<Double> screenEffectScale()`
- `public OptionInstance<Double> fovEffectScale()`
- `public OptionInstance<Double> darknessEffectScale()`
- `public OptionInstance<Double> glintSpeed()`
- `public OptionInstance<Double> glintStrength()`
- `public OptionInstance<Double> damageTiltStrength()`
- `public OptionInstance<Double> gamma()`
- `public OptionInstance<Integer> guiScale()`
- `public OptionInstance<ParticleStatus> particles()`
- `public OptionInstance<NarratorStatus> narrator()`
- `public OptionInstance<String> soundDevice()`
- `public float getBackgroundOpacity(float p_92142_)`
- `public int getBackgroundColor(float p_92171_)`
- `public int getBackgroundColor(int p_92144_)`
- `public void setKey(KeyMapping p_92160_,  InputConstants.Key p_92161_)`
- `private void processOptions(Options.FieldAccess p_168428_)`
- `private void processOptionsForge(Options.FieldAccess p_168428_)`
- `public void load()`
- `public void load(boolean limited)`
- `static boolean isTrue(String p_168436_)`
- `static boolean isFalse(String p_168441_)`
- `private CompoundTag dataFix(CompoundTag p_92165_)`
- `public void save()`
- `public ClientInformation buildPlayerInformation()`
- `public void broadcastOptions()`
- `private void setModelPart(PlayerModelPart p_92155_,  boolean p_92156_)`
- `public boolean isModelPartEnabled(PlayerModelPart p_168417_)`
- `public void toggleModelPart(PlayerModelPart p_168419_,  boolean p_168420_)`
- `public CloudStatus getCloudsType()`
- `public boolean useNativeTransport()`
- `public void loadSelectedResourcePacks(PackRepository p_92146_)`
- `private void setForgeKeybindProperties()`
- `public CameraType getCameraType()`
- `public void setCameraType(CameraType p_92158_)`
- `private static List<String> readListOfStrings(String p_298720_)`
- `public File getFile()`
- `public String dumpOptionsForReport()`
- `public void setServerRenderDistance(int p_193771_)`
- `public int getEffectiveRenderDistance()`
- `private static Component pixelValueLabel(Component p_231953_,  int p_231954_)`
- `private static Component percentValueLabel(Component p_231898_,  double p_231899_)`
- `public static Component genericValueLabel(Component p_231922_,  Component p_231923_)`
- `public static Component genericValueLabel(Component p_231901_,  int p_231902_)`

## Options.FieldAccess

*interface* `net.minecraft.client.Options.FieldAccess`

Enclosing class: Options

### Methods
- `<T> void process(String p_232143_,  OptionInstance<T> p_232144_)`
- `int process(String p_168523_,  int p_168524_)`
- `boolean process(String p_168535_,  boolean p_168536_)`
- `String process(String p_168533_,  String p_168534_)`
- `float process(String p_168521_,  float p_168522_)`
- `<T> T process(String p_168525_,  T p_168526_,  Function<String,T> p_168527_,  Function<T,String> p_168528_)`

## PeriodicNotificationManager

*class* `net.minecraft.client.PeriodicNotificationManager`

### Fields
- `private static final com.mojang.serialization.Codec<Map<String,List<PeriodicNotificationManager.Notification>>> CODEC`
- `private static final org.slf4j.Logger LOGGER`
- `private final ResourceLocation notifications`
- `private final it.unimi.dsi.fastutil.objects.Object2BooleanFunction<String> selector`
- `@Nullable private Timer timer`
- `@Nullable private PeriodicNotificationManager.NotificationTask notificationTask`

### Methods
- `protected Map<String,List<PeriodicNotificationManager.Notification>> prepare(ResourceManager p_205300_,  ProfilerFiller p_205301_)`
- `protected void apply(Map<String,List<PeriodicNotificationManager.Notification>> p_205318_,  ResourceManager p_205319_,  ProfilerFiller p_205320_)`
- `public void close()`
- `private void stopTimer()`
- `private long calculateOptimalPeriod(List<PeriodicNotificationManager.Notification> p_205313_,  long p_205314_)`
- `private long calculateInitialDelay(List<PeriodicNotificationManager.Notification> p_205311_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.SimplePreparableReloadListener`: `reload`
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## PeriodicNotificationManager.Notification

*record* `net.minecraft.client.PeriodicNotificationManager.Notification`

Enclosing class: PeriodicNotificationManager

### Fields
- `private final long delay`
  The field for the delay record component.
- `private final long period`
  The field for the period record component.
- `private final String title`
  The field for the title record component.
- `private final String message`
  The field for the message record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public long delay()`
  Returns the value of the delay record component.
  - returns: the value of the delay record component
- `public long period()`
  Returns the value of the period record component.
  - returns: the value of the period record component
- `public String title()`
  Returns the value of the title record component.
  - returns: the value of the title record component
- `public String message()`
  Returns the value of the message record component.
  - returns: the value of the message record component

## PeriodicNotificationManager.NotificationTask

*class* `net.minecraft.client.PeriodicNotificationManager.NotificationTask`

Enclosing class: PeriodicNotificationManager

### Fields
- `private final Minecraft minecraft`
- `private final List<PeriodicNotificationManager.Notification> notifications`
- `private final long period`
- `private final AtomicLong elapsed`

### Methods
- `public PeriodicNotificationManager.NotificationTask reset(List<PeriodicNotificationManager.Notification> p_205357_,  long p_205358_)`
- `public void run()`

### Inherited methods
- from `java.util.TimerTask`: `cancel`, `scheduledExecutionTime`

## Realms32BitWarningStatus

*class* `net.minecraft.client.Realms32BitWarningStatus`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Minecraft minecraft`
- `@Nullable private CompletableFuture<Boolean> subscriptionCheck`
- `private boolean warningScreenShown`

### Methods
- `public void showRealms32BitWarningIfNeeded(Screen p_232209_)`
- `private Boolean checkForRealmsSubscription()`
- `private boolean hasRealmsSubscription()`

## ResourceLoadStateTracker

*class* `net.minecraft.client.ResourceLoadStateTracker`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `@Nullable private ResourceLoadStateTracker.ReloadState reloadState`
- `private int reloadCount`

### Methods
- `public void startReload(ResourceLoadStateTracker.ReloadReason p_168558_,  List<PackResources> p_168559_)`
- `public void startRecovery(Throwable p_168561_)`
- `public void finishReload()`
- `public void fillCrashReport(CrashReport p_168563_)`

## ResourceLoadStateTracker.RecoveryInfo

*class* `net.minecraft.client.ResourceLoadStateTracker.RecoveryInfo`

Enclosing class: ResourceLoadStateTracker

### Fields
- `private final Throwable error`

### Methods
- `public void fillCrashInfo(CrashReportCategory p_168569_)`

## ResourceLoadStateTracker.ReloadState

*class* `net.minecraft.client.ResourceLoadStateTracker.ReloadState`

Enclosing class: ResourceLoadStateTracker

### Fields
- `private final ResourceLoadStateTracker.ReloadReason reloadReason`
- `private final List<String> packs`
- `@Nullable ResourceLoadStateTracker.RecoveryInfo recoveryReloadInfo`
- `boolean finished`

### Methods
- `public void fillCrashInfo(CrashReportCategory p_168593_)`

## Screenshot

*class* `net.minecraft.client.Screenshot`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final String SCREENSHOT_DIR` (= "screenshots")
- `private int rowHeight`
- `private final DataOutputStream outputStream`
- `private final byte[] bytes`
- `private final int width`
- `private final int height`
- `private File file`

### Methods
- `public static void grab(File p_92290_,  RenderTarget p_92293_,  Consumer<Component> p_92294_)`
- `public static void grab(File p_92296_,  @Nullable  String p_92297_,  RenderTarget p_92300_,  Consumer<Component> p_92301_)`
- `private static void _grab(File p_92306_,  @Nullable  String p_92307_,  RenderTarget p_92310_,  Consumer<Component> p_92311_)`
- `public static NativeImage takeScreenshot(RenderTarget p_92282_)`
- `private static File getFile(File p_92288_)`
- `public void addRegion(ByteBuffer p_168610_,  int p_168611_,  int p_168612_,  int p_168613_,  int p_168614_)`
- `public void saveRow()  throws IOException`
  - throws: IOException
- `public File close()  throws IOException`
  - throws: IOException

## StringSplitter

*class* `net.minecraft.client.StringSplitter`

### Fields
- `final StringSplitter.WidthProvider widthProvider`

### Methods
- `public float stringWidth(@Nullable  String p_92354_)`
- `public float stringWidth(FormattedText p_92385_)`
- `public float stringWidth(FormattedCharSequence p_92337_)`
- `public int plainIndexAtWidth(String p_92361_,  int p_92362_,  Style p_92363_)`
- `public String plainHeadByWidth(String p_92411_,  int p_92412_,  Style p_92413_)`
- `public String plainTailByWidth(String p_92424_,  int p_92425_,  Style p_92426_)`
- `public int formattedIndexByWidth(String p_168627_,  int p_168628_,  Style p_168629_)`
- `@Nullable public Style componentStyleAtWidth(FormattedText p_92387_,  int p_92388_)`
- `@Nullable public Style componentStyleAtWidth(FormattedCharSequence p_92339_,  int p_92340_)`
- `public String formattedHeadByWidth(String p_168631_,  int p_168632_,  Style p_168633_)`
- `public FormattedText headByWidth(FormattedText p_92390_,  int p_92391_,  Style p_92392_)`
- `public int findLineBreak(String p_168635_,  int p_168636_,  Style p_168637_)`
- `public static int getWordPosition(String p_92356_,  int p_92357_,  int p_92358_,  boolean p_92359_)`
- `public void splitLines(String p_92365_,  int p_92366_,  Style p_92367_,  boolean p_92368_,  StringSplitter.LinePosConsumer p_92369_)`
- `public List<FormattedText> splitLines(String p_92433_,  int p_92434_,  Style p_92435_)`
- `public List<FormattedText> splitLines(FormattedText p_92415_,  int p_92416_,  Style p_92417_)`
- `public List<FormattedText> splitLines(FormattedText p_168622_,  int p_168623_,  Style p_168624_,  FormattedText p_168625_)`
- `public void splitLines(FormattedText p_92394_,  int p_92395_,  Style p_92396_,  BiConsumer<FormattedText,Boolean> p_92397_)`

## StringSplitter.FlatComponents

*class* `net.minecraft.client.StringSplitter.FlatComponents`

Enclosing class: StringSplitter

### Fields
- `final List<StringSplitter.LineComponent> parts`
- `private String flatParts`

### Methods
- `public char charAt(int p_92451_)`
- `public FormattedText splitAt(int p_92453_,  int p_92454_,  Style p_92455_)`
- `@Nullable public FormattedText getRemainder()`

## StringSplitter.LineBreakFinder

*class* `net.minecraft.client.StringSplitter.LineBreakFinder`

Enclosing class: StringSplitter

### Fields
- `private final float maxWidth`
- `private int lineBreak`
- `private Style lineBreakStyle`
- `private boolean hadNonZeroWidthChar`
- `private float width`
- `private int lastSpace`
- `private Style lastSpaceStyle`
- `private int nextChar`
- `private int offset`

### Methods
- `public boolean accept(int p_92480_,  Style p_92481_,  int p_92482_)`
- `private boolean finishIteration(int p_92477_,  Style p_92478_)`
- `private boolean lineBreakFound()`
- `public int getSplitPosition()`
- `public Style getSplitStyle()`
- `public void addToOffset(int p_92475_)`

## StringSplitter.LineComponent

*class* `net.minecraft.client.StringSplitter.LineComponent`

Enclosing class: StringSplitter

### Fields
- `final String contents`
- `final Style style`

### Inherited fields
- from `net.minecraft.network.chat.FormattedText`: `EMPTY`, `STOP_ITERATION`

### Methods
- `public <T> Optional<T> visit(FormattedText.ContentConsumer<T> p_92493_)`
- `public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> p_92495_,  Style p_92496_)`

### Inherited methods
- from `net.minecraft.network.chat.FormattedText`: `getString`

## StringSplitter.LinePosConsumer

*interface* `net.minecraft.client.StringSplitter.LinePosConsumer`

Enclosing class: StringSplitter

### Methods
- `void accept(Style p_92500_,  int p_92501_,  int p_92502_)`

## StringSplitter.WidthLimitedCharSink

*class* `net.minecraft.client.StringSplitter.WidthLimitedCharSink`

Enclosing class: StringSplitter

### Fields
- `private float maxWidth`
- `private int position`

### Methods
- `public boolean accept(int p_92511_,  Style p_92512_,  int p_92513_)`
- `public int getPosition()`
- `public void resetPosition()`

## StringSplitter.WidthProvider

*interface* `net.minecraft.client.StringSplitter.WidthProvider`

Enclosing class: StringSplitter

### Methods
- `float getWidth(int p_92516_,  Style p_92517_)`

## Timer

*class* `net.minecraft.client.Timer`

### Fields
- `public float partialTick`
- `public float tickDelta`
- `private long lastMs`
- `private final float msPerTick`

### Methods
- `public int advanceTime(long p_92526_)`

## ToggleKeyMapping

*class* `net.minecraft.client.ToggleKeyMapping`

### Fields
- `private final BooleanSupplier needsToggle`

### Inherited fields
- from `net.minecraft.client.KeyMapping`: `CATEGORY_CREATIVE`, `CATEGORY_GAMEPLAY`, `CATEGORY_INTERFACE`, `CATEGORY_INVENTORY`, `CATEGORY_MISC`, `CATEGORY_MOVEMENT`, `CATEGORY_MULTIPLAYER`, `isDown`

### Methods
- `public void setDown(boolean p_92534_)`
- `public boolean isDown()`
- `protected void reset()`

### Inherited methods
- from `net.minecraft.client.KeyMapping`: `click`, `compareTo`, `consumeClick`, `createNameSupplier`, `getCategory`, `getDefaultKey`, `getDefaultKeyModifier`, `getKey`, `getKeyConflictContext`, `getKeyModifier`, `getName`, `getTranslatedKeyMessage`, `isDefault`, `isUnbound`, `matches`, `matchesMouse`, `releaseAll`, `resetMapping`, `resetToggleKeys`, `same`, `saveString`, `set`, `setAll`, `setKey`, `setKeyConflictContext`, `setKeyModifierAndCode`
- from `net.minecraftforge.client.extensions.IForgeKeyMapping`: `hasKeyModifierConflict`, `isActiveAndMatches`, `isConflictContextAndModifierActive`, `setToDefault`

## User

*class* `net.minecraft.client.User`

### Fields
- `private final String name`
- `private final UUID uuid`
- `private final String accessToken`
- `private final Optional<String> xuid`
- `private final Optional<String> clientId`
- `private final User.Type type`

### Methods
- `public String getSessionId()`
- `public UUID getProfileId()`
- `public String getName()`
- `public String getAccessToken()`
- `public Optional<String> getClientId()`
- `public Optional<String> getXuid()`
- `public User.Type getType()`
