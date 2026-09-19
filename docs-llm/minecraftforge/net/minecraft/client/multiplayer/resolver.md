# net.minecraft.client.multiplayer.resolver

- [AddressCheck](#addresscheck)
- [ResolvedServerAddress](#resolvedserveraddress)
- [ServerAddress](#serveraddress)
- [ServerAddressResolver](#serveraddressresolver)
- [ServerNameResolver](#servernameresolver)
- [ServerRedirectHandler](#serverredirecthandler)
## AddressCheck

*interface* `net.minecraft.client.multiplayer.resolver.AddressCheck`

### Methods
- `boolean isAllowed(ResolvedServerAddress p_171829_)`
- `boolean isAllowed(ServerAddress p_171830_)`
- `static AddressCheck createFromService()`

## ResolvedServerAddress

*interface* `net.minecraft.client.multiplayer.resolver.ResolvedServerAddress`

### Methods
- `String getHostName()`
- `String getHostIp()`
- `int getPort()`
- `InetSocketAddress asInetSocketAddress()`
- `static ResolvedServerAddress from(InetSocketAddress p_171846_)`

## ServerAddress

*class* `net.minecraft.client.multiplayer.resolver.ServerAddress`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final com.google.common.net.HostAndPort hostAndPort`
- `private static final ServerAddress INVALID`

### Methods
- `public String getHost()`
- `public int getPort()`
- `public static ServerAddress parseString(String p_171865_)`
- `public static boolean isValidAddress(String p_171868_)`
- `static int parsePort(String p_171870_)`
- `public String toString()`
- `public boolean equals(Object p_171872_)`
- `public int hashCode()`

## ServerAddressResolver

*interface* `net.minecraft.client.multiplayer.resolver.ServerAddressResolver`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final ServerAddressResolver SYSTEM`

### Methods
- `Optional<ResolvedServerAddress> resolve(ServerAddress p_171880_)`

## ServerNameResolver

*class* `net.minecraft.client.multiplayer.resolver.ServerNameResolver`

### Fields
- `public static final ServerNameResolver DEFAULT`
- `private final ServerAddressResolver resolver`
- `private final ServerRedirectHandler redirectHandler`
- `private final AddressCheck addressCheck`

### Methods
- `public Optional<ResolvedServerAddress> resolveAddress(ServerAddress p_171891_)`

## ServerRedirectHandler

*interface* `net.minecraft.client.multiplayer.resolver.ServerRedirectHandler`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `static final ServerRedirectHandler EMPTY`

### Methods
- `Optional<ServerAddress> lookupRedirect(ServerAddress p_171902_)`
- `static ServerRedirectHandler createDnsSrvRedirectHandler()`
