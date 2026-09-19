# net.minecraftforge.fml.core

- [ModStateProvider](#modstateprovider)
- [ParallelTransition](#paralleltransition)
## ModStateProvider

*class* `net.minecraftforge.fml.core.ModStateProvider`

Provider for the core FML mod loading states.

### Fields
- `final ModLoadingState ERROR`
  The special mod loading state for exceptional situations and error handling.
- `private final ModLoadingState VALIDATE`
  First gathering state, for the validation of the mod list.
   TODO: figure out where this is used and why this exists instead of CONSTRUCT being the first state
- `final ModLoadingState CONSTRUCT`
  Gathering state after validation, for the construction
   of mod containers and their backing mod instances.
- `private final ModLoadingState CONFIG_LOAD`
  First loading state, for loading of the common and (if applicable)
   client-side mod configurations.
- `private final ModLoadingState COMMON_SETUP`
  Loading state after configuration loading, for
   common (non-side-specific) setup and initialization.
- `private final ModLoadingState SIDED_SETUP`
  Loading state after common setup, for side-specific
   setup and initialization.
- `private final ModLoadingState ENQUEUE_IMC`
  First completion state, for enqueuing InterModComms
   messages.
- `private final ModLoadingState PROCESS_IMC`
  Completion state after ENQUEUE_IMC, for processing of messages
   received through InterModComms.
- `private final ModLoadingState COMPLETE`
  Completion state after PROCESS_IMC, marking the completion
   of the basic mod loading process; however, additional completion states may be present after this.
- `private final ModLoadingState DONE`
  The marker state for the completion of the full mod loading process.

### Methods
- `public List<IModLoadingState> getAllStates()`
  Description copied from interface: IModStateProvider
  Returns the list of mod loading states known to this provider.
  - returns: the list of mod loading states known to this provider

## ParallelTransition

*record* `net.minecraftforge.fml.core.ParallelTransition`

### Fields
- `private final ModLoadingStage stage`
  The field for the stage record component.
- `private final Class<? extends ParallelDispatchEvent> event`
  The field for the event record component.

### Methods
- `public Supplier<Stream<IModStateTransition.EventGenerator<?>>> eventFunctionStream()`
- `public ThreadSelector threadSelector()`
- `public BiFunction<Executor,CompletableFuture<Void>,CompletableFuture<Void>> finalActivityGenerator()`
- `public BiFunction<Executor,? extends IModStateTransition.EventGenerator<?>,CompletableFuture<Void>> preDispatchHook()`
- `public BiFunction<Executor,? extends IModStateTransition.EventGenerator<?>,CompletableFuture<Void>> postDispatchHook()`
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
- `public ModLoadingStage stage()`
  Returns the value of the stage record component.
  - returns: the value of the stage record component
- `public Class<? extends ParallelDispatchEvent> event()`
  Returns the value of the event record component.
  - returns: the value of the event record component

### Inherited methods
- from `net.minecraftforge.fml.IModStateTransition`: `build`, `nextModLoadingStage`
