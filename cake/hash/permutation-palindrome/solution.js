/**
Our approach is to check that each character appears an even number of times, allowing for only one character to appear an odd number of times (a middle character). This is enough to determine if a permutation of the input string is a palindrome.

We iterate through each character in the input string, keeping track of the characters we’ve seen an odd number of times using a set unpairedCharacters.

As we iterate through the characters in the input string:

If the character is not in unpairedCharacters, we add it.
If the character is already in unpairedCharacters, we remove it.
Finally, we just need to check if less than two characters don’t have a pair.

Complexity
O(n)O(n) time, since we're making one iteration through the nn characters in the string.

Our unpairedCharacters set is the only thing taking up non-constant space. We could say our space cost is O(n)O(n) as well, since the set of unique characters is less than or equal to nn. But we can also look at it this way: there are only so many different characters. How many? The ASCII character set has just 128 different characters (standard english letters and punctuation), while Unicode has 110,000 (supporting several languages and some icons/symbols). We might want to treat our number of possible characters in our character set as another variable kk and say our space complexity is O(k)O(k). Or we might want to just treat it as a constant, and say our space complexity is O(1)O(1).
*/
function hasPalindromePermutation(theString) {

  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}