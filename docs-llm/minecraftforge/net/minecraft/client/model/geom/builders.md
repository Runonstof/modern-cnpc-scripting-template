# net.minecraft.client.model.geom.builders

- [CubeDefinition](#cubedefinition)
- [CubeDeformation](#cubedeformation)
- [CubeListBuilder](#cubelistbuilder)
- [LayerDefinition](#layerdefinition)
- [MaterialDefinition](#materialdefinition)
- [MeshDefinition](#meshdefinition)
- [PartDefinition](#partdefinition)
- [UVPair](#uvpair)
## CubeDefinition

*class* `net.minecraft.client.model.geom.builders.CubeDefinition`

### Fields
- `@Nullable private final String comment`
- `private final org.joml.Vector3f origin`
- `private final org.joml.Vector3f dimensions`
- `private final CubeDeformation grow`
- `private final boolean mirror`
- `private final UVPair texCoord`
- `private final UVPair texScale`
- `private final Set<Direction> visibleFaces`

### Methods
- `public ModelPart.Cube bake(int p_171456_,  int p_171457_)`

## CubeDeformation

*class* `net.minecraft.client.model.geom.builders.CubeDeformation`

### Fields
- `public static final CubeDeformation NONE`
- `final float growX`
- `final float growY`
- `final float growZ`

### Methods
- `public CubeDeformation extend(float p_171470_)`
- `public CubeDeformation extend(float p_171472_,  float p_171473_,  float p_171474_)`

## CubeListBuilder

*class* `net.minecraft.client.model.geom.builders.CubeListBuilder`

### Fields
- `private static final Set<Direction> ALL_VISIBLE`
- `private final List<CubeDefinition> cubes`
- `private int xTexOffs`
- `private int yTexOffs`
- `private boolean mirror`

### Methods
- `public CubeListBuilder texOffs(int p_171515_,  int p_171516_)`
- `public CubeListBuilder mirror()`
- `public CubeListBuilder mirror(boolean p_171556_)`
- `public CubeListBuilder addBox(String p_171545_,  float p_171546_,  float p_171547_,  float p_171548_,  int p_171549_,  int p_171550_,  int p_171551_,  CubeDeformation p_171552_,  int p_171553_,  int p_171554_)`
- `public CubeListBuilder addBox(String p_171535_,  float p_171536_,  float p_171537_,  float p_171538_,  int p_171539_,  int p_171540_,  int p_171541_,  int p_171542_,  int p_171543_)`
- `public CubeListBuilder addBox(float p_171482_,  float p_171483_,  float p_171484_,  float p_171485_,  float p_171486_,  float p_171487_)`
- `public CubeListBuilder addBox(float p_272653_,  float p_273044_,  float p_272720_,  float p_273739_,  float p_273613_,  float p_273328_,  Set<Direction> p_273277_)`
- `public CubeListBuilder addBox(String p_171518_,  float p_171519_,  float p_171520_,  float p_171521_,  float p_171522_,  float p_171523_,  float p_171524_)`
- `public CubeListBuilder addBox(String p_171526_,  float p_171527_,  float p_171528_,  float p_171529_,  float p_171530_,  float p_171531_,  float p_171532_,  CubeDeformation p_171533_)`
- `public CubeListBuilder addBox(float p_171507_,  float p_171508_,  float p_171509_,  float p_171510_,  float p_171511_,  float p_171512_,  boolean p_171513_)`
- `public CubeListBuilder addBox(float p_171497_,  float p_171498_,  float p_171499_,  float p_171500_,  float p_171501_,  float p_171502_,  CubeDeformation p_171503_,  float p_171504_,  float p_171505_)`
- `public CubeListBuilder addBox(float p_171489_,  float p_171490_,  float p_171491_,  float p_171492_,  float p_171493_,  float p_171494_,  CubeDeformation p_171495_)`
- `public List<CubeDefinition> getCubes()`
- `public static CubeListBuilder create()`

## LayerDefinition

*class* `net.minecraft.client.model.geom.builders.LayerDefinition`

### Fields
- `private final MeshDefinition mesh`
- `private final MaterialDefinition material`

### Methods
- `public ModelPart bakeRoot()`
- `public static LayerDefinition create(MeshDefinition p_171566_,  int p_171567_,  int p_171568_)`

## MaterialDefinition

*class* `net.minecraft.client.model.geom.builders.MaterialDefinition`

### Fields
- `final int xTexSize`
- `final int yTexSize`

## MeshDefinition

*class* `net.minecraft.client.model.geom.builders.MeshDefinition`

### Fields
- `private final PartDefinition root`

### Methods
- `public PartDefinition getRoot()`

## PartDefinition

*class* `net.minecraft.client.model.geom.builders.PartDefinition`

### Fields
- `private final List<CubeDefinition> cubes`
- `private final PartPose partPose`
- `private final Map<String,PartDefinition> children`

### Methods
- `public PartDefinition addOrReplaceChild(String p_171600_,  CubeListBuilder p_171601_,  PartPose p_171602_)`
- `public ModelPart bake(int p_171584_,  int p_171585_)`
- `public PartDefinition getChild(String p_171598_)`

## UVPair

*class* `net.minecraft.client.model.geom.builders.UVPair`

### Fields
- `private final float u`
- `private final float v`

### Methods
- `public float u()`
- `public float v()`
- `public String toString()`
