# net.minecraft.network.login.client

- [CPacketEncryptionResponse](#cpacketencryptionresponse)
- [CPacketLoginStart](#cpacketloginstart)
## CPacketEncryptionResponse

*class* `net.minecraft.network.login.client.CPacketEncryptionResponse`

All Implemented Interfaces: Packet<INetHandlerLoginServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerLoginServer handler)`
- `public javax.crypto.SecretKey getSecretKey(java.security.PrivateKey key)`
- `public byte[] getVerifyToken(java.security.PrivateKey key)`

## CPacketLoginStart

*class* `net.minecraft.network.login.client.CPacketLoginStart`

All Implemented Interfaces: Packet<INetHandlerLoginServer>

### Methods
- `public void readPacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void writePacketData(PacketBuffer buf)  throws java.io.IOException`
  - throws: java.io.IOException
- `public void processPacket(INetHandlerLoginServer handler)`
- `public GameProfile getProfile()`
