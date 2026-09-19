# net.minecraft.world.level.levelgen.structure.structures

- [BuriedTreasurePieces](#buriedtreasurepieces)
- [BuriedTreasurePieces.BuriedTreasurePiece](#buriedtreasurepieces.buriedtreasurepiece)
- [BuriedTreasureStructure](#buriedtreasurestructure)
- [Class MineshaftStructure.Type](#class-mineshaftstructure.type)
- [Class OceanRuinStructure.Type](#class-oceanruinstructure.type)
- [Class RuinedPortalPiece.VerticalPlacement](#class-ruinedportalpiece.verticalplacement)
- [Class StrongholdPieces.StrongholdPiece.SmallDoorType](#class-strongholdpieces.strongholdpiece.smalldoortype)
- [DesertPyramidPiece](#desertpyramidpiece)
- [DesertPyramidStructure](#desertpyramidstructure)
- [EndCityPieces](#endcitypieces)
- [EndCityPieces.EndCityPiece](#endcitypieces.endcitypiece)
- [EndCityPieces.SectionGenerator](#endcitypieces.sectiongenerator)
- [EndCityStructure](#endcitystructure)
- [IglooPieces](#igloopieces)
- [IglooPieces.IglooPiece](#igloopieces.igloopiece)
- [IglooStructure](#igloostructure)
- [JigsawStructure](#jigsawstructure)
- [JungleTemplePiece](#jungletemplepiece)
- [JungleTemplePiece.MossStoneSelector](#jungletemplepiece.mossstoneselector)
- [JungleTempleStructure](#jungletemplestructure)
- [MineshaftPieces](#mineshaftpieces)
- [MineshaftPieces.MineShaftCorridor](#mineshaftpieces.mineshaftcorridor)
- [MineshaftPieces.MineShaftCrossing](#mineshaftpieces.mineshaftcrossing)
- [MineshaftPieces.MineShaftPiece](#mineshaftpieces.mineshaftpiece)
- [MineshaftPieces.MineShaftRoom](#mineshaftpieces.mineshaftroom)
- [MineshaftPieces.MineShaftStairs](#mineshaftpieces.mineshaftstairs)
- [MineshaftStructure](#mineshaftstructure)
- [NetherFortressPieces](#netherfortresspieces)
- [NetherFortressPieces.BridgeCrossing](#netherfortresspieces.bridgecrossing)
- [NetherFortressPieces.BridgeEndFiller](#netherfortresspieces.bridgeendfiller)
- [NetherFortressPieces.BridgeStraight](#netherfortresspieces.bridgestraight)
- [NetherFortressPieces.CastleCorridorStairsPiece](#netherfortresspieces.castlecorridorstairspiece)
- [NetherFortressPieces.CastleCorridorTBalconyPiece](#netherfortresspieces.castlecorridortbalconypiece)
- [NetherFortressPieces.CastleEntrance](#netherfortresspieces.castleentrance)
- [NetherFortressPieces.CastleSmallCorridorCrossingPiece](#netherfortresspieces.castlesmallcorridorcrossingpiece)
- [NetherFortressPieces.CastleSmallCorridorLeftTurnPiece](#netherfortresspieces.castlesmallcorridorleftturnpiece)
- [NetherFortressPieces.CastleSmallCorridorPiece](#netherfortresspieces.castlesmallcorridorpiece)
- [NetherFortressPieces.CastleSmallCorridorRightTurnPiece](#netherfortresspieces.castlesmallcorridorrightturnpiece)
- [NetherFortressPieces.CastleStalkRoom](#netherfortresspieces.castlestalkroom)
- [NetherFortressPieces.MonsterThrone](#netherfortresspieces.monsterthrone)
- [NetherFortressPieces.NetherBridgePiece](#netherfortresspieces.netherbridgepiece)
- [NetherFortressPieces.PieceWeight](#netherfortresspieces.pieceweight)
- [NetherFortressPieces.RoomCrossing](#netherfortresspieces.roomcrossing)
- [NetherFortressPieces.StairsRoom](#netherfortresspieces.stairsroom)
- [NetherFortressPieces.StartPiece](#netherfortresspieces.startpiece)
- [NetherFortressStructure](#netherfortressstructure)
- [NetherFossilPieces](#netherfossilpieces)
- [NetherFossilPieces.NetherFossilPiece](#netherfossilpieces.netherfossilpiece)
- [NetherFossilStructure](#netherfossilstructure)
- [OceanMonumentPieces](#oceanmonumentpieces)
- [OceanMonumentPieces.FitDoubleXRoom](#oceanmonumentpieces.fitdoublexroom)
- [OceanMonumentPieces.FitDoubleXYRoom](#oceanmonumentpieces.fitdoublexyroom)
- [OceanMonumentPieces.FitDoubleYRoom](#oceanmonumentpieces.fitdoubleyroom)
- [OceanMonumentPieces.FitDoubleYZRoom](#oceanmonumentpieces.fitdoubleyzroom)
- [OceanMonumentPieces.FitDoubleZRoom](#oceanmonumentpieces.fitdoublezroom)
- [OceanMonumentPieces.FitSimpleRoom](#oceanmonumentpieces.fitsimpleroom)
- [OceanMonumentPieces.FitSimpleTopRoom](#oceanmonumentpieces.fitsimpletoproom)
- [OceanMonumentPieces.MonumentBuilding](#oceanmonumentpieces.monumentbuilding)
- [OceanMonumentPieces.MonumentRoomFitter](#oceanmonumentpieces.monumentroomfitter)
- [OceanMonumentPieces.OceanMonumentCoreRoom](#oceanmonumentpieces.oceanmonumentcoreroom)
- [OceanMonumentPieces.OceanMonumentDoubleXRoom](#oceanmonumentpieces.oceanmonumentdoublexroom)
- [OceanMonumentPieces.OceanMonumentDoubleXYRoom](#oceanmonumentpieces.oceanmonumentdoublexyroom)
- [OceanMonumentPieces.OceanMonumentDoubleYRoom](#oceanmonumentpieces.oceanmonumentdoubleyroom)
- [OceanMonumentPieces.OceanMonumentDoubleYZRoom](#oceanmonumentpieces.oceanmonumentdoubleyzroom)
- [OceanMonumentPieces.OceanMonumentDoubleZRoom](#oceanmonumentpieces.oceanmonumentdoublezroom)
- [OceanMonumentPieces.OceanMonumentEntryRoom](#oceanmonumentpieces.oceanmonumententryroom)
- [OceanMonumentPieces.OceanMonumentPenthouse](#oceanmonumentpieces.oceanmonumentpenthouse)
- [OceanMonumentPieces.OceanMonumentPiece](#oceanmonumentpieces.oceanmonumentpiece)
- [OceanMonumentPieces.OceanMonumentSimpleRoom](#oceanmonumentpieces.oceanmonumentsimpleroom)
- [OceanMonumentPieces.OceanMonumentSimpleTopRoom](#oceanmonumentpieces.oceanmonumentsimpletoproom)
- [OceanMonumentPieces.OceanMonumentWingRoom](#oceanmonumentpieces.oceanmonumentwingroom)
- [OceanMonumentPieces.RoomDefinition](#oceanmonumentpieces.roomdefinition)
- [OceanMonumentStructure](#oceanmonumentstructure)
- [OceanRuinPieces](#oceanruinpieces)
- [OceanRuinPieces.OceanRuinPiece](#oceanruinpieces.oceanruinpiece)
- [OceanRuinStructure](#oceanruinstructure)
- [RuinedPortalPiece](#ruinedportalpiece)
- [RuinedPortalPiece.Properties](#ruinedportalpiece.properties)
- [RuinedPortalStructure](#ruinedportalstructure)
- [RuinedPortalStructure.Setup](#ruinedportalstructure.setup)
- [ShipwreckPieces](#shipwreckpieces)
- [ShipwreckPieces.ShipwreckPiece](#shipwreckpieces.shipwreckpiece)
- [ShipwreckStructure](#shipwreckstructure)
- [StrongholdPieces](#strongholdpieces)
- [StrongholdPieces.ChestCorridor](#strongholdpieces.chestcorridor)
- [StrongholdPieces.FillerCorridor](#strongholdpieces.fillercorridor)
- [StrongholdPieces.FiveCrossing](#strongholdpieces.fivecrossing)
- [StrongholdPieces.LeftTurn](#strongholdpieces.leftturn)
- [StrongholdPieces.Library](#strongholdpieces.library)
- [StrongholdPieces.PieceWeight](#strongholdpieces.pieceweight)
- [StrongholdPieces.PortalRoom](#strongholdpieces.portalroom)
- [StrongholdPieces.PrisonHall](#strongholdpieces.prisonhall)
- [StrongholdPieces.RightTurn](#strongholdpieces.rightturn)
- [StrongholdPieces.RoomCrossing](#strongholdpieces.roomcrossing)
- [StrongholdPieces.SmoothStoneSelector](#strongholdpieces.smoothstoneselector)
- [StrongholdPieces.StairsDown](#strongholdpieces.stairsdown)
- [StrongholdPieces.StartPiece](#strongholdpieces.startpiece)
- [StrongholdPieces.Straight](#strongholdpieces.straight)
- [StrongholdPieces.StraightStairsDown](#strongholdpieces.straightstairsdown)
- [StrongholdPieces.StrongholdPiece](#strongholdpieces.strongholdpiece)
- [StrongholdPieces.Turn](#strongholdpieces.turn)
- [StrongholdStructure](#strongholdstructure)
- [SwampHutPiece](#swamphutpiece)
- [SwampHutStructure](#swamphutstructure)
- [WoodlandMansionPieces](#woodlandmansionpieces)
- [WoodlandMansionPieces.FirstFloorRoomCollection](#woodlandmansionpieces.firstfloorroomcollection)
- [WoodlandMansionPieces.FloorRoomCollection](#woodlandmansionpieces.floorroomcollection)
- [WoodlandMansionPieces.MansionGrid](#woodlandmansionpieces.mansiongrid)
- [WoodlandMansionPieces.MansionPiecePlacer](#woodlandmansionpieces.mansionpieceplacer)
- [WoodlandMansionPieces.PlacementData](#woodlandmansionpieces.placementdata)
- [WoodlandMansionPieces.SecondFloorRoomCollection](#woodlandmansionpieces.secondfloorroomcollection)
- [WoodlandMansionPieces.SimpleGrid](#woodlandmansionpieces.simplegrid)
- [WoodlandMansionPieces.ThirdFloorRoomCollection](#woodlandmansionpieces.thirdfloorroomcollection)
- [WoodlandMansionPieces.WoodlandMansionPiece](#woodlandmansionpieces.woodlandmansionpiece)
- [WoodlandMansionStructure](#woodlandmansionstructure)
## BuriedTreasurePieces

*class* `net.minecraft.world.level.levelgen.structure.structures.BuriedTreasurePieces`

## BuriedTreasurePieces.BuriedTreasurePiece

*class* `net.minecraft.world.level.levelgen.structure.structures.BuriedTreasurePieces.BuriedTreasurePiece`

Enclosing class: BuriedTreasurePieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227378_,  CompoundTag p_227379_)`
- `public void postProcess(WorldGenLevel p_227370_,  StructureManager p_227371_,  ChunkGenerator p_227372_,  RandomSource p_227373_,  BoundingBox p_227374_,  ChunkPos p_227375_,  BlockPos p_227376_)`
- `private boolean isLiquid(BlockState p_227381_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## BuriedTreasureStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.BuriedTreasureStructure`

### Fields
- `public static final com.mojang.serialization.Codec<BuriedTreasureStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_227387_)`
- `private static void generatePieces(StructurePiecesBuilder p_227392_,  Structure.GenerationContext p_227393_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## Class MineshaftStructure.Type

*enum* `net.minecraft.world.level.levelgen.structure.structures.Class MineshaftStructure.Type`

Enclosing class: MineshaftStructure

### Fields
- `public static final com.mojang.serialization.Codec<MineshaftStructure.Type> CODEC`
- `private static final IntFunction<MineshaftStructure.Type> BY_ID`
- `private final String name`
- `private final BlockState woodState`
- `private final BlockState planksState`
- `private final BlockState fenceState`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static MineshaftStructure.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static MineshaftStructure.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public static MineshaftStructure.Type byId(int p_227991_)`
- `public BlockState getWoodState()`
- `public BlockState getPlanksState()`
- `public BlockState getFenceState()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class OceanRuinStructure.Type

*enum* `net.minecraft.world.level.levelgen.structure.structures.Class OceanRuinStructure.Type`

Enclosing class: OceanRuinStructure

### Fields
- `public static final com.mojang.serialization.Codec<OceanRuinStructure.Type> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static OceanRuinStructure.Type[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static OceanRuinStructure.Type valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class RuinedPortalPiece.VerticalPlacement

*enum* `net.minecraft.world.level.levelgen.structure.structures.Class RuinedPortalPiece.VerticalPlacement`

Enclosing class: RuinedPortalPiece

### Fields
- `public static final StringRepresentable.EnumCodec<RuinedPortalPiece.VerticalPlacement> CODEC`
- `private final String name`

### Inherited fields
- from `net.minecraft.util.StringRepresentable`: `PRE_BUILT_MAP_THRESHOLD`

### Methods
- `public static RuinedPortalPiece.VerticalPlacement[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static RuinedPortalPiece.VerticalPlacement valueOf(String name)`
  Returns the enum constant of this class with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this class. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: IllegalArgumentException - if this enum class has no constant with the specified name
  - throws: NullPointerException - if the argument is null
- `public String getName()`
- `public static RuinedPortalPiece.VerticalPlacement byName(String p_229243_)`
- `public String getSerializedName()`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `describeConstable`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## Class StrongholdPieces.StrongholdPiece.SmallDoorType

*enum* `net.minecraft.world.level.levelgen.structure.structures.Class StrongholdPieces.StrongholdPiece.SmallDoorType`

Enclosing class: StrongholdPieces.StrongholdPiece

### Methods
- `public static StrongholdPieces.StrongholdPiece.SmallDoorType[] values()`
  Returns an array containing the constants of this enum class, in
  the order they are declared.
  - returns: an array containing the constants of this enum class, in the order they are declared
- `public static StrongholdPieces.StrongholdPiece.SmallDoorType valueOf(String name)`
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

## DesertPyramidPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.DesertPyramidPiece`

### Fields
- `public static final int WIDTH` (= 21)
- `public static final int DEPTH` (= 21)
- `private final boolean[] hasPlacedChest`
- `private final List<BlockPos> potentialSuspiciousSandWorldPositions`
- `private BlockPos randomCollapsedRoofPos`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`: `depth`, `height`, `heightPosition`, `width`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227413_,  CompoundTag p_227414_)`
- `public void postProcess(WorldGenLevel p_227405_,  StructureManager p_227406_,  ChunkGenerator p_227407_,  RandomSource p_227408_,  BoundingBox p_227409_,  ChunkPos p_227410_,  BlockPos p_227411_)`
- `private void addCellar(WorldGenLevel p_272769_,  BoundingBox p_273155_)`
- `private void addCellarStairs(BlockPos p_272997_,  WorldGenLevel p_272699_,  BoundingBox p_273559_)`
- `private void addCellarRoom(BlockPos p_272733_,  WorldGenLevel p_273390_,  BoundingBox p_273517_)`
- `private void placeSand(int p_279401_,  int p_279451_,  int p_279265_)`
- `private void placeSandBox(int p_279483_,  int p_279321_,  int p_279271_,  int p_279471_,  int p_279229_,  int p_279111_)`
- `private void placeCollapsedRoofPiece(WorldGenLevel p_272965_,  int p_272618_,  int p_273415_,  int p_273110_,  BoundingBox p_272645_)`
- `private void placeCollapsedRoof(WorldGenLevel p_273438_,  BoundingBox p_273058_,  int p_272638_,  int p_272826_,  int p_273026_,  int p_272750_,  int p_272639_)`
- `public List<BlockPos> getPotentialSuspiciousSandWorldPositions()`
- `public BlockPos getRandomCollapsedRoofPos()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`: `updateAverageGroundHeight`, `updateHeightPositionToLowestGroundHeight`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## DesertPyramidStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.DesertPyramidStructure`

### Fields
- `public static final com.mojang.serialization.Codec<DesertPyramidStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public void afterPlace(WorldGenLevel p_273644_,  StructureManager p_272615_,  ChunkGenerator p_273655_,  RandomSource p_272939_,  BoundingBox p_273179_,  ChunkPos p_273334_,  PiecesContainer p_273575_)`
- `private static void placeSuspiciousSand(BoundingBox p_279472_,  WorldGenLevel p_279193_,  BlockPos p_279136_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.SinglePieceStructure`: `findGenerationPoint`
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## EndCityPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.EndCityPieces`

### Fields
- `private static final int MAX_GEN_DEPTH` (= 8)
- `static final EndCityPieces.SectionGenerator HOUSE_TOWER_GENERATOR`
- `static final List<Tuple<Rotation,BlockPos>> TOWER_BRIDGES`
- `static final EndCityPieces.SectionGenerator TOWER_GENERATOR`
- `static final EndCityPieces.SectionGenerator TOWER_BRIDGE_GENERATOR`
- `static final List<Tuple<Rotation,BlockPos>> FAT_TOWER_BRIDGES`
- `static final EndCityPieces.SectionGenerator FAT_TOWER_GENERATOR`

### Methods
- `static EndCityPieces.EndCityPiece addPiece(StructureTemplateManager p_227430_,  EndCityPieces.EndCityPiece p_227431_,  BlockPos p_227432_,  String p_227433_,  Rotation p_227434_,  boolean p_227435_)`
- `public static void startHouseTower(StructureTemplateManager p_227445_,  BlockPos p_227446_,  Rotation p_227447_,  List<StructurePiece> p_227448_,  RandomSource p_227449_)`
- `static EndCityPieces.EndCityPiece addHelper(List<StructurePiece> p_227451_,  EndCityPieces.EndCityPiece p_227452_)`
- `static boolean recursiveChildren(StructureTemplateManager p_227437_,  EndCityPieces.SectionGenerator p_227438_,  int p_227439_,  EndCityPieces.EndCityPiece p_227440_,  BlockPos p_227441_,  List<StructurePiece> p_227442_,  RandomSource p_227443_)`

## EndCityPieces.EndCityPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.EndCityPieces.EndCityPiece`

Enclosing class: EndCityPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `private static StructurePlaceSettings makeSettings(boolean p_227514_,  Rotation p_227515_)`
- `protected ResourceLocation makeTemplateLocation()`
- `private static ResourceLocation makeResourceLocation(String p_227503_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227500_,  CompoundTag p_227501_)`
- `protected void handleDataMarker(String p_227505_,  BlockPos p_227506_,  ServerLevelAccessor p_227507_,  RandomSource p_227508_,  BoundingBox p_227509_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `move`, `placeSettings`, `postProcess`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## EndCityPieces.SectionGenerator

*interface* `net.minecraft.world.level.levelgen.structure.structures.EndCityPieces.SectionGenerator`

Enclosing class: EndCityPieces

### Methods
- `void init()`
- `boolean generate(StructureTemplateManager p_227517_,  int p_227518_,  EndCityPieces.EndCityPiece p_227519_,  BlockPos p_227520_,  List<StructurePiece> p_227521_,  RandomSource p_227522_)`

## EndCityStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.EndCityStructure`

### Fields
- `public static final com.mojang.serialization.Codec<EndCityStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_227528_)`
- `private void generatePieces(StructurePiecesBuilder p_227530_,  BlockPos p_227531_,  Rotation p_227532_,  Structure.GenerationContext p_227533_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## IglooPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.IglooPieces`

### Fields
- `public static final int GENERATION_HEIGHT` (= 90)
- `static final ResourceLocation STRUCTURE_LOCATION_IGLOO`
- `private static final ResourceLocation STRUCTURE_LOCATION_LADDER`
- `private static final ResourceLocation STRUCTURE_LOCATION_LABORATORY`
- `static final Map<ResourceLocation,BlockPos> PIVOTS`
- `static final Map<ResourceLocation,BlockPos> OFFSETS`

### Methods
- `public static void addPieces(StructureTemplateManager p_227549_,  BlockPos p_227550_,  Rotation p_227551_,  StructurePieceAccessor p_227552_,  RandomSource p_227553_)`

## IglooPieces.IglooPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.IglooPieces.IglooPiece`

Enclosing class: IglooPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `private static StructurePlaceSettings makeSettings(Rotation p_227576_,  ResourceLocation p_227577_)`
- `private static BlockPos makePosition(ResourceLocation p_227564_,  BlockPos p_227565_,  int p_227566_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227579_,  CompoundTag p_227580_)`
- `protected void handleDataMarker(String p_227582_,  BlockPos p_227583_,  ServerLevelAccessor p_227584_,  RandomSource p_227585_,  BoundingBox p_227586_)`
- `public void postProcess(WorldGenLevel p_227568_,  StructureManager p_227569_,  ChunkGenerator p_227570_,  RandomSource p_227571_,  BoundingBox p_227572_,  ChunkPos p_227573_,  BlockPos p_227574_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `makeTemplateLocation`, `move`, `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## IglooStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.IglooStructure`

### Fields
- `public static final com.mojang.serialization.Codec<IglooStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_227595_)`
- `private void generatePieces(StructurePiecesBuilder p_227600_,  Structure.GenerationContext p_227601_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## JigsawStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.JigsawStructure`

### Fields
- `public static final int MAX_TOTAL_STRUCTURE_RANGE` (= 128)
- `public static final com.mojang.serialization.Codec<JigsawStructure> CODEC`
- `private final Holder<StructureTemplatePool> startPool`
- `private final Optional<ResourceLocation> startJigsawName`
- `private final int maxDepth`
- `private final HeightProvider startHeight`
- `private final boolean useExpansionHack`
- `private final Optional<Heightmap.Types> projectStartToHeightmap`
- `private final int maxDistanceFromCenter`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `private static com.mojang.serialization.DataResult<JigsawStructure> verifyRange(JigsawStructure p_286886_)`
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_227636_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## JungleTemplePiece

*class* `net.minecraft.world.level.levelgen.structure.structures.JungleTemplePiece`

### Fields
- `public static final int WIDTH` (= 12)
- `public static final int DEPTH` (= 15)
- `private boolean placedMainChest`
- `private boolean placedHiddenChest`
- `private boolean placedTrap1`
- `private boolean placedTrap2`
- `private static final JungleTemplePiece.MossStoneSelector STONE_SELECTOR`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`: `depth`, `height`, `heightPosition`, `width`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227682_,  CompoundTag p_227683_)`
- `public void postProcess(WorldGenLevel p_227674_,  StructureManager p_227675_,  ChunkGenerator p_227676_,  RandomSource p_227677_,  BoundingBox p_227678_,  ChunkPos p_227679_,  BlockPos p_227680_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`: `updateAverageGroundHeight`, `updateHeightPositionToLowestGroundHeight`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## JungleTemplePiece.MossStoneSelector

*class* `net.minecraft.world.level.levelgen.structure.structures.JungleTemplePiece.MossStoneSelector`

Enclosing class: JungleTemplePiece

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece.BlockSelector`: `next`

### Methods
- `public void next(RandomSource p_227686_,  int p_227687_,  int p_227688_,  int p_227689_,  boolean p_227690_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece.BlockSelector`: `getNext`

## JungleTempleStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.JungleTempleStructure`

### Fields
- `public static final com.mojang.serialization.Codec<JungleTempleStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.SinglePieceStructure`: `findGenerationPoint`
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## MineshaftPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces`

### Fields
- `static final org.slf4j.Logger LOGGER`
- `private static final int DEFAULT_SHAFT_WIDTH` (= 3)
- `private static final int DEFAULT_SHAFT_HEIGHT` (= 3)
- `private static final int DEFAULT_SHAFT_LENGTH` (= 5)
- `private static final int MAX_PILLAR_HEIGHT` (= 20)
- `private static final int MAX_CHAIN_HEIGHT` (= 50)
- `private static final int MAX_DEPTH` (= 8)
- `public static final int MAGIC_START_Y` (= 50)

### Methods
- `private static MineshaftPieces.MineShaftPiece createRandomShaftPiece(StructurePieceAccessor p_227716_,  RandomSource p_227717_,  int p_227718_,  int p_227719_,  int p_227720_,  @Nullable  Direction p_227721_,  int p_227722_,  MineshaftStructure.Type p_227723_)`
- `static MineshaftPieces.MineShaftPiece generateAndAddPiece(StructurePiece p_227707_,  StructurePieceAccessor p_227708_,  RandomSource p_227709_,  int p_227710_,  int p_227711_,  int p_227712_,  Direction p_227713_,  int p_227714_)`

## MineshaftPieces.MineShaftCorridor

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftCorridor`

Enclosing class: MineshaftPieces

### Fields
- `private final boolean hasRails`
- `private final boolean spiderCorridor`
- `private boolean hasPlacedSpider`
- `private final int numSections`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `type`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227806_,  CompoundTag p_227807_)`
- `@Nullable public static BoundingBox findCorridorSize(StructurePieceAccessor p_227799_,  RandomSource p_227800_,  int p_227801_,  int p_227802_,  int p_227803_,  Direction p_227804_)`
- `public void addChildren(StructurePiece p_227795_,  StructurePieceAccessor p_227796_,  RandomSource p_227797_)`
- `protected boolean createChest(WorldGenLevel p_227787_,  BoundingBox p_227788_,  RandomSource p_227789_,  int p_227790_,  int p_227791_,  int p_227792_,  ResourceLocation p_227793_)`
- `public void postProcess(WorldGenLevel p_227743_,  StructureManager p_227744_,  ChunkGenerator p_227745_,  RandomSource p_227746_,  BoundingBox p_227747_,  ChunkPos p_227748_,  BlockPos p_227749_)`
- `private void placeDoubleLowerOrUpperSupport(WorldGenLevel p_227757_,  BoundingBox p_227758_,  int p_227759_,  int p_227760_,  int p_227761_)`
- `protected void fillColumnDown(WorldGenLevel p_227813_,  BlockState p_227814_,  int p_227815_,  int p_227816_,  int p_227817_,  BoundingBox p_227818_)`
- `protected void fillPillarDownOrChainUp(WorldGenLevel p_227820_,  BlockState p_227821_,  int p_227822_,  int p_227823_,  int p_227824_,  BoundingBox p_227825_)`
- `private static void fillColumnBetween(WorldGenLevel p_227751_,  BlockState p_227752_,  BlockPos.MutableBlockPos p_227753_,  int p_227754_,  int p_227755_)`
- `private boolean canPlaceColumnOnTopOf(LevelReader p_227739_,  BlockPos p_227740_,  BlockState p_227741_)`
- `private boolean canHangChainBelow(LevelReader p_227809_,  BlockPos p_227810_,  BlockState p_227811_)`
- `private void placeSupport(WorldGenLevel p_227770_,  BoundingBox p_227771_,  int p_227772_,  int p_227773_,  int p_227774_,  int p_227775_,  int p_227776_,  RandomSource p_227777_)`
- `private void maybePlaceCobWeb(WorldGenLevel p_227779_,  BoundingBox p_227780_,  RandomSource p_227781_,  float p_227782_,  int p_227783_,  int p_227784_,  int p_227785_)`
- `private boolean hasSturdyNeighbours(WorldGenLevel p_227763_,  BoundingBox p_227764_,  int p_227765_,  int p_227766_,  int p_227767_,  int p_227768_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `canBeReplaced`, `isInInvalidLocation`, `isSupportingBox`, `setPlanksBlock`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `createBoundingBox`, `createChest`, `createDispenser`, `createTag`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## MineshaftPieces.MineShaftCrossing

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftCrossing`

Enclosing class: MineshaftPieces

### Fields
- `private final Direction direction`
- `private final boolean isTwoFloored`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `type`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227862_,  CompoundTag p_227863_)`
- `@Nullable public static BoundingBox findCrossing(StructurePieceAccessor p_227855_,  RandomSource p_227856_,  int p_227857_,  int p_227858_,  int p_227859_,  Direction p_227860_)`
- `public void addChildren(StructurePiece p_227851_,  StructurePieceAccessor p_227852_,  RandomSource p_227853_)`
- `public void postProcess(WorldGenLevel p_227836_,  StructureManager p_227837_,  ChunkGenerator p_227838_,  RandomSource p_227839_,  BoundingBox p_227840_,  ChunkPos p_227841_,  BlockPos p_227842_)`
- `private void placeSupportPillar(WorldGenLevel p_227844_,  BoundingBox p_227845_,  int p_227846_,  int p_227847_,  int p_227848_,  int p_227849_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `canBeReplaced`, `isInInvalidLocation`, `isSupportingBox`, `setPlanksBlock`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## MineshaftPieces.MineShaftPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`

Enclosing class: MineshaftPieces

### Fields
- `protected MineshaftStructure.Type type`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected boolean canBeReplaced(LevelReader p_227885_,  int p_227886_,  int p_227887_,  int p_227888_,  BoundingBox p_227889_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227898_,  CompoundTag p_227899_)`
- `protected boolean isSupportingBox(BlockGetter p_227875_,  BoundingBox p_227876_,  int p_227877_,  int p_227878_,  int p_227879_,  int p_227880_)`
- `protected boolean isInInvalidLocation(LevelAccessor p_227882_,  BoundingBox p_227883_)`
- `protected void setPlanksBlock(WorldGenLevel p_227891_,  BoundingBox p_227892_,  BlockState p_227893_,  int p_227894_,  int p_227895_,  int p_227896_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `postProcess`, `reorient`, `setGenDepth`, `setOrientation`

## MineshaftPieces.MineShaftRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftRoom`

Enclosing class: MineshaftPieces

### Fields
- `private final List<BoundingBox> childEntranceBoxes`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `type`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_227922_,  StructurePieceAccessor p_227923_,  RandomSource p_227924_)`
- `public void postProcess(WorldGenLevel p_227914_,  StructureManager p_227915_,  ChunkGenerator p_227916_,  RandomSource p_227917_,  BoundingBox p_227918_,  ChunkPos p_227919_,  BlockPos p_227920_)`
- `public void move(int p_227910_,  int p_227911_,  int p_227912_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_227926_,  CompoundTag p_227927_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `canBeReplaced`, `isInInvalidLocation`, `isSupportingBox`, `setPlanksBlock`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## MineshaftPieces.MineShaftStairs

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftStairs`

Enclosing class: MineshaftPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `type`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `@Nullable public static BoundingBox findStairs(StructurePieceAccessor p_227951_,  RandomSource p_227952_,  int p_227953_,  int p_227954_,  int p_227955_,  Direction p_227956_)`
- `public void addChildren(StructurePiece p_227947_,  StructurePieceAccessor p_227948_,  RandomSource p_227949_)`
- `public void postProcess(WorldGenLevel p_227939_,  StructureManager p_227940_,  ChunkGenerator p_227941_,  RandomSource p_227942_,  BoundingBox p_227943_,  ChunkPos p_227944_,  BlockPos p_227945_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.MineshaftPieces.MineShaftPiece`: `addAdditionalSaveData`, `canBeReplaced`, `isInInvalidLocation`, `isSupportingBox`, `setPlanksBlock`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## MineshaftStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.MineshaftStructure`

### Fields
- `public static final com.mojang.serialization.Codec<MineshaftStructure> CODEC`
- `private final MineshaftStructure.Type type`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_227964_)`
- `private int generatePiecesAndAdjust(StructurePiecesBuilder p_227966_,  Structure.GenerationContext p_227967_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## NetherFortressPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces`

### Fields
- `private static final int MAX_DEPTH` (= 30)
- `private static final int LOWEST_Y_POSITION` (= 10)
- `public static final int MAGIC_START_Y` (= 64)
- `static final NetherFortressPieces.PieceWeight[] BRIDGE_PIECE_WEIGHTS`
- `static final NetherFortressPieces.PieceWeight[] CASTLE_PIECE_WEIGHTS`

### Methods
- `static NetherFortressPieces.NetherBridgePiece findAndCreateBridgePieceFactory(NetherFortressPieces.PieceWeight p_228008_,  StructurePieceAccessor p_228009_,  RandomSource p_228010_,  int p_228011_,  int p_228012_,  int p_228013_,  Direction p_228014_,  int p_228015_)`

## NetherFortressPieces.BridgeCrossing

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.BridgeCrossing`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 19)
- `private static final int HEIGHT` (= 10)
- `private static final int DEPTH` (= 19)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228043_,  StructurePieceAccessor p_228044_,  RandomSource p_228045_)`
- `public static NetherFortressPieces.BridgeCrossing createPiece(StructurePieceAccessor p_228047_,  int p_228048_,  int p_228049_,  int p_228050_,  Direction p_228051_,  int p_228052_)`
- `public void postProcess(WorldGenLevel p_228035_,  StructureManager p_228036_,  ChunkGenerator p_228037_,  RandomSource p_228038_,  BoundingBox p_228039_,  ChunkPos p_228040_,  BlockPos p_228041_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.BridgeEndFiller

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.BridgeEndFiller`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 10)
- `private static final int DEPTH` (= 8)
- `private final int selfSeed`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public static NetherFortressPieces.BridgeEndFiller createPiece(StructurePieceAccessor p_228073_,  RandomSource p_228074_,  int p_228075_,  int p_228076_,  int p_228077_,  Direction p_228078_,  int p_228079_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228081_,  CompoundTag p_228082_)`
- `public void postProcess(WorldGenLevel p_228065_,  StructureManager p_228066_,  ChunkGenerator p_228067_,  RandomSource p_228068_,  BoundingBox p_228069_,  ChunkPos p_228070_,  BlockPos p_228071_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.BridgeStraight

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.BridgeStraight`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 10)
- `private static final int DEPTH` (= 19)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228102_,  StructurePieceAccessor p_228103_,  RandomSource p_228104_)`
- `public static NetherFortressPieces.BridgeStraight createPiece(StructurePieceAccessor p_228106_,  RandomSource p_228107_,  int p_228108_,  int p_228109_,  int p_228110_,  Direction p_228111_,  int p_228112_)`
- `public void postProcess(WorldGenLevel p_228094_,  StructureManager p_228095_,  ChunkGenerator p_228096_,  RandomSource p_228097_,  BoundingBox p_228098_,  ChunkPos p_228099_,  BlockPos p_228100_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleCorridorStairsPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleCorridorStairsPiece`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 14)
- `private static final int DEPTH` (= 10)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228131_,  StructurePieceAccessor p_228132_,  RandomSource p_228133_)`
- `public static NetherFortressPieces.CastleCorridorStairsPiece createPiece(StructurePieceAccessor p_228135_,  int p_228136_,  int p_228137_,  int p_228138_,  Direction p_228139_,  int p_228140_)`
- `public void postProcess(WorldGenLevel p_228123_,  StructureManager p_228124_,  ChunkGenerator p_228125_,  RandomSource p_228126_,  BoundingBox p_228127_,  ChunkPos p_228128_,  BlockPos p_228129_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleCorridorTBalconyPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleCorridorTBalconyPiece`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 9)
- `private static final int HEIGHT` (= 7)
- `private static final int DEPTH` (= 9)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228159_,  StructurePieceAccessor p_228160_,  RandomSource p_228161_)`
- `public static NetherFortressPieces.CastleCorridorTBalconyPiece createPiece(StructurePieceAccessor p_228163_,  int p_228164_,  int p_228165_,  int p_228166_,  Direction p_228167_,  int p_228168_)`
- `public void postProcess(WorldGenLevel p_228151_,  StructureManager p_228152_,  ChunkGenerator p_228153_,  RandomSource p_228154_,  BoundingBox p_228155_,  ChunkPos p_228156_,  BlockPos p_228157_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleEntrance

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleEntrance`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 13)
- `private static final int HEIGHT` (= 14)
- `private static final int DEPTH` (= 13)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228188_,  StructurePieceAccessor p_228189_,  RandomSource p_228190_)`
- `public static NetherFortressPieces.CastleEntrance createPiece(StructurePieceAccessor p_228192_,  RandomSource p_228193_,  int p_228194_,  int p_228195_,  int p_228196_,  Direction p_228197_,  int p_228198_)`
- `public void postProcess(WorldGenLevel p_228180_,  StructureManager p_228181_,  ChunkGenerator p_228182_,  RandomSource p_228183_,  BoundingBox p_228184_,  ChunkPos p_228185_,  BlockPos p_228186_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleSmallCorridorCrossingPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleSmallCorridorCrossingPiece`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 7)
- `private static final int DEPTH` (= 5)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228217_,  StructurePieceAccessor p_228218_,  RandomSource p_228219_)`
- `public static NetherFortressPieces.CastleSmallCorridorCrossingPiece createPiece(StructurePieceAccessor p_228221_,  int p_228222_,  int p_228223_,  int p_228224_,  Direction p_228225_,  int p_228226_)`
- `public void postProcess(WorldGenLevel p_228209_,  StructureManager p_228210_,  ChunkGenerator p_228211_,  RandomSource p_228212_,  BoundingBox p_228213_,  ChunkPos p_228214_,  BlockPos p_228215_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleSmallCorridorLeftTurnPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleSmallCorridorLeftTurnPiece`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 7)
- `private static final int DEPTH` (= 5)
- `private boolean isNeedingChest`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228259_,  CompoundTag p_228260_)`
- `public void addChildren(StructurePiece p_228247_,  StructurePieceAccessor p_228248_,  RandomSource p_228249_)`
- `public static NetherFortressPieces.CastleSmallCorridorLeftTurnPiece createPiece(StructurePieceAccessor p_228251_,  RandomSource p_228252_,  int p_228253_,  int p_228254_,  int p_228255_,  Direction p_228256_,  int p_228257_)`
- `public void postProcess(WorldGenLevel p_228239_,  StructureManager p_228240_,  ChunkGenerator p_228241_,  RandomSource p_228242_,  BoundingBox p_228243_,  ChunkPos p_228244_,  BlockPos p_228245_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleSmallCorridorPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleSmallCorridorPiece`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 7)
- `private static final int DEPTH` (= 5)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228279_,  StructurePieceAccessor p_228280_,  RandomSource p_228281_)`
- `public static NetherFortressPieces.CastleSmallCorridorPiece createPiece(StructurePieceAccessor p_228283_,  int p_228284_,  int p_228285_,  int p_228286_,  Direction p_228287_,  int p_228288_)`
- `public void postProcess(WorldGenLevel p_228271_,  StructureManager p_228272_,  ChunkGenerator p_228273_,  RandomSource p_228274_,  BoundingBox p_228275_,  ChunkPos p_228276_,  BlockPos p_228277_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleSmallCorridorRightTurnPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleSmallCorridorRightTurnPiece`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 7)
- `private static final int DEPTH` (= 5)
- `private boolean isNeedingChest`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228321_,  CompoundTag p_228322_)`
- `public void addChildren(StructurePiece p_228309_,  StructurePieceAccessor p_228310_,  RandomSource p_228311_)`
- `public static NetherFortressPieces.CastleSmallCorridorRightTurnPiece createPiece(StructurePieceAccessor p_228313_,  RandomSource p_228314_,  int p_228315_,  int p_228316_,  int p_228317_,  Direction p_228318_,  int p_228319_)`
- `public void postProcess(WorldGenLevel p_228301_,  StructureManager p_228302_,  ChunkGenerator p_228303_,  RandomSource p_228304_,  BoundingBox p_228305_,  ChunkPos p_228306_,  BlockPos p_228307_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.CastleStalkRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.CastleStalkRoom`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 13)
- `private static final int HEIGHT` (= 14)
- `private static final int DEPTH` (= 13)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228341_,  StructurePieceAccessor p_228342_,  RandomSource p_228343_)`
- `public static NetherFortressPieces.CastleStalkRoom createPiece(StructurePieceAccessor p_228345_,  int p_228346_,  int p_228347_,  int p_228348_,  Direction p_228349_,  int p_228350_)`
- `public void postProcess(WorldGenLevel p_228333_,  StructureManager p_228334_,  ChunkGenerator p_228335_,  RandomSource p_228336_,  BoundingBox p_228337_,  ChunkPos p_228338_,  BlockPos p_228339_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.MonsterThrone

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.MonsterThrone`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 7)
- `private static final int HEIGHT` (= 8)
- `private static final int DEPTH` (= 9)
- `private boolean hasPlacedSpawner`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228377_,  CompoundTag p_228378_)`
- `public static NetherFortressPieces.MonsterThrone createPiece(StructurePieceAccessor p_228370_,  int p_228371_,  int p_228372_,  int p_228373_,  int p_228374_,  Direction p_228375_)`
- `public void postProcess(WorldGenLevel p_228362_,  StructureManager p_228363_,  ChunkGenerator p_228364_,  RandomSource p_228365_,  BoundingBox p_228366_,  ChunkPos p_228367_,  BlockPos p_228368_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.NetherBridgePiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`

Enclosing class: NetherFortressPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228389_,  CompoundTag p_228390_)`
- `private int updatePieceWeight(List<NetherFortressPieces.PieceWeight> p_228419_)`
- `private NetherFortressPieces.NetherBridgePiece generatePiece(NetherFortressPieces.StartPiece p_228409_,  List<NetherFortressPieces.PieceWeight> p_228410_,  StructurePieceAccessor p_228411_,  RandomSource p_228412_,  int p_228413_,  int p_228414_,  int p_228415_,  Direction p_228416_,  int p_228417_)`
- `private StructurePiece generateAndAddPiece(NetherFortressPieces.StartPiece p_228392_,  StructurePieceAccessor p_228393_,  RandomSource p_228394_,  int p_228395_,  int p_228396_,  int p_228397_,  @Nullable  Direction p_228398_,  int p_228399_,  boolean p_228400_)`
- `@Nullable protected StructurePiece generateChildForward(NetherFortressPieces.StartPiece p_228402_,  StructurePieceAccessor p_228403_,  RandomSource p_228404_,  int p_228405_,  int p_228406_,  boolean p_228407_)`
- `@Nullable protected StructurePiece generateChildLeft(NetherFortressPieces.StartPiece p_228421_,  StructurePieceAccessor p_228422_,  RandomSource p_228423_,  int p_228424_,  int p_228425_,  boolean p_228426_)`
- `@Nullable protected StructurePiece generateChildRight(NetherFortressPieces.StartPiece p_228428_,  StructurePieceAccessor p_228429_,  RandomSource p_228430_,  int p_228431_,  int p_228432_,  boolean p_228433_)`
- `protected static boolean isOkBox(BoundingBox p_228387_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `postProcess`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.PieceWeight

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.PieceWeight`

Enclosing class: NetherFortressPieces

### Fields
- `public final Class<? extends NetherFortressPieces.NetherBridgePiece> pieceClass`
- `public final int weight`
- `public int placeCount`
- `public final int maxPlaceCount`
- `public final boolean allowInRow`

### Methods
- `public boolean doPlace(int p_228450_)`
- `public boolean isValid()`

## NetherFortressPieces.RoomCrossing

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.RoomCrossing`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 7)
- `private static final int HEIGHT` (= 9)
- `private static final int DEPTH` (= 7)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228469_,  StructurePieceAccessor p_228470_,  RandomSource p_228471_)`
- `public static NetherFortressPieces.RoomCrossing createPiece(StructurePieceAccessor p_228473_,  int p_228474_,  int p_228475_,  int p_228476_,  Direction p_228477_,  int p_228478_)`
- `public void postProcess(WorldGenLevel p_228461_,  StructureManager p_228462_,  ChunkGenerator p_228463_,  RandomSource p_228464_,  BoundingBox p_228465_,  ChunkPos p_228466_,  BlockPos p_228467_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.StairsRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.StairsRoom`

Enclosing class: NetherFortressPieces

### Fields
- `private static final int WIDTH` (= 7)
- `private static final int HEIGHT` (= 11)
- `private static final int DEPTH` (= 7)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_228497_,  StructurePieceAccessor p_228498_,  RandomSource p_228499_)`
- `public static NetherFortressPieces.StairsRoom createPiece(StructurePieceAccessor p_228501_,  int p_228502_,  int p_228503_,  int p_228504_,  int p_228505_,  Direction p_228506_)`
- `public void postProcess(WorldGenLevel p_228489_,  StructureManager p_228490_,  ChunkGenerator p_228491_,  RandomSource p_228492_,  BoundingBox p_228493_,  ChunkPos p_228494_,  BlockPos p_228495_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressPieces.StartPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.StartPiece`

Enclosing class: NetherFortressPieces

### Fields
- `public NetherFortressPieces.PieceWeight previousPiece`
- `public List<NetherFortressPieces.PieceWeight> availableBridgePieces`
- `public List<NetherFortressPieces.PieceWeight> availableCastlePieces`
- `public final List<StructurePiece> pendingChildren`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.BridgeCrossing`: `addChildren`, `createPiece`, `postProcess`
- from `net.minecraft.world.level.levelgen.structure.structures.NetherFortressPieces.NetherBridgePiece`: `addAdditionalSaveData`, `generateChildForward`, `generateChildLeft`, `generateChildRight`, `isOkBox`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFortressStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFortressStructure`

### Fields
- `public static final WeightedRandomList<MobSpawnSettings.SpawnerData> FORTRESS_ENEMIES`
- `public static final com.mojang.serialization.Codec<NetherFortressStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_228523_)`
- `private static void generatePieces(StructurePiecesBuilder p_228528_,  Structure.GenerationContext p_228529_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## NetherFossilPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFossilPieces`

### Fields
- `private static final ResourceLocation[] FOSSILS`

### Methods
- `public static void addPieces(StructureTemplateManager p_228535_,  StructurePieceAccessor p_228536_,  RandomSource p_228537_,  BlockPos p_228538_)`

## NetherFossilPieces.NetherFossilPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFossilPieces.NetherFossilPiece`

Enclosing class: NetherFossilPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `private static StructurePlaceSettings makeSettings(Rotation p_228556_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228558_,  CompoundTag p_228559_)`
- `protected void handleDataMarker(String p_228561_,  BlockPos p_228562_,  ServerLevelAccessor p_228563_,  RandomSource p_228564_,  BoundingBox p_228565_)`
- `public void postProcess(WorldGenLevel p_228548_,  StructureManager p_228549_,  ChunkGenerator p_228550_,  RandomSource p_228551_,  BoundingBox p_228552_,  ChunkPos p_228553_,  BlockPos p_228554_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `makeTemplateLocation`, `move`, `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## NetherFossilStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.NetherFossilStructure`

### Fields
- `public static final com.mojang.serialization.Codec<NetherFossilStructure> CODEC`
- `public final HeightProvider height`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_228576_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## OceanMonumentPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces`

## OceanMonumentPieces.FitDoubleXRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitDoubleXRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228592_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228594_,  OceanMonumentPieces.RoomDefinition p_228595_,  RandomSource p_228596_)`

## OceanMonumentPieces.FitDoubleXYRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitDoubleXYRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228599_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228601_,  OceanMonumentPieces.RoomDefinition p_228602_,  RandomSource p_228603_)`

## OceanMonumentPieces.FitDoubleYRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitDoubleYRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228606_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228608_,  OceanMonumentPieces.RoomDefinition p_228609_,  RandomSource p_228610_)`

## OceanMonumentPieces.FitDoubleYZRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitDoubleYZRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228613_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228615_,  OceanMonumentPieces.RoomDefinition p_228616_,  RandomSource p_228617_)`

## OceanMonumentPieces.FitDoubleZRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitDoubleZRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228620_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228622_,  OceanMonumentPieces.RoomDefinition p_228623_,  RandomSource p_228624_)`

## OceanMonumentPieces.FitSimpleRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitSimpleRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228627_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228629_,  OceanMonumentPieces.RoomDefinition p_228630_,  RandomSource p_228631_)`

## OceanMonumentPieces.FitSimpleTopRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.FitSimpleTopRoom`

Enclosing class: OceanMonumentPieces

### Methods
- `public boolean fits(OceanMonumentPieces.RoomDefinition p_228634_)`
- `public OceanMonumentPieces.OceanMonumentPiece create(Direction p_228636_,  OceanMonumentPieces.RoomDefinition p_228637_,  RandomSource p_228638_)`

## OceanMonumentPieces.MonumentBuilding

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.MonumentBuilding`

Enclosing class: OceanMonumentPieces

### Fields
- `private static final int WIDTH` (= 58)
- `private static final int HEIGHT` (= 22)
- `private static final int DEPTH` (= 58)
- `public static final int BIOME_RANGE_CHECK` (= 29)
- `private static final int TOP_POSITION` (= 61)
- `private OceanMonumentPieces.RoomDefinition sourceRoom`
- `private OceanMonumentPieces.RoomDefinition coreRoom`
- `private final List<OceanMonumentPieces.OceanMonumentPiece> childPieces`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `private List<OceanMonumentPieces.RoomDefinition> generateRoomGraph(RandomSource p_228673_)`
- `public void postProcess(WorldGenLevel p_228659_,  StructureManager p_228660_,  ChunkGenerator p_228661_,  RandomSource p_228662_,  BoundingBox p_228663_,  ChunkPos p_228664_,  BlockPos p_228665_)`
- `private void generateWing(boolean p_228667_,  int p_228668_,  WorldGenLevel p_228669_,  RandomSource p_228670_,  BoundingBox p_228671_)`
- `private void generateEntranceArchs(WorldGenLevel p_228655_,  RandomSource p_228656_,  BoundingBox p_228657_)`
- `private void generateEntranceWall(WorldGenLevel p_228675_,  RandomSource p_228676_,  BoundingBox p_228677_)`
- `private void generateRoofPiece(WorldGenLevel p_228679_,  RandomSource p_228680_,  BoundingBox p_228681_)`
- `private void generateLowerWall(WorldGenLevel p_228683_,  RandomSource p_228684_,  BoundingBox p_228685_)`
- `private void generateMiddleWall(WorldGenLevel p_228687_,  RandomSource p_228688_,  BoundingBox p_228689_)`
- `private void generateUpperWall(WorldGenLevel p_228691_,  RandomSource p_228692_,  BoundingBox p_228693_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.MonumentRoomFitter

*interface* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.MonumentRoomFitter`

Enclosing class: OceanMonumentPieces

### Methods
- `boolean fits(OceanMonumentPieces.RoomDefinition p_228694_)`
- `OceanMonumentPieces.OceanMonumentPiece create(Direction p_228695_,  OceanMonumentPieces.RoomDefinition p_228696_,  RandomSource p_228697_)`

## OceanMonumentPieces.OceanMonumentCoreRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentCoreRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228704_,  StructureManager p_228705_,  ChunkGenerator p_228706_,  RandomSource p_228707_,  BoundingBox p_228708_,  ChunkPos p_228709_,  BlockPos p_228710_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentDoubleXRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentDoubleXRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228717_,  StructureManager p_228718_,  ChunkGenerator p_228719_,  RandomSource p_228720_,  BoundingBox p_228721_,  ChunkPos p_228722_,  BlockPos p_228723_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentDoubleXYRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentDoubleXYRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228730_,  StructureManager p_228731_,  ChunkGenerator p_228732_,  RandomSource p_228733_,  BoundingBox p_228734_,  ChunkPos p_228735_,  BlockPos p_228736_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentDoubleYRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentDoubleYRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228743_,  StructureManager p_228744_,  ChunkGenerator p_228745_,  RandomSource p_228746_,  BoundingBox p_228747_,  ChunkPos p_228748_,  BlockPos p_228749_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentDoubleYZRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentDoubleYZRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228756_,  StructureManager p_228757_,  ChunkGenerator p_228758_,  RandomSource p_228759_,  BoundingBox p_228760_,  ChunkPos p_228761_,  BlockPos p_228762_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentDoubleZRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentDoubleZRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228769_,  StructureManager p_228770_,  ChunkGenerator p_228771_,  RandomSource p_228772_,  BoundingBox p_228773_,  ChunkPos p_228774_,  BlockPos p_228775_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentEntryRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentEntryRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228782_,  StructureManager p_228783_,  ChunkGenerator p_228784_,  RandomSource p_228785_,  BoundingBox p_228786_,  ChunkPos p_228787_,  BlockPos p_228788_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentPenthouse

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPenthouse`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228795_,  StructureManager p_228796_,  ChunkGenerator p_228797_,  RandomSource p_228798_,  BoundingBox p_228799_,  ChunkPos p_228800_,  BlockPos p_228801_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`

Enclosing class: OceanMonumentPieces

### Fields
- `protected static final BlockState BASE_GRAY`
- `protected static final BlockState BASE_LIGHT`
- `protected static final BlockState BASE_BLACK`
- `protected static final BlockState DOT_DECO_DATA`
- `protected static final BlockState LAMP_BLOCK`
- `protected static final boolean DO_FILL` (= true)
- `protected static final BlockState FILL_BLOCK`
- `protected static final Set<Block> FILL_KEEP`
- `protected static final int GRIDROOM_WIDTH` (= 8)
- `protected static final int GRIDROOM_DEPTH` (= 8)
- `protected static final int GRIDROOM_HEIGHT` (= 4)
- `protected static final int GRID_WIDTH` (= 5)
- `protected static final int GRID_DEPTH` (= 5)
- `protected static final int GRID_HEIGHT` (= 3)
- `protected static final int GRID_FLOOR_COUNT` (= 25)
- `protected static final int GRID_SIZE` (= 75)
- `protected static final int GRIDROOM_SOURCE_INDEX`
- `protected static final int GRIDROOM_TOP_CONNECT_INDEX`
- `protected static final int GRIDROOM_LEFTWING_CONNECT_INDEX`
- `protected static final int GRIDROOM_RIGHTWING_CONNECT_INDEX`
- `protected static final int LEFTWING_INDEX` (= 1001)
- `protected static final int RIGHTWING_INDEX` (= 1002)
- `protected static final int PENTHOUSE_INDEX` (= 1003)
- `protected OceanMonumentPieces.RoomDefinition roomDefinition`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected static int getRoomIndex(int p_228890_,  int p_228891_,  int p_228892_)`
- `private static BoundingBox makeBoundingBox(Direction p_228875_,  OceanMonumentPieces.RoomDefinition p_228876_,  int p_228877_,  int p_228878_,  int p_228879_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_228872_,  CompoundTag p_228873_)`
- `protected void generateWaterBox(WorldGenLevel p_228881_,  BoundingBox p_228882_,  int p_228883_,  int p_228884_,  int p_228885_,  int p_228886_,  int p_228887_,  int p_228888_)`
- `protected void generateDefaultFloor(WorldGenLevel p_228860_,  BoundingBox p_228861_,  int p_228862_,  int p_228863_,  boolean p_228864_)`
- `protected void generateBoxOnFillOnly(WorldGenLevel p_228850_,  BoundingBox p_228851_,  int p_228852_,  int p_228853_,  int p_228854_,  int p_228855_,  int p_228856_,  int p_228857_,  BlockState p_228858_)`
- `protected boolean chunkIntersects(BoundingBox p_228866_,  int p_228867_,  int p_228868_,  int p_228869_,  int p_228870_)`
- `protected void spawnElder(WorldGenLevel p_251919_,  BoundingBox p_248944_,  int p_251311_,  int p_249326_,  int p_252095_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `postProcess`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentSimpleRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentSimpleRoom`

Enclosing class: OceanMonumentPieces

### Fields
- `private int mainDesign`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228901_,  StructureManager p_228902_,  ChunkGenerator p_228903_,  RandomSource p_228904_,  BoundingBox p_228905_,  ChunkPos p_228906_,  BlockPos p_228907_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentSimpleTopRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentSimpleTopRoom`

Enclosing class: OceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228914_,  StructureManager p_228915_,  ChunkGenerator p_228916_,  RandomSource p_228917_,  BoundingBox p_228918_,  ChunkPos p_228919_,  BlockPos p_228920_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.OceanMonumentWingRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentWingRoom`

Enclosing class: OceanMonumentPieces

### Fields
- `private int mainDesign`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `BASE_BLACK`, `BASE_GRAY`, `BASE_LIGHT`, `DO_FILL`, `DOT_DECO_DATA`, `FILL_BLOCK`, `FILL_KEEP`, `GRID_DEPTH`, `GRID_FLOOR_COUNT`, `GRID_HEIGHT`, `GRID_SIZE`, `GRID_WIDTH`, `GRIDROOM_DEPTH`, `GRIDROOM_HEIGHT`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `GRIDROOM_WIDTH`, `LAMP_BLOCK`, `LEFTWING_INDEX`, `PENTHOUSE_INDEX`, `RIGHTWING_INDEX`, `roomDefinition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void postProcess(WorldGenLevel p_228929_,  StructureManager p_228930_,  ChunkGenerator p_228931_,  RandomSource p_228932_,  BoundingBox p_228933_,  ChunkPos p_228934_,  BlockPos p_228935_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.OceanMonumentPiece`: `addAdditionalSaveData`, `chunkIntersects`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `spawnElder`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanMonumentPieces.RoomDefinition

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentPieces.RoomDefinition`

Enclosing class: OceanMonumentPieces

### Fields
- `final int index`
- `final OceanMonumentPieces.RoomDefinition[] connections`
- `final boolean[] hasOpening`
- `boolean claimed`
- `boolean isSource`
- `private int scanIndex`

### Methods
- `public void setConnection(Direction p_228948_,  OceanMonumentPieces.RoomDefinition p_228949_)`
- `public void updateOpenings()`
- `public boolean findSource(int p_228946_)`
- `public boolean isSpecial()`
- `public int countOpenings()`

## OceanMonumentStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanMonumentStructure`

### Fields
- `public static final com.mojang.serialization.Codec<OceanMonumentStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_228964_)`
- `private static StructurePiece createTopPiece(ChunkPos p_228961_,  WorldgenRandom p_228962_)`
- `private static void generatePieces(StructurePiecesBuilder p_228969_,  Structure.GenerationContext p_228970_)`
- `public static PiecesContainer regeneratePiecesAfterLoad(ChunkPos p_228957_,  long p_228958_,  PiecesContainer p_228959_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## OceanRuinPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanRuinPieces`

### Fields
- `static final StructureProcessor WARM_SUSPICIOUS_BLOCK_PROCESSOR`
- `static final StructureProcessor COLD_SUSPICIOUS_BLOCK_PROCESSOR`
- `private static final ResourceLocation[] WARM_RUINS`
- `private static final ResourceLocation[] RUINS_BRICK`
- `private static final ResourceLocation[] RUINS_CRACKED`
- `private static final ResourceLocation[] RUINS_MOSSY`
- `private static final ResourceLocation[] BIG_RUINS_BRICK`
- `private static final ResourceLocation[] BIG_RUINS_MOSSY`
- `private static final ResourceLocation[] BIG_RUINS_CRACKED`
- `private static final ResourceLocation[] BIG_WARM_RUINS`

### Methods
- `private static StructureProcessor archyRuleProcessor(Block p_277376_,  Block p_277934_,  ResourceLocation p_277968_)`
- `private static ResourceLocation getSmallWarmRuin(RandomSource p_228983_)`
- `private static ResourceLocation getBigWarmRuin(RandomSource p_229011_)`
- `public static void addPieces(StructureTemplateManager p_228995_,  BlockPos p_228996_,  Rotation p_228997_,  StructurePieceAccessor p_228998_,  RandomSource p_228999_,  OceanRuinStructure p_229000_)`
- `private static void addClusterRuins(StructureTemplateManager p_228988_,  RandomSource p_228989_,  Rotation p_228990_,  BlockPos p_228991_,  OceanRuinStructure p_228992_,  StructurePieceAccessor p_228993_)`
- `private static List<BlockPos> allPositions(RandomSource p_228985_,  BlockPos p_228986_)`
- `private static void addPiece(StructureTemplateManager p_229002_,  BlockPos p_229003_,  Rotation p_229004_,  StructurePieceAccessor p_229005_,  RandomSource p_229006_,  OceanRuinStructure p_229007_,  boolean p_229008_,  float p_229009_)`

## OceanRuinPieces.OceanRuinPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanRuinPieces.OceanRuinPiece`

Enclosing class: OceanRuinPieces

### Fields
- `private final OceanRuinStructure.Type biomeType`
- `private final float integrity`
- `private final boolean isLarge`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `private static StructurePlaceSettings makeSettings(Rotation p_277572_,  float p_277489_,  OceanRuinStructure.Type p_277631_)`
- `public static OceanRuinPieces.OceanRuinPiece create(StructureTemplateManager p_277874_,  CompoundTag p_277773_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229039_,  CompoundTag p_229040_)`
- `protected void handleDataMarker(String p_229046_,  BlockPos p_229047_,  ServerLevelAccessor p_229048_,  RandomSource p_229049_,  BoundingBox p_229050_)`
- `public void postProcess(WorldGenLevel p_229029_,  StructureManager p_229030_,  ChunkGenerator p_229031_,  RandomSource p_229032_,  BoundingBox p_229033_,  ChunkPos p_229034_,  BlockPos p_229035_)`
- `private int getHeight(BlockPos p_229042_,  BlockGetter p_229043_,  BlockPos p_229044_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `makeTemplateLocation`, `move`, `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## OceanRuinStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.OceanRuinStructure`

### Fields
- `public static final com.mojang.serialization.Codec<OceanRuinStructure> CODEC`
- `public final OceanRuinStructure.Type biomeTemp`
- `public final float largeProbability`
- `public final float clusterProbability`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229065_)`
- `private void generatePieces(StructurePiecesBuilder p_229070_,  Structure.GenerationContext p_229071_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## RuinedPortalPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `private static final float PROBABILITY_OF_GOLD_GONE` (= 0.30000001192092896f)
- `private static final float PROBABILITY_OF_MAGMA_INSTEAD_OF_NETHERRACK` (= 0.07000000029802322f)
- `private static final float PROBABILITY_OF_MAGMA_INSTEAD_OF_LAVA` (= 0.20000000298023224f)
- `private final RuinedPortalPiece.VerticalPlacement verticalPlacement`
- `private final RuinedPortalPiece.Properties properties`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229158_,  CompoundTag p_229159_)`
- `private static StructurePlaceSettings makeSettings(StructureTemplateManager p_229166_,  CompoundTag p_229167_,  ResourceLocation p_229168_)`
- `private static StructurePlaceSettings makeSettings(Mirror p_229152_,  Rotation p_229153_,  RuinedPortalPiece.VerticalPlacement p_229154_,  BlockPos p_229155_,  RuinedPortalPiece.Properties p_229156_)`
- `private static ProcessorRule getLavaProcessorRule(RuinedPortalPiece.VerticalPlacement p_229163_,  RuinedPortalPiece.Properties p_229164_)`
- `public void postProcess(WorldGenLevel p_229137_,  StructureManager p_229138_,  ChunkGenerator p_229139_,  RandomSource p_229140_,  BoundingBox p_229141_,  ChunkPos p_229142_,  BlockPos p_229143_)`
- `protected void handleDataMarker(String p_229170_,  BlockPos p_229171_,  ServerLevelAccessor p_229172_,  RandomSource p_229173_,  BoundingBox p_229174_)`
- `private void maybeAddVines(RandomSource p_229121_,  LevelAccessor p_229122_,  BlockPos p_229123_)`
- `private void maybeAddLeavesAbove(RandomSource p_229182_,  LevelAccessor p_229183_,  BlockPos p_229184_)`
- `private void addNetherrackDripColumnsBelowPortal(RandomSource p_229118_,  LevelAccessor p_229119_)`
- `private void addNetherrackDripColumn(RandomSource p_229190_,  LevelAccessor p_229191_,  BlockPos p_229192_)`
- `private void spreadNetherrack(RandomSource p_229179_,  LevelAccessor p_229180_)`
- `private boolean canBlockBeReplacedByNetherrackOrMagma(LevelAccessor p_229134_,  BlockPos p_229135_)`
- `private void placeNetherrackOrMagma(RandomSource p_229194_,  LevelAccessor p_229195_,  BlockPos p_229196_)`
- `private static int getSurfaceY(LevelAccessor p_229129_,  int p_229130_,  int p_229131_,  RuinedPortalPiece.VerticalPlacement p_229132_)`
- `public static Heightmap.Types getHeightMapType(RuinedPortalPiece.VerticalPlacement p_229161_)`
- `private static ProcessorRule getBlockReplaceRule(Block p_229145_,  float p_229146_,  Block p_229147_)`
- `private static ProcessorRule getBlockReplaceRule(Block p_229149_,  Block p_229150_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `makeTemplateLocation`, `move`, `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## RuinedPortalPiece.Properties

*class* `net.minecraft.world.level.levelgen.structure.structures.RuinedPortalPiece.Properties`

Enclosing class: RuinedPortalPiece

### Fields
- `public static final com.mojang.serialization.Codec<RuinedPortalPiece.Properties> CODEC`
- `public boolean cold`
- `public float mossiness`
- `public boolean airPocket`
- `public boolean overgrown`
- `public boolean vines`
- `public boolean replaceWithBlackstone`

## RuinedPortalStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure`

### Fields
- `private static final String[] STRUCTURE_LOCATION_PORTALS`
- `private static final String[] STRUCTURE_LOCATION_GIANT_PORTALS`
- `private static final float PROBABILITY_OF_GIANT_PORTAL` (= 0.05000000074505806f)
- `private static final int MIN_Y_INDEX` (= 15)
- `private final List<RuinedPortalStructure.Setup> setups`
- `public static final com.mojang.serialization.Codec<RuinedPortalStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229285_)`
- `private static boolean sample(WorldgenRandom p_229282_,  float p_229283_)`
- `private static boolean isCold(BlockPos p_229301_,  Holder<Biome> p_229302_)`
- `private static int findSuitableY(RandomSource p_229267_,  ChunkGenerator p_229268_,  RuinedPortalPiece.VerticalPlacement p_229269_,  boolean p_229270_,  int p_229271_,  int p_229272_,  BoundingBox p_229273_,  LevelHeightAccessor p_229274_,  RandomState p_229275_)`
- `private static int getRandomWithinInterval(RandomSource p_229263_,  int p_229264_,  int p_229265_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## RuinedPortalStructure.Setup

*record* `net.minecraft.world.level.levelgen.structure.structures.RuinedPortalStructure.Setup`

Enclosing class: RuinedPortalStructure

### Fields
- `private final RuinedPortalPiece.VerticalPlacement placement`
  The field for the placement record component.
- `private final float airPocketProbability`
  The field for the airPocketProbability record component.
- `private final float mossiness`
  The field for the mossiness record component.
- `private final boolean overgrown`
  The field for the overgrown record component.
- `private final boolean vines`
  The field for the vines record component.
- `private final boolean canBeCold`
  The field for the canBeCold record component.
- `private final boolean replaceWithBlackstone`
  The field for the replaceWithBlackstone record component.
- `private final float weight`
  The field for the weight record component.
- `public static final com.mojang.serialization.Codec<RuinedPortalStructure.Setup> CODEC`

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
- `public RuinedPortalPiece.VerticalPlacement placement()`
  Returns the value of the placement record component.
  - returns: the value of the placement record component
- `public float airPocketProbability()`
  Returns the value of the airPocketProbability record component.
  - returns: the value of the airPocketProbability record component
- `public float mossiness()`
  Returns the value of the mossiness record component.
  - returns: the value of the mossiness record component
- `public boolean overgrown()`
  Returns the value of the overgrown record component.
  - returns: the value of the overgrown record component
- `public boolean vines()`
  Returns the value of the vines record component.
  - returns: the value of the vines record component
- `public boolean canBeCold()`
  Returns the value of the canBeCold record component.
  - returns: the value of the canBeCold record component
- `public boolean replaceWithBlackstone()`
  Returns the value of the replaceWithBlackstone record component.
  - returns: the value of the replaceWithBlackstone record component
- `public float weight()`
  Returns the value of the weight record component.
  - returns: the value of the weight record component

## ShipwreckPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.ShipwreckPieces`

### Fields
- `static final BlockPos PIVOT`
- `private static final ResourceLocation[] STRUCTURE_LOCATION_BEACHED`
- `private static final ResourceLocation[] STRUCTURE_LOCATION_OCEAN`
- `static final Map<String,ResourceLocation> MARKERS_TO_LOOT`

### Methods
- `public static void addPieces(StructureTemplateManager p_229346_,  BlockPos p_229347_,  Rotation p_229348_,  StructurePieceAccessor p_229349_,  RandomSource p_229350_,  boolean p_229351_)`

## ShipwreckPieces.ShipwreckPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.ShipwreckPieces.ShipwreckPiece`

Enclosing class: ShipwreckPieces

### Fields
- `private final boolean isBeached`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229373_,  CompoundTag p_229374_)`
- `private static StructurePlaceSettings makeSettings(Rotation p_229371_)`
- `protected void handleDataMarker(String p_229376_,  BlockPos p_229377_,  ServerLevelAccessor p_229378_,  RandomSource p_229379_,  BoundingBox p_229380_)`
- `public void postProcess(WorldGenLevel p_229363_,  StructureManager p_229364_,  ChunkGenerator p_229365_,  RandomSource p_229366_,  BoundingBox p_229367_,  ChunkPos p_229368_,  BlockPos p_229369_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `makeTemplateLocation`, `move`, `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## ShipwreckStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.ShipwreckStructure`

### Fields
- `public static final com.mojang.serialization.Codec<ShipwreckStructure> CODEC`
- `public final boolean isBeached`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229391_)`
- `private void generatePieces(StructurePiecesBuilder p_229396_,  Structure.GenerationContext p_229397_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## StrongholdPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces`

### Fields
- `private static final int SMALL_DOOR_WIDTH` (= 3)
- `private static final int SMALL_DOOR_HEIGHT` (= 3)
- `private static final int MAX_DEPTH` (= 50)
- `private static final int LOWEST_Y_POSITION` (= 10)
- `private static final boolean CHECK_AIR` (= true)
- `public static final int MAGIC_START_Y` (= 64)
- `private static final StrongholdPieces.PieceWeight[] STRONGHOLD_PIECE_WEIGHTS`
- `private static List<StrongholdPieces.PieceWeight> currentPieces`
- `static Class<? extends StrongholdPieces.StrongholdPiece> imposedPiece`
- `private static int totalWeight`
- `static final StrongholdPieces.SmoothStoneSelector SMOOTH_STONE_SELECTOR`

### Methods
- `public static void resetPieces()`
- `private static boolean updatePieceWeight()`
- `private static StrongholdPieces.StrongholdPiece findAndCreatePieceFactory(Class<? extends StrongholdPieces.StrongholdPiece> p_229427_,  StructurePieceAccessor p_229428_,  RandomSource p_229429_,  int p_229430_,  int p_229431_,  int p_229432_,  @Nullable  Direction p_229433_,  int p_229434_)`
- `private static StrongholdPieces.StrongholdPiece generatePieceFromSmallDoor(StrongholdPieces.StartPiece p_229418_,  StructurePieceAccessor p_229419_,  RandomSource p_229420_,  int p_229421_,  int p_229422_,  int p_229423_,  Direction p_229424_,  int p_229425_)`
- `static StructurePiece generateAndAddPiece(StrongholdPieces.StartPiece p_229437_,  StructurePieceAccessor p_229438_,  RandomSource p_229439_,  int p_229440_,  int p_229441_,  int p_229442_,  @Nullable  Direction p_229443_,  int p_229444_)`

## StrongholdPieces.ChestCorridor

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.ChestCorridor`

Enclosing class: StrongholdPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 5)
- `private static final int DEPTH` (= 7)
- `private boolean hasPlacedChest`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229492_,  CompoundTag p_229493_)`
- `public void addChildren(StructurePiece p_229480_,  StructurePieceAccessor p_229481_,  RandomSource p_229482_)`
- `public static StrongholdPieces.ChestCorridor createPiece(StructurePieceAccessor p_229484_,  RandomSource p_229485_,  int p_229486_,  int p_229487_,  int p_229488_,  Direction p_229489_,  int p_229490_)`
- `public void postProcess(WorldGenLevel p_229472_,  StructureManager p_229473_,  ChunkGenerator p_229474_,  RandomSource p_229475_,  BoundingBox p_229476_,  ChunkPos p_229477_,  BlockPos p_229478_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.FillerCorridor

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.FillerCorridor`

Enclosing class: StrongholdPieces

### Fields
- `private final int steps`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229517_,  CompoundTag p_229518_)`
- `public static BoundingBox findPieceBox(StructurePieceAccessor p_229510_,  RandomSource p_229511_,  int p_229512_,  int p_229513_,  int p_229514_,  Direction p_229515_)`
- `public void postProcess(WorldGenLevel p_229502_,  StructureManager p_229503_,  ChunkGenerator p_229504_,  RandomSource p_229505_,  BoundingBox p_229506_,  ChunkPos p_229507_,  BlockPos p_229508_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.FiveCrossing

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.FiveCrossing`

Enclosing class: StrongholdPieces

### Fields
- `protected static final int WIDTH` (= 10)
- `protected static final int HEIGHT` (= 9)
- `protected static final int DEPTH` (= 11)
- `private final boolean leftLow`
- `private final boolean leftHigh`
- `private final boolean rightLow`
- `private final boolean rightHigh`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229554_,  CompoundTag p_229555_)`
- `public void addChildren(StructurePiece p_229542_,  StructurePieceAccessor p_229543_,  RandomSource p_229544_)`
- `public static StrongholdPieces.FiveCrossing createPiece(StructurePieceAccessor p_229546_,  RandomSource p_229547_,  int p_229548_,  int p_229549_,  int p_229550_,  Direction p_229551_,  int p_229552_)`
- `public void postProcess(WorldGenLevel p_229534_,  StructureManager p_229535_,  ChunkGenerator p_229536_,  RandomSource p_229537_,  BoundingBox p_229538_,  ChunkPos p_229539_,  BlockPos p_229540_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.LeftTurn

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.LeftTurn`

Enclosing class: StrongholdPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.Turn`: `DEPTH`, `HEIGHT`, `WIDTH`
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_229572_,  StructurePieceAccessor p_229573_,  RandomSource p_229574_)`
- `public static StrongholdPieces.LeftTurn createPiece(StructurePieceAccessor p_229576_,  RandomSource p_229577_,  int p_229578_,  int p_229579_,  int p_229580_,  Direction p_229581_,  int p_229582_)`
- `public void postProcess(WorldGenLevel p_229564_,  StructureManager p_229565_,  ChunkGenerator p_229566_,  RandomSource p_229567_,  BoundingBox p_229568_,  ChunkPos p_229569_,  BlockPos p_229570_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `addAdditionalSaveData`, `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.Library

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.Library`

Enclosing class: StrongholdPieces

### Fields
- `protected static final int WIDTH` (= 14)
- `protected static final int HEIGHT` (= 6)
- `protected static final int TALL_HEIGHT` (= 11)
- `protected static final int DEPTH` (= 15)
- `private final boolean isTall`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229612_,  CompoundTag p_229613_)`
- `public static StrongholdPieces.Library createPiece(StructurePieceAccessor p_229604_,  RandomSource p_229605_,  int p_229606_,  int p_229607_,  int p_229608_,  Direction p_229609_,  int p_229610_)`
- `public void postProcess(WorldGenLevel p_229596_,  StructureManager p_229597_,  ChunkGenerator p_229598_,  RandomSource p_229599_,  BoundingBox p_229600_,  ChunkPos p_229601_,  BlockPos p_229602_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.PieceWeight

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.PieceWeight`

Enclosing class: StrongholdPieces

### Fields
- `public final Class<? extends StrongholdPieces.StrongholdPiece> pieceClass`
- `public final int weight`
- `public int placeCount`
- `public final int maxPlaceCount`

### Methods
- `public boolean doPlace(int p_229623_)`
- `public boolean isValid()`

## StrongholdPieces.PortalRoom

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.PortalRoom`

Enclosing class: StrongholdPieces

### Fields
- `protected static final int WIDTH` (= 11)
- `protected static final int HEIGHT` (= 8)
- `protected static final int DEPTH` (= 16)
- `private boolean hasPlacedSpawner`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229654_,  CompoundTag p_229655_)`
- `public void addChildren(StructurePiece p_229643_,  StructurePieceAccessor p_229644_,  RandomSource p_229645_)`
- `public static StrongholdPieces.PortalRoom createPiece(StructurePieceAccessor p_229647_,  int p_229648_,  int p_229649_,  int p_229650_,  Direction p_229651_,  int p_229652_)`
- `public void postProcess(WorldGenLevel p_229635_,  StructureManager p_229636_,  ChunkGenerator p_229637_,  RandomSource p_229638_,  BoundingBox p_229639_,  ChunkPos p_229640_,  BlockPos p_229641_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.PrisonHall

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.PrisonHall`

Enclosing class: StrongholdPieces

### Fields
- `protected static final int WIDTH` (= 9)
- `protected static final int HEIGHT` (= 5)
- `protected static final int DEPTH` (= 11)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_229675_,  StructurePieceAccessor p_229676_,  RandomSource p_229677_)`
- `public static StrongholdPieces.PrisonHall createPiece(StructurePieceAccessor p_229679_,  RandomSource p_229680_,  int p_229681_,  int p_229682_,  int p_229683_,  Direction p_229684_,  int p_229685_)`
- `public void postProcess(WorldGenLevel p_229667_,  StructureManager p_229668_,  ChunkGenerator p_229669_,  RandomSource p_229670_,  BoundingBox p_229671_,  ChunkPos p_229672_,  BlockPos p_229673_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `addAdditionalSaveData`, `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.RightTurn

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.RightTurn`

Enclosing class: StrongholdPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.Turn`: `DEPTH`, `HEIGHT`, `WIDTH`
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_229702_,  StructurePieceAccessor p_229703_,  RandomSource p_229704_)`
- `public static StrongholdPieces.RightTurn createPiece(StructurePieceAccessor p_229706_,  RandomSource p_229707_,  int p_229708_,  int p_229709_,  int p_229710_,  Direction p_229711_,  int p_229712_)`
- `public void postProcess(WorldGenLevel p_229694_,  StructureManager p_229695_,  ChunkGenerator p_229696_,  RandomSource p_229697_,  BoundingBox p_229698_,  ChunkPos p_229699_,  BlockPos p_229700_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `addAdditionalSaveData`, `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.RoomCrossing

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.RoomCrossing`

Enclosing class: StrongholdPieces

### Fields
- `protected static final int WIDTH` (= 11)
- `protected static final int HEIGHT` (= 7)
- `protected static final int DEPTH` (= 11)
- `protected final int type`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229745_,  CompoundTag p_229746_)`
- `public void addChildren(StructurePiece p_229733_,  StructurePieceAccessor p_229734_,  RandomSource p_229735_)`
- `public static StrongholdPieces.RoomCrossing createPiece(StructurePieceAccessor p_229737_,  RandomSource p_229738_,  int p_229739_,  int p_229740_,  int p_229741_,  Direction p_229742_,  int p_229743_)`
- `public void postProcess(WorldGenLevel p_229725_,  StructureManager p_229726_,  ChunkGenerator p_229727_,  RandomSource p_229728_,  BoundingBox p_229729_,  ChunkPos p_229730_,  BlockPos p_229731_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.SmoothStoneSelector

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.SmoothStoneSelector`

Enclosing class: StrongholdPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece.BlockSelector`: `next`

### Methods
- `public void next(RandomSource p_229749_,  int p_229750_,  int p_229751_,  int p_229752_,  boolean p_229753_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece.BlockSelector`: `getNext`

## StrongholdPieces.StairsDown

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StairsDown`

Enclosing class: StrongholdPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 11)
- `private static final int DEPTH` (= 5)
- `private final boolean isSource`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229795_,  CompoundTag p_229796_)`
- `public void addChildren(StructurePiece p_229783_,  StructurePieceAccessor p_229784_,  RandomSource p_229785_)`
- `public static StrongholdPieces.StairsDown createPiece(StructurePieceAccessor p_229787_,  RandomSource p_229788_,  int p_229789_,  int p_229790_,  int p_229791_,  Direction p_229792_,  int p_229793_)`
- `public void postProcess(WorldGenLevel p_229775_,  StructureManager p_229776_,  ChunkGenerator p_229777_,  RandomSource p_229778_,  BoundingBox p_229779_,  ChunkPos p_229780_,  BlockPos p_229781_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.StartPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StartPiece`

Enclosing class: StrongholdPieces

### Fields
- `public StrongholdPieces.PieceWeight previousPiece`
- `@Nullable public StrongholdPieces.PortalRoom portalRoomPiece`
- `public final List<StructurePiece> pendingChildren`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public BlockPos getLocatorPosition()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StairsDown`: `addAdditionalSaveData`, `addChildren`, `createPiece`, `postProcess`
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.Straight

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.Straight`

Enclosing class: StrongholdPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 5)
- `private static final int DEPTH` (= 7)
- `private final boolean leftChild`
- `private final boolean rightChild`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229840_,  CompoundTag p_229841_)`
- `public void addChildren(StructurePiece p_229828_,  StructurePieceAccessor p_229829_,  RandomSource p_229830_)`
- `public static StrongholdPieces.Straight createPiece(StructurePieceAccessor p_229832_,  RandomSource p_229833_,  int p_229834_,  int p_229835_,  int p_229836_,  Direction p_229837_,  int p_229838_)`
- `public void postProcess(WorldGenLevel p_229820_,  StructureManager p_229821_,  ChunkGenerator p_229822_,  RandomSource p_229823_,  BoundingBox p_229824_,  ChunkPos p_229825_,  BlockPos p_229826_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.StraightStairsDown

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StraightStairsDown`

Enclosing class: StrongholdPieces

### Fields
- `private static final int WIDTH` (= 5)
- `private static final int HEIGHT` (= 11)
- `private static final int DEPTH` (= 8)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `public void addChildren(StructurePiece p_229861_,  StructurePieceAccessor p_229862_,  RandomSource p_229863_)`
- `public static StrongholdPieces.StraightStairsDown createPiece(StructurePieceAccessor p_229865_,  RandomSource p_229866_,  int p_229867_,  int p_229868_,  int p_229869_,  Direction p_229870_,  int p_229871_)`
- `public void postProcess(WorldGenLevel p_229853_,  StructureManager p_229854_,  ChunkGenerator p_229855_,  RandomSource p_229856_,  BoundingBox p_229857_,  ChunkPos p_229858_,  BlockPos p_229859_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `addAdditionalSaveData`, `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.StrongholdPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`

Enclosing class: StrongholdPieces

### Fields
- `protected StrongholdPieces.StrongholdPiece.SmallDoorType entryDoor`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229891_,  CompoundTag p_229892_)`
- `protected void generateSmallDoor(WorldGenLevel p_229881_,  RandomSource p_229882_,  BoundingBox p_229883_,  StrongholdPieces.StrongholdPiece.SmallDoorType p_229884_,  int p_229885_,  int p_229886_,  int p_229887_)`
- `protected StrongholdPieces.StrongholdPiece.SmallDoorType randomSmallDoor(RandomSource p_229900_)`
- `@Nullable protected StructurePiece generateSmallDoorChildForward(StrongholdPieces.StartPiece p_229894_,  StructurePieceAccessor p_229895_,  RandomSource p_229896_,  int p_229897_,  int p_229898_)`
- `@Nullable protected StructurePiece generateSmallDoorChildLeft(StrongholdPieces.StartPiece p_229902_,  StructurePieceAccessor p_229903_,  RandomSource p_229904_,  int p_229905_,  int p_229906_)`
- `@Nullable protected StructurePiece generateSmallDoorChildRight(StrongholdPieces.StartPiece p_229908_,  StructurePieceAccessor p_229909_,  RandomSource p_229910_,  int p_229911_,  int p_229912_)`
- `protected static boolean isOkBox(BoundingBox p_229889_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `postProcess`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdPieces.Turn

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.Turn`

Enclosing class: StrongholdPieces

### Fields
- `protected static final int WIDTH` (= 5)
- `protected static final int HEIGHT` (= 5)
- `protected static final int DEPTH` (= 5)

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `entryDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.StrongholdPieces.StrongholdPiece`: `addAdditionalSaveData`, `generateSmallDoor`, `generateSmallDoorChildForward`, `generateSmallDoorChildLeft`, `generateSmallDoorChildRight`, `isOkBox`, `randomSmallDoor`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `postProcess`, `reorient`, `setGenDepth`, `setOrientation`

## StrongholdStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.StrongholdStructure`

### Fields
- `public static final com.mojang.serialization.Codec<StrongholdStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229941_)`
- `private static void generatePieces(StructurePiecesBuilder p_229946_,  Structure.GenerationContext p_229947_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## SwampHutPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.SwampHutPiece`

### Fields
- `private boolean spawnedWitch`
- `private boolean spawnedCat`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`: `depth`, `height`, `heightPosition`, `width`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_229969_,  CompoundTag p_229970_)`
- `public void postProcess(WorldGenLevel p_229961_,  StructureManager p_229962_,  ChunkGenerator p_229963_,  RandomSource p_229964_,  BoundingBox p_229965_,  ChunkPos p_229966_,  BlockPos p_229967_)`
- `private void spawnCat(ServerLevelAccessor p_229958_,  BoundingBox p_229959_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.ScatteredFeaturePiece`: `updateAverageGroundHeight`, `updateHeightPositionToLowestGroundHeight`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getRotation`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `move`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## SwampHutStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.SwampHutStructure`

### Fields
- `public static final com.mojang.serialization.Codec<SwampHutStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_229976_)`
- `private static void generatePieces(StructurePiecesBuilder p_229981_,  Structure.GenerationContext p_229982_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `afterPlace`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`

## WoodlandMansionPieces

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces`

### Methods
- `public static void generateMansion(StructureTemplateManager p_229986_,  BlockPos p_229987_,  Rotation p_229988_,  List<WoodlandMansionPieces.WoodlandMansionPiece> p_229989_,  RandomSource p_229990_)`

## WoodlandMansionPieces.FirstFloorRoomCollection

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.FirstFloorRoomCollection`

Enclosing class: WoodlandMansionPieces

### Methods
- `public String get1x1(RandomSource p_229995_)`
- `public String get1x1Secret(RandomSource p_230000_)`
- `public String get1x2SideEntrance(RandomSource p_229997_,  boolean p_229998_)`
- `public String get1x2FrontEntrance(RandomSource p_230002_,  boolean p_230003_)`
- `public String get1x2Secret(RandomSource p_230005_)`
- `public String get2x2(RandomSource p_230007_)`
- `public String get2x2Secret(RandomSource p_230009_)`

## WoodlandMansionPieces.FloorRoomCollection

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.FloorRoomCollection`

Enclosing class: WoodlandMansionPieces

### Methods
- `public abstract String get1x1(RandomSource p_230011_)`
- `public abstract String get1x1Secret(RandomSource p_230014_)`
- `public abstract String get1x2SideEntrance(RandomSource p_230012_,  boolean p_230013_)`
- `public abstract String get1x2FrontEntrance(RandomSource p_230015_,  boolean p_230016_)`
- `public abstract String get1x2Secret(RandomSource p_230017_)`
- `public abstract String get2x2(RandomSource p_230018_)`
- `public abstract String get2x2Secret(RandomSource p_230019_)`

## WoodlandMansionPieces.MansionGrid

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.MansionGrid`

Enclosing class: WoodlandMansionPieces

### Fields
- `private static final int DEFAULT_SIZE` (= 11)
- `private static final int CLEAR` (= 0)
- `private static final int CORRIDOR` (= 1)
- `private static final int ROOM` (= 2)
- `private static final int START_ROOM` (= 3)
- `private static final int TEST_ROOM` (= 4)
- `private static final int BLOCKED` (= 5)
- `private static final int ROOM_1x1` (= 65536)
- `private static final int ROOM_1x2` (= 131072)
- `private static final int ROOM_2x2` (= 262144)
- `private static final int ROOM_ORIGIN_FLAG` (= 1048576)
- `private static final int ROOM_DOOR_FLAG` (= 2097152)
- `private static final int ROOM_STAIRS_FLAG` (= 4194304)
- `private static final int ROOM_CORRIDOR_FLAG` (= 8388608)
- `private static final int ROOM_TYPE_MASK` (= 983040)
- `private static final int ROOM_ID_MASK` (= 65535)
- `private final RandomSource random`
- `final WoodlandMansionPieces.SimpleGrid baseGrid`
- `final WoodlandMansionPieces.SimpleGrid thirdFloorGrid`
- `final WoodlandMansionPieces.SimpleGrid[] floorRooms`
- `final int entranceX`
- `final int entranceY`

### Methods
- `public static boolean isHouse(WoodlandMansionPieces.SimpleGrid p_230048_,  int p_230049_,  int p_230050_)`
- `public boolean isRoomId(WoodlandMansionPieces.SimpleGrid p_230052_,  int p_230053_,  int p_230054_,  int p_230055_,  int p_230056_)`
- `@Nullable public Direction get1x2RoomDirection(WoodlandMansionPieces.SimpleGrid p_230068_,  int p_230069_,  int p_230070_,  int p_230071_,  int p_230072_)`
- `private void recursiveCorridor(WoodlandMansionPieces.SimpleGrid p_230058_,  int p_230059_,  int p_230060_,  Direction p_230061_,  int p_230062_)`
- `private boolean cleanEdges(WoodlandMansionPieces.SimpleGrid p_230046_)`
- `private void setupThirdFloor()`
- `private void identifyRooms(WoodlandMansionPieces.SimpleGrid p_230064_,  WoodlandMansionPieces.SimpleGrid p_230065_)`

## WoodlandMansionPieces.MansionPiecePlacer

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.MansionPiecePlacer`

Enclosing class: WoodlandMansionPieces

### Fields
- `private final StructureTemplateManager structureTemplateManager`
- `private final RandomSource random`
- `private int startX`
- `private int startY`

### Methods
- `public void createMansion(BlockPos p_230081_,  Rotation p_230082_,  List<WoodlandMansionPieces.WoodlandMansionPiece> p_230083_,  WoodlandMansionPieces.MansionGrid p_230084_)`
- `private void traverseOuterWalls(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230089_,  WoodlandMansionPieces.PlacementData p_230090_,  WoodlandMansionPieces.SimpleGrid p_230091_,  Direction p_230092_,  int p_230093_,  int p_230094_,  int p_230095_,  int p_230096_)`
- `private void createRoof(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230103_,  BlockPos p_230104_,  Rotation p_230105_,  WoodlandMansionPieces.SimpleGrid p_230106_,  @Nullable  WoodlandMansionPieces.SimpleGrid p_230107_)`
- `private void entrance(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230086_,  WoodlandMansionPieces.PlacementData p_230087_)`
- `private void traverseWallPiece(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230130_,  WoodlandMansionPieces.PlacementData p_230131_)`
- `private void traverseTurn(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230133_,  WoodlandMansionPieces.PlacementData p_230134_)`
- `private void traverseInnerTurn(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230136_,  WoodlandMansionPieces.PlacementData p_230137_)`
- `private void addRoom1x1(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230109_,  BlockPos p_230110_,  Rotation p_230111_,  Direction p_230112_,  WoodlandMansionPieces.FloorRoomCollection p_230113_)`
- `private void addRoom1x2(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230122_,  BlockPos p_230123_,  Rotation p_230124_,  Direction p_230125_,  Direction p_230126_,  WoodlandMansionPieces.FloorRoomCollection p_230127_,  boolean p_230128_)`
- `private void addRoom2x2(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230115_,  BlockPos p_230116_,  Rotation p_230117_,  Direction p_230118_,  Direction p_230119_,  WoodlandMansionPieces.FloorRoomCollection p_230120_)`
- `private void addRoom2x2Secret(List<WoodlandMansionPieces.WoodlandMansionPiece> p_230098_,  BlockPos p_230099_,  Rotation p_230100_,  WoodlandMansionPieces.FloorRoomCollection p_230101_)`

## WoodlandMansionPieces.PlacementData

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.PlacementData`

Enclosing class: WoodlandMansionPieces

### Fields
- `public Rotation rotation`
- `public BlockPos position`
- `public String wallType`

## WoodlandMansionPieces.SecondFloorRoomCollection

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.SecondFloorRoomCollection`

Enclosing class: WoodlandMansionPieces

### Methods
- `public String get1x1(RandomSource p_230144_)`
- `public String get1x1Secret(RandomSource p_230149_)`
- `public String get1x2SideEntrance(RandomSource p_230146_,  boolean p_230147_)`
- `public String get1x2FrontEntrance(RandomSource p_230151_,  boolean p_230152_)`
- `public String get1x2Secret(RandomSource p_230154_)`
- `public String get2x2(RandomSource p_230156_)`
- `public String get2x2Secret(RandomSource p_230158_)`

## WoodlandMansionPieces.SimpleGrid

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.SimpleGrid`

Enclosing class: WoodlandMansionPieces

### Fields
- `private final int[][] grid`
- `final int width`
- `final int height`
- `private final int valueIfOutside`

### Methods
- `public void set(int p_230171_,  int p_230172_,  int p_230173_)`
- `public void set(int p_230180_,  int p_230181_,  int p_230182_,  int p_230183_,  int p_230184_)`
- `public int get(int p_230168_,  int p_230169_)`
- `public void setif(int p_230175_,  int p_230176_,  int p_230177_,  int p_230178_)`
- `public boolean edgesTo(int p_230186_,  int p_230187_,  int p_230188_)`

## WoodlandMansionPieces.ThirdFloorRoomCollection

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.ThirdFloorRoomCollection`

Enclosing class: WoodlandMansionPieces

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.SecondFloorRoomCollection`: `get1x1`, `get1x1Secret`, `get1x2FrontEntrance`, `get1x2Secret`, `get1x2SideEntrance`, `get2x2`, `get2x2Secret`

## WoodlandMansionPieces.WoodlandMansionPiece

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionPieces.WoodlandMansionPiece`

Enclosing class: WoodlandMansionPieces

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `placeSettings`, `template`, `templateName`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `boundingBox`, `CAVE_AIR`, `genDepth`

### Methods
- `protected ResourceLocation makeTemplateLocation()`
- `private static ResourceLocation makeLocation(String p_230211_)`
- `private static StructurePlaceSettings makeSettings(Mirror p_230205_,  Rotation p_230206_)`
- `protected void addAdditionalSaveData(StructurePieceSerializationContext p_230208_,  CompoundTag p_230209_)`
- `protected void handleDataMarker(String p_230213_,  BlockPos p_230214_,  ServerLevelAccessor p_230215_,  RandomSource p_230216_,  BoundingBox p_230217_)`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.TemplateStructurePiece`: `getRotation`, `move`, `placeSettings`, `postProcess`, `template`, `templatePosition`
- from `net.minecraft.world.level.levelgen.structure.StructurePiece`: `addChildren`, `canBeReplaced`, `createBoundingBox`, `createChest`, `createChest`, `createDispenser`, `createTag`, `fillColumnDown`, `findCollisionPiece`, `generateAirBox`, `generateBox`, `generateBox`, `generateBox`, `generateBox`, `generateMaybeBox`, `generateUpperHalfSphere`, `getBlock`, `getBoundingBox`, `getGenDepth`, `getLocatorPosition`, `getMirror`, `getOrientation`, `getRandomHorizontalDirection`, `getType`, `getWorldPos`, `getWorldX`, `getWorldY`, `getWorldZ`, `isCloseToChunk`, `isInterior`, `isReplaceableByStructures`, `makeBoundingBox`, `maybeGenerateBlock`, `placeBlock`, `reorient`, `setGenDepth`, `setOrientation`

## WoodlandMansionStructure

*class* `net.minecraft.world.level.levelgen.structure.structures.WoodlandMansionStructure`

### Fields
- `public static final com.mojang.serialization.Codec<WoodlandMansionStructure> CODEC`

### Inherited fields
- from `net.minecraft.world.level.levelgen.structure.Structure`: `DIRECT_CODEC`

### Methods
- `public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_230235_)`
- `private void generatePieces(StructurePiecesBuilder p_230242_,  Structure.GenerationContext p_230243_,  BlockPos p_230244_,  Rotation p_230245_)`
- `public void afterPlace(WorldGenLevel p_230227_,  StructureManager p_230228_,  ChunkGenerator p_230229_,  RandomSource p_230230_,  BoundingBox p_230231_,  ChunkPos p_230232_,  PiecesContainer p_230233_)`
- `public StructureType<?> type()`

### Inherited methods
- from `net.minecraft.world.level.levelgen.structure.Structure`: `adjustBoundingBox`, `biomes`, `findValidGenerationPoint`, `generate`, `getLowestY`, `getLowestY`, `getLowestYIn5by5BoxOffset7Blocks`, `getModifiedStructureSettings`, `modifiableStructureInfo`, `onTopOfChunkCenter`, `settingsCodec`, `simpleCodec`, `spawnOverrides`, `step`, `terrainAdaptation`
