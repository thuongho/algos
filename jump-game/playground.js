/**
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// i: arr int o: boolean
// [2,3,1,0,4]
// [2,3,1,1,4]
var canJump = function (nums) {
  // check inputs
  if (!nums || nums.length < 1) return;

  // last index is goal
  const goal = nums.length - 1;

  // game start
  let playerPosition = 0;
  let maxJumps = nums[playerPosition];

  // play until player reaches goal
  while (maxJumps < goal) {
    // no possible moves to reach goal - game over
    if (playerPosition === maxJumps) return false;

    // increment player position
    playerPosition++;

    // get furthest possible jump from player position
    maxJumps = Math.max(maxJumps, playerPosition + nums[playerPosition]);
  }

  // winner!
  return true;
};
// O(n) O(1)
