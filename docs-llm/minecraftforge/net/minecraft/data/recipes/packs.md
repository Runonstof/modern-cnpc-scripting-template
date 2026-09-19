# net.minecraft.data.recipes.packs

- [BundleRecipeProvider](#bundlerecipeprovider)
- [VanillaRecipeProvider](#vanillarecipeprovider)
## BundleRecipeProvider

*class* `net.minecraft.data.recipes.packs.BundleRecipeProvider`

### Inherited fields
- from `net.minecraft.data.recipes.RecipeProvider`: `advancementPathProvider`, `recipePathProvider`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `protected void buildRecipes(RecipeOutput p_297760_)`

### Inherited methods
- from `net.minecraft.data.recipes.RecipeProvider`: `banner`, `bedFromPlanksAndWool`, `buildAdvancement`, `buttonBuilder`, `candle`, `carpet`, `chestBoat`, `chiseled`, `chiseledBuilder`, `colorBlockWithDye`, `coloredTerracottaFromTerracottaAndDye`, `concretePowder`, `cookRecipes`, `copySmithingTemplate`, `copySmithingTemplate`, `cut`, `cutBuilder`, `doorBuilder`, `fenceBuilder`, `fenceGateBuilder`, `generateForEnabledBlockFamilies`, `generateRecipes`, `getBaseBlock`, `getBlastingRecipeName`, `getConversionRecipeName`, `getHasName`, `getItemName`, `getName`, `getSimpleRecipeName`, `getSmeltingRecipeName`, `hangingSign`, `has`, `has`, `mosaicBuilder`, `netheriteSmithing`, `nineBlockStorageRecipes`, `nineBlockStorageRecipesRecipesWithCustomUnpacking`, `nineBlockStorageRecipesWithCustomPacking`, `oneToOneConversionRecipe`, `oneToOneConversionRecipe`, `oreBlasting`, `oreSmelting`, `planksFromLog`, `planksFromLogs`, `polished`, `polishedBuilder`, `pressurePlate`, `pressurePlateBuilder`, `run`, `saveAdvancement`, `signBuilder`, `slab`, `slabBuilder`, `stainedGlassFromGlassAndDye`, `stainedGlassPaneFromGlassPaneAndDye`, `stainedGlassPaneFromStainedGlass`, `stairBuilder`, `stonecutterResultFromBase`, `stonecutterResultFromBase`, `threeByThreePacker`, `threeByThreePacker`, `trapdoorBuilder`, `trimSmithing`, `twoByTwoPacker`, `wall`, `wallBuilder`, `waxRecipes`, `woodenBoat`, `woodFromLogs`

## VanillaRecipeProvider

*class* `net.minecraft.data.recipes.packs.VanillaRecipeProvider`

### Fields
- `public static final com.google.common.collect.ImmutableList<ItemLike> COAL_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> IRON_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> COPPER_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> GOLD_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> DIAMOND_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> LAPIS_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> REDSTONE_SMELTABLES`
- `public static final com.google.common.collect.ImmutableList<ItemLike> EMERALD_SMELTABLES`

### Inherited fields
- from `net.minecraft.data.recipes.RecipeProvider`: `advancementPathProvider`, `recipePathProvider`
- from `net.minecraft.data.DataProvider`: `FIXED_ORDER_FIELDS`, `KEY_COMPARATOR`, `LOGGER`

### Methods
- `public CompletableFuture<?> run(CachedOutput p_254376_)`
- `protected void buildRecipes(RecipeOutput p_301137_)`
- `public static Map<Item,ResourceLocation> smithingTrims()`

### Inherited methods
- from `net.minecraft.data.recipes.RecipeProvider`: `banner`, `bedFromPlanksAndWool`, `buildAdvancement`, `buttonBuilder`, `candle`, `carpet`, `chestBoat`, `chiseled`, `chiseledBuilder`, `colorBlockWithDye`, `coloredTerracottaFromTerracottaAndDye`, `concretePowder`, `cookRecipes`, `copySmithingTemplate`, `copySmithingTemplate`, `cut`, `cutBuilder`, `doorBuilder`, `fenceBuilder`, `fenceGateBuilder`, `generateForEnabledBlockFamilies`, `generateRecipes`, `getBaseBlock`, `getBlastingRecipeName`, `getConversionRecipeName`, `getHasName`, `getItemName`, `getName`, `getSimpleRecipeName`, `getSmeltingRecipeName`, `hangingSign`, `has`, `has`, `mosaicBuilder`, `netheriteSmithing`, `nineBlockStorageRecipes`, `nineBlockStorageRecipesRecipesWithCustomUnpacking`, `nineBlockStorageRecipesWithCustomPacking`, `oneToOneConversionRecipe`, `oneToOneConversionRecipe`, `oreBlasting`, `oreSmelting`, `planksFromLog`, `planksFromLogs`, `polished`, `polishedBuilder`, `pressurePlate`, `pressurePlateBuilder`, `saveAdvancement`, `signBuilder`, `slab`, `slabBuilder`, `stainedGlassFromGlassAndDye`, `stainedGlassPaneFromGlassPaneAndDye`, `stainedGlassPaneFromStainedGlass`, `stairBuilder`, `stonecutterResultFromBase`, `stonecutterResultFromBase`, `threeByThreePacker`, `threeByThreePacker`, `trapdoorBuilder`, `trimSmithing`, `twoByTwoPacker`, `wall`, `wallBuilder`, `waxRecipes`, `woodenBoat`, `woodFromLogs`
