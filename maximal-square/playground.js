/**
Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example:

Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4
*/
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let areaMax = 0;
  if (!matrix || matrix.length < 1) return areaMax;
  const rowMax = matrix.length;
  const colMax = matrix[0].length;
  for (let row = 0; row < rowMax; row++) {
    for (let col = 0; col < colMax; col++) {
      const cell = matrix[row][col];
      if (cell === '1') {
        const cellArea = getSquareArea(row, col, matrix);
        areaMax = Math.max(areaMax, cellArea);
      }
    }
  }
  return areaMax;
};

function getSquareArea(r, c, matrix) {
  // let row = r;
  let area = 1;
  let col = c;
  let colMax = getMaxColCount(r, col, matrix);

  let row = r + 1;
  while (row < r + colMax) {
    col = c;
    const currentRowColMax = getMaxColCount(row, col, matrix);
    // current row col less col max
    if (currentRowColMax < colMax) {
      // colMax = Math.min(currentRowColMax, colMax);
      colMax = currentRowColMax;
    }
    const width = Math.min(row - r + 1, colMax);
    area = width * width;
    row++;
  }
  return area;
}

function getMaxColCount(row, col, matrix) {
  let colMax = 0;
  if (matrix[row]) {
    const colEnd = matrix[row].length;
    let currentCell = matrix[row][col];
    // gets col max of first row
    while (currentCell === '1' && col < colEnd) {
      colMax++;
      col++;
      currentCell = matrix[row][col];
    }
  }
  return colMax;
}
