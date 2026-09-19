# Script event hooks

Export a function with the hook name. The first argument is the event object.

```javascript
export function interact(e) {
  e.npc.say('Hello there, ' + e.player.name + '!');
}
```

## other

| Hook | Event | Fields | Notes |
|---|---|---|---|
| `—` | `ClickEvent` | — |  |
| `—` | `ClickEvent.Action` | `OPEN_URL`, `OPEN_FILE`, `RUN_COMMAND`, `SUGGEST_COMMAND`, `CHANGE_PAGE` |  |
| `—` | `HoverEvent` | — |  |
| `—` | `HoverEvent.Action` | `SHOW_TEXT`, `SHOW_ITEM`, `SHOW_ENTITY` |  |
| `—` | `ClientChatEvent` | — | ClientChatEvent is fired whenever the client is about to send a chat message or command to the server.   This event is fired via ForgeEventFactory.onClientSendMessage(String),  which is executed by GuiScreen.sendChatMessage(String, boolean)   message contains the message that will be sent to the server. This can be changed by mods.   originalMessage contains the original message that was going to be sent to the server. This cannot be changed by mods.   This event is Cancelable.   If this event is canceled, the chat message or command is never sent to the server.   This event does not have a result. HasResult   This event is fired on the MinecraftForge.EVENT_BUS. |
| `—` | `ClientChatReceivedEvent` | — |  |
| `—` | `ColorHandlerEvent` | — | Use these events to register block/item  color handlers at the appropriate time. |
| `—` | `ColorHandlerEvent.Block` | — |  |
| `—` | `ColorHandlerEvent.Item` | — |  |
| `—` | `DrawBlockHighlightEvent` | — |  |
| `—` | `EntityViewRenderEvent` | — | Event that hooks into EntityRenderer, allowing any feature to customize visual attributes  the player sees. |
| `—` | `EntityViewRenderEvent.CameraSetup` | — | Event that allows mods to alter the angles of the player's camera. Mainly useful for applying roll. |
| `—` | `EntityViewRenderEvent.FogColors` | — | Event that allows any feature to customize the color of fog the player sees.  NOTE: Any change made to one of the color variables will affect the result seen in-game. |
| `—` | `EntityViewRenderEvent.FogDensity` | — | Event that allows any feature to customize the fog density the player sees.  NOTE: In order to make this event have an effect, you must cancel the event |
| `—` | `EntityViewRenderEvent.FOVModifier` | — | Event that allows mods to alter the raw FOV itself.  This directly affects to the FOV without being modified. |
| `—` | `EntityViewRenderEvent.RenderFogEvent` | — | Event that allows any feature to customize the rendering of fog. |
| `—` | `FOVUpdateEvent` | — | Author: MachineMuse (Claire Semple)  Created: 6:07 PM, 9/5/13 |
| `—` | `GuiContainerEvent` | — | Event class for handling GuiContainer specific events. |
| `—` | `GuiContainerEvent.DrawForeground` | — | This event is fired directly after the GuiContainer has draw any foreground elements,  But before the "dragged" stack, and before any tooltips.  This is useful for any slot / item specific overlays.  Things that need to be on top of All GUI elements but bellow tooltips and dragged stacks. |
| `—` | `GuiOpenEvent` | — | This event is called before any Gui will open.  If you don't want this to happen, cancel the event.  If you want to override this Gui, simply set the gui variable to your own Gui. |
| `—` | `GuiScreenEvent` | — | Event classes for GuiScreen events. |
| `—` | `GuiScreenEvent.ActionPerformedEvent` | — |  |
| `—` | `GuiScreenEvent.ActionPerformedEvent.Post` | — | This event fires after GuiScreen.actionPerformed(GuiButton) provided that the active  screen has not been changed as a result of GuiScreen.actionPerformed(GuiButton). |
| `—` | `GuiScreenEvent.ActionPerformedEvent.Pre` | — | This event fires once it has been determined that a GuiButton object has been clicked.  Cancel this event to bypass GuiScreen.actionPerformed(GuiButton).  Replace button with a different button from buttonList to have that button's action executed. |
| `—` | `GuiScreenEvent.BackgroundDrawnEvent` | — | This event fires at the end of GuiScreen.drawDefaultBackground() and before the rest of the Gui draws.  This allows drawing next to Guis, above the background but below any tooltips. |
| `—` | `GuiScreenEvent.DrawScreenEvent` | — |  |
| `—` | `GuiScreenEvent.DrawScreenEvent.Post` | — | This event fires just after GuiScreen.drawScreen(int, int, float) is called. |
| `—` | `GuiScreenEvent.DrawScreenEvent.Pre` | — | This event fires just before GuiScreen.drawScreen(int, int, float) is called.  Cancel this event to skip GuiScreen.drawScreen(int, int, float). |
| `—` | `GuiScreenEvent.InitGuiEvent` | — |  |
| `—` | `GuiScreenEvent.InitGuiEvent.Post` | — | This event fires right after GuiScreen.initGui().  This is a good place to alter a GuiScreen's component layout if desired. |
| `—` | `GuiScreenEvent.InitGuiEvent.Pre` | — | This event fires just after initializing GuiScreen.mc, GuiScreen.fontRenderer,  GuiScreen.width, and GuiScreen.height.   If canceled the following lines are skipped in GuiScreen.setWorldAndResolution(Minecraft, int, int):   this.buttonList.clear();   this.initGui(); |
| `—` | `GuiScreenEvent.KeyboardInputEvent` | — |  |
| `—` | `GuiScreenEvent.KeyboardInputEvent.Post` | — | This event fires after GuiScreen.handleKeyboardInput() provided that the active  screen has not been changed as a result of GuiScreen.handleKeyboardInput() and  the GuiScreen.keyHandled flag has not been set.  Cancel this event when you successfully use the keyboard input to prevent other handlers from using the same input. |
| `—` | `GuiScreenEvent.KeyboardInputEvent.Pre` | — | This event fires when keyboard input is detected by a GuiScreen.  Cancel this event to bypass GuiScreen.handleKeyboardInput(). |
| `—` | `GuiScreenEvent.MouseInputEvent` | — |  |
| `—` | `GuiScreenEvent.MouseInputEvent.Post` | — | This event fires after GuiScreen.handleMouseInput() provided that the active  screen has not been changed as a result of GuiScreen.handleMouseInput() and  the GuiScreen.mouseHandled flag has not been set.  Cancel this event when you successfully use the mouse input to prevent other handlers from using the same input. |
| `—` | `GuiScreenEvent.MouseInputEvent.Pre` | — | This event fires when mouse input is detected by a GuiScreen.  Cancel this event to bypass GuiScreen.handleMouseInput(). |
| `—` | `GuiScreenEvent.PotionShiftEvent` | — | This event fires in InventoryEffectRenderer.updateActivePotionEffects()  when potion effects are active and the gui wants to move over.  Cancel this event to prevent the Gui from being moved. |
| `—` | `InputUpdateEvent` | — | This event is fired after player movement inputs are updated.   Handlers can freely manipulate MovementInput to cancel movement. |
| `—` | `ModelBakeEvent` | — | Fired when the ModelManager is notified of the resource manager reloading.  Called after model registry is setup, but before it's passed to BlockModelShapes. |
| `—` | `ModelRegistryEvent` | — | Fired when the ModelLoader is ready to receive registrations |
| `—` | `MouseEvent` | — | Author: MachineMuse (Claire Semple)  Created: 2:46 PM, 9/4/13 |
| `—` | `PlayerSPPushOutOfBlocksEvent` | — | This event is called before the pushOutOfBlocks calls in EntityPlayerSP.   Cancelling the event will prevent pushOutOfBlocks from being called. |
| `—` | `RenderBlockOverlayEvent` | — | Called when a block's texture is going to be overlaid on the player's HUD. Cancel this event to prevent the overlay. |
| `—` | `RenderBlockOverlayEvent.OverlayType` | `FIRE`, `BLOCK`, `WATER` |  |
| `—` | `RenderGameOverlayEvent` | — |  |
| `—` | `RenderGameOverlayEvent.BossInfo` | — |  |
| `—` | `RenderGameOverlayEvent.Chat` | — |  |
| `—` | `RenderGameOverlayEvent.ElementType` | `ALL`, `HELMET`, `PORTAL`, `CROSSHAIRS`, `BOSSHEALTH`, `BOSSINFO`, `ARMOR`, `HEALTH`, `FOOD`, `AIR`, `HOTBAR`, `EXPERIENCE`, `TEXT`, `HEALTHMOUNT`, `JUMPBAR`, `CHAT`, `PLAYER_LIST`, `DEBUG`, `POTION_ICONS`, `SUBTITLES`, `FPS_GRAPH`, `VIGNETTE` |  |
| `—` | `RenderGameOverlayEvent.Post` | — |  |
| `—` | `RenderGameOverlayEvent.Pre` | — |  |
| `—` | `RenderGameOverlayEvent.Text` | — |  |
| `—` | `RenderHandEvent` | — | This event is fired on MinecraftForge.EVENT_BUS  before both hands are rendered.  Canceling this event prevents either hand from being rendered,  and prevents RenderSpecificHandEvent from firing.  TODO This may get merged in 11 with RenderSpecificHandEvent to make a generic hand rendering |
| `—` | `RenderItemInFrameEvent` | — | This event is called when an item is rendered in an item frame.   You can set canceled to do no further vanilla processing. |
| `—` | `RenderLivingEvent` | — |  |
| `—` | `RenderLivingEvent.Post` | — |  |
| `—` | `RenderLivingEvent.Pre` | — |  |
| `—` | `RenderLivingEvent.Specials` | — |  |
| `—` | `RenderLivingEvent.Specials.Post` | — |  |
| `—` | `RenderLivingEvent.Specials.Pre` | — |  |
| `—` | `RenderPlayerEvent` | — |  |
| `—` | `RenderPlayerEvent.Post` | — |  |
| `—` | `RenderPlayerEvent.Pre` | — |  |
| `—` | `RenderPlayerEvent.SetArmorModel` | — | Deprecated. |
| `—` | `RenderPlayerEvent.Specials` | — | Deprecated. |
| `—` | `RenderPlayerEvent.Specials.Post` | — |  |
| `—` | `RenderPlayerEvent.Specials.Pre` | — |  |
| `—` | `RenderSpecificHandEvent` | — | This event is fired on the MinecraftForge.EVENT_BUS  whenever a hand is rendered in first person.  Canceling the event causes the hand to not render.  TODO This may get merged in 11 with RenderHandEvent to make a generic hand rendering |
| `—` | `RenderTooltipEvent` | `stack`, `lines`, `x`, `y`, `fr` | A set of events which are fired at various points during tooltip rendering.   Can be used to change the rendering parameters, draw something extra, etc.   Do not use this event directly, use one of the subclasses:   RenderTooltipEvent.Pre  RenderTooltipEvent.PostBackground  RenderTooltipEvent.PostText |
| `—` | `RenderTooltipEvent.Color` | `fr`, `lines`, `stack`, `x`, `y` | This event is fired when the colours for the tooltip background are determined. |
| `—` | `RenderTooltipEvent.Post` | `fr`, `lines`, `stack`, `x`, `y` | Events inheriting from this class are fired at different stages during the tooltip rendering.   Do not use this event directly, use one of its subclasses:   RenderTooltipEvent.PostBackground  RenderTooltipEvent.PostText |
| `—` | `RenderTooltipEvent.PostBackground` | `fr`, `lines`, `stack`, `x`, `y` | This event is fired directly after the tooltip background is drawn, but before any text is drawn. |
| `—` | `RenderTooltipEvent.PostText` | `fr`, `lines`, `stack`, `x`, `y` | This event is fired directly after the tooltip text is drawn, but before the GL state is reset. |
| `—` | `RenderTooltipEvent.Pre` | `fr`, `lines`, `stack`, `x`, `y` | This event is fired before any tooltip calculations are done. It provides setters for all aspects of the tooltip, so the final render can be modified.   This event is Cancelable. |
| `—` | `RenderWorldLastEvent` | — |  |
| `—` | `ScreenshotEvent` | `DEFAULT_CANCEL_REASON` | This event is fired before and after a screenshot is taken  This event is fired on the MinecraftForge.EVENT_BUS  This event is Cancelable   screenshotFile contains the file the screenshot will be/was saved to  image contains the BufferedImage that will be saved  resultMessage contains the ITextComponent to be returned. If null, the default vanilla message will be used instead |
| `—` | `TextureStitchEvent` | — |  |
| `—` | `TextureStitchEvent.Post` | — | This event is fired once the texture map has loaded all textures and  stitched them together. All Icons should have there locations defined  by the time this is fired. |
| `—` | `TextureStitchEvent.Pre` | — | Fired when the TextureMap is told to refresh it's stitched texture.  Called after the Stitched list is cleared, but before any blocks or items  add themselves to the list. |
| `—` | `AnvilUpdateEvent` | — | AnvilUpdateEvent is fired when a player places items in both the left and right slots of a anvil.  If the event is canceled, vanilla behavior will not run, and the output will be set to null.  If the event is not canceled, but the output is not null, it will set the output and not run vanilla behavior.  if the output is null, and the event is not canceled, vanilla behavior will execute. |
| `—` | `AttachCapabilitiesEvent` | — | Fired whenever an object with Capabilities support {currently TileEntity/Item/Entity)  is created. Allowing for the attachment of arbitrary capability providers.   Please note that as this is fired for ALL object creations efficient code is recommended.  And if possible use one of the sub-classes to filter your intended objects. |
| `—` | `CommandEvent` | — | CommandEvent is fired whenever a command is scheduled to be executed.  This event is fired during the invocation of CommandHandler.executeCommand(ICommandSender, String)  and ClientCommandHandler.executeCommand(ICommandSender, String).   command contains the instance of ICommand which is representative of the currently executing command.   sender contains the instance of ICommandSender for the given command sender.   parameters contains the arguments passed for the command execution.   exception begins null, but can be populated with an exception to be thrown within the command.   This event is Cancelable.   If the event is canceled, the execution of the command does not occur.   This event does not have a result. HasResult   This event is fired on the MinecraftForge.EVENT_BUS. |
| `—` | `DifficultyChangeEvent` | — | DifficultyChangeEvent is fired when difficulty is changing.   This event is fired via the ForgeHooks.onDifficultyChange(EnumDifficulty, EnumDifficulty).   This event is not Cancelable.   This event does not have a result. Event.HasResult   This event is fired on the MinecraftForge.EVENT_BUS. |
| `—` | `ForgeEventFactory` | — |  |
| `—` | `GameRuleChangeEvent` | — | Fired when a game rule is changed,  via CommandGameRule.notifyGameRuleChange(GameRules, String, MinecraftServer).   This allows updating clients with the effects of server rule changes. |
| `—` | `LootTableLoadEvent` | — | Event fired when a LootTable json is loaded from json.  This event is fired whenever resources are loaded, or when the server starts.  This event will NOT be fired for LootTables loaded from the world folder, these are  considered configurations files and should not be modified by mods.   Canceling the event will make it load a empty loot table. |
| `—` | `RegistryEvent.MissingMappings.Action` | `DEFAULT`, `IGNORE`, `WARN`, `FAIL`, `REMAP` | Actions you can take with this missing mapping.   IGNORE means this missing mapping will be ignored.  WARN means this missing mapping will generate a warning.  FAIL means this missing mapping will prevent the world from loading. |
| `—` | `RegistryEvent.MissingMappings.Mapping>` | `registry`, `key`, `id` |  |
| `—` | `RegistryEvent.MissingMappings>` | — |  |
| `—` | `RegistryEvent.NewRegistry` | — | Register new registries when you receive this event, through the RecipeBuilder |
| `—` | `RegistryEvent.Register>` | — | Register your objects for the appropriate registry type when you receive this event.   event.getRegistry().register(...)   The registries will be visited in alphabetic order of their name, except blocks and items,  which will be visited FIRST and SECOND respectively.   ObjectHolders will reload between Blocks and Items, and after all registries have been visited. |
| `—` | `RegistryEvent>` | — | RegistryEvent supertype. |
| `—` | `ServerChatEvent` | — | ServerChatEvent is fired whenever a C01PacketChatMessage is processed.   This event is fired via ForgeHooks.onServerChatEvent(NetHandlerPlayServer, String, ITextComponent),  which is executed by the NetHandlerPlayServer.processChatMessage(CPacketChatMessage)   username contains the username of the player sending the chat message.   message contains the message being sent.   player the instance of EntityPlayerMP for the player sending the chat message.   component contains the instance of ChatComponentTranslation for the sent message.   This event is Cancelable.   If this event is canceled, the chat message is never distributed to all clients.   This event does not have a result. HasResult   This event is fired on the MinecraftForge#EVENT_BUS. |
| `—` | `ConfigChangedEvent` | — | These events are posted from the GuiConfig screen when the done button is pressed. The events are only posted  if the parent screen is not an instance of GuiConfig or if the configID field has been set for  the GuiConfig screen.   Listeners for this event should use OnConfigChanged or PostConfigChanged and check for a specific mod ID.  For best results the listener should refresh any objects/fields that are set based on the mod's config  and should serialize the modified config. |
| `—` | `ConfigChangedEvent.OnConfigChangedEvent` | — | This event is intended to be consumed by the mod whose config has been changed. It fires when the Done button  has been clicked on a GuiConfig screen and the following conditions are met:   - at least one config element has been changed   - one of these 2 conditions are met:   1) the parent screen is null or is not an instance of GuiConfig   2) the configID field has been set to a non-null value for the GuiConfig screen   Modders should check the modID field of the event to ensure they are only acting on their own config screen's event! |
| `—` | `ConfigChangedEvent.PostConfigChangedEvent` | — | This event is provided for mods to consume if they want to be able to check if other mods' configs have been changed.  This event only fires if the OnConfigChangedEvent result is not DENY. |
| `—` | `FMLConstructionEvent` | — | An internal FML event used to signal the construction of mods. Should not be used by mods. |
| `—` | `FMLEvent` | — | Parent type to all FML events. This is based on Guava EventBus. Event Subscription isn't using the Guava annotation  however, it's using a custom annotation specific to FML Mod.EventHandler |
| `—` | `FMLFingerprintViolationEvent` | — | A special event used when the Mod.certificateFingerprint() doesn't match the certificate loaded from the JAR  file. You could use this to log a warning that the code that is running might not be yours, for example. |
| `—` | `FMLInitializationEvent` | — | Called after FMLPreInitializationEvent and before FMLPostInitializationEvent during mod  startup.   This is the second of three commonly called events during mod initialization.   Recommended activities: Register your recipes and Ore Dictionary entries in the  GameRegistry and OreDictionary  Dispatch requests through FMLInterModComms to other mods, to tell them what you wish them to do. |
| `—` | `FMLInterModComms` | — | Simple intermod communications to receive simple messages directed at you  from other mods |
| `—` | `FMLInterModComms.IMCEvent` | — | Subscribe to this event to receive your messages (they are sent between  FMLInitializationEvent and FMLPostInitializationEvent) |
| `—` | `FMLInterModComms.IMCMessage` | `key` | You will receive an instance of this for each message sent |
| `—` | `FMLLoadCompleteEvent` | — | This is a mostly internal event fired to mod containers that indicates that loading is complete. Mods should not  in general override or otherwise attempt to implement this event. |
| `—` | `FMLLoadEvent` | — | Internal only event, used to begin the lifecycle of loading mods. |
| `—` | `FMLModDisabledEvent` | — |  |
| `—` | `FMLModIdMappingEvent` | `isFrozen` | Called whenever the ID mapping might have changed. If you register for this event, you  will be called back whenever the client or server loads an ID set. This includes both  when the ID maps are loaded from disk, as well as when the ID maps revert to the initial  state.   Note: you cannot change the IDs that have been allocated, but you might want to use  this event to update caches or other in-mod artifacts that might be impacted by an ID  change. |
| `—` | `FMLModIdMappingEvent.ModRemapping` | `registry`, `key`, `oldId`, `newId` |  |
| `—` | `FMLPostInitializationEvent` | — | Called after FMLInitializationEvent has been dispatched on every mod. This is the third and last  commonly called event during mod initialization.   Recommended activities: interact with other mods to establish cross-mod behaviours. |
| `—` | `FMLPreInitializationEvent` | — | Called before FMLInitializationEvent during mod startup.   This is the first of three commonly called events during mod initialization.   Recommended activities:  Setup your logging getModLog()  Load any configuration data you might have getSuggestedConfigurationFile()  Search for a version.properties file and load it getVersionProperties()  Configure your ModMetadata programmatically getModMetadata()  Discover parts of your mod by using annotation search getAsmData() |
| `—` | `FMLServerAboutToStartEvent` | — | Called before the server begins loading anything. Called after FMLPostInitializationEvent on the dedicated  server, and after the player has hit "Play Selected World" in the client. Called before FMLServerStartingEvent.   You can obtain a reference to the server with this event. |
| `—` | `FMLServerStartedEvent` | — | Called after FMLServerStartingEvent when the server is available and ready to play. |
| `—` | `FMLServerStartingEvent` | — | Called after FMLServerAboutToStartEvent and before FMLServerStartedEvent.  This event allows for customizations of the server, such as loading custom commands, perhaps customizing recipes or  other activities. |
| `—` | `FMLServerStoppedEvent` | — | Called after FMLServerStoppingEvent when the server has completely shut down.  Called immediately before shutting down, on the dedicated server, and before returning  to the main menu on the client. |
| `—` | `FMLServerStoppingEvent` | — | Called when the server begins an orderly shutdown, before FMLServerStoppedEvent. |
| `—` | `FMLStateEvent` | — | The parent of all mod-state changing events |
