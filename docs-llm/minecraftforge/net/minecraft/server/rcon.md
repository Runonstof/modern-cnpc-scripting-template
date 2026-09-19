# net.minecraft.server.rcon

- [NetworkDataOutputStream](#networkdataoutputstream)
- [PktUtils](#pktutils)
- [RconConsoleSource](#rconconsolesource)
## NetworkDataOutputStream

*class* `net.minecraft.server.rcon.NetworkDataOutputStream`

### Fields
- `private final ByteArrayOutputStream outputStream`
- `private final DataOutputStream dataOutputStream`

### Methods
- `public void writeBytes(byte[] p_11479_)  throws IOException`
  - throws: IOException
- `public void writeString(String p_11475_)  throws IOException`
  - throws: IOException
- `public void write(int p_11473_)  throws IOException`
  - throws: IOException
- `public void writeShort(short p_11477_)  throws IOException`
  - throws: IOException
- `public void writeInt(int p_144019_)  throws IOException`
  - throws: IOException
- `public void writeFloat(float p_144017_)  throws IOException`
  - throws: IOException
- `public byte[] toByteArray()`
- `public void reset()`

## PktUtils

*class* `net.minecraft.server.rcon.PktUtils`

### Fields
- `public static final int MAX_PACKET_SIZE` (= 1460)
- `public static final char[] HEX_CHAR`

### Methods
- `public static String stringFromByteArray(byte[] p_11489_,  int p_11490_,  int p_11491_)`
- `public static int intFromByteArray(byte[] p_11486_,  int p_11487_)`
- `public static int intFromByteArray(byte[] p_11493_,  int p_11494_,  int p_11495_)`
- `public static int intFromNetworkByteArray(byte[] p_11497_,  int p_11498_,  int p_11499_)`
- `public static String toHexString(byte p_11484_)`

## RconConsoleSource

*class* `net.minecraft.server.rcon.RconConsoleSource`

### Fields
- `private static final String RCON` (= "Rcon")
- `private static final Component RCON_COMPONENT`
- `private final StringBuffer buffer`
- `private final MinecraftServer server`

### Inherited fields
- from `net.minecraft.commands.CommandSource`: `NULL`

### Methods
- `public void prepareForCommand()`
- `public String getCommandResponse()`
- `public CommandSourceStack createCommandSourceStack()`
- `public void sendSystemMessage(Component p_215653_)`
- `public boolean acceptsSuccess()`
- `public boolean acceptsFailure()`
- `public boolean shouldInformAdmins()`

### Inherited methods
- from `net.minecraft.commands.CommandSource`: `alwaysAccepts`
