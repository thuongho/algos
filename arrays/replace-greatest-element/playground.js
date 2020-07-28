/**
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 
Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5
*/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// i: arr numbers o: arr numbers
var replaceElements = function (arr) {
  if (!arr || !arr.length) return;
  // Check inputs
  let maxNum = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  // loop from the end, replace the end with -1 and keep a running max number.
  for (let i = arr.length - 2; i >= 0; i--) {
    const currNum = arr[i];
    arr[i] = maxNum;
    maxNum = Math.max(currNum, maxNum);
  }
  return arr;
};
// O(n) O(1)
