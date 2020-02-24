class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  // Sort is O(N logN)
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacentList[vertex1] && !this.adjacentList[vertex2]) return;
    this.adjacentList[vertex1].push({ node: vertex2, weight });
    this.adjacentList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    const shortestDist = {};
    const previous = {};
    const visited = {};

    // build out shortestDist with start 0 and everthing else Infinity
    // create priority queue
    // add start to visited
    // get node neighbors
    // loop neighbors
      // if neighbor has not been visited
      // current weight
      // use previous to get path to neighbor (recursion or while loop)
      // calc distance
      // get shortestDist
      // if distance is shorter than shortestDist
        // update shortestDist
        // update previous
        // add neighbor to priority queue

  }
}

/**
 * {
"A": [{"node":"B","weight":4},{"node":"C","weight":2}],
"B": [{"node":"A","weight":4},{"node":"E","weight":3}],
"C": [{"node":"A","weight":2},{"node":"D","weight":2},{"node":"F","weight":4}],
"D": [{"node":"C","weight":2},{"node":"E","weight":3},{"node":"F","weight":1}],
"E": [{"node":"B","weight":3},{"node":"D","weight":3},{"node":"F","weight":1}],
"F": [{"node":"C","weight":4},{"node":"D","weight":1},{"node":"E","weight":1}]
}
**/

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
