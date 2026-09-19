# net.minecraft.server.network

- [NetHandlerHandshakeTCP](#nethandlerhandshaketcp)
- [NetHandlerLoginServer](#nethandlerloginserver)
- [NetHandlerStatusServer](#nethandlerstatusserver)
## NetHandlerHandshakeTCP

*class* `net.minecraft.server.network.NetHandlerHandshakeTCP`

All Implemented Interfaces: INetHandlerHandshakeServer, INetHandler

### Methods
- `public void processHandshake(C00Handshake packetIn)`
- `public void onDisconnect(ITextComponent reason)`

## NetHandlerLoginServer

*class* `net.minecraft.server.network.NetHandlerLoginServer`

All Implemented Interfaces: INetHandler, INetHandlerLoginServer, ITickable

### Fields
- `public final NetworkManager networkManager`

### Methods
- `public void update()`
- `public void disconnect(ITextComponent reason)`
- `public void tryAcceptPlayer()`
- `public void onDisconnect(ITextComponent reason)`
- `public java.lang.String getConnectionInfo()`
- `public void processLoginStart(CPacketLoginStart packetIn)`
- `public void processEncryptionResponse(CPacketEncryptionResponse packetIn)`
- `protected GameProfile getOfflineProfile(GameProfile original)`

## NetHandlerStatusServer

*class* `net.minecraft.server.network.NetHandlerStatusServer`

All Implemented Interfaces: INetHandler, INetHandlerStatusServer

### Methods
- `public void onDisconnect(ITextComponent reason)`
- `public void processServerQuery(CPacketServerQuery packetIn)`
- `public void processPing(CPacketPing packetIn)`
