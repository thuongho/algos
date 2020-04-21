/**
Given an array of integers, find the highest product you can get from three of the integers.

The input arrayOfInts will always have at least three integers.
*/
// i: int arr (min 3 length) o: int (prod of 3)
// [7, 2, 5, 4, 8]
function highestProductOf3(arrayOfInts) {

  // Calculate the highest product of three numbers
  // throw error if length less than 3
  if (arrayOfInts.length < 3) throw new Error('Array must have at least 3 numbers.');
  // maxProduct starting with first 3 numbers
  let currentThree = arrayOfInts.slice(0,3);
  currentThree.sort((a,b) => a - b);
  let maxProductOf3 = currentThree.reduce((a,b) => a * b);
  let highest = currentThree[2];
  let lowest = currentThree[0];
  let maxProductOf2 = maxProductOf3 / lowest;
  let minProductOf2 = maxProductOf3 / highest;
  // loop arrayOfInts
  for (let i = 3; i < arrayOfInts.length; i++) {
    const currentNum = arrayOfInts[i];
    const smallestNum = currentThree[0];
    if (currentNum > smallestNum) {
      maxProductOf3 = (maxProduct / smallestNum) * currentNum;
      currentThree[0] = currentNum;
      currentThree.sort((a,b) => a - b);
      highest = currentThree[2];
      maxProductOf2 = Math.max(maxProductOf2, currentThree[1] * highest);
    } else {
      minProductOf2 = Math.min(minProductOf2, lowest * currentNum);
      lowest = Math.min(lowest, currentNum);
    }
  }
  // return maxProduct
  return (minProductOf2 > maxProductOf2) ? minProductOf2 * highest : maxProductOf3;
}
