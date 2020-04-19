/**
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
**/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// i: arr numbers (kinda sorted) o: number index(found) -1 (doesn't exist)
//  s     m
// [4,5,6,7,0,1,2]
var search = function(nums, target) {
  // check input
  if (!nums || target === undefined) return;
  helper(0, nums.length - 1);
  
  function helper(start, end) {
    // break case start greater than end
    if (start > end) return -1;
    // midpoint
    const midpoint = Math.floor((end - start) / 2);
    // return target equal to midpoint
    const midNum = nums[midpoint];
    if (target === midNum) return midpoint;
    const startNum = nums[start];
    if (target === startNum) return start;
    // sorted start less than mid and target in btw
    // pivot greater than mid greater than start
    if ((startNum < target && target < midNum) ||
        ((midNum < nums[end]) && !(midNum < target && target <= nums[end]))) {
      // left
      return helper(start + 1, midpoint - 1);
    }
    // right
    return helper(midpoint + 1, end);
  }
};    
// O(logn) O(1)