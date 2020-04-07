/**
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
**/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// i: string[] o: array
var groupAnagrams = function(strs) {
  // check inputs
  if (!strs) return;
  // cache
  const cache = {};
  // loop through strs
  for (word of strs) {
    // sort word
    const sortedWord = sortWordAscending(word);
    // not in cache create empty array
    if (!cache[sortedWord]) cache[sortedWord] = [];
    // push word to array
    cache[sortedWord].push(word);
  }
  // loop through cache and push to final array
  return Object.values(cache);
};
// O(n * m) O(n)

function sortWordAscending(word) {
  return word.split('').sort((a,b) => a < b).join('');
}
// O(m) O(m)