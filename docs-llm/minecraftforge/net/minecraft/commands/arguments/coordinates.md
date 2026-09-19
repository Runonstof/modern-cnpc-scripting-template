# net.minecraft.commands.arguments.coordinates

- [BlockPosArgument](#blockposargument)
- [ColumnPosArgument](#columnposargument)
- [Coordinates](#coordinates)
- [LocalCoordinates](#localcoordinates)
- [RotationArgument](#rotationargument)
- [SwizzleArgument](#swizzleargument)
- [Vec2Argument](#vec2argument)
- [Vec3Argument](#vec3argument)
- [WorldCoordinate](#worldcoordinate)
- [WorldCoordinates](#worldcoordinates)
## BlockPosArgument

*class* `net.minecraft.commands.arguments.coordinates.BlockPosArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_LOADED`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_OUT_OF_WORLD`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_OUT_OF_BOUNDS`

### Methods
- `public static BlockPosArgument blockPos()`
- `public static BlockPos getLoadedBlockPos(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_118243_,  String p_118244_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static BlockPos getLoadedBlockPos(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_265283_,  ServerLevel p_265219_,  String p_265677_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static BlockPos getBlockPos(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_265651_,  String p_265039_)`
- `public static BlockPos getSpawnablePos(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_174396_,  String p_174397_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Coordinates parse(com.mojang.brigadier.StringReader p_118241_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_118250_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_118251_)`
- `public Collection<String> getExamples()`

## ColumnPosArgument

*class* `net.minecraft.commands.arguments.coordinates.ColumnPosArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_COMPLETE`

### Methods
- `public static ColumnPosArgument columnPos()`
- `public static ColumnPos getColumnPos(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_118993_,  String p_118994_)`
- `public Coordinates parse(com.mojang.brigadier.StringReader p_118991_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_118997_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_118998_)`
- `public Collection<String> getExamples()`

## Coordinates

*interface* `net.minecraft.commands.arguments.coordinates.Coordinates`

### Methods
- `Vec3 getPosition(CommandSourceStack p_119566_)`
- `Vec2 getRotation(CommandSourceStack p_119567_)`
- `default BlockPos getBlockPos(CommandSourceStack p_119569_)`
- `boolean isXRelative()`
- `boolean isYRelative()`
- `boolean isZRelative()`

## LocalCoordinates

*class* `net.minecraft.commands.arguments.coordinates.LocalCoordinates`

### Fields
- `public static final char PREFIX_LOCAL_COORDINATE` (= '^')
- `private final double left`
- `private final double up`
- `private final double forwards`

### Methods
- `public Vec3 getPosition(CommandSourceStack p_119912_)`
- `public Vec2 getRotation(CommandSourceStack p_119915_)`
- `public boolean isXRelative()`
- `public boolean isYRelative()`
- `public boolean isZRelative()`
- `public static LocalCoordinates parse(com.mojang.brigadier.StringReader p_119907_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `private static double readDouble(com.mojang.brigadier.StringReader p_119909_,  int p_119910_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public boolean equals(Object p_119918_)`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.commands.arguments.coordinates.Coordinates`: `getBlockPos`

## RotationArgument

*class* `net.minecraft.commands.arguments.coordinates.RotationArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_COMPLETE`

### Methods
- `public static RotationArgument rotation()`
- `public static Coordinates getRotation(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120483_,  String p_120484_)`
- `public Coordinates parse(com.mojang.brigadier.StringReader p_120481_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## SwizzleArgument

*class* `net.minecraft.commands.arguments.coordinates.SwizzleArgument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID`

### Methods
- `public static SwizzleArgument swizzle()`
- `public static EnumSet<Direction.Axis> getSwizzle(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120811_,  String p_120812_)`
- `public EnumSet<Direction.Axis> parse(com.mojang.brigadier.StringReader p_120809_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public Collection<String> getExamples()`

### Inherited methods
- from `com.mojang.brigadier.arguments.ArgumentType`: `listSuggestions`

## Vec2Argument

*class* `net.minecraft.commands.arguments.coordinates.Vec2Argument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_COMPLETE`
- `private final boolean centerCorrect`

### Methods
- `public static Vec2Argument vec2()`
- `public static Vec2Argument vec2(boolean p_174955_)`
- `public static Vec2 getVec2(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120826_,  String p_120827_)`
- `public Coordinates parse(com.mojang.brigadier.StringReader p_120824_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_120830_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_120831_)`
- `public Collection<String> getExamples()`

## Vec3Argument

*class* `net.minecraft.commands.arguments.coordinates.Vec3Argument`

### Fields
- `private static final Collection<String> EXAMPLES`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_NOT_COMPLETE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_MIXED_TYPE`
- `private final boolean centerCorrect`

### Methods
- `public static Vec3Argument vec3()`
- `public static Vec3Argument vec3(boolean p_120848_)`
- `public static Vec3 getVec3(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120845_,  String p_120846_)`
- `public static Coordinates getCoordinates(com.mojang.brigadier.context.CommandContext<CommandSourceStack> p_120850_,  String p_120851_)`
- `public Coordinates parse(com.mojang.brigadier.StringReader p_120843_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public <S> CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> listSuggestions(com.mojang.brigadier.context.CommandContext<S> p_120854_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_120855_)`
- `public Collection<String> getExamples()`

## WorldCoordinate

*class* `net.minecraft.commands.arguments.coordinates.WorldCoordinate`

### Fields
- `private static final char PREFIX_RELATIVE` (= '~')
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_EXPECTED_DOUBLE`
- `public static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_EXPECTED_INT`
- `private final boolean relative`
- `private final double value`

### Methods
- `public double get(double p_120868_)`
- `public static WorldCoordinate parseDouble(com.mojang.brigadier.StringReader p_120872_,  boolean p_120873_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static WorldCoordinate parseInt(com.mojang.brigadier.StringReader p_120870_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static boolean isRelative(com.mojang.brigadier.StringReader p_120875_)`
- `public boolean equals(Object p_120877_)`
- `public int hashCode()`
- `public boolean isRelative()`

## WorldCoordinates

*class* `net.minecraft.commands.arguments.coordinates.WorldCoordinates`

### Fields
- `private final WorldCoordinate x`
- `private final WorldCoordinate y`
- `private final WorldCoordinate z`

### Methods
- `public Vec3 getPosition(CommandSourceStack p_120893_)`
- `public Vec2 getRotation(CommandSourceStack p_120896_)`
- `public boolean isXRelative()`
- `public boolean isYRelative()`
- `public boolean isZRelative()`
- `public boolean equals(Object p_120900_)`
- `public static WorldCoordinates parseInt(com.mojang.brigadier.StringReader p_120888_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static WorldCoordinates parseDouble(com.mojang.brigadier.StringReader p_120890_,  boolean p_120891_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static WorldCoordinates absolute(double p_175086_,  double p_175087_,  double p_175088_)`
- `public static WorldCoordinates absolute(Vec2 p_175090_)`
- `public static WorldCoordinates current()`
- `public int hashCode()`

### Inherited methods
- from `net.minecraft.commands.arguments.coordinates.Coordinates`: `getBlockPos`
