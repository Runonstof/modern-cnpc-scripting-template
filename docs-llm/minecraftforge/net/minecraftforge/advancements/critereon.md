# net.minecraftforge.advancements.critereon

- [ItemPredicates](#itempredicates)
- [OredictItemPredicate](#oredictitempredicate)
## ItemPredicates

*class* `net.minecraftforge.advancements.critereon.ItemPredicates`

### Methods
- `public static void register(ResourceLocation rl,  java.util.function.Function<JsonObject,ItemPredicate> jsonToPredicate)`
- `public static java.util.Map<ResourceLocation,java.util.function.Function<JsonObject,ItemPredicate>> getPredicates()`

## OredictItemPredicate

*class* `net.minecraftforge.advancements.critereon.OredictItemPredicate`

An ItemPredicate that matches oredicts.

### Inherited fields
- from `net.minecraft.advancements.critereon.ItemPredicate`: `ANY`

### Methods
- `public boolean test(ItemStack stack)`

### Inherited methods
- from `net.minecraft.advancements.critereon.ItemPredicate`: `deserialize`, `deserializeArray`
