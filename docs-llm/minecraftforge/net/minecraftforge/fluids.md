# net.minecraftforge.fluids

- [DispenseFluidContainer](#dispensefluidcontainer)
- [FluidActionResult](#fluidactionresult)
- [FluidInteractionRegistry](#fluidinteractionregistry)
- [FluidInteractionRegistry.FluidInteraction](#fluidinteractionregistry.fluidinteraction)
- [FluidInteractionRegistry.HasFluidInteraction](#fluidinteractionregistry.hasfluidinteraction)
- [FluidInteractionRegistry.InteractionInformation](#fluidinteractionregistry.interactioninformation)
- [FluidStack](#fluidstack)
- [FluidType](#fluidtype)
- [FluidType.Properties](#fluidtype.properties)
- [FluidUtil](#fluidutil)
- [ForgeFlowingFluid](#forgeflowingfluid)
- [ForgeFlowingFluid.Flowing](#forgeflowingfluid.flowing)
- [ForgeFlowingFluid.Properties](#forgeflowingfluid.properties)
- [ForgeFlowingFluid.Source](#forgeflowingfluid.source)
- [IFluidBlock](#ifluidblock)
- [IFluidTank](#ifluidtank)
## DispenseFluidContainer

*class* `net.minecraftforge.fluids.DispenseFluidContainer`

Fills or drains a fluid container item using a Dispenser.

### Fields
- `private static final DispenseFluidContainer INSTANCE`
- `private final DefaultDispenseItemBehavior dispenseBehavior`

### Inherited fields
- from `net.minecraft.core.dispenser.DispenseItemBehavior`: `LOGGER`, `NOOP`

### Methods
- `public static DispenseFluidContainer getInstance()`
- `@NotNull public @NotNull ItemStack execute(@NotNull  @NotNull BlockSource source,  @NotNull  @NotNull ItemStack stack)`
- `@NotNull private @NotNull ItemStack fillContainer(@NotNull  @NotNull BlockSource source,  @NotNull  @NotNull ItemStack stack)`
  Picks up fluid in front of a Dispenser and fills a container with it.
- `@NotNull private @NotNull ItemStack dumpContainer(BlockSource source,  @NotNull  @NotNull ItemStack stack)`
  Drains a filled container and places the fluid in front of the Dispenser.

### Inherited methods
- from `net.minecraft.core.dispenser.DefaultDispenseItemBehavior`: `dispense`, `playAnimation`, `playSound`, `spawnItem`

## FluidActionResult

*class* `net.minecraftforge.fluids.FluidActionResult`

Holds the result of a fluid action from FluidUtil.

 Failed actions will always have isSuccess() == false and an empty ItemStack result. See FAILURE.

 Successful actions will always have isSuccess() == true.
 Successful actions may have an empty ItemStack result in some cases,
 for example the action succeeded and the resulting item was consumed.

### Fields
- `public static final FluidActionResult FAILURE`
- `public final boolean success`
- `@NotNull public final @NotNull ItemStack result`

### Methods
- `public boolean isSuccess()`
- `@NotNull public @NotNull ItemStack getResult()`

## FluidInteractionRegistry

*class* `net.minecraftforge.fluids.FluidInteractionRegistry`

A registry which defines the interactions a source fluid can have with its
 surroundings. Each possible flow direction is checked for all interactions with
 the source.

 Fluid interactions mimic the behavior of LiquidBlock#shouldSpreadLiquid.
 As such, all directions, besides Direction.DOWN is tested and then replaced.
 Any fluids which cause a change in the down interaction must be handled in
 FlowingFluid#spreadTo and not by this interaction manager.

### Fields
- `private static final Map<FluidType,List<FluidInteractionRegistry.InteractionInformation>> INTERACTIONS`

### Methods
- `public static void addInteraction(FluidType source,  FluidInteractionRegistry.InteractionInformation interaction)`
  Adds an interaction between a source and its surroundings.
  - param: source - the source of the interaction, this will be replaced if the interaction occurs
  - param: interaction - the interaction data to check and perform
- `public static boolean canInteract(Level level,  BlockPos pos)`
  Performs all potential fluid interactions at a given position.
  
   Note: Only the first interaction check that succeeds will occur.
  - param: level - the level the interactions take place in
  - param: pos - the position of the source fluid
  - returns: true if an interaction took place, false otherwise

## FluidInteractionRegistry.FluidInteraction

*interface* `net.minecraftforge.fluids.FluidInteractionRegistry.FluidInteraction`

An interface which performs an interaction for a source.

Enclosing class: FluidInteractionRegistry

### Methods
- `void interact(Level level,  BlockPos currentPos,  BlockPos relativePos,  FluidState currentState)`
  Performs the interaction between the source and the surrounding data.
  - param: level - the level the interaction takes place in
  - param: currentPos - the position of the source
  - param: relativePos - a position surrounding the source
  - param: currentState - the state of the fluid surrounding the source

## FluidInteractionRegistry.HasFluidInteraction

*interface* `net.minecraftforge.fluids.FluidInteractionRegistry.HasFluidInteraction`

An interface which tests whether a source fluid can interact with its
 surroundings.

Enclosing class: FluidInteractionRegistry

### Methods
- `boolean test(Level level,  BlockPos currentPos,  BlockPos relativePos,  FluidState currentState)`
  Returns whether the interaction can occur.
  - param: level - the level the interaction takes place in
  - param: currentPos - the position of the source
  - param: relativePos - a position surrounding the source
  - param: currentState - the state of the fluid surrounding the source
  - returns: true if an interaction can occur, false otherwise

## FluidInteractionRegistry.InteractionInformation

*record* `net.minecraftforge.fluids.FluidInteractionRegistry.InteractionInformation`

Holds the interaction data for a given source type on when to succeed
 and what to perform.

Enclosing class: FluidInteractionRegistry

### Fields
- `private final FluidInteractionRegistry.HasFluidInteraction predicate`
  The field for the predicate record component.
- `private final FluidInteractionRegistry.FluidInteraction interaction`
  The field for the interaction record component.

### Methods
- `public final String toString()`
  Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.
  - returns: a string representation of this object
- `public final int hashCode()`
  Returns a hash code value for this object. The value is derived from the hash code of each of the record components.
  - returns: a hash code value for this object
- `public final boolean equals(Object o)`
  Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).
  - param: o - the object with which to compare
  - returns: true if this object is the same as the o argument; false otherwise.
- `public FluidInteractionRegistry.HasFluidInteraction predicate()`
  Returns the value of the predicate record component.
  - returns: the value of the predicate record component
- `public FluidInteractionRegistry.FluidInteraction interaction()`
  Returns the value of the interaction record component.
  - returns: the value of the interaction record component

## FluidStack

*class* `net.minecraftforge.fluids.FluidStack`

ItemStack substitute for Fluids.

 NOTE: Equality is based on the Fluid, not the amount. Use
 isFluidStackIdentical(FluidStack) to determine if FluidID, Amount and NBT Tag are all
 equal.

### Fields
- `private static final org.apache.logging.log4j.Logger LOGGER`
- `public static final FluidStack EMPTY`
- `public static final com.mojang.serialization.Codec<FluidStack> CODEC`
- `private boolean isEmpty`
- `private int amount`
- `private CompoundTag tag`
- `private Holder.Reference<Fluid> fluidDelegate`

### Methods
- `public static FluidStack loadFluidStackFromNBT(CompoundTag nbt)`
  This provides a safe method for retrieving a FluidStack - if the Fluid is invalid, the stack
   will return as null.
- `public CompoundTag writeToNBT(CompoundTag nbt)`
- `public void writeToPacket(FriendlyByteBuf buf)`
- `public static FluidStack readFromPacket(FriendlyByteBuf buf)`
- `public final Fluid getFluid()`
- `public final Fluid getRawFluid()`
- `public boolean isEmpty()`
- `protected void updateEmpty()`
- `public int getAmount()`
- `public void setAmount(int amount)`
- `public void grow(int amount)`
- `public void shrink(int amount)`
- `public boolean hasTag()`
- `public CompoundTag getTag()`
- `public void setTag(CompoundTag tag)`
- `public CompoundTag getOrCreateTag()`
- `public CompoundTag getChildTag(String childName)`
- `public CompoundTag getOrCreateChildTag(String childName)`
- `public void removeChildTag(String childName)`
- `public Component getDisplayName()`
- `public String getTranslationKey()`
- `public FluidStack copy()`
  - returns: A copy of this FluidStack
- `public boolean isFluidEqual(@NotNull  @NotNull FluidStack other)`
  Determines if the FluidIDs and NBT Tags are equal. This does not check amounts.
  - param: other - The FluidStack for comparison
  - returns: true if the Fluids (IDs and NBT Tags) are the same
- `private boolean isFluidStackTagEqual(FluidStack other)`
- `public static boolean areFluidStackTagsEqual(@NotNull  @NotNull FluidStack stack1,  @NotNull  @NotNull FluidStack stack2)`
  Determines if the NBT Tags are equal. Useful if the FluidIDs are known to be equal.
- `public boolean containsFluid(@NotNull  @NotNull FluidStack other)`
  Determines if the Fluids are equal and this stack is larger.
  - returns: true if this FluidStack contains the other FluidStack (same fluid and >= amount)
- `public boolean isFluidStackIdentical(FluidStack other)`
  Determines if the FluidIDs, Amounts, and NBT Tags are all equal.
  - param: other - - the FluidStack for comparison
  - returns: true if the two FluidStacks are exactly the same
- `public boolean isFluidEqual(@NotNull  @NotNull ItemStack other)`
  Determines if the FluidIDs and NBT Tags are equal compared to a registered container
   ItemStack. This does not check amounts.
  - param: other - The ItemStack for comparison
  - returns: true if the Fluids (IDs and NBT Tags) are the same
- `public final int hashCode()`
- `public final boolean equals(Object o)`
  Default equality comparison for a FluidStack. Same functionality as isFluidEqual().
  
   This is included for use in data structures.

## FluidType

*class* `net.minecraftforge.fluids.FluidType`

A definition of common attributes, properties, and methods that is applied
 to a Fluid. This is used to link a flowing and source fluid together
 without relying on tags. Most accessors do not correlate to in-game features;
 they are provided for mods to take advantage of.

 Accessors are typically implemented in a method call chain. As such, it
 can provide a general implementation while more specific implementations
 can be implemented by overriding methods further in the call chain (on fluids,
 entities, etc.).

### Fields
- `public static final int BUCKET_VOLUME` (= 1000)
  The number of fluid units that a bucket represents.
- `public static final Lazy<Integer> SIZE`
  A lazy value which computes the number of fluid types within the
   registry.
- `private String descriptionId`
- `private final double motionScale`
- `private final boolean canPushEntity`
- `private final boolean canSwim`
- `private final boolean canDrown`
- `private final float fallDistanceModifier`
- `private final boolean canExtinguish`
- `private final boolean canConvertToSource`
- `private final boolean supportsBoating`
- `@Nullable private final @Nullable BlockPathTypes pathType`
- `@Nullable private final @Nullable BlockPathTypes adjacentPathType`
- `private final boolean canHydrate`
- `private final int lightLevel`
- `private final int density`
- `private final int temperature`
- `private final int viscosity`
- `private final Rarity rarity`
- `protected final Map<SoundAction,SoundEvent> sounds`
  A map of actions performed to sound that should be played.
- `private Object renderProperties`

### Methods
- `public Component getDescription()`
  Returns the component representing the name of the fluid type.
  - returns: the component representing the name of the fluid type
- `public String getDescriptionId()`
  Returns the identifier representing the name of the fluid type.
   If no identifier was specified, then the identifier will be defaulted
   to fluid_type.<modid>.<registry_name>.
  - returns: the identifier representing the name of the fluid type
- `public int getLightLevel()`
  Returns the light level emitted by the fluid.
  
   Note: This should be a value between [0,15]. If not specified, the
   light level is 0 as most fluids do not emit light.
  
   Implementation: This is used by the bucket model to determine whether the fluid
   should render full-bright when applyFluidLuminosity is true.
  - returns: the light level emitted by the fluid
- `public int getDensity()`
  Returns the density of the fluid.
  
   Note: This is an arbitrary number. Negative or zero values indicate
   that the fluid is lighter than air. If not specified, the density is
   approximately equivalent to the real-life density of water in kg/m^3.
  - returns: the density of the fluid
- `public int getTemperature()`
  Returns the temperature of the fluid.
  
   Note: This is an arbitrary number. Higher temperature values indicate
   that the fluid is hotter. If not specified, the temperature is approximately
   equivalent to the real-life room temperature of water in Kelvin.
  - returns: the temperature of the fluid
- `public int getViscosity()`
  Returns the viscosity, or thickness, of the fluid.
  
   Note: This is an arbitrary number. The value should never be negative.
   Higher viscosity values indicate that the fluid flows more slowly. If not
   specified, the viscosity is approximately equivalent to the real-life
   viscosity of water in m/s^2.
  - returns: the viscosity of the fluid
- `public Rarity getRarity()`
  Returns the rarity of the fluid.
  
   Note: If not specified, the rarity of the fluid is Rarity.COMMON.
  - returns: the rarity of the fluid
- `@Nullable public @Nullable SoundEvent getSound(SoundAction action)`
  Returns a sound to play when a certain action is performed. If no
   sound is present, then the sound will be null.
  - param: action - the action being performed
  - returns: the sound to play when performing the action
- `public double motionScale(Entity entity)`
  Returns how much the velocity of the fluid should be scaled by
   when applied to an entity.
  - param: entity - the entity in the fluid
  - returns: a scalar to multiply to the fluid velocity
- `public boolean canPushEntity(Entity entity)`
  Returns whether the fluid can push an entity.
  - param: entity - the entity in the fluid
  - returns: true if the entity can be pushed by the fluid, false otherwise
- `public boolean canSwim(Entity entity)`
  Returns whether the entity can swim in the fluid.
  - param: entity - the entity in the fluid
  - returns: true if the entity can swim in the fluid, false otherwise
- `public float getFallDistanceModifier(Entity entity)`
  Returns how much the fluid should scale the damage done to a falling
   entity when hitting the ground per tick.
  
   Implementation: If the entity is in many fluids, the smallest modifier
   is applied.
  - param: entity - the entity in the fluid
  - returns: a scalar to multiply to the fall damage
- `public boolean canExtinguish(Entity entity)`
  Returns whether the entity can be extinguished by this fluid.
  - param: entity - the entity in the fluid
  - returns: true if the entity can be extinguished, false otherwise
- `public boolean move(FluidState state,  LivingEntity entity,  Vec3 movementVector,  double gravity)`
  Performs how an entity moves when within the fluid. If using custom
   movement logic, the method should return true. Otherwise, the
   movement logic will default to water.
  - param: state - the state of the fluid
  - param: entity - the entity moving within the fluid
  - param: movementVector - the velocity of how the entity wants to move
  - param: gravity - the gravity to apply to the entity
  - returns: true if custom movement logic is performed, false otherwise
- `public boolean canDrownIn(LivingEntity entity)`
  Returns whether the entity can drown in the fluid.
  - param: entity - the entity in the fluid
  - returns: true if the entity can drown in the fluid, false otherwise
- `public void setItemMovement(ItemEntity entity)`
  Performs what to do when an item is in a fluid.
  - param: entity - the item in the fluid
- `public boolean supportsBoating(Boat boat)`
  Returns whether the boat can be used on the fluid.
  - param: boat - the boat trying to be used on the fluid
  - returns: true if the boat can be used, false otherwise
- `public boolean supportsBoating(FluidState state,  Boat boat)`
  Returns whether the boat can be used on the fluid.
  - param: state - the state of the fluid
  - param: boat - the boat trying to be used on the fluid
  - returns: true if the boat can be used, false otherwise
- `public boolean shouldUpdateWhileBoating(FluidState state,  Boat boat,  Entity rider)`
  When false, the fluid will no longer update its height value while
   within a boat while it is not within a fluid (Boat.isUnderWater().
  - param: state - the state of the fluid the rider is within
  - param: boat - the boat the rider is within that is not inside a fluid
  - param: rider - the rider of the boat
  - returns: true if the fluid height should be updated, false otherwise
- `public boolean canRideVehicleUnder(Entity vehicle,  Entity rider)`
  Returns whether the entity can ride in this vehicle under the fluid.
  - param: vehicle - the vehicle being ridden in
  - param: rider - the entity riding the vehicle
  - returns: true if the vehicle can be ridden in under this fluid,
 false otherwise
- `public boolean canHydrate(Entity entity)`
  Returns whether the entity can be hydrated by this fluid.
  
   Hydration is an arbitrary word which depends on the entity.
  - param: entity - the entity in the fluid
  - returns: true if the entity can be hydrated, false
 otherwise
- `@Nullable public @Nullable SoundEvent getSound(Entity entity,  SoundAction action)`
  Returns a sound to play when a certain action is performed by the
   entity in the fluid. If no sound is present, then the sound will be
   null.
  - param: entity - the entity in the fluid
  - param: action - the action being performed
  - returns: the sound to play when performing the action
- `public boolean canExtinguish(FluidState state,  BlockGetter getter,  BlockPos pos)`
  Returns whether the block can be extinguished by this fluid.
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: true if the block can be extinguished, false otherwise
- `public boolean canConvertToSource(FluidState state,  LevelReader reader,  BlockPos pos)`
  Returns whether the fluid can create a source.
  - param: state - the state of the fluid
  - param: reader - the reader that can get the fluid
  - param: pos - the location of the fluid
  - returns: true if the fluid can create a source, false otherwise
- `@Nullable public @Nullable BlockPathTypes getBlockPathType(FluidState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  boolean canFluidLog)`
  Gets the path type of this fluid when an entity is pathfinding. When
   null, uses vanilla behavior.
  - param: state - the state of the fluid
  - param: level - the level which contains this fluid
  - param: pos - the position of the fluid
  - param: mob - the mob currently pathfinding, may be null
  - param: canFluidLog - true if the path is being applied for fluids that can log blocks,
 should be checked against if the fluid can log a block
  - returns: the path type of this fluid
- `@Nullable public @Nullable BlockPathTypes getAdjacentBlockPathType(FluidState state,  BlockGetter level,  BlockPos pos,  @Nullable  @Nullable Mob mob,  BlockPathTypes originalType)`
  Gets the path type of the adjacent fluid to a pathfinding entity.
   Path types with a negative malus are not traversable for the entity.
   Pathfinding entities will favor paths consisting of a lower malus.
   When null, uses vanilla behavior.
  - param: state - the state of the fluid
  - param: level - the level which contains this fluid
  - param: pos - the position of the fluid
  - param: mob - the mob currently pathfinding, may be null
  - param: originalType - the path type of the source the entity is on
  - returns: the path type of this fluid
- `@Nullable public @Nullable SoundEvent getSound(@Nullable  @Nullable Player player,  BlockGetter getter,  BlockPos pos,  SoundAction action)`
  Returns a sound to play when a certain action is performed at a
   position. If no sound is present, then the sound will be null.
  - param: player - the player listening to the sound
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - param: action - the action being performed
  - returns: the sound to play when performing the action
- `public boolean canHydrate(FluidState state,  BlockGetter getter,  BlockPos pos,  BlockState source,  BlockPos sourcePos)`
  Returns whether the block can be hydrated by a fluid.
  
   Hydration is an arbitrary word which depends on the block.
  
   A farmland has moisture
   A sponge can soak up the liquid
   A coral can live
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - param: source - the state of the block being hydrated
  - param: sourcePos - the position of the block being hydrated
  - returns: true if the block can be hydrated, false otherwise
- `public int getLightLevel(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the light level emitted by the fluid.
  
   Note: This should be a value between [0,15]. If not specified, the
   light level is 0 as most fluids do not emit light.
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: the light level emitted by the fluid
- `public int getDensity(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the density of the fluid.
  
   Note: This is an arbitrary number. Negative or zero values indicate
   that the fluid is lighter than air. If not specified, the density is
   approximately equivalent to the real-life density of water in kg/m^3.
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: the density of the fluid
- `public int getTemperature(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the temperature of the fluid.
  
   Note: This is an arbitrary number. Higher temperature values indicate
   that the fluid is hotter. If not specified, the temperature is approximately
   equivalent to the real-life room temperature of water in Kelvin.
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: the temperature of the fluid
- `public int getViscosity(FluidState state,  BlockAndTintGetter getter,  BlockPos pos)`
  Returns the viscosity, or thickness, of the fluid.
  
   Note: This is an arbitrary number. The value should never be negative.
   Higher viscosity values indicate that the fluid flows more slowly. If not
   specified, the viscosity is approximately equivalent to the real-life
   viscosity of water in m/s^2.
  - param: state - the state of the fluid
  - param: getter - the getter which can get the fluid
  - param: pos - the position of the fluid
  - returns: the viscosity of the fluid
- `public boolean canConvertToSource(FluidStack stack)`
  Returns whether the fluid can create a source.
  - param: stack - the stack holding the fluid
  - returns: true if the fluid can create a source, false otherwise
- `@Nullable public @Nullable SoundEvent getSound(FluidStack stack,  SoundAction action)`
  Returns a sound to play when a certain action is performed. If no
   sound is present, then the sound will be null.
  - param: stack - the stack holding the fluid
  - param: action - the action being performed
  - returns: the sound to play when performing the action
- `public Component getDescription(FluidStack stack)`
  Returns the component representing the name of the fluid type.
  - param: stack - the stack holding the fluid
  - returns: the component representing the name of the fluid type
- `public String getDescriptionId(FluidStack stack)`
  Returns the identifier representing the name of the fluid.
   If no identifier was specified, then the identifier will be defaulted
   to fluid_type.<modid>.<registry_name>.
  - param: stack - the stack holding the fluid
  - returns: the identifier representing the name of the fluid
- `public boolean canHydrate(FluidStack stack)`
  Returns whether the fluid can hydrate.
  
   Hydration is an arbitrary word which depends on the implementation.
  - param: stack - the stack holding the fluid
  - returns: true if the fluid can hydrate, false otherwise
- `public int getLightLevel(FluidStack stack)`
  Returns the light level emitted by the fluid.
  
   Note: This should be a value between [0,15]. If not specified, the
   light level is 0 as most fluids do not emit light.
  - param: stack - the stack holding the fluid
  - returns: the light level emitted by the fluid
- `public int getDensity(FluidStack stack)`
  Returns the density of the fluid.
  
   Note: This is an arbitrary number. Negative or zero values indicate
   that the fluid is lighter than air. If not specified, the density is
   approximately equivalent to the real-life density of water in kg/m^3.
  - param: stack - the stack holding the fluid
  - returns: the density of the fluid
- `public int getTemperature(FluidStack stack)`
  Returns the temperature of the fluid.
  
   Note: This is an arbitrary number. Higher temperature values indicate
   that the fluid is hotter. If not specified, the temperature is approximately
   equivalent to the real-life room temperature of water in Kelvin.
  - param: stack - the stack holding the fluid
  - returns: the temperature of the fluid
- `public int getViscosity(FluidStack stack)`
  Returns the viscosity, or thickness, of the fluid.
  
   Note: This is an arbitrary number. The value should never be negative.
   Higher viscosity values indicate that the fluid flows more slowly. If not
   specified, the viscosity is approximately equivalent to the real-life
   viscosity of water in m/s^2.
  - param: stack - the stack holding the fluid
  - returns: the viscosity of the fluid
- `public Rarity getRarity(FluidStack stack)`
  Returns the rarity of the fluid.
  
   Note: If not specified, the rarity of the fluid is Rarity.COMMON.
  - param: stack - the stack holding the fluid
  - returns: the rarity of the fluid
- `public final boolean isAir()`
  Returns whether the fluid type represents air.
  - returns: true if the type represents air, false otherwise
- `public final boolean isVanilla()`
  Returns whether the fluid type is from vanilla.
  - returns: true if the type is from vanilla, false otherwise
- `public ItemStack getBucket(FluidStack stack)`
  Returns the bucket containing the fluid.
  - param: stack - the stack holding the fluid
  - returns: the bucket containing the fluid
- `public BlockState getBlockForFluidState(BlockAndTintGetter getter,  BlockPos pos,  FluidState state)`
  Returns the associated BlockState for a FluidState.
  - param: getter - the getter which can get the level data
  - param: pos - the position of where the fluid would be
  - param: state - the state of the fluid
  - returns: the BlockState of a fluid
- `public FluidState getStateForPlacement(BlockAndTintGetter getter,  BlockPos pos,  FluidStack stack)`
  Returns the FluidState when a FluidStack is trying to
   place it.
  - param: getter - the getter which can get the level data
  - param: pos - the position of where the fluid is being placed
  - param: stack - the stack holding the fluid
  - returns: the FluidState being placed
- `public final boolean canBePlacedInLevel(BlockAndTintGetter getter,  BlockPos pos,  FluidState state)`
  Returns whether the fluid can be placed in the level.
  - param: getter - the getter which can get the level data
  - param: pos - the position of where the fluid is being placed
  - param: state - the state of the fluid being placed
  - returns: true if the fluid can be placed, false otherwise
- `public final boolean canBePlacedInLevel(BlockAndTintGetter getter,  BlockPos pos,  FluidStack stack)`
  Returns whether the fluid can be placed in the level.
  - param: getter - the getter which can get the level data
  - param: pos - the position of where the fluid is being placed
  - param: stack - the stack holding the fluid
  - returns: true if the fluid can be placed, false otherwise
- `public final boolean isLighterThanAir()`
  Returns whether a fluid is lighter than air. If the fluid's density
   is lower than or equal 0, the fluid is considered lighter than air.
  
   Tip: 0 is the "canonical" density of air within Forge.
  
   Note: Fluids lighter than air will have their bucket model rotated
   upside-down; fluid block models will have their vertices inverted.
  - returns: true if the fluid is lighter than air, false otherwise
- `public boolean isVaporizedOnPlacement(Level level,  BlockPos pos,  FluidStack stack)`
  Determines if this fluid should be vaporized when placed into a level.
  
   Note: Fluids that can turn lava into obsidian should vaporize within
   the nether to preserve the intentions of vanilla.
  - param: level - the level the fluid is being placed in
  - param: pos - the position to place the fluid at
  - param: stack - the stack holding the fluid being placed
  - returns: true if this fluid should be vaporized on placement, false otherwise
- `public void onVaporize(@Nullable  @Nullable Player player,  Level level,  BlockPos pos,  FluidStack stack)`
  Performs an action when a fluid can be vaporized when placed into a level.
  
   Note: The fluid will already have been drained from the stack.
  - param: player - the player placing the fluid, may be null for blocks like dispensers
  - param: level - the level the fluid is vaporized in
  - param: pos - the position the fluid is vaporized at
  - param: stack - the stack holding the fluid being vaporized
- `public String toString()`
- `public Object getRenderPropertiesInternal()`
- `private void initClient()`
- `public void initializeClient(Consumer<IClientFluidTypeExtensions> consumer)`

## FluidType.Properties

*class* `net.minecraftforge.fluids.FluidType.Properties`

The properties of the fluid. The simple forms of each property can
 be specified while more complex logic can be overridden in the FluidType.

Enclosing class: FluidType

### Fields
- `private String descriptionId`
- `private double motionScale`
- `private boolean canPushEntity`
- `private boolean canSwim`
- `private boolean canDrown`
- `private float fallDistanceModifier`
- `private boolean canExtinguish`
- `private boolean canConvertToSource`
- `private boolean supportsBoating`
- `@Nullable private @Nullable BlockPathTypes pathType`
- `@Nullable private @Nullable BlockPathTypes adjacentPathType`
- `private final Map<SoundAction,SoundEvent> sounds`
- `private boolean canHydrate`
- `private int lightLevel`
- `private int density`
- `private int temperature`
- `private int viscosity`
- `private Rarity rarity`

### Methods
- `public static FluidType.Properties create()`
  Creates a new instance of the properties.
  - returns: the property holder instance
- `public FluidType.Properties descriptionId(String descriptionId)`
  Sets the identifier representing the name of the fluid type.
  - param: descriptionId - the identifier representing the name of the fluid type
  - returns: the property holder instance
- `public FluidType.Properties motionScale(double motionScale)`
  Sets how much the velocity of the fluid should be scaled by.
  - param: motionScale - a scalar to multiply to the fluid velocity
  - returns: the property holder instance
- `public FluidType.Properties canPushEntity(boolean canPushEntity)`
  Sets whether the fluid can push an entity.
  - param: canPushEntity - if the fluid can push an entity
  - returns: the property holder instance
- `public FluidType.Properties canSwim(boolean canSwim)`
  Sets whether the fluid can be swum in.
  - param: canSwim - if the fluid can be swum in
  - returns: the property holder instance
- `public FluidType.Properties canDrown(boolean canDrown)`
  Sets whether the fluid can drown something.
  - param: canDrown - if the fluid can drown something
  - returns: the property holder instance
- `public FluidType.Properties fallDistanceModifier(float fallDistanceModifier)`
  Sets how much the fluid should scale the damage done when hitting
   the ground per tick.
  - param: fallDistanceModifier - a scalar to multiply to the fall damage
  - returns: the property holder instance
- `public FluidType.Properties canExtinguish(boolean canExtinguish)`
  Sets whether the fluid can extinguish.
  - param: canExtinguish - if the fluid can extinguish
  - returns: the property holder instance
- `public FluidType.Properties canConvertToSource(boolean canConvertToSource)`
  Sets whether the fluid can create a source.
  - param: canConvertToSource - if the fluid can create a source
  - returns: the property holder instance
- `public FluidType.Properties supportsBoating(boolean supportsBoating)`
  Sets whether the fluid supports boating.
  - param: supportsBoating - if the fluid supports boating
  - returns: the property holder instance
- `public FluidType.Properties pathType(@Nullable  @Nullable BlockPathTypes pathType)`
  Sets the path type of this fluid.
  - param: pathType - the path type of this fluid
  - returns: the property holder instance
- `public FluidType.Properties adjacentPathType(@Nullable  @Nullable BlockPathTypes adjacentPathType)`
  Sets the path type of the adjacent fluid. Path types with a negative
   malus are not traversable. Pathfinding will favor paths consisting of
   a lower malus.
  - param: adjacentPathType - the path type of this fluid
  - returns: the property holder instance
- `public FluidType.Properties sound(SoundAction action,  SoundEvent sound)`
  Sets a sound to play when a certain action is performed.
  - param: action - the action being performed
  - param: sound - the sound to play when performing the action
  - returns: the property holder instance
- `public FluidType.Properties canHydrate(boolean canHydrate)`
  Sets whether the fluid can hydrate.
  
   Hydration is an arbitrary word which depends on the implementation.
  - param: canHydrate - if the fluid can hydrate
  - returns: the property holder instance
- `public FluidType.Properties lightLevel(int lightLevel)`
  Sets the light level emitted by the fluid.
  - param: lightLevel - the light level emitted by the fluid
  - returns: the property holder instance
  - throws: IllegalArgumentException - if light level is not between [0,15]
- `public FluidType.Properties density(int density)`
  Sets the density of the fluid.
  - param: density - the density of the fluid
  - returns: the property holder instance
- `public FluidType.Properties temperature(int temperature)`
  Sets the temperature of the fluid.
  - param: temperature - the temperature of the fluid
  - returns: the property holder instance
- `public FluidType.Properties viscosity(int viscosity)`
  Sets the viscosity, or thickness, of the fluid.
  - param: viscosity - the viscosity of the fluid
  - returns: the property holder instance
  - throws: IllegalArgumentException - if viscosity is negative
- `public FluidType.Properties rarity(Rarity rarity)`
  Sets the rarity of the fluid.
  - param: rarity - the rarity of the fluid
  - returns: the property holder instance

## FluidUtil

*class* `net.minecraftforge.fluids.FluidUtil`

### Methods
- `public static boolean interactWithFluidHandler(@NotNull  @NotNull Player player,  @NotNull  @NotNull InteractionHand hand,  @NotNull  @NotNull Level level,  @NotNull  @NotNull BlockPos pos,  @Nullable  @Nullable Direction side)`
  Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler block.
   First it tries to fill the item from the block,
   if that action fails then it tries to drain the item into the block.
   Automatically updates the item in the player's hand and stashes any extra items created.
  - param: player - The player doing the interaction between the item and fluid handler block.
  - param: hand - The player's hand that is holding an item that should interact with the fluid handler block.
  - param: level - The level that contains the fluid handler block.
  - param: pos - The position of the fluid handler block in the level.
  - param: side - The side of the block to interact with. May be null.
  - returns: true if the interaction succeeded and updated the item held by the player, false otherwise.
- `public static boolean interactWithFluidHandler(@NotNull  @NotNull Player player,  @NotNull  @NotNull InteractionHand hand,  @NotNull  @NotNull IFluidHandler handler)`
  Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler.
   First it tries to fill the item from the handler,
   if that action fails then it tries to drain the item into the handler.
   Automatically updates the item in the player's hand and stashes any extra items created.
  - param: player - The player doing the interaction between the item and fluid handler.
  - param: hand - The player's hand that is holding an item that should interact with the fluid handler.
  - param: handler - The fluid handler.
  - returns: true if the interaction succeeded and updated the item held by the player, false otherwise.
- `@NotNull public static @NotNull FluidActionResult tryFillContainer(@NotNull  @NotNull ItemStack container,  IFluidHandler fluidSource,  int maxAmount,  @Nullable  @Nullable Player player,  boolean doFill)`
  Fill a container from the given fluidSource.
  - param: container - The container to be filled. Will not be modified.
 Separate handling must be done to reduce the stack size, stow containers, etc, on success.
 See tryFillContainerAndStow(ItemStack, IFluidHandler, IItemHandler, int, Player, boolean).
  - param: fluidSource - The fluid handler to be drained.
  - param: maxAmount - The largest amount of fluid that should be transferred.
  - param: player - The player to make the filling noise. Pass null for no noise.
  - param: doFill - true if the container should actually be filled, false if it should be simulated.
  - returns: a FluidActionResult holding the filled container if successful.
- `@NotNull public static @NotNull FluidActionResult tryEmptyContainer(@NotNull  @NotNull ItemStack container,  IFluidHandler fluidDestination,  int maxAmount,  @Nullable  @Nullable Player player,  boolean doDrain)`
  Takes a filled container and tries to empty it into the given tank.
  - param: container - The filled container. Will not be modified.
 Separate handling must be done to reduce the stack size, stow containers, etc, on success.
 See tryEmptyContainerAndStow(ItemStack, IFluidHandler, IItemHandler, int, Player, boolean).
  - param: fluidDestination - The fluid handler to be filled by the container.
  - param: maxAmount - The largest amount of fluid that should be transferred.
  - param: player - Player for making the bucket drained sound. Pass null for no noise.
  - param: doDrain - true if the container should actually be drained, false if it should be simulated.
  - returns: a FluidActionResult holding the empty container if the fluid handler was filled.
 NOTE If the container is consumable, the empty container will be null on success.
- `@NotNull public static @NotNull FluidActionResult tryFillContainerAndStow(@NotNull  @NotNull ItemStack container,  IFluidHandler fluidSource,  IItemHandler inventory,  int maxAmount,  @Nullable  @Nullable Player player,  boolean doFill)`
  Takes an Fluid Container Item and tries to fill it from the given tank.
   If the player is in creative mode, the container will not be modified on success, and no additional items created.
   If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
   If the inventory does not accept it, it will be given to the player or dropped at the players feet.
   If player is null in this case, the action will be aborted.
  - param: container - The Fluid Container ItemStack to fill.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: fluidSource - The fluid source to fill from
  - param: inventory - An inventory where any additionally created item (filled container if multiple empty are present) are put
  - param: maxAmount - Maximum amount of fluid to take from the tank.
  - param: player - The player that gets the items the inventory can't take.
 Can be null, only used if the inventory cannot take the filled stack.
  - param: doFill - true if the container should actually be filled, false if it should be simulated.
  - returns: a FluidActionResult holding the result and the resulting container. The resulting container is empty on failure.
- `@NotNull public static @NotNull FluidActionResult tryEmptyContainerAndStow(@NotNull  @NotNull ItemStack container,  IFluidHandler fluidDestination,  IItemHandler inventory,  int maxAmount,  @Nullable  @Nullable Player player,  boolean doDrain)`
  Takes an Fluid Container Item, tries to empty it into the fluid handler, and stows it in the given inventory.
   If the player is in creative mode, the container will not be modified on success, and no additional items created.
   If the input itemstack has a stacksize > 1 it will stow the emptied container in the given inventory.
   If the inventory does not accept the emptied container, it will be given to the player or dropped at the players feet.
   If player is null in this case, the action will be aborted.
  - param: container - The filled Fluid Container Itemstack to empty.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: fluidDestination - The fluid destination to fill from the fluid container.
  - param: inventory - An inventory where any additionally created item (filled container if multiple empty are present) are put
  - param: maxAmount - Maximum amount of fluid to take from the tank.
  - param: player - The player that gets the items the inventory can't take. Can be null, only used if the inventory cannot take the filled stack.
  - param: doDrain - true if the container should actually be drained, false if it should be simulated.
  - returns: a FluidActionResult holding the result and the resulting container. The resulting container is empty on failure.
- `@NotNull public static @NotNull FluidStack tryFluidTransfer(IFluidHandler fluidDestination,  IFluidHandler fluidSource,  int maxAmount,  boolean doTransfer)`
  Fill a destination fluid handler from a source fluid handler with a max amount.
   To specify a fluid to transfer instead of max amount, use tryFluidTransfer(IFluidHandler, IFluidHandler, FluidStack, boolean)
   To transfer as much as possible, use Integer.MAX_VALUE for maxAmount.
  - param: fluidDestination - The fluid handler to be filled.
  - param: fluidSource - The fluid handler to be drained.
  - param: maxAmount - The largest amount of fluid that should be transferred.
  - param: doTransfer - True if the transfer should actually be done, false if it should be simulated.
  - returns: the fluidStack that was transferred from the source to the destination. null on failure.
- `@NotNull public static @NotNull FluidStack tryFluidTransfer(IFluidHandler fluidDestination,  IFluidHandler fluidSource,  FluidStack resource,  boolean doTransfer)`
  Fill a destination fluid handler from a source fluid handler using a specific fluid.
   To specify a max amount to transfer instead of specific fluid, use tryFluidTransfer(IFluidHandler, IFluidHandler, int, boolean)
   To transfer as much as possible, use Integer.MAX_VALUE for resource.amount.
  - param: fluidDestination - The fluid handler to be filled.
  - param: fluidSource - The fluid handler to be drained.
  - param: resource - The fluid that should be transferred. Amount represents the maximum amount to transfer.
  - param: doTransfer - True if the transfer should actually be done, false if it should be simulated.
  - returns: the fluidStack that was transferred from the source to the destination. null on failure.
- `@NotNull private static @NotNull FluidStack tryFluidTransfer_Internal(IFluidHandler fluidDestination,  IFluidHandler fluidSource,  FluidStack drainable,  boolean doTransfer)`
  Internal method for filling a destination fluid handler from a source fluid handler using a specific fluid.
   Assumes that "drainable" can be drained from "fluidSource".
  
   Modders: Instead of this method, use tryFluidTransfer(IFluidHandler, IFluidHandler, FluidStack, boolean)
   or tryFluidTransfer(IFluidHandler, IFluidHandler, int, boolean).
- `public static LazyOptional<IFluidHandlerItem> getFluidHandler(@NotNull  @NotNull ItemStack itemStack)`
  Helper method to get an IFluidHandlerItem for an itemStack.
  
   The itemStack passed in here WILL be modified, the IFluidHandlerItem acts on it directly.
   Some IFluidHandlerItem will change the item entirely, always use IFluidHandlerItem.getContainer()
   after using the fluid handler to get the resulting item back.
  
   Note that the itemStack MUST have a stackSize of 1 if you want to fill or drain it.
   You can't fill or drain multiple items at once, if you do then liquid is multiplied or destroyed.
  
   Vanilla buckets will be converted to universal buckets if they are enabled.
- `public static Optional<FluidStack> getFluidContained(@NotNull  @NotNull ItemStack container)`
  Helper method to get the fluid contained in an itemStack
- `public static LazyOptional<IFluidHandler> getFluidHandler(Level level,  BlockPos blockPos,  @Nullable  @Nullable Direction side)`
  Helper method to get an IFluidHandler for at a block position.
- `@NotNull public static @NotNull FluidActionResult tryPickUpFluid(@NotNull  @NotNull ItemStack emptyContainer,  @Nullable  @Nullable Player playerIn,  Level level,  BlockPos pos,  Direction side)`
  Attempts to pick up a fluid in the level and put it in an empty container item.
  - param: emptyContainer - The empty container to fill.
 Will not be modified directly, if modifications are necessary a modified copy is returned in the result.
  - param: playerIn - The player filling the container. Optional.
  - param: level - The level the fluid is in.
  - param: pos - The position of the fluid in the level.
  - param: side - The side of the fluid that is being drained.
  - returns: a FluidActionResult holding the result and the resulting container.
- `@NotNull public static @NotNull FluidActionResult tryPlaceFluid(@Nullable  @Nullable Player player,  Level level,  InteractionHand hand,  BlockPos pos,  @NotNull  @NotNull ItemStack container,  FluidStack resource)`
  ItemStack version of tryPlaceFluid(Player, Level, InteractionHand, BlockPos, IFluidHandler, FluidStack).
   Use the returned FluidActionResult to update the container ItemStack.
  - param: player - Player who places the fluid. May be null for blocks like dispensers.
  - param: level - Level to place the fluid in
  - param: hand - hand of the player to place the fluid with
  - param: pos - The position in the level to place the fluid block
  - param: container - The fluid container holding the fluidStack to place
  - param: resource - The fluidStack to place
  - returns: the container's ItemStack with the remaining amount of fluid if the placement was successful, null otherwise
- `public static boolean tryPlaceFluid(@Nullable  @Nullable Player player,  Level level,  InteractionHand hand,  BlockPos pos,  IFluidHandler fluidSource,  FluidStack resource)`
  Tries to place a fluid resource into the level as a block and drains the fluidSource.
   Makes a fluid emptying or vaporization sound when successful.
   Honors the amount of fluid contained by the used container.
   Checks if water-like fluids should vaporize like in the nether.
  
   Modeled after BucketItem.emptyContents(Player, Level, BlockPos, BlockHitResult)
  - param: player - Player who places the fluid. May be null for blocks like dispensers.
  - param: level - Level to place the fluid in
  - param: hand - hand of the player to place the fluid with
  - param: pos - The position in the level to place the fluid block
  - param: fluidSource - The fluid source holding the fluidStack to place
  - param: resource - The fluidStack to place.
  - returns: true if the placement was successful, false otherwise
- `private static IFluidHandler getFluidBlockHandler(Fluid fluid,  Level level,  BlockPos pos)`
  Internal method for getting a fluid block handler for placing a fluid.
  
   Modders: Instead of this method, use tryPlaceFluid(Player, Level, InteractionHand, BlockPos, ItemStack, FluidStack)
   or tryPlaceFluid(Player, Level, InteractionHand, BlockPos, IFluidHandler, FluidStack)
- `public static void destroyBlockOnFluidPlacement(Level level,  BlockPos pos)`
  Destroys a block when a fluid is placed in the same position.
   Modeled after BucketItem.emptyContents(Player, Level, BlockPos, BlockHitResult)
  
   This is a helper method for implementing IFluidBlock.place(Level, BlockPos, FluidStack, IFluidHandler.FluidAction).
  - param: level - the level that the fluid will be placed in
  - param: pos - the location that the fluid will be placed
- `@NotNull public static @NotNull ItemStack getFilledBucket(@NotNull  @NotNull FluidStack fluidStack)`
  - param: fluidStack - contents used to fill the bucket.
 FluidStack is used instead of Fluid to preserve fluid NBT, the amount is ignored.
  - returns: a filled vanilla bucket or filled universal bucket.
 Returns empty itemStack if none of the enabled buckets can hold the fluid.

## ForgeFlowingFluid

*class* `net.minecraftforge.fluids.ForgeFlowingFluid`

### Fields
- `private final Supplier<? extends FluidType> fluidType`
- `private final Supplier<? extends Fluid> flowing`
- `private final Supplier<? extends Fluid> still`
- `@Nullable private final @Nullable Supplier<? extends Item> bucket`
- `@Nullable private final @Nullable Supplier<? extends LiquidBlock> block`
- `private final int slopeFindDistance`
- `private final int levelDecreasePerBlock`
- `private final float explosionResistance`
- `private final int tickRate`

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public FluidType getFluidType()`
  Description copied from interface: IForgeFluid
  Returns the type of this fluid.
  
   Important: This MUST be overridden on your fluid, otherwise an
   error will be thrown.
  - returns: the type of this fluid
- `public Fluid getFlowing()`
- `public Fluid getSource()`
- `protected boolean canConvertToSource(Level level)`
- `public boolean canConvertToSource(FluidState state,  Level level,  BlockPos pos)`
  Description copied from interface: IForgeFluid
  Returns whether the fluid can create a source.
  - param: state - the state of the fluid
  - param: level - the level that can get the fluid
  - param: pos - the location of the fluid
  - returns: true if the fluid can create a source, false otherwise
- `protected void beforeDestroyingBlock(LevelAccessor worldIn,  BlockPos pos,  BlockState state)`
- `protected int getSlopeFindDistance(LevelReader worldIn)`
- `protected int getDropOff(LevelReader worldIn)`
- `public Item getBucket()`
- `protected boolean canBeReplacedWith(FluidState state,  BlockGetter level,  BlockPos pos,  Fluid fluidIn,  Direction direction)`
- `public int getTickDelay(LevelReader level)`
- `protected float getExplosionResistance()`
- `protected BlockState createLegacyBlock(FluidState state)`
- `public boolean isSame(Fluid fluidIn)`
- `@NotNull public @NotNull Optional<SoundEvent> getPickupSound()`

### Inherited methods
- from `net.minecraft.world.level.material.FlowingFluid`: `canSpreadTo`, `createFluidStateDefinition`, `getAmount`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `getSpreadDelay`, `isSolidFace`, `spread`, `spreadTo`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `animateTick`, `builtInRegistryHolder`, `defaultFluidState`, `getDripParticle`, `getStateDefinition`, `is`, `isEmpty`, `isRandomlyTicking`, `isSource`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## ForgeFlowingFluid.Flowing

*class* `net.minecraftforge.fluids.ForgeFlowingFluid.Flowing`

Enclosing class: ForgeFlowingFluid

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `protected void createFluidStateDefinition(StateDefinition.Builder<Fluid,FluidState> builder)`
- `public int getAmount(FluidState state)`
- `public boolean isSource(FluidState state)`

### Inherited methods
- from `net.minecraftforge.fluids.ForgeFlowingFluid`: `beforeDestroyingBlock`, `canBeReplacedWith`, `canConvertToSource`, `canConvertToSource`, `createLegacyBlock`, `getBucket`, `getDropOff`, `getExplosionResistance`, `getFlowing`, `getFluidType`, `getPickupSound`, `getSlopeFindDistance`, `getSource`, `getTickDelay`, `isSame`
- from `net.minecraft.world.level.material.FlowingFluid`: `canSpreadTo`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `getSpreadDelay`, `isSolidFace`, `spread`, `spreadTo`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `animateTick`, `builtInRegistryHolder`, `defaultFluidState`, `getDripParticle`, `getStateDefinition`, `is`, `isEmpty`, `isRandomlyTicking`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## ForgeFlowingFluid.Properties

*class* `net.minecraftforge.fluids.ForgeFlowingFluid.Properties`

Enclosing class: ForgeFlowingFluid

### Fields
- `private Supplier<? extends FluidType> fluidType`
- `private Supplier<? extends Fluid> still`
- `private Supplier<? extends Fluid> flowing`
- `private Supplier<? extends Item> bucket`
- `private Supplier<? extends LiquidBlock> block`
- `private int slopeFindDistance`
- `private int levelDecreasePerBlock`
- `private float explosionResistance`
- `private int tickRate`

### Methods
- `public ForgeFlowingFluid.Properties bucket(Supplier<? extends Item> bucket)`
- `public ForgeFlowingFluid.Properties block(Supplier<? extends LiquidBlock> block)`
- `public ForgeFlowingFluid.Properties slopeFindDistance(int slopeFindDistance)`
- `public ForgeFlowingFluid.Properties levelDecreasePerBlock(int levelDecreasePerBlock)`
- `public ForgeFlowingFluid.Properties explosionResistance(float explosionResistance)`
- `public ForgeFlowingFluid.Properties tickRate(int tickRate)`

## ForgeFlowingFluid.Source

*class* `net.minecraftforge.fluids.ForgeFlowingFluid.Source`

Enclosing class: ForgeFlowingFluid

### Inherited fields
- from `net.minecraft.world.level.material.FlowingFluid`: `FALLING`, `LEVEL`
- from `net.minecraft.world.level.material.Fluid`: `FLUID_STATE_REGISTRY`, `stateDefinition`

### Methods
- `public int getAmount(FluidState state)`
- `public boolean isSource(FluidState state)`

### Inherited methods
- from `net.minecraftforge.fluids.ForgeFlowingFluid`: `beforeDestroyingBlock`, `canBeReplacedWith`, `canConvertToSource`, `canConvertToSource`, `createLegacyBlock`, `getBucket`, `getDropOff`, `getExplosionResistance`, `getFlowing`, `getFluidType`, `getPickupSound`, `getSlopeFindDistance`, `getSource`, `getTickDelay`, `isSame`
- from `net.minecraft.world.level.material.FlowingFluid`: `canSpreadTo`, `createFluidStateDefinition`, `getFlow`, `getFlowing`, `getHeight`, `getLegacyLevel`, `getNewLiquid`, `getOwnHeight`, `getShape`, `getSlopeDistance`, `getSource`, `getSpread`, `getSpreadDelay`, `isSolidFace`, `spread`, `spreadTo`, `tick`
- from `net.minecraft.world.level.material.Fluid`: `animateTick`, `builtInRegistryHolder`, `defaultFluidState`, `getDripParticle`, `getStateDefinition`, `is`, `isEmpty`, `isRandomlyTicking`, `randomTick`, `registerDefaultState`
- from `net.minecraftforge.common.extensions.IForgeFluid`: `canExtinguish`, `canHydrate`, `getAdjacentBlockPathType`, `getBlockPathType`, `getExplosionResistance`, `move`, `shouldUpdateWhileBoating`, `supportsBoating`

## IFluidBlock

*interface* `net.minecraftforge.fluids.IFluidBlock`

Implement this interface on Block classes which represent world-placeable Fluids.

### Methods
- `Fluid getFluid()`
  Returns the Fluid associated with this Block.
- `int place(Level level,  BlockPos pos,  @NotNull  @NotNull FluidStack fluidStack,  IFluidHandler.FluidAction action)`
  Attempts to place the block at a given position. The placed block's level will correspond
   to the provided fluid amount.
   This method should be called by fluid containers such as buckets, but it is recommended
   to use FluidUtil.
  - param: level - the level to place the block in
  - param: pos - the position to place the block at
  - param: fluidStack - the fluid stack to get the required data from
  - param: action - If SIMULATE, the placement will only be simulated
  - returns: the amount of fluid extracted from the provided stack to achieve some fluid level
- `@NotNull @NotNull FluidStack drain(Level level,  BlockPos pos,  IFluidHandler.FluidAction action)`
  Attempt to drain the block. This method should be called by devices such as pumps.
  
   NOTE: The block is intended to handle its own state changes.
  - param: action - If SIMULATE, the drain will only be simulated.
  - returns: the fluid stack after draining the block
- `boolean canDrain(Level level,  BlockPos pos)`
  Check to see if a block can be drained. This method should be called by devices such as
   pumps.
- `float getFilledPercentage(Level level,  BlockPos pos)`
  Returns the amount of a single block is filled. Value between 0 and 1.
   1 meaning the entire 1x1x1 cube is full, 0 meaning completely empty.
  
   If the return value is negative. It will be treated as filling the block
   from the top down instead of bottom up.

## IFluidTank

*interface* `net.minecraftforge.fluids.IFluidTank`

This interface represents a Fluid Tank. IT IS NOT REQUIRED but is provided for convenience.
 You are free to handle Fluids in any way that you wish - this is simply an easy default way.
 DO NOT ASSUME that these objects are used internally in all cases.

### Methods
- `@NotNull @NotNull FluidStack getFluid()`
  - returns: FluidStack representing the fluid in the tank, null if the tank is empty.
- `int getFluidAmount()`
  - returns: Current amount of fluid in the tank.
- `int getCapacity()`
  - returns: Capacity of this fluid tank.
- `boolean isFluidValid(FluidStack stack)`
  - param: stack - Fluidstack holding the Fluid to be queried.
  - returns: If the tank can hold the fluid (EVER, not at the time of query).
- `int fill(FluidStack resource,  IFluidHandler.FluidAction action)`
  - param: resource - FluidStack attempting to fill the tank.
  - param: action - If SIMULATE, the fill will only be simulated.
  - returns: Amount of fluid that was accepted (or would be, if simulated) by the tank.
- `@NotNull @NotNull FluidStack drain(int maxDrain,  IFluidHandler.FluidAction action)`
  - param: maxDrain - Maximum amount of fluid to be removed from the container.
  - param: action - If SIMULATE, the drain will only be simulated.
  - returns: Amount of fluid that was removed (or would be, if simulated) from the tank.
- `@NotNull @NotNull FluidStack drain(FluidStack resource,  IFluidHandler.FluidAction action)`
  - param: resource - Maximum amount of fluid to be removed from the container.
  - param: action - If SIMULATE, the drain will only be simulated.
  - returns: FluidStack representing fluid that was removed (or would be, if simulated) from the tank.
