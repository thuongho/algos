/**
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
 

Constraints:

2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// i: number arr o: boolean
var checkIfExist = function (arr) {
  // Check inputs
  if (!arr || !arr.length) return;
  const set = new Set();
  for (let num of arr) {
    const double = 2 * num;
    const half = num / 2;
    if (set.has(double)) return true;
    if (set.has(half)) return true;
    set.add(num);
  }
  return false;
};
// O(n) O(n)

// var checkIfExist = function (arr) {
//   // Check inputs
//   if (!arr || !arr.length) return;
//   const map = new Map();
//   let pos = 0;
//   const length = arr.length;
//   while(pos < length) {
//     const num = arr[pos];
//     const double = 2 * num;
//     const half = num / 2;
//     if (map.has(double)) {
//       const checkPos = map.get(double);
//       if (checkPos !== pos) return true;
//     } else if (map.has(half)) {
//       const checkPos = map.get(half);
//       if (checkPos !== pos) return true;
//     } else {
//       map.set(num, pos);
//     }
//     pos++;
//   }
//   return false;
// };
// O(n) O(n)
