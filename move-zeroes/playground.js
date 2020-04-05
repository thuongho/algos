/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 * **/

 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  i number[]  o: number[]
/** 
         l
 [1,3,12,0,0]
             r
**/ 
var moveZeroes = function(nums) {
  // check inputs
  if (!nums) return;
  if (nums.length < 2) return nums;
  // swap function
  const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  // left
  let left = 0;
  // right
  let right = 1;
  const length = nums.length;
  while (right < length) {
    const leftNum = nums[left];
    const rightNum = nums[right];
    // left is zero
    if (leftNum === 0) {
      // right not zero
      if (rightNum !== 0) {
        // swap
        swap(nums, left, right);
        // increment left
        left++;
      }

    // left not zero
    } else {
      // increment left
      left++;
    }
    // increment right
    right++;
  }
  return nums;
};
// O(n) O(1)
