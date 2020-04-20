/**
Solution
We swap the first and last characters, then the second and second-to-last characters, and so on until we reach the middle.
**/
function reverse(arrayOfChars) {

  let leftIndex = 0;
  let rightIndex = arrayOfChars.length - 1;

  while (leftIndex < rightIndex) {

    // Swap characters
    const temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
// O(n) time and O(1)O(1) space.