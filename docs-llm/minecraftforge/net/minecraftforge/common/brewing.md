# net.minecraftforge.common.brewing

- [AbstractBrewingRecipe](#abstractbrewingrecipe)
- [BrewingOreRecipe](#brewingorerecipe)
- [BrewingRecipe](#brewingrecipe)
- [BrewingRecipeRegistry](#brewingreciperegistry)
- [IBrewingRecipe](#ibrewingrecipe)
- [VanillaBrewingRecipe](#vanillabrewingrecipe)
## AbstractBrewingRecipe

*class* `net.minecraftforge.common.brewing.AbstractBrewingRecipe`

All Implemented Interfaces: IBrewingRecipe

### Methods
- `public boolean isInput(ItemStack stack)`
  Description copied from interface: IBrewingRecipe
  Returns true is the passed ItemStack is an input for this recipe. "Input"
   being the item that goes in one of the three bottom slots of the brewing
   stand (e.g: water bottle)
- `public ItemStack getOutput(ItemStack input,  ItemStack ingredient)`
  Description copied from interface: IBrewingRecipe
  Returns the output when the passed input is brewed with the passed
   ingredient. Empty if invalid input or ingredient.
- `public ItemStack getInput()`
- `public T getIngredient()`
- `public ItemStack getOutput()`

### Inherited methods
- from `net.minecraftforge.common.brewing.IBrewingRecipe`: `isIngredient`

## BrewingOreRecipe

*class* `net.minecraftforge.common.brewing.BrewingOreRecipe`

All Implemented Interfaces: IBrewingRecipe

### Methods
- `public boolean isIngredient(ItemStack stack)`
  Description copied from interface: IBrewingRecipe
  Returns true if the passed ItemStack is an ingredient for this recipe.
   "Ingredient" being the item that goes in the top slot of the brewing
   stand (e.g: nether wart)

### Inherited methods
- from `net.minecraftforge.common.brewing.AbstractBrewingRecipe`: `getIngredient`, `getInput`, `getOutput`, `getOutput`, `isInput`

## BrewingRecipe

*class* `net.minecraftforge.common.brewing.BrewingRecipe`

All Implemented Interfaces: IBrewingRecipe

### Methods
- `public boolean isIngredient(ItemStack stack)`
  Description copied from interface: IBrewingRecipe
  Returns true if the passed ItemStack is an ingredient for this recipe.
   "Ingredient" being the item that goes in the top slot of the brewing
   stand (e.g: nether wart)

### Inherited methods
- from `net.minecraftforge.common.brewing.AbstractBrewingRecipe`: `getIngredient`, `getInput`, `getOutput`, `getOutput`, `isInput`

## BrewingRecipeRegistry

*class* `net.minecraftforge.common.brewing.BrewingRecipeRegistry`

### Methods
- `public static boolean addRecipe(ItemStack input,  ItemStack ingredient,  ItemStack output)`
  Adds a recipe to the registry. Due to the nature of the brewing stand
   inputs that stack (a.k.a max stack size > 1) are not allowed.
  - param: input - The ItemStack that goes in same slots as the water bottles
 would.
  - param: ingredient - The ItemStack that goes in the same slot as nether wart would.
  - param: output - The ItemStack that will replace the input once the brewing is
 done.
  - returns: true if the recipe was added.
- `public static boolean addRecipe(ItemStack input,  java.lang.String ingredient,  ItemStack output)`
  Adds a recipe to the registry. Due to the nature of the brewing stand
   inputs that stack (a.k.a max stack size > 1) are not allowed.
  - param: input - The ItemStack that goes in same slots as the water bottles
 would.
  - param: ingredient - The ItemStack that goes in the same slot as nether wart would.
  - param: output - The ItemStack that will replace the input once the brewing is
 done.
  - returns: true if the recipe was added.
- `public static boolean addRecipe(IBrewingRecipe recipe)`
  Adds a recipe to the registry. Due to the nature of the brewing stand
   inputs that stack (a.k.a max stack size > 1) are not allowed.
- `public static ItemStack getOutput(ItemStack input,  ItemStack ingredient)`
  Returns the output ItemStack obtained by brewing the passed input and
   ingredient.
- `public static boolean hasOutput(ItemStack input,  ItemStack ingredient)`
  Returns true if the passed input and ingredient have an output
- `public static boolean canBrew(NonNullList<ItemStack> inputs,  ItemStack ingredient,  int[] inputIndexes)`
  Used by the brewing stand to determine if its contents can be brewed.
   Extra parameters exist to allow modders to create bigger brewing stands
   without much hassle
- `public static void brewPotions(NonNullList<ItemStack> inputs,  ItemStack ingredient,  int[] inputIndexes)`
  Used by the brewing stand to brew its inventory Extra parameters exist to
   allow modders to create bigger brewing stands without much hassle
- `public static boolean isValidIngredient(ItemStack stack)`
  Returns true if the passed ItemStack is a valid ingredient for any of the
   recipes in the registry.
- `public static boolean isValidInput(ItemStack stack)`
  Returns true if the passed ItemStack is a valid input for any of the
   recipes in the registry.
- `public static java.util.List<IBrewingRecipe> getRecipes()`
  Returns an unmodifiable list containing all the recipes in the registry

## IBrewingRecipe

*interface* `net.minecraftforge.common.brewing.IBrewingRecipe`

### Methods
- `boolean isInput(ItemStack input)`
  Returns true is the passed ItemStack is an input for this recipe. "Input"
   being the item that goes in one of the three bottom slots of the brewing
   stand (e.g: water bottle)
- `boolean isIngredient(ItemStack ingredient)`
  Returns true if the passed ItemStack is an ingredient for this recipe.
   "Ingredient" being the item that goes in the top slot of the brewing
   stand (e.g: nether wart)
- `ItemStack getOutput(ItemStack input,  ItemStack ingredient)`
  Returns the output when the passed input is brewed with the passed
   ingredient. Empty if invalid input or ingredient.

## VanillaBrewingRecipe

*class* `net.minecraftforge.common.brewing.VanillaBrewingRecipe`

Used in BrewingRecipeRegistry to maintain the vanilla behaviour.

 Most of the code was simply adapted from net.minecraft.tileentity.TileEntityBrewingStand

All Implemented Interfaces: IBrewingRecipe

### Methods
- `public boolean isInput(ItemStack stack)`
  Code adapted from TileEntityBrewingStand.isItemValidForSlot(int index, ItemStack stack)
- `public boolean isIngredient(ItemStack stack)`
  Code adapted from TileEntityBrewingStand.isItemValidForSlot(int index, ItemStack stack)
- `public ItemStack getOutput(ItemStack input,  ItemStack ingredient)`
  Code copied from TileEntityBrewingStand.brewPotions()
   It brews the potion by doing the bit-shifting magic and then checking if the new PotionEffect list is different to the old one,
   or if the new potion is a splash potion when the old one wasn't.
