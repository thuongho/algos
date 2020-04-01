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

/**
 *  drawing board
 *     s
 *  "pwwkew"
 *       i
 * longest: 3
 * seen: {p: 1, w: 3, k: 4, e: 5}
 * **/
// i: str o: number
var lengthOfLongestSubstring = function(s) {
  // check input
  let start = 0;
  let seen = {};
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    // seen
    if (seen[letter]) {
      start = Math.max(start, seen[letter]);
    }
    longest = Math.max(longest, i + 1 - start);
    seen[letter] = i + 1;
  }
  return longest;
};
// O(n) O(n)

