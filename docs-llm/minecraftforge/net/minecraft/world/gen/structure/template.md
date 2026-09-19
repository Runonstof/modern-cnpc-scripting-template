# net.minecraft.world.gen.structure.template

- [BlockRotationProcessor](#blockrotationprocessor)
- [ITemplateProcessor](#itemplateprocessor)
- [PlacementSettings](#placementsettings)
- [Template](#template)
- [Template.BlockInfo](#template.blockinfo)
- [Template.EntityInfo](#template.entityinfo)
- [TemplateManager](#templatemanager)
## BlockRotationProcessor

*class* `net.minecraft.world.gen.structure.template.BlockRotationProcessor`

All Implemented Interfaces: ITemplateProcessor

### Methods
- `public Template.BlockInfo processBlock(World worldIn,  BlockPos pos,  Template.BlockInfo blockInfoIn)`

## ITemplateProcessor

*interface* `net.minecraft.world.gen.structure.template.ITemplateProcessor`

### Methods
- `Template.BlockInfo processBlock(World worldIn,  BlockPos pos,  Template.BlockInfo blockInfoIn)`

## PlacementSettings

*class* `net.minecraft.world.gen.structure.template.PlacementSettings`

### Methods
- `public PlacementSettings copy()`
- `public PlacementSettings setMirror(Mirror mirrorIn)`
- `public PlacementSettings setRotation(Rotation rotationIn)`
- `public PlacementSettings setIgnoreEntities(boolean ignoreEntitiesIn)`
- `public PlacementSettings setReplacedBlock(Block replacedBlockIn)`
- `public PlacementSettings setChunk(ChunkPos chunkPosIn)`
- `public PlacementSettings setBoundingBox(StructureBoundingBox boundingBoxIn)`
- `public PlacementSettings setSeed(java.lang.Long seedIn)`
- `public PlacementSettings setRandom(java.util.Random randomIn)`
- `public PlacementSettings setIntegrity(float integrityIn)`
- `public Mirror getMirror()`
- `public PlacementSettings setIgnoreStructureBlock(boolean ignoreStructureBlockIn)`
- `public Rotation getRotation()`
- `public java.util.Random getRandom(BlockPos seed)`
- `public float getIntegrity()`
- `public boolean getIgnoreEntities()`
- `public Block getReplacedBlock()`
- `public StructureBoundingBox getBoundingBox()`
- `public boolean getIgnoreStructureBlock()`

## Template

*class* `net.minecraft.world.gen.structure.template.Template`

### Methods
- `public BlockPos getSize()`
- `public void setAuthor(java.lang.String authorIn)`
- `public java.lang.String getAuthor()`
- `public void takeBlocksFromWorld(World worldIn,  BlockPos startPos,  BlockPos endPos,  boolean takeEntities,  Block toIgnore)`
- `public java.util.Map<BlockPos,java.lang.String> getDataBlocks(BlockPos pos,  PlacementSettings placementIn)`
- `public BlockPos calculateConnectedPos(PlacementSettings placementIn,  BlockPos p_186262_2_,  PlacementSettings p_186262_3_,  BlockPos p_186262_4_)`
- `public static BlockPos transformedBlockPos(PlacementSettings placementIn,  BlockPos pos)`
- `public void addBlocksToWorldChunk(World worldIn,  BlockPos pos,  PlacementSettings placementIn)`
- `public void addBlocksToWorld(World worldIn,  BlockPos pos,  PlacementSettings placementIn)`
- `public void addBlocksToWorld(World worldIn,  BlockPos pos,  PlacementSettings placementIn,  int flags)`
- `public void addBlocksToWorld(World worldIn,  BlockPos pos,  ITemplateProcessor templateProcessor,  PlacementSettings placementIn,  int flags)`
- `public BlockPos transformedSize(Rotation rotationIn)`
- `public BlockPos getZeroPositionWithTransform(BlockPos p_189961_1_,  Mirror p_189961_2_,  Rotation p_189961_3_)`
- `public static BlockPos getZeroPositionWithTransform(BlockPos p_191157_0_,  Mirror p_191157_1_,  Rotation p_191157_2_,  int p_191157_3_,  int p_191157_4_)`
- `public static void registerFixes(DataFixer fixer)`
- `public NBTTagCompound writeToNBT(NBTTagCompound nbt)`
- `public void read(NBTTagCompound compound)`

## Template.BlockInfo

*class* `net.minecraft.world.gen.structure.template.Template.BlockInfo`

Enclosing class: Template

### Fields
- `public final BlockPos pos`
- `public final IBlockState blockState`
- `public final NBTTagCompound tileentityData`

## Template.EntityInfo

*class* `net.minecraft.world.gen.structure.template.Template.EntityInfo`

Enclosing class: Template

### Fields
- `public final Vec3d pos`
- `public final BlockPos blockPos`
- `public final NBTTagCompound entityData`

## TemplateManager

*class* `net.minecraft.world.gen.structure.template.TemplateManager`

### Methods
- `public Template getTemplate(MinecraftServer server,  ResourceLocation id)`
- `public Template get(MinecraftServer server,  ResourceLocation templatePath)`
- `public boolean readTemplate(ResourceLocation server)`
- `public boolean writeTemplate(MinecraftServer server,  ResourceLocation id)`
- `public void remove(ResourceLocation templatePath)`
