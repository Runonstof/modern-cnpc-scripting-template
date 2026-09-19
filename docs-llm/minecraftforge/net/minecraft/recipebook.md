# net.minecraft.recipebook

- [PlaceRecipe](#placerecipe)
- [ServerPlaceRecipe](#serverplacerecipe)
## PlaceRecipe

*interface* `net.minecraft.recipebook.PlaceRecipe`

### Methods
- `default void placeRecipe(int p_135409_,  int p_135410_,  int p_135411_,  RecipeHolder<?> p_298822_,  Iterator<T> p_135413_,  int p_135414_)`
- `void addItemToSlot(Iterator<T> p_135415_,  int p_135416_,  int p_135417_,  int p_135418_,  int p_135419_)`

## ServerPlaceRecipe

*class* `net.minecraft.recipebook.ServerPlaceRecipe`

### Fields
- `private static final org.slf4j.Logger LOGGER`
- `protected final StackedContents stackedContents`
- `protected Inventory inventory`
- `protected RecipeBookMenu<C extends Container> menu`

### Methods
- `public void recipeClicked(ServerPlayer p_135435_,  @Nullable  RecipeHolder<? extends Recipe<C>> p_298963_,  boolean p_135437_)`
- `protected void clearGrid()`
- `protected void handleRecipeClicked(RecipeHolder<? extends Recipe<C>> p_298652_,  boolean p_135442_)`
- `public void addItemToSlot(Iterator<Integer> p_135444_,  int p_135445_,  int p_135446_,  int p_135447_,  int p_135448_)`
- `protected int getStackSize(boolean p_135450_,  int p_135451_,  boolean p_135452_)`
- `protected void moveItemToGrid(Slot p_135439_,  ItemStack p_135440_)`
- `private boolean testClearGrid()`
- `private int getAmountOfFreeSlotsInInventory()`

### Inherited methods
- from `net.minecraft.recipebook.PlaceRecipe`: `placeRecipe`
