// pivot helper
// take arr and a pivot, move that pivot to the right index
// to the left of the pivot is smaller and right is larger unordered

(function() {
  const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

  // i: arr o: arr
  function pivotHelper(arr, start=0, end= arr.length) {
    const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    // pointers less greater
    let pivot = arr[start];
    let swapIdx = start;
    // loop through array
    for (let i = start + 1; i < end; i++) {
      // check number of items less than pivot
      if (arr[i] < pivot) {
        swapIdx++;
        swap(arr, i, swapIdx);
      }
    }
    // swap pivot with number of less than to get correct position
    swap(arr, start, swapIdx);
    // return 
    return swapIdx;
  }

  function quickSort(arr, left=0, right=arr.length) {
    if (left < right) {
      let pivotIdx = pivotHelper(arr, left, right);
      // left
      quickSort(arr, left, pivotIdx - 1);
      // right
      quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
  }

  quickSort(numbers);
})();