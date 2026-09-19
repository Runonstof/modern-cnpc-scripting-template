# net.minecraft.client.searchtree

- [FullTextSearchTree](#fulltextsearchtree)
- [IdSearchTree](#idsearchtree)
- [IntersectionIterator](#intersectioniterator)
- [MergingUniqueIterator](#merginguniqueiterator)
- [PlainTextSearchTree](#plaintextsearchtree)
- [RefreshableSearchTree](#refreshablesearchtree)
- [ResourceLocationSearchTree](#resourcelocationsearchtree)
- [SearchRegistry](#searchregistry)
- [SearchRegistry.Key](#searchregistry.key)
- [SearchRegistry.TreeBuilderSupplier](#searchregistry.treebuildersupplier)
- [SearchRegistry.TreeEntry](#searchregistry.treeentry)
- [SearchTree](#searchtree)
- [SuffixArray](#suffixarray)
## FullTextSearchTree

*class* `net.minecraft.client.searchtree.FullTextSearchTree`

### Fields
- `private final List<T> contents`
- `private final Function<T,Stream<String>> filler`
- `private PlainTextSearchTree<T> plainTextSearchTree`

### Inherited fields
- from `net.minecraft.client.searchtree.IdSearchTree`: `additionOrder`, `resourceLocationSearchTree`

### Methods
- `public void refresh()`
- `protected List<T> searchPlainText(String p_235160_)`
- `protected List<T> searchResourceLocation(String p_235162_,  String p_235163_)`

### Inherited methods
- from `net.minecraft.client.searchtree.IdSearchTree`: `search`

## IdSearchTree

*class* `net.minecraft.client.searchtree.IdSearchTree`

### Fields
- `protected final Comparator<T> additionOrder`
- `protected final ResourceLocationSearchTree<T> resourceLocationSearchTree`

### Methods
- `public List<T> search(String p_235173_)`
- `protected List<T> searchPlainText(String p_235169_)`
- `protected List<T> searchResourceLocation(String p_235170_,  String p_235171_)`

### Inherited methods
- from `net.minecraft.client.searchtree.RefreshableSearchTree`: `refresh`

## IntersectionIterator

*class* `net.minecraft.client.searchtree.IntersectionIterator`

### Fields
- `private final com.google.common.collect.PeekingIterator<T> firstIterator`
- `private final com.google.common.collect.PeekingIterator<T> secondIterator`
- `private final Comparator<T> comparator`

### Methods
- `protected T computeNext()`

### Inherited methods
- from `com.google.common.collect.AbstractIterator`: `endOfData`, `hasNext`, `next`, `peek`
- from `com.google.common.collect.UnmodifiableIterator`: `remove`
- from `java.util.Iterator`: `forEachRemaining`

## MergingUniqueIterator

*class* `net.minecraft.client.searchtree.MergingUniqueIterator`

### Fields
- `private final com.google.common.collect.PeekingIterator<T> firstIterator`
- `private final com.google.common.collect.PeekingIterator<T> secondIterator`
- `private final Comparator<T> comparator`

### Methods
- `protected T computeNext()`

### Inherited methods
- from `com.google.common.collect.AbstractIterator`: `endOfData`, `hasNext`, `next`, `peek`
- from `com.google.common.collect.UnmodifiableIterator`: `remove`
- from `java.util.Iterator`: `forEachRemaining`

## PlainTextSearchTree

*interface* `net.minecraft.client.searchtree.PlainTextSearchTree`

### Methods
- `static <T> PlainTextSearchTree<T> empty()`
- `static <T> PlainTextSearchTree<T> create(List<T> p_235198_,  Function<T,Stream<String>> p_235199_)`
- `List<T> search(String p_235201_)`

## RefreshableSearchTree

*interface* `net.minecraft.client.searchtree.RefreshableSearchTree`

All Superinterfaces: SearchTree<T>

### Methods
- `static <T> RefreshableSearchTree<T> empty()`
- `default void refresh()`

### Inherited methods
- from `net.minecraft.client.searchtree.SearchTree`: `search`

## ResourceLocationSearchTree

*interface* `net.minecraft.client.searchtree.ResourceLocationSearchTree`

### Methods
- `static <T> ResourceLocationSearchTree<T> empty()`
- `static <T> ResourceLocationSearchTree<T> create(List<T> p_235213_,  Function<T,Stream<ResourceLocation>> p_235214_)`
- `List<T> searchNamespace(String p_235211_)`
- `List<T> searchPath(String p_235215_)`

## SearchRegistry

*class* `net.minecraft.client.searchtree.SearchRegistry`

### Fields
- `public static final SearchRegistry.Key<ItemStack> CREATIVE_NAMES`
- `public static final SearchRegistry.Key<ItemStack> CREATIVE_TAGS`
- `public static final SearchRegistry.Key<RecipeCollection> RECIPE_COLLECTIONS`
- `private final Map<SearchRegistry.Key<?>,SearchRegistry.TreeEntry<?>> searchTrees`

### Methods
- `public void onResourceManagerReload(ResourceManager p_119948_)`
- `public <T> void register(SearchRegistry.Key<T> p_235233_,  SearchRegistry.TreeBuilderSupplier<T> p_235234_)`
- `private <T> SearchRegistry.TreeEntry<T> getSupplier(SearchRegistry.Key<T> p_235239_)`
- `public <T> void populate(SearchRegistry.Key<T> p_235236_,  List<T> p_235237_)`
- `public <T> SearchTree<T> getTree(SearchRegistry.Key<T> p_235231_)`

### Inherited methods
- from `net.minecraft.server.packs.resources.PreparableReloadListener`: `getName`
- from `net.minecraft.server.packs.resources.ResourceManagerReloadListener`: `reload`

## SearchRegistry.Key

*class* `net.minecraft.client.searchtree.SearchRegistry.Key`

Enclosing class: SearchRegistry

## SearchRegistry.TreeBuilderSupplier

*interface* `net.minecraft.client.searchtree.SearchRegistry.TreeBuilderSupplier`

All Superinterfaces: Function<List<T>, RefreshableSearchTree<T>>

Enclosing class: SearchRegistry

### Inherited methods
- from `java.util.function.Function`: `andThen`, `apply`, `compose`

## SearchRegistry.TreeEntry

*class* `net.minecraft.client.searchtree.SearchRegistry.TreeEntry`

Enclosing class: SearchRegistry

### Fields
- `private final SearchRegistry.TreeBuilderSupplier<T> factory`
- `RefreshableSearchTree<T> tree`

### Methods
- `void populate(List<T> p_235246_)`
- `void refresh()`

## SearchTree

*interface* `net.minecraft.client.searchtree.SearchTree`

### Methods
- `List<T> search(String p_119955_)`

## SuffixArray

*class* `net.minecraft.client.searchtree.SuffixArray`

### Fields
- `private static final boolean DEBUG_COMPARISONS`
- `private static final boolean DEBUG_ARRAY`
- `private static final org.slf4j.Logger LOGGER`
- `private static final int END_OF_TEXT_MARKER` (= -1)
- `private static final int END_OF_DATA` (= -2)
- `protected final List<T> list`
- `private final it.unimi.dsi.fastutil.ints.IntList chars`
- `private final it.unimi.dsi.fastutil.ints.IntList wordStarts`
- `private it.unimi.dsi.fastutil.ints.IntList suffixToT`
- `private it.unimi.dsi.fastutil.ints.IntList offsets`
- `private int maxStringLength`

### Methods
- `public void add(T p_119971_,  String p_119972_)`
- `public void generate()`
- `private void print()`
- `private String getString(int p_119969_)`
- `private int compare(String p_119976_,  int p_119977_)`
- `public List<T> search(String p_119974_)`
