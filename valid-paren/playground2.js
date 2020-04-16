/**
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.
Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True

Note:
The string size will be in the range [1, 100].
**/

/**
 * @param {string} s
 * @return {boolean}
 */
// i: str o: boolean
// greedy
var checkValidString = function(s) {
  // check input
  if (s === undefined) return false;
  // high
  // low
  let low = high = 0;
  // loop str
  for (let char of s) {
    // left paren
    if (char === '(') {
      // increment low and high
      low++;
      high++;
    // right paren
    } else if (char === ')') {
      // decrease low and high
      low--;
      high--;
    // wildcard
    } else {
      // decrease low
      low--;
      // increase high
      high++;
    }
    // false if high is neg
    if (high < 0) return false;
    // low reset to zero on negative
    low = Math.max(low, 0);
  }
  // compare low to zero
  return low === 0;
};


// "(())((())()()(*)(*()(())())())()()((()())((()))(*"
// "((*)(*))((*"
// var checkValidString = function(s) {
//   // check input
//   if (!s) return;
//   // wildcard count
//   let wildcardCount = 0;
//   // balance
//   let balance = 0;
//   // loop
//   for (let char of s) {
//     // left paren
//     if (char === '(') {
//       balance--;
//     } else if (char === ')') {
//     // right paren
//       // positive bal and zero wildcard return false
//       balance++;
//       if (balance === 0) {
//         wildcardCount = 0;
//       }
//       if (balance > 0 && wildcardCount === 0) return false;
//     } else {
//     // whild card
//       wildcardCount++;
//     }
//   }
//   // zero bal true
//   if (balance === 0) return true;
//   // positive bal equal to wildcard is true
//   if (balance !== 0 && wildcardCount >= Math.abs(balance)) return true;
//   // false
//   return false;
// };
// O(n) O(1)