
// i: arr alpha, arr unsorted o: arr sorted
/**
 * ['aa', 'ab', 'bc', 'abc', '']
 * [aa, ab]      [bc, abc, '']
 * [aa] [ab]     [bc] [abc, '']
 *                     [abc] ['']
 * [aa] [ab]     [bc] ['', abc]
 * [ab, aa]      ['', bc, abc]
 * ['', bc, ab, abc, aa]
 * 
 * 
 * [b,c,a], ['aa', 'ab', 'bc', 'abc', '']
 * map {'':0, b: 1, c: 2, a: 3}
**/
function sortByCustomAZ(alpha, sentences) {
  // check input
  // map alpha with index
  const alphaMap = mapAlphaBet(alpha);
  // helper recursive method
  const split = (arr) => {
    // base case
    if (arr.length < 2) return arr;
    // split into halfs using midpoint
    const mid = Math.floor(arr.length / 2);
    // left
    const left = arr.slice(0, mid);
    // right
    const right = arr.slice(mid);
    return merge(
      split(left),
      split(right),
      alphaMap
    );
  };

  split(sentences);

}
// O(NlogN) O(n)
function mapAlphaBet(alpha) {
  const alphaMap = {
    '': 0
  };
  for (let i = 1; i <= alpha.length; i++) {
    const char = alpha[i];
    alphaMap[char] = i;
  }
  return alphaMap;
}
function merge(arr1, arr2, map) {
  const final = [];
  // pointers
  let left = 0;
  let right = 0;

  let char1Idx = 0;
  let char2Idx = 0;
  while (left < arr1.length && right < arr2.length) {
    const word1 = arr1[left];
    const word2 = arr2[right];
    let char1 = word1[char1Idx];
    let char2 = word2[char2Idx];
    if (map[char1] < map[char2]) {
      final.push(char1);
      left++;
      char1Idx = 0;
      char2Idx = 0;
    } else if (map[char1] > map[char2]) {
      final.push(char2);
      right++;
      char1Idx = 0;
      char2Idx = 0;
    } else {
      char1Idx++;
      char2Idx++;
    }
  }

  return [...final, ...arr1.slice(left), ...arr2.slice(right)];
}