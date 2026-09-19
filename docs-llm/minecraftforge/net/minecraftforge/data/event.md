# net.minecraftforge.data.event

- [GatherDataEvent](#gatherdataevent)
- [GatherDataEvent.DataGeneratorConfig](#gatherdataevent.datageneratorconfig)
## GatherDataEvent

*class* `net.minecraftforge.data.event.GatherDataEvent`

### Fields
- `private final DataGenerator dataGenerator`
- `private final GatherDataEvent.DataGeneratorConfig config`
- `private final ExistingFileHelper existingFileHelper`
- `private final ModContainer modContainer`

### Methods
- `public ModContainer getModContainer()`
- `public Collection<Path> getInputs()`
- `public DataGenerator getGenerator()`
- `public ExistingFileHelper getExistingFileHelper()`
- `public CompletableFuture<HolderLookup.Provider> getLookupProvider()`
- `public boolean includeServer()`
- `public boolean includeClient()`
- `public boolean includeDev()`
- `public boolean includeReports()`
- `public boolean validate()`

## GatherDataEvent.DataGeneratorConfig

*class* `net.minecraftforge.data.event.GatherDataEvent.DataGeneratorConfig`

Enclosing class: GatherDataEvent

### Fields
- `private final Set<String> mods`
- `private final Path path`
- `private final Collection<Path> inputs`
- `private final CompletableFuture<HolderLookup.Provider> lookupProvider`
- `private final boolean server`
- `private final boolean client`
- `private final boolean dev`
- `private final boolean reports`
- `private final boolean validate`
- `private final boolean flat`
- `private final List<DataGenerator> generators`

### Methods
- `public Collection<Path> getInputs()`
- `public Set<String> getMods()`
- `public boolean isFlat()`
- `public DataGenerator makeGenerator(Function<Path,Path> pathEnhancer,  boolean shouldExecute)`
- `public void runAll()`
