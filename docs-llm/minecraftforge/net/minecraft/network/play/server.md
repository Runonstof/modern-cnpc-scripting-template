# net.minecraft.network.play.server

- [SPacketAdvancementInfo](#spacketadvancementinfo)
- [SPacketAnimation](#spacketanimation)
- [SPacketBlockAction](#spacketblockaction)
- [SPacketBlockBreakAnim](#spacketblockbreakanim)
- [SPacketBlockChange](#spacketblockchange)
- [SPacketCamera](#spacketcamera)
- [SPacketChangeGameState](#spacketchangegamestate)
- [SPacketChat](#spacketchat)
- [SPacketChunkData](#spacketchunkdata)
- [SPacketCloseWindow](#spacketclosewindow)
- [SPacketCollectItem](#spacketcollectitem)
- [SPacketCombatEvent](#spacketcombatevent)
- [SPacketCombatEvent.Event](#spacketcombatevent.event)
- [SPacketConfirmTransaction](#spacketconfirmtransaction)
- [SPacketCooldown](#spacketcooldown)
- [SPacketCustomPayload](#spacketcustompayload)
- [SPacketCustomSound](#spacketcustomsound)
- [SPacketDestroyEntities](#spacketdestroyentities)
- [SPacketDisconnect](#spacketdisconnect)
- [SPacketDisplayObjective](#spacketdisplayobjective)
- [SPacketEffect](#spacketeffect)
- [SPacketEntity](#spacketentity)
- [SPacketEntity.S15PacketEntityRelMove](#spacketentity.s15packetentityrelmove)
- [SPacketEntity.S16PacketEntityLook](#spacketentity.s16packetentitylook)
- [SPacketEntity.S17PacketEntityLookMove](#spacketentity.s17packetentitylookmove)
- [SPacketEntityAttach](#spacketentityattach)
- [SPacketEntityEffect](#spacketentityeffect)
- [SPacketEntityEquipment](#spacketentityequipment)
- [SPacketEntityHeadLook](#spacketentityheadlook)
- [SPacketEntityMetadata](#spacketentitymetadata)
- [SPacketEntityProperties](#spacketentityproperties)
- [SPacketEntityProperties.Snapshot](#spacketentityproperties.snapshot)
- [SPacketEntityStatus](#spacketentitystatus)
- [SPacketEntityTeleport](#spacketentityteleport)
- [SPacketEntityVelocity](#spacketentityvelocity)
- [SPacketExplosion](#spacketexplosion)
- [SPacketHeldItemChange](#spackethelditemchange)
- [SPacketJoinGame](#spacketjoingame)
- [SPacketKeepAlive](#spacketkeepalive)
- [SPacketMaps](#spacketmaps)
- [SPacketMoveVehicle](#spacketmovevehicle)
- [SPacketMultiBlockChange](#spacketmultiblockchange)
- [SPacketMultiBlockChange.BlockUpdateData](#spacketmultiblockchange.blockupdatedata)
- [SPacketOpenWindow](#spacketopenwindow)
- [SPacketParticles](#spacketparticles)
- [SPacketPlaceGhostRecipe](#spacketplaceghostrecipe)
- [SPacketPlayerAbilities](#spacketplayerabilities)
- [SPacketPlayerListHeaderFooter](#spacketplayerlistheaderfooter)
- [SPacketPlayerListItem](#spacketplayerlistitem)
- [SPacketPlayerListItem.Action](#spacketplayerlistitem.action)
- [SPacketPlayerListItem.AddPlayerData](#spacketplayerlistitem.addplayerdata)
- [SPacketPlayerPosLook](#spacketplayerposlook)
- [SPacketPlayerPosLook.EnumFlags](#spacketplayerposlook.enumflags)
- [SPacketRecipeBook](#spacketrecipebook)
- [SPacketRecipeBook.State](#spacketrecipebook.state)
- [SPacketRemoveEntityEffect](#spacketremoveentityeffect)
- [SPacketResourcePackSend](#spacketresourcepacksend)
- [SPacketRespawn](#spacketrespawn)
- [SPacketScoreboardObjective](#spacketscoreboardobjective)
- [SPacketSelectAdvancementsTab](#spacketselectadvancementstab)
- [SPacketServerDifficulty](#spacketserverdifficulty)
- [SPacketSetExperience](#spacketsetexperience)
- [SPacketSetPassengers](#spacketsetpassengers)
- [SPacketSetSlot](#spacketsetslot)
- [SPacketSignEditorOpen](#spacketsigneditoropen)
- [SPacketSoundEffect](#spacketsoundeffect)
- [SPacketSpawnExperienceOrb](#spacketspawnexperienceorb)
- [SPacketSpawnGlobalEntity](#spacketspawnglobalentity)
- [SPacketSpawnMob](#spacketspawnmob)
- [SPacketSpawnObject](#spacketspawnobject)
- [SPacketSpawnPainting](#spacketspawnpainting)
- [SPacketSpawnPlayer](#spacketspawnplayer)
- [SPacketSpawnPosition](#spacketspawnposition)
- [SPacketStatistics](#spacketstatistics)
- [SPacketTabComplete](#spackettabcomplete)
- [SPacketTeams](#spacketteams)
- [SPacketTimeUpdate](#spackettimeupdate)
- [SPacketTitle](#spackettitle)
- [SPacketTitle.Type](#spackettitle.type)
- [SPacketUnloadChunk](#spacketunloadchunk)
- [SPacketUpdateBossInfo](#spacketupdatebossinfo)
- [SPacketUpdateBossInfo.Operation](#spacketupdatebossinfo.operation)
- [SPacketUpdateHealth](#spacketupdatehealth)
- [SPacketUpdateScore](#spacketupdatescore)
- [SPacketUpdateScore.Action](#spacketupdatescore.action)
- [SPacketUpdateTileEntity](#spacketupdatetileentity)
- [SPacketUseBed](#spacketusebed)
- [SPacketWindowItems](#spacketwindowitems)
- [SPacketWindowProperty](#spacketwindowproperty)
- [SPacketWorldBorder](#spacketworldborder)
- [SPacketWorldBorder.Action](#spacketworldborder.action)
## SPacketAdvancementInfo

*class* `net.minecraft.network.play.server.SPacketAdvancementInfo`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.Map<ResourceLocation,Advancement.Builder> getAdvancementsToAdd()`
- `public java.util.Set<ResourceLocation> getAdvancementsToRemove()`
- `public java.util.Map<ResourceLocation,AdvancementProgress> getProgressUpdates()`
- `public boolean isFirstSync()`

## SPacketAnimation

*class* `net.minecraft.network.play.server.SPacketAnimation`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityID()`
- `public int getAnimationType()`

## SPacketBlockAction

*class* `net.minecraft.network.play.server.SPacketBlockAction`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public BlockPos getBlockPosition()`
- `public int getData1()`
- `public int getData2()`
- `public Block getBlockType()`

## SPacketBlockBreakAnim

*class* `net.minecraft.network.play.server.SPacketBlockBreakAnim`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getBreakerId()`
- `public BlockPos getPosition()`
- `public int getProgress()`

## SPacketBlockChange

*class* `net.minecraft.network.play.server.SPacketBlockChange`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Fields
- `public IBlockState blockState`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public IBlockState getBlockState()`
- `public BlockPos getBlockPosition()`

## SPacketCamera

*class* `net.minecraft.network.play.server.SPacketCamera`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Fields
- `public int entityId`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public Entity getEntity(World worldIn)`

## SPacketChangeGameState

*class* `net.minecraft.network.play.server.SPacketChangeGameState`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Fields
- `public static final java.lang.String[] MESSAGE_NAMES`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getGameState()`
- `public float getValue()`

## SPacketChat

*class* `net.minecraft.network.play.server.SPacketChat`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public ITextComponent getChatComponent()`
- `public boolean isSystem()`
- `public ChatType getType()`

## SPacketChunkData

*class* `net.minecraft.network.play.server.SPacketChunkData`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public PacketBuffer getReadBuffer()`
- `public int extractChunkData(PacketBuffer buf,  Chunk chunkIn,  boolean writeSkylight,  int changedSectionFilter)`
- `protected int calculateChunkSize(Chunk chunkIn,  boolean p_189556_2_,  int p_189556_3_)`
- `public int getChunkX()`
- `public int getChunkZ()`
- `public int getExtractedSize()`
- `public boolean isFullChunk()`
- `public java.util.List<NBTTagCompound> getTileEntityTags()`

## SPacketCloseWindow

*class* `net.minecraft.network.play.server.SPacketCloseWindow`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

## SPacketCollectItem

*class* `net.minecraft.network.play.server.SPacketCollectItem`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getCollectedItemEntityID()`
- `public int getEntityID()`
- `public int getAmount()`

## SPacketCombatEvent

*class* `net.minecraft.network.play.server.SPacketCombatEvent`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Fields
- `public SPacketCombatEvent.Event eventType`
- `public int playerId`
- `public int entityId`
- `public int duration`
- `public ITextComponent deathMessage`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`

## SPacketCombatEvent.Event

*enum* `net.minecraft.network.play.server.SPacketCombatEvent.Event`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketCombatEvent.Event>

Enclosing class: SPacketCombatEvent

### Fields
- `public static final SPacketCombatEvent.Event ENTER_COMBAT`
- `public static final SPacketCombatEvent.Event END_COMBAT`
- `public static final SPacketCombatEvent.Event ENTITY_DIED`

### Methods
- `public static SPacketCombatEvent.Event[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketCombatEvent.Event c : SPacketCombatEvent.Event.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketCombatEvent.Event valueOf(java.lang.String name)`
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

## SPacketConfirmTransaction

*class* `net.minecraft.network.play.server.SPacketConfirmTransaction`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public short getActionNumber()`
- `public boolean wasAccepted()`

## SPacketCooldown

*class* `net.minecraft.network.play.server.SPacketCooldown`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public Item getItem()`
- `public int getTicks()`

## SPacketCustomPayload

*class* `net.minecraft.network.play.server.SPacketCustomPayload`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String getChannelName()`
- `public PacketBuffer getBufferData()`

## SPacketCustomSound

*class* `net.minecraft.network.play.server.SPacketCustomSound`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.lang.String getSoundName()`
- `public void processPacket(INetHandlerPlayClient handler)`
- `public SoundCategory getCategory()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getVolume()`
- `public float getPitch()`

## SPacketDestroyEntities

*class* `net.minecraft.network.play.server.SPacketDestroyEntities`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int[] getEntityIDs()`

## SPacketDisconnect

*class* `net.minecraft.network.play.server.SPacketDisconnect`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public ITextComponent getReason()`

## SPacketDisplayObjective

*class* `net.minecraft.network.play.server.SPacketDisplayObjective`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getPosition()`
- `public java.lang.String getName()`

## SPacketEffect

*class* `net.minecraft.network.play.server.SPacketEffect`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public boolean isSoundServerwide()`
- `public int getSoundType()`
- `public int getSoundData()`
- `public BlockPos getSoundPos()`

## SPacketEntity

*class* `net.minecraft.network.play.server.SPacketEntity`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Fields
- `protected int entityId`
- `protected int posX`
- `protected int posY`
- `protected int posZ`
- `protected byte yaw`
- `protected byte pitch`
- `protected boolean onGround`
- `protected boolean rotating`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String toString()`
- `public Entity getEntity(World worldIn)`
- `public int getX()`
- `public int getY()`
- `public int getZ()`
- `public byte getYaw()`
- `public byte getPitch()`
- `public boolean isRotating()`
- `public boolean getOnGround()`

## SPacketEntity.S15PacketEntityRelMove

*class* `net.minecraft.network.play.server.SPacketEntity.S15PacketEntityRelMove`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

Enclosing class: SPacketEntity

### Inherited fields
- from `net.minecraft.network.play.server.SPacketEntity`: `entityId`, `onGround`, `pitch`, `posX`, `posY`, `posZ`, `rotating`, `yaw`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.network.play.server.SPacketEntity`: `getEntity`, `getOnGround`, `getPitch`, `getX`, `getY`, `getYaw`, `getZ`, `isRotating`, `processPacket`, `toString`

## SPacketEntity.S16PacketEntityLook

*class* `net.minecraft.network.play.server.SPacketEntity.S16PacketEntityLook`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

Enclosing class: SPacketEntity

### Inherited fields
- from `net.minecraft.network.play.server.SPacketEntity`: `entityId`, `onGround`, `pitch`, `posX`, `posY`, `posZ`, `rotating`, `yaw`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.network.play.server.SPacketEntity`: `getEntity`, `getOnGround`, `getPitch`, `getX`, `getY`, `getYaw`, `getZ`, `isRotating`, `processPacket`, `toString`

## SPacketEntity.S17PacketEntityLookMove

*class* `net.minecraft.network.play.server.SPacketEntity.S17PacketEntityLookMove`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

Enclosing class: SPacketEntity

### Inherited fields
- from `net.minecraft.network.play.server.SPacketEntity`: `entityId`, `onGround`, `pitch`, `posX`, `posY`, `posZ`, `rotating`, `yaw`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.network.play.server.SPacketEntity`: `getEntity`, `getOnGround`, `getPitch`, `getX`, `getY`, `getYaw`, `getZ`, `isRotating`, `processPacket`, `toString`

## SPacketEntityAttach

*class* `net.minecraft.network.play.server.SPacketEntityAttach`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityId()`
- `public int getVehicleEntityId()`

## SPacketEntityEffect

*class* `net.minecraft.network.play.server.SPacketEntityEffect`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean isMaxDuration()`
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityId()`
- `public byte getEffectId()`
- `public byte getAmplifier()`
- `public int getDuration()`
- `public boolean doesShowParticles()`
- `public boolean getIsAmbient()`

## SPacketEntityEquipment

*class* `net.minecraft.network.play.server.SPacketEntityEquipment`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public ItemStack getItemStack()`
- `public int getEntityID()`
- `public EntityEquipmentSlot getEquipmentSlot()`

## SPacketEntityHeadLook

*class* `net.minecraft.network.play.server.SPacketEntityHeadLook`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public Entity getEntity(World worldIn)`
- `public byte getYaw()`

## SPacketEntityMetadata

*class* `net.minecraft.network.play.server.SPacketEntityMetadata`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.util.List<EntityDataManager.DataEntry<?>> getDataManagerEntries()`
- `public int getEntityId()`

## SPacketEntityProperties

*class* `net.minecraft.network.play.server.SPacketEntityProperties`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityId()`
- `public java.util.List<SPacketEntityProperties.Snapshot> getSnapshots()`

## SPacketEntityProperties.Snapshot

*class* `net.minecraft.network.play.server.SPacketEntityProperties.Snapshot`

Enclosing class: SPacketEntityProperties

### Methods
- `public java.lang.String getName()`
- `public double getBaseValue()`
- `public java.util.Collection<AttributeModifier> getModifiers()`

## SPacketEntityStatus

*class* `net.minecraft.network.play.server.SPacketEntityStatus`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public Entity getEntity(World worldIn)`
- `public byte getOpCode()`

## SPacketEntityTeleport

*class* `net.minecraft.network.play.server.SPacketEntityTeleport`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityId()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public byte getYaw()`
- `public byte getPitch()`
- `public boolean getOnGround()`

## SPacketEntityVelocity

*class* `net.minecraft.network.play.server.SPacketEntityVelocity`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityID()`
- `public int getMotionX()`
- `public int getMotionY()`
- `public int getMotionZ()`

## SPacketExplosion

*class* `net.minecraft.network.play.server.SPacketExplosion`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public float getMotionX()`
- `public float getMotionY()`
- `public float getMotionZ()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getStrength()`
- `public java.util.List<BlockPos> getAffectedBlockPositions()`

## SPacketHeldItemChange

*class* `net.minecraft.network.play.server.SPacketHeldItemChange`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getHeldItemHotbarIndex()`

## SPacketJoinGame

*class* `net.minecraft.network.play.server.SPacketJoinGame`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getPlayerId()`
- `public boolean isHardcoreMode()`
- `public GameType getGameType()`
- `public int getDimension()`
- `public EnumDifficulty getDifficulty()`
- `public int getMaxPlayers()`
- `public WorldType getWorldType()`
- `public boolean isReducedDebugInfo()`

## SPacketKeepAlive

*class* `net.minecraft.network.play.server.SPacketKeepAlive`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public long getId()`

## SPacketMaps

*class* `net.minecraft.network.play.server.SPacketMaps`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getMapId()`
- `public void setMapdataTo(MapData mapdataIn)`

## SPacketMoveVehicle

*class* `net.minecraft.network.play.server.SPacketMoveVehicle`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getYaw()`
- `public float getPitch()`

## SPacketMultiBlockChange

*class* `net.minecraft.network.play.server.SPacketMultiBlockChange`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public SPacketMultiBlockChange.BlockUpdateData[] getChangedBlocks()`

## SPacketMultiBlockChange.BlockUpdateData

*class* `net.minecraft.network.play.server.SPacketMultiBlockChange.BlockUpdateData`

Enclosing class: SPacketMultiBlockChange

### Methods
- `public BlockPos getPos()`
- `public short getOffset()`
- `public IBlockState getBlockState()`

## SPacketOpenWindow

*class* `net.minecraft.network.play.server.SPacketOpenWindow`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public java.lang.String getGuiId()`
- `public ITextComponent getWindowTitle()`
- `public int getSlotCount()`
- `public int getEntityId()`
- `public boolean hasSlots()`

## SPacketParticles

*class* `net.minecraft.network.play.server.SPacketParticles`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public EnumParticleTypes getParticleType()`
- `public void processPacket(INetHandlerPlayClient handler)`
- `public boolean isLongDistance()`
- `public double getXCoordinate()`
- `public double getYCoordinate()`
- `public double getZCoordinate()`
- `public float getXOffset()`
- `public float getYOffset()`
- `public float getZOffset()`
- `public float getParticleSpeed()`
- `public int getParticleCount()`
- `public int[] getParticleArgs()`

## SPacketPlaceGhostRecipe

*class* `net.minecraft.network.play.server.SPacketPlaceGhostRecipe`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public IRecipe func_194311_a()`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int func_194313_b()`
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`

## SPacketPlayerAbilities

*class* `net.minecraft.network.play.server.SPacketPlayerAbilities`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public boolean isInvulnerable()`
- `public void setInvulnerable(boolean isInvulnerable)`
- `public boolean isFlying()`
- `public void setFlying(boolean isFlying)`
- `public boolean isAllowFlying()`
- `public void setAllowFlying(boolean isAllowFlying)`
- `public boolean isCreativeMode()`
- `public void setCreativeMode(boolean isCreativeMode)`
- `public float getFlySpeed()`
- `public void setFlySpeed(float flySpeedIn)`
- `public float getWalkSpeed()`
- `public void setWalkSpeed(float walkSpeedIn)`

## SPacketPlayerListHeaderFooter

*class* `net.minecraft.network.play.server.SPacketPlayerListHeaderFooter`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public ITextComponent getHeader()`
- `public ITextComponent getFooter()`

## SPacketPlayerListItem

*class* `net.minecraft.network.play.server.SPacketPlayerListItem`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.util.List<SPacketPlayerListItem.AddPlayerData> getEntries()`
- `public SPacketPlayerListItem.Action getAction()`
- `public java.lang.String toString()`

## SPacketPlayerListItem.Action

*enum* `net.minecraft.network.play.server.SPacketPlayerListItem.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketPlayerListItem.Action>

Enclosing class: SPacketPlayerListItem

### Fields
- `public static final SPacketPlayerListItem.Action ADD_PLAYER`
- `public static final SPacketPlayerListItem.Action UPDATE_GAME_MODE`
- `public static final SPacketPlayerListItem.Action UPDATE_LATENCY`
- `public static final SPacketPlayerListItem.Action UPDATE_DISPLAY_NAME`
- `public static final SPacketPlayerListItem.Action REMOVE_PLAYER`

### Methods
- `public static SPacketPlayerListItem.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketPlayerListItem.Action c : SPacketPlayerListItem.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketPlayerListItem.Action valueOf(java.lang.String name)`
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

## SPacketPlayerListItem.AddPlayerData

*class* `net.minecraft.network.play.server.SPacketPlayerListItem.AddPlayerData`

Enclosing class: SPacketPlayerListItem

### Methods
- `public GameProfile getProfile()`
- `public int getPing()`
- `public GameType getGameMode()`
- `public ITextComponent getDisplayName()`
- `public java.lang.String toString()`

## SPacketPlayerPosLook

*class* `net.minecraft.network.play.server.SPacketPlayerPosLook`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getYaw()`
- `public float getPitch()`
- `public int getTeleportId()`
- `public java.util.Set<SPacketPlayerPosLook.EnumFlags> getFlags()`

## SPacketPlayerPosLook.EnumFlags

*enum* `net.minecraft.network.play.server.SPacketPlayerPosLook.EnumFlags`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketPlayerPosLook.EnumFlags>

Enclosing class: SPacketPlayerPosLook

### Fields
- `public static final SPacketPlayerPosLook.EnumFlags X`
- `public static final SPacketPlayerPosLook.EnumFlags Y`
- `public static final SPacketPlayerPosLook.EnumFlags Z`
- `public static final SPacketPlayerPosLook.EnumFlags Y_ROT`
- `public static final SPacketPlayerPosLook.EnumFlags X_ROT`

### Methods
- `public static SPacketPlayerPosLook.EnumFlags[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketPlayerPosLook.EnumFlags c : SPacketPlayerPosLook.EnumFlags.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketPlayerPosLook.EnumFlags valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static java.util.Set<SPacketPlayerPosLook.EnumFlags> unpack(int flags)`
- `public static int pack(java.util.Set<SPacketPlayerPosLook.EnumFlags> flags)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## SPacketRecipeBook

*class* `net.minecraft.network.play.server.SPacketRecipeBook`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.List<IRecipe> getRecipes()`
- `public java.util.List<IRecipe> getDisplayedRecipes()`
- `public boolean isGuiOpen()`
- `public boolean isFilteringCraftable()`
- `public SPacketRecipeBook.State getState()`

## SPacketRecipeBook.State

*enum* `net.minecraft.network.play.server.SPacketRecipeBook.State`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketRecipeBook.State>

Enclosing class: SPacketRecipeBook

### Fields
- `public static final SPacketRecipeBook.State INIT`
- `public static final SPacketRecipeBook.State ADD`
- `public static final SPacketRecipeBook.State REMOVE`

### Methods
- `public static SPacketRecipeBook.State[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketRecipeBook.State c : SPacketRecipeBook.State.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketRecipeBook.State valueOf(java.lang.String name)`
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

## SPacketRemoveEntityEffect

*class* `net.minecraft.network.play.server.SPacketRemoveEntityEffect`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public Entity getEntity(World worldIn)`
- `public Potion getPotion()`

## SPacketResourcePackSend

*class* `net.minecraft.network.play.server.SPacketResourcePackSend`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String getURL()`
- `public java.lang.String getHash()`

## SPacketRespawn

*class* `net.minecraft.network.play.server.SPacketRespawn`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getDimensionID()`
- `public EnumDifficulty getDifficulty()`
- `public GameType getGameType()`
- `public WorldType getWorldType()`

## SPacketScoreboardObjective

*class* `net.minecraft.network.play.server.SPacketScoreboardObjective`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String getObjectiveName()`
- `public java.lang.String getObjectiveValue()`
- `public int getAction()`
- `public IScoreCriteria.EnumRenderType getRenderType()`

## SPacketSelectAdvancementsTab

*class* `net.minecraft.network.play.server.SPacketSelectAdvancementsTab`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public ResourceLocation getTab()`

## SPacketServerDifficulty

*class* `net.minecraft.network.play.server.SPacketServerDifficulty`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public boolean isDifficultyLocked()`
- `public EnumDifficulty getDifficulty()`

## SPacketSetExperience

*class* `net.minecraft.network.play.server.SPacketSetExperience`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public float getExperienceBar()`
- `public int getTotalExperience()`
- `public int getLevel()`

## SPacketSetPassengers

*class* `net.minecraft.network.play.server.SPacketSetPassengers`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int[] getPassengerIds()`
- `public int getEntityId()`

## SPacketSetSlot

*class* `net.minecraft.network.play.server.SPacketSetSlot`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public int getSlot()`
- `public ItemStack getStack()`

## SPacketSignEditorOpen

*class* `net.minecraft.network.play.server.SPacketSignEditorOpen`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public BlockPos getSignPosition()`

## SPacketSoundEffect

*class* `net.minecraft.network.play.server.SPacketSoundEffect`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public SoundEvent getSound()`
- `public void processPacket(INetHandlerPlayClient handler)`
- `public SoundCategory getCategory()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getVolume()`
- `public float getPitch()`

## SPacketSpawnExperienceOrb

*class* `net.minecraft.network.play.server.SPacketSpawnExperienceOrb`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityID()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public int getXPValue()`

## SPacketSpawnGlobalEntity

*class* `net.minecraft.network.play.server.SPacketSpawnGlobalEntity`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityId()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public int getType()`

## SPacketSpawnMob

*class* `net.minecraft.network.play.server.SPacketSpawnMob`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.util.List<EntityDataManager.DataEntry<?>> getDataManagerEntries()`
- `public int getEntityID()`
- `public java.util.UUID getUniqueId()`
- `public int getEntityType()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public int getVelocityX()`
- `public int getVelocityY()`
- `public int getVelocityZ()`
- `public byte getYaw()`
- `public byte getPitch()`
- `public byte getHeadPitch()`

## SPacketSpawnObject

*class* `net.minecraft.network.play.server.SPacketSpawnObject`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityID()`
- `public void setSpeedX(int newSpeedX)`
- `public java.util.UUID getUniqueId()`
- `public void setSpeedY(int newSpeedY)`
- `public double getX()`
- `public void setSpeedZ(int newSpeedZ)`
- `public double getY()`
- `public double getZ()`
- `public int getSpeedX()`
- `public int getSpeedY()`
- `public int getSpeedZ()`
- `public int getPitch()`
- `public int getYaw()`
- `public int getType()`
- `public int getData()`
- `public void setData(int dataIn)`

## SPacketSpawnPainting

*class* `net.minecraft.network.play.server.SPacketSpawnPainting`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getEntityID()`
- `public java.util.UUID getUniqueId()`
- `public BlockPos getPosition()`
- `public EnumFacing getFacing()`
- `public java.lang.String getTitle()`

## SPacketSpawnPlayer

*class* `net.minecraft.network.play.server.SPacketSpawnPlayer`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.util.List<EntityDataManager.DataEntry<?>> getDataManagerEntries()`
- `public int getEntityID()`
- `public java.util.UUID getUniqueId()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public byte getYaw()`
- `public byte getPitch()`

## SPacketSpawnPosition

*class* `net.minecraft.network.play.server.SPacketSpawnPosition`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public BlockPos getSpawnPos()`

## SPacketStatistics

*class* `net.minecraft.network.play.server.SPacketStatistics`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public java.util.Map<StatBase,java.lang.Integer> getStatisticMap()`

## SPacketTabComplete

*class* `net.minecraft.network.play.server.SPacketTabComplete`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String[] getMatches()`

## SPacketTeams

*class* `net.minecraft.network.play.server.SPacketTeams`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String getName()`
- `public java.lang.String getDisplayName()`
- `public java.lang.String getPrefix()`
- `public java.lang.String getSuffix()`
- `public java.util.Collection<java.lang.String> getPlayers()`
- `public int getAction()`
- `public int getFriendlyFlags()`
- `public int getColor()`
- `public java.lang.String getNameTagVisibility()`
- `public java.lang.String getCollisionRule()`

## SPacketTimeUpdate

*class* `net.minecraft.network.play.server.SPacketTimeUpdate`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public long getTotalWorldTime()`
- `public long getWorldTime()`

## SPacketTitle

*class* `net.minecraft.network.play.server.SPacketTitle`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public SPacketTitle.Type getType()`
- `public ITextComponent getMessage()`
- `public int getFadeInTime()`
- `public int getDisplayTime()`
- `public int getFadeOutTime()`

## SPacketTitle.Type

*enum* `net.minecraft.network.play.server.SPacketTitle.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketTitle.Type>

Enclosing class: SPacketTitle

### Fields
- `public static final SPacketTitle.Type TITLE`
- `public static final SPacketTitle.Type SUBTITLE`
- `public static final SPacketTitle.Type ACTIONBAR`
- `public static final SPacketTitle.Type TIMES`
- `public static final SPacketTitle.Type CLEAR`
- `public static final SPacketTitle.Type RESET`

### Methods
- `public static SPacketTitle.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketTitle.Type c : SPacketTitle.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketTitle.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static SPacketTitle.Type byName(java.lang.String name)`
- `public static java.lang.String[] getNames()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## SPacketUnloadChunk

*class* `net.minecraft.network.play.server.SPacketUnloadChunk`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getX()`
- `public int getZ()`

## SPacketUpdateBossInfo

*class* `net.minecraft.network.play.server.SPacketUpdateBossInfo`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.util.UUID getUniqueId()`
- `public SPacketUpdateBossInfo.Operation getOperation()`
- `public ITextComponent getName()`
- `public float getPercent()`
- `public BossInfo.Color getColor()`
- `public BossInfo.Overlay getOverlay()`
- `public boolean shouldDarkenSky()`
- `public boolean shouldPlayEndBossMusic()`
- `public boolean shouldCreateFog()`

## SPacketUpdateBossInfo.Operation

*enum* `net.minecraft.network.play.server.SPacketUpdateBossInfo.Operation`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketUpdateBossInfo.Operation>

Enclosing class: SPacketUpdateBossInfo

### Fields
- `public static final SPacketUpdateBossInfo.Operation ADD`
- `public static final SPacketUpdateBossInfo.Operation REMOVE`
- `public static final SPacketUpdateBossInfo.Operation UPDATE_PCT`
- `public static final SPacketUpdateBossInfo.Operation UPDATE_NAME`
- `public static final SPacketUpdateBossInfo.Operation UPDATE_STYLE`
- `public static final SPacketUpdateBossInfo.Operation UPDATE_PROPERTIES`

### Methods
- `public static SPacketUpdateBossInfo.Operation[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketUpdateBossInfo.Operation c : SPacketUpdateBossInfo.Operation.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketUpdateBossInfo.Operation valueOf(java.lang.String name)`
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

## SPacketUpdateHealth

*class* `net.minecraft.network.play.server.SPacketUpdateHealth`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public float getHealth()`
- `public int getFoodLevel()`
- `public float getSaturationLevel()`

## SPacketUpdateScore

*class* `net.minecraft.network.play.server.SPacketUpdateScore`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public java.lang.String getPlayerName()`
- `public java.lang.String getObjectiveName()`
- `public int getScoreValue()`
- `public SPacketUpdateScore.Action getScoreAction()`

## SPacketUpdateScore.Action

*enum* `net.minecraft.network.play.server.SPacketUpdateScore.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketUpdateScore.Action>

Enclosing class: SPacketUpdateScore

### Fields
- `public static final SPacketUpdateScore.Action CHANGE`
- `public static final SPacketUpdateScore.Action REMOVE`

### Methods
- `public static SPacketUpdateScore.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketUpdateScore.Action c : SPacketUpdateScore.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketUpdateScore.Action valueOf(java.lang.String name)`
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

## SPacketUpdateTileEntity

*class* `net.minecraft.network.play.server.SPacketUpdateTileEntity`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public BlockPos getPos()`
- `public int getTileEntityType()`
- `public NBTTagCompound getNbtCompound()`

## SPacketUseBed

*class* `net.minecraft.network.play.server.SPacketUseBed`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public EntityPlayer getPlayer(World worldIn)`
- `public BlockPos getBedPosition()`

## SPacketWindowItems

*class* `net.minecraft.network.play.server.SPacketWindowItems`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public int getWindowId()`
- `public java.util.List<ItemStack> getItemStacks()`

## SPacketWindowProperty

*class* `net.minecraft.network.play.server.SPacketWindowProperty`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public int getProperty()`
- `public int getValue()`

## SPacketWorldBorder

*class* `net.minecraft.network.play.server.SPacketWorldBorder`

All Implemented Interfaces: Packet<INetHandlerPlayClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayClient handler)`
- `public void apply(WorldBorder border)`

## SPacketWorldBorder.Action

*enum* `net.minecraft.network.play.server.SPacketWorldBorder.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<SPacketWorldBorder.Action>

Enclosing class: SPacketWorldBorder

### Fields
- `public static final SPacketWorldBorder.Action SET_SIZE`
- `public static final SPacketWorldBorder.Action LERP_SIZE`
- `public static final SPacketWorldBorder.Action SET_CENTER`
- `public static final SPacketWorldBorder.Action INITIALIZE`
- `public static final SPacketWorldBorder.Action SET_WARNING_TIME`
- `public static final SPacketWorldBorder.Action SET_WARNING_BLOCKS`

### Methods
- `public static SPacketWorldBorder.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (SPacketWorldBorder.Action c : SPacketWorldBorder.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static SPacketWorldBorder.Action valueOf(java.lang.String name)`
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
