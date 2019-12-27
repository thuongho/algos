const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// input array int output array int
function bubbleSort(array) {
  // check input
  // outside loop that is a count down
  for (let i = array.length - 1; i > 0; i--) {
    // second loop to compare the number to the right with the left
    for (let j = 0; j < i; j++) {
      // current and current + 1
      // swap if left is bigger than right
      if (array[j] > array[j + 1]) {
        // ref bigger number
        const largerNum = array[j];
        // set left to right
        array[j] = array[j + 1];
        // set right to biggest
        array[j + 1] = largerNum;
      }
    }
  }
  return array;
} // O(n^2) Time O(1) space

bubbleSort(numbers);
console.log(numbers);
