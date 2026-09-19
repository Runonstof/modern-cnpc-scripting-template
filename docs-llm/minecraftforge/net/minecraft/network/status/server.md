# net.minecraft.network.status.server

- [SPacketPong](#spacketpong)
- [SPacketServerInfo](#spacketserverinfo)
## SPacketPong

*class* `net.minecraft.network.status.server.SPacketPong`

All Implemented Interfaces: Packet<INetHandlerStatusClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerStatusClient handler)`

## SPacketServerInfo

*class* `net.minecraft.network.status.server.SPacketServerInfo`

All Implemented Interfaces: Packet<INetHandlerStatusClient>

### Fields
- `public static final Gson GSON`

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerStatusClient handler)`
- `public ServerStatusResponse getResponse()`
