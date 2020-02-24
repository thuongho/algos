/**
 * @param {number} n
 * @return {number}
 */

// input int output int
// 2 possible climb 1 step and 2 step
// i: 3
// 1 1 1 or 1 + 2 or 2 + 1
// o: 3
// i: 4
// 1 1 1 1 or 1 1 2 or 1 2 1 or 2 1 1 or 2 2
var climbStairs = function(n) {
  console.time('climb-stairs');
  //     check input
      if (!n) {
          return;
      }
  //     if input is 2 or less return n
      const calcCombo = climbStairsMemo();
      const combo = calcCombo(n);
      console.timeEnd('climb-stairs');
      return combo;
  };
  
  // helper recursion function with memoization
  function climbStairsMemo() {
  //     cache
      const cache = {};
  // return function that takes in target step, current step
      return function traverse(n, step = 0) {
  //     return cached step if found
          if (cache[n, step]) {
              return cache[n, step];
          }
  //     break case
          if (step > n) {
              return 0;
          }
          
          if (step === n) {
              return 1;
          }
  //     split between 1 and 2 steps
          return traverse(n, step + 1) + traverse(n, step + 2);
      }
  }