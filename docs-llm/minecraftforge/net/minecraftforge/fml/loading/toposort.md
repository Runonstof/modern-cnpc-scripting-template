# net.minecraftforge.fml.loading.toposort

- [CyclePresentException](#cyclepresentexception)
- [StronglyConnectedComponentDetector](#stronglyconnectedcomponentdetector)
- [TopologicalSort](#topologicalsort)
## CyclePresentException

*class* `net.minecraftforge.fml.loading.toposort.CyclePresentException`

An exception thrown for graphs with cycles as an argument for topological sort.

### Fields
- `private static final long serialVersionUID` (= -2609660010927054667L)
- `private final Set<Set<?>> cycles`

### Methods
- `public <T> Set<Set<T>> getCycles()`
  Accesses the cycles present in the sorted graph.
  
   Each element in the outer set represents a cycle; each cycle, or the inner set,
   forms a strongly connected component with two or more elements.
  - returns: the cycles identified

### Inherited methods
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `printStackTrace`, `printStackTrace`, `setStackTrace`, `toString`

## StronglyConnectedComponentDetector

*class* `net.minecraftforge.fml.loading.toposort.StronglyConnectedComponentDetector`

An object that splits a graph into strongly connected components lazily with
 Tarjan's Strongly Connected Components Algorithm.

 This algorithm allows to detect all cycles in dependencies that prevent topological
 sorting.

 This detector evaluates the graph lazily and won't reflect the modifications in the
 graph after initial evaluation.

### Fields
- `private final com.google.common.graph.Graph<T> graph`
- `private Map<T,Integer> ids`
- `private T[] elements`
- `private int[] dfn`
- `private int[] low`
- `private int[] stack`
- `private int top`
- `private BitSet onStack`
- `private Set<Set<T>> components`

### Methods
- `public Set<Set<T>> getComponents()`
- `private void calculate()`
- `private void dfs(int now,  int depth)`

## TopologicalSort

*class* `net.minecraftforge.fml.loading.toposort.TopologicalSort`

Provides a topological sort algorithm.

 While this algorithm is used for mod loading in forge, it can be
 utilized in other fashions, e.g. topology-based registry loading, prioritization
 for renderers, and even mod module loading.

### Methods
- `public static <T> List<T> topologicalSort(com.google.common.graph.Graph<T> graph,  @Nullable  @Nullable Comparator<? super T> comparator)  throws IllegalArgumentException`
  A breath-first-search based topological sort.
  
   Compared to the depth-first-search version, it does not reverse the graph
   and supports custom secondary ordering specified by a comparator. It also utilizes the
   recently introduced Guava Graph API, which is more straightforward than the old directed
   graph.
  
   The graph to sort must be directed, must not allow self loops, and must not contain
   cycles. IllegalArgumentException will be thrown otherwise.
  
   When null is used for the comparator and multiple nodes have no
   prerequisites, the order depends on the iteration order of the set returned by the
   Graph.successors(Object) call, which is random by default.
  
   Given the number of edges E and the number of vertexes V,
   the time complexity of a sort without a secondary comparator is O(E + V).
   With a secondary comparator of time complexity O(T), the overall time
   complexity would be O(E + TV log(V)). As a result, the comparator should
   be as efficient as possible.
  
   Examples of topological sort usage can be found in Forge test code.
  - param: graph - the graph to sort
  - param: comparator - the secondary comparator, may be null
  - returns: the ordered nodes from the graph
  - throws: IllegalArgumentException - if the graph is undirected or allows self loops
  - throws: CyclePresentException - if the graph contains cycles
- `private static <T> void throwCyclePresentException(Set<Set<T>> components)`
