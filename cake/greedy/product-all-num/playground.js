/**
You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution!
*/
/**
[1, 7, 3, 4, 2]
[21, 12, 8, 2, 7]
[6,28]
[21, 12, 4, 7]
[84, 12, 28,21]
**/
function getProductsOfAllIntsExceptAtIndex(intArray) {

  // Make a list of the products
  if (intArray.length < 2) throw new Error('must have at least 2 numbers.')
  // length of intArr
  const size = intArray.length;
  // final array start with intArray index 0
  const finalArr = [];
  let productSoFar = 1;
  // loop forward from index 1
  for (let i = 0; i < size; i++) {
    // final array at i is i-1 multiply current number
    finalArr[i] = productSoFar;
    productSoFar *= intArray[i];
  }
  
  productSoFar = 1;
  // loop backwards
  for (let i = size - 1; i >= 0; i--) {
    // final array at i is intarr - 1
    finalArr[i] *= productSoFar;
    productSoFar *= intArray[i];
  }
  
  // return final array
  return finalArr;
}
