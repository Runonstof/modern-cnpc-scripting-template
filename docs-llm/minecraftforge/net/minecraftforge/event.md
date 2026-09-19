# net.minecraftforge.event

- [AddPackFindersEvent](#addpackfindersevent)
- [AddReloadListenerEvent](#addreloadlistenerevent)
- [AddReloadListenerEvent.WrappedStateAwareListener](#addreloadlistenerevent.wrappedstateawarelistener)
- [AnvilUpdateEvent](#anvilupdateevent)
- [AttachCapabilitiesEvent](#attachcapabilitiesevent)
- [BuildCreativeModeTabContentsEvent](#buildcreativemodetabcontentsevent)
- [Class TagsUpdatedEvent.UpdateCause](#class-tagsupdatedevent.updatecause)
- [Class TickEvent.Phase](#class-tickevent.phase)
- [Class TickEvent.Type](#class-tickevent.type)
- [CommandEvent](#commandevent)
- [DifficultyChangeEvent](#difficultychangeevent)
- [ForgeEventFactory](#forgeeventfactory)
- [GameShuttingDownEvent](#gameshuttingdownevent)
- [GrindstoneEvent](#grindstoneevent)
- [GrindstoneEvent.OnPlaceItem](#grindstoneevent.onplaceitem)
- [GrindstoneEvent.OnTakeItem](#grindstoneevent.ontakeitem)
- [ItemAttributeModifierEvent](#itemattributemodifierevent)
- [ItemStackedOnOtherEvent](#itemstackedonotherevent)
- [LootTableLoadEvent](#loottableloadevent)
- [ModMismatchEvent](#modmismatchevent)
- [ModMismatchEvent.MismatchedVersionInfo](#modmismatchevent.mismatchedversioninfo)
- [ModMismatchEvent.MismatchResolutionResult](#modmismatchevent.mismatchresolutionresult)
- [OnDatapackSyncEvent](#ondatapacksyncevent)
- [PlayLevelSoundEvent](#playlevelsoundevent)
- [PlayLevelSoundEvent.AtEntity](#playlevelsoundevent.atentity)
- [PlayLevelSoundEvent.AtPosition](#playlevelsoundevent.atposition)
- [RegisterCommandsEvent](#registercommandsevent)
- [RegisterGameTestsEvent](#registergametestsevent)
- [RegisterStructureConversionsEvent](#registerstructureconversionsevent)
- [ServerChatEvent](#serverchatevent)
- [TagsUpdatedEvent](#tagsupdatedevent)
- [TickEvent](#tickevent)
- [TickEvent.ClientTickEvent](#tickevent.clienttickevent)
- [TickEvent.LevelTickEvent](#tickevent.leveltickevent)
- [TickEvent.PlayerTickEvent](#tickevent.playertickevent)
- [TickEvent.RenderTickEvent](#tickevent.rendertickevent)
- [TickEvent.ServerTickEvent](#tickevent.servertickevent)
- [VanillaGameEvent](#vanillagameevent)
## AddPackFindersEvent

*class* `net.minecraftforge.event.AddPackFindersEvent`

Fired on PackRepository creation to allow mods to add new pack finders.

### Fields
- `private final PackType packType`
- `private final Consumer<RepositorySource> sources`

### Methods
- `public void addRepositorySource(RepositorySource source)`
  Adds a new source to the list of pack finders.
  - param: source - the pack finder
- `public PackType getPackType()`
  - returns: the PackType of the pack repository being constructed.

## AddReloadListenerEvent

*class* `net.minecraftforge.event.AddReloadListenerEvent`

The main ResourceManager is recreated on each reload, just after ReloadableServerResources's creation.

 The event is fired on each reload and lets modders add their own ReloadListeners, for server-side resources.
 The event is fired on the MinecraftForge.EVENT_BUS

### Fields
- `private final List<PreparableReloadListener> listeners`
- `private final ReloadableServerResources serverResources`
- `private final RegistryAccess registryAccess`

### Methods
- `public void addListener(PreparableReloadListener listener)`
  - param: listener - the listener to add to the ResourceManager on reload
- `public List<PreparableReloadListener> getListeners()`
- `public ReloadableServerResources getServerResources()`
  - returns: The ReloableServerResources being reloaded.
- `public ICondition.IContext getConditionContext()`
  This context object holds data relevant to the current reload, such as staged tags.
  - returns: The condition context for the currently active reload.
- `public RegistryAccess getRegistryAccess()`
  Provides access to the loaded registries associated with these server resources.
   All built-in and dynamic registries are loaded and frozen by this point.
  - returns: The RegistryAccess context for the currently active reload.

## AddReloadListenerEvent.WrappedStateAwareListener

*class* `net.minecraftforge.event.AddReloadListenerEvent.WrappedStateAwareListener`

Enclosing class: AddReloadListenerEvent

### Fields
- `private final PreparableReloadListener wrapped`

### Methods
- `public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier stage,  ResourceManager resourceManager,  ProfilerFiller preparationsProfiler,  ProfilerFiller reloadProfiler,  Executor backgroundExecutor,  Executor gameExecutor)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`

## AnvilUpdateEvent

*class* `net.minecraftforge.event.AnvilUpdateEvent`

AnvilUpdateEvent is fired whenever the input stacks (left or right) or the name in an anvil changed.

 It is called from AnvilMenu.createResult().

 If the event is canceled, vanilla behavior will not run, and the output will be set to ItemStack.EMPTY.

 If the event is not canceled, but the output is not empty, it will set the output and not run vanilla behavior.

 if the output is empty, and the event is not canceled, vanilla behavior will execute.

### Fields
- `private final ItemStack left`
- `private final ItemStack right`
- `private final String name`
- `private ItemStack output`
- `private int cost`
- `private int materialCost`
- `private final Player player`

### Methods
- `public ItemStack getLeft()`
  - returns: The item in the left input (leftmost) anvil slot.
- `public ItemStack getRight()`
  - returns: The item in the right input (center) anvil slot.
- `@Nullable public @Nullable String getName()`
  This is the name as sent by the client. It may be null if none has been sent.
  
   If empty, it indicates the user wishes to clear the custom name from the item.
  - returns: The name that the output item will be set to, if applicable.
- `public ItemStack getOutput()`
  This is the output as determined by the event, not by the vanilla behavior between these two items.
  
   If you are the first receiver of this event, it is guaranteed to be empty.
  
   It will only be non-empty if changed by an event handler.
  
   If this event is cancelled, this output stack is discarded.
  - returns: The item to set in the output (rightmost) anvil slot.
- `public void setOutput(ItemStack output)`
  Sets the output slot to a specific itemstack.
  - param: output - The stack to change the output to.
- `public int getCost()`
  This is the level cost of this anvil operation.
  
   When unchanged, it is guaranteed to be left.getRepairCost() + right.getRepairCost().
  - returns: The level cost of this anvil operation.
- `public void setCost(int cost)`
  Changes the level cost of this operation.
  
   The level cost does prevent the output from being available.
  
   That is, a player without enough experience may not take the output.
  - param: cost - The new level cost.
- `public int getMaterialCost()`
  The material cost is how many units of the right input stack are consumed.
  - returns: The material cost of this anvil operation.
- `public void setMaterialCost(int materialCost)`
  Sets how many right inputs are consumed.
  
   A material cost of zero consumes the entire stack.
  
   A material cost higher than the count of the right stack
   consumes the entire stack.
  
   The material cost does not prevent the output from being available.
  - param: materialCost - The new material cost.
- `public Player getPlayer()`
  - returns: The player using this anvil container.

## AttachCapabilitiesEvent

*class* `net.minecraftforge.event.AttachCapabilitiesEvent`

Fired whenever an object with Capabilities support {currently TileEntity/Item/Entity)
 is created. Allowing for the attachment of arbitrary capability providers.

 Please note that as this is fired for ALL object creations efficient code is recommended.
 And if possible use one of the sub-classes to filter your intended objects.

### Fields
- `private final T obj`
- `private final Map<ResourceLocation,ICapabilityProvider> caps`
- `private final Map<ResourceLocation,ICapabilityProvider> view`
- `private final List<Runnable> listeners`
- `private final List<Runnable> listenersView`

### Methods
- `public T getObject()`
  Retrieves the object that is being created, Not much state is set.
- `public void addCapability(ResourceLocation key,  ICapabilityProvider cap)`
  Adds a capability to be attached to this object.
   Keys MUST be unique, it is suggested that you set the domain to your mod ID.
   If the capability is an instance of INBTSerializable, this key will be used when serializing this capability.
  - param: key - The name of owner of this capability provider.
  - param: cap - The capability provider
- `public Map<ResourceLocation,ICapabilityProvider> getCapabilities()`
  A unmodifiable view of the capabilities that will be attached to this object.
- `public void addListener(Runnable listener)`
  Adds a callback that is fired when the attached object is invalidated.
   Such as a Entity/TileEntity being removed from world.
   All attached providers should invalidate all of their held capability instances.
- `public List<Runnable> getListeners()`

### Inherited methods
- from `net.minecraftforge.eventbus.api.GenericEvent`: `getGenericType`

## BuildCreativeModeTabContentsEvent

*class* `net.minecraftforge.event.BuildCreativeModeTabContentsEvent`

Fired when the contents of a specific creative mode tab are being populated.
 This event may be fired multiple times if the operator status of the local player or enabled feature flags changes.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final CreativeModeTab tab`
- `private final CreativeModeTab.ItemDisplayParameters parameters`
- `private final MutableHashedLinkedMap<ItemStack,CreativeModeTab.TabVisibility> entries`
- `private final ResourceKey<CreativeModeTab> tabKey`

### Methods
- `public CreativeModeTab getTab()`
  Returns the creative mode tab currently populating its contents.
  - returns: the creative mode tab currently populating its contents
- `public ResourceKey<CreativeModeTab> getTabKey()`
  Returns the key of the creative mode tab currently populating its contents.
  - returns: the key of the creative mode tab currently populating its contents
- `public FeatureFlagSet getFlags()`
- `public CreativeModeTab.ItemDisplayParameters getParameters()`
- `public boolean hasPermissions()`
- `public MutableHashedLinkedMap<ItemStack,CreativeModeTab.TabVisibility> getEntries()`
- `public void accept(ItemStack stack,  CreativeModeTab.TabVisibility visibility)`
- `public void accept(Supplier<? extends ItemLike> item,  CreativeModeTab.TabVisibility visibility)`
- `public void accept(Supplier<? extends ItemLike> item)`

### Inherited methods
- from `net.minecraft.world.item.CreativeModeTab.Output`: `accept`, `accept`, `accept`, `acceptAll`, `acceptAll`

## Class TagsUpdatedEvent.UpdateCause

*enum* `net.minecraftforge.event.Class TagsUpdatedEvent.UpdateCause`

Represents the cause for a tag update.

Enclosing class: TagsUpdatedEvent

### Methods
- `public static TagsUpdatedEvent.UpdateCause[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TagsUpdatedEvent.UpdateCause valueOf(String name)`
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

## Class TickEvent.Phase

*enum* `net.minecraftforge.event.Class TickEvent.Phase`

Enclosing class: TickEvent

### Methods
- `public static TickEvent.Phase[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TickEvent.Phase valueOf(String name)`
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

## Class TickEvent.Type

*enum* `net.minecraftforge.event.Class TickEvent.Type`

Enclosing class: TickEvent

### Methods
- `public static TickEvent.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static TickEvent.Type valueOf(String name)`
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

## CommandEvent

*class* `net.minecraftforge.event.CommandEvent`

CommandEvent is fired after a command is parsed, but before it is executed.
 This event is fired during the invocation of Commands.performCommand(ParseResults, String).

 This event is cancellable, and does not have a result.
 If the event is cancelled, the command will not be executed.

 This event is fired on the main Forge event bus,
 only on the logical server.

### Fields
- `private com.mojang.brigadier.ParseResults<CommandSourceStack> parse`
- `@Nullable private @Nullable Throwable exception`

### Methods
- `public com.mojang.brigadier.ParseResults<CommandSourceStack> getParseResults()`
  Returns the parsed command results.
  - returns: the parsed command results
- `public void setParseResults(com.mojang.brigadier.ParseResults<CommandSourceStack> parse)`
- `@Nullable public @Nullable Throwable getException()`
  Returns an exception to be thrown when performing the command, starts null.
  - returns: an exception to be thrown when performing the command, starts null
- `public void setException(@Nullable  @Nullable Throwable exception)`

## DifficultyChangeEvent

*class* `net.minecraftforge.event.DifficultyChangeEvent`

DifficultyChangeEvent is fired when difficulty is changing.

 This event is fired via the ForgeHooks.onDifficultyChange(Difficulty, Difficulty).

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Difficulty difficulty`
- `private final Difficulty oldDifficulty`

### Methods
- `public Difficulty getDifficulty()`
- `public Difficulty getOldDifficulty()`

## ForgeEventFactory

*class* `net.minecraftforge.event.ForgeEventFactory`

### Methods
- `private static boolean post(net.minecraftforge.eventbus.api.Event e)`
- `private static <E extends net.minecraftforge.eventbus.api.Event> E fire(E e)`
- `public static boolean onMultiBlockPlace(@Nullable  @Nullable Entity entity,  List<BlockSnapshot> blockSnapshots,  Direction direction)`
- `public static boolean onBlockPlace(@Nullable  @Nullable Entity entity,  @NotNull  @NotNull BlockSnapshot blockSnapshot,  @NotNull  @NotNull Direction direction)`
- `public static BlockEvent.NeighborNotifyEvent onNeighborNotify(Level level,  BlockPos pos,  BlockState state,  EnumSet<Direction> notifiedSides,  boolean forceRedstoneUpdate)`
- `public static boolean doPlayerHarvestCheck(Player player,  BlockState state,  boolean success)`
- `public static float getBreakSpeed(Player player,  BlockState state,  float original,  BlockPos pos)`
- `public static void onPlayerDestroyItem(Player player,  @NotNull  @NotNull ItemStack stack,  @Nullable  @Nullable InteractionHand hand)`
- `public static boolean checkSpawnPlacements(EntityType<?> entityType,  ServerLevelAccessor level,  MobSpawnType spawnType,  BlockPos pos,  RandomSource random,  boolean defaultResult)`
- `public static boolean checkSpawnPosition(Mob mob,  ServerLevelAccessor level,  MobSpawnType spawnType)`
  Checks if the current position of the passed mob is valid for spawning, by firing MobSpawnEvent.PositionCheck.
  
   The default check is to perform the logical and of Mob.checkSpawnRules(net.minecraft.world.level.LevelAccessor, net.minecraft.world.entity.MobSpawnType) and Mob.checkSpawnObstruction(net.minecraft.world.level.LevelReader).
  - param: mob - The mob being spawned.
  - param: level - The level the mob will be added to, if successful.
  - param: spawnType - The spawn type of the spawn.
  - returns: True, if the position is valid, as determined by the contract of MobSpawnEvent.PositionCheck.
- `public static boolean checkSpawnPositionSpawner(Mob mob,  ServerLevelAccessor level,  MobSpawnType spawnType,  SpawnData spawnData,  BaseSpawner spawner)`
  Specialized variant of checkSpawnPosition(net.minecraft.world.entity.Mob, net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.entity.MobSpawnType) for spawners, as they have slightly different checks.
- `@Nullable public static @Nullable SpawnGroupData onFinalizeSpawn(Mob mob,  ServerLevelAccessor level,  DifficultyInstance difficulty,  MobSpawnType spawnType,  @Nullable  @Nullable SpawnGroupData spawnData,  @Nullable  @Nullable CompoundTag spawnTag)`
  Vanilla calls to Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) are replaced with calls to this method via coremod.
  
   Mods should call this method in place of calling Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag). Super calls (from within overrides) should not be wrapped.
  
   When interfacing with this event, write all code as normal, and replace the call to Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) with a call to this method.
   As an example, the following code block:
   var zombie = new Zombie(level);
   zombie.finalizeSpawn(level, difficulty, spawnType, spawnData, spawnTag);
   level.tryAddFreshEntityWithPassengers(zombie);
   if (zombie.isAddedToWorld()) {
   // Do stuff with your new zombie
   }
  
   Would become:
   var zombie = new Zombie(level);
   ForgeEventFactory.onFinalizeSpawn(zombie, level, difficulty, spawnType, spawnData, spawnTag);
   level.tryAddFreshEntityWithPassengers(zombie);
   if (zombie.isAddedToWorld()) {
   // Do stuff with your new zombie
   }
  
   The only code that changes is the Mob.finalizeSpawn(net.minecraft.world.level.ServerLevelAccessor, net.minecraft.world.DifficultyInstance, net.minecraft.world.entity.MobSpawnType, net.minecraft.world.entity.SpawnGroupData, net.minecraft.nbt.CompoundTag) call.
  - returns: The SpawnGroupData from this event, or null if it was canceled. The return value of this method has no bearing on if the entity will be spawned.
- `@Nullable public static MobSpawnEvent.FinalizeSpawn onFinalizeSpawnSpawner(Mob mob,  ServerLevelAccessor level,  DifficultyInstance difficulty,  @Nullable  @Nullable SpawnGroupData spawnData,  @Nullable  @Nullable CompoundTag spawnTag,  BaseSpawner spawner)`
  Returns the FinalizeSpawn event instance, or null if it was canceled.
  
   This is separate since mob spawners perform special finalizeSpawn handling when NBT data is present, but we still want to fire the event.
  
   This overload is also the only way to pass through a BaseSpawner instance.
- `public static net.minecraftforge.eventbus.api.Event.Result canEntityDespawn(Mob entity,  ServerLevelAccessor level)`
- `public static int getItemBurnTime(@NotNull  @NotNull ItemStack itemStack,  int burnTime,  @Nullable  @Nullable RecipeType<?> recipeType)`
- `public static int getExperienceDrop(LivingEntity entity,  Player attackingPlayer,  int originalExperience)`
- `public static int getMaxSpawnPackSize(Mob entity)`
- `public static Component getPlayerDisplayName(Player player,  Component username)`
- `public static Component getPlayerTabListDisplayName(Player player)`
- `public static BlockState fireFluidPlaceBlockEvent(LevelAccessor level,  BlockPos pos,  BlockPos liquidPos,  BlockState state)`
- `public static ItemTooltipEvent onItemTooltip(ItemStack itemStack,  @Nullable  @Nullable Player entityPlayer,  List<Component> list,  TooltipFlag flags)`
- `public static ZombieEvent.SummonAidEvent fireZombieSummonAid(Zombie zombie,  Level level,  int x,  int y,  int z,  LivingEntity attacker,  double summonChance)`
- `public static boolean onEntityStruckByLightning(Entity entity,  LightningBolt bolt)`
- `public static int onItemUseStart(LivingEntity entity,  ItemStack item,  int duration)`
- `public static int onItemUseTick(LivingEntity entity,  ItemStack item,  int duration)`
- `public static boolean onUseItemStop(LivingEntity entity,  ItemStack item,  int duration)`
- `public static ItemStack onItemUseFinish(LivingEntity entity,  ItemStack item,  int duration,  ItemStack result)`
- `public static void onStartEntityTracking(Entity entity,  Player player)`
- `public static void onStopEntityTracking(Entity entity,  Player player)`
- `public static void firePlayerLoadingEvent(Player player,  File playerDirectory,  String uuidString)`
- `public static void firePlayerSavingEvent(Player player,  File playerDirectory,  String uuidString)`
- `public static void firePlayerLoadingEvent(Player player,  PlayerDataStorage playerFileData,  String uuidString)`
- `@Nullable public static @Nullable BlockState onToolUse(BlockState originalState,  UseOnContext context,  ToolAction toolAction,  boolean simulate)`
- `public static int onApplyBonemeal(@Nullable  @Nullable Player player,  Level level,  BlockPos pos,  BlockState state,  ItemStack stack)`
- `@Nullable public static @Nullable InteractionResultHolder<ItemStack> onBucketUse(@NotNull  @NotNull Player player,  @NotNull  @NotNull Level level,  @NotNull  @NotNull ItemStack stack,  @Nullable  @Nullable HitResult target)`
- `public static PlayLevelSoundEvent.AtEntity onPlaySoundAtEntity(Entity entity,  Holder<SoundEvent> name,  SoundSource category,  float volume,  float pitch)`
- `public static PlayLevelSoundEvent.AtPosition onPlaySoundAtPosition(Level level,  double x,  double y,  double z,  Holder<SoundEvent> name,  SoundSource category,  float volume,  float pitch)`
- `public static int onItemExpire(ItemEntity entity,  @NotNull  @NotNull ItemStack item)`
- `public static int onItemPickup(ItemEntity entityItem,  Player player)`
- `public static boolean canMountEntity(Entity entityMounting,  Entity entityBeingMounted,  boolean isMounting)`
- `public static boolean onAnimalTame(Animal animal,  Player tamer)`
- `public static Player.BedSleepingProblem onPlayerSleepInBed(Player player,  Optional<BlockPos> pos)`
- `public static void onPlayerWakeup(Player player,  boolean wakeImmediately,  boolean updateLevel)`
- `public static void onPlayerFall(Player player,  float distance,  float multiplier)`
- `public static boolean onPlayerSpawnSet(Player player,  ResourceKey<Level> levelKey,  BlockPos pos,  boolean forced)`
- `public static void onPlayerClone(Player player,  Player oldPlayer,  boolean wasDeath)`
- `public static boolean onExplosionStart(Level level,  Explosion explosion)`
- `public static void onExplosionDetonate(Level level,  Explosion explosion,  List<Entity> list,  double diameter)`
- `public static boolean onCreateWorldSpawn(Level level,  ServerLevelData settings)`
- `public static float onLivingHeal(LivingEntity entity,  float amount)`
- `public static boolean onPotionAttemptBrew(NonNullList<ItemStack> stacks)`
- `public static void onPotionBrewed(NonNullList<ItemStack> brewingItemStacks)`
- `public static void onPlayerBrewedPotion(Player player,  ItemStack stack)`
- `@Nullable public static <T extends ICapabilityProvider> @Nullable CapabilityDispatcher gatherCapabilities(Class<? extends T> type,  T provider)`
- `@Nullable public static <T extends ICapabilityProvider> @Nullable CapabilityDispatcher gatherCapabilities(Class<? extends T> type,  T provider,  @Nullable  @Nullable ICapabilityProvider parent)`
- `@Nullable private static @Nullable CapabilityDispatcher gatherCapabilities(AttachCapabilitiesEvent<?> event,  @Nullable  @Nullable ICapabilityProvider parent)`
- `public static boolean fireSleepingLocationCheck(LivingEntity player,  BlockPos sleepingLocation)`
- `public static boolean onSleepingTimeCheck(Player player,  Optional<BlockPos> sleepingLocation)`
- `public static InteractionResultHolder<ItemStack> onArrowNock(ItemStack item,  Level level,  Player player,  InteractionHand hand,  boolean hasAmmo)`
- `public static int onArrowLoose(ItemStack stack,  Level level,  Player player,  int charge,  boolean hasAmmo)`
- `public static ProjectileImpactEvent.ImpactResult onProjectileImpactResult(Projectile projectile,  HitResult ray)`
- `public static boolean onProjectileImpact(Projectile projectile,  HitResult ray)`
- `@Nullable public static @Nullable LootTable onLoadLootTable(ResourceLocation name,  LootTable table)`
- `public static boolean canCreateFluidSource(Level level,  BlockPos pos,  BlockState state,  boolean def)`
- `public static Optional<PortalShape> onTrySpawnPortal(LevelAccessor level,  BlockPos pos,  Optional<PortalShape> size)`
- `public static int onEnchantmentLevelSet(Level level,  BlockPos pos,  int enchantRow,  int power,  ItemStack itemStack,  int enchantmentLevel)`
- `public static boolean onEntityDestroyBlock(LivingEntity entity,  BlockPos pos,  BlockState state)`
- `public static boolean getMobGriefingEvent(Level level,  @Nullable  @Nullable Entity entity)`
- `public static SaplingGrowTreeEvent blockGrowFeature(LevelAccessor level,  RandomSource randomSource,  BlockPos pos,  @Nullable  @Nullable Holder<ConfiguredFeature<?,?>> holder)`
- `public static BlockState alterGround(LevelSimulatedReader level,  RandomSource random,  BlockPos pos,  BlockState altered)`
- `public static void fireChunkTicketLevelUpdated(ServerLevel level,  long chunkPos,  int oldTicketLevel,  int newTicketLevel,  @Nullable  @Nullable ChunkHolder chunkHolder)`
- `public static void fireChunkWatch(ServerPlayer entity,  LevelChunk chunk,  ServerLevel level)`
- `public static void fireChunkUnWatch(ServerPlayer entity,  ChunkPos chunkpos,  ServerLevel level)`
- `public static boolean onPistonMovePre(Level level,  BlockPos pos,  Direction direction,  boolean extending)`
- `public static boolean onPistonMovePost(Level level,  BlockPos pos,  Direction direction,  boolean extending)`
- `public static long onSleepFinished(ServerLevel level,  long newTime,  long minTime)`
- `public static List<PreparableReloadListener> onResourceReload(ReloadableServerResources serverResources,  RegistryAccess registryAccess)`
- `public static void onCommandRegister(com.mojang.brigadier.CommandDispatcher<CommandSourceStack> dispatcher,  Commands.CommandSelection environment,  CommandBuildContext context)`
- `public static boolean canLivingConvert(LivingEntity entity,  EntityType<? extends LivingEntity> outcome,  Consumer<Integer> timer)`
- `public static void onLivingConvert(LivingEntity entity,  LivingEntity outcome)`
- `public static EntityTeleportEvent.TeleportCommand onEntityTeleportCommand(Entity entity,  double targetX,  double targetY,  double targetZ)`
- `public static EntityTeleportEvent.SpreadPlayersCommand onEntityTeleportSpreadPlayersCommand(Entity entity,  double targetX,  double targetY,  double targetZ)`
- `public static EntityTeleportEvent.EnderEntity onEnderTeleport(LivingEntity entity,  double targetX,  double targetY,  double targetZ)`
- `public static EntityTeleportEvent.EnderPearl onEnderPearlLand(ServerPlayer entity,  double targetX,  double targetY,  double targetZ,  ThrownEnderpearl pearlEntity,  float attackDamage,  HitResult hitResult)`
- `public static EntityTeleportEvent.ChorusFruit onChorusFruitTeleport(LivingEntity entity,  double targetX,  double targetY,  double targetZ)`
- `public static boolean onPermissionChanged(com.mojang.authlib.GameProfile gameProfile,  int newLevel,  PlayerList playerList)`
- `public static void onPlayerChangedDimension(Player player,  ResourceKey<Level> fromDim,  ResourceKey<Level> toDim)`
- `public static void firePlayerLoggedIn(Player player)`
- `public static void firePlayerLoggedOut(Player player)`
- `public static void firePlayerRespawnEvent(Player player,  boolean endConquered)`
- `public static void firePlayerItemPickupEvent(Player player,  ItemEntity item,  ItemStack clone)`
- `public static void firePlayerCraftingEvent(Player player,  ItemStack crafted,  Container craftMatrix)`
- `public static void firePlayerSmeltedEvent(Player player,  ItemStack smelted)`
- `public static void onRenderTickStart(float timer)`
- `public static void onRenderTickEnd(float timer)`
- `public static void onPlayerPreTick(Player player)`
- `public static void onPlayerPostTick(Player player)`
- `public static void onPreLevelTick(Level level,  BooleanSupplier haveTime)`
- `public static void onPostLevelTick(Level level,  BooleanSupplier haveTime)`
- `public static void onPreClientTick()`
- `public static void onPostClientTick()`
- `public static void onPreServerTick(BooleanSupplier haveTime,  MinecraftServer server)`
- `public static void onPostServerTick(BooleanSupplier haveTime,  MinecraftServer server)`
- `public static WeightedRandomList<MobSpawnSettings.SpawnerData> getPotentialSpawns(LevelAccessor level,  MobCategory category,  BlockPos pos,  WeightedRandomList<MobSpawnSettings.SpawnerData> oldList)`
- `public static void onAdvancementEarned(Player player,  AdvancementHolder holder)`
- `public static void onAdvancementGrant(Player player,  AdvancementHolder holder,  AdvancementProgress advancementProgress,  String criterion)`
- `public static void onAdvancementRevoke(Player player,  AdvancementHolder holder,  AdvancementProgress advancementProgress,  String criterion)`
- `public static void onEntityConstructing(Entity entity)`
- `public static void onPlayerOpenContainer(ServerPlayer player,  AbstractContainerMenu menu)`
- `public static void onPlayerCloseContainer(ServerPlayer player,  AbstractContainerMenu menu)`
- `public static boolean onTravelToDimension(Entity entity,  ResourceKey<Level> dimension)`
- `public static void onChunkUnload(ChunkAccess chunk)`
- `public static void onChunkLoad(ChunkAccess chunk,  boolean newChunk)`
- `public static void onChunkDataSave(ChunkAccess chunk,  LevelAccessor world,  CompoundTag data)`
- `public static void onGameShuttingDown()`
- `public static void gatherLoginConfigTasks(Connection connection,  Consumer<ConfigurationTask> add)`
- `public static void onConnectionStart(Connection connection)`
- `public static void onChannelRegistrationChange(Connection connection,  ChannelRegistrationChangeEvent.Type changeType,  HashSet<ResourceLocation> changed)`
- `public static LivingSwapItemsEvent.Hands onLivingSwapHandItems(LivingEntity entity)`
- `public static ShieldBlockEvent onShieldBlock(LivingEntity blocker,  DamageSource source,  float blocked)`
- `public static void onEntityEnterSection(Entity entity,  long packedOldPos,  long packedNewPos)`
- `public static LivingFallEvent onLivingFall(LivingEntity entity,  float distance,  float damageMultiplier)`

## GameShuttingDownEvent

*class* `net.minecraftforge.event.GameShuttingDownEvent`

A simple marker event that notifies when the game is about to close.
 Fires once on the physical client and physical server.
 Does not fire for the Integrated Server on a physical Client.

 On the client, the GL Context is still valid when the event is fired.
 Fired on the FORGE event bus.

## GrindstoneEvent

*class* `net.minecraftforge.event.GrindstoneEvent`

### Fields
- `private final ItemStack top`
- `private final ItemStack bottom`
- `private int xp`

### Methods
- `public ItemStack getTopItem()`
  - returns: The item in the top input grindstone slot.
- `public ItemStack getBottomItem()`
  - returns: The item in the bottom input grindstone slot.
- `public int getXp()`
  This is the experience amount determined by the event. It will be -1 unless setXp(int) is called.
  - returns: The experience amount given to the player.
- `public void setXp(int xp)`
  Sets the experience amount.
  - param: xp - The experience amount given to the player.

## GrindstoneEvent.OnPlaceItem

*class* `net.minecraftforge.event.GrindstoneEvent.OnPlaceItem`

This event is Cancelable

 GrindstoneEvent.OnPlaceItem is fired when the inputs to a grindstone are changed.

 The following rules apply:

 If the event is canceled, vanilla behavior will not run, and the output will be empty.
 If the event is not canceled

 and the output is empty, the output will be determined by vanilla.
 and the output is not empty, the output will be set, without running vanilla behavior.

 Vanilla XP calculation logic will be used unless all of the following criterias are met:

 the amount of experience is greater than or equal to 0;
 the event is not canceled;
 the output is not empty.

Enclosing class: GrindstoneEvent

### Fields
- `private ItemStack output`

### Methods
- `public ItemStack getOutput()`
  This is the output as determined by the event, not by the vanilla behavior between these two items.
  
   If you are the first receiver of this event, it is guaranteed to be empty.
  
   It will only be non-empty if changed by an event handler.
  
   If this event is cancelled, this output stack is discarded.
  - returns: The item to set in the output grindstone slot.
- `public void setOutput(ItemStack output)`
  Sets the output slot to a specific itemstack.
  - param: output - The stack to change the output to.

### Inherited methods
- from `net.minecraftforge.event.GrindstoneEvent`: `getBottomItem`, `getTopItem`, `getXp`, `setXp`

## GrindstoneEvent.OnTakeItem

*class* `net.minecraftforge.event.GrindstoneEvent.OnTakeItem`

This event is Cancelable

 GrindstoneEvent.OnTakeItem is fired when the output in a grindstone are is taken.

 It is called from GrindstoneMenu(int, Inventory).

 If the event is canceled, vanilla behavior will not run, and no inputs will be consumed.

 if the amount of experience is larger than or equal 0, the vanilla behavior for calculating experience will not run.

Enclosing class: GrindstoneEvent

### Fields
- `private ItemStack newTop`
- `private ItemStack newBottom`

### Methods
- `public ItemStack getNewTopItem()`
  - returns: The item in that will be in the top input grindstone slot after the event.
- `public ItemStack getNewBottomItem()`
  - returns: The item in that will be in the bottom input grindstone slot after the event.
- `public void setNewTopItem(ItemStack newTop)`
  Sets the itemstack in the top slot.
  - param: newTop -
- `public void setNewBottomItem(ItemStack newBottom)`
  Sets the itemstack in the bottom slot.
  - param: newBottom -
- `public int getXp()`
  This is the experience amount that will be returned by the event.
  - returns: The experience amount given to the player.

### Inherited methods
- from `net.minecraftforge.event.GrindstoneEvent`: `getBottomItem`, `getTopItem`, `setXp`

## ItemAttributeModifierEvent

*class* `net.minecraftforge.event.ItemAttributeModifierEvent`

This event is fired when the attributes for an ItemStack are being calculated.
 Attributes are calculated on the server when equipping and unequipping an item to add and remove attributes respectively, both must be consistent.
 Attributes are calculated on the client when rendering an item's tooltip to show relevant attributes.

 Note that this event is fired regardless of if the stack has NBT overriding attributes or not. If your attribute should be
 ignored when attributes are overridden, you can check for the presence of the AttributeModifiers tag.

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final ItemStack stack`
- `private final EquipmentSlot slotType`
- `private final com.google.common.collect.Multimap<Attribute,AttributeModifier> originalModifiers`
- `private com.google.common.collect.Multimap<Attribute,AttributeModifier> unmodifiableModifiers`
- `@Nullable private @Nullable com.google.common.collect.Multimap<Attribute,AttributeModifier> modifiableModifiers`

### Methods
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getModifiers()`
  Returns an unmodifiable view of the attribute multimap. Use other methods from this event to modify the attributes map.
   Note that adding attributes based on existing attributes may lead to inconsistent results between the tooltip (client)
   and the actual attributes (server) if the listener order is different. Using getOriginalModifiers() instead will give more consistent results.
- `public com.google.common.collect.Multimap<Attribute,AttributeModifier> getOriginalModifiers()`
  Returns the attribute map before any changes from other event listeners was made.
- `private com.google.common.collect.Multimap<Attribute,AttributeModifier> getModifiableMap()`
  Gets a modifiable map instance, creating it if the current map is currently unmodifiable
- `public boolean addModifier(Attribute attribute,  AttributeModifier modifier)`
  Adds a new attribute modifier to the given stack.
   Modifier must have a consistent UUID for consistency between equipping and unequipping items.
   Modifier name should clearly identify the mod that added the modifier.
  - param: attribute - Attribute
  - param: modifier - Modifier instance.
  - returns: True if the attribute was added, false if it was already present
- `public boolean removeModifier(Attribute attribute,  AttributeModifier modifier)`
  Removes a single modifier for the given attribute
  - param: attribute - Attribute
  - param: modifier - Modifier instance
  - returns: True if an attribute was removed, false if no change
- `public Collection<AttributeModifier> removeAttribute(Attribute attribute)`
  Removes all modifiers for the given attribute
  - param: attribute - Attribute
  - returns: Collection of removed modifiers
- `public void clearModifiers()`
  Removes all modifiers for all attributes
- `public EquipmentSlot getSlotType()`
  Gets the slot containing this stack
- `public ItemStack getItemStack()`
  Gets the item stack instance

## ItemStackedOnOtherEvent

*class* `net.minecraftforge.event.ItemStackedOnOtherEvent`

This event provides the functionality of the pair of functions used for the Bundle, in one event:

 Item.overrideOtherStackedOnMe(ItemStack, ItemStack, Slot, ClickAction, Player, SlotAccess)
 Item.overrideStackedOnOther(ItemStack, Slot, ClickAction, Player)

 This event is fired before either of the above are called, when a carried item is clicked on top of another in a GUI slot.
 This event (and items stacking on others in general) is fired on both sides, but only on the client in the creative menu.
 Practically, that means that listeners of this event should require the player to be in survival mode if using capabilities that are not synced.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the container's logic halts, the carried item and the slot will not be swapped, and handling is assumed to have been done by the mod.
 This also means that the two vanilla checks described above will not be called.

### Fields
- `private final ItemStack carriedItem`
- `private final ItemStack stackedOnItem`
- `private final Slot slot`
- `private final ClickAction action`
- `private final Player player`
- `private final SlotAccess carriedSlotAccess`

### Methods
- `public ItemStack getCarriedItem()`
  Returns the stack being carried by the mouse. This may be empty!
  - returns: the stack being carried by the mouse
- `public ItemStack getStackedOnItem()`
  Returns the stack currently in the slot being clicked on. This may be empty!
  - returns: the stack currently in the slot being clicked on
- `public Slot getSlot()`
  Returns the slot being clicked on.
  - returns: the slot being clicked on
- `public ClickAction getClickAction()`
  Returns the click action being used. By default ClickAction.PRIMARY corresponds to left-click, and ClickAction.SECONDARY is right-click.
  - returns: the click action being used
- `public Player getPlayer()`
  Returns the player doing the item swap attempt.
  - returns: the player doing the item swap attempt
- `public SlotAccess getCarriedSlotAccess()`
  Returns a fake slot allowing the listener to see and change what item is being carried.
  - returns: a fake slot allowing the listener to see and change what item is being carried

## LootTableLoadEvent

*class* `net.minecraftforge.event.LootTableLoadEvent`

Fired when a LootTable is loaded from JSON.
 Loot tables loaded from world save datapacks will not fire this event as they are considered user configuration files.
 This event is fired whenever server resources are loaded or reloaded.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the loot table will be made empty.

 This event is fired on the main Forge event bus,
 only on the logical server.

### Fields
- `private final ResourceLocation name`
- `private LootTable table`

### Methods
- `public ResourceLocation getName()`
- `public LootTable getTable()`
- `public void setTable(LootTable table)`

## ModMismatchEvent

*class* `net.minecraftforge.event.ModMismatchEvent`

Fires when the mod loader is in the process of loading a world that was last saved
 with mod versions that differ from the currently-loaded versions. This can be used to
 enqueue work to run at a later point, such as multi-file migration of data.

 Note that level and world information has not yet been fully loaded; as such, it is
 unsafe to access server or level information during handling of this event.

 This event is not cancellable, and does not have a result.
 This event is fired on the mod-specific event bus,
 on both logical sides.

### Fields
- `private final LevelStorageSource.LevelDirectory levelDirectory`
  The level being loaded. Useful for things like DimensionDataStorage
   to manage multiple files changing between mod versions.
- `private final HashMap<String,ModMismatchEvent.MismatchedVersionInfo> versionDifferences`
  A set of previously-known versions that have mismatched with the currently loaded versions.
- `private final HashMap<String,ModContainer> resolved`
  Which mods have specified that they have handled version mismatches.

### Methods
- `public LevelStorageSource.LevelDirectory getLevelDirectory()`
  Gets the current level directory for the world being loaded.
   Can be used for file operations and manual modification of mod files before world load.
- `@Nullable public @Nullable org.apache.maven.artifact.versioning.ArtifactVersion getPreviousVersion(String modId)`
  Fetch a previous version of a given mod, if it has been mismatched.
  - param: modId - The mod to fetch previous version for.
  - returns: The previously known mod version, or Optional.empty() if unknown/not found.
- `@Nullable public @Nullable org.apache.maven.artifact.versioning.ArtifactVersion getCurrentVersion(String modid)`
- `public void markResolved(String modId)`
  Marks the mod version mismatch as having been resolved safely by the current mod.
- `public boolean wasResolved(String modId)`
  Fetches the status of a mod mismatch handling state.
- `public Optional<ModMismatchEvent.MismatchedVersionInfo> getVersionDifference(String modid)`
- `public Optional<ModContainer> getResolver(String modid)`
- `public boolean anyUnresolved()`
- `public Stream<ModMismatchEvent.MismatchResolutionResult> getUnresolved()`
- `public boolean anyResolved()`
- `public Stream<ModMismatchEvent.MismatchResolutionResult> getResolved()`

## ModMismatchEvent.MismatchedVersionInfo

*record* `net.minecraftforge.event.ModMismatchEvent.MismatchedVersionInfo`

Enclosing class: ModMismatchEvent

### Fields
- `private final org.apache.maven.artifact.versioning.ArtifactVersion oldVersion`
  The field for the oldVersion record component.
- `@Nullable private final @Nullable org.apache.maven.artifact.versioning.ArtifactVersion newVersion`
  The field for the newVersion record component.

### Methods
- `public boolean isMissing()`
- `public boolean wasUpgrade()`
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
- `public org.apache.maven.artifact.versioning.ArtifactVersion oldVersion()`
  Returns the value of the oldVersion record component.
  - returns: the value of the oldVersion record component
- `@Nullable public @Nullable org.apache.maven.artifact.versioning.ArtifactVersion newVersion()`
  Returns the value of the newVersion record component.
  - returns: the value of the newVersion record component

## ModMismatchEvent.MismatchResolutionResult

*record* `net.minecraftforge.event.ModMismatchEvent.MismatchResolutionResult`

Enclosing class: ModMismatchEvent

### Fields
- `private final String modid`
  The field for the modid record component.
- `private final ModMismatchEvent.MismatchedVersionInfo versionDifference`
  The field for the versionDifference record component.
- `@Nullable private final @Nullable ModContainer resolver`
  The field for the resolver record component.

### Methods
- `public boolean wasSelfResolved()`
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
- `public String modid()`
  Returns the value of the modid record component.
  - returns: the value of the modid record component
- `public ModMismatchEvent.MismatchedVersionInfo versionDifference()`
  Returns the value of the versionDifference record component.
  - returns: the value of the versionDifference record component
- `@Nullable public @Nullable ModContainer resolver()`
  Returns the value of the resolver record component.
  - returns: the value of the resolver record component

## OnDatapackSyncEvent

*class* `net.minecraftforge.event.OnDatapackSyncEvent`

Fires when a player joins the server or when the reload command is ran,
 before tags and crafting recipes are sent to the client. Send datapack data
 to clients when this event fires.

### Fields
- `private final PlayerList playerList`
- `@Nullable private final @Nullable ServerPlayer player`

### Methods
- `public PlayerList getPlayerList()`
  - returns: The server's player list to get a view of all players.
- `@Nullable public @Nullable ServerPlayer getPlayer()`
  - returns: The player to sync datapacks to. Null when syncing for all players,
 such as when the reload command runs.

## PlayLevelSoundEvent

*class* `net.minecraftforge.event.PlayLevelSoundEvent`

PlayLevelSoundEvent is fired when a sound is played on a Level.
 This event is fired from Level.playSound(net.minecraft.world.entity.Entity, net.minecraft.core.BlockPos, net.minecraft.sounds.SoundEvent, net.minecraft.sounds.SoundSource, float, float), Level.playSeededSound(net.minecraft.world.entity.player.Player, double, double, double, net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>, net.minecraft.sounds.SoundSource, float, float, long), and LocalPlayer.playSound(net.minecraft.sounds.SoundEvent, float, float).

 getLevel() contains the level the sound is being played in.
 getSound() contains the sound event to be played.
 getOriginalVolume() contains the original volume for the sound to be played at.
 getOriginalPitch() contains the original pitch for the sound to be played at.
 getNewVolume() contains the volume the sound will be played at.
 getNewPitch() contains the pitch the sound will be played at.

 This event is cancelable.
 If this event is canceled, the sound is not played.

 This event does not have a result.

 This event is fired on the MinecraftForge.EVENT_BUS.

### Fields
- `private final Level level`
- `private final float originalVolume`
- `private final float originalPitch`
- `private Holder<SoundEvent> sound`
- `private SoundSource source`
- `private float newVolume`
- `private float newPitch`

### Methods
- `@NotNull public @NotNull Level getLevel()`
  Returns the level the sound is being played in.
  - returns: the level the sound is being played in
- `@Nullable public @Nullable Holder<SoundEvent> getSound()`
  Returns the sound event to be played.
  - returns: the sound event to be played
- `public void setSound(@Nullable  @Nullable Holder<SoundEvent> sound)`
  Sets the sound event to be played.
- `@NotNull public @NotNull SoundSource getSource()`
  Returns the sound source.
  - returns: the sound source
- `public void setSource(@NotNull  @NotNull SoundSource source)`
  Sets the sound source.
- `public float getOriginalVolume()`
  Returns the original volume for the sound to be played at.
  - returns: the original volume for the sound to be played at
- `public float getOriginalPitch()`
  Returns the original pitch for the sound to be played at.
  - returns: the original pitch for the sound to be played at
- `public float getNewVolume()`
  Returns the volume the sound will be played at.
  - returns: the volume the sound will be played at
- `public void setNewVolume(float newVolume)`
  Sets the volume the sound will be played at.
- `public float getNewPitch()`
  Returns the pitch the sound will be played at.
  - returns: the pitch the sound will be played at
- `public void setNewPitch(float newPitch)`
  Sets the pitch the sound will be played at.

## PlayLevelSoundEvent.AtEntity

*class* `net.minecraftforge.event.PlayLevelSoundEvent.AtEntity`

PlayLevelSoundEvent.AtEntity is fired when a sound is played on the Level at an Entity's position.
 This event is fired from Level.playSound(net.minecraft.world.entity.Entity, net.minecraft.core.BlockPos, net.minecraft.sounds.SoundEvent, net.minecraft.sounds.SoundSource, float, float), Level.playSeededSound(net.minecraft.world.entity.player.Player, double, double, double, net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>, net.minecraft.sounds.SoundSource, float, float, long), and LocalPlayer.playSound(net.minecraft.sounds.SoundEvent, float, float).

 This event is cancelable.
 If this event is canceled, the sound is not played.

 This event does not have a result.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayLevelSoundEvent

### Fields
- `private final Entity entity`

### Methods
- `public Entity getEntity()`
  Returns the entity the sound is being played on.
  - returns: the entity the sound is being played on

### Inherited methods
- from `net.minecraftforge.event.PlayLevelSoundEvent`: `getLevel`, `getNewPitch`, `getNewVolume`, `getOriginalPitch`, `getOriginalVolume`, `getSound`, `getSource`, `setNewPitch`, `setNewVolume`, `setSound`, `setSource`

## PlayLevelSoundEvent.AtPosition

*class* `net.minecraftforge.event.PlayLevelSoundEvent.AtPosition`

PlayLevelSoundEvent.AtPosition is fired when a sound is played on the Level at a specific position.
 This event is fired from Level.playSound(net.minecraft.world.entity.Entity, net.minecraft.core.BlockPos, net.minecraft.sounds.SoundEvent, net.minecraft.sounds.SoundSource, float, float) and Level.playSeededSound(net.minecraft.world.entity.player.Player, double, double, double, net.minecraft.core.Holder<net.minecraft.sounds.SoundEvent>, net.minecraft.sounds.SoundSource, float, float, long).

 This event is cancelable.
 If this event is canceled, the sound is not played.

 This event does not have a result.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PlayLevelSoundEvent

### Fields
- `private final Vec3 position`

### Methods
- `public Vec3 getPosition()`
  Returns the position the sound is being played at.
  - returns: the position the sound is being played at

### Inherited methods
- from `net.minecraftforge.event.PlayLevelSoundEvent`: `getLevel`, `getNewPitch`, `getNewVolume`, `getOriginalPitch`, `getOriginalVolume`, `getSound`, `getSource`, `setNewPitch`, `setNewVolume`, `setSound`, `setSource`

## RegisterCommandsEvent

*class* `net.minecraftforge.event.RegisterCommandsEvent`

Commands are rebuilt whenever ReloadableServerResources is recreated.
 You can use this event to register your commands whenever the Commands class in constructed.

 The event is fired on the MinecraftForge.EVENT_BUS

### Fields
- `private final com.mojang.brigadier.CommandDispatcher<CommandSourceStack> dispatcher`
- `private final Commands.CommandSelection environment`
- `private final CommandBuildContext context`

### Methods
- `public com.mojang.brigadier.CommandDispatcher<CommandSourceStack> getDispatcher()`
  Returns the command dispatcher for registering commands to be executed on the client.
  - returns: the command dispatcher for registering commands to be executed on the client
- `public Commands.CommandSelection getCommandSelection()`
  Returns the environment the command is being registered for.
  - returns: the environment the command is being registered for
- `public CommandBuildContext getBuildContext()`
  Returns the context to build the commands for.
  - returns: the context to build the commands for

## RegisterGameTestsEvent

*class* `net.minecraftforge.event.RegisterGameTestsEvent`

Game tests are registered on client or server startup.
 It is only run once for a given instance of the game if ForgeGameTestHooks.isGametestEnabled() returns true.
 This is the preferred way to register your game tests.

 Fired on the Mod bus, see IModBusEvent.

### Fields
- `private final Set<Method> gameTestMethods`

### Methods
- `public void register(Class<?> testClass)`
  Registers an entire class to the game test registry.
   All methods annotated with GameTest or GameTestGenerator will be registered.
   If the set of enabled batches is non-empty, a method will only be registered if its
   batch is listed.
  - param: testClass - the test class to register to the game test registry
- `public void register(Method testMethod)`
  Registers a single method to the game test registry.
   The method will only be registered if it is annotated with GameTest or GameTestGenerator.
   If the set of enabled batches is non-empty, the method will only be registered if its
   batch is listed.
  - param: testMethod - the test method to register to the game test registry

## RegisterStructureConversionsEvent

*class* `net.minecraftforge.event.RegisterStructureConversionsEvent`

Fired for registering structure conversions for pre-1.18.2 worlds. This is used by StructuresBecomeConfiguredFix
 for converting old structure IDs in pre-1.18.2 worlds to their new equivalents, which can be differentiated per biome.

 By default, structures whose old ID has a namespace which is not equal to "minecraft"
 will be assumed to belong to a modded structure and will be used as the new ID. Mods may choose to register structure
 conversions for their structures, if they wish to override this default behavior.

 This event will only fire if StructuresBecomeConfiguredFix is used, as a result of converting a
 pre-1.18.2 world to the current version.

 This event is not cancelable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical server.

### Fields
- `private final Map<String,StructuresBecomeConfiguredFix.Conversion> map`

### Methods
- `public void register(String oldStructureID,  StructuresBecomeConfiguredFix.Conversion conversion)`
  Registers a conversion for a structure.
  
   A structure conversion can be of two kinds:
  
   A trivial conversion, created using StructuresBecomeConfiguredFix.Conversion.trivial(String),
   contains only the new structure ID and simply converts all mentions of the old structure ID to the new
   structure ID.
   A biome-mapped conversion, created using StructuresBecomeConfiguredFix.Conversion.biomeMapped(Map, String), contains a fallback structure ID, and a
   biome-specific conversion map. Each entry in the map is composed of a list of biome IDs and the new structure
   ID.
  
   If a structure is in a biome which exists in the map, the
   structure ID in the corresponding entry is used as the new structure ID. If there is no such biome found,
   the new structure ID will be the fallback structure ID.
  
   For example, the following registers a biome-mapped conversion for exampleStructure with the
   following logic:
  
   If the structure is within either a minecraft:desert or a minecraft:jungle biome,
   it is mapped to examplemod:deserted_structure.
   If the structure is within a minecraft:ocean biome, it is mapped to
   examplemod:flooded_structure.
   Otherwise, the structure is mapped to examplemod:structure.
  
   event.register("exampleStructure", StructuresBecomeConfiguredFix.Conversion.biomeMapped(Map.of(
   List.of("minecraft:desert", "minecraft:jungle"), "examplemod:deserted_structure",
   List.of("minecraft:ocean"), "examplemod:flooded_structure"
   ), "examplemod:structure"));
  - param: oldStructureID - the old structure ID, in all lowercase
  - param: conversion - the conversion data
  - throws: NullPointerException - if the old structure ID, the conversion data, or the fallback structure ID in
 the conversion data is null
  - throws: IllegalArgumentException - if the old structure ID is not in full lowercase, or if a conversion for that
 structure ID has already been registered previously

## ServerChatEvent

*class* `net.minecraftforge.event.ServerChatEvent`

This event is fired whenever a ServerboundChatPacket is received from a client
 who has submitted their chat message.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the message will not be sent to clients.

 This event is fired on the main Forge event bus,
 only on the logical server.

### Fields
- `private final ServerPlayer player`
- `private final String username`
- `private final String rawText`
- `private Component message`

### Methods
- `public ServerPlayer getPlayer()`
  Returns the player who initiated the chat action.
  - returns: the player who initiated the chat action
- `public String getUsername()`
  Returns the username of the player who initiated the chat action.
  - returns: the username of the player who initiated the chat action
- `public String getRawText()`
  Returns the original raw text of the player chat message.
  - returns: the original raw text of the player chat message
- `public void setMessage(Component message)`
  Set the message to be sent to the relevant clients.
- `public Component getMessage()`
  Returns the message that will be sent to the relevant clients, if the event is not cancelled.
  - returns: the message that will be sent to the relevant clients, if the event is not cancelled

## TagsUpdatedEvent

*class* `net.minecraftforge.event.TagsUpdatedEvent`

Fired when tags are updated on either server or client. This event can be used to refresh data that depends on tags.

### Fields
- `private final RegistryAccess registryAccess`
- `private final TagsUpdatedEvent.UpdateCause updateCause`
- `private final boolean integratedServer`

### Methods
- `public RegistryAccess getRegistryAccess()`
  - returns: The dynamic registries that have had their tags rebound.
- `public TagsUpdatedEvent.UpdateCause getUpdateCause()`
  - returns: the cause for this tag update
- `public boolean shouldUpdateStaticData()`
  Whether static data (which in single player is shared between server and client thread) should be updated as a
   result of this event. Effectively this means that in single player only the server-side updates this data.

## TickEvent

*class* `net.minecraftforge.event.TickEvent`

### Fields
- `public final TickEvent.Type type`
- `public final LogicalSide side`
- `public final TickEvent.Phase phase`

## TickEvent.ClientTickEvent

*class* `net.minecraftforge.event.TickEvent.ClientTickEvent`

Enclosing class: TickEvent

### Inherited fields
- from `net.minecraftforge.event.TickEvent`: `phase`, `side`, `type`

## TickEvent.LevelTickEvent

*class* `net.minecraftforge.event.TickEvent.LevelTickEvent`

Enclosing class: TickEvent

### Fields
- `public final Level level`
- `private final BooleanSupplier haveTime`

### Inherited fields
- from `net.minecraftforge.event.TickEvent`: `phase`, `side`, `type`

### Methods
- `public boolean haveTime()`
  - returns: true whether the server has enough time to perform any
 additional tasks (usually IO related) during the current tick,
 otherwise false

## TickEvent.PlayerTickEvent

*class* `net.minecraftforge.event.TickEvent.PlayerTickEvent`

Enclosing class: TickEvent

### Fields
- `public final Player player`

### Inherited fields
- from `net.minecraftforge.event.TickEvent`: `phase`, `side`, `type`

## TickEvent.RenderTickEvent

*class* `net.minecraftforge.event.TickEvent.RenderTickEvent`

Enclosing class: TickEvent

### Fields
- `public final float renderTickTime`

### Inherited fields
- from `net.minecraftforge.event.TickEvent`: `phase`, `side`, `type`

## TickEvent.ServerTickEvent

*class* `net.minecraftforge.event.TickEvent.ServerTickEvent`

Enclosing class: TickEvent

### Fields
- `private final BooleanSupplier haveTime`
- `private final MinecraftServer server`

### Inherited fields
- from `net.minecraftforge.event.TickEvent`: `phase`, `side`, `type`

### Methods
- `public boolean haveTime()`
  - returns: true whether the server has enough time to perform any
 additional tasks (usually IO related) during the current tick,
 otherwise false
- `public MinecraftServer getServer()`
  Returns the server instance.
  - returns: the server instance

## VanillaGameEvent

*class* `net.minecraftforge.event.VanillaGameEvent`

VanillaGameEvent is fired on the server whenever one of Vanilla's GameEvents fire.

 This allows for listening to Vanilla's events in a more structured and global way that is not tied to needing a block entity listener.

 This event is fired on the MinecraftForge.EVENT_BUS.

 Cancel this event to prevent Vanilla from posting the GameEvent to all nearby GameEventListeners.

### Fields
- `private final Level level`
- `private final GameEvent vanillaEvent`
- `private final Vec3 position`
- `private final GameEvent.Context context`

### Methods
- `public Level getLevel()`
  - returns: The level the Vanilla GameEvent occurred.
- `@Nullable public @Nullable Entity getCause()`
  - returns: The entity that was the source or "cause" of the GameEvent.
- `public GameEvent getVanillaEvent()`
  - returns: The Vanilla event.
- `public Vec3 getEventPosition()`
  - returns: The position the event took place at.
- `public GameEvent.Context getContext()`
  - returns: the context of the vanilla event
