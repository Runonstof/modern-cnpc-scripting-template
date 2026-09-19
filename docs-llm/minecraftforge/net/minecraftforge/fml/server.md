# net.minecraftforge.fml.server

- [FMLServerHandler](#fmlserverhandler)
## FMLServerHandler

*class* `net.minecraftforge.fml.server.FMLServerHandler`

Handles primary communication from hooked code into the system

 The FML entry point is beginServerLoading(MinecraftServer) called from
 DedicatedServer

 Obfuscated code should focus on this class and other members of the "server"
 (or "client") code

 The actual mod loading is handled at arms length by Loader

 It is expected that a similar class will exist for each target environment:
 Bukkit and Client side.

 It should not be directly modified.

All Implemented Interfaces: IFMLSidedHandler

### Methods
- `public void beginServerLoading(MinecraftServer minecraftServer)`
  Called to start the whole game off from
   MinecraftServer#startServer
  - param: minecraftServer - server
- `public void finishServerLoading()`
  Called a bit later on during server initialization to finish loading mods
- `public void haltGame(java.lang.String message,  java.lang.Throwable exception)`
- `public java.io.File getSavesDirectory()`
- `public MinecraftServer getServer()`
  Get the server instance
- `public static FMLServerHandler instance()`
  - returns: the instance
- `public java.util.List<java.lang.String> getAdditionalBrandingInformation()`
- `public Side getSide()`
- `public void showGuiScreen(java.lang.Object clientGuiElement)`
- `public void queryUser(StartupQuery query)  throws java.lang.InterruptedException`
  - throws: java.lang.InterruptedException
- `public boolean isDisplayCloseRequested()`
- `public boolean shouldServerShouldBeKilledQuietly()`
- `public void addModAsResource(ModContainer container)`
- `public java.lang.String getCurrentLanguage()`
- `public void serverStopped()`
- `public NetworkManager getClientToServerNetworkManager()`
- `public INetHandler getClientPlayHandler()`
- `public void fireNetRegistrationEvent(EventBus bus,  NetworkManager manager,  java.util.Set<java.lang.String> channelSet,  java.lang.String channel,  Side side)`
- `public boolean shouldAllowPlayerLogins()`
- `public void allowLogins()`
- `public IThreadListener getWorldThread(INetHandler net)`
- `public void processWindowMessages()`
- `public java.lang.String stripSpecialChars(java.lang.String message)`
- `public void reloadRenderers()`
- `public void fireSidedRegistryEvents()`
- `public CompoundDataFixer getDataFixer()`
- `public boolean isDisplayVSyncForced()`

### Inherited methods
- from `net.minecraftforge.fml.common.IFMLSidedHandler`: `reloadCreativeSettings`, `reloadSearchTrees`, `resetClientRecipeBook`
