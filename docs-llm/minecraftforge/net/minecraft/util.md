# net.minecraft.util

- [AbortableIterationConsumer](#abortableiterationconsumer)
- [ArrayListDeque](#arraylistdeque)
- [ArrayListDeque.DescendingIterator](#arraylistdeque.descendingiterator)
- [BitStorage](#bitstorage)
- [Brightness](#brightness)
- [ByIdMap](#byidmap)
- [Class AbortableIterationConsumer.Continuation](#class-abortableiterationconsumer.continuation)
- [Class ByIdMap.OutOfBoundsStrategy](#class-byidmap.outofboundsstrategy)
- [Class ModCheck.Confidence](#class-modcheck.confidence)
- [Class Unit](#class-unit)
- [ClassInstanceMultiMap](#classinstancemultimap)
- [CommonColors](#commoncolors)
- [CommonLinks](#commonlinks)
- [CrudeIncrementalIntIdentityHashBiMap](#crudeincrementalintidentityhashbimap)
- [Crypt](#crypt)
- [Crypt.ByteArrayToKeyFunction](#crypt.bytearraytokeyfunction)
- [Crypt.SaltSignaturePair](#crypt.saltsignaturepair)
- [Crypt.SaltSupplier](#crypt.saltsupplier)
- [CryptException](#cryptexception)
- [CsvOutput](#csvoutput)
- [CsvOutput.Builder](#csvoutput.builder)
- [CubicSampler](#cubicsampler)
- [CubicSampler.Vec3Fetcher](#cubicsampler.vec3fetcher)
- [CubicSpline.Builder>](#cubicspline.builder)
- [CubicSpline.Constant>](#cubicspline.constant)
- [CubicSpline.CoordinateVisitor](#cubicspline.coordinatevisitor)
- [CubicSpline.Multipoint>](#cubicspline.multipoint)
- [CubicSpline>](#cubicspline)
- [DebugBuffer](#debugbuffer)
- [DependencySorter.Entry](#dependencysorter.entry)
- [DependencySorter>](#dependencysorter)
- [DirectoryLock](#directorylock)
- [DirectoryLock.LockException](#directorylock.lockexception)
- [ExceptionCollector](#exceptioncollector)
- [ExtraCodecs](#extracodecs)
- [ExtraCodecs.EitherCodec](#extracodecs.eithercodec)
- [ExtraCodecs.RecursiveCodec](#extracodecs.recursivecodec)
- [ExtraCodecs.StrictOptionalFieldCodec](#extracodecs.strictoptionalfieldcodec)
- [ExtraCodecs.StrictUnboundedMapCodec](#extracodecs.strictunboundedmapcodec)
- [ExtraCodecs.TagOrElementLocation](#extracodecs.tagorelementlocation)
- [ExtraCodecs.XorCodec](#extracodecs.xorcodec)
- [FastBufferedInputStream](#fastbufferedinputstream)
- [FastColor](#fastcolor)
- [FastColor.ABGR32](#fastcolor.abgr32)
- [FastColor.ARGB32](#fastcolor.argb32)
- [FileZipper](#filezipper)
- [FormattedCharSequence](#formattedcharsequence)
- [FormattedCharSink](#formattedcharsink)
- [FutureChain](#futurechain)
- [Graph](#graph)
- [GsonHelper](#gsonhelper)
- [HttpUtil](#httputil)
- [InclusiveRange>](#inclusiverange)
- [KeyDispatchDataCodec](#keydispatchdatacodec)
- [LazyLoadedValue](#lazyloadedvalue)
- [LinearCongruentialGenerator](#linearcongruentialgenerator)
- [LowerCaseEnumTypeAdapterFactory](#lowercaseenumtypeadapterfactory)
- [MemoryReserve](#memoryreserve)
- [ModCheck](#modcheck)
- [Mth](#mth)
- [NativeModuleLister](#nativemodulelister)
- [NativeModuleLister.NativeModuleInfo](#nativemodulelister.nativemoduleinfo)
- [NativeModuleLister.NativeModuleVersion](#nativemodulelister.nativemoduleversion)
- [OptionEnum](#optionenum)
- [ParticleUtils](#particleutils)
- [PngInfo](#pnginfo)
- [ProgressListener](#progresslistener)
- [RandomSource](#randomsource)
- [ResourceLocationPattern](#resourcelocationpattern)
- [SampleLogger](#samplelogger)
- [SegmentedAnglePrecision](#segmentedangleprecision)
- [SignatureUpdater](#signatureupdater)
- [SignatureUpdater.Output](#signatureupdater.output)
- [SignatureValidator](#signaturevalidator)
- [Signer](#signer)
- [SimpleBitStorage](#simplebitstorage)
- [SimpleBitStorage.InitializationException](#simplebitstorage.initializationexception)
- [SingleKeyCache](#singlekeycache)
- [SmoothDouble](#smoothdouble)
- [SortedArraySet](#sortedarrayset)
- [SortedArraySet.ArrayIterator](#sortedarrayset.arrayiterator)
- [SpawnUtil](#spawnutil)
- [SpawnUtil.Strategy](#spawnutil.strategy)
- [StringDecomposer](#stringdecomposer)
- [StringRepresentable](#stringrepresentable)
- [StringRepresentable.EnumCodec & StringRepresentable>](#stringrepresentable.enumcodec-stringrepresentable)
- [StringUtil](#stringutil)
- [TaskChainer](#taskchainer)
- [TaskChainer.DelayedTask](#taskchainer.delayedtask)
- [ThreadingDetector](#threadingdetector)
- [TimeSource](#timesource)
- [TimeSource.NanoTimeSource](#timesource.nanotimesource)
- [TimeUtil](#timeutil)
- [ToFloatFunction](#tofloatfunction)
- [Tuple](#tuple)
- [VisibleForDebug](#visiblefordebug)
- [ZeroBitStorage](#zerobitstorage)
## AbortableIterationConsumer

*interface* `net.minecraft.util.AbortableIterationConsumer`

### Methods
- `AbortableIterationConsumer.Continuation accept(T p_261708_)`
- `static <T> AbortableIterationConsumer<T> forConsumer(Consumer<T> p_261477_)`

## ArrayListDeque

*class* `net.minecraft.util.ArrayListDeque`

### Fields
- `private static final int MIN_GROWTH` (= 1)
- `private Object[] contents`
- `private int head`
- `private int size`

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public int size()`
- `public int capacity()`
- `private int getIndex(int p_299728_)`
- `public T get(int p_300499_)`
- `private static void verifyIndexInRange(int p_299791_,  int p_299333_)`
- `private void verifyIndexInRange(int p_298701_)`
- `private T getInner(int p_299306_)`
- `public T set(int p_300259_,  T p_298094_)`
- `public void add(int p_301285_,  T p_300734_)`
- `private void grow()`
- `public T remove(int p_297670_)`
- `public boolean removeIf(Predicate<? super T> p_300785_)`
- `private void copyCount(Object[] p_300471_,  int p_298513_)`
- `public void replaceAll(UnaryOperator<T> p_299491_)`
- `public void forEach(Consumer<? super T> p_297273_)`
- `public void addFirst(T p_300853_)`
- `public void addLast(T p_301090_)`
- `public boolean offerFirst(T p_300075_)`
- `public boolean offerLast(T p_300597_)`
- `public T removeFirst()`
- `public T removeLast()`
- `@Nullable public T pollFirst()`
- `@Nullable public T pollLast()`
- `public T getFirst()`
- `public T getLast()`
- `@Nullable public T peekFirst()`
- `@Nullable public T peekLast()`
- `public boolean removeFirstOccurrence(Object p_300960_)`
- `public boolean removeLastOccurrence(Object p_297293_)`
- `public boolean offer(T p_299376_)`
- `public T remove()`
- `@Nullable public T poll()`
- `public T element()`
- `@Nullable public T peek()`
- `public void push(T p_298076_)`
- `public T pop()`
- `public Iterator<T> descendingIterator()`

### Inherited methods
- from `java.util.AbstractList`: `add`, `addAll`, `clear`, `equals`, `hashCode`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `removeRange`, `subList`
- from `java.util.AbstractCollection`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `toArray`, `toArray`, `toString`
- from `java.util.Collection`: `parallelStream`, `stream`, `toArray`
- from `java.util.Deque`: `add`, `addAll`, `contains`, `iterator`, `remove`
- from `java.util.List`: `addAll`, `contains`, `containsAll`, `isEmpty`, `remove`, `removeAll`, `retainAll`, `sort`, `spliterator`, `toArray`, `toArray`

## ArrayListDeque.DescendingIterator

*class* `net.minecraft.util.ArrayListDeque.DescendingIterator`

Enclosing class: ArrayListDeque<T>

### Fields
- `private int index`

### Methods
- `public boolean hasNext()`
- `public T next()`
- `public void remove()`

### Inherited methods
- from `java.util.Iterator`: `forEachRemaining`

## BitStorage

*interface* `net.minecraft.util.BitStorage`

### Methods
- `int getAndSet(int p_13517_,  int p_13518_)`
- `void set(int p_13525_,  int p_13526_)`
- `int get(int p_13515_)`
- `long[] getRaw()`
- `int getSize()`
- `int getBits()`
- `void getAll(IntConsumer p_13520_)`
- `void unpack(int[] p_198162_)`
- `BitStorage copy()`

## Brightness

*record* `net.minecraft.util.Brightness`

### Fields
- `private final int block`
  The field for the block record component.
- `private final int sky`
  The field for the sky record component.
- `public static final com.mojang.serialization.Codec<Integer> LIGHT_VALUE_CODEC`
- `public static final com.mojang.serialization.Codec<Brightness> CODEC`
- `public static Brightness FULL_BRIGHT`

### Methods
- `public int pack()`
- `public static Brightness unpack(int p_270207_)`
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
- `public int block()`
  Returns the value of the block record component.
  - returns: the value of the block record component
- `public int sky()`
  Returns the value of the sky record component.
  - returns: the value of the sky record component

## ByIdMap

*class* `net.minecraft.util.ByIdMap`

### Methods
- `private static <T> IntFunction<T> createMap(ToIntFunction<T> p_263047_,  T[] p_263043_)`
- `public static <T> IntFunction<T> sparse(ToIntFunction<T> p_262952_,  T[] p_263085_,  T p_262981_)`
- `private static <T> T[] createSortedArray(ToIntFunction<T> p_262976_,  T[] p_263053_)`
- `public static <T> IntFunction<T> continuous(ToIntFunction<T> p_263112_,  T[] p_262975_,  ByIdMap.OutOfBoundsStrategy p_263075_)`

## Class AbortableIterationConsumer.Continuation

*enum* `net.minecraft.util.Class AbortableIterationConsumer.Continuation`

Enclosing interface: AbortableIterationConsumer<T>

### Methods
- `public static AbortableIterationConsumer.Continuation[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static AbortableIterationConsumer.Continuation valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public boolean shouldAbort()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ByIdMap.OutOfBoundsStrategy

*enum* `net.minecraft.util.Class ByIdMap.OutOfBoundsStrategy`

Enclosing class: ByIdMap

### Methods
- `public static ByIdMap.OutOfBoundsStrategy[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ByIdMap.OutOfBoundsStrategy valueOf(String name)`
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

## Class ModCheck.Confidence

*enum* `net.minecraft.util.Class ModCheck.Confidence`

Enclosing class: ModCheck

### Fields
- `final String description`
- `final boolean shouldReportAsModified`

### Methods
- `public static ModCheck.Confidence[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ModCheck.Confidence valueOf(String name)`
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

## Class Unit

*enum* `net.minecraft.util.Class Unit`

### Methods
- `public static Unit[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static Unit valueOf(String name)`
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

## ClassInstanceMultiMap

*class* `net.minecraft.util.ClassInstanceMultiMap`

### Fields
- `private final Map<Class<?>,List<T>> byClass`
- `private final Class<T> baseClass`
- `private final List<T> allInstances`

### Methods
- `public boolean add(T p_13536_)`
- `public boolean remove(Object p_13543_)`
- `public boolean contains(Object p_13540_)`
- `public <S> Collection<S> find(Class<S> p_13534_)`
- `public Iterator<T> iterator()`
- `public List<T> getAllInstances()`
- `public int size()`

### Inherited methods
- from `java.util.AbstractCollection`: `addAll`, `clear`, `containsAll`, `isEmpty`, `removeAll`, `retainAll`, `toArray`, `toArray`, `toString`
- from `java.util.Collection`: `equals`, `hashCode`, `parallelStream`, `removeIf`, `spliterator`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`

## CommonColors

*class* `net.minecraft.util.CommonColors`

### Fields
- `public static final int WHITE` (= -1)
- `public static final int BLACK` (= -16777216)
- `public static final int GRAY` (= -8355712)
- `public static final int LIGHT_GRAY` (= -6250336)
- `public static final int RED` (= -65536)

## CommonLinks

*class* `net.minecraft.util.CommonLinks`

### Fields
- `public static final String GDPR` (= "https://aka.ms/MinecraftGDPR")
- `public static final String EULA` (= "https://aka.ms/MinecraftEULA")
- `public static final String PRIVACY_STATEMENT` (= "http://go.microsoft.com/fwlink/?LinkId=521839")
- `public static final String ATTRIBUTION` (= "https://aka.ms/MinecraftJavaAttribution")
- `public static final String LICENSES` (= "https://aka.ms/MinecraftJavaLicenses")
- `public static final String BUY_MINECRAFT_JAVA` (= "https://aka.ms/BuyMinecraftJava")
- `public static final String ACCOUNT_SETTINGS` (= "https://aka.ms/JavaAccountSettings")
- `public static final String SNAPSHOT_FEEDBACK` (= "https://aka.ms/snapshotfeedback?ref=game")
- `public static final String RELEASE_FEEDBACK` (= "https://aka.ms/javafeedback?ref=game")
- `public static final String SNAPSHOT_BUGS_FEEDBACK` (= "https://aka.ms/snapshotbugs?ref=game")
- `public static final String ACCESSIBILITY_HELP` (= "https://aka.ms/MinecraftJavaAccessibility")
- `public static final String REPORTING_HELP` (= "https://aka.ms/aboutjavareporting")
- `public static final String SUSPENSION_HELP` (= "https://aka.ms/mcjavamoderation")
- `public static final String BLOCKING_HELP` (= "https://aka.ms/javablocking")
- `public static final String SYMLINK_HELP` (= "https://aka.ms/MinecraftSymLinks")
- `public static final String START_REALMS_TRIAL` (= "https://aka.ms/startjavarealmstrial")
- `public static final String BUY_REALMS` (= "https://aka.ms/BuyJavaRealms")
- `public static final String REALMS_TERMS` (= "https://aka.ms/MinecraftRealmsTerms")
- `public static final String REALMS_CONTENT_CREATION` (= "https://aka.ms/MinecraftRealmsContentCreator")
- `public static final String REALMS_UPDATE_MOJANG_ACCOUNT` (= "https://aka.ms/UpdateMojangAccount")

### Methods
- `public static String extendRealms(String p_276321_,  UUID p_301276_,  boolean p_276266_)`
- `public static String extendRealms(String p_276318_,  UUID p_301122_)`

## CrudeIncrementalIntIdentityHashBiMap

*class* `net.minecraft.util.CrudeIncrementalIntIdentityHashBiMap`

### Fields
- `private static final int NOT_FOUND` (= -1)
- `private static final Object EMPTY_SLOT`
- `private static final float LOADFACTOR` (= 0.800000011920929f)
- `private K[] keys`
- `private int[] values`
- `private K[] byId`
- `private int nextId`
- `private int size`

### Inherited fields
- from `net.minecraft.core.IdMap`: `DEFAULT`

### Methods
- `public static <A> CrudeIncrementalIntIdentityHashBiMap<A> create(int p_184238_)`
- `public int getId(@Nullable  K p_13558_)`
- `@Nullable public K byId(int p_13556_)`
- `private int getValue(int p_13568_)`
- `public boolean contains(K p_144610_)`
- `public boolean contains(int p_144608_)`
- `public int add(K p_13570_)`
- `private int nextId()`
- `private void grow(int p_13572_)`
- `public void addMapping(K p_13560_,  int p_13561_)`
- `private int hash(@Nullable  K p_13574_)`
- `private int indexOf(@Nullable  K p_13564_,  int p_13565_)`
- `private int findEmpty(int p_13576_)`
- `public Iterator<K> iterator()`
- `public void clear()`
- `public int size()`
- `public CrudeIncrementalIntIdentityHashBiMap<K> copy()`

### Inherited methods
- from `net.minecraft.core.IdMap`: `byIdOrThrow`
- from `java.lang.Iterable`: `forEach`, `spliterator`

## Crypt

*class* `net.minecraft.util.Crypt`

### Fields
- `private static final String SYMMETRIC_ALGORITHM` (= "AES")
- `private static final int SYMMETRIC_BITS` (= 128)
- `private static final String ASYMMETRIC_ALGORITHM` (= "RSA")
- `private static final int ASYMMETRIC_BITS` (= 1024)
- `private static final String BYTE_ENCODING` (= "ISO_8859_1")
- `private static final String HASH_ALGORITHM` (= "SHA-1")
- `public static final String SIGNING_ALGORITHM` (= "SHA256withRSA")
- `public static final int SIGNATURE_BYTES` (= 256)
- `private static final String PEM_RSA_PRIVATE_KEY_HEADER` (= "-----BEGIN RSA PRIVATE KEY-----")
- `private static final String PEM_RSA_PRIVATE_KEY_FOOTER` (= "-----END RSA PRIVATE KEY-----")
- `public static final String RSA_PUBLIC_KEY_HEADER` (= "-----BEGIN RSA PUBLIC KEY-----")
- `private static final String RSA_PUBLIC_KEY_FOOTER` (= "-----END RSA PUBLIC KEY-----")
- `public static final String MIME_LINE_SEPARATOR` (= "\n")
- `public static final Base64.Encoder MIME_ENCODER`
- `public static final com.mojang.serialization.Codec<PublicKey> PUBLIC_KEY_CODEC`
- `public static final com.mojang.serialization.Codec<PrivateKey> PRIVATE_KEY_CODEC`

### Methods
- `public static SecretKey generateSecretKey()  throws CryptException`
  - throws: CryptException
- `public static KeyPair generateKeyPair()  throws CryptException`
  - throws: CryptException
- `public static byte[] digestData(String p_13591_,  PublicKey p_13592_,  SecretKey p_13593_)  throws CryptException`
  - throws: CryptException
- `private static byte[] digestData(byte[]... p_13603_)  throws Exception`
  - throws: Exception
- `private static <T extends Key> T rsaStringToKey(String p_216072_,  String p_216073_,  String p_216074_,  Crypt.ByteArrayToKeyFunction<T> p_216075_)  throws CryptException`
  - throws: CryptException
- `public static PrivateKey stringToPemRsaPrivateKey(String p_216070_)  throws CryptException`
  - throws: CryptException
- `public static PublicKey stringToRsaPublicKey(String p_216081_)  throws CryptException`
  - throws: CryptException
- `public static String rsaPublicKeyToString(PublicKey p_216079_)`
- `public static String pemRsaPrivateKeyToString(PrivateKey p_216077_)`
- `private static PrivateKey byteToPrivateKey(byte[] p_216083_)  throws CryptException`
  - throws: CryptException
- `public static PublicKey byteToPublicKey(byte[] p_13601_)  throws CryptException`
  - throws: CryptException
- `public static SecretKey decryptByteToSecretKey(PrivateKey p_13598_,  byte[] p_13599_)  throws CryptException`
  - throws: CryptException
- `public static byte[] encryptUsingKey(Key p_13595_,  byte[] p_13596_)  throws CryptException`
  - throws: CryptException
- `public static byte[] decryptUsingKey(Key p_13606_,  byte[] p_13607_)  throws CryptException`
  - throws: CryptException
- `private static byte[] cipherData(int p_13587_,  Key p_13588_,  byte[] p_13589_)  throws CryptException`
  - throws: CryptException
- `private static Cipher setupCipher(int p_13580_,  String p_13581_,  Key p_13582_)  throws Exception`
  - throws: Exception
- `public static Cipher getCipher(int p_13584_,  Key p_13585_)  throws CryptException`
  - throws: CryptException

## Crypt.ByteArrayToKeyFunction

*interface* `net.minecraft.util.Crypt.ByteArrayToKeyFunction`

Enclosing class: Crypt

### Methods
- `T apply(byte[] p_216089_)  throws CryptException`
  - throws: CryptException

## Crypt.SaltSignaturePair

*record* `net.minecraft.util.Crypt.SaltSignaturePair`

Enclosing class: Crypt

### Fields
- `private final long salt`
  The field for the salt record component.
- `private final byte[] signature`
  The field for the signature record component.
- `public static final Crypt.SaltSignaturePair EMPTY`

### Methods
- `public boolean isValid()`
- `public static void write(FriendlyByteBuf p_216101_,  Crypt.SaltSignaturePair p_216102_)`
- `public byte[] saltAsBytes()`
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
- `public long salt()`
  Returns the value of the salt record component.
  - returns: the value of the salt record component
- `public byte[] signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component

## Crypt.SaltSupplier

*class* `net.minecraft.util.Crypt.SaltSupplier`

Enclosing class: Crypt

### Fields
- `private static final SecureRandom secureRandom`

### Methods
- `public static long getLong()`

## CryptException

*class* `net.minecraft.util.CryptException`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## CsvOutput

*class* `net.minecraft.util.CsvOutput`

### Fields
- `private static final String LINE_SEPARATOR` (= "\r\n")
- `private static final String FIELD_SEPARATOR` (= ",")
- `private final Writer output`
- `private final int columnCount`

### Methods
- `public static CsvOutput.Builder builder()`
- `public void writeRow(Object... p_13625_)  throws IOException`
  - throws: IOException
- `private void writeLine(Stream<?> p_13623_)  throws IOException`
  - throws: IOException
- `private static String getStringValue(@Nullable  Object p_13621_)`

## CsvOutput.Builder

*class* `net.minecraft.util.CsvOutput.Builder`

Enclosing class: CsvOutput

### Fields
- `private final List<String> headers`

### Methods
- `public CsvOutput.Builder addColumn(String p_13631_)`
- `public CsvOutput build(Writer p_13629_)  throws IOException`
  - throws: IOException

## CubicSampler

*class* `net.minecraft.util.CubicSampler`

### Fields
- `private static final int GAUSSIAN_SAMPLE_RADIUS` (= 2)
- `private static final int GAUSSIAN_SAMPLE_BREADTH` (= 6)
- `private static final double[] GAUSSIAN_SAMPLE_KERNEL`

### Methods
- `public static Vec3 gaussianSampleVec3(Vec3 p_130039_,  CubicSampler.Vec3Fetcher p_130040_)`

## CubicSampler.Vec3Fetcher

*interface* `net.minecraft.util.CubicSampler.Vec3Fetcher`

Enclosing class: CubicSampler

### Methods
- `Vec3 fetch(int p_130042_,  int p_130043_,  int p_130044_)`

## CubicSpline.Builder>

*class* `net.minecraft.util.CubicSpline.Builder>`

Enclosing interface: CubicSpline<C, I extends ToFloatFunction<C>>

### Fields
- `private final I extends ToFloatFunction<C> coordinate`
- `private final ToFloatFunction<Float> valueTransformer`
- `private final it.unimi.dsi.fastutil.floats.FloatList locations`
- `private final List<CubicSpline<C,I extends ToFloatFunction<C>>> values`
- `private final it.unimi.dsi.fastutil.floats.FloatList derivatives`

### Methods
- `public CubicSpline.Builder<C,I> addPoint(float p_216115_,  float p_216116_)`
- `public CubicSpline.Builder<C,I> addPoint(float p_184299_,  float p_184300_,  float p_184301_)`
- `public CubicSpline.Builder<C,I> addPoint(float p_216118_,  CubicSpline<C,I> p_216119_)`
- `private CubicSpline.Builder<C,I> addPoint(float p_184303_,  CubicSpline<C,I> p_184304_,  float p_184305_)`
- `public CubicSpline<C,I> build()`

## CubicSpline.Constant>

*record* `net.minecraft.util.CubicSpline.Constant>`

Enclosing interface: CubicSpline<C, I extends ToFloatFunction<C>>

### Fields
- `private final float value`
  The field for the value record component.

### Inherited fields
- from `net.minecraft.util.ToFloatFunction`: `IDENTITY`

### Methods
- `public float apply(C p_184313_)`
- `public String parityString()`
- `public float minValue()`
- `public float maxValue()`
- `public CubicSpline<C,I> mapAll(CubicSpline.CoordinateVisitor<I> p_211581_)`
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
- `public float value()`
  Returns the value of the value record component.
  - returns: the value of the value record component

### Inherited methods
- from `net.minecraft.util.ToFloatFunction`: `comap`

## CubicSpline.CoordinateVisitor

*interface* `net.minecraft.util.CubicSpline.CoordinateVisitor`

Enclosing interface: CubicSpline<C, I extends ToFloatFunction<C>>

### Methods
- `I visit(I p_216123_)`

## CubicSpline.Multipoint>

*record* `net.minecraft.util.CubicSpline.Multipoint>`

Enclosing interface: CubicSpline<C, I extends ToFloatFunction<C>>

### Fields
- `private final I extends ToFloatFunction<C> coordinate`
  The field for the coordinate record component.
- `private final float[] locations`
  The field for the locations record component.
- `private final List<CubicSpline<C,I extends ToFloatFunction<C>>> values`
  The field for the values record component.
- `private final float[] derivatives`
  The field for the derivatives record component.
- `private final float minValue`
  The field for the minValue record component.
- `private final float maxValue`
  The field for the maxValue record component.

### Inherited fields
- from `net.minecraft.util.ToFloatFunction`: `IDENTITY`

### Methods
- `static <C, I extends ToFloatFunction<C>> CubicSpline.Multipoint<C,I> create(I p_216144_,  float[] p_216145_,  List<CubicSpline<C,I>> p_216146_,  float[] p_216147_)`
- `private static float linearExtend(float p_216134_,  float[] p_216135_,  float p_216136_,  float[] p_216137_,  int p_216138_)`
- `private static <C, I extends ToFloatFunction<C>> void validateSizes(float[] p_216152_,  List<CubicSpline<C,I>> p_216153_,  float[] p_216154_)`
- `public float apply(C p_184340_)`
- `private static int findIntervalStart(float[] p_216149_,  float p_216150_)`
- `public String parityString()`
- `private String toString(float[] p_184335_)`
- `public CubicSpline<C,I> mapAll(CubicSpline.CoordinateVisitor<I> p_211585_)`
- `public float minValue()`
  Returns the value of the minValue record component.
  - returns: the value of the minValue record component
- `public float maxValue()`
  Returns the value of the maxValue record component.
  - returns: the value of the maxValue record component
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
- `public I coordinate()`
  Returns the value of the coordinate record component.
  - returns: the value of the coordinate record component
- `public float[] locations()`
  Returns the value of the locations record component.
  - returns: the value of the locations record component
- `public List<CubicSpline<C,I>> values()`
  Returns the value of the values record component.
  - returns: the value of the values record component
- `public float[] derivatives()`
  Returns the value of the derivatives record component.
  - returns: the value of the derivatives record component

### Inherited methods
- from `net.minecraft.util.ToFloatFunction`: `comap`

## CubicSpline>

*interface* `net.minecraft.util.CubicSpline>`

All Superinterfaces: ToFloatFunction<C>

### Inherited fields
- from `net.minecraft.util.ToFloatFunction`: `IDENTITY`

### Methods
- `String parityString()`
- `CubicSpline<C,I> mapAll(CubicSpline.CoordinateVisitor<I> p_211579_)`
- `static <C, I extends ToFloatFunction<C>> com.mojang.serialization.Codec<CubicSpline<C,I>> codec(com.mojang.serialization.Codec<I> p_184263_)`
- `static <C, I extends ToFloatFunction<C>> CubicSpline<C,I> constant(float p_184240_)`
- `static <C, I extends ToFloatFunction<C>> CubicSpline.Builder<C,I> builder(I p_184253_)`
- `static <C, I extends ToFloatFunction<C>> CubicSpline.Builder<C,I> builder(I p_184255_,  ToFloatFunction<Float> p_184256_)`

### Inherited methods
- from `net.minecraft.util.ToFloatFunction`: `apply`, `comap`, `maxValue`, `minValue`

## DebugBuffer

*class* `net.minecraft.util.DebugBuffer`

### Fields
- `private final AtomicReferenceArray<T> data`
- `private final AtomicInteger index`

### Methods
- `public void push(T p_144626_)`
- `public List<T> dump()`

## DependencySorter.Entry

*interface* `net.minecraft.util.DependencySorter.Entry`

Enclosing class: DependencySorter<K, V extends DependencySorter.Entry<K>>

### Methods
- `void visitRequiredDependencies(Consumer<K> p_285054_)`
- `void visitOptionalDependencies(Consumer<K> p_285150_)`

## DependencySorter>

*class* `net.minecraft.util.DependencySorter>`

### Fields
- `private final Map<K,V extends DependencySorter.Entry<K>> contents`

### Methods
- `public DependencySorter<K,V> addEntry(K p_285256_,  V p_285334_)`
- `private void visitDependenciesAndElement(com.google.common.collect.Multimap<K,K> p_285183_,  Set<K> p_285506_,  K p_285108_,  BiConsumer<K,V> p_285007_)`
- `private static <K> boolean isCyclic(com.google.common.collect.Multimap<K,K> p_285132_,  K p_285324_,  K p_285326_)`
- `private static <K> void addDependencyIfNotCyclic(com.google.common.collect.Multimap<K,K> p_285047_,  K p_285148_,  K p_285193_)`
- `public void orderByDependencies(BiConsumer<K,V> p_285438_)`

## DirectoryLock

*class* `net.minecraft.util.DirectoryLock`

### Fields
- `public static final String LOCK_FILE` (= "session.lock")
- `private final FileChannel lockFile`
- `private final FileLock lock`
- `private static final ByteBuffer DUMMY`

### Methods
- `public static DirectoryLock create(Path p_13641_)  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException
- `public boolean isValid()`
- `public static boolean isLocked(Path p_13643_)  throws IOException`
  - throws: IOException

## DirectoryLock.LockException

*class* `net.minecraft.util.DirectoryLock.LockException`

Enclosing class: DirectoryLock

### Methods
- `public static DirectoryLock.LockException alreadyLocked(Path p_13649_)`

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## ExceptionCollector

*class* `net.minecraft.util.ExceptionCollector`

### Fields
- `@Nullable private T extends Throwable result`

### Methods
- `public void add(T p_13654_)`
- `public void throwIfPresent()  throws T`
  - throws: T extends Throwable

## ExtraCodecs

*class* `net.minecraft.util.ExtraCodecs`

### Fields
- `public static final com.mojang.serialization.Codec<com.google.gson.JsonElement> JSON`
- `public static final com.mojang.serialization.Codec<Component> COMPONENT`
- `public static final com.mojang.serialization.Codec<Component> FLAT_COMPONENT`
- `public static final com.mojang.serialization.Codec<org.joml.Vector3f> VECTOR3F`
- `public static final com.mojang.serialization.Codec<org.joml.Quaternionf> QUATERNIONF_COMPONENTS`
- `public static final com.mojang.serialization.Codec<org.joml.AxisAngle4f> AXISANGLE4F`
- `public static final com.mojang.serialization.Codec<org.joml.Quaternionf> QUATERNIONF`
- `public static com.mojang.serialization.Codec<org.joml.Matrix4f> MATRIX4F`
- `public static final com.mojang.serialization.Codec<Integer> NON_NEGATIVE_INT`
- `public static final com.mojang.serialization.Codec<Integer> POSITIVE_INT`
- `public static final com.mojang.serialization.Codec<Float> POSITIVE_FLOAT`
- `public static final com.mojang.serialization.Codec<Pattern> PATTERN`
- `public static final com.mojang.serialization.Codec<Instant> INSTANT_ISO8601`
- `public static final com.mojang.serialization.Codec<byte[]> BASE64_STRING`
- `public static final com.mojang.serialization.Codec<String> ESCAPED_STRING`
- `public static final com.mojang.serialization.Codec<ExtraCodecs.TagOrElementLocation> TAG_OR_ELEMENT_ID`
- `public static final Function<Optional<Long>,OptionalLong> toOptionalLong`
- `public static final Function<OptionalLong,Optional<Long>> fromOptionalLong`
- `public static final com.mojang.serialization.Codec<BitSet> BIT_SET`
- `private static final com.mojang.serialization.Codec<com.mojang.authlib.properties.Property> PROPERTY`
- `public static final com.mojang.serialization.Codec<com.mojang.authlib.properties.PropertyMap> PROPERTY_MAP`
- `private static final com.mojang.serialization.MapCodec<com.mojang.authlib.GameProfile> GAME_PROFILE_WITHOUT_PROPERTIES`
- `public static final com.mojang.serialization.Codec<com.mojang.authlib.GameProfile> GAME_PROFILE`
- `public static final com.mojang.serialization.Codec<String> NON_EMPTY_STRING`
- `public static final com.mojang.serialization.Codec<Integer> CODEPOINT`
- `public static com.mojang.serialization.Codec<String> RESOURCE_PATH_CODEC`

### Methods
- `@Deprecated public static <T> com.mojang.serialization.Codec<T> adaptJsonSerializer(Function<com.google.gson.JsonElement,T> p_301013_,  Function<T,com.google.gson.JsonElement> p_297664_)` (deprecated)
- `public static <F, S> com.mojang.serialization.Codec<com.mojang.datafixers.util.Either<F,S>> xor(com.mojang.serialization.Codec<F> p_144640_,  com.mojang.serialization.Codec<S> p_144641_)`
- `public static <P, I> com.mojang.serialization.Codec<I> intervalCodec(com.mojang.serialization.Codec<P> p_184362_,  String p_184363_,  String p_184364_,  BiFunction<P,P,com.mojang.serialization.DataResult<I>> p_184365_,  Function<I,P> p_184366_,  Function<I,P> p_184367_)`
- `public static <A> com.mojang.serialization.Codec.ResultFunction<A> orElsePartial(A p_184382_)`
- `public static <E> com.mojang.serialization.Codec<E> idResolverCodec(ToIntFunction<E> p_184422_,  IntFunction<E> p_184423_,  int p_184424_)`
- `public static <E> com.mojang.serialization.Codec<E> stringResolverCodec(Function<E,String> p_184406_,  Function<String,E> p_184407_)`
- `public static <E> com.mojang.serialization.Codec<E> orCompressed(com.mojang.serialization.Codec<E> p_184426_,  com.mojang.serialization.Codec<E> p_184427_)`
- `public static <E> com.mojang.serialization.Codec<E> overrideLifecycle(com.mojang.serialization.Codec<E> p_184369_,  Function<E,com.mojang.serialization.Lifecycle> p_184370_,  Function<E,com.mojang.serialization.Lifecycle> p_184371_)`
- `public static <F, S> ExtraCodecs.EitherCodec<F,S> either(com.mojang.serialization.Codec<F> p_298040_,  com.mojang.serialization.Codec<S> p_300729_)`
- `public static <K, V> ExtraCodecs.StrictUnboundedMapCodec<K,V> strictUnboundedMap(com.mojang.serialization.Codec<K> p_298880_,  com.mojang.serialization.Codec<V> p_297369_)`
- `public static <T> com.mojang.serialization.Codec<T> validate(com.mojang.serialization.Codec<T> p_265690_,  Function<T,com.mojang.serialization.DataResult<T>> p_265223_)`
- `public static <T> com.mojang.serialization.MapCodec<T> validate(com.mojang.serialization.MapCodec<T> p_286613_,  Function<T,com.mojang.serialization.DataResult<T>> p_286875_)`
- `private static com.mojang.serialization.Codec<Integer> intRangeWithMessage(int p_144634_,  int p_144635_,  Function<Integer,String> p_144636_)`
- `public static com.mojang.serialization.Codec<Integer> intRange(int p_270883_,  int p_270323_)`
- `private static com.mojang.serialization.Codec<Float> floatRangeMinExclusiveWithMessage(float p_184351_,  float p_184352_,  Function<Float,String> p_184353_)`
- `public static <T> com.mojang.serialization.Codec<List<T>> nonEmptyList(com.mojang.serialization.Codec<List<T>> p_144638_)`
- `public static <T> com.mojang.serialization.Codec<HolderSet<T>> nonEmptyHolderSet(com.mojang.serialization.Codec<HolderSet<T>> p_203983_)`
- `public static <T> com.mojang.serialization.Codec<T> recursive(Function<com.mojang.serialization.Codec<T>,com.mojang.serialization.Codec<T>> p_298069_)`
- `public static <A> com.mojang.serialization.Codec<A> lazyInitializedCodec(Supplier<com.mojang.serialization.Codec<A>> p_184416_)`
- `public static <A> com.mojang.serialization.MapCodec<Optional<A>> strictOptionalField(com.mojang.serialization.Codec<A> p_298284_,  String p_297262_)`
- `public static <A> com.mojang.serialization.MapCodec<A> strictOptionalField(com.mojang.serialization.Codec<A> p_298122_,  String p_301181_,  A p_300795_)`
- `public static <E> com.mojang.serialization.MapCodec<E> retrieveContext(Function<com.mojang.serialization.DynamicOps<?>,com.mojang.serialization.DataResult<E>> p_203977_)`
- `public static <E, L extends Collection<E>, T> Function<L,com.mojang.serialization.DataResult<L>> ensureHomogenous(Function<E,T> p_203985_)`
- `public static <A> com.mojang.serialization.Codec<A> catchDecoderException(com.mojang.serialization.Codec<A> p_216186_)`
- `public static com.mojang.serialization.Codec<TemporalAccessor> temporalCodec(DateTimeFormatter p_216171_)`
- `public static com.mojang.serialization.MapCodec<OptionalLong> asOptionalLong(com.mojang.serialization.MapCodec<Optional<Long>> p_216167_)`
- `public static com.mojang.serialization.Codec<String> sizeLimitedString(int p_265773_,  int p_265217_)`
- `public static <T> com.mojang.serialization.Codec<T> withAlternative(com.mojang.serialization.Codec<T> p_300585_,  com.mojang.serialization.Codec<? extends T> p_300484_)`
- `public static <T, U> com.mojang.serialization.Codec<T> withAlternative(com.mojang.serialization.Codec<T> p_299945_,  com.mojang.serialization.Codec<U> p_299401_,  Function<U,T> p_297361_)`
- `public static <T> com.mojang.serialization.Codec<it.unimi.dsi.fastutil.objects.Object2BooleanMap<T>> object2BooleanMap(com.mojang.serialization.Codec<T> p_300841_)`

## ExtraCodecs.EitherCodec

*class* `net.minecraft.util.ExtraCodecs.EitherCodec`

Enclosing class: ExtraCodecs

### Fields
- `private final com.mojang.serialization.Codec<F> first`
- `private final com.mojang.serialization.Codec<S> second`

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Either<F,S>,T>> decode(com.mojang.serialization.DynamicOps<T> p_184530_,  T p_184531_)`
- `public <T> com.mojang.serialization.DataResult<T> encode(com.mojang.datafixers.util.Either<F,S> p_184511_,  com.mojang.serialization.DynamicOps<T> p_184512_,  T p_184513_)`
- `public boolean equals(Object p_184537_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## ExtraCodecs.RecursiveCodec

*class* `net.minecraft.util.ExtraCodecs.RecursiveCodec`

Enclosing class: ExtraCodecs

### Fields
- `private final Supplier<com.mojang.serialization.Codec<T>> wrapped`

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public <S> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<T,S>> decode(com.mojang.serialization.DynamicOps<S> p_298423_,  S p_298846_)`
- `public <S> com.mojang.serialization.DataResult<S> encode(T p_297845_,  com.mojang.serialization.DynamicOps<S> p_300705_,  S p_299581_)`
- `public String toString()`

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## ExtraCodecs.StrictOptionalFieldCodec

*class* `net.minecraft.util.ExtraCodecs.StrictOptionalFieldCodec`

Enclosing class: ExtraCodecs

### Fields
- `private final String name`
- `private final com.mojang.serialization.Codec<A> elementCodec`

### Methods
- `public <T> com.mojang.serialization.DataResult<Optional<A>> decode(com.mojang.serialization.DynamicOps<T> p_299736_,  com.mojang.serialization.MapLike<T> p_298150_)`
- `public <T> com.mojang.serialization.RecordBuilder<T> encode(Optional<A> p_299100_,  com.mojang.serialization.DynamicOps<T> p_299809_,  com.mojang.serialization.RecordBuilder<T> p_300932_)`
- `public <T> Stream<T> keys(com.mojang.serialization.DynamicOps<T> p_300796_)`
- `public boolean equals(Object p_300958_)`
- `public int hashCode()`
- `public String toString()`

### Inherited methods
- from `com.mojang.serialization.MapCodec`: `codec`, `dependent`, `deprecated`, `fieldOf`, `flatXmap`, `forGetter`, `mapResult`, `of`, `of`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `setPartial`, `stable`, `unit`, `unit`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.CompressorHolder`: `compressor`
- from `com.mojang.serialization.MapDecoder`: `ap`, `compressedDecode`, `compressor`, `decoder`, `flatMap`, `map`
- from `com.mojang.serialization.MapEncoder`: `comap`, `compressedBuilder`, `compressor`, `encoder`, `flatComap`

## ExtraCodecs.StrictUnboundedMapCodec

*record* `net.minecraft.util.ExtraCodecs.StrictUnboundedMapCodec`

Enclosing class: ExtraCodecs

### Fields
- `private final com.mojang.serialization.Codec<K> keyCodec`
  The field for the keyCodec record component.
- `private final com.mojang.serialization.Codec<V> elementCodec`
  The field for the elementCodec record component.

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public <T> com.mojang.serialization.DataResult<Map<K,V>> decode(com.mojang.serialization.DynamicOps<T> p_298061_,  com.mojang.serialization.MapLike<T> p_299914_)`
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<Map<K,V>,T>> decode(com.mojang.serialization.DynamicOps<T> p_299262_,  T p_297460_)`
- `public <T> com.mojang.serialization.DataResult<T> encode(Map<K,V> p_301091_,  com.mojang.serialization.DynamicOps<T> p_298442_,  T p_300447_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public com.mojang.serialization.Codec<K> keyCodec()`
  Returns the value of the keyCodec record component.
  - returns: the value of the keyCodec record component
- `public com.mojang.serialization.Codec<V> elementCodec()`
  Returns the value of the elementCodec record component.
  - returns: the value of the elementCodec record component
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `com.mojang.serialization.codecs.BaseMapCodec`: `encode`
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## ExtraCodecs.TagOrElementLocation

*record* `net.minecraft.util.ExtraCodecs.TagOrElementLocation`

Enclosing class: ExtraCodecs

### Fields
- `private final ResourceLocation id`
  The field for the id record component.
- `private final boolean tag`
  The field for the tag record component.

### Methods
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `private String decoratedId()`
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceLocation id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public boolean tag()`
  Returns the value of the tag record component.
  - returns: the value of the tag record component

## ExtraCodecs.XorCodec

*record* `net.minecraft.util.ExtraCodecs.XorCodec`

Enclosing class: ExtraCodecs

### Fields
- `private final com.mojang.serialization.Codec<F> first`
  The field for the first record component.
- `private final com.mojang.serialization.Codec<S> second`
  The field for the second record component.

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<com.mojang.datafixers.util.Either<F,S>,T>> decode(com.mojang.serialization.DynamicOps<T> p_144679_,  T p_144680_)`
- `public <T> com.mojang.serialization.DataResult<T> encode(com.mojang.datafixers.util.Either<F,S> p_144663_,  com.mojang.serialization.DynamicOps<T> p_144664_,  T p_144665_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public com.mojang.serialization.Codec<F> first()`
  Returns the value of the first record component.
  - returns: the value of the first record component
- `public com.mojang.serialization.Codec<S> second()`
  Returns the value of the second record component.
  - returns: the value of the second record component

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## FastBufferedInputStream

*class* `net.minecraft.util.FastBufferedInputStream`

### Fields
- `private static final int DEFAULT_BUFFER_SIZE` (= 8192)
- `private final InputStream in`
- `private final byte[] buffer`
- `private int limit`
- `private int position`

### Methods
- `public int read()  throws IOException`
  - throws: IOException
- `public int read(byte[] p_196576_,  int p_196577_,  int p_196578_)  throws IOException`
  - throws: IOException
- `public long skip(long p_196580_)  throws IOException`
  - throws: IOException
- `public int available()  throws IOException`
  - throws: IOException
- `public void close()  throws IOException`
  - throws: IOException
- `private int bytesInBuffer()`
- `private void fill()  throws IOException`
  - throws: IOException

### Inherited methods
- from `java.io.InputStream`: `mark`, `markSupported`, `nullInputStream`, `read`, `readAllBytes`, `readNBytes`, `readNBytes`, `reset`, `skipNBytes`, `transferTo`

## FastColor

*class* `net.minecraft.util.FastColor`

## FastColor.ABGR32

*class* `net.minecraft.util.FastColor.ABGR32`

Enclosing class: FastColor

### Methods
- `public static int alpha(int p_267257_)`
- `public static int red(int p_267160_)`
- `public static int green(int p_266784_)`
- `public static int blue(int p_267087_)`
- `public static int transparent(int p_267248_)`
- `public static int opaque(int p_268288_)`
- `public static int color(int p_267196_,  int p_266895_,  int p_266779_,  int p_267206_)`
- `public static int color(int p_267230_,  int p_266708_)`

## FastColor.ARGB32

*class* `net.minecraft.util.FastColor.ARGB32`

Enclosing class: FastColor

### Methods
- `public static int alpha(int p_13656_)`
- `public static int red(int p_13666_)`
- `public static int green(int p_13668_)`
- `public static int blue(int p_13670_)`
- `public static int color(int p_13661_,  int p_13662_,  int p_13663_,  int p_13664_)`
- `public static int multiply(int p_13658_,  int p_13659_)`
- `public static int lerp(float p_270972_,  int p_270081_,  int p_270150_)`

## FileZipper

*class* `net.minecraft.util.FileZipper`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Path outputFile`
- `private final Path tempFile`
- `private final FileSystem fs`

### Methods
- `public void add(Path p_144704_,  String p_144705_)`
- `public void add(Path p_144701_,  File p_144702_)`
- `public void add(Path p_144699_)`
- `public void close()`

## FormattedCharSequence

*interface* `net.minecraft.util.FormattedCharSequence`

### Fields
- `static final FormattedCharSequence EMPTY`

### Methods
- `boolean accept(FormattedCharSink p_13732_)`
- `static FormattedCharSequence codepoint(int p_13694_,  Style p_13695_)`
- `static FormattedCharSequence forward(String p_13715_,  Style p_13716_)`
- `static FormattedCharSequence forward(String p_144718_,  Style p_144719_,  it.unimi.dsi.fastutil.ints.Int2IntFunction p_144720_)`
- `static FormattedCharSequence backward(String p_144724_,  Style p_144725_)`
- `static FormattedCharSequence backward(String p_13741_,  Style p_13742_,  it.unimi.dsi.fastutil.ints.Int2IntFunction p_13743_)`
- `static FormattedCharSink decorateOutput(FormattedCharSink p_13706_,  it.unimi.dsi.fastutil.ints.Int2IntFunction p_13707_)`
- `static FormattedCharSequence composite()`
- `static FormattedCharSequence composite(FormattedCharSequence p_144712_)`
- `static FormattedCharSequence composite(FormattedCharSequence p_13697_,  FormattedCharSequence p_13698_)`
- `static FormattedCharSequence composite(FormattedCharSequence... p_144722_)`
- `static FormattedCharSequence composite(List<FormattedCharSequence> p_13723_)`
- `static FormattedCharSequence fromPair(FormattedCharSequence p_13734_,  FormattedCharSequence p_13735_)`
- `static FormattedCharSequence fromList(List<FormattedCharSequence> p_13745_)`

## FormattedCharSink

*interface* `net.minecraft.util.FormattedCharSink`

### Methods
- `boolean accept(int p_13746_,  Style p_13747_,  int p_13748_)`

## FutureChain

*class* `net.minecraft.util.FutureChain`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private CompletableFuture<?> head`
- `private final Executor checkedExecutor`
- `private volatile boolean closed`

### Methods
- `public void append(TaskChainer.DelayedTask p_242381_)`
- `public void close()`

## Graph

*class* `net.minecraft.util.Graph`

### Methods
- `public static <T> boolean depthFirstSearch(Map<T,Set<T>> p_184557_,  Set<T> p_184558_,  Set<T> p_184559_,  Consumer<T> p_184560_,  T p_184561_)`

## GsonHelper

*class* `net.minecraft.util.GsonHelper`

### Fields
- `private static final com.google.gson.Gson GSON`

### Methods
- `public static boolean isStringValue(com.google.gson.JsonObject p_13814_,  String p_13815_)`
- `public static boolean isStringValue(com.google.gson.JsonElement p_13804_)`
- `public static boolean isNumberValue(com.google.gson.JsonObject p_144763_,  String p_144764_)`
- `public static boolean isNumberValue(com.google.gson.JsonElement p_13873_)`
- `public static boolean isBooleanValue(com.google.gson.JsonObject p_13881_,  String p_13882_)`
- `public static boolean isBooleanValue(com.google.gson.JsonElement p_144768_)`
- `public static boolean isArrayNode(com.google.gson.JsonObject p_13886_,  String p_13887_)`
- `public static boolean isObjectNode(com.google.gson.JsonObject p_144773_,  String p_144774_)`
- `public static boolean isValidPrimitive(com.google.gson.JsonObject p_13895_,  String p_13896_)`
- `public static boolean isValidNode(@Nullable  com.google.gson.JsonObject p_13901_,  String p_13902_)`
- `public static com.google.gson.JsonElement getNonNull(com.google.gson.JsonObject p_289782_,  String p_289789_)`
- `public static String convertToString(com.google.gson.JsonElement p_13806_,  String p_13807_)`
- `public static String getAsString(com.google.gson.JsonObject p_13907_,  String p_13908_)`
- `@Nullable @Contract("_,_,!null->!null;_,_,null->_") public static String getAsString(com.google.gson.JsonObject p_13852_,  String p_13853_,  @Nullable  String p_13854_)`
- `public static Holder<Item> convertToItem(com.google.gson.JsonElement p_13875_,  String p_13876_)`
- `public static Holder<Item> getAsItem(com.google.gson.JsonObject p_144747_,  String p_144748_)`
- `@Nullable @Contract("_,_,!null->!null;_,_,null->_") public static Holder<Item> getAsItem(com.google.gson.JsonObject p_13910_,  String p_13911_,  @Nullable  Holder<Item> p_300930_)`
- `public static boolean convertToBoolean(com.google.gson.JsonElement p_13878_,  String p_13879_)`
- `public static boolean getAsBoolean(com.google.gson.JsonObject p_13913_,  String p_13914_)`
- `public static boolean getAsBoolean(com.google.gson.JsonObject p_13856_,  String p_13857_,  boolean p_13858_)`
- `public static double convertToDouble(com.google.gson.JsonElement p_144770_,  String p_144771_)`
- `public static double getAsDouble(com.google.gson.JsonObject p_144785_,  String p_144786_)`
- `public static double getAsDouble(com.google.gson.JsonObject p_144743_,  String p_144744_,  double p_144745_)`
- `public static float convertToFloat(com.google.gson.JsonElement p_13889_,  String p_13890_)`
- `public static float getAsFloat(com.google.gson.JsonObject p_13916_,  String p_13917_)`
- `public static float getAsFloat(com.google.gson.JsonObject p_13821_,  String p_13822_,  float p_13823_)`
- `public static long convertToLong(com.google.gson.JsonElement p_13892_,  String p_13893_)`
- `public static long getAsLong(com.google.gson.JsonObject p_13922_,  String p_13923_)`
- `public static long getAsLong(com.google.gson.JsonObject p_13829_,  String p_13830_,  long p_13831_)`
- `public static int convertToInt(com.google.gson.JsonElement p_13898_,  String p_13899_)`
- `public static int getAsInt(com.google.gson.JsonObject p_13928_,  String p_13929_)`
- `public static int getAsInt(com.google.gson.JsonObject p_13825_,  String p_13826_,  int p_13827_)`
- `public static byte convertToByte(com.google.gson.JsonElement p_13904_,  String p_13905_)`
- `public static byte getAsByte(com.google.gson.JsonObject p_144791_,  String p_144792_)`
- `public static byte getAsByte(com.google.gson.JsonObject p_13817_,  String p_13818_,  byte p_13819_)`
- `public static char convertToCharacter(com.google.gson.JsonElement p_144776_,  String p_144777_)`
- `public static char getAsCharacter(com.google.gson.JsonObject p_144794_,  String p_144795_)`
- `public static char getAsCharacter(com.google.gson.JsonObject p_144739_,  String p_144740_,  char p_144741_)`
- `public static BigDecimal convertToBigDecimal(com.google.gson.JsonElement p_144779_,  String p_144780_)`
- `public static BigDecimal getAsBigDecimal(com.google.gson.JsonObject p_144797_,  String p_144798_)`
- `public static BigDecimal getAsBigDecimal(com.google.gson.JsonObject p_144751_,  String p_144752_,  BigDecimal p_144753_)`
- `public static BigInteger convertToBigInteger(com.google.gson.JsonElement p_144782_,  String p_144783_)`
- `public static BigInteger getAsBigInteger(com.google.gson.JsonObject p_144800_,  String p_144801_)`
- `public static BigInteger getAsBigInteger(com.google.gson.JsonObject p_144755_,  String p_144756_,  BigInteger p_144757_)`
- `public static short convertToShort(com.google.gson.JsonElement p_144788_,  String p_144789_)`
- `public static short getAsShort(com.google.gson.JsonObject p_144803_,  String p_144804_)`
- `public static short getAsShort(com.google.gson.JsonObject p_144759_,  String p_144760_,  short p_144761_)`
- `public static com.google.gson.JsonObject convertToJsonObject(com.google.gson.JsonElement p_13919_,  String p_13920_)`
- `public static com.google.gson.JsonObject getAsJsonObject(com.google.gson.JsonObject p_13931_,  String p_13932_)`
- `@Nullable @Contract("_,_,!null->!null;_,_,null->_") public static com.google.gson.JsonObject getAsJsonObject(com.google.gson.JsonObject p_13842_,  String p_13843_,  @Nullable  com.google.gson.JsonObject p_13844_)`
- `public static com.google.gson.JsonArray convertToJsonArray(com.google.gson.JsonElement p_13925_,  String p_13926_)`
- `public static com.google.gson.JsonArray getAsJsonArray(com.google.gson.JsonObject p_13934_,  String p_13935_)`
- `@Nullable @Contract("_,_,!null->!null;_,_,null->_") public static com.google.gson.JsonArray getAsJsonArray(com.google.gson.JsonObject p_13833_,  String p_13834_,  @Nullable  com.google.gson.JsonArray p_13835_)`
- `public static <T> T convertToObject(@Nullable  com.google.gson.JsonElement p_13809_,  String p_13810_,  com.google.gson.JsonDeserializationContext p_13811_,  Class<? extends T> p_13812_)`
- `public static <T> T getAsObject(com.google.gson.JsonObject p_13837_,  String p_13838_,  com.google.gson.JsonDeserializationContext p_13839_,  Class<? extends T> p_13840_)`
- `@Nullable @Contract("_,_,!null,_,_->!null;_,_,null,_,_->_") public static <T> T getAsObject(com.google.gson.JsonObject p_13846_,  String p_13847_,  @Nullable  T p_13848_,  com.google.gson.JsonDeserializationContext p_13849_,  Class<? extends T> p_13850_)`
- `public static String getType(@Nullable  com.google.gson.JsonElement p_13884_)`
- `@Nullable public static <T> T fromNullableJson(com.google.gson.Gson p_13781_,  Reader p_13782_,  Class<T> p_13783_,  boolean p_13784_)`
- `public static <T> T fromJson(com.google.gson.Gson p_263516_,  Reader p_263522_,  Class<T> p_263539_,  boolean p_263489_)`
- `@Nullable public static <T> T fromNullableJson(com.google.gson.Gson p_13772_,  Reader p_13773_,  com.google.gson.reflect.TypeToken<T> p_13774_,  boolean p_13775_)`
- `public static <T> T fromJson(com.google.gson.Gson p_263499_,  Reader p_263527_,  com.google.gson.reflect.TypeToken<T> p_263525_,  boolean p_263507_)`
- `@Nullable public static <T> T fromNullableJson(com.google.gson.Gson p_13790_,  String p_13791_,  com.google.gson.reflect.TypeToken<T> p_13792_,  boolean p_13793_)`
- `public static <T> T fromJson(com.google.gson.Gson p_263492_,  String p_263488_,  Class<T> p_263503_,  boolean p_263506_)`
- `@Nullable public static <T> T fromNullableJson(com.google.gson.Gson p_13799_,  String p_13800_,  Class<T> p_13801_,  boolean p_13802_)`
- `public static <T> T fromJson(com.google.gson.Gson p_13768_,  Reader p_13769_,  com.google.gson.reflect.TypeToken<T> p_13770_)`
- `@Nullable public static <T> T fromNullableJson(com.google.gson.Gson p_13786_,  String p_13787_,  com.google.gson.reflect.TypeToken<T> p_13788_)`
- `public static <T> T fromJson(com.google.gson.Gson p_13777_,  Reader p_13778_,  Class<T> p_13779_)`
- `public static <T> T fromJson(com.google.gson.Gson p_13795_,  String p_13796_,  Class<T> p_13797_)`
- `public static com.google.gson.JsonObject parse(String p_13870_,  boolean p_13871_)`
- `public static com.google.gson.JsonObject parse(Reader p_13862_,  boolean p_13863_)`
- `public static com.google.gson.JsonObject parse(String p_13865_)`
- `public static com.google.gson.JsonObject parse(Reader p_13860_)`
- `public static com.google.gson.JsonArray parseArray(String p_216215_)`
- `public static com.google.gson.JsonArray parseArray(Reader p_144766_)`
- `public static String toStableString(com.google.gson.JsonElement p_216217_)`
- `public static void writeValue(com.google.gson.stream.JsonWriter p_216208_,  @Nullable  com.google.gson.JsonElement p_216209_,  @Nullable  Comparator<String> p_216210_)  throws IOException`
  - throws: IOException
- `private static Collection<Map.Entry<String,com.google.gson.JsonElement>> sortByKeyIfNeeded(Collection<Map.Entry<String,com.google.gson.JsonElement>> p_216212_,  @Nullable  Comparator<String> p_216213_)`

## HttpUtil

*class* `net.minecraft.util.HttpUtil`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `public static final com.google.common.util.concurrent.ListeningExecutorService DOWNLOAD_EXECUTOR`

### Methods
- `public static CompletableFuture<?> downloadTo(File p_216226_,  URL p_216227_,  Map<String,String> p_216228_,  int p_216229_,  @Nullable  ProgressListener p_216230_,  Proxy p_216231_)`
- `public static int getAvailablePort()`
- `public static boolean isPortAvailable(int p_259872_)`

## InclusiveRange>

*record* `net.minecraft.util.InclusiveRange>`

### Fields
- `private final T extends Comparable<T> minInclusive`
  The field for the minInclusive record component.
- `private final T extends Comparable<T> maxInclusive`
  The field for the maxInclusive record component.
- `public static final com.mojang.serialization.Codec<InclusiveRange<Integer>> INT`

### Methods
- `public static <T extends Comparable<T>> com.mojang.serialization.Codec<InclusiveRange<T>> codec(com.mojang.serialization.Codec<T> p_184573_)`
- `public static <T extends Comparable<T>> com.mojang.serialization.Codec<InclusiveRange<T>> codec(com.mojang.serialization.Codec<T> p_184575_,  T p_184576_,  T p_184577_)`
- `public static <T extends Comparable<T>> com.mojang.serialization.DataResult<InclusiveRange<T>> create(T p_184581_,  T p_184582_)`
- `public boolean isValueInRange(T p_184579_)`
- `public boolean contains(InclusiveRange<T> p_184571_)`
- `public String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public T minInclusive()`
  Returns the value of the minInclusive record component.
  - returns: the value of the minInclusive record component
- `public T maxInclusive()`
  Returns the value of the maxInclusive record component.
  - returns: the value of the maxInclusive record component

## KeyDispatchDataCodec

*record* `net.minecraft.util.KeyDispatchDataCodec`

### Fields
- `private final com.mojang.serialization.Codec<A> codec`
  The field for the codec record component.

### Methods
- `public static <A> KeyDispatchDataCodec<A> of(com.mojang.serialization.Codec<A> p_216237_)`
- `public static <A> KeyDispatchDataCodec<A> of(com.mojang.serialization.MapCodec<A> p_216239_)`
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
- `public com.mojang.serialization.Codec<A> codec()`
  Returns the value of the codec record component.
  - returns: the value of the codec record component

## LazyLoadedValue

*class* `net.minecraft.util.LazyLoadedValue`

### Fields
- `private final Supplier<T> factory` (deprecated)

### Methods
- `public T get()` (deprecated)

## LinearCongruentialGenerator

*class* `net.minecraft.util.LinearCongruentialGenerator`

### Fields
- `private static final long MULTIPLIER` (= 6364136223846793005L)
- `private static final long INCREMENT` (= 1442695040888963407L)

### Methods
- `public static long next(long p_13973_,  long p_13974_)`

## LowerCaseEnumTypeAdapterFactory

*class* `net.minecraft.util.LowerCaseEnumTypeAdapterFactory`

### Methods
- `@Nullable public <T> com.google.gson.TypeAdapter<T> create(com.google.gson.Gson p_13982_,  com.google.gson.reflect.TypeToken<T> p_13983_)`
- `String toLowercase(Object p_13980_)`

## MemoryReserve

*class* `net.minecraft.util.MemoryReserve`

### Fields
- `@Nullable private static byte[] reserve`

### Methods
- `public static void allocate()`
- `public static void release()`

## ModCheck

*record* `net.minecraft.util.ModCheck`

### Fields
- `private final ModCheck.Confidence confidence`
  The field for the confidence record component.
- `private final String description`
  The field for the description record component.

### Methods
- `public static ModCheck identify(String p_184601_,  Supplier<String> p_184602_,  String p_184603_,  Class<?> p_184604_)`
- `public boolean shouldReportAsModified()`
- `public ModCheck merge(ModCheck p_184599_)`
- `public String fullDescription()`
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
- `public ModCheck.Confidence confidence()`
  Returns the value of the confidence record component.
  - returns: the value of the confidence record component
- `public String description()`
  Returns the value of the description record component.
  - returns: the value of the description record component

## Mth

*class* `net.minecraft.util.Mth`

### Fields
- `private static final long UUID_VERSION` (= 61440L)
- `private static final long UUID_VERSION_TYPE_4` (= 16384L)
- `private static final long UUID_VARIANT` (= -4611686018427387904L)
- `private static final long UUID_VARIANT_2` (= -9223372036854775808L)
- `public static final float PI` (= 3.1415927410125732f)
- `public static final float HALF_PI` (= 1.5707963705062866f)
- `public static final float TWO_PI` (= 6.2831854820251465f)
- `public static final float DEG_TO_RAD` (= 0.01745329238474369f)
- `public static final float RAD_TO_DEG` (= 57.2957763671875f)
- `public static final float EPSILON` (= 9.999999747378752E-6f)
- `public static final float SQRT_OF_TWO`
- `private static final float SIN_SCALE` (= 10430.3779296875f)
- `private static final float[] SIN`
- `private static final RandomSource RANDOM`
- `private static final int[] MULTIPLY_DE_BRUIJN_BIT_POSITION`
- `private static final double ONE_SIXTH` (= 0.16666666666666666)
- `private static final int FRAC_EXP` (= 8)
- `private static final int LUT_SIZE` (= 257)
- `private static final double FRAC_BIAS`
- `private static final double[] ASIN_TAB`
- `private static final double[] COS_TAB`

### Methods
- `public static float sin(float p_14032_)`
- `public static float cos(float p_14090_)`
- `public static float sqrt(float p_14117_)`
- `public static int floor(float p_14144_)`
- `public static int floor(double p_14108_)`
- `public static long lfloor(double p_14135_)`
- `public static float abs(float p_14155_)`
- `public static int abs(int p_14041_)`
- `public static int ceil(float p_14168_)`
- `public static int ceil(double p_14166_)`
- `public static int clamp(int p_14046_,  int p_14047_,  int p_14048_)`
- `public static long clamp(long p_300696_,  long p_298059_,  long p_299237_)`
- `public static float clamp(float p_14037_,  float p_14038_,  float p_14039_)`
- `public static double clamp(double p_14009_,  double p_14010_,  double p_14011_)`
- `public static double clampedLerp(double p_14086_,  double p_14087_,  double p_14088_)`
- `public static float clampedLerp(float p_144921_,  float p_144922_,  float p_144923_)`
- `public static double absMax(double p_14006_,  double p_14007_)`
- `public static int floorDiv(int p_14043_,  int p_14044_)`
- `public static int nextInt(RandomSource p_216272_,  int p_216273_,  int p_216274_)`
- `public static float nextFloat(RandomSource p_216268_,  float p_216269_,  float p_216270_)`
- `public static double nextDouble(RandomSource p_216264_,  double p_216265_,  double p_216266_)`
- `public static boolean equal(float p_14034_,  float p_14035_)`
- `public static boolean equal(double p_14083_,  double p_14084_)`
- `public static int positiveModulo(int p_14101_,  int p_14102_)`
- `public static float positiveModulo(float p_14092_,  float p_14093_)`
- `public static double positiveModulo(double p_14110_,  double p_14111_)`
- `public static boolean isMultipleOf(int p_265754_,  int p_265543_)`
- `public static int wrapDegrees(int p_14099_)`
- `public static float wrapDegrees(float p_14178_)`
- `public static double wrapDegrees(double p_14176_)`
- `public static float degreesDifference(float p_14119_,  float p_14120_)`
- `public static float degreesDifferenceAbs(float p_14146_,  float p_14147_)`
- `public static float rotateIfNecessary(float p_14095_,  float p_14096_,  float p_14097_)`
- `public static float approach(float p_14122_,  float p_14123_,  float p_14124_)`
- `public static float approachDegrees(float p_14149_,  float p_14150_,  float p_14151_)`
- `public static int getInt(String p_14060_,  int p_14061_)`
- `public static int smallestEncompassingPowerOfTwo(int p_14126_)`
- `public static boolean isPowerOfTwo(int p_14153_)`
- `public static int ceillog2(int p_14164_)`
- `public static int log2(int p_14174_)`
- `public static int color(float p_14160_,  float p_14161_,  float p_14162_)`
- `public static float frac(float p_14188_)`
- `public static double frac(double p_14186_)`
- `@Deprecated public static long getSeed(Vec3i p_14058_)` (deprecated)
- `@Deprecated public static long getSeed(int p_14131_,  int p_14132_,  int p_14133_)` (deprecated)
- `public static UUID createInsecureUUID(RandomSource p_216262_)`
- `public static UUID createInsecureUUID()`
- `public static double inverseLerp(double p_14113_,  double p_14114_,  double p_14115_)`
- `public static float inverseLerp(float p_184656_,  float p_184657_,  float p_184658_)`
- `public static boolean rayIntersectsAABB(Vec3 p_144889_,  Vec3 p_144890_,  AABB p_144891_)`
- `public static double atan2(double p_14137_,  double p_14138_)`
- `public static float invSqrt(float p_265060_)`
- `public static double invSqrt(double p_265088_)`
- `@Deprecated public static double fastInvSqrt(double p_14194_)` (deprecated)
- `public static float fastInvCubeRoot(float p_14200_)`
- `public static int hsvToRgb(float p_14170_,  float p_14171_,  float p_14172_)`
- `public static int murmurHash3Mixer(int p_14184_)`
- `public static int binarySearch(int p_14050_,  int p_14051_,  IntPredicate p_14052_)`
- `public static int lerpInt(float p_270245_,  int p_270597_,  int p_270301_)`
- `public static int lerpDiscrete(float p_298397_,  int p_298459_,  int p_300125_)`
- `public static float lerp(float p_14180_,  float p_14181_,  float p_14182_)`
- `public static double lerp(double p_14140_,  double p_14141_,  double p_14142_)`
- `public static double lerp2(double p_14013_,  double p_14014_,  double p_14015_,  double p_14016_,  double p_14017_,  double p_14018_)`
- `public static double lerp3(double p_14020_,  double p_14021_,  double p_14022_,  double p_14023_,  double p_14024_,  double p_14025_,  double p_14026_,  double p_14027_,  double p_14028_,  double p_14029_,  double p_14030_)`
- `public static float catmullrom(float p_216245_,  float p_216246_,  float p_216247_,  float p_216248_,  float p_216249_)`
- `public static double smoothstep(double p_14198_)`
- `public static double smoothstepDerivative(double p_144947_)`
- `public static int sign(double p_14206_)`
- `public static float rotLerp(float p_14190_,  float p_14191_,  float p_14192_)`
- `public static double rotLerp(double p_299352_,  double p_301019_,  double p_299027_)`
- `public static float triangleWave(float p_14157_,  float p_14158_)`
- `public static float square(float p_14208_)`
- `public static double square(double p_144953_)`
- `public static int square(int p_144945_)`
- `public static long square(long p_184644_)`
- `public static double clampedMap(double p_144852_,  double p_144853_,  double p_144854_,  double p_144855_,  double p_144856_)`
- `public static float clampedMap(float p_184632_,  float p_184633_,  float p_184634_,  float p_184635_,  float p_184636_)`
- `public static double map(double p_144915_,  double p_144916_,  double p_144917_,  double p_144918_,  double p_144919_)`
- `public static float map(float p_184638_,  float p_184639_,  float p_184640_,  float p_184641_,  float p_184642_)`
- `public static double wobble(double p_144955_)`
- `public static int roundToward(int p_144942_,  int p_144943_)`
- `public static int positiveCeilDiv(int p_184653_,  int p_184654_)`
- `public static int randomBetweenInclusive(RandomSource p_216288_,  int p_216289_,  int p_216290_)`
- `public static float randomBetween(RandomSource p_216284_,  float p_216285_,  float p_216286_)`
- `public static float normal(RandomSource p_216292_,  float p_216293_,  float p_216294_)`
- `public static double lengthSquared(double p_211590_,  double p_211591_)`
- `public static double length(double p_184646_,  double p_184647_)`
- `public static double lengthSquared(double p_211593_,  double p_211594_,  double p_211595_)`
- `public static double length(double p_184649_,  double p_184650_,  double p_184651_)`
- `public static int quantize(double p_184629_,  int p_184630_)`
- `public static IntStream outFromOrigin(int p_216296_,  int p_216297_,  int p_216298_)`
- `public static IntStream outFromOrigin(int p_216251_,  int p_216252_,  int p_216253_,  int p_216254_)`

## NativeModuleLister

*class* `net.minecraft.util.NativeModuleLister`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int LANG_MASK` (= 65535)
- `private static final int DEFAULT_LANG` (= 1033)
- `private static final int CODEPAGE_MASK` (= -65536)
- `private static final int DEFAULT_CODEPAGE` (= 78643200)

### Methods
- `public static List<NativeModuleLister.NativeModuleInfo> listModules()`
- `private static Optional<NativeModuleLister.NativeModuleVersion> tryGetVersion(String p_184674_)`
- `private static String langTableKey(String p_184676_,  int p_184677_,  int p_184678_)`
- `private static OptionalInt findLangAndCodepage(int[] p_184682_)`
- `private static com.sun.jna.Pointer queryVersionValue(com.sun.jna.Pointer p_184670_,  String p_184671_,  com.sun.jna.ptr.IntByReference p_184672_)`
- `private static String queryVersionString(com.sun.jna.Pointer p_184687_,  String p_184688_,  com.sun.jna.ptr.IntByReference p_184689_)`
- `public static void addCrashSection(CrashReportCategory p_184680_)`

## NativeModuleLister.NativeModuleInfo

*class* `net.minecraft.util.NativeModuleLister.NativeModuleInfo`

Enclosing class: NativeModuleLister

### Fields
- `public final String name`
- `public final Optional<NativeModuleLister.NativeModuleVersion> version`

### Methods
- `public String toString()`

## NativeModuleLister.NativeModuleVersion

*class* `net.minecraft.util.NativeModuleLister.NativeModuleVersion`

Enclosing class: NativeModuleLister

### Fields
- `public final String description`
- `public final String version`
- `public final String company`

### Methods
- `public String toString()`

## OptionEnum

*interface* `net.minecraft.util.OptionEnum`

### Methods
- `int getId()`
- `String getKey()`
- `default Component getCaption()`

## ParticleUtils

*class* `net.minecraft.util.ParticleUtils`

### Methods
- `public static void spawnParticlesOnBlockFaces(Level p_216314_,  BlockPos p_216315_,  ParticleOptions p_216316_,  IntProvider p_216317_)`
- `public static void spawnParticlesOnBlockFace(Level p_216319_,  BlockPos p_216320_,  ParticleOptions p_216321_,  IntProvider p_216322_,  Direction p_216323_,  Supplier<Vec3> p_216324_,  double p_216325_)`
- `private static Vec3 getRandomSpeedRanges(RandomSource p_216303_)`
- `public static void spawnParticlesAlongAxis(Direction.Axis p_144968_,  Level p_144969_,  BlockPos p_144970_,  double p_144971_,  ParticleOptions p_144972_,  UniformInt p_144973_)`
- `public static void spawnParticleOnFace(Level p_216307_,  BlockPos p_216308_,  Direction p_216309_,  ParticleOptions p_216310_,  Vec3 p_216311_,  double p_216312_)`
- `public static void spawnParticleBelow(Level p_273159_,  BlockPos p_273452_,  RandomSource p_273538_,  ParticleOptions p_273419_)`

## PngInfo

*record* `net.minecraft.util.PngInfo`

### Fields
- `private final int width`
  The field for the width record component.
- `private final int height`
  The field for the height record component.
- `private static final long PNG_HEADER` (= -8552249625308161526L)
- `private static final int IHDR_TYPE` (= 1229472850)
- `private static final int IHDR_SIZE` (= 13)

### Methods
- `public static PngInfo fromStream(InputStream p_301756_)  throws IOException`
  - throws: IOException
- `public static PngInfo fromBytes(byte[] p_301719_)  throws IOException`
  - throws: IOException
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
- `public int width()`
  Returns the value of the width record component.
  - returns: the value of the width record component
- `public int height()`
  Returns the value of the height record component.
  - returns: the value of the height record component

## ProgressListener

*interface* `net.minecraft.util.ProgressListener`

### Methods
- `void progressStartNoAbort(Component p_14212_)`
- `void progressStart(Component p_14213_)`
- `void progressStage(Component p_14214_)`
- `void progressStagePercentage(int p_14211_)`
- `void stop()`

## RandomSource

*interface* `net.minecraft.util.RandomSource`

### Fields
- `@Deprecated static final double GAUSSIAN_SPREAD_FACTOR` (= 2.297, deprecated)

### Methods
- `static RandomSource create()`
- `@Deprecated static RandomSource createThreadSafe()` (deprecated)
- `static RandomSource create(long p_216336_)`
- `static RandomSource createNewThreadLocalInstance()`
- `RandomSource fork()`
- `PositionalRandomFactory forkPositional()`
- `void setSeed(long p_216342_)`
- `int nextInt()`
- `int nextInt(int p_216331_)`
- `default int nextIntBetweenInclusive(int p_216333_,  int p_216334_)`
- `long nextLong()`
- `boolean nextBoolean()`
- `float nextFloat()`
- `double nextDouble()`
- `double nextGaussian()`
- `default double triangle(double p_216329_,  double p_216330_)`
- `default void consumeCount(int p_216338_)`
- `default int nextInt(int p_216340_,  int p_216341_)`

## ResourceLocationPattern

*class* `net.minecraft.util.ResourceLocationPattern`

### Fields
- `public static final com.mojang.serialization.Codec<ResourceLocationPattern> CODEC`
- `private final Optional<Pattern> namespacePattern`
- `private final Predicate<String> namespacePredicate`
- `private final Optional<Pattern> pathPattern`
- `private final Predicate<String> pathPredicate`
- `private final Predicate<ResourceLocation> locationPredicate`

### Methods
- `public Predicate<String> namespacePredicate()`
- `public Predicate<String> pathPredicate()`
- `public Predicate<ResourceLocation> locationPredicate()`

## SampleLogger

*class* `net.minecraft.util.SampleLogger`

### Fields
- `public static final int CAPACITY` (= 240)
- `private final long[] samples`
- `private int start`
- `private int size`

### Methods
- `public void logSample(long p_300449_)`
- `public int capacity()`
- `public int size()`
- `public long get(int p_299109_)`
- `private int wrapIndex(int p_300608_)`
- `public void reset()`

## SegmentedAnglePrecision

*class* `net.minecraft.util.SegmentedAnglePrecision`

### Fields
- `private final int mask`
- `private final int precision`
- `private final float degreeToAngle`
- `private final float angleToDegree`

### Methods
- `public boolean isSameAxis(int p_265505_,  int p_265708_)`
- `public int fromDirection(Direction p_265731_)`
- `public int fromDegreesWithTurns(float p_265346_)`
- `public int fromDegrees(float p_265688_)`
- `public float toDegreesWithTurns(int p_265278_)`
- `public float toDegrees(int p_265623_)`
- `public int normalize(int p_265542_)`
- `public int getMask()`

## SignatureUpdater

*interface* `net.minecraft.util.SignatureUpdater`

### Methods
- `void update(SignatureUpdater.Output p_216345_)  throws SignatureException`
  - throws: SignatureException

## SignatureUpdater.Output

*interface* `net.minecraft.util.SignatureUpdater.Output`

Enclosing interface: SignatureUpdater

### Methods
- `void update(byte[] p_216347_)  throws SignatureException`
  - throws: SignatureException

## SignatureValidator

*interface* `net.minecraft.util.SignatureValidator`

### Fields
- `static final SignatureValidator NO_VALIDATION`
- `static final org.slf4j.Logger LOGGER`

### Methods
- `boolean validate(SignatureUpdater p_216379_,  byte[] p_216380_)`
- `default boolean validate(byte[] p_216376_,  byte[] p_216377_)`
- `private static boolean verifySignature(SignatureUpdater p_216355_,  byte[] p_216356_,  Signature p_216357_)  throws SignatureException`
  - throws: SignatureException
- `static SignatureValidator from(PublicKey p_216370_,  String p_216371_)`
- `@Nullable static SignatureValidator from(com.mojang.authlib.yggdrasil.ServicesKeySet p_285388_,  com.mojang.authlib.yggdrasil.ServicesKeyType p_285383_)`

## Signer

*interface* `net.minecraft.util.Signer`

### Fields
- `static final org.slf4j.Logger LOGGER`

### Methods
- `byte[] sign(SignatureUpdater p_216396_)`
- `default byte[] sign(byte[] p_216391_)`
- `static Signer from(PrivateKey p_216388_,  String p_216389_)`

## SimpleBitStorage

*class* `net.minecraft.util.SimpleBitStorage`

### Fields
- `private static final int[] MAGIC`
- `private final long[] data`
- `private final int bits`
- `private final long mask`
- `private final int size`
- `private final int valuesPerLong`
- `private final int divideMul`
- `private final int divideAdd`
- `private final int divideShift`

### Methods
- `private int cellIndex(int p_184740_)`
- `public int getAndSet(int p_184731_,  int p_184732_)`
- `public void set(int p_184742_,  int p_184743_)`
- `public int get(int p_184729_)`
- `public long[] getRaw()`
- `public int getSize()`
- `public int getBits()`
- `public void getAll(IntConsumer p_184734_)`
- `public void unpack(int[] p_198168_)`
- `public BitStorage copy()`

## SimpleBitStorage.InitializationException

*class* `net.minecraft.util.SimpleBitStorage.InitializationException`

Enclosing class: SimpleBitStorage

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## SingleKeyCache

*class* `net.minecraft.util.SingleKeyCache`

### Fields
- `private final Function<K,V> computeValue`
- `@Nullable private K cacheKey`
- `@Nullable private V cachedValue`

### Methods
- `public V getValue(K p_270953_)`

## SmoothDouble

*class* `net.minecraft.util.SmoothDouble`

### Fields
- `private double targetValue`
- `private double remainingValue`
- `private double lastAmount`

### Methods
- `public double getNewDeltaValue(double p_14238_,  double p_14239_)`
- `public void reset()`

## SortedArraySet

*class* `net.minecraft.util.SortedArraySet`

### Fields
- `private static final int DEFAULT_INITIAL_CAPACITY` (= 10)
- `private final Comparator<T> comparator`
- `T[] contents`
- `int size`

### Methods
- `public static <T extends Comparable<T>> SortedArraySet<T> create()`
- `public static <T extends Comparable<T>> SortedArraySet<T> create(int p_14247_)`
- `public static <T> SortedArraySet<T> create(Comparator<T> p_144977_)`
- `public static <T> SortedArraySet<T> create(Comparator<T> p_144979_,  int p_144980_)`
- `private static <T> T[] castRawArray(Object[] p_14259_)`
- `private int findIndex(T p_14270_)`
- `private static int getInsertionPosition(int p_14264_)`
- `public boolean add(T p_14261_)`
- `private void grow(int p_14268_)`
- `private void addInternal(T p_14256_,  int p_14257_)`
- `void removeInternal(int p_14275_)`
- `private T getInternal(int p_14277_)`
- `public T addOrGet(T p_14254_)`
- `public boolean remove(Object p_14282_)`
- `@Nullable public T get(T p_144982_)`
- `public T first()`
- `public T last()`
- `public boolean contains(Object p_14273_)`
- `public Iterator<T> iterator()`
- `public int size()`
- `public Object[] toArray()`
- `public <U> U[] toArray(U[] p_14286_)`
- `public void clear()`
- `public boolean equals(Object p_14279_)`

### Inherited methods
- from `java.util.AbstractSet`: `hashCode`, `removeAll`
- from `java.util.AbstractCollection`: `addAll`, `containsAll`, `isEmpty`, `retainAll`, `toString`
- from `java.util.Collection`: `parallelStream`, `removeIf`, `stream`, `toArray`
- from `java.lang.Iterable`: `forEach`
- from `java.util.Set`: `addAll`, `containsAll`, `isEmpty`, `retainAll`, `spliterator`

## SortedArraySet.ArrayIterator

*class* `net.minecraft.util.SortedArraySet.ArrayIterator`

Enclosing class: SortedArraySet<T>

### Fields
- `private int index`
- `private int last`

### Methods
- `public boolean hasNext()`
- `public T next()`
- `public void remove()`

### Inherited methods
- from `java.util.Iterator`: `forEachRemaining`

## SpawnUtil

*class* `net.minecraft.util.SpawnUtil`

### Methods
- `public static <T extends Mob> Optional<T> trySpawnMob(EntityType<T> p_216404_,  MobSpawnType p_216405_,  ServerLevel p_216406_,  BlockPos p_216407_,  int p_216408_,  int p_216409_,  int p_216410_,  SpawnUtil.Strategy p_216411_)`
- `private static boolean moveToPossibleSpawnPosition(ServerLevel p_216399_,  int p_216400_,  BlockPos.MutableBlockPos p_216401_,  SpawnUtil.Strategy p_216402_)`

## SpawnUtil.Strategy

*interface* `net.minecraft.util.SpawnUtil.Strategy`

Enclosing class: SpawnUtil

### Fields
- `@Deprecated static final SpawnUtil.Strategy LEGACY_IRON_GOLEM` (deprecated)
- `static final SpawnUtil.Strategy ON_TOP_OF_COLLIDER`

### Methods
- `boolean canSpawnOn(ServerLevel p_216428_,  BlockPos p_216429_,  BlockState p_216430_,  BlockPos p_216431_,  BlockState p_216432_)`

## StringDecomposer

*class* `net.minecraft.util.StringDecomposer`

### Fields
- `private static final char REPLACEMENT_CHAR` (= '\ufffd')
- `private static final Optional<Object> STOP_ITERATION`

### Methods
- `private static boolean feedChar(Style p_14333_,  FormattedCharSink p_14334_,  int p_14335_,  char p_14336_)`
- `public static boolean iterate(String p_14318_,  Style p_14319_,  FormattedCharSink p_14320_)`
- `public static boolean iterateBackwards(String p_14338_,  Style p_14339_,  FormattedCharSink p_14340_)`
- `public static boolean iterateFormatted(String p_14347_,  Style p_14348_,  FormattedCharSink p_14349_)`
- `public static boolean iterateFormatted(String p_14307_,  int p_14308_,  Style p_14309_,  FormattedCharSink p_14310_)`
- `public static boolean iterateFormatted(String p_14312_,  int p_14313_,  Style p_14314_,  Style p_14315_,  FormattedCharSink p_14316_)`
- `public static boolean iterateFormatted(FormattedText p_14329_,  Style p_14330_,  FormattedCharSink p_14331_)`
- `public static String filterBrokenSurrogates(String p_14305_)`
- `public static String getPlainText(FormattedText p_14327_)`

## StringRepresentable

*interface* `net.minecraft.util.StringRepresentable`

### Fields
- `static final int PRE_BUILT_MAP_THRESHOLD` (= 16)

### Methods
- `String getSerializedName()`
- `static <E extends Enum<E> & StringRepresentable> StringRepresentable.EnumCodec<E> fromEnum(Supplier<E[]> p_216440_)`
- `static <E extends Enum<E> & StringRepresentable> StringRepresentable.EnumCodec<E> fromEnumWithMapping(Supplier<E[]> p_275615_,  Function<String,String> p_275259_)`
- `static com.mojang.serialization.Keyable keys(StringRepresentable[] p_14358_)`

## StringRepresentable.EnumCodec & StringRepresentable>

*class* `net.minecraft.util.StringRepresentable.EnumCodec & StringRepresentable>`

Enclosing interface: StringRepresentable

### Fields
- `private final com.mojang.serialization.Codec<E extends Enum<E> & StringRepresentable> codec` (deprecated)
- `private final Function<String,E extends Enum<E> & StringRepresentable> resolver` (deprecated)

### Inherited fields
- from `com.mojang.serialization.Codec`: `BOOL`, `BYTE`, `BYTE_BUFFER`, `DOUBLE`, `EMPTY`, `FLOAT`, `INT`, `INT_STREAM`, `LONG`, `LONG_STREAM`, `PASSTHROUGH`, `SHORT`, `STRING`

### Methods
- `public <T> com.mojang.serialization.DataResult<com.mojang.datafixers.util.Pair<E,T>> decode(com.mojang.serialization.DynamicOps<T> p_216463_,  T p_216464_)` (deprecated)
- `public <T> com.mojang.serialization.DataResult<T> encode(E p_216450_,  com.mojang.serialization.DynamicOps<T> p_216451_,  T p_216452_)` (deprecated)
- `@Nullable public E byName(@Nullable  String p_216456_)` (deprecated)
- `public E byName(@Nullable  String p_263077_,  E p_263115_)` (deprecated)

### Inherited methods
- from `com.mojang.serialization.Codec`: `comapFlatMap`, `deprecated`, `dispatch`, `dispatch`, `dispatchMap`, `dispatchMap`, `dispatchStable`, `fieldOf`, `flatComapMap`, `flatXmap`, `listOf`, `mapResult`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `optionalFieldOf`, `orElse`, `orElse`, `orElse`, `orElseGet`, `orElseGet`, `orElseGet`, `partialDispatch`, `promotePartial`, `stable`, `withLifecycle`, `xmap`
- from `com.mojang.serialization.Decoder`: `boxed`, `decode`, `flatMap`, `map`, `parse`, `parse`, `simple`, `terminal`
- from `com.mojang.serialization.Encoder`: `comap`, `encodeStart`, `flatComap`

## StringUtil

*class* `net.minecraft.util.StringUtil`

### Fields
- `private static final Pattern STRIP_COLOR_PATTERN`
- `private static final Pattern LINE_PATTERN`
- `private static final Pattern LINE_END_PATTERN`

### Methods
- `public static String formatTickDuration(int p_14405_)`
- `public static String stripColor(String p_14407_)`
- `public static boolean isNullOrEmpty(@Nullable  String p_14409_)`
- `public static String truncateStringIfNecessary(String p_144999_,  int p_145000_,  boolean p_145001_)`
- `public static int lineCount(String p_145003_)`
- `public static boolean endsWithNewLine(String p_145005_)`
- `public static String trimChatMessage(String p_216470_)`

## TaskChainer

*interface* `net.minecraft.util.TaskChainer`

### Fields
- `static final org.slf4j.Logger LOGGER`

### Methods
- `static TaskChainer immediate(Executor p_251122_)`
- `void append(TaskChainer.DelayedTask p_242206_)`

## TaskChainer.DelayedTask

*interface* `net.minecraft.util.TaskChainer.DelayedTask`

Enclosing interface: TaskChainer

### Methods
- `CompletableFuture<?> submit(Executor p_249412_)`

## ThreadingDetector

*class* `net.minecraft.util.ThreadingDetector`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final String name`
- `private final Semaphore lock`
- `private final Lock stackTraceLock`
- `@Nullable private volatile Thread threadThatFailedToAcquire`
- `@Nullable private volatile ReportedException fullException`

### Methods
- `public void checkAndLock()`
- `public void checkAndUnlock()`
- `public static ReportedException makeThreadingException(String p_199418_,  @Nullable  Thread p_199419_)`
- `private static String stackTrace(Thread p_199421_)`

## TimeSource

*interface* `net.minecraft.util.TimeSource`

### Methods
- `long get(TimeUnit p_239337_)`

## TimeSource.NanoTimeSource

*interface* `net.minecraft.util.TimeSource.NanoTimeSource`

All Superinterfaces: LongSupplier, TimeSource

Enclosing interface: TimeSource

### Methods
- `default long get(TimeUnit p_239379_)`

### Inherited methods
- from `java.util.function.LongSupplier`: `getAsLong`

## TimeUtil

*class* `net.minecraft.util.TimeUtil`

### Fields
- `public static final long NANOSECONDS_PER_SECOND`
- `public static final long NANOSECONDS_PER_MILLISECOND`

### Methods
- `public static UniformInt rangeOfSeconds(int p_145021_,  int p_145022_)`

## ToFloatFunction

*interface* `net.minecraft.util.ToFloatFunction`

### Fields
- `static final ToFloatFunction<Float> IDENTITY`

### Methods
- `float apply(C p_184786_)`
- `float minValue()`
- `float maxValue()`
- `static ToFloatFunction<Float> createUnlimited(it.unimi.dsi.fastutil.floats.Float2FloatFunction p_216476_)`
- `default <C2> ToFloatFunction<C2> comap(Function<C2,C> p_216478_)`

## Tuple

*class* `net.minecraft.util.Tuple`

### Fields
- `private A a`
- `private B b`

### Methods
- `public A getA()`
- `public void setA(A p_145024_)`
- `public B getB()`
- `public void setB(B p_145026_)`

## VisibleForDebug

*annotation interface* `net.minecraft.util.VisibleForDebug`

## ZeroBitStorage

*class* `net.minecraft.util.ZeroBitStorage`

### Fields
- `public static final long[] RAW`
- `private final int size`

### Methods
- `public int getAndSet(int p_184796_,  int p_184797_)`
- `public void set(int p_184802_,  int p_184803_)`
- `public int get(int p_184794_)`
- `public long[] getRaw()`
- `public int getSize()`
- `public int getBits()`
- `public void getAll(IntConsumer p_184799_)`
- `public void unpack(int[] p_198170_)`
- `public BitStorage copy()`
