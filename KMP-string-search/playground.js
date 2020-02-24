/***
 * https://www.youtube.com/watch?v=GTJr8OvyEVQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8
 * https://www.youtube.com/watch?v=cH-5KcgUcOE
***/
// Knutt-Morris-Pratt String Search
function searchByKMP(str, pattern) {
  // match counter
  // lps array
  // pointers for str and pattern i j
  // loop through str and check against pattern
  // match increment both points
  // full match record count
  // no match, use lps pattern index value to determine index to start on pattern
}

// longest prefix suffix
// abcabx
// [0,0,0,1,2,0]
// i: str, o: arr
function getLPS(str) {
  // lps arr
  // index array based on suffix found in prefix
  // pointers start and end
  // 0 if end doesn't match start
  // increment if end match start
  // if end stops matching, use value of previous index to determine value
  // return lps arr
}