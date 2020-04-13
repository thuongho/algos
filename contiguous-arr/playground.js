/**
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50,000. 
**/
/**
 * @param {number[]} nums
 * @return {number}
 */
// i: arr binary o: number
/**
   l r
[1,0,1,1,0,1,0,1,0,1]
[0,1,1,0,1,1,1,0] 4
[0,1,1,1,0,1,1,0] 4
[0,0,0,1,1,1,0,0] 6
**/
var findMaxLength = function(nums) {
  // check input
  // 2 or more
  if (!nums || nums.length < 2) return 0;
  // max
  let max = 0;
  // map
  const map = {};
  // bal
  let bal = 0;
  // loop
  nums.forEach((num, index) => {
    // curr is 0
    if (num === 0) {
      // decrease bal
      bal--;
    } else {
    // curr is 1
      // increment bal
      bal++;
    }
    
    // bal is 0
    // max is current index plus 1
    if (bal === 0) max = index + 1;

    // map doesn't have bal
    if (map[bal] === undefined) {
      // save bal with index
      map[bal] = index;
    } else {
    // map has bal
      // max of max and from map index to curr index
      max = Math.max(max, index - map[bal]);
    }
  });
  // return max
  return max;
};
