/**
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space? 
**/
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// i: string, string o: boolean
// stack O(n) O(n)
// substr O(n) O(1)
var backspaceCompare = function(S, T) {
  // check inputs
  if (!S || !T) return;
  // strS
  const strS = buildStr(S);
  // strT
  const strT = buildStr(T);
  return strS === strT;
};
// O(n) O(1)

function buildStr(S) {
  let str = '';
  // loop str
  for (let char of S) {
    // char === # substr
    if (char === '#') {
      str = str.substring(0, str.length - 1);
    } else {
      // otherwise concat
      str += char;
    }
  }
  // return str
  return str;
}
// O(n) O(1)
