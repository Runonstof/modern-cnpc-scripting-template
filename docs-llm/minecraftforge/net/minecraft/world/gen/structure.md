# net.minecraft.world.gen.structure

- [ComponentScatteredFeaturePieces](#componentscatteredfeaturepieces)
- [ComponentScatteredFeaturePieces.DesertPyramid](#componentscatteredfeaturepieces.desertpyramid)
- [ComponentScatteredFeaturePieces.Igloo](#componentscatteredfeaturepieces.igloo)
- [ComponentScatteredFeaturePieces.JunglePyramid](#componentscatteredfeaturepieces.junglepyramid)
- [ComponentScatteredFeaturePieces.SwampHut](#componentscatteredfeaturepieces.swamphut)
- [MapGenEndCity](#mapgenendcity)
- [MapGenEndCity.Start](#mapgenendcity.start)
- [MapGenMineshaft](#mapgenmineshaft)
- [MapGenMineshaft.Type](#mapgenmineshaft.type)
- [MapGenNetherBridge](#mapgennetherbridge)
- [MapGenNetherBridge.Start](#mapgennetherbridge.start)
- [MapGenScatteredFeature](#mapgenscatteredfeature)
- [MapGenScatteredFeature.Start](#mapgenscatteredfeature.start)
- [MapGenStronghold](#mapgenstronghold)
- [MapGenStronghold.Start](#mapgenstronghold.start)
- [MapGenStructure](#mapgenstructure)
- [MapGenStructureData](#mapgenstructuredata)
- [MapGenStructureIO](#mapgenstructureio)
- [MapGenVillage](#mapgenvillage)
- [MapGenVillage.Start](#mapgenvillage.start)
- [StructureBoundingBox](#structureboundingbox)
- [StructureComponent](#structurecomponent)
- [StructureComponent.BlockSelector](#structurecomponent.blockselector)
- [StructureComponentTemplate](#structurecomponenttemplate)
- [StructureEndCityPieces](#structureendcitypieces)
- [StructureEndCityPieces.CityTemplate](#structureendcitypieces.citytemplate)
- [StructureMineshaftPieces](#structuremineshaftpieces)
- [StructureMineshaftPieces.Corridor](#structuremineshaftpieces.corridor)
- [StructureMineshaftPieces.Cross](#structuremineshaftpieces.cross)
- [StructureMineshaftPieces.Room](#structuremineshaftpieces.room)
- [StructureMineshaftPieces.Stairs](#structuremineshaftpieces.stairs)
- [StructureMineshaftStart](#structuremineshaftstart)
- [StructureNetherBridgePieces](#structurenetherbridgepieces)
- [StructureNetherBridgePieces.Corridor](#structurenetherbridgepieces.corridor)
- [StructureNetherBridgePieces.Corridor2](#structurenetherbridgepieces.corridor2)
- [StructureNetherBridgePieces.Corridor3](#structurenetherbridgepieces.corridor3)
- [StructureNetherBridgePieces.Corridor4](#structurenetherbridgepieces.corridor4)
- [StructureNetherBridgePieces.Corridor5](#structurenetherbridgepieces.corridor5)
- [StructureNetherBridgePieces.Crossing](#structurenetherbridgepieces.crossing)
- [StructureNetherBridgePieces.Crossing2](#structurenetherbridgepieces.crossing2)
- [StructureNetherBridgePieces.Crossing3](#structurenetherbridgepieces.crossing3)
- [StructureNetherBridgePieces.End](#structurenetherbridgepieces.end)
- [StructureNetherBridgePieces.Entrance](#structurenetherbridgepieces.entrance)
- [StructureNetherBridgePieces.NetherStalkRoom](#structurenetherbridgepieces.netherstalkroom)
- [StructureNetherBridgePieces.Stairs](#structurenetherbridgepieces.stairs)
- [StructureNetherBridgePieces.Start](#structurenetherbridgepieces.start)
- [StructureNetherBridgePieces.Straight](#structurenetherbridgepieces.straight)
- [StructureNetherBridgePieces.Throne](#structurenetherbridgepieces.throne)
- [StructureOceanMonument](#structureoceanmonument)
- [StructureOceanMonument.StartMonument](#structureoceanmonument.startmonument)
- [StructureOceanMonumentPieces](#structureoceanmonumentpieces)
- [StructureOceanMonumentPieces.DoubleXRoom](#structureoceanmonumentpieces.doublexroom)
- [StructureOceanMonumentPieces.DoubleXYRoom](#structureoceanmonumentpieces.doublexyroom)
- [StructureOceanMonumentPieces.DoubleYRoom](#structureoceanmonumentpieces.doubleyroom)
- [StructureOceanMonumentPieces.DoubleYZRoom](#structureoceanmonumentpieces.doubleyzroom)
- [StructureOceanMonumentPieces.DoubleZRoom](#structureoceanmonumentpieces.doublezroom)
- [StructureOceanMonumentPieces.EntryRoom](#structureoceanmonumentpieces.entryroom)
- [StructureOceanMonumentPieces.MonumentBuilding](#structureoceanmonumentpieces.monumentbuilding)
- [StructureOceanMonumentPieces.MonumentCoreRoom](#structureoceanmonumentpieces.monumentcoreroom)
- [StructureOceanMonumentPieces.Penthouse](#structureoceanmonumentpieces.penthouse)
- [StructureOceanMonumentPieces.Piece](#structureoceanmonumentpieces.piece)
- [StructureOceanMonumentPieces.SimpleRoom](#structureoceanmonumentpieces.simpleroom)
- [StructureOceanMonumentPieces.SimpleTopRoom](#structureoceanmonumentpieces.simpletoproom)
- [StructureOceanMonumentPieces.WingRoom](#structureoceanmonumentpieces.wingroom)
- [StructureStart](#structurestart)
- [StructureStrongholdPieces](#structurestrongholdpieces)
- [StructureStrongholdPieces.ChestCorridor](#structurestrongholdpieces.chestcorridor)
- [StructureStrongholdPieces.Corridor](#structurestrongholdpieces.corridor)
- [StructureStrongholdPieces.Crossing](#structurestrongholdpieces.crossing)
- [StructureStrongholdPieces.LeftTurn](#structurestrongholdpieces.leftturn)
- [StructureStrongholdPieces.Library](#structurestrongholdpieces.library)
- [StructureStrongholdPieces.PortalRoom](#structurestrongholdpieces.portalroom)
- [StructureStrongholdPieces.Prison](#structurestrongholdpieces.prison)
- [StructureStrongholdPieces.RightTurn](#structurestrongholdpieces.rightturn)
- [StructureStrongholdPieces.RoomCrossing](#structurestrongholdpieces.roomcrossing)
- [StructureStrongholdPieces.Stairs](#structurestrongholdpieces.stairs)
- [StructureStrongholdPieces.Stairs2](#structurestrongholdpieces.stairs2)
- [StructureStrongholdPieces.StairsStraight](#structurestrongholdpieces.stairsstraight)
- [StructureStrongholdPieces.Straight](#structurestrongholdpieces.straight)
- [StructureStrongholdPieces.Stronghold](#structurestrongholdpieces.stronghold)
- [StructureStrongholdPieces.Stronghold.Door](#structurestrongholdpieces.stronghold.door)
- [StructureVillagePieces](#structurevillagepieces)
- [StructureVillagePieces.Church](#structurevillagepieces.church)
- [StructureVillagePieces.Field1](#structurevillagepieces.field1)
- [StructureVillagePieces.Field2](#structurevillagepieces.field2)
- [StructureVillagePieces.Hall](#structurevillagepieces.hall)
- [StructureVillagePieces.House1](#structurevillagepieces.house1)
- [StructureVillagePieces.House2](#structurevillagepieces.house2)
- [StructureVillagePieces.House3](#structurevillagepieces.house3)
- [StructureVillagePieces.House4Garden](#structurevillagepieces.house4garden)
- [StructureVillagePieces.Path](#structurevillagepieces.path)
- [StructureVillagePieces.PieceWeight](#structurevillagepieces.pieceweight)
- [StructureVillagePieces.Road](#structurevillagepieces.road)
- [StructureVillagePieces.Start](#structurevillagepieces.start)
- [StructureVillagePieces.Torch](#structurevillagepieces.torch)
- [StructureVillagePieces.Village](#structurevillagepieces.village)
- [StructureVillagePieces.Well](#structurevillagepieces.well)
- [StructureVillagePieces.WoodHut](#structurevillagepieces.woodhut)
- [WoodlandMansion](#woodlandmansion)
- [WoodlandMansion.Start](#woodlandmansion.start)
- [WoodlandMansionPieces](#woodlandmansionpieces)
- [WoodlandMansionPieces.MansionTemplate](#woodlandmansionpieces.mansiontemplate)
## ComponentScatteredFeaturePieces

*class* `net.minecraft.world.gen.structure.ComponentScatteredFeaturePieces`

### Methods
- `public static void registerScatteredFeaturePieces()`

## ComponentScatteredFeaturePieces.DesertPyramid

*class* `net.minecraft.world.gen.structure.ComponentScatteredFeaturePieces.DesertPyramid`

Enclosing class: ComponentScatteredFeaturePieces

### Fields
- `protected int width`
- `protected int height`
- `protected int depth`
- `protected int horizontalPos`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected boolean offsetToAverageGroundLevel(World worldIn,  StructureBoundingBox structurebb,  int yOffset)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## ComponentScatteredFeaturePieces.Igloo

*class* `net.minecraft.world.gen.structure.ComponentScatteredFeaturePieces.Igloo`

Enclosing class: ComponentScatteredFeaturePieces

### Fields
- `protected int width`
- `protected int height`
- `protected int depth`
- `protected int horizontalPos`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected boolean offsetToAverageGroundLevel(World worldIn,  StructureBoundingBox structurebb,  int yOffset)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## ComponentScatteredFeaturePieces.JunglePyramid

*class* `net.minecraft.world.gen.structure.ComponentScatteredFeaturePieces.JunglePyramid`

Enclosing class: ComponentScatteredFeaturePieces

### Fields
- `protected int width`
- `protected int height`
- `protected int depth`
- `protected int horizontalPos`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected boolean offsetToAverageGroundLevel(World worldIn,  StructureBoundingBox structurebb,  int yOffset)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## ComponentScatteredFeaturePieces.SwampHut

*class* `net.minecraft.world.gen.structure.ComponentScatteredFeaturePieces.SwampHut`

Enclosing class: ComponentScatteredFeaturePieces

### Fields
- `protected int width`
- `protected int height`
- `protected int depth`
- `protected int horizontalPos`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected boolean offsetToAverageGroundLevel(World worldIn,  StructureBoundingBox structurebb,  int yOffset)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## MapGenEndCity

*class* `net.minecraft.world.gen.structure.MapGenEndCity`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenEndCity.Start

*class* `net.minecraft.world.gen.structure.MapGenEndCity.Start`

Enclosing class: MapGenEndCity

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Methods
- `public boolean isSizeableStructure()`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `generateStructure`, `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readFromNBT`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`, `writeToNBT`

## MapGenMineshaft

*class* `net.minecraft.world.gen.structure.MapGenMineshaft`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenMineshaft.Type

*enum* `net.minecraft.world.gen.structure.MapGenMineshaft.Type`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<MapGenMineshaft.Type>

Enclosing class: MapGenMineshaft

### Fields
- `public static final MapGenMineshaft.Type NORMAL`
- `public static final MapGenMineshaft.Type MESA`

### Methods
- `public static MapGenMineshaft.Type[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (MapGenMineshaft.Type c : MapGenMineshaft.Type.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static MapGenMineshaft.Type valueOf(java.lang.String name)`
  Returns the enum constant of this type with the specified name.
  The string must match exactly an identifier used to declare an
  enum constant in this type. (Extraneous whitespace characters are
  not permitted.)
  - param: name - the name of the enum constant to be returned.
  - returns: the enum constant with the specified name
  - throws: java.lang.IllegalArgumentException - if this enum type has no constant with the specified name
  - throws: java.lang.NullPointerException - if the argument is null
- `public static MapGenMineshaft.Type byId(int id)`

### Inherited methods
- from `java.lang.Enum`: `clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

## MapGenNetherBridge

*class* `net.minecraft.world.gen.structure.MapGenNetherBridge`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `public java.util.List<Biome.SpawnListEntry> getSpawnList()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenNetherBridge.Start

*class* `net.minecraft.world.gen.structure.MapGenNetherBridge.Start`

Enclosing class: MapGenNetherBridge

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `generateStructure`, `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isSizeableStructure`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readFromNBT`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`, `writeToNBT`

## MapGenScatteredFeature

*class* `net.minecraft.world.gen.structure.MapGenScatteredFeature`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`
- `public boolean isSwampHut(BlockPos pos)`
- `public java.util.List<Biome.SpawnListEntry> getMonsters()`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenScatteredFeature.Start

*class* `net.minecraft.world.gen.structure.MapGenScatteredFeature.Start`

Enclosing class: MapGenScatteredFeature

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `generateStructure`, `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isSizeableStructure`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readFromNBT`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`, `writeToNBT`

## MapGenStronghold

*class* `net.minecraft.world.gen.structure.MapGenStronghold`

### Fields
- `public final java.util.List<Biome> allowedBiomes`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenStronghold.Start

*class* `net.minecraft.world.gen.structure.MapGenStronghold.Start`

Enclosing class: MapGenStronghold

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `generateStructure`, `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isSizeableStructure`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readFromNBT`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`, `writeToNBT`

## MapGenStructure

*class* `net.minecraft.world.gen.structure.MapGenStructure`

### Fields
- `protected <any> structureMap`

### Inherited fields
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public abstract java.lang.String getStructureName()`
- `protected final void recursiveGenerate(World worldIn,  int chunkX,  int chunkZ,  int originalX,  int originalZ,  ChunkPrimer chunkPrimerIn)`
- `public boolean generateStructure(World worldIn,  java.util.Random randomIn,  ChunkPos chunkCoord)`
- `public boolean isInsideStructure(BlockPos pos)`
- `protected StructureStart getStructureAt(BlockPos pos)`
- `public boolean isPositionInStructure(World worldIn,  BlockPos pos)`
- `public abstract BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected void initializeStructureData(World worldIn)`
- `protected abstract boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `protected abstract StructureStart getStructureStart(int chunkX,  int chunkZ)`
- `protected static BlockPos findNearestStructurePosBySpacing(World worldIn,  MapGenStructure p_191069_1_,  BlockPos p_191069_2_,  int p_191069_3_,  int p_191069_4_,  int p_191069_5_,  boolean p_191069_6_,  int p_191069_7_,  boolean findUnexplored)`

### Inherited methods
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenStructureData

*class* `net.minecraft.world.gen.structure.MapGenStructureData`

All Implemented Interfaces: INBTSerializable<NBTTagCompound>

### Inherited fields
- from `net.minecraft.world.storage.WorldSavedData`: `mapName`

### Methods
- `public void readFromNBT(NBTTagCompound nbt)`
- `public NBTTagCompound writeToNBT(NBTTagCompound compound)`
- `public void writeInstance(NBTTagCompound tagCompoundIn,  int chunkX,  int chunkZ)`
- `public static java.lang.String formatChunkCoords(int chunkX,  int chunkZ)`
- `public NBTTagCompound getTagCompound()`

### Inherited methods
- from `net.minecraft.world.storage.WorldSavedData`: `deserializeNBT`, `isDirty`, `markDirty`, `serializeNBT`, `setDirty`

## MapGenStructureIO

*class* `net.minecraft.world.gen.structure.MapGenStructureIO`

### Methods
- `public static void registerStructure(java.lang.Class<? extends StructureStart> startClass,  java.lang.String structureName)`
- `public static void registerStructureComponent(java.lang.Class<? extends StructureComponent> componentClass,  java.lang.String componentName)`
- `public static java.lang.String getStructureStartName(StructureStart start)`
- `public static java.lang.String getStructureComponentName(StructureComponent component)`
- `public static StructureStart getStructureStart(NBTTagCompound tagCompound,  World worldIn)`
- `public static StructureComponent getStructureComponent(NBTTagCompound tagCompound,  World worldIn)`

## MapGenVillage

*class* `net.minecraft.world.gen.structure.MapGenVillage`

### Fields
- `public static java.util.List<Biome> VILLAGE_SPAWN_BIOMES`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## MapGenVillage.Start

*class* `net.minecraft.world.gen.structure.MapGenVillage.Start`

Enclosing class: MapGenVillage

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Methods
- `public boolean isSizeableStructure()`
- `public void writeToNBT(NBTTagCompound tagCompound)`
- `public void readFromNBT(NBTTagCompound tagCompound)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `generateStructure`, `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`

## StructureBoundingBox

*class* `net.minecraft.world.gen.structure.StructureBoundingBox`

### Fields
- `public int minX`
- `public int minY`
- `public int minZ`
- `public int maxX`
- `public int maxY`
- `public int maxZ`

### Methods
- `public static StructureBoundingBox getNewBoundingBox()`
- `public static StructureBoundingBox getComponentToAddBoundingBox(int structureMinX,  int structureMinY,  int structureMinZ,  int xMin,  int yMin,  int zMin,  int xMax,  int yMax,  int zMax,  EnumFacing facing)`
- `public static StructureBoundingBox createProper(int x1,  int y1,  int z1,  int x2,  int y2,  int z2)`
- `public boolean intersectsWith(StructureBoundingBox structurebb)`
- `public boolean intersectsWith(int minXIn,  int minZIn,  int maxXIn,  int maxZIn)`
- `public void expandTo(StructureBoundingBox sbb)`
- `public void offset(int x,  int y,  int z)`
- `public boolean isVecInside(Vec3i vec)`
- `public Vec3i getLength()`
- `public int getXSize()`
- `public int getYSize()`
- `public int getZSize()`
- `public java.lang.String toString()`
- `public NBTTagIntArray toNBTTagIntArray()`

## StructureComponent

*class* `net.minecraft.world.gen.structure.StructureComponent`

### Fields
- `protected StructureBoundingBox boundingBox`
- `protected int componentType`

### Methods
- `public final NBTTagCompound createStructureBaseNBT()`
- `protected abstract void writeStructureToNBT(NBTTagCompound tagCompound)`
- `public void readStructureBaseNBT(World worldIn,  NBTTagCompound tagCompound)`
- `protected abstract void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public abstract boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `public StructureBoundingBox getBoundingBox()`
- `public int getComponentType()`
- `public static StructureComponent findIntersecting(java.util.List<StructureComponent> listIn,  StructureBoundingBox boundingboxIn)`
- `protected boolean isLiquidInStructureBoundingBox(World worldIn,  StructureBoundingBox boundingboxIn)`
- `protected int getXWithOffset(int x,  int z)`
- `protected int getYWithOffset(int y)`
- `protected int getZWithOffset(int x,  int z)`
- `protected void setBlockState(World worldIn,  IBlockState blockstateIn,  int x,  int y,  int z,  StructureBoundingBox boundingboxIn)`
- `protected IBlockState getBlockStateFromPos(World worldIn,  int x,  int y,  int z,  StructureBoundingBox boundingboxIn)`
- `protected int getSkyBrightness(World worldIn,  int x,  int y,  int z,  StructureBoundingBox boundingboxIn)`
- `protected void fillWithAir(World worldIn,  StructureBoundingBox structurebb,  int minX,  int minY,  int minZ,  int maxX,  int maxY,  int maxZ)`
- `protected void fillWithBlocks(World worldIn,  StructureBoundingBox boundingboxIn,  int xMin,  int yMin,  int zMin,  int xMax,  int yMax,  int zMax,  IBlockState boundaryBlockState,  IBlockState insideBlockState,  boolean existingOnly)`
- `protected void fillWithRandomizedBlocks(World worldIn,  StructureBoundingBox boundingboxIn,  int minX,  int minY,  int minZ,  int maxX,  int maxY,  int maxZ,  boolean alwaysReplace,  java.util.Random rand,  StructureComponent.BlockSelector blockselector)`
- `protected void generateMaybeBox(World worldIn,  StructureBoundingBox sbb,  java.util.Random rand,  float chance,  int x1,  int y1,  int z1,  int x2,  int y2,  int z2,  IBlockState edgeState,  IBlockState state,  boolean requireNonAir,  int requiredSkylight)`
- `protected void randomlyPlaceBlock(World worldIn,  StructureBoundingBox boundingboxIn,  java.util.Random rand,  float chance,  int x,  int y,  int z,  IBlockState blockstateIn)`
- `protected void randomlyRareFillWithBlocks(World worldIn,  StructureBoundingBox boundingboxIn,  int minX,  int minY,  int minZ,  int maxX,  int maxY,  int maxZ,  IBlockState blockstateIn,  boolean excludeAir)`
- `protected void clearCurrentPositionBlocksUpwards(World worldIn,  int x,  int y,  int z,  StructureBoundingBox structurebb)`
- `protected void replaceAirAndLiquidDownwards(World worldIn,  IBlockState blockstateIn,  int x,  int y,  int z,  StructureBoundingBox boundingboxIn)`
- `protected boolean generateChest(World worldIn,  StructureBoundingBox structurebb,  java.util.Random randomIn,  int x,  int y,  int z,  ResourceLocation loot)`
- `protected boolean generateChest(World p_191080_1_,  StructureBoundingBox p_191080_2_,  java.util.Random p_191080_3_,  BlockPos p_191080_4_,  ResourceLocation p_191080_5_,  IBlockState p_191080_6_)`
- `protected boolean createDispenser(World worldIn,  StructureBoundingBox sbb,  java.util.Random rand,  int x,  int y,  int z,  EnumFacing facing,  ResourceLocation lootTableIn)`
- `protected void generateDoor(World worldIn,  StructureBoundingBox sbb,  java.util.Random rand,  int x,  int y,  int z,  EnumFacing facing,  BlockDoor door)`
- `public void offset(int x,  int y,  int z)`
- `public EnumFacing getCoordBaseMode()`
- `public void setCoordBaseMode(EnumFacing facing)`

## StructureComponent.BlockSelector

*class* `net.minecraft.world.gen.structure.StructureComponent.BlockSelector`

Enclosing class: StructureComponent

### Fields
- `protected IBlockState blockstate`

### Methods
- `public abstract void selectBlocks(java.util.Random rand,  int x,  int y,  int z,  boolean wall)`
- `public IBlockState getBlockState()`

## StructureComponentTemplate

*class* `net.minecraft.world.gen.structure.StructureComponentTemplate`

### Fields
- `protected Template template`
- `protected PlacementSettings placeSettings`
- `protected BlockPos templatePosition`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void setup(Template templateIn,  BlockPos pos,  PlacementSettings settings)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected abstract void handleDataMarker(java.lang.String function,  BlockPos pos,  World worldIn,  java.util.Random rand,  StructureBoundingBox sbb)`
- `public void offset(int x,  int y,  int z)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureEndCityPieces

*class* `net.minecraft.world.gen.structure.StructureEndCityPieces`

### Methods
- `public static void registerPieces()`
- `public static void startHouseTower(TemplateManager p_191087_0_,  BlockPos p_191087_1_,  Rotation p_191087_2_,  java.util.List<StructureComponent> p_191087_3_,  java.util.Random p_191087_4_)`

## StructureEndCityPieces.CityTemplate

*class* `net.minecraft.world.gen.structure.StructureEndCityPieces.CityTemplate`

Enclosing class: StructureEndCityPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponentTemplate`: `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void handleDataMarker(java.lang.String function,  BlockPos pos,  World worldIn,  java.util.Random rand,  StructureBoundingBox sbb)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponentTemplate`: `addComponentParts`, `offset`, `setup`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureMineshaftPieces

*class* `net.minecraft.world.gen.structure.StructureMineshaftPieces`

### Methods
- `public static void registerStructurePieces()`

## StructureMineshaftPieces.Corridor

*class* `net.minecraft.world.gen.structure.StructureMineshaftPieces.Corridor`

Enclosing class: StructureMineshaftPieces

### Fields
- `protected MapGenMineshaft.Type mineShaftType`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureBoundingBox findCorridorSize(java.util.List<StructureComponent> p_175814_0_,  java.util.Random rand,  int x,  int y,  int z,  EnumFacing facing)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `protected boolean generateChest(World worldIn,  StructureBoundingBox structurebb,  java.util.Random randomIn,  int x,  int y,  int z,  ResourceLocation loot)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected IBlockState getPlanksBlock()`
- `protected IBlockState getFenceBlock()`
- `protected boolean isSupportingBox(World p_189918_1_,  StructureBoundingBox p_189918_2_,  int p_189918_3_,  int p_189918_4_,  int p_189918_5_,  int p_189918_6_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureMineshaftPieces.Cross

*class* `net.minecraft.world.gen.structure.StructureMineshaftPieces.Cross`

Enclosing class: StructureMineshaftPieces

### Fields
- `protected MapGenMineshaft.Type mineShaftType`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureBoundingBox findCrossing(java.util.List<StructureComponent> listIn,  java.util.Random rand,  int x,  int y,  int z,  EnumFacing facing)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected IBlockState getPlanksBlock()`
- `protected IBlockState getFenceBlock()`
- `protected boolean isSupportingBox(World p_189918_1_,  StructureBoundingBox p_189918_2_,  int p_189918_3_,  int p_189918_4_,  int p_189918_5_,  int p_189918_6_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureMineshaftPieces.Room

*class* `net.minecraft.world.gen.structure.StructureMineshaftPieces.Room`

Enclosing class: StructureMineshaftPieces

### Fields
- `protected MapGenMineshaft.Type mineShaftType`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `public void offset(int x,  int y,  int z)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected IBlockState getPlanksBlock()`
- `protected IBlockState getFenceBlock()`
- `protected boolean isSupportingBox(World p_189918_1_,  StructureBoundingBox p_189918_2_,  int p_189918_3_,  int p_189918_4_,  int p_189918_5_,  int p_189918_6_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureMineshaftPieces.Stairs

*class* `net.minecraft.world.gen.structure.StructureMineshaftPieces.Stairs`

Enclosing class: StructureMineshaftPieces

### Fields
- `protected MapGenMineshaft.Type mineShaftType`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureBoundingBox findStairs(java.util.List<StructureComponent> listIn,  java.util.Random rand,  int x,  int y,  int z,  EnumFacing facing)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected IBlockState getPlanksBlock()`
- `protected IBlockState getFenceBlock()`
- `protected boolean isSupportingBox(World p_189918_1_,  StructureBoundingBox p_189918_2_,  int p_189918_3_,  int p_189918_4_,  int p_189918_5_,  int p_189918_6_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureMineshaftStart

*class* `net.minecraft.world.gen.structure.StructureMineshaftStart`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `generateStructure`, `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isSizeableStructure`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readFromNBT`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`, `writeToNBT`

## StructureNetherBridgePieces

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces`

### Methods
- `public static void registerNetherFortressPieces()`

## StructureNetherBridgePieces.Corridor

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Corridor`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Corridor createPiece(java.util.List<StructureComponent> p_175879_0_,  java.util.Random p_175879_1_,  int p_175879_2_,  int p_175879_3_,  int p_175879_4_,  EnumFacing p_175879_5_,  int p_175879_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Corridor2

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Corridor2`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Corridor2 createPiece(java.util.List<StructureComponent> p_175876_0_,  java.util.Random p_175876_1_,  int p_175876_2_,  int p_175876_3_,  int p_175876_4_,  EnumFacing p_175876_5_,  int p_175876_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Corridor3

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Corridor3`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Corridor3 createPiece(java.util.List<StructureComponent> p_175883_0_,  java.util.Random p_175883_1_,  int p_175883_2_,  int p_175883_3_,  int p_175883_4_,  EnumFacing p_175883_5_,  int p_175883_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Corridor4

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Corridor4`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Corridor4 createPiece(java.util.List<StructureComponent> p_175880_0_,  java.util.Random p_175880_1_,  int p_175880_2_,  int p_175880_3_,  int p_175880_4_,  EnumFacing p_175880_5_,  int p_175880_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Corridor5

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Corridor5`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Corridor5 createPiece(java.util.List<StructureComponent> p_175877_0_,  java.util.Random p_175877_1_,  int p_175877_2_,  int p_175877_3_,  int p_175877_4_,  EnumFacing p_175877_5_,  int p_175877_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Crossing

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Crossing`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Crossing createPiece(java.util.List<StructureComponent> p_175873_0_,  java.util.Random p_175873_1_,  int p_175873_2_,  int p_175873_3_,  int p_175873_4_,  EnumFacing p_175873_5_,  int p_175873_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Crossing2

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Crossing2`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Crossing2 createPiece(java.util.List<StructureComponent> p_175878_0_,  java.util.Random p_175878_1_,  int p_175878_2_,  int p_175878_3_,  int p_175878_4_,  EnumFacing p_175878_5_,  int p_175878_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Crossing3

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Crossing3`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Crossing3 createPiece(java.util.List<StructureComponent> p_175885_0_,  java.util.Random p_175885_1_,  int p_175885_2_,  int p_175885_3_,  int p_175885_4_,  EnumFacing p_175885_5_,  int p_175885_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.End

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.End`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureNetherBridgePieces.End createPiece(java.util.List<StructureComponent> p_175884_0_,  java.util.Random p_175884_1_,  int p_175884_2_,  int p_175884_3_,  int p_175884_4_,  EnumFacing p_175884_5_,  int p_175884_6_)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Entrance

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Entrance`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Entrance createPiece(java.util.List<StructureComponent> p_175881_0_,  java.util.Random p_175881_1_,  int p_175881_2_,  int p_175881_3_,  int p_175881_4_,  EnumFacing p_175881_5_,  int p_175881_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.NetherStalkRoom

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.NetherStalkRoom`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.NetherStalkRoom createPiece(java.util.List<StructureComponent> p_175875_0_,  java.util.Random p_175875_1_,  int p_175875_2_,  int p_175875_3_,  int p_175875_4_,  EnumFacing p_175875_5_,  int p_175875_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Stairs

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Stairs`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Stairs createPiece(java.util.List<StructureComponent> p_175872_0_,  java.util.Random p_175872_1_,  int p_175872_2_,  int p_175872_3_,  int p_175872_4_,  int p_175872_5_,  EnumFacing p_175872_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Start

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Start`

Enclosing class: StructureNetherBridgePieces

### Fields
- `public net.minecraft.world.gen.structure.StructureNetherBridgePieces.PieceWeight lastPlaced`
- `public java.util.List<net.minecraft.world.gen.structure.StructureNetherBridgePieces.PieceWeight> primaryWeights`
- `public java.util.List<net.minecraft.world.gen.structure.StructureNetherBridgePieces.PieceWeight> secondaryWeights`
- `public java.util.List<StructureComponent> pendingChildren`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Crossing3`: `addComponentParts`, `buildComponent`, `createPiece`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Straight

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Straight`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureNetherBridgePieces.Straight createPiece(java.util.List<StructureComponent> p_175882_0_,  java.util.Random p_175882_1_,  int p_175882_2_,  int p_175882_3_,  int p_175882_4_,  EnumFacing p_175882_5_,  int p_175882_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureNetherBridgePieces.Throne

*class* `net.minecraft.world.gen.structure.StructureNetherBridgePieces.Throne`

Enclosing class: StructureNetherBridgePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `public static StructureNetherBridgePieces.Throne createPiece(java.util.List<StructureComponent> p_175874_0_,  java.util.Random p_175874_1_,  int p_175874_2_,  int p_175874_3_,  int p_175874_4_,  int p_175874_5_,  EnumFacing p_175874_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected StructureComponent getNextComponentNormal(StructureNetherBridgePieces.Start p_74963_1_,  java.util.List<StructureComponent> p_74963_2_,  java.util.Random p_74963_3_,  int p_74963_4_,  int p_74963_5_,  boolean p_74963_6_)`
- `protected StructureComponent getNextComponentX(StructureNetherBridgePieces.Start p_74961_1_,  java.util.List<StructureComponent> p_74961_2_,  java.util.Random p_74961_3_,  int p_74961_4_,  int p_74961_5_,  boolean p_74961_6_)`
- `protected StructureComponent getNextComponentZ(StructureNetherBridgePieces.Start p_74965_1_,  java.util.List<StructureComponent> p_74965_2_,  java.util.Random p_74965_3_,  int p_74965_4_,  int p_74965_5_,  boolean p_74965_6_)`
- `protected static boolean isAboveGround(StructureBoundingBox p_74964_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonument

*class* `net.minecraft.world.gen.structure.StructureOceanMonument`

### Fields
- `public static final java.util.List<Biome> WATER_BIOMES`
- `public static final java.util.List<Biome> SPAWN_BIOMES`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`
- `public java.util.List<Biome.SpawnListEntry> getMonsters()`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## StructureOceanMonument.StartMonument

*class* `net.minecraft.world.gen.structure.StructureOceanMonument.StartMonument`

Enclosing class: StructureOceanMonument

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Methods
- `public void generateStructure(World worldIn,  java.util.Random rand,  StructureBoundingBox structurebb)`
- `public boolean isValidForPostProcess(ChunkPos pair)`
- `public void notifyPostProcessAt(ChunkPos pair)`
- `public void writeToNBT(NBTTagCompound tagCompound)`
- `public void readFromNBT(NBTTagCompound tagCompound)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isSizeableStructure`, `markAvailableHeight`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`

## StructureOceanMonumentPieces

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces`

### Methods
- `public static void registerOceanMonumentPieces()`

## StructureOceanMonumentPieces.DoubleXRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.DoubleXRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.DoubleXYRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.DoubleXYRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.DoubleYRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.DoubleYRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.DoubleYZRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.DoubleYZRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.DoubleZRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.DoubleZRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.EntryRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.EntryRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.MonumentBuilding

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.MonumentBuilding`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.MonumentCoreRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.MonumentCoreRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.Penthouse

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Penthouse`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.Piece

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`

Enclosing class: StructureOceanMonumentPieces

### Fields
- `protected static final IBlockState ROUGH_PRISMARINE`
- `protected static final IBlockState BRICKS_PRISMARINE`
- `protected static final IBlockState DARK_PRISMARINE`
- `protected static final IBlockState DOT_DECO_DATA`
- `protected static final IBlockState SEA_LANTERN`
- `protected static final IBlockState WATER`
- `protected static final int GRIDROOM_SOURCE_INDEX`
- `protected static final int GRIDROOM_TOP_CONNECT_INDEX`
- `protected static final int GRIDROOM_LEFTWING_CONNECT_INDEX`
- `protected static final int GRIDROOM_RIGHTWING_CONNECT_INDEX`
- `protected net.minecraft.world.gen.structure.StructureOceanMonumentPieces.RoomDefinition roomDefinition`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected static final int getRoomIndex(int p_175820_0_,  int p_175820_1_,  int p_175820_2_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void generateWaterBox(World p_181655_1_,  StructureBoundingBox p_181655_2_,  int p_181655_3_,  int p_181655_4_,  int p_181655_5_,  int p_181655_6_,  int p_181655_7_,  int p_181655_8_,  boolean p_181655_9_)`
- `protected void generateDefaultFloor(World worldIn,  StructureBoundingBox p_175821_2_,  int p_175821_3_,  int p_175821_4_,  boolean p_175821_5_)`
- `protected void generateBoxOnFillOnly(World worldIn,  StructureBoundingBox p_175819_2_,  int p_175819_3_,  int p_175819_4_,  int p_175819_5_,  int p_175819_6_,  int p_175819_7_,  int p_175819_8_,  IBlockState p_175819_9_)`
- `protected boolean doesChunkIntersect(StructureBoundingBox p_175818_1_,  int p_175818_2_,  int p_175818_3_,  int p_175818_4_,  int p_175818_5_)`
- `protected boolean spawnElder(World worldIn,  StructureBoundingBox p_175817_2_,  int p_175817_3_,  int p_175817_4_,  int p_175817_5_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `addComponentParts`, `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.SimpleRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.SimpleRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.SimpleTopRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.SimpleTopRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureOceanMonumentPieces.WingRoom

*class* `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.WingRoom`

Enclosing class: StructureOceanMonumentPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `BRICKS_PRISMARINE`, `DARK_PRISMARINE`, `DOT_DECO_DATA`, `GRIDROOM_LEFTWING_CONNECT_INDEX`, `GRIDROOM_RIGHTWING_CONNECT_INDEX`, `GRIDROOM_SOURCE_INDEX`, `GRIDROOM_TOP_CONNECT_INDEX`, `roomDefinition`, `ROUGH_PRISMARINE`, `SEA_LANTERN`, `WATER`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureOceanMonumentPieces.Piece`: `doesChunkIntersect`, `generateBoxOnFillOnly`, `generateDefaultFloor`, `generateWaterBox`, `getRoomIndex`, `readStructureFromNBT`, `spawnElder`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStart

*class* `net.minecraft.world.gen.structure.StructureStart`

### Fields
- `protected java.util.List<StructureComponent> components`
- `protected StructureBoundingBox boundingBox`

### Methods
- `public StructureBoundingBox getBoundingBox()`
- `public java.util.List<StructureComponent> getComponents()`
- `public void generateStructure(World worldIn,  java.util.Random rand,  StructureBoundingBox structurebb)`
- `protected void updateBoundingBox()`
- `public NBTTagCompound writeStructureComponentsToNBT(int chunkX,  int chunkZ)`
- `public void writeToNBT(NBTTagCompound tagCompound)`
- `public void readStructureComponentsFromNBT(World worldIn,  NBTTagCompound tagCompound)`
- `public void readFromNBT(NBTTagCompound tagCompound)`
- `protected void markAvailableHeight(World worldIn,  java.util.Random rand,  int p_75067_3_)`
- `protected void setRandomHeight(World worldIn,  java.util.Random rand,  int p_75070_3_,  int p_75070_4_)`
- `public boolean isSizeableStructure()`
- `public boolean isValidForPostProcess(ChunkPos pair)`
- `public void notifyPostProcessAt(ChunkPos pair)`
- `public int getChunkPosX()`
- `public int getChunkPosZ()`

## StructureStrongholdPieces

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces`

### Methods
- `public static void registerStrongholdPieces()`
- `public static void prepareStructurePieces()`

## StructureStrongholdPieces.ChestCorridor

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.ChestCorridor`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.ChestCorridor createPiece(java.util.List<StructureComponent> p_175868_0_,  java.util.Random p_175868_1_,  int p_175868_2_,  int p_175868_3_,  int p_175868_4_,  EnumFacing p_175868_5_,  int p_175868_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Corridor

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Corridor`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureBoundingBox findPieceBox(java.util.List<StructureComponent> p_175869_0_,  java.util.Random p_175869_1_,  int p_175869_2_,  int p_175869_3_,  int p_175869_4_,  EnumFacing p_175869_5_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Crossing

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Crossing`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.Crossing createPiece(java.util.List<StructureComponent> p_175866_0_,  java.util.Random p_175866_1_,  int p_175866_2_,  int p_175866_3_,  int p_175866_4_,  EnumFacing p_175866_5_,  int p_175866_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.LeftTurn

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.LeftTurn`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.LeftTurn createPiece(java.util.List<StructureComponent> p_175867_0_,  java.util.Random p_175867_1_,  int p_175867_2_,  int p_175867_3_,  int p_175867_4_,  EnumFacing p_175867_5_,  int p_175867_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`, `readStructureFromNBT`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Library

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Library`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureStrongholdPieces.Library createPiece(java.util.List<StructureComponent> p_175864_0_,  java.util.Random p_175864_1_,  int p_175864_2_,  int p_175864_3_,  int p_175864_4_,  EnumFacing p_175864_5_,  int p_175864_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.PortalRoom

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.PortalRoom`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.PortalRoom createPiece(java.util.List<StructureComponent> p_175865_0_,  java.util.Random p_175865_1_,  int p_175865_2_,  int p_175865_3_,  int p_175865_4_,  EnumFacing p_175865_5_,  int p_175865_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Prison

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Prison`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.Prison createPiece(java.util.List<StructureComponent> p_175860_0_,  java.util.Random p_175860_1_,  int p_175860_2_,  int p_175860_3_,  int p_175860_4_,  EnumFacing p_175860_5_,  int p_175860_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`, `readStructureFromNBT`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.RightTurn

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.RightTurn`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.LeftTurn`: `createPiece`
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`, `readStructureFromNBT`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.RoomCrossing

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.RoomCrossing`

Enclosing class: StructureStrongholdPieces

### Fields
- `protected int roomType`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.RoomCrossing createPiece(java.util.List<StructureComponent> p_175859_0_,  java.util.Random p_175859_1_,  int p_175859_2_,  int p_175859_3_,  int p_175859_4_,  EnumFacing p_175859_5_,  int p_175859_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Stairs

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stairs`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.Stairs createPiece(java.util.List<StructureComponent> p_175863_0_,  java.util.Random p_175863_1_,  int p_175863_2_,  int p_175863_3_,  int p_175863_4_,  EnumFacing p_175863_5_,  int p_175863_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Stairs2

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stairs2`

Enclosing class: StructureStrongholdPieces

### Fields
- `public net.minecraft.world.gen.structure.StructureStrongholdPieces.PieceWeight lastPlaced`
- `public StructureStrongholdPieces.PortalRoom strongholdPortalRoom`
- `public java.util.List<StructureComponent> pendingChildren`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stairs`: `addComponentParts`, `buildComponent`, `createPiece`, `readStructureFromNBT`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.StairsStraight

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.StairsStraight`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.StairsStraight createPiece(java.util.List<StructureComponent> p_175861_0_,  java.util.Random p_175861_1_,  int p_175861_2_,  int p_175861_3_,  int p_175861_4_,  EnumFacing p_175861_5_,  int p_175861_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`, `readStructureFromNBT`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Straight

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Straight`

Enclosing class: StructureStrongholdPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `entryDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureStrongholdPieces.Straight createPiece(java.util.List<StructureComponent> p_175862_0_,  java.util.Random p_175862_1_,  int p_175862_2_,  int p_175862_3_,  int p_175862_4_,  EnumFacing p_175862_5_,  int p_175862_6_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`: `canStrongholdGoDeeper`, `getNextComponentNormal`, `getNextComponentX`, `getNextComponentZ`, `getRandomDoor`, `placeDoor`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Stronghold

*class* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold`

Enclosing class: StructureStrongholdPieces

### Fields
- `protected StructureStrongholdPieces.Stronghold.Door entryDoor`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void placeDoor(World worldIn,  java.util.Random p_74990_2_,  StructureBoundingBox p_74990_3_,  StructureStrongholdPieces.Stronghold.Door p_74990_4_,  int p_74990_5_,  int p_74990_6_,  int p_74990_7_)`
- `protected StructureStrongholdPieces.Stronghold.Door getRandomDoor(java.util.Random p_74988_1_)`
- `protected StructureComponent getNextComponentNormal(StructureStrongholdPieces.Stairs2 p_74986_1_,  java.util.List<StructureComponent> p_74986_2_,  java.util.Random p_74986_3_,  int p_74986_4_,  int p_74986_5_)`
- `protected StructureComponent getNextComponentX(StructureStrongholdPieces.Stairs2 p_74989_1_,  java.util.List<StructureComponent> p_74989_2_,  java.util.Random p_74989_3_,  int p_74989_4_,  int p_74989_5_)`
- `protected StructureComponent getNextComponentZ(StructureStrongholdPieces.Stairs2 p_74987_1_,  java.util.List<StructureComponent> p_74987_2_,  java.util.Random p_74987_3_,  int p_74987_4_,  int p_74987_5_)`
- `protected static boolean canStrongholdGoDeeper(StructureBoundingBox p_74991_0_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `addComponentParts`, `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`

## StructureStrongholdPieces.Stronghold.Door

*enum* `net.minecraft.world.gen.structure.StructureStrongholdPieces.Stronghold.Door`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<StructureStrongholdPieces.Stronghold.Door>

Enclosing class: StructureStrongholdPieces.Stronghold

### Fields
- `public static final StructureStrongholdPieces.Stronghold.Door OPENING`
- `public static final StructureStrongholdPieces.Stronghold.Door WOOD_DOOR`
- `public static final StructureStrongholdPieces.Stronghold.Door GRATES`
- `public static final StructureStrongholdPieces.Stronghold.Door IRON_DOOR`

### Methods
- `public static StructureStrongholdPieces.Stronghold.Door[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (StructureStrongholdPieces.Stronghold.Door c : StructureStrongholdPieces.Stronghold.Door.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static StructureStrongholdPieces.Stronghold.Door valueOf(java.lang.String name)`
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

## StructureVillagePieces

*class* `net.minecraft.world.gen.structure.StructureVillagePieces`

### Methods
- `public static void registerVillagePieces()`
- `public static java.util.List<StructureVillagePieces.PieceWeight> getStructureVillageWeightedPieceList(java.util.Random random,  int size)`

## StructureVillagePieces.Church

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Church`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureVillagePieces.Church createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175854_1_,  java.util.Random rand,  int p_175854_3_,  int p_175854_4_,  int p_175854_5_,  EnumFacing facing,  int p_175854_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected int chooseProfession(int villagersSpawnedIn,  int currentVillagerProfession)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Field1

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Field1`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureVillagePieces.Field1 createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175851_1_,  java.util.Random rand,  int p_175851_3_,  int p_175851_4_,  int p_175851_5_,  EnumFacing facing,  int p_175851_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Field2

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Field2`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureVillagePieces.Field2 createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175852_1_,  java.util.Random rand,  int p_175852_3_,  int p_175852_4_,  int p_175852_5_,  EnumFacing facing,  int p_175852_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Hall

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Hall`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureVillagePieces.Hall createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175857_1_,  java.util.Random rand,  int p_175857_3_,  int p_175857_4_,  int p_175857_5_,  EnumFacing facing,  int p_175857_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected int chooseProfession(int villagersSpawnedIn,  int currentVillagerProfession)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.House1

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.House1`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureVillagePieces.House1 createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175850_1_,  java.util.Random rand,  int p_175850_3_,  int p_175850_4_,  int p_175850_5_,  EnumFacing facing,  int p_175850_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected int chooseProfession(int villagersSpawnedIn,  int currentVillagerProfession)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.House2

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.House2`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureVillagePieces.House2 createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175855_1_,  java.util.Random rand,  int p_175855_3_,  int p_175855_4_,  int p_175855_5_,  EnumFacing facing,  int p_175855_7_)`
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`
- `protected int chooseProfession(int villagersSpawnedIn,  int currentVillagerProfession)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.House3

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.House3`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureVillagePieces.House3 createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175849_1_,  java.util.Random rand,  int p_175849_3_,  int p_175849_4_,  int p_175849_5_,  EnumFacing facing,  int p_175849_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.House4Garden

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.House4Garden`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureVillagePieces.House4Garden createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175858_1_,  java.util.Random rand,  int p_175858_3_,  int p_175858_4_,  int p_175858_5_,  EnumFacing facing,  int p_175858_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Path

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Path`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public static StructureBoundingBox findPieceBox(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175848_1_,  java.util.Random rand,  int p_175848_3_,  int p_175848_4_,  int p_175848_5_,  EnumFacing facing)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.PieceWeight

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.PieceWeight`

Enclosing class: StructureVillagePieces

### Fields
- `public java.lang.Class<? extends StructureVillagePieces.Village> villagePieceClass`
- `public final int villagePieceWeight`
- `public int villagePiecesSpawned`
- `public int villagePiecesLimit`

### Methods
- `public boolean canSpawnMoreVillagePiecesOfType(int componentType)`
- `public boolean canSpawnMoreVillagePieces()`

## StructureVillagePieces.Road

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Road`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `addComponentParts`, `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Start

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Start`

Enclosing class: StructureVillagePieces

### Fields
- `public BiomeProvider biomeProvider`
- `public int terrainType`
- `public StructureVillagePieces.PieceWeight lastPlaced`
- `public java.util.List<StructureVillagePieces.PieceWeight> structureVillageWeightedPieceList`
- `public java.util.List<StructureComponent> pendingHouses`
- `public java.util.List<StructureComponent> pendingRoads`
- `public Biome biome`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Well`: `addComponentParts`, `buildComponent`
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Torch

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Torch`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public static StructureBoundingBox findPieceBox(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175856_1_,  java.util.Random rand,  int p_175856_3_,  int p_175856_4_,  int p_175856_5_,  EnumFacing facing)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Village

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Village`

Enclosing class: StructureVillagePieces

### Fields
- `protected int averageGroundLvl`
- `protected int structureType`
- `protected boolean isZombieInfested`
- `protected StructureVillagePieces.Start startPiece`

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected StructureComponent getNextComponentNN(StructureVillagePieces.Start start,  java.util.List<StructureComponent> structureComponents,  java.util.Random rand,  int p_74891_4_,  int p_74891_5_)`
- `protected StructureComponent getNextComponentPP(StructureVillagePieces.Start start,  java.util.List<StructureComponent> structureComponents,  java.util.Random rand,  int p_74894_4_,  int p_74894_5_)`
- `protected int getAverageGroundLevel(World worldIn,  StructureBoundingBox structurebb)`
- `protected static boolean canVillageGoDeeper(StructureBoundingBox structurebb)`
- `protected void spawnVillagers(World worldIn,  StructureBoundingBox structurebb,  int x,  int y,  int z,  int count)`
- `@Deprecated protected int chooseProfession(int villagersSpawnedIn,  int currentVillagerProfession)` (deprecated)
  Deprecated.
- `protected VillagerRegistry.VillagerProfession chooseForgeProfession(int count,  VillagerRegistry.VillagerProfession prof)`
- `protected IBlockState getBiomeSpecificBlockState(IBlockState blockstateIn)`
- `protected BlockDoor biomeDoor()`
- `protected void createVillageDoor(World p_189927_1_,  StructureBoundingBox p_189927_2_,  java.util.Random p_189927_3_,  int p_189927_4_,  int p_189927_5_,  int p_189927_6_,  EnumFacing p_189927_7_)`
- `protected void placeTorch(World p_189926_1_,  EnumFacing p_189926_2_,  int p_189926_3_,  int p_189926_4_,  int p_189926_5_,  StructureBoundingBox p_189926_6_)`
- `protected void replaceAirAndLiquidDownwards(World worldIn,  IBlockState blockstateIn,  int x,  int y,  int z,  StructureBoundingBox boundingboxIn)`
- `protected void setStructureType(int p_189924_1_)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponent`: `addComponentParts`, `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.Well

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.Well`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `public void buildComponent(StructureComponent componentIn,  java.util.List<StructureComponent> listIn,  java.util.Random rand)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `readStructureFromNBT`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`, `writeStructureToNBT`
- from `net.minecraft.world.gen.structure.StructureComponent`: `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## StructureVillagePieces.WoodHut

*class* `net.minecraft.world.gen.structure.StructureVillagePieces.WoodHut`

Enclosing class: StructureVillagePieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `averageGroundLvl`, `isZombieInfested`, `startPiece`, `structureType`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `public static StructureVillagePieces.WoodHut createPiece(StructureVillagePieces.Start start,  java.util.List<StructureComponent> p_175853_1_,  java.util.Random rand,  int p_175853_3_,  int p_175853_4_,  int p_175853_5_,  EnumFacing facing,  int p_175853_7_)`
- `public boolean addComponentParts(World worldIn,  java.util.Random randomIn,  StructureBoundingBox structureBoundingBoxIn)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureVillagePieces.Village`: `biomeDoor`, `canVillageGoDeeper`, `chooseForgeProfession`, `chooseProfession`, `createVillageDoor`, `getAverageGroundLevel`, `getBiomeSpecificBlockState`, `getNextComponentNN`, `getNextComponentPP`, `placeTorch`, `replaceAirAndLiquidDownwards`, `setStructureType`, `spawnVillagers`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `offset`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `setBlockState`, `setCoordBaseMode`

## WoodlandMansion

*class* `net.minecraft.world.gen.structure.WoodlandMansion`

### Fields
- `public static final java.util.List<Biome> ALLOWED_BIOMES`

### Inherited fields
- from `net.minecraft.world.gen.structure.MapGenStructure`: `structureMap`
- from `net.minecraft.world.gen.MapGenBase`: `rand`, `range`, `world`

### Methods
- `public java.lang.String getStructureName()`
- `protected boolean canSpawnStructureAtCoords(int chunkX,  int chunkZ)`
- `public BlockPos getNearestStructurePos(World worldIn,  BlockPos pos,  boolean findUnexplored)`
- `protected StructureStart getStructureStart(int chunkX,  int chunkZ)`

### Inherited methods
- from `net.minecraft.world.gen.structure.MapGenStructure`: `findNearestStructurePosBySpacing`, `generateStructure`, `getStructureAt`, `initializeStructureData`, `isInsideStructure`, `isPositionInStructure`, `recursiveGenerate`
- from `net.minecraft.world.gen.MapGenBase`: `generate`, `setupChunkSeed`

## WoodlandMansion.Start

*class* `net.minecraft.world.gen.structure.WoodlandMansion.Start`

Enclosing class: WoodlandMansion

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureStart`: `boundingBox`, `components`

### Methods
- `public void generateStructure(World worldIn,  java.util.Random rand,  StructureBoundingBox structurebb)`
- `public boolean isSizeableStructure()`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureStart`: `getBoundingBox`, `getChunkPosX`, `getChunkPosZ`, `getComponents`, `isValidForPostProcess`, `markAvailableHeight`, `notifyPostProcessAt`, `readFromNBT`, `readStructureComponentsFromNBT`, `setRandomHeight`, `updateBoundingBox`, `writeStructureComponentsToNBT`, `writeToNBT`

## WoodlandMansionPieces

*class* `net.minecraft.world.gen.structure.WoodlandMansionPieces`

### Methods
- `public static void registerWoodlandMansionPieces()`
- `public static void generateMansion(TemplateManager p_191152_0_,  BlockPos p_191152_1_,  Rotation p_191152_2_,  java.util.List<WoodlandMansionPieces.MansionTemplate> p_191152_3_,  java.util.Random p_191152_4_)`

## WoodlandMansionPieces.MansionTemplate

*class* `net.minecraft.world.gen.structure.WoodlandMansionPieces.MansionTemplate`

Enclosing class: WoodlandMansionPieces

### Inherited fields
- from `net.minecraft.world.gen.structure.StructureComponentTemplate`: `placeSettings`, `template`, `templatePosition`
- from `net.minecraft.world.gen.structure.StructureComponent`: `boundingBox`, `componentType`

### Methods
- `protected void writeStructureToNBT(NBTTagCompound tagCompound)`
- `protected void readStructureFromNBT(NBTTagCompound tagCompound,  TemplateManager p_143011_2_)`
- `protected void handleDataMarker(java.lang.String function,  BlockPos pos,  World worldIn,  java.util.Random rand,  StructureBoundingBox sbb)`

### Inherited methods
- from `net.minecraft.world.gen.structure.StructureComponentTemplate`: `addComponentParts`, `offset`, `setup`
- from `net.minecraft.world.gen.structure.StructureComponent`: `buildComponent`, `clearCurrentPositionBlocksUpwards`, `createDispenser`, `createStructureBaseNBT`, `fillWithAir`, `fillWithBlocks`, `fillWithRandomizedBlocks`, `findIntersecting`, `generateChest`, `generateChest`, `generateDoor`, `generateMaybeBox`, `getBlockStateFromPos`, `getBoundingBox`, `getComponentType`, `getCoordBaseMode`, `getSkyBrightness`, `getXWithOffset`, `getYWithOffset`, `getZWithOffset`, `isLiquidInStructureBoundingBox`, `randomlyPlaceBlock`, `randomlyRareFillWithBlocks`, `readStructureBaseNBT`, `replaceAirAndLiquidDownwards`, `setBlockState`, `setCoordBaseMode`
