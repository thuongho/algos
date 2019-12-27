const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// input is array of numbers, output is array of numbers int
function selectionSort(array) {
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // second loop to compare the numbers
    // ref smallest index
    let min = i;
    for (let j = i; j < array.length; j++) {
      // check right smaller than left
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // swap smallest with the outer index
    // ref smallest number
    const smallestNum = array[min];
    array[min] = array[i];
    array[i] = smallestNum;
  }
  return array;
} // O(n^2) Time O(1) Space

selectionSort(numbers);
