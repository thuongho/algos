/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return climbStairsCombo(n);
};

function climbStairsCombo(n, step=0, combo=[]) {
//     break case
  if (step > n) {
      return 0;
  }
  
  if (step === n) {
      return 1;
  }
  
  combo[step] = climbStairsCombo(n, step + 1, combo) + climbStairsCombo(n, step + 2, combo);
  console.log('combo', combo);
  return combo[step];
}

function climbStairsMemo() {
  const memo = {};
  return function traverse(n, step=0) {
    if (memo[n, step]) {
      return memo[n, step];
    }

    if (step > n) {
      return 0;
    }

    if (step === n) {
      return 1;
    }

    return traverse(n, step + 1) + traverse(n, step + 2);
  }
}
