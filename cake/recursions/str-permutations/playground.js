/**
Write a recursive function for generating all permutations of an input string. Return them as a set.

Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.
*/
// i: str o: set
// c ats
function getPermutations(string) {
  // Generate all permutations of the input string
  // set will split up a string to each char if not in array
  if (string.length <= 1) return new Set([string]);

  const stringMinusFirstChar = string.substring(1);
  const firstChar = string[0];
  const permutationsOfAllCharsMinusFirst = getPermutations(
    stringMinusFirstChar
  );

  const permutations = new Set();

  permutationsOfAllCharsMinusFirst.forEach((permutation) => {
    for (let i = 0; i <= permutation.length; i++) {
      // left + firstChar + right
      const newPermuation =
        permutation.substring(0, i) + firstChar + permutation.substring(i);
      permutations.add(newPermuation);
    }
  });

  return permutations;
}
