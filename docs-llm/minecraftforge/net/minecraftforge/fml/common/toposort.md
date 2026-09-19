# net.minecraftforge.fml.common.toposort

- [ModSorter](#modsorter)
- [ModSortingException](#modsortingexception)
- [ModSortingException.SortingExceptionData](#modsortingexception.sortingexceptiondata)
- [TopologicalSort](#topologicalsort)
- [TopologicalSort.DirectedGraph](#topologicalsort.directedgraph)
## ModSorter

*class* `net.minecraftforge.fml.common.toposort.ModSorter`

### Methods
- `public java.util.List<ModContainer> sort()`

## ModSortingException

*class* `net.minecraftforge.fml.common.toposort.ModSortingException`

All Implemented Interfaces: java.io.Serializable, IDisplayableError

### Methods
- `public <T> ModSortingException.SortingExceptionData<T> getExceptionData()`
- `protected void printStackTrace(EnhancedRuntimeException.WrappedPrintStream stream)`
- `public GuiScreen createGui()`

### Inherited methods
- from `net.minecraftforge.fml.common.EnhancedRuntimeException`: `getMessage`, `printStackTrace`, `printStackTrace`
- from `java.lang.Throwable`: `addSuppressed`, `fillInStackTrace`, `getCause`, `getLocalizedMessage`, `getStackTrace`, `getSuppressed`, `initCause`, `printStackTrace`, `setStackTrace`, `toString`

## ModSortingException.SortingExceptionData

*class* `net.minecraftforge.fml.common.toposort.ModSortingException.SortingExceptionData`

Enclosing class: ModSortingException

### Methods
- `public T getFirstBadNode()`
- `public java.util.Set<T> getVisitedNodes()`

## TopologicalSort

*class* `net.minecraftforge.fml.common.toposort.TopologicalSort`

Topological sort for mod loading

 Based on a variety of sources, including http://keithschwarz.com/interesting/code/?dir=topological-sort

### Methods
- `public static <T> java.util.List<T> topologicalSort(TopologicalSort.DirectedGraph<T> graph)`
  Sort the input graph into a topologically sorted list
  
   Uses the reverse depth first search as outlined in ...
  - param: graph -
  - returns: The sorted mods list.
- `public static <T> TopologicalSort.DirectedGraph<T> reverse(TopologicalSort.DirectedGraph<T> graph)`
- `public static <T> void explore(T node,  TopologicalSort.DirectedGraph<T> graph,  java.util.List<T> sortedResult,  java.util.Set<T> visitedNodes,  java.util.Set<T> expandedNodes)`

## TopologicalSort.DirectedGraph

*class* `net.minecraftforge.fml.common.toposort.TopologicalSort.DirectedGraph`

All Implemented Interfaces: java.lang.Iterable<T>

Enclosing class: TopologicalSort

### Methods
- `public boolean addNode(T node)`
- `public void addEdge(T from,  T to)`
- `public void removeEdge(T from,  T to)`
- `public boolean edgeExists(T from,  T to)`
- `public java.util.Set<T> edgesFrom(T from)`
- `public java.util.Iterator<T> iterator()`
- `public int size()`
- `public boolean isEmpty()`
- `public java.lang.String toString()`

### Inherited methods
- from `java.lang.Iterable`: `forEach`, `spliterator`
