
// i: str word, str o: boolean
function OneEditApart(st1, st2) {
  // check input
  if (!st1 || !st2) return false;
  if (st1 === st2) return true;
  // get length and get diff >2 return false
  if (Math.abs(st1.length - st2.length) > 1) return false;
  let strike = 0;
  // pointers 
  // first second
  let first = 0;
  let second = 0;
  // shortest
  let shortest = st1;
  // longest
  let longest = st2;
  if (st1.length > st2.length) {
    shortest = st2;
    longest = st1;
  }
  // loop through shortest
  while (first < shortest.length) {
    // compare first to second
    // if not the same
    if (shortest[first] !== longest[second]) {
      if (shortest.length !== longest.length) {
        // increment right by one
        second++;
        // if not the same return false
        if (shortest[first] !== longest[second]) return false;
      } else if (strike === 0) {
        strike++;
      } else {
        return false;
      }
    }
    first++;
    second++;
  }
  return true;
}
// O(n) O(1)