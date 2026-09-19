# net.minecraft.network.login

- [INetHandlerLoginClient](#inethandlerloginclient)
- [INetHandlerLoginServer](#inethandlerloginserver)
## INetHandlerLoginClient

*interface* `net.minecraft.network.login.INetHandlerLoginClient`

All Superinterfaces: INetHandler

### Methods
- `void handleEncryptionRequest(SPacketEncryptionRequest packetIn)`
- `void handleLoginSuccess(SPacketLoginSuccess packetIn)`
- `void handleDisconnect(SPacketDisconnect packetIn)`
- `void handleEnableCompression(SPacketEnableCompression packetIn)`

### Inherited methods
- from `net.minecraft.network.INetHandler`: `onDisconnect`

## INetHandlerLoginServer

*interface* `net.minecraft.network.login.INetHandlerLoginServer`

All Superinterfaces: INetHandler

### Methods
- `void processLoginStart(CPacketLoginStart packetIn)`
- `void processEncryptionResponse(CPacketEncryptionResponse packetIn)`

### Inherited methods
- from `net.minecraft.network.INetHandler`: `onDisconnect`
