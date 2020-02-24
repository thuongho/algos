const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// optimize with noSwap boolean
// i: arr, o: arr sorted
function bubbleSort(array) {
  let noSwap = true;
  // loop length to 0
  for (let o = array.length - 1; o >= 0; o--) {
    noSwap = true;
    // inner loop 0 to outer i
    for (let i = 0; i <= o; i++) {
      // swap if left is larger than right
      const left = array[i];
      const right = array[i + 1];
      if (left > right) {
        swap(array, i, i+1);
        noSwap = false;
      }
    }
    if (noSwap) break;
    console.log('array', array);
  }
  // return array
  return array;
}  // O(n^2)

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

bubbleSort(numbers);
console.log(numbers);