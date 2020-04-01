const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(arr1, arr2) {
  let left = 0;
  let right = 0;
  let sorted = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      sorted.push(arr1[left]);
      left++;
    } else {
      sorted.push(arr2[right]);
      right++;
    }
  }

  return [...sorted, ...arr1.slice(left), ...arr2.slice(right)];
}