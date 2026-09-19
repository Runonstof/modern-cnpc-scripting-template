# net.minecraft.network.play.client

- [CPacketAnimation](#cpacketanimation)
- [CPacketChatMessage](#cpacketchatmessage)
- [CPacketClickWindow](#cpacketclickwindow)
- [CPacketClientSettings](#cpacketclientsettings)
- [CPacketClientStatus](#cpacketclientstatus)
- [CPacketClientStatus.State](#cpacketclientstatus.state)
- [CPacketCloseWindow](#cpacketclosewindow)
- [CPacketConfirmTeleport](#cpacketconfirmteleport)
- [CPacketConfirmTransaction](#cpacketconfirmtransaction)
- [CPacketCreativeInventoryAction](#cpacketcreativeinventoryaction)
- [CPacketCustomPayload](#cpacketcustompayload)
- [CPacketEnchantItem](#cpacketenchantitem)
- [CPacketEntityAction](#cpacketentityaction)
- [CPacketEntityAction.Action](#cpacketentityaction.action)
- [CPacketHeldItemChange](#cpackethelditemchange)
- [CPacketInput](#cpacketinput)
- [CPacketKeepAlive](#cpacketkeepalive)
- [CPacketPlaceRecipe](#cpacketplacerecipe)
- [CPacketPlayer](#cpacketplayer)
- [CPacketPlayer.Position](#cpacketplayer.position)
- [CPacketPlayer.PositionRotation](#cpacketplayer.positionrotation)
- [CPacketPlayer.Rotation](#cpacketplayer.rotation)
- [CPacketPlayerAbilities](#cpacketplayerabilities)
- [CPacketPlayerDigging](#cpacketplayerdigging)
- [CPacketPlayerDigging.Action](#cpacketplayerdigging.action)
- [CPacketPlayerTryUseItem](#cpacketplayertryuseitem)
- [CPacketPlayerTryUseItemOnBlock](#cpacketplayertryuseitemonblock)
- [CPacketRecipeInfo](#cpacketrecipeinfo)
- [CPacketRecipeInfo.Purpose](#cpacketrecipeinfo.purpose)
- [CPacketResourcePackStatus](#cpacketresourcepackstatus)
- [CPacketResourcePackStatus.Action](#cpacketresourcepackstatus.action)
- [CPacketSeenAdvancements](#cpacketseenadvancements)
- [CPacketSeenAdvancements.Action](#cpacketseenadvancements.action)
- [CPacketSpectate](#cpacketspectate)
- [CPacketSteerBoat](#cpacketsteerboat)
- [CPacketTabComplete](#cpackettabcomplete)
- [CPacketUpdateSign](#cpacketupdatesign)
- [CPacketUseEntity](#cpacketuseentity)
- [CPacketUseEntity.Action](#cpacketuseentity.action)
- [CPacketVehicleMove](#cpacketvehiclemove)
## CPacketAnimation

*class* `net.minecraft.network.play.client.CPacketAnimation`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public EnumHand getHand()`

## CPacketChatMessage

*class* `net.minecraft.network.play.client.CPacketChatMessage`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public java.lang.String getMessage()`

## CPacketClickWindow

*class* `net.minecraft.network.play.client.CPacketClickWindow`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public int getSlotId()`
- `public int getUsedButton()`
- `public short getActionNumber()`
- `public ItemStack getClickedItem()`
- `public ClickType getClickType()`

## CPacketClientSettings

*class* `net.minecraft.network.play.client.CPacketClientSettings`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public java.lang.String getLang()`
- `public EntityPlayer.EnumChatVisibility getChatVisibility()`
- `public boolean isColorsEnabled()`
- `public int getModelPartFlags()`
- `public EnumHandSide getMainHand()`

## CPacketClientStatus

*class* `net.minecraft.network.play.client.CPacketClientStatus`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public CPacketClientStatus.State getStatus()`

## CPacketClientStatus.State

*enum* `net.minecraft.network.play.client.CPacketClientStatus.State`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketClientStatus.State>

Enclosing class: CPacketClientStatus

### Fields
- `public static final CPacketClientStatus.State PERFORM_RESPAWN`
- `public static final CPacketClientStatus.State REQUEST_STATS`

### Methods
- `public static CPacketClientStatus.State[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketClientStatus.State c : CPacketClientStatus.State.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketClientStatus.State valueOf(java.lang.String name)`
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

## CPacketCloseWindow

*class* `net.minecraft.network.play.client.CPacketCloseWindow`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

## CPacketConfirmTeleport

*class* `net.minecraft.network.play.client.CPacketConfirmTeleport`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public int getTeleportId()`

## CPacketConfirmTransaction

*class* `net.minecraft.network.play.client.CPacketConfirmTransaction`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public short getUid()`

## CPacketCreativeInventoryAction

*class* `net.minecraft.network.play.client.CPacketCreativeInventoryAction`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getSlotId()`
- `public ItemStack getStack()`

## CPacketCustomPayload

*class* `net.minecraft.network.play.client.CPacketCustomPayload`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public java.lang.String getChannelName()`
- `public PacketBuffer getBufferData()`

## CPacketEnchantItem

*class* `net.minecraft.network.play.client.CPacketEnchantItem`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public int getWindowId()`
- `public int getButton()`

## CPacketEntityAction

*class* `net.minecraft.network.play.client.CPacketEntityAction`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public CPacketEntityAction.Action getAction()`
- `public int getAuxData()`

## CPacketEntityAction.Action

*enum* `net.minecraft.network.play.client.CPacketEntityAction.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketEntityAction.Action>

Enclosing class: CPacketEntityAction

### Fields
- `public static final CPacketEntityAction.Action START_SNEAKING`
- `public static final CPacketEntityAction.Action STOP_SNEAKING`
- `public static final CPacketEntityAction.Action STOP_SLEEPING`
- `public static final CPacketEntityAction.Action START_SPRINTING`
- `public static final CPacketEntityAction.Action STOP_SPRINTING`
- `public static final CPacketEntityAction.Action START_RIDING_JUMP`
- `public static final CPacketEntityAction.Action STOP_RIDING_JUMP`
- `public static final CPacketEntityAction.Action OPEN_INVENTORY`
- `public static final CPacketEntityAction.Action START_FALL_FLYING`

### Methods
- `public static CPacketEntityAction.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketEntityAction.Action c : CPacketEntityAction.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketEntityAction.Action valueOf(java.lang.String name)`
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

## CPacketHeldItemChange

*class* `net.minecraft.network.play.client.CPacketHeldItemChange`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public int getSlotId()`

## CPacketInput

*class* `net.minecraft.network.play.client.CPacketInput`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public float getStrafeSpeed()`
- `public float getForwardSpeed()`
- `public boolean isJumping()`
- `public boolean isSneaking()`

## CPacketKeepAlive

*class* `net.minecraft.network.play.client.CPacketKeepAlive`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public long getKey()`

## CPacketPlaceRecipe

*class* `net.minecraft.network.play.client.CPacketPlaceRecipe`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public int func_194318_a()`
- `public IRecipe func_194317_b()`
- `public boolean func_194319_c()`

## CPacketPlayer

*class* `net.minecraft.network.play.client.CPacketPlayer`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Fields
- `protected double x`
- `protected double y`
- `protected double z`
- `protected float yaw`
- `protected float pitch`
- `protected boolean onGround`
- `protected boolean moving`
- `protected boolean rotating`

### Methods
- `public void processPacket(INetHandlerPlayServer handler)`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public double getX(double defaultValue)`
- `public double getY(double defaultValue)`
- `public double getZ(double defaultValue)`
- `public float getYaw(float defaultValue)`
- `public float getPitch(float defaultValue)`
- `public boolean isOnGround()`

## CPacketPlayer.Position

*class* `net.minecraft.network.play.client.CPacketPlayer.Position`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

Enclosing class: CPacketPlayer

### Inherited fields
- from `net.minecraft.network.play.client.CPacketPlayer`: `moving`, `onGround`, `pitch`, `rotating`, `x`, `y`, `yaw`, `z`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.network.play.client.CPacketPlayer`: `getPitch`, `getX`, `getY`, `getYaw`, `getZ`, `isOnGround`, `processPacket`

## CPacketPlayer.PositionRotation

*class* `net.minecraft.network.play.client.CPacketPlayer.PositionRotation`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

Enclosing class: CPacketPlayer

### Inherited fields
- from `net.minecraft.network.play.client.CPacketPlayer`: `moving`, `onGround`, `pitch`, `rotating`, `x`, `y`, `yaw`, `z`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.network.play.client.CPacketPlayer`: `getPitch`, `getX`, `getY`, `getYaw`, `getZ`, `isOnGround`, `processPacket`

## CPacketPlayer.Rotation

*class* `net.minecraft.network.play.client.CPacketPlayer.Rotation`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

Enclosing class: CPacketPlayer

### Inherited fields
- from `net.minecraft.network.play.client.CPacketPlayer`: `moving`, `onGround`, `pitch`, `rotating`, `x`, `y`, `yaw`, `z`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException

### Inherited methods
- from `net.minecraft.network.play.client.CPacketPlayer`: `getPitch`, `getX`, `getY`, `getYaw`, `getZ`, `isOnGround`, `processPacket`

## CPacketPlayerAbilities

*class* `net.minecraft.network.play.client.CPacketPlayerAbilities`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public boolean isInvulnerable()`
- `public void setInvulnerable(boolean isInvulnerable)`
- `public boolean isFlying()`
- `public void setFlying(boolean isFlying)`
- `public boolean isAllowFlying()`
- `public void setAllowFlying(boolean isAllowFlying)`
- `public boolean isCreativeMode()`
- `public void setCreativeMode(boolean isCreativeMode)`
- `public void setFlySpeed(float flySpeedIn)`
- `public void setWalkSpeed(float walkSpeedIn)`

## CPacketPlayerDigging

*class* `net.minecraft.network.play.client.CPacketPlayerDigging`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public BlockPos getPosition()`
- `public EnumFacing getFacing()`
- `public CPacketPlayerDigging.Action getAction()`

## CPacketPlayerDigging.Action

*enum* `net.minecraft.network.play.client.CPacketPlayerDigging.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketPlayerDigging.Action>

Enclosing class: CPacketPlayerDigging

### Fields
- `public static final CPacketPlayerDigging.Action START_DESTROY_BLOCK`
- `public static final CPacketPlayerDigging.Action ABORT_DESTROY_BLOCK`
- `public static final CPacketPlayerDigging.Action STOP_DESTROY_BLOCK`
- `public static final CPacketPlayerDigging.Action DROP_ALL_ITEMS`
- `public static final CPacketPlayerDigging.Action DROP_ITEM`
- `public static final CPacketPlayerDigging.Action RELEASE_USE_ITEM`
- `public static final CPacketPlayerDigging.Action SWAP_HELD_ITEMS`

### Methods
- `public static CPacketPlayerDigging.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketPlayerDigging.Action c : CPacketPlayerDigging.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketPlayerDigging.Action valueOf(java.lang.String name)`
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

## CPacketPlayerTryUseItem

*class* `net.minecraft.network.play.client.CPacketPlayerTryUseItem`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public EnumHand getHand()`

## CPacketPlayerTryUseItemOnBlock

*class* `net.minecraft.network.play.client.CPacketPlayerTryUseItemOnBlock`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public BlockPos getPos()`
- `public EnumFacing getDirection()`
- `public EnumHand getHand()`
- `public float getFacingX()`
- `public float getFacingY()`
- `public float getFacingZ()`

## CPacketRecipeInfo

*class* `net.minecraft.network.play.client.CPacketRecipeInfo`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public CPacketRecipeInfo.Purpose getPurpose()`
- `public IRecipe getRecipe()`
- `public boolean isGuiOpen()`
- `public boolean isFilteringCraftable()`

## CPacketRecipeInfo.Purpose

*enum* `net.minecraft.network.play.client.CPacketRecipeInfo.Purpose`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketRecipeInfo.Purpose>

Enclosing class: CPacketRecipeInfo

### Fields
- `public static final CPacketRecipeInfo.Purpose SHOWN`
- `public static final CPacketRecipeInfo.Purpose SETTINGS`

### Methods
- `public static CPacketRecipeInfo.Purpose[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketRecipeInfo.Purpose c : CPacketRecipeInfo.Purpose.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketRecipeInfo.Purpose valueOf(java.lang.String name)`
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

## CPacketResourcePackStatus

*class* `net.minecraft.network.play.client.CPacketResourcePackStatus`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`

## CPacketResourcePackStatus.Action

*enum* `net.minecraft.network.play.client.CPacketResourcePackStatus.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketResourcePackStatus.Action>

Enclosing class: CPacketResourcePackStatus

### Fields
- `public static final CPacketResourcePackStatus.Action SUCCESSFULLY_LOADED`
- `public static final CPacketResourcePackStatus.Action DECLINED`
- `public static final CPacketResourcePackStatus.Action FAILED_DOWNLOAD`
- `public static final CPacketResourcePackStatus.Action ACCEPTED`

### Methods
- `public static CPacketResourcePackStatus.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketResourcePackStatus.Action c : CPacketResourcePackStatus.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketResourcePackStatus.Action valueOf(java.lang.String name)`
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

## CPacketSeenAdvancements

*class* `net.minecraft.network.play.client.CPacketSeenAdvancements`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public static CPacketSeenAdvancements openedTab(Advancement p_194163_0_)`
- `public static CPacketSeenAdvancements closedScreen()`
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public CPacketSeenAdvancements.Action getAction()`
- `public ResourceLocation getTab()`

## CPacketSeenAdvancements.Action

*enum* `net.minecraft.network.play.client.CPacketSeenAdvancements.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketSeenAdvancements.Action>

Enclosing class: CPacketSeenAdvancements

### Fields
- `public static final CPacketSeenAdvancements.Action OPENED_TAB`
- `public static final CPacketSeenAdvancements.Action CLOSED_SCREEN`

### Methods
- `public static CPacketSeenAdvancements.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketSeenAdvancements.Action c : CPacketSeenAdvancements.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketSeenAdvancements.Action valueOf(java.lang.String name)`
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

## CPacketSpectate

*class* `net.minecraft.network.play.client.CPacketSpectate`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public Entity getEntity(WorldServer worldIn)`

## CPacketSteerBoat

*class* `net.minecraft.network.play.client.CPacketSteerBoat`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public boolean getLeft()`
- `public boolean getRight()`

## CPacketTabComplete

*class* `net.minecraft.network.play.client.CPacketTabComplete`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public java.lang.String getMessage()`
- `public BlockPos getTargetBlock()`
- `public boolean hasTargetBlock()`

## CPacketUpdateSign

*class* `net.minecraft.network.play.client.CPacketUpdateSign`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public BlockPos getPosition()`
- `public java.lang.String[] getLines()`

## CPacketUseEntity

*class* `net.minecraft.network.play.client.CPacketUseEntity`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public Entity getEntityFromWorld(World worldIn)`
- `public CPacketUseEntity.Action getAction()`
- `public EnumHand getHand()`
- `public Vec3d getHitVec()`

## CPacketUseEntity.Action

*enum* `net.minecraft.network.play.client.CPacketUseEntity.Action`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<CPacketUseEntity.Action>

Enclosing class: CPacketUseEntity

### Fields
- `public static final CPacketUseEntity.Action INTERACT`
- `public static final CPacketUseEntity.Action ATTACK`
- `public static final CPacketUseEntity.Action INTERACT_AT`

### Methods
- `public static CPacketUseEntity.Action[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (CPacketUseEntity.Action c : CPacketUseEntity.Action.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static CPacketUseEntity.Action valueOf(java.lang.String name)`
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

## CPacketVehicleMove

*class* `net.minecraft.network.play.client.CPacketVehicleMove`

All Implemented Interfaces: Packet<INetHandlerPlayServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerPlayServer handler)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getYaw()`
- `public float getPitch()`
