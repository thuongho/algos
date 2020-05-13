/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// i: arr o: number
var findMaxConsecutiveOnes = function (nums) {
  if (!nums) return;
  let maxOnes = 0;
  let consecCount = 0;
  for (let num of nums) {
    if (num === 1) {
      consecCount++;
      maxOnes = Math.max(maxOnes, consecCount);
    } else {
      consecCount = 0;
    }
  }
  return maxOnes;
};
// O(n) O(1)
