/**
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]
 

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9
*/
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// i: number[] o: null
//      s
// [0,1,1,7,6,0,0,2]
//    e
var duplicateZeros = function (arr) {
  if (!arr || !arr.length) return;

  const cutOffNum = findNumberOfCutoff(arr);
  // SECOND PASS
  let start = arr.length - 1;
  let end = arr.length - cutOffNum;
  while (end > 0) {
    const num = arr[end];
    if (num === 0) {
      arr[start] = 0;
      start--;
    }
    arr[start] = num;
    end--;
    start--;
  }
};

const findNumberOfCutoff = (arr) => {
  let start = 0;
  let end = arr.length;
  // FIRST PASS
  while (start < end) {
    const num = arr[start];
    if (num === 0) {
      // EDGE CASE LAST NUMBER IS 0
      if (start + 1 === end) break;
      end--;
    }
    start++;
  }
  return arr.length - 1 - end--;
};

// i: number[] o: null
// var duplicateZeros = function (arr) {
//   // Check inputs
//   if (!arr || !arr.length) return;
//   let currIndex = 0;
//   const arrLen = arr.length;
//   while (currIndex < arrLen) {
//     const currentNum = arr[currIndex];
//     if (currentNum === 0) {
//       arr.pop();
//       arr.splice(currIndex, 0, 0);
//       currIndex++;
//     }
//     currIndex++;
//   }
// };
// O(n^2) O(1)
