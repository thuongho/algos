/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// is the array sorted
// array only int
// are there negative
// input array, int 
// output array of indices
var twoSum = function(nums, target) {
  //     cache everything to the left of i
      const cache = {};
  //     loop through nums array
      for (let i = 0; i < nums.length; i++) {
  //         compliment
          const comp = target - nums[i];
  //     check cache for sum equals target
  //     if no match, save the num and index in cache
          if (cache[comp] === undefined) {
              cache[nums[i]] = i;
          } else {
  //     if sum equals target, return current index and cache index
              return [cache[comp], i];
          }
      }
  //     return null if no sum
      return [];
  };
  // O(n)