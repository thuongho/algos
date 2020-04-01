// [2,1,1,2]
var rob = function(nums) {
  let dp = [];
  return findHouse(nums, dp, 0);
}

function findHouse(nums, dp, index) {
  if (index >= nums.length) return 0;

  if (dp[index] === undefined) {
    const skipHouse = findHouse(nums, dp, index + 1);
    console.log('skipHouse', skipHouse);
    const robHouse = nums[index] + findHouse(nums, dp, index + 2);
    console.log('robHouse', robHouse);
    dp[index] = Math.max(skipHouse, robHouse);
    console.log('dp', dp);
  }

  return dp[index];
}
           
// nums: [2,1,1,2,1,2,1]
// dp: []
// i: 0

// previous: 4
// beforePrev: 4
// tmp: 4
var rob = function(nums) {
  let previous = 0;
  let beforePrev = 0;

  for (let i = 0; i < nums.length; i++) {
    let tmp = previous;
    previous = Math.max(nums[i] + beforePrev, previous);
    beforePrev = tmp;
  }
  return previous;
}