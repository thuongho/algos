/**
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
**/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// i: nest number arr o: number
/**
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
] 
**/
var minPathSum = function(grid) {
  // starting from bottom right
  if (grid.length <= 0) return;
  const rows = grid.length;
  const cols = grid[0].length;
  // DP
  const gridSums = Array.from(Array(rows), () => []);
  return helper(grid, rows - 1, cols - 1, gridSums);
};

function helper(grid, row, col, sumsArr) {
  // outside boundaries
  if (row < 0 || col < 0) return Infinity;
  if (sumsArr[row][col]) return sumsArr[row][col];
  const currNum = grid[row][col];
  // origin
  if (row === 0 && col === 0) return currNum;
  // get min from top or left
  const top = helper(grid, row - 1, col, sumsArr);
  const left = helper(grid, row, col - 1, sumsArr);
  const sum = currNum + Math.min(top, left);
  sumsArr[row][col] = sum;
  return sum;
}



// var minPathSum = function(grid) {
//   // check input
//   if (!grid) return;
//   traverse();

//   function traverse(r=0, c=0) {
//     // break case bottom right
//     const currNum = grid[r,c];
//     // right
//     const right = grid[r, c + 1] !== undefined ? currNum + traverse(r, c++) : 0;
//     // down
//     const down = grid[r+1, c] !== undefined ? currNum + traverse(r++, c) : 0;
//     // sum
//     return currNum + Math.min(right, down);
//   }
// };
// 