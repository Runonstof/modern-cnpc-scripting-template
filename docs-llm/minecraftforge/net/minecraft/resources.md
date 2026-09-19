# net.minecraft.resources

- [DelegatingOps](#delegatingops)
- [DelegatingOps.Builder>](#delegatingops.builder)
- [FileToIdConverter](#filetoidconverter)
- [HolderSetCodec](#holdersetcodec)
- [RegistryDataLoader](#registrydataloader)
- [RegistryDataLoader.Loader](#registrydataloader.loader)
- [RegistryDataLoader.RegistryData](#registrydataloader.registrydata)
- [RegistryFileCodec](#registryfilecodec)
- [RegistryFixedCodec](#registryfixedcodec)
- [RegistryOps](#registryops)
- [RegistryOps.RegistryInfo](#registryops.registryinfo)
- [RegistryOps.RegistryInfoLookup](#registryops.registryinfolookup)
- [ResourceKey](#resourcekey)
- [ResourceKey.InternKey](#resourcekey.internkey)
- [ResourceLocation](#resourcelocation)
- [ResourceLocation.Dummy](#resourcelocation.dummy)
- [ResourceLocation.Serializer](#resourcelocation.serializer)
## DelegatingOps

*class* `net.minecraft.resources.DelegatingOps`

### Fields
- `protected final com.mojang.serialization.DynamicOps<T> delegate`
- `Map<ResourceLocation,Object> ctx`

### Methods
- `public T empty()`
- `public <U> U convertTo(com.mojang.serialization.DynamicOps<U> p_135470_,  T p_135471_)`
- `public com.mojang.serialization.DataResult<Number> getNumberValue(T p_135518_)`
- `public T createNumeric(Number p_135495_)`
- `public T createByte(byte p_135475_)`
- `public T createShort(short p_135497_)`
- `public T createInt(int p_135483_)`
- `public T createLong(long p_135489_)`
- `public T createFloat(float p_135481_)`
- `public T createDouble(double p_135479_)`
- `public com.mojang.serialization.DataResult<Boolean> getBooleanValue(T p_135502_)`
- `public T createBoolean(boolean p_135473_)`
- `public com.mojang.serialization.DataResult<String> getStringValue(T p_135522_)`
- `public T createString(String p_135499_)`
- `public com.mojang.serialization.DataResult<T> mergeToList(T p_135526_,  T p_135527_)`
- `public com.mojang.serialization.DataResult<T> mergeToList(T p_135529_,  List<T> p_135530_)`
- `public com.mojang.serialization.DataResult<T> mergeToMap(T p_135535_,  T p_135536_,  T p_135537_)`
- `public com.mojang.serialization.DataResult<T> mergeToMap(T p_135532_,  com.mojang.serialization.MapLike<T> p_135533_)`
- `public com.mojang.serialization.DataResult<Stream<com.mojang.datafixers.util.Pair<T,T>>> getMapValues(T p_135516_)`
- `public com.mojang.serialization.DataResult<Consumer<BiConsumer<T,T>>> getMapEntries(T p_135514_)`
- `public T createMap(Stream<com.mojang.datafixers.util.Pair<T,T>> p_135493_)`
- `public com.mojang.serialization.DataResult<com.mojang.serialization.MapLike<T>> getMap(T p_135512_)`
- `public com.mojang.serialization.DataResult<Stream<T>> getStream(T p_135520_)`
- `public com.mojang.serialization.DataResult<Consumer<Consumer<T>>> getList(T p_135508_)`
- `public T createList(Stream<T> p_135487_)`
- `public com.mojang.serialization.DataResult<ByteBuffer> getByteBuffer(T p_135504_)`
- `public T createByteList(ByteBuffer p_135477_)`
- `public com.mojang.serialization.DataResult<IntStream> getIntStream(T p_135506_)`
- `public T createIntList(IntStream p_135485_)`
- `public com.mojang.serialization.DataResult<LongStream> getLongStream(T p_135510_)`
- `public T createLongList(LongStream p_135491_)`
- `public T remove(T p_135539_,  String p_135540_)`
- `public boolean compressMaps()`
- `public com.mojang.serialization.ListBuilder<T> listBuilder()`
- `public com.mojang.serialization.RecordBuilder<T> mapBuilder()`
- `public <R> R getContext(ResourceLocation rl)`
- `public static <T, R extends DelegatingOps<T>> DelegatingOps.Builder<R> builder(Supplier<R> root)`

### Inherited methods
- from `com.mojang.serialization.DynamicOps`: `convertList`, `convertMap`, `createMap`, `emptyList`, `emptyMap`, `get`, `getGeneric`, `getNumberValue`, `mergeToMap`, `mergeToPrimitive`, `set`, `update`, `updateGeneric`, `withDecoder`, `withEncoder`, `withParser`

## DelegatingOps.Builder>

*class* `net.minecraft.resources.DelegatingOps.Builder>`

Enclosing class: DelegatingOps<T>

### Fields
- `private final Supplier<R extends DelegatingOps<?>> func`
- `private final Map<ResourceLocation,Object> ctx`

### Methods
- `public DelegatingOps.Builder<R> with(ResourceLocation key,  Object ctx)`
- `public R build()`

## FileToIdConverter

*class* `net.minecraft.resources.FileToIdConverter`

### Fields
- `private final String prefix`
- `private final String extension`

### Methods
- `public static FileToIdConverter json(String p_248754_)`
- `public ResourceLocation idToFile(ResourceLocation p_251878_)`
- `public ResourceLocation fileToId(ResourceLocation p_249595_)`
- `public Map<ResourceLocation,Resource> listMatchingResources(ResourceManager p_252045_)`
- `public Map<ResourceLocation,List<Resource>> listMatchingResourceStacks(ResourceManager p_249881_)`

## HolderSetCodec

*class* `net.minecraft.resources.HolderSetCodec`

### Fields
- `private final ResourceKey<? extends Registry<E>> registryKey`
- `private final com.mojang.serialization.Codec<Holder<E>> elementCodec`
- `private final com.mojang.serialization.Codec<List<Holder<E>>> homogenousListCodec`
- `private final com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<TagKey<E>,List<Holder<E>>>> registryAwareCodec`
- `private final com.mojang.serialization.Codec<ICustomHolderSet<E>> forgeDispatchCodec`
- `private final com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<ICustomHolderSet<E>,com.mojang.datafixers.util.Either<TagKey<E>,List<Holder<E>>>>> combinedCodec`

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `private static <E> com.mojang.serialization.Codec<List<Holder<E>>> homogenousList(com.mojang.serialization.Codec<Holder<E>> p_206668_,  boolean p_206669_)`
- `public static <E> com.mojang.serialization.Codec<HolderSet<E>> create(ResourceKey<? extends Registry<E>> p_206686_,  com.mojang.serialization.Codec<Holder<E>> p_206687_,  boolean p_206688_)`
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<HolderSet<E>,T>> decode(com.mojang.serialization.DynamicOps<T> p_206696_,  T p_206697_)`
- `public <T> com.mojang.serialization.DataResult<T> encode(HolderSet<E> p_206674_,  com.mojang.serialization.DynamicOps<T> p_206675_,  T p_206676_)`
- `private <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<HolderSet<E>,T>> decodeWithoutRegistry(com.mojang.serialization.DynamicOps<T> p_206671_,  T p_206672_)`
- `private <T> com.mojang.serialization.DataResult<T> encodeWithoutRegistry(HolderSet<E> p_206690_,  com.mojang.serialization.DynamicOps<T> p_206691_,  T p_206692_)`

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## RegistryDataLoader

*class* `net.minecraft.resources.RegistryDataLoader`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final List<RegistryDataLoader.RegistryData<?>> WORLDGEN_REGISTRIES`
- `public static final List<RegistryDataLoader.RegistryData<?>> DIMENSION_REGISTRIES`

### Methods
- `public static RegistryAccess.Frozen load(ResourceManager p_252046_,  RegistryAccess p_249916_,  List<RegistryDataLoader.RegistryData<?>> p_250344_)`
- `private static RegistryOps.RegistryInfoLookup createContext(RegistryAccess p_256568_,  List<com.mojang.datafixers.util.Pair<WritableRegistry<?>,RegistryDataLoader.Loader>> p_255821_)`
- `private static <T> RegistryOps.RegistryInfo<T> createInfoForNewRegistry(WritableRegistry<T> p_256020_)`
- `private static <T> RegistryOps.RegistryInfo<T> createInfoForContextRegistry(Registry<T> p_256230_)`
- `private static void logErrors(Map<ResourceKey<?>,Exception> p_252325_)`
- `private static String registryDirPath(ResourceLocation p_252033_)`
- `static <E> void loadRegistryContents(RegistryOps.RegistryInfoLookup p_256369_,  ResourceManager p_256349_,  ResourceKey<? extends Registry<E>> p_255792_,  WritableRegistry<E> p_256211_,  com.mojang.serialization.Decoder<E> p_256232_,  Map<ResourceKey<?>,Exception> p_255884_)`

## RegistryDataLoader.Loader

*interface* `net.minecraft.resources.RegistryDataLoader.Loader`

Enclosing class: RegistryDataLoader

### Methods
- `void load(ResourceManager p_249926_,  RegistryOps.RegistryInfoLookup p_256258_)`

## RegistryDataLoader.RegistryData

*record* `net.minecraft.resources.RegistryDataLoader.RegistryData`

Enclosing class: RegistryDataLoader

### Fields
- `private final ResourceKey<? extends Registry<T>> key`
  The field for the key record component.
- `private final com.mojang.serialization.Codec<T> elementCodec`
  The field for the elementCodec record component.

### Methods
- `com.mojang.datafixers.util.Pair<WritableRegistry<?>,RegistryDataLoader.Loader> create(com.mojang.serialization.Lifecycle p_251662_,  Map<ResourceKey<?>,Exception> p_251565_)`
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
- `public ResourceKey<? extends Registry<T>> key()`
  Returns the value of the key record component.
  - returns: the value of the key record component
- `public com.mojang.serialization.Codec<T> elementCodec()`
  Returns the value of the elementCodec record component.
  - returns: the value of the elementCodec record component

## RegistryFileCodec

*class* `net.minecraft.resources.RegistryFileCodec`

### Fields
- `private final ResourceKey<? extends Registry<E>> registryKey`
- `private final com.mojang.serialization.Codec<E> elementCodec`
- `private final boolean allowInline`

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public static <E> RegistryFileCodec<E> create(ResourceKey<? extends Registry<E>> p_135590_,  com.mojang.serialization.Codec<E> p_135591_)`
- `public static <E> RegistryFileCodec<E> create(ResourceKey<? extends Registry<E>> p_135593_,  com.mojang.serialization.Codec<E> p_135594_,  boolean p_135595_)`
- `public <T> com.mojang.serialization.DataResult<T> encode(Holder<E> p_206716_,  com.mojang.serialization.DynamicOps<T> p_206717_,  T p_206718_)`
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<Holder<E>,T>> decode(com.mojang.serialization.DynamicOps<T> p_135608_,  T p_135609_)`
- `public String toString()`

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## RegistryFixedCodec

*class* `net.minecraft.resources.RegistryFixedCodec`

### Fields
- `private final ResourceKey<? extends Registry<E>> registryKey`

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public static <E> RegistryFixedCodec<E> create(ResourceKey<? extends Registry<E>> p_206741_)`
- `public <T> com.mojang.serialization.DataResult<T> encode(Holder<E> p_206729_,  com.mojang.serialization.DynamicOps<T> p_206730_,  T p_206731_)`
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<Holder<E>,T>> decode(com.mojang.serialization.DynamicOps<T> p_206743_,  T p_206744_)`
- `public String toString()`

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## RegistryOps

*class* `net.minecraft.resources.RegistryOps`

### Fields
- `private final RegistryOps.RegistryInfoLookup lookupProvider`

### Inherited fields
- from `net.minecraft.resources.DelegatingOps`: `ctx`, `delegate`

### Methods
- `private static RegistryOps.RegistryInfoLookup memoizeLookup(RegistryOps.RegistryInfoLookup p_255769_)`
- `public static <T> RegistryOps<T> create(com.mojang.serialization.DynamicOps<T> p_256342_,  HolderLookup.Provider p_255950_)`
- `public static <T> RegistryOps<T> create(com.mojang.serialization.DynamicOps<T> p_256278_,  RegistryOps.RegistryInfoLookup p_256479_)`
- `public static <T> DelegatingOps.Builder<RegistryOps<T>> builder(com.mojang.serialization.DynamicOps<T> parent,  RegistryOps.RegistryInfoLookup lookup)`
- `public <E> Optional<HolderOwner<E>> owner(ResourceKey<? extends Registry<? extends E>> p_255757_)`
- `public <E> Optional<HolderGetter<E>> getter(ResourceKey<? extends Registry<? extends E>> p_256031_)`
- `public static <E, O> com.mojang.serialization.codecs.RecordCodecBuilder<O,HolderGetter<E>> retrieveGetter(ResourceKey<? extends Registry<? extends E>> p_206833_)`
- `public static <E> com.mojang.serialization.MapCodec<HolderLookup.RegistryLookup<E>> retrieveRegistryLookup(ResourceKey<? extends Registry<? extends E>> resourceKey)`
- `public static <E, O> com.mojang.serialization.codecs.RecordCodecBuilder<O,Holder.Reference<E>> retrieveElement(ResourceKey<E> p_256347_)`

### Inherited methods
- from `net.minecraft.resources.DelegatingOps`: `builder`, `compressMaps`, `convertTo`, `createBoolean`, `createByte`, `createByteList`, `createDouble`, `createFloat`, `createInt`, `createIntList`, `createList`, `createLong`, `createLongList`, `createMap`, `createNumeric`, `createShort`, `createString`, `empty`, `getBooleanValue`, `getByteBuffer`, `getContext`, `getIntStream`, `getList`, `getLongStream`, `getMap`, `getMapEntries`, `getMapValues`, `getNumberValue`, `getStream`, `getStringValue`, `listBuilder`, `mapBuilder`, `mergeToList`, `mergeToList`, `mergeToMap`, `mergeToMap`, `remove`
- from `com.mojang.serialization.DynamicOps`: `convertList`, `convertMap`, `createMap`, `emptyList`, `emptyMap`, `get`, `getGeneric`, `getNumberValue`, `mergeToMap`, `mergeToPrimitive`, `set`, `update`, `updateGeneric`, `withDecoder`, `withEncoder`, `withParser`

## RegistryOps.RegistryInfo

*record* `net.minecraft.resources.RegistryOps.RegistryInfo`

Enclosing class: RegistryOps<T>

### Fields
- `private final HolderOwner<T> owner`
  The field for the owner record component.
- `private final HolderGetter<T> getter`
  The field for the getter record component.
- `private final com.mojang.serialization.Lifecycle elementsLifecycle`
  The field for the elementsLifecycle record component.

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
- `public HolderOwner<T> owner()`
  Returns the value of the owner record component.
  - returns: the value of the owner record component
- `public HolderGetter<T> getter()`
  Returns the value of the getter record component.
  - returns: the value of the getter record component
- `public com.mojang.serialization.Lifecycle elementsLifecycle()`
  Returns the value of the elementsLifecycle record component.
  - returns: the value of the elementsLifecycle record component

## RegistryOps.RegistryInfoLookup

*interface* `net.minecraft.resources.RegistryOps.RegistryInfoLookup`

Enclosing class: RegistryOps<T>

### Methods
- `<T> Optional<RegistryOps.RegistryInfo<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256623_)`

## ResourceKey

*class* `net.minecraft.resources.ResourceKey`

### Fields
- `private static final ConcurrentMap<ResourceKey.InternKey,ResourceKey<?>> VALUES`
- `private final ResourceLocation registryName`
- `private final ResourceLocation location`

### Methods
- `public static <T> com.mojang.serialization.Codec<ResourceKey<T>> codec(ResourceKey<? extends Registry<T>> p_195967_)`
- `public static <T> ResourceKey<T> create(ResourceKey<? extends Registry<T>> p_135786_,  ResourceLocation p_135787_)`
- `public static <T> ResourceKey<Registry<T>> createRegistryKey(ResourceLocation p_135789_)`
- `private static <T> ResourceKey<T> create(ResourceLocation p_135791_,  ResourceLocation p_135792_)`
- `public String toString()`
- `public boolean isFor(ResourceKey<? extends Registry<?>> p_135784_)`
- `public <E> Optional<ResourceKey<E>> cast(ResourceKey<? extends Registry<E>> p_195976_)`
- `public ResourceLocation location()`
- `public ResourceLocation registry()`
- `public boolean equals(Object o)`
- `public int compareTo(ResourceKey<?> o)`

## ResourceKey.InternKey

*record* `net.minecraft.resources.ResourceKey.InternKey`

Enclosing class: ResourceKey<T>

### Fields
- `private final ResourceLocation registry`
  The field for the registry record component.
- `private final ResourceLocation location`
  The field for the location record component.

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
- `public ResourceLocation registry()`
  Returns the value of the registry record component.
  - returns: the value of the registry record component
- `public ResourceLocation location()`
  Returns the value of the location record component.
  - returns: the value of the location record component

## ResourceLocation

*class* `net.minecraft.resources.ResourceLocation`

### Fields
- `public static final com.mojang.serialization.Codec<ResourceLocation> CODEC`
- `private static final com.mojang.brigadier.exceptions.SimpleCommandExceptionType ERROR_INVALID`
- `public static final char NAMESPACE_SEPARATOR` (= ':')
- `public static final String DEFAULT_NAMESPACE` (= "minecraft")
- `public static final String REALMS_NAMESPACE` (= "realms")
- `private final String namespace`
- `private final String path`

### Methods
- `public static ResourceLocation of(String p_135823_,  char p_135824_)`
- `@Nullable public static ResourceLocation tryParse(String p_135821_)`
- `@Nullable public static ResourceLocation tryBuild(String p_214294_,  String p_214295_)`
- `protected static String[] decompose(String p_135833_,  char p_135834_)`
- `public static com.mojang.serialization.DataResult<ResourceLocation> read(String p_135838_)`
- `public String getPath()`
- `public String getNamespace()`
- `public ResourceLocation withPath(String p_251088_)`
- `public ResourceLocation withPath(UnaryOperator<String> p_250342_)`
- `public ResourceLocation withPrefix(String p_250620_)`
- `public ResourceLocation withSuffix(String p_266769_)`
- `public String toString()`
- `public boolean equals(Object p_135846_)`
- `public int hashCode()`
- `public int compareTo(ResourceLocation p_135826_)`
- `public int compareNamespaced(ResourceLocation o)`
- `public String toDebugFileName()`
- `public String toLanguageKey()`
- `public String toShortLanguageKey()`
- `public String toLanguageKey(String p_214297_)`
- `public String toLanguageKey(String p_270871_,  String p_270199_)`
- `public static ResourceLocation read(com.mojang.brigadier.StringReader p_135819_)  throws com.mojang.brigadier.exceptions.CommandSyntaxException`
  - throws: com.mojang.brigadier.exceptions.CommandSyntaxException
- `public static boolean isAllowedInResourceLocation(char p_135817_)`
- `public static boolean isValidPath(String p_135842_)`
- `public static boolean isValidNamespace(String p_135844_)`
- `private static String assertValidNamespace(String p_250769_,  String p_249616_)`
- `public static boolean validPathChar(char p_135829_)`
- `public static boolean validNamespaceChar(char p_135836_)`
- `public static boolean isValidResourceLocation(String p_135831_)`
- `private static String assertValidPath(String p_251418_,  String p_248828_)`

## ResourceLocation.Dummy

*interface* `net.minecraft.resources.ResourceLocation.Dummy`

Enclosing class: ResourceLocation

## ResourceLocation.Serializer

*class* `net.minecraft.resources.ResourceLocation.Serializer`

Enclosing class: ResourceLocation

### Methods
- `public ResourceLocation deserialize(com.google.gson.JsonElement p_135851_,  Type p_135852_,  com.google.gson.JsonDeserializationContext p_135853_)  throws com.google.gson.JsonParseException`
  - throws: com.google.gson.JsonParseException
- `public com.google.gson.JsonElement serialize(ResourceLocation p_135855_,  Type p_135856_,  com.google.gson.JsonSerializationContext p_135857_)`
