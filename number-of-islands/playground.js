/**
 * 2D map
 * 1 island 0 water
 * at least one 0 on each edge
 * island connected horizontal and vertal no diagnal
 * all edges are 0s
 * 
 *

11000 [0,0]:[[0,1],[1,0]],
11000 [0,1]:[[0,0],[1,1]],
00100 [1,0]:[[0,0],[1,1]],
00011 [1,1]:[[0,1],[1,0]],
      [2,2]:[],
      [3,3]:[3,4],
      [3,4]:[3,3]
 **/

//  i: 2d grid [[]] o: number
var numIslands = function(grid) {
  // count
  let count = 0;
  // build adjecencyList
  const adjacencyList = buildAdjacencyList(grid);
  
  const visited = {};

  // get keys of adjacent list
  // dfs
  function dfsR(cell) {
    if (visited[cell]) return 0;
    // add to visited
    visited[cell] = true;
    // get neighbors
    const neighbors = adjacencyList[cell];
    // loop neighbors
    for (let neighbor of neighbors) {
      // if not visit
      if (!visited[neighbor]) {
        // run dfsR on neighbor
        dfsR(neighbor);
      }
    }
    // add count
    return 1;
  }
  for (let land of islands) {
    count += dfsR(land);
  }
  // return count
  return count;
};
// t O(r*c) O(n)

function buildAdjacencyList(grid) {
  const islands = [];
  const adjacencyList = {};
  // loop rows grid.length
  for (let r = 0; r < grid.length; r++) {
    // inner loop cols grid[0].length
    for (let c = 0; c < grid[0].length; c++) {
      // if cell is 1 add to adjacentList
      const cell = grid[r][c];
      if (cell === '1') {
        adjacencyList[[r,c]] = [];
        islands.push([r,c]);
        // check up down left right if they are 1 push position to adajcentList
        // add neighbors
        // up
        if (grid[r - 1] && grid[r - 1][c] === '1') adjacencyList[[r,c]].push([r - 1, c]);
        // down
        if (grid[r + 1] && grid[r + 1][c] === '1') adjacencyList[[r,c]].push([r + 1, c]);
        // left
        if (c - 1 >= 0 && grid[r][c - 1] === '1') adjacencyList[[r,c]].push([r, c - 1]);
        // right
        if (c + 1 < grid[0].length && grid[r][c + 1] === '1') adjacencyList[[r,c]].push([r, c + 1]);
      }
    }
  }
  return adjacencyList;
}
// O(r*c)