/**
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 
Constraints:

1 <= text1.length <= 1000
1 <= text2.length <= 1000
The input strings consist of lowercase English characters only.
*/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const text1Len = text1.length;
  const text2Len = text2.length;
  const dp = buildMatrix(text1Len, text2Len + 1);

  for (let i = 1; i <= text1Len; i++) {
    for (let j = 1; j <= text2Len; j++) {
      const isCharMatch = text1[i - 1] === text2[j - 1];
      dp[i][j] = isCharMatch
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[text1Len][text2Len];
};

function buildMatrix(n, m) {
  let matrix = [];
  for (let i = 0; i <= n; i++) {
    matrix.push(new Array(m).fill(0));
  }
  return matrix;
}
// var longestCommonSubsequence = function (text1, text2) {
//   const mapOfText1 = mapCharToIndex(text1);
//   let maxSubsequence = 0;
//   let prevText1Index;
//   for (let char of text2) {
//     if (mapOfText1[char]) {
//       const commonText1Index = mapOfText1[char].pop();
//       if (prevText1Index === undefined || commonText1Index > prevText1Index) {
//         maxSubsequence++;
//       }
//       prevText1Index = commonText1Index;
//     }
//   }
//   return maxSubsequence;
// };

// function mapCharToIndex(text) {
//   const cache = {};
//   let index = text.length - 1;
//   while (index >= 0) {
//     const letter = text[index];
//     if (!cache[letter]) {
//       cache[letter] = [];
//     }
//     cache[letter].push(index);
//     index--;
//   }
//   return cache;
// }
