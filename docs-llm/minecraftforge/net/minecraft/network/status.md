# net.minecraft.network.status

- [INetHandlerStatusClient](#inethandlerstatusclient)
- [INetHandlerStatusServer](#inethandlerstatusserver)
## INetHandlerStatusClient

*interface* `net.minecraft.network.status.INetHandlerStatusClient`

All Superinterfaces: INetHandler

### Methods
- `void handleServerInfo(SPacketServerInfo packetIn)`
- `void handlePong(SPacketPong packetIn)`

### Inherited methods
- from `net.minecraft.network.INetHandler`: `onDisconnect`

## INetHandlerStatusServer

*interface* `net.minecraft.network.status.INetHandlerStatusServer`

All Superinterfaces: INetHandler

### Methods
- `void processPing(CPacketPing packetIn)`
- `void processServerQuery(CPacketServerQuery packetIn)`

### Inherited methods
- from `net.minecraft.network.INetHandler`: `onDisconnect`
