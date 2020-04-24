/**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0

Input [0, 2147483647]
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/** 
5, 7
5 00000101
6 00000110  00000100
7 00000111  00000111
AND         00000100 // 4
8 00001000  00001000
AND         00000000 // 0
*/
var rangeBitwiseAnd = function(m, n) {
  let finalShift = 0;
  let binaryM = m;
  let binaryN = n;
  while (binaryM !== binaryN) {
    binaryM >>= 1;
    binaryN >>= 1;
    finalShift++;
  }
  return binaryM << finalShift;
}
// var rangeBitwiseAnd = function(m, n) {
//   // check inputs
//   if (m === undefined || n === undefined) return;
//   // if (m === n) return 0;
//   // from m to n
//   let combinedBinary = convertDecimalToBinary(m, n);
//   if (m < n) {
//     for (let i = m + 1; i <= n; i++) {
//       // get binary i
//       const binaryToCompare = convertDecimalToBinary(i, n);
//       // update result with AND
//       combinedBinary = binaryAND(combinedBinary, binaryToCompare);
//     }
//   }
//   // result
//   return convertBinaryToDecimal(combinedBinary);
// };

// function convertDecimalToBinary(num, maxNum) {
//   //   7  6  5  4 3 2 1 0
//   // 128 64 32 16 8 4 2 1
//   const size = Math.floor(Math.log2(maxNum));
//   const binaryArr = new Array(size).fill(0);
//   // greater equal to is 1
//   let remainder = num;
//   while (remainder > 0) {
//     let index = Math.floor(Math.log2(remainder));
//     binaryArr[index] = 1;
//     remainder -= Math.pow(2, index);
//   }
//   // return binary array
//   return binaryArr;
// }

// function convertBinaryToDecimal(binArr) {
//   // sum
//   let sum = 0;
//   // loop
//   binArr.forEach((item, i) => {
//     // if number is 1 then power of index
//     if (item === 1) sum += Math.pow(2, i);
//   });
//   // return sum
//   return sum;
// }

// function binaryAND(arr1, arr2) {
//   const size = arr1.length;
//   const final = new Array(size).fill(0);
//   // loop
//   for (let i = 0; i < size; i++) {
//     // if both are 1 then 1
//     if (arr1[i] === 1 && arr2[i] === 1) final[i] = 1;
//   }
//   // return binary AND arr
//   return final;
// }