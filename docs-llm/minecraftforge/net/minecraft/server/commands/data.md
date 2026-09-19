# net.minecraft.server.commands.data

- [BlockDataAccessor](#blockdataaccessor)
- [DataAccessor](#dataaccessor)
- [DataCommands](#datacommands)
- [DataCommands.DataManipulator](#datacommands.datamanipulator)
- [DataCommands.DataManipulatorDecorator](#datacommands.datamanipulatordecorator)
- [DataCommands.DataProvider](#datacommands.dataprovider)
- [DataCommands.StringProcessor](#datacommands.stringprocessor)
- [EntityDataAccessor](#entitydataaccessor)
- [StorageDataAccessor](#storagedataaccessor)
## BlockDataAccessor

*class* `net.minecraft.server.commands.data.BlockDataAccessor`

### Fields
- `static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_A_BLOCK_ENTITY`
- `public static final Function<String,DataCommands.DataProvider> PROVIDER`
- `private final BlockEntity entity`
- `private final BlockPos pos`

### Methods
- `public void setData(CompoundTag p_139307_)`
- `public CompoundTag getData()`
- `public Component getModifiedSuccess()`
- `public Component getPrintSuccess(Tag p_139309_)`
- `public Component getPrintSuccess(NbtPathArgument.NbtPath p_139301_,  double p_139302_,  int p_139303_)`

## DataAccessor

*interface* `net.minecraft.server.commands.data.DataAccessor`

### Methods
- `void setData(CompoundTag p_139323_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `CompoundTag getData()  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `Component getModifiedSuccess()`
- `Component getPrintSuccess(Tag p_139324_)`
- `Component getPrintSuccess(NbtPathArgument.NbtPath p_139320_,  double p_139321_,  int p_139322_)`

## DataCommands

*class* `net.minecraft.server.commands.data.DataCommands`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_MERGE_UNCHANGED`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_GET_NOT_NUMBER`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_GET_NON_EXISTENT`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_MULTIPLE_TAGS`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_EXPECTED_OBJECT`
- `private static final com.mojang.brigadier.exceptions.DynamicCommandExceptionType ERROR_EXPECTED_VALUE`
- `private static final com.mojang.brigadier.exceptions.Dynamic2CommandExceptionType ERROR_INVALID_SUBSTRING`
- `public static final List<Function<String,DataCommands.DataProvider>> ALL_PROVIDERS`
- `public static final List<DataCommands.DataProvider> TARGET_PROVIDERS`
- `public static final List<DataCommands.DataProvider> SOURCE_PROVIDERS`

### Methods
- `public static void register(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> p_139366_)`
- `private static String getAsText(Tag p_265255_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static List<Tag> stringifyTagList(List<Tag> p_288980_,  DataCommands.StringProcessor p_289012_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> decorateModification(BiConsumer<com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?>,DataCommands.DataManipulatorDecorator> p_139404_)`
- `private static String validatedSubstring(String p_288976_,  int p_288968_,  int p_289018_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static String substring(String p_287625_,  int p_287772_,  int p_287598_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static String substring(String p_287744_,  int p_287741_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getOffset(int p_287638_,  int p_287600_)`
- `private static List<Tag> getSingletonSource(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_265108_,  DataCommands.DataProvider p_265370_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static List<Tag> resolveSourcePath(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_265468_,  DataCommands.DataProvider p_265670_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int manipulateData(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_139376_,  DataCommands.DataProvider p_139377_,  DataCommands.DataManipulator p_139378_,  List<Tag> p_139379_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int removeData(CommandSourceStack p_139386_,  DataAccessor p_139387_,  NbtPathArgument.NbtPath p_139388_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static Tag getSingleTag(NbtPathArgument.NbtPath p_139399_,  DataAccessor p_139400_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getData(CommandSourceStack p_139444_,  DataAccessor p_139445_,  NbtPathArgument.NbtPath p_139446_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getNumeric(CommandSourceStack p_139390_,  DataAccessor p_139391_,  NbtPathArgument.NbtPath p_139392_,  double p_139393_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int getData(CommandSourceStack p_139383_,  DataAccessor p_139384_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static int mergeData(CommandSourceStack p_139395_,  DataAccessor p_139396_,  CompoundTag p_139397_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DataCommands.DataManipulator

*interface* `net.minecraft.server.commands.data.DataCommands.DataManipulator`

Enclosing class: DataCommands

### Methods
- `int modify(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_139496_,  CompoundTag p_139497_,  NbtPathArgument.NbtPath p_139498_,  List<Tag> p_139499_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## DataCommands.DataManipulatorDecorator

*interface* `net.minecraft.server.commands.data.DataCommands.DataManipulatorDecorator`

Enclosing class: DataCommands

### Methods
- `com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> create(DataCommands.DataManipulator p_139501_)`

## DataCommands.DataProvider

*interface* `net.minecraft.server.commands.data.DataCommands.DataProvider`

Enclosing class: DataCommands

### Methods
- `DataAccessor access(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_139504_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> wrap(com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?> p_139502_,  Function<com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?>,com.mojang.brigadier.builder.ArgumentBuilder<CommandSourceStack,?>> p_139503_)`

## DataCommands.StringProcessor

*interface* `net.minecraft.server.commands.data.DataCommands.StringProcessor`

Enclosing class: DataCommands

### Methods
- `String process(String p_289006_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException

## EntityDataAccessor

*class* `net.minecraft.server.commands.data.EntityDataAccessor`

### Fields
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NO_PLAYERS`
- `public static final Function<String,DataCommands.DataProvider> PROVIDER`
- `private final Entity entity`

### Methods
- `public void setData(CompoundTag p_139519_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public CompoundTag getData()`
- `public Component getModifiedSuccess()`
- `public Component getPrintSuccess(Tag p_139521_)`
- `public Component getPrintSuccess(NbtPathArgument.NbtPath p_139513_,  double p_139514_,  int p_139515_)`

## StorageDataAccessor

*class* `net.minecraft.server.commands.data.StorageDataAccessor`

### Fields
- `static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUGGEST_STORAGE`
- `public static final Function<String,DataCommands.DataProvider> PROVIDER`
- `private final CommandStorage storage`
- `private final ResourceLocation id`

### Methods
- `static CommandStorage getGlobalTags(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_139561_)`
- `public void setData(CompoundTag p_139556_)`
- `public CompoundTag getData()`
- `public Component getModifiedSuccess()`
- `public Component getPrintSuccess(Tag p_139558_)`
- `public Component getPrintSuccess(NbtPathArgument.NbtPath p_139550_,  double p_139551_,  int p_139552_)`
