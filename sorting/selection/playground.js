(function() {
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// find the min and swap with the start
// i: arr, o: sorted arr
function selectionSort(array) {
  const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];

  // loop arr
  for (let o = 0; o < array.length; o++) {
    // min tracker
    let min = o;
    let noSwap = true;
    // inner loop n update min index
    for (let i = o + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
        noSwap = false;
      }
    }
    // end of loop we swap
    if (min !== o) {
      swap(array, o, min);
    }
    console.log('array', array, noSwap);
    if (noSwap) break;
  }
  // return arr
  return array;
}

selectionSort(numbers);
})();