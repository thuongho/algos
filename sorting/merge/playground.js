function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midpoint = Math.floor(arr.length / 2);
  let left = arr.slice(0, midpoint);
  let right = arr.slice(midpoint);
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  let final = [];
  let leftPt = 0;
  let rightPt = 0;
  while(leftPt < left.length || rightPt < right.length) {
    if (left[leftPt] < right[rightPt]) {
      final.push(left[leftPt]);
      leftPt++;
    } else {
      final.push(right[rightPt]);
      rightPt++;
    }
  }
  return [...final, ...left.slice(leftPt), ...right.slice(rightPt)];
}