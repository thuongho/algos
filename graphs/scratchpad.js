class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].filter(vertex => vertex !== v2)
    this.adjacencyList[v2].filter(vertex => vertex !== v1);
  }

  // all the neighbors that are connected
  dfsRecursive(node) {
    const result = [];
    const seen = {};
    const dfs = (node) => {
      seen[node] = true;
      result.push(node);
      const neighbors = this.adjacencyList[node];
      for (let neighbor of neighbors) {
        if (!seen[neighbor]) {
          dfs(neighbor);
        }
      }
    };
    return result;
  }
}