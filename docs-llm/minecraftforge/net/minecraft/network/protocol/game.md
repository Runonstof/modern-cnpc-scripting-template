# net.minecraft.network.protocol.game

- [Class ClientboundBossEventPacket.OperationType](#class-clientboundbosseventpacket.operationtype)
- [Class ClientboundCustomChatCompletionsPacket.Action](#class-clientboundcustomchatcompletionspacket.action)
- [Class ClientboundPlayerInfoUpdatePacket.Action](#class-clientboundplayerinfoupdatepacket.action)
- [Class ClientboundRecipePacket.State](#class-clientboundrecipepacket.state)
- [Class ClientboundSetPlayerTeamPacket.Action](#class-clientboundsetplayerteampacket.action)
- [Class ServerboundClientCommandPacket.Action](#class-serverboundclientcommandpacket.action)
- [Class ServerboundInteractPacket.ActionType](#class-serverboundinteractpacket.actiontype)
- [Class ServerboundPlayerActionPacket.Action](#class-serverboundplayeractionpacket.action)
- [Class ServerboundPlayerCommandPacket.Action](#class-serverboundplayercommandpacket.action)
- [Class ServerboundSeenAdvancementsPacket.Action](#class-serverboundseenadvancementspacket.action)
- [ClientboundAddEntityPacket](#clientboundaddentitypacket)
- [ClientboundAddExperienceOrbPacket](#clientboundaddexperienceorbpacket)
- [ClientboundAnimatePacket](#clientboundanimatepacket)
- [ClientboundAwardStatsPacket](#clientboundawardstatspacket)
- [ClientboundBlockChangedAckPacket](#clientboundblockchangedackpacket)
- [ClientboundBlockDestructionPacket](#clientboundblockdestructionpacket)
- [ClientboundBlockEntityDataPacket](#clientboundblockentitydatapacket)
- [ClientboundBlockEventPacket](#clientboundblockeventpacket)
- [ClientboundBlockUpdatePacket](#clientboundblockupdatepacket)
- [ClientboundBossEventPacket](#clientboundbosseventpacket)
- [ClientboundBossEventPacket.AddOperation](#clientboundbosseventpacket.addoperation)
- [ClientboundBossEventPacket.Handler](#clientboundbosseventpacket.handler)
- [ClientboundBossEventPacket.Operation](#clientboundbosseventpacket.operation)
- [ClientboundBossEventPacket.UpdateNameOperation](#clientboundbosseventpacket.updatenameoperation)
- [ClientboundBossEventPacket.UpdateProgressOperation](#clientboundbosseventpacket.updateprogressoperation)
- [ClientboundBossEventPacket.UpdatePropertiesOperation](#clientboundbosseventpacket.updatepropertiesoperation)
- [ClientboundBossEventPacket.UpdateStyleOperation](#clientboundbosseventpacket.updatestyleoperation)
- [ClientboundBundlePacket](#clientboundbundlepacket)
- [ClientboundChangeDifficultyPacket](#clientboundchangedifficultypacket)
- [ClientboundChunkBatchFinishedPacket](#clientboundchunkbatchfinishedpacket)
- [ClientboundChunkBatchStartPacket](#clientboundchunkbatchstartpacket)
- [ClientboundChunksBiomesPacket](#clientboundchunksbiomespacket)
- [ClientboundChunksBiomesPacket.ChunkBiomeData](#clientboundchunksbiomespacket.chunkbiomedata)
- [ClientboundClearTitlesPacket](#clientboundcleartitlespacket)
- [ClientboundCommandsPacket](#clientboundcommandspacket)
- [ClientboundCommandsPacket.ArgumentNodeStub](#clientboundcommandspacket.argumentnodestub)
- [ClientboundCommandsPacket.Entry](#clientboundcommandspacket.entry)
- [ClientboundCommandsPacket.LiteralNodeStub](#clientboundcommandspacket.literalnodestub)
- [ClientboundCommandsPacket.NodeResolver](#clientboundcommandspacket.noderesolver)
- [ClientboundCommandsPacket.NodeStub](#clientboundcommandspacket.nodestub)
- [ClientboundCommandSuggestionsPacket](#clientboundcommandsuggestionspacket)
- [ClientboundContainerClosePacket](#clientboundcontainerclosepacket)
- [ClientboundContainerSetContentPacket](#clientboundcontainersetcontentpacket)
- [ClientboundContainerSetDataPacket](#clientboundcontainersetdatapacket)
- [ClientboundContainerSetSlotPacket](#clientboundcontainersetslotpacket)
- [ClientboundCooldownPacket](#clientboundcooldownpacket)
- [ClientboundCustomChatCompletionsPacket](#clientboundcustomchatcompletionspacket)
- [ClientboundDamageEventPacket](#clientbounddamageeventpacket)
- [ClientboundDeleteChatPacket](#clientbounddeletechatpacket)
- [ClientboundDisguisedChatPacket](#clientbounddisguisedchatpacket)
- [ClientboundEntityEventPacket](#clientboundentityeventpacket)
- [ClientboundExplodePacket](#clientboundexplodepacket)
- [ClientboundForgetLevelChunkPacket](#clientboundforgetlevelchunkpacket)
- [ClientboundGameEventPacket](#clientboundgameeventpacket)
- [ClientboundGameEventPacket.Type](#clientboundgameeventpacket.type)
- [ClientboundHorseScreenOpenPacket](#clientboundhorsescreenopenpacket)
- [ClientboundHurtAnimationPacket](#clientboundhurtanimationpacket)
- [ClientboundInitializeBorderPacket](#clientboundinitializeborderpacket)
- [ClientboundLevelChunkPacketData](#clientboundlevelchunkpacketdata)
- [ClientboundLevelChunkPacketData.BlockEntityInfo](#clientboundlevelchunkpacketdata.blockentityinfo)
- [ClientboundLevelChunkPacketData.BlockEntityTagOutput](#clientboundlevelchunkpacketdata.blockentitytagoutput)
- [ClientboundLevelChunkWithLightPacket](#clientboundlevelchunkwithlightpacket)
- [ClientboundLevelEventPacket](#clientboundleveleventpacket)
- [ClientboundLevelParticlesPacket](#clientboundlevelparticlespacket)
- [ClientboundLightUpdatePacket](#clientboundlightupdatepacket)
- [ClientboundLightUpdatePacketData](#clientboundlightupdatepacketdata)
- [ClientboundLoginPacket](#clientboundloginpacket)
- [ClientboundMapItemDataPacket](#clientboundmapitemdatapacket)
- [ClientboundMerchantOffersPacket](#clientboundmerchantofferspacket)
- [ClientboundMoveEntityPacket](#clientboundmoveentitypacket)
- [ClientboundMoveEntityPacket.Pos](#clientboundmoveentitypacket.pos)
- [ClientboundMoveEntityPacket.PosRot](#clientboundmoveentitypacket.posrot)
- [ClientboundMoveEntityPacket.Rot](#clientboundmoveentitypacket.rot)
- [ClientboundMoveVehiclePacket](#clientboundmovevehiclepacket)
- [ClientboundOpenBookPacket](#clientboundopenbookpacket)
- [ClientboundOpenScreenPacket](#clientboundopenscreenpacket)
- [ClientboundOpenSignEditorPacket](#clientboundopensigneditorpacket)
- [ClientboundPlaceGhostRecipePacket](#clientboundplaceghostrecipepacket)
- [ClientboundPlayerAbilitiesPacket](#clientboundplayerabilitiespacket)
- [ClientboundPlayerChatPacket](#clientboundplayerchatpacket)
- [ClientboundPlayerCombatEndPacket](#clientboundplayercombatendpacket)
- [ClientboundPlayerCombatEnterPacket](#clientboundplayercombatenterpacket)
- [ClientboundPlayerCombatKillPacket](#clientboundplayercombatkillpacket)
- [ClientboundPlayerInfoRemovePacket](#clientboundplayerinforemovepacket)
- [ClientboundPlayerInfoUpdatePacket](#clientboundplayerinfoupdatepacket)
- [ClientboundPlayerInfoUpdatePacket.Action.Reader](#clientboundplayerinfoupdatepacket.action.reader)
- [ClientboundPlayerInfoUpdatePacket.Action.Writer](#clientboundplayerinfoupdatepacket.action.writer)
- [ClientboundPlayerInfoUpdatePacket.Entry](#clientboundplayerinfoupdatepacket.entry)
- [ClientboundPlayerInfoUpdatePacket.EntryBuilder](#clientboundplayerinfoupdatepacket.entrybuilder)
- [ClientboundPlayerLookAtPacket](#clientboundplayerlookatpacket)
- [ClientboundPlayerPositionPacket](#clientboundplayerpositionpacket)
- [ClientboundRecipePacket](#clientboundrecipepacket)
- [ClientboundRemoveEntitiesPacket](#clientboundremoveentitiespacket)
- [ClientboundRemoveMobEffectPacket](#clientboundremovemobeffectpacket)
- [ClientboundRespawnPacket](#clientboundrespawnpacket)
- [ClientboundRotateHeadPacket](#clientboundrotateheadpacket)
- [ClientboundSectionBlocksUpdatePacket](#clientboundsectionblocksupdatepacket)
- [ClientboundSelectAdvancementsTabPacket](#clientboundselectadvancementstabpacket)
- [ClientboundServerDataPacket](#clientboundserverdatapacket)
- [ClientboundSetActionBarTextPacket](#clientboundsetactionbartextpacket)
- [ClientboundSetBorderCenterPacket](#clientboundsetbordercenterpacket)
- [ClientboundSetBorderLerpSizePacket](#clientboundsetborderlerpsizepacket)
- [ClientboundSetBorderSizePacket](#clientboundsetbordersizepacket)
- [ClientboundSetBorderWarningDelayPacket](#clientboundsetborderwarningdelaypacket)
- [ClientboundSetBorderWarningDistancePacket](#clientboundsetborderwarningdistancepacket)
- [ClientboundSetCameraPacket](#clientboundsetcamerapacket)
- [ClientboundSetCarriedItemPacket](#clientboundsetcarrieditempacket)
- [ClientboundSetChunkCacheCenterPacket](#clientboundsetchunkcachecenterpacket)
- [ClientboundSetChunkCacheRadiusPacket](#clientboundsetchunkcacheradiuspacket)
- [ClientboundSetDefaultSpawnPositionPacket](#clientboundsetdefaultspawnpositionpacket)
- [ClientboundSetDisplayObjectivePacket](#clientboundsetdisplayobjectivepacket)
- [ClientboundSetEntityDataPacket](#clientboundsetentitydatapacket)
- [ClientboundSetEntityLinkPacket](#clientboundsetentitylinkpacket)
- [ClientboundSetEntityMotionPacket](#clientboundsetentitymotionpacket)
- [ClientboundSetEquipmentPacket](#clientboundsetequipmentpacket)
- [ClientboundSetExperiencePacket](#clientboundsetexperiencepacket)
- [ClientboundSetHealthPacket](#clientboundsethealthpacket)
- [ClientboundSetObjectivePacket](#clientboundsetobjectivepacket)
- [ClientboundSetPassengersPacket](#clientboundsetpassengerspacket)
- [ClientboundSetPlayerTeamPacket](#clientboundsetplayerteampacket)
- [ClientboundSetPlayerTeamPacket.Parameters](#clientboundsetplayerteampacket.parameters)
- [ClientboundSetScorePacket](#clientboundsetscorepacket)
- [ClientboundSetSimulationDistancePacket](#clientboundsetsimulationdistancepacket)
- [ClientboundSetSubtitleTextPacket](#clientboundsetsubtitletextpacket)
- [ClientboundSetTimePacket](#clientboundsettimepacket)
- [ClientboundSetTitlesAnimationPacket](#clientboundsettitlesanimationpacket)
- [ClientboundSetTitleTextPacket](#clientboundsettitletextpacket)
- [ClientboundSoundEntityPacket](#clientboundsoundentitypacket)
- [ClientboundSoundPacket](#clientboundsoundpacket)
- [ClientboundStartConfigurationPacket](#clientboundstartconfigurationpacket)
- [ClientboundStopSoundPacket](#clientboundstopsoundpacket)
- [ClientboundSystemChatPacket](#clientboundsystemchatpacket)
- [ClientboundTabListPacket](#clientboundtablistpacket)
- [ClientboundTagQueryPacket](#clientboundtagquerypacket)
- [ClientboundTakeItemEntityPacket](#clientboundtakeitementitypacket)
- [ClientboundTeleportEntityPacket](#clientboundteleportentitypacket)
- [ClientboundUpdateAdvancementsPacket](#clientboundupdateadvancementspacket)
- [ClientboundUpdateAttributesPacket](#clientboundupdateattributespacket)
- [ClientboundUpdateAttributesPacket.AttributeSnapshot](#clientboundupdateattributespacket.attributesnapshot)
- [ClientboundUpdateMobEffectPacket](#clientboundupdatemobeffectpacket)
- [ClientboundUpdateRecipesPacket](#clientboundupdaterecipespacket)
- [ClientGamePacketListener](#clientgamepacketlistener)
- [CommonPlayerSpawnInfo](#commonplayerspawninfo)
- [DebugEntityNameGenerator](#debugentitynamegenerator)
- [DebugPackets](#debugpackets)
- [ServerboundAcceptTeleportationPacket](#serverboundacceptteleportationpacket)
- [ServerboundBlockEntityTagQuery](#serverboundblockentitytagquery)
- [ServerboundChangeDifficultyPacket](#serverboundchangedifficultypacket)
- [ServerboundChatAckPacket](#serverboundchatackpacket)
- [ServerboundChatCommandPacket](#serverboundchatcommandpacket)
- [ServerboundChatPacket](#serverboundchatpacket)
- [ServerboundChatSessionUpdatePacket](#serverboundchatsessionupdatepacket)
- [ServerboundChunkBatchReceivedPacket](#serverboundchunkbatchreceivedpacket)
- [ServerboundClientCommandPacket](#serverboundclientcommandpacket)
- [ServerboundCommandSuggestionPacket](#serverboundcommandsuggestionpacket)
- [ServerboundConfigurationAcknowledgedPacket](#serverboundconfigurationacknowledgedpacket)
- [ServerboundContainerButtonClickPacket](#serverboundcontainerbuttonclickpacket)
- [ServerboundContainerClickPacket](#serverboundcontainerclickpacket)
- [ServerboundContainerClosePacket](#serverboundcontainerclosepacket)
- [ServerboundEditBookPacket](#serverboundeditbookpacket)
- [ServerboundEntityTagQuery](#serverboundentitytagquery)
- [ServerboundInteractPacket](#serverboundinteractpacket)
- [ServerboundInteractPacket.Action](#serverboundinteractpacket.action)
- [ServerboundInteractPacket.Handler](#serverboundinteractpacket.handler)
- [ServerboundInteractPacket.InteractionAction](#serverboundinteractpacket.interactionaction)
- [ServerboundInteractPacket.InteractionAtLocationAction](#serverboundinteractpacket.interactionatlocationaction)
- [ServerboundJigsawGeneratePacket](#serverboundjigsawgeneratepacket)
- [ServerboundLockDifficultyPacket](#serverboundlockdifficultypacket)
- [ServerboundMovePlayerPacket](#serverboundmoveplayerpacket)
- [ServerboundMovePlayerPacket.Pos](#serverboundmoveplayerpacket.pos)
- [ServerboundMovePlayerPacket.PosRot](#serverboundmoveplayerpacket.posrot)
- [ServerboundMovePlayerPacket.Rot](#serverboundmoveplayerpacket.rot)
- [ServerboundMovePlayerPacket.StatusOnly](#serverboundmoveplayerpacket.statusonly)
- [ServerboundMoveVehiclePacket](#serverboundmovevehiclepacket)
- [ServerboundPaddleBoatPacket](#serverboundpaddleboatpacket)
- [ServerboundPickItemPacket](#serverboundpickitempacket)
- [ServerboundPlaceRecipePacket](#serverboundplacerecipepacket)
- [ServerboundPlayerAbilitiesPacket](#serverboundplayerabilitiespacket)
- [ServerboundPlayerActionPacket](#serverboundplayeractionpacket)
- [ServerboundPlayerCommandPacket](#serverboundplayercommandpacket)
- [ServerboundPlayerInputPacket](#serverboundplayerinputpacket)
- [ServerboundRecipeBookChangeSettingsPacket](#serverboundrecipebookchangesettingspacket)
- [ServerboundRecipeBookSeenRecipePacket](#serverboundrecipebookseenrecipepacket)
- [ServerboundRenameItemPacket](#serverboundrenameitempacket)
- [ServerboundSeenAdvancementsPacket](#serverboundseenadvancementspacket)
- [ServerboundSelectTradePacket](#serverboundselecttradepacket)
- [ServerboundSetBeaconPacket](#serverboundsetbeaconpacket)
- [ServerboundSetCarriedItemPacket](#serverboundsetcarrieditempacket)
- [ServerboundSetCommandBlockPacket](#serverboundsetcommandblockpacket)
- [ServerboundSetCommandMinecartPacket](#serverboundsetcommandminecartpacket)
- [ServerboundSetCreativeModeSlotPacket](#serverboundsetcreativemodeslotpacket)
- [ServerboundSetJigsawBlockPacket](#serverboundsetjigsawblockpacket)
- [ServerboundSetStructureBlockPacket](#serverboundsetstructureblockpacket)
- [ServerboundSignUpdatePacket](#serverboundsignupdatepacket)
- [ServerboundSwingPacket](#serverboundswingpacket)
- [ServerboundTeleportToEntityPacket](#serverboundteleporttoentitypacket)
- [ServerboundUseItemOnPacket](#serverbounduseitemonpacket)
- [ServerboundUseItemPacket](#serverbounduseitempacket)
- [ServerGamePacketListener](#servergamepacketlistener)
- [ServerPacketListener](#serverpacketlistener)
- [ServerPingPacketListener](#serverpingpacketlistener)
- [VecDeltaCodec](#vecdeltacodec)
## Class ClientboundBossEventPacket.OperationType

*enum* `net.minecraft.network.protocol.game.Class ClientboundBossEventPacket.OperationType`

Enclosing class: ClientboundBossEventPacket

### Fields
- `final Function<FriendlyByteBuf,ClientboundBossEventPacket.Operation> reader`

### Methods
- `public static ClientboundBossEventPacket.OperationType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientboundBossEventPacket.OperationType valueOf(String name)`
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

## Class ClientboundCustomChatCompletionsPacket.Action

*enum* `net.minecraft.network.protocol.game.Class ClientboundCustomChatCompletionsPacket.Action`

Enclosing class: ClientboundCustomChatCompletionsPacket

### Methods
- `public static ClientboundCustomChatCompletionsPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientboundCustomChatCompletionsPacket.Action valueOf(String name)`
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

## Class ClientboundPlayerInfoUpdatePacket.Action

*enum* `net.minecraft.network.protocol.game.Class ClientboundPlayerInfoUpdatePacket.Action`

Enclosing class: ClientboundPlayerInfoUpdatePacket

### Fields
- `final ClientboundPlayerInfoUpdatePacket.Action.Reader reader`
- `final ClientboundPlayerInfoUpdatePacket.Action.Writer writer`

### Methods
- `public static ClientboundPlayerInfoUpdatePacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientboundPlayerInfoUpdatePacket.Action valueOf(String name)`
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

## Class ClientboundRecipePacket.State

*enum* `net.minecraft.network.protocol.game.Class ClientboundRecipePacket.State`

Enclosing class: ClientboundRecipePacket

### Methods
- `public static ClientboundRecipePacket.State[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientboundRecipePacket.State valueOf(String name)`
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

## Class ClientboundSetPlayerTeamPacket.Action

*enum* `net.minecraft.network.protocol.game.Class ClientboundSetPlayerTeamPacket.Action`

Enclosing class: ClientboundSetPlayerTeamPacket

### Methods
- `public static ClientboundSetPlayerTeamPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ClientboundSetPlayerTeamPacket.Action valueOf(String name)`
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

## Class ServerboundClientCommandPacket.Action

*enum* `net.minecraft.network.protocol.game.Class ServerboundClientCommandPacket.Action`

Enclosing class: ServerboundClientCommandPacket

### Methods
- `public static ServerboundClientCommandPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerboundClientCommandPacket.Action valueOf(String name)`
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

## Class ServerboundInteractPacket.ActionType

*enum* `net.minecraft.network.protocol.game.Class ServerboundInteractPacket.ActionType`

Enclosing class: ServerboundInteractPacket

### Fields
- `final Function<FriendlyByteBuf,ServerboundInteractPacket.Action> reader`

### Methods
- `public static ServerboundInteractPacket.ActionType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerboundInteractPacket.ActionType valueOf(String name)`
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

## Class ServerboundPlayerActionPacket.Action

*enum* `net.minecraft.network.protocol.game.Class ServerboundPlayerActionPacket.Action`

Enclosing class: ServerboundPlayerActionPacket

### Methods
- `public static ServerboundPlayerActionPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerboundPlayerActionPacket.Action valueOf(String name)`
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

## Class ServerboundPlayerCommandPacket.Action

*enum* `net.minecraft.network.protocol.game.Class ServerboundPlayerCommandPacket.Action`

Enclosing class: ServerboundPlayerCommandPacket

### Methods
- `public static ServerboundPlayerCommandPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerboundPlayerCommandPacket.Action valueOf(String name)`
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

## Class ServerboundSeenAdvancementsPacket.Action

*enum* `net.minecraft.network.protocol.game.Class ServerboundSeenAdvancementsPacket.Action`

Enclosing class: ServerboundSeenAdvancementsPacket

### Methods
- `public static ServerboundSeenAdvancementsPacket.Action[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static ServerboundSeenAdvancementsPacket.Action valueOf(String name)`
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

## ClientboundAddEntityPacket

*class* `net.minecraft.network.protocol.game.ClientboundAddEntityPacket`

### Fields
- `private static final double MAGICAL_QUANTIZATION` (= 8000.0)
- `private static final double LIMIT` (= 3.9)
- `private final int id`
- `private final UUID uuid`
- `private final EntityType<?> type`
- `private final double x`
- `private final double y`
- `private final double z`
- `private final int xa`
- `private final int ya`
- `private final int za`
- `private final byte xRot`
- `private final byte yRot`
- `private final byte yHeadRot`
- `private final int data`

### Methods
- `public void write(FriendlyByteBuf p_131498_)`
- `public void handle(ClientGamePacketListener p_131495_)`
- `public int getId()`
- `public UUID getUUID()`
- `public EntityType<?> getType()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public double getXa()`
- `public double getYa()`
- `public double getZa()`
- `public float getXRot()`
- `public float getYRot()`
- `public float getYHeadRot()`
- `public int getData()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundAddExperienceOrbPacket

*class* `net.minecraft.network.protocol.game.ClientboundAddExperienceOrbPacket`

### Fields
- `private final int id`
- `private final double x`
- `private final double y`
- `private final double z`
- `private final int value`

### Methods
- `public void write(FriendlyByteBuf p_131526_)`
- `public void handle(ClientGamePacketListener p_131523_)`
- `public int getId()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public int getValue()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundAnimatePacket

*class* `net.minecraft.network.protocol.game.ClientboundAnimatePacket`

### Fields
- `public static final int SWING_MAIN_HAND` (= 0)
- `public static final int WAKE_UP` (= 2)
- `public static final int SWING_OFF_HAND` (= 3)
- `public static final int CRITICAL_HIT` (= 4)
- `public static final int MAGIC_CRITICAL_HIT` (= 5)
- `private final int id`
- `private final int action`

### Methods
- `public void write(FriendlyByteBuf p_131626_)`
- `public void handle(ClientGamePacketListener p_131623_)`
- `public int getId()`
- `public int getAction()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundAwardStatsPacket

*class* `net.minecraft.network.protocol.game.ClientboundAwardStatsPacket`

### Fields
- `private final it.unimi.dsi.fastutil.objects.Object2IntMap<Stat<?>> stats`

### Methods
- `private static <T> Stat<T> readStatCap(FriendlyByteBuf p_237573_,  StatType<T> p_237574_)`
- `public void handle(ClientGamePacketListener p_131642_)`
- `public void write(FriendlyByteBuf p_131645_)`
- `private static <T> void writeStatCap(FriendlyByteBuf p_237570_,  Stat<T> p_237571_)`
- `public Map<Stat<?>,Integer> getStats()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBlockChangedAckPacket

*record* `net.minecraft.network.protocol.game.ClientboundBlockChangedAckPacket`

### Fields
- `private final int sequence`
  The field for the sequence record component.

### Methods
- `public void write(FriendlyByteBuf p_237584_)`
- `public void handle(ClientGamePacketListener p_237588_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int sequence()`
  Returns the value of the sequence record component.
  - returns: the value of the sequence record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBlockDestructionPacket

*class* `net.minecraft.network.protocol.game.ClientboundBlockDestructionPacket`

### Fields
- `private final int id`
- `private final BlockPos pos`
- `private final int progress`

### Methods
- `public void write(FriendlyByteBuf p_131687_)`
- `public void handle(ClientGamePacketListener p_131684_)`
- `public int getId()`
- `public BlockPos getPos()`
- `public int getProgress()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBlockEntityDataPacket

*class* `net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket`

### Fields
- `private final BlockPos pos`
- `private final BlockEntityType<?> type`
- `@Nullable private final CompoundTag tag`

### Methods
- `public static ClientboundBlockEntityDataPacket create(BlockEntity p_195643_,  Function<BlockEntity,CompoundTag> p_195644_)`
- `public static ClientboundBlockEntityDataPacket create(BlockEntity p_195641_)`
- `public void write(FriendlyByteBuf p_131706_)`
- `public void handle(ClientGamePacketListener p_131703_)`
- `public BlockPos getPos()`
- `public BlockEntityType<?> getType()`
- `@Nullable public CompoundTag getTag()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBlockEventPacket

*class* `net.minecraft.network.protocol.game.ClientboundBlockEventPacket`

### Fields
- `private final BlockPos pos`
- `private final int b0`
- `private final int b1`
- `private final Block block`

### Methods
- `public void write(FriendlyByteBuf p_131727_)`
- `public void handle(ClientGamePacketListener p_131724_)`
- `public BlockPos getPos()`
- `public int getB0()`
- `public int getB1()`
- `public Block getBlock()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBlockUpdatePacket

*class* `net.minecraft.network.protocol.game.ClientboundBlockUpdatePacket`

### Fields
- `private final BlockPos pos`
- `private final BlockState blockState`

### Methods
- `public void write(FriendlyByteBuf p_131748_)`
- `public void handle(ClientGamePacketListener p_131745_)`
- `public BlockState getBlockState()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBossEventPacket

*class* `net.minecraft.network.protocol.game.ClientboundBossEventPacket`

### Fields
- `private static final int FLAG_DARKEN` (= 1)
- `private static final int FLAG_MUSIC` (= 2)
- `private static final int FLAG_FOG` (= 4)
- `private final UUID id`
- `private final ClientboundBossEventPacket.Operation operation`
- `static final ClientboundBossEventPacket.Operation REMOVE_OPERATION`

### Methods
- `public static ClientboundBossEventPacket createAddPacket(BossEvent p_178640_)`
- `public static ClientboundBossEventPacket createRemovePacket(UUID p_178642_)`
- `public static ClientboundBossEventPacket createUpdateProgressPacket(BossEvent p_178650_)`
- `public static ClientboundBossEventPacket createUpdateNamePacket(BossEvent p_178652_)`
- `public static ClientboundBossEventPacket createUpdateStylePacket(BossEvent p_178654_)`
- `public static ClientboundBossEventPacket createUpdatePropertiesPacket(BossEvent p_178656_)`
- `public void write(FriendlyByteBuf p_131773_)`
- `static int encodeProperties(boolean p_178646_,  boolean p_178647_,  boolean p_178648_)`
- `public void handle(ClientGamePacketListener p_131770_)`
- `public void dispatch(ClientboundBossEventPacket.Handler p_178644_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundBossEventPacket.AddOperation

*class* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.AddOperation`

Enclosing class: ClientboundBossEventPacket

### Fields
- `private final Component name`
- `private final float progress`
- `private final BossEvent.BossBarColor color`
- `private final BossEvent.BossBarOverlay overlay`
- `private final boolean darkenScreen`
- `private final boolean playMusic`
- `private final boolean createWorldFog`

### Methods
- `public ClientboundBossEventPacket.OperationType getType()`
- `public void dispatch(UUID p_178677_,  ClientboundBossEventPacket.Handler p_178678_)`
- `public void write(FriendlyByteBuf p_178680_)`

## ClientboundBossEventPacket.Handler

*interface* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.Handler`

Enclosing class: ClientboundBossEventPacket

### Methods
- `default void add(UUID p_178689_,  Component p_178690_,  float p_178691_,  BossEvent.BossBarColor p_178692_,  BossEvent.BossBarOverlay p_178693_,  boolean p_178694_,  boolean p_178695_,  boolean p_178696_)`
- `default void remove(UUID p_178681_)`
- `default void updateProgress(UUID p_178682_,  float p_178683_)`
- `default void updateName(UUID p_178687_,  Component p_178688_)`
- `default void updateStyle(UUID p_178684_,  BossEvent.BossBarColor p_178685_,  BossEvent.BossBarOverlay p_178686_)`
- `default void updateProperties(UUID p_178697_,  boolean p_178698_,  boolean p_178699_,  boolean p_178700_)`

## ClientboundBossEventPacket.Operation

*interface* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.Operation`

Enclosing class: ClientboundBossEventPacket

### Methods
- `ClientboundBossEventPacket.OperationType getType()`
- `void dispatch(UUID p_178701_,  ClientboundBossEventPacket.Handler p_178702_)`
- `void write(FriendlyByteBuf p_178703_)`

## ClientboundBossEventPacket.UpdateNameOperation

*class* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.UpdateNameOperation`

Enclosing class: ClientboundBossEventPacket

### Fields
- `private final Component name`

### Methods
- `public ClientboundBossEventPacket.OperationType getType()`
- `public void dispatch(UUID p_178730_,  ClientboundBossEventPacket.Handler p_178731_)`
- `public void write(FriendlyByteBuf p_178733_)`

## ClientboundBossEventPacket.UpdateProgressOperation

*class* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.UpdateProgressOperation`

Enclosing class: ClientboundBossEventPacket

### Fields
- `private final float progress`

### Methods
- `public ClientboundBossEventPacket.OperationType getType()`
- `public void dispatch(UUID p_178741_,  ClientboundBossEventPacket.Handler p_178742_)`
- `public void write(FriendlyByteBuf p_178744_)`

## ClientboundBossEventPacket.UpdatePropertiesOperation

*class* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.UpdatePropertiesOperation`

Enclosing class: ClientboundBossEventPacket

### Fields
- `private final boolean darkenScreen`
- `private final boolean playMusic`
- `private final boolean createWorldFog`

### Methods
- `public ClientboundBossEventPacket.OperationType getType()`
- `public void dispatch(UUID p_178756_,  ClientboundBossEventPacket.Handler p_178757_)`
- `public void write(FriendlyByteBuf p_178759_)`

## ClientboundBossEventPacket.UpdateStyleOperation

*class* `net.minecraft.network.protocol.game.ClientboundBossEventPacket.UpdateStyleOperation`

Enclosing class: ClientboundBossEventPacket

### Fields
- `private final BossEvent.BossBarColor color`
- `private final BossEvent.BossBarOverlay overlay`

### Methods
- `public ClientboundBossEventPacket.OperationType getType()`
- `public void dispatch(UUID p_178769_,  ClientboundBossEventPacket.Handler p_178770_)`
- `public void write(FriendlyByteBuf p_178772_)`

## ClientboundBundlePacket

*class* `net.minecraft.network.protocol.game.ClientboundBundlePacket`

### Methods
- `public void handle(ClientGamePacketListener p_265490_)`

### Inherited methods
- from `net.minecraft.network.protocol.BundlePacket`: `subPackets`, `write`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundChangeDifficultyPacket

*class* `net.minecraft.network.protocol.game.ClientboundChangeDifficultyPacket`

### Fields
- `private final Difficulty difficulty`
- `private final boolean locked`

### Methods
- `public void write(FriendlyByteBuf p_131819_)`
- `public void handle(ClientGamePacketListener p_131816_)`
- `public boolean isLocked()`
- `public Difficulty getDifficulty()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundChunkBatchFinishedPacket

*record* `net.minecraft.network.protocol.game.ClientboundChunkBatchFinishedPacket`

### Fields
- `private final int batchSize`
  The field for the batchSize record component.

### Methods
- `public void write(FriendlyByteBuf p_299639_)`
- `public void handle(ClientGamePacketListener p_297805_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int batchSize()`
  Returns the value of the batchSize record component.
  - returns: the value of the batchSize record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundChunkBatchStartPacket

*record* `net.minecraft.network.protocol.game.ClientboundChunkBatchStartPacket`

### Methods
- `public void write(FriendlyByteBuf p_298384_)`
- `public void handle(ClientGamePacketListener p_301192_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundChunksBiomesPacket

*record* `net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket`

### Fields
- `private final List<ClientboundChunksBiomesPacket.ChunkBiomeData> chunkBiomeData`
  The field for the chunkBiomeData record component.
- `private static final int TWO_MEGABYTES` (= 2097152)

### Methods
- `public static ClientboundChunksBiomesPacket forChunks(List<LevelChunk> p_275394_)`
- `public void write(FriendlyByteBuf p_275376_)`
- `public void handle(ClientGamePacketListener p_275524_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<ClientboundChunksBiomesPacket.ChunkBiomeData> chunkBiomeData()`
  Returns the value of the chunkBiomeData record component.
  - returns: the value of the chunkBiomeData record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundChunksBiomesPacket.ChunkBiomeData

*record* `net.minecraft.network.protocol.game.ClientboundChunksBiomesPacket.ChunkBiomeData`

Enclosing class: ClientboundChunksBiomesPacket

### Fields
- `private final ChunkPos pos`
  The field for the pos record component.
- `private final byte[] buffer`
  The field for the buffer record component.

### Methods
- `private static int calculateChunkSize(LevelChunk p_275324_)`
- `public FriendlyByteBuf getReadBuffer()`
- `private io.netty.buffer.ByteBuf getWriteBuffer()`
- `public static void extractChunkData(FriendlyByteBuf p_275626_,  LevelChunk p_275570_)`
- `public void write(FriendlyByteBuf p_275467_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ChunkPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component
- `public byte[] buffer()`
  Returns the value of the buffer record component.
  - returns: the value of the buffer record component

## ClientboundClearTitlesPacket

*class* `net.minecraft.network.protocol.game.ClientboundClearTitlesPacket`

### Fields
- `private final boolean resetTimes`

### Methods
- `public void write(FriendlyByteBuf p_178783_)`
- `public void handle(ClientGamePacketListener p_178787_)`
- `public boolean shouldResetTimes()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundCommandsPacket

*class* `net.minecraft.network.protocol.game.ClientboundCommandsPacket`

### Fields
- `private static final byte MASK_TYPE` (= 0x3)
- `private static final byte FLAG_EXECUTABLE` (= 0x4)
- `private static final byte FLAG_REDIRECT` (= 0x8)
- `private static final byte FLAG_CUSTOM_SUGGESTIONS` (= 0x10)
- `private static final byte TYPE_ROOT` (= 0x0)
- `private static final byte TYPE_LITERAL` (= 0x1)
- `private static final byte TYPE_ARGUMENT` (= 0x2)
- `private final int rootIndex`
- `private final List<ClientboundCommandsPacket.Entry> entries`

### Methods
- `public void write(FriendlyByteBuf p_131886_)`
- `private static void validateEntries(List<ClientboundCommandsPacket.Entry> p_237631_,  BiPredicate<ClientboundCommandsPacket.Entry,it.unimi.dsi.fastutil.ints.IntSet> p_237632_)`
- `private static void validateEntries(List<ClientboundCommandsPacket.Entry> p_237629_)`
- `private static it.unimi.dsi.fastutil.objects.Object2IntMap<com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider>> enumerateNodes(com.mojang.brigadier.tree.RootCommandNode<SharedSuggestionProvider> p_131863_)`
- `private static List<ClientboundCommandsPacket.Entry> createEntries(it.unimi.dsi.fastutil.objects.Object2IntMap<com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider>> p_237627_)`
- `private static ClientboundCommandsPacket.Entry readNode(FriendlyByteBuf p_131888_)`
- `@Nullable private static ClientboundCommandsPacket.NodeStub read(FriendlyByteBuf p_237639_,  byte p_237640_)`
- `private static ClientboundCommandsPacket.Entry createEntry(com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider> p_237622_,  it.unimi.dsi.fastutil.objects.Object2IntMap<com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider>> p_237623_)`
- `public void handle(ClientGamePacketListener p_131878_)`
- `public com.mojang.brigadier.tree.RootCommandNode<SharedSuggestionProvider> getRoot(CommandBuildContext p_237625_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundCommandsPacket.ArgumentNodeStub

*class* `net.minecraft.network.protocol.game.ClientboundCommandsPacket.ArgumentNodeStub`

Enclosing class: ClientboundCommandsPacket

### Fields
- `private final String id`
- `private final ArgumentTypeInfo.Template<?> argumentType`
- `@Nullable private final ResourceLocation suggestionId`

### Methods
- `@Nullable private static ResourceLocation getSuggestionId(@Nullable  com.mojang.brigadier.suggestion.SuggestionProvider<SharedSuggestionProvider> p_237654_)`
- `public com.mojang.brigadier.builder.ArgumentBuilder<SharedSuggestionProvider,?> build(CommandBuildContext p_237656_)`
- `public void write(FriendlyByteBuf p_237658_)`
- `private static <A extends com.mojang.brigadier.arguments.ArgumentType<?>> void serializeCap(FriendlyByteBuf p_237660_,  ArgumentTypeInfo.Template<A> p_237661_)`
- `private static <A extends com.mojang.brigadier.arguments.ArgumentType<?>, T extends ArgumentTypeInfo.Template<A>> void serializeCap(FriendlyByteBuf p_237663_,  ArgumentTypeInfo<A,T> p_237664_,  ArgumentTypeInfo.Template<A> p_237665_)`

## ClientboundCommandsPacket.Entry

*class* `net.minecraft.network.protocol.game.ClientboundCommandsPacket.Entry`

Enclosing class: ClientboundCommandsPacket

### Fields
- `@Nullable final ClientboundCommandsPacket.NodeStub stub`
- `final int flags`
- `final int redirect`
- `final int[] children`

### Methods
- `public void write(FriendlyByteBuf p_237675_)`
- `public boolean canBuild(it.unimi.dsi.fastutil.ints.IntSet p_237673_)`
- `public boolean canResolve(it.unimi.dsi.fastutil.ints.IntSet p_237677_)`

## ClientboundCommandsPacket.LiteralNodeStub

*class* `net.minecraft.network.protocol.game.ClientboundCommandsPacket.LiteralNodeStub`

Enclosing class: ClientboundCommandsPacket

### Fields
- `private final String id`

### Methods
- `public com.mojang.brigadier.builder.ArgumentBuilder<SharedSuggestionProvider,?> build(CommandBuildContext p_237682_)`
- `public void write(FriendlyByteBuf p_237684_)`

## ClientboundCommandsPacket.NodeResolver

*class* `net.minecraft.network.protocol.game.ClientboundCommandsPacket.NodeResolver`

Enclosing class: ClientboundCommandsPacket

### Fields
- `private final CommandBuildContext context`
- `private final List<ClientboundCommandsPacket.Entry> entries`
- `private final List<com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider>> nodes`

### Methods
- `public com.mojang.brigadier.tree.CommandNode<SharedSuggestionProvider> resolve(int p_237692_)`

## ClientboundCommandsPacket.NodeStub

*interface* `net.minecraft.network.protocol.game.ClientboundCommandsPacket.NodeStub`

Enclosing class: ClientboundCommandsPacket

### Methods
- `com.mojang.brigadier.builder.ArgumentBuilder<SharedSuggestionProvider,?> build(CommandBuildContext p_237695_)`
- `void write(FriendlyByteBuf p_237696_)`

## ClientboundCommandSuggestionsPacket

*class* `net.minecraft.network.protocol.game.ClientboundCommandSuggestionsPacket`

### Fields
- `private final int id`
- `private final com.mojang.brigadier.suggestion.Suggestions suggestions`

### Methods
- `public void write(FriendlyByteBuf p_131856_)`
- `public void handle(ClientGamePacketListener p_131853_)`
- `public int getId()`
- `public com.mojang.brigadier.suggestion.Suggestions getSuggestions()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundContainerClosePacket

*class* `net.minecraft.network.protocol.game.ClientboundContainerClosePacket`

### Fields
- `private final int containerId`

### Methods
- `public void write(FriendlyByteBuf p_131941_)`
- `public void handle(ClientGamePacketListener p_131939_)`
- `public int getContainerId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundContainerSetContentPacket

*class* `net.minecraft.network.protocol.game.ClientboundContainerSetContentPacket`

### Fields
- `private final int containerId`
- `private final int stateId`
- `private final List<ItemStack> items`
- `private final ItemStack carriedItem`

### Methods
- `public void write(FriendlyByteBuf p_131956_)`
- `public void handle(ClientGamePacketListener p_131953_)`
- `public int getContainerId()`
- `public List<ItemStack> getItems()`
- `public ItemStack getCarriedItem()`
- `public int getStateId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundContainerSetDataPacket

*class* `net.minecraft.network.protocol.game.ClientboundContainerSetDataPacket`

### Fields
- `private final int containerId`
- `private final int id`
- `private final int value`

### Methods
- `public void write(FriendlyByteBuf p_131974_)`
- `public void handle(ClientGamePacketListener p_131971_)`
- `public int getContainerId()`
- `public int getId()`
- `public int getValue()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundContainerSetSlotPacket

*class* `net.minecraft.network.protocol.game.ClientboundContainerSetSlotPacket`

### Fields
- `public static final int CARRIED_ITEM` (= -1)
- `public static final int PLAYER_INVENTORY` (= -2)
- `private final int containerId`
- `private final int stateId`
- `private final int slot`
- `private final ItemStack itemStack`

### Methods
- `public void write(FriendlyByteBuf p_131993_)`
- `public void handle(ClientGamePacketListener p_131990_)`
- `public int getContainerId()`
- `public int getSlot()`
- `public ItemStack getItem()`
- `public int getStateId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundCooldownPacket

*class* `net.minecraft.network.protocol.game.ClientboundCooldownPacket`

### Fields
- `private final Item item`
- `private final int duration`

### Methods
- `public void write(FriendlyByteBuf p_132010_)`
- `public void handle(ClientGamePacketListener p_132007_)`
- `public Item getItem()`
- `public int getDuration()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundCustomChatCompletionsPacket

*record* `net.minecraft.network.protocol.game.ClientboundCustomChatCompletionsPacket`

### Fields
- `private final ClientboundCustomChatCompletionsPacket.Action action`
  The field for the action record component.
- `private final List<String> entries`
  The field for the entries record component.

### Methods
- `public void write(FriendlyByteBuf p_240782_)`
- `public void handle(ClientGamePacketListener p_240794_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ClientboundCustomChatCompletionsPacket.Action action()`
  Returns the value of the action record component.
  - returns: the value of the action record component
- `public List<String> entries()`
  Returns the value of the entries record component.
  - returns: the value of the entries record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundDamageEventPacket

*record* `net.minecraft.network.protocol.game.ClientboundDamageEventPacket`

### Fields
- `private final int entityId`
  The field for the entityId record component.
- `private final int sourceTypeId`
  The field for the sourceTypeId record component.
- `private final int sourceCauseId`
  The field for the sourceCauseId record component.
- `private final int sourceDirectId`
  The field for the sourceDirectId record component.
- `private final Optional<Vec3> sourcePosition`
  The field for the sourcePosition record component.

### Methods
- `private static void writeOptionalEntityId(FriendlyByteBuf p_270812_,  int p_270852_)`
- `private static int readOptionalEntityId(FriendlyByteBuf p_270462_)`
- `public void write(FriendlyByteBuf p_270971_)`
- `public void handle(ClientGamePacketListener p_270510_)`
- `public DamageSource getSource(Level p_270943_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int entityId()`
  Returns the value of the entityId record component.
  - returns: the value of the entityId record component
- `public int sourceTypeId()`
  Returns the value of the sourceTypeId record component.
  - returns: the value of the sourceTypeId record component
- `public int sourceCauseId()`
  Returns the value of the sourceCauseId record component.
  - returns: the value of the sourceCauseId record component
- `public int sourceDirectId()`
  Returns the value of the sourceDirectId record component.
  - returns: the value of the sourceDirectId record component
- `public Optional<Vec3> sourcePosition()`
  Returns the value of the sourcePosition record component.
  - returns: the value of the sourcePosition record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundDeleteChatPacket

*record* `net.minecraft.network.protocol.game.ClientboundDeleteChatPacket`

### Fields
- `private final MessageSignature.Packed messageSignature`
  The field for the messageSignature record component.

### Methods
- `public void write(FriendlyByteBuf p_241358_)`
- `public void handle(ClientGamePacketListener p_241426_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public MessageSignature.Packed messageSignature()`
  Returns the value of the messageSignature record component.
  - returns: the value of the messageSignature record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundDisguisedChatPacket

*record* `net.minecraft.network.protocol.game.ClientboundDisguisedChatPacket`

### Fields
- `private final Component message`
  The field for the message record component.
- `private final ChatType.BoundNetwork chatType`
  The field for the chatType record component.

### Methods
- `public void write(FriendlyByteBuf p_250975_)`
- `public void handle(ClientGamePacketListener p_251953_)`
- `public boolean isSkippable()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Component message()`
  Returns the value of the message record component.
  - returns: the value of the message record component
- `public ChatType.BoundNetwork chatType()`
  Returns the value of the chatType record component.
  - returns: the value of the chatType record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `nextProtocol`

## ClientboundEntityEventPacket

*class* `net.minecraft.network.protocol.game.ClientboundEntityEventPacket`

### Fields
- `private final int entityId`
- `private final byte eventId`

### Methods
- `public void write(FriendlyByteBuf p_132104_)`
- `public void handle(ClientGamePacketListener p_132101_)`
- `@Nullable public Entity getEntity(Level p_132095_)`
- `public byte getEventId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundExplodePacket

*class* `net.minecraft.network.protocol.game.ClientboundExplodePacket`

### Fields
- `private final double x`
- `private final double y`
- `private final double z`
- `private final float power`
- `private final List<BlockPos> toBlow`
- `private final float knockbackX`
- `private final float knockbackY`
- `private final float knockbackZ`

### Methods
- `public void write(FriendlyByteBuf p_132129_)`
- `public void handle(ClientGamePacketListener p_132126_)`
- `public float getKnockbackX()`
- `public float getKnockbackY()`
- `public float getKnockbackZ()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getPower()`
- `public List<BlockPos> getToBlow()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundForgetLevelChunkPacket

*record* `net.minecraft.network.protocol.game.ClientboundForgetLevelChunkPacket`

### Fields
- `private final ChunkPos pos`
  The field for the pos record component.

### Methods
- `public void write(FriendlyByteBuf p_132151_)`
- `public void handle(ClientGamePacketListener p_132148_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ChunkPos pos()`
  Returns the value of the pos record component.
  - returns: the value of the pos record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundGameEventPacket

*class* `net.minecraft.network.protocol.game.ClientboundGameEventPacket`

### Fields
- `public static final ClientboundGameEventPacket.Type NO_RESPAWN_BLOCK_AVAILABLE`
- `public static final ClientboundGameEventPacket.Type START_RAINING`
- `public static final ClientboundGameEventPacket.Type STOP_RAINING`
- `public static final ClientboundGameEventPacket.Type CHANGE_GAME_MODE`
- `public static final ClientboundGameEventPacket.Type WIN_GAME`
- `public static final ClientboundGameEventPacket.Type DEMO_EVENT`
- `public static final ClientboundGameEventPacket.Type ARROW_HIT_PLAYER`
- `public static final ClientboundGameEventPacket.Type RAIN_LEVEL_CHANGE`
- `public static final ClientboundGameEventPacket.Type THUNDER_LEVEL_CHANGE`
- `public static final ClientboundGameEventPacket.Type PUFFER_FISH_STING`
- `public static final ClientboundGameEventPacket.Type GUARDIAN_ELDER_EFFECT`
- `public static final ClientboundGameEventPacket.Type IMMEDIATE_RESPAWN`
- `public static final ClientboundGameEventPacket.Type LIMITED_CRAFTING`
- `public static final int DEMO_PARAM_INTRO` (= 0)
- `public static final int DEMO_PARAM_HINT_1` (= 101)
- `public static final int DEMO_PARAM_HINT_2` (= 102)
- `public static final int DEMO_PARAM_HINT_3` (= 103)
- `public static final int DEMO_PARAM_HINT_4` (= 104)
- `private final ClientboundGameEventPacket.Type event`
- `private final float param`

### Methods
- `public void write(FriendlyByteBuf p_132180_)`
- `public void handle(ClientGamePacketListener p_132177_)`
- `public ClientboundGameEventPacket.Type getEvent()`
- `public float getParam()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundGameEventPacket.Type

*class* `net.minecraft.network.protocol.game.ClientboundGameEventPacket.Type`

Enclosing class: ClientboundGameEventPacket

### Fields
- `static final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ClientboundGameEventPacket.Type> TYPES`
- `final int id`

## ClientboundHorseScreenOpenPacket

*class* `net.minecraft.network.protocol.game.ClientboundHorseScreenOpenPacket`

### Fields
- `private final int containerId`
- `private final int size`
- `private final int entityId`

### Methods
- `public void write(FriendlyByteBuf p_132206_)`
- `public void handle(ClientGamePacketListener p_132203_)`
- `public int getContainerId()`
- `public int getSize()`
- `public int getEntityId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundHurtAnimationPacket

*record* `net.minecraft.network.protocol.game.ClientboundHurtAnimationPacket`

### Fields
- `private final int id`
  The field for the id record component.
- `private final float yaw`
  The field for the yaw record component.

### Methods
- `public void write(FriendlyByteBuf p_265156_)`
- `public void handle(ClientGamePacketListener p_265654_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public float yaw()`
  Returns the value of the yaw record component.
  - returns: the value of the yaw record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundInitializeBorderPacket

*class* `net.minecraft.network.protocol.game.ClientboundInitializeBorderPacket`

### Fields
- `private final double newCenterX`
- `private final double newCenterZ`
- `private final double oldSize`
- `private final double newSize`
- `private final long lerpTime`
- `private final int newAbsoluteMaxSize`
- `private final int warningBlocks`
- `private final int warningTime`

### Methods
- `public void write(FriendlyByteBuf p_178881_)`
- `public void handle(ClientGamePacketListener p_178885_)`
- `public double getNewCenterX()`
- `public double getNewCenterZ()`
- `public double getNewSize()`
- `public double getOldSize()`
- `public long getLerpTime()`
- `public int getNewAbsoluteMaxSize()`
- `public int getWarningTime()`
- `public int getWarningBlocks()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLevelChunkPacketData

*class* `net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData`

### Fields
- `private static final int TWO_MEGABYTES` (= 2097152)
- `private final CompoundTag heightmaps`
- `private final byte[] buffer`
- `private final List<ClientboundLevelChunkPacketData.BlockEntityInfo> blockEntitiesData`

### Methods
- `public void write(FriendlyByteBuf p_195667_)`
- `private static int calculateChunkSize(LevelChunk p_195665_)`
- `private io.netty.buffer.ByteBuf getWriteBuffer()`
- `public static void extractChunkData(FriendlyByteBuf p_195669_,  LevelChunk p_195670_)`
- `public Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput> getBlockEntitiesTagsConsumer(int p_195658_,  int p_195659_)`
- `private void getBlockEntitiesTags(ClientboundLevelChunkPacketData.BlockEntityTagOutput p_195675_,  int p_195676_,  int p_195677_)`
- `public FriendlyByteBuf getReadBuffer()`
- `public CompoundTag getHeightmaps()`

## ClientboundLevelChunkPacketData.BlockEntityInfo

*class* `net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData.BlockEntityInfo`

Enclosing class: ClientboundLevelChunkPacketData

### Fields
- `final int packedXZ`
- `final int y`
- `final BlockEntityType<?> type`
- `@Nullable final CompoundTag tag`

### Methods
- `void write(FriendlyByteBuf p_195694_)`
- `static ClientboundLevelChunkPacketData.BlockEntityInfo create(BlockEntity p_195692_)`

## ClientboundLevelChunkPacketData.BlockEntityTagOutput

*interface* `net.minecraft.network.protocol.game.ClientboundLevelChunkPacketData.BlockEntityTagOutput`

Enclosing class: ClientboundLevelChunkPacketData

### Methods
- `void accept(BlockPos p_195696_,  BlockEntityType<?> p_195697_,  @Nullable  CompoundTag p_195698_)`

## ClientboundLevelChunkWithLightPacket

*class* `net.minecraft.network.protocol.game.ClientboundLevelChunkWithLightPacket`

### Fields
- `private final int x`
- `private final int z`
- `private final ClientboundLevelChunkPacketData chunkData`
- `private final ClientboundLightUpdatePacketData lightData`

### Methods
- `public void write(FriendlyByteBuf p_195712_)`
- `public void handle(ClientGamePacketListener p_195716_)`
- `public int getX()`
- `public int getZ()`
- `public ClientboundLevelChunkPacketData getChunkData()`
- `public ClientboundLightUpdatePacketData getLightData()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLevelEventPacket

*class* `net.minecraft.network.protocol.game.ClientboundLevelEventPacket`

### Fields
- `private final int type`
- `private final BlockPos pos`
- `private final int data`
- `private final boolean globalEvent`

### Methods
- `public void write(FriendlyByteBuf p_132276_)`
- `public void handle(ClientGamePacketListener p_132273_)`
- `public boolean isGlobalEvent()`
- `public int getType()`
- `public int getData()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLevelParticlesPacket

*class* `net.minecraft.network.protocol.game.ClientboundLevelParticlesPacket`

### Fields
- `private final double x`
- `private final double y`
- `private final double z`
- `private final float xDist`
- `private final float yDist`
- `private final float zDist`
- `private final float maxSpeed`
- `private final int count`
- `private final boolean overrideLimiter`
- `private final ParticleOptions particle`

### Methods
- `private <T extends ParticleOptions> T readParticle(FriendlyByteBuf p_132305_,  ParticleType<T> p_132306_)`
- `public void write(FriendlyByteBuf p_132313_)`
- `public boolean isOverrideLimiter()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getXDist()`
- `public float getYDist()`
- `public float getZDist()`
- `public float getMaxSpeed()`
- `public int getCount()`
- `public ParticleOptions getParticle()`
- `public void handle(ClientGamePacketListener p_132310_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLightUpdatePacket

*class* `net.minecraft.network.protocol.game.ClientboundLightUpdatePacket`

### Fields
- `private final int x`
- `private final int z`
- `private final ClientboundLightUpdatePacketData lightData`

### Methods
- `public void write(FriendlyByteBuf p_132351_)`
- `public void handle(ClientGamePacketListener p_132348_)`
- `public int getX()`
- `public int getZ()`
- `public ClientboundLightUpdatePacketData getLightData()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundLightUpdatePacketData

*class* `net.minecraft.network.protocol.game.ClientboundLightUpdatePacketData`

### Fields
- `private final BitSet skyYMask`
- `private final BitSet blockYMask`
- `private final BitSet emptySkyYMask`
- `private final BitSet emptyBlockYMask`
- `private final List<byte[]> skyUpdates`
- `private final List<byte[]> blockUpdates`

### Methods
- `public void write(FriendlyByteBuf p_195750_)`
- `private void prepareSectionData(ChunkPos p_195742_,  LevelLightEngine p_195743_,  LightLayer p_195744_,  int p_195745_,  BitSet p_195746_,  BitSet p_195747_,  List<byte[]> p_195748_)`
- `public BitSet getSkyYMask()`
- `public BitSet getEmptySkyYMask()`
- `public List<byte[]> getSkyUpdates()`
- `public BitSet getBlockYMask()`
- `public BitSet getEmptyBlockYMask()`
- `public List<byte[]> getBlockUpdates()`

## ClientboundLoginPacket

*record* `net.minecraft.network.protocol.game.ClientboundLoginPacket`

### Fields
- `private final int playerId`
  The field for the playerId record component.
- `private final boolean hardcore`
  The field for the hardcore record component.
- `private final Set<ResourceKey<Level>> levels`
  The field for the levels record component.
- `private final int maxPlayers`
  The field for the maxPlayers record component.
- `private final int chunkRadius`
  The field for the chunkRadius record component.
- `private final int simulationDistance`
  The field for the simulationDistance record component.
- `private final boolean reducedDebugInfo`
  The field for the reducedDebugInfo record component.
- `private final boolean showDeathScreen`
  The field for the showDeathScreen record component.
- `private final boolean doLimitedCrafting`
  The field for the doLimitedCrafting record component.
- `private final CommonPlayerSpawnInfo commonPlayerSpawnInfo`
  The field for the commonPlayerSpawnInfo record component.

### Methods
- `public void write(FriendlyByteBuf p_132400_)`
- `public void handle(ClientGamePacketListener p_132397_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int playerId()`
  Returns the value of the playerId record component.
  - returns: the value of the playerId record component
- `public boolean hardcore()`
  Returns the value of the hardcore record component.
  - returns: the value of the hardcore record component
- `public Set<ResourceKey<Level>> levels()`
  Returns the value of the levels record component.
  - returns: the value of the levels record component
- `public int maxPlayers()`
  Returns the value of the maxPlayers record component.
  - returns: the value of the maxPlayers record component
- `public int chunkRadius()`
  Returns the value of the chunkRadius record component.
  - returns: the value of the chunkRadius record component
- `public int simulationDistance()`
  Returns the value of the simulationDistance record component.
  - returns: the value of the simulationDistance record component
- `public boolean reducedDebugInfo()`
  Returns the value of the reducedDebugInfo record component.
  - returns: the value of the reducedDebugInfo record component
- `public boolean showDeathScreen()`
  Returns the value of the showDeathScreen record component.
  - returns: the value of the showDeathScreen record component
- `public boolean doLimitedCrafting()`
  Returns the value of the doLimitedCrafting record component.
  - returns: the value of the doLimitedCrafting record component
- `public CommonPlayerSpawnInfo commonPlayerSpawnInfo()`
  Returns the value of the commonPlayerSpawnInfo record component.
  - returns: the value of the commonPlayerSpawnInfo record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundMapItemDataPacket

*class* `net.minecraft.network.protocol.game.ClientboundMapItemDataPacket`

### Fields
- `private final int mapId`
- `private final byte scale`
- `private final boolean locked`
- `@Nullable private final List<MapDecoration> decorations`
- `@Nullable private final MapItemSavedData.MapPatch colorPatch`

### Methods
- `public void write(FriendlyByteBuf p_132447_)`
- `public void handle(ClientGamePacketListener p_132444_)`
- `public int getMapId()`
- `public void applyToMap(MapItemSavedData p_132438_)`
- `public byte getScale()`
- `public boolean isLocked()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundMerchantOffersPacket

*class* `net.minecraft.network.protocol.game.ClientboundMerchantOffersPacket`

### Fields
- `private final int containerId`
- `private final MerchantOffers offers`
- `private final int villagerLevel`
- `private final int villagerXp`
- `private final boolean showProgress`
- `private final boolean canRestock`

### Methods
- `public void write(FriendlyByteBuf p_132470_)`
- `public void handle(ClientGamePacketListener p_132467_)`
- `public int getContainerId()`
- `public MerchantOffers getOffers()`
- `public int getVillagerLevel()`
- `public int getVillagerXp()`
- `public boolean showProgress()`
- `public boolean canRestock()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundMoveEntityPacket

*class* `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`

### Fields
- `protected final int entityId`
- `protected final short xa`
- `protected final short ya`
- `protected final short za`
- `protected final byte yRot`
- `protected final byte xRot`
- `protected final boolean onGround`
- `protected final boolean hasRot`
- `protected final boolean hasPos`

### Methods
- `public void handle(ClientGamePacketListener p_132528_)`
- `public String toString()`
- `@Nullable public Entity getEntity(Level p_132520_)`
- `public short getXa()`
- `public short getYa()`
- `public short getZa()`
- `public byte getyRot()`
- `public byte getxRot()`
- `public boolean hasRotation()`
- `public boolean hasPosition()`
- `public boolean isOnGround()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`, `write`

## ClientboundMoveEntityPacket.Pos

*class* `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket.Pos`

Enclosing class: ClientboundMoveEntityPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`: `entityId`, `hasPos`, `hasRot`, `onGround`, `xa`, `xRot`, `ya`, `yRot`, `za`

### Methods
- `public static ClientboundMoveEntityPacket.Pos read(FriendlyByteBuf p_179001_)`
- `public void write(FriendlyByteBuf p_132549_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`: `getEntity`, `getXa`, `getxRot`, `getYa`, `getyRot`, `getZa`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`, `toString`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundMoveEntityPacket.PosRot

*class* `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket.PosRot`

Enclosing class: ClientboundMoveEntityPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`: `entityId`, `hasPos`, `hasRot`, `onGround`, `xa`, `xRot`, `ya`, `yRot`, `za`

### Methods
- `public static ClientboundMoveEntityPacket.PosRot read(FriendlyByteBuf p_179003_)`
- `public void write(FriendlyByteBuf p_132564_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`: `getEntity`, `getXa`, `getxRot`, `getYa`, `getyRot`, `getZa`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`, `toString`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundMoveEntityPacket.Rot

*class* `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket.Rot`

Enclosing class: ClientboundMoveEntityPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`: `entityId`, `hasPos`, `hasRot`, `onGround`, `xa`, `xRot`, `ya`, `yRot`, `za`

### Methods
- `public static ClientboundMoveEntityPacket.Rot read(FriendlyByteBuf p_179005_)`
- `public void write(FriendlyByteBuf p_132576_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ClientboundMoveEntityPacket`: `getEntity`, `getXa`, `getxRot`, `getYa`, `getyRot`, `getZa`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`, `toString`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundMoveVehiclePacket

*class* `net.minecraft.network.protocol.game.ClientboundMoveVehiclePacket`

### Fields
- `private final double x`
- `private final double y`
- `private final double z`
- `private final float yRot`
- `private final float xRot`

### Methods
- `public void write(FriendlyByteBuf p_132593_)`
- `public void handle(ClientGamePacketListener p_132590_)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getYRot()`
- `public float getXRot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundOpenBookPacket

*class* `net.minecraft.network.protocol.game.ClientboundOpenBookPacket`

### Fields
- `private final InteractionHand hand`

### Methods
- `public void write(FriendlyByteBuf p_132610_)`
- `public void handle(ClientGamePacketListener p_132607_)`
- `public InteractionHand getHand()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundOpenScreenPacket

*class* `net.minecraft.network.protocol.game.ClientboundOpenScreenPacket`

### Fields
- `private final int containerId`
- `private final MenuType<?> type`
- `private final Component title`

### Methods
- `public void write(FriendlyByteBuf p_132627_)`
- `public void handle(ClientGamePacketListener p_132624_)`
- `public int getContainerId()`
- `@Nullable public MenuType<?> getType()`
- `public Component getTitle()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundOpenSignEditorPacket

*class* `net.minecraft.network.protocol.game.ClientboundOpenSignEditorPacket`

### Fields
- `private final BlockPos pos`
- `private final boolean isFrontText`

### Methods
- `public void write(FriendlyByteBuf p_132642_)`
- `public void handle(ClientGamePacketListener p_132639_)`
- `public BlockPos getPos()`
- `public boolean isFrontText()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlaceGhostRecipePacket

*class* `net.minecraft.network.protocol.game.ClientboundPlaceGhostRecipePacket`

### Fields
- `private final int containerId`
- `private final ResourceLocation recipe`

### Methods
- `public void write(FriendlyByteBuf p_132657_)`
- `public void handle(ClientGamePacketListener p_132654_)`
- `public ResourceLocation getRecipe()`
- `public int getContainerId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerAbilitiesPacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerAbilitiesPacket`

### Fields
- `private static final int FLAG_INVULNERABLE` (= 1)
- `private static final int FLAG_FLYING` (= 2)
- `private static final int FLAG_CAN_FLY` (= 4)
- `private static final int FLAG_INSTABUILD` (= 8)
- `private final boolean invulnerable`
- `private final boolean isFlying`
- `private final boolean canFly`
- `private final boolean instabuild`
- `private final float flyingSpeed`
- `private final float walkingSpeed`

### Methods
- `public void write(FriendlyByteBuf p_132676_)`
- `public void handle(ClientGamePacketListener p_132673_)`
- `public boolean isInvulnerable()`
- `public boolean isFlying()`
- `public boolean canFly()`
- `public boolean canInstabuild()`
- `public float getFlyingSpeed()`
- `public float getWalkingSpeed()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerChatPacket

*record* `net.minecraft.network.protocol.game.ClientboundPlayerChatPacket`

### Fields
- `private final UUID sender`
  The field for the sender record component.
- `private final int index`
  The field for the index record component.
- `@Nullable private final MessageSignature signature`
  The field for the signature record component.
- `private final SignedMessageBody.Packed body`
  The field for the body record component.
- `@Nullable private final Component unsignedContent`
  The field for the unsignedContent record component.
- `private final FilterMask filterMask`
  The field for the filterMask record component.
- `private final ChatType.BoundNetwork chatType`
  The field for the chatType record component.

### Methods
- `public void write(FriendlyByteBuf p_237755_)`
- `public void handle(ClientGamePacketListener p_237759_)`
- `public boolean isSkippable()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public UUID sender()`
  Returns the value of the sender record component.
  - returns: the value of the sender record component
- `public int index()`
  Returns the value of the index record component.
  - returns: the value of the index record component
- `@Nullable public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `public SignedMessageBody.Packed body()`
  Returns the value of the body record component.
  - returns: the value of the body record component
- `@Nullable public Component unsignedContent()`
  Returns the value of the unsignedContent record component.
  - returns: the value of the unsignedContent record component
- `public FilterMask filterMask()`
  Returns the value of the filterMask record component.
  - returns: the value of the filterMask record component
- `public ChatType.BoundNetwork chatType()`
  Returns the value of the chatType record component.
  - returns: the value of the chatType record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `nextProtocol`

## ClientboundPlayerCombatEndPacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerCombatEndPacket`

### Fields
- `private final int duration`

### Methods
- `public void write(FriendlyByteBuf p_179044_)`
- `public void handle(ClientGamePacketListener p_179048_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerCombatEnterPacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerCombatEnterPacket`

### Methods
- `public void write(FriendlyByteBuf p_179053_)`
- `public void handle(ClientGamePacketListener p_179057_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerCombatKillPacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerCombatKillPacket`

### Fields
- `private final int playerId`
- `private final Component message`

### Methods
- `public void write(FriendlyByteBuf p_179072_)`
- `public void handle(ClientGamePacketListener p_179076_)`
- `public boolean isSkippable()`
- `public int getPlayerId()`
- `public Component getMessage()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `nextProtocol`

## ClientboundPlayerInfoRemovePacket

*record* `net.minecraft.network.protocol.game.ClientboundPlayerInfoRemovePacket`

### Fields
- `private final List<UUID> profileIds`
  The field for the profileIds record component.

### Methods
- `public void write(FriendlyByteBuf p_249263_)`
- `public void handle(ClientGamePacketListener p_250111_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public List<UUID> profileIds()`
  Returns the value of the profileIds record component.
  - returns: the value of the profileIds record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerInfoUpdatePacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket`

### Fields
- `private final EnumSet<ClientboundPlayerInfoUpdatePacket.Action> actions`
- `private final List<ClientboundPlayerInfoUpdatePacket.Entry> entries`

### Methods
- `public static ClientboundPlayerInfoUpdatePacket createPlayerInitializing(Collection<ServerPlayer> p_252314_)`
- `public void write(FriendlyByteBuf p_249907_)`
- `public void handle(ClientGamePacketListener p_249935_)`
- `public EnumSet<ClientboundPlayerInfoUpdatePacket.Action> actions()`
- `public List<ClientboundPlayerInfoUpdatePacket.Entry> entries()`
- `public List<ClientboundPlayerInfoUpdatePacket.Entry> newEntries()`
- `public String toString()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerInfoUpdatePacket.Action.Reader

*interface* `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket.Action.Reader`

Enclosing class: ClientboundPlayerInfoUpdatePacket.Action

### Methods
- `void read(ClientboundPlayerInfoUpdatePacket.EntryBuilder p_251859_,  FriendlyByteBuf p_249972_)`

## ClientboundPlayerInfoUpdatePacket.Action.Writer

*interface* `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket.Action.Writer`

Enclosing class: ClientboundPlayerInfoUpdatePacket.Action

### Methods
- `void write(FriendlyByteBuf p_249775_,  ClientboundPlayerInfoUpdatePacket.Entry p_249783_)`

## ClientboundPlayerInfoUpdatePacket.Entry

*record* `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket.Entry`

Enclosing class: ClientboundPlayerInfoUpdatePacket

### Fields
- `private final UUID profileId`
  The field for the profileId record component.
- `@Nullable private final com.mojang.authlib.GameProfile profile`
  The field for the profile record component.
- `private final boolean listed`
  The field for the listed record component.
- `private final int latency`
  The field for the latency record component.
- `private final GameType gameMode`
  The field for the gameMode record component.
- `@Nullable private final Component displayName`
  The field for the displayName record component.
- `@Nullable private final RemoteChatSession.Data chatSession`
  The field for the chatSession record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public UUID profileId()`
  Returns the value of the profileId record component.
  - returns: the value of the profileId record component
- `@Nullable public com.mojang.authlib.GameProfile profile()`
  Returns the value of the profile record component.
  - returns: the value of the profile record component
- `public boolean listed()`
  Returns the value of the listed record component.
  - returns: the value of the listed record component
- `public int latency()`
  Returns the value of the latency record component.
  - returns: the value of the latency record component
- `public GameType gameMode()`
  Returns the value of the gameMode record component.
  - returns: the value of the gameMode record component
- `@Nullable public Component displayName()`
  Returns the value of the displayName record component.
  - returns: the value of the displayName record component
- `@Nullable public RemoteChatSession.Data chatSession()`
  Returns the value of the chatSession record component.
  - returns: the value of the chatSession record component

## ClientboundPlayerInfoUpdatePacket.EntryBuilder

*class* `net.minecraft.network.protocol.game.ClientboundPlayerInfoUpdatePacket.EntryBuilder`

Enclosing class: ClientboundPlayerInfoUpdatePacket

### Fields
- `final UUID profileId`
- `@Nullable com.mojang.authlib.GameProfile profile`
- `boolean listed`
- `int latency`
- `GameType gameMode`
- `@Nullable Component displayName`
- `@Nullable RemoteChatSession.Data chatSession`

### Methods
- `ClientboundPlayerInfoUpdatePacket.Entry build()`

## ClientboundPlayerLookAtPacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerLookAtPacket`

### Fields
- `private final double x`
- `private final double y`
- `private final double z`
- `private final int entity`
- `private final EntityAnchorArgument.Anchor fromAnchor`
- `private final EntityAnchorArgument.Anchor toAnchor`
- `private final boolean atEntity`

### Methods
- `public void write(FriendlyByteBuf p_132795_)`
- `public void handle(ClientGamePacketListener p_132792_)`
- `public EntityAnchorArgument.Anchor getFromAnchor()`
- `@Nullable public Vec3 getPosition(Level p_132786_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundPlayerPositionPacket

*class* `net.minecraft.network.protocol.game.ClientboundPlayerPositionPacket`

### Fields
- `private final double x`
- `private final double y`
- `private final double z`
- `private final float yRot`
- `private final float xRot`
- `private final Set<RelativeMovement> relativeArguments`
- `private final int id`

### Methods
- `public void write(FriendlyByteBuf p_132820_)`
- `public void handle(ClientGamePacketListener p_132817_)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getYRot()`
- `public float getXRot()`
- `public int getId()`
- `public Set<RelativeMovement> getRelativeArguments()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundRecipePacket

*class* `net.minecraft.network.protocol.game.ClientboundRecipePacket`

### Fields
- `private final ClientboundRecipePacket.State state`
- `private final List<ResourceLocation> recipes`
- `private final List<ResourceLocation> toHighlight`
- `private final RecipeBookSettings bookSettings`

### Methods
- `public void write(FriendlyByteBuf p_132867_)`
- `public void handle(ClientGamePacketListener p_132864_)`
- `public List<ResourceLocation> getRecipes()`
- `public List<ResourceLocation> getHighlights()`
- `public RecipeBookSettings getBookSettings()`
- `public ClientboundRecipePacket.State getState()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundRemoveEntitiesPacket

*class* `net.minecraft.network.protocol.game.ClientboundRemoveEntitiesPacket`

### Fields
- `private final it.unimi.dsi.fastutil.ints.IntList entityIds`

### Methods
- `public void write(FriendlyByteBuf p_182725_)`
- `public void handle(ClientGamePacketListener p_182729_)`
- `public it.unimi.dsi.fastutil.ints.IntList getEntityIds()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundRemoveMobEffectPacket

*class* `net.minecraft.network.protocol.game.ClientboundRemoveMobEffectPacket`

### Fields
- `private final int entityId`
- `private final MobEffect effect`

### Methods
- `public void write(FriendlyByteBuf p_132911_)`
- `public void handle(ClientGamePacketListener p_132908_)`
- `@Nullable public Entity getEntity(Level p_132902_)`
- `@Nullable public MobEffect getEffect()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundRespawnPacket

*record* `net.minecraft.network.protocol.game.ClientboundRespawnPacket`

### Fields
- `private final CommonPlayerSpawnInfo commonPlayerSpawnInfo`
  The field for the commonPlayerSpawnInfo record component.
- `private final byte dataToKeep`
  The field for the dataToKeep record component.
- `public static final byte KEEP_ATTRIBUTES` (= 0x1)
- `public static final byte KEEP_ENTITY_DATA` (= 0x2)
- `public static final byte KEEP_ALL_DATA` (= 0x3)

### Methods
- `public void write(FriendlyByteBuf p_132954_)`
- `public void handle(ClientGamePacketListener p_132951_)`
- `public boolean shouldKeep(byte p_263573_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public CommonPlayerSpawnInfo commonPlayerSpawnInfo()`
  Returns the value of the commonPlayerSpawnInfo record component.
  - returns: the value of the commonPlayerSpawnInfo record component
- `public byte dataToKeep()`
  Returns the value of the dataToKeep record component.
  - returns: the value of the dataToKeep record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundRotateHeadPacket

*class* `net.minecraft.network.protocol.game.ClientboundRotateHeadPacket`

### Fields
- `private final int entityId`
- `private final byte yHeadRot`

### Methods
- `public void write(FriendlyByteBuf p_132979_)`
- `public void handle(ClientGamePacketListener p_132976_)`
- `public Entity getEntity(Level p_132970_)`
- `public byte getYHeadRot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSectionBlocksUpdatePacket

*class* `net.minecraft.network.protocol.game.ClientboundSectionBlocksUpdatePacket`

### Fields
- `private static final int POS_IN_SECTION_BITS` (= 12)
- `private final SectionPos sectionPos`
- `private final short[] positions`
- `private final BlockState[] states`

### Methods
- `public void write(FriendlyByteBuf p_133002_)`
- `public void handle(ClientGamePacketListener p_132999_)`
- `public void runUpdates(BiConsumer<BlockPos,BlockState> p_132993_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSelectAdvancementsTabPacket

*class* `net.minecraft.network.protocol.game.ClientboundSelectAdvancementsTabPacket`

### Fields
- `@Nullable private final ResourceLocation tab`

### Methods
- `public void handle(ClientGamePacketListener p_133012_)`
- `public void write(FriendlyByteBuf p_133015_)`
- `@Nullable public ResourceLocation getTab()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundServerDataPacket

*class* `net.minecraft.network.protocol.game.ClientboundServerDataPacket`

### Fields
- `private final Component motd`
- `private final Optional<byte[]> iconBytes`
- `private final boolean enforcesSecureChat`

### Methods
- `public void write(FriendlyByteBuf p_237805_)`
- `public void handle(ClientGamePacketListener p_237809_)`
- `public Component getMotd()`
- `public Optional<byte[]> getIconBytes()`
- `public boolean enforcesSecureChat()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetActionBarTextPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetActionBarTextPacket`

### Fields
- `private final Component text`

### Methods
- `public void write(FriendlyByteBuf p_179205_)`
- `public void handle(ClientGamePacketListener p_179209_)`
- `public Component getText()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetBorderCenterPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetBorderCenterPacket`

### Fields
- `private final double newCenterX`
- `private final double newCenterZ`

### Methods
- `public void write(FriendlyByteBuf p_179218_)`
- `public void handle(ClientGamePacketListener p_179222_)`
- `public double getNewCenterZ()`
- `public double getNewCenterX()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetBorderLerpSizePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetBorderLerpSizePacket`

### Fields
- `private final double oldSize`
- `private final double newSize`
- `private final long lerpTime`

### Methods
- `public void write(FriendlyByteBuf p_179233_)`
- `public void handle(ClientGamePacketListener p_179237_)`
- `public double getOldSize()`
- `public double getNewSize()`
- `public long getLerpTime()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetBorderSizePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetBorderSizePacket`

### Fields
- `private final double size`

### Methods
- `public void write(FriendlyByteBuf p_179247_)`
- `public void handle(ClientGamePacketListener p_179251_)`
- `public double getSize()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetBorderWarningDelayPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetBorderWarningDelayPacket`

### Fields
- `private final int warningDelay`

### Methods
- `public void write(FriendlyByteBuf p_179259_)`
- `public void handle(ClientGamePacketListener p_179263_)`
- `public int getWarningDelay()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetBorderWarningDistancePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetBorderWarningDistancePacket`

### Fields
- `private final int warningBlocks`

### Methods
- `public void write(FriendlyByteBuf p_179271_)`
- `public void handle(ClientGamePacketListener p_179275_)`
- `public int getWarningBlocks()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetCameraPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetCameraPacket`

### Fields
- `private final int cameraId`

### Methods
- `public void write(FriendlyByteBuf p_133068_)`
- `public void handle(ClientGamePacketListener p_133066_)`
- `@Nullable public Entity getEntity(Level p_133060_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetCarriedItemPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetCarriedItemPacket`

### Fields
- `private final int slot`

### Methods
- `public void write(FriendlyByteBuf p_133081_)`
- `public void handle(ClientGamePacketListener p_133078_)`
- `public int getSlot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetChunkCacheCenterPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetChunkCacheCenterPacket`

### Fields
- `private final int x`
- `private final int z`

### Methods
- `public void write(FriendlyByteBuf p_133096_)`
- `public void handle(ClientGamePacketListener p_133093_)`
- `public int getX()`
- `public int getZ()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetChunkCacheRadiusPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetChunkCacheRadiusPacket`

### Fields
- `private final int radius`

### Methods
- `public void write(FriendlyByteBuf p_133110_)`
- `public void handle(ClientGamePacketListener p_133107_)`
- `public int getRadius()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetDefaultSpawnPositionPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetDefaultSpawnPositionPacket`

### Fields
- `private final BlockPos pos`
- `private final float angle`

### Methods
- `public void write(FriendlyByteBuf p_133125_)`
- `public void handle(ClientGamePacketListener p_133122_)`
- `public BlockPos getPos()`
- `public float getAngle()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetDisplayObjectivePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetDisplayObjectivePacket`

### Fields
- `private final DisplaySlot slot`
- `private final String objectiveName`

### Methods
- `public void write(FriendlyByteBuf p_133141_)`
- `public void handle(ClientGamePacketListener p_133138_)`
- `public DisplaySlot getSlot()`
- `@Nullable public String getObjectiveName()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetEntityDataPacket

*record* `net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket`

### Fields
- `private final int id`
  The field for the id record component.
- `private final List<SynchedEntityData.DataValue<?>> packedItems`
  The field for the packedItems record component.
- `public static final int EOF_MARKER` (= 255)

### Methods
- `private static void pack(List<SynchedEntityData.DataValue<?>> p_253940_,  FriendlyByteBuf p_253901_)`
- `private static List<SynchedEntityData.DataValue<?>> unpack(FriendlyByteBuf p_253726_)`
- `public void write(FriendlyByteBuf p_133158_)`
- `public void handle(ClientGamePacketListener p_133155_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int id()`
  Returns the value of the id record component.
  - returns: the value of the id record component
- `public List<SynchedEntityData.DataValue<?>> packedItems()`
  Returns the value of the packedItems record component.
  - returns: the value of the packedItems record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetEntityLinkPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetEntityLinkPacket`

### Fields
- `private final int sourceId`
- `private final int destId`

### Methods
- `public void write(FriendlyByteBuf p_133174_)`
- `public void handle(ClientGamePacketListener p_133171_)`
- `public int getSourceId()`
- `public int getDestId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetEntityMotionPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket`

### Fields
- `private final int id`
- `private final int xa`
- `private final int ya`
- `private final int za`

### Methods
- `public void write(FriendlyByteBuf p_133194_)`
- `public void handle(ClientGamePacketListener p_133191_)`
- `public int getId()`
- `public int getXa()`
- `public int getYa()`
- `public int getZa()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetEquipmentPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetEquipmentPacket`

### Fields
- `private static final byte CONTINUE_MASK` (= 0x80)
- `private final int entity`
- `private final List<com.mojang.datafixers.util.Pair<EquipmentSlot,ItemStack>> slots`

### Methods
- `public void write(FriendlyByteBuf p_133212_)`
- `public void handle(ClientGamePacketListener p_133209_)`
- `public int getEntity()`
- `public List<com.mojang.datafixers.util.Pair<EquipmentSlot,ItemStack>> getSlots()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetExperiencePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetExperiencePacket`

### Fields
- `private final float experienceProgress`
- `private final int totalExperience`
- `private final int experienceLevel`

### Methods
- `public void write(FriendlyByteBuf p_133230_)`
- `public void handle(ClientGamePacketListener p_133227_)`
- `public float getExperienceProgress()`
- `public int getTotalExperience()`
- `public int getExperienceLevel()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetHealthPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetHealthPacket`

### Fields
- `private final float health`
- `private final int food`
- `private final float saturation`

### Methods
- `public void write(FriendlyByteBuf p_133249_)`
- `public void handle(ClientGamePacketListener p_133246_)`
- `public float getHealth()`
- `public int getFood()`
- `public float getSaturation()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetObjectivePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetObjectivePacket`

### Fields
- `public static final int METHOD_ADD` (= 0)
- `public static final int METHOD_REMOVE` (= 1)
- `public static final int METHOD_CHANGE` (= 2)
- `private final String objectiveName`
- `private final Component displayName`
- `private final ObjectiveCriteria.RenderType renderType`
- `private final int method`

### Methods
- `public void write(FriendlyByteBuf p_133268_)`
- `public void handle(ClientGamePacketListener p_133265_)`
- `public String getObjectiveName()`
- `public Component getDisplayName()`
- `public int getMethod()`
- `public ObjectiveCriteria.RenderType getRenderType()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetPassengersPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetPassengersPacket`

### Fields
- `private final int vehicle`
- `private final int[] passengers`

### Methods
- `public void write(FriendlyByteBuf p_133285_)`
- `public void handle(ClientGamePacketListener p_133282_)`
- `public int[] getPassengers()`
- `public int getVehicle()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetPlayerTeamPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket`

### Fields
- `private static final int METHOD_ADD` (= 0)
- `private static final int METHOD_REMOVE` (= 1)
- `private static final int METHOD_CHANGE` (= 2)
- `private static final int METHOD_JOIN` (= 3)
- `private static final int METHOD_LEAVE` (= 4)
- `private static final int MAX_VISIBILITY_LENGTH` (= 40)
- `private static final int MAX_COLLISION_LENGTH` (= 40)
- `private final int method`
- `private final String name`
- `private final Collection<String> players`
- `private final Optional<ClientboundSetPlayerTeamPacket.Parameters> parameters`

### Methods
- `public static ClientboundSetPlayerTeamPacket createAddOrModifyPacket(PlayerTeam p_179333_,  boolean p_179334_)`
- `public static ClientboundSetPlayerTeamPacket createRemovePacket(PlayerTeam p_179327_)`
- `public static ClientboundSetPlayerTeamPacket createPlayerPacket(PlayerTeam p_179329_,  String p_179330_,  ClientboundSetPlayerTeamPacket.Action p_179331_)`
- `public void write(FriendlyByteBuf p_133313_)`
- `private static boolean shouldHavePlayerList(int p_179325_)`
- `private static boolean shouldHaveParameters(int p_179337_)`
- `@Nullable public ClientboundSetPlayerTeamPacket.Action getPlayerAction()`
- `@Nullable public ClientboundSetPlayerTeamPacket.Action getTeamAction()`
- `public void handle(ClientGamePacketListener p_133310_)`
- `public String getName()`
- `public Collection<String> getPlayers()`
- `public Optional<ClientboundSetPlayerTeamPacket.Parameters> getParameters()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetPlayerTeamPacket.Parameters

*class* `net.minecraft.network.protocol.game.ClientboundSetPlayerTeamPacket.Parameters`

Enclosing class: ClientboundSetPlayerTeamPacket

### Fields
- `private final Component displayName`
- `private final Component playerPrefix`
- `private final Component playerSuffix`
- `private final String nametagVisibility`
- `private final String collisionRule`
- `private final ChatFormatting color`
- `private final int options`

### Methods
- `public Component getDisplayName()`
- `public int getOptions()`
- `public ChatFormatting getColor()`
- `public String getNametagVisibility()`
- `public String getCollisionRule()`
- `public Component getPlayerPrefix()`
- `public Component getPlayerSuffix()`
- `public void write(FriendlyByteBuf p_179365_)`

## ClientboundSetScorePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetScorePacket`

### Fields
- `private final String owner`
- `@Nullable private final String objectiveName`
- `private final int score`
- `private final ServerScoreboard.Method method`

### Methods
- `public void write(FriendlyByteBuf p_133341_)`
- `public void handle(ClientGamePacketListener p_133338_)`
- `public String getOwner()`
- `@Nullable public String getObjectiveName()`
- `public int getScore()`
- `public ServerScoreboard.Method getMethod()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetSimulationDistancePacket

*record* `net.minecraft.network.protocol.game.ClientboundSetSimulationDistancePacket`

### Fields
- `private final int simulationDistance`
  The field for the simulationDistance record component.

### Methods
- `public void write(FriendlyByteBuf p_195802_)`
- `public void handle(ClientGamePacketListener p_195806_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int simulationDistance()`
  Returns the value of the simulationDistance record component.
  - returns: the value of the simulationDistance record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetSubtitleTextPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetSubtitleTextPacket`

### Fields
- `private final Component text`

### Methods
- `public void write(FriendlyByteBuf p_179380_)`
- `public void handle(ClientGamePacketListener p_179384_)`
- `public Component getText()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetTimePacket

*class* `net.minecraft.network.protocol.game.ClientboundSetTimePacket`

### Fields
- `private final long gameTime`
- `private final long dayTime`

### Methods
- `public void write(FriendlyByteBuf p_133360_)`
- `public void handle(ClientGamePacketListener p_133357_)`
- `public long getGameTime()`
- `public long getDayTime()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetTitlesAnimationPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetTitlesAnimationPacket`

### Fields
- `private final int fadeIn`
- `private final int stay`
- `private final int fadeOut`

### Methods
- `public void write(FriendlyByteBuf p_179410_)`
- `public void handle(ClientGamePacketListener p_179414_)`
- `public int getFadeIn()`
- `public int getStay()`
- `public int getFadeOut()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSetTitleTextPacket

*class* `net.minecraft.network.protocol.game.ClientboundSetTitleTextPacket`

### Fields
- `private final Component text`

### Methods
- `public void write(FriendlyByteBuf p_179394_)`
- `public void handle(ClientGamePacketListener p_179398_)`
- `public Component getText()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSoundEntityPacket

*class* `net.minecraft.network.protocol.game.ClientboundSoundEntityPacket`

### Fields
- `private final Holder<SoundEvent> sound`
- `private final SoundSource source`
- `private final int id`
- `private final float volume`
- `private final float pitch`
- `private final long seed`

### Methods
- `public void write(FriendlyByteBuf p_133428_)`
- `public Holder<SoundEvent> getSound()`
- `public SoundSource getSource()`
- `public int getId()`
- `public float getVolume()`
- `public float getPitch()`
- `public long getSeed()`
- `public void handle(ClientGamePacketListener p_133425_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSoundPacket

*class* `net.minecraft.network.protocol.game.ClientboundSoundPacket`

### Fields
- `public static final float LOCATION_ACCURACY` (= 8.0f)
- `private final Holder<SoundEvent> sound`
- `private final SoundSource source`
- `private final int x`
- `private final int y`
- `private final int z`
- `private final float volume`
- `private final float pitch`
- `private final long seed`

### Methods
- `public void write(FriendlyByteBuf p_133457_)`
- `public Holder<SoundEvent> getSound()`
- `public SoundSource getSource()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getVolume()`
- `public float getPitch()`
- `public long getSeed()`
- `public void handle(ClientGamePacketListener p_133454_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundStartConfigurationPacket

*record* `net.minecraft.network.protocol.game.ClientboundStartConfigurationPacket`

### Methods
- `public void write(FriendlyByteBuf p_298888_)`
- `public void handle(ClientGamePacketListener p_298066_)`
- `public ConnectionProtocol nextProtocol()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`

## ClientboundStopSoundPacket

*class* `net.minecraft.network.protocol.game.ClientboundStopSoundPacket`

### Fields
- `private static final int HAS_SOURCE` (= 1)
- `private static final int HAS_SOUND` (= 2)
- `@Nullable private final ResourceLocation name`
- `@Nullable private final SoundSource source`

### Methods
- `public void write(FriendlyByteBuf p_133478_)`
- `@Nullable public ResourceLocation getName()`
- `@Nullable public SoundSource getSource()`
- `public void handle(ClientGamePacketListener p_133475_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundSystemChatPacket

*record* `net.minecraft.network.protocol.game.ClientboundSystemChatPacket`

### Fields
- `private final Component content`
  The field for the content record component.
- `private final boolean overlay`
  The field for the overlay record component.

### Methods
- `public void write(FriendlyByteBuf p_237860_)`
- `public void handle(ClientGamePacketListener p_237864_)`
- `public boolean isSkippable()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public Component content()`
  Returns the value of the content record component.
  - returns: the value of the content record component
- `public boolean overlay()`
  Returns the value of the overlay record component.
  - returns: the value of the overlay record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `nextProtocol`

## ClientboundTabListPacket

*class* `net.minecraft.network.protocol.game.ClientboundTabListPacket`

### Fields
- `private final Component header`
- `private final Component footer`

### Methods
- `public void write(FriendlyByteBuf p_133491_)`
- `public void handle(ClientGamePacketListener p_133488_)`
- `public Component getHeader()`
- `public Component getFooter()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundTagQueryPacket

*class* `net.minecraft.network.protocol.game.ClientboundTagQueryPacket`

### Fields
- `private final int transactionId`
- `@Nullable private final CompoundTag tag`

### Methods
- `public void write(FriendlyByteBuf p_133508_)`
- `public void handle(ClientGamePacketListener p_133505_)`
- `public int getTransactionId()`
- `@Nullable public CompoundTag getTag()`
- `public boolean isSkippable()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `nextProtocol`

## ClientboundTakeItemEntityPacket

*class* `net.minecraft.network.protocol.game.ClientboundTakeItemEntityPacket`

### Fields
- `private final int itemId`
- `private final int playerId`
- `private final int amount`

### Methods
- `public void write(FriendlyByteBuf p_133526_)`
- `public void handle(ClientGamePacketListener p_133523_)`
- `public int getItemId()`
- `public int getPlayerId()`
- `public int getAmount()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundTeleportEntityPacket

*class* `net.minecraft.network.protocol.game.ClientboundTeleportEntityPacket`

### Fields
- `private final int id`
- `private final double x`
- `private final double y`
- `private final double z`
- `private final byte yRot`
- `private final byte xRot`
- `private final boolean onGround`

### Methods
- `public void write(FriendlyByteBuf p_133547_)`
- `public void handle(ClientGamePacketListener p_133544_)`
- `public int getId()`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public byte getyRot()`
- `public byte getxRot()`
- `public boolean isOnGround()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundUpdateAdvancementsPacket

*class* `net.minecraft.network.protocol.game.ClientboundUpdateAdvancementsPacket`

### Fields
- `private final boolean reset`
- `private final List<AdvancementHolder> added`
- `private final Set<ResourceLocation> removed`
- `private final Map<ResourceLocation,AdvancementProgress> progress`

### Methods
- `public void write(FriendlyByteBuf p_133572_)`
- `public void handle(ClientGamePacketListener p_133569_)`
- `public List<AdvancementHolder> getAdded()`
- `public Set<ResourceLocation> getRemoved()`
- `public Map<ResourceLocation,AdvancementProgress> getProgress()`
- `public boolean shouldReset()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundUpdateAttributesPacket

*class* `net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket`

### Fields
- `private final int entityId`
- `private final List<ClientboundUpdateAttributesPacket.AttributeSnapshot> attributes`

### Methods
- `public void write(FriendlyByteBuf p_133590_)`
- `public void handle(ClientGamePacketListener p_133587_)`
- `public int getEntityId()`
- `public List<ClientboundUpdateAttributesPacket.AttributeSnapshot> getValues()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundUpdateAttributesPacket.AttributeSnapshot

*class* `net.minecraft.network.protocol.game.ClientboundUpdateAttributesPacket.AttributeSnapshot`

Enclosing class: ClientboundUpdateAttributesPacket

### Fields
- `private final Attribute attribute`
- `private final double base`
- `private final Collection<AttributeModifier> modifiers`

### Methods
- `public Attribute getAttribute()`
- `public double getBase()`
- `public Collection<AttributeModifier> getModifiers()`

## ClientboundUpdateMobEffectPacket

*class* `net.minecraft.network.protocol.game.ClientboundUpdateMobEffectPacket`

### Fields
- `private static final int FLAG_AMBIENT` (= 1)
- `private static final int FLAG_VISIBLE` (= 2)
- `private static final int FLAG_SHOW_ICON` (= 4)
- `private final int entityId`
- `private final MobEffect effect`
- `private final byte effectAmplifier`
- `private final int effectDurationTicks`
- `private final byte flags`
- `@Nullable private final MobEffectInstance.FactorData factorData`

### Methods
- `public void write(FriendlyByteBuf p_133621_)`
- `public void handle(ClientGamePacketListener p_133618_)`
- `public int getEntityId()`
- `public MobEffect getEffect()`
- `public byte getEffectAmplifier()`
- `public int getEffectDurationTicks()`
- `public boolean isEffectVisible()`
- `public boolean isEffectAmbient()`
- `public boolean effectShowsIcon()`
- `@Nullable public MobEffectInstance.FactorData getFactorData()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientboundUpdateRecipesPacket

*class* `net.minecraft.network.protocol.game.ClientboundUpdateRecipesPacket`

### Fields
- `private final List<RecipeHolder<?>> recipes`

### Methods
- `public void write(FriendlyByteBuf p_133646_)`
- `public void handle(ClientGamePacketListener p_133641_)`
- `public List<RecipeHolder<?>> getRecipes()`
- `private static RecipeHolder<?> fromNetwork(FriendlyByteBuf p_133648_)`
- `public static <T extends Recipe<?>> void toNetwork(FriendlyByteBuf p_179470_,  RecipeHolder<?> p_297340_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ClientGamePacketListener

*interface* `net.minecraft.network.protocol.game.ClientGamePacketListener`

All Superinterfaces: ClientboundPacketListener, ClientCommonPacketListener, ClientPongPacketListener, PacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleAddEntity(ClientboundAddEntityPacket p_131367_)`
- `void handleAddExperienceOrb(ClientboundAddExperienceOrbPacket p_131368_)`
- `void handleAddObjective(ClientboundSetObjectivePacket p_131438_)`
- `void handleAnimate(ClientboundAnimatePacket p_131372_)`
- `void handleHurtAnimation(ClientboundHurtAnimationPacket p_265165_)`
- `void handleAwardStats(ClientboundAwardStatsPacket p_131373_)`
- `void handleAddOrRemoveRecipes(ClientboundRecipePacket p_131417_)`
- `void handleBlockDestruction(ClientboundBlockDestructionPacket p_131375_)`
- `void handleOpenSignEditor(ClientboundOpenSignEditorPacket p_131410_)`
- `void handleBlockEntityData(ClientboundBlockEntityDataPacket p_131376_)`
- `void handleBlockEvent(ClientboundBlockEventPacket p_131377_)`
- `void handleBlockUpdate(ClientboundBlockUpdatePacket p_131378_)`
- `void handleSystemChat(ClientboundSystemChatPacket p_237543_)`
- `void handlePlayerChat(ClientboundPlayerChatPacket p_237540_)`
- `void handleDisguisedChat(ClientboundDisguisedChatPacket p_251057_)`
- `void handleDeleteChat(ClientboundDeleteChatPacket p_241462_)`
- `void handleChunkBlocksUpdate(ClientboundSectionBlocksUpdatePacket p_131423_)`
- `void handleMapItemData(ClientboundMapItemDataPacket p_131404_)`
- `void handleContainerClose(ClientboundContainerClosePacket p_131385_)`
- `void handleContainerContent(ClientboundContainerSetContentPacket p_131386_)`
- `void handleHorseScreenOpen(ClientboundHorseScreenOpenPacket p_131397_)`
- `void handleContainerSetData(ClientboundContainerSetDataPacket p_131387_)`
- `void handleContainerSetSlot(ClientboundContainerSetSlotPacket p_131388_)`
- `void handleEntityEvent(ClientboundEntityEventPacket p_131393_)`
- `void handleEntityLinkPacket(ClientboundSetEntityLinkPacket p_131433_)`
- `void handleSetEntityPassengersPacket(ClientboundSetPassengersPacket p_131439_)`
- `void handleExplosion(ClientboundExplodePacket p_131394_)`
- `void handleGameEvent(ClientboundGameEventPacket p_131396_)`
- `void handleLevelChunkWithLight(ClientboundLevelChunkWithLightPacket p_195622_)`
- `void handleChunksBiomes(ClientboundChunksBiomesPacket p_275451_)`
- `void handleForgetLevelChunk(ClientboundForgetLevelChunkPacket p_131395_)`
- `void handleLevelEvent(ClientboundLevelEventPacket p_131400_)`
- `void handleLogin(ClientboundLoginPacket p_131403_)`
- `void handleMoveEntity(ClientboundMoveEntityPacket p_131406_)`
- `void handleMovePlayer(ClientboundPlayerPositionPacket p_131416_)`
- `void handleParticleEvent(ClientboundLevelParticlesPacket p_131401_)`
- `void handlePlayerAbilities(ClientboundPlayerAbilitiesPacket p_131412_)`
- `void handlePlayerInfoRemove(ClientboundPlayerInfoRemovePacket p_252308_)`
- `void handlePlayerInfoUpdate(ClientboundPlayerInfoUpdatePacket p_248573_)`
- `void handleRemoveEntities(ClientboundRemoveEntitiesPacket p_182700_)`
- `void handleRemoveMobEffect(ClientboundRemoveMobEffectPacket p_131419_)`
- `void handleRespawn(ClientboundRespawnPacket p_131421_)`
- `void handleRotateMob(ClientboundRotateHeadPacket p_131422_)`
- `void handleSetCarriedItem(ClientboundSetCarriedItemPacket p_131427_)`
- `void handleSetDisplayObjective(ClientboundSetDisplayObjectivePacket p_131431_)`
- `void handleSetEntityData(ClientboundSetEntityDataPacket p_131432_)`
- `void handleSetEntityMotion(ClientboundSetEntityMotionPacket p_131434_)`
- `void handleSetEquipment(ClientboundSetEquipmentPacket p_131435_)`
- `void handleSetExperience(ClientboundSetExperiencePacket p_131436_)`
- `void handleSetHealth(ClientboundSetHealthPacket p_131437_)`
- `void handleSetPlayerTeamPacket(ClientboundSetPlayerTeamPacket p_131440_)`
- `void handleSetScore(ClientboundSetScorePacket p_131441_)`
- `void handleSetSpawn(ClientboundSetDefaultSpawnPositionPacket p_131430_)`
- `void handleSetTime(ClientboundSetTimePacket p_131442_)`
- `void handleSoundEvent(ClientboundSoundPacket p_131445_)`
- `void handleSoundEntityEvent(ClientboundSoundEntityPacket p_131444_)`
- `void handleTakeItemEntity(ClientboundTakeItemEntityPacket p_131449_)`
- `void handleTeleportEntity(ClientboundTeleportEntityPacket p_131450_)`
- `void handleUpdateAttributes(ClientboundUpdateAttributesPacket p_131452_)`
- `void handleUpdateMobEffect(ClientboundUpdateMobEffectPacket p_131453_)`
- `void handlePlayerCombatEnd(ClientboundPlayerCombatEndPacket p_178546_)`
- `void handlePlayerCombatEnter(ClientboundPlayerCombatEnterPacket p_178547_)`
- `void handlePlayerCombatKill(ClientboundPlayerCombatKillPacket p_178548_)`
- `void handleChangeDifficulty(ClientboundChangeDifficultyPacket p_131380_)`
- `void handleSetCamera(ClientboundSetCameraPacket p_131426_)`
- `void handleInitializeBorder(ClientboundInitializeBorderPacket p_178544_)`
- `void handleSetBorderLerpSize(ClientboundSetBorderLerpSizePacket p_178552_)`
- `void handleSetBorderSize(ClientboundSetBorderSizePacket p_178553_)`
- `void handleSetBorderWarningDelay(ClientboundSetBorderWarningDelayPacket p_178554_)`
- `void handleSetBorderWarningDistance(ClientboundSetBorderWarningDistancePacket p_178555_)`
- `void handleSetBorderCenter(ClientboundSetBorderCenterPacket p_178551_)`
- `void handleTabListCustomisation(ClientboundTabListPacket p_131447_)`
- `void handleBossUpdate(ClientboundBossEventPacket p_131379_)`
- `void handleItemCooldown(ClientboundCooldownPacket p_131389_)`
- `void handleMoveVehicle(ClientboundMoveVehiclePacket p_131407_)`
- `void handleUpdateAdvancementsPacket(ClientboundUpdateAdvancementsPacket p_131451_)`
- `void handleSelectAdvancementsTab(ClientboundSelectAdvancementsTabPacket p_131424_)`
- `void handlePlaceRecipe(ClientboundPlaceGhostRecipePacket p_131411_)`
- `void handleCommands(ClientboundCommandsPacket p_131383_)`
- `void handleStopSoundEvent(ClientboundStopSoundPacket p_131446_)`
- `void handleCommandSuggestions(ClientboundCommandSuggestionsPacket p_131382_)`
- `void handleUpdateRecipes(ClientboundUpdateRecipesPacket p_131454_)`
- `void handleLookAt(ClientboundPlayerLookAtPacket p_131415_)`
- `void handleTagQueryPacket(ClientboundTagQueryPacket p_131448_)`
- `void handleLightUpdatePacket(ClientboundLightUpdatePacket p_195623_)`
- `void handleOpenBook(ClientboundOpenBookPacket p_131408_)`
- `void handleOpenScreen(ClientboundOpenScreenPacket p_131409_)`
- `void handleMerchantOffers(ClientboundMerchantOffersPacket p_131405_)`
- `void handleSetChunkCacheRadius(ClientboundSetChunkCacheRadiusPacket p_131429_)`
- `void handleSetSimulationDistance(ClientboundSetSimulationDistancePacket p_195624_)`
- `void handleSetChunkCacheCenter(ClientboundSetChunkCacheCenterPacket p_131428_)`
- `void handleBlockChangedAck(ClientboundBlockChangedAckPacket p_237538_)`
- `void setActionBarText(ClientboundSetActionBarTextPacket p_178550_)`
- `void setSubtitleText(ClientboundSetSubtitleTextPacket p_178556_)`
- `void setTitleText(ClientboundSetTitleTextPacket p_178557_)`
- `void setTitlesAnimation(ClientboundSetTitlesAnimationPacket p_178558_)`
- `void handleTitlesClear(ClientboundClearTitlesPacket p_178543_)`
- `void handleServerData(ClientboundServerDataPacket p_237541_)`
- `void handleCustomChatCompletions(ClientboundCustomChatCompletionsPacket p_240770_)`
- `void handleBundlePacket(ClientboundBundlePacket p_265211_)`
- `void handleDamageEvent(ClientboundDamageEventPacket p_270900_)`
- `void handleConfigurationStart(ClientboundStartConfigurationPacket p_298772_)`
- `void handleChunkBatchStart(ClientboundChunkBatchStartPacket p_298767_)`
- `void handleChunkBatchFinished(ClientboundChunkBatchFinishedPacket p_297668_)`

### Inherited methods
- from `net.minecraft.network.ClientboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ClientCommonPacketListener`: `handleCustomPayload`, `handleDisconnect`, `handleKeepAlive`, `handlePing`, `handleResourcePack`, `handleUpdateTags`
- from `net.minecraft.network.ClientPongPacketListener`: `handlePongResponse`
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## CommonPlayerSpawnInfo

*record* `net.minecraft.network.protocol.game.CommonPlayerSpawnInfo`

### Fields
- `private final ResourceKey<DimensionType> dimensionType`
  The field for the dimensionType record component.
- `private final ResourceKey<Level> dimension`
  The field for the dimension record component.
- `private final long seed`
  The field for the seed record component.
- `private final GameType gameType`
  The field for the gameType record component.
- `@Nullable private final GameType previousGameType`
  The field for the previousGameType record component.
- `private final boolean isDebug`
  The field for the isDebug record component.
- `private final boolean isFlat`
  The field for the isFlat record component.
- `private final Optional<GlobalPos> lastDeathLocation`
  The field for the lastDeathLocation record component.
- `private final int portalCooldown`
  The field for the portalCooldown record component.

### Methods
- `public void write(FriendlyByteBuf p_298723_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public ResourceKey<DimensionType> dimensionType()`
  Returns the value of the dimensionType record component.
  - returns: the value of the dimensionType record component
- `public ResourceKey<Level> dimension()`
  Returns the value of the dimension record component.
  - returns: the value of the dimension record component
- `public long seed()`
  Returns the value of the seed record component.
  - returns: the value of the seed record component
- `public GameType gameType()`
  Returns the value of the gameType record component.
  - returns: the value of the gameType record component
- `@Nullable public GameType previousGameType()`
  Returns the value of the previousGameType record component.
  - returns: the value of the previousGameType record component
- `public boolean isDebug()`
  Returns the value of the isDebug record component.
  - returns: the value of the isDebug record component
- `public boolean isFlat()`
  Returns the value of the isFlat record component.
  - returns: the value of the isFlat record component
- `public Optional<GlobalPos> lastDeathLocation()`
  Returns the value of the lastDeathLocation record component.
  - returns: the value of the lastDeathLocation record component
- `public int portalCooldown()`
  Returns the value of the portalCooldown record component.
  - returns: the value of the portalCooldown record component

## DebugEntityNameGenerator

*class* `net.minecraft.network.protocol.game.DebugEntityNameGenerator`

### Fields
- `private static final String[] NAMES_FIRST_PART`
- `private static final String[] NAMES_SECOND_PART`

### Methods
- `public static String getEntityName(Entity p_179487_)`
- `public static String getEntityName(UUID p_133669_)`
- `private static String getRandomString(RandomSource p_237881_,  String[] p_237882_)`
- `private static RandomSource getRandom(UUID p_237884_)`

## DebugPackets

*class* `net.minecraft.network.protocol.game.DebugPackets`

### Fields
- `private static final org.slf4j.Logger LOGGER`

### Methods
- `public static void sendGameTestAddMarker(ServerLevel p_133683_,  BlockPos p_133684_,  String p_133685_,  int p_133686_,  int p_133687_)`
- `public static void sendGameTestClearPacket(ServerLevel p_133675_)`
- `public static void sendPoiPacketsForChunk(ServerLevel p_133677_,  ChunkPos p_133678_)`
- `public static void sendPoiAddedPacket(ServerLevel p_133680_,  BlockPos p_133681_)`
- `public static void sendPoiRemovedPacket(ServerLevel p_133717_,  BlockPos p_133718_)`
- `public static void sendPoiTicketCountPacket(ServerLevel p_133720_,  BlockPos p_133721_)`
- `private static void sendVillageSectionsPacket(ServerLevel p_133723_,  BlockPos p_133724_)`
- `public static void sendPathFindingPacket(Level p_133704_,  Mob p_133705_,  @Nullable  Path p_133706_,  float p_133707_)`
- `public static void sendNeighborsUpdatePacket(Level p_133709_,  BlockPos p_133710_)`
- `public static void sendStructurePacket(WorldGenLevel p_133712_,  StructureStart p_133713_)`
- `public static void sendGoalSelector(Level p_133700_,  Mob p_133701_,  GoalSelector p_133702_)`
- `public static void sendRaids(ServerLevel p_133689_,  Collection<Raid> p_133690_)`
- `public static void sendEntityBrain(LivingEntity p_133696_)`
- `public static void sendBeeInfo(Bee p_133698_)`
- `public static void sendGameEventInfo(Level p_237888_,  GameEvent p_237889_,  Vec3 p_237890_)`
- `public static void sendGameEventListenerInfo(Level p_179508_,  GameEventListener p_179509_)`
- `public static void sendHiveInfo(Level p_179511_,  BlockPos p_179512_,  BlockState p_179513_,  BeehiveBlockEntity p_179514_)`
- `private static List<String> getMemoryDescriptions(LivingEntity p_179496_,  long p_179497_)`
- `private static String getShortDescription(ServerLevel p_179493_,  @Nullable  Object p_179494_)`
- `private static void sendPacketToAllPlayers(ServerLevel p_133692_,  CustomPacketPayload p_298207_)`

## ServerboundAcceptTeleportationPacket

*class* `net.minecraft.network.protocol.game.ServerboundAcceptTeleportationPacket`

### Fields
- `private final int id`

### Methods
- `public void write(FriendlyByteBuf p_133797_)`
- `public void handle(ServerGamePacketListener p_133794_)`
- `public int getId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundBlockEntityTagQuery

*class* `net.minecraft.network.protocol.game.ServerboundBlockEntityTagQuery`

### Fields
- `private final int transactionId`
- `private final BlockPos pos`

### Methods
- `public void write(FriendlyByteBuf p_133812_)`
- `public void handle(ServerGamePacketListener p_133809_)`
- `public int getTransactionId()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundChangeDifficultyPacket

*class* `net.minecraft.network.protocol.game.ServerboundChangeDifficultyPacket`

### Fields
- `private final Difficulty difficulty`

### Methods
- `public void handle(ServerGamePacketListener p_133823_)`
- `public void write(FriendlyByteBuf p_133826_)`
- `public Difficulty getDifficulty()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundChatAckPacket

*record* `net.minecraft.network.protocol.game.ServerboundChatAckPacket`

### Fields
- `private final int offset`
  The field for the offset record component.

### Methods
- `public void write(FriendlyByteBuf p_242345_)`
- `public void handle(ServerGamePacketListener p_242391_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public int offset()`
  Returns the value of the offset record component.
  - returns: the value of the offset record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundChatCommandPacket

*record* `net.minecraft.network.protocol.game.ServerboundChatCommandPacket`

### Fields
- `private final String command`
  The field for the command record component.
- `private final Instant timeStamp`
  The field for the timeStamp record component.
- `private final long salt`
  The field for the salt record component.
- `private final ArgumentSignatures argumentSignatures`
  The field for the argumentSignatures record component.
- `private final LastSeenMessages.Update lastSeenMessages`
  The field for the lastSeenMessages record component.

### Methods
- `public void write(FriendlyByteBuf p_237936_)`
- `public void handle(ServerGamePacketListener p_237940_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String command()`
  Returns the value of the command record component.
  - returns: the value of the command record component
- `public Instant timeStamp()`
  Returns the value of the timeStamp record component.
  - returns: the value of the timeStamp record component
- `public long salt()`
  Returns the value of the salt record component.
  - returns: the value of the salt record component
- `public ArgumentSignatures argumentSignatures()`
  Returns the value of the argumentSignatures record component.
  - returns: the value of the argumentSignatures record component
- `public LastSeenMessages.Update lastSeenMessages()`
  Returns the value of the lastSeenMessages record component.
  - returns: the value of the lastSeenMessages record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundChatPacket

*record* `net.minecraft.network.protocol.game.ServerboundChatPacket`

### Fields
- `private final String message`
  The field for the message record component.
- `private final Instant timeStamp`
  The field for the timeStamp record component.
- `private final long salt`
  The field for the salt record component.
- `@Nullable private final MessageSignature signature`
  The field for the signature record component.
- `private final LastSeenMessages.Update lastSeenMessages`
  The field for the lastSeenMessages record component.

### Methods
- `public void write(FriendlyByteBuf p_133839_)`
- `public void handle(ServerGamePacketListener p_133836_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public String message()`
  Returns the value of the message record component.
  - returns: the value of the message record component
- `public Instant timeStamp()`
  Returns the value of the timeStamp record component.
  - returns: the value of the timeStamp record component
- `public long salt()`
  Returns the value of the salt record component.
  - returns: the value of the salt record component
- `@Nullable public MessageSignature signature()`
  Returns the value of the signature record component.
  - returns: the value of the signature record component
- `public LastSeenMessages.Update lastSeenMessages()`
  Returns the value of the lastSeenMessages record component.
  - returns: the value of the lastSeenMessages record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundChatSessionUpdatePacket

*record* `net.minecraft.network.protocol.game.ServerboundChatSessionUpdatePacket`

### Fields
- `private final RemoteChatSession.Data chatSession`
  The field for the chatSession record component.

### Methods
- `public void write(FriendlyByteBuf p_253690_)`
- `public void handle(ServerGamePacketListener p_253620_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public RemoteChatSession.Data chatSession()`
  Returns the value of the chatSession record component.
  - returns: the value of the chatSession record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundChunkBatchReceivedPacket

*record* `net.minecraft.network.protocol.game.ServerboundChunkBatchReceivedPacket`

### Fields
- `private final float desiredChunksPerTick`
  The field for the desiredChunksPerTick record component.

### Methods
- `public void write(FriendlyByteBuf p_299711_)`
- `public void handle(ServerGamePacketListener p_299816_)`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with '=='.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public float desiredChunksPerTick()`
  Returns the value of the desiredChunksPerTick record component.
  - returns: the value of the desiredChunksPerTick record component

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundClientCommandPacket

*class* `net.minecraft.network.protocol.game.ServerboundClientCommandPacket`

### Fields
- `private final ServerboundClientCommandPacket.Action action`

### Methods
- `public void write(FriendlyByteBuf p_133852_)`
- `public void handle(ServerGamePacketListener p_133849_)`
- `public ServerboundClientCommandPacket.Action getAction()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundCommandSuggestionPacket

*class* `net.minecraft.network.protocol.game.ServerboundCommandSuggestionPacket`

### Fields
- `private final int id`
- `private final String command`

### Methods
- `public void write(FriendlyByteBuf p_133903_)`
- `public void handle(ServerGamePacketListener p_133900_)`
- `public int getId()`
- `public String getCommand()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundConfigurationAcknowledgedPacket

*record* `net.minecraft.network.protocol.game.ServerboundConfigurationAcknowledgedPacket`

### Methods
- `public void write(FriendlyByteBuf p_298084_)`
- `public void handle(ServerGamePacketListener p_297365_)`
- `public ConnectionProtocol nextProtocol()`
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal.
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`

## ServerboundContainerButtonClickPacket

*class* `net.minecraft.network.protocol.game.ServerboundContainerButtonClickPacket`

### Fields
- `private final int containerId`
- `private final int buttonId`

### Methods
- `public void handle(ServerGamePacketListener p_133934_)`
- `public void write(FriendlyByteBuf p_133937_)`
- `public int getContainerId()`
- `public int getButtonId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundContainerClickPacket

*class* `net.minecraft.network.protocol.game.ServerboundContainerClickPacket`

### Fields
- `private static final int MAX_SLOT_COUNT` (= 128)
- `private final int containerId`
- `private final int stateId`
- `private final int slotNum`
- `private final int buttonNum`
- `private final ClickType clickType`
- `private final ItemStack carriedItem`
- `private final it.unimi.dsi.fastutil.ints.Int2ObjectMap<ItemStack> changedSlots`

### Methods
- `public void write(FriendlyByteBuf p_133961_)`
- `public void handle(ServerGamePacketListener p_133958_)`
- `public int getContainerId()`
- `public int getSlotNum()`
- `public int getButtonNum()`
- `public ItemStack getCarriedItem()`
- `public it.unimi.dsi.fastutil.ints.Int2ObjectMap<ItemStack> getChangedSlots()`
- `public ClickType getClickType()`
- `public int getStateId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundContainerClosePacket

*class* `net.minecraft.network.protocol.game.ServerboundContainerClosePacket`

### Fields
- `private final int containerId`

### Methods
- `public void handle(ServerGamePacketListener p_133976_)`
- `public void write(FriendlyByteBuf p_133978_)`
- `public int getContainerId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundEditBookPacket

*class* `net.minecraft.network.protocol.game.ServerboundEditBookPacket`

### Fields
- `public static final int MAX_BYTES_PER_CHAR` (= 4)
- `private static final int TITLE_MAX_CHARS` (= 128)
- `private static final int PAGE_MAX_CHARS` (= 8192)
- `private static final int MAX_PAGES_COUNT` (= 200)
- `private final int slot`
- `private final List<String> pages`
- `private final Optional<String> title`

### Methods
- `public void write(FriendlyByteBuf p_134011_)`
- `public void handle(ServerGamePacketListener p_134008_)`
- `public List<String> getPages()`
- `public Optional<String> getTitle()`
- `public int getSlot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundEntityTagQuery

*class* `net.minecraft.network.protocol.game.ServerboundEntityTagQuery`

### Fields
- `private final int transactionId`
- `private final int entityId`

### Methods
- `public void write(FriendlyByteBuf p_134028_)`
- `public void handle(ServerGamePacketListener p_134025_)`
- `public int getTransactionId()`
- `public int getEntityId()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundInteractPacket

*class* `net.minecraft.network.protocol.game.ServerboundInteractPacket`

### Fields
- `private final int entityId`
- `private final ServerboundInteractPacket.Action action`
- `private final boolean usingSecondaryAction`
- `static final ServerboundInteractPacket.Action ATTACK_ACTION`

### Methods
- `public static ServerboundInteractPacket createAttackPacket(Entity p_179606_,  boolean p_179607_)`
- `public static ServerboundInteractPacket createInteractionPacket(Entity p_179609_,  boolean p_179610_,  InteractionHand p_179611_)`
- `public static ServerboundInteractPacket createInteractionPacket(Entity p_179613_,  boolean p_179614_,  InteractionHand p_179615_,  Vec3 p_179616_)`
- `public void write(FriendlyByteBuf p_134058_)`
- `public void handle(ServerGamePacketListener p_134055_)`
- `@Nullable public Entity getTarget(ServerLevel p_179604_)`
- `public boolean isUsingSecondaryAction()`
- `public void dispatch(ServerboundInteractPacket.Handler p_179618_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundInteractPacket.Action

*interface* `net.minecraft.network.protocol.game.ServerboundInteractPacket.Action`

Enclosing class: ServerboundInteractPacket

### Methods
- `ServerboundInteractPacket.ActionType getType()`
- `void dispatch(ServerboundInteractPacket.Handler p_179626_)`
- `void write(FriendlyByteBuf p_179625_)`

## ServerboundInteractPacket.Handler

*interface* `net.minecraft.network.protocol.game.ServerboundInteractPacket.Handler`

Enclosing class: ServerboundInteractPacket

### Methods
- `void onInteraction(InteractionHand p_179643_)`
- `void onInteraction(InteractionHand p_179644_,  Vec3 p_179645_)`
- `void onAttack()`

## ServerboundInteractPacket.InteractionAction

*class* `net.minecraft.network.protocol.game.ServerboundInteractPacket.InteractionAction`

Enclosing class: ServerboundInteractPacket

### Fields
- `private final InteractionHand hand`

### Methods
- `public ServerboundInteractPacket.ActionType getType()`
- `public void dispatch(ServerboundInteractPacket.Handler p_179655_)`
- `public void write(FriendlyByteBuf p_179653_)`

## ServerboundInteractPacket.InteractionAtLocationAction

*class* `net.minecraft.network.protocol.game.ServerboundInteractPacket.InteractionAtLocationAction`

Enclosing class: ServerboundInteractPacket

### Fields
- `private final InteractionHand hand`
- `private final Vec3 location`

### Methods
- `public ServerboundInteractPacket.ActionType getType()`
- `public void dispatch(ServerboundInteractPacket.Handler p_179667_)`
- `public void write(FriendlyByteBuf p_179665_)`

## ServerboundJigsawGeneratePacket

*class* `net.minecraft.network.protocol.game.ServerboundJigsawGeneratePacket`

### Fields
- `private final BlockPos pos`
- `private final int levels`
- `private final boolean keepJigsaws`

### Methods
- `public void write(FriendlyByteBuf p_134089_)`
- `public void handle(ServerGamePacketListener p_134086_)`
- `public BlockPos getPos()`
- `public int levels()`
- `public boolean keepJigsaws()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundLockDifficultyPacket

*class* `net.minecraft.network.protocol.game.ServerboundLockDifficultyPacket`

### Fields
- `private final boolean locked`

### Methods
- `public void handle(ServerGamePacketListener p_134114_)`
- `public void write(FriendlyByteBuf p_134117_)`
- `public boolean isLocked()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundMovePlayerPacket

*class* `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`

### Fields
- `protected final double x`
- `protected final double y`
- `protected final double z`
- `protected final float yRot`
- `protected final float xRot`
- `protected final boolean onGround`
- `protected final boolean hasPos`
- `protected final boolean hasRot`

### Methods
- `public void handle(ServerGamePacketListener p_134138_)`
- `public double getX(double p_134130_)`
- `public double getY(double p_134141_)`
- `public double getZ(double p_134147_)`
- `public float getYRot(float p_134132_)`
- `public float getXRot(float p_134143_)`
- `public boolean isOnGround()`
- `public boolean hasPosition()`
- `public boolean hasRotation()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`, `write`

## ServerboundMovePlayerPacket.Pos

*class* `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.Pos`

Enclosing class: ServerboundMovePlayerPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `hasPos`, `hasRot`, `onGround`, `x`, `xRot`, `y`, `yRot`, `z`

### Methods
- `public static ServerboundMovePlayerPacket.Pos read(FriendlyByteBuf p_179686_)`
- `public void write(FriendlyByteBuf p_134159_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `getX`, `getXRot`, `getY`, `getYRot`, `getZ`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundMovePlayerPacket.PosRot

*class* `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.PosRot`

Enclosing class: ServerboundMovePlayerPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `hasPos`, `hasRot`, `onGround`, `x`, `xRot`, `y`, `yRot`, `z`

### Methods
- `public static ServerboundMovePlayerPacket.PosRot read(FriendlyByteBuf p_179688_)`
- `public void write(FriendlyByteBuf p_134173_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `getX`, `getXRot`, `getY`, `getYRot`, `getZ`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundMovePlayerPacket.Rot

*class* `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.Rot`

Enclosing class: ServerboundMovePlayerPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `hasPos`, `hasRot`, `onGround`, `x`, `xRot`, `y`, `yRot`, `z`

### Methods
- `public static ServerboundMovePlayerPacket.Rot read(FriendlyByteBuf p_179690_)`
- `public void write(FriendlyByteBuf p_134184_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `getX`, `getXRot`, `getY`, `getYRot`, `getZ`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundMovePlayerPacket.StatusOnly

*class* `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket.StatusOnly`

Enclosing class: ServerboundMovePlayerPacket

### Inherited fields
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `hasPos`, `hasRot`, `onGround`, `x`, `xRot`, `y`, `yRot`, `z`

### Methods
- `public static ServerboundMovePlayerPacket.StatusOnly read(FriendlyByteBuf p_179698_)`
- `public void write(FriendlyByteBuf p_179694_)`

### Inherited methods
- from `net.minecraft.network.protocol.game.ServerboundMovePlayerPacket`: `getX`, `getXRot`, `getY`, `getYRot`, `getZ`, `handle`, `hasPosition`, `hasRotation`, `isOnGround`
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundMoveVehiclePacket

*class* `net.minecraft.network.protocol.game.ServerboundMoveVehiclePacket`

### Fields
- `private final double x`
- `private final double y`
- `private final double z`
- `private final float yRot`
- `private final float xRot`

### Methods
- `public void write(FriendlyByteBuf p_134201_)`
- `public void handle(ServerGamePacketListener p_134198_)`
- `public double getX()`
- `public double getY()`
- `public double getZ()`
- `public float getYRot()`
- `public float getXRot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPaddleBoatPacket

*class* `net.minecraft.network.protocol.game.ServerboundPaddleBoatPacket`

### Fields
- `private final boolean left`
- `private final boolean right`

### Methods
- `public void write(FriendlyByteBuf p_134220_)`
- `public void handle(ServerGamePacketListener p_134217_)`
- `public boolean getLeft()`
- `public boolean getRight()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPickItemPacket

*class* `net.minecraft.network.protocol.game.ServerboundPickItemPacket`

### Fields
- `private final int slot`

### Methods
- `public void write(FriendlyByteBuf p_134234_)`
- `public void handle(ServerGamePacketListener p_134231_)`
- `public int getSlot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPlaceRecipePacket

*class* `net.minecraft.network.protocol.game.ServerboundPlaceRecipePacket`

### Fields
- `private final int containerId`
- `private final ResourceLocation recipe`
- `private final boolean shiftDown`

### Methods
- `public void write(FriendlyByteBuf p_134251_)`
- `public void handle(ServerGamePacketListener p_134248_)`
- `public int getContainerId()`
- `public ResourceLocation getRecipe()`
- `public boolean isShiftDown()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPlayerAbilitiesPacket

*class* `net.minecraft.network.protocol.game.ServerboundPlayerAbilitiesPacket`

### Fields
- `private static final int FLAG_FLYING` (= 2)
- `private final boolean isFlying`

### Methods
- `public void write(FriendlyByteBuf p_134266_)`
- `public void handle(ServerGamePacketListener p_134263_)`
- `public boolean isFlying()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPlayerActionPacket

*class* `net.minecraft.network.protocol.game.ServerboundPlayerActionPacket`

### Fields
- `private final BlockPos pos`
- `private final Direction direction`
- `private final ServerboundPlayerActionPacket.Action action`
- `private final int sequence`

### Methods
- `public void write(FriendlyByteBuf p_134283_)`
- `public void handle(ServerGamePacketListener p_134280_)`
- `public BlockPos getPos()`
- `public Direction getDirection()`
- `public ServerboundPlayerActionPacket.Action getAction()`
- `public int getSequence()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPlayerCommandPacket

*class* `net.minecraft.network.protocol.game.ServerboundPlayerCommandPacket`

### Fields
- `private final int id`
- `private final ServerboundPlayerCommandPacket.Action action`
- `private final int data`

### Methods
- `public void write(FriendlyByteBuf p_134319_)`
- `public void handle(ServerGamePacketListener p_134317_)`
- `public int getId()`
- `public ServerboundPlayerCommandPacket.Action getAction()`
- `public int getData()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundPlayerInputPacket

*class* `net.minecraft.network.protocol.game.ServerboundPlayerInputPacket`

### Fields
- `private static final int FLAG_JUMPING` (= 1)
- `private static final int FLAG_SHIFT_KEY_DOWN` (= 2)
- `private final float xxa`
- `private final float zza`
- `private final boolean isJumping`
- `private final boolean isShiftKeyDown`

### Methods
- `public void write(FriendlyByteBuf p_134357_)`
- `public void handle(ServerGamePacketListener p_134354_)`
- `public float getXxa()`
- `public float getZza()`
- `public boolean isJumping()`
- `public boolean isShiftKeyDown()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundRecipeBookChangeSettingsPacket

*class* `net.minecraft.network.protocol.game.ServerboundRecipeBookChangeSettingsPacket`

### Fields
- `private final RecipeBookType bookType`
- `private final boolean isOpen`
- `private final boolean isFiltering`

### Methods
- `public void write(FriendlyByteBuf p_134377_)`
- `public void handle(ServerGamePacketListener p_134374_)`
- `public RecipeBookType getBookType()`
- `public boolean isOpen()`
- `public boolean isFiltering()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundRecipeBookSeenRecipePacket

*class* `net.minecraft.network.protocol.game.ServerboundRecipeBookSeenRecipePacket`

### Fields
- `private final ResourceLocation recipe`

### Methods
- `public void write(FriendlyByteBuf p_134392_)`
- `public void handle(ServerGamePacketListener p_134389_)`
- `public ResourceLocation getRecipe()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundRenameItemPacket

*class* `net.minecraft.network.protocol.game.ServerboundRenameItemPacket`

### Fields
- `private final String name`

### Methods
- `public void write(FriendlyByteBuf p_134405_)`
- `public void handle(ServerGamePacketListener p_134402_)`
- `public String getName()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSeenAdvancementsPacket

*class* `net.minecraft.network.protocol.game.ServerboundSeenAdvancementsPacket`

### Fields
- `private final ServerboundSeenAdvancementsPacket.Action action`
- `@Nullable private final ResourceLocation tab`

### Methods
- `public static ServerboundSeenAdvancementsPacket openedTab(AdvancementHolder p_300057_)`
- `public static ServerboundSeenAdvancementsPacket closedScreen()`
- `public void write(FriendlyByteBuf p_134446_)`
- `public void handle(ServerGamePacketListener p_134441_)`
- `public ServerboundSeenAdvancementsPacket.Action getAction()`
- `@Nullable public ResourceLocation getTab()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSelectTradePacket

*class* `net.minecraft.network.protocol.game.ServerboundSelectTradePacket`

### Fields
- `private final int item`

### Methods
- `public void write(FriendlyByteBuf p_134471_)`
- `public void handle(ServerGamePacketListener p_134468_)`
- `public int getItem()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetBeaconPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetBeaconPacket`

### Fields
- `private final Optional<MobEffect> primary`
- `private final Optional<MobEffect> secondary`

### Methods
- `public void write(FriendlyByteBuf p_134486_)`
- `public void handle(ServerGamePacketListener p_134483_)`
- `public Optional<MobEffect> getPrimary()`
- `public Optional<MobEffect> getSecondary()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetCarriedItemPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetCarriedItemPacket`

### Fields
- `private final int slot`

### Methods
- `public void write(FriendlyByteBuf p_134500_)`
- `public void handle(ServerGamePacketListener p_134497_)`
- `public int getSlot()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetCommandBlockPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetCommandBlockPacket`

### Fields
- `private static final int FLAG_TRACK_OUTPUT` (= 1)
- `private static final int FLAG_CONDITIONAL` (= 2)
- `private static final int FLAG_AUTOMATIC` (= 4)
- `private final BlockPos pos`
- `private final String command`
- `private final boolean trackOutput`
- `private final boolean conditional`
- `private final boolean automatic`
- `private final CommandBlockEntity.Mode mode`

### Methods
- `public void write(FriendlyByteBuf p_134523_)`
- `public void handle(ServerGamePacketListener p_134520_)`
- `public BlockPos getPos()`
- `public String getCommand()`
- `public boolean isTrackOutput()`
- `public boolean isConditional()`
- `public boolean isAutomatic()`
- `public CommandBlockEntity.Mode getMode()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetCommandMinecartPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetCommandMinecartPacket`

### Fields
- `private final int entity`
- `private final String command`
- `private final boolean trackOutput`

### Methods
- `public void write(FriendlyByteBuf p_134547_)`
- `public void handle(ServerGamePacketListener p_134544_)`
- `@Nullable public BaseCommandBlock getCommandBlock(Level p_134538_)`
- `public String getCommand()`
- `public boolean isTrackOutput()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetCreativeModeSlotPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetCreativeModeSlotPacket`

### Fields
- `private final int slotNum`
- `private final ItemStack itemStack`

### Methods
- `public void handle(ServerGamePacketListener p_134560_)`
- `public void write(FriendlyByteBuf p_134563_)`
- `public int getSlotNum()`
- `public ItemStack getItem()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetJigsawBlockPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetJigsawBlockPacket`

### Fields
- `private final BlockPos pos`
- `private final ResourceLocation name`
- `private final ResourceLocation target`
- `private final ResourceLocation pool`
- `private final String finalState`
- `private final JigsawBlockEntity.JointType joint`

### Methods
- `public void write(FriendlyByteBuf p_134587_)`
- `public void handle(ServerGamePacketListener p_134584_)`
- `public BlockPos getPos()`
- `public ResourceLocation getName()`
- `public ResourceLocation getTarget()`
- `public ResourceLocation getPool()`
- `public String getFinalState()`
- `public JigsawBlockEntity.JointType getJoint()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSetStructureBlockPacket

*class* `net.minecraft.network.protocol.game.ServerboundSetStructureBlockPacket`

### Fields
- `private static final int FLAG_IGNORE_ENTITIES` (= 1)
- `private static final int FLAG_SHOW_AIR` (= 2)
- `private static final int FLAG_SHOW_BOUNDING_BOX` (= 4)
- `private final BlockPos pos`
- `private final StructureBlockEntity.UpdateType updateType`
- `private final StructureMode mode`
- `private final String name`
- `private final BlockPos offset`
- `private final Vec3i size`
- `private final Mirror mirror`
- `private final Rotation rotation`
- `private final String data`
- `private final boolean ignoreEntities`
- `private final boolean showAir`
- `private final boolean showBoundingBox`
- `private final float integrity`
- `private final long seed`

### Methods
- `public void write(FriendlyByteBuf p_134631_)`
- `public void handle(ServerGamePacketListener p_134628_)`
- `public BlockPos getPos()`
- `public StructureBlockEntity.UpdateType getUpdateType()`
- `public StructureMode getMode()`
- `public String getName()`
- `public BlockPos getOffset()`
- `public Vec3i getSize()`
- `public Mirror getMirror()`
- `public Rotation getRotation()`
- `public String getData()`
- `public boolean isIgnoreEntities()`
- `public boolean isShowAir()`
- `public boolean isShowBoundingBox()`
- `public float getIntegrity()`
- `public long getSeed()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSignUpdatePacket

*class* `net.minecraft.network.protocol.game.ServerboundSignUpdatePacket`

### Fields
- `private static final int MAX_STRING_LENGTH` (= 384)
- `private final BlockPos pos`
- `private final String[] lines`
- `private final boolean isFrontText`

### Methods
- `public void write(FriendlyByteBuf p_134662_)`
- `public void handle(ServerGamePacketListener p_134659_)`
- `public BlockPos getPos()`
- `public boolean isFrontText()`
- `public String[] getLines()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundSwingPacket

*class* `net.minecraft.network.protocol.game.ServerboundSwingPacket`

### Fields
- `private final InteractionHand hand`

### Methods
- `public void write(FriendlyByteBuf p_134676_)`
- `public void handle(ServerGamePacketListener p_134673_)`
- `public InteractionHand getHand()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundTeleportToEntityPacket

*class* `net.minecraft.network.protocol.game.ServerboundTeleportToEntityPacket`

### Fields
- `private final UUID uuid`

### Methods
- `public void write(FriendlyByteBuf p_134690_)`
- `public void handle(ServerGamePacketListener p_134688_)`
- `@Nullable public Entity getEntity(ServerLevel p_134682_)`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundUseItemOnPacket

*class* `net.minecraft.network.protocol.game.ServerboundUseItemOnPacket`

### Fields
- `private final BlockHitResult blockHit`
- `private final InteractionHand hand`
- `private final int sequence`

### Methods
- `public void write(FriendlyByteBuf p_134705_)`
- `public void handle(ServerGamePacketListener p_134702_)`
- `public InteractionHand getHand()`
- `public BlockHitResult getHitResult()`
- `public int getSequence()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerboundUseItemPacket

*class* `net.minecraft.network.protocol.game.ServerboundUseItemPacket`

### Fields
- `private final InteractionHand hand`
- `private final int sequence`

### Methods
- `public void write(FriendlyByteBuf p_134719_)`
- `public void handle(ServerGamePacketListener p_134716_)`
- `public InteractionHand getHand()`
- `public int getSequence()`

### Inherited methods
- from `net.minecraft.network.protocol.Packet`: `isSkippable`, `nextProtocol`

## ServerGamePacketListener

*interface* `net.minecraft.network.protocol.game.ServerGamePacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener, ServerCommonPacketListener, ServerPacketListener, ServerPingPacketListener

### Methods
- `default ConnectionProtocol protocol()`
- `void handleAnimate(ServerboundSwingPacket p_133781_)`
- `void handleChat(ServerboundChatPacket p_133743_)`
- `void handleChatCommand(ServerboundChatCommandPacket p_237920_)`
- `void handleChatAck(ServerboundChatAckPacket p_242214_)`
- `void handleClientCommand(ServerboundClientCommandPacket p_133744_)`
- `void handleContainerButtonClick(ServerboundContainerButtonClickPacket p_133748_)`
- `void handleContainerClick(ServerboundContainerClickPacket p_133749_)`
- `void handlePlaceRecipe(ServerboundPlaceRecipePacket p_133762_)`
- `void handleContainerClose(ServerboundContainerClosePacket p_133750_)`
- `void handleInteract(ServerboundInteractPacket p_133754_)`
- `void handleMovePlayer(ServerboundMovePlayerPacket p_133758_)`
- `void handlePlayerAbilities(ServerboundPlayerAbilitiesPacket p_133763_)`
- `void handlePlayerAction(ServerboundPlayerActionPacket p_133764_)`
- `void handlePlayerCommand(ServerboundPlayerCommandPacket p_133765_)`
- `void handlePlayerInput(ServerboundPlayerInputPacket p_133766_)`
- `void handleSetCarriedItem(ServerboundSetCarriedItemPacket p_133774_)`
- `void handleSetCreativeModeSlot(ServerboundSetCreativeModeSlotPacket p_133777_)`
- `void handleSignUpdate(ServerboundSignUpdatePacket p_133780_)`
- `void handleUseItemOn(ServerboundUseItemOnPacket p_133783_)`
- `void handleUseItem(ServerboundUseItemPacket p_133784_)`
- `void handleTeleportToEntityPacket(ServerboundTeleportToEntityPacket p_133782_)`
- `void handlePaddleBoat(ServerboundPaddleBoatPacket p_133760_)`
- `void handleMoveVehicle(ServerboundMoveVehiclePacket p_133759_)`
- `void handleAcceptTeleportPacket(ServerboundAcceptTeleportationPacket p_133740_)`
- `void handleRecipeBookSeenRecipePacket(ServerboundRecipeBookSeenRecipePacket p_133768_)`
- `void handleRecipeBookChangeSettingsPacket(ServerboundRecipeBookChangeSettingsPacket p_133767_)`
- `void handleSeenAdvancements(ServerboundSeenAdvancementsPacket p_133771_)`
- `void handleCustomCommandSuggestions(ServerboundCommandSuggestionPacket p_133746_)`
- `void handleSetCommandBlock(ServerboundSetCommandBlockPacket p_133775_)`
- `void handleSetCommandMinecart(ServerboundSetCommandMinecartPacket p_133776_)`
- `void handlePickItem(ServerboundPickItemPacket p_133761_)`
- `void handleRenameItem(ServerboundRenameItemPacket p_133769_)`
- `void handleSetBeaconPacket(ServerboundSetBeaconPacket p_133773_)`
- `void handleSetStructureBlock(ServerboundSetStructureBlockPacket p_133779_)`
- `void handleSelectTrade(ServerboundSelectTradePacket p_133772_)`
- `void handleEditBook(ServerboundEditBookPacket p_133752_)`
- `void handleEntityTagQuery(ServerboundEntityTagQuery p_133753_)`
- `void handleBlockEntityTagQuery(ServerboundBlockEntityTagQuery p_133741_)`
- `void handleSetJigsawBlock(ServerboundSetJigsawBlockPacket p_133778_)`
- `void handleJigsawGenerate(ServerboundJigsawGeneratePacket p_133755_)`
- `void handleChangeDifficulty(ServerboundChangeDifficultyPacket p_133742_)`
- `void handleLockDifficulty(ServerboundLockDifficultyPacket p_133757_)`
- `void handleChatSessionUpdate(ServerboundChatSessionUpdatePacket p_254226_)`
- `void handleConfigurationAcknowledged(ServerboundConfigurationAcknowledgedPacket p_298498_)`
- `void handleChunkBatchReceived(ServerboundChunkBatchReceivedPacket p_297801_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`
- from `net.minecraft.network.protocol.common.ServerCommonPacketListener`: `handleClientInformation`, `handleCustomPayload`, `handleKeepAlive`, `handlePong`, `handleResourcePackResponse`
- from `net.minecraft.network.protocol.game.ServerPacketListener`: `shouldPropagateHandlingExceptions`
- from `net.minecraft.network.protocol.game.ServerPingPacketListener`: `handlePingRequest`

## ServerPacketListener

*interface* `net.minecraft.network.protocol.game.ServerPacketListener`

All Superinterfaces: PacketListener, ServerboundPacketListener

### Methods
- `default boolean shouldPropagateHandlingExceptions()`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`
- from `net.minecraft.network.ServerboundPacketListener`: `flow`

## ServerPingPacketListener

*interface* `net.minecraft.network.protocol.game.ServerPingPacketListener`

All Superinterfaces: PacketListener

### Methods
- `void handlePingRequest(ServerboundPingRequestPacket p_297526_)`

### Inherited methods
- from `net.minecraft.network.PacketListener`: `flow`, `isAcceptingMessages`, `onDisconnect`, `protocol`, `shouldHandleMessage`, `shouldPropagateHandlingExceptions`

## VecDeltaCodec

*class* `net.minecraft.network.protocol.game.VecDeltaCodec`

### Fields
- `private static final double TRUNCATION_STEPS` (= 4096.0)
- `private Vec3 base`

### Methods
- `@VisibleForTesting static long encode(double p_238018_)`
- `@VisibleForTesting static double decode(long p_238020_)`
- `public Vec3 decode(long p_238022_,  long p_238023_,  long p_238024_)`
- `public long encodeX(Vec3 p_238026_)`
- `public long encodeY(Vec3 p_238028_)`
- `public long encodeZ(Vec3 p_238030_)`
- `public Vec3 delta(Vec3 p_238032_)`
- `public void setBase(Vec3 p_238034_)`
