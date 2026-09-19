# net.minecraft.server.rcon.thread

- [GenericThread](#genericthread)
- [QueryThreadGs4](#querythreadgs4)
- [QueryThreadGs4.RequestChallenge](#querythreadgs4.requestchallenge)
- [RconClient](#rconclient)
- [RconThread](#rconthread)
## GenericThread

*class* `net.minecraft.server.rcon.thread.GenericThread`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final AtomicInteger UNIQUE_THREAD_ID`
- `private static final int MAX_STOP_WAIT` (= 5)
- `protected volatile boolean running`
- `protected final String name`
- `@Nullable protected Thread thread`

### Methods
- `public boolean start()`
- `public void stop()`
- `public boolean isRunning()`

### Inherited methods
- from `java.lang.Runnable`: `run`

## QueryThreadGs4

*class* `net.minecraft.server.rcon.thread.QueryThreadGs4`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final String GAME_TYPE` (= "SMP")
- `private static final String GAME_ID` (= "MINECRAFT")
- `private static final long CHALLENGE_CHECK_INTERVAL` (= 30000L)
- `private static final long RESPONSE_CACHE_TIME` (= 5000L)
- `private long lastChallengeCheck`
- `private final int port`
- `private final int serverPort`
- `private final int maxPlayers`
- `private final String serverName`
- `private final String worldName`
- `private DatagramSocket socket`
- `private final byte[] buffer`
- `private String hostIp`
- `private String serverIp`
- `private final Map<SocketAddress,QueryThreadGs4.RequestChallenge> validChallenges`
- `private final NetworkDataOutputStream rulesResponse`
- `private long lastRulesResponse`
- `private final ServerInterface serverInterface`

### Inherited fields
- from `net.minecraft.server.rcon.thread.GenericThread`: `name`, `running`, `thread`

### Methods
- `@Nullable public static QueryThreadGs4 create(ServerInterface p_11554_)`
- `private void sendTo(byte[] p_11556_,  DatagramPacket p_11557_)  throws IOException`
  - throws: IOException
- `private boolean processPacket(DatagramPacket p_11550_)  throws IOException`
  - throws: IOException
- `private byte[] buildRuleResponse(DatagramPacket p_11559_)  throws IOException`
  - throws: IOException
- `private byte[] getIdentBytes(SocketAddress p_11552_)`
- `private Boolean validChallenge(DatagramPacket p_11561_)`
- `private void sendChallenge(DatagramPacket p_11564_)  throws IOException`
  - throws: IOException
- `private void pruneChallenges()`
- `public void run()`
- `public boolean start()`
- `private void recoverSocketError(Exception p_11548_)`
- `private boolean initSocket()`

### Inherited methods
- from `net.minecraft.server.rcon.thread.GenericThread`: `isRunning`, `stop`

## QueryThreadGs4.RequestChallenge

*class* `net.minecraft.server.rcon.thread.QueryThreadGs4.RequestChallenge`

Enclosing class: QueryThreadGs4

### Fields
- `private final long time`
- `private final int challenge`
- `private final byte[] identBytes`
- `private final byte[] challengeBytes`
- `private final String ident`

### Methods
- `public Boolean before(long p_11576_)`
- `public int getChallenge()`
- `public byte[] getChallengeBytes()`
- `public byte[] getIdentBytes()`
- `public String getIdent()`

## RconClient

*class* `net.minecraft.server.rcon.thread.RconClient`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final int SERVERDATA_AUTH` (= 3)
- `private static final int SERVERDATA_EXECCOMMAND` (= 2)
- `private static final int SERVERDATA_RESPONSE_VALUE` (= 0)
- `private static final int SERVERDATA_AUTH_RESPONSE` (= 2)
- `private static final int SERVERDATA_AUTH_FAILURE` (= -1)
- `private boolean authed`
- `private final Socket client`
- `private final byte[] buf`
- `private final String rconPassword`
- `private final ServerInterface serverInterface`

### Inherited fields
- from `net.minecraft.server.rcon.thread.GenericThread`: `name`, `running`, `thread`

### Methods
- `public void run()`
- `private void send(int p_11591_,  int p_11592_,  String p_11593_)  throws IOException`
  - throws: IOException
- `private void sendAuthFailure()  throws IOException`
  - throws: IOException
- `private void sendCmdResponse(int p_11595_,  String p_11596_)  throws IOException`
  - throws: IOException
- `public void stop()`
- `private void closeSocket()`

### Inherited methods
- from `net.minecraft.server.rcon.thread.GenericThread`: `isRunning`, `start`

## RconThread

*class* `net.minecraft.server.rcon.thread.RconThread`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private final ServerSocket socket`
- `private final String rconPassword`
- `private final List<RconClient> clients`
- `private final ServerInterface serverInterface`

### Inherited fields
- from `net.minecraft.server.rcon.thread.GenericThread`: `name`, `running`, `thread`

### Methods
- `private void clearClients()`
- `public void run()`
- `@Nullable public static RconThread create(ServerInterface p_11616_)`
- `public void stop()`
- `private void closeSocket(ServerSocket p_11614_)`

### Inherited methods
- from `net.minecraft.server.rcon.thread.GenericThread`: `isRunning`, `start`
