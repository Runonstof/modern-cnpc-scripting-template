# net.minecraft.network.handshake.client

- [C00Handshake](#c00handshake)
## C00Handshake

*class* `net.minecraft.network.handshake.client.C00Handshake`

All Implemented Interfaces: Packet<INetHandlerHandshakeServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerHandshakeServer handler)`
- `public EnumConnectionState getRequestedState()`
- `public int getProtocolVersion()`
- `public boolean hasFMLMarker()`
