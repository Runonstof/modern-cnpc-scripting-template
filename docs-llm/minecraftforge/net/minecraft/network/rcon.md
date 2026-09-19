# net.minecraft.network.rcon

- [IServer](#iserver)
- [RConConsoleSource](#rconconsolesource)
- [RConOutputStream](#rconoutputstream)
- [RConThreadBase](#rconthreadbase)
- [RConThreadClient](#rconthreadclient)
- [RConThreadMain](#rconthreadmain)
- [RConThreadQuery](#rconthreadquery)
- [RConUtils](#rconutils)
## IServer

*interface* `net.minecraft.network.rcon.IServer`

### Methods
- `int getIntProperty(java.lang.String key,  int defaultValue)`
- `java.lang.String getStringProperty(java.lang.String key,  java.lang.String defaultValue)`
- `void setProperty(java.lang.String key,  java.lang.Object value)`
- `void saveProperties()`
- `java.lang.String getSettingsFilename()`
- `java.lang.String getHostname()`
- `int getPort()`
- `java.lang.String getMotd()`
- `java.lang.String getMinecraftVersion()`
- `int getCurrentPlayerCount()`
- `int getMaxPlayers()`
- `java.lang.String[] getOnlinePlayerNames()`
- `java.lang.String getFolderName()`
- `java.lang.String getPlugins()`
- `java.lang.String handleRConCommand(java.lang.String command)`
- `boolean isDebuggingEnabled()`
- `void logInfo(java.lang.String msg)`
- `void logWarning(java.lang.String msg)`
- `void logSevere(java.lang.String msg)`
- `void logDebug(java.lang.String msg)`

## RConConsoleSource

*class* `net.minecraft.network.rcon.RConConsoleSource`

All Implemented Interfaces: ICommandSender

### Methods
- `public java.lang.String getName()`
- `public void sendMessage(ITextComponent component)`
- `public boolean canUseCommand(int permLevel,  java.lang.String commandName)`
- `public World getEntityWorld()`
- `public boolean sendCommandFeedback()`
- `public MinecraftServer getServer()`
- `public void resetLog()`
- `public java.lang.String getLogContents()`

### Inherited methods
- from `net.minecraft.command.ICommandSender`: `getCommandSenderEntity`, `getDisplayName`, `getPosition`, `getPositionVector`, `setCommandStat`

## RConOutputStream

*class* `net.minecraft.network.rcon.RConOutputStream`

### Methods
- `public void writeByteArray(byte[] data)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writeString(java.lang.String data)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writeInt(int data)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writeShort(short data)  throws java.io.IOException`
  - throws: java.io.IOException
- `public byte[] toByteArray()`
- `public void reset()`

## RConThreadBase

*class* `net.minecraft.network.rcon.RConThreadBase`

All Implemented Interfaces: java.lang.Runnable

### Fields
- `protected boolean running`
- `protected IServer server`
- `protected final java.lang.String threadName`
- `protected java.lang.Thread rconThread`
- `protected int maxStopWait`
- `protected java.util.List<java.net.DatagramSocket> socketList`
- `protected java.util.List<java.net.ServerSocket> serverSocketList`

### Methods
- `public void startThread()`
- `public boolean isRunning()`
- `protected void logDebug(java.lang.String msg)`
- `protected void logInfo(java.lang.String msg)`
- `protected void logWarning(java.lang.String msg)`
- `protected void logSevere(java.lang.String msg)`
- `protected int getNumberOfPlayers()`
- `protected void registerSocket(java.net.DatagramSocket socket)`
- `protected boolean closeSocket(java.net.DatagramSocket socket,  boolean removeFromList)`
- `protected boolean closeServerSocket(java.net.ServerSocket socket)`
- `protected boolean closeServerSocket_do(java.net.ServerSocket socket,  boolean removeFromList)`
- `protected void closeAllSockets()`
- `protected void closeAllSockets_do(boolean logWarning)`

### Inherited methods
- from `java.lang.Runnable`: `run`

## RConThreadClient

*class* `net.minecraft.network.rcon.RConThreadClient`

All Implemented Interfaces: java.lang.Runnable

### Inherited fields
- from `net.minecraft.network.rcon.RConThreadBase`: `maxStopWait`, `rconThread`, `running`, `server`, `serverSocketList`, `socketList`, `threadName`

### Methods
- `public void run()`

### Inherited methods
- from `net.minecraft.network.rcon.RConThreadBase`: `closeAllSockets_do`, `closeAllSockets`, `closeServerSocket_do`, `closeServerSocket`, `closeSocket`, `getNumberOfPlayers`, `isRunning`, `logDebug`, `logInfo`, `logSevere`, `logWarning`, `registerSocket`, `startThread`

## RConThreadMain

*class* `net.minecraft.network.rcon.RConThreadMain`

All Implemented Interfaces: java.lang.Runnable

### Inherited fields
- from `net.minecraft.network.rcon.RConThreadBase`: `maxStopWait`, `rconThread`, `running`, `server`, `serverSocketList`, `socketList`, `threadName`

### Methods
- `public void run()`
- `public void startThread()`

### Inherited methods
- from `net.minecraft.network.rcon.RConThreadBase`: `closeAllSockets_do`, `closeAllSockets`, `closeServerSocket_do`, `closeServerSocket`, `closeSocket`, `getNumberOfPlayers`, `isRunning`, `logDebug`, `logInfo`, `logSevere`, `logWarning`, `registerSocket`

## RConThreadQuery

*class* `net.minecraft.network.rcon.RConThreadQuery`

All Implemented Interfaces: java.lang.Runnable

### Inherited fields
- from `net.minecraft.network.rcon.RConThreadBase`: `maxStopWait`, `rconThread`, `running`, `server`, `serverSocketList`, `socketList`, `threadName`

### Methods
- `public void run()`
- `public void startThread()`

### Inherited methods
- from `net.minecraft.network.rcon.RConThreadBase`: `closeAllSockets_do`, `closeAllSockets`, `closeServerSocket_do`, `closeServerSocket`, `closeSocket`, `getNumberOfPlayers`, `isRunning`, `logDebug`, `logInfo`, `logSevere`, `logWarning`, `registerSocket`

## RConUtils

*class* `net.minecraft.network.rcon.RConUtils`

### Fields
- `public static final char[] HEX_DIGITS`

### Methods
- `public static java.lang.String getBytesAsString(byte[] p_72661_0_,  int p_72661_1_,  int p_72661_2_)`
- `public static int getRemainingBytesAsLEInt(byte[] p_72662_0_,  int p_72662_1_)`
- `public static int getBytesAsLEInt(byte[] p_72665_0_,  int p_72665_1_,  int p_72665_2_)`
- `public static int getBytesAsBEint(byte[] p_72664_0_,  int p_72664_1_,  int p_72664_2_)`
- `public static java.lang.String getByteAsHexString(byte input)`
