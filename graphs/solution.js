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

  // input string value
  // output is nothing
  // is it always going to be 2 params
  // params are string
  addEdge(node1, node2) { 
    //undirected Graph
    // check params
    if (!node1 && !node2) {
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