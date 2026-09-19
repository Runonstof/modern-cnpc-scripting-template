# net.minecraftforge.client.event

- [ClientChatEvent](#clientchatevent)
- [ClientChatReceivedEvent](#clientchatreceivedevent)
- [ColorHandlerEvent](#colorhandlerevent)
- [ColorHandlerEvent.Block](#colorhandlerevent.block)
- [ColorHandlerEvent.Item](#colorhandlerevent.item)
- [DrawBlockHighlightEvent](#drawblockhighlightevent)
- [EntityViewRenderEvent](#entityviewrenderevent)
- [EntityViewRenderEvent.CameraSetup](#entityviewrenderevent.camerasetup)
- [EntityViewRenderEvent.FogColors](#entityviewrenderevent.fogcolors)
- [EntityViewRenderEvent.FogDensity](#entityviewrenderevent.fogdensity)
- [EntityViewRenderEvent.FOVModifier](#entityviewrenderevent.fovmodifier)
- [EntityViewRenderEvent.RenderFogEvent](#entityviewrenderevent.renderfogevent)
- [FOVUpdateEvent](#fovupdateevent)
- [GuiContainerEvent](#guicontainerevent)
- [GuiContainerEvent.DrawForeground](#guicontainerevent.drawforeground)
- [GuiOpenEvent](#guiopenevent)
- [GuiScreenEvent](#guiscreenevent)
- [GuiScreenEvent.ActionPerformedEvent](#guiscreenevent.actionperformedevent)
- [GuiScreenEvent.ActionPerformedEvent.Post](#guiscreenevent.actionperformedevent.post)
- [GuiScreenEvent.ActionPerformedEvent.Pre](#guiscreenevent.actionperformedevent.pre)
- [GuiScreenEvent.BackgroundDrawnEvent](#guiscreenevent.backgrounddrawnevent)
- [GuiScreenEvent.DrawScreenEvent](#guiscreenevent.drawscreenevent)
- [GuiScreenEvent.DrawScreenEvent.Post](#guiscreenevent.drawscreenevent.post)
- [GuiScreenEvent.DrawScreenEvent.Pre](#guiscreenevent.drawscreenevent.pre)
- [GuiScreenEvent.InitGuiEvent](#guiscreenevent.initguievent)
- [GuiScreenEvent.InitGuiEvent.Post](#guiscreenevent.initguievent.post)
- [GuiScreenEvent.InitGuiEvent.Pre](#guiscreenevent.initguievent.pre)
- [GuiScreenEvent.KeyboardInputEvent](#guiscreenevent.keyboardinputevent)
- [GuiScreenEvent.KeyboardInputEvent.Post](#guiscreenevent.keyboardinputevent.post)
- [GuiScreenEvent.KeyboardInputEvent.Pre](#guiscreenevent.keyboardinputevent.pre)
- [GuiScreenEvent.MouseInputEvent](#guiscreenevent.mouseinputevent)
- [GuiScreenEvent.MouseInputEvent.Post](#guiscreenevent.mouseinputevent.post)
- [GuiScreenEvent.MouseInputEvent.Pre](#guiscreenevent.mouseinputevent.pre)
- [GuiScreenEvent.PotionShiftEvent](#guiscreenevent.potionshiftevent)
- [InputUpdateEvent](#inputupdateevent)
- [ModelBakeEvent](#modelbakeevent)
- [ModelRegistryEvent](#modelregistryevent)
- [MouseEvent](#mouseevent)
- [PlayerSPPushOutOfBlocksEvent](#playersppushoutofblocksevent)
- [RenderBlockOverlayEvent](#renderblockoverlayevent)
- [RenderBlockOverlayEvent.OverlayType](#renderblockoverlayevent.overlaytype)
- [RenderGameOverlayEvent](#rendergameoverlayevent)
- [RenderGameOverlayEvent.BossInfo](#rendergameoverlayevent.bossinfo)
- [RenderGameOverlayEvent.Chat](#rendergameoverlayevent.chat)
- [RenderGameOverlayEvent.ElementType](#rendergameoverlayevent.elementtype)
- [RenderGameOverlayEvent.Post](#rendergameoverlayevent.post)
- [RenderGameOverlayEvent.Pre](#rendergameoverlayevent.pre)
- [RenderGameOverlayEvent.Text](#rendergameoverlayevent.text)
- [RenderHandEvent](#renderhandevent)
- [RenderItemInFrameEvent](#renderiteminframeevent)
- [RenderLivingEvent](#renderlivingevent)
- [RenderLivingEvent.Post](#renderlivingevent.post)
- [RenderLivingEvent.Pre](#renderlivingevent.pre)
- [RenderLivingEvent.Specials](#renderlivingevent.specials)
- [RenderLivingEvent.Specials.Post](#renderlivingevent.specials.post)
- [RenderLivingEvent.Specials.Pre](#renderlivingevent.specials.pre)
- [RenderPlayerEvent](#renderplayerevent)
- [RenderPlayerEvent.Post](#renderplayerevent.post)
- [RenderPlayerEvent.Pre](#renderplayerevent.pre)
- [RenderPlayerEvent.SetArmorModel](#renderplayerevent.setarmormodel)
- [RenderPlayerEvent.Specials](#renderplayerevent.specials)
- [RenderPlayerEvent.Specials.Post](#renderplayerevent.specials.post)
- [RenderPlayerEvent.Specials.Pre](#renderplayerevent.specials.pre)
- [RenderSpecificHandEvent](#renderspecifichandevent)
- [RenderTooltipEvent](#rendertooltipevent)
- [RenderTooltipEvent.Color](#rendertooltipevent.color)
- [RenderTooltipEvent.Post](#rendertooltipevent.post)
- [RenderTooltipEvent.PostBackground](#rendertooltipevent.postbackground)
- [RenderTooltipEvent.PostText](#rendertooltipevent.posttext)
- [RenderTooltipEvent.Pre](#rendertooltipevent.pre)
- [RenderWorldLastEvent](#renderworldlastevent)
- [ScreenshotEvent](#screenshotevent)
- [TextureStitchEvent](#texturestitchevent)
- [TextureStitchEvent.Post](#texturestitchevent.post)
- [TextureStitchEvent.Pre](#texturestitchevent.pre)
## ClientChatEvent

*class* `net.minecraftforge.client.event.ClientChatEvent`

ClientChatEvent is fired whenever the client is about to send a chat message or command to the server.

 This event is fired via ForgeEventFactory.onClientSendMessage(String),
 which is executed by GuiScreen.sendChatMessage(String, boolean)

 message contains the message that will be sent to the server. This can be changed by mods.

 originalMessage contains the original message that was going to be sent to the server. This cannot be changed by mods.

 This event is Cancelable.

 If this event is canceled, the chat message or command is never sent to the server.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

### Methods
- `public java.lang.String getMessage()`
- `public void setMessage(java.lang.String message)`
- `public java.lang.String getOriginalMessage()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ClientChatReceivedEvent

*class* `net.minecraftforge.client.event.ClientChatReceivedEvent`

### Methods
- `public ITextComponent getMessage()`
- `public void setMessage(ITextComponent message)`
- `public ChatType getType()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ColorHandlerEvent

*class* `net.minecraftforge.client.event.ColorHandlerEvent`

Use these events to register block/item
 color handlers at the appropriate time.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ColorHandlerEvent.Block

*class* `net.minecraftforge.client.event.ColorHandlerEvent.Block`

Enclosing class: ColorHandlerEvent

### Methods
- `public BlockColors getBlockColors()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ColorHandlerEvent.Item

*class* `net.minecraftforge.client.event.ColorHandlerEvent.Item`

Enclosing class: ColorHandlerEvent

### Methods
- `public ItemColors getItemColors()`
- `public BlockColors getBlockColors()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DrawBlockHighlightEvent

*class* `net.minecraftforge.client.event.DrawBlockHighlightEvent`

### Methods
- `public RenderGlobal getContext()`
- `public EntityPlayer getPlayer()`
- `public RayTraceResult getTarget()`
- `public int getSubID()`
- `public float getPartialTicks()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityViewRenderEvent

*class* `net.minecraftforge.client.event.EntityViewRenderEvent`

Event that hooks into EntityRenderer, allowing any feature to customize visual attributes
 the player sees.

### Methods
- `public EntityRenderer getRenderer()`
- `public Entity getEntity()`
- `public IBlockState getState()`
- `public double getRenderPartialTicks()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityViewRenderEvent.CameraSetup

*class* `net.minecraftforge.client.event.EntityViewRenderEvent.CameraSetup`

Event that allows mods to alter the angles of the player's camera. Mainly useful for applying roll.

Enclosing class: EntityViewRenderEvent

### Methods
- `public float getYaw()`
- `public void setYaw(float yaw)`
- `public float getPitch()`
- `public void setPitch(float pitch)`
- `public float getRoll()`
- `public void setRoll(float roll)`

### Inherited methods
- from `net.minecraftforge.client.event.EntityViewRenderEvent`: `getEntity`, `getRenderer`, `getRenderPartialTicks`, `getState`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityViewRenderEvent.FogColors

*class* `net.minecraftforge.client.event.EntityViewRenderEvent.FogColors`

Event that allows any feature to customize the color of fog the player sees.
 NOTE: Any change made to one of the color variables will affect the result seen in-game.

Enclosing class: EntityViewRenderEvent

### Methods
- `public float getRed()`
- `public void setRed(float red)`
- `public float getGreen()`
- `public void setGreen(float green)`
- `public float getBlue()`
- `public void setBlue(float blue)`

### Inherited methods
- from `net.minecraftforge.client.event.EntityViewRenderEvent`: `getEntity`, `getRenderer`, `getRenderPartialTicks`, `getState`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityViewRenderEvent.FogDensity

*class* `net.minecraftforge.client.event.EntityViewRenderEvent.FogDensity`

Event that allows any feature to customize the fog density the player sees.
 NOTE: In order to make this event have an effect, you must cancel the event

Enclosing class: EntityViewRenderEvent

### Methods
- `public float getDensity()`
- `public void setDensity(float density)`

### Inherited methods
- from `net.minecraftforge.client.event.EntityViewRenderEvent`: `getEntity`, `getRenderer`, `getRenderPartialTicks`, `getState`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityViewRenderEvent.FOVModifier

*class* `net.minecraftforge.client.event.EntityViewRenderEvent.FOVModifier`

Event that allows mods to alter the raw FOV itself.
 This directly affects to the FOV without being modified.

Enclosing class: EntityViewRenderEvent

### Methods
- `public float getFOV()`
- `public void setFOV(float fov)`

### Inherited methods
- from `net.minecraftforge.client.event.EntityViewRenderEvent`: `getEntity`, `getRenderer`, `getRenderPartialTicks`, `getState`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## EntityViewRenderEvent.RenderFogEvent

*class* `net.minecraftforge.client.event.EntityViewRenderEvent.RenderFogEvent`

Event that allows any feature to customize the rendering of fog.

Enclosing class: EntityViewRenderEvent

### Methods
- `public int getFogMode()`
- `public float getFarPlaneDistance()`

### Inherited methods
- from `net.minecraftforge.client.event.EntityViewRenderEvent`: `getEntity`, `getRenderer`, `getRenderPartialTicks`, `getState`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## FOVUpdateEvent

*class* `net.minecraftforge.client.event.FOVUpdateEvent`

Author: MachineMuse (Claire Semple)
 Created: 6:07 PM, 9/5/13

### Methods
- `public EntityPlayer getEntity()`
- `public float getFov()`
- `public float getNewfov()`
- `public void setNewfov(float newfov)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiContainerEvent

*class* `net.minecraftforge.client.event.GuiContainerEvent`

Event class for handling GuiContainer specific events.

### Methods
- `public GuiContainer getGuiContainer()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiContainerEvent.DrawForeground

*class* `net.minecraftforge.client.event.GuiContainerEvent.DrawForeground`

This event is fired directly after the GuiContainer has draw any foreground elements,
 But before the "dragged" stack, and before any tooltips.
 This is useful for any slot / item specific overlays.
 Things that need to be on top of All GUI elements but bellow tooltips and dragged stacks.

Enclosing class: GuiContainerEvent

### Methods
- `public int getMouseX()`
- `public int getMouseY()`

### Inherited methods
- from `net.minecraftforge.client.event.GuiContainerEvent`: `getGuiContainer`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiOpenEvent

*class* `net.minecraftforge.client.event.GuiOpenEvent`

This event is called before any Gui will open.
 If you don't want this to happen, cancel the event.
 If you want to override this Gui, simply set the gui variable to your own Gui.

### Methods
- `public GuiScreen getGui()`
- `public void setGui(GuiScreen gui)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent`

Event classes for GuiScreen events.

### Methods
- `public GuiScreen getGui()`
  The GuiScreen object generating this event.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.ActionPerformedEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.ActionPerformedEvent`

Enclosing class: GuiScreenEvent

### Methods
- `public GuiButton getButton()`
  The button that was clicked.
- `public void setButton(GuiButton button)`
- `public java.util.List<GuiButton> getButtonList()`
  A COPY of the buttonList field from the GuiScreen referenced by GuiScreenEvent.gui.
- `public void setButtonList(java.util.List<GuiButton> buttonList)`

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.ActionPerformedEvent.Post

*class* `net.minecraftforge.client.event.GuiScreenEvent.ActionPerformedEvent.Post`

This event fires after GuiScreen.actionPerformed(GuiButton) provided that the active
 screen has not been changed as a result of GuiScreen.actionPerformed(GuiButton).

Enclosing class: GuiScreenEvent.ActionPerformedEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent.ActionPerformedEvent`: `getButton`, `getButtonList`, `setButton`, `setButtonList`
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.ActionPerformedEvent.Pre

*class* `net.minecraftforge.client.event.GuiScreenEvent.ActionPerformedEvent.Pre`

This event fires once it has been determined that a GuiButton object has been clicked.
 Cancel this event to bypass GuiScreen.actionPerformed(GuiButton).
 Replace button with a different button from buttonList to have that button's action executed.

Enclosing class: GuiScreenEvent.ActionPerformedEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent.ActionPerformedEvent`: `getButton`, `getButtonList`, `setButton`, `setButtonList`
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.BackgroundDrawnEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.BackgroundDrawnEvent`

This event fires at the end of GuiScreen.drawDefaultBackground() and before the rest of the Gui draws.
 This allows drawing next to Guis, above the background but below any tooltips.

Enclosing class: GuiScreenEvent

### Methods
- `public int getMouseX()`
  The x coordinate of the mouse pointer on the screen.
- `public int getMouseY()`
  The y coordinate of the mouse pointer on the screen.

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.DrawScreenEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent`

Enclosing class: GuiScreenEvent

### Methods
- `public int getMouseX()`
  The x coordinate of the mouse pointer on the screen.
- `public int getMouseY()`
  The y coordinate of the mouse pointer on the screen.
- `public float getRenderPartialTicks()`
  Partial render ticks elapsed.

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.DrawScreenEvent.Post

*class* `net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent.Post`

This event fires just after GuiScreen.drawScreen(int, int, float) is called.

Enclosing class: GuiScreenEvent.DrawScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent`: `getMouseX`, `getMouseY`, `getRenderPartialTicks`
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.DrawScreenEvent.Pre

*class* `net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent.Pre`

This event fires just before GuiScreen.drawScreen(int, int, float) is called.
 Cancel this event to skip GuiScreen.drawScreen(int, int, float).

Enclosing class: GuiScreenEvent.DrawScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent.DrawScreenEvent`: `getMouseX`, `getMouseY`, `getRenderPartialTicks`
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.InitGuiEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.InitGuiEvent`

Enclosing class: GuiScreenEvent

### Methods
- `public java.util.List<GuiButton> getButtonList()`
  The buttonList field from the GuiScreen object referenced by GuiScreenEvent.gui.
- `public void setButtonList(java.util.List<GuiButton> buttonList)`

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.InitGuiEvent.Post

*class* `net.minecraftforge.client.event.GuiScreenEvent.InitGuiEvent.Post`

This event fires right after GuiScreen.initGui().
 This is a good place to alter a GuiScreen's component layout if desired.

Enclosing class: GuiScreenEvent.InitGuiEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent.InitGuiEvent`: `getButtonList`, `setButtonList`
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.InitGuiEvent.Pre

*class* `net.minecraftforge.client.event.GuiScreenEvent.InitGuiEvent.Pre`

This event fires just after initializing GuiScreen.mc, GuiScreen.fontRenderer,
 GuiScreen.width, and GuiScreen.height.

 If canceled the following lines are skipped in GuiScreen.setWorldAndResolution(Minecraft, int, int):

 this.buttonList.clear();

 this.initGui();

Enclosing class: GuiScreenEvent.InitGuiEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent.InitGuiEvent`: `getButtonList`, `setButtonList`
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.KeyboardInputEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.KeyboardInputEvent`

Enclosing class: GuiScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.KeyboardInputEvent.Post

*class* `net.minecraftforge.client.event.GuiScreenEvent.KeyboardInputEvent.Post`

This event fires after GuiScreen.handleKeyboardInput() provided that the active
 screen has not been changed as a result of GuiScreen.handleKeyboardInput() and
 the GuiScreen.keyHandled flag has not been set.
 Cancel this event when you successfully use the keyboard input to prevent other handlers from using the same input.

Enclosing class: GuiScreenEvent.KeyboardInputEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.KeyboardInputEvent.Pre

*class* `net.minecraftforge.client.event.GuiScreenEvent.KeyboardInputEvent.Pre`

This event fires when keyboard input is detected by a GuiScreen.
 Cancel this event to bypass GuiScreen.handleKeyboardInput().

Enclosing class: GuiScreenEvent.KeyboardInputEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.MouseInputEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.MouseInputEvent`

Enclosing class: GuiScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.MouseInputEvent.Post

*class* `net.minecraftforge.client.event.GuiScreenEvent.MouseInputEvent.Post`

This event fires after GuiScreen.handleMouseInput() provided that the active
 screen has not been changed as a result of GuiScreen.handleMouseInput() and
 the GuiScreen.mouseHandled flag has not been set.
 Cancel this event when you successfully use the mouse input to prevent other handlers from using the same input.

Enclosing class: GuiScreenEvent.MouseInputEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.MouseInputEvent.Pre

*class* `net.minecraftforge.client.event.GuiScreenEvent.MouseInputEvent.Pre`

This event fires when mouse input is detected by a GuiScreen.
 Cancel this event to bypass GuiScreen.handleMouseInput().

Enclosing class: GuiScreenEvent.MouseInputEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## GuiScreenEvent.PotionShiftEvent

*class* `net.minecraftforge.client.event.GuiScreenEvent.PotionShiftEvent`

This event fires in InventoryEffectRenderer.updateActivePotionEffects()
 when potion effects are active and the gui wants to move over.
 Cancel this event to prevent the Gui from being moved.

Enclosing class: GuiScreenEvent

### Inherited methods
- from `net.minecraftforge.client.event.GuiScreenEvent`: `getGui`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## InputUpdateEvent

*class* `net.minecraftforge.client.event.InputUpdateEvent`

This event is fired after player movement inputs are updated.

 Handlers can freely manipulate MovementInput to cancel movement.

### Methods
- `public MovementInput getMovementInput()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ModelBakeEvent

*class* `net.minecraftforge.client.event.ModelBakeEvent`

Fired when the ModelManager is notified of the resource manager reloading.
 Called after model registry is setup, but before it's passed to BlockModelShapes.

### Methods
- `public ModelManager getModelManager()`
- `public IRegistry<ModelResourceLocation,IBakedModel> getModelRegistry()`
- `public ModelLoader getModelLoader()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ModelRegistryEvent

*class* `net.minecraftforge.client.event.ModelRegistryEvent`

Fired when the ModelLoader is ready to receive registrations

All Implemented Interfaces: IContextSetter

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
- from `net.minecraftforge.fml.common.eventhandler.IContextSetter`: `setModContainer`

## MouseEvent

*class* `net.minecraftforge.client.event.MouseEvent`

Author: MachineMuse (Claire Semple)
 Created: 2:46 PM, 9/4/13

### Methods
- `public int getX()`
- `public int getY()`
- `public int getDx()`
- `public int getDy()`
- `public int getDwheel()`
- `public int getButton()`
- `public boolean isButtonstate()`
- `public long getNanoseconds()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PlayerSPPushOutOfBlocksEvent

*class* `net.minecraftforge.client.event.PlayerSPPushOutOfBlocksEvent`

This event is called before the pushOutOfBlocks calls in EntityPlayerSP.

 Cancelling the event will prevent pushOutOfBlocks from being called.

### Methods
- `public AxisAlignedBB getEntityBoundingBox()`
- `public void setEntityBoundingBox(AxisAlignedBB entityBoundingBox)`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderBlockOverlayEvent

*class* `net.minecraftforge.client.event.RenderBlockOverlayEvent`

Called when a block's texture is going to be overlaid on the player's HUD. Cancel this event to prevent the overlay.

### Methods
- `public EntityPlayer getPlayer()`
  The player which the overlay will apply to
- `public float getRenderPartialTicks()`
- `public RenderBlockOverlayEvent.OverlayType getOverlayType()`
  The type of overlay to occur
- `public IBlockState getBlockForOverlay()`
  If the overlay type is BLOCK, then this is the block which the overlay is getting it's icon from
- `public BlockPos getBlockPos()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderBlockOverlayEvent.OverlayType

*enum* `net.minecraftforge.client.event.RenderBlockOverlayEvent.OverlayType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<RenderBlockOverlayEvent.OverlayType>

Enclosing class: RenderBlockOverlayEvent

### Fields
- `public static final RenderBlockOverlayEvent.OverlayType FIRE`
- `public static final RenderBlockOverlayEvent.OverlayType BLOCK`
- `public static final RenderBlockOverlayEvent.OverlayType WATER`

### Methods
- `public static RenderBlockOverlayEvent.OverlayType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (RenderBlockOverlayEvent.OverlayType c : RenderBlockOverlayEvent.OverlayType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static RenderBlockOverlayEvent.OverlayType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RenderGameOverlayEvent

*class* `net.minecraftforge.client.event.RenderGameOverlayEvent`

### Methods
- `public float getPartialTicks()`
- `public ScaledResolution getResolution()`
- `public RenderGameOverlayEvent.ElementType getType()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderGameOverlayEvent.BossInfo

*class* `net.minecraftforge.client.event.RenderGameOverlayEvent.BossInfo`

Enclosing class: RenderGameOverlayEvent

### Methods
- `public BossInfoClient getBossInfo()`
  - returns: The BossInfoClient currently being rendered
- `public int getX()`
  - returns: The current x position we are rendering at
- `public int getY()`
  - returns: The current y position we are rendering at
- `public int getIncrement()`
  - returns: How much to move down before rendering the next bar
- `public void setIncrement(int increment)`
  Sets the amount to move down before rendering the next bar
  - param: increment - The increment to set

### Inherited methods
- from `net.minecraftforge.client.event.RenderGameOverlayEvent`: `getPartialTicks`, `getResolution`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderGameOverlayEvent.Chat

*class* `net.minecraftforge.client.event.RenderGameOverlayEvent.Chat`

Enclosing class: RenderGameOverlayEvent

### Methods
- `public int getPosX()`
- `public void setPosX(int posX)`
- `public int getPosY()`
- `public void setPosY(int posY)`

### Inherited methods
- from `net.minecraftforge.client.event.RenderGameOverlayEvent`: `getPartialTicks`, `getResolution`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderGameOverlayEvent.ElementType

*enum* `net.minecraftforge.client.event.RenderGameOverlayEvent.ElementType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<RenderGameOverlayEvent.ElementType>

Enclosing class: RenderGameOverlayEvent

### Fields
- `public static final RenderGameOverlayEvent.ElementType ALL`
- `public static final RenderGameOverlayEvent.ElementType HELMET`
- `public static final RenderGameOverlayEvent.ElementType PORTAL`
- `public static final RenderGameOverlayEvent.ElementType CROSSHAIRS`
- `public static final RenderGameOverlayEvent.ElementType BOSSHEALTH`
- `public static final RenderGameOverlayEvent.ElementType BOSSINFO`
- `public static final RenderGameOverlayEvent.ElementType ARMOR`
- `public static final RenderGameOverlayEvent.ElementType HEALTH`
- `public static final RenderGameOverlayEvent.ElementType FOOD`
- `public static final RenderGameOverlayEvent.ElementType AIR`
- `public static final RenderGameOverlayEvent.ElementType HOTBAR`
- `public static final RenderGameOverlayEvent.ElementType EXPERIENCE`
- `public static final RenderGameOverlayEvent.ElementType TEXT`
- `public static final RenderGameOverlayEvent.ElementType HEALTHMOUNT`
- `public static final RenderGameOverlayEvent.ElementType JUMPBAR`
- `public static final RenderGameOverlayEvent.ElementType CHAT`
- `public static final RenderGameOverlayEvent.ElementType PLAYER_LIST`
- `public static final RenderGameOverlayEvent.ElementType DEBUG`
- `public static final RenderGameOverlayEvent.ElementType POTION_ICONS`
- `public static final RenderGameOverlayEvent.ElementType SUBTITLES`
- `public static final RenderGameOverlayEvent.ElementType FPS_GRAPH`
- `public static final RenderGameOverlayEvent.ElementType VIGNETTE`

### Methods
- `public static RenderGameOverlayEvent.ElementType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (RenderGameOverlayEvent.ElementType c : RenderGameOverlayEvent.ElementType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static RenderGameOverlayEvent.ElementType valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## RenderGameOverlayEvent.Post

*class* `net.minecraftforge.client.event.RenderGameOverlayEvent.Post`

Enclosing class: RenderGameOverlayEvent

### Methods
- `public boolean isCancelable()`
  Description copied from class: Event
  Determine if this function is cancelable at all.
  - returns: If access to setCanceled should be allowed

 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.

### Inherited methods
- from `net.minecraftforge.client.event.RenderGameOverlayEvent`: `getPartialTicks`, `getResolution`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderGameOverlayEvent.Pre

*class* `net.minecraftforge.client.event.RenderGameOverlayEvent.Pre`

Enclosing class: RenderGameOverlayEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderGameOverlayEvent`: `getPartialTicks`, `getResolution`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderGameOverlayEvent.Text

*class* `net.minecraftforge.client.event.RenderGameOverlayEvent.Text`

Enclosing class: RenderGameOverlayEvent

### Methods
- `public java.util.ArrayList<java.lang.String> getLeft()`
- `public java.util.ArrayList<java.lang.String> getRight()`

### Inherited methods
- from `net.minecraftforge.client.event.RenderGameOverlayEvent`: `getPartialTicks`, `getResolution`, `getType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderHandEvent

*class* `net.minecraftforge.client.event.RenderHandEvent`

This event is fired on MinecraftForge.EVENT_BUS
 before both hands are rendered.
 Canceling this event prevents either hand from being rendered,
 and prevents RenderSpecificHandEvent from firing.
 TODO This may get merged in 11 with RenderSpecificHandEvent to make a generic hand rendering

### Methods
- `public RenderGlobal getContext()`
- `public float getPartialTicks()`
- `public int getRenderPass()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderItemInFrameEvent

*class* `net.minecraftforge.client.event.RenderItemInFrameEvent`

This event is called when an item is rendered in an item frame.

 You can set canceled to do no further vanilla processing.

### Methods
- `public ItemStack getItem()`
- `public EntityItemFrame getEntityItemFrame()`
- `public RenderItemFrame getRenderer()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderLivingEvent

*class* `net.minecraftforge.client.event.RenderLivingEvent`

### Methods
- `public EntityLivingBase getEntity()`
- `public RenderLivingBase<T> getRenderer()`
- `public float getPartialRenderTick()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderLivingEvent.Post

*class* `net.minecraftforge.client.event.RenderLivingEvent.Post`

Enclosing class: RenderLivingEvent<T extends EntityLivingBase>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderLivingEvent.Pre

*class* `net.minecraftforge.client.event.RenderLivingEvent.Pre`

Enclosing class: RenderLivingEvent<T extends EntityLivingBase>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderLivingEvent.Specials

*class* `net.minecraftforge.client.event.RenderLivingEvent.Specials`

Enclosing class: RenderLivingEvent<T extends EntityLivingBase>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderLivingEvent.Specials.Post

*class* `net.minecraftforge.client.event.RenderLivingEvent.Specials.Post`

Enclosing class: RenderLivingEvent.Specials<T extends EntityLivingBase>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderLivingEvent.Specials.Pre

*class* `net.minecraftforge.client.event.RenderLivingEvent.Specials.Pre`

Enclosing class: RenderLivingEvent.Specials<T extends EntityLivingBase>

### Inherited methods
- from `net.minecraftforge.client.event.RenderLivingEvent`: `getEntity`, `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent

*class* `net.minecraftforge.client.event.RenderPlayerEvent`

### Methods
- `public RenderPlayer getRenderer()`
- `public float getPartialRenderTick()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`

### Inherited methods
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent.Post

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Post`

Enclosing class: RenderPlayerEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent.Pre

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Pre`

Enclosing class: RenderPlayerEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent.SetArmorModel

*class* `net.minecraftforge.client.event.RenderPlayerEvent.SetArmorModel`

Deprecated.

Enclosing class: RenderPlayerEvent

### Methods
- `public int getResultValue()` (deprecated)
  Deprecated.
  Setting this to any value besides -1 will result in the function being
   Immediately exited with the return value specified.
- `public void setResult(int result)` (deprecated)
  Deprecated.
- `public int getSlot()` (deprecated)
  Deprecated.
- `public ItemStack getStack()` (deprecated)
  Deprecated.

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent.Specials

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Specials`

Deprecated.

Enclosing class: RenderPlayerEvent

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent.Specials.Post

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Specials.Post`

Enclosing class: RenderPlayerEvent.Specials

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderPlayerEvent.Specials.Pre

*class* `net.minecraftforge.client.event.RenderPlayerEvent.Specials.Pre`

Enclosing class: RenderPlayerEvent.Specials

### Methods
- `public boolean shouldRenderHelmet()`
- `public void setRenderHelmet(boolean renderHelmet)`
- `public boolean shouldRenderCape()`
- `public void setRenderCape(boolean renderCape)`
- `public boolean shouldRenderItem()`
- `public void setRenderItem(boolean renderItem)`

### Inherited methods
- from `net.minecraftforge.client.event.RenderPlayerEvent`: `getPartialRenderTick`, `getRenderer`, `getX`, `getY`, `getZ`
- from `net.minecraftforge.event.entity.player.PlayerEvent`: `getEntityPlayer`
- from `net.minecraftforge.event.entity.living.LivingEvent`: `getEntityLiving`
- from `net.minecraftforge.event.entity.EntityEvent`: `getEntity`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderSpecificHandEvent

*class* `net.minecraftforge.client.event.RenderSpecificHandEvent`

This event is fired on the MinecraftForge.EVENT_BUS
 whenever a hand is rendered in first person.
 Canceling the event causes the hand to not render.
 TODO This may get merged in 11 with RenderHandEvent to make a generic hand rendering

### Methods
- `public EnumHand getHand()`
- `public float getPartialTicks()`
- `public float getInterpolatedPitch()`
  - returns: The interpolated pitch of the player entity
- `public float getSwingProgress()`
  - returns: The swing progress of the hand being rendered
- `public float getEquipProgress()`
  - returns: The progress of the equip animation. 1.0 is fully equipped.
- `public ItemStack getItemStack()`
  - returns: The ItemStack to be rendered, or null.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderTooltipEvent

*class* `net.minecraftforge.client.event.RenderTooltipEvent`

A set of events which are fired at various points during tooltip rendering.

 Can be used to change the rendering parameters, draw something extra, etc.

 Do not use this event directly, use one of the subclasses:

 RenderTooltipEvent.Pre
 RenderTooltipEvent.PostBackground
 RenderTooltipEvent.PostText

### Fields
- `protected final ItemStack stack`
- `protected final java.util.List<java.lang.String> lines`
- `protected int x`
- `protected int y`
- `protected FontRenderer fr`

### Methods
- `public ItemStack getStack()`
  - returns: The stack which the tooltip is being rendered for. As tooltips can be drawn without itemstacks, this stack may be empty.
- `public java.util.List<java.lang.String> getLines()`
  The lines to be drawn. May change between RenderTooltipEvent.Pre and RenderTooltipEvent.Post.
  - returns: An unmodifiable list of strings. Use ItemTooltipEvent to modify tooltip text.
- `public int getX()`
  - returns: The X position of the tooltip box. By default, the mouse X position.
- `public int getY()`
  - returns: The Y position of the tooltip box. By default, the mouse Y position.
- `public FontRenderer getFontRenderer()`
  - returns: The FontRenderer instance the current render is using.

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderTooltipEvent.Color

*class* `net.minecraftforge.client.event.RenderTooltipEvent.Color`

This event is fired when the colours for the tooltip background are determined.

Enclosing class: RenderTooltipEvent

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `fr`, `lines`, `stack`, `x`, `y`

### Methods
- `public int getBackground()`
- `public void setBackground(int background)`
- `public int getBorderStart()`
- `public void setBorderStart(int borderStart)`
- `public int getBorderEnd()`
- `public void setBorderEnd(int borderEnd)`
- `public int getOriginalBackground()`
- `public int getOriginalBorderStart()`
- `public int getOriginalBorderEnd()`

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getFontRenderer`, `getLines`, `getStack`, `getX`, `getY`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderTooltipEvent.Post

*class* `net.minecraftforge.client.event.RenderTooltipEvent.Post`

Events inheriting from this class are fired at different stages during the tooltip rendering.

 Do not use this event directly, use one of its subclasses:

 RenderTooltipEvent.PostBackground
 RenderTooltipEvent.PostText

Enclosing class: RenderTooltipEvent

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `fr`, `lines`, `stack`, `x`, `y`

### Methods
- `public int getWidth()`
  - returns: The width of the tooltip box. This is the width of the inner box, not including the border.
- `public int getHeight()`
  - returns: The height of the tooltip box. This is the height of the inner box, not including the border.

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getFontRenderer`, `getLines`, `getStack`, `getX`, `getY`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderTooltipEvent.PostBackground

*class* `net.minecraftforge.client.event.RenderTooltipEvent.PostBackground`

This event is fired directly after the tooltip background is drawn, but before any text is drawn.

Enclosing class: RenderTooltipEvent

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `fr`, `lines`, `stack`, `x`, `y`

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent.Post`: `getHeight`, `getWidth`
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getFontRenderer`, `getLines`, `getStack`, `getX`, `getY`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderTooltipEvent.PostText

*class* `net.minecraftforge.client.event.RenderTooltipEvent.PostText`

This event is fired directly after the tooltip text is drawn, but before the GL state is reset.

Enclosing class: RenderTooltipEvent

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `fr`, `lines`, `stack`, `x`, `y`

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent.Post`: `getHeight`, `getWidth`
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getFontRenderer`, `getLines`, `getStack`, `getX`, `getY`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderTooltipEvent.Pre

*class* `net.minecraftforge.client.event.RenderTooltipEvent.Pre`

This event is fired before any tooltip calculations are done. It provides setters for all aspects of the tooltip, so the final render can be modified.

 This event is Cancelable.

Enclosing class: RenderTooltipEvent

### Inherited fields
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `fr`, `lines`, `stack`, `x`, `y`

### Methods
- `public int getScreenWidth()`
- `public void setScreenWidth(int screenWidth)`
- `public int getScreenHeight()`
- `public void setScreenHeight(int screenHeight)`
- `public int getMaxWidth()`
  - returns: The max width the tooltip can be. Defaults to -1 (unlimited).
- `public void setMaxWidth(int maxWidth)`
  Sets the max width of the tooltip. Use -1 for unlimited.
- `public void setFontRenderer(FontRenderer fr)`
  Sets the FontRenderer to be used to render text.
- `public void setX(int x)`
  Set the X origin of the tooltip.
- `public void setY(int y)`
  Set the Y origin of the tooltip.

### Inherited methods
- from `net.minecraftforge.client.event.RenderTooltipEvent`: `getFontRenderer`, `getLines`, `getStack`, `getX`, `getY`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## RenderWorldLastEvent

*class* `net.minecraftforge.client.event.RenderWorldLastEvent`

### Methods
- `public RenderGlobal getContext()`
- `public float getPartialTicks()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ScreenshotEvent

*class* `net.minecraftforge.client.event.ScreenshotEvent`

This event is fired before and after a screenshot is taken
 This event is fired on the MinecraftForge.EVENT_BUS
 This event is Cancelable

 screenshotFile contains the file the screenshot will be/was saved to
 image contains the BufferedImage that will be saved
 resultMessage contains the ITextComponent to be returned. If null, the default vanilla message will be used instead

### Fields
- `public static final ITextComponent DEFAULT_CANCEL_REASON`

### Methods
- `public java.awt.image.BufferedImage getImage()`
- `public java.io.File getScreenshotFile()`
- `public void setScreenshotFile(java.io.File screenshotFile)`
- `public ITextComponent getResultMessage()`
- `public void setResultMessage(ITextComponent resultMessage)`
- `public ITextComponent getCancelMessage()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TextureStitchEvent

*class* `net.minecraftforge.client.event.TextureStitchEvent`

### Methods
- `public TextureMap getMap()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TextureStitchEvent.Post

*class* `net.minecraftforge.client.event.TextureStitchEvent.Post`

This event is fired once the texture map has loaded all textures and
 stitched them together. All Icons should have there locations defined
 by the time this is fired.

Enclosing class: TextureStitchEvent

### Inherited methods
- from `net.minecraftforge.client.event.TextureStitchEvent`: `getMap`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TextureStitchEvent.Pre

*class* `net.minecraftforge.client.event.TextureStitchEvent.Pre`

Fired when the TextureMap is told to refresh it's stitched texture.
 Called after the Stitched list is cleared, but before any blocks or items
 add themselves to the list.

Enclosing class: TextureStitchEvent

### Inherited methods
- from `net.minecraftforge.client.event.TextureStitchEvent`: `getMap`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
