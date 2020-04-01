/**
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
**/
// start:
// end:
// max: 1
// currTotal: 4
function maxSubArray(arr) {
  // check input
  if (!arr || arr.length < 1) return;
  // let start = 0;
  // let end = 0;
  let max = arr[0];
  let currTotal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    // if currentTotal less than 0 it resets on the next number
    currTotal = currTotal < 0 ? num : currTotal + num;
    max = Math.max(max, currTotal);
  }

  return max;
}
// O(n) O(1)