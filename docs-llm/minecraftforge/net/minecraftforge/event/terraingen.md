# net.minecraftforge.event.terraingen

- [BiomeEvent](#biomeevent)
- [BiomeEvent.BiomeColor](#biomeevent.biomecolor)
- [BiomeEvent.CreateDecorator](#biomeevent.createdecorator)
- [BiomeEvent.GetFoliageColor](#biomeevent.getfoliagecolor)
- [BiomeEvent.GetGrassColor](#biomeevent.getgrasscolor)
- [BiomeEvent.GetVillageBlockID](#biomeevent.getvillageblockid)
- [BiomeEvent.GetWaterColor](#biomeevent.getwatercolor)
- [ChunkGeneratorEvent](#chunkgeneratorevent)
- [ChunkGeneratorEvent.InitNoiseField](#chunkgeneratorevent.initnoisefield)
- [ChunkGeneratorEvent.ReplaceBiomeBlocks](#chunkgeneratorevent.replacebiomeblocks)
- [DecorateBiomeEvent](#decoratebiomeevent)
- [DecorateBiomeEvent.Decorate](#decoratebiomeevent.decorate)
- [DecorateBiomeEvent.Decorate.EventType](#decoratebiomeevent.decorate.eventtype)
- [DecorateBiomeEvent.Post](#decoratebiomeevent.post)
- [DecorateBiomeEvent.Pre](#decoratebiomeevent.pre)
- [DeferredBiomeDecorator](#deferredbiomedecorator)
- [InitMapGenEvent](#initmapgenevent)
- [InitMapGenEvent.EventType](#initmapgenevent.eventtype)
- [InitNoiseGensEvent](#initnoisegensevent)
- [InitNoiseGensEvent.Context](#initnoisegensevent.context)
- [InitNoiseGensEvent.ContextEnd](#initnoisegensevent.contextend)
- [InitNoiseGensEvent.ContextHell](#initnoisegensevent.contexthell)
- [InitNoiseGensEvent.ContextOverworld](#initnoisegensevent.contextoverworld)
- [OreGenEvent](#oregenevent)
- [OreGenEvent.GenerateMinable](#oregenevent.generateminable)
- [OreGenEvent.GenerateMinable.EventType](#oregenevent.generateminable.eventtype)
- [OreGenEvent.Post](#oregenevent.post)
- [OreGenEvent.Pre](#oregenevent.pre)
- [PopulateChunkEvent](#populatechunkevent)
- [PopulateChunkEvent.Populate](#populatechunkevent.populate)
- [PopulateChunkEvent.Populate.EventType](#populatechunkevent.populate.eventtype)
- [PopulateChunkEvent.Post](#populatechunkevent.post)
- [PopulateChunkEvent.Pre](#populatechunkevent.pre)
- [SaplingGrowTreeEvent](#saplinggrowtreeevent)
- [TerrainGen](#terraingen)
- [WorldTypeEvent](#worldtypeevent)
- [WorldTypeEvent.BiomeSize](#worldtypeevent.biomesize)
- [WorldTypeEvent.InitBiomeGens](#worldtypeevent.initbiomegens)
## BiomeEvent

*class* `net.minecraftforge.event.terraingen.BiomeEvent`

BiomeEvent is fired whenever an event involving biomes occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.TERRAIN_GEN_BUS
 unless stated otherwise in their Javadocs.

### Methods
- `public Biome getBiome()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BiomeEvent.BiomeColor

*class* `net.minecraftforge.event.terraingen.BiomeEvent.BiomeColor`

BiomeColor is fired whenever an event involving biome colors occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 All children of this event are fired on the MinecraftForge.EVENT_BUS.

Enclosing class: BiomeEvent

### Methods
- `public int getOriginalColor()`
- `public int getNewColor()`
- `public void setNewColor(int newColor)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.BiomeEvent`: `getBiome`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BiomeEvent.CreateDecorator

*class* `net.minecraftforge.event.terraingen.BiomeEvent.CreateDecorator`

CreateDecorator is fired when a BiomeDecorator is created.

 This event is fired whenever a BiomeDecorator is created in
 DeferredBiomeDecorator.fireCreateEventAndReplace(Biome).

 originalBiomeDecorator contains the original BiomeDecorator that would be used in vanilla.
 newBiomeDecorator contains the new BiomeDecoration to be used by Minecraft.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.TERRAIN_GEN_BUS.

Enclosing class: BiomeEvent

### Methods
- `public BiomeDecorator getOriginalBiomeDecorator()`
- `public BiomeDecorator getNewBiomeDecorator()`
- `public void setNewBiomeDecorator(BiomeDecorator newBiomeDecorator)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.BiomeEvent`: `getBiome`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BiomeEvent.GetFoliageColor

*class* `net.minecraftforge.event.terraingen.BiomeEvent.GetFoliageColor`

This event is fired when a biome is queried for its grass color.

Enclosing class: BiomeEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.BiomeEvent.BiomeColor`: `getNewColor`, `getOriginalColor`, `setNewColor`
- from `net.minecraftforge.event.terraingen.BiomeEvent`: `getBiome`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BiomeEvent.GetGrassColor

*class* `net.minecraftforge.event.terraingen.BiomeEvent.GetGrassColor`

This event is fired when a biome is queried for its grass color.

Enclosing class: BiomeEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.BiomeEvent.BiomeColor`: `getNewColor`, `getOriginalColor`, `setNewColor`
- from `net.minecraftforge.event.terraingen.BiomeEvent`: `getBiome`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BiomeEvent.GetVillageBlockID

*class* `net.minecraftforge.event.terraingen.BiomeEvent.GetVillageBlockID`

This event is fired when the village generator attempts to choose a block ID
 based on the village's biome.

 You can cancel the event to override default values

Enclosing class: BiomeEvent

### Methods
- `public IBlockState getOriginal()`
- `public IBlockState getReplacement()`
- `public void setReplacement(IBlockState replacement)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.BiomeEvent`: `getBiome`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## BiomeEvent.GetWaterColor

*class* `net.minecraftforge.event.terraingen.BiomeEvent.GetWaterColor`

This event is fired when a biome is queried for its water color.

Enclosing class: BiomeEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.BiomeEvent.BiomeColor`: `getNewColor`, `getOriginalColor`, `setNewColor`
- from `net.minecraftforge.event.terraingen.BiomeEvent`: `getBiome`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkGeneratorEvent

*class* `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`

### Methods
- `public IChunkGenerator getGenerator()`
- `public IChunkGenerator getGen()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkGeneratorEvent.InitNoiseField

*class* `net.minecraftforge.event.terraingen.ChunkGeneratorEvent.InitNoiseField`

This event is fired before a chunks terrain noise field is initialized.

 You can set the result to DENY to substitute your own noise field.

Enclosing class: ChunkGeneratorEvent

### Methods
- `public double[] getNoisefield()`
- `public void setNoisefield(double[] noisefield)`
- `public int getPosX()`
- `public int getPosY()`
- `public int getPosZ()`
- `public int getSizeX()`
- `public int getSizeY()`
- `public int getSizeZ()`

### Inherited methods
- from `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`: `getGen`, `getGenerator`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## ChunkGeneratorEvent.ReplaceBiomeBlocks

*class* `net.minecraftforge.event.terraingen.ChunkGeneratorEvent.ReplaceBiomeBlocks`

This event is fired when a chunks blocks are replaced by a biomes top and
 filler blocks.

 You can set the result to DENY to prevent the default replacement.

Enclosing class: ChunkGeneratorEvent

### Methods
- `public int getX()`
- `public int getZ()`
- `public ChunkPrimer getPrimer()`
- `public World getWorld()`

### Inherited methods
- from `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`: `getGen`, `getGenerator`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DecorateBiomeEvent

*class* `net.minecraftforge.event.terraingen.DecorateBiomeEvent`

DecorateBiomeEvent is fired when a BiomeDecorator is created.

 This event is fired whenever a BiomeDecorator is created in
 DeferredBiomeDecorator.fireCreateEventAndReplace(Biome).

 world contains the world that is being decorated.

 rand contains an instance of Random to be used.

 chunkPos contains the original chunk for the decorator.

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.TERRAIN_GEN_BUS.

### Methods
- `public World getWorld()`
- `public java.util.Random getRand()`
- `@Deprecated public BlockPos getPos()` (deprecated)
  Deprecated. use getChunkPos() or DecorateBiomeEvent.Decorate.getPlacementPos() instead.
- `public ChunkPos getChunkPos()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DecorateBiomeEvent.Decorate

*class* `net.minecraftforge.event.terraingen.DecorateBiomeEvent.Decorate`

This event is fired when a chunk is decorated with a biome feature.

 You can set the result to DENY to prevent the default biome decoration.

Enclosing class: DecorateBiomeEvent

### Methods
- `public DecorateBiomeEvent.Decorate.EventType getType()`
- `public BlockPos getPlacementPos()`
  This may be anywhere inside the 2x2 chunk area for generation.
   To get the original chunk position of the generation before a random location was chosen, use DecorateBiomeEvent.getChunkPos().
  - returns: the position used for original decoration, or null if it is not specified.

### Inherited methods
- from `net.minecraftforge.event.terraingen.DecorateBiomeEvent`: `getChunkPos`, `getPos`, `getRand`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DecorateBiomeEvent.Decorate.EventType

*enum* `net.minecraftforge.event.terraingen.DecorateBiomeEvent.Decorate.EventType`

Use CUSTOM to filter custom event types

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<DecorateBiomeEvent.Decorate.EventType>

Enclosing class: DecorateBiomeEvent.Decorate

### Fields
- `public static final DecorateBiomeEvent.Decorate.EventType BIG_SHROOM`
- `public static final DecorateBiomeEvent.Decorate.EventType CACTUS`
- `public static final DecorateBiomeEvent.Decorate.EventType CLAY`
- `public static final DecorateBiomeEvent.Decorate.EventType DEAD_BUSH`
- `public static final DecorateBiomeEvent.Decorate.EventType DESERT_WELL`
- `public static final DecorateBiomeEvent.Decorate.EventType LILYPAD`
- `public static final DecorateBiomeEvent.Decorate.EventType FLOWERS`
- `public static final DecorateBiomeEvent.Decorate.EventType FOSSIL`
- `public static final DecorateBiomeEvent.Decorate.EventType GRASS`
- `public static final DecorateBiomeEvent.Decorate.EventType ICE`
- `public static final DecorateBiomeEvent.Decorate.EventType LAKE_WATER`
- `public static final DecorateBiomeEvent.Decorate.EventType LAKE_LAVA`
- `public static final DecorateBiomeEvent.Decorate.EventType PUMPKIN`
- `public static final DecorateBiomeEvent.Decorate.EventType REED`
- `public static final DecorateBiomeEvent.Decorate.EventType ROCK`
- `public static final DecorateBiomeEvent.Decorate.EventType SAND`
- `public static final DecorateBiomeEvent.Decorate.EventType SAND_PASS2`
- `public static final DecorateBiomeEvent.Decorate.EventType SHROOM`
- `public static final DecorateBiomeEvent.Decorate.EventType TREE`
- `public static final DecorateBiomeEvent.Decorate.EventType CUSTOM`

### Methods
- `public static DecorateBiomeEvent.Decorate.EventType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (DecorateBiomeEvent.Decorate.EventType c : DecorateBiomeEvent.Decorate.EventType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static DecorateBiomeEvent.Decorate.EventType valueOf(java.lang.String name)`
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

## DecorateBiomeEvent.Post

*class* `net.minecraftforge.event.terraingen.DecorateBiomeEvent.Post`

This event is fired after a chunk is decorated with a biome feature.

Enclosing class: DecorateBiomeEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.DecorateBiomeEvent`: `getChunkPos`, `getPos`, `getRand`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DecorateBiomeEvent.Pre

*class* `net.minecraftforge.event.terraingen.DecorateBiomeEvent.Pre`

This event is fired before a chunk is decorated with a biome feature.

Enclosing class: DecorateBiomeEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.DecorateBiomeEvent`: `getChunkPos`, `getPos`, `getRand`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## DeferredBiomeDecorator

*class* `net.minecraftforge.event.terraingen.DeferredBiomeDecorator`

### Inherited fields
- from `net.minecraft.world.biome.BiomeDecorator`: `andesiteGen`, `bigMushroomGen`, `bigMushroomsPerChunk`, `cactiPerChunk`, `cactusGen`, `chunkPos`, `chunkProviderSettings`, `clayGen`, `clayPerChunk`, `coalGen`, `deadBushPerChunk`, `decorating`, `diamondGen`, `dioriteGen`, `dirtGen`, `extraTreeChance`, `flowerGen`, `flowersPerChunk`, `generateFalls`, `goldGen`, `graniteGen`, `grassPerChunk`, `gravelGen`, `gravelOreGen`, `gravelPatchesPerChunk`, `ironGen`, `lapisGen`, `mushroomBrownGen`, `mushroomRedGen`, `mushroomsPerChunk`, `redstoneGen`, `reedGen`, `reedsPerChunk`, `sandGen`, `sandPatchesPerChunk`, `treesPerChunk`, `waterlilyGen`, `waterlilyPerChunk`

### Methods
- `public void decorate(World par1World,  java.util.Random par2Random,  Biome biome,  BlockPos pos)`
- `public void fireCreateEventAndReplace(Biome biome)`

### Inherited methods
- from `net.minecraft.world.biome.BiomeDecorator`: `genDecorations`, `generateOres`, `genStandardOre1`, `genStandardOre2`

## InitMapGenEvent

*class* `net.minecraftforge.event.terraingen.InitMapGenEvent`

### Methods
- `public InitMapGenEvent.EventType getType()`
- `public MapGenBase getOriginalGen()`
- `public MapGenBase getNewGen()`
- `public void setNewGen(MapGenBase newGen)`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## InitMapGenEvent.EventType

*enum* `net.minecraftforge.event.terraingen.InitMapGenEvent.EventType`

Use CUSTOM to filter custom event types

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<InitMapGenEvent.EventType>

Enclosing class: InitMapGenEvent

### Fields
- `public static final InitMapGenEvent.EventType CAVE`
- `public static final InitMapGenEvent.EventType MINESHAFT`
- `public static final InitMapGenEvent.EventType NETHER_BRIDGE`
- `public static final InitMapGenEvent.EventType NETHER_CAVE`
- `public static final InitMapGenEvent.EventType RAVINE`
- `public static final InitMapGenEvent.EventType SCATTERED_FEATURE`
- `public static final InitMapGenEvent.EventType STRONGHOLD`
- `public static final InitMapGenEvent.EventType VILLAGE`
- `public static final InitMapGenEvent.EventType OCEAN_MONUMENT`
- `public static final InitMapGenEvent.EventType WOODLAND_MANSION`
- `public static final InitMapGenEvent.EventType END_CITY`
- `public static final InitMapGenEvent.EventType CUSTOM`

### Methods
- `public static InitMapGenEvent.EventType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (InitMapGenEvent.EventType c : InitMapGenEvent.EventType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static InitMapGenEvent.EventType valueOf(java.lang.String name)`
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

## InitNoiseGensEvent

*class* `net.minecraftforge.event.terraingen.InitNoiseGensEvent`

### Methods
- `public java.util.Random getRandom()`
- `public T getOriginal()`
- `public T getNewValues()`

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## InitNoiseGensEvent.Context

*class* `net.minecraftforge.event.terraingen.InitNoiseGensEvent.Context`

Enclosing class: InitNoiseGensEvent<T extends InitNoiseGensEvent.Context>

### Methods
- `public NoiseGeneratorOctaves getLPerlin1()`
- `public NoiseGeneratorOctaves getLPerlin2()`
- `public NoiseGeneratorOctaves getPerlin()`
- `public NoiseGeneratorOctaves getScale()`
- `public NoiseGeneratorOctaves getDepth()`
- `public void setLPerlin1(NoiseGeneratorOctaves value)`
- `public void getLPerlin2(NoiseGeneratorOctaves value)`
- `public void getPerlin(NoiseGeneratorOctaves value)`
- `public void getScale(NoiseGeneratorOctaves value)`
- `public void getDepth(NoiseGeneratorOctaves value)`
- `public InitNoiseGensEvent.Context clone()`

## InitNoiseGensEvent.ContextEnd

*class* `net.minecraftforge.event.terraingen.InitNoiseGensEvent.ContextEnd`

Enclosing class: InitNoiseGensEvent<T extends InitNoiseGensEvent.Context>

### Methods
- `public InitNoiseGensEvent.ContextEnd clone()`
- `public NoiseGeneratorSimplex getIsland()`
- `public void getIsland(NoiseGeneratorSimplex value)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.InitNoiseGensEvent.Context`: `getDepth`, `getDepth`, `getLPerlin1`, `getLPerlin2`, `getLPerlin2`, `getPerlin`, `getPerlin`, `getScale`, `getScale`, `setLPerlin1`

## InitNoiseGensEvent.ContextHell

*class* `net.minecraftforge.event.terraingen.InitNoiseGensEvent.ContextHell`

Enclosing class: InitNoiseGensEvent<T extends InitNoiseGensEvent.Context>

### Methods
- `public InitNoiseGensEvent.ContextHell clone()`
- `public NoiseGeneratorOctaves getPerlin2()`
- `public NoiseGeneratorOctaves getPerlin3()`
- `public void getPerlin2(NoiseGeneratorOctaves value)`
- `public void getPerlin3(NoiseGeneratorOctaves value)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.InitNoiseGensEvent.Context`: `getDepth`, `getDepth`, `getLPerlin1`, `getLPerlin2`, `getLPerlin2`, `getPerlin`, `getPerlin`, `getScale`, `getScale`, `setLPerlin1`

## InitNoiseGensEvent.ContextOverworld

*class* `net.minecraftforge.event.terraingen.InitNoiseGensEvent.ContextOverworld`

Enclosing class: InitNoiseGensEvent<T extends InitNoiseGensEvent.Context>

### Methods
- `public InitNoiseGensEvent.ContextOverworld clone()`
- `public NoiseGeneratorPerlin getHeight()`
- `public NoiseGeneratorOctaves getForest()`
- `public void getHeight(NoiseGeneratorPerlin value)`
- `public void getForest(NoiseGeneratorOctaves value)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.InitNoiseGensEvent.Context`: `getDepth`, `getDepth`, `getLPerlin1`, `getLPerlin2`, `getLPerlin2`, `getPerlin`, `getPerlin`, `getScale`, `getScale`, `setLPerlin1`

## OreGenEvent

*class* `net.minecraftforge.event.terraingen.OreGenEvent`

OreGenEvent is fired when an event involving ore generation occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 world contains the world this event is occurring in.

 rand contains an instance of random that can be used in this event.

 pos contains the coordinates of the chunk position currently being populated with ores.

 All children of this event are fired on the MinecraftForge.ORE_GEN_BUS.

### Methods
- `public World getWorld()`
- `public java.util.Random getRand()`
- `public BlockPos getPos()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## OreGenEvent.GenerateMinable

*class* `net.minecraftforge.event.terraingen.OreGenEvent.GenerateMinable`

GenerateMinable is fired when a mineable block is generated in a chunk.

 This event is fired just after ore generation in
 BiomeDecorator.generateOres(World, Random).

 type contains the enum value for the Ore attempting to be generated.

 generator contains the WorldGenerator generating this ore.

 This event is not Cancelable.

 This event has a result. Event.HasResult

 This result determines whether the ore is allowed to be generated.

 This event is fired on the MinecraftForge.ORE_GEN_BUS.

Enclosing class: OreGenEvent

### Methods
- `public OreGenEvent.GenerateMinable.EventType getType()`
- `public WorldGenerator getGenerator()`

### Inherited methods
- from `net.minecraftforge.event.terraingen.OreGenEvent`: `getPos`, `getRand`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## OreGenEvent.GenerateMinable.EventType

*enum* `net.minecraftforge.event.terraingen.OreGenEvent.GenerateMinable.EventType`

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<OreGenEvent.GenerateMinable.EventType>

Enclosing class: OreGenEvent.GenerateMinable

### Fields
- `public static final OreGenEvent.GenerateMinable.EventType COAL`
- `public static final OreGenEvent.GenerateMinable.EventType DIAMOND`
- `public static final OreGenEvent.GenerateMinable.EventType DIRT`
- `public static final OreGenEvent.GenerateMinable.EventType GOLD`
- `public static final OreGenEvent.GenerateMinable.EventType GRAVEL`
- `public static final OreGenEvent.GenerateMinable.EventType IRON`
- `public static final OreGenEvent.GenerateMinable.EventType LAPIS`
- `public static final OreGenEvent.GenerateMinable.EventType REDSTONE`
- `public static final OreGenEvent.GenerateMinable.EventType QUARTZ`
- `public static final OreGenEvent.GenerateMinable.EventType DIORITE`
- `public static final OreGenEvent.GenerateMinable.EventType GRANITE`
- `public static final OreGenEvent.GenerateMinable.EventType ANDESITE`
- `public static final OreGenEvent.GenerateMinable.EventType EMERALD`
- `public static final OreGenEvent.GenerateMinable.EventType SILVERFISH`
- `public static final OreGenEvent.GenerateMinable.EventType CUSTOM`

### Methods
- `public static OreGenEvent.GenerateMinable.EventType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (OreGenEvent.GenerateMinable.EventType c : OreGenEvent.GenerateMinable.EventType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static OreGenEvent.GenerateMinable.EventType valueOf(java.lang.String name)`
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

## OreGenEvent.Post

*class* `net.minecraftforge.event.terraingen.OreGenEvent.Post`

OreGenEvent.Post is fired just after a chunk is populated with ores.

 This event is fired just after ore generation in
 BiomeDecorator.generateOres(World, Random).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.ORE_GEN_BUS.

Enclosing class: OreGenEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.OreGenEvent`: `getPos`, `getRand`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## OreGenEvent.Pre

*class* `net.minecraftforge.event.terraingen.OreGenEvent.Pre`

OreGenEvent.Pre is fired just before a chunk is populated with ores.

 This event is fired just before ore generation in
 BiomeDecorator.generateOres(World, Random).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.ORE_GEN_BUS.

Enclosing class: OreGenEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.OreGenEvent`: `getPos`, `getRand`, `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PopulateChunkEvent

*class* `net.minecraftforge.event.terraingen.PopulateChunkEvent`

PopulateChunkEvent is fired when an event involving chunk terrain feature population occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 world contains the world this event is occurring in.

 rand contains an instance of random that can be used in this event.

 chunkX contains the x-coordinate of the chunk currently being populated with a terrain feature.

 chunkZ contains the z-coordinate of the chunk currently being populated with ores.

 hasVillageGenerated contains the boolean value stating if the chunk already has a village spawned in it.

 All children of this event are fired on the MinecraftForge.EVENT_BUS, except PopulateChunkEvent.Populate, which fires on the MinecraftForge.TERRAIN_GEN_BUS.

### Methods
- `public World getWorld()`
- `public java.util.Random getRand()`
- `public int getChunkX()`
- `public int getChunkZ()`
- `public boolean isHasVillageGenerated()`

### Inherited methods
- from `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`: `getGen`, `getGenerator`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PopulateChunkEvent.Populate

*class* `net.minecraftforge.event.terraingen.PopulateChunkEvent.Populate`

PopulateChunkEvent.Populate is fired when a chunk is populated with a terrain feature.

 This event is fired during terrain feature generation in
 ChunkProviderEnd#populate(int, int),
 ChunkProviderOverworld#populate(int, int),
 and ChunkProviderHell#populate(int, int).

 type contains the enum value for the terrain feature being generated.

 This event is not Cancelable.

 This event has a result. Event.HasResult

 This result determines if the chunk is populated with the terrain feature.

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PopulateChunkEvent

### Methods
- `public PopulateChunkEvent.Populate.EventType getType()`

### Inherited methods
- from `net.minecraftforge.event.terraingen.PopulateChunkEvent`: `getChunkX`, `getChunkZ`, `getRand`, `getWorld`, `isHasVillageGenerated`
- from `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`: `getGen`, `getGenerator`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PopulateChunkEvent.Populate.EventType

*enum* `net.minecraftforge.event.terraingen.PopulateChunkEvent.Populate.EventType`

Use CUSTOM to filter custom event types

All Implemented Interfaces: java.io.Serializable, java.lang.Comparable<PopulateChunkEvent.Populate.EventType>

Enclosing class: PopulateChunkEvent.Populate

### Fields
- `public static final PopulateChunkEvent.Populate.EventType DUNGEON`
- `public static final PopulateChunkEvent.Populate.EventType FIRE`
- `public static final PopulateChunkEvent.Populate.EventType GLOWSTONE`
- `public static final PopulateChunkEvent.Populate.EventType ICE`
- `public static final PopulateChunkEvent.Populate.EventType LAKE`
- `public static final PopulateChunkEvent.Populate.EventType LAVA`
- `public static final PopulateChunkEvent.Populate.EventType NETHER_LAVA`
- `public static final PopulateChunkEvent.Populate.EventType NETHER_LAVA2`
- `public static final PopulateChunkEvent.Populate.EventType NETHER_MAGMA`
- `public static final PopulateChunkEvent.Populate.EventType ANIMALS`
- `public static final PopulateChunkEvent.Populate.EventType CUSTOM`

### Methods
- `public static PopulateChunkEvent.Populate.EventType[] values()`
  Returns an array containing the constants of this enum type, in
  the order they are declared. This method may be used to iterate
  over the constants as follows:
  for (PopulateChunkEvent.Populate.EventType c : PopulateChunkEvent.Populate.EventType.values())
   System.out.println(c);
  - returns: an array containing the constants of this enum type, in the order they are declared
- `public static PopulateChunkEvent.Populate.EventType valueOf(java.lang.String name)`
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

## PopulateChunkEvent.Post

*class* `net.minecraftforge.event.terraingen.PopulateChunkEvent.Post`

PopulateChunkEvent.Post is fired just after a chunk is populated with a terrain feature.

 This event is fired just after terrain feature generation in
 ChunkProviderEnd#populate(int, int),
 ChunkProviderOverworld#populate(int, int),
 and ChunkProviderHell#populate(int, int).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PopulateChunkEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.PopulateChunkEvent`: `getChunkX`, `getChunkZ`, `getRand`, `getWorld`, `isHasVillageGenerated`
- from `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`: `getGen`, `getGenerator`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## PopulateChunkEvent.Pre

*class* `net.minecraftforge.event.terraingen.PopulateChunkEvent.Pre`

PopulateChunkEvent.Pre is fired just before a chunk is populated a terrain feature.

 This event is fired just before terrain feature generation in
 ChunkProviderEnd#populate(int, int),
 ChunkProviderOverworld#populate(int, int),
 and ChunkProviderHell#populate(int, int).

 This event is not Cancelable.

 This event does not have a result. Event.HasResult

 This event is fired on the MinecraftForge.EVENT_BUS.

Enclosing class: PopulateChunkEvent

### Inherited methods
- from `net.minecraftforge.event.terraingen.PopulateChunkEvent`: `getChunkX`, `getChunkZ`, `getRand`, `getWorld`, `isHasVillageGenerated`
- from `net.minecraftforge.event.terraingen.ChunkGeneratorEvent`: `getGen`, `getGenerator`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## SaplingGrowTreeEvent

*class* `net.minecraftforge.event.terraingen.SaplingGrowTreeEvent`

SaplingGrowTreeEvent is fired when a sapling grows into a tree.

 This event is fired during sapling growth in
 BlockSapling.generateTree(World, BlockPos, IBlockState, Random).

 pos contains the coordinates of the growing sapling.

 rand contains an instance of Random for use.

 This event is not Cancelable.

 This event has a result. Event.HasResult

 This result determines if the sapling is allowed to grow.

 This event is fired on the MinecraftForge.TERRAIN_GEN_BUS.

### Methods
- `public BlockPos getPos()`
- `public java.util.Random getRand()`

### Inherited methods
- from `net.minecraftforge.event.world.WorldEvent`: `getWorld`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## TerrainGen

*class* `net.minecraftforge.event.terraingen.TerrainGen`

### Methods
- `public static <T extends InitNoiseGensEvent.Context> T getModdedNoiseGenerators(World world,  java.util.Random rand,  T original)`
- `public static MapGenBase getModdedMapGen(MapGenBase original,  InitMapGenEvent.EventType type)`
- `public static boolean populate(IChunkGenerator chunkProvider,  World world,  java.util.Random rand,  int chunkX,  int chunkZ,  boolean hasVillageGenerated,  PopulateChunkEvent.Populate.EventType type)`
- `public static boolean decorate(World world,  java.util.Random rand,  ChunkPos chunkPos,  BlockPos placementPos,  DecorateBiomeEvent.Decorate.EventType type)`
  Use this method when there is a specific BlockPos location given for decoration.
   If only the chunk position is available, use #decorate(World, Random, ChunkPos, Decorate.EventType) instead.
  - param: world - the world being generated in
  - param: rand - the random generator used for decoration
  - param: chunkPos - the original chunk position used for generation, passed to the decorator
  - param: placementPos - the specific position used for generating a feature, somewhere in the 2x2 chunks used for decoration
  - param: type - the type of decoration
- `public static boolean decorate(World world,  java.util.Random rand,  ChunkPos chunkPos,  DecorateBiomeEvent.Decorate.EventType type)`
  Use this method when generation doesn't have a specific BlockPos location for generation in the chunk.
   If a specific BlockPos for generation is available, use #decorate(World, Random, ChunkPos, BlockPos, Decorate.EventType) instead.
  - param: world - the world being generated in
  - param: rand - the random generator used for decoration
  - param: chunkPos - the original chunk position used for generation, passed to the decorator
  - param: type - the type of decoration
- `@Deprecated public static boolean decorate(World world,  java.util.Random rand,  BlockPos pos,  DecorateBiomeEvent.Decorate.EventType type)` (deprecated)
  Deprecated.
- `public static boolean generateOre(World world,  java.util.Random rand,  WorldGenerator generator,  BlockPos pos,  OreGenEvent.GenerateMinable.EventType type)`
- `public static boolean saplingGrowTree(World world,  java.util.Random rand,  BlockPos pos)`

## WorldTypeEvent

*class* `net.minecraftforge.event.terraingen.WorldTypeEvent`

WorldTypeEvent is fired when an event involving the world occurs.

 If a method utilizes this Event as its parameter, the method will
 receive every child event of this class.

 worldType contains the WorldType of the world this event is occurring in.

 All children of this event are fired on the MinecraftForge.TERRAIN_GEN_BUS.

### Methods
- `public WorldType getWorldType()`

### Inherited methods
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldTypeEvent.BiomeSize

*class* `net.minecraftforge.event.terraingen.WorldTypeEvent.BiomeSize`

BiomeSize is fired when vanilla Minecraft attempts to generate biomes.

 This event is fired during biome generation in
 GenLayer#initializeAllBiomeGenerators(long, WorldType, ChunkProviderSettings).

 originalSize the original size of the Biome.

 newSize the new size of the biome. Initially set to the originalSize.

 If newSize is set to a new value, that value will be used for the Biome size.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.TERRAIN_GEN_BUS.

Enclosing class: WorldTypeEvent

### Methods
- `public int getOriginalSize()`
- `public int getNewSize()`
- `public void setNewSize(int newSize)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.WorldTypeEvent`: `getWorldType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`

## WorldTypeEvent.InitBiomeGens

*class* `net.minecraftforge.event.terraingen.WorldTypeEvent.InitBiomeGens`

InitBiomeGens is fired when vanilla Minecraft attempts to initialize the biome providers.

 This event is fired just during biome provider initialization in
 BiomeProvider(long, WorldType, String).

 seed the seed of the world.

 originalBiomeGens the array of GenLayers original intended for this Biome generation.

 newBiomeGens the array of GenLayers that will now be used for this Biome generation.

 If newBiomeGens is set to a new value, that value will be used for the Biome generator.

 This event is not Cancelable.

 This event does not have a result. HasResult

 This event is fired on the MinecraftForge.TERRAIN_GEN_BUS.

Enclosing class: WorldTypeEvent

### Methods
- `public long getSeed()`
- `public GenLayer[] getOriginalBiomeGens()`
- `public GenLayer[] getNewBiomeGens()`
- `public void setNewBiomeGens(GenLayer[] newBiomeGens)`

### Inherited methods
- from `net.minecraftforge.event.terraingen.WorldTypeEvent`: `getWorldType`
- from `net.minecraftforge.fml.common.eventhandler.Event`: `getListenerList`, `getPhase`, `getResult`, `hasResult`, `isCancelable`, `isCanceled`, `setCanceled`, `setPhase`, `setResult`, `setup`
