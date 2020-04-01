function pivotHelper(arr, start=0, end=arr.length) {
  const swap = (arr, i1, i2) => [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
  let swapIdx = start;
  let pivot = arr[start];

  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left=0, right=arr.length) {
  if (left < right) {
    let pivotIdx = pivotHelper(arr, left, right);

    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx+ 1, right);
  }
  return arr;
}