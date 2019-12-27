const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// input is an array of int output is an array of int sorted
function insertionSort(array) {
  // check input
  if (!array) {
    return;
  }
  // less 2 return array
  if (array.length < 2) {
    return array;
  }
  // starting from left iterate to the right
  for (let i = 0; i < array.length; i++) {
    // if right is smaller than left
    // ref to smallest int
    let min = array[i];
    // ref to smallest index
    let minIndex = i;
    // inner loop right to left to swap the smallest
    for (let j = i; j >= 0; j--) {
      if (array[j] > array[j + 1]) {
        min = array[j + 1];
        array[j + 1] = array[j];
        array[j] = min;
        minIndex = j;
      }
    }
  }
  return array;
} // O(1) space O(n^2)

insertionSort(numbers);
console.log(numbers);

// https://repl.it/@aneagoie/insertionSort

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//   const length = array.length;
// 	for (let i = 0; i < length; i++) {
// 		if (array[i] < array[0]) {
//       //move number to the first position
//       array.unshift(array.splice(i,1)[0]);
//     } else {
//       // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//       if (array[i] < array[i-1]) {
//         //find where number should go
//         for (var j = 1; j < i; j++) {
//           if (array[i] >= array[j-1] && array[i] < array[j]) {
//             //move number to the right spot
//             array.splice(j,0,array.splice(i,1)[0]);
//           }
//         }
//       }
//     }
// 	}
// }

// insertionSort(numbers);
// console.log(numbers);