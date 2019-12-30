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