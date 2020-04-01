/** Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4

[4,1,3,3,1,2,6,2,6]
**/

// var singleNumber = function(nums) {
//   if (!nums || !nums.length) return;
//   if (nums.length === 1) return nums[0];
//   const seen = {};
//   for (let num of nums) {
//       if (!seen[num]) {
//           seen[num] = true;
//       } else {
//           delete seen[num];
//       }
//   }
//   return Object.keys(seen)[0];
// };
// O(n) O(logN)

// var singleNumber = function(nums) {
//   if (!nums || !nums.length) return;
//   if (nums.length === 1) return nums[0];
//   const seen = new Set();
//   for (let num of nums) {
//       if (seen.has(num)) {
//           seen.delete(num);
//       } else {
//           seen.add(num);
//       }
//   }
//   return Array.from(seen).pop();
// };
// O(n) O(logN)