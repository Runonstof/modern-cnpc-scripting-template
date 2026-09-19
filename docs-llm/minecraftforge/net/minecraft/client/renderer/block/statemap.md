# net.minecraft.client.renderer.block.statemap

- [BlockStateMapper](#blockstatemapper)
- [DefaultStateMapper](#defaultstatemapper)
- [IStateMapper](#istatemapper)
- [StateMap](#statemap)
- [StateMap.Builder](#statemap.builder)
- [StateMapperBase](#statemapperbase)
## BlockStateMapper

*class* `net.minecraft.client.renderer.block.statemap.BlockStateMapper`

### Methods
- `public void registerBlockStateMapper(Block blockIn,  IStateMapper stateMapper)`
- `public void registerBuiltInBlocks(Block... blockIn)`
- `public java.util.Map<IBlockState,ModelResourceLocation> putAllStateModelLocations()`
- `public java.util.Set<ResourceLocation> getBlockstateLocations(Block blockIn)`
- `public java.util.Map<IBlockState,ModelResourceLocation> getVariants(Block blockIn)`

## DefaultStateMapper

*class* `net.minecraft.client.renderer.block.statemap.DefaultStateMapper`

All Implemented Interfaces: IStateMapper

### Inherited fields
- from `net.minecraft.client.renderer.block.statemap.StateMapperBase`: `mapStateModelLocations`

### Methods
- `protected ModelResourceLocation getModelResourceLocation(IBlockState state)`

### Inherited methods
- from `net.minecraft.client.renderer.block.statemap.StateMapperBase`: `getPropertyString`, `putStateModelLocations`

## IStateMapper

*interface* `net.minecraft.client.renderer.block.statemap.IStateMapper`

### Methods
- `java.util.Map<IBlockState,ModelResourceLocation> putStateModelLocations(Block blockIn)`

## StateMap

*class* `net.minecraft.client.renderer.block.statemap.StateMap`

All Implemented Interfaces: IStateMapper

### Inherited fields
- from `net.minecraft.client.renderer.block.statemap.StateMapperBase`: `mapStateModelLocations`

### Methods
- `protected ModelResourceLocation getModelResourceLocation(IBlockState state)`

### Inherited methods
- from `net.minecraft.client.renderer.block.statemap.StateMapperBase`: `getPropertyString`, `putStateModelLocations`

## StateMap.Builder

*class* `net.minecraft.client.renderer.block.statemap.StateMap.Builder`

Enclosing class: StateMap

### Methods
- `public StateMap.Builder withName(IProperty<?> builderPropertyIn)`
- `public StateMap.Builder withSuffix(java.lang.String builderSuffixIn)`
- `public StateMap.Builder ignore(IProperty<?>... ignores)`
- `public StateMap build()`

## StateMapperBase

*class* `net.minecraft.client.renderer.block.statemap.StateMapperBase`

All Implemented Interfaces: IStateMapper

### Fields
- `protected java.util.Map<IBlockState,ModelResourceLocation> mapStateModelLocations`

### Methods
- `public java.lang.String getPropertyString(java.util.Map<IProperty<?>,java.lang.Comparable<?>> values)`
- `public java.util.Map<IBlockState,ModelResourceLocation> putStateModelLocations(Block blockIn)`
- `protected abstract ModelResourceLocation getModelResourceLocation(IBlockState state)`
