# net.minecraft.commands.synchronization.brigadier

- [DoubleArgumentInfo](#doubleargumentinfo)
- [DoubleArgumentInfo.Template](#doubleargumentinfo.template)
- [FloatArgumentInfo](#floatargumentinfo)
- [FloatArgumentInfo.Template](#floatargumentinfo.template)
- [IntegerArgumentInfo](#integerargumentinfo)
- [IntegerArgumentInfo.Template](#integerargumentinfo.template)
- [LongArgumentInfo](#longargumentinfo)
- [LongArgumentInfo.Template](#longargumentinfo.template)
- [StringArgumentSerializer](#stringargumentserializer)
- [StringArgumentSerializer.Template](#stringargumentserializer.template)
## DoubleArgumentInfo

*class* `net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo`

### Methods
- `public void serializeToNetwork(DoubleArgumentInfo.Template p_235485_,  FriendlyByteBuf p_235486_)`
- `public DoubleArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235488_)`
- `public void serializeToJson(DoubleArgumentInfo.Template p_235482_,  com.google.gson.JsonObject p_235483_)`
- `public DoubleArgumentInfo.Template unpack(com.mojang.brigadier.arguments.DoubleArgumentType p_235474_)`

## DoubleArgumentInfo.Template

*class* `net.minecraft.commands.synchronization.brigadier.DoubleArgumentInfo.Template`

Enclosing class: DoubleArgumentInfo

### Fields
- `final double min`
- `final double max`

### Methods
- `public com.mojang.brigadier.arguments.DoubleArgumentType instantiate(CommandBuildContext p_235500_)`
- `public ArgumentTypeInfo<com.mojang.brigadier.arguments.DoubleArgumentType,?> type()`

## FloatArgumentInfo

*class* `net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo`

### Methods
- `public void serializeToNetwork(FloatArgumentInfo.Template p_235518_,  FriendlyByteBuf p_235519_)`
- `public FloatArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235521_)`
- `public void serializeToJson(FloatArgumentInfo.Template p_235515_,  com.google.gson.JsonObject p_235516_)`
- `public FloatArgumentInfo.Template unpack(com.mojang.brigadier.arguments.FloatArgumentType p_235507_)`

## FloatArgumentInfo.Template

*class* `net.minecraft.commands.synchronization.brigadier.FloatArgumentInfo.Template`

Enclosing class: FloatArgumentInfo

### Fields
- `final float min`
- `final float max`

### Methods
- `public com.mojang.brigadier.arguments.FloatArgumentType instantiate(CommandBuildContext p_235533_)`
- `public ArgumentTypeInfo<com.mojang.brigadier.arguments.FloatArgumentType,?> type()`

## IntegerArgumentInfo

*class* `net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo`

### Methods
- `public void serializeToNetwork(IntegerArgumentInfo.Template p_235551_,  FriendlyByteBuf p_235552_)`
- `public IntegerArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235554_)`
- `public void serializeToJson(IntegerArgumentInfo.Template p_235548_,  com.google.gson.JsonObject p_235549_)`
- `public IntegerArgumentInfo.Template unpack(com.mojang.brigadier.arguments.IntegerArgumentType p_235540_)`

## IntegerArgumentInfo.Template

*class* `net.minecraft.commands.synchronization.brigadier.IntegerArgumentInfo.Template`

Enclosing class: IntegerArgumentInfo

### Fields
- `final int min`
- `final int max`

### Methods
- `public com.mojang.brigadier.arguments.IntegerArgumentType instantiate(CommandBuildContext p_235566_)`
- `public ArgumentTypeInfo<com.mojang.brigadier.arguments.IntegerArgumentType,?> type()`

## LongArgumentInfo

*class* `net.minecraft.commands.synchronization.brigadier.LongArgumentInfo`

### Methods
- `public void serializeToNetwork(LongArgumentInfo.Template p_235584_,  FriendlyByteBuf p_235585_)`
- `public LongArgumentInfo.Template deserializeFromNetwork(FriendlyByteBuf p_235587_)`
- `public void serializeToJson(LongArgumentInfo.Template p_235581_,  com.google.gson.JsonObject p_235582_)`
- `public LongArgumentInfo.Template unpack(com.mojang.brigadier.arguments.LongArgumentType p_235573_)`

## LongArgumentInfo.Template

*class* `net.minecraft.commands.synchronization.brigadier.LongArgumentInfo.Template`

Enclosing class: LongArgumentInfo

### Fields
- `final long min`
- `final long max`

### Methods
- `public com.mojang.brigadier.arguments.LongArgumentType instantiate(CommandBuildContext p_235599_)`
- `public ArgumentTypeInfo<com.mojang.brigadier.arguments.LongArgumentType,?> type()`

## StringArgumentSerializer

*class* `net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer`

### Methods
- `public void serializeToNetwork(StringArgumentSerializer.Template p_235616_,  FriendlyByteBuf p_235617_)`
- `public StringArgumentSerializer.Template deserializeFromNetwork(FriendlyByteBuf p_235619_)`
- `public void serializeToJson(StringArgumentSerializer.Template p_235613_,  com.google.gson.JsonObject p_235614_)`
- `public StringArgumentSerializer.Template unpack(com.mojang.brigadier.arguments.StringArgumentType p_235605_)`

## StringArgumentSerializer.Template

*class* `net.minecraft.commands.synchronization.brigadier.StringArgumentSerializer.Template`

Enclosing class: StringArgumentSerializer

### Fields
- `final com.mojang.brigadier.arguments.StringArgumentType.StringType type`

### Methods
- `public com.mojang.brigadier.arguments.StringArgumentType instantiate(CommandBuildContext p_235629_)`
- `public ArgumentTypeInfo<com.mojang.brigadier.arguments.StringArgumentType,?> type()`
