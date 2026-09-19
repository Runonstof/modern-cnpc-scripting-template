# net.minecraft.client.settings

- [CreativeSettings](#creativesettings)
- [GameSettings](#gamesettings)
- [GameSettings.Options](#gamesettings.options)
- [HotbarSnapshot](#hotbarsnapshot)
- [KeyBinding](#keybinding)
## CreativeSettings

*class* `net.minecraft.client.settings.CreativeSettings`

### Fields
- `protected Minecraft minecraft`

### Methods
- `public void read()`
- `public void write()`
- `public HotbarSnapshot getHotbarSnapshot(int p_192563_1_)`

## GameSettings

*class* `net.minecraft.client.settings.GameSettings`

### Fields
- `public static final Splitter COLON_SPLITTER`
- `public static final java.lang.String[] NARRATOR_MODES`
- `public float mouseSensitivity`
- `public boolean invertMouse`
- `public int renderDistanceChunks`
- `public boolean viewBobbing`
- `public boolean anaglyph`
- `public boolean fboEnable`
- `public int limitFramerate`
- `public int clouds`
- `public boolean fancyGraphics`
- `public int ambientOcclusion`
- `public java.util.List<java.lang.String> resourcePacks`
- `public java.util.List<java.lang.String> incompatibleResourcePacks`
- `public EntityPlayer.EnumChatVisibility chatVisibility`
- `public boolean chatColours`
- `public boolean chatLinks`
- `public boolean chatLinksPrompt`
- `public float chatOpacity`
- `public boolean snooperEnabled`
- `public boolean fullScreen`
- `public boolean enableVsync`
- `public boolean useVbo`
- `public boolean reducedDebugInfo`
- `public boolean hideServerAddress`
- `public boolean advancedItemTooltips`
- `public boolean pauseOnLostFocus`
- `public boolean touchscreen`
- `public EnumHandSide mainHand`
- `public int overrideWidth`
- `public int overrideHeight`
- `public boolean heldItemTooltips`
- `public float chatScale`
- `public float chatWidth`
- `public float chatHeightUnfocused`
- `public float chatHeightFocused`
- `public int mipmapLevels`
- `public boolean useNativeTransport`
- `public boolean entityShadows`
- `public int attackIndicator`
- `public boolean enableWeakAttacks`
- `public boolean showSubtitles`
- `public boolean realmsNotifications`
- `public boolean autoJump`
- `public TutorialSteps tutorialStep`
- `public KeyBinding keyBindForward`
- `public KeyBinding keyBindLeft`
- `public KeyBinding keyBindBack`
- `public KeyBinding keyBindRight`
- `public KeyBinding keyBindJump`
- `public KeyBinding keyBindSneak`
- `public KeyBinding keyBindSprint`
- `public KeyBinding keyBindInventory`
- `public KeyBinding keyBindSwapHands`
- `public KeyBinding keyBindDrop`
- `public KeyBinding keyBindUseItem`
- `public KeyBinding keyBindAttack`
- `public KeyBinding keyBindPickBlock`
- `public KeyBinding keyBindChat`
- `public KeyBinding keyBindPlayerList`
- `public KeyBinding keyBindCommand`
- `public KeyBinding keyBindScreenshot`
- `public KeyBinding keyBindTogglePerspective`
- `public KeyBinding keyBindSmoothCamera`
- `public KeyBinding keyBindFullscreen`
- `public KeyBinding keyBindSpectatorOutlines`
- `public KeyBinding keyBindAdvancements`
- `public KeyBinding[] keyBindsHotbar`
- `public KeyBinding keyBindSaveToolbar`
- `public KeyBinding keyBindLoadToolbar`
- `public KeyBinding[] keyBindings`
- `protected Minecraft mc`
- `public EnumDifficulty difficulty`
- `public boolean hideGUI`
- `public int thirdPersonView`
- `public boolean showDebugInfo`
- `public boolean showDebugProfilerChart`
- `public boolean showLagometer`
- `public java.lang.String lastServer`
- `public boolean smoothCamera`
- `public boolean debugCamEnable`
- `public float fovSetting`
- `public float gammaSetting`
- `public float saturation`
- `public int guiScale`
- `public int particleSetting`
- `public int narrator`
- `public java.lang.String language`
- `public boolean forceUnicodeFont`

### Methods
- `public static java.lang.String getKeyDisplayString(int key)`
- `public static boolean isKeyDown(KeyBinding key)`
- `public void setOptionKeyBinding(KeyBinding key,  int keyCode)`
- `public void setOptionFloatValue(GameSettings.Options settingsOption,  float value)`
- `public void setOptionValue(GameSettings.Options settingsOption,  int value)`
- `public float getOptionFloatValue(GameSettings.Options settingOption)`
- `public boolean getOptionOrdinalValue(GameSettings.Options settingOption)`
- `public java.lang.String getKeyBinding(GameSettings.Options settingOption)`
- `public void loadOptions()`
- `public void saveOptions()`
- `public float getSoundLevel(SoundCategory category)`
- `public void setSoundLevel(SoundCategory category,  float volume)`
- `public void sendSettingsToServer()`
- `public java.util.Set<EnumPlayerModelParts> getModelParts()`
- `public void setModelPartEnabled(EnumPlayerModelParts modelPart,  boolean enable)`
- `public void switchModelPartEnabled(EnumPlayerModelParts modelPart)`
- `public int shouldRenderClouds()`
- `public boolean isUsingNativeTransport()`
- `public void onGuiClosed()`

## GameSettings.Options

*enum* `net.minecraft.client.settings.GameSettings.Options`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<GameSettings.Options>

Enclosing class: GameSettings

### Fields
- `public static final GameSettings.Options INVERT_MOUSE`
- `public static final GameSettings.Options SENSITIVITY`
- `public static final GameSettings.Options FOV`
- `public static final GameSettings.Options GAMMA`
- `public static final GameSettings.Options SATURATION`
- `public static final GameSettings.Options RENDER_DISTANCE`
- `public static final GameSettings.Options VIEW_BOBBING`
- `public static final GameSettings.Options ANAGLYPH`
- `public static final GameSettings.Options FRAMERATE_LIMIT`
- `public static final GameSettings.Options FBO_ENABLE`
- `public static final GameSettings.Options RENDER_CLOUDS`
- `public static final GameSettings.Options GRAPHICS`
- `public static final GameSettings.Options AMBIENT_OCCLUSION`
- `public static final GameSettings.Options GUI_SCALE`
- `public static final GameSettings.Options PARTICLES`
- `public static final GameSettings.Options CHAT_VISIBILITY`
- `public static final GameSettings.Options CHAT_COLOR`
- `public static final GameSettings.Options CHAT_LINKS`
- `public static final GameSettings.Options CHAT_OPACITY`
- `public static final GameSettings.Options CHAT_LINKS_PROMPT`
- `public static final GameSettings.Options SNOOPER_ENABLED`
- `public static final GameSettings.Options USE_FULLSCREEN`
- `public static final GameSettings.Options ENABLE_VSYNC`
- `public static final GameSettings.Options USE_VBO`
- `public static final GameSettings.Options TOUCHSCREEN`
- `public static final GameSettings.Options CHAT_SCALE`
- `public static final GameSettings.Options CHAT_WIDTH`
- `public static final GameSettings.Options CHAT_HEIGHT_FOCUSED`
- `public static final GameSettings.Options CHAT_HEIGHT_UNFOCUSED`
- `public static final GameSettings.Options MIPMAP_LEVELS`
- `public static final GameSettings.Options FORCE_UNICODE_FONT`
- `public static final GameSettings.Options REDUCED_DEBUG_INFO`
- `public static final GameSettings.Options ENTITY_SHADOWS`
- `public static final GameSettings.Options MAIN_HAND`
- `public static final GameSettings.Options ATTACK_INDICATOR`
- `public static final GameSettings.Options ENABLE_WEAK_ATTACKS`
- `public static final GameSettings.Options SHOW_SUBTITLES`
- `public static final GameSettings.Options REALMS_NOTIFICATIONS`
- `public static final GameSettings.Options AUTO_JUMP`
- `public static final GameSettings.Options NARRATOR`

### Methods
- `public static GameSettings.Options[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (GameSettings.Options c : GameSettings.Options.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static GameSettings.Options valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static GameSettings.Options byOrdinal(int ordinal)`
- `public boolean isFloat()`
- `public boolean isBoolean()`
- `public int getOrdinal()`
- `public java.lang.String getTranslation()`
- `public float getValueMin()`
- `public float getValueMax()`
- `public void setValueMax(float value)`
- `public float normalizeValue(float value)`
- `public float denormalizeValue(float value)`
- `public float snapToStepClamp(float value)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## HotbarSnapshot

*class* `net.minecraft.client.settings.HotbarSnapshot`

All Implemented Interfaces: java.io.Serializable, java.lang.Cloneable, java.lang.Iterable<ItemStack>, java.util.Collection<ItemStack>, java.util.List<ItemStack>, java.util.RandomAccess

### Fields
- `public static final int HOTBAR_SIZE`

### Inherited fields
- from `java.util.AbstractList`: `modCount`

### Methods
- `public NBTTagList createTag()`
- `public void fromTag(NBTTagList p_192833_1_)`
- `public boolean isEmpty()`

### Inherited methods
- from `java.util.ArrayList`: `add`, `add`, `addAll`, `addAll`, `clear`, `clone`, `contains`, `ensureCapacity`, `forEach`, `get`, `indexOf`, `iterator`, `lastIndexOf`, `listIterator`, `listIterator`, `remove`, `remove`, `removeAll`, `removeIf`, `removeRange`, `replaceAll`, `retainAll`, `set`, `size`, `sort`, `spliterator`, `subList`, `toArray`, `toArray`, `trimToSize`
- from `java.util.AbstractList`: `equals`, `hashCode`
- from `java.util.AbstractCollection`: `containsAll`, `toString`
- from `java.util.List`: `containsAll`, `equals`, `hashCode`
- from `java.util.Collection`: `parallelStream`, `stream`

## KeyBinding

*class* `net.minecraft.client.settings.KeyBinding`

All Implemented Interfaces: java.lang.Comparable<KeyBinding>

### Methods
- `public static void onTick(int keyCode)`
- `public static void setKeyBindState(int keyCode,  boolean pressed)`
- `public static void updateKeyBindState()`
- `public static void unPressAllKeys()`
- `public static void resetKeyBindingArrayAndHash()`
- `public static java.util.Set<java.lang.String> getKeybinds()`
- `public boolean isKeyDown()`
- `public java.lang.String getKeyCategory()`
- `public boolean isPressed()`
- `public java.lang.String getKeyDescription()`
- `public int getKeyCodeDefault()`
- `public int getKeyCode()`
- `public void setKeyCode(int keyCode)`
- `public int compareTo(KeyBinding p_compareTo_1_)`
- `public boolean isActiveAndMatches(int keyCode)`
  Checks that the key conflict context and modifier are active, and that the keyCode matches this binding.
- `public void setKeyConflictContext(IKeyConflictContext keyConflictContext)`
- `public IKeyConflictContext getKeyConflictContext()`
- `public KeyModifier getKeyModifierDefault()`
- `public KeyModifier getKeyModifier()`
- `public void setKeyModifierAndCode(KeyModifier keyModifier,  int keyCode)`
- `public void setToDefault()`
- `public boolean isSetToDefaultValue()`
- `public boolean conflicts(KeyBinding other)`
  Returns true when the other keyBinding conflicts with this one
- `public boolean hasKeyCodeModifierConflict(KeyBinding other)`
  Returns true when one of the bindings' key codes conflicts with the other's modifier.
- `public java.lang.String getDisplayName()`
- `public static java.util.function.Supplier<java.lang.String> getDisplayString(java.lang.String key)`
  Forge End
