# net.minecraftforge.client.event

- [Class RegisterGuiOverlaysEvent.Ordering](#class-registerguioverlaysevent.ordering)
- [Class RenderBlockScreenEffectEvent.OverlayType](#class-renderblockscreeneffectevent.overlaytype)
- [ClientChatEvent](#clientchatevent)
- [ClientChatReceivedEvent](#clientchatreceivedevent)
- [ClientChatReceivedEvent.Player](#clientchatreceivedevent.player)
- [ClientChatReceivedEvent.System](#clientchatreceivedevent.system)
- [ClientPlayerChangeGameTypeEvent](#clientplayerchangegametypeevent)
- [ClientPlayerNetworkEvent](#clientplayernetworkevent)
- [ClientPlayerNetworkEvent.Clone](#clientplayernetworkevent.clone)
- [ClientPlayerNetworkEvent.LoggingIn](#clientplayernetworkevent.loggingin)
- [ClientPlayerNetworkEvent.LoggingOut](#clientplayernetworkevent.loggingout)
- [ComputeFovModifierEvent](#computefovmodifierevent)
- [ContainerScreenEvent](#containerscreenevent)
- [ContainerScreenEvent.Render](#containerscreenevent.render)
- [ContainerScreenEvent.Render.Background](#containerscreenevent.render.background)
- [ContainerScreenEvent.Render.Foreground](#containerscreenevent.render.foreground)
- [CustomizeGuiOverlayEvent](#customizeguioverlayevent)
- [CustomizeGuiOverlayEvent.BossEventProgress](#customizeguioverlayevent.bosseventprogress)
- [CustomizeGuiOverlayEvent.Chat](#customizeguioverlayevent.chat)
- [CustomizeGuiOverlayEvent.DebugText](#customizeguioverlayevent.debugtext)
- [EntityRenderersEvent](#entityrenderersevent)
- [EntityRenderersEvent.AddLayers](#entityrenderersevent.addlayers)
- [EntityRenderersEvent.CreateSkullModels](#entityrenderersevent.createskullmodels)
- [EntityRenderersEvent.RegisterLayerDefinitions](#entityrenderersevent.registerlayerdefinitions)
- [EntityRenderersEvent.RegisterRenderers](#entityrenderersevent.registerrenderers)
- [ForgeEventFactoryClient](#forgeeventfactoryclient)
- [InputEvent](#inputevent)
- [InputEvent.InteractionKeyMappingTriggered](#inputevent.interactionkeymappingtriggered)
- [InputEvent.Key](#inputevent.key)
- [InputEvent.MouseButton](#inputevent.mousebutton)
- [InputEvent.MouseButton.Post](#inputevent.mousebutton.post)
- [InputEvent.MouseButton.Pre](#inputevent.mousebutton.pre)
- [InputEvent.MouseScrollingEvent](#inputevent.mousescrollingevent)
- [ModelEvent](#modelevent)
- [ModelEvent.BakingCompleted](#modelevent.bakingcompleted)
- [ModelEvent.ModifyBakingResult](#modelevent.modifybakingresult)
- [ModelEvent.RegisterAdditional](#modelevent.registeradditional)
- [ModelEvent.RegisterGeometryLoaders](#modelevent.registergeometryloaders)
- [MovementInputUpdateEvent](#movementinputupdateevent)
- [RecipesUpdatedEvent](#recipesupdatedevent)
- [RegisterClientCommandsEvent](#registerclientcommandsevent)
- [RegisterClientReloadListenersEvent](#registerclientreloadlistenersevent)
- [RegisterClientTooltipComponentFactoriesEvent](#registerclienttooltipcomponentfactoriesevent)
- [RegisterColorHandlersEvent](#registercolorhandlersevent)
- [RegisterColorHandlersEvent.Block](#registercolorhandlersevent.block)
- [RegisterColorHandlersEvent.ColorResolvers](#registercolorhandlersevent.colorresolvers)
- [RegisterColorHandlersEvent.Item](#registercolorhandlersevent.item)
- [RegisterDimensionSpecialEffectsEvent](#registerdimensionspecialeffectsevent)
- [RegisterEntitySpectatorShadersEvent](#registerentityspectatorshadersevent)
- [RegisterGuiOverlaysEvent](#registerguioverlaysevent)
- [RegisterItemDecorationsEvent](#registeritemdecorationsevent)
- [RegisterKeyMappingsEvent](#registerkeymappingsevent)
- [RegisterNamedRenderTypesEvent](#registernamedrendertypesevent)
- [RegisterParticleProvidersEvent](#registerparticleprovidersevent)
- [RegisterPresetEditorsEvent](#registerpreseteditorsevent)
- [RegisterRecipeBookCategoriesEvent](#registerrecipebookcategoriesevent)
- [RegisterShadersEvent](#registershadersevent)
- [RegisterTextureAtlasSpriteLoadersEvent](#registertextureatlasspriteloadersevent)
- [RenderArmEvent](#renderarmevent)
- [RenderBlockScreenEffectEvent](#renderblockscreeneffectevent)
- [RenderGuiEvent](#renderguievent)
- [RenderGuiEvent.Post](#renderguievent.post)
- [RenderGuiEvent.Pre](#renderguievent.pre)
- [RenderGuiOverlayEvent](#renderguioverlayevent)
- [RenderGuiOverlayEvent.Post](#renderguioverlayevent.post)
- [RenderGuiOverlayEvent.Pre](#renderguioverlayevent.pre)
- [RenderHandEvent](#renderhandevent)
- [RenderHighlightEvent](#renderhighlightevent)
- [RenderHighlightEvent.Block](#renderhighlightevent.block)
- [RenderHighlightEvent.Entity](#renderhighlightevent.entity)
- [RenderItemInFrameEvent](#renderiteminframeevent)
- [RenderLevelStageEvent](#renderlevelstageevent)
- [RenderLevelStageEvent.RegisterStageEvent](#renderlevelstageevent.registerstageevent)
- [RenderLevelStageEvent.Stage](#renderlevelstageevent.stage)
- [RenderLivingEvent.Post>](#renderlivingevent.post)
- [RenderLivingEvent.Pre>](#renderlivingevent.pre)
- [RenderLivingEvent>](#renderlivingevent)
- [RenderNameTagEvent](#rendernametagevent)
- [RenderPlayerEvent](#renderplayerevent)
- [RenderPlayerEvent.Post](#renderplayerevent.post)
- [RenderPlayerEvent.Pre](#renderplayerevent.pre)
- [RenderTooltipEvent](#rendertooltipevent)
- [RenderTooltipEvent.Color](#rendertooltipevent.color)
- [RenderTooltipEvent.GatherComponents](#rendertooltipevent.gathercomponents)
- [RenderTooltipEvent.Pre](#rendertooltipevent.pre)
- [ScreenEvent](#screenevent)
- [ScreenEvent.BackgroundRendered](#screenevent.backgroundrendered)
- [ScreenEvent.CharacterTyped](#screenevent.charactertyped)
- [ScreenEvent.CharacterTyped.Post](#screenevent.charactertyped.post)
- [ScreenEvent.CharacterTyped.Pre](#screenevent.charactertyped.pre)
- [ScreenEvent.Closing](#screenevent.closing)
- [ScreenEvent.Init](#screenevent.init)
- [ScreenEvent.Init.Post](#screenevent.init.post)
- [ScreenEvent.Init.Pre](#screenevent.init.pre)
- [ScreenEvent.KeyInput](#screenevent.keyinput)
- [ScreenEvent.KeyPressed](#screenevent.keypressed)
- [ScreenEvent.KeyPressed.Post](#screenevent.keypressed.post)
- [ScreenEvent.KeyPressed.Pre](#screenevent.keypressed.pre)
- [ScreenEvent.KeyReleased](#screenevent.keyreleased)
- [ScreenEvent.KeyReleased.Post](#screenevent.keyreleased.post)
- [ScreenEvent.KeyReleased.Pre](#screenevent.keyreleased.pre)
- [ScreenEvent.MouseButtonPressed](#screenevent.mousebuttonpressed)
- [ScreenEvent.MouseButtonPressed.Post](#screenevent.mousebuttonpressed.post)
- [ScreenEvent.MouseButtonPressed.Pre](#screenevent.mousebuttonpressed.pre)
- [ScreenEvent.MouseButtonReleased](#screenevent.mousebuttonreleased)
- [ScreenEvent.MouseButtonReleased.Post](#screenevent.mousebuttonreleased.post)
- [ScreenEvent.MouseButtonReleased.Pre](#screenevent.mousebuttonreleased.pre)
- [ScreenEvent.MouseDragged](#screenevent.mousedragged)
- [ScreenEvent.MouseDragged.Post](#screenevent.mousedragged.post)
- [ScreenEvent.MouseDragged.Pre](#screenevent.mousedragged.pre)
- [ScreenEvent.MouseInput](#screenevent.mouseinput)
- [ScreenEvent.MouseScrolled](#screenevent.mousescrolled)
- [ScreenEvent.MouseScrolled.Post](#screenevent.mousescrolled.post)
- [ScreenEvent.MouseScrolled.Pre](#screenevent.mousescrolled.pre)
- [ScreenEvent.Opening](#screenevent.opening)
- [ScreenEvent.Render](#screenevent.render)
- [ScreenEvent.Render.Post](#screenevent.render.post)
- [ScreenEvent.Render.Pre](#screenevent.render.pre)
- [ScreenEvent.RenderInventoryMobEffects](#screenevent.renderinventorymobeffects)
- [ScreenshotEvent](#screenshotevent)
- [TextureStitchEvent](#texturestitchevent)
- [TextureStitchEvent.Post](#texturestitchevent.post)
- [ToastAddEvent](#toastaddevent)
- [ViewportEvent](#viewportevent)
- [ViewportEvent.ComputeCameraAngles](#viewportevent.computecameraangles)
- [ViewportEvent.ComputeFogColor](#viewportevent.computefogcolor)
- [ViewportEvent.ComputeFov](#viewportevent.computefov)
- [ViewportEvent.RenderFog](#viewportevent.renderfog)
## Class RegisterGuiOverlaysEvent.Ordering

*enum* `net.minecraftforge.client.event.Class RegisterGuiOverlaysEvent.Ordering`

Enclosing class: RegisterGuiOverlaysEvent

### Methods
- `public static RegisterGuiOverlaysEvent.Ordering[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RegisterGuiOverlaysEvent.Ordering valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class RenderBlockScreenEffectEvent.OverlayType

*enum* `net.minecraftforge.client.event.Class RenderBlockScreenEffectEvent.OverlayType`

The type of the block overlay to be rendered.

Enclosing class: RenderBlockScreenEffectEvent

### Methods
- `public static RenderBlockScreenEffectEvent.OverlayType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RenderBlockScreenEffectEvent.OverlayType valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## ClientChatEvent

*class* `net.minecraftforge.client.event.ClientChatEvent`

Fired when the client is about to send a chat message to the server.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the chat message will not be sent to the server.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private String message`
- `private final String originalMessage`

### Methods
- `public String getMessage()`
  Returns the message that will be sent to the server, if the event is not cancelled. This can be changed by mods.
  - returns: the message that will be sent to the server, if the event is not cancelled. This can be changed by mods
- `public void setMessage(String message)`
  Sets the new message to be sent to the server, if the event is not cancelled.
  - param: message - the new message to be sent
- `public String getOriginalMessage()`
  Returns the original message that was to be sent to the server. This cannot be changed by mods.
  - returns: the original message that was to be sent to the server. This cannot be changed by mods

## ClientChatReceivedEvent

*class* `net.minecraftforge.client.event.ClientChatReceivedEvent`

Fired when a chat message is received on the client.
 This can be used for filtering and detecting messages with specific words or phrases, and suppressing them.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the message is not displayed in the chat message window.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private Component message`
- `private final ChatType.Bound boundChatType`
- `private final UUID sender`

### Methods
- `public Component getMessage()`
  Returns the message that will be displayed in the chat message window, if the event is not cancelled.
  - returns: the message that will be displayed in the chat message window, if the event is not cancelled
- `public void setMessage(Component message)`
  Sets the new message to be displayed in the chat message window, if the event is not cancelled.
  - param: message - the new message to be displayed
- `public ChatType.Bound getBoundChatType()`
  Returns the bound chat type of the chat message..
   This contains the chat type, display name of the sender, and nullable target name depending on the chat type.
  - returns: the bound chat type of the chat message
- `public UUID getSender()`
  Returns the message sender..
   This will be Util.NIL_UUID if the message is a system message.
  - returns: the message sender
- `public boolean isSystem()`
  Returns true if the message was sent by the system, false otherwise.
  - returns: true if the message was sent by the system, false otherwise

## ClientChatReceivedEvent.Player

*class* `net.minecraftforge.client.event.ClientChatReceivedEvent.Player`

Fired when a player chat message is received on the client.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the message is not displayed in the chat message window.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ClientChatReceivedEvent

### Fields
- `private final PlayerChatMessage playerChatMessage`

### Methods
- `public PlayerChatMessage getPlayerChatMessage()`
  Returns the full player chat message..
   This contains the sender UUID, various signing data, and the optional unsigned contents.
  - returns: the full player chat message

### Inherited methods
- from `net.minecraftforge.client.event.ClientChatReceivedEvent`: `getBoundChatType`, `getMessage`, `getSender`, `isSystem`, `setMessage`

## ClientChatReceivedEvent.System

*class* `net.minecraftforge.client.event.ClientChatReceivedEvent.System`

Fired when a system chat message is received on the client.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the message is not displayed in the chat message window or in the overlay.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ClientChatReceivedEvent

### Fields
- `private final boolean overlay`

### Methods
- `public boolean isOverlay()`
  Returns whether the message goes to the overlay.
  - returns: whether the message goes to the overlay

### Inherited methods
- from `net.minecraftforge.client.event.ClientChatReceivedEvent`: `getBoundChatType`, `getMessage`, `getSender`, `isSystem`, `setMessage`

## ClientPlayerChangeGameTypeEvent

*class* `net.minecraftforge.client.event.ClientPlayerChangeGameTypeEvent`

Fired when the client player is notified of a change of GameType from the server.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final PlayerInfo info`
- `private final GameType currentGameType`
- `private final GameType newGameType`

### Methods
- `public PlayerInfo getInfo()`
  Returns the client player information.
  - returns: the client player information
- `public GameType getCurrentGameType()`
  Returns the current game type of the player.
  - returns: the current game type of the player
- `public GameType getNewGameType()`
  Returns the new game type of the player.
  - returns: the new game type of the player

## ClientPlayerNetworkEvent

*class* `net.minecraftforge.client.event.ClientPlayerNetworkEvent`

Fired for different client connectivity events.
 See the various subclasses to listen for specific events.

 These events are fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final MultiPlayerGameMode multiPlayerGameMode`
- `private final LocalPlayer player`
- `private final Connection connection`

### Methods
- `public MultiPlayerGameMode getMultiPlayerGameMode()`
  Returns the multiplayer game mode controller for the player.
  - returns: the multiplayer game mode controller for the player
- `public LocalPlayer getPlayer()`
  Returns the player instance.
  - returns: the player instance
- `public Connection getConnection()`
  Returns the network connection for the player.
  - returns: the network connection for the player

## ClientPlayerNetworkEvent.Clone

*class* `net.minecraftforge.client.event.ClientPlayerNetworkEvent.Clone`

Fired when the client player respawns, creating a new player instance to replace the old player instance.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ClientPlayerNetworkEvent

### Fields
- `private final LocalPlayer oldPlayer`

### Methods
- `public LocalPlayer getOldPlayer()`
  Returns the previous player instance.
  - returns: the previous player instance
- `public LocalPlayer getNewPlayer()`
  Returns the newly created player instance.
  - returns: the newly created player instance
- `public LocalPlayer getPlayer()`
  Returns the newly created player instance.
  - returns: the newly created player instance

### Inherited methods
- from `net.minecraftforge.client.event.ClientPlayerNetworkEvent`: `getConnection`, `getMultiPlayerGameMode`

## ClientPlayerNetworkEvent.LoggingIn

*class* `net.minecraftforge.client.event.ClientPlayerNetworkEvent.LoggingIn`

Fired when the client player logs in to the server. The player should be initialized.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ClientPlayerNetworkEvent

### Inherited methods
- from `net.minecraftforge.client.event.ClientPlayerNetworkEvent`: `getConnection`, `getMultiPlayerGameMode`, `getPlayer`

## ClientPlayerNetworkEvent.LoggingOut

*class* `net.minecraftforge.client.event.ClientPlayerNetworkEvent.LoggingOut`

Fired when the client player logs out. This event may also fire when a new integrated server is being created.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ClientPlayerNetworkEvent

### Methods
- `@Nullable public @Nullable MultiPlayerGameMode getMultiPlayerGameMode()`
  Returns the multiplayer game mode controller for the player, may be null.. This may be null
   in certain situations such as the creating a new integrated server (singleplayer world) or connecting to
   a multiplayer server.
  - returns: the multiplayer game mode controller for the player, may be null
- `@Nullable public @Nullable LocalPlayer getPlayer()`
  Returns the player instance, may be null.. This may be null
   in certain situations such as the creating a new integrated server (singleplayer world) or connecting to
   a multiplayer server.
  - returns: the player instance, may be null
- `@Nullable public @Nullable Connection getConnection()`
  Returns the network connection for the player, may be null.. This may be null
   in certain situations such as the creating a new integrated server (singleplayer world) or connecting to
   a multiplayer server.
  - returns: the network connection for the player, may be null

## ComputeFovModifierEvent

*class* `net.minecraftforge.client.event.ComputeFovModifierEvent`

Fired after the field of vision (FOV) modifier for the player is calculated to allow developers to adjust it further.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final Player player`
- `private final float fovModifier`
- `private float newFovModifier`

### Methods
- `public Player getPlayer()`
  Returns the player affected by this event.
  - returns: the player affected by this event
- `public float getFovModifier()`
  Returns the original field of vision (FOV) of the player, before any modifications or interpolation.
  - returns: the original field of vision (FOV) of the player, before any modifications or interpolation
- `public float getNewFovModifier()`
  Returns the current field of vision (FOV) of the player.
  - returns: the current field of vision (FOV) of the player
- `public void setNewFovModifier(float newFovModifier)`
  Sets the new field of vision (FOV) of the player.
  - param: newFovModifier - the new field of vision (FOV)

## ContainerScreenEvent

*class* `net.minecraftforge.client.event.ContainerScreenEvent`

Fired for hooking into AbstractContainerScreen events.
 See the subclasses to listen for specific events.

 These events are fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final AbstractContainerScreen<?> containerScreen`

### Methods
- `public AbstractContainerScreen<?> getContainerScreen()`
  Returns the container screen.
  - returns: the container screen

## ContainerScreenEvent.Render

*class* `net.minecraftforge.client.event.ContainerScreenEvent.Render`

Fired every time an AbstractContainerScreen renders.
 See the two subclasses to listen for foreground or background rendering.

 These events are fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ContainerScreenEvent

### Fields
- `private final GuiGraphics guiGraphics`
- `private final int mouseX`
- `private final int mouseY`

### Methods
- `public GuiGraphics getGuiGraphics()`
  Returns the gui graphics used for rendering.
  - returns: the gui graphics used for rendering
- `public int getMouseX()`
  Returns the X coordinate of the mouse pointer.
  - returns: the X coordinate of the mouse pointer
- `public int getMouseY()`
  Returns the Y coordinate of the mouse pointer.
  - returns: the Y coordinate of the mouse pointer

### Inherited methods
- from `net.minecraftforge.client.event.ContainerScreenEvent`: `getContainerScreen`

## ContainerScreenEvent.Render.Background

*class* `net.minecraftforge.client.event.ContainerScreenEvent.Render.Background`

Fired after the container screen's background layer and elements are drawn.
 This can be used for rendering new background elements.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ContainerScreenEvent.Render

### Inherited methods
- from `net.minecraftforge.client.event.ContainerScreenEvent.Render`: `getGuiGraphics`, `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ContainerScreenEvent`: `getContainerScreen`

## ContainerScreenEvent.Render.Foreground

*class* `net.minecraftforge.client.event.ContainerScreenEvent.Render.Foreground`

Fired after the container screen's foreground layer and elements are drawn, but
 before rendering the tooltips and the item stack being dragged by the player.

 This can be used for rendering elements that must be above other screen elements, but
 below tooltips and the dragged stack, such as slot or item stack specific overlays.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ContainerScreenEvent.Render

### Inherited methods
- from `net.minecraftforge.client.event.ContainerScreenEvent.Render`: `getGuiGraphics`, `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ContainerScreenEvent`: `getContainerScreen`

## CustomizeGuiOverlayEvent

*class* `net.minecraftforge.client.event.CustomizeGuiOverlayEvent`

Fired when an overlay is about to be rendered to the screen to allow the user to modify it.

### Fields
- `private final Window window`
- `private final GuiGraphics guiGraphics`
- `private final float partialTick`

### Methods
- `public Window getWindow()`
- `public GuiGraphics getGuiGraphics()`
- `public float getPartialTick()`

## CustomizeGuiOverlayEvent.BossEventProgress

*class* `net.minecraftforge.client.event.CustomizeGuiOverlayEvent.BossEventProgress`

Fired before a boss health bar is rendered to the screen.

 This event is cancellable, and does not have a result.
 Cancelling this event will prevent the given bar from rendering.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: CustomizeGuiOverlayEvent

### Fields
- `private final LerpingBossEvent bossEvent`
- `private final int x`
- `private final int y`
- `private int increment`

### Methods
- `public LerpingBossEvent getBossEvent()`
  - returns: the boss health bar currently being rendered
- `public int getX()`
  Returns the X position of the boss health bar.
  - returns: the X position of the boss health bar
- `public int getY()`
  Returns the Y position of the boss health bar.
  - returns: the Y position of the boss health bar
- `public int getIncrement()`
  Returns the Y position increment before rendering the next boss health bar.
  - returns: the Y position increment before rendering the next boss health bar
- `public void setIncrement(int increment)`
  Sets the Y position increment before rendering the next boss health bar.
  - param: increment - the new Y position increment

### Inherited methods
- from `net.minecraftforge.client.event.CustomizeGuiOverlayEvent`: `getGuiGraphics`, `getPartialTick`, `getWindow`

## CustomizeGuiOverlayEvent.Chat

*class* `net.minecraftforge.client.event.CustomizeGuiOverlayEvent.Chat`

Fired before the chat messages overlay is rendered to the screen.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: CustomizeGuiOverlayEvent

### Fields
- `private int posX`
- `private int posY`

### Methods
- `public int getPosX()`
  - returns: the X position of the chat messages overlay
- `public void setPosX(int posX)`
  Sets the new X position for rendering the chat messages overlay
  - param: posX - the new X position
- `public int getPosY()`
  - returns: the Y position of the chat messages overlay
- `public void setPosY(int posY)`
  Sets the new Y position for rendering the chat messages overlay
  - param: posY - the new y position

### Inherited methods
- from `net.minecraftforge.client.event.CustomizeGuiOverlayEvent`: `getGuiGraphics`, `getPartialTick`, `getWindow`

## CustomizeGuiOverlayEvent.DebugText

*class* `net.minecraftforge.client.event.CustomizeGuiOverlayEvent.DebugText`

Fired before textual information is rendered to the debug screen.
 This can be used to add or remove text information.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: CustomizeGuiOverlayEvent

### Fields
- `private final ArrayList<String> left`
- `private final ArrayList<String> right`

### Methods
- `public ArrayList<String> getLeft()`
  - returns: the modifiable list of text to render on the left side
- `public ArrayList<String> getRight()`
  - returns: the modifiable list of text to render on the right side

### Inherited methods
- from `net.minecraftforge.client.event.CustomizeGuiOverlayEvent`: `getGuiGraphics`, `getPartialTick`, `getWindow`

## EntityRenderersEvent

*class* `net.minecraftforge.client.event.EntityRenderersEvent`

Fired for on different events/actions relating to entity renderers.
 See the various subclasses for listening to different events.

 These events are fired on the mod-specific event bus,
 only on the logical client.

## EntityRenderersEvent.AddLayers

*class* `net.minecraftforge.client.event.EntityRenderersEvent.AddLayers`

Fired for registering entity renderer layers at the appropriate time, after the entity and player renderers maps
 have been created.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: EntityRenderersEvent

### Fields
- `private final Map<EntityType<?>,EntityRenderer<?>> renderers`
- `private final Map<PlayerSkin.Model,EntityRenderer<? extends Player>> skinMap`
- `private final EntityRendererProvider.Context context`

### Methods
- `public Set<PlayerSkin.Model> getSkins()`
  Returns the set of player skin names which have a renderer.
  
   Minecraft provides two default skin names: default for the
   regular player model and slim for the
   slim player model.
  - returns: the set of player skin names which have a renderer
- `@Nullable public <R extends EntityRenderer<? extends Player>> R getPlayerSkin(PlayerSkin.Model skinName)`
  Returns a player skin renderer for the given skin name.
  - param: skinName - the name of the skin to get the renderer for
  - returns: the skin renderer, or null if no renderer is registered for that skin name
- `@Nullable @Deprecated(forRemoval=true,  since="1.20.2") public <R extends LivingEntityRenderer<? extends Player, ? extends EntityModel<? extends Player>>> R getSkin(PlayerSkin.Model skinName)` (deprecated)
- `@Nullable public <T extends LivingEntity, R extends EntityRenderer<T>> R getEntityRenderer(EntityType<? extends T> entityType)`
  Returns an entity renderer for the given entity type.
  - param: entityType - the entity type to return a renderer for
  - returns: the renderer, or null if no renderer is registered for that entity type
- `@Nullable @Deprecated(forRemoval=true,  since="1.20.2") public <T extends LivingEntity, R extends LivingEntityRenderer<T, ? extends EntityModel<T>>> R getRenderer(EntityType<? extends T> entityType)` (deprecated)
- `public EntityModelSet getEntityModels()`
  Returns the set of entity models.
  - returns: the set of entity models
- `public EntityRendererProvider.Context getContext()`
  Returns the context for the entity renderer provider.
  - returns: the context for the entity renderer provider

## EntityRenderersEvent.CreateSkullModels

*class* `net.minecraftforge.client.event.EntityRenderersEvent.CreateSkullModels`

Fired for registering additional skull models at the appropriate time.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: EntityRenderersEvent

### Fields
- `private final com.google.common.collect.ImmutableMap.Builder<SkullBlock.Type,SkullModelBase> builder`
- `private final EntityModelSet entityModelSet`

### Methods
- `public EntityModelSet getEntityModelSet()`
  Returns the set of entity models.
  - returns: the set of entity models
- `public void registerSkullModel(SkullBlock.Type type,  SkullModelBase model)`
  Registers the constructor for a skull block with the given SkullBlock.Type.
   These will be inserted into the maps used by the item, entity, and block model renderers at the appropriate
   time.
  - param: type - a unique skull type; an exception will be thrown later if multiple mods (including vanilla)
 register models for the same type
  - param: model - the skull model instance. A typical implementation will simply bake a model using
 EntityModelSet.bakeLayer(ModelLayerLocation) and pass it to the constructor for
 SkullModel.

## EntityRenderersEvent.RegisterLayerDefinitions

*class* `net.minecraftforge.client.event.EntityRenderersEvent.RegisterLayerDefinitions`

Fired for registering layer definitions at the appropriate time.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: EntityRenderersEvent

### Methods
- `public void registerLayerDefinition(ModelLayerLocation layerLocation,  Supplier<LayerDefinition> supplier)`
  Registers a layer definition supplier with the given ModelLayerLocation.
   These will be inserted into the main layer definition map for entity model layers at the appropriate time.
  - param: layerLocation - the model layer location, which should be used in conjunction with
 EntityRendererProvider.Context.bakeLayer(ModelLayerLocation)
  - param: supplier - a supplier to create a LayerDefinition, generally a static method reference in
 the entity model class

## EntityRenderersEvent.RegisterRenderers

*class* `net.minecraftforge.client.event.EntityRenderersEvent.RegisterRenderers`

Fired for registering entity and block entity renderers at the appropriate time.
 For registering entity renderer layers to existing entity renderers (whether vanilla or registered through this
 event), listen for the EntityRenderersEvent.AddLayers event instead.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: EntityRenderersEvent

### Methods
- `public <T extends Entity> void registerEntityRenderer(EntityType<? extends T> entityType,  EntityRendererProvider<T> entityRendererProvider)`
  Registers an entity renderer for the given entity type.
  - param: entityType - the entity type to register a renderer for
  - param: entityRendererProvider - the renderer provider
- `public <T extends BlockEntity> void registerBlockEntityRenderer(BlockEntityType<? extends T> blockEntityType,  BlockEntityRendererProvider<T> blockEntityRendererProvider)`
  Registers a block entity renderer for the given block entity type.
  - param: blockEntityType - the block entity type to register a renderer for
  - param: blockEntityRendererProvider - the renderer provider

## ForgeEventFactoryClient

*class* `net.minecraftforge.client.event.ForgeEventFactoryClient`

### Methods
- `private static boolean post(net.minecraftforge.eventbus.api.Event e)`
- `private static <E extends net.minecraftforge.eventbus.api.Event> E fire(E e)`
- `public static void gatherLayers(Map<EntityType<?>,EntityRenderer<?>> renderers,  Map<PlayerSkin.Model,EntityRenderer<? extends Player>> playerRenderers,  EntityRendererProvider.Context context)`
- `public static boolean onScreenMouseReleasedPre(Screen guiScreen,  double mouseX,  double mouseY,  int button)`
- `public static boolean onScreenMouseReleasedPost(Screen guiScreen,  double mouseX,  double mouseY,  int button,  boolean handled)`
- `public static boolean onScreenMouseClickedPre(Screen guiScreen,  double mouseX,  double mouseY,  int button)`
- `public static boolean onScreenMouseClickedPost(Screen guiScreen,  double mouseX,  double mouseY,  int button,  boolean handled)`
- `public static boolean onMouseButtonPre(int button,  int action,  int mods)`
- `public static void onMouseButtonPost(int button,  int action,  int mods)`
- `public static boolean onScreenMouseScrollPre(Screen guiScreen,  double mouseX,  double mouseY,  double deltaX,  double deltaY)`
- `public static void onScreenMouseScrollPost(Screen guiScreen,  double mouseX,  double mouseY,  double deltaX,  double deltaY)`
- `public static boolean onMouseScroll(MouseHandler mouseHelper,  double deltaX,  double deltaY)`
- `public static boolean onScreenMouseDragPre(Screen guiScreen,  double mouseX,  double mouseY,  int mouseButton,  double dragX,  double dragY)`
- `public static void onScreenMouseDragPost(Screen guiScreen,  double mouseX,  double mouseY,  int mouseButton,  double dragX,  double dragY)`
- `@Nullable public static @Nullable Screen onScreenOpening(Screen old,  Screen screen)`
- `public static void onScreenClose(Screen screen)`

## InputEvent

*class* `net.minecraftforge.client.event.InputEvent`

Fired when an input is detected from the user's input devices.
 See the various subclasses to listen for specific devices and inputs.

## InputEvent.InteractionKeyMappingTriggered

*class* `net.minecraftforge.client.event.InputEvent.InteractionKeyMappingTriggered`

Fired when a keymapping that by default involves clicking the mouse buttons is triggered.

 The key bindings that trigger this event are:

 Use Item - defaults to left mouse click
 Pick Block - defaults to middle mouse click
 Attack - defaults to right mouse click

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the keymapping's action is not processed further, and the hand will be swung
 according to shouldSwingHand().

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: InputEvent

### Fields
- `private final int button`
- `private final KeyMapping keyMapping`
- `private final InteractionHand hand`
- `private boolean handSwing`

### Methods
- `public void setSwingHand(boolean value)`
  Sets whether to swing the hand. This takes effect whether or not the event is cancelled.
  - param: value - whether to swing the hand
- `public boolean shouldSwingHand()`
  Returns whether to swing the hand; always takes effect, regardless of cancellation.
  - returns: whether to swing the hand; always takes effect, regardless of cancellation
- `public InteractionHand getHand()`
  Returns the hand that caused the input.
  
   The event will be called for both hands if this is a use item input regardless
   of both event's cancellation.
   Will always be InteractionHand.MAIN_HAND if this is an attack or pick block input.
  - returns: the hand that caused the input
- `public boolean isAttack()`
  Returns true if the mouse button is the left mouse button.
  - returns: true if the mouse button is the left mouse button
- `public boolean isUseItem()`
  Returns true if the mouse button is the right mouse button.
  - returns: true if the mouse button is the right mouse button
- `public boolean isPickBlock()`
  Returns true if the mouse button is the middle mouse button.
  - returns: true if the mouse button is the middle mouse button
- `public KeyMapping getKeyMapping()`
  Returns the key mapping which triggered this event.
  - returns: the key mapping which triggered this event

## InputEvent.Key

*class* `net.minecraftforge.client.event.InputEvent.Key`

Fired when a keyboard key input occurs, such as pressing, releasing, or repeating a key.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: InputEvent

### Fields
- `private final int key`
- `private final int scanCode`
- `private final int action`
- `private final int modifiers`

### Methods
- `public int getKey()`
  Returns the GLFW (platform-agnostic) key code.
  - returns: the GLFW (platform-agnostic) key code
- `public int getScanCode()`
  Returns the platform-specific scan code.
  
   The scan code is unique for every key, regardless of whether it has a key code.
   Scan codes are platform-specific but consistent over time, so keys will have different scan codes depending
   on the platform but they are safe to save to disk as custom key bindings.
  - returns: the platform-specific scan code
- `public int getAction()`
  Returns the mouse button's action.
  - returns: the mouse button's action
- `public int getModifiers()`
  Returns a bit field representing the active modifier keys.
  - returns: a bit field representing the active modifier keys

## InputEvent.MouseButton

*class* `net.minecraftforge.client.event.InputEvent.MouseButton`

Fired when a mouse button is pressed/released. Sub-events get fired before and after this happens.

 These events are fired on the main Forge event bus,
 only on the logical client.

Enclosing class: InputEvent

### Fields
- `private final int button`
- `private final int action`
- `private final int modifiers`

### Methods
- `public int getButton()`
  Returns the mouse button's input code.
  - returns: the mouse button's input code
- `public int getAction()`
  Returns the mouse button's action.
  - returns: the mouse button's action
- `public int getModifiers()`
  Returns a bit field representing the active modifier keys.
  - returns: a bit field representing the active modifier keys

## InputEvent.MouseButton.Post

*class* `net.minecraftforge.client.event.InputEvent.MouseButton.Post`

Fired when a mouse button is pressed/released, after processing.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: InputEvent.MouseButton

### Inherited methods
- from `net.minecraftforge.client.event.InputEvent.MouseButton`: `getAction`, `getButton`, `getModifiers`

## InputEvent.MouseButton.Pre

*class* `net.minecraftforge.client.event.InputEvent.MouseButton.Pre`

Fired when a mouse button is pressed/released, before being processed by vanilla.

 This event is cancellable, and does not have a result.
 If the event is cancelled, then the mouse event will not be processed by vanilla (e.g. keymappings and screens)

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: InputEvent.MouseButton

### Inherited methods
- from `net.minecraftforge.client.event.InputEvent.MouseButton`: `getAction`, `getButton`, `getModifiers`

## InputEvent.MouseScrollingEvent

*class* `net.minecraftforge.client.event.InputEvent.MouseScrollingEvent`

Fired when a mouse scroll wheel is used outside of a screen and a player is loaded, before being
 processed by vanilla.

 This event is cancellable, and does not have a result.
 If the event is cancelled, then the mouse scroll event will not be processed further.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: InputEvent

### Fields
- `private final double deltaX`
- `private final double deltaY`
- `private final double mouseX`
- `private final double mouseY`
- `private final boolean leftDown`
- `private final boolean middleDown`
- `private final boolean rightDown`

### Methods
- `public double getDeltaX()`
  Returns the amount of change / delta of the mouse scroll in the vertical direction.
  - returns: the amount of change / delta of the mouse scroll in the vertical direction
- `public double getDeltaY()`
  Returns the amount of change / delta of the mouse scroll in the horizontal direction.
  - returns: the amount of change / delta of the mouse scroll in the horizontal direction
- `public boolean isLeftDown()`
  Returns true if the left mouse button is pressed.
  - returns: true if the left mouse button is pressed
- `public boolean isRightDown()`
  Returns true if the right mouse button is pressed.
  - returns: true if the right mouse button is pressed
- `public boolean isMiddleDown()`
  Returns true if the middle mouse button is pressed.
  - returns: true if the middle mouse button is pressed
- `public double getMouseX()`
  Returns the X position of the mouse cursor.
  - returns: the X position of the mouse cursor
- `public double getMouseY()`
  Returns the Y position of the mouse cursor.
  - returns: the Y position of the mouse cursor

## ModelEvent

*class* `net.minecraftforge.client.event.ModelEvent`

Houses events related to models.

## ModelEvent.BakingCompleted

*class* `net.minecraftforge.client.event.ModelEvent.BakingCompleted`

Fired when the ModelManager is notified of the resource manager reloading.
 Called after the model registry is set up and cached in the BlockModelShaper.

 The model registry given by this event is unmodifiable. To modify the model registry, use
 ModelEvent.ModifyBakingResult instead.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: ModelEvent

### Fields
- `private final ModelManager modelManager`
- `private final Map<ResourceLocation,BakedModel> models`
- `private final ModelBakery modelBakery`

### Methods
- `public ModelManager getModelManager()`
  - returns: the model manager
- `public Map<ResourceLocation,BakedModel> getModels()`
  - returns: an unmodifiable view of the registry map of models and their model names
- `public ModelBakery getModelBakery()`
  - returns: the model loader

## ModelEvent.ModifyBakingResult

*class* `net.minecraftforge.client.event.ModelEvent.ModifyBakingResult`

Fired while the ModelManager is reloading models, after the model registry is set up, but before it's
 passed to the BlockModelShaper for caching.

 This event is fired from a worker thread and it is therefore not safe to access anything outside the
 model registry and ModelBakery provided in this event.

 The ModelManager firing this event is not fully set up with the latest data when this event fires and
 must therefore not be accessed in this event.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: ModelEvent

### Fields
- `private final Map<ResourceLocation,BakedModel> models`
- `private final ModelBakery modelBakery`

### Methods
- `public Map<ResourceLocation,BakedModel> getModels()`
  - returns: the modifiable registry map of models and their model names
- `public ModelBakery getModelBakery()`
  - returns: the model loader

## ModelEvent.RegisterAdditional

*class* `net.minecraftforge.client.event.ModelEvent.RegisterAdditional`

Fired when the ModelBakery is notified of the resource manager reloading.
 Allows developers to register models to be loaded, along with their dependencies.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: ModelEvent

### Fields
- `private final Set<ResourceLocation> models`

### Methods
- `public void register(ResourceLocation model)`
  Registers a model to be loaded, along with its dependencies.

## ModelEvent.RegisterGeometryLoaders

*class* `net.minecraftforge.client.event.ModelEvent.RegisterGeometryLoaders`

Allows users to register their own geometry loaders for use in block/item models.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: ModelEvent

### Fields
- `private final Map<ResourceLocation,IGeometryLoader<?>> loaders`

### Methods
- `public void register(String name,  IGeometryLoader<?> loader)`
  Registers a new geometry loader.

## MovementInputUpdateEvent

*class* `net.minecraftforge.client.event.MovementInputUpdateEvent`

Fired after the player's movement inputs are updated.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final Input input`

### Methods
- `public Input getInput()`
  Returns the player's movement inputs.
  - returns: the player's movement inputs

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## RecipesUpdatedEvent

*class* `net.minecraftforge.client.event.RecipesUpdatedEvent`

Fired when the RecipeManager has received and synced the recipes from the server to the client.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final RecipeManager recipeManager`

### Methods
- `public RecipeManager getRecipeManager()`
  Returns the recipe manager.
  - returns: the recipe manager

## RegisterClientCommandsEvent

*class* `net.minecraftforge.client.event.RegisterClientCommandsEvent`

Fired to allow mods to register client commands.

 Some command arguments behave differently for the client commands dispatcher:

 ResourceLocationArgument.getAdvancement(com.mojang.brigadier.context.CommandContext, String) only returns
 advancements that are shown on the advancements screen.
 ObjectiveArgument.getObjective(com.mojang.brigadier.context.CommandContext, String) only returns
 objectives that are displayed to the player.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final com.mojang.brigadier.CommandDispatcher<CommandSourceStack> dispatcher`
- `private final CommandBuildContext context`

### Methods
- `public com.mojang.brigadier.CommandDispatcher<CommandSourceStack> getDispatcher()`
  Returns the command dispatcher for registering commands to be executed on the client.
  - returns: the command dispatcher for registering commands to be executed on the client
- `public CommandBuildContext getBuildContext()`
  Returns the context to build the commands for.
  - returns: the context to build the commands for

## RegisterClientReloadListenersEvent

*class* `net.minecraftforge.client.event.RegisterClientReloadListenersEvent`

Fired to allow mods to register their reload listeners on the client-side resource manager.
 This event is fired once during the construction of the Minecraft instance.

 For registering reload listeners on the server-side resource manager, see AddReloadListenerEvent.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final ReloadableResourceManager resourceManager`

### Methods
- `public void registerReloadListener(PreparableReloadListener reloadListener)`
  Registers the given reload listener to the client-side resource manager.
  - param: reloadListener - the reload listener

## RegisterClientTooltipComponentFactoriesEvent

*class* `net.minecraftforge.client.event.RegisterClientTooltipComponentFactoriesEvent`

Allows users to register custom ClientTooltipComponent
 factories for their TooltipComponent types.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<Class<? extends TooltipComponent>,Function<TooltipComponent,ClientTooltipComponent>> factories`

### Methods
- `public <T extends TooltipComponent> void register(Class<T> type,  Function<? super T,? extends ClientTooltipComponent> factory)`
  Registers a ClientTooltipComponent factory for a TooltipComponent.

## RegisterColorHandlersEvent

*class* `net.minecraftforge.client.event.RegisterColorHandlersEvent`

Fired for registering block and item color handlers at the appropriate time.
 See the two subclasses for registering block or item color handlers.

 These events are fired on the mod-specific event bus,
 only on the logical client.

## RegisterColorHandlersEvent.Block

*class* `net.minecraftforge.client.event.RegisterColorHandlersEvent.Block`

Fired for registering block color handlers.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: RegisterColorHandlersEvent

### Fields
- `private final BlockColors blockColors`

### Methods
- `public BlockColors getBlockColors()`
  Returns the block colors registry.
  - returns: the block colors registry
- `public void register(BlockColor blockColor,  Block... blocks)`
  Registers a BlockColor instance for a set of blocks.
  - param: blockColor - The color provider
  - param: blocks - The blocks

## RegisterColorHandlersEvent.ColorResolvers

*class* `net.minecraftforge.client.event.RegisterColorHandlersEvent.ColorResolvers`

Allows registration of custom ColorResolver implementations to be used with
 BlockAndTintGetter.getBlockTint(BlockPos, ColorResolver).

Enclosing class: RegisterColorHandlersEvent

### Fields
- `private final com.google.common.collect.ImmutableList.Builder<ColorResolver> builder`

### Methods
- `public void register(ColorResolver resolver)`

## RegisterColorHandlersEvent.Item

*class* `net.minecraftforge.client.event.RegisterColorHandlersEvent.Item`

Fired for registering item color handlers.

 The block colors should only be used for referencing or delegating item colors to their respective block
 colors. Use RegisterColorHandlersEvent.Block for registering your block color handlers.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: RegisterColorHandlersEvent

### Fields
- `private final ItemColors itemColors`
- `private final BlockColors blockColors`

### Methods
- `public ItemColors getItemColors()`
  Returns the item colors registry.
  - returns: the item colors registry
- `public BlockColors getBlockColors()`
  Returns the block colors registry.
   This should only be used for referencing or delegating item colors to their respective block colors.
  - returns: the block colors registry
- `public void register(ItemColor itemColor,  ItemLike... items)`
  Registers a ItemColor instance for a set of blocks.
  - param: itemColor - The color provider
  - param: items - The items

## RegisterDimensionSpecialEffectsEvent

*class* `net.minecraftforge.client.event.RegisterDimensionSpecialEffectsEvent`

Allows users to register custom DimensionSpecialEffects for their dimensions.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<ResourceLocation,DimensionSpecialEffects> effects`

### Methods
- `public void register(ResourceLocation dimensionType,  DimensionSpecialEffects effects)`
  Registers the effects for a given dimension type.

## RegisterEntitySpectatorShadersEvent

*class* `net.minecraftforge.client.event.RegisterEntitySpectatorShadersEvent`

Allows users to register custom shaders to be used when the player spectates a certain kind of entity.
 Vanilla examples of this are the green effect for creepers and the invert effect for endermen.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<EntityType<?>,ResourceLocation> shaders`

### Methods
- `public void register(EntityType<?> entityType,  ResourceLocation shader)`
  Registers a spectator shader for a given entity type.

## RegisterGuiOverlaysEvent

*class* `net.minecraftforge.client.event.RegisterGuiOverlaysEvent`

Allows users to register custom GUI overlays.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<ResourceLocation,IGuiOverlay> overlays`
- `private final List<ResourceLocation> orderedOverlays`

### Methods
- `public void registerBelowAll(@NotNull  @NotNull String id,  @NotNull  @NotNull IGuiOverlay overlay)`
  Registers an overlay that renders below all others.
  - param: id - A unique resource id for this overlay
  - param: overlay - The overlay
- `public void registerBelow(@NotNull  @NotNull ResourceLocation other,  @NotNull  @NotNull String id,  @NotNull  @NotNull IGuiOverlay overlay)`
  Registers an overlay that renders below another.
  - param: other - The id of the overlay to render below. This must be an overlay you have already registered or a
 vanilla overlay. Do not use other mods' overlays.
  - param: id - A unique resource id for this overlay
  - param: overlay - The overlay
- `public void registerAbove(@NotNull  @NotNull ResourceLocation other,  @NotNull  @NotNull String id,  @NotNull  @NotNull IGuiOverlay overlay)`
  Registers an overlay that renders above another.
  - param: other - The id of the overlay to render above. This must be an overlay you have already registered or a
 vanilla overlay. Do not use other mods' overlays.
  - param: id - A unique resource id for this overlay
  - param: overlay - The overlay
- `public void registerAboveAll(@NotNull  @NotNull String id,  @NotNull  @NotNull IGuiOverlay overlay)`
  Registers an overlay that renders above all others.
  - param: id - A unique resource id for this overlay
  - param: overlay - The overlay
- `private void register(@NotNull  @NotNull RegisterGuiOverlaysEvent.Ordering ordering,  @Nullable  @Nullable ResourceLocation other,  @NotNull  @NotNull String id,  @NotNull  @NotNull IGuiOverlay overlay)`

## RegisterItemDecorationsEvent

*class* `net.minecraftforge.client.event.RegisterItemDecorationsEvent`

Allows users to register custom IItemDecorator to Items.

 This event is not cancelable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<Item,List<IItemDecorator>> decorators`

### Methods
- `public void register(ItemLike itemLike,  IItemDecorator decorator)`
  Register an ItemDecorator to an Item

## RegisterKeyMappingsEvent

*class* `net.minecraftforge.client.event.RegisterKeyMappingsEvent`

Allows users to register custom key mappings.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Options options`

### Methods
- `public void register(KeyMapping key)`
  Registers a new key mapping.

## RegisterNamedRenderTypesEvent

*class* `net.minecraftforge.client.event.RegisterNamedRenderTypesEvent`

Allows users to register custom named render types.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<ResourceLocation,RenderTypeGroup> renderTypes`

### Methods
- `public void register(String name,  RenderType blockRenderType,  RenderType entityRenderType)`
  Registers a named RenderTypeGroup.
  - param: name - The name
  - param: blockRenderType - One of the values returned by RenderType.chunkBufferLayers()
  - param: entityRenderType - A RenderType using DefaultVertexFormat.NEW_ENTITY
- `public void register(String name,  RenderType blockRenderType,  RenderType entityRenderType,  RenderType fabulousEntityRenderType)`
  Registers a named RenderTypeGroup.
  - param: name - The name
  - param: blockRenderType - One of the values returned by RenderType.chunkBufferLayers()
  - param: entityRenderType - A RenderType using DefaultVertexFormat.NEW_ENTITY
  - param: fabulousEntityRenderType - A RenderType using DefaultVertexFormat.NEW_ENTITY for use when
 "fabulous" rendering is enabled

## RegisterParticleProvidersEvent

*class* `net.minecraftforge.client.event.RegisterParticleProvidersEvent`

Fired for registering particle providers at the appropriate time.

 ParticleTypes must be registered during RegisterEvent as usual;
 this event is only for the ParticleProviders.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final ParticleEngine particleEngine`

### Methods
- `public <T extends ParticleOptions> void registerSpecial(ParticleType<T> type,  ParticleProvider<T> provider)`
  Registers a ParticleProvider for a non-json-based ParticleType.
   These particles do not receive a list of texture sprites to use for rendering themselves.
  
   There must be no particle json with an ID matching the ParticleType,
   or a redundant texture list error will occur when particle jsons load.
  - param: type - ParticleType to register a ParticleProvider for.
  - param: provider - ParticleProvider function responsible for providing that ParticleType's particles.
- `public <T extends ParticleOptions> void registerSprite(ParticleType<T> type,  ParticleProvider.Sprite<T> sprite)`
  Registers a ParticleProvider for a json-based ParticleType with a single texture;
   the resulting TextureSheetParticles will use that texture when created.
  
   A particle json with an ID matching the ParticleType must exist in the particles asset folder,
   or a missing texture list error will occur when particle jsons load.
  - param: type - ParticleType to register a ParticleProvider for.
  - param: sprite - Sprite function responsible for providing that ParticleType's particles.
- `public <T extends ParticleOptions> void registerSpriteSet(ParticleType<T> type,  ParticleEngine.SpriteParticleRegistration<T> registration)`
  Registers a ParticleProvider for a json-based ParticleType.
   Particle jsons define a list of texture sprites which the particle can use to render itself.
  
   A particle json with an ID matching the ParticleType must exist in the particles asset folder,
   or a missing texture list error will occur when particle jsons load.
  - param: type - ParticleType to register a particle provider for.
  - param: registration - SpriteParticleRegistration function responsible for providing that ParticleType's particles.

## RegisterPresetEditorsEvent

*class* `net.minecraftforge.client.event.RegisterPresetEditorsEvent`

Event for registering PresetEditor screen factories for world presets.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `private final Map<ResourceKey<WorldPreset>,PresetEditor> editors`

### Methods
- `public void register(ResourceKey<WorldPreset> key,  PresetEditor editor)`
  Registers a PresetEditor for a given world preset key.

## RegisterRecipeBookCategoriesEvent

*class* `net.minecraftforge.client.event.RegisterRecipeBookCategoriesEvent`

Allows users to register custom categories for the vanilla recipe book, making it usable in modded GUIs.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<RecipeBookCategories,com.google.common.collect.ImmutableList<RecipeBookCategories>> aggregateCategories`
- `private final Map<RecipeBookType,com.google.common.collect.ImmutableList<RecipeBookCategories>> typeCategories`
- `private final Map<RecipeType<?>,Function<Recipe<?>,RecipeBookCategories>> recipeCategoryLookups`

### Methods
- `public void registerAggregateCategory(RecipeBookCategories category,  List<RecipeBookCategories> others)`
  Registers the list of categories that compose an aggregate category.
- `public void registerBookCategories(RecipeBookType type,  List<RecipeBookCategories> categories)`
  Registers the list of categories that compose a recipe book.
- `public void registerRecipeCategoryFinder(RecipeType<?> type,  Function<Recipe<?>,RecipeBookCategories> lookup)`
  Registers a category lookup for a certain recipe type.

## RegisterShadersEvent

*class* `net.minecraftforge.client.event.RegisterShadersEvent`

Fired to allow mods to register custom shaders.
 This event is fired after the default Minecraft shaders have been registered.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final ResourceProvider resourceProvider`
- `private final List<com.mojang.datafixers.util.Pair<ShaderInstance,Consumer<ShaderInstance>>> shaderList`

### Methods
- `public ResourceProvider getResourceProvider()`
  Returns the client-side resource provider.
  - returns: the client-side resource provider
- `public void registerShader(ShaderInstance shaderInstance,  Consumer<ShaderInstance> onLoaded)`
  Registers a shader, and a callback for when the shader is loaded.
  
   When creating a ShaderInstance, pass in the client-side resource provider as the resource provider.
  
   Mods should not store the shader instance passed into this method. Instead, mods should store the shader
   passed into the registered load callback.
  - param: shaderInstance - a shader
  - param: onLoaded - a callback for when the shader is loaded

## RegisterTextureAtlasSpriteLoadersEvent

*class* `net.minecraftforge.client.event.RegisterTextureAtlasSpriteLoadersEvent`

Allows users to register custom texture atlas sprite loaders.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

### Fields
- `private final Map<ResourceLocation,ITextureAtlasSpriteLoader> loaders`

### Methods
- `public void register(String name,  ITextureAtlasSpriteLoader loader)`
  Registers a custom sprite loader.

## RenderArmEvent

*class* `net.minecraftforge.client.event.RenderArmEvent`

Fired before the player's arm is rendered in first person. This is a more targeted version of RenderHandEvent,
 and can be used to replace the rendering of the player's arm, such as for rendering armor on the arm or outright
 replacing the arm with armor.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the arm will not be rendered.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`
- `private final int packedLight`
- `private final AbstractClientPlayer player`
- `private final HumanoidArm arm`

### Methods
- `public HumanoidArm getArm()`
  Returns the arm being rendered.
  - returns: the arm being rendered
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers
- `public int getPackedLight()`
  Returns the amount of packed (sky and block) light for rendering.
  - returns: the amount of packed (sky and block) light for rendering
- `public AbstractClientPlayer getPlayer()`
  Returns the client player that is having their arm rendered. In general, this will be the same as
   Minecraft.player.
  - returns: the client player that is having their arm rendered

## RenderBlockScreenEffectEvent

*class* `net.minecraftforge.client.event.RenderBlockScreenEffectEvent`

Fired before a block texture will be overlaid on the player's view.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the overlay will not be rendered.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final Player player`
- `private final PoseStack poseStack`
- `private final RenderBlockScreenEffectEvent.OverlayType overlayType`
- `private final BlockState blockState`
- `private final BlockPos blockPos`

### Methods
- `public Player getPlayer()`
  Returns the player which the overlay will apply to.
  - returns: the player which the overlay will apply to
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public RenderBlockScreenEffectEvent.OverlayType getOverlayType()`
  Returns the type of the overlay.
  - returns: the type of the overlay
- `public BlockState getBlockState()`
  Returns the block which the overlay is gotten from.
  - returns: the block which the overlay is gotten from
- `public BlockPos getBlockPos()`
  Returns the position of the block which the overlay is gotten from.
  - returns: the position of the block which the overlay is gotten from

## RenderGuiEvent

*class* `net.minecraftforge.client.event.RenderGuiEvent`

Fired when the HUD is rendered to the screen.
 See the two subclasses for listening to the two possible phases.

### Fields
- `private final Window window`
- `private final GuiGraphics guiGraphics`
- `private final float partialTick`

### Methods
- `public Window getWindow()`
- `public GuiGraphics getGuiGraphics()`
- `public float getPartialTick()`

## RenderGuiEvent.Post

*class* `net.minecraftforge.client.event.RenderGuiEvent.Post`

Fired after the HUD is rendered to the screen, if the corresponding RenderGuiEvent.Pre is not cancelled.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderGuiEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderGuiEvent`: `getGuiGraphics`, `getPartialTick`, `getWindow`

## RenderGuiEvent.Pre

*class* `net.minecraftforge.client.event.RenderGuiEvent.Pre`

Fired before the HUD is rendered to the screen.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the overlay will not be rendered, and the corresponding RenderGuiEvent.Post event will
 not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderGuiEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderGuiEvent`: `getGuiGraphics`, `getPartialTick`, `getWindow`

## RenderGuiOverlayEvent

*class* `net.minecraftforge.client.event.RenderGuiOverlayEvent`

Fired when an overlay is rendered to the screen.
 See the two subclasses for listening to the two possible phases.

 An overlay that is not normally active cannot be forced to render. In such cases, this event will not fire.

### Fields
- `private final Window window`
- `private final GuiGraphics guiGraphics`
- `private final float partialTick`
- `private final NamedGuiOverlay overlay`

### Methods
- `public Window getWindow()`
- `public GuiGraphics getGuiGraphics()`
- `public float getPartialTick()`
- `public NamedGuiOverlay getOverlay()`

## RenderGuiOverlayEvent.Post

*class* `net.minecraftforge.client.event.RenderGuiOverlayEvent.Post`

Fired after an GUI overlay is rendered to the screen, if the corresponding RenderGuiOverlayEvent.Pre is not cancelled.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderGuiOverlayEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderGuiOverlayEvent`: `getGuiGraphics`, `getOverlay`, `getPartialTick`, `getWindow`

## RenderGuiOverlayEvent.Pre

*class* `net.minecraftforge.client.event.RenderGuiOverlayEvent.Pre`

Fired before a GUI overlay is rendered to the screen.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the overlay will not be rendered, and the corresponding RenderGuiOverlayEvent.Post event will
 not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderGuiOverlayEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderGuiOverlayEvent`: `getGuiGraphics`, `getOverlay`, `getPartialTick`, `getWindow`

## RenderHandEvent

*class* `net.minecraftforge.client.event.RenderHandEvent`

Fired before a hand is rendered in the first person view.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the hand will not be rendered.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final InteractionHand hand`
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`
- `private final int packedLight`
- `private final float partialTick`
- `private final float interpolatedPitch`
- `private final float swingProgress`
- `private final float equipProgress`
- `private final ItemStack stack`

### Methods
- `public InteractionHand getHand()`
  Returns the hand being rendered.
  - returns: the hand being rendered
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers
- `public int getPackedLight()`
  Returns the amount of packed (sky and block) light for rendering.
  - returns: the amount of packed (sky and block) light for rendering
- `public float getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick
- `public float getInterpolatedPitch()`
  Returns the interpolated pitch of the player entity.
  - returns: the interpolated pitch of the player entity
- `public float getSwingProgress()`
  Returns the swing progress of the hand being rendered.
  - returns: the swing progress of the hand being rendered
- `public float getEquipProgress()`
  Returns the progress of the equip animation, from 0.0 to 1.0.
  - returns: the progress of the equip animation, from 0.0 to 1.0
- `public ItemStack getItemStack()`
  Returns the item stack to be rendered.
  - returns: the item stack to be rendered

## RenderHighlightEvent

*class* `net.minecraftforge.client.event.RenderHighlightEvent`

Fired before a selection highlight is rendered.
 See the two subclasses to listen for blocks or entities.

### Fields
- `private final LevelRenderer levelRenderer`
- `private final Camera camera`
- `private final HitResult target`
- `private final float partialTick`
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`

### Methods
- `public LevelRenderer getLevelRenderer()`
  Returns the level renderer.
  - returns: the level renderer
- `public Camera getCamera()`
  Returns the camera information.
  - returns: the camera information
- `public HitResult getTarget()`
  Returns the hit result which triggered the selection highlight.
  - returns: the hit result which triggered the selection highlight
- `public float getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers

## RenderHighlightEvent.Block

*class* `net.minecraftforge.client.event.RenderHighlightEvent.Block`

Fired before a block's selection highlight is rendered.

 This event is cancellable, and does not have a result.
 If the event is cancelled, then the selection highlight will not be rendered.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderHighlightEvent

### Methods
- `public BlockHitResult getTarget()`
  Returns the block hit result.
  - returns: the block hit result

### Inherited methods
- from `net.minecraftforge.client.event.RenderHighlightEvent`: `getCamera`, `getLevelRenderer`, `getMultiBufferSource`, `getPartialTick`, `getPoseStack`

## RenderHighlightEvent.Entity

*class* `net.minecraftforge.client.event.RenderHighlightEvent.Entity`

Fired before an entity's selection highlight is rendered.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderHighlightEvent

### Methods
- `public EntityHitResult getTarget()`
  Returns the entity hit result.
  - returns: the entity hit result

### Inherited methods
- from `net.minecraftforge.client.event.RenderHighlightEvent`: `getCamera`, `getLevelRenderer`, `getMultiBufferSource`, `getPartialTick`, `getPoseStack`

## RenderItemInFrameEvent

*class* `net.minecraftforge.client.event.RenderItemInFrameEvent`

Fired before an item stack is rendered in an item frame.
 This can be used to prevent normal rendering or add custom rendering.

 This event is cancellable, and does not have a result.
 If the event is cancelled, then the item stack will not be rendered

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final ItemStack itemStack`
- `private final ItemFrame itemFrameEntity`
- `private final ItemFrameRenderer<?> renderer`
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`
- `private final int packedLight`

### Methods
- `public ItemStack getItemStack()`
  Returns the item stack being rendered.
  - returns: the item stack being rendered
- `public ItemFrame getItemFrameEntity()`
  Returns the item frame entity.
  - returns: the item frame entity
- `public ItemFrameRenderer<?> getRenderer()`
  Returns the renderer for the item frame entity.
  - returns: the renderer for the item frame entity
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers
- `public int getPackedLight()`
  Returns the amount of packed (sky and block) light for rendering.
  - returns: the amount of packed (sky and block) light for rendering

## RenderLevelStageEvent

*class* `net.minecraftforge.client.event.RenderLevelStageEvent`

Fires at various times during LevelRenderer.renderLevel.
 Check getStage() to render during the appropriate time for your use case.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final RenderLevelStageEvent.Stage stage`
- `private final LevelRenderer levelRenderer`
- `private final PoseStack poseStack`
- `private final org.joml.Matrix4f projectionMatrix`
- `private final int renderTick`
- `private final float partialTick`
- `private final Camera camera`
- `private final Frustum frustum`

### Methods
- `public RenderLevelStageEvent.Stage getStage()`
  Returns the current stage that is being rendered. Check this before doing rendering to ensure
   that rendering happens at the appropriate time..
  - returns: the current stage that is being rendered. Check this before doing rendering to ensure
 that rendering happens at the appropriate time.
- `public LevelRenderer getLevelRenderer()`
  Returns the level renderer.
  - returns: the level renderer
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public org.joml.Matrix4f getProjectionMatrix()`
  Returns the projection matrix.
  - returns: the projection matrix
- `public int getRenderTick()`
  Returns the current "ticks" value in the level renderer.
  - returns: the current "ticks" value in the level renderer
- `public float getPartialTick()`
  Returns the current partialTick value used for rendering.
  - returns: the current partialTick value used for rendering
- `public Camera getCamera()`
  Returns the camera.
  - returns: the camera
- `public Frustum getFrustum()`
  Returns the frustum.
  - returns: the frustum

## RenderLevelStageEvent.RegisterStageEvent

*class* `net.minecraftforge.client.event.RenderLevelStageEvent.RegisterStageEvent`

Use to create a custom stages.
 Fired after the LevelRenderer has been created.

 This event is not cancellable, and does not have a result.

 This event is fired on the mod-specific event bus,
 only on the logical client.

Enclosing class: RenderLevelStageEvent

### Methods
- `public RenderLevelStageEvent.Stage register(ResourceLocation name,  @Nullable  RenderType renderType)  throws IllegalArgumentException`
  - param: name - The name of your Stage.
  - param: renderType - If not null, called automatically by LevelRenderer.renderChunkLayer if the RenderType passed into it matches this one.
 If null, needs to be called manually by whoever implements it.
  - throws: IllegalArgumentException - if the RenderType passed is already mapped to a Stage.

## RenderLevelStageEvent.Stage

*class* `net.minecraftforge.client.event.RenderLevelStageEvent.Stage`

A time during level rendering for you to render custom things into the world.

Enclosing class: RenderLevelStageEvent

### Fields
- `private static final Map<RenderType,RenderLevelStageEvent.Stage> RENDER_TYPE_STAGES`
- `public static final RenderLevelStageEvent.Stage AFTER_SKY`
  Use this to render custom objects into the skybox.
   Called regardless of if they sky actually renders or not.
- `public static final RenderLevelStageEvent.Stage AFTER_SOLID_BLOCKS`
  Use this to render custom block-like geometry into the world.
- `public static final RenderLevelStageEvent.Stage AFTER_CUTOUT_MIPPED_BLOCKS_BLOCKS`
  Use this to render custom block-like geometry into the world.
- `public static final RenderLevelStageEvent.Stage AFTER_CUTOUT_BLOCKS`
  Use this to render custom block-like geometry into the world.
- `public static final RenderLevelStageEvent.Stage AFTER_ENTITIES`
  Use this to render custom block-like geometry into the world.
- `public static final RenderLevelStageEvent.Stage AFTER_BLOCK_ENTITIES`
  Use this to render custom block-like geometry into the world.
- `public static final RenderLevelStageEvent.Stage AFTER_TRANSLUCENT_BLOCKS`
  Use this to render custom block-like geometry into the world.
   Due to how transparency sorting works, this stage may not work properly with translucency. If you intend to render translucency,
   try using AFTER_TRIPWIRE_BLOCKS or AFTER_PARTICLES.
   Although this is called within a fabulous graphics target, it does not function properly in many cases.
- `public static final RenderLevelStageEvent.Stage AFTER_TRIPWIRE_BLOCKS`
  Use this to render custom block-like geometry into the world.
- `public static final RenderLevelStageEvent.Stage AFTER_PARTICLES`
  Use this to render custom effects into the world, such as custom entity-like objects or special rendering effects.
   Called within a fabulous graphics target.
   Happens after entities render.
- `public static final RenderLevelStageEvent.Stage AFTER_WEATHER`
  Use this to render custom weather effects into the world.
   Called within a fabulous graphics target.
- `public static final RenderLevelStageEvent.Stage AFTER_LEVEL`
  Use this to render after everything in the level has been rendered.
   Called after LevelRenderer.renderLevel(PoseStack, float, long, boolean, Camera, GameRenderer, LightTexture, Matrix4f) finishes.
- `private final String name`

### Methods
- `private static RenderLevelStageEvent.Stage register(ResourceLocation name,  @Nullable  RenderType renderType)  throws IllegalArgumentException`
  - throws: IllegalArgumentException
- `private static RenderLevelStageEvent.Stage register(String name,  @Nullable  RenderType renderType)  throws IllegalArgumentException`
  - throws: IllegalArgumentException
- `public String toString()`
- `@Nullable public static RenderLevelStageEvent.Stage fromRenderType(RenderType renderType)`
  Returns the stage bound to the render type, or null if no value is present.
  - returns: the stage bound to the render type, or null if no value is present
- `@Internal public void dispatch(LevelRenderer levelRenderer,  PoseStack poseStack,  org.joml.Matrix4f projectionMatrix,  int renderTick,  Camera camera,  Frustum frustum)`
  Internal just to make our patch smaller, it just fires the event. If you have good reason for this to be external, ask.

## RenderLivingEvent.Post>

*class* `net.minecraftforge.client.event.RenderLivingEvent.Post>`

Fired after an entity is rendered, if the corresponding RenderLivingEvent.Post is not cancelled.

 This event is not cancelable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderLivingEvent<T extends LivingEntity, M extends EntityModel<T>>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getMultiBufferSource`, `getPackedLight`, `getPartialTick`, `getPoseStack`, `getRenderer`

## RenderLivingEvent.Pre>

*class* `net.minecraftforge.client.event.RenderLivingEvent.Pre>`

Fired before an entity is rendered.
 This can be used to render additional effects or suppress rendering.

 This event is cancelable, and does not have a result.
 If this event is cancelled, then the entity will not be rendered and the corresponding
 RenderLivingEvent.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderLivingEvent<T extends LivingEntity, M extends EntityModel<T>>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getMultiBufferSource`, `getPackedLight`, `getPartialTick`, `getPoseStack`, `getRenderer`

## RenderLivingEvent>

*class* `net.minecraftforge.client.event.RenderLivingEvent>`

Fired when a LivingEntity is rendered.
 See the two subclasses to listen for before and after rendering.

 Despite this event's use of generic type parameters, this is not a GenericEvent,
 and should not be treated as such (such as using generic-specific listeners, which may cause a ClassCastException).

### Fields
- `private final LivingEntity entity`
- `private final LivingEntityRenderer<T extends LivingEntity,M extends EntityModel<T>> renderer`
- `private final float partialTick`
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`
- `private final int packedLight`

### Methods
- `public LivingEntity getEntity()`
  - returns: the living entity being rendered
- `public LivingEntityRenderer<T,M> getRenderer()`
  - returns: the renderer for the living entity
- `public float getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers
- `public int getPackedLight()`
  Returns the amount of packed (sky and block) light for rendering.
  - returns: the amount of packed (sky and block) light for rendering

## RenderNameTagEvent

*class* `net.minecraftforge.client.event.RenderNameTagEvent`

Fired before an entity renderer renders the nameplate of an entity.

 This event is not cancellable, and has a result.

 Event.Result.ALLOW - the nameplate will be forcibly rendered.
 Event.Result.DEFAULT - the vanilla logic will be used.
 Event.Result.DENY - the nameplate will not be rendered.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private Component nameplateContent`
- `private final Component originalContent`
- `private final EntityRenderer<?> entityRenderer`
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`
- `private final int packedLight`
- `private final float partialTick`

### Methods
- `public void setContent(Component contents)`
  Sets the new text on the nameplate.
  - param: contents - the new text
- `public Component getContent()`
  Returns the text on the nameplate that will be rendered, if the event is not DENIED.
  - returns: the text on the nameplate that will be rendered, if the event is not DENIED
- `public Component getOriginalContent()`
  Returns the original text on the nameplate.
  - returns: the original text on the nameplate
- `public EntityRenderer<?> getEntityRenderer()`
  Returns the entity renderer rendering the nameplate.
  - returns: the entity renderer rendering the nameplate
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers
- `public int getPackedLight()`
  Returns the amount of packed (sky and block) light for rendering.
  - returns: the amount of packed (sky and block) light for rendering
- `public float getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick

### Inherited methods
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`

## RenderPlayerEvent

*class* `net.minecraftforge.client.event.RenderPlayerEvent`

Fired when a player is being rendered.
 See the two subclasses for listening for before and after rendering.

### Fields
- `private final PlayerRenderer renderer`
- `private final float partialTick`
- `private final PoseStack poseStack`
- `private final MultiBufferSource multiBufferSource`
- `private final int packedLight`

### Methods
- `public PlayerRenderer getRenderer()`
  Returns the player entity renderer.
  - returns: the player entity renderer
- `public float getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick
- `public PoseStack getPoseStack()`
  Returns the pose stack used for rendering.
  - returns: the pose stack used for rendering
- `public MultiBufferSource getMultiBufferSource()`
  Returns the source of rendering buffers.
  - returns: the source of rendering buffers
- `public int getPackedLight()`
  Returns the amount of packed (sky and block) light for rendering.
  - returns: the amount of packed (sky and block) light for rendering

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## RenderPlayerEvent.Post

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Post`

Fired after the player is rendered, if the corresponding RenderPlayerEvent.Pre is not cancelled.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderPlayerEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getMultiBufferSource`, `getPackedLight`, `getPartialTick`, `getPoseStack`, `getRenderer`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## RenderPlayerEvent.Pre

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Pre`

Fired before the player is rendered.
 This can be used for rendering additional effects or suppressing rendering.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the player will not be rendered and the corresponding
 RenderPlayerEvent.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderPlayerEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getMultiBufferSource`, `getPackedLight`, `getPartialTick`, `getPoseStack`, `getRenderer`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntity`

## RenderTooltipEvent

*class* `net.minecraftforge.client.event.RenderTooltipEvent`

Fired during tooltip rendering.
 See the various subclasses for listening to specific events.

### Fields
- `@NotNull protected final @NotNull ItemStack itemStack`
- `protected final GuiGraphics graphics`
- `protected int x`
- `protected int y`
- `protected Font font`
- `protected final List<ClientTooltipComponent> components`

### Methods
- `@NotNull public @NotNull ItemStack getItemStack()`
  Returns the item stack which the tooltip is being rendered for, or an empty
   item stack if there is no associated item stack.
  - returns: the item stack which the tooltip is being rendered for, or an empty
 item stack if there is no associated item stack
- `public GuiGraphics getGraphics()`
  Returns the graphics helper for the gui.
  - returns: the graphics helper for the gui
- `@NotNull public @NotNull List<ClientTooltipComponent> getComponents()`
  Returns the unmodifiable list of tooltip components.
  
   Use ItemTooltipEvent or RenderTooltipEvent.GatherComponents to modify tooltip contents or components.
  - returns: the unmodifiable list of tooltip components
- `public int getX()`
  Returns the X position of the tooltip box. By default, this is the mouse X position.
  - returns: the X position of the tooltip box
- `public int getY()`
  Returns the Y position of the tooltip box. By default, this is the mouse Y position.
  - returns: the Y position of the tooltip box
- `@NotNull public @NotNull Font getFont()`
  Returns The font used to render the text.
  - returns: The font used to render the text

## RenderTooltipEvent.Color

*class* `net.minecraftforge.client.event.RenderTooltipEvent.Color`

Fired when the colours for the tooltip background are determined.
 This can be used to modify the background color and the border's gradient colors.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderTooltipEvent

### Fields
- `private final int originalBackground`
- `private final int originalBorderStart`
- `private final int originalBorderEnd`
- `private int backgroundStart`
- `private int backgroundEnd`
- `private int borderStart`
- `private int borderEnd`

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `components`, `font`, `graphics`, `itemStack`, `x`, `y`

### Methods
- `public int getBackgroundStart()`
  Returns the gradient start color for the tooltip background (top edge).
  - returns: the gradient start color for the tooltip background (top edge)
- `public int getBackgroundEnd()`
  Returns the gradient end color for the tooltip background (bottom edge).
  - returns: the gradient end color for the tooltip background (bottom edge)
- `public void setBackground(int background)`
  Sets the new color for the tooltip background. This sets both the gradient start and end color for the
   background to this color.
  - param: background - the new color for the tooltip background
- `public void setBackgroundStart(int backgroundStart)`
  Sets the new start color for the gradient of the tooltip background (top edge).
  - param: backgroundStart - the new start color for the tooltip background
- `public void setBackgroundEnd(int backgroundEnd)`
  Sets the new end color for the gradient of the tooltip background (bottom edge).
  - param: backgroundEnd - the new end color for the tooltip background
- `public int getBorderStart()`
  Returns the gradient start color for the tooltip border (top edge).
  - returns: the gradient start color for the tooltip border (top edge)
- `public void setBorderStart(int borderStart)`
  Sets the new start color for the gradient of the tooltip border (top edge).
  - param: borderStart - the new start color for the tooltip border
- `public int getBorderEnd()`
  Returns the gradient end color for the tooltip border (bottom edge).
  - returns: the gradient end color for the tooltip border (bottom edge)
- `public void setBorderEnd(int borderEnd)`
  Sets the new end color for the gradient of the tooltip border (bottom edge).
  - param: borderEnd - the new end color for the tooltip border
- `public int getOriginalBackgroundStart()`
  Returns the original tooltip background's gradient start color (top edge).
  - returns: the original tooltip background's gradient start color (top edge)
- `public int getOriginalBackgroundEnd()`
  Returns the original tooltip background's gradient end color (bottom edge).
  - returns: the original tooltip background's gradient end color (bottom edge)
- `public int getOriginalBorderStart()`
  Returns the original tooltip border's gradient start color (top edge).
  - returns: the original tooltip border's gradient start color (top edge)
- `public int getOriginalBorderEnd()`
  Returns the original tooltip border's gradient end color (bottom edge).
  - returns: the original tooltip border's gradient end color (bottom edge)

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getComponents`, `getFont`, `getGraphics`, `getItemStack`, `getX`, `getY`

## RenderTooltipEvent.GatherComponents

*class* `net.minecraftforge.client.event.RenderTooltipEvent.GatherComponents`

Fired when a tooltip gathers the TooltipComponents to be rendered, before any text wrapping or processing.
 The list of components and the maximum width of the tooltip can be modified through this event.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the list of components will be empty, causing the tooltip to not be rendered and
 the corresponding RenderTooltipEvent.Pre and RenderTooltipEvent.Color to not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderTooltipEvent

### Fields
- `private final ItemStack itemStack`
- `private final int screenWidth`
- `private final int screenHeight`
- `private final List<com.mojang.datafixers.util.Either<FormattedText,TooltipComponent>> tooltipElements`
- `private int maxWidth`

### Methods
- `public ItemStack getItemStack()`
  Returns the item stack which the tooltip is being rendered for, or an empty
   item stack if there is no associated item stack.
  - returns: the item stack which the tooltip is being rendered for, or an empty
 item stack if there is no associated item stack
- `public int getScreenWidth()`
  Returns the width of the screen..
   The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
   is moved to be within the screen width.
  - returns: the width of the screen
- `public int getScreenHeight()`
  Returns the height of the screen.
   The tooltip box is moved to be within the screen height.
  - returns: the height of the screen
- `public List<com.mojang.datafixers.util.Either<FormattedText,TooltipComponent>> getTooltipElements()`
  Returns the modifiable list of elements to be rendered on the tooltip. These elements can be either
   formatted text or custom tooltip components.
  - returns: the modifiable list of elements to be rendered on the tooltip
- `public int getMaxWidth()`
  Returns the maximum width of the tooltip when being rendered.
  
   A value of -1 means an unlimited maximum width. However, an unlimited maximum width will still
   be wrapped to be within the screen bounds.
  - returns: the maximum width of the tooltip when being rendered
- `public void setMaxWidth(int maxWidth)`
  Sets the maximum width of the tooltip. Use -1 for unlimited maximum width.
  - param: maxWidth - the new maximum width

## RenderTooltipEvent.Pre

*class* `net.minecraftforge.client.event.RenderTooltipEvent.Pre`

Fired before the tooltip is rendered.
 This can be used to modify the positioning and font of the tooltip.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the tooltip will not be rendered and the corresponding
 RenderTooltipEvent.Color will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: RenderTooltipEvent

### Fields
- `private final int screenWidth`
- `private final int screenHeight`
- `private final ClientTooltipPositioner positioner`

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `components`, `font`, `graphics`, `itemStack`, `x`, `y`

### Methods
- `public int getScreenWidth()`
  Returns the width of the screen..
   The lines of text within the tooltip are wrapped to be within the screen width, and the tooltip box itself
   is moved to be within the screen width.
  - returns: the width of the screen
- `public int getScreenHeight()`
  Returns the height of the screen.
   The tooltip box is moved to be within the screen height.
  - returns: the height of the screen
- `public ClientTooltipPositioner getTooltipPositioner()`
- `public void setFont(@NotNull  @NotNull Font fr)`
  Sets the font to be used to render text.
  - param: fr - the new font
- `public void setX(int x)`
  Sets the X origin of the tooltip.
  - param: x - the new X origin
- `public void setY(int y)`
  Sets the Y origin of the tooltip.
  - param: y - the new Y origin

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getComponents`, `getFont`, `getGraphics`, `getItemStack`, `getX`, `getY`

## ScreenEvent

*class* `net.minecraftforge.client.event.ScreenEvent`

Fired on different events/actions when a Screen is active and visible.
 See the various subclasses for listening to different events.

 These events are fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final Screen screen`

### Methods
- `public Screen getScreen()`
  Returns the screen that caused this event.
  - returns: the screen that caused this event

## ScreenEvent.BackgroundRendered

*class* `net.minecraftforge.client.event.ScreenEvent.BackgroundRendered`

Fired directly after the background of the screen is drawn.
 Can be used for drawing above the background but below the tooltips.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent

### Fields
- `private final GuiGraphics guiGraphics`

### Methods
- `public GuiGraphics getGuiGraphics()`
  Returns the gui graphics used for rendering.
  - returns: the gui graphics used for rendering

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.CharacterTyped

*class* `net.minecraftforge.client.event.ScreenEvent.CharacterTyped`

Fired when a keyboard key corresponding to a character is typed.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Fields
- `private final char codePoint`
- `private final int modifiers`

### Methods
- `public char getCodePoint()`
  Returns the character code point.
  - returns: the character code point
- `public int getModifiers()`
  Returns a bit field representing the active modifier keys.
  - returns: a bit field representing the active modifier keys

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.CharacterTyped.Post

*class* `net.minecraftforge.client.event.ScreenEvent.CharacterTyped.Post`

Fired after the character input is handled, if not handled by the screen
 and the corresponding ScreenEvent.CharacterTyped.Pre is not cancelled.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the character input will be set as handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.CharacterTyped

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.CharacterTyped`: `getCodePoint`, `getModifiers`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.CharacterTyped.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.CharacterTyped.Pre`

Fired before the character input is handled by the screen.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen's character input handler will be bypassed
 and the corresponding ScreenEvent.CharacterTyped.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.CharacterTyped

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.CharacterTyped`: `getCodePoint`, `getModifiers`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Closing

*class* `net.minecraftforge.client.event.ScreenEvent.Closing`

Fired before a Screen is closed.
 All screen layers on the screen are closed before this event is fired.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Init

*class* `net.minecraftforge.client.event.ScreenEvent.Init`

Fired when a screen is being initialized.
 See the two subclasses for listening before and after the initialization.

 Listeners added through this event may also be marked as renderable or narratable, if they inherit from
 Renderable and NarratableEntry
 respectively.

Enclosing class: ScreenEvent

### Fields
- `private final Consumer<GuiEventListener> add`
- `private final Consumer<GuiEventListener> remove`
- `private final List<GuiEventListener> listenerList`

### Methods
- `public List<GuiEventListener> getListenersList()`
  Returns unmodifiable view of list of event listeners on the screen.
  - returns: unmodifiable view of list of event listeners on the screen
- `public void addListener(GuiEventListener listener)`
  Adds the given GuiEventListener to the screen.
  - param: listener - the listener to add
- `public void removeListener(GuiEventListener listener)`
  Removes the given GuiEventListener from the screen.
  - param: listener - the listener to remove

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Init.Post

*class* `net.minecraftforge.client.event.ScreenEvent.Init.Post`

Fired after the screen's overridable initialization method is called.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.Init

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.Init`: `addListener`, `getListenersList`, `removeListener`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Init.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.Init.Pre`

Fired before the screen's overridable initialization method is fired.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the initialization method will not be called, and the widgets and children lists
 will not be cleared.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.Init

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.Init`: `addListener`, `getListenersList`, `removeListener`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyInput

*class* `net.minecraftforge.client.event.ScreenEvent.KeyInput`

Fired whenever a keyboard key is pressed or released.
 See the various subclasses to listen for key pressing or releasing.

Enclosing class: ScreenEvent

### Fields
- `private final int keyCode`
- `private final int scanCode`
- `private final int modifiers`

### Methods
- `public int getKeyCode()`
  Returns the GLFW (platform-agnostic) key code.
  - returns: the GLFW (platform-agnostic) key code
- `public int getScanCode()`
  Returns the platform-specific scan code.
  
   The scan code is unique for every key, regardless of whether it has a key code.
   Scan codes are platform-specific but consistent over time, so keys will have different scan codes depending
   on the platform but they are safe to save to disk as custom key bindings.
  - returns: the platform-specific scan code
- `public int getModifiers()`
  Returns a bit field representing the active modifier keys.
  - returns: a bit field representing the active modifier keys

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyPressed

*class* `net.minecraftforge.client.event.ScreenEvent.KeyPressed`

Fired when a keyboard key is pressed.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.KeyInput`: `getKeyCode`, `getModifiers`, `getScanCode`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyPressed.Post

*class* `net.minecraftforge.client.event.ScreenEvent.KeyPressed.Post`

Fired after the key press is handled, if not handled by the screen
 and the corresponding ScreenEvent.KeyPressed.Pre is not cancelled.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the key press will be set as handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.KeyPressed

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.KeyInput`: `getKeyCode`, `getModifiers`, `getScanCode`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyPressed.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.KeyPressed.Pre`

Fired before the key press is handled by the screen.

 This event is cancellable and does not have a result.
 If the event is cancelled, the screen's key press handler will be bypassed
 and the corresponding ScreenEvent.KeyPressed.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.KeyPressed

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.KeyInput`: `getKeyCode`, `getModifiers`, `getScanCode`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyReleased

*class* `net.minecraftforge.client.event.ScreenEvent.KeyReleased`

Fired when a keyboard key is released.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.KeyInput`: `getKeyCode`, `getModifiers`, `getScanCode`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyReleased.Post

*class* `net.minecraftforge.client.event.ScreenEvent.KeyReleased.Post`

Fired after the key release is handled, if not handled by the screen
 and the corresponding ScreenEvent.KeyReleased.Pre is not cancelled.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the key release will be set as handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.KeyReleased

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.KeyInput`: `getKeyCode`, `getModifiers`, `getScanCode`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.KeyReleased.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.KeyReleased.Pre`

Fired before the key release is handled by the screen.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen's key release handler will be bypassed
 and the corresponding ScreenEvent.KeyReleased.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.KeyReleased

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.KeyInput`: `getKeyCode`, `getModifiers`, `getScanCode`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseButtonPressed

*class* `net.minecraftforge.client.event.ScreenEvent.MouseButtonPressed`

Fired when a mouse button is pressed.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Fields
- `private final int button`

### Methods
- `public int getButton()`
  Returns the mouse button's input code.
  - returns: the mouse button's input code

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseButtonPressed.Post

*class* `net.minecraftforge.client.event.ScreenEvent.MouseButtonPressed.Post`

Fired after the mouse click is handled, if the corresponding ScreenEvent.MouseButtonPressed.Pre was not
 cancelled.

 This event is not cancellable, has a result.

 Event.Result.ALLOW - forcibly sets the mouse click as handled
 Event.Result.DEFAULT - defaults to the return value of
 ContainerEventHandler.mouseClicked(double, double, int) from the screen (see wasHandled().
 Event.Result.DENY - forcibly sets the mouse click as not handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseButtonPressed

### Fields
- `private final boolean handled`

### Methods
- `public boolean wasHandled()`
  Returns true if the mouse click was already handled by its screen.
  - returns: true if the mouse click was already handled by its screen

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseButtonPressed`: `getButton`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseButtonPressed.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.MouseButtonPressed.Pre`

Fired before the mouse click is handled by the screen.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen's mouse click handler will be bypassed
 and the corresponding ScreenEvent.MouseButtonPressed.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseButtonPressed

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseButtonPressed`: `getButton`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseButtonReleased

*class* `net.minecraftforge.client.event.ScreenEvent.MouseButtonReleased`

Fired when a mouse button is released.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Fields
- `private final int button`

### Methods
- `public int getButton()`
  Returns the mouse button's input code.
  - returns: the mouse button's input code

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseButtonReleased.Post

*class* `net.minecraftforge.client.event.ScreenEvent.MouseButtonReleased.Post`

Fired after the mouse release is handled, if the corresponding ScreenEvent.MouseButtonReleased.Pre was
 not cancelled.

 This event is not cancellable, has a result.

 Event.Result.ALLOW - forcibly sets the mouse release as handled
 Event.Result.DEFAULT - defaults to the return value of
 ContainerEventHandler.mouseReleased(double, double, int) from the screen (see wasHandled().
 Event.Result.DENY - forcibly sets the mouse release as not handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseButtonReleased

### Fields
- `private final boolean handled`

### Methods
- `public boolean wasHandled()`
  - returns: true if the mouse release was already handled by its screen

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseButtonReleased`: `getButton`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseButtonReleased.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.MouseButtonReleased.Pre`

Fired before the mouse release is handled by the screen.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen's mouse release handler will be bypassed
 and the corresponding ScreenEvent.MouseButtonReleased.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseButtonReleased

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseButtonReleased`: `getButton`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseDragged

*class* `net.minecraftforge.client.event.ScreenEvent.MouseDragged`

Fired when the mouse was dragged while a button is being held down.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Fields
- `private final int mouseButton`
- `private final double dragX`
- `private final double dragY`

### Methods
- `public int getMouseButton()`
  Returns the mouse button's input code.
  - returns: the mouse button's input code
- `public double getDragX()`
  Returns amount of mouse drag along the X axis.
  - returns: amount of mouse drag along the X axis
- `public double getDragY()`
  Returns amount of mouse drag along the Y axis.
  - returns: amount of mouse drag along the Y axis

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseDragged.Post

*class* `net.minecraftforge.client.event.ScreenEvent.MouseDragged.Post`

Fired after the mouse drag is handled, if not handled by the screen
 and the corresponding ScreenEvent.MouseDragged.Pre is not cancelled.

 This event is not cancellable, and does not have a result.
 If the event is cancelled, the mouse drag will be set as handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseDragged

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseDragged`: `getDragX`, `getDragY`, `getMouseButton`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseDragged.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.MouseDragged.Pre`

Fired before the mouse drag is handled by the screen.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen's mouse drag handler will be bypassed
 and the corresponding ScreenEvent.MouseDragged.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseDragged

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseDragged`: `getDragX`, `getDragY`, `getMouseButton`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseInput

*class* `net.minecraftforge.client.event.ScreenEvent.MouseInput`

Fired whenever an action is performed by the mouse.
 See the various subclasses to listen for different actions.

Enclosing class: ScreenEvent

### Fields
- `private final double mouseX`
- `private final double mouseY`

### Methods
- `public double getMouseX()`
  Returns the X position of the mouse cursor, relative to the screen.
  - returns: the X position of the mouse cursor, relative to the screen
- `public double getMouseY()`
  Returns the Y position of the mouse cursor, relative to the screen.
  - returns: the Y position of the mouse cursor, relative to the screen

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseScrolled

*class* `net.minecraftforge.client.event.ScreenEvent.MouseScrolled`

Fired when the mouse was dragged while a button is being held down.
 See the two subclasses for listening before and after the normal handling.

Enclosing class: ScreenEvent

### Fields
- `private final double deltaX`
- `private final double deltaY`

### Methods
- `public double getDeltaX()`
  Returns the amount of change / delta of the mouse scroll in the vertical direction.
  - returns: the amount of change / delta of the mouse scroll in the vertical direction
- `public double getDeltaY()`
  Returns the amount of change / delta of the mouse scroll in the horizontal direction.
  - returns: the amount of change / delta of the mouse scroll in the horizontal direction

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseScrolled.Post

*class* `net.minecraftforge.client.event.ScreenEvent.MouseScrolled.Post`

Fired after the mouse scroll is handled, if not handled by the screen
 and the corresponding ScreenEvent.MouseScrolled.Pre is not cancelled.

 This event is not cancellable, and does not have a result.
 If the event is cancelled, the mouse scroll will be set as handled.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseScrolled

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseScrolled`: `getDeltaX`, `getDeltaY`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.MouseScrolled.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.MouseScrolled.Pre`

Fired before the mouse scroll is handled by the screen.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen's mouse scroll handler will be bypassed
 and the corresponding ScreenEvent.MouseScrolled.Post will not be fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.MouseScrolled

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.MouseScrolled`: `getDeltaX`, `getDeltaY`
- from `net.minecraftforge.client.event.ScreenEvent.MouseInput`: `getMouseX`, `getMouseY`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Opening

*class* `net.minecraftforge.client.event.ScreenEvent.Opening`

Fired before any Screen is opened, to allow changing it or preventing it from being opened.
 All screen layers on the screen are closed before this event is fired.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the Screen shall be prevented from opening and any previous screen
 will remain open. However, cancelling this event will not prevent the closing of screen layers which happened before
 this event fired.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent

### Fields
- `@Nullable private final @Nullable Screen currentScreen`
- `private Screen newScreen`

### Methods
- `@Nullable public @Nullable Screen getCurrentScreen()`
  Gets the currently open screen at the time of the event being fired.
  
   May be null if no screen was open.
- `@Nullable public @Nullable Screen getNewScreen()`
  - returns: The screen that will be opened if the event is not cancelled. May be null.
- `public void setNewScreen(Screen newScreen)`
  Sets the new screen to be opened if the event is not cancelled. May be null.

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Render

*class* `net.minecraftforge.client.event.ScreenEvent.Render`

Fired when a screen is being drawn.
 See the two subclasses for listening before and after drawing.

Enclosing class: ScreenEvent

### Fields
- `private final GuiGraphics guiGraphics`
- `private final int mouseX`
- `private final int mouseY`
- `private final float partialTick`

### Methods
- `public GuiGraphics getGuiGraphics()`
  Returns the gui graphics used for rendering.
  - returns: the gui graphics used for rendering
- `public int getMouseX()`
  Returns the X coordinate of the mouse pointer.
  - returns: the X coordinate of the mouse pointer
- `public int getMouseY()`
  Returns the Y coordinate of the mouse pointer.
  - returns: the Y coordinate of the mouse pointer
- `public float getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Render.Post

*class* `net.minecraftforge.client.event.ScreenEvent.Render.Post`

Fired after the screen is drawn.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.Render

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.Render`: `getGuiGraphics`, `getMouseX`, `getMouseY`, `getPartialTick`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.Render.Pre

*class* `net.minecraftforge.client.event.ScreenEvent.Render.Pre`

Fired before the screen is drawn.

 This event is cancellable, and does not have a result.
 If the event is cancelled, the screen will not be drawn.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent.Render

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent.Render`: `getGuiGraphics`, `getMouseX`, `getMouseY`, `getPartialTick`
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenEvent.RenderInventoryMobEffects

*class* `net.minecraftforge.client.event.ScreenEvent.RenderInventoryMobEffects`

Fired ahead of rendering any active mob effects in the inventory screen.
 Can be used to select the size of the effects display (full or compact) or even hide or replace vanilla's rendering entirely.
 This event can also be used to modify the horizontal position of the stack of effects being rendered.

 This event is cancellable and does not have a result.
 Cancelling this event will prevent vanilla rendering.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ScreenEvent

### Fields
- `private final int availableSpace`
- `private boolean compact`
- `private int horizontalOffset`

### Methods
- `public int getAvailableSpace()`
  The available space to the right of the inventory.
- `public boolean isCompact()`
  Whether the effects should be rendered in compact mode (only icons, no text), or the default full size.
- `public int getHorizontalOffset()`
  The distance from the left side of the screen that the effect stack is rendered. Positive values shift this more to the right.
- `public void setHorizontalOffset(int offset)`
  Replaces the horizontal offset of the effect stack
- `public void addHorizontalOffset(int offset)`
  Adds to the horizontal offset of the effect stack. Negative values are acceptable.
- `public void setCompact(boolean compact)`
  Sets whether the effects should be rendered in compact mode (only icons, no text), or the default full size.

### Inherited methods
- from `net.minecraftforge.client.event.ScreenEvent`: `getScreen`

## ScreenshotEvent

*class* `net.minecraftforge.client.event.ScreenshotEvent`

Fired when a screenshot is taken, but before it is written to disk.

 This event is cancellable, and does not have a result.
 If this event is cancelled, then the screenshot is not written to disk, and the message in the event will be posted
 to the player's chat.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `public static final Component DEFAULT_CANCEL_REASON`
- `private final NativeImage image`
- `private File screenshotFile`
- `private Component resultMessage`

### Methods
- `public NativeImage getImage()`
  Returns the in-memory image of the screenshot.
  - returns: the in-memory image of the screenshot
- `public File getScreenshotFile()`
  - returns: the file where the screenshot will be saved to
- `public void setScreenshotFile(File screenshotFile)`
  Sets the new file where the screenshot will be saved to.
  - param: screenshotFile - the new filepath
- `public Component getResultMessage()`
  Returns the custom cancellation message, or null if no custom message is set.
  - returns: the custom cancellation message, or null if no custom message is set
- `public void setResultMessage(Component resultMessage)`
  Sets the new custom cancellation message used to inform the player.
   It may be null, in which case the default cancel reason will be used.
  - param: resultMessage - the new result message
- `public Component getCancelMessage()`
  Returns the cancellation message to be used in informing the player.
  
   If there is no custom message given (getResultMessage() returns null), then
   the message will be the default cancel reason message.
  - returns: the cancel message for the player

## TextureStitchEvent

*class* `net.minecraftforge.client.event.TextureStitchEvent`

Fired after a texture atlas is stitched together.

### Fields
- `private final TextureAtlas atlas`

### Methods
- `public TextureAtlas getAtlas()`
  Returns the texture atlas.
  - returns: the texture atlas

## TextureStitchEvent.Post

*class* `net.minecraftforge.client.event.TextureStitchEvent.Post`

Fired after a texture atlas is stitched together and all textures therein has been loaded.

 This event is not cancellable, and does not have a result.

 This event is fired on the FMLJavaModLoadingContext.getModEventBus() mod-specific event bus},
 only on the logical client.

Enclosing class: TextureStitchEvent

### Inherited methods
- from `net.minecraftforge.client.event.TextureStitchEvent`: `getAtlas`

## ToastAddEvent

*class* `net.minecraftforge.client.event.ToastAddEvent`

Fired when the client queues a Toast message to be shown onscreen.
 Toasts are small popups that appear on the top right of the screen, for certain actions such as unlocking Advancements and Recipes.

 This event is cancellable, and does not have a result.
 Cancelling the event stops the toast from being queued, which means it never renders.

 This event is fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final Toast toast`

### Methods
- `public Toast getToast()`

## ViewportEvent

*class* `net.minecraftforge.client.event.ViewportEvent`

Fired for hooking into the entity view rendering in GameRenderer.
 These can be used for customizing the visual features visible to the player.
 See the various subclasses for listening to different features.

 These events are fired on the main Forge event bus,
 only on the logical client.

### Fields
- `private final GameRenderer renderer`
- `private final Camera camera`
- `private final double partialTick`

### Methods
- `public GameRenderer getRenderer()`
  Returns the game renderer.
  - returns: the game renderer
- `public Camera getCamera()`
  Returns the camera information.
  - returns: the camera information
- `public double getPartialTick()`
  Returns the partial tick.
  - returns: the partial tick

## ViewportEvent.ComputeCameraAngles

*class* `net.minecraftforge.client.event.ViewportEvent.ComputeCameraAngles`

Fired to allow altering the angles of the player's camera.
 This can be used to alter the player's view for different effects, such as applying roll.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ViewportEvent

### Fields
- `private float yaw`
- `private float pitch`
- `private float roll`

### Methods
- `public float getYaw()`
  Returns the yaw of the player's camera.
  - returns: the yaw of the player's camera
- `public void setYaw(float yaw)`
  Sets the yaw of the player's camera.
  - param: yaw - the new yaw
- `public float getPitch()`
  Returns the pitch of the player's camera.
  - returns: the pitch of the player's camera
- `public void setPitch(float pitch)`
  Sets the pitch of the player's camera.
  - param: pitch - the new pitch
- `public float getRoll()`
  Returns the roll of the player's camera.
  - returns: the roll of the player's camera
- `public void setRoll(float roll)`
  Sets the roll of the player's camera.
  - param: roll - the new roll

### Inherited methods
- from `net.minecraftforge.client.event.ViewportEvent`: `getCamera`, `getPartialTick`, `getRenderer`

## ViewportEvent.ComputeFogColor

*class* `net.minecraftforge.client.event.ViewportEvent.ComputeFogColor`

Fired for customizing the color of the fog visible to the player.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ViewportEvent

### Fields
- `private float red`
- `private float green`
- `private float blue`

### Methods
- `public float getRed()`
  Returns the red color value of the fog.
  - returns: the red color value of the fog
- `public void setRed(float red)`
  Sets the new red color value of the fog.
  - param: red - the new red color value
- `public float getGreen()`
  Returns the green color value of the fog.
  - returns: the green color value of the fog
- `public void setGreen(float green)`
  Sets the new green color value of the fog.
  - param: green - the new blue color value
- `public float getBlue()`
  Returns the blue color value of the fog.
  - returns: the blue color value of the fog
- `public void setBlue(float blue)`
  Sets the new blue color value of the fog.
  - param: blue - the new blue color value

### Inherited methods
- from `net.minecraftforge.client.event.ViewportEvent`: `getCamera`, `getPartialTick`, `getRenderer`

## ViewportEvent.ComputeFov

*class* `net.minecraftforge.client.event.ViewportEvent.ComputeFov`

Fired for altering the raw field of view (FOV).
 This is after the FOV settings are applied, and before modifiers such as the Nausea effect.

 This event is not cancellable, and does not have a result.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ViewportEvent

### Fields
- `private final boolean usedConfiguredFov`
- `private double fov`

### Methods
- `public double getFOV()`
  Returns the raw field of view value.
  - returns: the raw field of view value
- `public void setFOV(double fov)`
  Sets the field of view value.
  - param: fov - the new FOV value
- `public boolean usedConfiguredFov()`
  Returns whether the base fov value started with a constant or was sourced from the fov set in the options.
  - returns: whether the base fov value started with a constant or was sourced from the fov set in the options

### Inherited methods
- from `net.minecraftforge.client.event.ViewportEvent`: `getCamera`, `getPartialTick`, `getRenderer`

## ViewportEvent.RenderFog

*class* `net.minecraftforge.client.event.ViewportEvent.RenderFog`

Fired for rendering custom fog. The plane distances are based on the player's render distance.

 This event is cancellable, and has a result.

 The event must be cancelled for any changes to the plane distances to take effect.

 This event is fired on the main Forge event bus,
 only on the logical client.

Enclosing class: ViewportEvent

### Fields
- `private final FogRenderer.FogMode mode`
- `private final FogType type`
- `private float farPlaneDistance`
- `private float nearPlaneDistance`
- `private FogShape fogShape`

### Methods
- `public FogRenderer.FogMode getMode()`
  Returns the mode of fog being rendered.
  - returns: the mode of fog being rendered
- `public FogType getType()`
  Returns the type of fog being rendered.
  - returns: the type of fog being rendered
- `public float getFarPlaneDistance()`
  Returns the distance to the far plane where the fog ends.
  - returns: the distance to the far plane where the fog ends
- `public float getNearPlaneDistance()`
  Returns the distance to the near plane where the fog starts.
  - returns: the distance to the near plane where the fog starts
- `public FogShape getFogShape()`
  Returns the shape of the fog being rendered.
  - returns: the shape of the fog being rendered
- `public void setFarPlaneDistance(float distance)`
  Sets the distance to the far plane of the fog.
  - param: distance - the new distance to the far place
- `public void setNearPlaneDistance(float distance)`
  Sets the distance to the near plane of the fog.
  - param: distance - the new distance to the near plane
- `public void setFogShape(FogShape shape)`
  Sets the new shape of the fog being rendered. The new shape will only take effect if the event is cancelled.
  - param: shape - the new shape of the fog
- `public void scaleFarPlaneDistance(float factor)`
  Scales the distance to the far plane of the fog by a given factor.
  - param: factor - the factor to scale the far plane distance by
- `public void scaleNearPlaneDistance(float factor)`
  Scales the distance to the near plane of the fog by a given factor.
  - param: factor - the factor to scale the near plane distance by

### Inherited methods
- from `net.minecraftforge.client.event.ViewportEvent`: `getCamera`, `getPartialTick`, `getRenderer`
