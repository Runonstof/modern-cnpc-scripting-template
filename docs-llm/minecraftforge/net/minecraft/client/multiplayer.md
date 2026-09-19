# net.minecraft.client.multiplayer

- [AccountProfileKeyPairManager](#accountprofilekeypairmanager)
- [ChunkBatchSizeCalculator](#chunkbatchsizecalculator)
- [Class ClientHandshakePacketListenerImpl.State](#class-clienthandshakepacketlistenerimpl.state)
- [Class ClientRegistryLayer](#class-clientregistrylayer)
- [Class ServerData.ServerPackStatus](#class-serverdata.serverpackstatus)
- [Class ServerData.Type](#class-serverdata.type)
- [ClientAdvancements](#clientadvancements)
- [ClientAdvancements.Listener](#clientadvancements.listener)
- [ClientChunkCache](#clientchunkcache)
- [ClientChunkCache.Storage](#clientchunkcache.storage)
- [ClientCommonPacketListenerImpl](#clientcommonpacketlistenerimpl)
- [ClientCommonPacketListenerImpl.DeferredPacket](#clientcommonpacketlistenerimpl.deferredpacket)
- [ClientConfigurationPacketListenerImpl](#clientconfigurationpacketlistenerimpl)
- [ClientHandshakePacketListenerImpl](#clienthandshakepacketlistenerimpl)
- [ClientLevel](#clientlevel)
- [ClientLevel.ClientLevelData](#clientlevel.clientleveldata)
- [ClientLevel.EntityCallbacks](#clientlevel.entitycallbacks)
- [ClientPacketListener](#clientpacketlistener)
- [ClientSuggestionProvider](#clientsuggestionprovider)
- [CommonListenerCookie](#commonlistenercookie)
- [LegacyServerPinger](#legacyserverpinger)
- [LegacyServerPinger.Output](#legacyserverpinger.output)
- [MultiPlayerGameMode](#multiplayergamemode)
- [PingDebugMonitor](#pingdebugmonitor)
- [PlayerInfo](#playerinfo)
- [ProfileKeyPairManager](#profilekeypairmanager)
- [ServerData](#serverdata)
- [ServerList](#serverlist)
- [ServerStatusPinger](#serverstatuspinger)
## AccountProfileKeyPairManager

*class* `net.minecraft.client.multiplayer.AccountProfileKeyPairManager`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Duration MINIMUM_PROFILE_KEY_REFRESH_INTERVAL`
- `private static final Path PROFILE_KEY_PAIR_DIR`
- `private final com.mojang.authlib.minecraft.UserApiService userApiService`
- `private final Path profileKeyPairPath`
- `private CompletableFuture<Optional<ProfileKeyPair>> keyPair`
- `private Instant nextProfileKeyRefreshTime`

### Inherited fields
- from `net.minecraft.client.multiplayer.ProfileKeyPairManager`: `EMPTY_KEY_MANAGER`

### Methods
- `public CompletableFuture<Optional<ProfileKeyPair>> prepareKeyPair()`
- `public boolean shouldRefreshKeyPair()`
- `private CompletableFuture<Optional<ProfileKeyPair>> readOrFetchProfileKeyPair(Optional<ProfileKeyPair> p_254074_)`
- `private Optional<ProfileKeyPair> readProfileKeyPair()`
- `private void writeProfileKeyPair(@Nullable  ProfileKeyPair p_254227_)`
- `private ProfileKeyPair fetchProfileKeyPair(com.mojang.authlib.minecraft.UserApiService p_253844_)  throws CryptException, IOException`
  - throws: CryptException
  - throws: IOException
- `private static ProfilePublicKey.Data parsePublicKey(com.mojang.authlib.yggdrasil.response.KeyPairResponse p_253834_)  throws CryptException`
  - throws: CryptException

## ChunkBatchSizeCalculator

*class* `net.minecraft.client.multiplayer.ChunkBatchSizeCalculator`

### Fields
- `private static final int MAX_OLD_SAMPLES_WEIGHT` (= 49)
- `private static final int CLAMP_COEFFICIENT` (= 3)
- `private double aggregatedNanosPerChunk`
- `private int oldSamplesWeight`
- `private volatile long chunkBatchStartTime`

### Methods
- `public void onBatchStart()`
- `public void onBatchFinished(int p_299908_)`
- `public float getDesiredChunksPerTick()`

## Class ClientHandshakePacketListenerImpl.State

*enum* `net.minecraft.client.multiplayer.Class ClientHandshakePacketListenerImpl.State`

Enclosing class: ClientHandshakePacketListenerImpl

### Fields
- `final Component message`
- `final Set<ClientHandshakePacketListenerImpl.State> fromStates`

### Methods
- `public static ClientHandshakePacketListenerImpl.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientHandshakePacketListenerImpl.State valueOf(String name)`
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

## Class ClientRegistryLayer

*enum* `net.minecraft.client.multiplayer.Class ClientRegistryLayer`

### Fields
- `private static final List<ClientRegistryLayer> VALUES`
- `private static final RegistryAccess.Frozen STATIC_ACCESS`

### Methods
- `public static ClientRegistryLayer[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientRegistryLayer valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public static LayeredRegistryAccess<ClientRegistryLayer> createRegistryAccess()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ServerData.ServerPackStatus

*enum* `net.minecraft.client.multiplayer.Class ServerData.ServerPackStatus`

Enclosing class: ServerData

### Fields
- `private final Component name`

### Methods
- `public static ServerData.ServerPackStatus[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerData.ServerPackStatus valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public Component getName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class ServerData.Type

*enum* `net.minecraft.client.multiplayer.Class ServerData.Type`

Enclosing class: ServerData

### Methods
- `public static ServerData.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerData.Type valueOf(String name)`
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

## ClientAdvancements

*class* `net.minecraft.client.multiplayer.ClientAdvancements`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Minecraft minecraft`
- `private final WorldSessionTelemetryManager telemetryManager`
- `private final AdvancementTree tree`
- `private final Map<AdvancementHolder,AdvancementProgress> progress`
- `@Nullable private ClientAdvancements.Listener listener`
- `@Nullable private AdvancementHolder selectedTab`

### Methods
- `public void update(ClientboundUpdateAdvancementsPacket p_104400_)`
- `public AdvancementTree getTree()`
- `public void setSelectedTab(@Nullable  AdvancementHolder p_298261_,  boolean p_104403_)`
- `public void setListener(@Nullable  ClientAdvancements.Listener p_104398_)`
- `@Nullable public AdvancementHolder get(ResourceLocation p_301273_)`

## ClientAdvancements.Listener

*interface* `net.minecraft.client.multiplayer.ClientAdvancements.Listener`

All Superinterfaces: AdvancementTree.Listener

Enclosing class: ClientAdvancements

### Methods
- `void onUpdateAdvancementProgress(AdvancementNode p_299734_,  AdvancementProgress p_104405_)`
- `void onSelectedTabChanged(@Nullable  AdvancementHolder p_301401_)`

### Inherited methods
- from `net.minecraft.advancements.AdvancementTree.Listener`: `onAddAdvancementRoot`, `onAddAdvancementTask`, `onAdvancementsCleared`, `onRemoveAdvancementRoot`, `onRemoveAdvancementTask`

## ClientChunkCache

*class* `net.minecraft.client.multiplayer.ClientChunkCache`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private final LevelChunk emptyChunk`
- `private final LevelLightEngine lightEngine`
- `volatile ClientChunkCache.Storage storage`
- `final ClientLevel level`

### Methods
- `public LevelLightEngine getLightEngine()`
- `private static boolean isValidChunk(@Nullable  LevelChunk p_104439_,  int p_104440_,  int p_104441_)`
- `public void drop(ChunkPos p_298665_)`
- `@Nullable public LevelChunk getChunk(int p_104451_,  int p_104452_,  ChunkStatus p_104453_,  boolean p_104454_)`
- `public BlockGetter getLevel()`
- `public void replaceBiomes(int p_275374_,  int p_275226_,  FriendlyByteBuf p_275745_)`
- `@Nullable public LevelChunk replaceWithPacketData(int p_194117_,  int p_194118_,  FriendlyByteBuf p_194119_,  CompoundTag p_194120_,  Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput> p_194121_)`
- `public void tick(BooleanSupplier p_202421_,  boolean p_202422_)`
- `public void updateViewCenter(int p_104460_,  int p_104461_)`
- `public void updateViewRadius(int p_104417_)`
- `private static int calculateStorageRange(int p_104449_)`
- `public String gatherStats()`
- `public int getLoadedChunksCount()`
- `public void onLightUpdate(LightLayer p_104436_,  SectionPos p_104437_)`

### Inherited methods
- from `net.minecraft.world.level.chunk.ChunkSource`: `close`, `getChunk`, `getChunkForLighting`, `getChunkNow`, `hasChunk`, `setSpawnSettings`, `updateChunkForced`

## ClientChunkCache.Storage

*class* `net.minecraft.client.multiplayer.ClientChunkCache.Storage`

Enclosing class: ClientChunkCache

### Fields
- `final AtomicReferenceArray<LevelChunk> chunks`
- `final int chunkRadius`
- `private final int viewRange`
- `volatile int viewCenterX`
- `volatile int viewCenterZ`
- `int chunkCount`

### Methods
- `int getIndex(int p_104482_,  int p_104483_)`
- `protected void replace(int p_104485_,  @Nullable  LevelChunk p_104486_)`
- `protected LevelChunk replace(int p_104488_,  LevelChunk p_104489_,  @Nullable  LevelChunk p_104490_)`
- `boolean inRange(int p_104501_,  int p_104502_)`
- `@Nullable protected LevelChunk getChunk(int p_104480_)`
- `private void dumpChunks(String p_171623_)`

## ClientCommonPacketListenerImpl

*class* `net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl`

### Fields
- `private static final Component GENERIC_DISCONNECT_MESSAGE`
- `private static final org.slf4j.Logger LOGGER`
- `protected final Minecraft minecraft`
- `protected final Connection connection`
- `@Nullable protected final ServerData serverData`
- `@Nullable protected String serverBrand`
- `protected final WorldSessionTelemetryManager telemetryManager`
- `@Nullable protected final Screen postDisconnectScreen`
- `private final List<ClientCommonPacketListenerImpl.DeferredPacket> deferredPackets`

### Methods
- `public void handleKeepAlive(ClientboundKeepAlivePacket p_301155_)`
- `public void handlePing(ClientboundPingPacket p_300922_)`
- `public void handleCustomPayload(ClientboundCustomPayloadPacket p_298103_)`
- `protected abstract void handleCustomPayload(CustomPacketPayload p_297976_)`
- `protected abstract RegistryAccess.Frozen registryAccess()`
- `public void handleResourcePack(ClientboundResourcePackPacket p_300555_)`
- `private void showServerPackPrompt(URL p_299293_,  String p_297795_,  boolean p_297484_,  @Nullable  Component p_300186_)`
- `private static Component preparePackPrompt(Component p_299226_,  @Nullable  Component p_298885_)`
- `@Nullable private static URL parseResourcePackUrl(String p_298850_)`
- `private void packApplicationCallback(CompletableFuture<?> p_297539_)`
- `public void handleUpdateTags(ClientboundUpdateTagsPacket p_299537_)`
- `private <T> void updateTagsForRegistry(ResourceKey<? extends Registry<? extends T>> p_301094_,  TagNetworkSerialization.NetworkPayload p_297701_)`
- `private void send(ServerboundResourcePackPacket.Action p_299758_)`
- `public void handleDisconnect(ClientboundDisconnectPacket p_298016_)`
- `protected void sendDeferredPackets()`
- `public void send(Packet<?> p_300175_)`
- `public void onDisconnect(Component p_298766_)`
- `protected Screen createDisconnectScreen(Component p_299787_)`
- `@Nullable public String serverBrand()`
- `private void sendWhen(Packet<? extends ServerboundPacketListener> p_300852_,  BooleanSupplier p_299754_,  Duration p_299011_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ClientCommonPacketListenerImpl.DeferredPacket

*record* `net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl.DeferredPacket`

Enclosing class: ClientCommonPacketListenerImpl

### Fields
- `private final Packet<? extends ServerboundPacketListener> packet`
  The field for the packet record component.
- `private final BooleanSupplier sendCondition`
  The field for the sendCondition record component.
- `private final long expirationTime`
  The field for the expirationTime record component.

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
- `public Packet<? extends ServerboundPacketListener> packet()`
  Returns the value of the packet record component.
  - returns: the value of the packet record component
- `public BooleanSupplier sendCondition()`
  Returns the value of the sendCondition record component.
  - returns: the value of the sendCondition record component
- `public long expirationTime()`
  Returns the value of the expirationTime record component.
  - returns: the value of the expirationTime record component

## ClientConfigurationPacketListenerImpl

*class* `net.minecraft.client.multiplayer.ClientConfigurationPacketListenerImpl`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final com.mojang.authlib.GameProfile localGameProfile`
- `private RegistryAccess.Frozen receivedRegistries`
- `private FeatureFlagSet enabledFeatures`

### Inherited fields
- from `net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl`: `connection`, `minecraft`, `postDisconnectScreen`, `serverBrand`, `serverData`, `telemetryManager`

### Methods
- `public boolean isAcceptingMessages()`
- `protected RegistryAccess.Frozen registryAccess()`
- `protected void handleCustomPayload(CustomPacketPayload p_301281_)`
- `private void handleUnknownCustomPayload(CustomPacketPayload p_300719_)`
- `public void handleRegistryData(ClientboundRegistryDataPacket p_299218_)`
- `public void handleEnabledFeatures(ClientboundUpdateEnabledFeaturesPacket p_301158_)`
- `public void handleConfigurationFinished(ClientboundFinishConfigurationPacket p_299280_)`
- `public void tick()`

### Inherited methods
- from `net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl`: `createDisconnectScreen`, `handleCustomPayload`, `handleDisconnect`, `handleKeepAlive`, `handlePing`, `handleResourcePack`, `handleUpdateTags`, `onDisconnect`, `send`, `sendDeferredPackets`, `serverBrand`
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ClientCommonPacketListener`: `handleCustomPayload`, `handleDisconnect`, `handleKeepAlive`, `handlePing`, `handleResourcePack`, `handleUpdateTags`
- from `net.minecraft.network.protocol.configuration.ClientConfigurationPacketListener`: `protocol`
- from `net.minecraft.network.PacketListener`: `onDisconnect`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ClientHandshakePacketListenerImpl

*class* `net.minecraft.client.multiplayer.ClientHandshakePacketListenerImpl`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Minecraft minecraft`
- `@Nullable private final ServerData serverData`
- `@Nullable private final Screen parent`
- `private final Consumer<Component> updateStatus`
- `private final Connection connection`
- `private final boolean newWorld`
- `@Nullable private final Duration worldLoadDuration`
- `@Nullable private String minigameName`
- `private final AtomicReference<ClientHandshakePacketListenerImpl.State> state`

### Methods
- `private void switchState(ClientHandshakePacketListenerImpl.State p_301608_)`
- `public void handleHello(ClientboundHelloPacket p_104549_)`
- `@Nullable private Component authenticateServer(String p_104532_)`
- `private com.mojang.authlib.minecraft.MinecraftSessionService getMinecraftSessionService()`
- `public void handleGameProfile(ClientboundGameProfilePacket p_104547_)`
- `public void onDisconnect(Component p_104543_)`
- `public boolean isAcceptingMessages()`
- `public void handleDisconnect(ClientboundLoginDisconnectPacket p_104553_)`
- `public void handleCompression(ClientboundLoginCompressionPacket p_104551_)`
- `public void handleCustomQuery(ClientboundCustomQueryPacket p_104545_)`
- `public void setMinigameName(String p_286653_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.login.ClientLoginPacketListener`: `protocol`
- from `net.minecraft.network.PacketListener`: `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ClientLevel

*class* `net.minecraft.client.multiplayer.ClientLevel`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final double FLUID_PARTICLE_SPAWN_OFFSET` (= 0.05)
- `private static final int NORMAL_LIGHT_UPDATES_PER_FRAME` (= 10)
- `private static final int LIGHT_UPDATE_QUEUE_SIZE_THRESHOLD` (= 1000)
- `final EntityTickList tickingEntities`
- `private final TransientEntitySectionManager<Entity> entityStorage`
- `private final ClientPacketListener connection`
- `private final LevelRenderer levelRenderer`
- `private final ClientLevel.ClientLevelData clientLevelData`
- `private final DimensionSpecialEffects effects`
- `private final Minecraft minecraft`
- `final List<AbstractClientPlayer> players`
- `private Scoreboard scoreboard`
- `private final Map<String,MapItemSavedData> mapData`
- `private static final long CLOUD_COLOR` (= 16777215L)
- `private int skyFlashTime`
- `private final it.unimi.dsi.fastutil.objects.Object2ObjectArrayMap<ColorResolver,BlockTintCache> tintCaches`
- `private final ClientChunkCache chunkSource`
- `private final Deque<Runnable> lightUpdateQueue`
- `private int serverSimulationDistance`
- `private final BlockStatePredictionHandler blockStatePredictionHandler`
- `private static final Set<Item> MARKER_PARTICLE_ITEMS`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<PartEntity<?>> partEntities`
- `private final ModelDataManager modelDataManager`

### Inherited fields
- from `net.minecraft.world.level.Level`: `addend`, `blockEntityTickers`, `captureBlockSnapshots`, `capturedBlockSnapshots`, `END`, `isClientSide`, `levelData`, `LONG_PARTICLE_CLIP_RANGE`, `MAX_BRIGHTNESS`, `MAX_ENTITY_SPAWN_Y`, `MAX_LEVEL_SIZE`, `MIN_ENTITY_SPAWN_Y`, `neighborUpdater`, `NETHER`, `oRainLevel`, `oThunderLevel`, `OVERWORLD`, `rainLevel`, `random`, `randValue`, `RESOURCE_KEY_CODEC`, `restoringBlockSnapshots`, `SHORT_PARTICLE_CLIP_RANGE`, `thunderLevel`, `TICKS_PER_DAY`
- from `net.minecraft.world.level.SignalGetter`: `DIRECTIONS`

### Methods
- `public void handleBlockChangedAck(int p_233652_)`
- `public void setServerVerifiedBlockState(BlockPos p_233654_,  BlockState p_233655_,  int p_233656_)`
- `public void syncBlockState(BlockPos p_233648_,  BlockState p_233649_,  Vec3 p_233650_)`
- `BlockStatePredictionHandler getBlockStatePredictionHandler()`
- `public boolean setBlock(BlockPos p_233643_,  BlockState p_233644_,  int p_233645_,  int p_233646_)`
- `public void queueLightUpdate(Runnable p_194172_)`
- `public void pollLightUpdates()`
- `public boolean isLightUpdateQueueEmpty()`
- `public DimensionSpecialEffects effects()`
- `public void tick(BooleanSupplier p_104727_)`
- `private void tickTime()`
- `public void setGameTime(long p_104638_)`
- `public void setDayTime(long p_104747_)`
- `public Iterable<Entity> entitiesForRendering()`
- `public void tickEntities()`
- `public boolean shouldTickDeath(Entity p_194185_)`
- `public void tickNonPassenger(Entity p_104640_)`
- `private void tickPassenger(Entity p_104642_,  Entity p_104643_)`
- `public void unload(LevelChunk p_104666_)`
- `public void onChunkLoaded(ChunkPos p_171650_)`
- `public void clearTintCaches()`
- `public boolean hasChunk(int p_104737_,  int p_104738_)`
- `public int getEntityCount()`
- `public void addEntity(Entity p_104741_)`
- `public void removeEntity(int p_171643_,  Entity.RemovalReason p_171644_)`
- `@Nullable public Entity getEntity(int p_104609_)`
- `public void disconnect()`
- `public void animateTick(int p_104785_,  int p_104786_,  int p_104787_)`
- `@Nullable private Block getMarkerParticleTarget()`
- `public void doAnimateTick(int p_233613_,  int p_233614_,  int p_233615_,  int p_233616_,  RandomSource p_233617_,  @Nullable  Block p_233618_,  BlockPos.MutableBlockPos p_233619_)`
- `private void trySpawnDripParticles(BlockPos p_104690_,  BlockState p_104691_,  ParticleOptions p_104692_,  boolean p_104693_)`
- `private void spawnParticle(BlockPos p_104695_,  ParticleOptions p_104696_,  VoxelShape p_104697_,  double p_104698_)`
- `private void spawnFluidParticle(double p_104593_,  double p_104594_,  double p_104595_,  double p_104596_,  double p_104597_,  ParticleOptions p_104598_)`
- `public CrashReportCategory fillReportDetails(CrashReport p_104729_)`
- `public void playSeededSound(@Nullable  Player p_263381_,  double p_263372_,  double p_263404_,  double p_263365_,  Holder<SoundEvent> p_263335_,  SoundSource p_263417_,  float p_263416_,  float p_263349_,  long p_263408_)`
- `public void playSeededSound(@Nullable  Player p_263514_,  Entity p_263536_,  Holder<SoundEvent> p_263518_,  SoundSource p_263487_,  float p_263538_,  float p_263524_,  long p_263509_)`
- `public void playLocalSound(double p_104600_,  double p_104601_,  double p_104602_,  SoundEvent p_104603_,  SoundSource p_104604_,  float p_104605_,  float p_104606_,  boolean p_104607_)`
- `private void playSound(double p_233603_,  double p_233604_,  double p_233605_,  SoundEvent p_233606_,  SoundSource p_233607_,  float p_233608_,  float p_233609_,  boolean p_233610_,  long p_233611_)`
- `public void createFireworks(double p_104585_,  double p_104586_,  double p_104587_,  double p_104588_,  double p_104589_,  double p_104590_,  @Nullable  CompoundTag p_104591_)`
- `public void sendPacketToServer(Packet<?> p_104734_)`
- `public RecipeManager getRecipeManager()`
- `public void setScoreboard(Scoreboard p_104670_)`
- `public LevelTickAccess<Block> getBlockTicks()`
- `public LevelTickAccess<Fluid> getFluidTicks()`
- `public ClientChunkCache getChunkSource()`
- `@Nullable public MapItemSavedData getMapData(String p_104725_)`
- `public void overrideMapData(String p_259652_,  MapItemSavedData p_259308_)`
- `public void setMapData(String p_171670_,  MapItemSavedData p_171671_)`
- `public int getFreeMapId()`
- `public Scoreboard getScoreboard()`
- `public void sendBlockUpdated(BlockPos p_104685_,  BlockState p_104686_,  BlockState p_104687_,  int p_104688_)`
- `public void setBlocksDirty(BlockPos p_104759_,  BlockState p_104760_,  BlockState p_104761_)`
- `public void setSectionDirtyWithNeighbors(int p_104794_,  int p_104795_,  int p_104796_)`
- `public void destroyBlockProgress(int p_104634_,  BlockPos p_104635_,  int p_104636_)`
- `public void globalLevelEvent(int p_104743_,  BlockPos p_104744_,  int p_104745_)`
- `public void levelEvent(@Nullable  Player p_104654_,  int p_104655_,  BlockPos p_104656_,  int p_104657_)`
- `public void addParticle(ParticleOptions p_104706_,  double p_104707_,  double p_104708_,  double p_104709_,  double p_104710_,  double p_104711_,  double p_104712_)`
- `public void addParticle(ParticleOptions p_104714_,  boolean p_104715_,  double p_104716_,  double p_104717_,  double p_104718_,  double p_104719_,  double p_104720_,  double p_104721_)`
- `public void addAlwaysVisibleParticle(ParticleOptions p_104766_,  double p_104767_,  double p_104768_,  double p_104769_,  double p_104770_,  double p_104771_,  double p_104772_)`
- `public void addAlwaysVisibleParticle(ParticleOptions p_104774_,  boolean p_104775_,  double p_104776_,  double p_104777_,  double p_104778_,  double p_104779_,  double p_104780_,  double p_104781_)`
- `public List<AbstractClientPlayer> players()`
- `public Holder<Biome> getUncachedNoiseBiome(int p_205516_,  int p_205517_,  int p_205518_)`
- `public float getSkyDarken(float p_104806_)`
- `public Vec3 getSkyColor(Vec3 p_171661_,  float p_171662_)`
- `public Vec3 getCloudColor(float p_104809_)`
- `public float getStarBrightness(float p_104812_)`
- `public int getSkyFlashTime()`
- `public void setSkyFlashTime(int p_104783_)`
- `public float getShade(Direction p_104703_,  boolean p_104704_)`
- `public int getBlockTint(BlockPos p_104700_,  ColorResolver p_104701_)`
- `public int calculateBlockTint(BlockPos p_104763_,  ColorResolver p_104764_)`
- `public void setDefaultSpawnPos(BlockPos p_104753_,  float p_104754_)`
- `public String toString()`
- `public ClientLevel.ClientLevelData getLevelData()`
- `public void gameEvent(GameEvent p_233639_,  Vec3 p_233640_,  GameEvent.Context p_233641_)`
- `protected Map<String,MapItemSavedData> getAllMapData()`
- `protected void addMapData(Map<String,MapItemSavedData> p_171673_)`
- `protected LevelEntityGetter<Entity> getEntities()`
- `public String gatherChunkSourceStats()`
- `public void addDestroyBlockEffect(BlockPos p_171667_,  BlockState p_171668_)`
- `public void setServerSimulationDistance(int p_194175_)`
- `public int getServerSimulationDistance()`
- `public FeatureFlagSet enabledFeatures()`
- `public Collection<PartEntity<?>> getPartEntities()`
  Description copied from interface: IForgeLevel
  All part entities in this world. Used when collecting entities in an AABB to fix parts being
   ignored whose parent entity is in a chunk that does not intersect with the AABB.
- `public ModelDataManager getModelDataManager()`
  Description copied from interface: IForgeBlockGetter
  Retrieves the model data manager for this level.
   This will be null on a server level.
- `public float getShade(float normalX,  float normalY,  float normalZ,  boolean shade)`
  Description copied from interface: IForgeBlockAndTintGetter
  Computes the shade for a given normal.
   Alternate version of the vanilla method taking in a Direction.

### Inherited methods
- from `net.minecraft.world.level.Level`: `addBlockEntityTicker`, `addFreshBlockEntities`, `blockEntityChanged`, `blockEvent`, `broadcastDamageEvent`, `broadcastEntityEvent`, `close`, `damageSources`, `destroyBlock`, `dimension`, `dimensionType`, `dimensionTypeId`, `dimensionTypeRegistration`, `explode`, `explode`, `explode`, `explode`, `explode`, `getBiomeManager`, `getBlockEntity`, `getBlockRandomPos`, `getBlockState`, `getChunk`, `getChunk`, `getChunkAt`, `getChunkForCollisions`, `getCurrentDifficultyAt`, `getDayTime`, `getEntities`, `getEntities`, `getEntities`, `getEntities`, `getFluidState`, `getGameRules`, `getGameTime`, `getHeight`, `getLightEngine`, `getMaxEntityRadius`, `getProfiler`, `getProfilerSupplier`, `getRainLevel`, `getRandom`, `getSeaLevel`, `getServer`, `getSharedSpawnAngle`, `getSharedSpawnPos`, `getSkyDarken`, `getSunAngle`, `getThunderLevel`, `getWorldBorder`, `guardEntityTick`, `increaseMaxEntityRadius`, `isClientSide`, `isDay`, `isDebug`, `isFluidAtPosition`, `isInSpawnableBounds`, `isInWorldBounds`, `isLoaded`, `isNight`, `isRaining`, `isRainingAt`, `isStateAtPosition`, `isThundering`, `loadedAndEntityCanStandOn`, `loadedAndEntityCanStandOnFace`, `markAndNotifyBlock`, `mayInteract`, `neighborChanged`, `neighborChanged`, `neighborShapeChanged`, `nextSubTickCount`, `noSave`, `onBlockStateChange`, `playLocalSound`, `playSeededSound`, `playSound`, `playSound`, `playSound`, `playSound`, `prepareWeather`, `registryAccess`, `removeBlock`, `removeBlockEntity`, `setBlock`, `setBlockAndUpdate`, `setBlockEntity`, `setRainLevel`, `setSpawnSettings`, `setThunderLevel`, `shouldTickBlocksAt`, `shouldTickBlocksAt`, `tickBlockEntities`, `updateNeighborsAt`, `updateNeighborsAtExceptFromFacing`, `updateNeighbourForOutputSignal`, `updateSkyBrightness`
- from `net.minecraftforge.common.capabilities.CapabilityProvider`: `areCapsCompatible`, `areCapsCompatible`, `deserializeCaps`, `gatherCapabilities`, `gatherCapabilities`, `gatherCapabilities`, `getCapabilities`, `getCapability`, `invalidateCaps`, `reviveCaps`, `serializeCaps`
- from `net.minecraft.world.level.BlockAndTintGetter`: `canSeeSky`, `getBrightness`, `getRawBrightness`
- from `net.minecraft.world.level.BlockGetter`: `clip`, `clipWithInteractionOverride`, `getBlockFloorHeight`, `getBlockFloorHeight`, `getBlockStates`, `getLightEmission`, `getMaxLightLevel`, `isBlockInLine`
- from `net.minecraft.world.level.CollisionGetter`: `collidesWithSuffocatingBlock`, `findFreePosition`, `findSupportingBlock`, `getBlockCollisions`, `getCollisions`, `getEntityCollisions`, `isUnobstructed`, `isUnobstructed`, `isUnobstructed`, `noBlockCollision`, `noCollision`, `noCollision`, `noCollision`
- from `net.minecraft.world.level.CommonLevelAccessor`: `getBlockEntity`, `getEntityCollisions`, `getHeightmapPos`, `isUnobstructed`
- from `net.minecraft.world.level.EntityGetter`: `getEntities`, `getEntitiesOfClass`, `getEntitiesOfClass`, `getNearbyEntities`, `getNearbyPlayers`, `getNearestEntity`, `getNearestEntity`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getNearestPlayer`, `getPlayerByUUID`, `hasNearbyAlivePlayer`
- from `net.minecraftforge.common.capabilities.ICapabilityProvider`: `getCapability`, `getCapability`
- from `net.minecraftforge.common.extensions.IForgeBlockGetter`: `getExistingBlockEntity`
- from `net.minecraft.world.level.LevelAccessor`: `blockUpdated`, `dayTime`, `gameEvent`, `gameEvent`, `gameEvent`, `getDifficulty`, `levelEvent`, `playSound`, `scheduleTick`, `scheduleTick`, `scheduleTick`, `scheduleTick`
- from `net.minecraft.world.level.LevelHeightAccessor`: `getMaxBuildHeight`, `getMaxSection`, `getMinSection`, `getSectionIndex`, `getSectionIndexFromSectionY`, `getSectionsCount`, `getSectionYFromSectionIndex`, `isOutsideBuildHeight`, `isOutsideBuildHeight`
- from `net.minecraft.world.level.LevelReader`: `canSeeSkyFromBelowWater`, `containsAnyLiquid`, `getBiome`, `getBlockStatesIfLoaded`, `getChunk`, `getChunk`, `getHeight`, `getLightLevelDependentMagicValue`, `getMaxLocalRawBrightness`, `getMaxLocalRawBrightness`, `getMinBuildHeight`, `getNoiseBiome`, `getPathfindingCostFromLightLevels`, `hasChunkAt`, `hasChunkAt`, `hasChunksAt`, `hasChunksAt`, `hasChunksAt`, `holderLookup`, `isAreaLoaded`, `isEmptyBlock`, `isWaterAt`
- from `net.minecraft.world.level.LevelTimeAccess`: `getMoonBrightness`, `getMoonPhase`, `getTimeOfDay`
- from `net.minecraft.world.level.LevelWriter`: `addFreshEntity`, `destroyBlock`, `destroyBlock`
- from `net.minecraft.world.level.SignalGetter`: `getBestNeighborSignal`, `getControlInputSignal`, `getDirectSignal`, `getDirectSignalTo`, `getSignal`, `hasNeighborSignal`, `hasSignal`

## ClientLevel.ClientLevelData

*class* `net.minecraft.client.multiplayer.ClientLevel.ClientLevelData`

Enclosing class: ClientLevel

### Fields
- `private final boolean hardcore`
- `private final GameRules gameRules`
- `private final boolean isFlat`
- `private int xSpawn`
- `private int ySpawn`
- `private int zSpawn`
- `private float spawnAngle`
- `private long gameTime`
- `private long dayTime`
- `private boolean raining`
- `private Difficulty difficulty`
- `private boolean difficultyLocked`

### Methods
- `public int getXSpawn()`
- `public int getYSpawn()`
- `public int getZSpawn()`
- `public float getSpawnAngle()`
- `public long getGameTime()`
- `public long getDayTime()`
- `public void setXSpawn(int p_104862_)`
- `public void setYSpawn(int p_104869_)`
- `public void setZSpawn(int p_104872_)`
- `public void setSpawnAngle(float p_104848_)`
- `public void setGameTime(long p_104850_)`
- `public void setDayTime(long p_104864_)`
- `public void setSpawn(BlockPos p_104854_,  float p_104855_)`
- `public boolean isThundering()`
- `public boolean isRaining()`
- `public void setRaining(boolean p_104866_)`
- `public boolean isHardcore()`
- `public GameRules getGameRules()`
- `public Difficulty getDifficulty()`
- `public boolean isDifficultyLocked()`
- `public void fillCrashReportCategory(CrashReportCategory p_171690_,  LevelHeightAccessor p_171691_)`
- `public void setDifficulty(Difficulty p_104852_)`
- `public void setDifficultyLocked(boolean p_104859_)`
- `public double getHorizonHeight(LevelHeightAccessor p_171688_)`
- `public float getClearColorScale()`

## ClientLevel.EntityCallbacks

*class* `net.minecraft.client.multiplayer.ClientLevel.EntityCallbacks`

Enclosing class: ClientLevel

### Methods
- `public void onCreated(Entity p_171696_)`
- `public void onDestroyed(Entity p_171700_)`
- `public void onTickingStart(Entity p_171704_)`
- `public void onTickingEnd(Entity p_171708_)`
- `public void onTrackingStart(Entity p_171712_)`
- `public void onTrackingEnd(Entity p_171716_)`
- `public void onSectionChange(Entity p_233660_)`

## ClientPacketListener

*class* `net.minecraft.client.multiplayer.ClientPacketListener`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component UNSECURE_SERVER_TOAST_TITLE`
- `private static final Component UNSERURE_SERVER_TOAST`
- `private static final Component INVALID_PACKET`
- `private static final Component CHAT_VALIDATION_FAILED_ERROR`
- `private static final Component RECONFIGURE_SCREEN_MESSAGE`
- `private static final int PENDING_OFFSET_THRESHOLD` (= 64)
- `private final com.mojang.authlib.GameProfile localGameProfile`
- `private ClientLevel level`
- `private ClientLevel.ClientLevelData levelData`
- `private final Map<UUID,PlayerInfo> playerInfoMap`
- `private final Set<PlayerInfo> listedPlayers`
- `private final ClientAdvancements advancements`
- `private final ClientSuggestionProvider suggestionsProvider`
- `private final DebugQueryHandler debugQueryHandler`
- `private int serverChunkRadius`
- `private int serverSimulationDistance`
- `private final RandomSource random`
- `public com.mojang.brigadier.CommandDispatcher<SharedSuggestionProvider> commands`
- `private final RecipeManager recipeManager`
- `private final UUID id`
- `private Set<ResourceKey<Level>> levels`
- `private final RegistryAccess.Frozen registryAccess`
- `private final FeatureFlagSet enabledFeatures`
- `@Nullable private LocalChatSession chatSession`
- `private SignedMessageChain.Encoder signedMessageEncoder`
- `private LastSeenMessagesTracker lastSeenMessages`
- `private MessageSignatureCache messageSignatureCache`
- `private final ChunkBatchSizeCalculator chunkBatchSizeCalculator`
- `private final PingDebugMonitor pingDebugMonitor`
- `private boolean seenInsecureChatWarning`
- `private volatile boolean closed`

### Inherited fields
- from `net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl`: `connection`, `minecraft`, `postDisconnectScreen`, `serverBrand`, `serverData`, `telemetryManager`

### Methods
- `public ClientSuggestionProvider getSuggestionsProvider()`
- `public void close()`
- `public RecipeManager getRecipeManager()`
- `public void handleLogin(ClientboundLoginPacket p_105030_)`
- `public void handleAddEntity(ClientboundAddEntityPacket p_104958_)`
- `@Nullable private Entity createEntityFromPacket(ClientboundAddEntityPacket p_301611_)`
- `private void postAddEntitySoundInstance(Entity p_233664_)`
- `public void handleAddExperienceOrb(ClientboundAddExperienceOrbPacket p_104960_)`
- `public void handleSetEntityMotion(ClientboundSetEntityMotionPacket p_105092_)`
- `public void handleSetEntityData(ClientboundSetEntityDataPacket p_105088_)`
- `public void handleTeleportEntity(ClientboundTeleportEntityPacket p_105124_)`
- `public void handleSetCarriedItem(ClientboundSetCarriedItemPacket p_105078_)`
- `public void handleMoveEntity(ClientboundMoveEntityPacket p_105036_)`
- `public void handleRotateMob(ClientboundRotateHeadPacket p_105068_)`
- `public void handleRemoveEntities(ClientboundRemoveEntitiesPacket p_182633_)`
- `public void handleMovePlayer(ClientboundPlayerPositionPacket p_105056_)`
- `public void handleChunkBlocksUpdate(ClientboundSectionBlocksUpdatePacket p_105070_)`
- `public void handleLevelChunkWithLight(ClientboundLevelChunkWithLightPacket p_194241_)`
- `public void handleChunksBiomes(ClientboundChunksBiomesPacket p_275437_)`
- `private void updateLevelChunk(int p_194199_,  int p_194200_,  ClientboundLevelChunkPacketData p_194201_)`
- `private void enableChunkLight(LevelChunk p_194213_,  int p_194214_,  int p_194215_)`
- `public void handleForgetLevelChunk(ClientboundForgetLevelChunkPacket p_105014_)`
- `private void queueLightRemoval(ClientboundForgetLevelChunkPacket p_194253_)`
- `public void handleBlockUpdate(ClientboundBlockUpdatePacket p_104980_)`
- `public void handleConfigurationStart(ClientboundStartConfigurationPacket p_298839_)`
- `public void handleTakeItemEntity(ClientboundTakeItemEntityPacket p_105122_)`
- `public void handleSystemChat(ClientboundSystemChatPacket p_233708_)`
- `public void handlePlayerChat(ClientboundPlayerChatPacket p_233702_)`
- `public void handleDisguisedChat(ClientboundDisguisedChatPacket p_251920_)`
- `public void handleDeleteChat(ClientboundDeleteChatPacket p_241325_)`
- `public void handleAnimate(ClientboundAnimatePacket p_104968_)`
- `public void handleHurtAnimation(ClientboundHurtAnimationPacket p_265581_)`
- `public void handleSetTime(ClientboundSetTimePacket p_105108_)`
- `public void handleSetSpawn(ClientboundSetDefaultSpawnPositionPacket p_105084_)`
- `public void handleSetEntityPassengersPacket(ClientboundSetPassengersPacket p_105102_)`
- `public void handleEntityLinkPacket(ClientboundSetEntityLinkPacket p_105090_)`
- `private static ItemStack findTotem(Player p_104928_)`
- `public void handleEntityEvent(ClientboundEntityEventPacket p_105010_)`
- `public void handleDamageEvent(ClientboundDamageEventPacket p_270800_)`
- `public void handleSetHealth(ClientboundSetHealthPacket p_105098_)`
- `public void handleSetExperience(ClientboundSetExperiencePacket p_105096_)`
- `public void handleRespawn(ClientboundRespawnPacket p_105066_)`
- `public void handleExplosion(ClientboundExplodePacket p_105012_)`
- `public void handleHorseScreenOpen(ClientboundHorseScreenOpenPacket p_105018_)`
- `public void handleOpenScreen(ClientboundOpenScreenPacket p_105042_)`
- `public void handleContainerSetSlot(ClientboundContainerSetSlotPacket p_105000_)`
- `public void handleContainerContent(ClientboundContainerSetContentPacket p_104996_)`
- `public void handleOpenSignEditor(ClientboundOpenSignEditorPacket p_105044_)`
- `public void handleBlockEntityData(ClientboundBlockEntityDataPacket p_104976_)`
- `public void handleContainerSetData(ClientboundContainerSetDataPacket p_104998_)`
- `public void handleSetEquipment(ClientboundSetEquipmentPacket p_105094_)`
- `public void handleContainerClose(ClientboundContainerClosePacket p_104994_)`
- `public void handleBlockEvent(ClientboundBlockEventPacket p_104978_)`
- `public void handleBlockDestruction(ClientboundBlockDestructionPacket p_104974_)`
- `public void handleGameEvent(ClientboundGameEventPacket p_105016_)`
- `public void handleMapItemData(ClientboundMapItemDataPacket p_105032_)`
- `public void handleLevelEvent(ClientboundLevelEventPacket p_105024_)`
- `public void handleUpdateAdvancementsPacket(ClientboundUpdateAdvancementsPacket p_105126_)`
- `public void handleSelectAdvancementsTab(ClientboundSelectAdvancementsTabPacket p_105072_)`
- `public void handleCommands(ClientboundCommandsPacket p_104990_)`
- `public void handleStopSoundEvent(ClientboundStopSoundPacket p_105116_)`
- `public void handleCommandSuggestions(ClientboundCommandSuggestionsPacket p_104988_)`
- `public void handleUpdateRecipes(ClientboundUpdateRecipesPacket p_105132_)`
- `public void handleLookAt(ClientboundPlayerLookAtPacket p_105054_)`
- `public void handleTagQueryPacket(ClientboundTagQueryPacket p_105120_)`
- `public void handleAwardStats(ClientboundAwardStatsPacket p_104970_)`
- `public void handleAddOrRemoveRecipes(ClientboundRecipePacket p_105058_)`
- `public void handleUpdateMobEffect(ClientboundUpdateMobEffectPacket p_105130_)`
- `public void handleUpdateTags(ClientboundUpdateTagsPacket p_298004_)`
- `private void refreshTagDependentData()`
- `public void handlePlayerCombatEnd(ClientboundPlayerCombatEndPacket p_171771_)`
- `public void handlePlayerCombatEnter(ClientboundPlayerCombatEnterPacket p_171773_)`
- `public void handlePlayerCombatKill(ClientboundPlayerCombatKillPacket p_171775_)`
- `public void handleChangeDifficulty(ClientboundChangeDifficultyPacket p_104984_)`
- `public void handleSetCamera(ClientboundSetCameraPacket p_105076_)`
- `public void handleInitializeBorder(ClientboundInitializeBorderPacket p_171767_)`
- `public void handleSetBorderCenter(ClientboundSetBorderCenterPacket p_171781_)`
- `public void handleSetBorderLerpSize(ClientboundSetBorderLerpSizePacket p_171783_)`
- `public void handleSetBorderSize(ClientboundSetBorderSizePacket p_171785_)`
- `public void handleSetBorderWarningDistance(ClientboundSetBorderWarningDistancePacket p_171789_)`
- `public void handleSetBorderWarningDelay(ClientboundSetBorderWarningDelayPacket p_171787_)`
- `public void handleTitlesClear(ClientboundClearTitlesPacket p_171765_)`
- `public void handleServerData(ClientboundServerDataPacket p_233704_)`
- `public void handleCustomChatCompletions(ClientboundCustomChatCompletionsPacket p_240832_)`
- `public void setActionBarText(ClientboundSetActionBarTextPacket p_171779_)`
- `public void setTitleText(ClientboundSetTitleTextPacket p_171793_)`
- `public void setSubtitleText(ClientboundSetSubtitleTextPacket p_171791_)`
- `public void setTitlesAnimation(ClientboundSetTitlesAnimationPacket p_171795_)`
- `public void handleTabListCustomisation(ClientboundTabListPacket p_105118_)`
- `public void handleRemoveMobEffect(ClientboundRemoveMobEffectPacket p_105062_)`
- `public void handlePlayerInfoRemove(ClientboundPlayerInfoRemovePacket p_248731_)`
- `public void handlePlayerInfoUpdate(ClientboundPlayerInfoUpdatePacket p_250115_)`
- `private void applyPlayerInfoUpdate(ClientboundPlayerInfoUpdatePacket.Action p_248954_,  ClientboundPlayerInfoUpdatePacket.Entry p_251310_,  PlayerInfo p_251146_)`
- `private void initializeChatSession(ClientboundPlayerInfoUpdatePacket.Entry p_248806_,  PlayerInfo p_251136_)`
- `private boolean enforcesSecureChat()`
- `public void handlePlayerAbilities(ClientboundPlayerAbilitiesPacket p_105048_)`
- `public void handleSoundEvent(ClientboundSoundPacket p_105114_)`
- `public void handleSoundEntityEvent(ClientboundSoundEntityPacket p_105112_)`
- `public void handleBossUpdate(ClientboundBossEventPacket p_104982_)`
- `public void handleItemCooldown(ClientboundCooldownPacket p_105002_)`
- `public void handleMoveVehicle(ClientboundMoveVehiclePacket p_105038_)`
- `public void handleOpenBook(ClientboundOpenBookPacket p_105040_)`
- `public void handleCustomPayload(CustomPacketPayload p_300286_)`
- `private void handleUnknownCustomPayload(CustomPacketPayload p_301051_)`
- `public void handleAddObjective(ClientboundSetObjectivePacket p_105100_)`
- `public void handleSetScore(ClientboundSetScorePacket p_105106_)`
- `public void handleSetDisplayObjective(ClientboundSetDisplayObjectivePacket p_105086_)`
- `public void handleSetPlayerTeamPacket(ClientboundSetPlayerTeamPacket p_105104_)`
- `public void handleParticleEvent(ClientboundLevelParticlesPacket p_105026_)`
- `public void handleUpdateAttributes(ClientboundUpdateAttributesPacket p_105128_)`
- `public void handlePlaceRecipe(ClientboundPlaceGhostRecipePacket p_105046_)`
- `public void handleLightUpdatePacket(ClientboundLightUpdatePacket p_194243_)`
- `private void applyLightData(int p_194249_,  int p_194250_,  ClientboundLightUpdatePacketData p_194251_)`
- `public void handleMerchantOffers(ClientboundMerchantOffersPacket p_105034_)`
- `public void handleSetChunkCacheRadius(ClientboundSetChunkCacheRadiusPacket p_105082_)`
- `public void handleSetSimulationDistance(ClientboundSetSimulationDistancePacket p_194245_)`
- `public void handleSetChunkCacheCenter(ClientboundSetChunkCacheCenterPacket p_105080_)`
- `public void handleBlockChangedAck(ClientboundBlockChangedAckPacket p_233698_)`
- `public void handleBundlePacket(ClientboundBundlePacket p_265195_)`
- `public void handleChunkBatchStart(ClientboundChunkBatchStartPacket p_297740_)`
- `public void handleChunkBatchFinished(ClientboundChunkBatchFinishedPacket p_300262_)`
- `public void handlePongResponse(ClientboundPongResponsePacket p_297651_)`
- `private void readSectionList(int p_171735_,  int p_171736_,  LevelLightEngine p_171737_,  LightLayer p_171738_,  BitSet p_171739_,  BitSet p_171740_,  Iterator<byte[]> p_171741_)`
- `public Connection getConnection()`
- `public boolean isAcceptingMessages()`
- `public Collection<PlayerInfo> getListedOnlinePlayers()`
- `public Collection<PlayerInfo> getOnlinePlayers()`
- `public Collection<UUID> getOnlinePlayerIds()`
- `@Nullable public PlayerInfo getPlayerInfo(UUID p_104950_)`
- `@Nullable public PlayerInfo getPlayerInfo(String p_104939_)`
- `public com.mojang.authlib.GameProfile getLocalGameProfile()`
- `public ClientAdvancements getAdvancements()`
- `public com.mojang.brigadier.CommandDispatcher<SharedSuggestionProvider> getCommands()`
- `public ClientLevel getLevel()`
- `public DebugQueryHandler getDebugQueryHandler()`
- `public UUID getId()`
- `public Set<ResourceKey<Level>> levels()`
- `public RegistryAccess.Frozen registryAccess()`
- `public void markMessageAsProcessed(PlayerChatMessage p_242356_,  boolean p_242455_)`
- `private void sendChatAcknowledgement()`
- `public void sendChat(String p_249888_)`
- `public void sendCommand(String p_250092_)`
- `public boolean sendUnsignedCommand(String p_251509_)`
- `private com.mojang.brigadier.ParseResults<SharedSuggestionProvider> parseCommand(String p_249982_)`
- `public void tick()`
- `public void setKeyPair(ProfileKeyPair p_261475_)`
- `@Nullable public ServerData getServerData()`
- `public FeatureFlagSet enabledFeatures()`
- `public boolean isFeatureEnabled(FeatureFlagSet p_250605_)`

### Inherited methods
- from `net.minecraft.client.multiplayer.ClientCommonPacketListenerImpl`: `createDisconnectScreen`, `handleCustomPayload`, `handleDisconnect`, `handleKeepAlive`, `handlePing`, `handleResourcePack`, `onDisconnect`, `send`, `sendDeferredPackets`, `serverBrand`
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ClientCommonPacketListener`: `handleCustomPayload`, `handleDisconnect`, `handleKeepAlive`, `handlePing`, `handleResourcePack`
- from `net.minecraft.network.protocol.game.ClientGamePacketListener`: `protocol`
- from `net.minecraft.network.PacketListener`: `onDisconnect`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## ClientSuggestionProvider

*class* `net.minecraft.client.multiplayer.ClientSuggestionProvider`

### Fields
- `private final ClientPacketListener connection`
- `private final Minecraft minecraft`
- `private int pendingSuggestionsId`
- `@Nullable private CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> pendingSuggestionsFuture`
- `private final Set<String> customCompletionSuggestions`

### Methods
- `public Collection<String> getOnlinePlayerNames()`
- `public Collection<String> getCustomTabSugggestions()`
- `public Collection<String> getSelectedEntities()`
- `public Collection<String> getAllTeams()`
- `public Stream<ResourceLocation> getAvailableSounds()`
- `public Stream<ResourceLocation> getRecipeNames()`
- `public boolean hasPermission(int p_105178_)`
- `public CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> suggestRegistryElements(ResourceKey<? extends Registry<?>> p_212429_,  SharedSuggestionProvider.ElementSuggestionType p_212430_,  com.mojang.brigadier.suggestion.SuggestionsBuilder p_212431_,  com.mojang.brigadier.context.CommandContext<?> p_212432_)`
- `public CompletableFuture<com.mojang.brigadier.suggestion.Suggestions> customSuggestion(com.mojang.brigadier.context.CommandContext<?> p_212423_)`
- `private static String prettyPrint(double p_105168_)`
- `private static String prettyPrint(int p_105170_)`
- `public Collection<SharedSuggestionProvider.TextCoordinates> getRelevantCoordinates()`
- `public Collection<SharedSuggestionProvider.TextCoordinates> getAbsoluteCoordinates()`
- `public Set<ResourceKey<Level>> levels()`
- `public RegistryAccess registryAccess()`
- `public FeatureFlagSet enabledFeatures()`
- `public void completeCustomSuggestions(int p_105172_,  com.mojang.brigadier.suggestion.Suggestions p_105173_)`
- `public void modifyCustomCompletions(ClientboundCustomChatCompletionsPacket.Action p_240810_,  List<String> p_240765_)`

### Inherited methods
- from `net.minecraft.commands.SharedSuggestionProvider`: `suggestRegistryElements`

## CommonListenerCookie

*record* `net.minecraft.client.multiplayer.CommonListenerCookie`

### Fields
- `private final com.mojang.authlib.GameProfile localGameProfile`
  The field for the localGameProfile record component.
- `private final WorldSessionTelemetryManager telemetryManager`
  The field for the telemetryManager record component.
- `private final RegistryAccess.Frozen receivedRegistries`
  The field for the receivedRegistries record component.
- `private final FeatureFlagSet enabledFeatures`
  The field for the enabledFeatures record component.
- `@Nullable private final String serverBrand`
  The field for the serverBrand record component.
- `@Nullable private final ServerData serverData`
  The field for the serverData record component.
- `@Nullable private final Screen postDisconnectScreen`
  The field for the postDisconnectScreen record component.

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
- `public com.mojang.authlib.GameProfile localGameProfile()`
  Returns the value of the localGameProfile record component.
  - returns: the value of the localGameProfile record component
- `public WorldSessionTelemetryManager telemetryManager()`
  Returns the value of the telemetryManager record component.
  - returns: the value of the telemetryManager record component
- `public RegistryAccess.Frozen receivedRegistries()`
  Returns the value of the receivedRegistries record component.
  - returns: the value of the receivedRegistries record component
- `public FeatureFlagSet enabledFeatures()`
  Returns the value of the enabledFeatures record component.
  - returns: the value of the enabledFeatures record component
- `@Nullable public String serverBrand()`
  Returns the value of the serverBrand record component.
  - returns: the value of the serverBrand record component
- `@Nullable public ServerData serverData()`
  Returns the value of the serverData record component.
  - returns: the value of the serverData record component
- `@Nullable public Screen postDisconnectScreen()`
  Returns the value of the postDisconnectScreen record component.
  - returns: the value of the postDisconnectScreen record component

## LegacyServerPinger

*class* `net.minecraft.client.multiplayer.LegacyServerPinger`

### Fields
- `private static final com.google.common.base.Splitter SPLITTER`
- `private final ServerAddress address`
- `private final LegacyServerPinger.Output output`

### Methods
- `public void channelActive(io.netty.channel.ChannelHandlerContext p_300254_)  throws Exception`
  - throws: Exception
- `protected void channelRead0(io.netty.channel.ChannelHandlerContext p_299467_,  io.netty.buffer.ByteBuf p_298668_)`
- `public void exceptionCaught(io.netty.channel.ChannelHandlerContext p_300590_,  Throwable p_301394_)`

### Inherited methods
- from `io.netty.channel.SimpleChannelInboundHandler`: `acceptInboundMessage`, `channelRead`
- from `io.netty.channel.ChannelInboundHandlerAdapter`: `channelInactive`, `channelReadComplete`, `channelRegistered`, `channelUnregistered`, `channelWritabilityChanged`, `userEventTriggered`
- from `io.netty.channel.ChannelHandlerAdapter`: `ensureNotSharable`, `handlerAdded`, `handlerRemoved`, `isSharable`
- from `io.netty.channel.ChannelHandler`: `handlerAdded`, `handlerRemoved`

## LegacyServerPinger.Output

*interface* `net.minecraft.client.multiplayer.LegacyServerPinger.Output`

Enclosing class: LegacyServerPinger

### Methods
- `void handleResponse(int p_297950_,  String p_298283_,  String p_299118_,  int p_300225_,  int p_298727_)`

## MultiPlayerGameMode

*class* `net.minecraft.client.multiplayer.MultiPlayerGameMode`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final Minecraft minecraft`
- `private final ClientPacketListener connection`
- `private BlockPos destroyBlockPos`
- `private ItemStack destroyingItem`
- `private float destroyProgress`
- `private float destroyTicks`
- `private int destroyDelay`
- `private boolean isDestroying`
- `private GameType localPlayerMode`
- `@Nullable private GameType previousLocalPlayerMode`
- `private int carriedIndex`

### Methods
- `public void adjustPlayer(Player p_105222_)`
- `public void setLocalMode(GameType p_171806_,  @Nullable  GameType p_171807_)`
- `public void setLocalMode(GameType p_105280_)`
- `public boolean canHurtPlayer()`
- `public boolean destroyBlock(BlockPos p_105268_)`
- `public boolean startDestroyBlock(BlockPos p_105270_,  Direction p_105271_)`
- `public void stopDestroyBlock()`
- `public boolean continueDestroyBlock(BlockPos p_105284_,  Direction p_105285_)`
- `private void startPrediction(ClientLevel p_233730_,  PredictiveAction p_233731_)`
- `public float getPickRange()`
- `public void tick()`
- `private boolean sameDestroyTarget(BlockPos p_105282_)`
- `private void ensureHasSentCarriedItem()`
- `public InteractionResult useItemOn(LocalPlayer p_233733_,  InteractionHand p_233734_,  BlockHitResult p_233735_)`
- `private InteractionResult performUseItemOn(LocalPlayer p_233747_,  InteractionHand p_233748_,  BlockHitResult p_233749_)`
- `public InteractionResult useItem(Player p_233722_,  InteractionHand p_233723_)`
- `public LocalPlayer createPlayer(ClientLevel p_105247_,  StatsCounter p_105248_,  ClientRecipeBook p_105249_)`
- `public LocalPlayer createPlayer(ClientLevel p_105251_,  StatsCounter p_105252_,  ClientRecipeBook p_105253_,  boolean p_105254_,  boolean p_105255_)`
- `public void attack(Player p_105224_,  Entity p_105225_)`
- `public InteractionResult interact(Player p_105227_,  Entity p_105228_,  InteractionHand p_105229_)`
- `public InteractionResult interactAt(Player p_105231_,  Entity p_105232_,  EntityHitResult p_105233_,  InteractionHand p_105234_)`
- `public void handleInventoryMouseClick(int p_171800_,  int p_171801_,  int p_171802_,  ClickType p_171803_,  Player p_171804_)`
- `public void handlePlaceRecipe(int p_105218_,  RecipeHolder<?> p_300726_,  boolean p_105220_)`
- `public void handleInventoryButtonClick(int p_105209_,  int p_105210_)`
- `public void handleCreativeModeItemAdd(ItemStack p_105242_,  int p_105243_)`
- `public void handleCreativeModeItemDrop(ItemStack p_105240_)`
- `public void releaseUsingItem(Player p_105278_)`
- `public boolean hasExperience()`
- `public boolean hasMissTime()`
- `public boolean hasInfiniteItems()`
- `public boolean hasFarPickRange()`
- `public boolean isServerControlledInventory()`
- `public boolean isAlwaysFlying()`
- `@Nullable public GameType getPreviousPlayerMode()`
- `public GameType getPlayerMode()`
- `public boolean isDestroying()`
- `public int getDestroyStage()`
- `public void handlePickItem(int p_105207_)`

## PingDebugMonitor

*class* `net.minecraft.client.multiplayer.PingDebugMonitor`

### Fields
- `private final ClientPacketListener connection`
- `private final SampleLogger delayTimer`

### Methods
- `public void tick()`
- `public void onPongReceived(ClientboundPongResponsePacket p_297641_)`

## PlayerInfo

*class* `net.minecraft.client.multiplayer.PlayerInfo`

### Fields
- `private final com.mojang.authlib.GameProfile profile`
- `private final Supplier<PlayerSkin> skinLookup`
- `private GameType gameMode`
- `private int latency`
- `@Nullable private Component tabListDisplayName`
- `@Nullable private RemoteChatSession chatSession`
- `private SignedMessageValidator messageValidator`

### Methods
- `private static Supplier<PlayerSkin> createSkinLookup(com.mojang.authlib.GameProfile p_298306_)`
- `public com.mojang.authlib.GameProfile getProfile()`
- `@Nullable public RemoteChatSession getChatSession()`
- `public SignedMessageValidator getMessageValidator()`
- `public boolean hasVerifiableChat()`
- `protected void setChatSession(RemoteChatSession p_249599_)`
- `protected void clearChatSession(boolean p_254536_)`
- `private static SignedMessageValidator fallbackMessageValidator(boolean p_254311_)`
- `public GameType getGameMode()`
- `protected void setGameMode(GameType p_105318_)`
- `public int getLatency()`
- `protected void setLatency(int p_105314_)`
- `public PlayerSkin getSkin()`
- `@Nullable public PlayerTeam getTeam()`
- `public void setTabListDisplayName(@Nullable  Component p_105324_)`
- `@Nullable public Component getTabListDisplayName()`

## ProfileKeyPairManager

*interface* `net.minecraft.client.multiplayer.ProfileKeyPairManager`

### Fields
- `static final ProfileKeyPairManager EMPTY_KEY_MANAGER`

### Methods
- `static ProfileKeyPairManager create(com.mojang.authlib.minecraft.UserApiService p_253925_,  User p_254501_,  Path p_254206_)`
- `CompletableFuture<Optional<ProfileKeyPair>> prepareKeyPair()`
- `boolean shouldRefreshKeyPair()`

## ServerData

*class* `net.minecraft.client.multiplayer.ServerData`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int MAX_ICON_SIZE` (= 1024)
- `public String name`
- `public String ip`
- `public Component status`
- `public Component motd`
- `@Nullable public ServerStatus.Players players`
- `public long ping`
- `public int protocol`
- `public Component version`
- `public boolean pinged`
- `public List<Component> playerList`
- `private ServerData.ServerPackStatus packStatus`
- `@Nullable private byte[] iconBytes`
- `private ServerData.Type type`
- `private boolean enforcesSecureChat`
- `public ExtendedServerListData forgeData`

### Methods
- `public CompoundTag write()`
- `public ServerData.ServerPackStatus getResourcePackStatus()`
- `public void setResourcePackStatus(ServerData.ServerPackStatus p_105380_)`
- `public static ServerData read(CompoundTag p_105386_)`
- `@Nullable public byte[] getIconBytes()`
- `public void setIconBytes(@Nullable  byte[] p_272760_)`
- `public boolean isLan()`
- `public boolean isRealm()`
- `public void setEnforcesSecureChat(boolean p_242972_)`
- `public boolean enforcesSecureChat()`
- `public void copyNameIconFrom(ServerData p_233804_)`
- `public void copyFrom(ServerData p_105382_)`
- `@Nullable public static byte[] validateIcon(@Nullable  byte[] p_301776_)`

## ServerList

*class* `net.minecraft.client.multiplayer.ServerList`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final ProcessorMailbox<Runnable> IO_MAILBOX`
- `private static final int MAX_HIDDEN_SERVERS` (= 16)
- `private final Minecraft minecraft`
- `private final List<ServerData> serverList`
- `private final List<ServerData> hiddenServerList`

### Methods
- `public void load()`
- `public void save()`
- `public ServerData get(int p_105433_)`
- `@Nullable public ServerData get(String p_233846_)`
- `@Nullable public ServerData unhide(String p_233848_)`
- `public void remove(ServerData p_105441_)`
- `public void add(ServerData p_233843_,  boolean p_233844_)`
- `public int size()`
- `public void swap(int p_105435_,  int p_105436_)`
- `public void replace(int p_105438_,  ServerData p_105439_)`
- `private static boolean set(ServerData p_233840_,  List<ServerData> p_233841_)`
- `public static void saveSingleServer(ServerData p_105447_)`

## ServerStatusPinger

*class* `net.minecraft.client.multiplayer.ServerStatusPinger`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final Component CANT_CONNECT_MESSAGE`
- `private final List<Connection> connections`

### Methods
- `public void pingServer(ServerData p_105460_,  Runnable p_105461_)  throws UnknownHostException`
  - throws: UnknownHostException
- `void onPingFailed(Component p_171815_,  ServerData p_171816_)`
- `void pingLegacyServer(InetSocketAddress p_171812_,  ServerAddress p_300887_,  ServerData p_171813_)`
- `public static Component formatPlayerCount(int p_105467_,  int p_105468_)`
- `public void tick()`
- `public void removeAll()`
