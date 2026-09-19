# net.minecraftforge.event

- [AnvilUpdateEvent](#anvilupdateevent)
- [AttachCapabilitiesEvent](#attachcapabilitiesevent)
- [CommandEvent](#commandevent)
- [DifficultyChangeEvent](#difficultychangeevent)
- [ForgeEventFactory](#forgeeventfactory)
- [GameRuleChangeEvent](#gamerulechangeevent)
- [LootTableLoadEvent](#loottableloadevent)
- [RegistryEvent.MissingMappings.Action](#registryevent.missingmappings.action)
- [RegistryEvent.MissingMappings.Mapping>](#registryevent.missingmappings.mapping)
- [RegistryEvent.MissingMappings>](#registryevent.missingmappings)
- [RegistryEvent.NewRegistry](#registryevent.newregistry)
- [RegistryEvent.Register>](#registryevent.register)
- [RegistryEvent>](#registryevent)
- [ServerChatEvent](#serverchatevent)
## AnvilUpdateEvent

*class* `net.minecraftforge.event.AnvilUpdateEvent`

AnvilUpdateEvent is fired when a player places items in both the left and right slots of a anvil.
 If the event is canceled, vanilla behavior will not run, and the output will be set to null.
 If the event is not canceled, but the output is not null, it will set the output and not run vanilla behavior.
 if the output is null, and the event is not canceled, vanilla behavior will execute.

### Methods
- `public ItemStack getLeft()`
- `public ItemStack getRight()`
- `public java.lang.String getName()`
- `public ItemStack getOutput()`
- `public void setOutput(ItemStack output)`
- `public int getCost()`
- `public void setCost(int cost)`
- `public int getMaterialCost()`
- `public void setMaterialCost(int materialCost)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## AttachCapabilitiesEvent

*class* `net.minecraftforge.event.AttachCapabilitiesEvent`

Fired whenever an object with Capabilities support {currently TileEntity/Item/Entity)
 is created. Allowing for the attachment of arbitrary capability providers.

 Please note that as this is fired for ALL object creations efficient code is recommended.
 And if possible use one of the sub-classes to filter your intended objects.

All Implemented Interfaces: IGenericEvent<T>

### Methods
- `public T getObject()`
  Retrieves the object that is being created, Not much state is set.
- `public void addCapability(ResourceLocation key,  ICapabilityProvider cap)`
  Adds a capability to be attached to this object.
   Keys MUST be unique, it is suggested that you set the domain to your mod ID.
   If the capability is an instance of INBTSerializable, this key will be used when serializing this capability.
  - param: key - The name of owner of this capability provider.
  - param: cap - The capability provider
- `public java.util.Map<ResourceLocation,ICapabilityProvider> getCapabilities()`
  A unmodifiable view of the capabilities that will be attached to this object.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.GenericEvent`: `getGenericType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## CommandEvent

*class* `net.minecraftforge.event.CommandEvent`

CommandEvent is fired whenever a command is scheduled to be executed.
 This event is fired during the invocation of CommandHandler.executeCommand(ICommandSender, String)
 and ClientCommandHandler.executeCommand(ICommandSender, String).

 command contains the instance of ICommand which is representative of the currently executing command.

 sender contains the instance of ICommandSender for the given command sender.

 parameters contains the arguments passed for the command execution.

 exception begins null, but can be populated with an exception to be thrown within the command.

 This event is Cancelable.

 If the event is canceled, the execution of the command does not occur.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public ICommand getCommand()`
- `public ICommandSender getSender()`
- `public java.lang.String[] getParameters()`
- `public void setParameters(java.lang.String[] parameters)`
- `public java.lang.Throwable getException()`
- `public void setException(java.lang.Throwable exception)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DifficultyChangeEvent

*class* `net.minecraftforge.event.DifficultyChangeEvent`

DifficultyChangeEvent is fired when difficulty is changing.

 This event is fired via the ForgeHooks.onDifficultyChange(EnumDifficulty, EnumDifficulty).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public EnumDifficulty getDifficulty()`
- `public EnumDifficulty getOldDifficulty()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ForgeEventFactory

*class* `net.minecraftforge.event.ForgeEventFactory`

### Methods
- `public static BlockEvent.EntityMultiPlaceEvent onMultiBlockPlace(Entity entity,  java.util.List<BlockSnapshot> blockSnapshots,  EnumFacing direction)`
- `public static BlockEvent.MultiPlaceEvent onPlayerMultiBlockPlace(EntityPlayer player,  java.util.List<BlockSnapshot> blockSnapshots,  EnumFacing direction,  EnumHand hand)`
- `public static BlockEvent.EntityPlaceEvent onBlockPlace(Entity entity,  BlockSnapshot blockSnapshot,  EnumFacing direction)`
- `public static BlockEvent.PlaceEvent onPlayerBlockPlace(EntityPlayer player,  BlockSnapshot blockSnapshot,  EnumFacing direction,  EnumHand hand)`
- `public static BlockEvent.NeighborNotifyEvent onNeighborNotify(World world,  BlockPos pos,  IBlockState state,  java.util.EnumSet<EnumFacing> notifiedSides,  boolean forceRedstoneUpdate)`
- `public static boolean doPlayerHarvestCheck(EntityPlayer player,  IBlockState state,  boolean success)`
- `public static float getBreakSpeed(EntityPlayer player,  IBlockState state,  float original,  BlockPos pos)`
- `public static void onPlayerDestroyItem(EntityPlayer player,  ItemStack stack,  EnumHand hand)`
- `@Deprecated public static Event.Result canEntitySpawn(EntityLiving entity,  World world,  float x,  float y,  float z)` (deprecated)
  Deprecated. use canEntitySpawn(EntityLiving, World, float, float, float, MobSpawnerBaseLogic) instead
- `@Deprecated public static Event.Result canEntitySpawn(EntityLiving entity,  World world,  float x,  float y,  float z,  boolean isSpawner)` (deprecated)
  Deprecated. use canEntitySpawn(EntityLiving, World, float, float, float, MobSpawnerBaseLogic) instead
- `public static Event.Result canEntitySpawn(EntityLiving entity,  World world,  float x,  float y,  float z,  MobSpawnerBaseLogic spawner)`
- `public static boolean canEntitySpawnSpawner(EntityLiving entity,  World world,  float x,  float y,  float z,  MobSpawnerBaseLogic spawner)`
- `@Deprecated public static boolean canEntitySpawnSpawner(EntityLiving entity,  World world,  float x,  float y,  float z)` (deprecated)
  Deprecated. Use canEntitySpawnSpawner(EntityLiving, World, float, float, float, MobSpawnerBaseLogic)
- `@Deprecated public static boolean doSpecialSpawn(EntityLiving entity,  World world,  float x,  float y,  float z)` (deprecated)
  Deprecated. Use canEntitySpawnSpawner(EntityLiving, World, float, float, float, MobSpawnerBaseLogic)
- `public static boolean doSpecialSpawn(EntityLiving entity,  World world,  float x,  float y,  float z,  MobSpawnerBaseLogic spawner)`
- `public static Event.Result canEntityDespawn(EntityLiving entity)`
- `public static int getItemBurnTime(ItemStack itemStack)`
- `public static int getExperienceDrop(EntityLivingBase entity,  EntityPlayer attackingPlayer,  int originalExperience)`
- `public static java.util.List<Biome.SpawnListEntry> getPotentialSpawns(WorldServer world,  EnumCreatureType type,  BlockPos pos,  java.util.List<Biome.SpawnListEntry> oldList)`
- `public static int getMaxSpawnPackSize(EntityLiving entity)`
- `public static java.lang.String getPlayerDisplayName(EntityPlayer player,  java.lang.String username)`
- `public static float fireBlockHarvesting(java.util.List<ItemStack> drops,  World world,  BlockPos pos,  IBlockState state,  int fortune,  float dropChance,  boolean silkTouch,  EntityPlayer player)`
- `public static IBlockState fireFluidPlaceBlockEvent(World world,  BlockPos pos,  BlockPos liquidPos,  IBlockState state)`
- `public static ItemTooltipEvent onItemTooltip(ItemStack itemStack,  EntityPlayer entityPlayer,  java.util.List<java.lang.String> toolTip,  ITooltipFlag flags)`
- `public static ZombieEvent.SummonAidEvent fireZombieSummonAid(EntityZombie zombie,  World world,  int x,  int y,  int z,  EntityLivingBase attacker,  double summonChance)`
- `public static boolean onEntityStruckByLightning(Entity entity,  EntityLightningBolt bolt)`
- `public static int onItemUseStart(EntityLivingBase entity,  ItemStack item,  int duration)`
- `public static int onItemUseTick(EntityLivingBase entity,  ItemStack item,  int duration)`
- `public static boolean onUseItemStop(EntityLivingBase entity,  ItemStack item,  int duration)`
- `public static ItemStack onItemUseFinish(EntityLivingBase entity,  ItemStack item,  int duration,  ItemStack result)`
- `public static void onStartEntityTracking(Entity entity,  EntityPlayer player)`
- `public static void onStopEntityTracking(Entity entity,  EntityPlayer player)`
- `public static void firePlayerLoadingEvent(EntityPlayer player,  java.io.File playerDirectory,  java.lang.String uuidString)`
- `public static void firePlayerSavingEvent(EntityPlayer player,  java.io.File playerDirectory,  java.lang.String uuidString)`
- `public static void firePlayerLoadingEvent(EntityPlayer player,  IPlayerFileData playerFileData,  java.lang.String uuidString)`
- `public static ITextComponent onClientChat(ChatType type,  ITextComponent message)`
- `public static java.lang.String onClientSendMessage(java.lang.String message)`
- `public static int onHoeUse(ItemStack stack,  EntityPlayer player,  World worldIn,  BlockPos pos)`
- `public static int onApplyBonemeal(EntityPlayer player,  World world,  BlockPos pos,  IBlockState state,  ItemStack stack,  EnumHand hand)`
- `public static ActionResult<ItemStack> onBucketUse(EntityPlayer player,  World world,  ItemStack stack,  RayTraceResult target)`
- `public static boolean canEntityUpdate(Entity entity)`
- `public static PlaySoundAtEntityEvent onPlaySoundAtEntity(Entity entity,  SoundEvent name,  SoundCategory category,  float volume,  float pitch)`
- `public static int onItemExpire(EntityItem entity,  ItemStack item)`
- `public static int onItemPickup(EntityItem entityItem,  EntityPlayer player)`
- `public static void onPlayerDrops(EntityPlayer player,  DamageSource cause,  java.util.List<EntityItem> capturedDrops,  boolean recentlyHit)`
- `public static boolean canMountEntity(Entity entityMounting,  Entity entityBeingMounted,  boolean isMounting)`
- `public static boolean onAnimalTame(EntityAnimal animal,  EntityPlayer tamer)`
- `public static EntityPlayer.SleepResult onPlayerSleepInBed(EntityPlayer player,  BlockPos pos)`
- `public static void onPlayerWakeup(EntityPlayer player,  boolean wakeImmediately,  boolean updateWorldFlag,  boolean setSpawn)`
- `public static void onPlayerFall(EntityPlayer player,  float distance,  float multiplier)`
- `public static boolean onPlayerSpawnSet(EntityPlayer player,  BlockPos pos,  boolean forced)`
- `public static void onPlayerClone(EntityPlayer player,  EntityPlayer oldPlayer,  boolean wasDeath)`
- `public static boolean onExplosionStart(World world,  Explosion explosion)`
- `public static void onExplosionDetonate(World world,  Explosion explosion,  java.util.List<Entity> list,  double diameter)`
- `public static boolean onCreateWorldSpawn(World world,  WorldSettings settings)`
- `public static float onLivingHeal(EntityLivingBase entity,  float amount)`
- `public static boolean onPotionAttemptBrew(NonNullList<ItemStack> stacks)`
- `public static void onPotionBrewed(NonNullList<ItemStack> brewingItemStacks)`
- `public static void onPlayerBrewedPotion(EntityPlayer player,  ItemStack stack)`
- `public static boolean renderFireOverlay(EntityPlayer player,  float renderPartialTicks)`
- `public static boolean renderWaterOverlay(EntityPlayer player,  float renderPartialTicks)`
- `public static boolean renderBlockOverlay(EntityPlayer player,  float renderPartialTicks,  RenderBlockOverlayEvent.OverlayType type,  IBlockState block,  BlockPos pos)`
- `public static CapabilityDispatcher gatherCapabilities(TileEntity tileEntity)`
- `public static CapabilityDispatcher gatherCapabilities(Entity entity)`
- `public static CapabilityDispatcher gatherCapabilities(Village village)`
- `public static CapabilityDispatcher gatherCapabilities(ItemStack stack,  ICapabilityProvider parent)`
- `public static CapabilityDispatcher gatherCapabilities(World world,  ICapabilityProvider parent)`
- `public static CapabilityDispatcher gatherCapabilities(Chunk chunk)`
- `public static boolean fireSleepingLocationCheck(EntityPlayer player,  BlockPos sleepingLocation)`
- `public static boolean fireSleepingTimeCheck(EntityPlayer player,  BlockPos sleepingLocation)`
- `public static ActionResult<ItemStack> onArrowNock(ItemStack item,  World world,  EntityPlayer player,  EnumHand hand,  boolean hasAmmo)`
- `public static int onArrowLoose(ItemStack stack,  World world,  EntityPlayer player,  int charge,  boolean hasAmmo)`
- `public static boolean onProjectileImpact(Entity entity,  RayTraceResult ray)`
- `public static boolean onProjectileImpact(EntityArrow arrow,  RayTraceResult ray)`
- `public static boolean onProjectileImpact(EntityFireball fireball,  RayTraceResult ray)`
- `public static boolean onProjectileImpact(EntityThrowable throwable,  RayTraceResult ray)`
- `public static boolean onReplaceBiomeBlocks(IChunkGenerator gen,  int x,  int z,  ChunkPrimer primer,  World world)`
- `public static void onChunkPopulate(boolean pre,  IChunkGenerator gen,  World world,  java.util.Random rand,  int x,  int z,  boolean hasVillageGenerated)`
- `public static LootTable loadLootTable(ResourceLocation name,  LootTable table,  LootTableManager lootTableManager)`
- `public static boolean canCreateFluidSource(World world,  BlockPos pos,  IBlockState state,  boolean def)`
- `public static boolean onTrySpawnPortal(World world,  BlockPos pos,  BlockPortal.Size size)`
- `public static int onEnchantmentLevelSet(World world,  BlockPos pos,  int enchantRow,  int power,  ItemStack itemStack,  int level)`
- `public static boolean onEntityDestroyBlock(EntityLivingBase entity,  BlockPos pos,  IBlockState state)`
- `public static boolean gatherCollisionBoxes(World world,  Entity entity,  AxisAlignedBB aabb,  java.util.List<AxisAlignedBB> outList)`
- `public static boolean getMobGriefingEvent(World world,  Entity entity)`
- `public static void onGameRuleChange(GameRules rules,  java.lang.String ruleName,  MinecraftServer server)`
- `public static MerchantRecipeList listTradeOffers(IMerchant merchant,  EntityPlayer player,  MerchantRecipeList list)`

## GameRuleChangeEvent

*class* `net.minecraftforge.event.GameRuleChangeEvent`

Fired when a game rule is changed,
 via CommandGameRule.notifyGameRuleChange(GameRules, String, MinecraftServer).

 This allows updating clients with the effects of server rule changes.

### Methods
- `public GameRules getRules()`
- `public java.lang.String getRuleName()`
- `public MinecraftServer getServer()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## LootTableLoadEvent

*class* `net.minecraftforge.event.LootTableLoadEvent`

Event fired when a LootTable json is loaded from json.
 This event is fired whenever resources are loaded, or when the server starts.
 This event will NOT be fired for LootTables loaded from the world folder, these are
 considered configurations files and should not be modified by mods.

 Canceling the event will make it load a empty loot table.

### Methods
- `public ResourceLocation getName()`
- `public LootTable getTable()`
- `public LootTableManager getLootTableManager()`
- `public void setTable(LootTable table)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RegistryEvent.MissingMappings.Action

*enum* `net.minecraftforge.event.RegistryEvent.MissingMappings.Action`

Actions you can take with this missing mapping.

 IGNORE means this missing mapping will be ignored.
 WARN means this missing mapping will generate a warning.
 FAIL means this missing mapping will prevent the world from loading.

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<RegistryEvent.MissingMappings.Action>

Enclosing class: RegistryEvent.MissingMappings<T extends IForgeRegistryEntry<T>>

### Fields
- `public static final RegistryEvent.MissingMappings.Action DEFAULT`
  Take the default action
- `public static final RegistryEvent.MissingMappings.Action IGNORE`
  Ignore this missing mapping. This means the mapping will be abandoned
- `public static final RegistryEvent.MissingMappings.Action WARN`
  Generate a warning but allow loading to continue
- `public static final RegistryEvent.MissingMappings.Action FAIL`
  Fail to load
- `public static final RegistryEvent.MissingMappings.Action REMAP`
  Remap this name to a new name (add a migration mapping)

### Methods
- `public static RegistryEvent.MissingMappings.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (RegistryEvent.MissingMappings.Action c : RegistryEvent.MissingMappings.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static RegistryEvent.MissingMappings.Action valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RegistryEvent.MissingMappings.Mapping>

*class* `net.minecraftforge.event.RegistryEvent.MissingMappings.Mapping>`

Enclosing class: RegistryEvent.MissingMappings<T extends IForgeRegistryEntry<T>>

### Fields
- `public final IForgeRegistry<T extends IForgeRegistryEntry<T>> registry`
- `public final ResourceLocation key`
- `public final int id`

### Methods
- `public void ignore()`
  Ignore the missing item.
- `public void warn()`
  Warn the user about the missing item.
- `public void fail()`
  Prevent the world from loading due to the missing item.
- `public void remap(T target)`
  Remap the missing entry to the specified object.
  
   Use this if you have renamed an entry.
   Existing references using the old name will point to the new one.
  - param: target - Entry to remap to.
- `public RegistryEvent.MissingMappings.Action getAction()`
- `public T getTarget()`

## RegistryEvent.MissingMappings>

*class* `net.minecraftforge.event.RegistryEvent.MissingMappings>`

All Implemented Interfaces: IContextSetter, IGenericEvent<T>

Enclosing class: RegistryEvent<T extends IForgeRegistryEntry<T>>

### Methods
- `public void setModContainer(ModContainer mod)`
- `public ResourceLocation getName()`
- `public IForgeRegistry<T> getRegistry()`
- `public <any> getMappings()`
- `public <any> getAllMappings()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.GenericEvent`: `getGenericType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RegistryEvent.NewRegistry

*class* `net.minecraftforge.event.RegistryEvent.NewRegistry`

Register new registries when you receive this event, through the RecipeBuilder

Enclosing class: RegistryEvent<T extends IForgeRegistryEntry<T>>

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RegistryEvent.Register>

*class* `net.minecraftforge.event.RegistryEvent.Register>`

Register your objects for the appropriate registry type when you receive this event.

 event.getRegistry().register(...)

 The registries will be visited in alphabetic order of their name, except blocks and items,
 which will be visited FIRST and SECOND respectively.

 ObjectHolders will reload between Blocks and Items, and after all registries have been visited.

All Implemented Interfaces: IContextSetter, IGenericEvent<T>

Enclosing class: RegistryEvent<T extends IForgeRegistryEntry<T>>

### Methods
- `public IForgeRegistry<T> getRegistry()`
- `public ResourceLocation getName()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.GenericEvent`: `getGenericType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
- from `net.minecraftforge.fml.common.eventhandler.IContextSetter`: `setModContainer`

## RegistryEvent>

*class* `net.minecraftforge.event.RegistryEvent>`

RegistryEvent supertype.

All Implemented Interfaces: IContextSetter, IGenericEvent<T>

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.GenericEvent`: `getGenericType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
- from `net.minecraftforge.fml.common.eventhandler.IContextSetter`: `setModContainer`

## ServerChatEvent

*class* `net.minecraftforge.event.ServerChatEvent`

ServerChatEvent is fired whenever a C01PacketChatMessage is processed.

 This event is fired via ForgeHooks.onServerChatEvent(NetHandlerPlayServer, String, ITextComponent),
 which is executed by the NetHandlerPlayServer.processChatMessage(CPacketChatMessage)

 username contains the username of the player sending the chat message.

 message contains the message being sent.

 player the instance of EntityPlayerMP for the player sending the chat message.

 component contains the instance of ChatComponentTranslation for the sent message.

 This event is Cancelable.

 If this event is canceled, the chat message is never distributed to all clients.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge#EVENT_BUS.

### Methods
- `public void setComponent(ITextComponent e)`
- `public ITextComponent getComponent()`
- `public java.lang.String getMessage()`
- `public java.lang.String getUsername()`
- `public EntityPlayerMP getPlayer()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
