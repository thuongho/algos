class Graph { 
  constructor() { 
    this.numberOfNodes = 0;
    this.adjacentList = {
    }; 
  } 

  // input is a string value
  // output is nothing
  addVertex(node) {
    // check input
    if (!node) {
      return;
    }
    // check if node doesn't exists in adjacentList and add empty array
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      // increment number of nodes
      this.numberOfNodes++;
    }
  } // O(n) Space O(1) time

  // i: str o: nothing
  removeVertex(node) {
    // get a list of edges of the node
    if (!node || !this.adjacentList[node]) return;
    // loop through and remove all the edges tied to vertex
    const connections = this.adjacentList[node];
    for (let vertex in connections) {
      this.removeEdge(node, vertex);
    }
    // remove vertex
    delete this.adjacentList[node];
  }

  // input string value
  // output is nothing
  // is it always going to be 2 params
  // params are string
  addEdge(node1, node2) { 
    //undirected Graph
    // check params
    if (!node1 || !node2) {
      return;
    }
    // if both of the nodes exists in adjacentList
    if (this.adjacentList[node1] && this.adjacentList[node2]) {
      // push node1 into node2
      this.adjacentList[node2].push(node1);
      // push node2 into node1
      this.adjacentList[node1].push(node2);
    }
  } // O(n) space  O(1) time

  // i: str o: nothing
  removeEdge(node1, node2) {
    if (!node || !node) {
      return;
    }

    if (this.adjacentList[node1]) {
      this.adjacentList[node1].filter(edge => edge !== node2);
    }
    if (this.adjacentList[node2]) {
      this.adjacentList[node2].filter(edge => edge !== node1);
    }
  } // O(n) space O(n) time

  showConnections() { 
    const allNodes = Object.keys(this.adjacentList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacentList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
  }

  // TRAVERSALS
  // {
  //   A: ['B', 'C'],
  //   B: ['A', 'D'],
  //   C: ['A', 'E'],
  //   D: ['B', 'E', 'F'],
  //   E: ['C', 'D', 'F'],
  //   F: ['D', 'E']
  // }
  // A ['A', 'B', 'D', 'E', 'C', 'F']
  /*** 
   * S [D]
   * visited {
   *  A: true,
   * B: true
   * }
   * neighbors [A, D]
  *****/
  // i: starting node, o: arr
  dfsRecursion(node) {
    // list to store end results
    const results = [];
    const visited = {};
    const adjacentList = this.adjacentList;
    // helper method
    const dfs = (vertex) => {
      if (!vertex) return;
      // base case vertex is empty
      // add vertex to results list
      results.push(vertex);
      // mark vertex as visited visited
      visited[vertex] = true;
      // loop through vertex's neighbor
      for (let neighbor of adjacentList[vertex]) {
        // recursively DFS on neighbor if not visited
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };

    dfs(node);
    // return end result
    return results;
  }

  dfsIterative(node) {
    const results = [];
    // stack to keep track
    if (node) {
      const stack = [];
      // visited
      const visited = {};
      // add start stack
      stack.push(node);
      // loop until stack is empty
      while (stack.length) {
        // pop stack add it to visited
        const vertex = stack.pop();
        if (!visited[vertex]) {
          results.push(vertex);
          // add to vertex to visited
          visited[vertex] = true;
          // get neighbors
          const neighbors = this.adjacentList[vertex];
          // find first neighbor that hasn't been visited
          // add neighbors to stack
          stack.push(...neighbors);
        }
      }
    }
    // return results
    return results;
  }

  // {
  //   A: ['B', 'C'],
  //   B: ['A', 'D'],
  //   C: ['A', 'E'],
  //   D: ['B', 'E', 'F'],
  //   E: ['C', 'D', 'F'],
  //   F: ['D', 'E']
  // }
  // A ['A', 'B', 'D', 'E', 'C', 'F']
  // i: node/ str o: arr
  bfsIterative(node) {
    // results arr
    const results = [];
    // check input no params
    if (node) {
      // queue
      const queue = [];
      // visited
      const visited = {};
      // enqueue node
      queue.push(node);
      // while queue has items
      while (queue.length) {
        // dequeue to get vertex
        const vertex = queue.shift();
        // check if vertex isn't in visited
        if (!visited[vertex]) {
          visited[vertex] = true;
          // add to results
          results.push(vertex);
          // get neighbors
          const neighbors = this.adjacentList[vertex];
          // enqueue neighbors
          queue.push(...neighbors);
        }
      }
    }
    // return results
    return results;
  }

  depthFirstIterative(start) {
    // let S be a stack
    // S.push(start)
    // while S is not empty
    // vertex = S.pop()
    // if vertex is not labeled as discovered
    // visit vertex add to result list
    // label vertex as discovered
    // for each of vertex neighbors, N do S.push(N)
  } 

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacentList = this.adjacentList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacentList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5


// {
//   A: ['B', 'C'],
//   B: ['A', 'D'],
//   C: ['A', 'E'],
//   D: ['B', 'E', 'F'],
//   E: ['C', 'D', 'F'],
//   F: ['D', 'E']
// }
const travelGraph = new Graph();
travelGraph.addVertex('A');
travelGraph.addVertex('B');
travelGraph.addVertex('C');
travelGraph.addVertex('D');
travelGraph.addVertex('E');
travelGraph.addVertex('F');
travelGraph.addEdge('A', 'B');
travelGraph.addEdge('A', 'C');
travelGraph.addEdge('B', 'D');
travelGraph.addEdge('C', 'E');
travelGraph.addEdge('D', 'E');
travelGraph.addEdge('D', 'F');
travelGraph.addEdge('E', 'F');