# net.minecraft.network.protocol

- [BundleDelimiterPacket](#bundledelimiterpacket)
- [BundlePacket](#bundlepacket)
- [BundlerInfo](#bundlerinfo)
- [BundlerInfo.Bundler](#bundlerinfo.bundler)
- [BundlerInfo.Provider](#bundlerinfo.provider)
- [Class PacketFlow](#class-packetflow)
- [Packet](#packet)
- [PacketUtils](#packetutils)
## BundleDelimiterPacket

*class* `net.minecraft.network.protocol.BundleDelimiterPacket`

### Methods
- `public final void write(FriendlyByteBuf p_265437_)`
- `public final void handle(T p_265392_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## BundlePacket

*class* `net.minecraft.network.protocol.BundlePacket`

### Fields
- `private final Iterable<Packet<T extends PacketListener>> packets`

### Methods
- `public final Iterable<Packet<T>> subPackets()`
- `public final void write(FriendlyByteBuf p_265519_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `handle`, `isSkippable`, `nextProtocol`

## BundlerInfo

*interface* `net.minecraft.network.protocol.BundlerInfo`

### Fields
- `static final int BUNDLE_SIZE_LIMIT` (= 4096)
- `static final BundlerInfo EMPTY`

### Methods
- `static <T extends PacketListener, P extends BundlePacket<T>> BundlerInfo createForPacket(Class<P> p_265438_,  Function<Iterable<Packet<T>>,P> p_265627_,  BundleDelimiterPacket<T> p_265373_)`
- `void unbundlePacket(Packet<?> p_265095_,  Consumer<Packet<?>> p_265715_)`
- `@Nullable BundlerInfo.Bundler startPacketBundling(Packet<?> p_265162_)`

## BundlerInfo.Bundler

*interface* `net.minecraft.network.protocol.BundlerInfo.Bundler`

Enclosing interface: BundlerInfo

### Methods
- `@Nullable Packet<?> addPacket(Packet<?> p_265601_)`

## BundlerInfo.Provider

*interface* `net.minecraft.network.protocol.BundlerInfo.Provider`

Enclosing interface: BundlerInfo

### Methods
- `BundlerInfo bundlerInfo()`

## Class PacketFlow

*enum* `net.minecraft.network.protocol.Class PacketFlow`

### Methods
- `public static PacketFlow[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static PacketFlow valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public PacketFlow getOpposite()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Packet

*interface* `net.minecraft.network.protocol.Packet`

### Methods
- `void write(FriendlyByteBuf p_131343_)`
- `void handle(T p_131342_)`
- `default boolean isSkippable()`
- `@Nullable default ConnectionProtocol nextProtocol()`

## PacketUtils

*class* `net.minecraft.network.protocol.PacketUtils`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static <T extends PacketListener> void ensureRunningOnSameThread(Packet<T> p_131360_,  T p_131361_,  ServerLevel p_131362_)  throws RunningOnDifferentThreadException`
  - throws: RunningOnDifferentThreadException
- `public static <T extends PacketListener> void ensureRunningOnSameThread(Packet<T> p_131364_,  T p_131365_,  BlockableEventLoop<?> p_131366_)  throws RunningOnDifferentThreadException`
  - throws: RunningOnDifferentThreadException
