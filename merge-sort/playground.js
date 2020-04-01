mergeSortArrays([0, 3, 4, 31], [4, 6, 30]);
// [0, 3, 4, 4, 6, 30]

function mergeSort(arr1, arr2) {
  let left = 0;
  let right = 0;
  const merged = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      merged.push(arr1[left]);
      left++;
    } else {
      merged.push(arr2[right]);
      right++;
    }
  }
  return [...merged, ...arr1.slice(left), ...arr2.slice(right)];
}