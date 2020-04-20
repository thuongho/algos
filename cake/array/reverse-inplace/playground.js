/**
Write a function that takes an array of characters and reverses the letters in place.
**/
// i: arr o: arr
const reverseArrayInPlace = (arr) => {
  // check input
  if (!arr) return;
  // pointers
  // start
  let start = 0;
  // end
  let end = arr.length - 1;
  // while start less end
  while (start < end) {
    // temp hold start
    const lastStart = arr[start];
    // start end
    arr[start] = arr[end];
    // end temp
    arr[end] = lastStart;
    // increment start
    start++;
    // decrease end
    end--;
  }
  // return arr
  return arr;
};
// O(n) O(1)
