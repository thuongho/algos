/**
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"

If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.
**/

function hasPalindromePermutation(theString) {

  // Check if any permutation of the input is a palindrome
  // check input
  if (theString === undefined) return false;
  // seen hash
  const seen = {};
  // tracker
  let balance = 0;
  // loop theString
  for (let char of theString) {
    // not in seen
    if (!seen[char]) {
      seen[char] = true;
      balance++;
    } else {
      // seen
        // decrease tracker
      balance--;
      seen[char] = false;
    }
  }
  
  // check tracker to be 0 or 1
  return balance > 1 ? false : true;

  // return false;
}
// O(n) O(n)
