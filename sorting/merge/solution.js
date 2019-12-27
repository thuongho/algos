const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// input arr of int output sorted array of int
function mergeSort (array) {
  // check input
  if (array.length === 1) {
    return array
  }
  // ref half length
  const half = Math.floor(array.length / 2);
  // Split Array in into right and left
  const left = array.slice(0, half);
  const right = array.slice(half);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// input array1 and array 2
// [5, 7] [1, 6]
function merge(left, right){
  console.log('l', left);
  console.log('r', right);
  // results array
  const results = [];
  // loop through left and check with right
  // pointer for left and right
  let leftPt = 0;
  let rightPt = 0;
  while (leftPt < left.length && rightPt < right.length) {
    // push smallest into array
    if (left[leftPt] < right[rightPt]) {
      results.push(left[leftPt]);
      leftPt++;
    } else {
      results.push(right[rightPt]);
      rightPt++;
    }
  }
  // return array
  return [...results, ...left.slice(leftPt), ...right.slice(rightPt)];
} // O(n log n) Time O(n) space


const answer = mergeSort(numbers);
console.log(answer);