// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//should return true.
// assume only chars?
// input are the arrays, output is the bool
// is it always only 2 params

function containsCommonItems(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }
  const map = {}; //O(a) Space
  // loop through array1 to map it
  //const array1 = ['a', 'b', 'c', 'x'];
  // only map once so check for dups
  // do we care for readability
  for (let char of arr1) { //O(a) Time
    if (!map[char]) {
      map[char] = true;
    }
  }
  console.log(map);
  // map = {'a', 'b', 'c', 'x'}
  // loop through array2 to check against the map
  //const array2 = ['z', 'y', 'x'];
  for (let char of arr2) {
  // if map contains char then return true
    if (map[char]) {
      return true;  // found a match
    }
  }
  return false;
  // return false if no match
}
// O(a + b) Time Complexity
// O(a) Space Complexity

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
//should return false.
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
//should return true.
// containsCommonItems(array1, array2);
containsCommonItems();
containsCommonItems(null);
containsCommonItems(array1);
containsCommonItems(undefined);