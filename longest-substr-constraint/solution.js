/**
 * lib can be ['a', 'b', 'c']
 * str: 'astdbefccaoefb'
 * longestStr: 'astdbefc'
 * longest: 8
 * **/
/**
 *     i
 * i: 'astdbefccaoefb'
 * longest: 0
 * seen: { a: 0, b: 4, c: 7}
 * **/
function longestSubstringWithConstraint(str, lib) {
  const fastLib = mapLibrary(lib);
  let seen = {};
  let longest = 0;
  let start = -Infinity;
  const length = str.length;

  // debugger;
  for (let i = 0; i < length; i++) {
    const letter = str[i];
    if (!fastLib[letter]) continue;

    if (seen[letter]) {
      // filter out indices smaller than the current
      seen = removeSmallerIndices(seen, seen[letter]);
    }
    // if current letter substr includes all the other letters
    const allLetters = Object.keys(seen);
    if (allLetters.length + 1 === lib.length) {
      const otherIndices = getOtherLettersIndices(seen, letter);
      start = getMinIndex(otherIndices);
      // longest
      longest = Math.max(longest, i + 1 - start);
    }
    
    seen[letter] = i;
    lastLetter = letter;
  }
  return longest;
}

function removeSmallerIndices(lib, num) {
  const newLib = {};
  for (let i in lib) {
    if (lib[i] >= num) {
      newLib[i] = lib[i];
    }
  }
  return newLib;
}

function getOtherLettersIndices(lib, letter) {
  const otherLetters = Object.keys(lib).filter(char => char !== letter);
  return otherLetters.map(item => lib[item]);
}

function getMinIndex(arr) {
  return Math.min.apply(null, arr);
}

function mapLibrary(arr) {
  const lib = {};
  arr.forEach(char => lib[char] = true);
  return lib;
}