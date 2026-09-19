# net.minecraft.network.login.server

- [SPacketDisconnect](#spacketdisconnect)
- [SPacketEnableCompression](#spacketenablecompression)
- [SPacketEncryptionRequest](#spacketencryptionrequest)
- [SPacketLoginSuccess](#spacketloginsuccess)
## SPacketDisconnect

*class* `net.minecraft.network.login.server.SPacketDisconnect`

All Implemented Interfaces: Packet<INetHandlerLoginClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerLoginClient handler)`
- `public ITextComponent getReason()`

## SPacketEnableCompression

*class* `net.minecraft.network.login.server.SPacketEnableCompression`

All Implemented Interfaces: Packet<INetHandlerLoginClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerLoginClient handler)`
- `public int getCompressionThreshold()`

## SPacketEncryptionRequest

*class* `net.minecraft.network.login.server.SPacketEncryptionRequest`

All Implemented Interfaces: Packet<INetHandlerLoginClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerLoginClient handler)`
- `public java.lang.String getServerId()`
- `public java.security.PublicKey getPublicKey()`
- `public byte[] getVerifyToken()`

## SPacketLoginSuccess

*class* `net.minecraft.network.login.server.SPacketLoginSuccess`

All Implemented Interfaces: Packet<INetHandlerLoginClient>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerLoginClient handler)`
- `public GameProfile getProfile()`
