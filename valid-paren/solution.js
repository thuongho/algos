/**
 * @param {string} s
 * @return {boolean}
 */

// input str output boolean
// what's the goal, is it time or space
// input str output boolean
var isValid = function(s) {
  // check input type string, even number, not string
  if (typeof s !== 'string' || s.length % 2 !== 0) {
    return false;
  }
  // library of counter parts
  const leftParen = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  const counterParts = [];
  // array to hold missing partners (stack)

  // iterate through the string starting from left
  // readability
  for (let char of s) {
    // check for non paren
    // if (!['(', ')', '{', '}', '[', ']'].includes(char)) {
    //     return false;
    // }
    // check with library on which I need 
    // if left then add counter part to array
    if (leftParen[char]) {
      counterParts.push(leftParen[char]);
    } else {
      // otherwise pop array and check if equal
      if (counterParts.pop() !== char) {
        return false;
      }
    }
  }
  // return false if not equal
  if (counterParts.length) {
    return false;
  }
  // return true
  return true;
};  // O(n) O(n)