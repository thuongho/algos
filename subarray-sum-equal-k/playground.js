/**
Given an array of integers and an integer k, you need to find the sum number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// map {0:1, 1: 1, 3:2}
// [1,2,3], 3
// i: int arr, int o: int
var subarraySum = function(nums, k) {
  // check inputs
  if (!nums || k === undefined) return;
  const mapOfSumCount = new Map();
  let result = 0;
  let sum = 0;
  // incase u hit a value equal to k, then u have 1
  mapOfSumCount.set(sum, 1);

  for (let num of nums) {
    sum += num;

    // sum is less than k
    const sumMinusK = sum - k
    if (mapOfSumCount.has(sumMinusK)) {
      // subtrack start
      result += mapOfSumCount.get(sumMinusK);
    }
    const sumCount = mapOfSumCount.has(sum) ? mapOfSumCount.get(sum) + 1 : 1;
    mapOfSumCount.set(sum, sumCount);
  }
  return result;
};
