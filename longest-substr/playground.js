/**
 * @param {string} s
 * @return {number}
 */

// input is string output int
// what about space and special chars
// does case matter
// can I time more important than space? can I use a cache?
var lengthOfLongestSubstring = function(s) {
  // check input
  if (!s || typeof s !== 'string') {
    return 0;
  }

  if (s.length < 2) {
    return 1;
  }

  // charMap
  const charMap = {};

  // max substr count
  let max = 0;
  // ref duplicate index
  let dupIdx = 0;

  // loop through string
  const strLength = s.length;
  for (let i = 0; i < strLength; i++) {
    // ref char for readability
    const char = s[i];
    // check charMap
    const mapIdx = charMap[char];
    if (mapIdx !== undefined) {
      const currStr = s.substr(mapIdx, i - mapIdx);
      if (currStr.length > max) {
        max = currStr.length;
      }
      // move to next non dup index;
      dupIdx = mapIdx + 1;
    }

    // update charMap with new index
    charMap[char] = i;
  }

  // after loop check last dup index to see if it is greater than max
  const lastCheck = s.substr(dupIdx);
  if (lastCheck.length > max) {
    return lastCheck.length;
  }
  return max;
};


// sliding window
// input str output number
/*
    seen: {t: 0, h: 1, i: 4, s: 5, a: 6, w: 7, e: 8}
    longestStr: 4
*/
function findLongestSubstring(str){
  // check input type string, no params
//   pointers
let start = 0;
let end = 0;
// cache
let seen = {};
// longest substring int
let longestStr = 0;
// loop to end of string
while (end < str.length) {
    // check seen to see if char exist
    const char = str[end];
    if (seen[char]) {
        // move start to end
      start = Math.max(start, seen[char]);
    }
    // check longest substring
        longestStr = Math.max(longestStr, end - start);
    // update seen
    seen[char] = end;
    end++;
}
// return longest string
return longestStr;
}
