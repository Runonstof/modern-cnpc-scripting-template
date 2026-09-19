# net.minecraft.network.status.client

- [CPacketPing](#cpacketping)
- [CPacketServerQuery](#cpacketserverquery)
## CPacketPing

*class* `net.minecraft.network.status.client.CPacketPing`

All Implemented Interfaces: Packet<INetHandlerStatusServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerStatusServer handler)`
- `public long getClientTime()`

## CPacketServerQuery

*class* `net.minecraft.network.status.client.CPacketServerQuery`

All Implemented Interfaces: Packet<INetHandlerStatusServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerStatusServer handler)`
