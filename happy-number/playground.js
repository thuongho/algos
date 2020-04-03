/**
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers. 

Example:
Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
**/

/**
 * @param {number} n
 * @return {boolean}
 */
// i: number o: boolean
var isHappy = function(n) {
  // check inputs
  // seen
  const seen = new Set();
  let num = n;
  // while sum is not 1
  while (num !== 1) {
    if (seen.has(num)) return false;
    // sum
    let sum = 0;
    // convert n to str
    const numStr = num.toString();
    // loop
    for (let char of numStr) {
      // sum by adding power 2
      sum += Math.pow(Number(char), 2);
    }
    // add to seen
    seen.add(num);
    num = sum;
  }
  return true;
};

// var isHappy = function(n) {
//   // check inputs
//   if (!n || n < 1) return false;
//   // happy numbers
//   const happyNumbers = { '0': true, '1': true };
//   // seen
//   const seen = {};
//   // set num to n
//   let num = n;
//   // sum
//   let sum = 0;
//   // while num > 1
//   while (num) {
//     if (seen[num]) return false;
//     // convert num to string
//     let numStr = num.toString();
//     // set happy if first char is 1
//     let isHappyNum = numStr[0] === '1' ? true : false;
//     // loop
//     for (let char of numStr) {
//       // check if not 1 or 0 happy set to false
//       if (isHappyNum && !happyNumbers[char]) isHappyNum = false;
//       // square and add to sum 
//       sum += Math.pow(parseInt(char, 10), 2);
//     }
//     // return if happy
//     if (isHappyNum) return true;
//     // update seen
//     seen[num] = false;
//     // set num to sum
//     num = sum;
//     sum = 0;
//   }
//   return true;
// };

// var isHappy = function(n) {

//   const seen = {};
//   // happyNumbers
//   const happyNumbers = { '0': true, '1': true };

//   if (seen[n]) return false;
//   // check inputs
//   if (!n || n < 1) return false;
//   // convert to string
//   const numStr = n.toString();
//   // set happy if first char is 1
//   let isHappyNum = numStr[0] === '1' ? true : false;
//   // loop
//   while (numStr) {
//     // sum
//     let sum = 0;
//     // check if not 1 or 0 happy set to false
//     if (isHappyNum && !happyNumbers[char]) isHappyNum = false;
//     // square and add to sum
//     sum += Math.pow(parseInt(char, 10), 2);
//   }
//   seen[n] = isHappyNum;
//   // return happy if true
//   if (isHappyNum) return true;

// };
// // O(n) O(1)

// function memo(fn) {
//   const cache = {};
//   return function(...args) {
//     if (cache[args]) return false;

//     const result = fn.apply(this, args);
//     return result;
//   }
// }
