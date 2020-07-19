/**
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 

Constraints:

-10^9 <= nums1[i], nums2[i] <= 10^9
nums1.length == m + n
nums2.length == n
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// i: arr, number, arr, number o: null
var merge = function (nums1, m, nums2, n) {
  // Check inputs
  if (!nums1 || !nums2 || m === undefined || n === undefined || !nums2.length)
    return;
  const len = nums1.length - 1;
  m--;
  n--;
  for (let i = len; i >= 0; i--) {
    const num1 = nums1[m];
    const num2 = nums2[n];
    if (m >= 0 && num1 > num2) {
      nums1[i] = num1;
      m--;
    } else {
      nums1[i] = num2;
      n--;
      if (n < 0) return;
    }
  }
};
// O(n) O(1)
