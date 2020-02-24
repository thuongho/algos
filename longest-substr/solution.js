/**
 * @param {string} s
 * @return {number}
 */

/********************
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring
 * 
 * ******************/

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

  // running substr lib
  // max substr count
  let max = 0;
  // current substr checker
  let strChecker = '';
  // for loop for readability
  for (let char of s) {
    // check with current substr checker to see if letter exists
    // if not
    // const matched = strChecker.match(char);
    // if (!matched) {
    if (!strChecker.includes(char)) {
      // add letter to substr checker
      strChecker += char;
    } else {
      // if it exists in checker
      // check if substr length is greater than max
      if (strChecker.length > max) {
        console.log('strChecker', strChecker);
        max = strChecker.length;
      }
      const matched = strChecker.match(char);
      // find position of char and reset strChecker to new substring
      strChecker = strChecker.substr(matched.index + 1) + char;
    }
  }
  // update max if length is greater than max
  // if greater than max add to lib with length as count
  // after loop check substr checker to see if it is greater than max
  if (strChecker.length > max) {
    console.log('final strChecker', strChecker);
    return strChecker.length;
  }
  return max;
};  // O(n) time O(1) space


// sliding window pattern
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log('char', char);
    console.log('seen', seen);
    if (seen[char]) {
      start = Math.max(start, seen[char]);
      console.log('start', start);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    console.log('longest', longest);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log('seen', seen);
  }
  return longest;
}

// findLongestSubstring('thisisawesome');