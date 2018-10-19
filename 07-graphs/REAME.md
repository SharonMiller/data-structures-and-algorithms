###Graph Constructor
Graph Constructor with the following methods:

- `Breadth First Traversal` traverses the graph
- `Depth First Traversal` traverses takes in the vertex of the starting node and runs a preorder, depth first searching returning an array of each of the nodes in the graph. 

###Weighted Graph Constructor

- `getEdge(src, dest)` accepts a source vertex and destination vertex and returns the weight of the edge between them if it exists, otherwise returns undefined
- `getEdges(vertices)` accepts an array of vertices and resolves down to an array `[hasPath, cost]` where `hasPath` is a boolean value representing whether a path exists along the given vertices and `cost` is the total cost of the weights along that path.