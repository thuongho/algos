const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

/**
 *  p                               sw
 * [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
 *                                      i
 * **/

function quickSort(arr, left=0, right=arr.length) {
  if (left < right) {
    let pivot = pivotHelper(arr);
    // left
    quickSort(arr, left, pivot - 1);
    // right
    quickSort(arr, pivot+1, right);
  }
  return arr;
}

function pivotHelper(arr, start=0, end=arr.length) {
  const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}