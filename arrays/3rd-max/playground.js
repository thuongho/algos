/**
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// i: number arr o: number
// [2, 2, 3, 1]
//  s     m  c
var thirdMax = function (nums) {
  // Check inputs
  if (!nums) return;
  let max = nums[0];
  let second;
  let third;
  // loop through arr and keep track of max, 2nd, 3rd
  for (let num of nums) {
    // if curr is greater than max, update 3rd to be 2nd, update 2nd to be old max, and update max
    if (num > max) {
      third = second;
      second = max;
      max = num;
    } else if (num > second || second === undefined) {
      if (num === max) continue;
      third = second;
      second = num;
    } else if (num > third || third === undefined) {
      if (num === second) continue;
      third = num;
    }
  }
  return third !== undefined ? third : max;
};
// O(n) O(1)
