# net.minecraft.commands.synchronization

- [ArgumentTypeInfo,T extends ArgumentTypeInfo.Template>](#argumenttypeinfo-t-extends-argumenttypeinfo.template)
- [ArgumentTypeInfo.Template>](#argumenttypeinfo.template)
- [ArgumentTypeInfos](#argumenttypeinfos)
- [ArgumentUtils](#argumentutils)
- [SingletonArgumentInfo.Template](#singletonargumentinfo.template)
- [SingletonArgumentInfo>](#singletonargumentinfo)
- [SuggestionProviders](#suggestionproviders)
- [SuggestionProviders.Wrapper](#suggestionproviders.wrapper)
## ArgumentTypeInfo,T extends ArgumentTypeInfo.Template>

*interface* `net.minecraft.commands.synchronization.ArgumentTypeInfo,T extends ArgumentTypeInfo.Template>`

### Methods
- `void serializeToNetwork(T p_235375_,  FriendlyByteBuf p_235376_)`
- `T deserializeFromNetwork(FriendlyByteBuf p_235377_)`
- `void serializeToJson(T p_235373_,  com.google.gson.JsonObject p_235374_)`
- `T unpack(A p_235372_)`

## ArgumentTypeInfo.Template>

*interface* `net.minecraft.commands.synchronization.ArgumentTypeInfo.Template>`

Enclosing interface: ArgumentTypeInfo<A extends com.mojang.brigadier.arguments.ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>>

### Methods
- `A instantiate(CommandBuildContext p_235378_)`
- `ArgumentTypeInfo<A,?> type()`

## ArgumentTypeInfos

*class* `net.minecraft.commands.synchronization.ArgumentTypeInfos`

### Fields
- `private static final Map<Class<?>,ArgumentTypeInfo<?,?>> BY_CLASS`

### Methods
- `public static <A extends com.mojang.brigadier.arguments.ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>, I extends ArgumentTypeInfo<A, T>> I registerByClass(Class<A> infoClass,  I argumentTypeInfo)`
  Forge: Use this in conjunction with a
   DeferredRegister#register(String, Supplier)
   call to both populate the BY_CLASS map and register the argument type info so it can be used in commands.
  - param: infoClass - the class type of the argument type info
  - param: argumentTypeInfo - the argument type info instance
  - returns: the provided argument type info instance for chaining
- `private static <A extends com.mojang.brigadier.arguments.ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> ArgumentTypeInfo<A,T> register(Registry<ArgumentTypeInfo<?,?>> p_235387_,  String p_235388_,  Class<? extends A> p_235389_,  ArgumentTypeInfo<A,T> p_235390_)`
- `public static ArgumentTypeInfo<?,?> bootstrap(Registry<ArgumentTypeInfo<?,?>> p_235385_)`
- `private static <T extends com.mojang.brigadier.arguments.ArgumentType<?>> Class<T> fixClassType(Class<? super T> p_235396_)`
- `public static boolean isClassRecognized(Class<?> p_235392_)`
- `public static <A extends com.mojang.brigadier.arguments.ArgumentType<?>> ArgumentTypeInfo<A,?> byClass(A p_235383_)`
- `public static <A extends com.mojang.brigadier.arguments.ArgumentType<?>> ArgumentTypeInfo.Template<A> unpack(A p_235394_)`

## ArgumentUtils

*class* `net.minecraft.commands.synchronization.ArgumentUtils`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final byte NUMBER_FLAG_MIN` (= 0x1)
- `private static final byte NUMBER_FLAG_MAX` (= 0x2)

### Methods
- `public static int createNumberFlags(boolean p_235428_,  boolean p_235429_)`
- `public static boolean numberHasMin(byte p_235403_)`
- `public static boolean numberHasMax(byte p_235431_)`
- `private static <A extends com.mojang.brigadier.arguments.ArgumentType<?>> void serializeCap(com.google.gson.JsonObject p_235408_,  ArgumentTypeInfo.Template<A> p_235409_)`
- `private static <A extends com.mojang.brigadier.arguments.ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> void serializeCap(com.google.gson.JsonObject p_235411_,  ArgumentTypeInfo<A,T> p_235412_,  ArgumentTypeInfo.Template<A> p_235413_)`
- `private static <T extends com.mojang.brigadier.arguments.ArgumentType<?>> void serializeArgumentToJson(com.google.gson.JsonObject p_235405_,  T p_235406_)`
- `public static <S> com.google.gson.JsonObject serializeNodeToJson(com.mojang.brigadier.CommandDispatcher<S> p_235415_,  com.mojang.brigadier.tree.CommandNode<S> p_235416_)`
- `public static <T> Set<com.mojang.brigadier.arguments.ArgumentType<?>> findUsedArgumentTypes(com.mojang.brigadier.tree.CommandNode<T> p_235418_)`
- `private static <T> void findUsedArgumentTypes(com.mojang.brigadier.tree.CommandNode<T> p_235420_,  Set<com.mojang.brigadier.arguments.ArgumentType<?>> p_235421_,  Set<com.mojang.brigadier.tree.CommandNode<T>> p_235422_)`

## SingletonArgumentInfo.Template

*class* `net.minecraft.commands.synchronization.SingletonArgumentInfo.Template`

Enclosing class: SingletonArgumentInfo<A extends com.mojang.brigadier.arguments.ArgumentType<?>>

### Fields
- `private final Function<CommandBuildContext,A extends com.mojang.brigadier.arguments.ArgumentType<?>> constructor`

### Methods
- `public A instantiate(CommandBuildContext p_235469_)`
- `public ArgumentTypeInfo<A,?> type()`

## SingletonArgumentInfo>

*class* `net.minecraft.commands.synchronization.SingletonArgumentInfo>`

### Fields
- `private final SingletonArgumentInfo<A extends com.mojang.brigadier.arguments.ArgumentType<?>>.Template template`

### Methods
- `public static <T extends com.mojang.brigadier.arguments.ArgumentType<?>> SingletonArgumentInfo<T> contextFree(Supplier<T> p_235452_)`
- `public static <T extends com.mojang.brigadier.arguments.ArgumentType<?>> SingletonArgumentInfo<T> contextAware(Function<CommandBuildContext,T> p_235450_)`
- `public void serializeToNetwork(SingletonArgumentInfo<A>.Template p_235447_,  FriendlyByteBuf p_235448_)`
- `public void serializeToJson(SingletonArgumentInfo<A>.Template p_235444_,  com.google.gson.JsonObject p_235445_)`
- `public SingletonArgumentInfo<A>.Template deserializeFromNetwork(FriendlyByteBuf p_235457_)`
- `public SingletonArgumentInfo<A>.Template unpack(A p_235459_)`

## SuggestionProviders

*class* `net.minecraft.commands.synchronization.SuggestionProviders`

### Fields
- `private static final Map<ResourceLocation,com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider>> PROVIDERS_BY_NAME`
- `private static final ResourceLocation DEFAULT_NAME`
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> ASK_SERVER`
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> ALL_RECIPES`
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> AVAILABLE_SOUNDS`
- `public static final com.mojang.brigadier.suggestion.SuggestionProvider<CommandSourceStack> SUMMONABLE_ENTITIES`

### Methods
- `public static <S extends SharedSuggestionProvider> com.mojang.brigadier.suggestion.SuggestionProvider<S> register(ResourceLocation p_121659_,  com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> p_121660_)`
- `public static com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> getProvider(ResourceLocation p_121657_)`
- `public static ResourceLocation getName(com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> p_121655_)`
- `public static com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> safelySwap(com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> p_121665_)`

## SuggestionProviders.Wrapper

*class* `net.minecraft.commands.synchronization.SuggestionProviders.Wrapper`

Enclosing class: SuggestionProviders

### Fields
- `private final com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> delegate`
- `final ResourceLocation name`

### Methods
- `public CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> getSuggestions(com.mojang.brigadier.context.CommandContext<SharedSuggestionProvider> p_121683_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_121684_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
