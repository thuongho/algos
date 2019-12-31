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
  return combo[step];
}
