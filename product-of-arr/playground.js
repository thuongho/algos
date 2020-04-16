/**
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
**/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
[1,2,3,4]
[1,1,2,6]
[,,,6]
**/
var productExceptSelf = function(nums) {
  const productArr = multiplyLeftToRight(nums);
  return multiplyRightToLeft(nums, productArr);
};

function multiplyLeftToRight(nums) {
  const result = [];
  let prod = 1;
  nums.forEach((num, i) => {
    result[i] = prod;
    prod *= num;
  });
  return result;
}

function multiplyRightToLeft(nums, leftToRightArr) {
  const result = [...leftToRightArr];
  const length = nums.length - 1;
  let prod = 1;
  for (let i = length; i >= 0; i--) {
    result[i] *= prod;
    prod *= nums[i];
  }
  return result;
}


// out of memory
// var productExceptSelf = function(nums) {
//   const result = [];
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     // clone arr
//     const numsClone = [...nums];
//     // splice
//     numsClone.splice(i, 1);
//     // reduce
//     // const prod = numsClone.reduce((a,b) => a*b);
//     map[i] = numsClone;
//   }
//   for (let i in map) {
//     result[i] = map[i].reduce((a,b) => a*b);
//   }
//   return result;
// };

// too slow
// var productExceptSelf = function(nums) {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     // clone arr
//     const numsClone = [...nums];
//     // splice
//     numsClone.splice(i, 1);
//     // reduce
//     const prod = numsClone.reduce((a,b) => a*b);
//     // push to result
//     result.push(prod);
//   }
//   return result;
// };
